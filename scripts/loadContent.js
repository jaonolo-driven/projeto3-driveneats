const json = JSON.parse(`
    {
        "whatsappNumber": 5517997652657,
        "content" : [
            {
                "name": "Prato",
                "dataIdentifier": "dishes",
                "title": "Primeiro, seu prato",
                "values": [
                    {
                        "name": "Excaliburguer",
                        "description": "Faca mágica não é inclusa",
                        "price": 22.50
                    },
                    {
                        "name": "Combo Japacama",
                        "description": "Parabéns Japão, isso é lindo",
                        "price": 35.40
                    },
                    {
                        "name": "Lasanha",
                        "description": "Parabéns Itália, isso é lindo",
                        "price": 15.15
                    }
                ]
            },
            {
                "name": "Bebida",
                "dataIdentifier": "drinks",
                "title": "Agora, sua bebida",
                "values": [
                    {
                        "name": "Chazin Gelado",
                        "description": "A escolha do pessoal de bom gosto!",
                        "price": 2.40
                    },
                    {
                        "name": "Soda Italiana",
                        "description": "Refri de burguês?",
                        "price": 8.90
                    },
                    {
                        "name": "Suco de cevada",
                        "description": "Suco...",
                        "price": 5.50
                    }
                ]
            },
            {
                "name": "Sobremesa",
                "dataIdentifier": "desserts",
                "title": "Por fim, sua sobremesa",
                "values": [
                    {
                        "name": "Torta de limão",
                        "description": "A clássica, sem erro",
                        "price": 10.35
                    },
                    {
                        "name": "Banoffe",
                        "description": "Nome estranho, sobremesa boa",
                        "price": 12.70
                    },
                    {
                        "name": "Minimerengue",
                        "description": "É mini, é merengue, é minimerengue",
                        "price": 8.60
                    }
                ]
            }
        ]
    }`
)

const contentSource = json.content
const whatsappNumber = json.whatsappNumber

let selectedButtons = Array(contentSource.length).fill(null)