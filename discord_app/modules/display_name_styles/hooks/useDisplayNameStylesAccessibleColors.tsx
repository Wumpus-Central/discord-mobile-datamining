// === Module 11162: useDisplayNameStylesAccessibleColors ===

// Module 11162 (useDisplayNameStylesAccessibleColors)
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4748 */;

const require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesAccessibleColors.tsx");

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
  const obj = displayNameStyles(stateFromStores[2]);
  displayNameStylesEffectConfig = displayNameStyles(stateFromStores[4]).useDisplayNameStylesEffectConfig(effectId);
  const items1 = [displayNameStyles, effectId, displayNameStylesEffectConfig.minContrastRatio, stateFromStores, backgroundColor];
  return effectId.useMemo(() => {
    if (null == displayNameStyles) {
      let items = [];
    } else {
      const colors = tmp.colors;
      items = colors.map((item) => {
        const obj2 = { foreground: backgroundColor(stateFromStores[6])(item), background: null, ratio: null, saturationFactor: null };
        if (effectId === displayNameStyles(stateFromStores[3]).DisplayNameEffect.TOON) {
          let tmp4 = backgroundColor(stateFromStores[6])("#333");
        } else {
          tmp4 = backgroundColor(stateFromStores[6])(closure_1_1);
        }
        obj2.background = tmp4;
        obj2.ratio = minContrastRatio.minContrastRatio;
        obj2.saturationFactor = saturationFactor;
        const accessibleForegroundColor = displayNameStyles(stateFromStores[5]).getAccessibleForegroundColor(obj2);
        return accessibleForegroundColor.hex();
      });
    }
    return items;
  }, items1);
};