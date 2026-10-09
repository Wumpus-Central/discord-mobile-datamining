// === Module 15958: TraitPicker ===

// Module 15958 (TraitPicker)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import _modDef3115 from "module_3115" /* 3115 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4811 */;
import Text_Text from "Text/Text" /* 5087 */;
import timing from "timing" /* 5092 */;
import CheckpointTraitRarity from "CheckpointTraitRarity" /* 5435 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 15924 */;
import CheckpointCharacterTraits from "CheckpointCharacterTraits" /* 15925 */;
import CheckpointTextDefault from "CheckpointText" /* 15934 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5080 */;
import UserStore from "UserStore" /* 1390 */;
import CheckpointStore from "CheckpointStore" /* 15915 */;

require = fn;
const View = fn(17).View;
const CHECKPOINT_RARITY_ORDER = fn(5434).CHECKPOINT_RARITY_ORDER;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
let c12 = 600;
const PX_12 = nativeDefault.space.PX_12;
const createStyles = fn(5091);
let obj2 = { container: { gap: fn(15959).TRAIT_OPTION_SPACING }, earnedRow: null, details: null };
let obj3 = { gap: fn(15959).TRAIT_OPTION_SPACING };
obj2.earnedRow = { paddingHorizontal: fn(15959).CONTENT_INSET };
let obj4 = { paddingHorizontal: fn(15959).CONTENT_INSET };
obj2.details = { paddingHorizontal: fn(15959).CONTENT_INSET };
let closure_14 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function EarnedCountHeader(arg0) {
  const cResult = c.c(14);
  ({ customizationOption, earnedCount, totalCount } = arg0);
  const tmp4 = closure_14();
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
          const tmp20 = collapsed(Text_Text.Text, obj2);
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
            return closure_1_10(closure_1_1(closure_1_2[16]), obj, arg1);
          }
        }
        cResult[9] = S;
      } else {
        class S {
          constructor(arg0, arg1) {
            obj = { variant: "experimental/mono-md/bold", children: arg0 };
            return closure_1_10(closure_1_1(closure_1_2[16]), obj, arg1);
          }
        }
      }
      const intl2 = util.intl;
      const obj3 = { earnedCount, totalCount, countHook: S };
      const formatResult = intl2.format(_modDef3115.Vfq58K, obj3);
      cResult[6] = earnedCount;
      cResult[7] = totalCount;
      cResult[8] = formatResult;
    }
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor(arg0, arg1) {
        obj = { variant: "experimental/mono-md/bold", children: arg0 };
        return closure_1_10(closure_1_1(closure_1_2[16]), obj, arg1);
      }
    }
    cResult[5] = tmp8;
  } else {
    class S {
      constructor(arg0, arg1) {
        obj = { variant: "experimental/mono-md/bold", children: arg0 };
        return closure_1_10(closure_1_1(closure_1_2[16]), obj, arg1);
      }
    }
  }
  const intl = util.intl;
  cResult[2] = earnedCount;
  cResult[3] = totalCount;
  cResult[4] = intl.formatToPlainString(_modDef3115.Vfq58K, { earnedCount, totalCount, countHook: tmp8 });
  const formatToPlainStringResult = intl.formatToPlainString(_modDef3115.Vfq58K, { earnedCount, totalCount, countHook: tmp8 });
}) : (function EarnedCountHeader(customizationOption) {
  ({ earnedCount, totalCount } = customizationOption);
  const tmp = closure_14();
  const customizationOptionName = CheckpointCustomizationUtils.getCustomizationOptionName(customizationOption.customizationOption);
  const intl = util.intl;
  const combined = "" + customizationOptionName + ", " + intl.formatToPlainString(_modDef3115.Vfq58K, {
    earnedCount,
    totalCount,
    countHook(arg0) {
      return arg0;
    }
  });
  const obj3 = { variant: "experimental/body-sm/medium", color: "text-default", style: tmp.earnedRow, accessibilityRole: "header", accessibilityLabel: combined, children: null };
  const intl2 = util.intl;
  obj3.children = intl2.format(_modDef3115.Vfq58K, {
    earnedCount,
    totalCount,
    countHook(children, arg1) {
      return closure_1_10(CheckpointTextDefault, { variant: "experimental/mono-md/bold", children }, arg1);
    }
  });
  return collapsed(Text_Text.Text, obj3);
});
const __initData = { code: "function TraitPickerTsx1(){const{INTRO_DETAILS_DURATION_MS,Easing,withTiming,isDetailsVisible,INTRO_DETAILS_OFFSET_Y}=this.__closure;const timing={duration:INTRO_DETAILS_DURATION_MS,easing:Easing.out(Easing.cubic)};return{opacity:withTiming(isDetailsVisible?1:0,timing),transform:[{translateY:withTiming(isDetailsVisible?0:INTRO_DETAILS_OFFSET_Y,timing)}]};}" };
const __initData2 = { code: "function TraitPickerTsx2(){const{INTRO_DETAILS_DURATION_MS,Easing,withTiming,isDetailsVisible,INTRO_DETAILS_OFFSET_Y}=this.__closure;const timing={duration:INTRO_DETAILS_DURATION_MS,easing:Easing.out(Easing.cubic)};return{opacity:withTiming(isDetailsVisible?1:0,timing),transform:[{translateY:withTiming(isDetailsVisible?0:INTRO_DETAILS_OFFSET_Y,timing)}]};}" };
ReactCompilerGating = fn(558);
let obj5 = { paddingHorizontal: fn(15959).CONTENT_INSET };
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/TraitPicker.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function TraitPicker(arg0) {
  const cResult = selectedOptionId(576).c(61);
  ({ style, customizationOption, disabled, options, savedOptionId, selectedOptionId } = arg0);
  ({ hideDescriptionAndRarity, skipIntro, showEarnedCount, onSelectOption } = arg0);
  dependencyMap = tmp6;
  _slicedToArray = tmp8;
  const tmp10 = closure_14();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [AccessibilityStore];
    class R {
      constructor() {
        return earnedCount.useReducedMotion;
      }
    }
    cResult[0] = items;
    cResult[1] = R;
    tmp11 = items;
  } else {
    [tmp11, tmp12] = cResult;
  }
  let obj = selectedOptionId(576);
  const stateFromStores = selectedOptionId(504).useStateFromStores(tmp11, R);
  const tmp2Result = selectedOptionId(504);
  const isScreenReaderEnabled = selectedOptionId(5361).useIsScreenReaderEnabled();
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [stats];
    class R {
      constructor() {
        return earnedCount.useReducedMotion;
      }
    }
    cResult[2] = items1;
    cResult[3] = tmp19;
    let tmp17 = tmp19;
    let tmp16 = items1;
  } else {
    tmp16 = cResult[2];
    tmp17 = cResult[3];
  }
  const tmp2Result5 = selectedOptionId(5361);
  const stateFromStores1 = selectedOptionId(504).useStateFromStores(tmp16, tmp17);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [UserStore];
    class U {
      constructor() {
        obj = selectedOptionId(disabled[20]);
        return obj.isPremium(closure_7.getCurrentUser());
      }
    }
    cResult[4] = U;
    cResult[5] = items2;
    let tmp22 = items2;
    let tmp21 = U;
  } else {
    tmp21 = cResult[4];
    tmp22 = cResult[5];
  }
  const tmp2Result6 = selectedOptionId(504);
  const stateFromStores2 = selectedOptionId(504).useStateFromStores(tmp22, tmp21);
  if (cResult[6] === customizationOption) {
    if (cResult[7] === stateFromStores2) {
      if (cResult[8] === options) {
        if (cResult[9] === savedOptionId) {
          if (cResult[10] === stateFromStores1) {
            ({ visibleTraitOptions, totalCount } = cResult[11]);
            class U {
              constructor() {
                obj = selectedOptionId(disabled[20]);
                return obj.isPremium(closure_7.getCurrentUser());
              }
            }
            AccessibilityStore = tmp49;
            UserStore = tmp51;
            if (cResult[13] === tmp49) {
              if (cResult[14] === tmp51) {
                if (cResult[15] === stateFromStores) {
                  if (cResult[16] === isScreenReaderEnabled) {
                    if (cResult[17] === tmp8) {
                      let tmp52 = cResult[18];
                    }
                    class U {
                      constructor() {
                        obj = selectedOptionId(disabled[20]);
                        return obj.isPremium(closure_7.getCurrentUser());
                      }
                    }
                    const tmp56 = onSelectOption(6176)(tmp52);
                    let tmp57 = tmp51;
                    if (!tmp51) {
                      tmp57 = 0 === tmp56;
                    }
                    stats = tmp57;
                    function st() {
                      const obj = { duration, easing: null };
                      const Easing = ReanimatedRexport.Easing;
                      obj.easing = Easing.out(ReanimatedRexport.Easing.cubic);
                      let num = 0;
                      if (closure_8) {
                        num = 1;
                      }
                      const obj3 = { opacity: timing.withTiming(num, obj), transform: null };
                      let num2 = 0;
                      if (!closure_8) {
                        num2 = PX_12;
                      }
                      const tmpResult = timing;
                      const items = [{ translateY: timing.withTiming(num2, obj) }];
                      obj3.transform = items;
                      return obj3;
                    }
                    let obj2 = { INTRO_DETAILS_DURATION_MS: v600, Easing: selectedOptionId(tmp55[24]).Easing, withTiming: selectedOptionId(tmp55[25]).withTiming, isDetailsVisible: tmp57, INTRO_DETAILS_OFFSET_Y: PX_12 };
                    st.__closure = obj2;
                    st.__workletHash = 9456849062820;
                    st.__initData = __initData;
                    const animatedStyle = selectedOptionId(tmp55[24]).useAnimatedStyle(st);
                    const obj10 = selectedOptionId(tmp55[24]);
                    const obj12 = stateFromStores;
                    const first = _slicedToArray(stateFromStores.useState(tmp56), 2)[0];
                    const first1 = visibleTraitOptions[0];
                    if (cResult[19] === selectedOptionId) {
                      if (cResult[20] === visibleTraitOptions) {
                        closure_11 = tmp70;
                        if (cResult[24] === tmp6) {
                          if (cResult[25] === first1) {
                            if (cResult[26] === tmp51) {
                              if (cResult[27] === first) {
                                if (cResult[28] === tmp70) {
                                  if (cResult[29] === onSelectOption) {
                                    let tmp74 = cResult[30];
                                    let tmp75 = cResult[31];
                                  }
                                  const effect = obj12.useEffect(tmp74, tmp75);
                                  class Ot {
                                    constructor() {
                                      tmp = disabled;
                                      if (!disabled) {
                                        tmp2 = closure_10;
                                        tmp3 = null;
                                        tmp = null == closure_10;
                                      }
                                      if (!tmp) {
                                        tmp = closure_11;
                                      }
                                      if (!tmp) {
                                        tmp4 = closure_7;
                                        tmp5 = !closure_7;
                                        if (!closure_7) {
                                          tmp6 = closure_9;
                                          num = 0;
                                          tmp5 = closure_9 > 0;
                                        }
                                        tmp = tmp5;
                                      }
                                      if (!tmp) {
                                        tmp7 = onSelectOption;
                                        tmp8 = closure_10;
                                        tmp9 = onSelectOption(closure_10.trait, closure_10.optionId);
                                      }
                                      return;
                                    }
                                  }
                                  if (cResult[32] === selectedOptionId) {
                                    if (cResult[33] === visibleTraitOptions) {
                                      let tmp78 = cResult[34];
                                    }
                                    if (cResult[35] === style) {
                                      if (cResult[36] === tmp10.container) {
                                        let tmp80 = cResult[37];
                                      }
                                      if (cResult[38] === customizationOption) {
                                        if (cResult[39] === tmp49) {
                                          if (cResult[40] === tmp9) {
                                            if (cResult[41] === totalCount) {
                                              let tmp81 = cResult[42];
                                            }
                                            if (cResult[43] === customizationOption) {
                                              if (cResult[44] === tmp6) {
                                                if (cResult[45] === tmp7) {
                                                  if (cResult[46] === tmp56) {
                                                    if (cResult[47] === onSelectOption) {
                                                      if (cResult[48] === selectedOptionId) {
                                                        if (cResult[49] === visibleTraitOptions) {
                                                          let tmp83 = cResult[50];
                                                        }
                                                        if (cResult[51] === animatedStyle) {
                                                          if (cResult[52] === tmp7) {
                                                            if (cResult[53] === tmp78) {
                                                              if (cResult[54] === tmp10.details) {
                                                                let tmp86 = cResult[55];
                                                              }
                                                              if (cResult[56] === tmp80) {
                                                                if (cResult[57] === tmp81) {
                                                                  if (cResult[58] === tmp83) {
                                                                    if (cResult[59] === tmp86) {
                                                                      let tmp88 = cResult[60];
                                                                    }
                                                                    return tmp88;
                                                                  }
                                                                }
                                                              }
                                                              class Ot {
                                                                constructor() {
                                                                  tmp = disabled;
                                                                  if (!disabled) {
                                                                    tmp2 = closure_10;
                                                                    tmp3 = null;
                                                                    tmp = null == closure_10;
                                                                  }
                                                                  if (!tmp) {
                                                                    tmp = closure_11;
                                                                  }
                                                                  if (!tmp) {
                                                                    tmp4 = closure_7;
                                                                    tmp5 = !closure_7;
                                                                    if (!closure_7) {
                                                                      tmp6 = closure_9;
                                                                      num = 0;
                                                                      tmp5 = closure_9 > 0;
                                                                    }
                                                                    tmp = tmp5;
                                                                  }
                                                                  if (!tmp) {
                                                                    tmp7 = onSelectOption;
                                                                    tmp8 = closure_10;
                                                                    tmp9 = onSelectOption(closure_10.trait, closure_10.optionId);
                                                                  }
                                                                  return;
                                                                }
                                                              }
                                                              let obj3 = { style: tmp80, children: null };
                                                              const items3 = [tmp81, tmp83, tmp86];
                                                              obj3.children = items3;
                                                              const tmp90 = closure_11(isScreenReaderEnabled, obj3);
                                                              cResult[56] = tmp80;
                                                              cResult[57] = tmp81;
                                                              cResult[58] = tmp83;
                                                              cResult[59] = tmp86;
                                                              cResult[60] = tmp90;
                                                              tmp88 = tmp90;
                                                            }
                                                          }
                                                        }
                                                        class Ot {
                                                          constructor() {
                                                            tmp = disabled;
                                                            if (!disabled) {
                                                              tmp2 = closure_10;
                                                              tmp3 = null;
                                                              tmp = null == closure_10;
                                                            }
                                                            if (!tmp) {
                                                              tmp = closure_11;
                                                            }
                                                            if (!tmp) {
                                                              tmp4 = closure_7;
                                                              tmp5 = !closure_7;
                                                              if (!closure_7) {
                                                                tmp6 = closure_9;
                                                                num = 0;
                                                                tmp5 = closure_9 > 0;
                                                              }
                                                              tmp = tmp5;
                                                            }
                                                            if (!tmp) {
                                                              tmp7 = onSelectOption;
                                                              tmp8 = closure_10;
                                                              tmp9 = onSelectOption(closure_10.trait, closure_10.optionId);
                                                            }
                                                            return;
                                                          }
                                                        }
                                                        cResult[51] = animatedStyle;
                                                        cResult[52] = tmp7;
                                                        cResult[53] = tmp78;
                                                        cResult[54] = tmp10.details;
                                                        cResult[55] = null != tmp78;
                                                        tmp86 = tmp87;
                                                      }
                                                    }
                                                  }
                                                }
                                              }
                                            }
                                            class Ot {
                                              constructor() {
                                                tmp = disabled;
                                                if (!disabled) {
                                                  tmp2 = closure_10;
                                                  tmp3 = null;
                                                  tmp = null == closure_10;
                                                }
                                                if (!tmp) {
                                                  tmp = closure_11;
                                                }
                                                if (!tmp) {
                                                  tmp4 = closure_7;
                                                  tmp5 = !closure_7;
                                                  if (!closure_7) {
                                                    tmp6 = closure_9;
                                                    num = 0;
                                                    tmp5 = closure_9 > 0;
                                                  }
                                                  tmp = tmp5;
                                                }
                                                if (!tmp) {
                                                  tmp7 = onSelectOption;
                                                  tmp8 = closure_10;
                                                  tmp9 = onSelectOption(closure_10.trait, closure_10.optionId);
                                                }
                                                return;
                                              }
                                            }
                                            const obj4 = { customizationOption, options: visibleTraitOptions, selectedOptionId, disabled: tmp6, hideRarity: tmp7, introStartIndex: tmp56, onIntroStep: tmp68, onSelectOption };
                                            const tmp85 = first1(onSelectOption(tmp55[10]), obj4);
                                            cResult[43] = customizationOption;
                                            cResult[44] = tmp6;
                                            cResult[45] = tmp7;
                                            cResult[46] = tmp56;
                                            cResult[47] = onSelectOption;
                                            cResult[48] = selectedOptionId;
                                            cResult[49] = visibleTraitOptions;
                                            cResult[50] = tmp85;
                                            tmp83 = tmp85;
                                          }
                                        }
                                      }
                                      class Ot {
                                        constructor() {
                                          tmp = disabled;
                                          if (!disabled) {
                                            tmp2 = closure_10;
                                            tmp3 = null;
                                            tmp = null == closure_10;
                                          }
                                          if (!tmp) {
                                            tmp = closure_11;
                                          }
                                          if (!tmp) {
                                            tmp4 = closure_7;
                                            tmp5 = !closure_7;
                                            if (!closure_7) {
                                              tmp6 = closure_9;
                                              num = 0;
                                              tmp5 = closure_9 > 0;
                                            }
                                            tmp = tmp5;
                                          }
                                          if (!tmp) {
                                            tmp7 = onSelectOption;
                                            tmp8 = closure_10;
                                            tmp9 = onSelectOption(closure_10.trait, closure_10.optionId);
                                          }
                                          return;
                                        }
                                      }
                                      cResult[38] = customizationOption;
                                      cResult[39] = tmp49;
                                      cResult[40] = tmp9;
                                      cResult[41] = totalCount;
                                      cResult[42] = tmp9;
                                      tmp81 = tmp82;
                                    }
                                    const items4 = [, ];
                                    class Ot {
                                      constructor() {
                                        tmp = disabled;
                                        if (!disabled) {
                                          tmp2 = closure_10;
                                          tmp3 = null;
                                          tmp = null == closure_10;
                                        }
                                        if (!tmp) {
                                          tmp = closure_11;
                                        }
                                        if (!tmp) {
                                          tmp4 = closure_7;
                                          tmp5 = !closure_7;
                                          if (!closure_7) {
                                            tmp6 = closure_9;
                                            num = 0;
                                            tmp5 = closure_9 > 0;
                                          }
                                          tmp = tmp5;
                                        }
                                        if (!tmp) {
                                          tmp7 = onSelectOption;
                                          tmp8 = closure_10;
                                          tmp9 = onSelectOption(closure_10.trait, closure_10.optionId);
                                        }
                                        return;
                                      }
                                    }
                                    items4[1] = style;
                                    cResult[35] = style;
                                    cResult[36] = tmp10.container;
                                    cResult[37] = items4;
                                    tmp80 = items4;
                                  }
                                  let found = visibleTraitOptions.find((optionId) => optionId.optionId === selectedOptionId);
                                  if (found == null) {
                                    found = visibleTraitOptions[0];
                                  }
                                  cResult[32] = selectedOptionId;
                                  cResult[33] = visibleTraitOptions;
                                  cResult[34] = found;
                                  tmp78 = found;
                                }
                              }
                            }
                          }
                        }
                        class Ot {
                          constructor() {
                            tmp = disabled;
                            if (!disabled) {
                              tmp2 = closure_10;
                              tmp3 = null;
                              tmp = null == closure_10;
                            }
                            if (!tmp) {
                              tmp = closure_11;
                            }
                            if (!tmp) {
                              tmp4 = closure_7;
                              tmp5 = !closure_7;
                              if (!closure_7) {
                                tmp6 = closure_9;
                                num = 0;
                                tmp5 = closure_9 > 0;
                              }
                              tmp = tmp5;
                            }
                            if (!tmp) {
                              tmp7 = onSelectOption;
                              tmp8 = closure_10;
                              tmp9 = onSelectOption(closure_10.trait, closure_10.optionId);
                            }
                            return;
                          }
                        }
                        const items5 = [tmp6, first1, tmp51, first, cResult[21], onSelectOption];
                        cResult[24] = tmp6;
                        cResult[25] = first1;
                        cResult[26] = tmp51;
                        cResult[27] = first;
                        cResult[28] = cResult[21];
                        cResult[29] = onSelectOption;
                        cResult[30] = Ot;
                        cResult[31] = items5;
                        tmp75 = items5;
                        tmp74 = Ot;
                      }
                    }
                    if (cResult[22] !== selectedOptionId) {
                      function dt(optionId) {
                        return optionId.optionId === selectedOptionId;
                      }
                      cResult[22] = selectedOptionId;
                      class Ot {
                        constructor() {
                          tmp = disabled;
                          if (!disabled) {
                            tmp2 = closure_10;
                            tmp3 = null;
                            tmp = null == closure_10;
                          }
                          if (!tmp) {
                            tmp = closure_11;
                          }
                          if (!tmp) {
                            tmp4 = closure_7;
                            tmp5 = !closure_7;
                            if (!closure_7) {
                              tmp6 = closure_9;
                              num = 0;
                              tmp5 = closure_9 > 0;
                            }
                            tmp = tmp5;
                          }
                          if (!tmp) {
                            tmp7 = onSelectOption;
                            tmp8 = closure_10;
                            tmp9 = onSelectOption(closure_10.trait, closure_10.optionId);
                          }
                          return;
                        }
                      }
                      cResult[23] = dt;
                      let tmp71 = dt;
                    } else {
                      tmp71 = cResult[23];
                    }
                    const someResult = visibleTraitOptions.some(tmp71);
                    cResult[19] = selectedOptionId;
                    cResult[20] = visibleTraitOptions;
                    cResult[21] = someResult;
                    const tmp66 = _slicedToArray(stateFromStores.useState(tmp56), 2);
                  }
                }
              }
            }
            function it() {
              let num = 0;
              if (!closure_7) {
                num = 0;
                if (!closure_3) {
                  num = 0;
                  if (!stateFromStores) {
                    num = 0;
                    if (!isScreenReaderEnabled) {
                      const _Math = Math;
                      num = Math.max(closure_6 - 1, 0);
                    }
                  }
                }
              }
              return num;
            }
            cResult[13] = tmp49;
            cResult[14] = null != selectedOptionId;
            cResult[15] = stateFromStores;
            cResult[16] = isScreenReaderEnabled;
            cResult[17] = tmp8;
            cResult[18] = it;
            tmp52 = it;
          }
        }
      }
    }
  }
  const tmp2Result7 = selectedOptionId(504);
  const visibleTraitRarities = selectedOptionId(15925).getVisibleTraitRarities(selectedOptionId(15924).CUSTOMIZATION_OPTION_TRAITS[customizationOption], stateFromStores1);
  const items6 = [];
  let num7 = 0;
  let num8 = 0;
  const iter = options[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp26 = nextResult;
    let hasItem = null == nextResult.rarity;
    if (!hasItem) {
      hasItem = visibleTraitRarities.has(tmp26.rarity);
    }
    class Ot {
      constructor() {
        tmp = disabled;
        if (!disabled) {
          tmp2 = closure_10;
          tmp3 = null;
          tmp = null == closure_10;
        }
        if (!tmp) {
          tmp = closure_11;
        }
        if (!tmp) {
          tmp4 = closure_7;
          tmp5 = !closure_7;
          if (!closure_7) {
            tmp6 = closure_9;
            num = 0;
            tmp5 = closure_9 > 0;
          }
          tmp = tmp5;
        }
        if (!tmp) {
          tmp7 = onSelectOption;
          tmp8 = closure_10;
          tmp9 = onSelectOption(closure_10.trait, closure_10.optionId);
        }
        return;
      }
    }
    let tmp34 = tmp26.rarity === selectedOptionId(5435).CheckpointTraitRarity.NITRO && !stateFromStores2;
    let tmp35 = tmp34;
    if (null != tmp26.rarity) {
      num7 = num7 + 1;
    }
    let tmp38 = hasItem;
    if (!hasItem) {
      tmp38 = savedOptionId === tmp26.optionId;
    }
    if (tmp38) {
      let obj5 = {};
      class Ot {
        constructor() {
          tmp = disabled;
          if (!disabled) {
            tmp2 = closure_10;
            tmp3 = null;
            tmp = null == closure_10;
          }
          if (!tmp) {
            tmp = closure_11;
          }
          if (!tmp) {
            tmp4 = closure_7;
            tmp5 = !closure_7;
            if (!closure_7) {
              tmp6 = closure_9;
              num = 0;
              tmp5 = closure_9 > 0;
            }
            tmp = tmp5;
          }
          if (!tmp) {
            tmp7 = onSelectOption;
            tmp8 = closure_10;
            tmp9 = onSelectOption(closure_10.trait, closure_10.optionId);
          }
          return;
        }
      }
      let merged = Object.assign(nextResult);
      obj5.locked = tmp35;
      let arr = items6.push(obj5);
      let tmp45 = null == tmp26.rarity || tmp34;
      if (!tmp45) {
        num8 = num8 + 1;
      }
    }
    continue;
  }
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    class Z {
      constructor(arg0, arg1) {
        if (null == arg0.rarity) {
          tmp = closure_9;
          length = closure_9.length;
          arr = closure_9;
        } else {
          arr = closure_9;
          length = closure_9.indexOf(arg0.rarity);
          num = -1;
          if (-1 === length) {
            length = arr.length;
          }
        }
        if (null == arg1.rarity) {
          length2 = arr.length;
        } else {
          length2 = arr.indexOf(arg1.rarity);
          num2 = -1;
          if (-1 === length2) {
            length2 = arr.length;
          }
        }
        return length - length2;
      }
    }
    cResult[12] = Z;
    class Ot {
      constructor() {
        tmp = disabled;
        if (!disabled) {
          tmp2 = closure_10;
          tmp3 = null;
          tmp = null == closure_10;
        }
        if (!tmp) {
          tmp = closure_11;
        }
        if (!tmp) {
          tmp4 = closure_7;
          tmp5 = !closure_7;
          if (!closure_7) {
            tmp6 = closure_9;
            num = 0;
            tmp5 = closure_9 > 0;
          }
          tmp = tmp5;
        }
        if (!tmp) {
          tmp7 = onSelectOption;
          tmp8 = closure_10;
          tmp9 = onSelectOption(closure_10.trait, closure_10.optionId);
        }
        return;
      }
    }
  } else {
    class Z {
      constructor(arg0, arg1) {
        if (null == arg0.rarity) {
          tmp = closure_9;
          length = closure_9.length;
          arr = closure_9;
        } else {
          arr = closure_9;
          length = closure_9.indexOf(arg0.rarity);
          num = -1;
          if (-1 === length) {
            length = arr.length;
          }
        }
        if (null == arg1.rarity) {
          length2 = arr.length;
        } else {
          length2 = arr.indexOf(arg1.rarity);
          num2 = -1;
          if (-1 === length2) {
            length2 = arr.length;
          }
        }
        return length - length2;
      }
    }
  }
  const sorted = items6.sort(tmp47);
  cResult[6] = customizationOption;
  cResult[7] = stateFromStores2;
  cResult[8] = options;
  cResult[9] = savedOptionId;
  cResult[10] = stateFromStores1;
  num8 = 11;
  cResult[11] = { visibleTraitOptions: items6, totalCount: num7, earnedCount: num8 };
  const obj6 = { visibleTraitOptions: items6, totalCount: num7, earnedCount: num8 };
  const tmp2Result8 = selectedOptionId(15925);
}) : (function TraitPicker(customizationOption) {
  customizationOption = customizationOption.customizationOption;
  let flag = customizationOption.disabled;
  if (flag === undefined) {
    flag = false;
  }
  options = customizationOption.options;
  const savedOptionId = customizationOption.savedOptionId;
  const selectedOptionId = customizationOption.selectedOptionId;
  let flag2 = customizationOption.hideDescriptionAndRarity;
  if (flag2 === undefined) {
    flag2 = false;
  }
  let flag3 = customizationOption.skipIntro;
  if (flag3 === undefined) {
    flag3 = false;
  }
  let flag4 = customizationOption.showEarnedCount;
  if (flag4 === undefined) {
    flag4 = false;
  }
  const onSelectOption = customizationOption.onSelectOption;
  earnedCount = undefined;
  INTRO_DETAILS_OFFSET_Y = undefined;
  let first;
  let first1;
  c16 = undefined;
  let tmp = first();
  let items = [onSelectOption];
  const currentUser = customizationOption(options[18]).useStateFromStores(items, () => onSelectOption.useReducedMotion);
  let obj = customizationOption(options[18]);
  const stats = customizationOption(options[19]).useIsScreenReaderEnabled();
  let obj2 = customizationOption(options[19]);
  const items1 = [stats];
  const stateFromStores = customizationOption(options[18]).useStateFromStores(items1, () => stats.stats);
  let obj3 = customizationOption(options[18]);
  const items2 = [currentUser];
  const stateFromStores1 = customizationOption(options[18]).useStateFromStores(items2, () => customizationOption(options[20]).isPremium(currentUser.getCurrentUser()));
  const items3 = [customizationOption, stateFromStores1, options, savedOptionId, stateFromStores];
  const memo = selectedOptionId.useMemo(() => {
    const visibleTraitRarities = CheckpointCharacterTraits.getVisibleTraitRarities(CheckpointCustomizationUtils.CUSTOMIZATION_OPTION_TRAITS[customizationOption], stateFromStores);
    const visibleTraitOptions = [];
    let totalCount = 0;
    earnedCount = 0;
    const iter = options[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp3 = nextResult;
      let hasItem = null == nextResult.rarity;
      if (!hasItem) {
        hasItem = visibleTraitRarities.has(tmp3.rarity);
      }
      let tmp10 = tmp3.rarity === CheckpointTraitRarity.CheckpointTraitRarity.NITRO;
      if (tmp10) {
        tmp10 = !stateFromStores1;
      }
      let tmp12 = tmp10;
      if (null != tmp3.rarity) {
        totalCount = totalCount + 1;
      }
      let tmp15 = hasItem;
      if (!hasItem) {
        tmp15 = savedOptionId === tmp3.optionId;
      }
      if (tmp15) {
        let obj2 = {};
        let merged = Object.assign(nextResult);
        obj2.locked = tmp12;
        let arr = visibleTraitOptions.push(obj2);
        let tmp24 = null == tmp3.rarity || tmp10;
        if (!tmp24) {
          earnedCount = earnedCount + 1;
        }
      }
      continue;
    }
    const sorted = visibleTraitOptions.sort((rarity, rarity2) => {
      if (null == rarity.rarity) {
        let length = stateFromStores.length;
        let arr = stateFromStores;
      } else {
        arr = stateFromStores;
        length = stateFromStores.indexOf(rarity.rarity);
        if (-1 === length) {
          length = arr.length;
        }
      }
      if (null == rarity2.rarity) {
        let length2 = arr.length;
      } else {
        length2 = arr.indexOf(rarity2.rarity);
        if (-1 === length2) {
          length2 = arr.length;
        }
      }
      return length - length2;
    });
    return { visibleTraitOptions, totalCount, earnedCount };
  }, items3);
  ({ visibleTraitOptions, earnedCount } = memo);
  const v600 = tmp7;
  const tmp9 = flag(options[23])(() => {
    let num = 0;
    if (!closure_12) {
      num = 0;
      if (!flag3) {
        num = 0;
        if (!closure_7) {
          num = 0;
          if (!closure_8) {
            const _Math = Math;
            num = Math.max(earnedCount - 1, 0);
          }
        }
      }
    }
    return num;
  });
  let tmp10 = tmp7;
  if (null == selectedOptionId) {
    tmp10 = 0 === tmp9;
  }
  INTRO_DETAILS_OFFSET_Y = tmp10;
  const obj4 = customizationOption(options[18]);
  class N {
    constructor() {
      obj = { duration: c12, easing: null };
      tmp = closure_0;
      tmp2 = closure_2;
      Easing = closure_0(closure_2[24]).Easing;
      obj.easing = Easing.out(closure_0(closure_2[24]).Easing.cubic);
      obj2 = closure_0(closure_2[25]);
      num = 0;
      tmp3 = closure_13;
      if (closure_13) {
        num = 1;
      }
      obj1 = { opacity: obj2.withTiming(num, obj), transform: null };
      tmpResult = tmp(tmp2[25]);
      num2 = 0;
      if (!tmp3) {
        num2 = PX_12;
      }
      obj6 = { translateY: tmpResult.withTiming(num2, obj) };
      items = [];
      items[0] = obj6;
      obj1.transform = items;
      return obj1;
    }
  }
  const tmp2Result = customizationOption(options[24]);
  N.__closure = { INTRO_DETAILS_DURATION_MS: v600, Easing: customizationOption(options[24]).Easing, withTiming: customizationOption(options[25]).withTiming, isDetailsVisible: tmp10, INTRO_DETAILS_OFFSET_Y };
  N.__workletHash = 13382203050567;
  N.__initData = __initData2;
  const animatedStyle = tmp2Result.useAnimatedStyle(N);
  let tmp12 = savedOptionId(selectedOptionId.useState(tmp9), 2);
  first = tmp12[0];
  first1 = visibleTraitOptions[0];
  const someResult = visibleTraitOptions.some((optionId) => optionId.optionId === selectedOptionId);
  c16 = someResult;
  const items4 = [flag, first1, null != selectedOptionId, first, someResult, onSelectOption];
  const effect = obj5.useEffect(() => {
    let tmp = flag;
    if (!flag) {
      tmp = null == first1;
    }
    if (!tmp) {
      tmp = c16;
    }
    if (!tmp) {
      let tmp5 = !closure_12;
      if (!closure_12) {
        tmp5 = first > 0;
      }
      tmp = tmp5;
    }
    if (!tmp) {
      onSelectOption(first1.trait, first1.optionId);
    }
  }, items4);
  let diff = earnedCount;
  if (null == selectedOptionId) {
    diff = earnedCount - first;
  }
  let found = visibleTraitOptions.find((optionId) => optionId.optionId === selectedOptionId);
  if (found == null) {
    found = visibleTraitOptions[0];
  }
  const obj7 = { style: null, children: null };
  const items5 = [tmp.container, customizationOption.style];
  obj7.style = items5;
  if (flag4) {
    const obj8 = { customizationOption, earnedCount: diff, totalCount: memo.totalCount };
    flag4 = stateFromStores1(first1, obj8);
  }
  const items6 = [flag4, stateFromStores1(flag(options[10]), { customizationOption, options: visibleTraitOptions, selectedOptionId, disabled: flag, hideRarity: flag2, introStartIndex: tmp9, onIntroStep: tmp12[1], onSelectOption }), ];
  let tmp23Result = null != found;
  if (tmp23Result) {
    const obj9 = { style: null, children: null };
    const items7 = [tmp.details, animatedStyle];
    obj9.style = items7;
    const obj10 = { asset: found, hideDescriptionAndRarity: flag2 };
    obj9.children = tmp23(tmp8(tmp3[26]), obj10);
    tmp23Result = tmp23(tmp8(tmp3[24]).View, obj9);
  }
  items6[2] = tmp23Result;
  obj7.children = items6;
  return earnedCount(flag3, obj7);
});