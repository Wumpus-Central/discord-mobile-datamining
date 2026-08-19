// === Module 9456: useDisplayNameStylesAccessibleColors ===

// Module 9456 (useDisplayNameStylesAccessibleColors)
import noop from "noop" /* 19 */;
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme" /* 4662 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesAccessibleColors.tsx");

export const useDisplayNameStylesAccessibleColors = function useDisplayNameStylesAccessibleColors(displayNameStyles) {
  displayNameStyles = displayNameStyles.displayNameStyles;
  const backgroundColor = displayNameStyles.backgroundColor;
  let stateFromStores;
  let displayNameStylesEffectConfig;
  let items = [displayNameStylesEffectConfig];
  stateFromStores = displayNameStyles(stateFromStores[2]).useStateFromStores(items, () => {
    let num = 1;
    if (displayNameStylesEffectConfig.desaturateUserColors) {
      num = displayNameStylesEffectConfig.saturation;
    }
    return num;
  });
  let effectId;
  if (displayNameStyles != null) {
    effectId = displayNameStyles.effectId;
  }
  if (effectId == null) {
    effectId = tmp(tmp2[3]).DisplayNameEffect.SOLID;
  }
  let obj = displayNameStyles(stateFromStores[2]);
  displayNameStylesEffectConfig = displayNameStyles(stateFromStores[4]).useDisplayNameStylesEffectConfig(effectId);
  const items1 = [displayNameStyles, effectId, displayNameStylesEffectConfig.minContrastRatio, stateFromStores, backgroundColor];
  return effectId.useMemo(() => {
    if (null == displayNameStyles) {
      let items = [];
    } else {
      const colors = tmp.colors;
      items = colors.map((item, index) => {
        displayNameStyles(stateFromStores[5]);
        const obj = { foreground: backgroundColor(stateFromStores[6])(item), background: null, ratio: null, saturationFactor: null };
        if (closure_3 === displayNameStyles(stateFromStores[3]).DisplayNameEffect.TOON) {
          let tmp4 = backgroundColor(stateFromStores[6])("#333");
        } else {
          tmp4 = backgroundColor(stateFromStores[6])(closure_1);
        }
        obj[1] = tmp4;
        obj[2] = minContrastRatio.minContrastRatio;
        obj[3] = closure_2;
        const accessibleForegroundColor = obj.getAccessibleForegroundColor(obj);
        return accessibleForegroundColor.hex();
      });
    }
    return items;
  }, items1);
};