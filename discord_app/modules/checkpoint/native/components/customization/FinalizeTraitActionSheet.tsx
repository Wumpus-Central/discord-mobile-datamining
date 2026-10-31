// discord_app/modules/checkpoint/native/components/customization/FinalizeTraitActionSheet.tsx
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import _modDef3092 from "../../../Checkpoint2026.messages.js";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import CheckpointCustomizationUtils from "../../../CheckpointCustomizationUtils.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const jsx = jsxProd.jsx;
const items = [
  { option: CheckpointCustomizationUtils.CheckpointCustomizationOption.AURA, subtitle: _modDef3092.f4BaUg },
  ,
  ,
  ,
  ,
];
let obj = { option: CheckpointCustomizationUtils.CheckpointCustomizationOption.AURA, subtitle: _modDef3092.f4BaUg };
items[1] = {
  option: CheckpointCustomizationUtils.CheckpointCustomizationOption.WEARABLE,
  subtitle: _modDef3092.gpEOaS,
};
let obj2 = {
  option: CheckpointCustomizationUtils.CheckpointCustomizationOption.WEARABLE,
  subtitle: _modDef3092.gpEOaS,
};
items[2] = {
  option: CheckpointCustomizationUtils.CheckpointCustomizationOption.SHOES,
  subtitle: _modDef3092["l/tCAO"],
};
let obj3 = {
  option: CheckpointCustomizationUtils.CheckpointCustomizationOption.SHOES,
  subtitle: _modDef3092["l/tCAO"],
};
items[3] = { option: CheckpointCustomizationUtils.CheckpointCustomizationOption.HAT, subtitle: _modDef3092["+oFzYq"] };
const obj4 = {
  option: CheckpointCustomizationUtils.CheckpointCustomizationOption.HAT,
  subtitle: _modDef3092["+oFzYq"],
};
items[4] = { option: CheckpointCustomizationUtils.CheckpointCustomizationOption.OUTFIT, subtitle: _modDef3092.xa55WX };
const obj5 = {
  option: CheckpointCustomizationUtils.CheckpointCustomizationOption.OUTFIT,
  subtitle: _modDef3092.xa55WX,
};
items[5] = { option: CheckpointCustomizationUtils.CheckpointCustomizationOption.FACE, subtitle: _modDef3092["1dd6Fx"] };
const result = size.fileFinishedImporting(
  "modules/checkpoint/native/components/customization/FinalizeTraitActionSheet.tsx",
);

export default function FinalizeTraitActionSheet(onSelectOption) {
  onSelectOption = onSelectOption.onSelectOption;
  let obj = { startExpanded: true, header: null, children: null };
  const obj2 = { title: null };
  let intl = onSelectOption(1113).intl;
  obj2.title = intl.string(_modDef3092.Zl5vPW);
  obj.header = jsx(onSelectOption(7321).BottomSheetTitleHeader, { title: null });
  const obj3 = { hasIcons: false, accessibilityLabel: null, defaultValue: null, onChange: null, children: null };
  const intl2 = onSelectOption(1113).intl;
  obj3.accessibilityLabel = intl2.string(_modDef3092.Zl5vPW);
  obj3.defaultValue = onSelectOption.selectedOption;
  obj3.onChange = function onChange(arg0) {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    onSelectOption(arg0);
  };
  obj3.children = items.map((option) => {
    option = option.option;
    const obj = { value: option, label: onSelectOption(6434).getCustomizationOptionName(option), subLabel: null };
    const intl = onSelectOption(1113).intl;
    obj.subLabel = intl.string(option.subtitle);
    return jsx(
      onSelectOption(7061).TableRadioRow,
      { value: option, label: onSelectOption(6434).getCustomizationOptionName(option), subLabel: null },
      option,
    );
  });
  obj.children = jsx(onSelectOption(7058).TableRadioGroup, {
    hasIcons: false,
    accessibilityLabel: null,
    defaultValue: null,
    onChange: null,
    children: null,
  });
  return jsx(onSelectOption(7366).ActionSheet, { startExpanded: true, header: null, children: null });
}
