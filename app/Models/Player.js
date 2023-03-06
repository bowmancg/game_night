



export class Player {
    constructor(name, score, highScore) {
        this.name = name
        this.score = 0
        this.highScore = 0
    }

    greeting() {
        console.log(`This is ${this.name}, their score is ${this.score}`);
    }

    get PlayerTemplate() {
        return `
        <div id="players" class="row">
        <div class="col-12 card p-3">
          <div class="bg-dark text-light rounded elevation-3 p-4">
            <h2>Players</h2>
            <h4>
                <button onclick="app.playersController.decrease('${this.name}')">-</button> 
                <p>${this.score} | ${this.name} | ${this.highScore} </p> 
                <button onclick="app.playersController.add('${this.name}')">+</button>
            </h4>
          </div>
        </div>
      </div>
        `
    }
}