// === Module 18780: useSmartSearchStatus ===

// Module 18780 (useSmartSearchStatus)
import SmartSearchUtils from "SmartSearchUtils" /* 13128 */;
import SmartSearchResultsStoreDefault from "SmartSearchResultsStore" /* 13129 */;
import SmartSearchTypes from "SmartSearchTypes" /* 13130 */;

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