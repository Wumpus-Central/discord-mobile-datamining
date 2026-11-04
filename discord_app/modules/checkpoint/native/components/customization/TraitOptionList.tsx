// === Module 13910: TraitOptionList ===

// Module 13910 (TraitOptionList)
import nativeDefault from "native" /* 575 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1493 */;
import _mod1652 from "module_1652" /* 1652 */;
import HapticUtils from "HapticUtils" /* 5384 */;
import useInitialValueDefault from "useInitialValue" /* 5749 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6569 */;
import inlineStyles from "inlineStyles" /* 8171 */;
import TraitOptionItem from "TraitOptionItem" /* 13911 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5142 */;

const require = globalThis.__r;
const _modDef1652 = _mod1652;
const inlineStylesDefault = inlineStyles;

require = fn;
function SelectedWindow(size) {
  size = size.size;
  ({ width, height } = TraitOptionItem.TRAIT_OPTION_SIZE_TO_DIMENSIONS[size]);
  const size1 = { width, height, style: closure_12().selectorOverlay, pointerEvents: "none", children: null };
  const tmp = closure_12();
  const tmp2 = inlineStylesDefault;
  size1.children = React5(inlineStyles.Polygon, { points: TraitOptionItem.TRAIT_OPTION_SIZE_TO_SHAPE_POINTS[size], fill: "transparent", stroke: CHECKPOINT_PRIMARY, strokeWidth: CheckpointCustomizationUtils.TRAIT_OPTION_STROKE_WIDTH });
  return React5(tmp2, size1);
}
const View = fn(17).View;
const CHECKPOINT_PRIMARY = fn(6201).CHECKPOINT_PRIMARY;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const PX_12 = nativeDefault.space.PX_12;
const PX_16 = nativeDefault.space.PX_16;
const createStyles = fn(5141);
let closure_12 = createStyles.createStyles({ assetList: { paddingHorizontal: PX_16 }, radioGroup: { flexDirection: "row", gap: PX_12 }, selectorOverlay: { position: "absolute", left: PX_16, top: 0 } });
let closure_14 = { code: "(function TraitOptionListTsx1(){let[introIndex]=this.__closure;return introIndex.get();})" };
let closure_15 = { code: "(function TraitOptionListTsx2(index,previousIndex){let[scrollTo,scrollViewRef,optionStep]=this.__closure;if(previousIndex!=null&&index!==previousIndex)scrollTo(scrollViewRef,index*optionStep,0,false);})" };
let closure_16 = { code: "(function TraitOptionListTsx3(finished){let[scheduleOnRN,onIntroStep,target]=this.__closure;if(finished===true)scheduleOnRN(onIntroStep,target);})" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/TraitOptionList.tsx");

export default function TraitOptionList(size) {
  size = size.size;
  _require = size;
  const options = size.options;
  importDefault = options;
  ({ selectedOptionId: c2, disabled } = size);
  ({ hideRarity: noop, introStartIndex } = size);
  const onIntroStep = size.onIntroStep;
  const onSelectOption = size.onSelectOption;
  closure_12 = undefined;
  c13 = undefined;
  c14 = undefined;
  let sharedValue;
  function cancelScrollSettle() {
    if (null != closure_12.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_12.current);
      closure_12.current = null;
    }
  }
  let tmp = closure_12();
  items = [onIntroStep];
  closure_8 = require("initialize").useStateFromStores(items, () => onIntroStep.useReducedMotion);
  let obj = require("initialize");
  const isScreenReaderEnabled = require("useIsScreenReaderEnabled").useIsScreenReaderEnabled();
  let obj2 = require("useIsScreenReaderEnabled");
  const animatedRef = require("module_1652").useAnimatedRef();
  const ref = noop.useRef(false);
  closure_12 = noop.useRef(null);
  let bound = Math.max(options.findIndex((optionId) => optionId.optionId === c2), 0);
  let obj3 = require("module_1652");
  if (introStartIndex > 0) {
    bound = introStartIndex;
  }
  const tmp8Result = useInitialValueDefault(bound);
  [tmp11, c13] = disabled(noop.useState(useWindowDimensionsDefault().width), 2);
  const width = tmp2(13911).TRAIT_OPTION_SIZE_TO_DIMENSIONS[size].width;
  const sum = width + animatedRef;
  c14 = sum;
  const bound1 = Math.max(ref, tmp11 - ref - width);
  const tmp10 = disabled(noop.useState(useWindowDimensionsDefault().width), 2);
  sharedValue = require("module_1652").useSharedValue(introStartIndex);
  const tmp2Result = require("module_1652");
  let items1 = [c14, sharedValue];
  _require = undefined;
  [tmp15, tmp16] = items1;
  class TraitOptionListTsx1 {
    constructor() {
      return closure_0.get();
    }
  }
  const items2 = [tmp16];
  TraitOptionListTsx1.__closure = items2;
  TraitOptionListTsx1.__workletHash = 6181032318714;
  TraitOptionListTsx1.__initData = tmp15;
  const items3 = [sharedValue, require("module_1652").scrollTo, animatedRef, sum];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  [tmp17, tmp18, tmp19, tmp20] = items3;
  class TraitOptionListTsx2 {
    constructor(arg0, arg1) {
      tmp = null != arg1 && size !== arg1;
      if (tmp) {
        tmp2 = closure_0;
        tmp3 = closure_1;
        tmp4 = closure_2;
        flag = false;
        num = 0;
        tmp5 = closure_0(closure_1, size * closure_2, 0, false);
      }
      return;
    }
  }
  const items4 = [tmp18, tmp19, tmp20];
  TraitOptionListTsx2.__closure = items4;
  TraitOptionListTsx2.__workletHash = 10161312388757;
  TraitOptionListTsx2.__initData = tmp17;
  const animatedReaction = require("module_1652").useAnimatedReaction(TraitOptionListTsx1, TraitOptionListTsx2);
  const items5 = [sharedValue, introStartIndex, onIntroStep];
  const effect = noop.useEffect(() => {
    if (0 !== introStartIndex) {
      const _Array = Array;
      let obj = { length: tmp };
      const tmp7 = _mod1652;
      const withSequence = tmp7.withSequence;
      items = [];
      HermesBuiltin.arraySpread(Array.from(obj, (arg0, arg1) => {
        const diff = introStartIndex - arg1 - 1;
        const obj = c0(1652);
        const obj3 = { duration: 100, easing: null };
        const Easing = c0(1652).Easing;
        obj3.easing = Easing.out(c0(1652).Easing.cubic);
        items = [cancelScrollSettle, c0(1705).scheduleOnRN, onIntroStep, diff];
        c0 = undefined;
        c1 = undefined;
        dependencyMap = undefined;
        [tmp2, tmp3, tmp4, tmp5] = items;
        class TraitOptionListTsx3 {
          constructor(arg0) {
            if (true === arg0) {
              tmp = closure_0;
              tmp2 = closure_1;
              tmp3 = closure_2;
              tmp4 = closure_0(closure_1, closure_2);
            }
            return;
          }
        }
        const items1 = [tmp3, tmp4, tmp5];
        TraitOptionListTsx3.__closure = items1;
        TraitOptionListTsx3.__workletHash = 14744162111459;
        TraitOptionListTsx3.__initData = tmp2;
        return obj.withDelay(250, c0(5378).withTiming(diff, obj3, "respect-motion-settings", TraitOptionListTsx3));
      }), 0);
      const result = sharedValue.set(HermesBuiltin.apply(items, tmp7));
      return () => c0(1652).cancelAnimation(sharedValue);
    }
  }, items5);
  const items6 = [disabled, isScreenReaderEnabled];
  const effect1 = noop.useEffect(() => cancelScrollSettle, items6);
  const obj5 = { ref: animatedRef, horizontal: true, contentOffset: { x: tmp8Result * sum, y: 0 }, scrollEnabled: !disabled, showsHorizontalScrollIndicator: false, decelerationRate: "fast", snapToInterval: null, onScrollBeginDrag: null, onScrollEndDrag: null, onMomentumScrollBegin: null, onMomentumScrollEnd: null, onLayout: null, contentContainerStyle: null, children: null };
  let tmp27;
  if (!isScreenReaderEnabled) {
    tmp27 = sum;
  }
  obj5.snapToInterval = tmp27;
  obj5.onScrollBeginDrag = function handleScrollBeginDrag() {
    if (!isScreenReaderEnabled) {
      _mod1652.cancelAnimation(sharedValue);
      if (null != closure_12.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_12.current);
        closure_12.current = null;
      }
      closure_11.current = true;
    }
  };
  obj5.onScrollEndDrag = function scheduleScrollSettle(nativeEvent) {
    const x = nativeEvent.nativeEvent.contentOffset.x;
    if (null != closure_12.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_12.current);
      closure_12.current = null;
    }
    closure_12.current = setTimeout(() => {
      closure_12.current = null;
      closure_11.current = false;
      if (!disabled) {
        if (!isScreenReaderEnabled) {
          const _Math = Math;
          const _Math2 = Math;
          const _Math3 = Math;
          const tmp6 = length[Math.max(Math, 0, Math.min(Math, Math.round(Math, tmp / c14), length.length - 1))];
          if (null != tmp6) {
            if (tmp6.optionId !== c2) {
              onSelectOption(tmp6.trait, tmp6.optionId);
              const result = x(5384).triggerHapticFeedback(x(5384).HapticFeedbackTypes.IMPACT_LIGHT);
              const obj = x(5384);
            }
          }
        }
      }
    }, 100);
  };
  obj5.onMomentumScrollBegin = cancelScrollSettle;
  obj5.onMomentumScrollEnd = function handleMomentumScrollEnd(arg0) {
    if (null != closure_12.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_12.current);
      closure_12.current = null;
    }
    if (ref.current) {
      tmp4.current = false;
      if (!disabled) {
        if (!isScreenReaderEnabled) {
          const _Math = Math;
          const _Math2 = Math;
          const _Math3 = Math;
          const tmp12 = _undefined[Math.max(Math, 0, Math.min(Math, Math.round(Math, tmp6 / c14), _undefined.length - 1))];
          if (null != tmp12) {
            if (tmp12.optionId !== c2) {
              onSelectOption(tmp12.trait, tmp12.optionId);
              const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
            }
          }
        }
      }
    }
  };
  obj5.onLayout = function handleLayout(nativeEvent) {
    _undefined3(nativeEvent.nativeEvent.layout.width);
  };
  const items7 = [tmp.assetList, { paddingRight: bound1 }];
  obj5.contentContainerStyle = items7;
  const obj6 = { style: tmp.radioGroup, accessibilityRole: "radiogroup", accessibilityLabel: null, children: null };
  const tmp24 = isScreenReaderEnabled;
  const tmp2Result3 = require("module_1652");
  obj6.accessibilityLabel = require("CheckpointCustomizationUtils").getCustomizationOptionName(size.customizationOption);
  obj6.children = options.map((traitOption, index) => {
    size = traitOption;
    closure_1 = index;
    let obj = { size, traitOption, accessibilityLabel: null, isSelected: null, showSelectedBorder: null, hideCornerFlag: null, disabled: null, onPress: null };
    const tmp2 = _undefined(_undefined2[8]);
    obj.accessibilityLabel = size(_undefined2[10]).getAssetAccessibilityLabel(traitOption, hideCornerFlag);
    obj.isSelected = traitOption.optionId === _undefined2;
    let tmp5 = isScreenReaderEnabled;
    if (isScreenReaderEnabled) {
      tmp5 = traitOption.optionId === tmp4;
    }
    obj.showSelectedBorder = tmp5;
    obj.hideCornerFlag = hideCornerFlag;
    obj.disabled = disabled;
    obj.onPress = function onPress() {
      _mod1652.cancelAnimation(sharedValue);
      if (null != ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref.current);
        ref.current = null;
      }
      closure_11.current = false;
      if (traitOption.optionId !== c2) {
        onSelectOption(traitOption.trait, traitOption.optionId);
        const result = traitOption(5384).triggerHapticFeedback(traitOption(5384).HapticFeedbackTypes.IMPACT_LIGHT);
        const obj2 = traitOption(5384);
      }
      if (!isScreenReaderEnabled) {
        const current = animatedRef.current;
        if (current != null) {
          const obj3 = { x: closure_1 * c14, animated: !closure_8 };
          current.scrollTo(obj3);
        }
      }
    };
    return closure_8(tmp2, obj, traitOption.optionId);
  });
  obj5.children = closure_8(introStartIndex, obj6);
  const children = [closure_8(_modDef1652.ScrollView, obj5), ];
  let tmp26Result = !isScreenReaderEnabled;
  if (!isScreenReaderEnabled) {
    const obj7 = { size };
    tmp26Result = tmp26(c13, obj7);
  }
  children[1] = tmp26Result;
  return tmp24(introStartIndex, { children });
};
export const TRAIT_OPTION_SPACING = PX_12;
export const CONTENT_INSET = PX_16;