// discord_app/modules/checkpoint/hooks/useCheckpointCustomization.tsx
import CheckpointTrait from "../../../../discord_common/js/shared/shared-constants/CheckpointTrait.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";
import CheckpointStore from "../CheckpointStore.tsx";

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/hooks/useCheckpointCustomization.tsx");

export default function useCheckpointCustomization() {
  items = [CheckpointStore];
  const stateFromStoresObject = selectedCharacterTraits(savedSelection[3]).useStateFromStoresObject(items, () => ({
    selectedCharacterTraits: CheckpointStore.selectedCharacterTraits,
    savedSelection: CheckpointStore.character,
    stats: CheckpointStore.stats,
  }));
  selectedCharacterTraits = stateFromStoresObject.selectedCharacterTraits;
  savedSelection = stateFromStoresObject.savedSelection;
  const stats = stateFromStoresObject.stats;
  let obj = selectedCharacterTraits(savedSelection[3]);
  const items1 = [stateFromStores];
  stateFromStores = selectedCharacterTraits(savedSelection[3]).useStateFromStores(items1, () =>
    selectedCharacterTraits(savedSelection[4]).isPremium(stateFromStores.getCurrentUser()),
  );
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
    }, items2),
  };
}
