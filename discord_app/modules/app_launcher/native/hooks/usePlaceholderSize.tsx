// === Module 11730: usePlaceholderSize ===

// Module 11730 (usePlaceholderSize)
import noop from "module_19" /* 19 */;

const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/hooks/usePlaceholderSize.tsx");

export const usePlaceholderWidth = ReactCompilerGating.isReactCompilerEnabled() ? (function usePlaceholderWidth(arg0, arg1) {
  return Math.random() * (arg1 - arg0) + arg0;
}) : (function usePlaceholderWidth(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  const items = [arg0, arg1];
  return noop.useMemo(() => Math.random() * (closure_1 - closure_0) + closure_0, items);
});