// discord_app/modules/display_name_styles/hooks/useDisplayNameStylesHandleApply.tsx
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const AnalyticEvents = fn(1085).AnalyticEvents;
const size = fn(2);
let result = size.fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesHandleApply.tsx");

export const DisplayNameStylesEntryPoints = { TRY_THIS_STYLE: "try_this_style", PROFILE_EDITOR: "profile_editor" };
export const useDisplayNameStylesHandleApply = function useDisplayNameStylesHandleApply(hasChanges) {
  hasChanges = hasChanges.hasChanges;
  const entryPoint = hasChanges.entryPoint;
  const selectedFontId = hasChanges.selectedFontId;
  const selectedEffectId = hasChanges.selectedEffectId;
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
  closure_11 = selectedColors.useRef(false);
  let items = [
    hasChanges,
    entryPoint,
    selectedFontId,
    selectedEffectId,
    selectedColors,
    defaultColor,
    onClose,
    guildId,
    isTryItOut,
    flag,
    onSaveError,
  ];
  return selectedColors.useCallback(
    selectedEffectId(function* () {
      if (constants === 2) {
        constants = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: "+51" };
        }
      } else {
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
              hasChanges = tmp8;
              closure_128_0 = undefined;
              if (hasChanges) {
                if (!ref.current) {
                  let items = selectedColors;
                  let tmp32 = selectedEffectId === hasChanges(tmp62[3]).DisplayNameEffect.SOLID;
                  if (tmp32) {
                    tmp32 = selectedColors.length > 0;
                  }
                  if (tmp32) {
                    tmp32 = selectedColors[0] === defaultColor;
                  }
                  if (tmp32) {
                    items = [];
                  }
                  const obj4 = { fontId: selectedFontId, effectId: selectedEffectId, colors: items };
                  if (!flag) {
                    if (isTryItOut) {
                      const result = tmp40(tmp62[5]).setTryItOutDisplayNameStyles(obj4);
                      const tmp40Result = tmp40(tmp62[5]);
                    } else {
                      const obj5 = { guildId, displayNameStyles: obj4 };
                      tmp40(tmp62[6]).setPendingChanges(obj5);
                      const tmp40Result2 = tmp40(tmp62[6]);
                    }
                  }
                }
                ref.current = true;
                c3 = 2;
                const obj6 = { displayNameStyles: obj4 };
                c4 = 3;
                constants = 1;
                const obj7 = { value: hasChanges(tmp62[4]).saveProfileAndAccountChanges(obj6), done: false };
                return obj7;
              }
              constants = 3;
            }
          } else if (1 === tmp8) {
            c3 = 0;
            closure_129_11.current = false;
            throw tmp62;
          } else if (2 === tmp8) {
            c3 = 1;
            if (closure_129_10 != null) {
              closure_129_10();
            }
            c3 = 0;
            closure_129_11.current = false;
            constants = 3;
            const obj9 = { value: undefined, done: true };
            return obj9;
          } else if (arg0 === 1) {
            constants = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_129_11.current = false;
            constants = 3;
            const obj11 = { value, done: true };
            return obj11;
          } else {
            closure_128_0 = value;
            let ok;
            if (closure_128_0 != null) {
              ok = closure_128_0.ok;
            }
            if (true !== ok) {
              if (closure_129_10 != null) {
                closure_129_10();
              }
              c3 = 0;
              closure_129_11.current = false;
              constants = 3;
              const obj = { value: undefined, done: true };
              return obj;
            } else {
              c3 = 0;
              closure_129_11.current = false;
            }
          }
          const obj12 = {
            font_name: hasChanges(tmp62[8]).DisplayNameFont[closure_129_2],
            effect_name: hasChanges(tmp62[3]).DisplayNameEffect[closure_129_3],
            colors: closure_129_4,
            entry_point: closure_129_1,
          };
          tmp4(tmp62[7]).track(constants.DISPLAY_NAME_STYLES_APPLIED, obj12);
          if (closure_129_8 != null) {
            closure_129_8();
          }
          const obj8 = tmp4(tmp62[7]);
        } catch (tmp62) {
          if (tmp5 === c3) {
            constants = tmp3;
            throw tmp62;
          } else if (tmp2 === tmp64) {
            c4 = tmp2;
          } else {
            c4 = tmp;
          }
        }
      }
    }),
    items,
  );
};
