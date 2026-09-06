// discord_app/modules/app_launcher/native/hooks/usePlaceholderSize.tsx
import noop from "../../../../../_runtime/metro/00019__.js";

const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/hooks/usePlaceholderSize.tsx");

export const usePlaceholderWidth = function usePlaceholderWidth(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  const items = [arg0, arg1];
  return noop.useMemo(() => Math.random() * (closure_1 - closure_0) + closure_0, items);
};
