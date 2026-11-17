// === Module 13416: FinalizeTraitActionSheet ===

// Module 13416 (FinalizeTraitActionSheet)
import jsxProd from "jsxProd" /* 21 */;
import _modDef3319 from "module_3319" /* 3319 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5546 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6742 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const items = [CheckpointCustomizationUtils.CheckpointCustomizationOption.AURA, CheckpointCustomizationUtils.CheckpointCustomizationOption.WEARABLE, CheckpointCustomizationUtils.CheckpointCustomizationOption.SHOES, CheckpointCustomizationUtils.CheckpointCustomizationOption.HAT, CheckpointCustomizationUtils.CheckpointCustomizationOption.OUTFIT, CheckpointCustomizationUtils.CheckpointCustomizationOption.FACE];
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/FinalizeTraitActionSheet.tsx");

export default function FinalizeTraitActionSheet(onSelectOption) {
  onSelectOption = onSelectOption.onSelectOption;
  let obj = { startExpanded: true, header: null, children: null };
  const obj2 = { title: null };
  const intl = onSelectOption(1113).intl;
  obj2.title = intl.string(_modDef3319.Zl5vPW);
  obj.header = jsx(onSelectOption(7923).BottomSheetTitleHeader, { title: null });
  const obj3 = { hasIcons: false, accessibilityLabel: null, defaultValue: null, onChange: null, children: null };
  const intl2 = onSelectOption(1113).intl;
  obj3.accessibilityLabel = intl2.string(_modDef3319.Zl5vPW);
  obj3.defaultValue = onSelectOption.selectedOption;
  obj3.onChange = function onChange(arg0) {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    onSelectOption(arg0);
  };
  obj3.children = items.map((value) => {
    const obj = { value, label: onSelectOption(6742).getCustomizationOptionName(value) };
    return jsx(onSelectOption(7757).TableRadioRow, { value, label: onSelectOption(6742).getCustomizationOptionName(value) }, value);
  });
  obj.children = jsx(onSelectOption(7755).TableRadioGroup, { hasIcons: false, accessibilityLabel: null, defaultValue: null, onChange: null, children: null });
  return jsx(onSelectOption(7961).ActionSheet, { startExpanded: true, header: null, children: null });
};