// === Module 12916: CustomizationControls ===

// Module 12916 (CustomizationControls)
import jsxProd from "jsxProd" /* 21 */;
import FinalizeTraitPickerDefault from "FinalizeTraitPicker" /* 12917 */;
import TraitPickerDefault from "TraitPicker" /* 12920 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/CustomizationControls.tsx");

export default function CustomizationControls(isFinalizeRoute) {
  ({ activeCustomizationOption, isSaving, isLandscape, onSelectTraitOption } = isFinalizeRoute);
  if (isFinalizeRoute.isFinalizeRoute) {
    const obj2 = { customizationOption: activeCustomizationOption, isCurrentTraitBlocked: tmp, disabled: isSaving, isLandscape, onSelectOption: onSelectTraitOption, onSelectFinalizeOption: tmp2 };
    let tmp3Result = jsx(FinalizeTraitPickerDefault, { customizationOption: activeCustomizationOption, isCurrentTraitBlocked: tmp, disabled: isSaving, isLandscape, onSelectOption: onSelectTraitOption, onSelectFinalizeOption: tmp2 });
  } else {
    const obj = { customizationOption: activeCustomizationOption, disabled: isSaving, isLandscape, onSelectOption: onSelectTraitOption };
    tmp3Result = jsx(TraitPickerDefault, { customizationOption: activeCustomizationOption, disabled: isSaving, isLandscape, onSelectOption: onSelectTraitOption }, activeCustomizationOption);
  }
  return tmp3Result;
};