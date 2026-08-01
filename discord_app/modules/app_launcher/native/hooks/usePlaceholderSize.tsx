// === Module 11242: usePlaceholderWidth ===

// Module 11242 (usePlaceholderWidth)
import noop from "noop";

const result = require("set").fileFinishedImporting("modules/app_launcher/native/hooks/usePlaceholderSize.tsx");

export const usePlaceholderWidth = function usePlaceholderWidth(arg0, arg1) {
  const React = arg0;
  let closure_1 = arg1;
  const items = [arg0, arg1];
  return React.useMemo(() => Math.random() * (closure_1 - noop) + noop, items);
};