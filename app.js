// Juego de Adivinanza de Jugadores de Inazuma Eleven
let usedPlayers = []; // Array para almacenar los jugadores que ya han sido intentados

const players = [
  {
    name: "Mark Evans",
    teams: ["Raimon", "Inazuma Japon", "Orfeo" ],
    position: "Portero",
    element: "Montaña",
    image: "img/Mark.webp",
    age: "Segundo año",
    gender: "Masculino",
    debut : "Inazuma Eleven",
  },
  {
    name: "Axel Blaze",
    teams: ["Raimon", "Inazuma Japon", "Kirkwood"],
    position: "Delantero",
    element: "Fuego",
    image: "img/Axel.webp",
    age: "Segundo año",
    gender: "Masculino",
    debut : "Inazuma Eleven",
  },
  {
    name: "Jude Sharp",
    teams: ["Raimon", "Royal Academy", "Inazuma Japon", "Orfeo"],
    position: "Centrocampista",
    element: "Aire",
    image: "img/Jude.webp",
    age: "Segundo año",
    gender: "Masculino",
    debut: "Inazuma Eleven",
  },
  {
    name: "Kevin Dragonfly",
    teams: ["Raimon", "Inazuma Japon", "Emperadores Oscuros"],
    position: "Delantero",
    element: "Bosque",
    image: "img/Kevin.webp",
    age: "Segundo año",
    gender: "Masculino",
    debut: "Inazuma Eleven",
  },
  {
    name: "Nathan Swift",
    teams: ["Raimon", "Inazuma Japon", "Emperadores Oscuros"],
    position: "Defensa",
    element: "Aire",
    image: "img/Nathan.webp",
    age: "Segundo año",
    gender: "Masculino",
    debut: "Inazuma Eleven",
  },
  {
    name: "William Glass",
    teams: ["Raimon", "Inazuma Japon"],
    position: "Delantero",
    element: "Bosque",
    image: "img/William.webp",
    age: "Segundo año",
    gender: "Masculino",
    debut: "Inazuma Eleven",
  },
  {
    name: "Bobby Shearer",
    teams: ["Raimon","Royal Academy" ,"Unicorn"],
    position: "Defensa",
    element: "Bosque",
    image: "img/Bobby.webp",
    age: "Segundo año",
    gender: "Masculino",
    debut: "Inazuma Eleven",
  },
  {
    name: "Steve Grim",
    teams: ["Raimon", "Emperadores Oscuros"],
    position: "Centrocampista",
    element: "Aire",
    image: "img/Steve.webp",
    age: "Segundo año",
    gender: "Masculino",
    debut: "Inazuma Eleven",
  },
  {
    name: "Erik Eagle",
    teams: ["Raimon", "Unicorn"],
    position: "Centrocampista",
    element: "Bosque",
    image: "img/Erik.webp",
    age: "Segundo año",
    gender: "Masculino",
    debut: "Inazuma Eleven",
  },
  {
    name: "Jack Wallside",
    teams: ["Raimon", "Inazuma Japon"],
    position: "Defensa",
    element: "Montaña",
    image: "img/Jack.webp",
    age: "Primer año",
    gender: "Masculino",
    debut: "Inazuma Eleven",
  },
  {
    name: "Maxwell Carson",
    teams: ["Raimon", "Emperadores Oscuros"],
    position: "Centrocampista",
    element: "Aire",
    image: "img/Max.webp",
    age: "Segundo año",
    gender: "Masculino",
    debut: "Inazuma Eleven",
  },
  {
    name: "Sam Kincaid",
    teams: ["Raimon", "Emperadores Oscuros"],
    position: "Centrocampista",
    element: "Fuego",
    image: "img/Sam.webp",
    age: "Primer año",
    gender: "Masculino",

  },
  {
    name: "Jim Wraith",
    teams: ["Raimon", "Emperadores Oscuros"],
    position: "Defensa",
    element: "Bosque",
    image: "img/Jim.webp",
    age: "Segundo año",
    gender: "Masculino",
    debut: "Inazuma Eleven",
  },
  {
    name: "Tim Saunders",
    teams: ["Raimon", "Emperadores Oscuros"],
    position: "Centrocampista",
    element: "Bosque",
    image: "img/Tim.webp",
    age: "Primer año",
    gender: "Masculino",
    debut: "Inazuma Eleven",
  },
  {
    name: "Shadow Cimmerian",
    teams: ["Raimon", "Emperadores Oscuros"],
    position: "Delantero",
    element: "Bosque",
    image: "img/shadow.webp",
    age: "Segundo año",
    gender: "Masculino",
    debut: "Inazuma Eleven",
  },
  {
    name: "Paul Peabody",
    teams: ["Raimon"],
    position: "Centrocampista",
    element: "Aire",
    image: "img/Paul.webp",
    age: "Primer año",
    gender: "Masculino",
    debut: "Inazuma Eleven",
  },
  {
    name: "Tod Ironside",
    teams: ["Raimon", "Emperadores Oscuros", "Inazuma Japon"],
    position: "Defensa",
    element: "Fuego",
    image: "img/Tod.webp",
    age: "Primer año",
    gender: "Masculino",
    debut: "Inazuma Eleven",
  },
  {
    name: "Darren LaChance",
    teams: ["Raimon", "Fauxshore", "Inazuma Japon"],
    position: "Portero",
    element: "Bosque",
    image: "img/Darren.webp",
    age: "Primer año",
    gender: "Masculino",
    debut: "Inazuma Eleven 2",
  },
  {
    name: "Hurley Kane",
    teams: ["Raimon", "Mary Times Memorial", "Inazuma Japon"],
    position: "Defensa",
    element: "Aire",
    image: "img/Hurley.webp",
    age: "Tercer año",
    gender: "Masculino",
    debut: "Inazuma Eleven 2",
  },
  {
    name: "Scott Banyan",
    teams: ["Raimon", "Claustro Sagrado", "Inazuma Japon"],
    position: "Defensa",
    element: "Bosque",
    image: "img/Scott.webp",
    age: "Primer año",
    gender: "Masculino",
    debut: "Inazuma Eleven 2",
  },
  {
    name: "Suzette Hartland",
    teams: ["Raimon", "Triple C"],
    position: "Delantero",
    element: "Bosque",
    image: "img/Suzette.webp",
    age: "Segundo año",
    gender: "Femenino",
    debut: "Inazuma Eleven 2",
  },
  {
    name: "Victoria Vanguard",
    teams: ["Raimon", "Servicio Secreto", "Inazuma Japon"],
    position: "Centrocampista",
    element: "Aire",
    image: "img/Victoria.webp",
    age: "Segundo año",
    gender: "Femenino",
    debut: "Inazuma Eleven 2",
  },
  {
    name: "Shawn Froste",
    teams: ["Raimon", "Alpino", "Inazuma Japon"],
    position: "Defensa",
    element: "Aire",
    image: "img/Shawn.webp", 
    age: "Segundo año",
    gender: "Masculino",
    debut: "Inazuma Eleven 2",
  },
  {
    name: "Byron Love",
    teams: ["Raimon", "Zeus", "Dragones de Fuego"],
    position: "Centrocampista",
    element: "Bosque",
    image: "img/Byron.webp",
    age: "Segundo año",
    gender: "Masculino",
    debut: "Inazuma Eleven",
  },
  {
    name: "Seymour Hillman",
    teams: ["Raimon", "Inazuma Eleven", "Inazuma Japon"],
    position: "Entrenador",
    element: "Montaña",
    image: "img/Seymour.webp",
    age: "Adulto",
    gender: "Masculino",
    debut: "Inazuma Eleven",
  },
  {
    name: "Aquilina Schiller",
    teams: ["Raimon", "Neo Japón"],
    position: "Entrenador",
    element: "Bosque",
    image: "img/Aquilina.webp",
    age: "Adulto",
    debut: "Inazuma Eleven 2",
  },
  {
    name: "Frank Wintersea",
    teams: ["Raimon"],
    position: "Entrenador",
    element: "Aire",
    image: "img/Frank.webp",
    age: "Adulto",
    gender: "Femenino",
    debut: "Inazuma Eleven",
  },
  {
    name: "Silvia Woods",
    teams: ["Raimon", "Inazuma Japon"],
    position: "Gerente",
    element: "Montaña",
    image: "img/Silvia.webp",
    age: "Segundo año",
    gender: "Femenino",
    debut: "Inazuma Eleven",
  },
  {
    name: "Nelly Raimon",
    teams: ["Raimon", "Little Giants", "Inazuma Japon"],
    position: "Gerente",
    element: "Fuego",
    image: "img/Nelly.webp",
    age: "Segundo año",
    gender: "Femenino",
    debut: "Inazuma Eleven",
  },
  {
    name: "Celia Hills",
    teams: ["Raimon", "Inazuma Japon"],
    position: "Gerente",
    element: "Aire",
    image: "img/Celia.webp",
    age: "Primer año",
    gender: "Femenino",
    debut: "Inazuma Eleven",
  },
  {
    name: "Camellia Travis",
    teams: ["Raimon", "Inazuma Japon"],
    position: "Gerente",
    element: "Bosque",
    image: "img/Camellia.webp",
    age: "Segundo año",
    gender: "Femenino",
    debut: "Inazuma Eleven 3",
  },
  {
    name: "Charles Island",
    teams: ["Inazuma eleven"],
    position: "Defensa",
    element: "Bosque",
    image: "img/Island.webp",
    age: "Adulto",
    gender: "Masculino",
    debut: "Inazuma Eleven",
  },
  {
    name: "Constant Builder",
    teams: ["Inazuma Eleven"],
    position: "Delantero",
    element: "Fuego",
    image: "img/Builder.webp",
    age: "Adulto",
    gender: "Masculino",
    debut: "Inazuma Eleven",
  },
  {
    name: "Thomas Feldt",
    teams: ["Brain", "Emperadores Oscuros"],
    position: "Portero",
    element: "Bosque",
    image: "img/Feldt.webp",
    age: "Tercer año",
    gender: "Masculino",
    debut: "Inazuma Eleven",
  },
  {
    name: "Neil Turner",
    teams: ["Brain", "Neo Japón"],
    position: "Delantero",
    element: "Fuego",
    image: "img/Turner.webp",
    age: "Segundo año",
    gender: "Masculino",
    debut: "Inazuma Eleven",
  }, 
  {
    name: "Maddie Moonlight",
    teams: ["Kids FC"],
    position: "delantero",
    element: "Bosque",
    image: "img/Maddie.webp",
    age: "Alevin",
    gender: "Femenino",
    debut: "Inazuma Eleven",
  },
  {
    name: "Hans Randall",
    teams: ["Kids FC"],
    position: "Delantero",
    element: "Fuego",
    image: "img/Randall.webp",
    age: "Alevin",
    gender: "Masculino",
    debut: "Inazuma Eleven",
  },
  {
    name: "Albert Green",
    teams: ["Farm"],
    position: "Portero",
    element: "Fuego",
    image: "img/Greeny.webp",
    age: "Segundo año",
    gender: "Masculino",
    debut: "Inazuma Eleven",
  },
  {
    name: "John Neville",
    teams: ["Kirkwood"],
    position: "Portero",
    element: "Fuego",
    image: "img/Neville.webp",
    age: "Tercer año",
    gender: "Masculino",
    debut: "Inazuma Eleven",
  },
  {
    name: "Malcolm Night",
    teams: ["Kirkwood", "Emperadores Oscuros"],
    position: "Defensa",
    element: "Fuego",
    image: "img/Night.webp",
    age: "Segundo año",
    gender: "Masculino",
    debut: "Inazuma Eleven",
  },
  {
    name: "Marvin Murdock",
    teams: ["kirkwood"],
    position: "Delantero",
    element: "Fuego",
    image: "img/Marvin.webp",
    age: "Segundo año",
    gender: "Masculino",
    debut: "Inazuma Eleven",
  },
  {
    name: "Thomas Murdock",
    teams: ["Kirkwood"],
    position: "Delantero",
    element: "Aire",
    image: "img/Thomas.webp",
    age: "Segundo año",
    gender: "Masculino",
    debut: "Inazuma Eleven",
  },
  {
    name: "Tyler Murdock",
    teams: ["Kirkwood", "Neo Japón"],
    position: "Delantero",
    element: "Montaña",
    image: "img/Tyler.webp",
    age: "Segundo año",
    gender: "Masculino",
    debut: "Inazuma Eleven",
  },
  {
    name: "Nathan Jones",
    teams: ["Occult"],
    position: "Portero",
    element: "Aire",
    image: "img/Mask.webp",
    age: "Segundo año",
    gender: "Masculino",
    debut: "Inazuma Eleven",
  },
  {
    name: "Johan Tassman",
    teams: ["Occult", "Neo Japón"],
    position: "Delantero",
    element: "Bosque",
    image: "img/Talisman.webp",
    age: "Primer año",
    gender: "Masculino",
    debut: "Inazuma Eleven",
  },
  {
    name: "Troy Moon",
    teams: ["Occult"],
    position: "Delantero",
    element: "Fuego",
    image: "img/Wolfy.webp",
    age: "Tercer año",
    gender: "Masculino",
    debut: "Inazuma Eleven",
  },
  {
    name: "Sam Idol",
    teams: ["Otaku"],
    position: "Portero",
    element: "Montaña",
    image: "img/Idol.webp",
    age: "Segundo año",
    gender: "Masculino",
    debut: "Inazuma Eleven",
  },
  {
    name: "Light Nobel",
    teams: ["Otaku"],
    position: "Centrocampista",
    element: "Bosque",
    image: "img/29_Novel.webp",
    age: "Segundo año",
    gender: "Masculino",
    debut: "Inazuma Eleven",
  },
  {
    name: "Mark Gambling",
    teams: ["Otaku"],
    position: "Delantero",
    element: "Aire",
    image: "img/(OTK)_Artist.webp",
    age: "Segundo año",
    gender: "Masculino",
    debut: "Inazuma Eleven",
  },
  {
    name: "Sail Bluesea",
    teams: ["Shuriken", "Neo Japón"],
    position: "Delantero",
    element: "Fuego",
    image: "img/29_Cloak.webp",
    age: "Segundo año",
    gender: "Masculino",
    debut: "Inazuma Eleven",
  },
  {
    name: "Phil Wingate",
    teams: ["Shuriken"],
    position: "Centrocampista",
    element: "Montaña",
    image: "img/(SRK)_Code.webp",
    age: "Segundo año",
    gender: "Masculino",
    debut: "Inazuma Eleven",
  },
  {
    name: "Lou Edmonds",
    teams: ["Umbrella"],
    position: "Delantero",
    element: "Fuego",
    image: "img/29_Edmonds.webp",
    age: "Primer año",
    gender: "Masculino",
    debut: "Inazuma Eleven",
  },
  {
    name: "Hugo Talgeese",
    teams: ["Wild"],
    position: "Centrocampista",
    element: "Fuego",
    image: "img/29_Chicken.webp",
    age: "Primer año",
    gender: "Masculino",
    debut: "Inazuma Eleven",
  },
  {
    name: "Steve Eagle",
    teams: ["Wild"],
    position: "Centrocampista",
    element: "Aire",
    image: "img/29_Eagle.webp",
    age: "Segundo año",
    gender: "Masculino",
    debut: "Inazuma Eleven",
  },
  {
    name: "Adrian Speed",
    teams: ["Wild"],
    position: "Delantero",
    element: "Aire",
    image: "img/29_Cheetah.webp",
    age: "Tercer año",
    gender: "Masculino",
    debut: "Inazuma Eleven",
  },
  {
    name: "Paul Siddon",
    teams: ["Zeus"],
    position: "Portero",
    element: "Montaña",
    image: "img/29_Poseidon.webp",
    age: "Tercer año",
    gender: "Masculino",
    debut: "Inazuma Eleven",
  },
  {
    name: "Jeff Iron",
    teams: ["Zeus"],
    position: "Defensa",
    element: "Fuego",
    image: "img/29_Hephestus.webp",
    age: "Tercer año",
    gender: "Masculino",
    debut: "Inazuma Eleven",
  },
  {
    name: "Danny Wood",
    teams: ["Zeus"],
    position: "Defensa",
    element: "Aire",
    image: "img/(Z)_Dionysus.webp",
    age: "Primer año",
    gender: "Masculino",
    debut: "Inazuma Eleven",
  },
  {
    name: "Arion Matlock",
    teams: ["Zeus"],
    position: "Centrocampista",
    element: "Bosque",
    image: "img/29_Hermes.webp",
    age: "Segundo año",
    gender: "Masculino",
    debut: "Inazuma Eleven",
  },
  {
    name: "Jonas Demetrius",
    teams: ["Zeus", "Neo Japón"],
    position: "Delantero",
    element: "Fuego",
    image: "img/29_Demeter.webp",
    age: "Segundo año",
    gender: "Masculino",
    debut: "Inazuma Eleven",
  },
  {
    name: "Henry House",
    teams: ["Zeus", "Neo Japón"],
    position: "Centrocampista",
    element: "Fuego",
    image: "img/29_Hera.webp",
    age: "Tercer año",
    gender: "Masculino",
    debut: "Inazuma Eleven",
  },
  {
    name: "Joseph King",
    teams: ["Royal Academy", "Royal Academy Redux", "Neo Japón"],
    position: "Portero",
    element: "Fuego",
    image: "img/(RA)_King.webp",
    age: "Segundo año",
    gender: "Masculino",
    debut: "Inazuma Eleven",
  },
  {
    name: "Alan Master",
    teams: ["Royal Academy", "Neo Japón"],
    position: "Defensa",
    element: "Aire",
    image: "img/29_Master.webp",
    age: "Primer año",
    gender: "Masculino",
    debut: "Inazuma Eleven",
  },
  {
    name: "Gus Martin",
    teams: ["Royal Academy"],
    position: "Defensa",
    element: "Bosque",
    image: "img/29_Martin.webp",
    age: "Segundo año",
    gender: "Masculino",
    debut: "Inazuma Eleven",
  },
  {
    name: "David Samford",
    teams: ["Royal Academy", "Royal Academy Redux", "Inazuma Japon", "Orfeo"],
    position: "Delantero",
    element: "Bosque",
    image: "img/29_Samford.webp",
    age: "Segundo año",
    gender: "Masculino",
    debut: "Inazuma Eleven",
  },
  {
    name: "Caleb Stonewall",
    teams: ["Royal Academy Redux", "Inazuma Japon", "Orfeo"],
    position: "Centrocampista",
    element: "Fuego",
    image: "img/29_Caleb.webp",
    age: "Segundo año",
    gender: "Masculino",
    debut: "Inazuma Eleven 2",
  },
  {
    name: "Ray Dark",
    teams: ["Royal Academy", "Zeus", "Royal Academy Redux", "Orfeo"],
    position: "Entrenador",
    element: "Montaña",
    image: "img/Ray_Dark_29.webp",
    age: "Adulto",
    gender: "Masculino",
    debut: "Inazuma Eleven",
  },
  {
    name: "Grent(Grant Cook)",
    teams: ["Prominence", "Caos"],
    position: "Portero",
    element: "Fuego",
    image: "img/29_Grent.webp",
    age: "Segundo año",
    gender: "Masculino",
    debut: "Inazuma Eleven 2",
  },
  {
    name: "Clear(Claire Lesnow)",
    teams: ["Polvo de Diamantes", "Caos"],
    position: "Defensa",
    element: "Aire",
    image: "img/29_Clear.webp",
    age: "Segundo año",
    gender: "Femenino",
    debut: "Inazuma Eleven 2",
  },
  {
    name: "Icer(Lucy Hailstone)",
    teams: ["Polvo de Diamantes", "Caos"],
    position: "Defensa",
    element: "Aire",
    image: "img/29_Icer.webp",
    age: "Segundo año",
    gender: "Femenino",
    debut: "Inazuma Eleven 2",
  },
  {
    name: "Rhine(Ving Rice)",
    teams: ["Polvo de Diamantes", "Caos"],
    position: "Centrocampista",
    element: "Aire",
    image: "img/29_Rhine.webp",
    age: "Segundo año",
    gender: "Femenino",
    debut: "Inazuma Eleven 2",
  },
  {
    name: "Gazelle(Bryce Whitingale)",
    teams: ["Polvo de Diamantes", "Caos", "Dragones de Fuego"],
    position: "Delantero",
    element: "Aire",
    image: "img/29_Gazelle.webp",
    age: "Segundo año",
    gender: "Masculino",
    debut: "Inazuma Eleven 2",
  },
  {
    name: "Torch(Claude Beacons)",
    teams: ["Prominence", "Caos", "Dragones de Fuego"],
    position: "Delantero",
    element: "Fuego",
    image: "img/29_Torch.webp",
    age: "Segundo año",
    gender: "Masculino",
    debut: "Inazuma Eleven 2",
  },
  {
    name: "Nero(Nelson Rockwell)",
    teams: ["Génesis"],
    position: "Portero",
    element: "Aire",
    image: "img/29_Nero.webp",
    age: "Segundo año",
    gender: "Masculino",
    debut: "Inazuma Eleven 2",
  },
  {
    name: "Bellatrix(Isabelle Trick)",
    teams: ["Génesis"],
    position: "Centrocampista",
    element: "Aire",
    image: "img/29_Bellatrix.webp",
    age: "Segundo año",
    gender: "Femenino",
    debut: "Inazuma Eleven 2",
  },
  {
    name: "Xene(Xavier Foster)",
    teams: ["Génesis"],
    position: "Delantero",
    element: "Fuego",
    image: "img/29_Xene.webp",
    age: "Segundo año",
    gender: "Masculino",
    debut: "Inazuma Eleven 2",
  },
  {
    name: "Wittz(Wilbur Watkins)",
    teams: ["Génesis", "Neo Japón"],
    position: "Delantero",
    element: "Bosque",
    image: "img/29_Wittz.webp",
    age: "Segundo año",
    gender: "Masculino",
    debut: "Inazuma Eleven 2",
  },
  {
    name: "Aiden Froste",
    teams: ["Alpino"],
    position: "Delantero",
    element: "Aire",
    image: "img/29_Shawn_29.webp",
    age: "Segundo año",
    gender: "Masculino",
    debut: "Inazuma Eleven 2",
  },
  {
    name: "Kerry Bootgaiter",
    teams: ["Alpino"],
    position: " Centrocampista",
    element: "Aire",
    image: "img/29_Bootgaiter.webp",
    age: "Segundo",
    gender: "Femenino",
    debut: "Inazuma Eleven 2",
  },
  {
    name: "Cadence Soundtown",
    teams: ["Mary Times Memorial"],
    position: "Centrocampista",
    element: "Bosque",
    image: "img/29_Soundtown.webp",
    age: "Segundo año",
    gender: "Masculino",
    debut: "Inazuma Eleven 2",
  },
  {
    name: "Marge Fielding",
    teams: ["Servicio Secreto"],
    position: "Centrocampista",
    element: "Aire",
    image: "img/29_Agente_M.webp",
    age: "Adulto",
    gender: "Femenino",
    debut: "Inazuma Eleven 2",
  },
  {
    name: "Ian Smith",
    teams: ["Servicio Secreto"],
    position: "Defensa",
    element: "Bosque",
    image: "img/29_Smith.webp",
    age: "Adulto",
    gender: "Masculino",
    debut: "Inazuma Eleven 2",
  },
  {
    name: "Galileo(Gordon Star)",
    teams: ["Tormenta de Géminis"],
    position: "Portero",
    element: "Bosque",
    image: "img/29_Galileo.webp",
    age: "Desconocido",
    gender: "Masculino",
    debut: "Inazuma Eleven 2",
  },
  {
    name: "Rihm(Rhona Countdown)",
    teams: ["Tormenta de Géminis"],
    position: "Delantero",
    element: "Bosque",
    image: "img/29_Rihm.webp",
    age: "Desconocido",
    gender: "Femenino",
    debut: "Inazuma Eleven 2",
  },
  {
    name: "Janus(Jordan Greenway)",
    teams: ["Tormenta de Géminis"],
    position: "Centrocampista",
    element: "Bosque",
    image: "img/29_Janus.webp",
    age: "Segundo año",
    gender: "Masculino",
    debut: "Inazuma Eleven 2",
  },
  {
    name: "Jordan Greenway",
    teams: ["Inazuma Japon"],
    position: "Centrocampista",
    element: "Bosque",
    image: "img/29_Jordan.webp",
    age: "Segundo año",
    gender: "Masculino",
    debut: "Inazuma Eleven 2",
  },
  {
    name: "Alexia Sand",
    teams: ["Triple C"],
    position: "Defensa",
    element: "Bosque",
    image: "img/29_Sand.webp",
    age: "Segundo año",
    gender: "Femenino",
    debut: "Inazuma Eleven 2",
  },
  {
    name: "Dvalin(Dave Quagmire)",
    teams: ["Épsilon", "Épsilon Plus", "Neo Japón"],
    position: "Portero",
    element: "Fuego",
    image: "img/29_Dvalin.webp",
    age: "Tercer año",
    gender: "Masculino",
    debut: "Inazuma Eleven 2",
  },
  {
    name: "krypto(Karen Ripton)",
    teams: ["Épsilon", "Épsilon Plus"],
    position: "Centrocampista",
    element: "Aire",
    image: "img/29_Krypto.webp",
    age: "Desconocido",
    gender: "Femenino",
    debut: "Inazuma Eleven 2",
  },
  {
    name: "Zell(Zeke Valanche)",
    teams: ["Épsilon", "Épsilon Plus", "Neo Japón"],
    position: "Delantero",
    element: "Aire",
    image: "img/29_Zell.webp",
    age: "Segundo año",
    gender: "Masculino",
    debut: "Inazuma Eleven 2",
  },
  {
    name: "Gene Whalon",
    teams: ["Big Waves"],
    position: "Portero",
    element: "Aire",
    image: "img/29_Whale.webp",
    age: "Tercer año",
    gender: "Masculino",
    debut: "Inazuma Eleven 3",
  },
  {
    name: "Dolph Hensen",
    teams: ["Big Waves"],
    position: "Centrocampista",
    element: "Aire",
    image: "img/29_Dolphin.webp",
    age: "Tercer año",
    gender: "Masculino",
    debut: "Inazuma Eleven 3",
  },
  {
    name: "Astaroth",
    teams: ["Dark Team", "Ángeles Oscuros"],
    position: "Portero",
    element: "Fuego",
    image: "img/29_Astaroth.webp",
    age: "Desconocido",
    gender: "Masculino",
    debut: "Inazuma Eleven 3",
  },
  {
    name: "Destra",
    teams: ["Dark Team", "Ángeles Oscuros"],
    position: "Delantero",
    element: "Montaña",
    image: "img/29_Destra.webp",
    age: "Desconocido",
    gender: "Masculino",
    debut: "Inazuma Eleven 3",
  },
  {
    name: "Jang Cho",
    teams: ["Dragones de Fuego"],
    position: "Portero",
    element: "Bosque",
    image: "img/29_Jang.webp",
    age: "Segundo año",
    gender: "Masculino",
    debut: "Inazuma Eleven 3",
  },
  {
    name: "Changsu Choi",
    teams: ["Dragones de Fuego"],
    position: "Centrocampista",
    element: "Fuego",
    image: "img/29_Choi.webp",
    age: "Tercer año",
    gender: "Masculino",
    debut: "Inazuma Eleven 3",
  },
  {
    name: "Julio Acuto",
    teams: ["Equipo D"],
    position: "Centrocampista",
    element: "Fuego",
    image: "img/29_Acuto.webp",
    age: "Segundo año",
    gender: "Masculino",
    debut: "Inazuma Eleven 3",
  },
  {
    name: "Lars Luceafar",
    teams: ["Ogre"],
    position: "Portero",
    element: "Montaña",
    image: "img/29_Luceaf.webp",
    age: "Descocido",
    gender: "Masculino",
    debut: "Inazuma Eleven 3",
  },
  {
    name: "Oni Triumvir",
    teams: ["Ogre"],
    position: "Centrocampista",
    element: "Bosque",
    image: "img/29_Triumvir.webp",
    age: "Desconocido",
    gender: "Masculino",
    debut: "Inazuma Eleven 3",
  },
  {
    name: "Malice Escavan",
    teams: ["Ogre"],
    position: "Delantero",
    element: "Fuego",
    image: "img/29_Malice.webp",
    age: "Desconocido",
    gender: "Masculino",
    debut: "Inazuma Eleven 3",
  },
  {
    name: "Bash Lancer",
    teams: ["Ogre"],
    position: "Delantero",
    element: "Bosque",
    image: "img/29_Bash.webp",
    age: "Desconocido",
    gender: "Masculino",
    debut: "Inazuma Eleven 3",
  },
  {
    name: "Callous Mystral",
    teams: ["Ogre"],
    position: "Delantero",
    element: "Montaña",
    image: "img/29_Callous.webp",
    age: "Desconocido",
    gender: "Masculino",
    debut: "Inazuma Eleven 3",
  },
  {
    name: "Archer Hawkins",
    teams: ["Inazuam Japon"],
    position: "Defensa",
    element: "Aire",
    image: "img/29_Archer.webp",
    age: "Segundo año",
    gender: "Masculino",
    debut: "Inazuma Eleven 3",
  },
  {
    name: "Austin Hobbes",
    teams: ["Inazuma Japon"],
    position: "Delantero",
    element: "Bosque",
    image: "img/29_Austin.webp",
    age: "Alevin",
    gender: "Masculino",
    debut: "Inazuma Eleven 3",
  },
  {
    name: "Thor Stoutberg",
    teams: ["Inazuma Japon"],
    position: "Defensa",
    element: "Aire",
    image: "img/29_Thor.webp",
    age: "Segundo año",
    gender: "Masculino",
    debut: "Inazuma Eleven 3",
  },
  {
    name: "Xavier Foster",
    teams: ["Inazuma Japon"],
    position: "Delantero",
    element: "Fuego",
    image: "img/29_Xavier.webp",
    age: "Segundo año",
    gender: "Masculino",
    debut: "Inazuma Eleven 2",
  },
  {
    name: "Edgar Partinus",
    teams: ["Knights of Queen"],
    position: "Delantero",
    element: "Bosque",
    image: "img/29_Edgar.webp",
    age: "Tercer año",
    gender: "Masculino",
    debut: "Inazuma Eleven 3",
  },
  {
    name: "Philip Arwen",
    teams: ["Knights of Queen"],
    position: "Delantero",
    element: "Montaña",
    image: "img/29_Arwen.webp",
    age: "Desconocido",
    gender: "Masculino",
    debut: "Inazuma Eleven 3",
  },
  {
    name: "Nasir Mustafa",
    teams: ["Leones del Desierto"],
    position: "Portero",
    element: "Fuego",
    image: "img/29_Mustafa.webp",
    age: "Segundo año",
    gender: "Masculino",
    debut: "Inazuma Eleven 3",
  },
  {
    name: "Bilal Kalil",
    teams: ["Leones del Desierto"],
    position: "Defensa",
    element: "Bosque",
    image: "img/29_Kalil.webp",
    age: "Tercer año",
    gender: "Masculino",
    debut: "Inazuma Eleven 3",
  },
  {
    name: "Zack Abdulla",
    teams: ["Leones del Desierto"],
    position: "Delantero",
    element: "Fuego",
    image: "img/29_Abdulla.webp",
    age: "Segundo año",
    gender: "Masculino",
    debut: "Inazuma Eleven 3",
  },
  {
    name: "Thiago Torres",
    teams: ["Los Emperadores"],
    position: "Defensa",
    element: "Fuego",
    image: "img/29_Thiago.webp",
    age: "Tercer año",
    gender: "Masculino",
    debut: "Inazuma Eleven 3",
  },
  {
    name: "Leone Balone",
    teams: ["Los Emperadores"],
    position: "Delantero",
    element: "Fuego",
    image: "img/29_Balone.webp",
    age: "Desconocido",
    gender: "Masculino",
    debut: "Inazuma Eleven 3",
  },
  {
    name: "Víctor García",
    teams: ["Los Rojos"],
    position: "Defensa",
    element: "Montaña",
    image: "img/(LR)_García.webp",
    age: "Tercer año",
    gender: "Masculino",
    debut: "Inazuma Eleven 3",
  },
  {
    name: "Gigi Blasi",
    teams: ["Orfeo"],
    position: "Portero",
    element: "Aire",
    image: "img/29_Blasi.webp",
    age: "Tercer año",
    gender: "Masculino",
    debut: "Inazuma Eleven 3",
  },
  {
    name: "Angelo Gabrini",
    teams: ["Orfeo"],
    position: "Centrocampista",
    element: "Aire",
    image: "img/29_Angelo.webp",
    age: "Primer año",
    gender: "Masculino",
    debut: "Inazuma Eleven 3",
  },
  {
    name: "Paolo Bianchi",
    teams: ["Orfeo"],
    position: "Delantero",
    element: "Bosque",
    image: "img/29_Paolo.webp",
    age: "Segundo año",
    gender: "Masculino",
    debut: "Inazuma Eleven 3",
  },
  {
    name: "Hidetoshi Nakata",
    teams: ["Orfeo"],
    position: "Centrocampista",
    element: "Montaña",
    image: "img/29_Nakata.webp",
    age: "Tercer año",
    gender: "Masculino",
    debut: "Inazuma Eleven 3",
  },
  {
    name: "Raffaele Generani",
    teams: ["Orfeo"],
    position: "Delantero",
    element: "Montaña",
    image: "img/29_Generani.webp",
    age: "Segundo año",
    gender: "Masculino",
    debut: "Inazuma Eleven 3",
  },
  {
    name: "Falcão Da Silva",
    teams: ["Os Reis"],
    position: "Portero",
    element: "Montaña",
    image: "img/29_Da_Silva.webp",
    age: "Desconocido",
    gender: "Masculino",
    debut: "Inazuma Eleven 3",
  },
  {
    name: "Carlos Lagarto",
    teams: ["Os Reis"],
    position: "Defensa",
    element: "Bosque",
    image: "img/29_Lagarto.webp",
    age: "Desconocido",
    gender: "Masculino",
    debut: "Inazuma Eleven 3",
  },
  {
    name: "Mac Robingo",
    teams: ["Os Reis"],
    position: "Delantero",
    element: "Fuego",
    image: "img/29_Mac.webp",
    age: "Segundo año",
    gender: "Masculino",
    debut: "Inazuma Eleven 3",
  },
  {
    name: "Zoolan Rice",
    teams: ["Os Reis", "Zoolan Team"],
    position: "Entrenador",
    element: "Desconocido",
    image: "img/Zoolan_29.webp",
    age: "Adulto",
    gender: "Masculino",
    debut: "Inazuma Eleven 3",
  },
  {
    name: "Anorel",
    teams: ["Sky Team", "Ángeles Oscuros"],
    position: "Portero",
    element: "Bosque",
    image: "img/29_Anorel.webp",
    age: "Desconocido",
    gender: "Masculino",
    debut: "Inazuma Eleven 3",
  },
  {
    name: "Sael",
    teams: ["Sky Team", "Ángeles Oscuros"],
    position: "Delantero",
    element: "Bosque",
    image: "img/29_Sael.webp",
    age: "Desconocido",
    gender: "Masculino",
    debut: "Inazuma Eleven 3",
  },
  {
    name: "Gaiel",
    teams: ["Sky Team", "Ángeles Oscuros"],
    position: "Delantero",
    element: "Aire",
    image: "img/29_Gaiel.webp",
    age: "Desconocido",
    gender: "Femenino",
    debut: "Inazuma Eleven 3",
  },
  {
    name: "Hector Helio",
    teams: ["The Little Giants"],
    position: "Portero",
    element: "Montaña",
    image: "img/29_Hector_29.webp",
    age: "Segundo año",
    gender: "Masculino",
    debut: "Inazuma Eleven 3",
  },
  {
    name: "Zephyr Vitesse",
    teams: ["The Little Giants"],
    position: "Defensa",
    element: "Aire",
    image: "img/29_Vitesse.webp",
    age: "Segundo año",
    gender: "Masculino",
    debut: "Inazuma Eleven 3",
  },
  {
    name: "Maximo Cruz",
    teams: ["The Little Giants"],
    position: "Centrocampista",
    element: "Aire",
    image: "img/29_Maxim.webp",
    age: "Segundo año",
    gender: "Masculino",
    debut: "Inazuma Eleven 3",
  },
  {
    name: "Gareth Flare",
    teams: ["The Little Giants"],
    position: "Delantero",
    element: "Fuego",
    image: "img/29_Flare.webp",
    age: "Segundo año",
    gender: "Masculino",
    debut: "Inazuma Eleven 3",
  },
  {
    name: "Drago Hill",
    teams: ["The Little Giants"],
    position: "Delantero",
    element: "Bosque",
    image: "img/29_Drago.webp",
    age: "Segundo año",
    gender: "Masculino",
    debut: "Inazuma Eleven 3",
  },
  {
    name: "Keenan DiFortune",
    teams: ["The Little Giants"],
    position: "Portero",
    element: "Bosque",
    image: "img/29_DiFortune.webp",
    age: "Primer año",
    gender: "Masculino",
    debut: "Inazuma Eleven 3",
  },
  {
    name: "David Evans",
    teams: ["The Little Giants", "Inazuma Japon", "Raimon"],
    position: "Entrenador",
    element: "Montaña",
    image: "img/29_David.webp",
    age: "Adulto",
    gender: "Masculino",
    debut: "Inazuma Eleven",
  },
  // Agrega más jugadores aquí
];

