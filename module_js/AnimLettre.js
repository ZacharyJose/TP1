import {
    Util
} from './Util.js'

export class AnimLettre {
    /**
     * Classe permettant de créer et d'animer une introduction
     * @param {String} chaine - contient les lettres
     * @param {DOMElement} elementParent - Conteneur de l'animation
     * @param {function} fonction - l'adresse de la fonction à exécuter après l'animation
         
     }}
     */

    constructor(lesLettres, elmParent, fonction) {
        this.tabCouleur = ['#ffff', '#ffff', '#ffff', '#ffff', '#ffff', '#ffff'];
        this.lesLettres = lesLettres
        this.elmParent = elmParent;
        this.fonction = fonction
        console.log('debut')
        this.animerLettre(this.lesLettres)
    }


animerLettre(lesLettres) {
     console.log('lettre = ' +lesLettres)
    let elmConteneur = this.creerElement(this.elmParent,
        'section',
        '',
        'mot')
    let i = 0 
    for (let uneLettre of lesLettres)
    {
        let elmlettre = this.creerElement(elmConteneur,
            'div',
            uneLettre,
            '')
        elmlettre.style.animationDelay = (i * 0.1) + "s";
        elmlettre.style.color = this.tabCouleur[(i++) % 6]
    }



}



    creerElement(elmParent, balise, contenu, classCSS) {
        console.log('creerElement' + balise)
        let noeud = document.createElement(balise)
        if (contenu != '') {
            noeud.innerHTML = contenu
        }
        if (classCSS != ''){
            noeud.classList.add(classCSS)
        }
        elmParent.appendChild(noeud)
        return noeud
    }

}    





