// discord_app/modules/display_name_styles/native/DisplayNameStylesEffectPickerSheet.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef2883 from "../intl/DisplayNameStyles.messages.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import HapticUtils from "../../haptics/HapticUtils.native.tsx";
import UsernameWithEffectsDefault from "UsernameWithEffects.tsx";
import types from "../types.tsx";
import useDisplayNameStylesEffectConfigs from "../hooks/useDisplayNameStylesEffectConfigs.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, Pressable: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4890);
let obj2 = {
  container: { flex: 1 },
  contentContainer: { padding: nativeDefault.space.PX_8, paddingLeft: nativeDefault.space.PX_16, alignItems: "center" },
  gridContainer: { flexWrap: "wrap", width: 350 },
  effectCard: null,
  effectCardSelected: null,
  effectName: null,
  tileNewDot: null,
};
let size = {
  width: 109,
  height: 80,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  borderRadius: nativeDefault.radii.sm,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  justifyContent: "center",
  alignItems: "center",
};
obj2.effectCard = size;
let obj3 = { padding: nativeDefault.space.PX_8, paddingLeft: nativeDefault.space.PX_16, alignItems: "center" };
obj2.effectCardSelected = { borderColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND };
obj2.effectName = { textAlign: "center" };
const size1 = {
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
obj2.tileNewDot = size1;
let closure_9 = createStyles.createStyles(obj2);
fn(558);
let obj4 = { borderColor: nativeDefault.colors.CONTROL_BRAND_FOREGROUND };
const ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(25);
      ({ userId, effectId, selected, showNewDot, onClick } = arg0);
      const tmp4 = closure_9();
      if (cResult[0] !== effectId) {
        const intl = util.intl;
        let OpWJ3f = useDisplayNameStylesEffectConfigs.DISPLAY_NAME_STYLES_EFFECT_NAMES[effectId];
        if (OpWJ3f == null) {
          OpWJ3f = _modDef2883.OpWJ3f;
        }
        const stringResult = intl.string(OpWJ3f);
        cResult[0] = effectId;
        cResult[1] = stringResult;
        let tmp5 = stringResult;
      } else {
        tmp5 = cResult[1];
      }
      const displayNameStylesEffectConfig =
        useDisplayNameStylesEffectConfigs.useDisplayNameStylesEffectConfig(effectId);
      if (cResult[2] !== selected) {
        const obj2 = { selected };
        cResult[2] = selected;
        cResult[3] = obj2;
        let tmp10 = obj2;
      } else {
        tmp10 = cResult[3];
      }
      if (selected) {
        selected = tmp4.effectCardSelected;
      }
      if (cResult[4] === tmp4.effectCard) {
        if (cResult[5] === selected) {
          let tmp11 = cResult[6];
        }
        if (cResult[7] === displayNameStylesEffectConfig.previewStyles) {
          if (cResult[8] === tmp5) {
            if (cResult[9] === tmp4.effectName) {
              if (cResult[10] === userId) {
                let tmp12 = cResult[11];
              }
              if (cResult[12] === showNewDot) {
                if (cResult[13] === tmp4.tileNewDot) {
                  let tmp17 = cResult[14];
                }
                if (cResult[15] === tmp11) {
                  if (cResult[16] === tmp12) {
                    if (cResult[17] === tmp17) {
                      let tmp21 = cResult[18];
                    }
                    if (cResult[19] === effectId) {
                      if (cResult[20] === tmp5) {
                        if (cResult[21] === onClick) {
                          if (cResult[22] === tmp10) {
                            if (cResult[23] === tmp21) {
                              let tmp25 = cResult[24];
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
                    const tmp28 = React5(timestampProducer, obj3, effectId);
                    cResult[19] = effectId;
                    cResult[20] = tmp5;
                    cResult[21] = onClick;
                    cResult[22] = tmp10;
                    cResult[23] = tmp21;
                    cResult[24] = tmp28;
                    tmp25 = tmp28;
                  }
                }
                const obj4 = { style: tmp11, children: null };
                const items = [tmp12, tmp17];
                obj4.children = items;
                const tmp24 = closure_1_8(hasOwnProperty, obj4);
                cResult[15] = tmp11;
                cResult[16] = tmp12;
                cResult[17] = tmp17;
                cResult[18] = tmp24;
                tmp21 = tmp24;
              }
              let tmp18 = showNewDot;
              if (showNewDot) {
                const obj5 = {
                  style: tmp4.tileNewDot,
                  accessibilityElementsHidden: true,
                  importantForAccessibility: "no-hide-descendants",
                };
                tmp18 = React5(hasOwnProperty, obj5);
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
        const tmp16 = React5(UsernameWithEffectsDefault, obj6);
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
      const tmpResult = useDisplayNameStylesEffectConfigs;
    }
  : (arg0) => {
      ({ effectId, selected, showNewDot } = arg0);
      ({ userId, onClick } = arg0);
      const tmp = closure_9();
      const intl = util.intl;
      let OpWJ3f = useDisplayNameStylesEffectConfigs.DISPLAY_NAME_STYLES_EFFECT_NAMES[effectId];
      if (OpWJ3f == null) {
        OpWJ3f = _modDef2883.OpWJ3f;
      }
      const stringResult = intl.string(OpWJ3f);
      const obj = {
        onPress: onClick,
        accessibilityRole: "button",
        accessibilityLabel: stringResult,
        accessibilityState: { selected },
        children: null,
      };
      const items = [tmp.effectCard];
      const displayNameStylesEffectConfig =
        useDisplayNameStylesEffectConfigs.useDisplayNameStylesEffectConfig(effectId);
      if (selected) {
        selected = tmp.effectCardSelected;
      }
      const obj2 = { style: items, children: null };
      items[1] = selected;
      const obj3 = {
        userId,
        userName: stringResult,
        effectDisplayType: null,
        pendingDisplayNameStyles: null,
        style: null,
        variant: "text-md/semibold",
      };
      const tmp2Result = useDisplayNameStylesEffectConfigs;
      obj3.effectDisplayType = types.EffectDisplayType.STATIC;
      obj3.pendingDisplayNameStyles = displayNameStylesEffectConfig.previewStyles;
      obj3.style = tmp.effectName;
      const items1 = [React5(UsernameWithEffectsDefault, obj3)];
      if (showNewDot) {
        const obj4 = {
          style: tmp.tileNewDot,
          accessibilityElementsHidden: true,
          importantForAccessibility: "no-hide-descendants",
        };
        showNewDot = React5(hasOwnProperty, obj4);
      }
      items1[1] = showNewDot;
      obj2.children = items1;
      obj.children = closure_1_8(hasOwnProperty, obj2);
      return React5(timestampProducer, obj, effectId);
    };
size = fn(2);
let result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesEffectPickerSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (userId) => {
      const cResult = userId(dotEffectIds[7]).c(33);
      userId = userId.userId;
      ({ selectedEffectId, onSelectEffect } = userId);
      const tmp4 = closure_9();
      let obj = userId(dotEffectIds[7]);
      const bottomSheetRef = userId(dotEffectIds[8]).useBottomSheetRef().bottomSheetRef;
      let obj2 = userId(dotEffectIds[8]);
      const visibleEffectOrder = userId(dotEffectIds[9]).useVisibleEffectOrder();
      const obj3 = userId(dotEffectIds[9]);
      const displayNameStylesNewEffects = userId(dotEffectIds[10]).useDisplayNameStylesNewEffects(visibleEffectOrder);
      dotEffectIds = displayNameStylesNewEffects.dotEffectIds;
      const dismissEffectDot = displayNameStylesNewEffects.dismissEffectDot;
      const tmp6 = dismissEffectDot(first.useState(selectedEffectId), 2);
      first = tmp6[0];
      closure_5 = tmp6[1];
      closure_6 = tmp8;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function l(arg0) {
          closure_5(arg0);
        };
        cResult[0] = fn;
        let first1 = fn;
      } else {
        first1 = cResult[0];
      }
      if ((cResult[1] === first) !== selectedEffectId) {
        if (cResult[2] === first) {
          if (cResult[3] === onSelectEffect) {
            let tmp10 = cResult[4];
          }
          if (null == userId) {
            return null;
          } else {
            const _Symbol2 = Symbol;
            if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = tmp(tmp2[13]).intl;
              const stringResult = intl.string(onSelectEffect(tmp2[14]).RVtMxT);
              cResult[5] = stringResult;
              let tmp12 = stringResult;
            } else {
              tmp12 = cResult[5];
            }
            const _Symbol = Symbol;
            if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
              const intl2 = tmp(tmp2[13]).intl;
              const stringResult1 = intl2.string(tmp(tmp2[13]).t.XqMe3N);
              cResult[6] = stringResult1;
              let tmp15 = stringResult1;
            } else {
              tmp15 = cResult[6];
            }
            if (cResult[7] !== tmp10) {
              const obj5 = { title: tmp12, trailing: null };
              onSelectEffect(tmp2[15]);
              const obj6 = { text: tmp15, onPress: tmp10, variant: "primary", size: "sm" };
              obj5.trailing = first1(tmp(tmp2[16]).Button, obj6);
              class F {
                constructor(arg0) {
                  closure_0 = userId;
                  obj = {
                    userId: closure_0,
                    effectId: userId,
                    selected: userId === closure_4,
                    showNewDot: dotEffectIds.has(userId),
                    onClick() {
                      first1(closure_0);
                      if (dotEffectIds.has(closure_0)) {
                        dismissEffectDot(closure_0);
                      }
                    },
                  };
                  return closure_7(closure_1_10, obj, userId);
                }
              }
              cResult[7] = tmp10;
              cResult[8] = tmp21;
              let tmp17 = tmp21;
            } else {
              tmp17 = cResult[8];
            }
            if (cResult[9] === dismissEffectDot) {
              if (cResult[10] === dotEffectIds) {
                if (cResult[11] === visibleEffectOrder) {
                  if (cResult[12] === first) {
                    if (cResult[13] === userId) {
                      if (cResult[20] === tmp4.gridContainer) {
                        if (cResult[21] === tmp25) {
                          let tmp29 = cResult[22];
                        }
                        if (cResult[23] === tmp4.contentContainer) {
                          if (cResult[24] === tmp29) {
                            let tmp32 = cResult[25];
                          }
                          if (cResult[26] === tmp4.container) {
                            if (cResult[27] === tmp32) {
                              let tmp36 = cResult[28];
                            }
                            if (cResult[29] === bottomSheetRef) {
                              if (cResult[30] === tmp36) {
                                if (cResult[31] === tmp17) {
                                  let tmp40 = cResult[32];
                                }
                                return tmp40;
                              }
                            }
                            const obj7 = { ref: bottomSheetRef, header: tmp17, children: tmp36 };
                            const tmp42 = first1(tmp(tmp2[18]).BottomSheet, obj7);
                            class F {
                              constructor(arg0) {
                                closure_0 = userId;
                                obj = {
                                  userId: closure_0,
                                  effectId: userId,
                                  selected: userId === closure_4,
                                  showNewDot: dotEffectIds.has(userId),
                                  onClick() {
                                    first1(closure_0);
                                    if (dotEffectIds.has(closure_0)) {
                                      dismissEffectDot(closure_0);
                                    }
                                  },
                                };
                                return closure_7(closure_1_10, obj, userId);
                              }
                            }
                            cResult[30] = tmp36;
                            cResult[31] = tmp17;
                            cResult[32] = tmp42;
                            tmp40 = tmp42;
                          }
                          const obj8 = { style: tmp22, children: tmp32 };
                          const tmp39 = first1(closure_5, obj8);
                          class F {
                            constructor(arg0) {
                              closure_0 = userId;
                              obj = {
                                userId: closure_0,
                                effectId: userId,
                                selected: userId === closure_4,
                                showNewDot: dotEffectIds.has(userId),
                                onClick() {
                                  first1(closure_0);
                                  if (dotEffectIds.has(closure_0)) {
                                    dismissEffectDot(closure_0);
                                  }
                                },
                              };
                              return closure_7(closure_1_10, obj, userId);
                            }
                          }
                          cResult[27] = tmp32;
                          cResult[28] = tmp39;
                          tmp36 = tmp39;
                        }
                        const obj9 = { style: tmp23, children: tmp29 };
                        const tmp35 = first1(closure_5, obj9);
                        class F {
                          constructor(arg0) {
                            closure_0 = userId;
                            obj = {
                              userId: closure_0,
                              effectId: userId,
                              selected: userId === closure_4,
                              showNewDot: dotEffectIds.has(userId),
                              onClick() {
                                first1(closure_0);
                                if (dotEffectIds.has(closure_0)) {
                                  dismissEffectDot(closure_0);
                                }
                              },
                            };
                            return closure_7(closure_1_10, obj, userId);
                          }
                        }
                        cResult[24] = tmp29;
                        cResult[25] = tmp35;
                        tmp32 = tmp35;
                      }
                      const obj10 = { direction: "horizontal", spacing: 8, style: tmp24, children: cResult[14] };
                      const tmp31 = first1(tmp(tmp2[17]).Stack, obj10);
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
                              first1(closure_0);
                              if (dotEffectIds.has(closure_0)) {
                                dismissEffectDot(closure_0);
                              }
                            },
                          };
                          return closure_7(closure_1_10, obj, userId);
                        }
                      }
                      cResult[21] = cResult[14];
                      cResult[22] = tmp31;
                      tmp29 = tmp31;
                    }
                  }
                }
              }
            }
            if (cResult[15] === dismissEffectDot) {
              if (cResult[16] === dotEffectIds) {
                if (cResult[17] === first) {
                  if (cResult[18] === userId) {
                    let tmp26 = cResult[19];
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
                          first1(closure_0);
                          if (dotEffectIds.has(closure_0)) {
                            dismissEffectDot(closure_0);
                          }
                        },
                      };
                      return closure_7(closure_1_10, obj, userId);
                    }
                  }
                  cResult[13] = userId;
                  cResult[14] = mapped;
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
                    first1(closure_0);
                    if (dotEffectIds.has(closure_0)) {
                      dismissEffectDot(closure_0);
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
          tmp = closure_2;
          obj = closure_0(closure_2[11]);
          result = obj.triggerHapticFeedback(closure_0(closure_2[11]).HapticFeedbackTypes.IMPACT_MEDIUM);
          if (closure_6) {
            tmp3 = onSelectEffect;
            tmp4 = closure_4;
            tmp5 = onSelectEffect(closure_4);
          }
          obj2 = closure_1(tmp[12]);
          hideActionSheetResult = obj2.hideActionSheet();
          return;
        }
      }
      cResult[1] = first !== selectedEffectId;
      cResult[2] = first;
      cResult[3] = onSelectEffect;
      cResult[4] = T;
      tmp10 = T;
    }
  : (userId) => {
      userId = userId.userId;
      ({ selectedEffectId, onSelectEffect } = userId);
      dependencyMap = undefined;
      _slicedToArray = undefined;
      first = undefined;
      closure_5 = undefined;
      const tmp = closure_9();
      let obj = userId(7841);
      const visibleEffectOrder = userId(15154).useVisibleEffectOrder();
      let obj2 = userId(15154);
      const displayNameStylesNewEffects = userId(15155).useDisplayNameStylesNewEffects(visibleEffectOrder);
      ({ dotEffectIds: c2, dismissEffectDot: c3 } = displayNameStylesNewEffects);
      [first, closure_5] = first.useState(selectedEffectId);
      closure_6 = tmp7;
      closure_7 = first.useCallback((arg0) => {
        closure_5(arg0);
      }, []);
      const items = [first !== selectedEffectId, first, onSelectEffect];
      let tmp9 = null;
      if (null != userId) {
        const obj4 = { ref: obj.useBottomSheetRef().bottomSheetRef, header: null, children: null };
        const obj5 = { title: null, trailing: null };
        const intl = tmp2(1126).intl;
        obj5.title = intl.string(onSelectEffect(2883).RVtMxT);
        const obj6 = { text: null, onPress: null, variant: "primary", size: "sm" };
        const intl2 = tmp2(1126).intl;
        obj6.text = intl2.string(tmp2(1126).t.XqMe3N);
        obj6.onPress = tmp8;
        obj5.trailing = closure_7(tmp2(5594).Button, obj6);
        obj4.header = closure_7(onSelectEffect(15159), obj5);
        const obj7 = { style: tmp.container, children: null };
        const obj8 = { style: tmp.contentContainer, children: null };
        const obj9 = {
          direction: "horizontal",
          spacing: 8,
          style: tmp.gridContainer,
          children: visibleEffectOrder.map((effectId) => {
            userId = effectId;
            return closure_7(
              closure_1_10,
              {
                userId,
                effectId,
                selected: effectId === first,
                showNewDot: _undefined.has(effectId),
                onClick() {
                  closure_7(closure_0);
                  if (set.has(closure_0)) {
                    c3(closure_0);
                  }
                },
              },
              effectId,
            );
          }),
        };
        obj8.children = closure_7(tmp2(5593).Stack, obj9);
        obj7.children = closure_7(closure_5, obj8);
        obj4.children = closure_7(closure_5, obj7);
        tmp9 = closure_7(tmp2(6645).BottomSheet, obj4);
        const tmp12 = onSelectEffect(15159);
      }
      return tmp9;
    };
