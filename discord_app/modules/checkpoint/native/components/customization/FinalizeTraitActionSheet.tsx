// === Module 14545: FinalizeTraitActionSheet ===

// Module 14545 (FinalizeTraitActionSheet)
import jsxProd from "jsxProd" /* 21 */;
import _modDef3317 from "module_3317" /* 3317 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5552 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6744 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const items = [CheckpointCustomizationUtils.CheckpointCustomizationOption.AURA, CheckpointCustomizationUtils.CheckpointCustomizationOption.WEARABLE, CheckpointCustomizationUtils.CheckpointCustomizationOption.SHOES, CheckpointCustomizationUtils.CheckpointCustomizationOption.HAT, CheckpointCustomizationUtils.CheckpointCustomizationOption.OUTFIT, CheckpointCustomizationUtils.CheckpointCustomizationOption.FACE];
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/FinalizeTraitActionSheet.tsx");

export default function FinalizeTraitActionSheet(onSelectOption) {
  onSelectOption = onSelectOption.onSelectOption;
  let obj = { startExpanded: true, header: null, children: null };
  const obj2 = { title: null };
  const intl = onSelectOption(1113).intl;
  obj2.title = intl.string(_modDef3317.Zl5vPW);
  obj.header = jsx(onSelectOption(7913).BottomSheetTitleHeader, { title: null });
  const obj3 = { hasIcons: false, accessibilityLabel: null, defaultValue: null, onChange: null, children: null };
  const intl2 = onSelectOption(1113).intl;
  obj3.accessibilityLabel = intl2.string(_modDef3317.Zl5vPW);
  obj3.defaultValue = onSelectOption.selectedOption;
  obj3.onChange = function onChange(arg0) {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    onSelectOption(arg0);
  };
  obj3.children = items.map((value) => {
    const obj = { value, label: onSelectOption(6744).getCustomizationOptionName(value) };
    return jsx(onSelectOption(7747).TableRadioRow, { value, label: onSelectOption(6744).getCustomizationOptionName(value) }, value);
  });
  obj.children = jsx(onSelectOption(7745).TableRadioGroup, { hasIcons: false, accessibilityLabel: null, defaultValue: null, onChange: null, children: null });
  return jsx(onSelectOption(7951).ActionSheet, { startExpanded: true, header: null, children: null });
};