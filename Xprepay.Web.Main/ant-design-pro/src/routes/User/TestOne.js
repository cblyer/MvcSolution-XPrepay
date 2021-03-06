import React, { Component } from 'react';
import { connect } from 'dva';
import { Link } from 'dva/router';
import { Form, Input, Tabs, Button, Icon, Checkbox, Row, Col, Alert } from 'antd';
import styles from './Login.less';

//绑定model
@connect(state => ({
    testone: state.testone,
}))
export default class TestOne extends Component {

    state={
        count:90,
    }

    testoneclick = () => {
        this.props.dispatch({
            type: 'testone/test1',
            payload:{
                count:this.state.count
            }
        })
    }

    render() {
        const { testone } = this.props;
        return <div>
            <Button size="large" onClick={this.testoneclick} className={styles.Button} type="primary" >
                测试{testone.text}/{testone.myage}
            </Button></div>
    }
}