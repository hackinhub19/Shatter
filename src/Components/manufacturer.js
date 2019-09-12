import React, { Component } from 'react';
import { Grid, Image } from 'semantic-ui-react'
import { Input } from 'semantic-ui-react'
import { Button, Icon } from 'semantic-ui-react'
import TopBarCompany from './TopbarCompany'
import '../CSS/manufacturer.css'

class Manufacturer extends Component {
    constructor(props) {
        super(props);

    }

    handleSubmit = e => {
        e.preventDefault();
        console.log('Entered');
    }
    render() {
        return (
            <div className="full">
                <div>
                    <TopBarCompany />
                </div>
                
                <div >
                    <Grid centered>
                        <Grid.Row>
                            <Grid.Column width={1}>
                                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                            </Grid.Column>
                            <Grid.Column width={13}>
                                <p>SERIAL NUMBER</p>
                                <Input id='inputCSS' icon='barcode' placeholder='SERIAL NUMBER' className="icon" focus/>
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={1}>
                                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                            </Grid.Column>
                            <Grid.Column width={13}>
                                <p>SERVICE_ID</p>
                                <Input id='inputCSS' icon='barcode' placeholder='SERIAL NUMBER' />
                            </Grid.Column>
                        </Grid.Row>
                        <Grid.Row>
                            <Grid.Column width={1}>
                                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                            </Grid.Column>
                            <Grid.Column width={13}>
                                <p>MOTHERBOARD</p>
                                <Input id='inputCSS' icon='barcode' placeholder='SERIAL NUMBER' />
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column width={1}>
                                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                            </Grid.Column>
                            <Grid.Column width={13}>
                                <p>CPU_ID</p>
                                <Input id='inputCSS' icon='barcode' placeholder='SERIAL NUMBER' />
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column width={1}>
                                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                            </Grid.Column>
                            <Grid.Column width={13}>
                                <p>MEMORY_ID</p>
                                <Input id='inputCSS' icon='barcode' placeholder='SERIAL NUMBER' />
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column width={1}>
                                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                            </Grid.Column>
                            <Grid.Column width={13}>
                                <p>HARD-DISK NUMBER</p>
                                <Input id='inputCSS' icon='barcode' placeholder='SERIAL NUMBER' />
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column width={1}>
                                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                            </Grid.Column>
                            <Grid.Column width={13}>
                                <p>SSD_ID</p>
                                <Input id='inputCSS' icon='barcode' placeholder='SERIAL NUMBER' />
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column width={1}>
                                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                            </Grid.Column>
                            <Grid.Column width={13}>
                                <p>GRAPHICS_ID</p>
                                <Input id='inputCSS' icon='barcode' placeholder='SERIAL NUMBER' />
                            </Grid.Column>
                        </Grid.Row>

                        <Grid.Row>
                            <Grid.Column width={1}>
                                <Image src='https://react.semantic-ui.com/images/wireframe/image.png' />
                            </Grid.Column>
                            <Grid.Column width={13}>
                                <p>BATTERY_ID</p>
                                <Input id='inputCSS' icon='barcode' placeholder='SERIAL NUMBER' />
                            </Grid.Column>
                        </Grid.Row>
                        {/* <Grid.Column width={6}>
                            <Button animated color='olive' className="name">
                                <Button.Content visible={this.handleSubmit}>SUBMIT</Button.Content>
                                <Button.Content hidden>
                                    <Icon name='arrow right' />
                                </Button.Content>
                            </Button>
                        </Grid.Column> */}
                    </Grid>
                </div>
                <div className="button">
                    
                    <Button primary onClick={this.handleSubmit}>Submit</Button>

                        </div>
            </div>
        );
    }
}

export default Manufacturer;