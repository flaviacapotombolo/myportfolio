import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';


class Landing extends Component {
    render() {
        return (
            <div style={{ width: '100%', margin: 'auto' }}>
                <Grid className="landing-grid">
                    <Cell col={12}>
                        <img
                            src="https://www.shareicon.net/data/512x512/2016/05/24/770090_people_512x512.png"
                            alt="avatar"
                            className="avatar-img"
                        />
                        <div className="banner-text">
                            <h1>Front-End Developer</h1>
                            <hr />

                            <p>HTML/CSS | Bootstrap | JavaScript | React | PHP</p>

                            <div className="social-links">
                                {/* Linkedin */}
                                <a href="https://www.linkedin.com/in/flaviacapotombolo" rel="noopener noreferrer" target="_blank">
                                    <i className="fa fa-linkedin-square" aria-hidden="true" />
                                </a>

                            </div>
                        </div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Landing;