// Elementos del DOM
const input = document.getElementById("playerInput");
const submitButton = document.getElementById("submitGuess");
const playButton = document.getElementById("playGame");
const feedback = document.getElementById("feedback");
const attemptsTable = document.querySelector("#attempts tbody");

let targetPlayer = null; // Jugador objetivo

// Función para seleccionar un jugador aleatorio
function selectRandomPlayer() {
  targetPlayer = players[Math.floor(Math.random() * players.length)];
  console.log("Jugador objetivo:", targetPlayer); // Solo para depuración
}

// Función para asignar colores según la precisión de los equipos
function getColorTeam(actualTeams, guessedTeams) {
  // Si todos los equipos coinciden, se pone verde
  if (actualTeams.length === guessedTeams.length && actualTeams.every(team => guessedTeams.includes(team))) {
    return "green";
  }
  
  // Si al menos un equipo coincide, se pone amarillo
  if (actualTeams.some(team => guessedTeams.includes(team))) {
    return "yellow";
  }
  
  // Si no hay coincidencias, se pone rojo
  return "red";
}

// Función para agregar un intento a la tabla
function addAttemptToTable(player) {
  const row = document.createElement("tr");

  // Verificar el color para el nombre y la imagen
  const nameCell = document.createElement("td");

  // Crear una celda que contenga la imagen y el nombre
  const playerNameDiv = document.createElement("div");
  playerNameDiv.classList.add("player-name");

  const playerImage = document.createElement("img");
  playerImage.src = player.image; // Fuente de la imagen
  playerImage.alt = player.name; // Texto alternativo (nombre del jugador)
  playerImage.style.width = "60px"; // Ajustar el tamaño de la imagen
  playerImage.style.height = "60px"; // Ajustar el tamaño de la imagen
  playerImage.style.marginRight = "10px"; // Espaciado entre la imagen y el nombre
  playerImage.style.objectFit = "cover"; // Asegura que la imagen no se distorsione

  const playerName = document.createElement("span");
  playerName.textContent = player.name;

  playerNameDiv.style.display = "flex";
  playerNameDiv.style.alignItems = "center"; 
  playerNameDiv.appendChild(playerImage);
  playerNameDiv.appendChild(playerName);

  // Agregar el nombre e imagen con el color (color de fondo)
  const colorClass = getColorTeam([targetPlayer.name], [player.name]); // Color basado en el nombre
  nameCell.innerHTML = `<div class="color-box ${colorClass}">${playerNameDiv.outerHTML}</div>`;

  // Verificar el color para los equipos
  const teamsCell = document.createElement("td");
  teamsCell.innerHTML = `<div class="color-box ${getColorTeam(targetPlayer.teams, player.teams)}">${player.teams.join(", ")}</div>`;

  // Verificar el color para la posición
  const positionCell = document.createElement("td");
  positionCell.innerHTML = `<div class="color-box ${getColorTeam([targetPlayer.position], [player.position])}">${player.position}</div>`;

  // Verificar el color para el elemento
  const elementCell = document.createElement("td");
  elementCell.innerHTML = `<div class="color-box ${getColorTeam([targetPlayer.element], [player.element])}">${player.element}</div>`;

  // Verificar el color para la edad
  const ageCell = document.createElement("td");
  ageCell.innerHTML = `<div class="color-box ${getColorTeam([targetPlayer.age], [player.age])}">${player.age}</div>`;

  // Verificar el color para el genero
  const genderCell = document.createElement("td");
  genderCell.innerHTML = `<div class="color-box ${getColorTeam([targetPlayer.gender], [player.gender])}">${player.gender}</div>`;

  // Verificar el color para el debut
  const debutCell = document.createElement("td");
  debutCell.innerHTML = `<div class="color-box ${getColorTeam([targetPlayer.debut], [player.debut])}">${player.debut}</div>`;

  row.appendChild(nameCell);
  row.appendChild(teamsCell);
  row.appendChild(positionCell);
  row.appendChild(elementCell);
  row.appendChild(ageCell);
  row.appendChild(genderCell);
  row.appendChild(debutCell);

  attemptsTable.prepend(row); // Insertar al inicio de la tabla
}

