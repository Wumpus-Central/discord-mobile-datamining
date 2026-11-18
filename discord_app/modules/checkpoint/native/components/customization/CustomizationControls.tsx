// discord_app/modules/checkpoint/native/components/customization/CustomizationControls.tsx
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import FinalizeTraitPickerDefault from "FinalizeTraitPicker.tsx";
import TraitPickerDefault from "TraitPicker.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const jsx = jsxProd.jsx;
const result = size.fileFinishedImporting(
  "modules/checkpoint/native/components/customization/CustomizationControls.tsx",
);

export default function CustomizationControls(isFinalizeRoute) {
  ({ activeCustomizationOption, isSaving, isLandscape, onSelectTraitOption } = isFinalizeRoute);
  if (isFinalizeRoute.isFinalizeRoute) {
    const obj2 = {
      customizationOption: activeCustomizationOption,
      isCurrentTraitBlocked: tmp,
      disabled: isSaving,
      isLandscape,
      onSelectOption: onSelectTraitOption,
      onSelectFinalizeOption: tmp2,
    };
    let tmp3Result = jsx(FinalizeTraitPickerDefault, {
      customizationOption: activeCustomizationOption,
      isCurrentTraitBlocked: tmp,
      disabled: isSaving,
      isLandscape,
      onSelectOption: onSelectTraitOption,
      onSelectFinalizeOption: tmp2,
    });
  } else {
    const obj = {
      customizationOption: activeCustomizationOption,
      disabled: isSaving,
      isLandscape,
      onSelectOption: onSelectTraitOption,
    };
    tmp3Result = jsx(
      TraitPickerDefault,
      {
        customizationOption: activeCustomizationOption,
        disabled: isSaving,
        isLandscape,
        onSelectOption: onSelectTraitOption,
      },
      activeCustomizationOption,
    );
  }
  return tmp3Result;
}
