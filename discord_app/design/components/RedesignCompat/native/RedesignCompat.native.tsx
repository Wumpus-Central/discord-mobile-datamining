// discord_app/design/components/RedesignCompat/native/RedesignCompat.native.tsx
import noop from "../../../../../_runtime/metro/00019__.js";

const jsx = fn(21).jsx;
const context = noop.createContext(false);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/RedesignCompat/native/RedesignCompat.native.tsx");

export const RedesignCompatContext = context;
export const RedesignCompat = function RedesignCompat(children) {
  let enabled = children.enabled;
  if (enabled == null) {
    enabled = true;
  }
  return <context.Provider value={enabled}>{arg0.children}</context.Provider>;
};
