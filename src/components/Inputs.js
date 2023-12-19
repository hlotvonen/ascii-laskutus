import React, { Component } from 'react';
import {observer} from "mobx-react"
import inputStore from '../models/inputstore'

const Inputs = observer(class Inputs extends Component {
  render() {
    return (
    	<div className="inputs">
    		<div className="blokki">
    			<h3>( Asetukset )</h3>
				<div className="inputRow">
					<label>Väriteema: </label>
					<select
					value={inputStore.teema}
					onChange={e => inputStore.teema = e.target.value}
					>
						<option value="valkoinen">Valkoinen</option>
						<option defaultValue value="musta">Musta</option>
						<option value="vihreä">Vihreä</option>
					</select>
				</div>
				<div className="inputRow">
					<label>Logo: </label>
					<input
						type="checkbox" 
						value={inputStore.logo}
						onChange={e => inputStore.logo = !inputStore.logo}
					/>
				</div>
    		</div>

    		<div className="blokki">
	    		<h3>( Laskuttajan tiedot )</h3>
				<div className="inputRow">
					<label>Nimi: </label>
					<input
						type="text" 
						placeholder="[................]"
						value={inputStore.nimi}
						onChange={e => inputStore.nimi = e.target.value}
						maxLength="36"
					/>
				</div>
				<div className="inputRow">
					<label>Osoiterivi 1: </label>
					<input
						type="text" 
						placeholder="[................]"
						value={inputStore.osr1}
						onChange={e => inputStore.osr1 = e.target.value}
						maxLength="76"
					/>
				</div>
				<div className="inputRow">
					<label>Osoiterivi 2: </label>
					<input
						type="text" 
						placeholder="[................]"
						value={inputStore.osr2}
						onChange={e => inputStore.osr2 = e.target.value}
						maxLength="76"
					/>
				</div>
				<div className="inputRow">
					<label>Osoiterivi 3: </label>
					<input
						type="text" 
						placeholder="[................]"
						value={inputStore.osr3}
						onChange={e => inputStore.osr3 = e.target.value}
						maxLength="76"
					/>
				</div>
				<div className="inputRow">
					<label>Y-tunnus: </label>
					<input 
						type="text" 
						placeholder="[................]"
						value={inputStore.ytun}
						onChange={e => inputStore.ytun = e.target.value}
						maxLength="66"
					/>
				</div>
				<div className="inputRow">
					<label>IBAN: </label>
					<input 
						type="text" 
						value={inputStore.iban} 
						onChange={e => inputStore.iban = e.target.value} 
						placeholder="[................]"
						maxLength="30"/>
				</div>
				<div className="inputRow">
					<label>BIC: </label>
					<input 
						type="text" 
						value={inputStore.bic} 
						onChange={e => inputStore.bic = e.target.value} 
						placeholder="[................]"
						maxLength="30"
						/>
				</div>
			</div>

			<div className="blokki">
	    		<h3>( Laskun tiedot )</h3>
				<div className="inputRow">
					<label>Päivämäärä: </label>
					<input 
						type="date" 
						value={inputStore.day}
						onChange={e => inputStore.day = e.target.value}
						required
					/>
				</div>

				<div className="inputRow">
					<label>Viivästyskorko: </label>
					<div className="suffixed">
						<input 
							type="number" 
							value={inputStore.viiv}
							step="0.01"
							onChange={e => inputStore.viiv = e.target.value}
						/>
						<div style={{
							position: 'absolute', 
							left: (inputStore.viiv.toString().length * 8 + 2) + "px", 
							top: "1px",
							pointerEvents: "none"
						}}>
							%
						</div>
					</div>
				</div>

				<div className="inputRow">
					<label>Huomautus: </label>
					<div className="suffixed">
						<input type="number" value={inputStore.huom} onChange={e => inputStore.huom = e.target.value}/>
						<div style={{
							position: 'absolute', 
							left: (inputStore.huom.toString().length * 8 + 10) + "px", 
							top: "1px",
							pointerEvents: "none"
						}}>
							vrk
						</div>
					</div>
				</div>

				<div className="inputRow">
					<label>Maksuehdot: </label>
					<div className="suffixed">
						<input type="number" value={inputStore.maks} onChange={e => inputStore.maks = e.target.value}/>
						<div style={{
							position: 'absolute', 
							left: (inputStore.maks.toString().length * 8 + 10) + "px", 
							top: "1px",
							pointerEvents: "none"
						}}>
							vrk netto
						</div>
					</div>
				</div>

				<div className="inputRow">
					<label>Viitenumero: </label>
					<input 
						type="text" 
						value={inputStore.viit} 
						onChange={e => inputStore.viit = e.target.value} 
						placeholder="[................]"
						maxLength="21"
						/>
				</div>

				<div className="inputRow">
					<label>Valuutta: </label>
					<input type="text" value={inputStore.valu} onChange={e => inputStore.valu = e.target.value} placeholder="[................]"/>
				</div>
			</div>

			<div className="blokki">
				<h3>( Maksajan tiedot )</h3>
				<div className="inputRow">
					<label>Maksaja: </label>
					<select
					value={inputStore.valittuMaksaja}
					onChange={e => inputStore.vaihdaMaksaja(e)}
					>
					{inputStore.maksaja.map(function(item, i){
						return ( 
							<option key={i} value={i}>{inputStore.maksaja[i].nimi}</option>
						)
					})}
					</select>
				</div>
				<div className="inputRow">
					<button style={{marginLeft: 16 + 'px'}} onClick={inputStore.lisaaMaksaja}>( Lisää maksaja + )</button>
					<button style={{marginLeft: 16 + 'px'}} onClick={inputStore.poistaMaksaja}>( Poista maksaja + )</button>
				<br/>
				<br/>
				</div>
				<div className="inputRow">
					<label>Nimi: </label>
					<input
						type="text" 
						placeholder="[................]"
						value={inputStore.mnimi}
						onChange={e => inputStore.mnimi = e.target.value}
						maxLength="36"
					/>
				</div>
				<div className="inputRow">
					<label>Osoiterivi 1: </label>
					<input
						type="text" 
						placeholder="[................]"
						value={inputStore.mosr1}
						onChange={e => inputStore.mosr1 = e.target.value}
						maxLength="36"
					/>
				</div>
				<div className="inputRow">
					<label>Osoiterivi 2: </label>
					<input
						type="text" 
						placeholder="[................]"
						value={inputStore.mosr2}
						onChange={e => inputStore.mosr2 = e.target.value}
						maxLength="36"
					/>
				</div>
				<div className="inputRow">
					<label>Osoiterivi 3: </label>
					<input
						type="text" 
						placeholder="[................]"
						value={inputStore.mosr3}
						onChange={e => inputStore.mosr3 = e.target.value}
						maxLength="36"
					/>
				</div>
				<div className="inputRow">
					<label>Y-tunnus: </label>
					<input 
						type="text" 
						placeholder="[................]"
						value={inputStore.mytun}
						onChange={e => inputStore.mytun = e.target.value}
						maxLength="36"
					/>
				</div>
			</div>
			
			<div className="blokki">
				<h3>( Tuotteet )</h3>
				<div className="inputRow">
					<label>Selite: </label>
					<input
						type="text" 
						placeholder="[................]"
						value={inputStore.selite}
						onChange={e => inputStore.selite = e.target.value}
						maxLength="228"
					/>
				</div>
				{inputStore.tuotteet.map(function(item, i){
				  	return ( 
					  	<div className="blokki" key={i}>
							<h3>( Tuote {i + 1} )</h3>
							<button className="poistaTuote" style={{display: inputStore.tuotteet.length <= 1 ? 'none' : 'inline-block'}} onClick={index => inputStore.poistaTuote(i)}>(X)</button>
							<div className="inputRow">
								<label>Selite: </label>
								<input
									type="text" 
									placeholder="[................]"
									value={inputStore.tuotteet[i].tuote}
									onChange={e => inputStore.tuotteet[i].tuote = e.target.value}
									maxLength="108"
								/>
							</div>
							<div className="inputRow">
								<label>Kappalemäärä: </label>
								<input
									type="number" 
									placeholder="[................]"
									value={inputStore.tuotteet[i].kpl}
									onChange={e => inputStore.tuotteet[i].kpl = e.target.value}
									maxLength="5"
								/>
							</div>
							<div className="inputRow">
								<label>Veroton hinta: </label>
								<input
									type="number" 
									placeholder="[................]"
									value={inputStore.tuotteet[i].veroton}
									onChange={e => inputStore.tuotteet[i].veroton = e.target.value}
									maxLength="10"
								/>
							</div>
							<div className="inputRow">
								<label>Alv: </label>
								<div className="suffixed">
									<input
										type="number" 
										value={inputStore.tuotteet[i].alv} 
										step="0.5"
										onChange={e => inputStore.tuotteet[i].alv = e.target.value}
									/>
									<div style={{
										position: 'absolute', 
										left: (inputStore.tuotteet[i].alv.toString().length * 8 + 2) + "px", 
										top: "1px",
										pointerEvents: "none"
									}}>
										%
									</div>
								</div>
							</div>
						</div>
				  	)
				})}
				
				<button style={{marginLeft: 16 + 'px'}} onClick={inputStore.lisaaTuote}>{'( Lisää tuote + )'}</button>

			</div>
		</div>
    );
  }
})

export default Inputs;

