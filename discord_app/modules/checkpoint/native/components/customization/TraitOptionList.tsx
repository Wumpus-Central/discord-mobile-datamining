// === Module 12786: TraitOptionList ===

// Module 12786 (TraitOptionList)
import nativeDefault from "native" /* 575 */;
import HapticUtils from "HapticUtils" /* 5129 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6336 */;
import inlineStyles from "inlineStyles" /* 7865 */;
import TraitOptionItem from "TraitOptionItem" /* 12787 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4914 */;

const inlineStylesDefault = inlineStyles;

require = fn;
function SelectedWindow(size) {
  size = size.size;
  ({ width, height } = TraitOptionItem.TRAIT_OPTION_SIZE_TO_DIMENSIONS[size]);
  const size1 = { width, height, style: closure_13().selectorOverlay, pointerEvents: "none", children: null };
  const tmp = closure_13();
  const tmp2 = inlineStylesDefault;
  size1.children = React6(inlineStyles.Polygon, { points: TraitOptionItem.TRAIT_OPTION_SIZE_TO_SHAPE_POINTS[size], fill: "transparent", stroke: CHECKPOINT_PRIMARY, strokeWidth: CheckpointCustomizationUtils.TRAIT_OPTION_STROKE_WIDTH });
  return React6(tmp2, size1);
}
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: closure_6 } = get_ActivityIndicator);
const CHECKPOINT_PRIMARY = fn(5969).CHECKPOINT_PRIMARY;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
const PX_12 = nativeDefault.space.PX_12;
const PX_16 = nativeDefault.space.PX_16;
const createStyles = fn(4913);
let closure_13 = createStyles.createStyles({ assetList: { paddingHorizontal: PX_16 }, radioGroup: { flexDirection: "row", gap: PX_12 }, selectorOverlay: { position: "absolute", left: PX_16, top: 0 } });
let size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/TraitOptionList.tsx");

