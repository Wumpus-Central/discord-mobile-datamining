// === Module 17785: VoicePanelVisualEffectView ===

// Module 17785 (VoicePanelVisualEffectView)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import PlatformUtils from "PlatformUtils" /* 1382 */;
import useToken from "useToken" /* 4779 */;
import shared from "shared" /* 4930 */;
import native from "native" /* 8525 */;
import noop from "module_19" /* 19 */;
import ThemeStore from "ThemeStore" /* 1205 */;

require = fn;
get_ActivityIndicator = fn(17);
({ DynamicColorIOS: closure_4, StyleSheet, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5091);
let obj = { wrapper: null, border: null };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj.wrapper = {};
let obj4 = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
obj4.borderWidth = 1;
obj4.borderColor = nativeDefault.colors.BORDER_SUBTLE;
obj4.borderRadius = nativeDefault.modules.mobile.VOICE_PANEL_CONTROLS_BORDER_RADIUS;
obj.border = obj4;
let closure_9 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelVisualEffectView.tsx");

export const VoicePanelVisualEffectView = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function VoicePanelVisualEffectViewInner(matchAppTheme) {
  const cResult = c.c(18);
  matchAppTheme = matchAppTheme.matchAppTheme;
  const token = useToken.useToken(nativeDefault.colors.THEME_LOCKED_BLUR_FALLBACK);
  const tmpResult = useToken;
  let token1 = token;
  if (undefined !== matchAppTheme && matchAppTheme) {
    token1 = tmpResult5.useToken(nativeDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND);
  }
  const tmp8 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ThemeStore];
    const fn = function s() {
      return shared.isThemeLight(theme.theme);
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp10 = fn;
    tmp9 = items;
  } else {
    [tmp9, tmp10] = cResult;
  }
  tmpResult5 = useToken;
  const stateFromStores = initialize.useStateFromStores(tmp9, tmp10);
  const tmpResult6 = initialize;
  const token2 = useToken.useToken(nativeDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND_HIGHER);
  if (cResult[2] === token2) {
    if (cResult[3] === stateFromStores) {
      if (cResult[4] === tmp4) {
        let tmp14 = cResult[5];
      }
      if (cResult[6] === str) {
        if (cResult[7] === token1) {
          let tmp17 = cResult[8];
        }
        if (cResult[9] !== tmp14) {
          const obj2 = { backgroundColor: tmp14 };
          cResult[9] = tmp14;
          cResult[10] = obj2;
          let tmp20 = obj2;
        } else {
          tmp20 = cResult[10];
        }
        if (cResult[11] === tmp8.border) {
          if (cResult[12] === tmp20) {
            let tmp21 = cResult[13];
          }
          if (cResult[14] === tmp17) {
            if (cResult[15] === tmp8.wrapper) {
              if (cResult[16] === tmp21) {
                let tmp25 = cResult[17];
              }
              return tmp25;
            }
          }
          const obj3 = { style: tmp8.wrapper, children: null };
          const items1 = [tmp17, tmp21];
          obj3.children = items1;
          const tmp28 = closure_1_8(hasOwnProperty, obj3);
          cResult[14] = tmp17;
          cResult[15] = tmp8.wrapper;
          cResult[16] = tmp21;
          cResult[17] = tmp28;
          tmp25 = tmp28;
        }
        const obj4 = { style: null };
        const items2 = [tmp8.border, tmp20];
        obj4.style = items2;
        const tmp24 = React5(hasOwnProperty, obj4);
        cResult[11] = tmp8.border;
        cResult[12] = tmp20;
        cResult[13] = tmp24;
        tmp21 = tmp24;
      }
      const obj5 = { blurTheme: str, android_fallbackColor: token1 };
      const tmp19 = React5(native.BackgroundBlurFill, obj5);
      cResult[6] = str;
      cResult[7] = token1;
      cResult[8] = tmp19;
      tmp17 = tmp19;
    }
  }
  const tmpResult7 = useToken;
  let tmp15;
  if (tmpResult8.isIOS()) {
    if (stateFromStores) {
      if (!tmp4) {
        const obj6 = { light: "transparent", dark: "transparent", highContrastLight: token2, highContrastDark: token2 };
        tmp15 = React4(obj6);
      }
    }
  }
  cResult[2] = token2;
  cResult[3] = stateFromStores;
  cResult[4] = undefined !== matchAppTheme && matchAppTheme;
  cResult[5] = tmp15;
  tmp14 = tmp15;
  tmpResult8 = PlatformUtils;
}) : (function VoicePanelVisualEffectViewInner(matchAppTheme) {
  let flag = matchAppTheme.matchAppTheme;
  if (flag === undefined) {
    flag = false;
  }
  let stateFromStores;
  let token1;
  let token = flag(token1[8]).useToken(stateFromStores(token1[5]).colors.THEME_LOCKED_BLUR_FALLBACK);
  const obj = flag(token1[8]);
  const tmp3 = stateFromStores;
  if (flag) {
    token = obj2.useToken(stateFromStores(token1[5]).colors.MOBILE_FLOATINGBAR_BACKGROUND);
  }
  const tmp5 = closure_9();
  obj2 = flag(token1[8]);
  const items = [ThemeStore];
  stateFromStores = flag(token1[10]).useStateFromStores(items, () => flag(token1[9]).isThemeLight(theme.theme));
  const tmpResult = flag(token1[10]);
  token1 = flag(token1[8]).useToken(tmp3(tmp2[5]).colors.MOBILE_FLOATINGBAR_BACKGROUND_HIGHER);
  const items1 = [stateFromStores, token1, flag];
  const memo = noop.useMemo(() => {
    let tmp;
    if (obj.isIOS()) {
      if (stateFromStores) {
        if (!flag) {
          const obj2 = { light: "transparent", dark: "transparent", highContrastLight: token1, highContrastDark: token1 };
          tmp = React4(obj2);
        }
      }
    }
    return tmp;
  }, items1);
  const obj3 = { style: tmp5.wrapper, children: null };
  const items2 = [closure_7(flag(token1[12]).BackgroundBlurFill, { blurTheme: "dark", android_fallbackColor: token }), ];
  const obj4 = { style: null };
  const items3 = [tmp5.border, { backgroundColor: memo }];
  obj4.style = items3;
  items2[1] = closure_7(closure_5, obj4);
  obj3.children = items2;
  return closure_8(closure_5, obj3);
}));