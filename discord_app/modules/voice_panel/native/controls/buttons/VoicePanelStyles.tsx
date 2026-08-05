// discord_app/modules/voice_panel/native/controls/buttons/VoicePanelStyles.tsx
import createCacheKey from "createCacheKey";

let closure_3 = createCacheKey.createStyles((arg0, arg1) => {
  let str = "transparent";
  if (!arg1) {
    str = importDefault(712).colors.BACKGROUND_MOD_STRONG;
  }
  let obj = { iconBg: { backgroundColor: str }, iconBgSelected: null, iconBgVoiceMuted: null, iconFill: null, iconFillMuted: null, iconFillRed: null, iconFillSelected: null, iconBadgeIndicator: null };
  obj = { backgroundColor: importDefault(712).colors.WHITE };
  obj[1] = obj;
  obj = { borderWidth: 1, borderColor: importDefault(712).colors.BACKGROUND_VOICE_MUTED, backgroundColor: importDefault(712).colors.BACKGROUND_VOICE_MUTED };
  obj[2] = obj;
  const colors = importDefault(712).colors;
  if (arg0) {
    let INTERACTIVE_TEXT_DEFAULT = colors.INTERACTIVE_TEXT_DEFAULT;
  } else {
    INTERACTIVE_TEXT_DEFAULT = arg1 ? colors.ICON_STRONG : colors.WHITE;
  }
  obj[3] = { color: INTERACTIVE_TEXT_DEFAULT };
  obj[4] = { color: importDefault(712).colors.ICON_MUTED };
  const obj1 = { color: importDefault(712).colors.ICON_MUTED };
  obj[5] = { color: importDefault(712).unsafe_rawColors.RED_400 };
  const obj2 = { color: importDefault(712).unsafe_rawColors.RED_400 };
  obj[6] = { color: importDefault(712).colors.BLACK };
  const colors2 = tmp3(712).colors;
  obj[7] = { backgroundColor: arg0 ? colors2.CONTROL_BRAND_FOREGROUND : colors2.WHITE };
  return obj;
});
const result = require("map").fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelStyles.tsx");

export const useVoicePanelButtonStyles = function useVoicePanelButtonStyles(wrapperSpecs) {
  const derivedStateFromSharedValue = require(8654) /* map */.useDerivedStateFromSharedValue(wrapperSpecs, (drawerMode) => drawerMode.drawerMode);
  return callback(derivedStateFromSharedValue, importDefault(1348)("VoicePanelStyles"));
};