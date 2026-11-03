// === Module 18855: useSmartSearchStatus ===

// Module 18855 (useSmartSearchStatus)
import SmartSearchUtils from "SmartSearchUtils" /* 14020 */;
import SmartSearchResultsStoreDefault from "SmartSearchResultsStore" /* 14021 */;
import SmartSearchTypes from "SmartSearchTypes" /* 14022 */;

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