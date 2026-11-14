// === Module 14539: TraitOptionList ===

// Module 14539 (TraitOptionList)
import nativeDefault from "native" /* 575 */;
import HapticUtils from "HapticUtils" /* 5554 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6744 */;
import inlineStyles from "inlineStyles" /* 8263 */;
import TraitOptionItem from "TraitOptionItem" /* 14540 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5307 */;

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
const CHECKPOINT_PRIMARY = fn(6377).CHECKPOINT_PRIMARY;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
const PX_12 = nativeDefault.space.PX_12;
const PX_16 = nativeDefault.space.PX_16;
const createStyles = fn(5306);
let closure_13 = createStyles.createStyles({ assetList: { paddingHorizontal: PX_16 }, radioGroup: { flexDirection: "row", gap: PX_12 }, selectorOverlay: { position: "absolute", left: PX_16, top: 0 } });
let size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/TraitOptionList.tsx");

export default function TraitOptionList(size) {
  size = size.size;
  const options = size.options;
  ({ selectedOptionId: dependencyMap, disabled } = size);
  ({ hideRarity: noop, onSelectOption: closure_5 } = size);
  closure_7 = undefined;
  c12 = undefined;
  c13 = undefined;
  function handleScrollSettled(arg0) {
    if (!disabled) {
      if (!isScreenReaderEnabled) {
        const _Math = Math;
        const _Math2 = Math;
        const _Math3 = Math;
        const tmp6 = options[Math.max(Math, 0, Math.min(Math, Math.round(Math, arg0 / c13), options.length - 1))];
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
  function cancelScrollSettle() {
    if (null != closure_11.current) {
      const _clearTimeout = clearTimeout;
      clearTimeout(closure_11.current);
      closure_11.current = null;
    }
  }
  const tmp = c13();
  items = [closure_7];
  closure_6 = size(504).useStateFromStores(items, () => closure_7.useReducedMotion);
  let obj = size(504);
  let tmp2 = size;
  closure_7 = options(14488)(options(14518));
  const tmp4 = options(14488);
  const isScreenReaderEnabled = size(5568).useIsScreenReaderEnabled();
  noop.useRef(null);
  const ref = noop.useRef(false);
  closure_11 = noop.useRef(null);
  const bound = Math.max(options.findIndex((optionId) => optionId.optionId === dependencyMap), 0);
  let obj2 = size(5568);
  const tmp8 = options(5917)(bound);
  [tmp10, c12] = disabled(noop.useState(options(1496)().width), 2);
  const width = size(14540).TRAIT_OPTION_SIZE_TO_DIMENSIONS[size].width;
  const sum = width + closure_11;
  c13 = sum;
  const items1 = [disabled, isScreenReaderEnabled];
  const bound1 = Math.max(c12, tmp10 - c12 - width);
  const effect = noop.useEffect(() => cancelScrollSettle, items1);
  const obj3 = { ref, horizontal: true, contentOffset: { x: tmp8 * sum, y: 0 }, scrollEnabled: !disabled, showsHorizontalScrollIndicator: false, decelerationRate: "fast", snapToInterval: null, onScrollBeginDrag: null, onScrollEndDrag: null, onMomentumScrollBegin: null, onMomentumScrollEnd: null, onLayout: null, contentContainerStyle: null, children: null };
  let tmp18;
  if (!isScreenReaderEnabled) {
    tmp18 = sum;
  }
  obj3.snapToInterval = tmp18;
  obj3.onScrollBeginDrag = function handleScrollBeginDrag() {
    if (!isScreenReaderEnabled) {
      if (null != closure_11.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(closure_11.current);
        closure_11.current = null;
      }
      closure_10.current = true;
    }
  };
  obj3.onScrollEndDrag = function scheduleScrollSettle(nativeEvent) {
    const x = nativeEvent.nativeEvent.contentOffset.x;
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
  obj3.onMomentumScrollBegin = cancelScrollSettle;
  obj3.onMomentumScrollEnd = function handleMomentumScrollEnd(nativeEvent) {
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
  obj3.onLayout = function handleLayout(nativeEvent) {
    _undefined(nativeEvent.nativeEvent.layout.width);
  };
  const items2 = [tmp.assetList, { paddingRight: bound1 }];
  obj3.contentContainerStyle = items2;
  const obj4 = { style: tmp.radioGroup, accessibilityRole: "radiogroup", accessibilityLabel: null, children: null };
  const tmp14 = ref;
  const tmp9 = disabled(noop.useState(options(1496)().width), 2);
  obj4.accessibilityLabel = tmp2(6744).getCustomizationOptionName(size.customizationOption);
  obj4.children = options.map((traitOption, index) => {
    size = traitOption;
    closure_1 = index;
    let obj = { size, traitOption, accessibilityLabel: null, isSelected: null, showSelectedBorder: null, hideCornerFlag: null, disabled: null, onPress: null };
    const tmp2 = options(14540);
    obj.accessibilityLabel = size(6744).getAssetAccessibilityLabel(traitOption, { skipRarity: skipDescription, skipDescription });
    obj.isSelected = traitOption.optionId === dependencyMap;
    let tmp5 = isScreenReaderEnabled;
    if (isScreenReaderEnabled) {
      tmp5 = traitOption.optionId === tmp4;
    }
    obj.showSelectedBorder = tmp5;
    obj.hideCornerFlag = skipDescription;
    obj.disabled = disabled;
    obj.onPress = function onPress() {
      if (null != ref.current) {
        const _clearTimeout = clearTimeout;
        clearTimeout(ref.current);
        ref.current = null;
      }
      closure_10.current = false;
      if (traitOption.optionId !== dependencyMap) {
        closure_2_5(traitOption.trait, traitOption.optionId);
        const result = traitOption(5554).triggerHapticFeedback(traitOption(5554).HapticFeedbackTypes.IMPACT_LIGHT);
        closure_7();
        const obj = traitOption(5554);
      }
      if (!isScreenReaderEnabled) {
        const current = ref.current;
        if (current != null) {
          const obj2 = { x: closure_1 * c13, animated: !closure_6 };
          current.scrollTo(obj2);
        }
      }
    };
    return ref(tmp2, obj, traitOption.optionId);
  });
  obj3.children = ref(closure_6, obj4);
  const children = [ref(closure_5, obj3), ];
  let tmp16Result = !isScreenReaderEnabled;
  if (!isScreenReaderEnabled) {
    const obj5 = { size };
    tmp16Result = tmp16(handleScrollSettled, obj5);
  }
  children[1] = tmp16Result;
  return tmp14(closure_6, { children });
};
export const TRAIT_OPTION_SPACING = PX_12;
export const CONTENT_INSET = PX_16;