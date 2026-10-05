// discord_app/modules/user_profile/useProfileThemeValues.native.tsx
import react from "../../../_runtime/00019_react.js";
import useStateFromStores from "../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import react2 from "../../../_runtime/00576_react.js";
import shims from "../../../discord_common/js/packages/tokens/shims.native.tsx";
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import AccessibilityStore from "../a11y/AccessibilityStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const useMemo = react.useMemo;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (theme) => {
      let saturation;
      let tmp4;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(15);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AccessibilityStore];
        const fn = function n() {
          return saturation.saturation;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = useStateFromStores;
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      let tmp8 = null;
      if (null != theme) {
        let OPACITY_WHITE_24;
        if (cResult[2] === theme) {
          let tmp9;
          let tmp10;
          let tmp11;
          let tmp12;
          let tmp13;
          if (cResult[3] === stateFromStores) {
            tmp9 = cResult[4];
            tmp10 = cResult[5];
            tmp11 = cResult[6];
            tmp12 = cResult[7];
            tmp13 = cResult[8];
          }
          if (cResult[9] === tmp9) {
            if (cResult[10] === tmp10) {
              if (cResult[11] === tmp11) {
                if (cResult[12] === tmp12) {
                  let tmp18;
                  if (cResult[13] === tmp13) {
                    tmp18 = cResult[14];
                  }
                  tmp8 = tmp18;
                }
              }
            }
          }
          const obj2 = {
            overlaySyncedWithUserTheme: tmp9,
            overlay: tmp10,
            sectionBox: tmp11,
            dividerOpacity: tmp12,
            rolePillBackgroundColor: tmp13,
          };
          cResult[9] = tmp9;
          cResult[10] = tmp10;
          cResult[11] = tmp11;
          cResult[12] = tmp12;
          cResult[13] = tmp13;
          cResult[14] = obj2;
          tmp18 = obj2;
        }
        const obj3 = { theme, saturation: stateFromStores };
        const internal = nativeDefault.internal;
        const semanticColor = internal.resolveSemanticColor(
          theme,
          nativeDefault.colors.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME,
          obj3,
        );
        const internal2 = nativeDefault.internal;
        const semanticColor1 = internal2.resolveSemanticColor(
          theme,
          nativeDefault.colors.PROFILE_GRADIENT_OVERLAY,
          obj3,
        );
        const tmpResult3 = shims;
        if (theme === tmpResult3.getThemes().LIGHT) {
          OPACITY_WHITE_24 = nativeDefault.unsafe_rawColors.OPACITY_WHITE_24;
        } else {
          const internal3 = nativeDefault.internal;
          OPACITY_WHITE_24 = internal3.resolveSemanticColor(theme, nativeDefault.colors.BACKGROUND_MOD_SUBTLE, obj3);
        }
        let num3 = 0.12;
        const tmpResult4 = shims;
        if (theme === tmpResult4.getThemes().DARK) {
          num3 = 0.24;
        }
        const internal4 = nativeDefault.internal;
        const semanticColor2 = internal4.resolveSemanticColor(
          theme,
          nativeDefault.colors.PROFILE_GRADIENT_ROLE_PILL_BACKGROUND,
          obj3,
        );
        cResult[2] = theme;
        cResult[3] = stateFromStores;
        cResult[4] = semanticColor;
        cResult[5] = semanticColor1;
        cResult[6] = OPACITY_WHITE_24;
        cResult[7] = num3;
        cResult[8] = semanticColor2;
        tmp12 = num3;
        tmp13 = semanticColor2;
        tmp11 = OPACITY_WHITE_24;
        tmp10 = semanticColor1;
        tmp9 = semanticColor;
      }
      return tmp8;
    }
  : (theme) => {
      let saturation;
      _require = theme;
      let obj = require("useStateFromStores");
      const items = [AccessibilityStore];
      const stateFromStores = obj.useStateFromStores(items, () => saturation.saturation);
      const items1 = [theme, stateFromStores];
      return useMemo(() => {
        let OPACITY_WHITE_24;
        let internal2;
        let internal3;
        let internal4;
        let num;
        if (null == theme) {
          return null;
        } else {
          const obj = { theme, saturation: stateFromStores };
          const obj2 = {
            overlaySyncedWithUserTheme: internal3.resolveSemanticColor(
              theme,
              nativeDefault.colors.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME,
              obj,
            ),
            overlay: internal4.resolveSemanticColor(theme, nativeDefault.colors.PROFILE_GRADIENT_OVERLAY, obj),
            sectionBox: OPACITY_WHITE_24,
            dividerOpacity: num,
            rolePillBackgroundColor: internal2.resolveSemanticColor(
              theme,
              nativeDefault.colors.PROFILE_GRADIENT_ROLE_PILL_BACKGROUND,
              obj,
            ),
          };
          internal3 = nativeDefault.internal;
          internal4 = nativeDefault.internal;
          const obj4 = shims;
          if (theme === obj4.getThemes().LIGHT) {
            OPACITY_WHITE_24 = nativeDefault.unsafe_rawColors.OPACITY_WHITE_24;
          } else {
            const internal = nativeDefault.internal;
            OPACITY_WHITE_24 = internal.resolveSemanticColor(theme, nativeDefault.colors.BACKGROUND_MOD_SUBTLE, obj);
          }
          num = 0.12;
          const tmp5Result = shims;
          if (theme === tmp5Result.getThemes().DARK) {
            num = 0.24;
          }
          internal2 = nativeDefault.internal;
          return obj2;
        }
      }, items1);
    };
const result = size.fileFinishedImporting("modules/user_profile/useProfileThemeValues.native.tsx");

export const useProfileThemeValues = tmp2;
