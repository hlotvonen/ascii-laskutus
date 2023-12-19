import React, { Component } from 'react';
import Inputs from './components/Inputs'
import Render from './components/Render'
import s from './models/inputstore'
import './App.css';
import { PDFExport } from '@progress/kendo-react-pdf';
import {observer} from "mobx-react"

const App = observer(class App extends Component {

  exportPDF = () => {
      this.lasku.save();
  }

// Add this to the render method
  render() {
    return (
      <div className="container">
        <div className="inputsWrapper">
          <div className="blokki">
              <button onClick={this.exportPDF}>( Lataa PDF )</button>
          </div>
          <Inputs />
        </div>
        <PDFExport paperSize={'A4'}
            fileName={s.viit + "_" + s.nimi + "_" + s.mnimi + ".pdf"}
            title={s.viit + "_" + s.nimi + "_" + s.mnimi + ".pdf"}
            subject={s.viit + "_" + s.nimi + "_" + s.mnimi + ".pdf"}
            scale={0.90}
            margin="3mm"
            ref={(r) => this.lasku = r}>
              <div style={{background: s.teema === "musta" || s.teema === "vihreä" ? "black" : "white"}}>
                <Render />
              </div>
         </PDFExport>
         
      </div>
    );
  }
})

export default App;