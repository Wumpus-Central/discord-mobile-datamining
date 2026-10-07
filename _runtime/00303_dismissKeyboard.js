// _runtime/00303_dismissKeyboard.js
import _mod144 from "metro/00144__.js";

require = arg1;
const dependencyMap = arg6;

export default function dismissKeyboard() {
  const _default = _mod144.default;
  _default.blurTextInput(_mod144.default.currentlyFocusedInput());
}
