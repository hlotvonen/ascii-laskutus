import React, { Component } from 'react';
import s from '../models/inputstore'
import {observer} from "mobx-react"


const Render = observer(class Render extends Component {
  
logotop() {
	if(s.logo) {
		return (
<pre>
.              ░ ,▄▄▄▄ .▄▄▄▄∙ ▄▄▄▄▄▄_   ▄▄.▄▄▄▄▄ ▄▄.▄▄▄▄▄ ▄███▓▄   ░           .
.        ░   ░░  ▐███▓▐███▓▀ ▀▀▀▀■██▓▄.▐████▀██▓▌████▀██▓▌█████▓▌▒░    ░       .
.  ░       ▄░▒█▒ ████████▓ ▄██▀▀█████▓ ████▓▐███▓███▓▐███▓▐███▓▀ ▓▀▒░░▄        .
:   ░ ▄░░ ░▒▒▓██▐████▀███▌███.  ,▓███▓▐████▓ ▀▀▀████▓ ■▀▀ ▄▄▄▄≡ █▒▓▓▒▓▒▒░  ░   :
;  ░░░▓░█▓█▓███ ████▓▐███▓▐███▄▄████▓▌████▓▌·  ████▓▌   °▐████▓ ▒███▓█▓▓▒▓░ ░  ;
║▄░░▒▓███░▒▒▓█░ ▀███▌°▀██▓∙▀████████▀·▀██▓▀.  °▀██▓▀     !███▓■  ▒█▓████▓▓░▓▓░░║
╠═════════════════════════════════■[ LASKU ]■══════════════════════════════════╣

</pre>
		)
	} else {
		return (
<pre>
╔═════════════════════════════════■[ LASKU ]■══════════════════════════════════╗
</pre>
		)
	}
}
logobot() {
	if(s.logo) {
		return (
<pre>
╠══════════════════════════════════════╧═══════════════════════════════════════╣
║▄░▓▒░▓▄ ■░█░▄  ▄,▄███ ▄███■∙ ▄████▄_ ▄███▓▄ ▐█▄████▄∙▄██████▄░█▄░█▓▒▒░░██▄▒░░▀║
;    ░▒▒▓▓█▓███▒░▐███▓▐███▓▀▄███▀███▓ █████▓▐████▀██▓▌▀▀▀▀■██▓▌░████▓█▓▒░▓░▒░  ;
:  ░ ▄ ░▒▒▓▒▓▓▒█ ████████▓ ▄███  ▐███▓▐███▓▀████▓▐███▓▄███████▓ █▒▓▒ ░░░░▀ ░   :
.         ░ ▒▄▓ ▐████▀███▌▐███▌ ,▓███▓ ▄▄▄≡▐████▓ ▀▀▄███▀,▓███▓ ▀░▒░   ▒ ▀     .
.      ░   ░  █ ████▓▐███▓▐█████████▓▌████▓▐███▓▌· ▐█████████▓▌ ▀   ░          .
.                ▀▀▀ °▀▀▀ ∙▀▀▀▀▀▀▀▀▀▀·▀▀▀▀■ ▀▀▀▀.  ∙▀▀▀▀▀▀▀▀▀▀·                .
</pre>
		)
	} else {
		return (
<pre>
╚══════════════════════════════════════╧═══════════════════════════════════════╝
</pre>
		)
	}
}



render() {
	const tuotteet = s.tuotteet.map((item, i) => {
		const t = s.w(s.tuotteet[i].tuote, 35)
		const k = s.w(s.tuotteet[i].kpl, 3).toString()
		const v = s.w(s.tuotteet[i].veroton, 9)
		const a = s.w((s.tuotteet[i].alv + "%"), 4)
		const v2 = s.w(s.vero(s.tuotteet[i].veroton, s.tuotteet[i].kpl, s.tuotteet[i].alv), 13)
		return (
		<pre key={i}>
╟─────────────────────────────────────┼─────┼───────────┼──────┼───────────────╢
║ {t                                } : {k} : {v      } : {a } : {v2         } ║
		</pre>
		)
	})


	let p = Number(0)
	for(var i = 0, len = s.tuotteet.length; i < len; i++) {
	    p += Number(s.vero(s.tuotteet[i].veroton, s.tuotteet[i].kpl, s.tuotteet[i].alv))
	}
	let pw = s.w(p.toFixed(2) + " " + s.valu,14)
	const pvm = s.day.substring(8,10) + "." + s.day.substring(5,7) + "." + s.day.substring(0,4)

    return (
      <div className="render">

{this.logotop()}

<pre>
║ {s.w(s.nimi, 76)                                                           } ║
║ Y-tunnus: {s.w(s.ytun, 66)                                                 } ║
║                                                                              ║
║ {s.w(s.osr1, 76)                                                           } ║
║ {s.w(s.osr2, 36)                   } .                                       ║
║ {s.w(s.osr3, 36)                   } :                                       ║
╟─────────■[ MAKSAJAN TIEDOT ]■────────┼──────────■[ LASKUN TIEDOT ]■──────────╢
║ {s.w(s.mnimi, 36)                  } :     Laskun pvm: {s.w(pvm, 21)     } ║
║ {s.w(s.mytun, 36)                  } ∙    Viitenumero: {s.w(s.viit, 21)    } ║
║ {s.w(s.mosr1, 36)                  }        Maksuehto: {s.ma(s.maks, 21)   } ║
║ {s.w(s.mosr2, 36)                  } .      Huomautus: {s.hu(s.huom, 21)   } ║
║ {s.w(s.mosr3, 36)                  } : Viivästyskorko: {s.vi(s.viiv, 21)   } ║
╟──────────────────────────────────────┴───────────────────────────────────────╢
║ {s.w(s.selite, 76)                                                         } ║
╟─────────────────────────────────────┬─────┬───────────┬──────┬───────────────╢
║ kuvaus                              │ kpl │ veroton   │ alv% │ verollinen    ║
</pre>
{tuotteet}
<pre>
╟─────────────────────────────────────┴─────┴───────────┴──────┴───────────────╢
║                                                       Yhteensä { pw         }║
║ Esiintyvän taiteilijan palkkio, Alv 0%, ALV§45                               ║
╟──────────────────────────────────────────────────────────────────────────────╢
╟──────────────■[ SAAJA ]■─────────────┬───────────■[ TILISIIRTO ]■────────────╢
║ {s.w(s.nimi, 36)                   } │ Viitenumero: {s.w(s.viit, 24)       } ║
║                                      ├───────────────────────────────────────╢
║                                      │ Eräpäivä: {s.w(s.erap, 27)          } ║
║ IBAN: {s.w(s.iban, 30)             } ├───────────────────────────────────────╢
║ BIC:  {s.w(s.bic, 30)              } │ Summa: {pw          }                 ║
</pre>
{this.logobot()}
      </div>
    );
  }
})


export default Render