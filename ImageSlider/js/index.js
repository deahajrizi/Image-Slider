let nextImage = document.getElementById('nextButton')
let previousImage = document.getElementById('previousButton')
let currentImg = document.getElementById('currentImage')
let autoplayControls = document.getElementById('autoplayControls')
let pauseBtn = document.getElementById('pauseButton')

//Créer un tableau avec le path des images
let images = ['img/image1.jpg', 'img/image2.jpg', 'img/image3.jpg', 'img/image4.jpg', 'img/image5.jpg']

let i = 0

// On change la source de la 'current image' avec celle de la première se trouvant dans le tableau
currentImg.src = images[0]

function next(){
    // On incrémente l'index pour qu'il passe à la deuxième image
    i++
    // On change la source à nouveau pour afficher l'image correspondant à i+1
    currentImg.src = images[i]
    // Si i est plus grand que l'index maximal des images se trouvant de le tableau, remettre i à 0 pour
    // retourner à la première image -> loop
    if(i > images.length -1){
        i = 0
    }
    // On affiche la current image à nouveau
    currentImg.src = images[i]
}

function previous(){
    // On donne -1 à l'index pour qu'il aille chercher l'index d'avant donc l'image d'avant
    i--
    // On affiche l'image dont l'index correspond
    currentImg.src = images[i]
    // Si i est plus petit que 0, donc si on part de la première image et on clique sur 'previous',
    // On lui donne l'index de la dernière image se trouvant dans le tableau
    if(i < 0){
        i = images.length -1
    }
    // On affiche l'image à nouveau
    currentImg.src = images[i]
}

function pause(){
    clearInterval(startAutoplay)
    // On remplace le bouton 'pause' par le bouton 'play'
    autoplayControls.replaceChild(playBtn, pauseBtn)
}
function play(){
    startAutoplay = setInterval(next, 3000)
    // On remplace le bouton play par le bouton pause pour revenir à l'état normal
    autoplayControls.replaceChild(pauseBtn, playBtn)
}

// ----------------------- PREVIOUS / NEXT -----------------------

// Quand on clique sur 'next', on lance la fonction next()
nextImage.addEventListener('click', next)
// Quand on clique sur 'next', on lance la fonction pause() pour qu'il n'y aie pas de bug avec le défilement auto
nextImage.addEventListener('click', pause)


// Quand on clique sur 'previous', on lance la fonction previous()
previousImage.addEventListener('click', previous)
// Quand on clique sur 'previous', on lance la fonction pause() pour qu'il n'y aie pas de bug avec le défilement auto
previousImage.addEventListener('click', pause)


// ----------------------- AUTOPLAY -----------------------
// Défilement automatique = setInterval, on lance la fonction 'next' pour qu'il défile les images toutes les 2 secondes
let startAutoplay = setInterval(next, 3000)


// ----------------------- PAUSE / PLAY -----------------------
// On crée le play button
let playBtn = document.createElement('img')
playBtn.src = 'img/playButton.png'

// Lorsqu'on clique sur pause, on arrête le défilement automatique
pauseBtn.addEventListener('click', pause)
//Lorsqu'on clique sur play, on remet le défilement automatique
playBtn.addEventListener('click', play)







