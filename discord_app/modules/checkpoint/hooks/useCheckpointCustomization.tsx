// === Module 13684: useCheckpointCustomization ===

// Module 13684 (useCheckpointCustomization)
import CheckpointTrait from "CheckpointTrait" /* 6247 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1385 */;
import CheckpointStore from "CheckpointStore" /* 13656 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/hooks/useCheckpointCustomization.tsx");

export default function useCheckpointCustomization() {
  items = [CheckpointStore];
  const stateFromStoresObject = selectedCharacterTraits(savedSelection[3]).useStateFromStoresObject(items, () => ({ selectedCharacterTraits: CheckpointStore.selectedCharacterTraits, savedSelection: CheckpointStore.character, stats: CheckpointStore.stats }));
  selectedCharacterTraits = stateFromStoresObject.selectedCharacterTraits;
  savedSelection = stateFromStoresObject.savedSelection;
  const stats = stateFromStoresObject.stats;
  let obj = selectedCharacterTraits(savedSelection[3]);
  const items1 = [stateFromStores];
  stateFromStores = selectedCharacterTraits(savedSelection[3]).useStateFromStores(items1, () => selectedCharacterTraits(savedSelection[4]).isPremium(stateFromStores.getCurrentUser()));
  const items2 = [stateFromStores, savedSelection, selectedCharacterTraits, stats];
  let obj2 = selectedCharacterTraits(savedSelection[3]);
  return {
    selectedCharacterTraits,
    blockedTraits: stats.useMemo(() => {
      const values = Object.values(CheckpointTrait.CheckpointTrait);
      return values.filter((item) => {
        let result = null != tmp;
        if (result) {
          const obj2 = { stats, hasNitro, savedCharacter };
          result = selectedCharacterTraits(savedSelection[6]).isTraitSelectionLocked(item, tmp, obj2);
          const obj = selectedCharacterTraits(savedSelection[6]);
        }
        return result;
      });
    }, items2)
  };
};