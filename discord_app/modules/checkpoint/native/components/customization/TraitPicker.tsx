// === Module 12944: TraitPicker ===

// Module 12944 (TraitPicker)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1128 */;
import _modDef3088 from "module_3088" /* 3088 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5038 */;
import timing from "timing" /* 5192 */;
import Text_Text from "Text/Text" /* 5220 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6348 */;
import CheckpointTextDefault from "CheckpointText" /* 12893 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4970 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let c9 = 600;
const PX_12 = nativeDefault.space.PX_12;
const createStyles = fn(4969);
let obj2 = { container: { gap: fn(12945).TRAIT_OPTION_SPACING }, earnedRow: null, details: null };
let obj3 = { gap: fn(12945).TRAIT_OPTION_SPACING };
obj2.earnedRow = { paddingHorizontal: fn(12945).CONTENT_INSET };
let obj4 = { paddingHorizontal: fn(12945).CONTENT_INSET };
obj2.details = { paddingHorizontal: fn(12945).CONTENT_INSET };
let closure_11 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function EarnedCountHeader(arg0) {
  const cResult = c.c(14);
  ({ customizationOption, earnedCount, totalCount } = arg0);
  const tmp4 = closure_11();
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
          const tmp20 = React5(Text_Text.Text, obj2);
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
            return closure_1_7(closure_1_1(closure_1_2[13]), obj, arg1);
          }
        }
        cResult[9] = S;
      } else {
        class S {
          constructor(arg0, arg1) {
            obj = { variant: "experimental/mono-md/bold", children: arg0 };
            return closure_1_7(closure_1_1(closure_1_2[13]), obj, arg1);
          }
        }
      }
      const intl2 = util.intl;
      const obj3 = { earnedCount, totalCount, countHook: S };
      const formatResult = intl2.format(_modDef3088.Vfq58K, obj3);
      cResult[6] = earnedCount;
      cResult[7] = totalCount;
      cResult[8] = formatResult;
    }
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class S {
      constructor(arg0, arg1) {
        obj = { variant: "experimental/mono-md/bold", children: arg0 };
        return closure_1_7(closure_1_1(closure_1_2[13]), obj, arg1);
      }
    }
    cResult[5] = tmp8;
  } else {
    class S {
      constructor(arg0, arg1) {
        obj = { variant: "experimental/mono-md/bold", children: arg0 };
        return closure_1_7(closure_1_1(closure_1_2[13]), obj, arg1);
      }
    }
  }
  const intl = util.intl;
  cResult[2] = earnedCount;
  cResult[3] = totalCount;
  cResult[4] = intl.formatToPlainString(_modDef3088.Vfq58K, { earnedCount, totalCount, countHook: tmp8 });
  const formatToPlainStringResult = intl.formatToPlainString(_modDef3088.Vfq58K, { earnedCount, totalCount, countHook: tmp8 });
}) : (function EarnedCountHeader(customizationOption) {
  ({ earnedCount, totalCount } = customizationOption);
  const tmp = closure_11();
  const customizationOptionName = CheckpointCustomizationUtils.getCustomizationOptionName(customizationOption.customizationOption);
  const intl = util.intl;
  const combined = "" + customizationOptionName + ", " + intl.formatToPlainString(_modDef3088.Vfq58K, {
    earnedCount,
    totalCount,
    countHook(arg0) {
      return arg0;
    }
  });
  const obj3 = { variant: "experimental/body-sm/medium", color: "text-default", style: tmp.earnedRow, accessibilityRole: "header", accessibilityLabel: combined, children: null };
  const intl2 = util.intl;
  obj3.children = intl2.format(_modDef3088.Vfq58K, {
    earnedCount,
    totalCount,
    countHook(children, arg1) {
      return closure_1_7(CheckpointTextDefault, { variant: "experimental/mono-md/bold", children }, arg1);
    }
  });
  return React5(Text_Text.Text, obj3);
});
const __initData = { code: "function TraitPickerTsx1(){const{INTRO_DETAILS_DURATION_MS,Easing,withTiming,isDetailsVisible,INTRO_DETAILS_OFFSET_Y}=this.__closure;const timing={duration:INTRO_DETAILS_DURATION_MS,easing:Easing.out(Easing.cubic)};return{opacity:withTiming(isDetailsVisible?1:0,timing),transform:[{translateY:withTiming(isDetailsVisible?0:INTRO_DETAILS_OFFSET_Y,timing)}]};}" };
const __initData2 = { code: "function TraitPickerTsx2(){const{INTRO_DETAILS_DURATION_MS,Easing,withTiming,isDetailsVisible,INTRO_DETAILS_OFFSET_Y}=this.__closure;const timing={duration:INTRO_DETAILS_DURATION_MS,easing:Easing.out(Easing.cubic)};return{opacity:withTiming(isDetailsVisible?1:0,timing),transform:[{translateY:withTiming(isDetailsVisible?0:INTRO_DETAILS_OFFSET_Y,timing)}]};}" };
ReactCompilerGating = fn(558);
let obj5 = { paddingHorizontal: fn(12945).CONTENT_INSET };
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/TraitPicker.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function TraitPicker(arg0) {
  const cResult = selectedOptionId(stateFromStores[9]).c(46);
  ({ style, customizationOption, disabled, options, savedOptionId, selectedOptionId } = arg0);
  ({ hideDescriptionAndRarity, skipIntro, showEarnedCount, onSelectOption } = arg0);
  importDefault = tmp6;
  const tmp8 = closure_11();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [AccessibilityStore];
    class E {
      constructor() {
        return closure_6.useReducedMotion;
      }
    }
    cResult[0] = items;
    cResult[1] = E;
    tmp9 = items;
  } else {
    [tmp9, tmp10] = cResult;
  }
  let obj = selectedOptionId(stateFromStores[9]);
  stateFromStores = selectedOptionId(stateFromStores[15]).useStateFromStores(tmp9, E);
  let tmpResult = selectedOptionId(stateFromStores[15]);
  const isScreenReaderEnabled = selectedOptionId(stateFromStores[16]).useIsScreenReaderEnabled();
  if (cResult[2] === customizationOption) {
    if (cResult[3] === options) {
      if (cResult[4] === savedOptionId) {
        let tmp14 = cResult[5];
      }
      const traitPickerOptions = selectedOptionId(tmp2[17]).useTraitPickerOptions(tmp14);
      class E {
        constructor() {
          return closure_6.useReducedMotion;
        }
      }
      ({ totalCount, earnedCount } = traitPickerOptions);
      closure_5 = tmp17;
      if (cResult[6] === earnedCount) {
        if (cResult[7] === tmp17) {
          if (cResult[8] === stateFromStores) {
            if (cResult[9] === isScreenReaderEnabled) {
              if (cResult[10] === tmp6) {
                let tmp18 = cResult[11];
              }
              const tmp20 = require("useInitialValue")(tmp18);
              class E {
                constructor() {
                  return closure_6.useReducedMotion;
                }
              }
              AccessibilityStore = tmp21;
              selectedOptionId(tmp2[19]);
              const fn = function j() {
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
              let obj2 = { INTRO_DETAILS_DURATION_MS: v600, Easing: null, withTiming: null, isDetailsVisible: null, INTRO_DETAILS_OFFSET_Y: null };
              class H {
                constructor() {
                  num = 0;
                  if (!closure_5) {
                    tmp = skipIntro;
                    num = 0;
                    if (!skipIntro) {
                      tmp2 = closure_2;
                      num = 0;
                      if (!closure_2) {
                        tmp3 = closure_3;
                        num = 0;
                        if (!closure_3) {
                          tmp4 = globalThis;
                          _Math = Math;
                          tmp5 = earnedCount;
                          num2 = 1;
                          num = Math.max(earnedCount - 1, 0);
                        }
                      }
                    }
                  }
                  return num;
                }
              }
              obj2.Easing = selectedOptionId(tmp2[19]).Easing;
              obj2.withTiming = selectedOptionId(tmp2[20]).withTiming;
              obj2.isDetailsVisible = tmp21;
              obj2.INTRO_DETAILS_OFFSET_Y = PX_12;
              fn.__closure = obj2;
              fn.__workletHash = 9456849062820;
              fn.__initData = __initData;
              const tmp23Result = tmp23(fn);
              const tmp30 = isScreenReaderEnabled(earnedCount.useState(tmp20), 2);
              const first = tmp30[0];
              let tmp32 = tmp4;
              if (!tmp4) {
                let tmp33 = !tmp17;
                if (!tmp17) {
                  tmp33 = first > 0;
                }
                tmp32 = tmp33;
              }
              if (cResult[12] === onSelectOption) {
                if (cResult[13] === selectedOptionId) {
                  if (cResult[14] === tmp32) {
                    if (cResult[15] === arr2) {
                      let tmp34 = cResult[16];
                    }
                    const autoSelectTraitOption = selectedOptionId(tmp2[21]).useAutoSelectTraitOption(tmp34);
                    class E {
                      constructor() {
                        return closure_6.useReducedMotion;
                      }
                    }
                    if (!tmp17) {
                      const diff = earnedCount - first;
                    }
                    if (cResult[17] === selectedOptionId) {
                      if (cResult[18] === arr2) {
                        let tmp37 = cResult[19];
                      }
                      if (cResult[20] === style) {
                        if (cResult[23] === customizationOption) {
                          if (cResult[24] === diff) {
                            if (cResult[25] === tmp7) {
                              if (cResult[26] === totalCount) {
                                let tmp40 = cResult[27];
                              }
                              if (cResult[28] === customizationOption) {
                                if (cResult[29] === tmp4) {
                                  if (cResult[30] === tmp5) {
                                    if (cResult[31] === tmp20) {
                                      if (cResult[32] === onSelectOption) {
                                        if (cResult[33] === selectedOptionId) {
                                          if (cResult[34] === arr2) {
                                            let tmp42 = cResult[35];
                                          }
                                          if (cResult[36] === tmp23Result) {
                                            if (cResult[37] === tmp5) {
                                              if (cResult[38] === tmp37) {
                                                if (cResult[39] === tmp8.details) {
                                                  let tmp46 = cResult[40];
                                                }
                                                if (cResult[41] === tmp39) {
                                                  if (cResult[42] === tmp40) {
                                                    if (cResult[43] === tmp42) {
                                                      if (cResult[44] === tmp46) {
                                                        let tmp48 = cResult[45];
                                                      }
                                                      return tmp48;
                                                    }
                                                  }
                                                }
                                                class E {
                                                  constructor() {
                                                    return closure_6.useReducedMotion;
                                                  }
                                                }
                                                let obj3 = { style: tmp39, children: null };
                                                const items1 = [tmp40, tmp42, tmp46];
                                                obj3.children = items1;
                                                class H {
                                                  constructor() {
                                                    num = 0;
                                                    if (!closure_5) {
                                                      tmp = skipIntro;
                                                      num = 0;
                                                      if (!skipIntro) {
                                                        tmp2 = closure_2;
                                                        num = 0;
                                                        if (!closure_2) {
                                                          tmp3 = closure_3;
                                                          num = 0;
                                                          if (!closure_3) {
                                                            tmp4 = globalThis;
                                                            _Math = Math;
                                                            tmp5 = earnedCount;
                                                            num2 = 1;
                                                            num = Math.max(earnedCount - 1, 0);
                                                          }
                                                        }
                                                      }
                                                    }
                                                    return num;
                                                  }
                                                }
                                                cResult[41] = tmp39;
                                                cResult[42] = tmp40;
                                                cResult[43] = tmp42;
                                                cResult[44] = tmp46;
                                                cResult[45] = tmp50;
                                                tmp48 = tmp50;
                                              }
                                            }
                                          }
                                          class E {
                                            constructor() {
                                              return closure_6.useReducedMotion;
                                            }
                                          }
                                          cResult[36] = tmp23Result;
                                          cResult[37] = tmp5;
                                          cResult[38] = tmp37;
                                          class H {
                                            constructor() {
                                              num = 0;
                                              if (!closure_5) {
                                                tmp = skipIntro;
                                                num = 0;
                                                if (!skipIntro) {
                                                  tmp2 = closure_2;
                                                  num = 0;
                                                  if (!closure_2) {
                                                    tmp3 = closure_3;
                                                    num = 0;
                                                    if (!closure_3) {
                                                      tmp4 = globalThis;
                                                      _Math = Math;
                                                      tmp5 = earnedCount;
                                                      num2 = 1;
                                                      num = Math.max(earnedCount - 1, 0);
                                                    }
                                                  }
                                                }
                                              }
                                              return num;
                                            }
                                          }
                                          cResult[40] = null != tmp37;
                                          tmp46 = tmp47;
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                              class E {
                                constructor() {
                                  return closure_6.useReducedMotion;
                                }
                              }
                              tmp44[0] = customizationOption;
                              tmp44[1] = arr2;
                              tmp44[2] = selectedOptionId;
                              tmp44[3] = tmp4;
                              tmp44[4] = tmp5;
                              tmp44[5] = tmp20;
                              tmp44[6] = tmp30[1];
                              class H {
                                constructor() {
                                  num = 0;
                                  if (!closure_5) {
                                    tmp = skipIntro;
                                    num = 0;
                                    if (!skipIntro) {
                                      tmp2 = closure_2;
                                      num = 0;
                                      if (!closure_2) {
                                        tmp3 = closure_3;
                                        num = 0;
                                        if (!closure_3) {
                                          tmp4 = globalThis;
                                          _Math = Math;
                                          tmp5 = earnedCount;
                                          num2 = 1;
                                          num = Math.max(earnedCount - 1, 0);
                                        }
                                      }
                                    }
                                  }
                                  return num;
                                }
                              }
                              const tmp45 = closure_7(tmp19(tmp2[7]), tmp44);
                              cResult[28] = customizationOption;
                              cResult[29] = tmp4;
                              cResult[30] = tmp5;
                              cResult[31] = tmp20;
                              cResult[32] = onSelectOption;
                              cResult[33] = selectedOptionId;
                              cResult[34] = arr2;
                              cResult[35] = tmp45;
                              tmp42 = tmp45;
                            }
                          }
                        }
                        class E {
                          constructor() {
                            return closure_6.useReducedMotion;
                          }
                        }
                        cResult[23] = customizationOption;
                        cResult[24] = diff;
                        cResult[25] = tmp7;
                        class H {
                          constructor() {
                            num = 0;
                            if (!closure_5) {
                              tmp = skipIntro;
                              num = 0;
                              if (!skipIntro) {
                                tmp2 = closure_2;
                                num = 0;
                                if (!closure_2) {
                                  tmp3 = closure_3;
                                  num = 0;
                                  if (!closure_3) {
                                    tmp4 = globalThis;
                                    _Math = Math;
                                    tmp5 = earnedCount;
                                    num2 = 1;
                                    num = Math.max(earnedCount - 1, 0);
                                  }
                                }
                              }
                            }
                            return num;
                          }
                        }
                        cResult[27] = tmp7;
                        tmp40 = tmp41;
                      }
                      const items2 = [, ];
                      class E {
                        constructor() {
                          return closure_6.useReducedMotion;
                        }
                      }
                      items2[1] = style;
                      cResult[20] = style;
                      cResult[21] = tmp8.container;
                      cResult[22] = items2;
                      class H {
                        constructor() {
                          num = 0;
                          if (!closure_5) {
                            tmp = skipIntro;
                            num = 0;
                            if (!skipIntro) {
                              tmp2 = closure_2;
                              num = 0;
                              if (!closure_2) {
                                tmp3 = closure_3;
                                num = 0;
                                if (!closure_3) {
                                  tmp4 = globalThis;
                                  _Math = Math;
                                  tmp5 = earnedCount;
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
                    let found = arr2.find((optionId) => optionId.optionId === selectedOptionId);
                    if (found == null) {
                      found = arr2[0];
                    }
                    cResult[17] = selectedOptionId;
                    class H {
                      constructor() {
                        num = 0;
                        if (!closure_5) {
                          tmp = skipIntro;
                          num = 0;
                          if (!skipIntro) {
                            tmp2 = closure_2;
                            num = 0;
                            if (!closure_2) {
                              tmp3 = closure_3;
                              num = 0;
                              if (!closure_3) {
                                tmp4 = globalThis;
                                _Math = Math;
                                tmp5 = earnedCount;
                                num2 = 1;
                                num = Math.max(earnedCount - 1, 0);
                              }
                            }
                          }
                        }
                        return num;
                      }
                    }
                    cResult[19] = found;
                    tmp37 = found;
                    const tmpResult8 = selectedOptionId(tmp2[21]);
                  }
                }
              }
              const obj4 = { visibleTraitOptions: arr2, selectedOptionId, onSelectOption, paused: tmp32 };
              cResult[12] = onSelectOption;
              cResult[13] = selectedOptionId;
              cResult[14] = tmp32;
              cResult[15] = arr2;
              cResult[16] = obj4;
              tmp34 = obj4;
              tmp19 = importDefault;
            }
          }
        }
      }
      class H {
        constructor() {
          num = 0;
          if (!closure_5) {
            tmp = skipIntro;
            num = 0;
            if (!skipIntro) {
              tmp2 = closure_2;
              num = 0;
              if (!closure_2) {
                tmp3 = closure_3;
                num = 0;
                if (!closure_3) {
                  tmp4 = globalThis;
                  _Math = Math;
                  tmp5 = earnedCount;
                  num2 = 1;
                  num = Math.max(earnedCount - 1, 0);
                }
              }
            }
          }
          return num;
        }
      }
      cResult[6] = earnedCount;
      cResult[7] = null != selectedOptionId;
      cResult[8] = stateFromStores;
      cResult[9] = isScreenReaderEnabled;
      cResult[10] = tmp6;
      cResult[11] = H;
      tmp18 = H;
      const tmpResult6 = selectedOptionId(tmp2[17]);
    }
  }
  const obj5 = { customizationOption, options, savedOptionId };
  cResult[2] = customizationOption;
  cResult[3] = options;
  cResult[4] = savedOptionId;
  cResult[5] = obj5;
  tmp14 = obj5;
  const tmpResult5 = selectedOptionId(stateFromStores[16]);
}) : (function TraitPicker(selectedOptionId) {
  ({ customizationOption, disabled } = selectedOptionId);
  if (disabled === undefined) {
    disabled = false;
  }
  selectedOptionId = selectedOptionId.selectedOptionId;
  ({ hideDescriptionAndRarity, options, savedOptionId } = selectedOptionId);
  if (hideDescriptionAndRarity === undefined) {
    hideDescriptionAndRarity = false;
  }
  let flag = selectedOptionId.skipIntro;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = selectedOptionId.showEarnedCount;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const onSelectOption = selectedOptionId.onSelectOption;
  earnedCount = undefined;
  let useReducedMotion;
  const tmp = closure_11();
  let items = [useReducedMotion];
  dependencyMap = selectedOptionId(504).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj = selectedOptionId(504);
  _slicedToArray = selectedOptionId(5253).useIsScreenReaderEnabled();
  let obj2 = selectedOptionId(5253);
  const traitPickerOptions = selectedOptionId(12947).useTraitPickerOptions({ customizationOption, options, savedOptionId });
  ({ visibleTraitOptions, earnedCount } = traitPickerOptions);
  closure_5 = tmp5;
  const tmp7 = flag(5585)(() => {
    let num = 0;
    if (!closure_5) {
      num = 0;
      if (!flag) {
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
  let tmp8 = tmp5;
  if (null == selectedOptionId) {
    tmp8 = 0 === tmp7;
  }
  useReducedMotion = tmp8;
  let obj3 = selectedOptionId(12947);
  class C {
    constructor() {
      obj = { duration: c9, easing: null };
      tmp = closure_0;
      tmp2 = closure_2;
      Easing = closure_0(closure_2[19]).Easing;
      obj.easing = Easing.out(closure_0(closure_2[19]).Easing.cubic);
      obj2 = closure_0(closure_2[20]);
      num = 0;
      tmp3 = closure_6;
      if (closure_6) {
        num = 1;
      }
      obj1 = { opacity: obj2.withTiming(num, obj), transform: null };
      tmpResult = tmp(tmp2[20]);
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
  const tmp2Result = selectedOptionId(5038);
  C.__closure = { INTRO_DETAILS_DURATION_MS: v600, Easing: selectedOptionId(5038).Easing, withTiming: selectedOptionId(5192).withTiming, isDetailsVisible: tmp8, INTRO_DETAILS_OFFSET_Y: PX_12 };
  C.__workletHash = 13382203050567;
  C.__initData = __initData2;
  const animatedStyle = tmp2Result.useAnimatedStyle(C);
  const obj4 = { INTRO_DETAILS_DURATION_MS: v600, Easing: selectedOptionId(5038).Easing, withTiming: selectedOptionId(5192).withTiming, isDetailsVisible: tmp8, INTRO_DETAILS_OFFSET_Y: PX_12 };
  [tmp11, tmp12] = earnedCount.useState(tmp7);
  const tmp10 = _slicedToArray(earnedCount.useState(tmp7), 2);
  const obj5 = { visibleTraitOptions, selectedOptionId, onSelectOption, paused: null };
  let tmp13 = disabled;
  if (!disabled) {
    let tmp14 = !tmp5;
    if (!tmp5) {
      tmp14 = tmp11 > 0;
    }
    tmp13 = tmp14;
  }
  obj5.paused = tmp13;
  const autoSelectTraitOption = selectedOptionId(12948).useAutoSelectTraitOption(obj5);
  let diff = earnedCount;
  if (null == selectedOptionId) {
    diff = earnedCount - tmp11;
  }
  let found = visibleTraitOptions.find((optionId) => optionId.optionId === selectedOptionId);
  if (found == null) {
    found = visibleTraitOptions[0];
  }
  const obj6 = { style: null, children: null };
  const items1 = [tmp.container, selectedOptionId.style];
  obj6.style = items1;
  if (flag2) {
    const obj7 = { customizationOption, earnedCount: diff, totalCount: traitPickerOptions.totalCount };
    flag2 = closure_7(closure_12, obj7);
  }
  const items2 = [flag2, closure_7(flag(12945), { customizationOption, options: visibleTraitOptions, selectedOptionId, disabled, hideRarity: hideDescriptionAndRarity, introStartIndex: tmp7, onIntroStep: tmp12, onSelectOption }), ];
  let tmp22Result = null != found;
  if (tmp22Result) {
    const obj8 = { style: null, children: null };
    const items3 = [tmp.details, animatedStyle];
    obj8.style = items3;
    const obj9 = { asset: found, hideDescriptionAndRarity };
    obj8.children = closure_7(tmp6(12949), obj9);
    tmp22Result = closure_7(tmp6(5038).View, obj8);
  }
  items2[2] = tmp22Result;
  obj6.children = items2;
  return closure_8(closure_5, obj6);
});