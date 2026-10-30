// === Module 13645: TraitOptionList ===

// Module 13645 (TraitOptionList)
import nativeDefault from "native" /* 575 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5090 */;
import HapticUtils from "HapticUtils" /* 5255 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6429 */;
import inlineStyles from "inlineStyles" /* 8023 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5010 */;

const require = globalThis.__r;
const inlineStylesDefault = inlineStyles;

require = fn;
function SelectedWindow() {
  const size = { width: TRAIT_OPTION_WIDTH, height: TRAIT_OPTION_HEIGHT, style: closure_13().selectorOverlay, pointerEvents: "none", children: null };
  const tmp = closure_13();
  const tmp2 = inlineStylesDefault;
  size.children = React7(inlineStyles.Polygon, { points: CheckpointCustomizationUtils.TRAIT_OPTION_SHAPE_POINTS, fill: "transparent", stroke, strokeWidth: CheckpointCustomizationUtils.TRAIT_OPTION_STROKE_WIDTH });
  return React7(tmp2, size);
}
const View = fn(17).View;
const CheckpointConstants = fn(6061);
({ CHECKPOINT_PRIMARY: metroRequire, TRAIT_OPTION_HEIGHT } = CheckpointConstants);
const TRAIT_OPTION_WIDTH = CheckpointConstants.TRAIT_OPTION_WIDTH;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const PX_12 = nativeDefault.space.PX_12;
const PX_16 = nativeDefault.space.PX_16;
let closure_12 = TRAIT_OPTION_WIDTH + PX_12;
const createStyles = fn(5009);
let closure_13 = createStyles.createStyles({ assetList: { paddingHorizontal: PX_16 }, radioGroup: { flexDirection: "row", gap: PX_12 }, selectorOverlay: { position: "absolute", left: PX_16, top: 0, width: TRAIT_OPTION_WIDTH, height: TRAIT_OPTION_HEIGHT } });
const __initData = { code: "function TraitOptionListTsx1(){const{introIndex}=this.__closure;return introIndex.get();}" };
const __initData2 = { code: "function TraitOptionListTsx2(index,previousIndex){const{scrollTo,scrollViewRef,ASSET_ITEM_STEP}=this.__closure;if(previousIndex!=null&&index!==previousIndex)scrollTo(scrollViewRef,index*ASSET_ITEM_STEP,0,false);}" };
let closure_17 = { code: "function TraitOptionListTsx3(finished){const{runOnJS,onIntroStep,target}=this.__closure;if(finished===true)runOnJS(onIntroStep)(target);}" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/TraitOptionList.tsx");

export default function TraitOptionList(options) {
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
  closure_7 = options(disabled[9]).useStateFromStores(items, () => onIntroStep.useReducedMotion);
  let obj = options(disabled[9]);
  const isScreenReaderEnabled = options(disabled[10]).useIsScreenReaderEnabled();
  let obj2 = options(disabled[10]);
  const animatedRef = options(disabled[11]).useAnimatedRef();
  const ref = noop.useRef(false);
  closure_11 = noop.useRef(null);
  let bound = Math.max(options.findIndex((optionId) => optionId.optionId === importDefault), 0);
  let obj3 = options(disabled[11]);
  if (introStartIndex > 0) {
    bound = introStartIndex;
  }
  const tmp8 = require("useInitialValue");
  const bound1 = Math.max(closure_11, require("useWindowDimensions")().width - closure_11 - isScreenReaderEnabled);
  const tmp8Result = require("useInitialValue")(bound);
  sharedValue = options(disabled[11]).useSharedValue(introStartIndex);
  const tmp2Result = options(disabled[11]);
  let fn = function w() {
    return sharedValue.get();
  };
  fn.__closure = { introIndex: sharedValue };
  fn.__workletHash = 13442585118467;
  fn.__initData = __initData;
  class P {
    constructor(arg0, arg1) {
      tmp = null != arg1 && options !== arg1;
      if (tmp) {
        tmp2 = closure_0;
        tmp3 = closure_2;
        obj = closure_0(closure_2[11]);
        tmp4 = closure_9;
        tmp5 = closure_12;
        flag = false;
        num = 0;
        tmp6 = obj;
        scrollToResult = obj.scrollTo(closure_9, options * closure_12, 0, false);
      }
      return;
    }
  }
  const tmp2Result3 = options(disabled[11]);
  P.__closure = { scrollTo: options(disabled[11]).scrollTo, scrollViewRef: animatedRef, ASSET_ITEM_STEP: sharedValue };
  P.__workletHash = 9917910763820;
  P.__initData = __initData2;
  const animatedReaction = tmp2Result3.useAnimatedReaction(fn, P);
  const items1 = [sharedValue, introStartIndex, onIntroStep];
  const effect = noop.useEffect(() => {
    if (0 !== introStartIndex) {
      const _Array = Array;
      let obj = { length: tmp };
      const tmp7 = ReanimatedRexport;
      const withSequence = tmp7.withSequence;
      const items = [];
      HermesBuiltin.arraySpread(Array.from(obj, (arg0, arg1) => {
        const diff = closure_4 - arg1 - 1;
        closure_0 = diff;
        let obj = options(5090);
        const obj3 = { duration: 100, easing: null };
        const Easing = options(5090).Easing;
        obj3.easing = Easing.out(options(5090).Easing.cubic);
        const fn = function o(arg0) {
          if (true === arg0) {
            options(disabled[11]).runOnJS(onIntroStep)(diff);
            const obj = options(disabled[11]);
          }
        };
        const obj2 = options(5249);
        fn.__closure = { runOnJS: options(5090).runOnJS, onIntroStep, target: diff };
        fn.__workletHash = 1554090468151;
        fn.__initData = __initData;
        return obj.withDelay(250, obj2.withTiming(diff, obj3, "respect-motion-settings", fn));
      }), 0);
      const result = sharedValue.set(HermesBuiltin.apply(items, tmp7));
      return () => options(disabled[11]).cancelAnimation(sharedValue);
    }
  }, items1);
  const items2 = [disabled, isScreenReaderEnabled];
  const effect1 = noop.useEffect(() => cancelScrollSettle, items2);
  const obj6 = { ref: animatedRef, horizontal: true, contentOffset: { x: tmp8Result * sharedValue, y: 0 }, scrollEnabled: !disabled, showsHorizontalScrollIndicator: false, decelerationRate: "fast", snapToInterval: null, onScrollBeginDrag: null, onScrollEndDrag: null, onMomentumScrollBegin: null, onMomentumScrollEnd: null, contentContainerStyle: null, children: null };
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
          const tmp6 = options[Math.max(Math, 0, Math.min(Math, Math.round(Math, tmp / sharedValue), options.length - 1))];
          if (null != tmp6) {
            if (tmp6.optionId !== importDefault) {
              onSelectOption(tmp6.trait, tmp6.optionId);
              const result = x(5255).triggerHapticFeedback(x(5255).HapticFeedbackTypes.IMPACT_LIGHT);
              const obj = x(5255);
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
          const tmp12 = options[Math.max(Math, 0, Math.min(Math, Math.round(Math, tmp6 / closure_12), options.length - 1))];
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
  const obj5 = { scrollTo: options(disabled[11]).scrollTo, scrollViewRef: animatedRef, ASSET_ITEM_STEP: sharedValue };
  tmp12 = sharedValue;
  const tmp16 = ref;
  obj7.accessibilityLabel = options(disabled[8]).getCustomizationOptionName(options.customizationOption);
  obj7.children = options.map((traitOption, index) => {
    closure_1 = index;
    let obj = { traitOption, accessibilityLabel: null, isSelected: null, showSelectedBorder: null, hideCornerFlag: null, disabled: null, onPress: null };
    const tmp2 = require("TraitOptionItem");
    obj.accessibilityLabel = options(disabled[8]).getAssetAccessibilityLabel(traitOption, hideCornerFlag);
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
        const result = traitOption(5255).triggerHapticFeedback(traitOption(5255).HapticFeedbackTypes.IMPACT_LIGHT);
        const obj2 = traitOption(5255);
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
  const children = [animatedRef(require("ReanimatedRexport").ScrollView, obj6), ];
  let tmp18Result = !isScreenReaderEnabled;
  if (!isScreenReaderEnabled) {
    tmp18Result = tmp18(SelectedWindow, {});
  }
  children[1] = tmp18Result;
  return tmp16(introStartIndex, { children });
};
export const TRAIT_OPTION_SPACING = PX_12;
export const CONTENT_INSET = PX_16;