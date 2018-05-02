// # KaijaPerry_Assignment_4_Problem_2
function determine_starting_note(note_1, note_2) {
  if (note_1.starts_at < note_2.starts_at); {
    console.log(note_1.note + " starts at " + note_1.starts_at);
} {
    if (note_2.starts_at < note_1.starts_at); {
      console.log(note_2.note + " starts at " + note_1.starts_at);
    }
  }
}

function add_note_to_start_times(start_times, note_to_add) {

  let existing_start_times = Object.keys(start_times);
  let check_start_time = note_to_add['starts_at'];
  if (existing_start_times.includes(check_start_time.toString())) {
    start_times[check_start_time].push(note_to_add.note);
  }
  else {
    start_times[check_start_time] = [note_to_add.note];
  }
}

function add_note_to_end_times(end_times, note_to_add) {

  let existing_end_times = Object.keys(end_times);
  let check_end_time = note_to_add['ends_at'];
  if (existing_end_times.includes(check_end_time.toString())) {
    end_times[check_end_time].push(note_to_add.note);
  }
  else {
    end_times[check_end_time] = [note_to_add.note];
  }
}

function read_input(start_times, end_times, inputs) {

  for ( i = 0; i < inputs.length; i++){
    add_note_to_start_times(start_times, inputs[i]);
    add_note_to_end_times(end_times, inputs[i]);
  }
}

function play_notes(list_of_notes, time) {

  console.log('At time ' + time + ', play the following notes:');
  for ( i = 0; i < list_of_notes.length; i++ ) {
    console.log(list_of_notes[i]);
  }
}

function release_notes(list_of_notes, time) {

  console.log('At time ' + time + ', end following notes:');
  for ( i = 0; i < list_of_notes.length; i++ ) {
    console.log(list_of_notes[i]);
  }
}

function play_song(start_times, end_times) {

  let keep_playing = true;

  let start_keys = Object.keys(start_times);
  let sorted_start_keys = start_keys.sort();

  let end_keys = Object.keys(end_times);
  let sorted_end_keys = end_keys.sort();

  while (keep_playing) {

    let earliest_start_time = sorted_start_keys[0] || Number.MAX_VALUE;
    let earliest_end_time = sorted_end_keys[0];

    if (earliest_start_time < earliest_end_time) {
      let notes_to_play = start_times[earliest_start_time];
      play_notes(notes_to_play, earliest_start_time);
      sorted_start_keys.shift();
    }

    if (earliest_end_time < earliest_start_time) {
      let notes_to_end = end_times[earliest_end_time];
      release_notes(notes_to_end, earliest_end_time);
      sorted_end_keys.shift();
    }

    if (earliest_end_time == earliest_start_time) {
      let notes_to_play = start_times[earliest_start_time];
      play_notes(notes_to_play, earliest_start_time);
      sorted_start_keys.shift();

      let notes_to_end = end_times[earliest_end_time];
      release_notes(notes_to_end, earliest_end_time);
      sorted_end_keys.shift();
    }

    keep_playing = sorted_end_keys.length > 0;

  }
}
// Test Case 1:
let note_a = { 'note': "A", 'starts_at':0, 'ends_at': 3}
let note_b = { 'note': "B", 'starts_at':0, 'ends_at': 3}
let note_c = { 'note': "C", 'starts_at':1.5, 'ends_at':3}

let song_input = [
  note_a,
  note_b,
  note_c
];

// Test Case 2:
// let note_a = { 'note': "G", 'starts_at':0, 'ends_at': 3}
// let note_b = { 'note': "E", 'starts_at':0, 'ends_at': 3}
// let note_c = { 'note': "Bb", 'starts_at':1.5, 'ends_at':5}
// let note_d = { 'note': "A", 'starts_at':4, 'ends_at': 6}
// let note_e = { 'note': "D", 'starts_at':6, 'ends_at': 8}
// let note_f = { 'note': "F", 'starts_at':8, 'ends_at':9}
//
// let song_input = [
//   note_a,
//   note_b,
//   note_c,
//   note_d,
//   note_e,
//   note_f
// ];


// Test Case 3:
// let note_a = { 'note': "A", 'starts_at': 0, 'ends_at': 10}
// let note_b = { 'note': "B", 'starts_at': 0, 'ends_at': 10}
// let note_c = { 'note': "C", 'starts_at':1.5, 'ends_at':13}
//
// let song_input = [
//   note_a,
//   note_b,
//   note_c
// ];
//

var start_times = {};
var end_times = {};

read_input(start_times, end_times, song_input);

play_song(start_times, end_times)

//Test Case 1 prints:
// At time 0, play the following notes:
// A
// B
// At time 1.5, play the following notes:
// C
// At time 3, end following notes:
// A
// B
// C


// Test Case 2 prints:
// At time 0, play the following notes:
// G
// E
// At time 1.5, play the following notes:
// Bb
// At time 3, end following notes:
// G
// E
// At time 4, play the following notes:
// A
// At time 5, end following notes:
// Bb
// At time 6, play the following notes:
// D
// At time 6, end following notes:
// A
// At time 8, play the following notes:
// F
// At time 8, end following notes:
// D
// At time 9, end following notes:
// F


//Test Case 3 Prints
// At time 0, play the following notes:
// A
// B
// At time 1.5, play the following notes:
// C
// At time 10, end following notes:
// A
// B
// At time 13, end following notes:
// C
