// === Module 12416: useCheckpointBlockedTraits ===

// Module 12416 (useCheckpointBlockedTraits)
import initialize from "initialize" /* 504 */;
import CheckpointCharacterTraits from "CheckpointCharacterTraits" /* 5894 */;
import UserStore from "UserStore" /* 1386 */;
import CheckpointStore from "CheckpointStore" /* 12370 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/hooks/useCheckpointBlockedTraits.tsx");

export default function useCheckpointBlockedTraits() {
  items = [CheckpointStore, UserStore];
  return initialize.useStateFromStoresArray(items, () => {
    ({ selectedCharacterTraits: closure_0, stats: closure_1, character: closure_2 } = hasNitro);
    hasNitro = closure_0(2108).isPremium(currentUser.getCurrentUser());
    const values = Object.values(closure_0(5895).CheckpointTrait);
    return values.filter((item) => {
      let result = null != tmp;
      if (result) {
        const obj2 = { stats, hasNitro, savedCharacter };
        result = CheckpointCharacterTraits.isTraitSelectionLocked(item, tmp, obj2);
      }
      return result;
    });
  });
};