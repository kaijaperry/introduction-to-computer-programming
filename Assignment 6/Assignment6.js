class MediaFile {
  constructor ({title, durationInSeconds, genre, releaseDate}) {
    this.title = title;
    this.durationInSeconds = durationInSeconds;
    this.genre = genre;
    this.releaseDate = releaseDate;
  }

  pause() {
    console.log('Paused "' + this.title + '"')
  }

  stop() {
    console.log('Stopped "' + this.title + '"')
  }

}


class Video extends MediaFile {
  constructor ({title,
              durationInSeconds,
              genre,
              releaseDate,
              actors,
              director,
              fileFormat,
              resolution,
              ageRating,
              description}) {

    super({'title': title,
          'durationInSeconds': durationInSeconds,
          'genre': genre,
          'releaseDate': releaseDate});

    this.actors = actors;
    this.director = director;
    this.fileFormat = fileFormat;
    this.resolution = resolution;
    this.ageRating = ageRating;
    this.description = description;
  }
  play () {
    console.log('Playing video with title "' + this.title + '" with age rating: ' + this.ageRating);
  }
}

class Movie extends Video {
  constructor ({title,
              durationInSeconds,
              genre,
              releaseDate,
              actors,
              director,
              fileFormat,
              resolution,
              ageRating,
              description,
              productionStudio,
              composer,
              coverImage}) {
    super({'title': title,
          'durationInSeconds': durationInSeconds,
          'genre': genre,
          'releaseDate': releaseDate,
          'actors': actors,
          'director': director,
          'fileFormat': fileFormat,
          'resolution': resolution,
          'ageRating': ageRating,
          'description': description});

    this.productionStudio = productionStudio;
    this.composer = composer;
    this.coverImage = coverImage;
  }

}

class AudioFile extends MediaFile {
  constructor ({title,
              durationInSeconds,
              genre,
              releaseDate,
              artist,
              numberOfChannels,
              bitRate,
              coverImage}) {

    super({'title': title,
          'durationInSeconds': durationInSeconds,
          'genre': genre,
          'releaseDate': releaseDate});

    this.artist = artist;
    this.numberOfChannels = numberOfChannels;
    this.bitRate = bitRate;
    this.coverImage = coverImage;
  }
}

class Song extends AudioFile {
  constructor ({title,
              durationInSeconds,
              genre,
              releaseDate,
              artist,
              numberOfChannels,
              bitRate,
              coverImage,
              songNumber,
              lyrics}) {

    super({'title': title,
          'durationInSeconds': durationInSeconds,
          'genre': genre,
          'releaseDate': releaseDate,
          'artist': artist,
          'numberOfChannels': numberOfChannels,
          'bitRate': bitRate,
          'coverImage': coverImage});

    this.songNumber = songNumber;
    this.lyrics = lyrics;
  }

  play () {
    console.log('Playing song with title "' + this.title + '" by artist "' + this.artist + '"');
  }
}

class Podcast extends AudioFile {
  constructor ({title,
              durationInSeconds,
              genre,
              releaseDate,
              artist,
              numberOfChannels,
              bitRate,
              coverImage,
              episodeNumber,
              description}) {

    super({'title': title,
          'durationInSeconds': durationInSeconds,
          'genre': genre,
          'releaseDate': releaseDate,
          'artist': artist,
          'numberOfChannels': numberOfChannels,
          'bitRate': bitRate,
          'coverImage': coverImage})

  this.episodeNumber = episodeNumber;
  this.description = description;

  }
  play () {
    console.log('Playing podcast with title "' + this.title + '"');
    console.log('By artist "' + this.artist + '"');
    console.log("Episode number: " + this.episodeNumber);
  }
}


class PlayableMediaCollection {
  constructor ({listOfMediaFileObjects, collectionName, coverImage}) {
    this.listOfMediaFileObjects = listOfMediaFileObjects;
    this.collectionName = collectionName;
    this.coverImage = coverImage;

    this.currentMediaFileIndex = -1; // no media file is playing by default
    this.isPlaying = false;
  }
  // Current Media File,
  // Action: Play, Pause, Skip, Replay, Show Title, Shuffle, Get Now Playing Time, Sort
  play () {

    // If there are no objects in this collection, don't even try to play.
    if (!this.listOfMediaFileObjects.length > 0) {
      return;
    }

    let nowPlaying = this.getNowPlaying();

    // If nothing is playing yet, set the first song as playing
    // and try to get the currently playing song again.
    if (!nowPlaying) {
      this.currentMediaFileIndex = 0;
      nowPlaying = this.getNowPlaying();
    }

    nowPlaying.play();
    this.isPlaying = true;
  }

  pause () {
    this.isPlaying = false;
    let nowPlaying = this.getNowPlaying();
    if (nowPlaying) {
      nowPlaying.pause();
    } else {
      console.log("Nothing is currently playing.");
    }
  }

  stop() {
    this.isPlaying = false;
    let nowPlaying = this.getNowPlaying();
    if (nowPlaying) {
      nowPlaying.stop();
    }
    // We no longer need to keep our playback position.
    this.currentMediaFileIndex = -1;
  }

  skip () {
    // If we're at the last file in this collection, stop playing.
    if (this.currentMediaFileIndex == this.listOfMediaFileObjects.length - 1) {
      this.stop();
    }

    const wasPlaying = this.getNowPlaying();
    wasPlaying && wasPlaying.stop();

    ++this.currentMediaFileIndex;

    const newFileToPlay = this.getNowPlaying();
    newFileToPlay.play();
  }

