// === Module 17184: VoicePanelStyles ===

// Module 17184 (VoicePanelStyles)
import nativeDefault from "native" /* 576 */;
import useStateFromSharedValue from "useStateFromSharedValue" /* 8265 */;
import createStyles from "createStyles" /* 4560 */;
import size from "module_2" /* 2 */;

let closure_3 = createStyles.createStyles((arg0) => {
  let obj = { iconBg: { backgroundColor: "transparent" }, iconBgSelected: null, iconBgVoiceMuted: null, iconFill: null, iconFillMuted: null, iconFillRed: null, iconFillSelected: null, iconBadgeIndicator: null };
  obj = { backgroundColor: nativeDefault.colors.WHITE };
  obj.iconBgSelected = obj;
  obj = { borderWidth: 1, borderColor: nativeDefault.colors.BACKGROUND_VOICE_MUTED, backgroundColor: nativeDefault.colors.BACKGROUND_VOICE_MUTED };
  obj.iconBgVoiceMuted = obj;
  const colors = nativeDefault.colors;
  obj.iconFill = { color: arg0 ? colors.INTERACTIVE_TEXT_DEFAULT : colors.ICON_STRONG };
  obj.iconFillMuted = { color: nativeDefault.colors.ICON_MUTED };
  const obj1 = { color: nativeDefault.colors.ICON_MUTED };
  obj.iconFillRed = { color: nativeDefault.unsafe_rawColors.RED_400 };
  const obj2 = { color: nativeDefault.unsafe_rawColors.RED_400 };
  obj.iconFillSelected = { color: nativeDefault.colors.BLACK };
  const colors2 = nativeDefault.colors;
  obj.iconBadgeIndicator = { backgroundColor: arg0 ? colors2.CONTROL_BRAND_FOREGROUND : colors2.WHITE };
  return obj;
});
const result = size.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelStyles.tsx");

export const useVoicePanelButtonStyles = function useVoicePanelButtonStyles(wrapperSpecs) {
  return closure_3(useStateFromSharedValue.useDerivedStateFromSharedValue(wrapperSpecs, (drawerMode) => drawerMode.drawerMode));
};