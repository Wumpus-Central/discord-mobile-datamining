// === Module 13678: useTraitPickerSelection ===

// Module 13678 (useTraitPickerSelection)
import CheckpointCharacterTraits from "CheckpointCharacterTraits" /* 6111 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6434 */;
import noop from "module_19" /* 19 */;
import CheckpointStore from "CheckpointStore" /* 13421 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/hooks/useTraitPickerSelection.tsx");

export function useTraitPickerSelection(customizationOption) {
  customizationOption = customizationOption.customizationOption;
  const onSelectOption = customizationOption.onSelectOption;
  let selectedOptionId;
  noop = customizationOption(onSelectOption[2]).CUSTOMIZATION_OPTION_TO_TRAIT[customizationOption];
  const items = [selectedOptionId];
  const savedOptionId = customizationOption(onSelectOption[5]).useStateFromStoresObject(items, () => {
    let tmp7 = tmp4;
    if (customizationOption === CheckpointCustomizationUtils.CheckpointCustomizationOption.OUTFIT) {
      let outfitDefaultOptionId;
      if (null != tmp4) {
        outfitDefaultOptionId = CheckpointCharacterTraits.getOutfitDefaultOptionId(tmp4);
        const tmp5Result = CheckpointCharacterTraits;
      }
      tmp7 = outfitDefaultOptionId;
    }
    const obj = { selectedOptionId: tmp7, savedOptionId: null };
    const character = CheckpointStore.character;
    let tmp10;
    if (character != null) {
      tmp10 = character[closure_2];
    }
    let tmp11 = tmp10;
    if (customizationOption === CheckpointCustomizationUtils.CheckpointCustomizationOption.OUTFIT) {
      let outfitDefaultOptionId1;
      if (null != tmp10) {
        outfitDefaultOptionId1 = CheckpointCharacterTraits.getOutfitDefaultOptionId(tmp10);
        const tmp5Result2 = CheckpointCharacterTraits;
      }
      tmp11 = outfitDefaultOptionId1;
    }
    obj.savedOptionId = tmp11;
    return obj;
  });
  selectedOptionId = savedOptionId.selectedOptionId;
  const items1 = [onSelectOption, selectedOptionId];
  const onSelectOption1 = noop.useCallback((arg0, arg1) => {
    if (arg1 !== selectedOptionId) {
      onSelectOption(arg0, arg1);
    }
  }, items1);
  if (customizationOption(onSelectOption[2]).CheckpointCustomizationOption.OUTFIT === customizationOption) {
    let optionIds = tmp(tmp2[3]).OUTFIT_DEFAULT_OPTION_IDS;
  } else if (tmp(tmp2[2]).CheckpointCustomizationOption.OUTFIT_COLOR === customizationOption) {
    let NONE = selectedOptionId;
    if (selectedOptionId == null) {
      NONE = tmp(tmp2[4]).CheckpointCharacterOutfit.NONE;
    }
    optionIds = tmp(tmp2[3]).getOutfitColorOptionIds(NONE);
    const tmpResult = tmp(tmp2[3]);
  }
  return { optionIds, selectedOptionId, savedOptionId: savedOptionId.savedOptionId, onSelectOption: onSelectOption1 };
}