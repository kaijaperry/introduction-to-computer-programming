// # KaijaPerry_Assignment_4_Problem_1
function myset_add(data, new_value) {

  for (let i = 0; i < data.length; i++) {
    if (data[i] == new_value) {
      return data;
    }
  }
  data.push(new_value);
  return data;
}

var data = [1, 2, 3, 4];
var new_value = 5;
// console.log(myset_add(data, new_value));

function myset_remove(data, remove_value) {

  let result = [];
  for (let i = 0; i < data.length; i++) {
    if (data[i] != remove_value) {
      result.push(data[i]);
    }
  }
  return result;
}

var remove_value = 3;
// console.log(myset_remove(data, remove_value));


function myset_has(data, test_value) {

  for (let i = 0; i < data.length; i++) {
    if (data[i] == test_value) {
      return true;
    }
  }
  return false;
}

var test_value = 5;
// console.log(myset_has(data, test_value));


function myset_size(data) {
  return data.length;
}
// console.log(myset_size(data));

function myset_forEach(data, callback_function) {
  let new_set = [];
  for (let i = 0; i < data.length; i++) {
    let transformed_element = callback_function(data[i]);
    new_set = myset_add(new_set, transformed_element);
  }
  return new_set;
}


function divide_by_two(dividend) {
  return dividend / 2;
}

function round_to_nearest_whole_number (number) {
  return Math.round(number);
}


//Test Case 1:
const more_interesting_data = [1.0, 1.2, 1.4, 1.6, 1.8, 2.0];

console.log(myset_forEach(more_interesting_data, round_to_nearest_whole_number));


//Test Case 2:
const even_more_interesting_data = [1, 1, 3, 6, 8, 8, 9];

console.log(myset_forEach(even_more_interesting_data, round_to_nearest_whole_number));
