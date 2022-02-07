import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

export default function MyFooter() {
    return (
        <div>
            <footer className="App-footer">
                <div className="flexcon">
                    <h4 className="mb-3">Click to toggle task's completion state. Double click to remove task</h4>
                </div>
            </footer>
        </div>
    );
}