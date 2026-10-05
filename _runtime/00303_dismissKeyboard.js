// _runtime/00303_dismissKeyboard.js
import _mod144 from "metro/00144__.js";

export default function dismissKeyboard() {
  const blurTextInput = _mod144.default.blurTextInput;
  _mod144.default;
  const _default2 = _mod144.default;
  blurTextInput(_default2.currentlyFocusedInput());
}
