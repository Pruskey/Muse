document.addEventListener('DOMContentLoaded', () => {
    const playButton = document.getElementById('play');
    const prevButton = document.getElementById('prev');
    const nextButton = document.getElementById('next');
    const mostListenedList = document.getElementById('most-listened-list');

    const songs = [
        { title: 'Song 1', artist: 'Artist 1', cover: 'cover1.jpg' },
        { title: 'Song 2', artist: 'Artist 2', cover: 'cover2.jpg' },
        { title: 'Song 3', artist: 'Artist 3', cover: 'cover3.jpg' },
    ];

    let currentSongIndex = 0;

    function loadSong(song) {
        document.querySelector('.title').textContent = song.title;
        document.querySelector('.artist').textContent = song.artist;
        document.querySelector('.cover').src = song.cover;
    }

    function playSong() {
        playButton.textContent = 'Pause';
    }

    function pauseSong() {
        playButton.textContent = 'Play';
    }

    playButton.addEventListener('click', () => {
        if (playButton.textContent === 'Play') {
            playSong();
        } else {
            pauseSong();
        }
    });

    prevButton.addEventListener('click', () => {
        currentSongIndex = (currentSongIndex - 1 + songs.length) % songs.length;
        loadSong(songs[currentSongIndex]);
    });

    nextButton.addEventListener('click', () => {
        currentSongIndex = (currentSongIndex + 1) % songs.length;
        loadSong(songs[currentSongIndex]);
    });

    songs.forEach(song => {
        const li = document.createElement('li');
        li.innerHTML = `<img src="${song.cover}" alt="${song.title}"><div><h4>${song.title}</h4><p>${song.artist}</p></div>`;
        mostListenedList.appendChild(li);
    });

    loadSong(songs[currentSongIndex]);
});