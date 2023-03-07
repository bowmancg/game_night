import { appState } from "../AppState.js";
import { playersService } from "../Services/PlayersServices.js"



export class PlayersController {

    constructor() {
        appState.players.forEach(p => p.greeting())
        console.log('controller loaded');
        this.drawPlayers()
    }

    drawPlayers() {
        let players = appState.players
        let template = ''
        players.forEach(player => template += player.PlayerTemplate)
        document.getElementById('players').innerHTML = template
    }

    decrease(name) {
        playersService.decrease(name)
        this.drawPlayers()
    }

    add(name) {
        playersService.add(name)
        this.drawPlayers()
    }
}