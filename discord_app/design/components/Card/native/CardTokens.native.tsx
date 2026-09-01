// discord_app/design/components/Card/native/CardTokens.native.tsx
import set from "../../../../../_runtime/00002_set.js";

const result = set.fileFinishedImporting("design/components/Card/native/CardTokens.native.tsx");

export const createCardShadowToken = function createCardShadowToken(arg0) {
  const _require = arg0;
  return require("../../Styles/native/createStyles.tsx").experimental_createToken((gradient) => {
    if (null == gradient.gradient) {
      if ("none" !== closure_0) {
        if ("border" === tmp11) {
          return closure_1_1(closure_1_2[1]).shadows.SHADOW_BORDER;
        } else if ("high" === tmp11) {
          return closure_1_1(closure_1_2[1]).shadows.SHADOW_HIGH;
        } else if ("ledge" === tmp11) {
          return closure_1_1(closure_1_2[1]).shadows.SHADOW_LEDGE;
        } else if ("low" === tmp11) {
          return closure_1_1(closure_1_2[1]).shadows.SHADOW_LOW;
        } else if ("medium" === tmp11) {
          return closure_1_1(closure_1_2[1]).shadows.SHADOW_MEDIUM;
        }
      }
    }
    return {};
  });
};
