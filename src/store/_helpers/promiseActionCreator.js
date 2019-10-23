

import syncActionCreator from "./syncActionCreator";

export default function promiseActionCreator(promiseToExecute, moduleName) {
  moduleName = moduleName.toUpperCase();
  const requestAction = syncActionCreator(`${moduleName}_REQUEST`);
  const successAction = syncActionCreator(`${moduleName}_SUCCESS`, "payload");
  const failedAction = syncActionCreator(`${moduleName}_FAILED`, "error");
  const notFoundAction = syncActionCreator(`${moduleName}_NOT_FOUND`, "error");

  return async dispatch => {
    console.log(`${moduleName}_REQUEST`);
    dispatch(requestAction());
    try {
      const response = await promiseToExecute;
      // console.log('response ==>',response)
      // if (response.success) {
      if (response.length) {
        console.log(`${moduleName}_SUCCESS`);
        dispatch(successAction(response));
      } else {
        console.log(`${moduleName}_FAILED`);
        dispatch(failedAction({ error: response.message }));
      }
    } catch (error) {
      console.log(`${moduleName}_FAILED`);
      dispatch(failedAction({ error: error }));
    }
  };
}
