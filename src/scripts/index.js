console.log("hello_world")
// SELECT ELEMENTS
const menu_button = document.body.querySelector('.menu_button')
const menu = document.body.querySelector('.screen_menu')
const play_button = document.body.querySelector('.play_button')
const next_button = document.body.querySelector('.forward_button')
const ipod = document.body.querySelector('.ipod')
const songs_list = document.body.querySelector('.songs_list')

// AUDIO 
const audio_array = [
    "'The Grid' by @SavfkMusic  🇮🇹 _  Epic Music (No Copyright) 💪-zTdzbNVf6lE.webm",
    "Everything Is Alright - Motion City Soundtrack-0iB8FPrauFw.mp4"
]
let index = 0
let file = audio_array[index]
var audio_source = new Audio(`../playlist/${file}`)

// INTERACT WITH FILESYSTEM (NEED SERVER)
// const reader = new FileReader()
// reader.addEventListener('load', (event) => {
//     audio_array = event.target.result
// })

// reader.readAsText('../../playlist')

// MENU TOGGLE
let visible = true
menu_button.addEventListener("click", (event) => {
    event.preventDefault
    if (visible) {
        menu.style.visibility = "hidden"
        songs_list.style.visibility = "hidden"
        visible = false
    } else {
        menu.style.visibility = "visible"
        songs_list.style.visibility = "visible"
        visible = true
    }
})

// PLAY TOGGLE 
let playing = false
play_button.addEventListener("click", (event) => {
    event.preventDefault
    if(playing) {
        audio_source.pause()
        document.body.querySelector('.play_button-img').src = "../icons/2203515_media_music_play_triangle_icon.png"
        playing = false
    } else {
        audio_source.play()
        document.body.querySelector('.play_button-img').src = "../icons/2203518_block_cube_music_square_stop_icon.png"
        playing = true
    }
})

// NEXT BUTTON
next_button.addEventListener("click", (event) => {
    event.preventDefault
    index += 1; 
    console.log(file)
    console.log("clicked next")
    audio_source.pause()
    audio_source = new Audio(`../playlist/${file}`)
    audio_source.play()
})

