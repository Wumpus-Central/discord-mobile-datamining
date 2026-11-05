// === Module 13921: TraitPicker ===

// Module 13921 (TraitPicker)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _mod1652 from "module_1652" /* 1652 */;
import _modDef3219 from "module_3219" /* 3219 */;
import timing_timing from "timing/timing" /* 5380 */;
import Text_Text from "Text/Text" /* 5763 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6571 */;
import CheckpointTextDefault from "CheckpointText" /* 13878 */;
import TraitOptionDetails from "TraitOptionDetails" /* 13924 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5144 */;

const _modDef1652 = _mod1652;
const TraitOptionDetailsDefault = TraitOptionDetails;

require = fn;
function EarnedCountHeader(customizationOption) {
  ({ earnedCount, totalCount } = customizationOption);
  const tmp = closure_13();
  const customizationOptionName = CheckpointCustomizationUtils.getCustomizationOptionName(customizationOption.customizationOption);
  const intl = util.intl;
  const combined = "" + customizationOptionName + ", " + intl.formatToPlainString(_modDef3219.Vfq58K, {
    earnedCount,
    totalCount,
    countHook(arg0) {
      return arg0;
    }
  });
  const obj3 = { variant: "body-sm/medium", color: "text-default", style: tmp.earnedRow, accessibilityRole: "header", accessibilityLabel: combined, children: null };
  const intl2 = util.intl;
  obj3.children = intl2.format(_modDef3219.Vfq58K, {
    earnedCount,
    totalCount,
    countHook(children, arg1) {
      return closure_1_9(CheckpointTextDefault, { variant: "mono-md/bold", children }, arg1);
    }
  });
  return React6(Text_Text.Text, obj3);
}
function TraitPickerDetails(arg0) {
  ({ asset, isVisible, descriptionVisibility } = arg0);
  const tmp = closure_13();
  items = [closure_15, 600, _mod1652.Easing, timing_timing.withTiming, isVisible, PX_12];
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  c4 = undefined;
  [tmp3, tmp4, tmp5, tmp6, tmp7, tmp8] = items;
  class TraitPickerTsx1 {
    constructor() {
      obj = { duration: closure_0, easing: closure_1.out(closure_1.cubic) };
      tmp = closure_2;
      num = 0;
      tmp2 = closure_3;
      if (closure_3) {
        num = 1;
      }
      obj1 = { opacity: tmp(num, obj), transform: null };
      num2 = 0;
      if (!tmp2) {
        num2 = closure_4;
      }
      obj4 = { translateY: tmp(num2, obj) };
      items = [];
      items[0] = obj4;
      obj1.transform = items;
      return obj1;
    }
  }
  const items1 = [tmp4, tmp5, tmp6, tmp7, tmp8];
  TraitPickerTsx1.__closure = items1;
  TraitPickerTsx1.__workletHash = 14501915990015;
  TraitPickerTsx1.__initData = tmp3;
  const animatedStyle = _mod1652.useAnimatedStyle(TraitPickerTsx1);
  let obj2 = { style: null, children: React6(TraitOptionDetailsDefault, { asset, descriptionVisibility }) };
  const items2 = [tmp.details, animatedStyle];
  obj2.style = items2;
  return React6(_modDef1652.View, obj2);
}
function TraitPickerPortrait(selectedAsset) {
  selectedAsset = selectedAsset.selectedAsset;
  ({ header, optionList, isDetailsVisible, isRarityVisible } = selectedAsset);
  const obj = { style: closure_13().container, children: null };
  items = [header, optionList, ];
  if (null == selectedAsset) {
    items[2] = tmp3;
    obj.children = items;
    return tmp(tmp2, obj);
  } else {
    const obj2 = { asset: selectedAsset, isVisible: isDetailsVisible, descriptionVisibility: null };
    const DescriptionVisibility = TraitOptionDetails.DescriptionVisibility;
    obj2.descriptionVisibility = isRarityVisible ? DescriptionVisibility.VISIBLE : DescriptionVisibility.INVISIBLE;
    React6(TraitPickerDetails, obj2);
  }
}
function TraitPickerLandscape(selectedAsset) {
  selectedAsset = selectedAsset.selectedAsset;
  ({ header, optionList, isDetailsVisible, isRarityVisible } = selectedAsset);
  const tmp = closure_13();
  const obj = { alwaysBounceVertical: false, contentContainerStyle: tmp.landscapeScrollContent, children: null };
  items = [React6(timestampProducer, { style: tmp.landscapeGap }), header, React6(timestampProducer, { style: tmp.landscapeGap }), , , ];
  if (null == selectedAsset) {
    items[3] = tmp6;
    items[4] = optionList;
    const obj4 = { style: tmp.landscapeGap };
    items[5] = React6(timestampProducer, obj4);
    obj.children = items;
    return closure_1_10(hasOwnProperty, obj);
  } else {
    let tmp4Result2 = TraitPickerDetails;
    let obj5 = { asset: selectedAsset, isVisible: isDetailsVisible, descriptionVisibility: null };
    const prop = { children: null };
    obj5.descriptionVisibility = isRarityVisible ? prop.VISIBLE : prop.GONE;
    obj5 = [, ];
    obj5[0] = React6(tmp4Result2, obj5);
    const obj6 = { style: tmp.landscapeGap };
    tmp4Result2 = React6(timestampProducer, obj6);
    obj5[1] = tmp4Result2;
    prop.children = obj5;
    closure_1_10(closure_1_11, prop);
    const tmp11 = isRarityVisible ? prop.VISIBLE : prop.GONE;
    const tmp4Result = React6(tmp4Result2, obj5);
  }
  const obj2 = { style: tmp.landscapeGap };
  const obj3 = { style: tmp.landscapeGap };
}
get_ActivityIndicator = fn(17);
({ ScrollView: hasOwnProperty, View: closure_6 } = get_ActivityIndicator);
const rarityOrder = fn(6204).CHECKPOINT_RARITY_ORDER_MOBILE;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10, Fragment: closure_11 } = jsxProd);
const PX_12 = nativeDefault.space.PX_12;
const createStyles = fn(5143);
let obj2 = { container: { gap: fn(13922).TRAIT_OPTION_SPACING }, earnedRow: null, landscapeGap: null, details: null, landscapeScrollContent: null };
let obj3 = { gap: fn(13922).TRAIT_OPTION_SPACING };
obj2.earnedRow = { paddingHorizontal: fn(13922).CONTENT_INSET };
let obj4 = { paddingHorizontal: fn(13922).CONTENT_INSET };
obj2.landscapeGap = { flexGrow: 1, minHeight: nativeDefault.space.PX_8, maxHeight: nativeDefault.space.PX_16 };
let obj5 = { flexGrow: 1, minHeight: nativeDefault.space.PX_8, maxHeight: nativeDefault.space.PX_16 };
obj2.details = { paddingHorizontal: fn(13922).CONTENT_INSET };
obj2.landscapeScrollContent = { flexGrow: 1, justifyContent: "center" };
let closure_13 = createStyles.createStyles(obj2);
let closure_15 = { code: "(function TraitPickerTsx1(){let[INTRO_DETAILS_DURATION_MS,Easing,withTiming,isVisible,INTRO_DETAILS_OFFSET_Y]=this.__closure;const timing={duration:INTRO_DETAILS_DURATION_MS,easing:Easing.out(Easing.cubic)};return{opacity:withTiming(isVisible?1:0,timing),transform:[{translateY:withTiming(isVisible?0:INTRO_DETAILS_OFFSET_Y,timing)}]};})" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/TraitPicker.tsx");

export default function TraitPicker(customizationOption) {
  customizationOption = customizationOption.customizationOption;
  let flag = customizationOption.disabled;
  ({ isFinalizeRoute, isCurrentTraitBlocked } = customizationOption);
  if (flag === undefined) {
    flag = false;
  }
  const selectedOptionId = customizationOption.selectedOptionId;
  ({ isLandscape, optionIds, savedOptionId } = customizationOption);
  if (isLandscape === undefined) {
    isLandscape = false;
  }
  ({ onSelectOption, onSelectFinalizeOption } = customizationOption);
  const isTraitRarityVisible = customizationOption(6571).getIsTraitRarityVisible(customizationOption);
  const obj = customizationOption(6571);
  const tmp = selectedOptionId;
  items = [AccessibilityStore];
  dependencyMap = customizationOption(504).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  const obj2 = customizationOption(504);
  _slicedToArray = customizationOption(5400).useIsScreenReaderEnabled();
  const obj3 = customizationOption(5400);
  const traitPickerOptions = customizationOption(13926).useTraitPickerOptions({ customizationOption, optionIds, savedOptionId, rarityOrder });
  const availableTraitOptions = traitPickerOptions.availableTraitOptions;
  const earnedCount = traitPickerOptions.earnedCount;
  let tmp6 = null != selectedOptionId;
  closure_6 = tmp6;
  const tmp7 = selectedOptionId(5751)(() => {
    let num = 0;
    if (!closure_6) {
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
  const obj4 = customizationOption(13926);
  const obj5 = { customizationOption, optionIds, savedOptionId, rarityOrder };
  const obj6 = availableTraitOptions;
  [tmp9, tmp10] = availableTraitOptions.useState(tmp7);
  const tmp8 = _slicedToArray(availableTraitOptions.useState(tmp7), 2);
  const obj8 = { availableTraitOptions, selectedOptionId, onSelectOption: customizationOption(13670).selectCharacterTrait, isPaused: null };
  let tmp11 = flag;
  if (!flag) {
    let tmp12 = !tmp6;
    if (!tmp6) {
      tmp12 = tmp9 > 0;
    }
    tmp11 = tmp12;
  }
  obj8.isPaused = tmp11;
  const autoSelectTraitOption = customizationOption(13927).useAutoSelectTraitOption(obj8);
  let diff = earnedCount;
  if (!tmp6) {
    diff = earnedCount - tmp9;
  }
  const items1 = [availableTraitOptions, selectedOptionId];
  let str = "md";
  const memo = obj6.useMemo(() => {
    let found = availableTraitOptions.find((optionId) => optionId.optionId === selectedOptionId);
    if (found == null) {
      found = availableTraitOptions[0];
    }
    return found;
  }, items1);
  if (isLandscape) {
    str = "md";
    if (selectedOptionId(1493)().height <= tmp3(5328).WINDOW_SIZE_THRESHOLD_LARGE) {
      str = "sm";
    }
  }
  if (isFinalizeRoute) {
    const obj9 = { activeCustomizationOption: customizationOption, onSelectOption: onSelectFinalizeOption, disableSwitching: isCurrentTraitBlocked, disabled: flag };
    let tmp16Result = closure_9(tmp3(13928).FinalizeTraitTabs, obj9);
    let tmp19 = closure_9;
  } else {
    const obj10 = { customizationOption, earnedCount: diff, totalCount: traitPickerOptions.totalCount };
    tmp16Result = closure_9(EarnedCountHeader, obj10);
    tmp19 = closure_9;
  }
  const obj11 = { header: tmp16Result, optionList: null, selectedAsset: null, isDetailsVisible: null, isRarityVisible: null };
  const obj12 = { customizationOption, size: str, options: availableTraitOptions, selectedOptionId, disabled: flag, hideRarity: !isTraitRarityVisible, introStartIndex: null, onIntroStep: null, onSelectOption: null };
  let num2 = 0;
  const obj7 = customizationOption(13927);
  if (!tmp6) {
    num2 = tmp7;
  }
  obj12.introStartIndex = num2;
  obj12.onIntroStep = tmp10;
  obj12.onSelectOption = onSelectOption;
  obj11.optionList = tmp19(tmp(13922), obj12, customizationOption);
  obj11.selectedAsset = memo;
  if (!tmp6) {
    tmp6 = 0 === tmp7;
  }
  obj11.isDetailsVisible = tmp6;
  obj11.isRarityVisible = isTraitRarityVisible;
  const merged = Object.assign(obj11);
  return tmp19(isLandscape ? TraitPickerLandscape : TraitPickerPortrait, {});
};