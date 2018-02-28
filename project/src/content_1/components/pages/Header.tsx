import * as React from "react";
import { RouteComponentProps } from 'react-router-dom';

interface MatchParams {
    name: string;
}

interface testProps extends RouteComponentProps<MatchParams> {
    match: match<any>
}

interface match<P> {
    params: P;
    isExact: boolean;
    path: string;
    url: string;
}

export class Header extends React.Component<testProps, {}> {
    render() {
        console.log(this.props.match)
        return(
            <header>
                <h1>path :  {this.props.match.path} </h1>
                <h1>url :  {this.props.match.url} </h1>
            </header>
        );
    }
}
        