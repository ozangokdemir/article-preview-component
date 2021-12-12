/* 
*Sélectionner l'élement share-button
*Au clic
    *Créer élément share
    *Placer cet élément au bon endroit
    Animer l'apparition de l'élément share (slide haut desktop / slide gauche mobile)
    Changer couleur du bouton share
    Faire apparaître le bouton share au-dessus
Lorsqu'on quitte le survol de l'élément créé
    Animer la disparition (slide bas desktop / slide droite mobile)
    Supprimer l'élément share du DOM
    Rechanger la couleur du bouton share
*/

const shareButton = document.querySelector('#share-button');
const content = shareButton.getAttribute('data-tooltip');

/* AU CLIC */
shareButton.addEventListener('click', function () {

    let socialMedias = document.createElement('div')

    /* CONTENU */
    socialMedias.innerHTML = document.querySelector(content).innerHTML
    socialMedias.classList.add('social-medias')
    document.getElementById('article').appendChild(socialMedias)

    /* PLACEMENT */
    let height = socialMedias.offsetHeight
    let width = socialMedias.offsetWidth
    socialMedias.style.top = (shareButton.getBoundingClientRect().top - height - 15) + "px"
    socialMedias.style.left = (shareButton.offsetWidth / 2 - width / 2 + shareButton.getBoundingClientRect().left) + "px"
});

shareButton.addEventListener('mouseover', function () {
    /* STYLE BOUTON SHARE */
    shareButton.querySelector('svg path').style.fill = 'var(--light-grayish-blue)'
    shareButton.style.backgroundColor = 'var(--desaturated-dark-blue)'
});

shareButton.addEventListener('mouseout', function () {
    /* STYLE BOUTON SHARE */
    shareButton.querySelector('svg path').style.fill = 'var(--desaturated-dark-blue)'
    shareButton.style.backgroundColor = 'var(--light-grayish-blue)'
});