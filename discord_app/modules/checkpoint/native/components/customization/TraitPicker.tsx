// discord_app/modules/checkpoint/native/components/customization/TraitPicker.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import useWindowDimensionsDefault from "../../../../screen/useWindowDimensions.native.tsx";
import _modDef3248 from "../../../Checkpoint2026.messages.js";
import useWindowSizeClassifier from "../../../../screen/native/useWindowSizeClassifier.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import CheckpointCustomizationUtils from "../../../CheckpointCustomizationUtils.tsx";
import CheckpointActionCreators from "../../../CheckpointActionCreators.tsx";
import CheckpointTextDefault from "../CheckpointText.tsx";
import TraitOptionListDefault from "TraitOptionList.tsx";
import TraitOptionDetails from "TraitOptionDetails.tsx";
import useTraitPickerOptions from "../../../hooks/useTraitPickerOptions.tsx";
import useAutoSelectTraitOption from "../../../hooks/useAutoSelectTraitOption.tsx";
import FinalizeTraitTabs from "FinalizeTraitTabs.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const TraitOptionDetailsDefault = TraitOptionDetails;

require = fn;
function EarnedCountHeader(customizationOption) {
  ({ earnedCount, totalCount } = customizationOption);
  const tmp = closure_10();
  const customizationOptionName = CheckpointCustomizationUtils.getCustomizationOptionName(
    customizationOption.customizationOption,
  );
  const intl = util.intl;
  const combined =
    "" +
    customizationOptionName +
    ", " +
    intl.formatToPlainString(_modDef3248.Vfq58K, {
      earnedCount,
      totalCount,
      countHook(arg0) {
        return arg0;
      },
    });
  const obj3 = {
    variant: "body-sm/medium",
    color: "text-default",
    style: tmp.earnedRow,
    accessibilityRole: "header",
    accessibilityLabel: combined,
    children: null,
  };
  const intl2 = util.intl;
  obj3.children = intl2.format(_modDef3248.Vfq58K, {
    earnedCount,
    totalCount,
    countHook(children, arg1) {
      return closure_1_7(CheckpointTextDefault, { variant: "mono-md/bold", children }, arg1);
    },
  });
  return metroImportDefault(Text_Text.Text, obj3);
}
function TraitPickerDetails(arg0) {
  ({ asset, descriptionVisibility } = arg0);
  return metroImportDefault(hasOwnProperty, {
    style: closure_10().details,
    children: metroImportDefault(TraitOptionDetailsDefault, { asset, descriptionVisibility }),
  });
}
function TraitPickerPortrait(selectedAsset) {
  selectedAsset = selectedAsset.selectedAsset;
  ({ header, optionList, isRarityVisible } = selectedAsset);
  const obj = { style: closure_10().container, children: null };
  items = [header, optionList];
  if (null == selectedAsset) {
    items[2] = tmp3;
    obj.children = items;
    return tmp(tmp2, obj);
  } else {
    const obj2 = { asset: selectedAsset, descriptionVisibility: null };
    const DescriptionVisibility = TraitOptionDetails.DescriptionVisibility;
    obj2.descriptionVisibility = isRarityVisible ? DescriptionVisibility.VISIBLE : DescriptionVisibility.INVISIBLE;
    metroImportDefault(TraitPickerDetails, obj2);
  }
}
function TraitPickerLandscape(selectedAsset) {
  selectedAsset = selectedAsset.selectedAsset;
  ({ header, optionList, isRarityVisible } = selectedAsset);
  const tmp = closure_10();
  const obj = { alwaysBounceVertical: false, contentContainerStyle: tmp.landscapeScrollContent, children: null };
  items = [
    metroImportDefault(hasOwnProperty, { style: tmp.landscapeGap }),
    header,
    metroImportDefault(hasOwnProperty, { style: tmp.landscapeGap }),
    ,
    ,
  ];
  if (null == selectedAsset) {
    items[3] = tmp6;
    items[4] = optionList;
    const obj4 = { style: tmp.landscapeGap };
    items[5] = metroImportDefault(hasOwnProperty, obj4);
    obj.children = items;
    return React5(React4, obj);
  } else {
    let tmp4Result2 = TraitPickerDetails;
    let obj5 = { asset: selectedAsset, descriptionVisibility: null };
    const prop = { children: null };
    obj5.descriptionVisibility = isRarityVisible ? prop.VISIBLE : prop.GONE;
    obj5 = [,];
    obj5[0] = metroImportDefault(tmp4Result2, obj5);
    const obj6 = { style: tmp.landscapeGap };
    tmp4Result2 = metroImportDefault(hasOwnProperty, obj6);
    obj5[1] = tmp4Result2;
    prop.children = obj5;
    React5(React6, prop);
    const tmp11 = isRarityVisible ? prop.VISIBLE : prop.GONE;
    const tmp4Result = metroImportDefault(tmp4Result2, obj5);
  }
  const obj2 = { style: tmp.landscapeGap };
  const obj3 = { style: tmp.landscapeGap };
}
get_ActivityIndicator = fn(17);
({ ScrollView: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const rarityOrder = fn(6199).CHECKPOINT_RARITY_ORDER_MOBILE;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(5140);
let obj2 = {
  container: { gap: fn(13923).TRAIT_OPTION_SPACING },
  earnedRow: null,
  landscapeGap: null,
  details: null,
  landscapeScrollContent: null,
};
let obj3 = { gap: fn(13923).TRAIT_OPTION_SPACING };
obj2.earnedRow = { paddingHorizontal: fn(13923).CONTENT_INSET };
let obj4 = { paddingHorizontal: fn(13923).CONTENT_INSET };
obj2.landscapeGap = { flexGrow: 1, minHeight: nativeDefault.space.PX_8, maxHeight: nativeDefault.space.PX_16 };
let obj5 = { flexGrow: 1, minHeight: nativeDefault.space.PX_8, maxHeight: nativeDefault.space.PX_16 };
obj2.details = { paddingHorizontal: fn(13923).CONTENT_INSET };
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
  const traitPickerOptions = useTraitPickerOptions.useTraitPickerOptions({
    customizationOption,
    optionIds,
    savedOptionId,
    rarityOrder,
  });
  const availableTraitOptions = traitPickerOptions.availableTraitOptions;
  ({ totalCount, earnedCount } = traitPickerOptions);
  const obj3 = { customizationOption, optionIds, savedOptionId, rarityOrder };
  const obj4 = useAutoSelectTraitOption;
  const autoSelectTraitOption = obj4.useAutoSelectTraitOption({
    availableTraitOptions,
    selectedOptionId,
    onSelectOption: CheckpointActionCreators.selectCharacterTrait,
    isPaused: disabled,
  });
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
    const obj6 = {
      activeCustomizationOption: customizationOption,
      onSelectOption: onSelectFinalizeOption,
      disableSwitching: isCurrentTraitBlocked,
      disabled,
    };
    let tmp8Result = metroImportDefault(FinalizeTraitTabs.FinalizeTraitTabs, obj6);
    let tmp11 = metroImportDefault;
  } else {
    const obj7 = { customizationOption, earnedCount, totalCount };
    tmp8Result = metroImportDefault(EarnedCountHeader, obj7);
    tmp11 = metroImportDefault;
  }
  const obj8 = {
    header: tmp8Result,
    optionList: tmp11(
      TraitOptionListDefault,
      {
        customizationOption,
        size: str,
        options: availableTraitOptions,
        selectedOptionId,
        disabled,
        hideRarity: !isTraitRarityVisible,
        onSelectOption,
      },
      customizationOption,
    ),
    selectedAsset: memo,
    isRarityVisible: isTraitRarityVisible,
  };
  const merged = Object.assign(obj8);
  return tmp11(isLandscape ? TraitPickerLandscape : TraitPickerPortrait, {});
}
