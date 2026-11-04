// === Module 13905: CustomizationControls ===

// Module 13905 (CustomizationControls)
import jsxProd from "jsxProd" /* 21 */;
import TraitPickerControlsDefault from "TraitPickerControls" /* 13906 */;
import size from "module_2" /* 2 */;

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/CustomizationControls.tsx");

export default function CustomizationControls(arg0) {
  ({ activeCustomizationOption, isFinalizeRoute } = arg0);
  ({ isCurrentTraitBlocked, isSaving, isLandscape, onSelectFinalizeOption, onSelectTraitOption } = arg0);
  let str = "finalize";
  if (!isFinalizeRoute) {
    str = activeCustomizationOption;
  }
  return jsx(TraitPickerControlsDefault, { activeCustomizationOption, isFinalizeRoute, isCurrentTraitBlocked, disabled, isLandscape, onSelectOption, onSelectFinalizeOption }, str);
};