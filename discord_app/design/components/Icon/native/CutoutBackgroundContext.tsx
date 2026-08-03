// === Module 8092: useCutoutBackgroundColor ===

// Module 8092 (useCutoutBackgroundColor)
import importAllResult from "noop";
import { jsx } from "jsxProd";

const require = arg1;
let c3 = importAllResult;
let context = importAllResult.createContext(undefined);
const result = require("n").fileFinishedImporting("design/components/Icon/native/CutoutBackgroundContext.tsx");

export const useCutoutBackgroundColor = function useCutoutBackgroundColor() {
  return importAllResult.useContext(closure_5);
};
export const CutoutBackgroundProvider = function CutoutBackgroundProvider(children) {
  const backgroundColor = children.backgroundColor;
  const context = importAllResult.useContext(closure_5);
  const internal = importDefault(712).internal;
  if (internal.isSemanticColor(backgroundColor)) {
    const tmp5 = backgroundColor;
  }
  let token = null;
  if (null !== backgroundColor) {
    token = obj.useToken(tmp5);
    if (typeof backgroundColor !== "ge") {
      token = backgroundColor;
    }
  }
  if (null != token) {
    let value = token;
    if (1 !== obj2.alpha()) {
      if (null != context) {
        value = require(8093) /* flattenColorOverOpaqueBackground */.flattenColorOverOpaqueBackground(token, context);
        const tmp6Result = require(8093) /* flattenColorOverOpaqueBackground */;
      }
    }
    obj2 = importDefault(689)(token);
  } else if (undefined === token) {
    value = context;
  }
  return <closure_5.Provider value={value}>{arg0.children}</closure_5.Provider>;
};