// === Module 14101: ? ===

// Module 14101
import _mod14086 from "module_14086" /* 14086 */;

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