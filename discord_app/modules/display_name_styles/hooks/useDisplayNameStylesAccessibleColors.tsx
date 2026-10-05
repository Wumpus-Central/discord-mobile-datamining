// discord_app/modules/display_name_styles/hooks/useDisplayNameStylesAccessibleColors.tsx
import _modDef683 from "../../../../_runtime/metro/00683__.js";
import DisplayNameEffect from "../../../../discord_common/js/shared/shared-constants/DisplayNameEffect.tsx";
import ColorUtils from "../../../utils/ColorUtils.tsx";
import react from "../../../../_runtime/00019_react.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let backgroundColor;
      let displayNameStyles;
      let effectId;
      let tmp10;
      let tmp4;
      let tmp5;
      let tmp2 = effectId;
      let obj = backgroundColor(effectId[3]);
      const cResult = obj.c(14);
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
        let num = 0;
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = fn;
        tmp4 = items;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = backgroundColor(tmp2[4]);
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      effectId = undefined;
      if (displayNameStyles != null) {
        effectId = displayNameStyles.effectId;
      }
      if (effectId == null) {
        effectId = backgroundColor(tmp2[5]).DisplayNameEffect.SOLID;
      }
      const tmpResult2 = backgroundColor(tmp2[6]);
      const displayNameStylesEffectConfig = tmpResult2.useDisplayNameStylesEffectConfig(effectId);
      if (null != displayNameStyles) {
        let tmp11;
        if (cResult[3] === backgroundColor) {
          if (cResult[4] === displayNameStyles.colors) {
            if (cResult[5] === displayNameStylesEffectConfig.minContrastRatio) {
              if (cResult[6] === effectId) {
                if (cResult[7] === stateFromStores) {
                  tmp11 = cResult[8];
                }
                tmp10 = tmp11;
              }
            }
          }
        }
        if (cResult[9] === backgroundColor) {
          if (cResult[10] === displayNameStylesEffectConfig.minContrastRatio) {
            if (cResult[11] === effectId) {
              let tmp12;
              if (cResult[12] === stateFromStores) {
                tmp12 = cResult[13];
              }
              const colors = displayNameStyles.colors;
              const mapped = colors.map(tmp12);
              cResult[3] = backgroundColor;
              cResult[4] = displayNameStyles.colors;
              cResult[5] = displayNameStylesEffectConfig.minContrastRatio;
              cResult[6] = effectId;
              cResult[7] = stateFromStores;
              cResult[8] = mapped;
              tmp11 = mapped;
            }
          }
        }
        const fn2 = function b(arg0) {
          let tmp5;
          const tmp2 = ColorUtils;
          const getAccessibleForegroundColor = tmp2.getAccessibleForegroundColor;
          const obj = {
            foreground: _modDef683(arg0),
            background: tmp5,
            ratio: displayNameStylesEffectConfig.minContrastRatio,
            saturationFactor: stateFromStores,
          };
          if (effectId === DisplayNameEffect.DisplayNameEffect.TOON) {
            tmp5 = _modDef683("#333");
          } else {
            tmp5 = _modDef683(backgroundColor);
          }
          const accessibleForegroundColor = getAccessibleForegroundColor(obj);
          return accessibleForegroundColor.hex();
        };
        cResult[9] = backgroundColor;
        cResult[10] = displayNameStylesEffectConfig.minContrastRatio;
        cResult[11] = effectId;
        cResult[12] = stateFromStores;
        cResult[13] = fn2;
        tmp12 = fn2;
      } else {
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [];
          cResult[2] = items1;
          tmp10 = items1;
        } else {
          tmp10 = cResult[2];
        }
      }
      return tmp10;
    }
  : (displayNameStyles) => {
      displayNameStyles = displayNameStyles.displayNameStyles;
      const backgroundColor = displayNameStyles.backgroundColor;
      let stateFromStores;
      let displayNameStylesEffectConfig;
      const tmp = displayNameStyles;
      let tmp2 = stateFromStores;
      let obj = displayNameStyles(stateFromStores[4]);
      let items = [displayNameStylesEffectConfig];
      stateFromStores = obj.useStateFromStores(items, () => {
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
      const tmpResult = tmp(tmp2[6]);
      displayNameStylesEffectConfig = tmpResult.useDisplayNameStylesEffectConfig(effectId);
      const items1 = [
        displayNameStyles,
        effectId,
        displayNameStylesEffectConfig.minContrastRatio,
        stateFromStores,
        backgroundColor,
      ];
      return effectId.useMemo(() => {
        let items;
        let minContrastRatio;
        let saturationFactor;
        if (null == displayNameStyles) {
          items = [];
        } else {
          const colors = tmp.colors;
          items = colors.map((item) => {
            let tmp5;
            const tmp2 = displayNameStyles(stateFromStores[7]);
            const getAccessibleForegroundColor = tmp2.getAccessibleForegroundColor;
            const obj = {
              foreground: backgroundColor(stateFromStores[8])(item),
              background: tmp5,
              ratio: minContrastRatio.minContrastRatio,
              saturationFactor,
            };
            if (effectId === displayNameStyles(stateFromStores[5]).DisplayNameEffect.TOON) {
              tmp5 = backgroundColor(stateFromStores[8])("#333");
            } else {
              tmp5 = backgroundColor(stateFromStores[8])(closure_1_1);
            }
            const accessibleForegroundColor = getAccessibleForegroundColor(obj);
            return accessibleForegroundColor.hex();
          });
        }
        return items;
      }, items1);
    };
const result = size.fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesAccessibleColors.tsx");

export const useDisplayNameStylesAccessibleColors = tmp2;
