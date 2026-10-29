// === Module 13494: TraitPicker ===

// Module 13494 (TraitPicker)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1125 */;
import _modDef3090 from "module_3090" /* 3090 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5086 */;
import timing from "timing" /* 5243 */;
import Text_Text from "Text/Text" /* 5271 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6422 */;
import CheckpointTextDefault from "CheckpointText" /* 13436 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5006 */;

require = fn;
let View = fn(17).View;
const rarityOrder = fn(6054).CHECKPOINT_RARITY_ORDER_MOBILE;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let c10 = 600;
const PX_12 = nativeDefault.space.PX_12;
const createStyles = fn(5005);
let obj2 = { container: { gap: fn(13495).TRAIT_OPTION_SPACING }, earnedRow: null, details: null };
let obj3 = { gap: fn(13495).TRAIT_OPTION_SPACING };
obj2.earnedRow = { paddingHorizontal: fn(13495).CONTENT_INSET };
let obj4 = { paddingHorizontal: fn(13495).CONTENT_INSET };
obj2.details = { paddingHorizontal: fn(13495).CONTENT_INSET };
let closure_12 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function EarnedCountHeader(arg0) {
  const cResult = c.c(14);
  ({ customizationOption, earnedCount, totalCount } = arg0);
  const tmp4 = closure_12();
  if (cResult[0] !== customizationOption) {
    const customizationOptionName = CheckpointCustomizationUtils.getCustomizationOptionName(customizationOption);
    cResult[0] = customizationOption;
    cResult[1] = customizationOptionName;
    let tmp5 = customizationOptionName;
    const tmpResult = CheckpointCustomizationUtils;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === earnedCount) {
    if (cResult[3] === totalCount) {
      const _HermesInternal = HermesInternal;
      const combined = "" + tmp5 + ", " + cResult[4];
      if (cResult[6] === earnedCount) {
        if (cResult[7] === totalCount) {
          if (cResult[10] === combined) {
            if (cResult[11] === tmp4.earnedRow) {
              if (cResult[12] === tmp13) {
                let tmp18 = cResult[13];
              }
              return tmp18;
            }
          }
          const obj2 = { variant: "experimental/body-sm/medium", color: "text-default", style: tmp12, accessibilityRole: "header", accessibilityLabel: combined, children: cResult[8] };
          const tmp20 = closure_1_8(Text_Text.Text, obj2);
          cResult[10] = combined;
          cResult[11] = tmp4.earnedRow;
          cResult[12] = cResult[8];
          cResult[13] = tmp20;
          tmp18 = tmp20;
        }
      }
      const _Symbol = Symbol;
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class S {
          constructor(arg0, arg1) {
            obj = { variant: "experimental/mono-md/bold", children: arg0 };
            return closure_1_8(closure_1_1(closure_1_2[14]), obj, arg1);
          }
        }
        cResult[9] = S;
      } else {
        class S {
          constructor(arg0, arg1) {
            obj = { variant: "experimental/mono-md/bold", children: arg0 };
            return closure_1_8(closure_1_1(closure_1_2[14]), obj, arg1);
          }
        }
      }
      const intl2 = util.intl;
      const obj3 = { earnedCount, totalCount, countHook: S };
      const formatResult = intl2.format(_modDef3090.Vfq58K, obj3);
      cResult[6] = earnedCount;
      cResult[7] = totalCount;
      cResult[8] = formatResult;
    }
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor(arg0, arg1) {
        obj = { variant: "experimental/mono-md/bold", children: arg0 };
        return closure_1_8(closure_1_1(closure_1_2[14]), obj, arg1);
      }
    }
    cResult[5] = tmp8;
  } else {
    class S {
      constructor(arg0, arg1) {
        obj = { variant: "experimental/mono-md/bold", children: arg0 };
        return closure_1_8(closure_1_1(closure_1_2[14]), obj, arg1);
      }
    }
  }
  const intl = util.intl;
  cResult[2] = earnedCount;
  cResult[3] = totalCount;
  cResult[4] = intl.formatToPlainString(_modDef3090.Vfq58K, { earnedCount, totalCount, countHook: tmp8 });
  const formatToPlainStringResult = intl.formatToPlainString(_modDef3090.Vfq58K, { earnedCount, totalCount, countHook: tmp8 });
}) : (function EarnedCountHeader(customizationOption) {
  ({ earnedCount, totalCount } = customizationOption);
  const tmp = closure_12();
  const customizationOptionName = CheckpointCustomizationUtils.getCustomizationOptionName(customizationOption.customizationOption);
  const intl = util.intl;
  const combined = "" + customizationOptionName + ", " + intl.formatToPlainString(_modDef3090.Vfq58K, {
    earnedCount,
    totalCount,
    countHook(arg0) {
      return arg0;
    }
  });
  const obj3 = { variant: "experimental/body-sm/medium", color: "text-default", style: tmp.earnedRow, accessibilityRole: "header", accessibilityLabel: combined, children: null };
  const intl2 = util.intl;
  obj3.children = intl2.format(_modDef3090.Vfq58K, {
    earnedCount,
    totalCount,
    countHook(children, arg1) {
      return closure_1_8(CheckpointTextDefault, { variant: "experimental/mono-md/bold", children }, arg1);
    }
  });
  return closure_1_8(Text_Text.Text, obj3);
});
const __initData = { code: "function TraitPickerTsx1(){const{INTRO_DETAILS_DURATION_MS,Easing,withTiming,isDetailsVisible,INTRO_DETAILS_OFFSET_Y}=this.__closure;const timing={duration:INTRO_DETAILS_DURATION_MS,easing:Easing.out(Easing.cubic)};return{opacity:withTiming(isDetailsVisible?1:0,timing),transform:[{translateY:withTiming(isDetailsVisible?0:INTRO_DETAILS_OFFSET_Y,timing)}]};}" };
const __initData2 = { code: "function TraitPickerTsx2(){const{INTRO_DETAILS_DURATION_MS,Easing,withTiming,isDetailsVisible,INTRO_DETAILS_OFFSET_Y}=this.__closure;const timing={duration:INTRO_DETAILS_DURATION_MS,easing:Easing.out(Easing.cubic)};return{opacity:withTiming(isDetailsVisible?1:0,timing),transform:[{translateY:withTiming(isDetailsVisible?0:INTRO_DETAILS_OFFSET_Y,timing)}]};}" };
ReactCompilerGating = fn(558);
let obj5 = { paddingHorizontal: fn(13495).CONTENT_INSET };
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/TraitPicker.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function TraitPicker(arg0) {
  const cResult = customizationOption(stateFromStores[11]).c(48);
  ({ style, customizationOption } = arg0);
  ({ disabled, optionIds, savedOptionId, selectedOptionId } = arg0);
  ({ showEarnedCount, onSelectOption } = arg0);
  const tmp6 = closure_12();
  if (cResult[0] !== customizationOption) {
    const isTraitRarityVisible = customizationOption(tmp2[7]).getIsTraitRarityVisible(customizationOption);
    cResult[0] = customizationOption;
    cResult[1] = isTraitRarityVisible;
    let tmpResult = customizationOption(tmp2[7]);
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [useReducedMotion];
    const fn = function z() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[2] = items;
    cResult[3] = fn;
    let tmp11 = fn;
    let tmp10 = items;
  } else {
    tmp10 = cResult[2];
    tmp11 = cResult[3];
  }
  let obj = customizationOption(stateFromStores[11]);
  stateFromStores = customizationOption(stateFromStores[16]).useStateFromStores(tmp10, tmp11);
  const tmpResult6 = customizationOption(stateFromStores[16]);
  const isScreenReaderEnabled = customizationOption(stateFromStores[17]).useIsScreenReaderEnabled();
  if (cResult[4] === customizationOption) {
    if (cResult[5] === optionIds) {
      if (cResult[6] === savedOptionId) {
        let tmp15 = cResult[7];
      }
      const traitPickerOptions = customizationOption(tmp2[18]).useTraitPickerOptions(tmp15);
      ({ availableTraitOptions, totalCount, earnedCount } = traitPickerOptions);
      closure_5 = tmp18;
      if (cResult[8] === customizationOption) {
        if (cResult[9] === earnedCount) {
          if (cResult[10] === tmp18) {
            if (cResult[11] === stateFromStores) {
              if (cResult[12] === isScreenReaderEnabled) {
                let tmp19 = cResult[13];
              }
              const tmp21 = selectedOptionId(tmp2[19])(tmp19);
              let tmp22 = tmp18;
              if (!tmp18) {
                tmp22 = 0 === tmp21;
              }
              useReducedMotion = tmp22;
              customizationOption(tmp2[20]);
              const fn2 = function $() {
                const obj = { duration, easing: null };
                const Easing = ReanimatedRexport.Easing;
                obj.easing = Easing.out(ReanimatedRexport.Easing.cubic);
                let num = 0;
                if (closure_6) {
                  num = 1;
                }
                const obj3 = { opacity: timing.withTiming(num, obj), transform: null };
                let num2 = 0;
                if (!closure_6) {
                  num2 = PX_12;
                }
                const tmpResult = timing;
                const items = [{ translateY: timing.withTiming(num2, obj) }];
                obj3.transform = items;
                return obj3;
              };
              let obj2 = { INTRO_DETAILS_DURATION_MS, Easing: null, withTiming: null, isDetailsVisible: null, INTRO_DETAILS_OFFSET_Y: null };
              class M {
                constructor() {
                  tmp = customizationOption;
                  num = 0;
                  if (!closure_5) {
                    num = 0;
                    if (tmp !== tmp2) {
                      tmp3 = closure_2;
                      num = 0;
                      if (!closure_2) {
                        tmp4 = closure_3;
                        num = 0;
                        if (!closure_3) {
                          tmp5 = globalThis;
                          _Math = Math;
                          tmp6 = earnedCount;
                          num2 = 1;
                          num = Math.max(earnedCount - 1, 0);
                        }
                      }
                    }
                  }
                  return num;
                }
              }
              obj2.Easing = customizationOption(tmp2[20]).Easing;
              obj2.withTiming = customizationOption(tmp2[21]).withTiming;
              obj2.isDetailsVisible = tmp22;
              obj2.INTRO_DETAILS_OFFSET_Y = PX_12;
              fn2.__closure = obj2;
              fn2.__workletHash = 9456849062820;
              fn2.__initData = __initData;
              const tmp24Result = tmp24(fn2);
              const tmp31 = isScreenReaderEnabled(earnedCount.useState(tmp21), 2);
              const first = tmp31[0];
              let tmp33 = tmp4;
              if (!tmp4) {
                let tmp34 = !tmp18;
                if (!tmp18) {
                  tmp34 = first > 0;
                }
                tmp33 = tmp34;
              }
              if (cResult[14] === availableTraitOptions) {
                if (cResult[15] === onSelectOption) {
                  if (cResult[16] === selectedOptionId) {
                    if (cResult[17] === tmp33) {
                      let tmp35 = cResult[18];
                    }
                    const autoSelectTraitOption = customizationOption(tmp2[22]).useAutoSelectTraitOption(tmp35);
                    let diff = earnedCount;
                    if (!tmp18) {
                      diff = earnedCount - first;
                    }
                    if (cResult[19] === availableTraitOptions) {
                      if (cResult[20] === selectedOptionId) {
                        let tmp38 = cResult[21];
                      }
                      if (cResult[22] === style) {
                        if (cResult[25] === customizationOption) {
                          if (cResult[26] === diff) {
                            if (cResult[27] === tmp5) {
                              if (cResult[28] === totalCount) {
                                let tmp41 = cResult[29];
                              }
                              if (cResult[30] === availableTraitOptions) {
                                if (cResult[31] === customizationOption) {
                                  if (cResult[32] === tmp4) {
                                    if (cResult[33] === tmp9) {
                                      if (cResult[34] === tmp21) {
                                        if (cResult[35] === onSelectOption) {
                                          if (cResult[36] === selectedOptionId) {
                                            let tmp45 = cResult[37];
                                          }
                                          if (cResult[38] === tmp24Result) {
                                            if (cResult[39] === tmp9) {
                                              if (cResult[40] === tmp38) {
                                                if (cResult[41] === tmp6.details) {
                                                  let tmp48 = cResult[42];
                                                }
                                                if (cResult[43] === tmp40) {
                                                  if (cResult[44] === tmp41) {
                                                    if (cResult[45] === tmp45) {
                                                      if (cResult[46] === tmp48) {
                                                        let tmp51 = cResult[47];
                                                      }
                                                      return tmp51;
                                                    }
                                                  }
                                                }
                                                let obj3 = { style: tmp40, children: null };
                                                const items1 = [tmp41, tmp45, tmp48];
                                                obj3.children = items1;
                                                class M {
                                                  constructor() {
                                                    tmp = customizationOption;
                                                    num = 0;
                                                    if (!closure_5) {
                                                      num = 0;
                                                      if (tmp !== tmp2) {
                                                        tmp3 = closure_2;
                                                        num = 0;
                                                        if (!closure_2) {
                                                          tmp4 = closure_3;
                                                          num = 0;
                                                          if (!closure_3) {
                                                            tmp5 = globalThis;
                                                            _Math = Math;
                                                            tmp6 = earnedCount;
                                                            num2 = 1;
                                                            num = Math.max(earnedCount - 1, 0);
                                                          }
                                                        }
                                                      }
                                                    }
                                                    return num;
                                                  }
                                                }
                                                cResult[43] = tmp40;
                                                cResult[44] = tmp41;
                                                cResult[45] = tmp45;
                                                cResult[46] = tmp48;
                                                cResult[47] = tmp54;
                                                tmp51 = tmp54;
                                              }
                                            }
                                          }
                                          if (null != tmp38) {
                                            const obj4 = { style: null, children: null };
                                            const items2 = [tmp6.details, tmp24Result];
                                            obj4.style = items2;
                                            View = selectedOptionId(tmp2[20]).View;
                                            const obj5 = { asset: tmp38, hideDescriptionAndRarity: tmp9 };
                                            obj4.children = closure_8(selectedOptionId(tmp2[23]), obj5);
                                            class M {
                                              constructor() {
                                                tmp = customizationOption;
                                                num = 0;
                                                if (!closure_5) {
                                                  num = 0;
                                                  if (tmp !== tmp2) {
                                                    tmp3 = closure_2;
                                                    num = 0;
                                                    if (!closure_2) {
                                                      tmp4 = closure_3;
                                                      num = 0;
                                                      if (!closure_3) {
                                                        tmp5 = globalThis;
                                                        _Math = Math;
                                                        tmp6 = earnedCount;
                                                        num2 = 1;
                                                        num = Math.max(earnedCount - 1, 0);
                                                      }
                                                    }
                                                  }
                                                }
                                                return num;
                                              }
                                            }
                                          }
                                          cResult[38] = tmp24Result;
                                          cResult[39] = tmp9;
                                          cResult[40] = tmp38;
                                          class M {
                                            constructor() {
                                              tmp = customizationOption;
                                              num = 0;
                                              if (!closure_5) {
                                                num = 0;
                                                if (tmp !== tmp2) {
                                                  tmp3 = closure_2;
                                                  num = 0;
                                                  if (!closure_2) {
                                                    tmp4 = closure_3;
                                                    num = 0;
                                                    if (!closure_3) {
                                                      tmp5 = globalThis;
                                                      _Math = Math;
                                                      tmp6 = earnedCount;
                                                      num2 = 1;
                                                      num = Math.max(earnedCount - 1, 0);
                                                    }
                                                  }
                                                }
                                              }
                                              return num;
                                            }
                                          }
                                          cResult[42] = null != tmp38;
                                          tmp48 = tmp49;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                              const obj6 = { customizationOption, options: availableTraitOptions, selectedOptionId, disabled: tmp4, hideRarity: tmp9, introStartIndex: tmp21, onIntroStep: tmp31[1], onSelectOption: null };
                              class M {
                                constructor() {
                                  tmp = customizationOption;
                                  num = 0;
                                  if (!closure_5) {
                                    num = 0;
                                    if (tmp !== tmp2) {
                                      tmp3 = closure_2;
                                      num = 0;
                                      if (!closure_2) {
                                        tmp4 = closure_3;
                                        num = 0;
                                        if (!closure_3) {
                                          tmp5 = globalThis;
                                          _Math = Math;
                                          tmp6 = earnedCount;
                                          num2 = 1;
                                          num = Math.max(earnedCount - 1, 0);
                                        }
                                      }
                                    }
                                  }
                                  return num;
                                }
                              }
                              const tmp47 = closure_8(selectedOptionId(tmp2[9]), obj6);
                              cResult[30] = availableTraitOptions;
                              cResult[31] = customizationOption;
                              cResult[32] = tmp4;
                              cResult[33] = tmp9;
                              cResult[34] = tmp21;
                              cResult[35] = onSelectOption;
                              cResult[36] = selectedOptionId;
                              cResult[37] = tmp47;
                              tmp45 = tmp47;
                            }
                          }
                        }
                        let tmp42 = tmp5;
                        if (tmp5) {
                          const obj7 = { customizationOption, earnedCount: diff, totalCount };
                          tmp42 = closure_8(closure_13, obj7);
                        }
                        cResult[25] = customizationOption;
                        cResult[26] = diff;
                        cResult[27] = tmp5;
                        class M {
                          constructor() {
                            tmp = customizationOption;
                            num = 0;
                            if (!closure_5) {
                              num = 0;
                              if (tmp !== tmp2) {
                                tmp3 = closure_2;
                                num = 0;
                                if (!closure_2) {
                                  tmp4 = closure_3;
                                  num = 0;
                                  if (!closure_3) {
                                    tmp5 = globalThis;
                                    _Math = Math;
                                    tmp6 = earnedCount;
                                    num2 = 1;
                                    num = Math.max(earnedCount - 1, 0);
                                  }
                                }
                              }
                            }
                            return num;
                          }
                        }
                        cResult[29] = tmp42;
                        tmp41 = tmp42;
                      }
                      const items3 = [tmp6.container, style];
                      cResult[22] = style;
                      cResult[23] = tmp6.container;
                      cResult[24] = items3;
                      class M {
                        constructor() {
                          tmp = customizationOption;
                          num = 0;
                          if (!closure_5) {
                            num = 0;
                            if (tmp !== tmp2) {
                              tmp3 = closure_2;
                              num = 0;
                              if (!closure_2) {
                                tmp4 = closure_3;
                                num = 0;
                                if (!closure_3) {
                                  tmp5 = globalThis;
                                  _Math = Math;
                                  tmp6 = earnedCount;
                                  num2 = 1;
                                  num = Math.max(earnedCount - 1, 0);
                                }
                              }
                            }
                          }
                          return num;
                        }
                      }
                    }
                    let found = availableTraitOptions.find((optionId) => optionId.optionId === selectedOptionId);
                    if (found == null) {
                      found = availableTraitOptions[0];
                    }
                    cResult[19] = availableTraitOptions;
                    class M {
                      constructor() {
                        tmp = customizationOption;
                        num = 0;
                        if (!closure_5) {
                          num = 0;
                          if (tmp !== tmp2) {
                            tmp3 = closure_2;
                            num = 0;
                            if (!closure_2) {
                              tmp4 = closure_3;
                              num = 0;
                              if (!closure_3) {
                                tmp5 = globalThis;
                                _Math = Math;
                                tmp6 = earnedCount;
                                num2 = 1;
                                num = Math.max(earnedCount - 1, 0);
                              }
                            }
                          }
                        }
                        return num;
                      }
                    }
                    cResult[21] = found;
                    tmp38 = found;
                    const tmpResult10 = customizationOption(tmp2[22]);
                  }
                }
              }
              const obj8 = { availableTraitOptions, selectedOptionId, onSelectOption, paused: tmp33 };
              cResult[14] = availableTraitOptions;
              cResult[15] = onSelectOption;
              cResult[16] = selectedOptionId;
              cResult[17] = tmp33;
              cResult[18] = obj8;
              tmp35 = obj8;
            }
          }
        }
      }
      class M {
        constructor() {
          tmp = customizationOption;
          num = 0;
          if (!closure_5) {
            num = 0;
            if (tmp !== tmp2) {
              tmp3 = closure_2;
              num = 0;
              if (!closure_2) {
                tmp4 = closure_3;
                num = 0;
                if (!closure_3) {
                  tmp5 = globalThis;
                  _Math = Math;
                  tmp6 = earnedCount;
                  num2 = 1;
                  num = Math.max(earnedCount - 1, 0);
                }
              }
            }
          }
          return num;
        }
      }
      cResult[8] = customizationOption;
      cResult[9] = earnedCount;
      cResult[10] = null != selectedOptionId;
      cResult[11] = stateFromStores;
      cResult[12] = isScreenReaderEnabled;
      cResult[13] = M;
      tmp19 = M;
      const tmpResult8 = customizationOption(tmp2[18]);
    }
  }
  const obj9 = { customizationOption, optionIds, savedOptionId, rarityOrder };
  cResult[4] = customizationOption;
  cResult[5] = optionIds;
  cResult[6] = savedOptionId;
  cResult[7] = obj9;
  tmp15 = obj9;
  const tmpResult7 = customizationOption(stateFromStores[17]);
}) : (function TraitPicker(customizationOption) {
  customizationOption = customizationOption.customizationOption;
  let flag = customizationOption.disabled;
  if (flag === undefined) {
    flag = false;
  }
  const selectedOptionId = customizationOption.selectedOptionId;
  ({ showEarnedCount, optionIds, savedOptionId } = customizationOption);
  if (showEarnedCount === undefined) {
    showEarnedCount = false;
  }
  const onSelectOption = customizationOption.onSelectOption;
  earnedCount = undefined;
  let useReducedMotion;
  const tmp = closure_12();
  const tmp4 = !customizationOption(6422).getIsTraitRarityVisible(customizationOption);
  let obj = customizationOption(6422);
  let items = [useReducedMotion];
  dependencyMap = customizationOption(504).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj2 = customizationOption(504);
  _slicedToArray = customizationOption(5304).useIsScreenReaderEnabled();
  let obj3 = customizationOption(5304);
  const traitPickerOptions = customizationOption(13497).useTraitPickerOptions({ customizationOption, optionIds, savedOptionId, rarityOrder });
  ({ availableTraitOptions, earnedCount } = traitPickerOptions);
  closure_5 = tmp6;
  const tmp8 = selectedOptionId(5636)(() => {
    let num = 0;
    if (!closure_5) {
      num = 0;
      if (customizationOption !== tmp2) {
        num = 0;
        if (!closure_2) {
          num = 0;
          if (!closure_3) {
            const _Math = Math;
            num = Math.max(earnedCount - 1, 0);
          }
        }
      }
    }
    return num;
  });
  let tmp9 = tmp6;
  if (null == selectedOptionId) {
    tmp9 = 0 === tmp8;
  }
  useReducedMotion = tmp9;
  const obj4 = customizationOption(13497);
  const obj5 = { customizationOption, optionIds, savedOptionId, rarityOrder };
  const fn = function f() {
    const obj = { duration, easing: null };
    const Easing = ReanimatedRexport.Easing;
    obj.easing = Easing.out(ReanimatedRexport.Easing.cubic);
    let num = 0;
    if (closure_6) {
      num = 1;
    }
    const obj3 = { opacity: timing.withTiming(num, obj), transform: null };
    let num2 = 0;
    if (!closure_6) {
      num2 = PX_12;
    }
    const tmpResult = timing;
    const items = [{ translateY: timing.withTiming(num2, obj) }];
    obj3.transform = items;
    return obj3;
  };
  const tmp2Result = customizationOption(5086);
  fn.__closure = { INTRO_DETAILS_DURATION_MS, Easing: customizationOption(5086).Easing, withTiming: customizationOption(5243).withTiming, isDetailsVisible: tmp9, INTRO_DETAILS_OFFSET_Y: PX_12 };
  fn.__workletHash = 13382203050567;
  fn.__initData = __initData2;
  const animatedStyle = tmp2Result.useAnimatedStyle(fn);
  const obj6 = { INTRO_DETAILS_DURATION_MS, Easing: customizationOption(5086).Easing, withTiming: customizationOption(5243).withTiming, isDetailsVisible: tmp9, INTRO_DETAILS_OFFSET_Y: PX_12 };
  [tmp12, tmp13] = earnedCount.useState(tmp8);
  const tmp11 = _slicedToArray(earnedCount.useState(tmp8), 2);
  const obj7 = { availableTraitOptions, selectedOptionId, onSelectOption, paused: null };
  let tmp14 = flag;
  if (!flag) {
    let tmp15 = !tmp6;
    if (!tmp6) {
      tmp15 = tmp12 > 0;
    }
    tmp14 = tmp15;
  }
  obj7.paused = tmp14;
  const autoSelectTraitOption = customizationOption(13498).useAutoSelectTraitOption(obj7);
  let diff = earnedCount;
  if (null == selectedOptionId) {
    diff = earnedCount - tmp12;
  }
  let found = availableTraitOptions.find((optionId) => optionId.optionId === selectedOptionId);
  if (found == null) {
    found = availableTraitOptions[0];
  }
  const obj8 = { style: null, children: null };
  const items1 = [tmp.container, customizationOption.style];
  obj8.style = items1;
  if (showEarnedCount) {
    const obj9 = { customizationOption, earnedCount: diff, totalCount: traitPickerOptions.totalCount };
    showEarnedCount = closure_8(closure_13, obj9);
  }
  const items2 = [showEarnedCount, closure_8(selectedOptionId(13495), { customizationOption, options: availableTraitOptions, selectedOptionId, disabled: flag, hideRarity: tmp4, introStartIndex: tmp8, onIntroStep: tmp13, onSelectOption }), ];
  let tmp23Result = null != found;
  if (tmp23Result) {
    const obj10 = { style: null, children: null };
    const items3 = [tmp.details, animatedStyle];
    obj10.style = items3;
    const obj11 = { asset: found, hideDescriptionAndRarity: tmp4 };
    obj10.children = closure_8(tmp7(13499), obj11);
    tmp23Result = closure_8(tmp7(5086).View, obj10);
  }
  items2[2] = tmp23Result;
  obj8.children = items2;
  return closure_9(closure_5, obj8);
});