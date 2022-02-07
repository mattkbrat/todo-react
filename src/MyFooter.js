import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

export default function MyFooter() {
    return (
        <div>
            <footer className="App-footer">
                <div className="flexcon">
                    <h4 className="mb-3">Single click: toggle; Double click: remove</h4>
                </div>
            </footer>
        </div>
    );
}