// === Module 12672: useCheckpointBlockedTraits ===

// Module 12672 (useCheckpointBlockedTraits)
import initialize from "initialize" /* 504 */;
import CheckpointCharacterTraits from "CheckpointCharacterTraits" /* 6442 */;
import UserStore from "UserStore" /* 1387 */;
import CheckpointStore from "CheckpointStore" /* 12628 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/hooks/useCheckpointBlockedTraits.tsx");

export default function useCheckpointBlockedTraits() {
  items = [CheckpointStore, UserStore];
  return initialize.useStateFromStoresArray(items, () => {
    ({ selectedCharacterTraits: closure_0, stats: closure_1, character: closure_2 } = hasNitro);
    hasNitro = closure_0(2109).isPremium(currentUser.getCurrentUser());
    const values = Object.values(closure_0(6443).CheckpointTrait);
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