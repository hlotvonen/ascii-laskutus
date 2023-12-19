import {decorate, observable, computed, autorun} from "mobx"
import moment from 'moment';

const today = moment();
const TYHJÄ_TUOTE = { kpl: Number(1), tuote: '', veroton: Number(0), alv: Number(0) }
const TYHJÄ_MAKSAJA = { nimi: '', osoiterivi1: '', osoiterivi2: '', osoiterivi3: '', ytunnus: '' }
moment.locale('fi')

class InputStore {
	constructor() {
		this.lisaaTuote()
		this.lisaaTyhjaMaksaja()

		if (localStorage.laskuStorage2) {
			const laskuStorage2 = JSON.parse(localStorage.laskuStorage2)
			this.nimi = laskuStorage2.nimi
			this.ytun = laskuStorage2.ytun
			this.osr1 = laskuStorage2.osr1
			this.osr2 = laskuStorage2.osr2
			this.osr3 = laskuStorage2.osr3
			this.iban = laskuStorage2.iban
			this.bic = laskuStorage2.bic 
			this.day  = laskuStorage2.day 
			this.viiv = laskuStorage2.viiv
			this.huom = laskuStorage2.huom
			this.maks = laskuStorage2.maks
			this.viit = laskuStorage2.viit
			this.valu = laskuStorage2.valu
			this.mnimi = laskuStorage2.mnimi
			this.mytun = laskuStorage2.mytun
			this.mosr1 = laskuStorage2.mosr1
			this.mosr2 = laskuStorage2.mosr2
			this.mosr3 = laskuStorage2.mosr3
			this.maksaja = laskuStorage2.maksaja
			this.valittuMaksaja = laskuStorage2.valittuMaksaja
			this.tuote = laskuStorage2.tuote
			this.tuotteet = laskuStorage2.tuotteet
			this.selite = laskuStorage2.selite
			this.teema = laskuStorage2.teema  
			this.logo = laskuStorage2.logo
		}
		//set localstorage, autorun will update it every time something changes
		autorun(() => {
			const laskuLocalstorage = {
				name: "Laskun tiedot",
				timestamp: Math.floor(Date.now() / 1000),
				nimi: this.nimi,
				ytun: this.ytun,
				osr1: this.osr1,
				osr2: this.osr2,
				osr3: this.osr3,
				iban: this.iban,
				bic: this.bic,
				day: this.day ,
				viiv: this.viiv,
				huom: this.huom,
				maks: this.maks,
				viit: this.viit,
				valu:  this.valu,
				mnimi: this.mnimi,
				mytun: this.mytun,
				mosr1: this.mosr1,
				mosr2: this.mosr2,
				mosr3: this.mosr3,
				maksaja: this.maksaja,
				valittuMaksaja: this.valittuMaksaja,
				tuote: this.tuote,
				tuotteet: this.tuotteet,
				selite: this.selite,
				teema: this.teema,
				logo: this.logo,
			}
			localStorage.setItem("laskuStorage2", JSON.stringify(laskuLocalstorage))
		})
	}


	nimi = '' 	//laskuttajan nimi
	ytun = ''	//laskuttajan ytunnus
	osr1 = ''	//laskuttajan osoiterivi 1
	osr2 = ''	//laskuttajan osoiterivi 2
	osr3 = ''	//laskuttajan osoiterivi 3
	iban = ''	//laskuttajan iban
	bic = ''	//laskuttajan bic

	day = moment(today).format('DD.MM.YYYY')
	maks = Number(14)	//laskun maksuehto
	viiv = Number(9) 	//laskun viivekorko
	huom = Number(7)	//laskun huomautus vrk
	viit = ''	//laskun viitenumero
	valu = 'EUR'		//laskun valuutta

	mnimi = '' 	//laskuttajan nimi
	mytun = ''	//laskuttajan ytunnus
	mosr1 = ''	//laskuttajan osoiterivi 1
	mosr2 = ''	//laskuttajan osoiterivi 2
	mosr3 = ''	//laskuttajan osoiterivi 3

	selite = ''

	tuotteet = []
	maksaja = []
	valittuMaksaja = 0

