// discord_app/modules/checkpoint/native/components/customization/TraitOptionList.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../../../reanimated/ReanimatedRexport.tsx";
import HapticUtils from "../../../../haptics/HapticUtils.native.tsx";
import inlineStyles from "../../../../../../_runtime/07559_inlineStyles.js";
import CheckpointCustomizationUtils from "../../../CheckpointCustomizationUtils.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../../a11y/AccessibilityStore.tsx";

const require = globalThis.__r;
const inlineStylesDefault = inlineStyles;

require = fn;
const View = fn(17).View;
const CheckpointConstants = fn(5434);
({ CHECKPOINT_PRIMARY: metroRequire, TRAIT_OPTION_HEIGHT } = CheckpointConstants);
const TRAIT_OPTION_WIDTH = CheckpointConstants.TRAIT_OPTION_WIDTH;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const PX_12 = nativeDefault.space.PX_12;
const PX_16 = nativeDefault.space.PX_16;
let closure_12 = TRAIT_OPTION_WIDTH + PX_12;
const createStyles = fn(5091);
let closure_13 = createStyles.createStyles({
  assetList: { paddingHorizontal: PX_16 },
  radioGroup: { flexDirection: "row", gap: PX_12 },
  selectorOverlay: {
    position: "absolute",
    left: PX_16,
    top: 0,
    width: TRAIT_OPTION_WIDTH,
    height: TRAIT_OPTION_HEIGHT,
  },
});
let ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? function SelectedWindow() {
      const cResult = c.c(3);
      const tmp4 = closure_13();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = {
          points: CheckpointCustomizationUtils.TRAIT_OPTION_SHAPE_POINTS,
          fill: "transparent",
          stroke,
          strokeWidth: CheckpointCustomizationUtils.TRAIT_OPTION_STROKE_WIDTH,
        };
        const tmp8 = options(inlineStyles.Polygon, obj2);
        cResult[0] = tmp8;
        let first = tmp8;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.selectorOverlay) {
        const size = {
          width: TRAIT_OPTION_WIDTH,
          height: TRAIT_OPTION_HEIGHT,
          style: tmp4.selectorOverlay,
          pointerEvents: "none",
          children: first,
        };
        const tmp14 = options(inlineStylesDefault, size);
        cResult[1] = tmp4.selectorOverlay;
        cResult[2] = tmp14;
        let tmp9 = tmp14;
      } else {
        tmp9 = cResult[2];
      }
      return tmp9;
    }
  : function SelectedWindow() {
      const size = {
        width: TRAIT_OPTION_WIDTH,
        height: TRAIT_OPTION_HEIGHT,
        style: closure_13().selectorOverlay,
        pointerEvents: "none",
        children: null,
      };
      const tmp = closure_13();
      const tmp2 = inlineStylesDefault;
      size.children = options(inlineStyles.Polygon, {
        points: CheckpointCustomizationUtils.TRAIT_OPTION_SHAPE_POINTS,
        fill: "transparent",
        stroke,
        strokeWidth: CheckpointCustomizationUtils.TRAIT_OPTION_STROKE_WIDTH,
      });
      return options(tmp2, size);
    };
