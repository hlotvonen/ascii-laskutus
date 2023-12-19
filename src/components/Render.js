import React, { Component } from 'react';
import s from '../models/inputstore'
import {observer} from "mobx-react"
import moment from 'moment'

const Render = observer(class Render extends Component {
  
logotop() {
	if(s.logo) {
		return (
<pre>
{`            _____         _____        ________    ________   ____
 -  -- --- <    /___   __<___  \\__  __/__     /\\__/__     /\\_/ __/_ --- -   - -
         / /   / __/  /    </    /\\<   </   _/ <   </   _/ <      /\\ \\
      / / /   __   ¯\\/          <__/   \\     \\ /   \\     \\  \\     \\ \\ \\ \\
   / / / /____/     /\\____/       /____/     //____/     /\\//     /\\/ / / / /
   \\ \\ \\ \\   /_____/  \\  \\_______/\\ ___\\____/ \\____\\____/  X_____/  \\ \\ \\
        \\ \\__X    /\\__/\\/¯      /\\_/   >\\   \\ /__     /\\\\ <___  \\__ / /
       - - --/   / __/_/    \\   \\<  ¯¯¯¯/\\_<¯¯ </   _/ /¯¯¯ </    /\\- -  -
          / /   __   ¯\\    //    \\\\     \\  /   \\     \\/          <__\\ \\
       / / /____/     /\\         //     /\\/____/     /\\____/       /\\> \\ \\
    ¯  \\ \\ \\   /_____/  \\_______//_____/  \\   /_____/  \\  \\_______/  \\  > > > -
          \\ \\__\\     \\  /\\      \\\\     \\  /\\__\\     \\  /\\__\\      \\  / /
.- -  - - -- ---\\_____\\/--\\______\\\\_____\\/-----\\_____\\/-----\\______\\/--- - -  -.
`}
</pre>
		)
	} else {
		return (
<pre>
.----------------------------------( LASKU )-----------------------------------.
</pre>
		)
	}
}
render() {
	const tuotteet = s.tuotteet.map((item, i) => {
		const t = s.tuotteet[i].tuote
		const k = s.w(s.tuotteet[i].kpl, 5).toString()
		const v = s.w(s.vero(s.tuotteet[i].veroton, 1, 0), 10)
		const a = s.w(s.tuotteet[i].alv + "%", 5)
		const v2 = s.w(s.vero(s.tuotteet[i].veroton, s.tuotteet[i].kpl, s.tuotteet[i].alv), 11)
		if(t.length <= 36) {
			return (
<pre key={i}>
		| {s.w(s.tuotteet[i].tuote, 36)      } : {k  }: {v       } : {a  }: {v2       }|
		|                                      :      :            :      :            |
</pre>
			)
		}
		if(t.length >= 36 && t.length <= 72) {
			return (
<pre key={i}>
		| {s.w(s.tuotteet[i].tuote, 36)      } : {k  }: {v       } : {a  }: {v2       }|
		| {s.w(s.tuotteet[i].tuote.slice(36, 72), 36)   } :      :            :      :            |
		|                                      :      :            :      :            |
</pre>
			)
		}
		if(t.length >= 72) {
			return (
<pre key={i}>
		| {s.w(s.tuotteet[i].tuote, 36)      } : {k  }: {v       } : {a  }: {v2       }|
		| {s.w(s.tuotteet[i].tuote.slice(36, 72), 36)} :      :            :      :            |
		| {s.w(s.tuotteet[i].tuote.slice(72, 108), 36)} :      :            :      :            |
		|                                      :      :            :      :            |
</pre>
			)
		}
	})

	const selite = () => {
		if(s.selite.length <= 76) {
			return (
<pre>
		| {s.w(s.selite, 76)                                                         } |
</pre>
			)
		}
		if(s.selite.length >= 76 && s.selite.length <= 152) {
			return (
<pre>
		| {s.w(s.selite, 76)                                                         } |
		| {s.w(s.selite.slice(76, 152), 76)                                          } |
</pre>
			)
		}
		if(s.selite.length >= 152) {
			return (
<pre>
		| {s.w(s.selite, 76)                                                         } |
		| {s.w(s.selite.slice(76, 152), 76)                                          } |
		| {s.w(s.selite.slice(152, 228), 76)                                         } |
</pre>
			)
		}
	}


	let p = Number(0)
	for(var i = 0, len = s.tuotteet.length; i < len; i++) {
	    p += Number(s.vero(s.tuotteet[i].veroton, s.tuotteet[i].kpl, s.tuotteet[i].alv))
	}
	let pw = s.w(p.toFixed(2) + " " + s.valu,14)
	const pvm = moment(s.day).format('DD.MM.YYYY')

    return (
      <div className="render">

{this.logotop()}

<pre>
|                                                                              |
| {s.w(s.nimi, 76)                                                           } |
| Y-tunnus: {s.w(s.ytun, 66)                                                 } |
|                                                                              |
| {s.w(s.osr1, 76)                                                           } |
| {s.w(s.osr2, 76)                                                           } |
| {s.w(s.osr3, 76)                                                           } |
:----------( MAKSAJAN TIEDOT )---------.-----------( LASKUN TIEDOT )-----------:
|                                      :                                       |
| {s.w(s.mnimi, 36)                  } :     Laskun pvm: {s.w(pvm, 21)       } |
| {s.w(s.mytun, 36)                  } :    Viitenumero: {s.w(s.viit, 21)    } |
| {s.w(s.mosr1, 36)                  } :      Maksuehto: {s.ma(s.maks, 21)   } |
| {s.w(s.mosr2, 36)                  } :      Huomautus: {s.hu(s.huom, 21)   } |
| {s.w(s.mosr3, 36)                  } : Viivästyskorko: {s.vi(s.viiv, 21)   } |
|                                      :                                       |
:--------------------------------------·---------------------------------------:
|                                                                              |
{selite()}
|                                                                              |
:--------------------------------------.------.------------.------.------------:
| kuvaus                               : kpl  : veroton    : alv% : verollinen |
:--------------------------------------:------:------------:------:------------:
</pre>
{tuotteet}
<pre>
:--------------------------------------·------·------------·------·------------:
|                                                       Yhteensä { pw         }|
| Esiintyvän taiteilijan palkkio, Alv 0%, ALV§45                               |
|                                                                              |
:-------------( SAAJA )----------------.------------( TILISIIRTO )-------------:
|                                      :                                       |
| {s.w(s.nimi, 36)                   } : Viitenumero: {s.w(s.viit, 24)       } |
|                                      :                                       |
|                                      : Eräpäivä: {s.w(s.erap, 27)          } |
| IBAN: {s.w(s.iban, 30)             } :                                       |
| BIC:  {s.w(s.bic, 30)              } : Summa: {pw          }                 |
|                                      :                                       |
`--------------------------------------·---------------------------------------'
</pre>
      </div>
    );
  }
})


export default Render