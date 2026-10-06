// === Module 17355: VoicePanelStyles ===

// Module 17355 (VoicePanelStyles)
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useStateFromSharedValue from "useStateFromSharedValue" /* 7952 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_3 = createStyles.createStyles((arg0) => {
  let colors;
  let colors2;
  const obj = { iconBg: { backgroundColor: "transparent" }, iconBgSelected: { backgroundColor: nativeDefault.colors.WHITE }, iconBgVoiceMuted: { borderWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_VOICE_MUTED, backgroundColor: nativeDefault.colors.BACKGROUND_VOICE_MUTED }, iconFill: { color: arg0 ? colors.INTERACTIVE_TEXT_DEFAULT : colors.ICON_STRONG }, iconFillMuted: { color: nativeDefault.colors.ICON_MUTED }, iconFillRed: { color: nativeDefault.unsafe_rawColors.RED_400 }, iconFillSelected: { color: nativeDefault.colors.BLACK }, iconBadgeIndicator: { backgroundColor: arg0 ? colors2.CONTROL_BRAND_FOREGROUND : colors2.WHITE } };
  ({ backgroundColor: nativeDefault.colors.WHITE });
  ({ borderWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_VOICE_MUTED, backgroundColor: nativeDefault.colors.BACKGROUND_VOICE_MUTED });
  colors = nativeDefault.colors;
  ({ color: nativeDefault.colors.ICON_MUTED });
  ({ color: nativeDefault.unsafe_rawColors.RED_400 });
  ({ color: nativeDefault.colors.BLACK });
  colors2 = nativeDefault.colors;
  return obj;
});
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let first;
  const obj = react;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function c(drawerMode) {
      return drawerMode.drawerMode;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmpResult = useStateFromSharedValue;
  return closure_3(tmpResult.useDerivedStateFromSharedValue(arg0, first));
}) : ((arg0) => {
  const obj = useStateFromSharedValue;
  return closure_3(obj.useDerivedStateFromSharedValue(arg0, (drawerMode) => drawerMode.drawerMode));
});
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelStyles.tsx");

export const useVoicePanelButtonStyles = tmp2;