// discord_app/design/components/Icon/native/CutoutBackgroundContext.tsx
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
  const internal = require("../../../../../discord_common/js/packages/tokens/native.tsx").internal;
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
        value = require("../../../utils/shared/colors.tsx") /* flattenColorOverOpaqueBackground */.flattenColorOverOpaqueBackground(token, context);
        const tmp6Result = require("../../../utils/shared/colors.tsx") /* flattenColorOverOpaqueBackground */;
      }
    }
    obj2 = require("../../../../../_runtime/00689_n.js")(token);
  } else if (undefined === token) {
    value = context;
  }
  return <closure_5.Provider value={value}>{arg0.children}</closure_5.Provider>;
};