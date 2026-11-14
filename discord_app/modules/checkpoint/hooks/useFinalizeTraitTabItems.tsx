// === Module 14546: useFinalizeTraitTabItems ===

// Module 14546 (useFinalizeTraitTabItems)
import CheckpointCustomizationUtils from "CheckpointCustomizationUtils" /* 6744 */;
import noop from "module_19" /* 19 */;
import CheckpointStore from "CheckpointStore" /* 14253 */;

const require = globalThis.__r;

require = fn;
let items = [fn(6744).CheckpointCustomizationOption.BASE, fn(6744).CheckpointCustomizationOption.OUTFIT_COLOR];
const size = fn(2);
const result = size.fileFinishedImporting("modules/checkpoint/hooks/useFinalizeTraitTabItems.tsx");

export default function useFinalizeTraitTabItems(arg0, arg1) {
  _require = arg1;
  items = [CheckpointStore];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items, () => {
    const tmp3 = CheckpointStore.selectedCharacterTraits[closure_0(undefined, dependencyMap[4]).CheckpointTrait.OUTFIT];
    if (null != tmp3) {
      if (!tmpResult.isTraitNoneOptionId(closure_0(dependencyMap[4]).CheckpointTrait.OUTFIT, tmp3)) {
        let found = items;
      }
      return found;
    }
    found = items.filter((item) => item !== closure_1_0(dependencyMap[2]).CheckpointCustomizationOption.OUTFIT_COLOR);
  });
  let tmp3 = arg0 === require("CheckpointCustomizationUtils").CheckpointCustomizationOption.OUTFIT_COLOR;
  if (tmp3) {
    tmp3 = !stateFromStoresArray.includes(require("CheckpointCustomizationUtils").CheckpointCustomizationOption.OUTFIT_COLOR);
  }
  dependencyMap = tmp3;
  const items1 = [tmp3, arg1];
  const effect = noop.useEffect(() => {
    if (closure_1) {
      closure_0(CheckpointCustomizationUtils.CheckpointCustomizationOption.BASE);
    }
  }, items1);
  return stateFromStoresArray;
};
export const FINALIZE_TRAIT_TAB_ITEMS = items;