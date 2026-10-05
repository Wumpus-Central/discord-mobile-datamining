// discord_app/modules/search/native/components/tabs/hooks/useSearchMessages.tsx
import SearchUtils from "../../../../SearchUtils.tsx";
import SearchMessageStore from "../../../../SearchMessageStore.tsx";
import SearchQueryStore from "../../../stores/SearchQueryStore.tsx";
import ReactCompilerGating from "../../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let closure_0;
      let closure_1;
      let first;
      _require = arg0;
      dependencyMap = arg1;
      let obj = require("react");
      const cResult = obj.c(5);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [SearchQueryStore, SearchMessageStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === arg0) {
        let tmp7;
        let tmp8;
        if (cResult[2] === arg1) {
          tmp7 = cResult[3];
          tmp8 = cResult[4];
        }
        const tmpResult = tmp(504);
        return tmpResult.useStateFromStores(first, tmp7, tmp8);
      }
      const fn = function u() {
        const searchResultsQuery = SearchQueryStore.getSearchResultsQuery(closure_0);
        const obj = SearchUtils;
        return SearchMessageStore.getMessages(obj.getSearchTabFetchId(closure_0, closure_1, searchResultsQuery));
      };
      const items1 = [arg0, arg1];
      cResult[1] = arg0;
      cResult[2] = arg1;
      cResult[3] = fn;
      cResult[4] = items1;
      tmp8 = items1;
      tmp7 = fn;
    }
  : (arg0, arg1) => {
      let closure_0;
      let closure_1;
      _require = arg0;
      dependencyMap = arg1;
      let obj = require("get initialized");
      const items = [SearchQueryStore, SearchMessageStore];
      const items1 = [arg0, arg1];
      return obj.useStateFromStores(
        items,
        () => {
          const searchResultsQuery = SearchQueryStore.getSearchResultsQuery(closure_0);
          const obj = SearchUtils;
          return SearchMessageStore.getMessages(obj.getSearchTabFetchId(closure_0, closure_1, searchResultsQuery));
        },
        items1,
      );
    };
const result = size.fileFinishedImporting("modules/search/native/components/tabs/hooks/useSearchMessages.tsx");

export const useSearchMessages = tmp2;
