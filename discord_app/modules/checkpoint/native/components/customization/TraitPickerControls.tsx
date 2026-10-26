// === Module 13025: TraitPickerControls ===

// Module 13025 (TraitPickerControls)
import c from "c" /* 576 */;
import useTraitPickerSelection from "useTraitPickerSelection" /* 13026 */;
import TraitPickerDefault from "TraitPicker" /* 13027 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;

require = fn;
let closure_3 = ["activeCustomizationOption", "onSelectOption"];
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/TraitPickerControls.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function TraitPickerControls(arg0) {
  const cResult = c.c(14);
  if (cResult[0] !== arg0) {
    ({ activeCustomizationOption, onSelectOption } = arg0);
    const tmp9 = _objectWithoutProperties(arg0, closure_3);
    cResult[0] = arg0;
    cResult[1] = activeCustomizationOption;
    cResult[2] = onSelectOption;
    cResult[3] = tmp9;
    let tmp6 = tmp9;
    let tmp5 = onSelectOption;
    let tmp4 = activeCustomizationOption;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
  }
  if (cResult[4] === tmp4) {
    if (cResult[5] === tmp5) {
      let tmp10 = cResult[6];
    }
    const traitPickerSelection = useTraitPickerSelection.useTraitPickerSelection(tmp10);
    if (cResult[7] === tmp4) {
      if (cResult[8] === tmp6) {
        if (cResult[9] === traitPickerSelection.onSelectOption) {
          if (cResult[10] === traitPickerSelection.optionIds) {
            if (cResult[11] === traitPickerSelection.savedOptionId) {
              if (cResult[12] === traitPickerSelection.selectedOptionId) {
                let tmp12 = cResult[13];
              }
              return tmp12;
            }
          }
        }
      }
    }
    const obj2 = {};
    const tmpResult = useTraitPickerSelection;
    const merged = Object.assign(tmp6);
    obj2.customizationOption = tmp4;
    ({ optionIds: obj4.optionIds, savedOptionId: obj4.savedOptionId, selectedOptionId: obj4.selectedOptionId, onSelectOption: obj4.onSelectOption } = traitPickerSelection);
    const tmp19 = jsx(TraitPickerDefault, {}, tmp4);
    cResult[7] = tmp4;
    cResult[8] = tmp6;
    cResult[9] = traitPickerSelection.onSelectOption;
    cResult[10] = traitPickerSelection.optionIds;
    cResult[11] = traitPickerSelection.savedOptionId;
    cResult[12] = traitPickerSelection.selectedOptionId;
    cResult[13] = tmp19;
    tmp12 = tmp19;
  }
  const obj3 = { customizationOption: tmp4, onSelectOption: tmp5 };
  cResult[4] = tmp4;
  cResult[5] = tmp5;
  cResult[6] = obj3;
  tmp10 = obj3;
}) : (function TraitPickerControls(onSelectOption) {
  const activeCustomizationOption = onSelectOption.activeCustomizationOption;
  const merged = Object.assign(onSelectOption, Object.assign({ activeCustomizationOption: 0, onSelectOption: 0 }));
  const traitPickerSelection = useTraitPickerSelection.useTraitPickerSelection({ customizationOption: activeCustomizationOption, onSelectOption: onSelectOption.onSelectOption });
  const obj3 = {};
  const merged1 = Object.assign(merged);
  obj3.customizationOption = activeCustomizationOption;
  ({ optionIds: obj2.optionIds, savedOptionId: obj2.savedOptionId, selectedOptionId: obj2.selectedOptionId, onSelectOption: obj2.onSelectOption } = traitPickerSelection);
  return jsx(TraitPickerDefault, {}, activeCustomizationOption);
});