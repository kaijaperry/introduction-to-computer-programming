CREATE Table Performance (
  PerformanceID INT PRIMARY KEY,
  VenueID INT,
  Date Date,
  TicketPriceInDollars INT,
  TourID INT
);

CREATE Table Tour (
  TourID INT PRIMARY KEY,
  Name varchar (100)
);

CREATE Table Venue (
  VenueID INT PRIMARY KEY,
  Name varchar (255),
  Location varchar (255),
  Capacity INT,
  RentalPriceInDollarsPerPerformance INT
);

CREATE Table Artist (
  ArtistID INT PRIMARY KEY,
  Name varchar (255),
  Genre varchar (255)
);

CREATE Table ArtistPerformance (
  ArtistID INT,
  PerformanceID INT,
  PRIMARY KEY (ArtistID, PerformanceID)
);


-- Test Data:

INSERT INTO Performance
(PerformanceID, VenueID, Date, TicketPriceInDollars, TourID)
VALUES (1, 1, '2018-06-01', 139, 1);

INSERT INTO Performance
(PerformanceID, VenueID, Date, TicketPriceInDollars, TourID)
VALUES (2, 1, '2018-06-02', 139, 2);

INSERT INTO Performance
(PerformanceID, VenueID, Date, TicketPriceInDollars, TourID)
VALUES (3, 2, '2018-06-01', 46.31, 3);

INSERT INTO Performance
(PerformanceID, VenueID, Date, TicketPriceInDollars, TourID)
VALUES (4, 3, '2018-06-03', 33.31, 1);

INSERT INTO Performance
(PerformanceID, VenueID, Date, TicketPriceInDollars, TourID)
VALUES (5, 4, '2018-06-02', 66.00, 1);

INSERT INTO Performance
(PerformanceID, VenueID, Date, TicketPriceInDollars, TourID)
VALUES (6, 4, '2018-06-01', 66.00, 2);



INSERT INTO Venue
(VenueID, Name, Location, Capacity, RentalPriceInDollarsPerPerformance)
VALUES (1, 'Carnegie Hall', '881 7th Ave, New York, NY 10019', 2804, 14000);

INSERT INTO Venue
(VenueID, Name, Location, Capacity, RentalPriceInDollarsPerPerformance)
VALUES (2, 'Kilden Performing Arts Centre', 'Sjølystveien 2, 4610 Kristiansand, Norway', 1185, 10000);

INSERT INTO Venue
(VenueID, Name, Location, Capacity, RentalPriceInDollarsPerPerformance)
VALUES (3, 'Royal Festival Hall', 'Southbank Centre, Belvedere Rd, Lambeth, London SE1 8XX, UK', 2900, 13752);

INSERT INTO Venue
(VenueID, Name, Location, Capacity, RentalPriceInDollarsPerPerformance)
VALUES (4, 'Boston Symphony Hall ', '301 Massachusetts Ave, Boston, MA 02115', 2625, 5700);



INSERT INTO Tour
(TourID, Name)
VALUES (1, 'Joshua Bell');

INSERT INTO Tour
(TourID, Name)
VALUES (2, 'Simply Sarah Tour');

INSERT INTO Tour
(TourID, Name)
VALUES (3, 'Itzhak Perlman');



INSERT INTO Artist
(ArtistID, Name, Genre)
VALUES (1, 'Joshua Bell', 'Classical');

INSERT INTO Artist
(ArtistID, Name, Genre)
VALUES (2, 'Sarah Chang', 'Classical');

INSERT INTO Artist
(ArtistID, Name, Genre)
VALUES (3, 'Itzhak Perlman', 'Classical');




INSERT INTO ArtistPerformance
(ArtistID, PerformanceID)
VALUES (1, 1);

INSERT INTO ArtistPerformance
(ArtistID, PerformanceID)
VALUES (2, 2);

INSERT INTO ArtistPerformance
(ArtistID, PerformanceID)
VALUES (3, 3);

INSERT INTO ArtistPerformance
(ArtistID, PerformanceID)
VALUES (1, 4);

INSERT INTO ArtistPerformance
(ArtistID, PerformanceID)
VALUES (1, 5);

INSERT INTO ArtistPerformance
(ArtistID, PerformanceID)
VALUES (2, 6);
