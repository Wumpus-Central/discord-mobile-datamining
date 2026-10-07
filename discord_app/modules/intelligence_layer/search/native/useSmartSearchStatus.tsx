// discord_app/modules/intelligence_layer/search/native/useSmartSearchStatus.tsx
import SmartSearchUtils from "../SmartSearchUtils.tsx";
import SmartSearchResultsStoreDefault from "../SmartSearchResultsStore.tsx";
import SmartSearchTypes from "../SmartSearchTypes.tsx";

const require = globalThis.__r;

require = fn;
SmartSearchResultsStoreDefault;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/useSmartSearchStatus.tsx");

export const useSmartSearchStatus = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      _require = arg0;
      const cResult = require("c").c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SmartSearchResultsStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function u() {
          if (null == closure_0) {
            let NOT_QUALIFIED = SmartSearchTypes.SmartSearchStatus.NOT_QUALIFIED;
          } else {
            NOT_QUALIFIED = SmartSearchUtils.getSmartSearchStatus(tmp, SmartSearchResultsStore);
          }
          return NOT_QUALIFIED;
        };
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp7 = items1;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      let obj = require("c");
      return require("initialize").useStateFromStoresObject(first, tmp6, tmp7);
    }
  : (arg0) => {
      _require = arg0;
      const items = [SmartSearchResultsStore];
      const items1 = [arg0];
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
