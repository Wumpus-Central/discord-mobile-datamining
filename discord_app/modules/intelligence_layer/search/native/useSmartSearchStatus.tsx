// === Module 16695: useSmartSearchStatus ===

// Module 16695 (useSmartSearchStatus)
import SmartSearchResultsStoreDefault from "SmartSearchResultsStore" /* 12057 */;
import SmartSearchTypes from "SmartSearchTypes" /* 12059 */;
import SmartSearchUtils from "SmartSearchUtils" /* 12060 */;

const require = globalThis.__r;

require = fn;
SmartSearchResultsStoreDefault;
const size = fn(2);
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/useSmartSearchStatus.tsx");

export const useSmartSearchStatus = function useSmartSearchStatus(memo) {
  _require = memo;
  const items = [SmartSearchResultsStore];
  const items1 = [memo];
  return require("initialize").useStateFromStoresObject(items, () => {
    if (null == closure_0) {
      let NOT_QUALIFIED = SmartSearchTypes.SmartSearchStatus.NOT_QUALIFIED;
    } else {
      NOT_QUALIFIED = SmartSearchUtils.getSmartSearchStatus(tmp, SmartSearchResultsStore);
    }
    return NOT_QUALIFIED;
  }, items1);
};