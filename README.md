This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# This is demo project for optimal structure of react and redux

All the necessary dependencies has been installed you can just clone it, remove the extra components and start working on it.

```
npm i

npm start
```

## React Structure

Basically the concept is to separate the logical Container and Presentational view and bundle all the related files together.

```

my-app
├── build
├── node_modules
├── public
│   ├── favicon.ico
│   ├── index.html
│   └── manifest.json
├── src
│   ├── assets
│   │   └──images
│   │      └── logo.svg
│   ├── components
│   │   ├── app
│   │   │   ├── app.css
│   │   │   ├── app.js
│   │   │   └── app.test.js
│   │   └── component-name
│   │        ├── component-name.css
│   │        ├── component-name.scss
│   │        ├── component-name-container.js
│   │        ├── component-name-styles.js
│   │        ├── component-name-view.js
│   │        └── index.js
│   ├── store
│   ├── utils
│   ├── index.css
│   ├── index.js
│   └── service-worker.js
├── .gitignore
├── package.json
└── README.md

```

## Redux Structure

In redux we have store folder in which we have catogries the users according to which we are managing the application data across the components.

```
store
  ├── _common
  ├── _helper
  ├── user
  │    ├── action.js
  │    ├── Constants.js
  │    ├── reducer.js
  │    └── services.js
  └── index.js      
```