// === Module 11227: usePlaceholderWidth ===

// Module 11227 (usePlaceholderWidth)
import noop from "noop" /* 19 */;

const result = require("obj132").fileFinishedImporting("modules/app_launcher/native/hooks/usePlaceholderSize.tsx");

export const usePlaceholderWidth = function usePlaceholderWidth(arg0, arg1) {
  const React = arg0;
  closure_1 = arg1;
  const items = [arg0, arg1];
  return React.useMemo(() => Math.random() * (closure_1 - closure_0) + closure_0, items);
};