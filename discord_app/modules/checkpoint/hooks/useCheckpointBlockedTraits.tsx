// === Module 14191: useCheckpointBlockedTraits ===

// Module 14191 (useCheckpointBlockedTraits)
import initialize from "initialize" /* 504 */;
import CheckpointCharacterTraits from "CheckpointCharacterTraits" /* 6358 */;
import UserStore from "UserStore" /* 1385 */;
import CheckpointStore from "CheckpointStore" /* 14146 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/checkpoint/hooks/useCheckpointBlockedTraits.tsx");

export default function useCheckpointBlockedTraits() {
  items = [CheckpointStore, UserStore];
  return initialize.useStateFromStoresArray(items, () => {
    ({ selectedCharacterTraits: closure_0, stats: closure_1, character: closure_2 } = hasNitro);
    hasNitro = closure_0(2107).isPremium(currentUser.getCurrentUser());
    const values = Object.values(closure_0(6359).CheckpointTrait);
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