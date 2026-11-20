// === Module 18596: useSmartSearchStatus ===

// Module 18596 (useSmartSearchStatus)
import SmartSearchUtils from "SmartSearchUtils" /* 13080 */;
import SmartSearchResultsStoreDefault from "SmartSearchResultsStore" /* 13081 */;
import SmartSearchTypes from "SmartSearchTypes" /* 13082 */;

const require = globalThis.__r;

require = fn;
SmartSearchResultsStoreDefault;
const size = fn(2);
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/useSmartSearchStatus.tsx");

export function useSmartSearchStatus(memo) {
  _require = memo;
  items = [SmartSearchResultsStore];
  const items1 = [memo];
  return require("initialize").useStateFromStoresObject(items, () => {
    if (null == closure_0) {
      let NOT_QUALIFIED = SmartSearchTypes.SmartSearchStatus.NOT_QUALIFIED;
    } else {
      NOT_QUALIFIED = SmartSearchUtils.getSmartSearchStatus(tmp, SmartSearchResultsStore);
    }
    return NOT_QUALIFIED;
  }, items1);
}