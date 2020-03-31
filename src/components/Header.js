import React from 'react'
import {AppBar, Toolbar, Typography} from '@material-ui/core'

export default (props) =>{
    return(
        <AppBar>
            <Toolbar>
                <Typography variant='h6'>{props.text}</Typography>
            </Toolbar>
        </AppBar>
    )
}