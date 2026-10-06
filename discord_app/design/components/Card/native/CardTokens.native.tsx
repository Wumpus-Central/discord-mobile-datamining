// === Module 6003: CardTokens ===

// Module 6003 (CardTokens)
import nativeDefault from "native" /* 587 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

const result = size.fileFinishedImporting("design/components/Card/native/CardTokens.native.tsx");

export const createCardShadowToken = function createCardShadowToken(arg0) {
  let closure_0;
  _require = arg0;
  const obj = require("createStyles");
  return obj.experimental_createToken((gradient) => {
    if (null == gradient.gradient) {
      if ("none" !== closure_0) {
        if ("border" === closure_0) {
          return nativeDefault.shadows.SHADOW_BORDER;
        } else if ("high" === closure_0) {
          return nativeDefault.shadows.SHADOW_HIGH;
        } else if ("ledge" === closure_0) {
          return nativeDefault.shadows.SHADOW_LEDGE;
        } else if ("low" === closure_0) {
          return nativeDefault.shadows.SHADOW_LOW;
        } else if ("medium" === closure_0) {
          return nativeDefault.shadows.SHADOW_MEDIUM;
        }
      }
    }
    return {};
  });
};