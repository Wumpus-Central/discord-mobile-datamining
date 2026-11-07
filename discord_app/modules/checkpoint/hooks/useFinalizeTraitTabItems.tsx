// discord_app/modules/checkpoint/hooks/useFinalizeTraitTabItems.tsx
import CheckpointCustomizationUtils from "../CheckpointCustomizationUtils.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import CheckpointStore from "../CheckpointStore.tsx";

const require = globalThis.__r;

require = fn;
let items = [fn(6566).CheckpointCustomizationOption.BASE, fn(6566).CheckpointCustomizationOption.OUTFIT_COLOR];
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/hooks/useFinalizeTraitTabItems.tsx");

export default function useFinalizeTraitTabItems(arg0, arg1) {
  _require = arg1;
  items = [CheckpointStore];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items, () => {
    const tmp3 = CheckpointStore.selectedCharacterTraits[closure_0(undefined, dependencyMap[5]).CheckpointTrait.OUTFIT];
    if (null != tmp3) {
      if (!tmpResult.isTraitNoneOptionId(closure_0(dependencyMap[5]).CheckpointTrait.OUTFIT, tmp3)) {
        let found = items;
      }
      return found;
    }
    found = items.filter((item) => item !== closure_1_0(dependencyMap[3]).CheckpointCustomizationOption.OUTFIT_COLOR);
  });
  let tmp3 = arg0 === require("CheckpointCustomizationUtils").CheckpointCustomizationOption.OUTFIT_COLOR;
  if (tmp3) {
    tmp3 = !stateFromStoresArray.includes(
      require("CheckpointCustomizationUtils").CheckpointCustomizationOption.OUTFIT_COLOR,
    );
  }
  dependencyMap = tmp3;
  const items1 = [tmp3, arg1];
  const effect = noop.useEffect(() => {
    if (closure_1) {
      closure_0(CheckpointCustomizationUtils.CheckpointCustomizationOption.BASE);
    }
  }, items1);
  return stateFromStoresArray;
}
export const FINALIZE_TRAIT_TAB_ITEMS = items;
export function useFinalizeMoreTabOption(activeCustomizationOption) {
  const hasItem = items.includes(activeCustomizationOption);
  const isMoreMenuActive = !hasItem;
  const tmp3 = _slicedToArray(noop.useState(null), 2);
  const moreTabOption = tmp3[0];
  let tmp5 = isMoreMenuActive;
  if (!hasItem) {
    tmp5 = moreTabOption !== activeCustomizationOption;
  }
  if (tmp5) {
    tmp3[1](activeCustomizationOption);
  }
  return { isMoreMenuActive, moreTabOption };
}
