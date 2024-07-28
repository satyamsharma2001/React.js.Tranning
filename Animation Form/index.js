function onSubmit() {
  let i = 0;
  for (let index = 0; index < 10; index++) {
    i = index * 10;
    console.log("i value inside loop", i);
  }
}

function toReturn() {
  return "abc";
}

function toReturn1() {
  return 1;
}

function toReturn2() {
  return [];
}
function toReturn3() {
  return {};
}
