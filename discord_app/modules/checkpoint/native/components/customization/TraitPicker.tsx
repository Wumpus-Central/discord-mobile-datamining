// === Module 12869: TraitPicker ===

// Module 12869 (TraitPicker)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1112 */;
import _modDef3494 from "module_3494" /* 3494 */;
import useWindowSizeClassifier from "useWindowSizeClassifier" /* 5192 */;
import Text_Text from "Text/Text" /* 5603 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6734 */;
import CheckpointTextDefault from "CheckpointText" /* 12590 */;
import TraitOptionListDefault from "TraitOptionList" /* 12867 */;
import TraitOptionDetailsDefault from "TraitOptionDetails" /* 12870 */;
import useTraitPicker from "useTraitPicker" /* 12872 */;
import noop from "module_19" /* 19 */;

require = fn;
function EarnedCountHeader(customizationOption) {
  ({ earnedCount, totalCount } = customizationOption);
  const tmp = closure_9();
  const customizationOptionName = CheckpointCustomizationUtils.getCustomizationOptionName(customizationOption.customizationOption);
  const intl = util.intl;
  const combined = "" + customizationOptionName + ", " + intl.formatToPlainString(_modDef3494.Vfq58K, {
    earnedCount,
    totalCount,
    countHook(arg0) {
      return arg0;
    }
  });
  const obj3 = { variant: "body-md/medium", color: "text-default", style: tmp.earnedRow, accessibilityRole: "header", accessibilityLabel: combined, children: null };
  const intl2 = util.intl;
  obj3.children = intl2.format(_modDef3494.Vfq58K, {
    earnedCount,
    totalCount,
    countHook(children, arg1) {
      return closure_1_5(CheckpointTextDefault, { variant: "body-md/semibold", tabularNumbers: true, children }, arg1);
    }
  });
  return hasOwnProperty(Text_Text.Text, obj3);
}
class TraitPickerDetails {
  constructor(arg0) {
    option = global.option;
    ({ customizationOption, title, titleAccessibilityLabel } = global);
    tmp2 = null;
    if (null != option) {
      tmp3 = jsx;
      tmp4 = View;
      obj = { style: null, children: null };
      obj.style = tmp.details;
      tmp5 = closure_1;
      tmp6 = closure_2;
      obj1 = { option: null, hideRarity: null, title: null, titleAccessibilityLabel: null };
      obj1.option = option;
      tmp8 = closure_0;
      tmp7 = closure_1(closure_2[13]);
      obj3 = closure_0(closure_2[6]);
      obj1.hideRarity = !obj3.getIsTraitRarityVisible(customizationOption);
      obj1.title = title;
      obj1.titleAccessibilityLabel = titleAccessibilityLabel;
      obj.children = jsx(tmp7, obj1);
      tmp2 = jsx(View, obj);
    }
    return tmp2;
  }
}
class TraitPickerOptionList {
  constructor(arg0) {
    customizationOption = global.customizationOption;
    merged = Object.assign(global, Object.assign({ customizationOption: 0 }));
    obj = {};
    tmp2 = closure_1(closure_2[4]);
    merged1 = Object.assign(merged);
    obj.key = customizationOption;
    obj.customizationOption = customizationOption;
    obj2 = closure_0(closure_2[6]);
    obj.hideRarity = !obj2.getIsTraitRarityVisible(customizationOption);
    return createElement(tmp2, obj);
  }
}
class TraitPickerPortrait {
  constructor(arg0) {
    ({ header, optionList, details } = global);
    obj = { style: closure_9().container, children: null };
    items = [, , ];
    items[0] = header;
    items[1] = optionList;
    items[2] = details;
    obj.children = items;
    return jsxs(View, obj);
  }
}
class TraitPickerLandscape {
  constructor(arg0) {
    details = global.details;
    ({ header, optionList } = global);
    tmp = closure_9();
    tmp2 = jsxs;
    obj = { alwaysBounceVertical: false, contentContainerStyle: tmp.landscapeScrollContent, children: null };
    tmp4 = jsx;
    tmp5 = View;
    obj1 = { style: tmp.landscapeGap };
    tmp3 = ScrollView;
    items = [, , , , , ];
    items[0] = jsx(View, obj1);
    items[1] = header;
    obj7 = { style: tmp.landscapeGap };
    items[2] = jsx(View, obj7);
    tmp2Result = null != details;
    if (tmp2Result) {
      tmp7 = Fragment;
      obj8 = { children: null };
      items1 = [, ];
      items1[0] = details;
      obj9 = { style: null };
      obj9.style = tmp.landscapeGap;
      items1[1] = tmp4(tmp5, obj9);
      obj8.children = items1;
      tmp2Result = tmp2(Fragment, obj8);
    }
    items[3] = tmp2Result;
    items[4] = optionList;
    obj10 = { style: tmp.landscapeGap };
    items[5] = tmp4(tmp5, obj10);
    obj.children = items;
    return tmp2(tmp3, obj);
  }
}
get_ActivityIndicator = fn(17);
({ ScrollView: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6, Fragment: metroImportDefault } = jsxProd);
const createElement = fn(19).createElement;
const createStyles = fn(5012);
let obj2 = { container: { gap: fn(12867).TRAIT_OPTION_SPACING }, earnedRow: null, landscapeGap: null, details: null, landscapeScrollContent: null };
let obj3 = { gap: fn(12867).TRAIT_OPTION_SPACING };
obj2.earnedRow = { paddingHorizontal: fn(12867).CONTENT_INSET };
let obj4 = { paddingHorizontal: fn(12867).CONTENT_INSET };
obj2.landscapeGap = { flexGrow: 1, minHeight: nativeDefault.space.PX_8, maxHeight: nativeDefault.space.PX_16 };
let obj5 = { flexGrow: 1, minHeight: nativeDefault.space.PX_8, maxHeight: nativeDefault.space.PX_16 };
obj2.details = { paddingHorizontal: fn(12867).CONTENT_INSET };
obj2.landscapeScrollContent = { flexGrow: 1, justifyContent: "center" };
const React6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/TraitPicker.tsx");

export default function TraitPicker(onSelectOption) {
  ({ customizationOption, disabled, isLandscape } = onSelectOption);
  const traitPicker = useTraitPicker.useTraitPicker({ customizationOption, disabled, onSelectOption: onSelectOption.onSelectOption });
  let str = "md";
  if (isLandscape) {
    str = "md";
    if (tmp4 <= useWindowSizeClassifier.WINDOW_SIZE_THRESHOLD_LARGE) {
      str = "sm";
    }
  }
  const obj2 = { header: hasOwnProperty(EarnedCountHeader, { customizationOption, earnedCount: traitPicker.earnedCount, totalCount: traitPicker.totalCount }), optionList: hasOwnProperty(TraitPickerOptionList, { customizationOption, size: str, options: traitPicker.traitOptions, selectedOptionId: traitPicker.selectedOptionId, disabled, onSelectOption: traitPicker.onSelectOption }), details: hasOwnProperty(TraitPickerDetails, { customizationOption, option: traitPicker.selectedOption }) };
  return hasOwnProperty(isLandscape ? TraitPickerLandscape : TraitPickerPortrait, obj2);
};
export function useTraitOptionSize(isLandscape) {
  let str = "md";
  if (isLandscape) {
    str = "md";
    if (tmp2 <= useWindowSizeClassifier.WINDOW_SIZE_THRESHOLD_LARGE) {
      str = "sm";
    }
  }
  return str;
}
export { TraitPickerDetails };
export { TraitPickerOptionList };
export { TraitPickerPortrait };
export { TraitPickerLandscape };