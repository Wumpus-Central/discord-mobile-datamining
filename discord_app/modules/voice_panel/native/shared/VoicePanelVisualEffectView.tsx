// discord_app/modules/voice_panel/native/shared/VoicePanelVisualEffectView.tsx
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import PlatformUtils from "../../../../utils/PlatformUtils.tsx";
import useToken2 from "../../../../design/tokens/native/useToken.tsx";
import shared from "../../../../design/shared.tsx";
import native from "../../../../design/components/experimental/native.tsx";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import ThemeStore from "../../../user_settings/ThemeStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let matchAppTheme;

let StyleSheet;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
({ DynamicColorIOS: closure_4, StyleSheet, View: hasOwnProperty } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = { wrapper: obj2, border: obj3 };
obj2 = {};
createStyles = createStyles.createStyles;
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = {
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
  borderRadius: nativeDefault.modules.mobile.VOICE_PANEL_CONTROLS_BORDER_RADIUS,
};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
let closure_9 = createStyles(obj);
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (matchAppTheme) => {
        let items1;
        let items2;
        let theme;
        let tmp10;
        let tmp11;
        let obj = react2;
        const cResult = obj.c(18);
        matchAppTheme = matchAppTheme.matchAppTheme;
        const tmpResult = useToken2;
        const token = tmpResult.useToken(nativeDefault.colors.THEME_LOCKED_BLUR_FALLBACK);
        const useToken = useToken2.useToken;
        let token1 = token;
        useToken2;
        if (undefined !== matchAppTheme && matchAppTheme) {
          token1 = useToken(nativeDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND);
        }
        const tmp9 = closure_9();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [ThemeStore];
          const fn = function s() {
            const obj = shared;
            return obj.isThemeLight(theme.theme);
          };
          cResult[0] = items;
          cResult[1] = fn;
          tmp10 = items;
          tmp11 = fn;
        } else {
          [tmp10, tmp11] = cResult;
        }
        const tmpResult6 = get_initialized;
        const stateFromStores = tmpResult6.useStateFromStores(tmp10, tmp11);
        const tmpResult7 = useToken2;
        const token2 = tmpResult7.useToken(nativeDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND_HIGHER);
        if (cResult[2] === token2) {
          if (cResult[3] === stateFromStores) {
            let tmp15;
            if (cResult[4] === (undefined !== matchAppTheme && matchAppTheme)) {
              tmp15 = cResult[5];
            }
            if (cResult[6] === "dark") {
              let tmp18;
              let tmp21;
              if (cResult[7] === token1) {
                tmp18 = cResult[8];
              }
              if (cResult[9] !== tmp15) {
                const obj2 = { backgroundColor: tmp15 };
                cResult[9] = tmp15;
                cResult[10] = obj2;
                tmp21 = obj2;
              } else {
                tmp21 = cResult[10];
              }
              if (cResult[11] === tmp9.border) {
                let tmp22;
                if (cResult[12] === tmp21) {
                  tmp22 = cResult[13];
                }
                if (cResult[14] === tmp18) {
                  if (cResult[15] === tmp9.wrapper) {
                    let tmp26;
                    if (cResult[16] === tmp22) {
                      tmp26 = cResult[17];
                    }
                    return tmp26;
                  }
                }
                const obj3 = { style: tmp9.wrapper, children: items1 };
                items1 = [tmp18, tmp22];
                const tmp29 = metroImportAll(hasOwnProperty, obj3);
                cResult[14] = tmp18;
                cResult[15] = tmp9.wrapper;
                cResult[16] = tmp22;
                cResult[17] = tmp29;
                tmp26 = tmp29;
              }
              const obj4 = { style: items2 };
              items2 = [tmp9.border, tmp21];
              const tmp25 = metroImportDefault(hasOwnProperty, obj4);
              cResult[11] = tmp9.border;
              cResult[12] = tmp21;
              cResult[13] = tmp25;
              tmp22 = tmp25;
            }
            const obj5 = { blurTheme: "dark", android_fallbackColor: token1 };
            const tmp20 = metroImportDefault(native.BackgroundBlurFill, obj5);
            cResult[6] = "dark";
            cResult[7] = token1;
            cResult[8] = tmp20;
            tmp18 = tmp20;
          }
        }
        let tmp16;
        const tmpResult8 = PlatformUtils;
        if (tmpResult8.isIOS()) {
          if (stateFromStores) {
            if (!(undefined !== matchAppTheme && matchAppTheme)) {
              const obj6 = {
                light: "transparent",
                dark: "transparent",
                highContrastLight: token2,
                highContrastDark: token2,
              };
              tmp16 = React3(obj6);
            }
          }
        }
        cResult[2] = token2;
        cResult[3] = stateFromStores;
        cResult[4] = undefined !== matchAppTheme && matchAppTheme;
        cResult[5] = tmp16;
        tmp15 = tmp16;
      }
    : (matchAppTheme) => {
        let items2;
        let items3;
        let theme;
        let flag = matchAppTheme.matchAppTheme;
        if (flag === undefined) {
          flag = false;
        }
        let stateFromStores;
        let token1;
        let tmp = flag;
        let obj = flag(token1[8]);
        let token = obj.useToken(stateFromStores(token1[5]).colors.THEME_LOCKED_BLUR_FALLBACK);
        const useToken = flag(token1[8]).useToken;
        flag(token1[8]);
        const tmp3 = stateFromStores;
        if (flag) {
          token = useToken(stateFromStores(token1[5]).colors.MOBILE_FLOATINGBAR_BACKGROUND);
        }
        const tmp6 = closure_9();
        const items = [ThemeStore];
        const tmpResult = tmp(token1[10]);
        stateFromStores = tmpResult.useStateFromStores(items, () => {
          const obj = flag(token1[9]);
          return obj.isThemeLight(theme.theme);
        });
        const tmpResult2 = tmp(token1[8]);
        token1 = tmpResult2.useToken(tmp3(tmp2[5]).colors.MOBILE_FLOATINGBAR_BACKGROUND_HIGHER);
        const items1 = [stateFromStores, token1, flag];
        const memo = react.useMemo(() => {
          let tmp;
          const obj = PlatformUtils;
          if (obj.isIOS()) {
            if (stateFromStores) {
              if (!flag) {
                const obj2 = {
                  light: "transparent",
                  dark: "transparent",
                  highContrastLight: token1,
                  highContrastDark: token1,
                };
                tmp = React3(obj2);
              }
            }
          }
          return tmp;
        }, items1);
        let obj2 = { style: tmp6.wrapper, children: items2 };
        items2 = [closure_7(tmp(token1[12]).BackgroundBlurFill, { blurTheme: "dark", android_fallbackColor: token })];
        const obj3 = { style: items3 };
        items3 = [tmp6.border, { backgroundColor: memo }];
        items2[1] = closure_7(closure_5, obj3);
        return closure_8(closure_5, obj2);
      },
);
const result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelVisualEffectView.tsx");

export const VoicePanelVisualEffectView = memoResult;
