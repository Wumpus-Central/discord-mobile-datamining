// === Module 19300: VoicePanelVisualEffectView ===

// Module 19300 (VoicePanelVisualEffectView)
import nativeDefault from "native" /* 575 */;
import noop from "module_19" /* 19 */;
import ThemeStore from "ThemeStore" /* 1192 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ DynamicColorIOS: closure_4, StyleSheet, View: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5014);
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelVisualEffectView.tsx");

export const VoicePanelVisualEffectView = noop.memo(function VoicePanelVisualEffectViewInner(matchAppTheme) {
  let flag = matchAppTheme.matchAppTheme;
  if (flag === undefined) {
    flag = false;
  }
  let stateFromStores;
  let token1;
  let token = flag(token1[6]).useToken(stateFromStores(token1[5]).colors.THEME_LOCKED_BLUR_FALLBACK);
  const obj = flag(token1[6]);
  const tmp3 = stateFromStores;
  if (flag) {
    token = obj2.useToken(stateFromStores(token1[5]).colors.MOBILE_FLOATINGBAR_BACKGROUND);
  }
  const tmp5 = closure_9();
  obj2 = flag(token1[6]);
  const items = [ThemeStore];
  stateFromStores = flag(token1[7]).useStateFromStores(items, () => flag(token1[8]).isThemeLight(theme.theme));
  const tmpResult = flag(token1[7]);
  token1 = flag(token1[6]).useToken(tmp3(tmp2[5]).colors.MOBILE_FLOATINGBAR_BACKGROUND_HIGHER);
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
  const items2 = [closure_7(flag(token1[10]).BackgroundBlurFill, { blurTheme: "dark", android_fallbackColor: token }), ];
  const obj4 = { style: null };
  const items3 = [tmp5.border, { backgroundColor: memo }];
  obj4.style = items3;
  items2[1] = closure_7(closure_5, obj4);
  obj3.children = items2;
  return closure_8(closure_5, obj3);
});