function filterPlayers(query) {
  const queryLower = query.toLowerCase(); // Convertir a minúsculas para que la búsqueda no sea sensible al caso
  return players.filter(player => player.name.toLowerCase().includes(queryLower));
}

// Función para mostrar las sugerencias con la foto y eliminar jugadores ya adivinados
function displaySuggestions(suggestions) {
  const suggestionsContainer = document.getElementById('suggestions');
  suggestionsContainer.innerHTML = ''; // Limpiar las sugerencias anteriores

  // Si el campo está vacío, no realizar ninguna acción
  if (!input.value.trim()) {
    return;
  }

  // Filtrar las sugerencias para eliminar a los jugadores ya intentados
  const filteredSuggestions = suggestions.filter(player => !usedPlayers.includes(player.name));

  // Mostrar sugerencias filtradas
  if (filteredSuggestions.length > 0) {
    filteredSuggestions.forEach(player => {
      const suggestionItem = document.createElement('div');
      suggestionItem.classList.add('suggestion-item');

      // Añadir la imagen y el nombre del jugador a la sugerencia
      suggestionItem.innerHTML = `
        <div class="suggestion-content">
          <img src="${player.image}" alt="${player.name}" class="suggestion-img">
          <span>${player.name}</span>
        </div>
      `;

      // Evento para seleccionar la sugerencia
      suggestionItem.addEventListener('click', () => {
        input.value = player.name; // Establecer el nombre del jugador en el input
        suggestionsContainer.innerHTML = ''; // Limpiar las sugerencias
      });

      suggestionsContainer.appendChild(suggestionItem);
    });
  } else {
    // Mostrar mensaje solo si hay texto en el campo
    if (input.value.trim()) {
      suggestionsContainer.innerHTML = '<div class="suggestion-item">No se encontraron resultados</div>';
    }
  }
}

