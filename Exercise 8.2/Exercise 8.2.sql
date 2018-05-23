CREATE TABLE Artist (
	ID INT PRIMARY KEY,
	FirstName varchar(100),
	LastName varchar(100),
	DateOfBirth Date,
	CityOfBirth varchar(255),
	Genre varchar(100)
);

CREATE TABLE Album (
	AlbumId INT PRIMARY KEY,
	AlbumTitle varchar(255),
	ReleaseDate Date,
	ArtistId INT
);

CREATE TABLE Track (
	TrackId INT PRIMARY KEY,
	TrackTitle varchar(255),
	TrackLengthInSeconds INT,
	ComposerName varchar(255),
	AlbumId INT
);
