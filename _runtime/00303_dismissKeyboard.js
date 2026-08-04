// _runtime/00303_dismissKeyboard.js
const require = arg1;
const dependencyMap = arg6;
arg5.default = function dismissKeyboard() {
  const _default = require(144) /* set */.default;
  _default.blurTextInput(require(144) /* set */.default.currentlyFocusedInput());
};