// Evento que se activa cada vez que el usuario escribe algo
document.getElementById('playerInput').addEventListener('input', function () {
  const query = this.value.trim();

  // Limpiar siempre el contenedor de sugerencias primero
  const suggestionsContainer = document.getElementById('suggestions');
  suggestionsContainer.innerHTML = '';

  // Si el campo está vacío, salir de la función inmediatamente
  if (!query) {
    return; // Detenemos aquí para evitar mostrar mensajes innecesarios
  }

  // Si hay texto, buscar sugerencias y mostrarlas
  const suggestions = filterPlayers(query);
  displaySuggestions(suggestions);
});

//Funcion confetti para celebrar
function showConfetti() {
  confetti({
    particleCount: 200,
    spread: 70,
    origin: { x: 0.5, y: 0.5 },
    colors: ['#ff0', '#ff8c00', '#ff007f', '#8c00ff'],
    scalar: 1.2,
  });
}

// Lógica del juego
playButton.addEventListener("click", () => {
  selectRandomPlayer();
  attemptsTable.innerHTML = ""; // Limpiar la tabla de intentos
  feedback.innerHTML = "<p>Se ha seleccionado un jugador. ¡Intenta adivinarlo!</p>";

  // Limpiar los intentos previos
  attemptedPlayers = []; // Limpiar los jugadores intentadosç
  // Mostrar el campo de texto de adivinanza cuando se presiona "Jugar"
  input.style.display = "inline-block"; // Hacer visible el campo de texto
});

