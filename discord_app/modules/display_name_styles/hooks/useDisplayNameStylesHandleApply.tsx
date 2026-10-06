// === Module 15171: useDisplayNameStylesHandleApply ===

// Module 15171 (useDisplayNameStylesHandleApply)
import Constants from "Constants" /* 1085 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import size from "module_2" /* 2 */;

let c4, constants;

const AnalyticEvents = Constants.AnalyticEvents;
let result = size.fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesHandleApply.tsx");

export const useDisplayNameStylesHandleApply = function useDisplayNameStylesHandleApply(hasChanges) {
  hasChanges = hasChanges.hasChanges;
  const selectedFontId = hasChanges.selectedFontId;
  let selectedEffectId = hasChanges.selectedEffectId;
  const selectedColors = hasChanges.selectedColors;
  const defaultColor = hasChanges.defaultColor;
  const guildId = hasChanges.guildId;
  const isTryItOut = hasChanges.isTryItOut;
  const onClose = hasChanges.onClose;
  let flag = hasChanges.shouldSaveWithoutPendingChanges;
  if (flag === undefined) {
    flag = false;
  }
  const onSaveError = hasChanges.onSaveError;
  let closure_10 = defaultColor.useRef(false);
  let items = [hasChanges, selectedFontId, selectedEffectId, selectedColors, defaultColor, onClose, guildId, isTryItOut, flag, onSaveError];
  return defaultColor.useCallback(selectedColors(function*() {
    let closure_0;
    let closure_1;
    let closure_2;
    let obj9;
    if (constants === 2) {
      constants = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
      try {
        constants = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            constants = 3;
            throw value;
          } else if (arg0 === 2) {
            constants = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            hasChanges = undefined;
            if (hasChanges) {
              if (!ref.current) {
                let items = selectedColors;
                const tmp28 = selectedEffectId === hasChanges(selectedEffectId[3]).DisplayNameEffect.SOLID && selectedColors.length > 0 && selectedColors[0] === defaultColor;
                if (tmp28) {
                  items = [];
                }
                const obj4 = { fontId: selectedFontId, effectId: selectedEffectId, colors: items };
                if (true) {
                  ref.current = true;
                  c3 = 2;
                  const obj5 = { displayNameStyles: obj4 };
                  c4 = 3;
                  constants = 1;
                  const obj6 = { value: obj9.saveProfileAndAccountChanges(obj5), done: false };
                  obj9 = hasChanges(selectedEffectId[4]);
                  return obj6;
                } else if (isTryItOut) {
                  const tmp36Result = hasChanges(selectedEffectId[5]);
                  const result = tmp36Result.setTryItOutDisplayNameStyles(obj4);
                } else {
                  const obj7 = { guildId, displayNameStyles: obj4 };
                  const tmp36Result2 = hasChanges(selectedEffectId[6]);
                  tmp36Result2.setPendingChanges(obj7);
                }
              }
            }
            constants = 3;
            return { value: "IconComponent", done: null };
          }
        } else if (1 === c4) {
          c3 = 0;
          closure_129_10.current = false;
          throw selectedEffectId;
        } else if (2 === c4) {
          c3 = 1;
          if (closure_129_9 != null) {
            closure_129_9();
          }
          c3 = 0;
          closure_129_10.current = false;
          constants = 3;
          const obj8 = { value: undefined, done: true };
          return obj8;
        } else if (arg0 === 1) {
          constants = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          closure_129_10.current = false;
          constants = 3;
          const obj10 = { value, done: true };
          return obj10;
        } else {
          hasChanges = value;
          let ok;
          if (hasChanges != null) {
            ok = hasChanges.ok;
          }
          if (true !== ok) {
            if (closure_129_9 != null) {
              closure_129_9();
            }
            c3 = 0;
            closure_129_10.current = false;
            constants = 3;
            const obj = { value: undefined, done: true };
            return obj;
          } else {
            c3 = 0;
            closure_129_10.current = false;
          }
        }
        const obj11 = { font_name: hasChanges(selectedEffectId[8]).DisplayNameFont[closure_129_1], effect_name: hasChanges(selectedEffectId[3]).DisplayNameEffect[closure_129_2], colors: closure_129_3 };
        const track = tmp(selectedEffectId[7]).track;
        const DISPLAY_NAME_STYLES_APPLIED = constants.DISPLAY_NAME_STYLES_APPLIED;
        const tmp44 = tmp(selectedEffectId[7]);
        track(DISPLAY_NAME_STYLES_APPLIED, obj11);
        if (closure_129_7 != null) {
          closure_129_7();
        }
      } catch (tmp58) {
        selectedEffectId = tmp58;
        if (0 === c3) {
          constants = 3;
          throw tmp58;
        } else if (1 === tmp60) {
          c4 = 1;
        } else {
          c4 = 2;
        }
      }
    }
  }), items);
};