// discord_app/modules/display_name_styles/hooks/useDisplayNameStylesHandleApply.tsx
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import DisplayNameEffect from "../../../../discord_common/js/shared/shared-constants/DisplayNameEffect.tsx";
import DisplayNameFont from "../../../../discord_common/js/shared/shared-constants/DisplayNameFont.tsx";
import UserProfileSettingsActionCreators from "../../user_profile/UserProfileSettingsActionCreators.tsx";
import UserProfileActionCreators from "../../user_profile/UserProfileActionCreators.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
let result = size.fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesHandleApply.tsx");

export const useDisplayNameStylesHandleApply = function useDisplayNameStylesHandleApply(hasChanges) {
  hasChanges = hasChanges.hasChanges;
  const selectedFontId = hasChanges.selectedFontId;
  const selectedEffectId = hasChanges.selectedEffectId;
  const selectedColors = hasChanges.selectedColors;
  const defaultColor = hasChanges.defaultColor;
  const guildId = hasChanges.guildId;
  const isTryItOut = hasChanges.isTryItOut;
  const onClose = hasChanges.onClose;
  let items = [
    hasChanges,
    selectedFontId,
    selectedEffectId,
    selectedColors,
    defaultColor,
    onClose,
    guildId,
    isTryItOut,
  ];
  return selectedColors.useCallback(() => {
    if (hasChanges) {
      let tmp4 = selectedEffectId === DisplayNameEffect.DisplayNameEffect.SOLID;
      if (tmp4) {
        tmp4 = selectedColors.length > 0;
      }
      if (tmp4) {
        tmp4 = selectedColors[0] === defaultColor;
      }
      let items = selectedColors;
      if (tmp4) {
        items = [];
      }
      let obj = { fontId: selectedFontId, effectId: selectedEffectId, colors: items };
      if (isTryItOut) {
        let tmp2Result = UserProfileActionCreators;
        const result = tmp2Result.setTryItOutDisplayNameStyles(obj);
      } else {
        tmp2Result = UserProfileSettingsActionCreators;
        obj = { guildId, displayNameStyles: null };
        obj.displayNameStyles = obj;
        tmp2Result.setPendingChanges(obj);
      }
      obj = {
        font_name: DisplayNameFont.DisplayNameFont[selectedFontId],
        effect_name: DisplayNameEffect.DisplayNameEffect[selectedEffectId],
        colors: selectedColors,
      };
      AnalyticsUtilsDefault.track(AnalyticEvents.DISPLAY_NAME_STYLES_APPLIED, obj);
      if (onClose != null) {
        onClose();
      }
    }
  }, items);
};
