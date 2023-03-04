import React from 'react';
import Notes from './components/Notes/Notes';
import Accessbility from './components/RightSideBar/Accessbility';
import Controls from './components/LeftSideBar/Controls';
import './App.css';

const App = () => {
    return (
        <div className="container-fluid  my-5">
            <div className="row">
                <div className="col d-flex flex-column align-items-center">
                    <Controls />
                </div>
                <div className="col p-0">
                    <Notes />
                </div>
                <div className="col d-flex flex-column align-items-center ">
                    <Accessbility />
                </div>
            </div>
        </div>
    );
};

export default App;
