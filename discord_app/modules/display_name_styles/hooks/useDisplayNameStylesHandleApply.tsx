// === Module 14683: useDisplayNameStylesHandleApply ===

// Module 14683 (useDisplayNameStylesHandleApply)
import noop from "noop" /* 19 */;
import { AnalyticEvents } from "ME" /* 676 */;

const require = fn;
let result = require("obj132").fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesHandleApply.tsx");

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
      let tmp4 = selectedEffectId === hasChanges(selectedEffectId[2]).DisplayNameEffect.SOLID;
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
      let obj = { fontId: null, effectId: null, colors: null };
      obj[0] = selectedFontId;
      obj[1] = selectedEffectId;
      obj[2] = items;
      if (isTryItOut) {
        let tmp2Result = hasChanges(selectedEffectId[3]);
        const result = tmp2Result.setTryItOutDisplayNameStyles(obj);
      } else {
        tmp2Result = hasChanges(selectedEffectId[4]);
        obj = { guildId: null, displayNameStyles: null };
        obj[0] = guildId;
        obj[1] = obj;
        tmp2Result.setPendingChanges(obj);
      }
      obj = { font_name: null, effect_name: null, colors: null };
      obj[0] = hasChanges(selectedEffectId[6]).DisplayNameFont[selectedFontId];
      obj[1] = hasChanges(selectedEffectId[2]).DisplayNameEffect[selectedEffectId];
      obj[2] = selectedColors;
      selectedFontId(selectedEffectId[5]).track(defaultColor.DISPLAY_NAME_STYLES_APPLIED, obj);
      if (onClose != null) {
        onClose();
      }
      const obj5 = selectedFontId(selectedEffectId[5]);
    }
  }, items);
};