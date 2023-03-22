// SELECT ELEMENTS
const menu_button = document.body.querySelector('.menu_button')
const menu = document.body.querySelector('.screen_menu')
const play_button = document.body.querySelector('.play_button')
const next_button = document.body.querySelector('.forward_button')
const back_button = document.body.querySelector('.back_button')
const upload_button = document.body.querySelector('.upload_button')
const ipod = document.body.querySelector('.ipod')
const songs_list = document.body.querySelector('.songs_list')
const songs_list_content = document.querySelector('.songs_list ul')

// LOAD SONGS FROM EXPRESS SERVER
async function loadSongs() {
    let audio_array = await fetch('http://localhost:3000/songs')
    .then((res) => {
        return res.json()
    })
    .catch((err) => {
        console.log(err)
    })
    let index = 0
    let active_count = 0
    let audio_source = new Audio(`../playlist/${audio_array[index]}`)
    // POPULATE SONGS IN MENU
    audio_array.map((song) => {
        let li = document.createElement("li")
        if (index == 0) {
            li.setAttribute('active', 'active')
            index += 1
        }
        li.append(`${song}`)
        songs_list_content.append(li)
    })
    // UPLOAD SONGS 
    upload_button.addEventListener("click", (event) => {
        event.preventDefault
        // Open modal
    })
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

    // MENU CLICK HANDLER


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
        //Prevent page reloads
        event.preventDefault
        //Song index + 1
        index += 1; 
        console.log(songs_list_content.children)
        // Change menu active attribute to next song
        songs_list_content.children[index - 1].setAttribute("active","false")
        songs_list_content.children[index].setAttribute("active","active")
        console.log("clicked next")
        audio_source.pause()
        audio_source = new Audio(`../playlist/${audio_array[index]}`)
        audio_source.play()
    })

    // BACK BUTTON 
    back_button.addEventListener("click", (event) => {
        event.preventDefault
        index -= 1; 
        console.log(index)
        console.log("clicked next")
        audio_source.pause()
        audio_source = new Audio(`../playlist/${audio_array[index]}`)
        audio_source.play()
    })

}
loadSongs()