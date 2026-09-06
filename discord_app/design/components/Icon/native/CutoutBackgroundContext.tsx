// === Module 8814: CutoutBackgroundContext ===

// Module 8814 (CutoutBackgroundContext)
import nativeDefault from "native" /* 576 */;
import _modDef672 from "module_672" /* 672 */;
import shared_colors from "shared/colors" /* 8815 */;
import noop from "module_19" /* 19 */;

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
  const context = noop.useContext(closure_5);
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
  return <closure_5.Provider value={value}>{arg0.children}</closure_5.Provider>;
};