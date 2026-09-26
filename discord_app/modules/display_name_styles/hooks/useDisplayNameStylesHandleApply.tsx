// === Module 14885: useDisplayNameStylesHandleApply ===

// Module 14885 (useDisplayNameStylesHandleApply)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import DisplayNameEffect from "DisplayNameEffect" /* 1391 */;
import DisplayNameFont from "DisplayNameFont" /* 1392 */;
import UserProfileSettingsActionCreators from "UserProfileSettingsActionCreators" /* 7609 */;
import UserProfileActionCreators from "UserProfileActionCreators" /* 7612 */;
import noop from "module_19" /* 19 */;

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
  let items = [hasChanges, selectedFontId, selectedEffectId, selectedColors, defaultColor, onClose, guildId, isTryItOut];
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
      const obj = { fontId: selectedFontId, effectId: selectedEffectId, colors: items };
      if (isTryItOut) {
        const result = UserProfileActionCreators.setTryItOutDisplayNameStyles(obj);
        const tmp2Result = UserProfileActionCreators;
      } else {
        const obj2 = { guildId, displayNameStyles: obj };
        UserProfileSettingsActionCreators.setPendingChanges(obj2);
        const tmp2Result2 = UserProfileSettingsActionCreators;
      }
      const obj3 = { font_name: DisplayNameFont.DisplayNameFont[selectedFontId], effect_name: DisplayNameEffect.DisplayNameEffect[selectedEffectId], colors: selectedColors };
      AnalyticsUtilsDefault.track(AnalyticEvents.DISPLAY_NAME_STYLES_APPLIED, obj3);
      if (onClose != null) {
        onClose();
      }
    }
  }, items);
};