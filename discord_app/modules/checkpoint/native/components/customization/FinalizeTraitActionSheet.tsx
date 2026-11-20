// discord_app/modules/checkpoint/native/components/customization/FinalizeTraitActionSheet.tsx
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import _modDef3341 from "../../../Checkpoint2026.messages.js";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting(
  "modules/checkpoint/native/components/customization/FinalizeTraitActionSheet.tsx",
);

export default function FinalizeTraitActionSheet(onSelectOption) {
  onSelectOption = onSelectOption.onSelectOption;
  let obj = { startExpanded: true, header: null, children: null };
  const obj2 = { title: null };
  const intl = onSelectOption(1112).intl;
  obj2.title = intl.string(_modDef3341.Zl5vPW);
  obj.header = jsx(onSelectOption(7395).BottomSheetTitleHeader, { title: null });
  const obj3 = { hasIcons: false, accessibilityLabel: null, defaultValue: null, onChange: null, children: null };
  const intl2 = onSelectOption(1112).intl;
  obj3.accessibilityLabel = intl2.string(_modDef3341.Zl5vPW);
  obj3.defaultValue = onSelectOption.selectedOption;
  obj3.onChange = function onChange(arg0) {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    onSelectOption(arg0);
  };
  const prop = onSelectOption(6217).FINALIZE_MORE_OPTIONS;
  obj3.children = prop.map((value) => {
    const obj = { value, label: onSelectOption(6217).getCustomizationOptionName(value) };
    return jsx(
      onSelectOption(7229).TableRadioRow,
      { value, label: onSelectOption(6217).getCustomizationOptionName(value) },
      value,
    );
  });
  obj.children = jsx(onSelectOption(7227).TableRadioGroup, {
    hasIcons: false,
    accessibilityLabel: null,
    defaultValue: null,
    onChange: null,
    children: null,
  });
  return jsx(onSelectOption(7433).ActionSheet, { startExpanded: true, header: null, children: null });
}
