const celulas = document
 .querySelectorAll('td')

const naoMetais = document
 .querySelectorAll('.nao-metal')
const metaisAlcalinos = document
 .querySelectorAll('.metal-alcalino')
const semimetais = document
 .querySelectorAll('.semimetais')
const metaisAlcalinosTerrosos =
 document.querySelectorAll(
  '.metal-alcalino-terroso')
const metaisDeTransicao = document
 .querySelectorAll(
  '.metal-de-transicao')
const outrosMetais = document
 .querySelectorAll('.outro-metal')
const halogenios = document
 .querySelectorAll('.halogenio')
const gasesNobres = document
 .querySelectorAll('.gas-nobre')
const lantanideos = document
 .querySelectorAll('.lantanideos')
const actinidios = document
 .querySelectorAll('.actinidios')

const txtTh = document.querySelector(
 '#txtTh')
const inicial = document.querySelector(
 '#inicial')
const icone = document.querySelector(
 '#icone')
const informativo = document
 .querySelector('#informativo')

const naoMetaisLegenda = document
 .querySelector('#nao-metais')
const metaisAlcalinosLegenda = document
 .querySelector('#metais-alcalinos')
const metaisAlcalinosTerrososLegenda =
 document.querySelector(
  '#metais-alcalino-terrosos')
const metaisDeTransicaoLegenda =
 document.querySelector(
  '#metais-de-transicao')
const semimetaisLegenda = document
 .querySelector('#semimetais')
const outroMetaisegenda = document
 .querySelector('#outros-metais')
const halogeniosLegenda = document
 .querySelector('#halogenios')
const gasesNobresLegenda = document
 .querySelector('#gases-nobres')
const lantanideosLegenda = document
 .querySelector('#lantanideos')
const actinidiosLegenda = document
 .querySelector('#actinidios')

naoMetaisLegenda.onmouseover = () => {
 naoMetais.forEach(function(
  naoMetal) {
  naoMetal.classList.add(
   'animacaoLegenda')
 })
}

metaisAlcalinosLegenda.onmouseover =
 () => {
  metaisAlcalinos.forEach(function(
   metalAlcalino) {
   metalAlcalino.classList.add(
    'animacaoLegenda')
  })
 }

semimetaisLegenda.onmouseover = () => {
 semimetais.forEach(function(
  semimetal) {
  semimetal.classList.add(
   'animacaoLegenda')
 })
}

metaisAlcalinosTerrososLegenda
 .onmouseover = () => {
  metaisAlcalinosTerrosos.forEach(
   function(metalAlcalinoTerroso) {
    metalAlcalinoTerroso.classList
     .add('animacaoLegenda')
   })
 }

metaisDeTransicaoLegenda.onmouseover =
 () => {
  metaisDeTransicao.forEach(function(
   metalDeTransicao) {
   metalDeTransicao.classList.add(
    'animacaoLegenda')
  })
 }

outroMetaisegenda.onmouseover = () => {
 outrosMetais.forEach(function(
  outroMetal) {
  outroMetal.classList.add(
   'animacaoLegenda')
 })
}

halogeniosLegenda.onmouseover = () => {
 halogenios.forEach(function(
  halogenio) {
  halogenio.classList.add(
   'animacaoLegenda')
 })
}

gasesNobresLegenda.onmouseover =
 () => {
  gasesNobres.forEach(function(
   gasNobre) {
   gasNobre.classList.add(
    'animacaoLegenda')
  })
 }

lantanideosLegenda.onmouseover =
 () => {
  lantanideos.forEach(function(
   lantanideo) {
   lantanideo.classList.add(
    'animacaoLegenda')
  })
 }

actinidiosLegenda.onmouseover = () => {
 actinidios.forEach(function(
  actinidio) {
  actinidio.classList.add(
   'animacaoLegenda')
 })
}

setInterval(() => {
 naoMetais.forEach(function(
  naoMetal) {
  naoMetal.classList.remove(
   'animacaoLegenda')
 })
 metaisAlcalinos.forEach(function(
  metalAlcalino) {
  metalAlcalino.classList.remove(
   'animacaoLegenda')
 })
 semimetais.forEach(function(
  semimetal) {
  semimetal.classList.remove(
   'animacaoLegenda')
 })
 metaisAlcalinosTerrosos.forEach(
  function(metalAlcalinoTerroso) {
   metalAlcalinoTerroso.classList
    .remove('animacaoLegenda')
  })
 metaisDeTransicao.forEach(function(
  metalDeTransicao) {
  metalDeTransicao.classList
   .remove('animacaoLegenda')
 })
 outrosMetais.forEach(function(
  outroMetal) {
  outroMetal.classList.remove(
   'animacaoLegenda')
 })
 halogenios.forEach(function(
  halogenio) {
  halogenio.classList.remove(
   'animacaoLegenda')
 })
 gasesNobres.forEach(function(
  gasNobre) {
  gasNobre.classList.remove(
   'animacaoLegenda')
 })
 lantanideos.forEach(function(
  lantanideo) {
  lantanideo.classList.remove(
   'animacaoLegenda')
 })
 actinidios.forEach(function(
  actinidio) {
  actinidio.classList.remove(
   'animacaoLegenda')
 })
}, 3100)

