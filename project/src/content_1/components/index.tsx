import React, { Component } from 'react';
import { Route,Link,Switch,RouteComponentProps  } from 'react-router-dom';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import '../scss/style.scss'
// import {Header,Article,Footer} from './pages'
import { Article,Footer,Header } from './pages';
export interface HelloProps {compiler:string; framework:string;}

export const Base = () => 
    <main>
        <ul>
            <li> <Link to="/test/header">Header</Link> </li>
            <li> <Link to="/test/article">Article</Link> </li>
            <li> <Link to="/test/footer">Footer</Link> </li>
        </ul>
        <Switch>
            <Route exact path="/test/header" component={Header} />
            <Route exact path="/test/article" component={Article} />
            <Route exact path="/test/footer" component={Footer} />
        </Switch>
    </main>

export default connect()(Base);