// LOAD SONGS FROM EXPRESS SERVER
const getData = () => {
    fetch('http://localhost:3000/songs')
    .then((res) => {
        return res.json()
    })
}

export default getData