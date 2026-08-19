// === Module 6293: createCardShadowToken ===

// Module 6293 (createCardShadowToken)
import obj132 from "obj132" /* 2 */;
import ThemesDefault from "Themes" /* 712 */;

const result = obj132.fileFinishedImporting("design/components/Card/native/CardTokens.native.tsx");

export const createCardShadowToken = function createCardShadowToken(arg0) {
  const _require = arg0;
  return _require(4661).experimental_createToken((gradient) => {
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