// === Module 19003: useSmartSearchStatus ===

// Module 19003 (useSmartSearchStatus)
import SmartSearchUtils from "SmartSearchUtils" /* 14120 */;
import SmartSearchResultsStoreDefault from "SmartSearchResultsStore" /* 14121 */;
import SmartSearchTypes from "SmartSearchTypes" /* 14122 */;

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