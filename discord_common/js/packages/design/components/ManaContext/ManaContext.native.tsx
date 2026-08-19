// === Module 4160: context ===

// Module 4160 (context)
import importAllResult from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

let c0 = importAllResult;
const obj = {};
const context = importAllResult.createContext(obj);
const result = require("obj132").fileFinishedImporting("../discord_common/js/packages/design/components/ManaContext/ManaContext.native.tsx");

export const ManaContext = context;
export const useManaContext = () => importAllResult.useContext(context);
export const ManaContextProvider = function ManaContextProvider(children) {
  let value = children.value;
  if (value == null) {
    value = obj;
  }
  return <context.Provider value={value}>{children.children}</context.Provider>;
};