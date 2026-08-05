// _runtime/00303_dismissKeyboard.js
const require = arg1;
const dependencyMap = arg6;
arg5.default = function dismissKeyboard() {
  const _default = require("00144_set.js") /* set */.default;
  _default.blurTextInput(require("00144_set.js") /* set */.default.currentlyFocusedInput());
};