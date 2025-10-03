const statesContaner = document.querySelector(".stats")
const songsContaner = document.querySelector(".tracks-list")
async function fetchData() {
    const skibidi = await fetch("https://kitek.ktkv.dev/songs.json")
    const skebob = await skibidi.json()
    
    let runtime = 0

    for (let i = 0; i < skebob.length; i++) {
        const tracks = document.createElement("li");
        tracks.classList.add("track-item");
        const song = skebob[i].track
        const ListArt = song.artists


        const number = document.createElement("div")
        number.classList.add("track-number")
        number.textContent = i + 1
        const mainSong = document.createElement("div")
        mainSong.classList.add("track-main")
        const infoSong = document.createElement("div")
        infoSong.classList.add("track-info")
        const nameSongs = document.createElement("div")
        nameSongs.classList.add("track-name")
        nameSongs.textContent = song.name

        const authorSongs = document.createElement("div")
        const authorNames = ListArt.map(artist => artist.name)
        authorSongs.textContent = authorNames

        const albumSongs = document.createElement("div")
        albumSongs.textContent = song.album.name

        const imageSongs = document.createElement("img")
        imageSongs.classList.add("album-art")
        imageSongs.src = song.album.images[0].url
        imageSongs.alt = song.album.images[0].url

        const durationSongs = document.createElement("div")
        durationSongs.classList.add("track-meta");
        const timeSong = document.createElement("div")
        timeSong.classList.add("duration")
        const time = song.duration_ms
        timeSong.textContent = (time / 60000).toFixed(2)

        const popularSongs = document.createElement("div")
        popularSongs.classList.add("popularity");
        popularSongs.textContent = "♪ " + song.popularity

        durationSongs.appendChild(timeSong)
        durationSongs.appendChild(popularSongs)
        infoSong.appendChild(nameSongs)
        infoSong.appendChild(authorSongs)
        infoSong.appendChild(albumSongs)
        mainSong.appendChild(imageSongs)
        mainSong.appendChild(infoSong)
        tracks.appendChild(number)
        tracks.appendChild(mainSong)
        tracks.appendChild(durationSongs)
        songsContaner.appendChild(tracks)
        runtime += time;
    }
    console.log(runtime)
    const durSongs = document.createElement("h5")
    durSongs.classList.add("total-duration")
    const hours = Math.floor(runtime / 3600000)
    const minutes = Math.floor((runtime % 3600000) / 100000)
    durSongs.textContent = "Треков: " + skebob.length +" Общая длительность: " + hours + " ч " + minutes + " мин "
    statesContaner.appendChild(durSongs)
}
fetchData()