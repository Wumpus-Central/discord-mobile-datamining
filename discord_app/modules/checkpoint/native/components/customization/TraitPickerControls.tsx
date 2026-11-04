// === Module 13907: TraitPickerControls ===

// Module 13907 (TraitPickerControls)
import jsxProd from "jsxProd" /* 21 */;
import useTraitPickerSelection from "useTraitPickerSelection" /* 13908 */;
import TraitPickerDefault from "TraitPicker" /* 13909 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/TraitPickerControls.tsx");

export default function TraitPickerControls(onSelectOption) {
  const activeCustomizationOption = onSelectOption.activeCustomizationOption;
  const merged = Object.assign(onSelectOption, Object.assign({ activeCustomizationOption: 0, onSelectOption: 0 }));
  const traitPickerSelection = useTraitPickerSelection.useTraitPickerSelection({ customizationOption: activeCustomizationOption, onSelectOption: onSelectOption.onSelectOption });
  const obj3 = {};
  const merged1 = Object.assign(merged);
  obj3.customizationOption = activeCustomizationOption;
  ({ optionIds: obj2.optionIds, savedOptionId: obj2.savedOptionId, selectedOptionId: obj2.selectedOptionId, onSelectOption: obj2.onSelectOption } = traitPickerSelection);
  return jsx(TraitPickerDefault, {});
};