import React from 'react';
import './App.css';
import {Grid} from 'semantic-ui-react';


export function GridMod(props) {
    return (<Grid columns={3} divided>
        <Grid.Row>
            <Grid.Column>
                {props.cardap[0]}
            </Grid.Column>
            <Grid.Column>
                {props.cardap[1]}
            </Grid.Column>
            <Grid.Column>
                {props.cardap[2]}
            </Grid.Column>
        </Grid.Row>

        <Grid.Row>
            <Grid.Column>
                {props.cardap[3]}
            </Grid.Column>
            <Grid.Column>
                {props.cardap[4]}
            </Grid.Column>
            <Grid.Column>
                {props.cardap[5]}
            </Grid.Column>
        </Grid.Row>

        <Grid.Row>
            <Grid.Column>
                {props.cardap[6]}
            </Grid.Column>
            <Grid.Column>
                {props.cardap[7]}
            </Grid.Column>
            <Grid.Column>
                {props.cardap[8]}
            </Grid.Column>
        </Grid.Row>

        <Grid.Row>
            <Grid.Column>
                {props.cardap[9]}
            </Grid.Column>
        </Grid.Row>
    </Grid>
    )
}