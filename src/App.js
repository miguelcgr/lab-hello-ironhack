//create component
import React from 'react';
import './App.css'

import List from "./List";
import Welcome from './Welcome';

class App extends React.Component {
	render() {
		return(
			<div className = 'App'>
               
               <Welcome />
               <List />
            </div>
		)
	}
}
export default App