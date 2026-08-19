// === Module 16314: useControlsLock ===

// Module 16314 (useControlsLock)
import noop from "noop" /* 19 */;

const result = require("obj132").fileFinishedImporting("modules/voice_panel/native/controls/useControlsLock.tsx");

export default function useControlsLock(arg0) {
  importDefault = arg0;
  generateStateLocker = first.useContext(importDefault(generateStateLocker[1])).generateStateLocker;
  first = first.useState(() => generateStateLocker(closure_0))[0];
  const items = [first];
  const layoutEffect = first.useLayoutEffect(() => () => closure_2.unlock(), items);
  return first;
};