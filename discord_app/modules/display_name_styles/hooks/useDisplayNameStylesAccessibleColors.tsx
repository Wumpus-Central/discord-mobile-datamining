// === Module 10233: useDisplayNameStylesAccessibleColors ===

// Module 10233 (useDisplayNameStylesAccessibleColors)
import _modDef683 from "module_683" /* 683 */;
import DisplayNameEffect from "DisplayNameEffect" /* 1409 */;
import ColorUtils from "ColorUtils" /* 4928 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5080 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesAccessibleColors.tsx");

export const useDisplayNameStylesAccessibleColors = ReactCompilerGating.isReactCompilerEnabled() ? (function useDisplayNameStylesAccessibleColors(arg0) {
  const cResult = backgroundColor(effectId[3]).c(14);
  ({ displayNameStyles, backgroundColor } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function l() {
      let num = 1;
      if (AccessibilityStore.desaturateUserColors) {
        num = AccessibilityStore.saturation;
      }
      return num;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const obj = backgroundColor(effectId[3]);
  const stateFromStores = backgroundColor(effectId[4]).useStateFromStores(tmp4, tmp5);
  effectId = undefined;
  if (displayNameStyles != null) {
    effectId = displayNameStyles.effectId;
  }
  if (effectId == null) {
    effectId = backgroundColor(tmp2[5]).DisplayNameEffect.SOLID;
  }
  const tmpResult = backgroundColor(effectId[4]);
  let minContrastRatio = backgroundColor(effectId[6]).useDisplayNameStylesEffectConfig(effectId);
  if (null != displayNameStyles) {
    if (cResult[9] === backgroundColor) {
      if (cResult[10] === minContrastRatio.minContrastRatio) {
        if (cResult[11] === effectId) {
          if (cResult[12] === stateFromStores) {
            let tmp10 = cResult[13];
          }
          const colors = displayNameStyles.colors;
          const mapped = colors.map(tmp10);
          cResult[3] = backgroundColor;
          displayNameStyles = displayNameStyles.colors;
          cResult[4] = displayNameStyles;
          minContrastRatio = minContrastRatio.minContrastRatio;
          cResult[5] = minContrastRatio;
          cResult[6] = effectId;
          cResult[7] = stateFromStores;
          cResult[8] = mapped;
        }
      }
    }
    const fn2 = function b(arg0) {
      const obj2 = { foreground: _modDef683(arg0), background: null, ratio: null, saturationFactor: null };
      if (effectId === DisplayNameEffect.DisplayNameEffect.TOON) {
        let tmp4 = _modDef683("#333");
      } else {
        tmp4 = _modDef683(backgroundColor);
      }
      obj2.background = tmp4;
      obj2.ratio = minContrastRatio.minContrastRatio;
      obj2.saturationFactor = stateFromStores;
      const accessibleForegroundColor = ColorUtils.getAccessibleForegroundColor(obj2);
      return accessibleForegroundColor.hex();
    };
    cResult[9] = backgroundColor;
    cResult[10] = minContrastRatio.minContrastRatio;
    cResult[11] = effectId;
    cResult[12] = stateFromStores;
    cResult[13] = fn2;
    tmp10 = fn2;
  } else {
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const items1 = [];
      cResult[2] = items1;
      let tmp9 = items1;
    } else {
      tmp9 = cResult[2];
    }
    return tmp9;
  }
  const tmpResult2 = backgroundColor(effectId[6]);
}) : (function useDisplayNameStylesAccessibleColors(displayNameStyles) {
  displayNameStyles = displayNameStyles.displayNameStyles;
  const backgroundColor = displayNameStyles.backgroundColor;
  let stateFromStores;
  let displayNameStylesEffectConfig;
  let items = [displayNameStylesEffectConfig];
  stateFromStores = displayNameStyles(stateFromStores[4]).useStateFromStores(items, () => {
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
    effectId = tmp(tmp2[5]).DisplayNameEffect.SOLID;
  }
  const obj = displayNameStyles(stateFromStores[4]);
  displayNameStylesEffectConfig = displayNameStyles(stateFromStores[6]).useDisplayNameStylesEffectConfig(effectId);
  const items1 = [displayNameStyles, effectId, displayNameStylesEffectConfig.minContrastRatio, stateFromStores, backgroundColor];
  return effectId.useMemo(() => {
    if (null == displayNameStyles) {
      let items = [];
    } else {
      const colors = tmp.colors;
      items = colors.map((item) => {
        const obj2 = { foreground: backgroundColor(stateFromStores[8])(item), background: null, ratio: null, saturationFactor: null };
        if (effectId === displayNameStyles(stateFromStores[5]).DisplayNameEffect.TOON) {
          let tmp4 = backgroundColor(stateFromStores[8])("#333");
        } else {
          tmp4 = backgroundColor(stateFromStores[8])(closure_1_1);
        }
        obj2.background = tmp4;
        obj2.ratio = minContrastRatio.minContrastRatio;
        obj2.saturationFactor = saturationFactor;
        const accessibleForegroundColor = displayNameStyles(stateFromStores[7]).getAccessibleForegroundColor(obj2);
        return accessibleForegroundColor.hex();
      });
    }
    return items;
  }, items1);
});