// discord_app/modules/checkpoint/native/components/customization/FinalizeTraitPicker.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import _modDef3339 from "../../../Checkpoint2026.messages.js";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import CheckpointCharacterTraits from "../../../CheckpointCharacterTraits.tsx";
import CheckpointTrait from "../../../../../../discord_common/js/shared/shared-constants/CheckpointTrait.tsx";
import CheckpointCustomizationUtils from "../../../CheckpointCustomizationUtils.tsx";
import TraitOptionItem from "TraitOptionItem.tsx";
import TraitPicker from "TraitPicker.tsx";
import useTraitPicker from "useTraitPicker.tsx";
import useLastColorwayIdByOutfitIdDefault from "../../../hooks/useLastColorwayIdByOutfitId.tsx";
import useLastMoreTabOptionDefault from "../../../hooks/useLastMoreTabOption.tsx";
import FinalizeTraitTabs from "FinalizeTraitTabs.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
function ColorwayDetails(option) {
  option = option.option;
  if (option != null) {
    const name = option.getName();
  }
  let outfitName;
  if (null != option) {
    outfitName = CheckpointCustomizationUtils.getOutfitName(option.optionId);
  }
  const obj2 = {
    customizationOption: CheckpointCustomizationUtils.CheckpointCustomizationOption.OUTFIT_COLOR,
    option,
    title: null,
    titleAccessibilityLabel: null,
  };
  let tmp8;
  if (null != outfitName) {
    const obj3 = { children: null };
    items = [name];
    const obj4 = { variant: "body-lg/medium", color: "text-subtle", children: null };
    const _HermesInternal = HermesInternal;
    obj4.children = " / " + outfitName;
    items[1] = React4(Text_Text.Text, obj4);
    obj3.children = items;
    tmp8 = timestampProducer(hasOwnProperty, obj3);
  }
  obj2.title = tmp8;
  let combined;
  if (null != outfitName) {
    const _HermesInternal2 = HermesInternal;
    combined = "" + name + ", " + outfitName;
  }
  obj2.titleAccessibilityLabel = combined;
  return React4(TraitPicker.TraitPickerDetails, obj2);
}
function NoOutfitColorways(minHeight) {
  minHeight = minHeight.minHeight;
  const tmp = closure_7();
  items = [tmp.message];
  let tmp4 = null != minHeight;
  if (tmp4) {
    const obj = { minHeight };
    tmp4 = obj;
  }
  const obj2 = { style: items, children: null };
  items[1] = tmp4;
  const obj3 = { variant: "body-lg/medium", color: "text-default", children: null };
  const intl = util.intl;
  obj3.children = intl.string(_modDef3339.zsYYN1);
  const items1 = [React4(Text_Text.Text, obj3)];
  const obj4 = { variant: "body-md/medium", color: "text-subtle", style: tmp.description, children: null };
  const intl2 = util.intl;
  obj4.children = intl2.string(_modDef3339.BkuqWx);
  items1[1] = React4(Text_Text.Text, obj4);
  obj2.children = items1;
  return timestampProducer(View, obj2);
}
function DetailsSpacer() {
  const tmp = closure_7();
  const obj = {
    style: tmp.message,
    accessibilityElementsHidden: true,
    importantForAccessibility: "no-hide-descendants",
    children: null,
  };
  items = [
    React4(Text_Text.Text, { variant: "body-lg/medium", children: " " }),
    React4(Text_Text.Text, { variant: "body-md/medium", style: tmp.description, children: " " }),
  ];
  obj.children = items;
  return timestampProducer(View, obj);
}
function OptionListSpacer(arg0) {
  const obj = {
    style: { height: TraitOptionItem.TRAIT_OPTION_SIZE_TO_DIMENSIONS[arg0.size].height },
    accessibilityElementsHidden: true,
    importantForAccessibility: "no-hide-descendants",
  };
  return React4(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const createStyles = fn(4792);
let obj2 = { message: { paddingHorizontal: fn(12694).CONTENT_INSET }, description: null };
let obj3 = { paddingHorizontal: fn(12694).CONTENT_INSET };
obj2.description = { marginTop: nativeDefault.space.PX_4 };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/FinalizeTraitPicker.tsx");

export default function FinalizeTraitPicker(arg0) {
  ({ customizationOption, disabled, isLandscape } = arg0);
  ({ isCurrentTraitBlocked, onSelectOption, onSelectFinalizeOption } = arg0);
  const tmp2 = useLastColorwayIdByOutfitIdDefault();
  closure_0 = tmp2;
  const tmp3 = useLastMoreTabOptionDefault(customizationOption);
  const traitPicker = useTraitPicker.useTraitPicker({ customizationOption, disabled, onSelectOption });
  const traitOptionSize = TraitPicker.useTraitOptionSize(isLandscape);
  const tmp7 = TraitPicker;
  const obj3 = {
    header: React4(FinalizeTraitTabs.FinalizeTraitTabs, {
      activeCustomizationOption: customizationOption,
      moreTabOption: tmp3,
      onSelectOption: onSelectFinalizeOption,
      isCurrentTraitBlocked,
      disabled,
    }),
  };
  if (CheckpointCustomizationUtils.CheckpointCustomizationOption.OUTFIT_COLOR === customizationOption) {
    const selectedOptionId = traitPicker.selectedOptionId;
    if (null != selectedOptionId) {
      if (!tmp4Result.isTraitNoneOptionId(CheckpointTrait.CheckpointTrait.OUTFIT, selectedOptionId)) {
        const obj4 = { optionList: null, details: null };
        ({ traitOptions, onSelectOption: onSelectOption2 } = traitPicker);
        const obj5 = {
          customizationOption,
          size: traitOptionSize,
          options: traitOptions,
          selectedOptionId: traitPicker.selectedOptionId,
          disabled,
          onSelectOption: onSelectOption2,
        };
        obj4.optionList = React4(TraitPicker.TraitPickerOptionList, obj5);
        const obj6 = { option: traitPicker.selectedOption };
        obj4.details = React4(ColorwayDetails, obj6);
      }
      tmp4Result = CheckpointCharacterTraits;
    }
    const obj7 = { optionList: null, details: null };
    if (isLandscape) {
      const obj8 = { size: traitOptionSize };
      obj7.optionList = React4(OptionListSpacer, obj8);
      obj7.details = React4(NoOutfitColorways, {});
    } else {
      const obj9 = { minHeight: TraitOptionItem.TRAIT_OPTION_SIZE_TO_DIMENSIONS[traitOptionSize].height };
      obj7.optionList = React4(NoOutfitColorways, obj9);
      obj7.details = React4(DetailsSpacer, {});
    }
  } else {
    if (CheckpointCustomizationUtils.CheckpointCustomizationOption.OUTFIT === customizationOption) {
      const obj10 = { optionList: null, details: null };
      function selectOutfit(arg0, arg1) {
        value = closure_0.get(arg1);
        if (value == null) {
          value = arg1;
        }
        traitPicker.onSelectOption(arg0, value);
      }
      const result = CheckpointCustomizationUtils.withLastColorwayThumbnails(traitPicker.traitOptions, tmp2);
      const obj11 = {
        customizationOption,
        size: traitOptionSize,
        options: result,
        selectedOptionId: traitPicker.selectedOptionId,
        disabled,
        onSelectOption: selectOutfit,
      };
      obj10.optionList = React4(TraitPicker.TraitPickerOptionList, obj11);
      const obj12 = { customizationOption, option: traitPicker.selectedOption };
      obj10.details = React4(TraitPicker.TraitPickerDetails, obj12);
      let obj13 = obj10;
      const tmp4Result2 = CheckpointCustomizationUtils;
    } else {
      obj13 = { optionList: null, details: null };
      ({ traitOptions: traitOptions2, onSelectOption: onSelectOption3 } = traitPicker);
      const obj14 = {
        customizationOption,
        size: traitOptionSize,
        options: traitOptions2,
        selectedOptionId: traitPicker.selectedOptionId,
        disabled,
        onSelectOption: onSelectOption3,
      };
      obj13.optionList = React4(TraitPicker.TraitPickerOptionList, obj14);
      const obj15 = { customizationOption, option: traitPicker.selectedOption };
      obj13.details = React4(TraitPicker.TraitPickerDetails, obj15);
    }
    const merged = Object.assign(obj13);
    return React4(tmp8, obj3);
  }
  tmp8 = isLandscape ? tmp7.TraitPickerLandscape : tmp7.TraitPickerPortrait;
}
