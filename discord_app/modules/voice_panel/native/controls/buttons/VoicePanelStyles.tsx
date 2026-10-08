// === Module 17636: VoicePanelStyles ===

// Module 17636 (VoicePanelStyles)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useStateFromSharedValue from "useStateFromSharedValue" /* 8370 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_3 = createStyles.createStyles((arg0) => {
  const obj = { iconBg: { backgroundColor: "transparent" }, iconBgSelected: { backgroundColor: nativeDefault.colors.WHITE }, iconBgVoiceMuted: null, iconFill: null, iconFillMuted: null, iconFillRed: null, iconFillSelected: null, iconBadgeIndicator: null };
  const obj2 = { backgroundColor: nativeDefault.colors.WHITE };
  obj.iconBgVoiceMuted = { borderWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_VOICE_MUTED, backgroundColor: nativeDefault.colors.BACKGROUND_VOICE_MUTED };
  const colors = nativeDefault.colors;
  obj.iconFill = { color: arg0 ? colors.INTERACTIVE_TEXT_DEFAULT : colors.ICON_STRONG };
  const obj3 = { borderWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_VOICE_MUTED, backgroundColor: nativeDefault.colors.BACKGROUND_VOICE_MUTED };
  obj.iconFillMuted = { color: nativeDefault.colors.ICON_MUTED };
  const obj4 = { color: nativeDefault.colors.ICON_MUTED };
  obj.iconFillRed = { color: nativeDefault.unsafe_rawColors.RED_400 };
  const obj5 = { color: nativeDefault.unsafe_rawColors.RED_400 };
  obj.iconFillSelected = { color: nativeDefault.colors.BLACK };
  const colors2 = nativeDefault.colors;
  obj.iconBadgeIndicator = { backgroundColor: arg0 ? colors2.CONTROL_BRAND_FOREGROUND : colors2.WHITE };
  return obj;
});
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelStyles.tsx");

export const useVoicePanelButtonStyles = ReactCompilerGating.isReactCompilerEnabled() ? (function useVoicePanelButtonStyles(arg0) {
  const cResult = c.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function c(drawerMode) {
      return drawerMode.drawerMode;
    };
    cResult[0] = fn;
    let first = fn;
  } else {
    first = cResult[0];
  }
  return closure_3(useStateFromSharedValue.useDerivedStateFromSharedValue(arg0, first));
}) : (function useVoicePanelButtonStyles(arg0) {
  return closure_3(useStateFromSharedValue.useDerivedStateFromSharedValue(arg0, (drawerMode) => drawerMode.drawerMode));
});