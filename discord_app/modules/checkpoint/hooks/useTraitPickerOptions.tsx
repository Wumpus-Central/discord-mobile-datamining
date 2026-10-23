// === Module 12989: useTraitPickerOptions ===

// Module 12989 (useTraitPickerOptions)
import util from "util" /* 1128 */;
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6360 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1392 */;
import CheckpointStore from "CheckpointStore" /* 12912 */;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/hooks/useTraitPickerOptions.tsx");

export const useTraitPickerOptions = ReactCompilerGating.isReactCompilerEnabled() ? (function useTraitPickerOptions(arg0) {
  const cResult = savedOptionId(stateFromStores1[4]).c(22);
  ({ customizationOption, savedOptionId } = arg0);
  ({ rarityOrder, optionIds } = arg0);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [items2];
    class T {
      constructor() {
        return closure_4.stats;
      }
    }
    cResult[0] = items;
    cResult[1] = T;
    tmp4 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  let obj = savedOptionId(stateFromStores1[4]);
  const stateFromStores = savedOptionId(stateFromStores1[5]).useStateFromStores(tmp4, T);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [totalCount];
    class T {
      constructor() {
        return closure_4.stats;
      }
    }
    cResult[2] = items1;
    cResult[3] = tmp11;
    let tmp9 = tmp11;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  const tmpResult = savedOptionId(stateFromStores1[5]);
  stateFromStores1 = savedOptionId(stateFromStores1[5]).useStateFromStores(tmp8, tmp9);
  if (cResult[4] !== rarityOrder) {
    const traitRaritySorter = savedOptionId(tmp2[7]).makeTraitRaritySorter(rarityOrder);
    class T {
      constructor() {
        return closure_4.stats;
      }
    }
    cResult[5] = traitRaritySorter;
    let tmp13 = traitRaritySorter;
    const tmpResult5 = savedOptionId(tmp2[7]);
  } else {
    tmp13 = cResult[5];
  }
  const tmp15 = savedOptionId(stateFromStores1[7]).CUSTOMIZATION_OPTION_TRAITS[customizationOption];
  const trait = tmp15;
  if (customizationOption === savedOptionId(stateFromStores1[7]).CheckpointCustomizationOption.OUTFIT_COLOR) {
    let CHECKPOINT_OUTFIT_COLOR_OPTION_NAMES = savedOptionId(tmp2[8]).CHECKPOINT_OUTFIT_COLOR_OPTION_NAMES;
  } else {
    CHECKPOINT_OUTFIT_COLOR_OPTION_NAMES = savedOptionId(tmp2[8]).CHECKPOINT_TRAIT_OPTION_NAMES[tmp15];
  }
  if (cResult[6] === stateFromStores1) {
    if (cResult[7] === CHECKPOINT_OUTFIT_COLOR_OPTION_NAMES) {
      if (cResult[8] === optionIds) {
        if (cResult[9] === tmp13) {
          if (cResult[10] === savedOptionId) {
            if (cResult[11] === stateFromStores) {
              if (cResult[12] === tmp15) {
                earnedCount = cResult[13];
                let tmp16 = cResult[14];
                totalCount = cResult[15];
                class T {
                  constructor() {
                    return closure_4.stats;
                  }
                }
                items2 = tmp17;
              }
              if (cResult[17] === tmp16) {
                if (cResult[18] === earnedCount) {
                  if (cResult[19] === totalCount) {
                    if (cResult[20] === tmp17) {
                      let tmp24 = cResult[21];
                    }
                    return tmp24;
                  }
                }
              }
              const obj2 = { traitOptions: null, availableTraitOptions: null, totalCount: null, earnedCount: null };
              class T {
                constructor() {
                  return closure_4.stats;
                }
              }
              obj2.availableTraitOptions = tmp16;
              obj2.totalCount = totalCount;
              obj2.earnedCount = earnedCount;
              cResult[17] = tmp16;
              cResult[18] = earnedCount;
              cResult[19] = totalCount;
              cResult[20] = tmp17;
              cResult[21] = obj2;
              tmp24 = obj2;
            }
          }
        }
      }
    }
  }
  const tmpResult4 = savedOptionId(stateFromStores1[5]);
  savedOptionId(stateFromStores1[9]).getVisibleTraitRarities(tmp15, stateFromStores);
  items2 = [];
  totalCount = 0;
  earnedCount = 0;
  let tmp18 = optionIds;
  function _loop(item10093) {
    closure_0 = item10093;
    const tmp4 = savedOptionId(stateFromStores1[9]).CHECKPOINT_TRAIT_OPTION_TO_RARITY[trait][item10093];
    if (null != tmp4) {
      if (!set.has(tmp4)) {
        if (closure_0 !== item10093) {
          let NITRO_LOCKED = savedOptionId(stateFromStores1[10]).CheckpointTraitOptionStatus.LOCKED;
        }
        if (null != tmp4) {
          closure_3 = closure_3 + 1;
        }
        if (tmp9) {
          closure_2 = closure_2 + 1;
        }
        const obj = { trait, optionId: item10093, asset: null, rarity: null, status: null, getName: null };
        const tmp12 = savedOptionId(stateFromStores1[9]).CHECKPOINT_TRAIT_OPTION_ASSETS[trait][item10093];
        let thumbnail;
        if (tmp12 != null) {
          thumbnail = tmp12.thumbnail;
        }
        obj.asset = thumbnail;
        obj.rarity = tmp4;
        obj.status = NITRO_LOCKED;
        obj.getName = function getName() {
          let str = "";
          if (null != CHECKPOINT_OUTFIT_COLOR_OPTION_NAMES[closure_0]) {
            const intl = util.intl;
            str = intl.string(tmp);
          }
          return str;
        };
        items2.push(obj);
        tmp9 = null != tmp4 && NITRO_LOCKED === savedOptionId(stateFromStores1[10]).CheckpointTraitOptionStatus.UNLOCKED;
      }
    }
    NITRO_LOCKED = savedOptionId(stateFromStores1[10]).CheckpointTraitOptionStatus.UNLOCKED;
    if (!tmp7) {
      NITRO_LOCKED = savedOptionId(stateFromStores1[10]).CheckpointTraitOptionStatus.NITRO_LOCKED;
    }
    tmp7 = tmp4 !== savedOptionId(stateFromStores1[11]).CheckpointTraitRarity.NITRO || stateFromStores1;
  }
  if (optionIds == null) {
    tmp18 = savedOptionId(tmp2[9]).CHECKPOINT_TRAIT_OPTION_IDS[tmp15];
  }
  for (const item10093 of tmp18) {
    let _loopResult = _loop(item10093);
    continue;
  }
  const sorted = items2.sort(tmp13);
  const found = items2.filter((status) => status.status !== savedOptionId(stateFromStores1[10]).CheckpointTraitOptionStatus.LOCKED);
  cResult[6] = stateFromStores1;
  cResult[7] = CHECKPOINT_OUTFIT_COLOR_OPTION_NAMES;
  cResult[8] = optionIds;
  cResult[9] = tmp13;
  cResult[10] = savedOptionId;
  cResult[11] = stateFromStores;
  cResult[12] = tmp15;
  cResult[13] = earnedCount;
  cResult[14] = found;
  cResult[15] = totalCount;
  cResult[16] = items2;
  tmp16 = found;
  const tmpResult6 = savedOptionId(stateFromStores1[9]);
}) : (function useTraitPickerOptions(customizationOption) {
  customizationOption = customizationOption.customizationOption;
  const savedOptionId = customizationOption.savedOptionId;
  const rarityOrder = customizationOption.rarityOrder;
  const optionIds = customizationOption.optionIds;
  let stateFromStores;
  let items = [stateFromStores];
  stateFromStores = customizationOption(savedOptionId[5]).useStateFromStores(items, () => stateFromStores.stats);
  let obj = customizationOption(savedOptionId[5]);
  const items1 = [optionIds];
  const stateFromStores1 = customizationOption(savedOptionId[5]).useStateFromStores(items1, () => customizationOption(savedOptionId[6]).isPremium(optionIds.getCurrentUser()));
  const items2 = [rarityOrder];
  const memo = rarityOrder.useMemo(() => CheckpointCustomizationUtils.makeTraitRaritySorter(rarityOrder), items2);
  const items3 = [customizationOption, stateFromStores1, optionIds, memo, savedOptionId, stateFromStores];
  return rarityOrder.useMemo(() => {
    const tmp3 = customizationOption(savedOptionId[7]).CUSTOMIZATION_OPTION_TRAITS[closure_0];
    closure_0 = tmp3;
    if (closure_0 === customizationOption(savedOptionId[7]).CheckpointCustomizationOption.OUTFIT_COLOR) {
      let CHECKPOINT_OUTFIT_COLOR_OPTION_NAMES = customizationOption(savedOptionId[8]).CHECKPOINT_OUTFIT_COLOR_OPTION_NAMES;
    } else {
      CHECKPOINT_OUTFIT_COLOR_OPTION_NAMES = customizationOption(savedOptionId[8]).CHECKPOINT_TRAIT_OPTION_NAMES[tmp3];
    }
    customizationOption(savedOptionId[9]).getVisibleTraitRarities(tmp3, totalCount);
    const items = [];
    totalCount = 0;
    earnedCount = 0;
    let tmp4 = items;
    function _loop2(item10034) {
      closure_0 = item10034;
      const tmp4 = customizationOption(savedOptionId[9]).CHECKPOINT_TRAIT_OPTION_TO_RARITY[closure_0][item10034];
      if (null != tmp4) {
        if (!set.has(tmp4)) {
          if (CHECKPOINT_OUTFIT_COLOR_OPTION_NAMES !== item10034) {
            let NITRO_LOCKED = customizationOption(savedOptionId[10]).CheckpointTraitOptionStatus.LOCKED;
          }
          if (null != tmp4) {
            closure_4 = closure_4 + 1;
          }
          if (tmp9) {
            closure_5 = closure_5 + 1;
          }
          const obj = { trait: tmp3, optionId: item10034, asset: null, rarity: null, status: null, getName: null };
          const tmp12 = customizationOption(savedOptionId[9]).CHECKPOINT_TRAIT_OPTION_ASSETS[tmp3][item10034];
          let thumbnail;
          if (tmp12 != null) {
            thumbnail = tmp12.thumbnail;
          }
          obj.asset = thumbnail;
          obj.rarity = tmp4;
          obj.status = NITRO_LOCKED;
          obj.getName = function getName() {
            let str = "";
            if (null != CHECKPOINT_OUTFIT_COLOR_OPTION_NAMES[closure_0]) {
              const intl = util.intl;
              str = intl.string(tmp);
            }
            return str;
          };
          items.push(obj);
          tmp9 = null != tmp4 && NITRO_LOCKED === customizationOption(savedOptionId[10]).CheckpointTraitOptionStatus.UNLOCKED;
        }
      }
      NITRO_LOCKED = customizationOption(savedOptionId[10]).CheckpointTraitOptionStatus.UNLOCKED;
      if (!tmp7) {
        NITRO_LOCKED = customizationOption(savedOptionId[10]).CheckpointTraitOptionStatus.NITRO_LOCKED;
      }
      tmp7 = tmp4 !== customizationOption(savedOptionId[11]).CheckpointTraitRarity.NITRO || c5;
    }
    if (items == null) {
      tmp4 = customizationOption(savedOptionId[9]).CHECKPOINT_TRAIT_OPTION_IDS[tmp3];
    }
    for (const item10034 of tmp4) {
      let _loop2Result = _loop2(item10034);
      continue;
    }
    const sorted = items.sort(memo);
    const tmpResult = customizationOption(savedOptionId[9]);
    return { traitOptions: items, availableTraitOptions: items.filter((status) => status.status !== closure_0(CHECKPOINT_OUTFIT_COLOR_OPTION_NAMES[10]).CheckpointTraitOptionStatus.LOCKED), totalCount, earnedCount };
  }, items3);
});