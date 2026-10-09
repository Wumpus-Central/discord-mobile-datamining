// === Module 6176: useInitialValue ===

// Module 6176 (useInitialValue)
import noop from "module_19" /* 19 */;

let ReactCompilerGating = fn(558);
ReactCompilerGating = ReactCompilerGating.isReactCompilerEnabled();
const size = fn(2);
const result1 = size.fileFinishedImporting("hooks/useInitialValue.tsx");

export default function useInitialValue(flag) {
  return noop.useState(flag)[0];
};