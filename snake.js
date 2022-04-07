export const SNAKE_SPEED = 1
const snakeBody = [
    { x: 10, y: 11 },
    { x: 11, y: 11 },
    { x: 12, y: 11 }
]

export function update() {
    console.log('updateSnake')
}

export function draw(gameBoard) {
    snakeBody.forEach(segment => {
        const snaekElement = document.createElement('div')
        snaekElement.style.gridRowStart = segment.x
        snaekElement.style.gridColumnStart = segment.y
        snaekElement.classList.add('snake')
        gameBoard.appendChild(snaekElement)
    })
}