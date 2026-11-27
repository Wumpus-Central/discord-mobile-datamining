// === Module 12938: FinalizeTraitActionSheet ===

// Module 12938 (FinalizeTraitActionSheet)
import jsxProd from "jsxProd" /* 21 */;
import _modDef3495 from "module_3495" /* 3495 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5257 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/FinalizeTraitActionSheet.tsx");

export default function FinalizeTraitActionSheet(onSelectOption) {
  onSelectOption = onSelectOption.onSelectOption;
  let obj = { startExpanded: true, header: null, children: null };
  const obj2 = { title: null };
  const intl = onSelectOption(1112).intl;
  obj2.title = intl.string(_modDef3495.Zl5vPW);
  obj.header = jsx(onSelectOption(7507).BottomSheetTitleHeader, { title: null });
  const obj3 = { hasIcons: false, accessibilityLabel: null, defaultValue: null, onChange: null, children: null };
  const intl2 = onSelectOption(1112).intl;
  obj3.accessibilityLabel = intl2.string(_modDef3495.Zl5vPW);
  obj3.defaultValue = onSelectOption.selectedOption;
  obj3.onChange = function onChange(arg0) {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    onSelectOption(arg0);
  };
  const prop = onSelectOption(6765).FINALIZE_MORE_OPTIONS;
  obj3.children = prop.map((value) => {
    const obj = { value, label: onSelectOption(6765).getCustomizationOptionName(value) };
    return jsx(onSelectOption(7253).TableRadioRow, { value, label: onSelectOption(6765).getCustomizationOptionName(value) }, value);
  });
  obj.children = jsx(onSelectOption(7251).TableRadioGroup, { hasIcons: false, accessibilityLabel: null, defaultValue: null, onChange: null, children: null });
  return jsx(onSelectOption(7546).ActionSheet, { startExpanded: true, header: null, children: null });
};