import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import './footer.css';

class Projects extends Component {
    constructor(props) {
        super(props);
        this.state = { activeTab: 0 };
    }
    toggleCategories() {
        if (this.state.activeTab === 0) {
            return (
                <div className="projects-grid">
                    {/*Project 1 */}
                    <Card shadow={4} style={{ minWidth: '450', margin: 'auto auto 20px auto' }}>
                        <CardTitle style={{
                            color: '#fff',
                            height: '176px',
                            background: 'url(http://www.dire.it/wp-content/uploads/2019/04/BORNTOCODE1.jpeg)center/cover'
                        }}></CardTitle>
                        <CardText>
                            <b>BORN2CODE: </b>progetto del 2019 sponsorizzato da Groupama, Softlab, Codemotion finalizzato allo sviluppo di un'app utilizzando:
                            <b>HTML/CSS</b>, <b>JS</b>, <b>jQ</b>, <b>React</b>.
                        </CardText>
                        <CardActions border>
                            <Button colored><a href='http://www.romatoday.it/formazione/scuola/born2code-venerdi-12-aprile-la-chiusura-dell-academy-di-coding-di-groupama-assicurazioni.html' target="_blank" rel="noopener noreferrer">BORN2CODE</a></Button>
                        </CardActions>
                        {/*<CardMenu style={{ color: '#99ccff' }}>
                        <IconButton name="share" />
                    </CardMenu> */}
                    </Card >

                    {/*Project 2 */}
                    <Card shadow={4} style={{ minWidth: '450', margin: 'auto auto 20px auto' }}>
                        <CardTitle style={{
                            color: '#fff',
                            height: '176px',
                            background: 'url(http://www.madecorporate.it/wp-content/uploads/2013/10/logomadeweb-e1381747339397.png)center/cover'
                        }}></CardTitle>
                        <CardText>
                            <b>MADE CORPORATE</b> è un sito vetrina sviluppato nel 2016 con una collaborazione durata fino al 2019. La tecnologia utilizzata
                            ha seguito l'esigenza del Cliente con <b>WordPress</b>.
                    </CardText>
                        <CardActions border>
                            <Button colored><a href='http://www.madecorporate.it' target="_blank" rel="noopener noreferrer">MADECORPORATE</a></Button>
                        </CardActions>
                        {/*<CardMenu style={{ color: '#99ccff' }}>
                        <IconButton name="share" />
                    </CardMenu> */}
                    </Card >

                    {/*Project 3*/}
                    <Card shadow={4} style={{ minWidth: '450', margin: 'auto auto 20px auto' }}>
                        <CardTitle style={{
                            color: '#fff',
                            height: '176px',
                            background: 'url(http://www.insiemeinfamiglia.com/wp-content/uploads/2012/05/benvenuta-baby-sitter.jpg)center/cover'
                        }}></CardTitle>
                        <CardText>
                            <b>BABYGOO</b> è un sito sviluppato nel 2016 in colaborazione con VUESSE per la ricerca delle baby sitter utilizzando: <b>HTML</b>, <b>CSS</b>, <b>JavaScript</b>, <b>jQuery</b>, <b>PHP</b>.
                    </CardText>
                        <CardActions border>
                            <Button colored><a href='http://www.vuesse.com/babygoo/' target="_blank" rel="noopener noreferrer">BABYGOO</a></Button>
                        </CardActions>
                        {/*<CardMenu style={{ color: '#99ccff' }}>
                        <IconButton name="share" />
                    </CardMenu> */}
                    </Card >
                </div>

            )
        }
    }


    render() {
        return (
            <div className="category-tabs">
                <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
                    <Tab>Projects</Tab>
                </Tabs>

                <Grid>
                    <Cell col={12}>
                        <div className="content">{this.toggleCategories()}</div>
                    </Cell>
                </Grid>
            </div>
        );
    }
}

export default Projects;