function limpar() {
 txtTh.style.background = '#C0C0C0'
 txtTh.innerText = 'tabela periódica'
 inicial.classList.remove('invisivel')
 icone.classList.add('invisivel')
 informativo.classList.add('invisivel')
}

function mostrarIcone() {
 inicial.classList.add('invisivel')
 icone.classList.remove('invisivel')
 informativo.classList.remove(
  'invisivel')
}

naoMetais.forEach(function(naoMetal) {
 naoMetal.onmouseover = () => {
  txtTh.style.background = '#7FFF00'
  icone.style.background = '#7FFF00'
  mostrarIcone()
 }
 naoMetal.onmouseout = () => limpar()
})

metaisAlcalinos.forEach(function(
 metalAlcalino) {
 metalAlcalino.onmouseover = () => {
  txtTh.style.background = '#FFD700'
  icone.style.background = '#FFD700'
  mostrarIcone()
 }
 metalAlcalino.onmouseout = () =>
  limpar()
})

semimetais.forEach(function(
 semimetal) {
 semimetal.onmouseover = () => {
  txtTh.style.background = '#20B2AA'
  icone.style.background = '#20B2AA'
  mostrarIcone()
 }
 semimetal.onmouseout = () =>
  limpar()
})

metaisAlcalinosTerrosos.forEach(
 function(metalAlcalinoTerroso) {
  metalAlcalinoTerroso.onmouseover =
   () => {
    txtTh.style.background = '#FFFF00'
    icone.style.background = '#FFFF00'
    mostrarIcone()
   }
  metalAlcalinoTerroso.onmouseout =
   () => limpar()
 })

metaisDeTransicao.forEach(function(
 metalDeTransicao) {
 metalDeTransicao.onmouseover =
  () => {
   txtTh.style.background = '#FA8072'
   icone.style.background = '#FA8072'
   mostrarIcone()
  }
 metalDeTransicao.onmouseout = () =>
  limpar()
})

outrosMetais.forEach(function(
 outroMetal) {
 outroMetal.onmouseover = () => {
  txtTh.style.background = '#B0C4DE'
  icone.style.background = '#B0C4DE'
  mostrarIcone()
 }
 outroMetal.onmouseout = () =>
  limpar()
})

halogenios.forEach(function(
 halogenio) {
 halogenio.onmouseover = () => {
  txtTh.style.background = '#87CEEB'
  icone.style.background = '#87CEEB'
  mostrarIcone()
 }
 halogenio.onmouseout = () =>
  limpar()
})

gasesNobres.forEach(function(
 gasNobre) {
 gasNobre.onmouseover = () => {
  txtTh.style.background = '#4169E1'
  icone.style.background = '#4169E1'
  mostrarIcone()
 }
 gasNobre.onmouseout = () => limpar()
})

lantanideos.forEach(function(
 lantanideo) {
 lantanideo.onmouseover = () => {
  txtTh.style.background = '#48D1CC'
  icone.style.background = '#48D1CC'
  mostrarIcone()
 }
 lantanideo.onmouseout = () =>
  limpar()
})

actinidios.forEach(function(
 actinidio) {
 actinidio.onmouseover = () => {
  txtTh.style.background = '#D8BFD8'
  icone.style.background = '#D8BFD8'
  mostrarIcone()
 }
 actinidio.onmouseout = () =>
  limpar()
})

celulas.forEach(function(elemento) {
 elemento.onmouseenter = () => {
  if (elemento.innerText ==
   '57-71') {
   for (let i = 129; i <=
    143; i++) {
    celulas[i].classList.add(
     'animacao')
   }
  } else {
   for (let i = 129; i <=
    143; i++) {
    celulas[i].classList.remove(
     'animacao')
   }
  }

  if (elemento.innerText ==
   '89-103') {
   for (let i = 147; i <=
    161; i++) {
    celulas[i].classList.add(
     'animacao')
   }
  } else {
   for (let i = 147; i <=
    161; i++) {
    celulas[i].classList.remove(
     'animacao')
   }
  }

 }
})
