let spaceship = {
    velocity: 0,
    speedUp: function (acceleration) {
        this.velocity += acceleration
    }
}

function registerSpaceship() {
    spaceship.name = prompt('Informe o nome da nave: ')
    spaceship.type = prompt('Informe o tipo da nave: ')
    spaceship.maxVelocity = Number(prompt('Informe a velocidade máxima da nave (km/s)'))
}

function acelerate() {
    let acceleration = Number(prompt("Quanto você quer acelerar? (km/s)"))
    spaceship.speedUp(acceleration)
    if (spaceship.velocity > spaceship.maxVelocity) {
        alert("VELOCIDADE MÁXIMA ULTRAPASSADA!\nVelocidade da Nave: " + spaceship.velocity + "km/s" +
            "\nVelocidade náxima da nave: " + spaceship.maxVelocity + "km/s")
    }
}

function parar() {
    alert("Nome: " + spaceship.name + "\nTipo: " + spaceship.type
        + "\nVelocidade da nave: " + spaceship.velocity + "\nMáxima da nave: " + spaceship.maxVelocity)
    spaceship.velocity = 0
}

function showMenu() {
    let choseOption
    do {
        choseOption = prompt("Você deseja: \n1- Acelerar \n2- Parar")
        switch (choseOption) {
            case "1":
                acelerate()
                break
            case "2": 
                parar()
                break
            default:
                alert("Opção inválida")
        }
    } while(choseOption != "2")
}

registerSpaceship()
showMenu()
