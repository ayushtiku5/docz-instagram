import React from 'react'
import { theme } from 'docz'

const Theme = (props) => <div style={{backgroundColor: 'red'}}>{props.children}</div>

export default theme()(Theme)