// === Module 8045: useCutoutBackgroundColor ===

// Module 8045 (useCutoutBackgroundColor)
import nDefault from "n" /* 689 */;
import ThemesDefault from "Themes" /* 712 */;
import flattenColorOverOpaqueBackground from "flattenColorOverOpaqueBackground" /* 8046 */;
import importAllResult from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
let c3 = importAllResult;
let context = importAllResult.createContext(undefined);
const result = require("set").fileFinishedImporting("design/components/Icon/native/CutoutBackgroundContext.tsx");

export const useCutoutBackgroundColor = function useCutoutBackgroundColor() {
  return importAllResult.useContext(closure_5);
};
export const CutoutBackgroundProvider = function CutoutBackgroundProvider(children) {
  const backgroundColor = children.backgroundColor;
  const context = importAllResult.useContext(closure_5);
  const internal = ThemesDefault.internal;
  if (internal.isSemanticColor(backgroundColor)) {
    const tmp5 = backgroundColor;
  }
  let token = null;
  if (null !== backgroundColor) {
    token = obj.useToken(tmp5);
    if (typeof backgroundColor === "string") {
      token = backgroundColor;
    }
  }
  if (null != token) {
    let value = token;
    if (1 !== obj2.alpha()) {
      if (null != context) {
        value = flattenColorOverOpaqueBackground.flattenColorOverOpaqueBackground(token, context);
        const tmp6Result = flattenColorOverOpaqueBackground;
      }
    }
    obj2 = nDefault(token);
  } else if (undefined === token) {
    value = context;
  }
  return <closure_5.Provider value={value}>{arg0.children}</closure_5.Provider>;
};