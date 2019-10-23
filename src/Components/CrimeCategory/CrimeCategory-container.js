import React, { Component } from 'react'
import View from './CrimeCategory-view'
import {connect} from 'react-redux'
import userActions from "../../store/user/action"

class Crime extends Component {
    constructor() {
        super();
        this.state = {
            data: [],
            searchData: [],
            toSearch: ''
        }
    }

    static getDerivedStateFromProps(props,state){
        if (props.categories.success){
            return {
                data: props.categories.data
            }
        }
        if(props.categories.error){
            console.log(props.categories.error)
        }
        return {}
    }

    componentDidMount() {
        this.props.getCategories()
    }


    search = (val) => {
        const toSearch = val.target.value;
        const searchData = this.state.data.filter(item => {
            return item.name.substring(0, toSearch.length).toLowerCase() === toSearch.toLowerCase()
        })
        this.setState({ toSearch, searchData })
    }

    render() {
        const { data, toSearch, searchData } = this.state;
        const list = toSearch ? searchData : data
        console.log('list',list)
        return (
            <View search={this.search} toSearch={toSearch} list={list} />
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        getCategories: () => dispatch(userActions.getCategories())
    }
}

const mapStateToProps = state => {
    return{
        categories: state.user.getCategories
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Crime)