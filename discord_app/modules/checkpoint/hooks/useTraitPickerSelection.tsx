// discord_app/modules/checkpoint/hooks/useTraitPickerSelection.tsx
import PremiumTypeUtils from "../../../utils/PremiumTypeUtils.tsx";
import CheckpointCharacterTraits from "../CheckpointCharacterTraits.tsx";
import CheckpointCustomizationUtils from "../CheckpointCustomizationUtils.tsx";
import Tracking from "../tracking/Tracking.tsx";
import useTraitPickerOptions from "useTraitPickerOptions.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";
import CheckpointStore from "../CheckpointStore.tsx";

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/hooks/useTraitPickerSelection.tsx");

export function useTraitPickerSelection(customizationOption) {
  customizationOption = customizationOption.customizationOption;
  const onSelectOption = customizationOption.onSelectOption;
  let savedOptionId;
  noop = customizationOption(onSelectOption[3]).CUSTOMIZATION_OPTION_TO_TRAIT[customizationOption];
  items = [savedOptionId];
  const stateFromStoresObject = customizationOption(onSelectOption[6]).useStateFromStoresObject(items, () => {
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
  const selectedOptionId = stateFromStoresObject.selectedOptionId;
  savedOptionId = stateFromStoresObject.savedOptionId;
  const items1 = [onSelectOption, savedOptionId, selectedOptionId];
  const onSelectOption1 = noop.useCallback((item, item10034) => {
    if (item10034 !== selectedOptionId) {
      const traitOptionRarity = CheckpointCharacterTraits.getTraitOptionRarity(item, item10034);
      const obj3 = {
        rarity: traitOptionRarity,
        isSavedOption: savedOptionId === item10034,
        visibleRarities: null,
        hasNitroSubscription: null,
      };
      const obj2 = useTraitPickerOptions;
      obj3.visibleRarities = CheckpointCharacterTraits.getVisibleTraitRarities(item, CheckpointStore.stats);
      obj3.hasNitroSubscription = PremiumTypeUtils.isPremium(UserStore.getCurrentUser());
      const traitOptionStatus = obj2.getTraitOptionStatus(obj3);
      const obj6 = Tracking;
      const result = obj6.trackCheckpoint2026CharacterChoiceSelected(
        item,
        item10034,
        traitOptionStatus,
        traitOptionRarity,
      );
      onSelectOption(item, item10034);
    }
  }, items1);
  if (customizationOption(onSelectOption[3]).CheckpointCustomizationOption.OUTFIT === customizationOption) {
    let optionIds = tmp(tmp2[4]).OUTFIT_DEFAULT_OPTION_IDS;
  } else if (tmp(tmp2[3]).CheckpointCustomizationOption.OUTFIT_COLOR === customizationOption) {
    let NONE = selectedOptionId;
    if (selectedOptionId == null) {
      NONE = tmp(tmp2[5]).CheckpointCharacterOutfit.NONE;
    }
    optionIds = tmp(tmp2[4]).getOutfitColorOptionIds(NONE);
    const tmpResult = tmp(tmp2[4]);
  }
  return { optionIds, selectedOptionId, savedOptionId, onSelectOption: onSelectOption1 };
}
