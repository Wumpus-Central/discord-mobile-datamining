// discord_common/js/packages/design/components/ManaContext/ManaContext.native.tsx
import importAllResult from "../../../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";

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