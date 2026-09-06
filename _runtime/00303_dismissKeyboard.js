// === Module 303: dismissKeyboard ===

// Module 303 (dismissKeyboard)
import _mod144 from "module_144" /* 144 */;

require = arg1;
const dependencyMap = arg6;

export default function dismissKeyboard() {
  const _default = _mod144.default;
  _default.blurTextInput(_mod144.default.currentlyFocusedInput());
};