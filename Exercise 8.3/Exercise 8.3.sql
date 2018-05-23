INSERT INTO Artist
(ID, FirstName, LastName, DateOfBirth, CityOfBirth, Genre)
VALUES (1, 'Sarah', 'Chang', '1980-12-10', 'Philadelphia', 'Classical');

INSERT INTO Artist
(ID, FirstName, LastName, DateOfBirth, CityOfBirth, Genre)
VALUES (2, 'Joshua', 'Bell', '1967-12-09', 'Bloomington', 'Classical');

INSERT INTO Artist
(ID, FirstName, LastName, DateOfBirth, CityOfBirth, Genre)
VALUES (3, 'Hilary', 'Hahn', '1979-11-27', 'Lexington', 'Classical');


INSERT INTO Album
(AlbumId, AlbumTitle, ReleaseDate, ArtistId)
VALUES (1, 'Simply Sarah', '1997-03-18', 1);

INSERT INTO Album
(AlbumId, AlbumTitle, ReleaseDate, ArtistId)
VALUES (2, 'French Impressions', '2012-01-06', 2);

INSERT INTO Album
(AlbumId, AlbumTitle, ReleaseDate, ArtistId)
VALUES (3, 'Hilary Hahn plays Bach', '1997-08-06', 3);


INSERT INTO Track
(TrackId, TrackTitle, TrackLengthInSeconds, ComposerName, AlbumId)
VALUES (1, 'Introduction and Tarantella Op. 43', 314, 'Pablo de Sarasate', 1);

INSERT INTO Track
(TrackId, TrackTitle, TrackLengthInSeconds, ComposerName, AlbumId)
VALUES (2, 'On The Wings Of Song Op. 34 No. 2', 228, 'Felix Mendelssohn', 1);

INSERT INTO Track
(TrackId, TrackTitle, TrackLengthInSeconds, ComposerName, AlbumId)
VALUES (3, 'Zapateado Op. 23', 202, 'Itzhak Perlman/Samuel Sanders', 1);

INSERT INTO Track
(TrackId, TrackTitle, TrackLengthInSeconds, ComposerName, AlbumId)
VALUES (4, 'Saint Saens: Sonata No. 1 For Violin And Piano In D Minor, Op. 75: Allegro Agiato', 419, 'Saint-Saëns, Camille', 2);

INSERT INTO Track
(TrackId, TrackTitle, TrackLengthInSeconds, ComposerName, AlbumId)
VALUES (5, 'Saint-Saëns: Sonata No. 1 For Violin And Piano In D Minor, Op. 75: Adagio', 326, 'Saint-Saëns, Camille', 2);

INSERT INTO Track
(TrackId, TrackTitle, TrackLengthInSeconds, ComposerName, AlbumId)
VALUES (6, 'Saint-Saëns: Sonata No. 1 For Violin And Piano In D Minor, Op. 75: Allegretto Moderato', 255, 'Saint-Saëns, Camille', 2);

INSERT INTO Track
(TrackId, TrackTitle, TrackLengthInSeconds, ComposerName, AlbumId)
VALUES (7, 'Partita No. 3 in E Major, BWV 1006: I. Preludio', 214, 'Johann Sebastian Bach', 3);

INSERT INTO Track
(TrackId, TrackTitle, TrackLengthInSeconds, ComposerName, AlbumId)
VALUES (8, 'Partita No. 3 in E Major, BWV 1006: II. Loure', 287, 'Johann Sebastian Bach', 3);

INSERT INTO Track
(TrackId, TrackTitle, TrackLengthInSeconds, ComposerName, AlbumId)
VALUES (9, 'Partita No. 3 in E Major, BWV 1006: III. Gavotte en Rondeau', 196, 'Johann Sebastian Bach', 3);


UPDATE track
SET TrackTitle = 'Favorite Song'
WHERE TrackTitle = 'Introduction and Tarantella Op. 43';

UPDATE track
SET ComposerName = 'Bach'
WHERE ComposerName = 'Johann Sebastian Bach';

DELETE from track
WHERE TrackId = 4;
