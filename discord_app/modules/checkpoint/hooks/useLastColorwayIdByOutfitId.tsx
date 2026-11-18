// discord_app/modules/checkpoint/hooks/useLastColorwayIdByOutfitId.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import CheckpointCharacterTraits from "../CheckpointCharacterTraits.tsx";
import CheckpointTrait from "../../../../discord_common/js/shared/shared-constants/CheckpointTrait.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import CheckpointStore from "../CheckpointStore.tsx";

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/hooks/useLastColorwayIdByOutfitId.tsx");

export default function useLastColorwayIdByOutfitId() {
  items = [CheckpointStore];
  const stateFromStores = initialize.useStateFromStores(
    items,
    () => CheckpointStore.selectedCharacterTraits[CheckpointTrait.CheckpointTrait.OUTFIT],
  );
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
}
