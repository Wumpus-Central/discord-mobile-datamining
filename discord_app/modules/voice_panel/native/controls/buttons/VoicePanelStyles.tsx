// === Module 16397: useVoicePanelButtonStyles ===

// Module 16397 (useVoicePanelButtonStyles)
import obj132 from "obj132" /* 2 */;
import ThemesDefault from "Themes" /* 712 */;
import useIsMobileVisualRefreshExperimentEnabledDefault from "useIsMobileVisualRefreshExperimentEnabled" /* 1367 */;
import map from "map" /* 8995 */;
import createCacheKey from "createCacheKey" /* 4661 */;

let closure_3 = createCacheKey.createStyles((arg0, arg1) => {
  let obj = { backgroundColor: ThemesDefault.colors.WHITE };
  obj[1] = obj;
  obj = { borderWidth: 1, borderColor: ThemesDefault.colors.BACKGROUND_VOICE_MUTED, backgroundColor: ThemesDefault.colors.BACKGROUND_VOICE_MUTED };
  obj[2] = obj;
  const colors = ThemesDefault.colors;
  if (arg0) {
    let INTERACTIVE_TEXT_DEFAULT = colors.INTERACTIVE_TEXT_DEFAULT;
  } else {
    INTERACTIVE_TEXT_DEFAULT = arg1 ? colors.ICON_STRONG : colors.WHITE;
  }
  obj[3] = { color: INTERACTIVE_TEXT_DEFAULT };
  obj[4] = { color: ThemesDefault.colors.ICON_MUTED };
  obj[5] = { color: ThemesDefault.unsafe_rawColors.RED_400 };
  obj[6] = { color: ThemesDefault.colors.BLACK };
  const colors2 = ThemesDefault.colors;
  obj[7] = { backgroundColor: arg0 ? colors2.CONTROL_BRAND_FOREGROUND : colors2.WHITE };
  return obj;
});
const result = obj132.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelStyles.tsx");

export const useVoicePanelButtonStyles = function useVoicePanelButtonStyles(wrapperSpecs) {
  const derivedStateFromSharedValue = map.useDerivedStateFromSharedValue(wrapperSpecs, (drawerMode) => drawerMode.drawerMode);
  return callback(derivedStateFromSharedValue, useIsMobileVisualRefreshExperimentEnabledDefault("VoicePanelStyles"));
};