  getNowPlaying() {

    // If there are no objects in this collection, return null;
    if (!this.listOfMediaFileObjects.length > 0) {
      console.log("There are no media objects in this collection.");
      return null;
    }

    // If nothing is playing currently, return null;
    if (this.currentMediaFileIndex < 0) {
      return null;
      console.log("Nothing is playing right now");
    }

    return this.listOfMediaFileObjects[this.currentMediaFileIndex];
  }

  showTitle() {
    const nowPlaying = this.getNowPlaying();
    !nowPlaying && console.log('Nothing is currently playing');
    nowPlaying && console.log('Currently playing file is: "' + this.getNowPlaying().title + '"');
  }

  sort (sortingFunction) {
    this.listOfMediaFileObjects.sort(sortingFunction);
  }

  displayList () {
    console.log('');
    console.log(this.collectionName);
    console.log('---------------------')
    this.listOfMediaFileObjects.map(x => console.log(x.title));
  }

  shuffle () {

    /**
     * Returns a random integer between min (inclusive) and max (inclusive)
     * from https://stackoverflow.com/questions/1527803/generating-random-whole-numbers-in-javascript-in-a-specific-range
     */
    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }

    function swap (list, a, b) {
      let original = list[a];
      list[a] = list[b];
      list[b] = original;
    }

    this.listOfMediaFileObjects.map((x, i, list) =>  swap(list, i, getRandomInt(0, list.length - 1)));

  }

 }

class Playlist extends PlayableMediaCollection {
  constructor ({listOfMediaFileObjects, collectionName, coverImage}) {
    super({'listOfMediaFileObjects': listOfMediaFileObjects,
    'collectionName': collectionName,
    'coverImage': coverImage});
  }
}

class Album extends PlayableMediaCollection {
  constructor ({listOfMediaFileObjects, collectionName, coverImage, albumArtist}) {
    super({'listOfMediaFileObjects': listOfMediaFileObjects,
    'collectionName': collectionName,
    'coverImage': coverImage});
    this.albumArtist = albumArtist;
  }
}





// Example scenarios


// Movies:

const movieMv1 = new Movie({
  title: 'Sound of Music',
  releaseDate: '1965',
  ageRating: 'G',
  actors: 'Julie Andrews and Christopher Plumber',
  genre: 'Drama/Romance/Musical',
  durationInSeconds: 10440,
  director:'Robert Wise',
  composer: 'Rodgers and Hammerstein',
});

const movieMv2 = new Movie({
  title: 'Chariots of Fire',
  releaseDate: '1981',
  ageRating: 'PG',
  actors: 'Ian Charleson, Ben Cross, Nigel Havers',
  genre: 'Sport/Drama',
  durationInSeconds: 7500,
  Director: 'Hugh Hudson',
});

const moviesVideo = [movieMv1, movieMv2];

const moviesVideoPlaylist = new Playlist({
  listOfMediaFileObjects: moviesVideo,
  collectionName: "Kaija's Movies"
});

moviesVideoPlaylist.play();
moviesVideoPlaylist.showTitle();
moviesVideoPlaylist.displayList();
// moviesVideoPlaylist.play();
// moviesVideoPlaylist.skip();
// moviesVideoPlaylist.pause();
// moviesVideoPlaylist.showTitle();
// moviesVideoPlaylist.play();
// moviesVideoPlaylist.stop();
// moviesVideoPlaylist.play();



// Podcasts:

const podcastMv1 = new Podcast({
  title: 'Eating with Jesus',
  episode: 1,
  durationInSeconds: '2700'
});

const podcastMv2 = new Podcast({
  title: 'The Still Small Voice',
  episode: 10,
  durationInSeconds: '2460'
});

const podcastPlaylistPodcast = [podcastMv1, podcastMv2];

const podcastPlaylist = new Playlist({
  listOfMediaFileObjects: podcastPlaylistPodcast,
  collectionName: "Timothy Keller Sermons Podcast by Gospel in Life"
});

podcastPlaylist.displayList();
// podcastPlaylist.play();
// podcastPlaylist.skip();
// podcastPlaylist.pause();
// podcastPlaylist.showTitle();
// podcastPlaylist.play();
// podcastPlaylist.stop();
// podcastPlaylist.play();



// Songs:

const sonataMv1 = new Song({
  title: 'Allegro Agitato',
  songNumber: 1,
  durationInSeconds: '419'
});

const sonataMv2 = new Song({
  title: 'Adagio',
  songNumber: 2,
  durationInSeconds: '326'
});

const sonataMv3 = new Song({
  title: 'Allegretto Moderato',
  songNumber: 3,
  durationInSeconds: '255'
});

const sonataMv4 = new Song({
  title: 'Allegro Molto',
  songNumber: 4,
  durationInSeconds: '356'
});

const sonataPlaylistSongs = [sonataMv1, sonataMv2, sonataMv3, sonataMv4];

const sonataPlaylist = new Playlist({
  listOfMediaFileObjects: sonataPlaylistSongs,
  collectionName: "Saint Saens: Sonata No. 1 For Violin And Piano In D Minor, Op. 75"
});

function sortByLength(a, b) {
  if (a.durationInSeconds < b.durationInSeconds) {
    return -1;
  }
  else if (a.durationInSeconds > b.durationInSeconds) {
    return 1;
  }
  else {
    return 0;
  }
}

// sonataPlaylist.play();
// sonataPlaylist.skip();
// sonataPlaylist.pause();
// sonataPlaylist.showTitle();
// sonataPlaylist.play();
// sonataPlaylist.stop();
// sonataPlaylist.play();
sonataPlaylist.displayList();
// sonataPlaylist.sort(sortByLength);
// sonataPlaylist.displayList();
sonataPlaylist.shuffle();
sonataPlaylist.displayList();
