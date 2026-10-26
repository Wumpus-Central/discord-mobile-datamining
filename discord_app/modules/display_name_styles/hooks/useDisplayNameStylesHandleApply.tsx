// discord_app/modules/display_name_styles/hooks/useDisplayNameStylesHandleApply.tsx
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

const require = fn;
const AnalyticEvents = fn(1087).AnalyticEvents;
const HexagonCampaignConstants = fn(4996);
({ HEXAGON_CAMPAIGN_DISPLAY_NAME_FONT: closure_8, HexagonCampaignPerk: closure_9 } = HexagonCampaignConstants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/display_name_styles/hooks/useDisplayNameStylesHandleApply.tsx");

export const DisplayNameStylesEntryPoints = { TRY_THIS_STYLE: "try_this_style", PROFILE_EDITOR: "profile_editor" };
export const useDisplayNameStylesHandleApply = function useDisplayNameStylesHandleApply(hasChanges) {
  hasChanges = hasChanges.hasChanges;
  const entryPoint = hasChanges.entryPoint;
  let selectedFontId = hasChanges.selectedFontId;
  const selectedEffectId = hasChanges.selectedEffectId;
  const selectedColors = hasChanges.selectedColors;
  const defaultColor = hasChanges.defaultColor;
  const guildId = hasChanges.guildId;
  const isTryItOut = hasChanges.isTryItOut;
  const onClose = hasChanges.onClose;
  const onEnrollmentError = hasChanges.onEnrollmentError;
  let flag = hasChanges.shouldSaveWithoutPendingChanges;
  if (flag === undefined) {
    flag = false;
  }
  const onSaveError = hasChanges.onSaveError;
  closure_12 = defaultColor.useRef(false);
  let tmp = selectedColors(defaultColor.useState(false), 2);
  closure_13 = tmp[1];
  const items = [
    hasChanges,
    entryPoint,
    selectedFontId,
    selectedEffectId,
    selectedColors,
    defaultColor,
    onClose,
    onEnrollmentError,
    guildId,
    isTryItOut,
    flag,
    onSaveError,
  ];
  return {
    handleApply: defaultColor.useCallback(
      selectedEffectId(function* () {
        if (c4 === 2) {
          c4 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp7 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            let obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            c4 = 2;
            if (0 === c3) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                let obj3 = { value, done: true };
                return obj3;
              } else {
                closure_1 = tmp3;
                closure_128_0 = undefined;
                closure_128_1 = undefined;
                closure_128_2 = undefined;
                function apply() {
                  const self = this;
                  const apply = closure_4.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                }
                closure_128_3 = apply;
                closure_128_4 = function _apply() {
                  const self = this;
                  const tmp = selectedEffectId(function* () {
                    if (c5 === 2) {
                      c5 = 3;
                      throw new TypeError("Generator functions may not be called on executing generators");
                    } else if (tmp7 === 3) {
                      if (arg0 === 1) {
                        throw value;
                      } else if (arg0 === 2) {
                        const obj2 = { value, done: true };
                        return obj2;
                      } else {
                        return { value: "IconComponent", done: null };
                      }
                    } else {
                      try {
                        c5 = 2;
                        if (0 === colors) {
                          if (arg0 === 1) {
                            c5 = 3;
                            throw value;
                          } else if (arg0 === 2) {
                            c5 = 3;
                            const obj3 = { value, done: true };
                            return obj3;
                          } else {
                            const entry_point = tmp4;
                            closure_0 = tmp8;
                            closure_128_0 = undefined;
                            if (closure_2_1) {
                              const result = displayNameStyles(15856).saveHexagonCampaignPreviousDisplayNameStyles();
                              const obj4 = displayNameStyles(15856);
                            }
                            if (closure_1_10) {
                              closure_1_12.current = true;
                              c3 = 2;
                              const obj5 = { displayNameStyles };
                              colors = 3;
                              c5 = 1;
                              const obj6 = {
                                value: displayNameStyles(7078).saveProfileAndAccountChanges(obj5),
                                done: false,
                              };
                              return obj6;
                            } else if (closure_1_7) {
                              const result1 = displayNameStyles(8656).setTryItOutDisplayNameStyles(displayNameStyles);
                              const tmp31Result = displayNameStyles(8656);
                            } else {
                              const obj7 = { guildId, displayNameStyles };
                              displayNameStyles(8653).setPendingChanges(obj7);
                              const tmp31Result2 = displayNameStyles(8653);
                            }
                          }
                        } else if (1 === tmp8) {
                          c3 = 0;
                          closure_1_12.current = false;
                          throw closure_2;
                        } else if (2 === tmp8) {
                          c3 = 1;
                          if (closure_1_11 != null) {
                            closure_1_11();
                          }
                          c3 = 0;
                          closure_1_12.current = false;
                          c5 = 3;
                          const obj9 = { value: undefined, done: true };
                          return obj9;
                        } else if (arg0 === 1) {
                          c5 = 3;
                          throw value;
                        } else if (arg0 === 2) {
                          c3 = 0;
                          closure_1_12.current = false;
                          c5 = 3;
                          const obj12 = { value, done: true };
                          return obj12;
                        } else {
                          closure_128_0 = value;
                          let ok;
                          if (closure_128_0 != null) {
                            ok = closure_128_0.ok;
                          }
                          if (true !== ok) {
                            if (closure_1_11 != null) {
                              closure_1_11();
                            }
                            c3 = 0;
                            closure_1_12.current = false;
                            c5 = 3;
                            const obj = { value: undefined, done: true };
                            return obj;
                          } else {
                            c3 = 0;
                            closure_1_12.current = false;
                          }
                        }
                        const obj13 = {
                          font_name: displayNameStyles(1412).DisplayNameFont[closure_2],
                          effect_name: displayNameStyles(1411).DisplayNameEffect[c3],
                          colors,
                          entry_point,
                        };
                        closure_2_1(1267).track(constants.DISPLAY_NAME_STYLES_APPLIED, obj13);
                        if (closure_129_1) {
                          const result2 = displayNameStyles(15856).markHexagonCampaignPerkApplied(
                            constants2.DISPLAY_NAME_STYLE,
                          );
                          const obj10 = displayNameStyles(15856);
                        }
                        if (closure_1_8 != null) {
                          closure_1_8();
                        }
                        c5 = 3;
                        return { value: "IconComponent", done: null };
                      } catch (tmp63) {
                        closure_2 = tmp63;
                        if (tmp5 === c3) {
                          c5 = tmp3;
                          throw tmp63;
                        } else if (tmp2 === tmp65) {
                          colors = tmp2;
                        } else {
                          colors = tmp;
                        }
                      }
                    }
                  });
                  closure_4 = tmp;
                  const apply = tmp.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                };
                if (hasChanges) {
                  if (!ref.current) {
                    let obj4 = { fontId: selectedFontId, effectId: selectedEffectId, colors: selectedColors };
                    let result = tmp5(selectedFontId[6]).normalizeDisplayNameStylesForApply(obj4, defaultColor);
                    closure_128_0 = result;
                    let tmp30 = true !== isTryItOut;
                    if (tmp30) {
                      tmp30 = result.fontId === onClose;
                    }
                    closure_128_1 = tmp30;
                    if (tmp30) {
                      if (
                        !tmp22Result.isEnrolledInHexagonCampaign(
                          currentUser.getCurrentUser(),
                          constants.DISPLAY_NAME_STYLE,
                        )
                      ) {
                        ref.current = true;
                        closure_13(true);
                        closure_128_2 = false;
                        selectedFontId = 1;
                        c3 = 3;
                        c4 = 1;
                        let obj6 = {
                          value: tmp5(tmp23[7]).ensureHexagonCampaignEnrollment(constants.DISPLAY_NAME_STYLE),
                          done: false,
                        };
                        return obj6;
                      }
                      tmp22Result = tmp5(tmp23[14]);
                    }
                    c3 = 2;
                    c4 = 1;
                    let obj7 = { value: apply(), done: false };
                    return obj7;
                  }
                }
                c4 = 3;
              }
            } else if (1 === tmp8) {
              selectedFontId = 0;
              closure_128_2 = false;
              closure_129_12.current = false;
              closure_129_13(false);
              if (!closure_128_2) {
                if (closure_129_9 != null) {
                  closure_129_9();
                }
              }
            } else if (2 === tmp8) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj8 = { value, done: true };
                return obj8;
              }
            } else if (3 === tmp8) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                selectedFontId = 0;
                c4 = 3;
                let obj9 = { value, done: true };
                return obj9;
              } else {
                closure_128_2 = value;
                selectedFontId = 0;
              }
            } else if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              let obj = { value, done: true };
              return obj;
            }
            c3 = 4;
            c4 = 1;
            let obj10 = { value: closure_128_3(), done: false };
            return obj10;
          } catch (tmp37) {
            if (tmp4 === selectedFontId) {
              c4 = tmp2;
              throw tmp37;
            } else {
              c3 = tmp;
            }
          }
        }
      }),
      items,
    ),
    isApplying: tmp[0],
  };
};
