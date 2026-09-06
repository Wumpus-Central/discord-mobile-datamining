// discord_app/modules/voice_panel/native/shared/VoicePanelVisualEffectView.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import useToken from "../../../../design/tokens/native/useToken.tsx";
import native from "../../../../design/components/experimental/native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet, View: c3 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let obj = { wrapper: null, border: null };
obj = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj.wrapper = obj;
const createStyles = {};
const merged1 = Object.assign(StyleSheet.absoluteFillObject);
createStyles.borderWidth = 1;
createStyles.borderColor = nativeDefault.colors.BORDER_SUBTLE;
createStyles.borderRadius = nativeDefault.modules.mobile.VOICE_PANEL_CONTROLS_BORDER_RADIUS;
obj.border = createStyles;
let closure_6 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/shared/VoicePanelVisualEffectView.tsx");

export const VoicePanelVisualEffectView = noop.memo(function VoicePanelVisualEffectViewInner(matchAppTheme) {
  let flag = matchAppTheme.matchAppTheme;
  if (flag === undefined) {
    flag = false;
  }
  let obj = useToken;
  let token = obj.useToken(nativeDefault.colors.THEME_LOCKED_BLUR_FALLBACK);
  if (flag) {
    token = obj2.useToken(nativeDefault.colors.MOBILE_FLOATINGBAR_BACKGROUND);
  }
  const tmp4 = closure_6();
  obj = { style: tmp4.wrapper, children: null };
  const items = [React4(native.BackgroundBlurFill, { blurTheme: "dark", android_fallbackColor: token })];
  obj = { style: tmp4.border };
  items[1] = React4(React3, obj);
  obj.children = items;
  return hasOwnProperty(React3, obj);
});
