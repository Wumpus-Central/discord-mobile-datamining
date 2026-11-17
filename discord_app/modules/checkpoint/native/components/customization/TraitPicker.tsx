// === Module 13409: TraitPicker ===

// Module 13409 (TraitPicker)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import useWindowDimensionsDefault from "useWindowDimensions" /* 1496 */;
import _modDef3319 from "module_3319" /* 3319 */;
import useWindowSizeClassifier from "useWindowSizeClassifier" /* 5490 */;
import Text_Text from "Text/Text" /* 5923 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6742 */;
import CheckpointActionCreators from "CheckpointActionCreators" /* 13126 */;
import CheckpointTextDefault from "CheckpointText" /* 13137 */;
import useTraitPickerOptions from "useTraitPickerOptions" /* 13408 */;
import TraitOptionListDefault from "TraitOptionList" /* 13410 */;
import TraitOptionDetailsDefault from "TraitOptionDetails" /* 13412 */;
import useAutoSelectTraitOption from "useAutoSelectTraitOption" /* 13414 */;
import FinalizeTraitTabs from "FinalizeTraitTabs" /* 13415 */;
import noop from "module_19" /* 19 */;

require = fn;
function EarnedCountHeader(customizationOption) {
  ({ earnedCount, totalCount } = customizationOption);
  const tmp = closure_10();
  const customizationOptionName = CheckpointCustomizationUtils.getCustomizationOptionName(customizationOption.customizationOption);
  const intl = util.intl;
  const combined = "" + customizationOptionName + ", " + intl.formatToPlainString(_modDef3319.Vfq58K, {
    earnedCount,
    totalCount,
    countHook(arg0) {
      return arg0;
    }
  });
  const obj3 = { variant: "body-md/medium", color: "text-default", style: tmp.earnedRow, accessibilityRole: "header", accessibilityLabel: combined, children: null };
  const intl2 = util.intl;
  obj3.children = intl2.format(_modDef3319.Vfq58K, {
    earnedCount,
    totalCount,
    countHook(children, arg1) {
      return closure_1_7(CheckpointTextDefault, { variant: "body-md/semibold", tabularNumbers: true, children }, arg1);
    }
  });
  return metroImportDefault(Text_Text.Text, obj3);
}
function TraitPickerDetails(arg0) {
  ({ asset, hideRarity } = arg0);
  return metroImportDefault(hasOwnProperty, { style: closure_10().details, children: metroImportDefault(TraitOptionDetailsDefault, { asset, hideRarity }) });
}
function TraitPickerPortrait(selectedAsset) {
  selectedAsset = selectedAsset.selectedAsset;
  ({ header, optionList, isRarityVisible } = selectedAsset);
  const obj = { style: closure_10().container, children: null };
  items = [header, optionList, ];
  let tmp3 = null != selectedAsset;
  if (tmp3) {
    const obj2 = { asset: selectedAsset, hideRarity: !isRarityVisible };
    tmp3 = metroImportDefault(TraitPickerDetails, obj2);
  }
  items[2] = tmp3;
  obj.children = items;
  return React5(hasOwnProperty, obj);
}
function TraitPickerLandscape(selectedAsset) {
  selectedAsset = selectedAsset.selectedAsset;
  ({ header, optionList, isRarityVisible } = selectedAsset);
  const tmp = closure_10();
  const obj = { alwaysBounceVertical: false, contentContainerStyle: tmp.landscapeScrollContent, children: null };
  items = [metroImportDefault(hasOwnProperty, { style: tmp.landscapeGap }), header, metroImportDefault(hasOwnProperty, { style: tmp.landscapeGap }), , , ];
  let tmp2Result = null != selectedAsset;
  if (tmp2Result) {
    const obj4 = { children: null };
    const obj5 = { asset: selectedAsset, hideRarity: !isRarityVisible };
    const items1 = [metroImportDefault(TraitPickerDetails, obj5), ];
    const obj6 = { style: tmp.landscapeGap };
    items1[1] = metroImportDefault(hasOwnProperty, obj6);
    obj4.children = items1;
    tmp2Result = React5(React6, obj4);
  }
  items[3] = tmp2Result;
  items[4] = optionList;
  items[5] = metroImportDefault(hasOwnProperty, { style: tmp.landscapeGap });
  obj.children = items;
  return React5(React4, obj);
}
get_ActivityIndicator = fn(17);
({ ScrollView: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const rarityOrder = fn(6375).CHECKPOINT_RARITY_ORDER_MOBILE;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(5310);
let obj2 = { container: { gap: fn(13410).TRAIT_OPTION_SPACING }, earnedRow: null, landscapeGap: null, details: null, landscapeScrollContent: null };
let obj3 = { gap: fn(13410).TRAIT_OPTION_SPACING };
obj2.earnedRow = { paddingHorizontal: fn(13410).CONTENT_INSET };
let obj4 = { paddingHorizontal: fn(13410).CONTENT_INSET };
obj2.landscapeGap = { flexGrow: 1, minHeight: nativeDefault.space.PX_8, maxHeight: nativeDefault.space.PX_16 };
let obj5 = { flexGrow: 1, minHeight: nativeDefault.space.PX_8, maxHeight: nativeDefault.space.PX_16 };
obj2.details = { paddingHorizontal: fn(13410).CONTENT_INSET };
obj2.landscapeScrollContent = { flexGrow: 1, justifyContent: "center" };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/TraitPicker.tsx");

export default function TraitPicker(selectedOptionId) {
  ({ customizationOption, disabled } = selectedOptionId);
  ({ isFinalizeRoute, isCurrentTraitBlocked } = selectedOptionId);
  if (disabled === undefined) {
    disabled = false;
  }
  selectedOptionId = selectedOptionId.selectedOptionId;
  ({ isLandscape, optionIds, savedOptionId } = selectedOptionId);
  if (isLandscape === undefined) {
    isLandscape = false;
  }
  ({ onSelectOption, onSelectFinalizeOption } = selectedOptionId);
  const isTraitRarityVisible = CheckpointCustomizationUtils.getIsTraitRarityVisible(customizationOption);
  const traitPickerOptions = useTraitPickerOptions.useTraitPickerOptions({ customizationOption, optionIds, savedOptionId, rarityOrder });
  const availableTraitOptions = traitPickerOptions.availableTraitOptions;
  ({ totalCount, earnedCount } = traitPickerOptions);
  const obj3 = { customizationOption, optionIds, savedOptionId, rarityOrder };
  const obj4 = useAutoSelectTraitOption;
  const autoSelectTraitOption = obj4.useAutoSelectTraitOption({ availableTraitOptions, selectedOptionId, onSelectOption: CheckpointActionCreators.selectCharacterTrait, isPaused: disabled });
  items = [availableTraitOptions, selectedOptionId];
  let str = "md";
  const memo = noop.useMemo(() => {
    let found = availableTraitOptions.find((optionId) => optionId.optionId === selectedOptionId);
    if (found == null) {
      found = availableTraitOptions[0];
    }
    return found;
  }, items);
  if (isLandscape) {
    str = "md";
    if (useWindowDimensionsDefault().height <= useWindowSizeClassifier.WINDOW_SIZE_THRESHOLD_LARGE) {
      str = "sm";
    }
  }
  if (isFinalizeRoute) {
    const obj6 = { activeCustomizationOption: customizationOption, onSelectOption: onSelectFinalizeOption, isCurrentTraitBlocked, disabled };
    let tmp8Result = metroImportDefault(FinalizeTraitTabs.FinalizeTraitTabs, obj6);
    let tmp11 = metroImportDefault;
  } else {
    const obj7 = { customizationOption, earnedCount, totalCount };
    tmp8Result = metroImportDefault(EarnedCountHeader, obj7);
    tmp11 = metroImportDefault;
  }
  const obj8 = { header: tmp8Result, optionList: tmp11(TraitOptionListDefault, { customizationOption, size: str, options: availableTraitOptions, selectedOptionId, disabled, hideRarity: !isTraitRarityVisible, onSelectOption }, customizationOption), selectedAsset: memo, isRarityVisible: isTraitRarityVisible };
  const merged = Object.assign(obj8);
  return tmp11(isLandscape ? TraitPickerLandscape : TraitPickerPortrait, {});
};