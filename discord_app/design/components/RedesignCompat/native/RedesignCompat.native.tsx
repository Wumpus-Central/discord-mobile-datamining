// === Module 6939: context ===

// Module 6939 (context)
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

const context = importAllResult.createContext(false);
const result = require("obj132").fileFinishedImporting("design/components/RedesignCompat/native/RedesignCompat.native.tsx");

export const RedesignCompatContext = context;
export const RedesignCompat = function RedesignCompat(children) {
  let enabled = children.enabled;
  if (enabled == null) {
    enabled = true;
  }
  return <context.Provider value={enabled}>{children.children}</context.Provider>;
};