export default function TraitOptionList(size) {
  size = size.size;
  const options = size.options;
  ({ selectedOptionId: dependencyMap, disabled } = size);
  ({ hideRarity: noop, onSelectOption: closure_5 } = size);
  closure_7 = undefined;
  c13 = undefined;
  function handleScrollSettled(arg0) {
    if (!disabled) {
      if (!isScreenReaderEnabled) {
        const _Math = Math;
        const _Math2 = Math;
        const _Math3 = Math;
        const tmp6 = options[Math.max(Math, 0, Math.min(Math, Math.round(Math, arg0 / c15), options.length - 1))];
        if (null != tmp6) {
          if (tmp6.optionId !== dependencyMap) {
            closure_1_5(tmp6.trait, tmp6.optionId);
            const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
            closure_7();
          }
        }
      }
    }
  }
  function handlePressOption(optionId, rounded) {
    if (null != closure_11.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_11.current);
      closure_11.current = null;
    }
    if (null != closure_18.current) {
      const _clearTimeout2 = clearTimeout;
      clearTimeout(closure_18.current);
      closure_18.current = null;
    }
    closure_10.current = false;
    closure_21.current = true;
    if (optionId.optionId !== dependencyMap) {
      closure_1_5(optionId.trait, optionId.optionId);
      const result = HapticUtils.triggerHapticFeedback(HapticUtils.HapticFeedbackTypes.IMPACT_LIGHT);
      closure_7();
    }
    if (!isScreenReaderEnabled) {
      const current = ref.current;
      if (current != null) {
        const obj2 = { x: rounded * c15, animated: !closure_6 };
        current.scrollTo(obj2);
      }
    }
  }
  const tmp = c13();
  items = [closure_7];
  closure_6 = size(504).useStateFromStores(items, () => closure_7.useReducedMotion);
  let obj = size(504);
  let tmp2 = size;
  closure_7 = options(12539)(options(12764));
  const tmp4 = options(12539);
  const isScreenReaderEnabled = size(5143).useIsScreenReaderEnabled();
  noop.useRef(null);
  const ref = noop.useRef(false);
  closure_11 = noop.useRef(null);
  const bound = Math.max(options.findIndex((optionId) => optionId.optionId === dependencyMap), 0);
  const tmp8 = options(5492)(bound);
  let obj2 = size(5143);
  [tmp10, c13] = disabled(noop.useState(options(1494)().width), 2);
  const width = size(12787).TRAIT_OPTION_SIZE_TO_DIMENSIONS[size].width;
  const sum = width + closure_11;
  c15 = sum;
  const ref1 = noop.useRef(null);
  noop.useRef(tmp8 * sum);
  closure_18 = noop.useRef(null);
  noop.useRef(0);
  noop.useRef(0);
  noop.useRef(false);
  const items1 = [disabled, isScreenReaderEnabled];
  const bound1 = Math.max(bound, tmp10 - bound - width);
  const effect = noop.useEffect(() => () => {
    if (null != ref.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(ref.current);
      ref.current = null;
    }
    if (null != ref2.current) {
      const _clearTimeout2 = clearTimeout;
      clearTimeout(ref2.current);
      ref2.current = null;
    }
  }, items1);
  const obj3 = { ref: ref1, children: null };
  const obj4 = { ref, horizontal: true, contentOffset: { x: tmp8 * sum, y: 0 }, scrollEnabled: !disabled, showsHorizontalScrollIndicator: false, decelerationRate: "fast", snapToInterval: null, onScrollBeginDrag: null, onScrollEndDrag: null, onMomentumScrollBegin: null, onMomentumScrollEnd: null, onScroll: null, scrollEventThrottle: 16, onTouchStart: null, onTouchEnd: null, onLayout: null, contentContainerStyle: null, children: null };
  let tmp19;
  if (!isScreenReaderEnabled) {
    tmp19 = sum;
  }
  obj4.snapToInterval = tmp19;
  obj4.onScrollBeginDrag = function handleScrollBeginDrag() {
    if (!isScreenReaderEnabled) {
      if (null != closure_11.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_11.current);
        closure_11.current = null;
      }
      if (null != closure_18.current) {
        const _clearTimeout2 = clearTimeout;
        clearTimeout(closure_18.current);
        closure_18.current = null;
      }
      closure_10.current = true;
    }
  };
  obj4.onScrollEndDrag = function scheduleScrollSettle(nativeEvent) {
    const x = nativeEvent.nativeEvent.contentOffset.x;
    closure_0 = x;
    closure_17.current = x;
    if (null != closure_11.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_11.current);
      closure_11.current = null;
    }
    closure_11.current = setTimeout(() => {
      closure_11.current = null;
      closure_10.current = false;
      handleScrollSettled(closure_0);
    }, 100);
  };
  obj4.onMomentumScrollBegin = function cancelScrollSettle() {
    if (null != closure_11.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_11.current);
      closure_11.current = null;
    }
  };
  obj4.onMomentumScrollEnd = function handleMomentumScrollEnd(nativeEvent) {
    closure_17.current = nativeEvent.nativeEvent.contentOffset.x;
    if (null != closure_11.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_11.current);
      closure_11.current = null;
    }
    if (ref.current) {
      tmp4.current = false;
      handleScrollSettled(nativeEvent.nativeEvent.contentOffset.x);
    }
  };
  obj4.onScroll = function handleScroll(nativeEvent) {
    closure_17.current = nativeEvent.nativeEvent.contentOffset.x;
  };
  obj4.onTouchStart = function handleTouchStart(nativeEvent) {
    if (null != closure_18.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_18.current);
      closure_18.current = null;
    }
    closure_21.current = false;
    closure_19.current = nativeEvent.nativeEvent.pageX;
    closure_20.current = ref2.current;
  };
  obj4.onTouchEnd = function handleTouchEnd() {
    if (!disabled) {
      if (!isScreenReaderEnabled) {
        if (!ref.current) {
          if (!ref5.current) {
            let current = ref4.current;
            if (null != closure_18.current) {
              const _clearTimeout = clearTimeout;
              clearTimeout(closure_18.current);
              closure_18.current = null;
            }
            const _setTimeout = setTimeout;
            closure_18.current = setTimeout(() => {
              closure_18.current = null;
              current = ref1.current;
              if (current != null) {
                current.measureInWindow((arg0) => {
                  const diff = closure_1_0 - arg0 + closure_1_1 - bound;
                  let rounded = Math.floor(diff / closure_2_15);
                  if (diff >= 0) {
                    if (null != current[rounded]) {
                      handlePressOption(tmp7, rounded);
                    }
                  }
                  rounded = closure_2_12;
                });
              }
            }, 100);
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
  const tmp15 = ref;
  const tmp9 = disabled(noop.useState(options(1494)().width), 2);
  obj5.accessibilityLabel = tmp2(6336).getCustomizationOptionName(size.customizationOption);
  obj5.children = options.map((traitOption, index) => {
    size = traitOption;
    closure_1 = index;
    const obj = { size, traitOption, accessibilityLabel: null, isSelected: null, showSelectedBorder: null, hideCornerFlag: null, disabled: null, onPress: null };
    const tmp2 = options(12787);
    obj.accessibilityLabel = size(6336).getAssetAccessibilityLabel(traitOption, { skipRarity: skipDescription, skipDescription });
    obj.isSelected = traitOption.optionId === closure_2;
    let tmp5 = isScreenReaderEnabled;
    if (isScreenReaderEnabled) {
      tmp5 = traitOption.optionId === tmp4;
    }
    obj.showSelectedBorder = tmp5;
    obj.hideCornerFlag = skipDescription;
    obj.disabled = disabled;
    obj.onPress = function onPress() {
      handlePressOption(closure_0, closure_1);
    };
    return ref(tmp2, obj, traitOption.optionId);
  });
  obj4.children = ref(closure_6, obj5);
  const items3 = [ref(closure_5, obj4), ];
  let tmp17Result = !isScreenReaderEnabled;
  if (!isScreenReaderEnabled) {
    const obj6 = { size };
    tmp17Result = tmp17(width, obj6);
  }
  items3[1] = tmp17Result;
  obj3.children = items3;
  return tmp15(closure_6, obj3);
};
export const TRAIT_OPTION_SPACING = PX_12;
export const CONTENT_INSET = PX_16;