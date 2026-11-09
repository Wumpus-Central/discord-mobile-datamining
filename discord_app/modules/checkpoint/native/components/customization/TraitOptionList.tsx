// discord_app/modules/checkpoint/native/components/customization/TraitOptionList.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import HapticUtils from "../../../../haptics/HapticUtils.native.tsx";
import CheckpointCustomizationUtils from "../../../CheckpointCustomizationUtils.tsx";
import inlineStyles from "../../../../../../_runtime/08101_inlineStyles.js";
import TraitOptionItem from "TraitOptionItem.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../../a11y/AccessibilityStore.tsx";

const inlineStylesDefault = inlineStyles;

require = fn;
function SelectedWindow(size) {
  size = size.size;
  ({ width, height } = TraitOptionItem.TRAIT_OPTION_SIZE_TO_DIMENSIONS[size]);
  const size1 = { width, height, style: closure_12().selectorOverlay, pointerEvents: "none", children: null };
  const tmp = closure_12();
  const tmp2 = inlineStylesDefault;
  size1.children = React5(inlineStyles.Polygon, {
    points: TraitOptionItem.TRAIT_OPTION_SIZE_TO_SHAPE_POINTS[size],
    fill: "transparent",
    stroke: CHECKPOINT_PRIMARY,
    strokeWidth: CheckpointCustomizationUtils.TRAIT_OPTION_STROKE_WIDTH,
  });
  return React5(tmp2, size1);
}
const View = fn(17).View;
const CHECKPOINT_PRIMARY = fn(6199).CHECKPOINT_PRIMARY;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const PX_12 = nativeDefault.space.PX_12;
const PX_16 = nativeDefault.space.PX_16;
const createStyles = fn(5140);
let closure_12 = createStyles.createStyles({
  assetList: { paddingHorizontal: PX_16 },
  radioGroup: { flexDirection: "row", gap: PX_12 },
  selectorOverlay: { position: "absolute", left: PX_16, top: 0 },
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/TraitOptionList.tsx");

export default function TraitOptionList(size) {
  size = size.size;
  const options = size.options;
  ({ selectedOptionId: dependencyMap, disabled } = size);
  ({ hideRarity: noop, onSelectOption: View } = size);
  let useReducedMotion;
  c11 = undefined;
  c12 = undefined;
  function cancelScrollSettle() {
    if (null != closure_10.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_10.current);
      closure_10.current = null;
    }
  }
  const tmp = c12();
  items = [useReducedMotion];
  useReducedMotion = size(504).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  let obj = size(504);
  let tmp2 = size;
  const isScreenReaderEnabled = size(5390).useIsScreenReaderEnabled();
  let obj2 = size(5390);
  const animatedRef = size(1652).useAnimatedRef();
  const ref = noop.useRef(false);
  closure_10 = noop.useRef(null);
  const bound = Math.max(
    options.findIndex((optionId) => optionId.optionId === dependencyMap),
    0,
  );
  const obj3 = size(1652);
  const tmp7 = options(5739)(bound);
  [tmp9, c11] = disabled(noop.useState(options(1493)().width), 2);
  const width = size(13924).TRAIT_OPTION_SIZE_TO_DIMENSIONS[size].width;
  const sum = width + closure_10;
  c12 = sum;
  const items1 = [disabled, isScreenReaderEnabled];
  const bound1 = Math.max(c11, tmp9 - c11 - width);
  const effect = noop.useEffect(() => cancelScrollSettle, items1);
  const obj4 = {
    ref: animatedRef,
    horizontal: true,
    contentOffset: { x: tmp7 * sum, y: 0 },
    scrollEnabled: !disabled,
    showsHorizontalScrollIndicator: false,
    decelerationRate: "fast",
    snapToInterval: null,
    onScrollBeginDrag: null,
    onScrollEndDrag: null,
    onMomentumScrollBegin: null,
    onMomentumScrollEnd: null,
    onLayout: null,
    contentContainerStyle: null,
    children: null,
  };
  let tmp16;
  if (!isScreenReaderEnabled) {
    tmp16 = sum;
  }
  obj4.snapToInterval = tmp16;
  obj4.onScrollBeginDrag = function handleScrollBeginDrag() {
    if (!isScreenReaderEnabled) {
      if (null != closure_10.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_10.current);
        closure_10.current = null;
      }
      closure_9.current = true;
    }
  };
  obj4.onScrollEndDrag = function scheduleScrollSettle(nativeEvent) {
    const x = nativeEvent.nativeEvent.contentOffset.x;
    if (null != closure_10.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_10.current);
      closure_10.current = null;
    }
    closure_10.current = setTimeout(() => {
      closure_10.current = null;
      closure_9.current = false;
      if (!disabled) {
        if (!isScreenReaderEnabled) {
          const _Math = Math;
          const _Math2 = Math;
          const _Math3 = Math;
          const tmp6 = options[Math.max(Math, 0, Math.min(Math, Math.round(Math, tmp / c12), options.length - 1))];
          if (null != tmp6) {
            if (tmp6.optionId !== dependencyMap) {
              View(tmp6.trait, tmp6.optionId);
              const result = x(5376).triggerHapticFeedback(x(5376).HapticFeedbackTypes.IMPACT_LIGHT);
              const obj = x(5376);
            }
          }
        }
      }
    }, 100);
  };
  obj4.onMomentumScrollBegin = cancelScrollSettle;
  obj4.onMomentumScrollEnd = function handleMomentumScrollEnd(arg0) {
    if (null != closure_10.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_10.current);
      closure_10.current = null;
    }
    if (ref.current) {
      tmp4.current = false;
      if (!disabled) {
        if (!isScreenReaderEnabled) {
          const _Math = Math;
          const _Math2 = Math;
          const _Math3 = Math;
          const tmp12 = options[Math.max(Math, 0, Math.min(Math, Math.round(Math, tmp6 / c12), options.length - 1))];
          if (null != tmp12) {
            if (tmp12.optionId !== dependencyMap) {
              View(tmp12.trait, tmp12.optionId);
              const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
            }
          }
        }
      }
    }
  };
  obj4.onLayout = function handleLayout(nativeEvent) {
    _undefined(nativeEvent.nativeEvent.layout.width);
  };
  const items2 = [tmp.assetList, { paddingRight: bound1 }];
  obj4.contentContainerStyle = items2;
  const obj5 = { style: tmp.radioGroup, accessibilityRole: "radiogroup", accessibilityLabel: null, children: null };
  const tmp13 = ref;
  const tmp8 = disabled(noop.useState(options(1493)().width), 2);
  obj5.accessibilityLabel = tmp2(6566).getCustomizationOptionName(size.customizationOption);
  obj5.children = options.map((traitOption, index) => {
    size = traitOption;
    closure_1 = index;
    let obj = {
      size,
      traitOption,
      accessibilityLabel: null,
      isSelected: null,
      showSelectedBorder: null,
      hideCornerFlag: null,
      disabled: null,
      onPress: null,
    };
    const tmp2 = options(13924);
    obj.accessibilityLabel = size(6566).getAssetAccessibilityLabel(traitOption, hideCornerFlag);
    obj.isSelected = traitOption.optionId === dependencyMap;
    let tmp5 = isScreenReaderEnabled;
    if (isScreenReaderEnabled) {
      tmp5 = traitOption.optionId === tmp4;
    }
    obj.showSelectedBorder = tmp5;
    obj.hideCornerFlag = hideCornerFlag;
    obj.disabled = disabled;
    obj.onPress = function onPress() {
      if (null != ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref.current);
        ref.current = null;
      }
      closure_9.current = false;
      if (traitOption.optionId !== dependencyMap) {
        View(traitOption.trait, traitOption.optionId);
        const result = traitOption(5376).triggerHapticFeedback(traitOption(5376).HapticFeedbackTypes.IMPACT_LIGHT);
        const obj = traitOption(5376);
      }
      if (!isScreenReaderEnabled) {
        const current = animatedRef.current;
        if (current != null) {
          const obj2 = { x: closure_1 * c12, animated: !closure_6 };
          current.scrollTo(obj2);
        }
      }
    };
    return animatedRef(tmp2, obj, traitOption.optionId);
  });
  obj4.children = animatedRef(View, obj5);
  const children = [animatedRef(options(1652).ScrollView, obj4)];
  let tmp15Result = !isScreenReaderEnabled;
  if (!isScreenReaderEnabled) {
    const obj6 = { size };
    tmp15Result = tmp15(cancelScrollSettle, obj6);
  }
  children[1] = tmp15Result;
  return tmp13(View, { children });
}
export const TRAIT_OPTION_SPACING = PX_12;
export const CONTENT_INSET = PX_16;
