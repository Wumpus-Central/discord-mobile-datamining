// discord_app/design/components/Card/native/CardTokens.native.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const result = size.fileFinishedImporting("design/components/Card/native/CardTokens.native.tsx");

export const createCardShadowToken = function createCardShadowToken(arg0) {
  _require = arg0;
  return require("createStyles").experimental_createToken((gradient) => {
    if (null == gradient.gradient) {
      if ("none" !== closure_0) {
        if ("border" === tmp11) {
          return nativeDefault.shadows.SHADOW_BORDER;
        } else if ("high" === tmp11) {
          return nativeDefault.shadows.SHADOW_HIGH;
        } else if ("ledge" === tmp11) {
          return nativeDefault.shadows.SHADOW_LEDGE;
        } else if ("low" === tmp11) {
          return nativeDefault.shadows.SHADOW_LOW;
        } else if ("medium" === tmp11) {
          return nativeDefault.shadows.SHADOW_MEDIUM;
        }
      }
    }
    return {};
  });
};
