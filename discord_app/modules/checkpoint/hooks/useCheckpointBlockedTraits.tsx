// discord_app/modules/checkpoint/hooks/useCheckpointBlockedTraits.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import CheckpointCharacterTraits from "../CheckpointCharacterTraits.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import CheckpointStore from "../CheckpointStore.tsx";

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
}
