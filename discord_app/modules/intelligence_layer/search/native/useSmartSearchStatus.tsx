// discord_app/modules/intelligence_layer/search/native/useSmartSearchStatus.tsx
import SmartSearchResultsStoreDefault from "../SmartSearchResultsStore.tsx";
import SmartSearchTypes from "../SmartSearchTypes.tsx";
import SmartSearchUtils from "../SmartSearchUtils.tsx";

const require = globalThis.__r;

require = fn;
SmartSearchResultsStoreDefault;
const size = fn(2);
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/useSmartSearchStatus.tsx");

export const useSmartSearchStatus = function useSmartSearchStatus(memo) {
  _require = memo;
  const items = [SmartSearchResultsStore];
  const items1 = [memo];
  return require("initialize").useStateFromStoresObject(
    items,
    () => {
      if (null == closure_0) {
        let NOT_QUALIFIED = SmartSearchTypes.SmartSearchStatus.NOT_QUALIFIED;
      } else {
        NOT_QUALIFIED = SmartSearchUtils.getSmartSearchStatus(tmp, SmartSearchResultsStore);
      }
      return NOT_QUALIFIED;
    },
    items1,
  );
};
