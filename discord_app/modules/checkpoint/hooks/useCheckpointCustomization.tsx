// === Module 13407: useCheckpointCustomization ===

// Module 13407 (useCheckpointCustomization)
import CheckpointTrait from "CheckpointTrait" /* 6107 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1384 */;
import CheckpointStore from "CheckpointStore" /* 13386 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/hooks/useCheckpointCustomization.tsx");

export default function useCheckpointCustomization() {
  const items = [CheckpointStore];
  const stateFromStoresObject = selectedCharacterTraits(savedSelection[3]).useStateFromStoresObject(items, () => ({ selectedCharacterTraits: CheckpointStore.selectedCharacterTraits, savedSelection: CheckpointStore.character, stats: CheckpointStore.stats }));
  selectedCharacterTraits = stateFromStoresObject.selectedCharacterTraits;
  savedSelection = stateFromStoresObject.savedSelection;
  const stats = stateFromStoresObject.stats;
  let obj = selectedCharacterTraits(savedSelection[3]);
  const items1 = [stateFromStores];
  stateFromStores = selectedCharacterTraits(savedSelection[3]).useStateFromStores(items1, () => selectedCharacterTraits(savedSelection[4]).isPremium(stateFromStores.getCurrentUser()));
  const items2 = [stateFromStores, savedSelection, selectedCharacterTraits, stats];
  const obj2 = selectedCharacterTraits(savedSelection[3]);
  return {
    selectedCharacterTraits,
    blockedTraits: stats.useMemo(() => {
      const values = Object.values(CheckpointTrait.CheckpointTrait);
      return values.filter((item) => {
        if (null != closure_1_0[item]) {
          let tmp2;
          if (closure_1_1 != null) {
            tmp2 = closure_1_1[item];
          }
          if (tmp2 !== tmp) {
            const traitOptionRarity = selectedCharacterTraits(savedSelection[6]).getTraitOptionRarity(item, tmp);
            if (null == traitOptionRarity) {
              return tmp6;
            } else if (traitOptionRarity === selectedCharacterTraits(savedSelection[7]).CheckpointTraitRarity.NITRO) {
              let tmp8 = !stateFromStores;
            } else {
              const visibleTraitRarities = selectedCharacterTraits(savedSelection[6]).getVisibleTraitRarities(item, stats);
              tmp8 = !visibleTraitRarities.has(traitOptionRarity);
              const tmp3Result = selectedCharacterTraits(savedSelection[6]);
            }
            const obj = selectedCharacterTraits(savedSelection[6]);
          }
        }
        return false;
      });
    }, items2)
  };
};