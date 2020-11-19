let params = (new URL(document.location)).searchParams;
let idea = params.get('idea'); // is the string "Jonathan Smith".
let message = parseInt(params.get('message')); // is the number 18


console.log(idea);