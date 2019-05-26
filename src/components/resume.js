import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Hobby from './hobby';
import './footer.css';

class Resume extends Component {
    render() {
        return (
            <div>
                <Grid>
                    <Cell col={4}>
                        <div style={{ textAlign: 'center' }}>
                            <img
                                src="https://www.shareicon.net/data/512x512/2016/05/24/770090_people_512x512.png"
                                alt="avatar"
                                style={{ height: '200px' }}
                            />
                        </div>

                        <h2 style={{ paddingTop: '2em' }}>Flavia Capotombolo</h2>
                        <h4 style={{ color: 'grey' }}>Front-End Developer</h4>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <p>Sono una ragazza spigliata, con una forte passione nello sviluppo web.
                            Sono riuscita a passare una selezione di 150 candidati per entrare nel progetto Born2Code.
                            Partecipo a diversi Meetup per tenermi sempre aggiornata su nuovi framework.
                        </p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <h5>Phone</h5>
                        <p>339 2138478</p>
                        <h5>Email</h5>
                        <p>flavia@vuesse.com</p>
                        <h5>Web</h5>
                        <p>www.vuesse.com/flaviacapotombolo</p>
                        <hr style={{ borderTop: '3px solid #833fb2', width: '50%' }} />
                        <h5>Skills</h5>
                        <li>HTML5/CSS</li>
                        <br />
                        <li>Bootstrap</li>
                        <br />
                        <li>JavaScript</li>
                        <br />
                        <li>React</li>
                        <br />
                        <li>PHP</li>
                    </Cell>
                    <Cell className="resume-right-col" col={8}>
                        <h2>Education</h2>
                        <Education
                            startYear={2003}
                            endYear={2008}
                            schoolName={'IIS Gregorio da Catino'}
                            schoolDescription={'Liceo Linguistico'}
                        />
                        <hr style={{ borderTop: '3px solid #e22947' }} />

                        <h2>Experience</h2>
                        <Experience
                            startMonth='gennaio'
                            startYear={2019}
                            endYear={2019}
                            endMonth='aprile'
                            jobName='LUISS Enlabs'
                            jobDescription='Junior Front-End Developer'
                        />

                        <Experience
                            startMonth='novembre'
                            startYear={2018}
                            endYear={2019}
                            endMonth='gennaio'
                            jobName='Lacerba.io'
                            jobDescription='Corso e-learning Full-stack developer'
                        />

                        <Experience
                            startMonth='marzo'
                            startYear={2016}
                            endYear={2019}
                            endMonth='maggio'
                            jobName='Made Corporate'
                            jobDescription='Sviluppatrice Web'
                        />
                        <Experience
                            startMonth='febbraio'
                            startYear={2018}
                            endYear={2018}
                            endMonth='agosto'
                            jobName='Calzaturificio dei Colli srl'
                            jobDescription='Impiegata back office estero'
                        />
                        <Experience
                            startMonth='gennaio'
                            startYear={2017}
                            endYear={2017}
                            endMonth='giugno'
                            jobName='Fer-Energy srl'
                            jobDescription='Impiegata amministrativa'
                        />
                        <Experience
                            startMonth='marzo'
                            startYear={2014}
                            endYear={2016}
                            endMonth='marzo'
                            jobName='GE.SA. srl'
                            jobDescription='Impiegata amministrativa'
                        />

                        <hr style={{ borderTop: '3px solid #e22947' }} />
                        <h2>Hobby</h2>
                        <Hobby
                            hobby='Forte passione per il mondo automobilistico con partecipazione a gare amatoriali sulla pista di Valmontone (RM)'
                        />
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Resume;