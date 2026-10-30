// === Module 13647: useTraitPickerOptions ===

// Module 13647 (useTraitPickerOptions)
import util from "util" /* 1114 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6429 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1384 */;
import CheckpointStore from "CheckpointStore" /* 13386 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/hooks/useTraitPickerOptions.tsx");

export function useTraitPickerOptions(customizationOption) {
  customizationOption = customizationOption.customizationOption;
  const savedOptionId = customizationOption.savedOptionId;
  const rarityOrder = customizationOption.rarityOrder;
  const optionIds = customizationOption.optionIds;
  let stateFromStores;
  let items = [stateFromStores];
  stateFromStores = customizationOption(savedOptionId[3]).useStateFromStores(items, () => stateFromStores.stats);
  let obj = customizationOption(savedOptionId[3]);
  const items1 = [optionIds];
  const stateFromStores1 = customizationOption(savedOptionId[3]).useStateFromStores(items1, () => customizationOption(savedOptionId[4]).isPremium(optionIds.getCurrentUser()));
  const items2 = [rarityOrder];
  const memo = rarityOrder.useMemo(() => CheckpointCustomizationUtils.makeTraitRaritySorter(rarityOrder), items2);
  const items3 = [customizationOption, stateFromStores1, optionIds, memo, savedOptionId, stateFromStores];
  return rarityOrder.useMemo(() => {
    const tmp3 = customizationOption(savedOptionId[5]).CUSTOMIZATION_OPTION_TO_TRAIT[closure_0];
    closure_0 = tmp3;
    if (closure_0 === customizationOption(savedOptionId[5]).CheckpointCustomizationOption.OUTFIT_COLOR) {
      let CHECKPOINT_OUTFIT_TO_COLOR_NAME = customizationOption(savedOptionId[6]).CHECKPOINT_OUTFIT_TO_COLOR_NAME;
    } else {
      CHECKPOINT_OUTFIT_TO_COLOR_NAME = customizationOption(savedOptionId[6]).CHECKPOINT_TRAIT_TO_OPTION_NAMES[tmp3];
    }
    customizationOption(savedOptionId[7]).getVisibleTraitRarities(tmp3, totalCount);
    const items = [];
    totalCount = 0;
    earnedCount = 0;
    let tmp4 = items;
    function _loop(item10034) {
      closure_0 = item10034;
      const traitOptionRarity = customizationOption(savedOptionId[7]).getTraitOptionRarity(closure_0, item10034);
      if (null != traitOptionRarity) {
        if (!set.has(traitOptionRarity)) {
          if (CHECKPOINT_OUTFIT_TO_COLOR_NAME !== item10034) {
            let NITRO_LOCKED = customizationOption(savedOptionId[8]).CheckpointTraitOptionStatus.LOCKED;
          }
          if (null != traitOptionRarity) {
            closure_4 = closure_4 + 1;
          }
          if (tmp9) {
            closure_5 = closure_5 + 1;
          }
          const obj2 = { trait: tmp3, optionId: item10034, asset: null, rarity: null, status: null, getName: null };
          const tmp12 = customizationOption(savedOptionId[7]).CHECKPOINT_TRAIT_TO_OPTION_ASSETS[tmp3][item10034];
          let thumbnail;
          if (tmp12 != null) {
            thumbnail = tmp12.thumbnail;
          }
          obj2.asset = thumbnail;
          obj2.rarity = traitOptionRarity;
          obj2.status = NITRO_LOCKED;
          obj2.getName = function getName() {
            let str = "";
            if (null != CHECKPOINT_OUTFIT_TO_COLOR_NAME[closure_0]) {
              const intl = util.intl;
              str = intl.string(tmp);
            }
            return str;
          };
          items.push(obj2);
          tmp9 = null != traitOptionRarity && NITRO_LOCKED === customizationOption(savedOptionId[8]).CheckpointTraitOptionStatus.UNLOCKED;
        }
      }
      const obj = customizationOption(savedOptionId[7]);
      NITRO_LOCKED = customizationOption(savedOptionId[8]).CheckpointTraitOptionStatus.UNLOCKED;
      if (!tmp7) {
        NITRO_LOCKED = customizationOption(savedOptionId[8]).CheckpointTraitOptionStatus.NITRO_LOCKED;
      }
      tmp7 = traitOptionRarity !== customizationOption(savedOptionId[9]).CheckpointTraitRarity.NITRO || c5;
    }
    if (items == null) {
      tmp4 = customizationOption(savedOptionId[7]).CHECKPOINT_TRAIT_TO_OPTION_IDS[tmp3];
    }
    for (const item10034 of tmp4) {
      let _loopResult = _loop(item10034);
      continue;
    }
    const sorted = items.sort(memo);
    const tmpResult = customizationOption(savedOptionId[7]);
    return { traitOptions: items, availableTraitOptions: items.filter((status) => status.status !== closure_0(CHECKPOINT_OUTFIT_TO_COLOR_NAME[8]).CheckpointTraitOptionStatus.LOCKED), totalCount, earnedCount };
  }, items3);
}