let closure_15 = { code: "function TraitOptionListTsx1(){const{introIndex}=this.__closure;return introIndex.get();}" };
const __initData = {
  code: "function TraitOptionListTsx2(index,previousIndex){const{scrollTo,scrollViewRef,ASSET_ITEM_STEP}=this.__closure;if(previousIndex!=null&&index!==previousIndex){scrollTo(scrollViewRef,index*ASSET_ITEM_STEP,0,false);}}",
};
let closure_17 = {
  code: "function TraitOptionListTsx3(finished){const{runOnJS,onIntroStep,target}=this.__closure;if(finished===true){runOnJS(onIntroStep)(target);}}",
};
const __initData2 = {
  code: "function TraitOptionListTsx4(){const{introIndex}=this.__closure;return introIndex.get();}",
};
const __initData3 = {
  code: "function TraitOptionListTsx5(index,previousIndex){const{scrollTo,scrollViewRef,ASSET_ITEM_STEP}=this.__closure;if(previousIndex!=null&&index!==previousIndex)scrollTo(scrollViewRef,index*ASSET_ITEM_STEP,0,false);}",
};
let closure_20 = {
  code: "function TraitOptionListTsx6(finished){const{runOnJS,onIntroStep,target}=this.__closure;if(finished===true)runOnJS(onIntroStep)(target);}",
};
ReactCompilerGating = fn(558);
let size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/TraitOptionList.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function TraitOptionList(selectedOptionId) {
      const cResult = options(disabled[8]).c(55);
      ({ customizationOption, options } = selectedOptionId);
      selectedOptionId = selectedOptionId.selectedOptionId;
      disabled = selectedOptionId.disabled;
      ({ hideRarity: noop, introStartIndex } = selectedOptionId);
      const onIntroStep = selectedOptionId.onIntroStep;
      const onSelectOption = selectedOptionId.onSelectOption;
      const tmp4 = closure_13();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [onIntroStep];
        let fn = function s() {
          return onIntroStep.useReducedMotion;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      let obj = options(disabled[8]);
      closure_7 = options(disabled[11]).useStateFromStores(tmp5, tmp6);
      const tmpResult = options(disabled[11]);
      const isScreenReaderEnabled = options(disabled[12]).useIsScreenReaderEnabled();
      const tmpResult6 = options(disabled[12]);
      const animatedRef = options(disabled[13]).useAnimatedRef();
      const ref = noop.useRef(false);
      closure_11 = noop.useRef(null);
      if (cResult[2] === options) {
        if (cResult[3] === selectedOptionId) {
          let _Math = Math;
          let bound = Math.max(cResult[4], 0);
          if (introStartIndex > 0) {
            bound = introStartIndex;
          }
          const tmp14 = selectedOptionId(tmp2[14]);
          let _Math2 = Math;
          const bound1 = Math.max(closure_11, tmp13(tmp2[15])().width - closure_11 - isScreenReaderEnabled);
          const tmp14Result = selectedOptionId(tmp2[14])(bound);
          const sharedValue = options(tmp2[13]).useSharedValue(introStartIndex);
          const tmpResult8 = options(tmp2[13]);
          class F {
            constructor() {
              return closure_12.get();
            }
          }
          let obj2 = { introIndex: sharedValue };
          F.__closure = obj2;
          F.__workletHash = 13442585118467;
          F.__initData = cancelScrollSettle;
          class J {
            constructor(arg0, arg1) {
              tmp = null != arg1 && selectedOptionId !== arg1;
              if (tmp) {
                tmp2 = closure_0;
                tmp3 = closure_2;
                obj = closure_0(closure_2[13]);
                tmp4 = closure_9;
                tmp5 = closure_12;
                flag = false;
                num = 0;
                tmp6 = obj;
                scrollToResult = obj.scrollTo(closure_9, selectedOptionId * closure_12, 0, false);
              }
              return;
            }
          }
          let obj3 = { scrollTo: options(tmp2[13]).scrollTo, scrollViewRef: animatedRef, ASSET_ITEM_STEP: sharedValue };
          J.__closure = obj3;
          J.__workletHash = 7788803677354;
          J.__initData = __initData;
          const animatedReaction = options(tmp2[13]).useAnimatedReaction(F, J);
          if (cResult[7] === sharedValue) {
            if (cResult[8] === introStartIndex) {
              if (cResult[9] === onIntroStep) {
                let tmp24 = cResult[10];
                let tmp25 = cResult[11];
              }
              const effect = noop.useEffect(tmp24, tmp25);
              if (cResult[12] === onSelectOption) {
                if (cResult[13] === selectedOptionId) {
                  let tmp27 = cResult[14];
                }
                closure_13 = tmp27;
                if (cResult[15] === disabled) {
                  if (cResult[16] === isScreenReaderEnabled) {
                    if (cResult[17] === options) {
                      if (cResult[18] === tmp27) {
                        let tmp28 = cResult[19];
                      }
                      closure_14 = tmp28;
                      cancelScrollSettle = function cancelScrollSettle() {
                        if (null != closure_11.current) {
                          const _clearTimeout = clearTimeout;
                          clearTimeout(closure_11.current);
                          closure_11.current = null;
                        }
                      };
                      if (cResult[20] === disabled) {
                        if (cResult[21] === isScreenReaderEnabled) {
                          let tmp29 = cResult[22];
                        }
                        const effect1 = noop.useEffect(() => cancelScrollSettle, tmp29);
                        const tmp13Result = tmp13(tmp2[13]);
                        let result = tmp14Result * tmp21;
                        if (cResult[23] !== result) {
                          const point = { x: result, y: 0 };
                          cResult[23] = result;
                          cResult[24] = point;
                          let tmp34 = point;
                        } else {
                          tmp34 = cResult[24];
                        }
                        if (cResult[25] !== bound1) {
                          const obj4 = { paddingRight: bound1 };
                          cResult[25] = bound1;
                          cResult[26] = obj4;
                          let tmp37 = obj4;
                        } else {
                          tmp37 = cResult[26];
                        }
                        if (cResult[27] === tmp4.assetList) {
                          if (cResult[28] === tmp37) {
                            let tmp38 = cResult[29];
                          }
                          if (cResult[30] !== customizationOption) {
                            const customizationOptionName = options(tmp2[10]).getCustomizationOptionName(
                              customizationOption,
                            );
                            cResult[30] = customizationOption;
                            cResult[31] = customizationOptionName;
                            let tmp39 = customizationOptionName;
                            const tmpResult10 = options(tmp2[10]);
                          } else {
                            tmp39 = cResult[31];
                          }
                          const mapped = options.map((traitOption, index) => {
                            closure_0 = traitOption;
                            closure_1 = index;
                            let obj = {
                              traitOption,
                              accessibilityLabel: null,
                              isSelected: null,
                              showSelectedBorder: null,
                              hideCornerFlag: null,
                              disabled: null,
                              onPress: null,
                            };
                            const tmp2 = selectedOptionId(disabled[18]);
                            obj.accessibilityLabel = options(disabled[10]).getAssetAccessibilityLabel(
                              traitOption,
                              hideCornerFlag,
                            );
                            obj.isSelected = traitOption.optionId === closure_1;
                            let tmp5 = isScreenReaderEnabled;
                            if (isScreenReaderEnabled) {
                              tmp5 = traitOption.optionId === tmp4;
                            }
                            obj.showSelectedBorder = tmp5;
                            obj.hideCornerFlag = hideCornerFlag;
                            obj.disabled = disabled;
                            obj.onPress = function onPress() {
                              ReanimatedRexport.cancelAnimation(sharedValue);
                              if (typeof cancelScrollSettle === "function") {
                                if (null != ref.current) {
                                  const _clearTimeout = clearTimeout;
                                  clearTimeout(ref.current);
                                  ref.current = null;
                                }
                                closure_10.current = false;
                                closure_13(closure_0);
                                if (!isScreenReaderEnabled) {
                                  const current = animatedRef.current;
                                  if (current != null) {
                                    const obj2 = { x: closure_1 * closure_12, animated: !closure_7 };
                                    current.scrollTo(obj2);
                                  }
                                }
                              } else {
                                throw new TypeError("Trying to call a non-function");
                              }
                            };
                            return animatedRef(tmp2, obj, traitOption.optionId);
                          });
                          if (cResult[32] === introStartIndex) {
                            if (cResult[33] === tmp4.radioGroup) {
                              if (cResult[34] === tmp39) {
                                if (cResult[35] === mapped) {
                                  let tmp42 = cResult[36];
                                }
                                function scheduleScrollSettle(nativeEvent) {
                                  const x = nativeEvent.nativeEvent.contentOffset.x;
                                  if (typeof cancelScrollSettle === "function") {
                                    if (null != closure_11.current) {
                                      const _clearTimeout = clearTimeout;
                                      clearTimeout(closure_11.current);
                                      closure_11.current = null;
                                    }
                                    const _setTimeout = setTimeout;
                                    closure_11.current = setTimeout(() => {
                                      closure_11.current = null;
                                      closure_10.current = false;
                                      closure_14(closure_0);
                                    }, 100);
                                  } else {
                                    throw new TypeError("Trying to call a non-function");
                                  }
                                }
                                function handleMomentumScrollEnd(nativeEvent) {
                                  if (typeof cancelScrollSettle === "function") {
                                    if (null != closure_11.current) {
                                      const _clearTimeout = clearTimeout;
                                      clearTimeout(closure_11.current);
                                      closure_11.current = null;
                                    }
                                    if (ref.current) {
                                      tmp5.current = false;
                                      closure_14(nativeEvent.nativeEvent.contentOffset.x);
                                    }
                                  } else {
                                    throw new TypeError("Trying to call a non-function");
                                  }
                                }
                                function handleScrollBeginDrag() {
                                  if (!isScreenReaderEnabled) {
                                    ReanimatedRexport.cancelAnimation(sharedValue);
                                    if (typeof cancelScrollSettle === "function") {
                                      if (null != closure_11.current) {
                                        const _clearTimeout = clearTimeout;
                                        clearTimeout(closure_11.current);
                                        closure_11.current = null;
                                      }
                                      closure_10.current = true;
                                    } else {
                                      throw new TypeError("Trying to call a non-function");
                                    }
                                  }
                                }
                                if (cResult[37] === cancelScrollSettle) {
                                  if (cResult[38] === handleMomentumScrollEnd) {
                                    if (cResult[39] === handleScrollBeginDrag) {
                                      if (cResult[40] === scheduleScrollSettle) {
                                        if (cResult[41] === animatedRef) {
                                          if (cResult[42] === tmp34) {
                                            if (cResult[43] === tmp35) {
                                              if (cResult[44] === tmp36) {
                                                if (cResult[45] === tmp38) {
                                                  if (cResult[46] === tmp42) {
                                                    if (cResult[47] === tmp13Result.ScrollView) {
                                                      let tmp45 = cResult[48];
                                                    }
                                                    if (cResult[49] !== isScreenReaderEnabled) {
                                                      let tmp49 = !isScreenReaderEnabled;
                                                      if (!isScreenReaderEnabled) {
                                                        tmp49 = animatedRef(closure_14, {});
                                                      }
                                                      cResult[49] = isScreenReaderEnabled;
                                                      cResult[50] = tmp49;
                                                      let tmp48 = tmp49;
                                                    } else {
                                                      tmp48 = cResult[50];
                                                    }
                                                    if (cResult[51] === introStartIndex) {
                                                      if (cResult[52] === tmp45) {
                                                        if (cResult[53] === tmp48) {
                                                          let tmp52 = cResult[54];
                                                        }
                                                        return tmp52;
                                                      }
                                                    }
                                                    const obj6 = { children: null };
                                                    const items1 = [tmp45, tmp48];
                                                    obj6.children = items1;
                                                    const tmp54 = ref(introStartIndex, obj6);
                                                    cResult[51] = introStartIndex;
                                                    cResult[52] = tmp45;
                                                    class F {
                                                      constructor() {
                                                        return closure_12.get();
                                                      }
                                                    }
                                                    cResult[54] = tmp54;
                                                    tmp52 = tmp54;
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                }
                                const obj7 = {
                                  ref: animatedRef,
                                  horizontal: true,
                                  contentOffset: tmp34,
                                  scrollEnabled: tmp35,
                                  showsHorizontalScrollIndicator: false,
                                  decelerationRate: "fast",
                                  snapToInterval: tmp36,
                                  onScrollBeginDrag: handleScrollBeginDrag,
                                  onScrollEndDrag: scheduleScrollSettle,
                                  onMomentumScrollBegin: cancelScrollSettle,
                                  onMomentumScrollEnd: handleMomentumScrollEnd,
                                  contentContainerStyle: null,
                                  children: null,
                                };
                                class F {
                                  constructor() {
                                    return closure_12.get();
                                  }
                                }
                                obj7.children = tmp42;
                                const tmp47 = animatedRef(tmp13Result.ScrollView, obj7);
                                cResult[37] = cancelScrollSettle;
                                cResult[38] = handleMomentumScrollEnd;
                                class J {
                                  constructor(arg0, arg1) {
                                    tmp = null != arg1 && selectedOptionId !== arg1;
                                    if (tmp) {
                                      tmp2 = closure_0;
                                      tmp3 = closure_2;
                                      obj = closure_0(closure_2[13]);
                                      tmp4 = closure_9;
                                      tmp5 = closure_12;
                                      flag = false;
                                      num = 0;
                                      tmp6 = obj;
                                      scrollToResult = obj.scrollTo(closure_9, selectedOptionId * closure_12, 0, false);
                                    }
                                    return;
                                  }
                                }
                                cResult[40] = scheduleScrollSettle;
                                cResult[41] = animatedRef;
                                cResult[42] = tmp34;
                                cResult[43] = tmp35;
                                cResult[44] = tmp36;
                                cResult[45] = tmp38;
                                class G {
                                  constructor() {
                                    if (0 !== introStartIndex) {
                                      tmp2 = globalThis;
                                      _Array = Array;
                                      obj = { length: null };
                                      obj.length = tmp;
                                      tmp4 = closure_12;
                                      tmp5 = closure_0;
                                      tmp6 = closure_2;
                                      arr1 = Array.from(obj, (arg0, arg1) => {
                                        const diff = closure_4 - arg1 - 1;
                                        closure_0 = diff;
                                        let obj = options(4811);
                                        const obj3 = { duration: 100, easing: null };
                                        const Easing = options(4811).Easing;
                                        obj3.easing = Easing.out(options(4811).Easing.cubic);
                                        const fn = function o(arg0) {
                                          if (true === arg0) {
                                            options(disabled[13]).runOnJS(onIntroStep)(diff);
                                            const obj = options(disabled[13]);
                                          }
                                        };
                                        const obj2 = options(5092);
                                        fn.__closure = { runOnJS: options(4811).runOnJS, onIntroStep, target: diff };
                                        fn.__workletHash = 1164546249137;
                                        fn.__initData = __initData;
                                        return obj.withDelay(
                                          250,
                                          obj2.withTiming(diff, obj3, "respect-motion-settings", fn),
                                        );
                                      });
                                      tmp7 = closure_0(closure_2[13]);
                                      withSequence = tmp7.withSequence;
                                      items = [];
                                      tmp8 = items;
                                      num = 0;
                                      arraySpreadResult = HermesBuiltin.arraySpread(arr1, 0);
                                      tmp10 = withSequence;
                                      tmp11 = items;
                                      tmp12 = tmp7;
                                      result = closure_12.set(HermesBuiltin.apply(items, tmp7));
                                      return () => options(disabled[13]).cancelAnimation(sharedValue);
                                    } else {
                                      return;
                                    }
                                  }
                                }
                                cResult[47] = tmp13Result.ScrollView;
                                cResult[48] = tmp47;
                                tmp45 = tmp47;
                              }
                            }
                          }
                          const obj8 = {
                            style: tmp4.radioGroup,
                            accessibilityRole: "radiogroup",
                            accessibilityLabel: tmp39,
                            children: mapped,
                          };
                          const tmp44 = animatedRef(introStartIndex, obj8);
                          cResult[32] = introStartIndex;
                          cResult[33] = tmp4.radioGroup;
                          class F {
                            constructor() {
                              return closure_12.get();
                            }
                          }
                          cResult[34] = tmp39;
                          cResult[35] = mapped;
                          cResult[36] = tmp44;
                          tmp42 = tmp44;
                        }
                        const items2 = [tmp4.assetList, tmp37];
                        class F {
                          constructor() {
                            return closure_12.get();
                          }
                        }
                        cResult[28] = tmp37;
                        cResult[29] = items2;
                        tmp38 = items2;
                      }
                      const items3 = [disabled, isScreenReaderEnabled];
                      cResult[20] = disabled;
                      cResult[21] = isScreenReaderEnabled;
                      cResult[22] = items3;
                      tmp29 = items3;
                    }
                  }
                }
                function handleScrollSettled(arg0) {
                  if (!disabled) {
                    if (!isScreenReaderEnabled) {
                      const _Math = Math;
                      const _Math2 = Math;
                      const _Math3 = Math;
                      const tmp6 =
                        options[
                          Math.max(Math, 0, Math.min(Math, Math.round(Math, arg0 / closure_12), options.length - 1))
                        ];
                      if (null != tmp6) {
                        closure_13(tmp6);
                      }
                    }
                  }
                }
                cResult[15] = disabled;
                cResult[16] = isScreenReaderEnabled;
                cResult[17] = options;
                cResult[18] = tmp27;
                cResult[19] = handleScrollSettled;
                tmp28 = handleScrollSettled;
              }
              function selectOption(optionId) {
                if (optionId.optionId !== selectedOptionId) {
                  onSelectOption(optionId.trait, optionId.optionId);
                  const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
                }
              }
              cResult[12] = onSelectOption;
              cResult[13] = selectedOptionId;
              cResult[14] = selectOption;
              tmp27 = selectOption;
            }
          }
          class G {
            constructor() {
              if (0 !== introStartIndex) {
                tmp2 = globalThis;
                _Array = Array;
                obj = { length: null };
                obj.length = tmp;
                tmp4 = closure_12;
                tmp5 = closure_0;
                tmp6 = closure_2;
                arr1 = Array.from(obj, (arg0, arg1) => {
                  const diff = closure_4 - arg1 - 1;
                  closure_0 = diff;
                  let obj = options(4811);
                  const obj3 = { duration: 100, easing: null };
                  const Easing = options(4811).Easing;
                  obj3.easing = Easing.out(options(4811).Easing.cubic);
                  const fn = function o(arg0) {
                    if (true === arg0) {
                      options(disabled[13]).runOnJS(onIntroStep)(diff);
                      const obj = options(disabled[13]);
                    }
                  };
                  const obj2 = options(5092);
                  fn.__closure = { runOnJS: options(4811).runOnJS, onIntroStep, target: diff };
                  fn.__workletHash = 1164546249137;
                  fn.__initData = __initData;
                  return obj.withDelay(250, obj2.withTiming(diff, obj3, "respect-motion-settings", fn));
                });
                tmp7 = closure_0(closure_2[13]);
                withSequence = tmp7.withSequence;
                items = [];
                tmp8 = items;
                num = 0;
                arraySpreadResult = HermesBuiltin.arraySpread(arr1, 0);
                tmp10 = withSequence;
                tmp11 = items;
                tmp12 = tmp7;
                result = closure_12.set(HermesBuiltin.apply(items, tmp7));
                return () => options(disabled[13]).cancelAnimation(sharedValue);
              } else {
                return;
              }
            }
          }
          const items4 = [sharedValue, introStartIndex, onIntroStep];
          cResult[7] = sharedValue;
          cResult[8] = introStartIndex;
          cResult[9] = onIntroStep;
          cResult[10] = G;
          cResult[11] = items4;
          tmp25 = items4;
          tmp24 = G;
          const tmpResult9 = options(tmp2[13]);
        }
      }
      if (cResult[5] !== selectedOptionId) {
        class D {
          constructor(arg0) {
            return selectedOptionId.optionId === selectedOptionId;
          }
        }
        cResult[5] = selectedOptionId;
        cResult[6] = D;
      } else {
        class D {
          constructor(arg0) {
            return selectedOptionId.optionId === selectedOptionId;
          }
        }
      }
      const tmpResult7 = options(disabled[13]);
      cResult[2] = options;
      cResult[3] = selectedOptionId;
      cResult[4] = options.findIndex(D);
      const findIndexResult = options.findIndex(D);
    }
  : function TraitOptionList(options) {
      options = options.options;
      ({ selectedOptionId: importDefault, disabled } = options);
      ({ hideRarity: noop, introStartIndex } = options);
      const onIntroStep = options.onIntroStep;
      const onSelectOption = options.onSelectOption;
      let sharedValue;
      function cancelScrollSettle() {
        if (null != closure_11.current) {
          const _clearTimeout = clearTimeout;
          clearTimeout(closure_11.current);
          closure_11.current = null;
        }
      }
      let tmp = cancelScrollSettle();
      let items = [onIntroStep];
      closure_7 = options(disabled[11]).useStateFromStores(items, () => onIntroStep.useReducedMotion);
      let obj = options(disabled[11]);
      const isScreenReaderEnabled = options(disabled[12]).useIsScreenReaderEnabled();
      let obj2 = options(disabled[12]);
      const animatedRef = options(disabled[13]).useAnimatedRef();
      const ref = noop.useRef(false);
      closure_11 = noop.useRef(null);
      let bound = Math.max(
        options.findIndex((optionId) => optionId.optionId === importDefault),
        0,
      );
      let obj3 = options(disabled[13]);
      if (introStartIndex > 0) {
        bound = introStartIndex;
      }
      const tmp8 = require("useInitialValue");
      const bound1 = Math.max(closure_11, require("useWindowDimensions")().width - closure_11 - isScreenReaderEnabled);
      const tmp8Result = require("useInitialValue")(bound);
      sharedValue = options(disabled[13]).useSharedValue(introStartIndex);
      const tmp2Result = options(disabled[13]);
      class A {
        constructor() {
          return closure_12.get();
        }
      }
      A.__closure = { introIndex: sharedValue };
      A.__workletHash = 15094459786918;
      A.__initData = __initData2;
      let fn = function y(arg0, arg1) {
        if (tmp) {
          const obj = ReanimatedRexport;
          obj.scrollTo(animatedRef, arg0 * closure_12, 0, false);
        }
        tmp = null != arg1 && arg0 !== arg1;
      };
      const tmp2Result3 = options(disabled[13]);
      fn.__closure = {
        scrollTo: options(disabled[13]).scrollTo,
        scrollViewRef: animatedRef,
        ASSET_ITEM_STEP: sharedValue,
      };
      fn.__workletHash = 6994074541899;
      fn.__initData = __initData3;
      const animatedReaction = tmp2Result3.useAnimatedReaction(A, fn);
      const items1 = [sharedValue, introStartIndex, onIntroStep];
      const effect = noop.useEffect(() => {
        if (0 !== introStartIndex) {
          const _Array = Array;
          let obj = { length: tmp };
          const tmp7 = ReanimatedRexport;
          const withSequence = tmp7.withSequence;
          const items = [];
          HermesBuiltin.arraySpread(
            Array.from(obj, (arg0, arg1) => {
              const diff = closure_4 - arg1 - 1;
              closure_0 = diff;
              let obj = options(4811);
              const obj3 = { duration: 100, easing: null };
              const Easing = options(4811).Easing;
              obj3.easing = Easing.out(options(4811).Easing.cubic);
              const fn = function o(arg0) {
                if (true === arg0) {
                  options(disabled[13]).runOnJS(onIntroStep)(diff);
                  const obj = options(disabled[13]);
                }
              };
              const obj2 = options(5092);
              fn.__closure = { runOnJS: options(4811).runOnJS, onIntroStep, target: diff };
              fn.__workletHash = 1402521414610;
              fn.__initData = __initData;
              return obj.withDelay(250, obj2.withTiming(diff, obj3, "respect-motion-settings", fn));
            }),
            0,
          );
          const result = sharedValue.set(HermesBuiltin.apply(items, tmp7));
          return () => options(disabled[13]).cancelAnimation(sharedValue);
        }
      }, items1);
      const items2 = [disabled, isScreenReaderEnabled];
      const effect1 = noop.useEffect(() => cancelScrollSettle, items2);
      const obj6 = {
        ref: animatedRef,
        horizontal: true,
        contentOffset: { x: tmp8Result * sharedValue, y: 0 },
        scrollEnabled: !disabled,
        showsHorizontalScrollIndicator: false,
        decelerationRate: "fast",
        snapToInterval: null,
        onScrollBeginDrag: null,
        onScrollEndDrag: null,
        onMomentumScrollBegin: null,
        onMomentumScrollEnd: null,
        contentContainerStyle: null,
        children: null,
      };
      let tmp19;
      if (!isScreenReaderEnabled) {
        tmp19 = tmp12;
      }
      obj6.snapToInterval = tmp19;
      obj6.onScrollBeginDrag = function handleScrollBeginDrag() {
        if (!isScreenReaderEnabled) {
          ReanimatedRexport.cancelAnimation(sharedValue);
          if (null != closure_11.current) {
            const _clearTimeout = clearTimeout;
            clearTimeout(closure_11.current);
            closure_11.current = null;
          }
          closure_10.current = true;
        }
      };
      obj6.onScrollEndDrag = function scheduleScrollSettle(nativeEvent) {
        const x = nativeEvent.nativeEvent.contentOffset.x;
        if (null != closure_11.current) {
          const _clearTimeout = clearTimeout;
          clearTimeout(closure_11.current);
          closure_11.current = null;
        }
        closure_11.current = setTimeout(() => {
          closure_11.current = null;
          closure_10.current = false;
          if (!disabled) {
            if (!isScreenReaderEnabled) {
              const _Math = Math;
              const _Math2 = Math;
              const _Math3 = Math;
              const tmp6 =
                options[Math.max(Math, 0, Math.min(Math, Math.round(Math, tmp / sharedValue), options.length - 1))];
              if (null != tmp6) {
                if (tmp6.optionId !== importDefault) {
                  onSelectOption(tmp6.trait, tmp6.optionId);
                  const result = x(5056).triggerHapticFeedback(x(5056).HapticFeedbackTypes.IMPACT_LIGHT);
                  const obj = x(5056);
                }
              }
            }
          }
        }, 100);
      };
      obj6.onMomentumScrollBegin = cancelScrollSettle;
      obj6.onMomentumScrollEnd = function handleMomentumScrollEnd(arg0) {
        if (null != closure_11.current) {
          const _clearTimeout = clearTimeout;
          clearTimeout(closure_11.current);
          closure_11.current = null;
        }
        if (ref.current) {
          tmp4.current = false;
          if (!disabled) {
            if (!isScreenReaderEnabled) {
              const _Math = Math;
              const _Math2 = Math;
              const _Math3 = Math;
              const tmp12 =
                options[Math.max(Math, 0, Math.min(Math, Math.round(Math, tmp6 / closure_12), options.length - 1))];
              if (null != tmp12) {
                if (tmp12.optionId !== importDefault) {
                  onSelectOption(tmp12.trait, tmp12.optionId);
                  const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
                }
              }
            }
          }
        }
      };
      const items3 = [tmp.assetList, { paddingRight: bound1 }];
      obj6.contentContainerStyle = items3;
      const obj7 = { style: tmp.radioGroup, accessibilityRole: "radiogroup", accessibilityLabel: null, children: null };
      const obj5 = {
        scrollTo: options(disabled[13]).scrollTo,
        scrollViewRef: animatedRef,
        ASSET_ITEM_STEP: sharedValue,
      };
      tmp12 = sharedValue;
      const tmp16 = ref;
      obj7.accessibilityLabel = options(disabled[10]).getCustomizationOptionName(options.customizationOption);
      obj7.children = options.map((traitOption, index) => {
        closure_1 = index;
        let obj = {
          traitOption,
          accessibilityLabel: null,
          isSelected: null,
          showSelectedBorder: null,
          hideCornerFlag: null,
          disabled: null,
          onPress: null,
        };
        const tmp2 = require("TraitOptionItem");
        obj.accessibilityLabel = options(disabled[10]).getAssetAccessibilityLabel(traitOption, hideCornerFlag);
        obj.isSelected = traitOption.optionId === closure_1;
        let tmp5 = isScreenReaderEnabled;
        if (isScreenReaderEnabled) {
          tmp5 = traitOption.optionId === tmp4;
        }
        obj.showSelectedBorder = tmp5;
        obj.hideCornerFlag = hideCornerFlag;
        obj.disabled = disabled;
        obj.onPress = function onPress() {
          ReanimatedRexport.cancelAnimation(sharedValue);
          if (null != ref.current) {
            const _clearTimeout = clearTimeout;
            clearTimeout(ref.current);
            ref.current = null;
          }
          closure_10.current = false;
          if (traitOption.optionId !== importDefault) {
            onSelectOption(traitOption.trait, traitOption.optionId);
            const result = traitOption(5056).triggerHapticFeedback(traitOption(5056).HapticFeedbackTypes.IMPACT_LIGHT);
            const obj2 = traitOption(5056);
          }
          if (!isScreenReaderEnabled) {
            const current = animatedRef.current;
            if (current != null) {
              const obj3 = { x: closure_1 * closure_12, animated: !closure_7 };
              current.scrollTo(obj3);
            }
          }
        };
        return animatedRef(tmp2, obj, traitOption.optionId);
      });
      obj6.children = animatedRef(introStartIndex, obj7);
      const children = [animatedRef(require("ReanimatedRexport").ScrollView, obj6)];
      let tmp18Result = !isScreenReaderEnabled;
      if (!isScreenReaderEnabled) {
        tmp18Result = tmp18(closure_14, {});
      }
      children[1] = tmp18Result;
      return tmp16(introStartIndex, { children });
    };
export const TRAIT_OPTION_SPACING = PX_12;
export const CONTENT_INSET = PX_16;
