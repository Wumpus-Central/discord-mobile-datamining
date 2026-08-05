// _runtime/00303_dismissKeyboard.js
import { set } from "00144_set.js";
const require = arg1;
const dependencyMap = arg6;
arg5.default = function dismissKeyboard() {
  const _default = set /* set */.default;
  _default.blurTextInput(set /* set */.default.currentlyFocusedInput());
};