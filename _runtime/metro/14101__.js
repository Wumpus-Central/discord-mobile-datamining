// _runtime/metro/14101__.js
import _mod14086 from "14086__.js";

let _window = 0;
let closure_1 = Math.random();
let closure_2 = _mod14086((1).toString);

export default (arg0) => {
  let _window;
  let str = "";
  if (undefined !== arg0) {
    str = arg0;
  }
  _window = _window + 1;
  return `Symbol(${str}` + ")_" + closure_2(_window + closure_1, 36);
};
