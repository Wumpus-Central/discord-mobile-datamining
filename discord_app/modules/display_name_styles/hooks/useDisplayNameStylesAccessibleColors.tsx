// === Module 9619: useDisplayNameStylesAccessibleColors ===

// Module 9619 (useDisplayNameStylesAccessibleColors)
import closure_3 from "noop" /* 19 */;
import closure_4 from "maybeApplyNoTextColorForLightCustomTheme" /* 4372 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesAccessibleColors.tsx");

export const useDisplayNameStylesAccessibleColors = function useDisplayNameStylesAccessibleColors(displayNameStyles) {
  displayNameStyles = displayNameStyles.displayNameStyles;
  const backgroundColor = displayNameStyles.backgroundColor;
  let stateFromStores;
  let effectId;
  let displayNameStylesEffectConfig;
  let items = [displayNameStylesEffectConfig];
  stateFromStores = displayNameStyles(stateFromStores[2]).useStateFromStores(items, () => {
    let num = 1;
    if (displayNameStylesEffectConfig.desaturateUserColors) {
      num = displayNameStylesEffectConfig.saturation;
    }
    return num;
  });
  effectId = undefined;
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
      items = colors.map((arg0) => {
        let obj = closure_1_0(closure_1_2[5]);
        obj = { foreground: closure_1_1(closure_1_2[6])(arg0), background: null, ratio: null, saturationFactor: null };
        if (closure_3 === closure_1_0(closure_1_2[3]).DisplayNameEffect.TOON) {
          let tmp4 = tmp2(tmp[6])("#333");
        } else {
          tmp4 = tmp2(tmp[6])(closure_1);
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