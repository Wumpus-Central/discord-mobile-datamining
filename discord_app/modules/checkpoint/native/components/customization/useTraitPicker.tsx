// discord_app/modules/checkpoint/native/components/customization/useTraitPicker.tsx
import CheckpointActionCreators from "../../../CheckpointActionCreators.tsx";
import useTraitPickerSelection from "../../../hooks/useTraitPickerSelection.tsx";
import useTraitPickerOptions from "../../../hooks/useTraitPickerOptions.tsx";
import useAutoSelectTraitOption from "../../../hooks/useAutoSelectTraitOption.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const rarityOrder = fn(5850).CHECKPOINT_RARITY_ORDER_MOBILE;
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/customization/useTraitPicker.tsx");

export function useTraitPicker(customizationOption) {
  customizationOption = customizationOption.customizationOption;
  ({ disabled, onSelectOption } = customizationOption);
  const traitPickerSelection = useTraitPickerSelection.useTraitPickerSelection({ customizationOption, onSelectOption });
  const traitPickerOptions = useTraitPickerOptions.useTraitPickerOptions({
    customizationOption,
    optionIds: traitPickerSelection.optionIds,
    savedOptionId: traitPickerSelection.savedOptionId,
    rarityOrder,
  });
  const availableTraitOptions = traitPickerOptions.availableTraitOptions;
  ({ totalCount, earnedCount } = traitPickerOptions);
  const obj3 = {
    customizationOption,
    optionIds: traitPickerSelection.optionIds,
    savedOptionId: traitPickerSelection.savedOptionId,
    rarityOrder,
  };
  const obj4 = useAutoSelectTraitOption;
  const autoSelectTraitOption = obj4.useAutoSelectTraitOption({
    availableTraitOptions,
    selectedOptionId: traitPickerSelection.selectedOptionId,
    onSelectOption: CheckpointActionCreators.selectCharacterTrait,
    isPaused: disabled,
  });
  items = [availableTraitOptions, traitPickerSelection.selectedOptionId];
  const obj5 = {
    availableTraitOptions,
    selectedOptionId: traitPickerSelection.selectedOptionId,
    onSelectOption: CheckpointActionCreators.selectCharacterTrait,
    isPaused: disabled,
  };
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
    onSelectOption: traitPickerSelection.onSelectOption,
  };
}
