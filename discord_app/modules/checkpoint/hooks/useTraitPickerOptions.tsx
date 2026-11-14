// discord_app/modules/checkpoint/hooks/useTraitPickerOptions.tsx
import util from "../../../intl/index.native.tsx";
import CheckpointTraitRarity from "../../../../discord_common/js/shared/shared-constants/CheckpointTraitRarity.tsx";
import CheckpointCharacterAssets from "../CheckpointCharacterAssets.tsx";
import CheckpointCustomizationUtils from "../CheckpointCustomizationUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";
import CheckpointStore from "../CheckpointStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/hooks/useTraitPickerOptions.tsx");

export function getTraitOptionStatus(isSavedOption) {
  ({ rarity, visibleRarities } = isSavedOption);
  if (isSavedOption.isSavedOption) {
    let LOCKED = CheckpointCharacterAssets.CheckpointTraitOptionStatus.UNLOCKED;
  } else {
    if (null != rarity) {
      if (!visibleRarities.has(rarity)) {
        LOCKED = CheckpointCharacterAssets.CheckpointTraitOptionStatus.LOCKED;
      }
    }
    let CheckpointTraitOptionStatus = dependencyMap;
    if (rarity === CheckpointTraitRarity.CheckpointTraitRarity.NITRO) {
      if (!tmp) {
        let UNLOCKED = CheckpointCharacterAssets.CheckpointTraitOptionStatus.NITRO_LOCKED;
      }
    }
    CheckpointTraitOptionStatus = CheckpointCharacterAssets.CheckpointTraitOptionStatus;
    UNLOCKED = CheckpointTraitOptionStatus.UNLOCKED;
  }
  return LOCKED;
}
export function useTraitPickerOptions(customizationOption) {
  customizationOption = customizationOption.customizationOption;
  const savedOptionId = customizationOption.savedOptionId;
  const rarityOrder = customizationOption.rarityOrder;
  const optionIds = customizationOption.optionIds;
  let stateFromStores;
  items = [stateFromStores];
  stateFromStores = customizationOption(savedOptionId[5]).useStateFromStores(items, () => stateFromStores.stats);
  let obj = customizationOption(savedOptionId[5]);
  const items1 = [optionIds];
  const stateFromStores1 = customizationOption(savedOptionId[5]).useStateFromStores(items1, () =>
    customizationOption(savedOptionId[6]).isPremium(optionIds.getCurrentUser()),
  );
  const items2 = [rarityOrder];
  const memo = rarityOrder.useMemo(() => CheckpointCustomizationUtils.makeTraitRaritySorter(rarityOrder), items2);
  const items3 = [customizationOption, stateFromStores1, optionIds, memo, savedOptionId, stateFromStores];
  return rarityOrder.useMemo(() => {
    const tmp3 = customizationOption(savedOptionId[7]).CUSTOMIZATION_OPTION_TO_TRAIT[trait];
    trait = tmp3;
    if (trait === customizationOption(savedOptionId[7]).CheckpointCustomizationOption.OUTFIT_COLOR) {
      let CHECKPOINT_OUTFIT_TO_COLOR_NAME = customizationOption(savedOptionId[8]).CHECKPOINT_OUTFIT_TO_COLOR_NAME;
    } else {
      CHECKPOINT_OUTFIT_TO_COLOR_NAME = customizationOption(savedOptionId[8]).CHECKPOINT_TRAIT_TO_OPTION_NAMES[tmp3];
    }
    const visibleTraitRarities = customizationOption(savedOptionId[9]).getVisibleTraitRarities(tmp3, totalCount);
    items = [];
    totalCount = 0;
    earnedCount = 0;
    let tmp4 = items;
    function _loop(item10034) {
      trait = item10034;
      const traitOptionRarity = customizationOption(savedOptionId[9]).getTraitOptionRarity(trait, item10034);
      if (CHECKPOINT_OUTFIT_TO_COLOR_NAME === item10034) {
        let LOCKED = customizationOption(savedOptionId[3]).CheckpointTraitOptionStatus.UNLOCKED;
      } else {
        if (null != traitOptionRarity) {
          if (!set.has(traitOptionRarity)) {
            LOCKED = customizationOption(savedOptionId[3]).CheckpointTraitOptionStatus.LOCKED;
          }
        }
        if (traitOptionRarity === customizationOption(savedOptionId[4]).CheckpointTraitRarity.NITRO) {
          if (!c5) {
            let UNLOCKED = customizationOption(savedOptionId[3]).CheckpointTraitOptionStatus.NITRO_LOCKED;
          }
        }
        UNLOCKED = customizationOption(savedOptionId[3]).CheckpointTraitOptionStatus.UNLOCKED;
      }
      let tmp8 = LOCKED === customizationOption(savedOptionId[3]).CheckpointTraitOptionStatus.UNLOCKED;
      if (tmp8) {
        tmp8 = traitOptionRarity !== customizationOption(savedOptionId[4]).CheckpointTraitRarity.NITRO || c5;
        const tmp9 = traitOptionRarity !== customizationOption(savedOptionId[4]).CheckpointTraitRarity.NITRO || c5;
      }
      if (null != traitOptionRarity) {
        closure_4 = closure_4 + 1;
      }
      if (tmp11) {
        closure_5 = closure_5 + 1;
      }
      const obj3 = { trait, optionId: item10034, asset: null, rarity: null, status: null, getName: null };
      const tmp14 = customizationOption(savedOptionId[9]).CHECKPOINT_TRAIT_TO_OPTION_ASSETS[trait][item10034];
      let thumbnail;
      if (tmp14 != null) {
        thumbnail = tmp14.thumbnail;
      }
      obj3.asset = thumbnail;
      obj3.rarity = traitOptionRarity;
      obj3.status = LOCKED;
      obj3.getName = function getName() {
        let str = "";
        if (null != CHECKPOINT_OUTFIT_TO_COLOR_NAME[closure_0]) {
          const intl = util.intl;
          str = intl.string(tmp);
        }
        return str;
      };
      items.push(obj3);
      const obj = customizationOption(savedOptionId[9]);
      tmp11 = null != traitOptionRarity && tmp8;
    }
    if (items == null) {
      tmp4 = customizationOption(savedOptionId[9]).CHECKPOINT_TRAIT_TO_OPTION_IDS[tmp3];
    }
    for (const item10034 of tmp4) {
      let _loopResult = _loop(item10034);
      continue;
    }
    const sorted = items.sort(memo);
    const tmpResult = customizationOption(savedOptionId[9]);
    return {
      traitOptions: items,
      availableTraitOptions: items.filter(
        (status) => status.status !== trait(CHECKPOINT_OUTFIT_TO_COLOR_NAME[3]).CheckpointTraitOptionStatus.LOCKED,
      ),
      totalCount,
      earnedCount,
    };
  }, items3);
}
