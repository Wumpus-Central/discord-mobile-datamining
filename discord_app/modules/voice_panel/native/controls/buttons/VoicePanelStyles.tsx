// discord_app/modules/voice_panel/native/controls/buttons/VoicePanelStyles.tsx
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import { map } from "../../../../reanimated/native/useStateFromSharedValue.tsx";
import { useIsMobileVisualRefreshExperimentEnabled } from "../../../../themes/experiments/MobileVisualRefreshExperiment.tsx";

let closure_3 = createCacheKey.createStyles((arg0, arg1) => {
  let str = "transparent";
  if (!arg1) {
    str = Themes.colors.BACKGROUND_MOD_STRONG;
  }
  let obj = { iconBg: { backgroundColor: str }, iconBgSelected: null, iconBgVoiceMuted: null, iconFill: null, iconFillMuted: null, iconFillRed: null, iconFillSelected: null, iconBadgeIndicator: null };
  obj = { backgroundColor: Themes.colors.WHITE };
  obj[1] = obj;
  obj = { borderWidth: 1, borderColor: Themes.colors.BACKGROUND_VOICE_MUTED, backgroundColor: Themes.colors.BACKGROUND_VOICE_MUTED };
  obj[2] = obj;
  const colors = Themes.colors;
  if (arg0) {
    let INTERACTIVE_TEXT_DEFAULT = colors.INTERACTIVE_TEXT_DEFAULT;
  } else {
    INTERACTIVE_TEXT_DEFAULT = arg1 ? colors.ICON_STRONG : colors.WHITE;
  }
  obj[3] = { color: INTERACTIVE_TEXT_DEFAULT };
  obj[4] = { color: Themes.colors.ICON_MUTED };
  const obj1 = { color: Themes.colors.ICON_MUTED };
  obj[5] = { color: Themes.unsafe_rawColors.RED_400 };
  const obj2 = { color: Themes.unsafe_rawColors.RED_400 };
  obj[6] = { color: Themes.colors.BLACK };
  const colors2 = tmp3(712).colors;
  obj[7] = { backgroundColor: arg0 ? colors2.CONTROL_BRAND_FOREGROUND : colors2.WHITE };
  return obj;
});
const result = require("map").fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelStyles.tsx");

export const useVoicePanelButtonStyles = function useVoicePanelButtonStyles(wrapperSpecs) {
  const derivedStateFromSharedValue = map.useDerivedStateFromSharedValue(wrapperSpecs, (drawerMode) => drawerMode.drawerMode);
  return callback(derivedStateFromSharedValue, useIsMobileVisualRefreshExperimentEnabled("VoicePanelStyles"));
};