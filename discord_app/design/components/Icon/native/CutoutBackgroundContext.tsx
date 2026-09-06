// discord_app/design/components/Icon/native/CutoutBackgroundContext.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef672 from "../../../../../_runtime/metro/00672__.js";
import shared_colors from "../../../utils/shared/colors.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
let context = noop.createContext(undefined);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Icon/native/CutoutBackgroundContext.tsx");

export const useCutoutBackgroundColor = function useCutoutBackgroundColor() {
  return noop.useContext(closure_5);
};
export const CutoutBackgroundProvider = function CutoutBackgroundProvider(children) {
  const backgroundColor = children.backgroundColor;
  const context = noop.useContext(redux);
  const internal = nativeDefault.internal;
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
    value = token;
    if (1 !== obj2.alpha()) {
      if (null != context) {
        value = shared_colors.flattenColorOverOpaqueBackground(token, context);
        const tmp6Result = shared_colors;
      }
    }
    obj2 = _modDef672(token);
  } else if (undefined === token) {
    value = context;
  }
  return <redux.Provider value={value}>{children.children}</redux.Provider>;
};