	teema = "musta"
	logo = false

    w = (variable, spaceAmount) => {
    	variable = variable.toString()
    	if(variable.length >= spaceAmount) {
    		return variable.slice(0, spaceAmount)
    	}
    	let emptySpace = ' '.repeat(spaceAmount-variable.length)
        return variable + emptySpace
    }
    x = (variable, spaceAmount) => {
    	variable = variable.toString()
    	let spaceAmountBefore = Math.round(spaceAmount / 2)
    	let spaceAmountAfter = Math.floor(spaceAmount / 2)
    	let emptySpaceBefore = ' '.repeat(spaceAmountBefore-Math.round(variable.length/2))
		let emptySpaceAfter = ' '.repeat(spaceAmountAfter-Math.floor(variable.length/2))
    	if(variable.length >= spaceAmount) {
    		return variable.slice(0, spaceAmount)
    	}
        return emptySpaceBefore + variable + emptySpaceAfter
    }
    ma = (variable, spaceAmount) => {
    	return this.w((variable + ' vrk netto'), spaceAmount)
    }
    vi = (variable, spaceAmount) => {
    	return this.w((variable + '%'), spaceAmount)
    }
    hu = (variable, spaceAmount) => {
    	return this.w((variable + ' vrk'), spaceAmount)
    }
    lisaaTuote = () => {
    	this.tuotteet.push(TYHJÄ_TUOTE);
    }
    poistaTuote = (index) => {
		if (this.tuotteet.length > 1) {
			this.tuotteet.splice(index, 1)
		}
    }
    lisaaMaksaja = () => {
    	this.maksaja.push({
    		nimi: this.mnimi,
    		osoiterivi1: this.mosr1,
    		osoiterivi2: this.mosr2,
    		osoiterivi3: this.mosr3,
    		ytunnus: this.mytun
    	})
    	this.valittuMaksaja += 1
    }
    poistaMaksaja = () => {
		if (this.maksaja.length > 1) {
			if(this.valittuMaksaja !== 0) {
				this.maksaja.splice(this.valittuMaksaja, 1)
				this.valittuMaksaja -= 1
			} 
		}
    }
    vaihdaMaksaja = (e) => {
    	this.valittuMaksaja = e.target.value
    	this.mnimi = this.maksaja[this.valittuMaksaja].nimi
    	this.mosr1 = this.maksaja[this.valittuMaksaja].osoiterivi1
    	this.mosr2 = this.maksaja[this.valittuMaksaja].osoiterivi2
    	this.mosr3 = this.maksaja[this.valittuMaksaja].osoiterivi3
    	this.mytun = this.maksaja[this.valittuMaksaja].ytunnus
    }
    lisaaTyhjaMaksaja = () => {
    	this.maksaja.push(TYHJÄ_MAKSAJA)
    }
    vero = (summa, kpl, pros) => {
    	return (summa * kpl + (summa * kpl * pros / 100)).toFixed(2)
    }
	bodyClass = autorun(() => {
		document.body.removeAttribute("class");
		if(this.teema === "musta") {
		  document.body.classList.add('musta');
		}if(this.teema === "valkoinen") {
		  document.body.classList.add('valkoinen');
		}if(this.teema === "vihreä") {
		  document.body.classList.add('vihreä');
		} 
	})
    get erap() {
		return moment(this.day).add(this.maks, 'days').format('DD.MM.YYYY')
   	}

	
}

decorate(InputStore, {
  nimi:  observable,
  ytun:  observable,
  osr1:  observable,
  osr2:  observable,
  osr3:  observable,
  iban:  observable,
  bic:   observable,
  day:   observable,
  viiv:  observable,
  huom:  observable,
  maks:  observable,
  viit:  observable,
  valu:  observable,
  mnimi: observable,
  mytun: observable,
  mosr1: observable,
  mosr2: observable,
  mosr3: observable,
  tuote: observable,
  tuotteet: observable,
  selite: observable,
  erap: computed,
  teema: observable,
  logo: observable,
  maksaja: observable,
  valittuMaksaja: observable,
})

export default new InputStore()