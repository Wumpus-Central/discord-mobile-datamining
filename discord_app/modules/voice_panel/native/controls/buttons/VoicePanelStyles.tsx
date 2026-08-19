// discord_app/modules/voice_panel/native/controls/buttons/VoicePanelStyles.tsx
import obj132 from "../../../../../../_runtime/00002_obj132.js";
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import useIsMobileVisualRefreshExperimentEnabledDefault from "../../../../themes/experiments/MobileVisualRefreshExperiment.tsx";
import map from "../../../../reanimated/native/useStateFromSharedValue.tsx";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

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