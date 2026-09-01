// discord_app/modules/app_launcher/native/hooks/usePlaceholderSize.tsx
import closure_0 from "../../../../../_runtime/00019_noop.js";

const result = require("set").fileFinishedImporting("modules/app_launcher/native/hooks/usePlaceholderSize.tsx");

export const usePlaceholderWidth = function usePlaceholderWidth(arg0, arg1) {
  const React = arg0;
  closure_1 = arg1;
  const items = [arg0, arg1];
  return React.useMemo(() => Math.random() * (closure_1 - closure_0) + closure_0, items);
};
