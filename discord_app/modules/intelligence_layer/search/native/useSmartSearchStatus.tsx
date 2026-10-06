// discord_app/modules/intelligence_layer/search/native/useSmartSearchStatus.tsx
import SmartSearchUtils from "../SmartSearchUtils.tsx";
import SmartSearchTypes from "../SmartSearchTypes.tsx";
import SmartSearchResultsStore from "../SmartSearchResultsStore.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp6;
      let tmp7;
      _require = arg0;
      const tmp = _require;
      let obj = require("react");
      const cResult = obj.c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SmartSearchResultsStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function u() {
          let NOT_QUALIFIED;
          if (null == closure_0) {
            NOT_QUALIFIED = SmartSearchTypes.SmartSearchStatus.NOT_QUALIFIED;
          } else {
            const obj = SmartSearchUtils;
            NOT_QUALIFIED = obj.getSmartSearchStatus(tmp, SmartSearchResultsStore);
          }
          return NOT_QUALIFIED;
        };
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp7 = items1;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStoresObject(first, tmp6, tmp7);
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      let obj = require("get initialized");
      const items = [SmartSearchResultsStore];
      const items1 = [arg0];
      return obj.useStateFromStoresObject(
        items,
        () => {
          let NOT_QUALIFIED;
          if (null == closure_0) {
            NOT_QUALIFIED = SmartSearchTypes.SmartSearchStatus.NOT_QUALIFIED;
          } else {
            const obj = SmartSearchUtils;
            NOT_QUALIFIED = obj.getSmartSearchStatus(tmp, SmartSearchResultsStore);
          }
          return NOT_QUALIFIED;
        },
        items1,
      );
    };
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/useSmartSearchStatus.tsx");

export const useSmartSearchStatus = tmp2;
