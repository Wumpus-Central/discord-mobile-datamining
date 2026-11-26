// === Module 12927: useLastColorwayIdByOutfitId ===

// Module 12927 (useLastColorwayIdByOutfitId)
import initialize from "initialize" /* 504 */;
import CheckpointCharacterTraits from "CheckpointCharacterTraits" /* 6442 */;
import CheckpointTrait from "CheckpointTrait" /* 6443 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import CheckpointStore from "CheckpointStore" /* 12620 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/hooks/useLastColorwayIdByOutfitId.tsx");

export default function useLastColorwayIdByOutfitId() {
  items = [CheckpointStore];
  const stateFromStores = initialize.useStateFromStores(items, () => CheckpointStore.selectedCharacterTraits[CheckpointTrait.CheckpointTrait.OUTFIT]);
  const tmp5 = _slicedToArray(noop.useState(new Map()), 2);
  const first = tmp5[0];
  let outfitDefaultOptionId;
  if (null != stateFromStores) {
    outfitDefaultOptionId = CheckpointCharacterTraits.getOutfitDefaultOptionId(stateFromStores);
    const tmpResult = CheckpointCharacterTraits;
  }
  const map = new Map();
  if (tmp7) {
    const _Map = Map;
    const map1 = new Map(first);
    tmp5[1](map1.set(outfitDefaultOptionId, stateFromStores));
  }
  return first;
};