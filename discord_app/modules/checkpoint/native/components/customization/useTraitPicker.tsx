// === Module 12699: useTraitPicker ===

// Module 12699 (useTraitPicker)
import CheckpointActionCreators from "CheckpointActionCreators" /* 12408 */;
import useTraitPickerSelection from "useTraitPickerSelection" /* 12700 */;
import useTraitPickerOptions from "useTraitPickerOptions" /* 12701 */;
import useAutoSelectTraitOption from "useAutoSelectTraitOption" /* 12702 */;
import noop from "module_19" /* 19 */;

require = fn;
const rarityOrder = fn(5848).CHECKPOINT_RARITY_ORDER_MOBILE;
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/useTraitPicker.tsx");

export function useTraitPicker(customizationOption) {
  customizationOption = customizationOption.customizationOption;
  ({ disabled, onSelectOption } = customizationOption);
  const traitPickerSelection = useTraitPickerSelection.useTraitPickerSelection({ customizationOption, onSelectOption });
  const traitPickerOptions = useTraitPickerOptions.useTraitPickerOptions({ customizationOption, optionIds: traitPickerSelection.optionIds, savedOptionId: traitPickerSelection.savedOptionId, rarityOrder });
  const availableTraitOptions = traitPickerOptions.availableTraitOptions;
  ({ totalCount, earnedCount } = traitPickerOptions);
  const obj3 = { customizationOption, optionIds: traitPickerSelection.optionIds, savedOptionId: traitPickerSelection.savedOptionId, rarityOrder };
  const obj4 = useAutoSelectTraitOption;
  const autoSelectTraitOption = obj4.useAutoSelectTraitOption({ availableTraitOptions, selectedOptionId: traitPickerSelection.selectedOptionId, onSelectOption: CheckpointActionCreators.selectCharacterTrait, isPaused: disabled });
  items = [availableTraitOptions, traitPickerSelection.selectedOptionId];
  const obj5 = { availableTraitOptions, selectedOptionId: traitPickerSelection.selectedOptionId, onSelectOption: CheckpointActionCreators.selectCharacterTrait, isPaused: disabled };
  return {
    traitOptions: availableTraitOptions,
    selectedOption: noop.useMemo(() => {
      let found = availableTraitOptions.find((optionId) => optionId.optionId === selectedOptionId.selectedOptionId);
      if (found == null) {
        found = availableTraitOptions[0];
      }
      return found;
    }, items),
    selectedOptionId: traitPickerSelection.selectedOptionId,
    totalCount,
    earnedCount,
    onSelectOption: traitPickerSelection.onSelectOption
  };
}