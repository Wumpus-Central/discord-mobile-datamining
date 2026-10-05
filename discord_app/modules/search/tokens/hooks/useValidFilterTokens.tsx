// discord_app/modules/search/tokens/hooks/useValidFilterTokens.tsx
import SearchTokenStreamerModeUtils from "../SearchTokenStreamerModeUtils.tsx";
import StreamerModeStore from "../../../../stores/StreamerModeStore.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let ReactCompilerGating = ReactCompilerGating_mod;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp6;
      _require = arg0;
      let obj = require("react");
      const cResult = obj.c(3);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [StreamerModeStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function n() {
          const items = [StreamerModeStore];
          const obj = SearchTokenStreamerModeUtils;
          return obj.getValidOrderedFilterTokens(closure_0, items);
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStoresArray(first, tmp6);
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      let obj = require("get initialized");
      let items = [StreamerModeStore];
      return obj.useStateFromStoresArray(items, () => {
        const items = [StreamerModeStore];
        const obj = SearchTokenStreamerModeUtils;
        return obj.getValidOrderedFilterTokens(closure_0, items);
      });
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp6;
      let tmp7;
      _require = arg0;
      let obj = require("react");
      const cResult = obj.c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let items = [StreamerModeStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function n() {
          const items = [StreamerModeStore];
          const obj = SearchTokenStreamerModeUtils;
          return obj.getValidFilterTokens(closure_0, items);
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
      const tmpResult = require("get initialized");
      return tmpResult.useStateFromStores(first, tmp6, tmp7, require("SetUtils").areSetsEqual);
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      let obj = require("get initialized");
      let items = [StreamerModeStore];
      const items1 = [arg0];
      return obj.useStateFromStores(
        items,
        () => {
          const items = [StreamerModeStore];
          const obj = SearchTokenStreamerModeUtils;
          return obj.getValidFilterTokens(closure_0, items);
        },
        items1,
        require("SetUtils").areSetsEqual,
      );
    };
const result = size.fileFinishedImporting("modules/search/tokens/hooks/useValidFilterTokens.tsx");

export const useValidOrderedFilterTokens = tmp2;
export const useValidFilterTokens = tmp3;
