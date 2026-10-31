// === Module 12242: usePlaceholderSize ===

// Module 12242 (usePlaceholderSize)
import noop from "module_19" /* 19 */;

const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/hooks/usePlaceholderSize.tsx");

export function usePlaceholderWidth(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  const items = [arg0, arg1];
  return noop.useMemo(() => Math.random() * (closure_1 - closure_0) + closure_0, items);
}