// discord_app/modules/voice_panel/native/controls/buttons/VoicePanelStyles.tsx
import set from "../../../../../../_runtime/00002_set.js";
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import map from "../../../../reanimated/native/useStateFromSharedValue.tsx";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

let closure_3 = createCacheKey.createStyles((arg0) => {
  let obj = { iconBg: { backgroundColor: "transparent" }, iconBgSelected: null, iconBgVoiceMuted: null, iconFill: null, iconFillMuted: null, iconFillRed: null, iconFillSelected: null, iconBadgeIndicator: null };
  obj = { backgroundColor: ThemesDefault.colors.WHITE };
  obj[1] = obj;
  obj = { borderWidth: 1, borderColor: ThemesDefault.colors.BACKGROUND_VOICE_MUTED, backgroundColor: ThemesDefault.colors.BACKGROUND_VOICE_MUTED };
  obj[2] = obj;
  const colors = ThemesDefault.colors;
  obj[3] = { color: arg0 ? colors.INTERACTIVE_TEXT_DEFAULT : colors.ICON_STRONG };
  obj[4] = { color: ThemesDefault.colors.ICON_MUTED };
  obj1 = { color: ThemesDefault.colors.ICON_MUTED };
  obj[5] = { color: ThemesDefault.unsafe_rawColors.RED_400 };
  const obj2 = { color: ThemesDefault.unsafe_rawColors.RED_400 };
  obj[6] = { color: ThemesDefault.colors.BLACK };
  const colors2 = tmp(712).colors;
  obj[7] = { backgroundColor: arg0 ? colors2.CONTROL_BRAND_FOREGROUND : colors2.WHITE };
  return obj;
});
const result = set.fileFinishedImporting("modules/voice_panel/native/controls/buttons/VoicePanelStyles.tsx");

export const useVoicePanelButtonStyles = function useVoicePanelButtonStyles(wrapperSpecs) {
  return callback(map.useDerivedStateFromSharedValue(wrapperSpecs, (drawerMode) => drawerMode.drawerMode));
};