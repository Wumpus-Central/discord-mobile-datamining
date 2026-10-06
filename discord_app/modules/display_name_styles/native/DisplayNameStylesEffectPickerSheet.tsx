// discord_app/modules/display_name_styles/native/DisplayNameStylesEffectPickerSheet.tsx
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl3 from "../../../intl/index.native.tsx";
import _modDef2911 from "../intl/DisplayNameStyles.messages.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import UsernameWithEffectsDefault from "UsernameWithEffects.tsx";
import types from "../types.tsx";
import useDisplayNameStylesEffectConfigs from "../hooks/useDisplayNameStylesEffectConfigs.tsx";
import _slicedToArray_mod from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let BottomSheet, closure_0, dependencyMap, userId;

let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let size;
let size1;
let _slicedToArray = _slicedToArray_mod;
({ View: hasOwnProperty, Pressable: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: { flex: 1 },
  contentContainer: obj2,
  gridContainer: { flexWrap: "wrap", width: 350 },
  effectCard: size,
  effectCardSelected: obj3,
  effectName: { textAlign: "center" },
  tileNewDot: size1,
};
obj2 = { padding: nativeDefault.space.PX_8, paddingLeft: nativeDefault.space.PX_16, alignItems: "center" };
createStyles = createStyles.createStyles;
size = {
  width: 109,
  height: 80,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  borderRadius: nativeDefault.radii.sm,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  justifyContent: "center",
  alignItems: "center",
};
obj3 = { borderColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND };
size1 = {
  position: "absolute",
  top: nativeDefault.space.PX_8,
  right: nativeDefault.space.PX_8,
  width: nativeDefault.space.PX_8,
  height: nativeDefault.space.PX_8,
  borderRadius: nativeDefault.space.PX_8 / 2,
  backgroundColor: nativeDefault.colors.BADGE_BACKGROUND_BRAND,
  shadowColor: nativeDefault.colors.BADGE_BACKGROUND_BRAND,
  shadowRadius: nativeDefault.space.PX_4,
  shadowOpacity: 1,
  elevation: 4,
};
let closure_9 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (userId) => {
      let dotEffectIds;
      let first;
      let first1;
      let obj6;
      let onSelectEffect;
      let selectedEffectId;
      let obj = userId(dotEffectIds[7]);
      const cResult = obj.c(33);
      userId = userId.userId;
      ({ selectedEffectId, onSelectEffect } = userId);
      const tmp4 = closure_9();
      let obj2 = userId(dotEffectIds[8]);
      const bottomSheetRef = obj2.useBottomSheetRef().bottomSheetRef;
      const obj3 = userId(dotEffectIds[9]);
      const visibleEffectOrder = obj3.useVisibleEffectOrder();
      const obj4 = userId(dotEffectIds[10]);
      const displayNameStylesNewEffects = obj4.useDisplayNameStylesNewEffects(visibleEffectOrder);
      dotEffectIds = displayNameStylesNewEffects.dotEffectIds;
      const dismissEffectDot = displayNameStylesNewEffects.dismissEffectDot;
      const tmp6 = dismissEffectDot(first.useState(selectedEffectId), 2);
      first = tmp6[0];
      let closure_5 = tmp6[1];
      let closure_6 = tmp8;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function l(arg0) {
          closure_5(arg0);
        };
        cResult[0] = fn;
        first1 = fn;
      } else {
        first1 = cResult[0];
      }
      if ((cResult[1] === first) !== selectedEffectId) {
        if (cResult[2] === first) {
          let tmp10;
          if (cResult[3] === onSelectEffect) {
            tmp10 = cResult[4];
          }
          if (null == userId) {
            return null;
          } else {
            let tmp12;
            let tmp15;
            let tmp17;
            let tmp25;
            const _Symbol2 = Symbol;
            if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = tmp(tmp2[13]).intl;
              const stringResult = intl.string(onSelectEffect(dotEffectIds[14]).RVtMxT);
              cResult[5] = stringResult;
              tmp12 = stringResult;
            } else {
              tmp12 = cResult[5];
            }
            const _Symbol = Symbol;
            if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
              const intl2 = tmp(tmp2[13]).intl;
              const stringResult1 = intl2.string(userId(dotEffectIds[13]).t.XqMe3N);
              cResult[6] = stringResult1;
              tmp15 = stringResult1;
            } else {
              tmp15 = cResult[6];
            }
            if (cResult[7] !== tmp10) {
              ({ title: tmp12, trailing: first1(userId(dotEffectIds[16]).Button, obj6) });
              onSelectEffect(dotEffectIds[15]);
              obj6 = { text: tmp15, onPress: tmp10, variant: "primary", size: "sm" };
              class F {
                constructor(arg0) {
                  closure_0 = userId;
                  obj = {
                    userId: closure_0,
                    effectId: userId,
                    selected: userId === closure_4,
                    showNewDot: dotEffectIds.has(userId),
                    onClick() {
                      first1(effectId);
                      if (dotEffectIds.has(effectId)) {
                        dismissEffectDot(effectId);
                      }
                    },
                  };
                  return closure_7(closure_1_10, obj, userId);
                }
              }
              cResult[7] = tmp10;
              cResult[8] = tmp21;
              tmp17 = tmp21;
            } else {
              tmp17 = cResult[8];
            }
            if (cResult[9] === dismissEffectDot) {
              if (cResult[10] === dotEffectIds) {
                if (cResult[11] === visibleEffectOrder) {
                  if (cResult[12] === first) {
                    if (cResult[13] === userId) {
                      tmp25 = cResult[14];
                    }
                    if (cResult[20] === tmp4.gridContainer) {
                      let tmp28;
                      if (cResult[21] === tmp25) {
                        tmp28 = cResult[22];
                      }
                      if (cResult[23] === tmp4.contentContainer) {
                        let tmp31;
                        if (cResult[24] === tmp28) {
                          tmp31 = cResult[25];
                        }
                        if (cResult[26] === tmp4.container) {
                          let tmp35;
                          if (cResult[27] === tmp31) {
                            tmp35 = cResult[28];
                          }
                          if (cResult[29] === bottomSheetRef) {
                            if (cResult[30] === tmp35) {
                              let tmp39;
                              if (cResult[31] === tmp17) {
                                tmp39 = cResult[32];
                              }
                              return tmp39;
                            }
                          }
                          const obj7 = { ref: bottomSheetRef, header: tmp17, children: tmp35 };
                          const tmp41 = first1(userId(dotEffectIds[18]).BottomSheet, obj7);
                          class F {
                            constructor(arg0) {
                              closure_0 = userId;
                              obj = {
                                userId: closure_0,
                                effectId: userId,
                                selected: userId === closure_4,
                                showNewDot: dotEffectIds.has(userId),
                                onClick() {
                                  first1(effectId);
                                  if (dotEffectIds.has(effectId)) {
                                    dismissEffectDot(effectId);
                                  }
                                },
                              };
                              return closure_7(closure_1_10, obj, userId);
                            }
                          }
                          cResult[30] = tmp35;
                          cResult[31] = tmp17;
                          cResult[32] = tmp41;
                          tmp39 = tmp41;
                        }
                        const obj8 = { style: tmp22, children: tmp31 };
                        const tmp38 = first1(closure_5, obj8);
                        class F {
                          constructor(arg0) {
                            closure_0 = userId;
                            obj = {
                              userId: closure_0,
                              effectId: userId,
                              selected: userId === closure_4,
                              showNewDot: dotEffectIds.has(userId),
                              onClick() {
                                first1(effectId);
                                if (dotEffectIds.has(effectId)) {
                                  dismissEffectDot(effectId);
                                }
                              },
                            };
                            return closure_7(closure_1_10, obj, userId);
                          }
                        }
                        cResult[27] = tmp31;
                        cResult[28] = tmp38;
                        tmp35 = tmp38;
                      }
                      const obj9 = { style: tmp23, children: tmp28 };
                      const tmp34 = first1(closure_5, obj9);
                      class F {
                        constructor(arg0) {
                          closure_0 = userId;
                          obj = {
                            userId: closure_0,
                            effectId: userId,
                            selected: userId === closure_4,
                            showNewDot: dotEffectIds.has(userId),
                            onClick() {
                              first1(effectId);
                              if (dotEffectIds.has(effectId)) {
                                dismissEffectDot(effectId);
                              }
                            },
                          };
                          return closure_7(closure_1_10, obj, userId);
                        }
                      }
                      cResult[24] = tmp28;
                      cResult[25] = tmp34;
                      tmp31 = tmp34;
                    }
                    const obj10 = { direction: "horizontal", spacing: 8, style: tmp24, children: tmp25 };
                    const tmp30 = first1(userId(dotEffectIds[17]).Stack, obj10);
                    cResult[20] = tmp4.gridContainer;
                    class F {
                      constructor(arg0) {
                        closure_0 = userId;
                        obj = {
                          userId: closure_0,
                          effectId: userId,
                          selected: userId === closure_4,
                          showNewDot: dotEffectIds.has(userId),
                          onClick() {
                            first1(effectId);
                            if (dotEffectIds.has(effectId)) {
                              dismissEffectDot(effectId);
                            }
                          },
                        };
                        return closure_7(closure_1_10, obj, userId);
                      }
                    }
                    cResult[21] = tmp25;
                    cResult[22] = tmp30;
                    tmp28 = tmp30;
                  }
                }
              }
            }
            if (cResult[15] === dismissEffectDot) {
              if (cResult[16] === dotEffectIds) {
                if (cResult[17] === first) {
                  let tmp26;
                  if (cResult[18] === userId) {
                    tmp26 = cResult[19];
                  }
                  const mapped = visibleEffectOrder.map(tmp26);
                  cResult[9] = dismissEffectDot;
                  cResult[10] = dotEffectIds;
                  cResult[11] = visibleEffectOrder;
                  class F {
                    constructor(arg0) {
                      closure_0 = userId;
                      obj = {
                        userId: closure_0,
                        effectId: userId,
                        selected: userId === closure_4,
                        showNewDot: dotEffectIds.has(userId),
                        onClick() {
                          first1(effectId);
                          if (dotEffectIds.has(effectId)) {
                            dismissEffectDot(effectId);
                          }
                        },
                      };
                      return closure_7(closure_1_10, obj, userId);
                    }
                  }
                  cResult[13] = userId;
                  cResult[14] = mapped;
                  tmp25 = mapped;
                }
              }
            }
            class F {
              constructor(arg0) {
                closure_0 = userId;
                obj = {
                  userId: closure_0,
                  effectId: userId,
                  selected: userId === closure_4,
                  showNewDot: dotEffectIds.has(userId),
                  onClick() {
                    first1(effectId);
                    if (dotEffectIds.has(effectId)) {
                      dismissEffectDot(effectId);
                    }
                  },
                };
                return closure_7(closure_1_10, obj, userId);
              }
            }
            cResult[15] = dismissEffectDot;
            cResult[16] = dotEffectIds;
            cResult[17] = first;
            cResult[18] = userId;
            cResult[19] = F;
            tmp26 = F;
          }
        }
      }
      class T {
        constructor() {
          const obj = HapticUtils;
          const result = obj.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_MEDIUM);
          if (closure_6) {
            onSelectEffect(first);
          }
          const obj2 = ActionSheetActionCreatorsDefault;
          obj2.hideActionSheet();
        }
      }
      cResult[1] = first !== selectedEffectId;
      cResult[2] = first;
      cResult[3] = onSelectEffect;
      cResult[4] = T;
      tmp10 = T;
    }
  : (userId) => {
      let Button;
      let Stack;
      let _undefined;
      let c2;
      let c3;
      let closure_5;
      let first;
      let intl;
      let intl2;
      let obj5;
      let obj6;
      let obj7;
      let obj8;
      let obj9;
      let onSelectEffect;
      let selectedEffectId;
      let tmp12;
      userId = userId.userId;
      ({ selectedEffectId, onSelectEffect } = userId);
      dependencyMap = undefined;
      _slicedToArray = undefined;
      first = undefined;
      closure_5 = undefined;
      const tmp = closure_9();
      let obj = userId(7852);
      const bottomSheetRef = obj.useBottomSheetRef().bottomSheetRef;
      let obj2 = userId(15173);
      const visibleEffectOrder = obj2.useVisibleEffectOrder();
      const obj3 = userId(15174);
      const displayNameStylesNewEffects = obj3.useDisplayNameStylesNewEffects(visibleEffectOrder);
      ({ dotEffectIds: c2, dismissEffectDot: c3 } = displayNameStylesNewEffects);
      [first, closure_5] = first.useState(selectedEffectId);
      let closure_6 = tmp7;
      let closure_7 = first.useCallback((arg0) => {
        closure_5(arg0);
      }, []);
      const items = [first !== selectedEffectId, first, onSelectEffect];
      let tmp9 = null;
      if (null != userId) {
        const obj4 = { ref: bottomSheetRef, header: closure_7(tmp12, obj5), children: closure_7(closure_5, obj7) };
        BottomSheet = tmp2(6652).BottomSheet;
        obj5 = { title: intl.string(onSelectEffect(2911).RVtMxT), trailing: closure_7(Button, obj6) };
        tmp12 = onSelectEffect(15178);
        intl = tmp2(1126).intl;
        obj6 = { text: intl2.string(userId(1126).t.XqMe3N), onPress: tmp8, variant: "primary", size: "sm" };
        Button = tmp2(5601).Button;
        intl2 = tmp2(1126).intl;
        obj7 = { style: tmp.container, children: closure_7(closure_5, obj8) };
        obj8 = { style: tmp.contentContainer, children: closure_7(Stack, obj9) };
        obj9 = {
          direction: "horizontal",
          spacing: 8,
          style: tmp.gridContainer,
          children: visibleEffectOrder.map((effectId) => {
            userId = effectId;
            const obj = {
              userId,
              effectId,
              selected: effectId === first,
              showNewDot: _undefined.has(effectId),
              onClick() {
                closure_7(effectId);
                if (set.has(effectId)) {
                  c3(effectId);
                }
              },
            };
            return closure_7(closure_1_10, obj, effectId);
          }),
        };
        Stack = tmp2(5600).Stack;
        tmp9 = closure_7(BottomSheet, obj4);
      }
      return tmp9;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let effectId;
      let items;
      let onClick;
      let selected;
      let showNewDot;
      let tmp10;
      let tmp5;
      const obj = react2;
      const cResult = obj.c(25);
      ({ userId, effectId, selected, showNewDot, onClick } = arg0);
      const tmp4 = closure_9();
      if (cResult[0] !== effectId) {
        const intl = intl3.intl;
        const string = intl.string;
        let OpWJ3f = useDisplayNameStylesEffectConfigs.DISPLAY_NAME_STYLES_EFFECT_NAMES[effectId];
        if (OpWJ3f == null) {
          OpWJ3f = _modDef2911.OpWJ3f;
        }
        const stringResult = string(OpWJ3f);
        cResult[0] = effectId;
        cResult[1] = stringResult;
        tmp5 = stringResult;
      } else {
        tmp5 = cResult[1];
      }
      const tmpResult = useDisplayNameStylesEffectConfigs;
      const displayNameStylesEffectConfig = tmpResult.useDisplayNameStylesEffectConfig(effectId);
      if (cResult[2] !== selected) {
        const obj2 = { selected };
        cResult[2] = selected;
        cResult[3] = obj2;
        tmp10 = obj2;
      } else {
        tmp10 = cResult[3];
      }
      if (selected) {
        selected = tmp4.effectCardSelected;
      }
      if (cResult[4] === tmp4.effectCard) {
        let tmp11;
        if (cResult[5] === selected) {
          tmp11 = cResult[6];
        }
        if (cResult[7] === displayNameStylesEffectConfig.previewStyles) {
          if (cResult[8] === tmp5) {
            if (cResult[9] === tmp4.effectName) {
              let tmp12;
              if (cResult[10] === userId) {
                tmp12 = cResult[11];
              }
              if (cResult[12] === showNewDot) {
                let tmp17;
                if (cResult[13] === tmp4.tileNewDot) {
                  tmp17 = cResult[14];
                }
                if (cResult[15] === tmp11) {
                  if (cResult[16] === tmp12) {
                    let tmp21;
                    if (cResult[17] === tmp17) {
                      tmp21 = cResult[18];
                    }
                    if (cResult[19] === effectId) {
                      if (cResult[20] === tmp5) {
                        if (cResult[21] === onClick) {
                          if (cResult[22] === tmp10) {
                            let tmp25;
                            if (cResult[23] === tmp21) {
                              tmp25 = cResult[24];
                            }
                            return tmp25;
                          }
                        }
                      }
                    }
                    const obj3 = {
                      onPress: onClick,
                      accessibilityRole: "button",
                      accessibilityLabel: tmp5,
                      accessibilityState: tmp10,
                      children: tmp21,
                    };
                    const tmp28 = metroImportDefault(metroRequire, obj3, effectId);
                    cResult[19] = effectId;
                    cResult[20] = tmp5;
                    cResult[21] = onClick;
                    cResult[22] = tmp10;
                    cResult[23] = tmp21;
                    cResult[24] = tmp28;
                    tmp25 = tmp28;
                  }
                }
                const obj4 = { style: tmp11, children: items };
                items = [tmp12, tmp17];
                const tmp24 = metroImportAll(hasOwnProperty, obj4);
                cResult[15] = tmp11;
                cResult[16] = tmp12;
                cResult[17] = tmp17;
                cResult[18] = tmp24;
                tmp21 = tmp24;
              }
              let tmp18 = showNewDot;
              if (tmp18) {
                const obj5 = {
                  style: tmp4.tileNewDot,
                  accessibilityElementsHidden: true,
                  importantForAccessibility: "no-hide-descendants",
                };
                tmp18 = metroImportDefault(hasOwnProperty, obj5);
              }
              cResult[12] = showNewDot;
              cResult[13] = tmp4.tileNewDot;
              cResult[14] = tmp18;
              tmp17 = tmp18;
            }
          }
        }
        const obj6 = {
          userId,
          userName: tmp5,
          effectDisplayType: types.EffectDisplayType.STATIC,
          pendingDisplayNameStyles: displayNameStylesEffectConfig.previewStyles,
          style: tmp4.effectName,
          variant: "text-md/semibold",
        };
        const tmp15 = UsernameWithEffectsDefault;
        const tmp16 = metroImportDefault(tmp15, obj6);
        cResult[7] = displayNameStylesEffectConfig.previewStyles;
        cResult[8] = tmp5;
        cResult[9] = tmp4.effectName;
        cResult[10] = userId;
        cResult[11] = tmp16;
        tmp12 = tmp16;
      }
      const items1 = [tmp4.effectCard, selected];
      cResult[4] = tmp4.effectCard;
      cResult[5] = selected;
      cResult[6] = items1;
      tmp11 = items1;
    }
  : (arg0) => {
      let effectId;
      let items1;
      let obj2;
      let onClick;
      let selected;
      let showNewDot;
      ({ effectId, selected, showNewDot } = arg0);
      ({ userId, onClick } = arg0);
      const tmp = closure_9();
      const intl = intl3.intl;
      const string = intl.string;
      let OpWJ3f = useDisplayNameStylesEffectConfigs.DISPLAY_NAME_STYLES_EFFECT_NAMES[effectId];
      if (OpWJ3f == null) {
        OpWJ3f = _modDef2911.OpWJ3f;
      }
      const stringResult = string(OpWJ3f);
      const items = [tmp.effectCard];
      const obj = {
        onPress: onClick,
        accessibilityRole: "button",
        accessibilityLabel: stringResult,
        accessibilityState: { selected },
        children: metroImportAll(hasOwnProperty, obj2),
      };
      const tmp2Result = useDisplayNameStylesEffectConfigs;
      const displayNameStylesEffectConfig = tmp2Result.useDisplayNameStylesEffectConfig(effectId);
      if (selected) {
        selected = tmp.effectCardSelected;
      }
      obj2 = { style: items, children: items1 };
      items[1] = selected;
      const obj3 = {
        userId,
        userName: stringResult,
        effectDisplayType: types.EffectDisplayType.STATIC,
        pendingDisplayNameStyles: displayNameStylesEffectConfig.previewStyles,
        style: tmp.effectName,
        variant: "text-md/semibold",
      };
      const tmp11 = UsernameWithEffectsDefault;
      items1 = [metroImportDefault(tmp11, obj3)];
      if (showNewDot) {
        const obj4 = {
          style: tmp.tileNewDot,
          accessibilityElementsHidden: true,
          importantForAccessibility: "no-hide-descendants",
        };
        showNewDot = metroImportDefault(hasOwnProperty, obj4);
      }
      items1[1] = showNewDot;
      return metroImportDefault(metroRequire, obj, effectId);
    };
size = size_mod;
let result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesEffectPickerSheet.tsx");

export default tmp5;
