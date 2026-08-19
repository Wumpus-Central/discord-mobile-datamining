// discord_app/design/components/Card/native/CardTokens.native.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";

const result = obj132.fileFinishedImporting("design/components/Card/native/CardTokens.native.tsx");

export const createCardShadowToken = function createCardShadowToken(arg0) {
  const _require = arg0;
  return require("../../Styles/native/createStyles.tsx").experimental_createToken((gradient) => {
    if (null == gradient.gradient) {
      if ("none" !== closure_0) {
        if ("border" === closure_0) {
          return ThemesDefault.shadows.SHADOW_BORDER;
        } else if ("high" === closure_0) {
          return ThemesDefault.shadows.SHADOW_HIGH;
        } else if ("ledge" === closure_0) {
          return ThemesDefault.shadows.SHADOW_LEDGE;
        } else if ("low" === closure_0) {
          return ThemesDefault.shadows.SHADOW_LOW;
        } else if ("medium" === closure_0) {
          return ThemesDefault.shadows.SHADOW_MEDIUM;
        }
      }
    }
    return {};
  });
};