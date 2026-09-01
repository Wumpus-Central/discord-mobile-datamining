// discord_app/design/components/RedesignCompat/native/RedesignCompat.native.tsx
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";

const context = importAllResult.createContext(false);
const result = require("set").fileFinishedImporting(
  "design/components/RedesignCompat/native/RedesignCompat.native.tsx",
);

export const RedesignCompatContext = context;
export const RedesignCompat = function RedesignCompat(children) {
  let enabled = children.enabled;
  if (enabled == null) {
    enabled = true;
  }
  return <context.Provider value={enabled}>{arg0.children}</context.Provider>;
};
