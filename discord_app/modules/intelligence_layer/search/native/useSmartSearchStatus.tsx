// === Module 19084: useSmartSearchStatus ===

// Module 19084 (useSmartSearchStatus)
import SmartSearchUtils from "SmartSearchUtils" /* 14149 */;
import SmartSearchResultsStoreDefault from "SmartSearchResultsStore" /* 14150 */;
import SmartSearchTypes from "SmartSearchTypes" /* 14151 */;

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