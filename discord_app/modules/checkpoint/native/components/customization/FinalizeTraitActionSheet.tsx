// === Module 13830: FinalizeTraitActionSheet ===

// Module 13830 (FinalizeTraitActionSheet)
import jsxProd from "jsxProd" /* 21 */;
import _modDef3219 from "module_3219" /* 3219 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5381 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6554 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const items = [{ option: CheckpointCustomizationUtils.CheckpointCustomizationOption.AURA, subtitle: _modDef3219.f4BaUg }, , , , , ];
let obj = { option: CheckpointCustomizationUtils.CheckpointCustomizationOption.AURA, subtitle: _modDef3219.f4BaUg };
items[1] = { option: CheckpointCustomizationUtils.CheckpointCustomizationOption.WEARABLE, subtitle: _modDef3219.gpEOaS };
let obj2 = { option: CheckpointCustomizationUtils.CheckpointCustomizationOption.WEARABLE, subtitle: _modDef3219.gpEOaS };
items[2] = { option: CheckpointCustomizationUtils.CheckpointCustomizationOption.SHOES, subtitle: _modDef3219["l/tCAO"] };
let obj3 = { option: CheckpointCustomizationUtils.CheckpointCustomizationOption.SHOES, subtitle: _modDef3219["l/tCAO"] };
items[3] = { option: CheckpointCustomizationUtils.CheckpointCustomizationOption.HAT, subtitle: _modDef3219["+oFzYq"] };
const obj4 = { option: CheckpointCustomizationUtils.CheckpointCustomizationOption.HAT, subtitle: _modDef3219["+oFzYq"] };
items[4] = { option: CheckpointCustomizationUtils.CheckpointCustomizationOption.OUTFIT, subtitle: _modDef3219.xa55WX };
const obj5 = { option: CheckpointCustomizationUtils.CheckpointCustomizationOption.OUTFIT, subtitle: _modDef3219.xa55WX };
items[5] = { option: CheckpointCustomizationUtils.CheckpointCustomizationOption.FACE, subtitle: _modDef3219["1dd6Fx"] };
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/FinalizeTraitActionSheet.tsx");

export default function FinalizeTraitActionSheet(onSelectOption) {
  onSelectOption = onSelectOption.onSelectOption;
  let obj = { startExpanded: true, header: null, children: null };
  const obj2 = { title: null };
  let intl = onSelectOption(1113).intl;
  obj2.title = intl.string(_modDef3219.Zl5vPW);
  obj.header = jsx(onSelectOption(7441).BottomSheetTitleHeader, { title: null });
  const obj3 = { hasIcons: false, accessibilityLabel: null, defaultValue: null, onChange: null, children: null };
  const intl2 = onSelectOption(1113).intl;
  obj3.accessibilityLabel = intl2.string(_modDef3219.Zl5vPW);
  obj3.defaultValue = onSelectOption.selectedOption;
  obj3.onChange = function onChange(arg0) {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    onSelectOption(arg0);
  };
  obj3.children = items.map((option) => {
    option = option.option;
    const obj = { value: option, label: onSelectOption(6554).getCustomizationOptionName(option), subLabel: null };
    const intl = onSelectOption(1113).intl;
    obj.subLabel = intl.string(option.subtitle);
    return jsx(onSelectOption(7187).TableRadioRow, { value: option, label: onSelectOption(6554).getCustomizationOptionName(option), subLabel: null }, option);
  });
  obj.children = jsx(onSelectOption(7184).TableRadioGroup, { hasIcons: false, accessibilityLabel: null, defaultValue: null, onChange: null, children: null });
  return jsx(onSelectOption(7486).ActionSheet, { startExpanded: true, header: null, children: null });
};