submitButton.addEventListener("click", () => {
  if (!targetPlayer) {
    feedback.innerHTML = "<p>Por favor, presiona el botón 'Jugar' para empezar.</p>";
    input.value = ""; // Asegúrate de limpiar el campo de entrada
    return;
  }

  const guess = input.value.trim();
  const player = players.find((p) => p.name.toLowerCase() === guess.toLowerCase());

  if (player) {
    // Agregar a los intentos
    addAttemptToTable(player);

    // Marcar este jugador como intentado
    usedPlayers.push(player.name); // Añadir el nombre del jugador a la lista de intentos

    // Actualizar las sugerencias para eliminar este jugador
    displaySuggestions(filterPlayers(input.value));

    feedback.innerHTML = "<p>Intento registrado. Sigue adivinando.</p>";

    if (player.name === targetPlayer.name) {
      feedback.innerHTML = "<p>¡Felicidades! Has adivinado el jugador correctamente.</p>";
      showConfetti(); // Mostrar confeti
    }
  } else {
    feedback.innerHTML = "<p>Jugador no encontrado o adivinanza incorrecta.</p>";
  }

  input.value = ""; // Limpiar el campo de entrada SIEMPRE
  document.getElementById('suggestions').innerHTML = ""; // Limpiar las sugerencias
});

// Iniciar un nuevo juego al presionar "Jugar"
playButton.addEventListener("click", () => {
  selectRandomPlayer();
  usedPlayers = []; // Limpiar los jugadores intentados
  document.getElementById('playerInput').value = '';
  document.getElementById('suggestions').innerHTML = '';
  attemptsTable.innerHTML = ""; // Limpiar la tabla de intentos
  feedback.innerHTML = "<p>Se ha seleccionado un jugador. ¡Intenta adivinarlo!</p>";
});

// Mostrar sugerencias en tiempo real mientras se escribe
input.addEventListener("input", (e) => {
  showSuggestions(e.target.value);
});
