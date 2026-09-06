// discord_app/design/components/Icon/native/CutoutBackgroundContext.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import nDefault from "../../../../../_runtime/00672_n.js";
import flattenColorOverOpaqueBackground from "../../../utils/shared/colors.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";

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
