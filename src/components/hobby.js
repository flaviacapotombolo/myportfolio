import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';

class Hobby extends Component {
    render() {
        return (
            <Grid>
                <Cell col={12}>
                    <div style={{ display: 'flex' }}>{this.props.hobby}</div>
                </Cell>
            </Grid>
        );
    }
}

export default Hobby;