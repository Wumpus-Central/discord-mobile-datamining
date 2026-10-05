// discord_app/modules/conjure/publish/useConjurePublishedChannelId.tsx
import ConjureUtils from "../shared/ConjureUtils.tsx";
import GuildChannelStore from "../../../stores/GuildChannelStore.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let closure_0;
      let closure_1;
      let first;
      _require = arg0;
      dependencyMap = arg1;
      const tmp = _require;
      let obj = require("react");
      const cResult = obj.c(5);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildChannelStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === arg1) {
        let tmp6;
        let tmp7;
        if (cResult[2] === arg0) {
          tmp6 = cResult[3];
          tmp7 = cResult[4];
        }
        const tmpResult = tmp(504);
        return tmpResult.useStateFromStores(first, tmp6, tmp7);
      }
      const fn = function o() {
        let findConjureChannelIdResult = null;
        if (null != closure_1) {
          const obj = ConjureUtils;
          findConjureChannelIdResult = obj.findConjureChannelId(closure_0, tmp);
        }
        return findConjureChannelIdResult;
      };
      const items1 = [arg0, arg1];
      cResult[1] = arg1;
      cResult[2] = arg0;
      cResult[3] = fn;
      cResult[4] = items1;
      tmp7 = items1;
      tmp6 = fn;
    }
  : (arg0, arg1) => {
      let closure_0;
      let closure_1;
      _require = arg0;
      dependencyMap = arg1;
      let obj = require("get initialized");
      const items = [GuildChannelStore];
      const items1 = [arg0, arg1];
      return obj.useStateFromStores(
        items,
        () => {
          let findConjureChannelIdResult = null;
          if (null != closure_1) {
            const obj = ConjureUtils;
            findConjureChannelIdResult = obj.findConjureChannelId(closure_0, tmp);
          }
          return findConjureChannelIdResult;
        },
        items1,
      );
    };
const result = size.fileFinishedImporting("modules/conjure/publish/useConjurePublishedChannelId.tsx");

export default tmp2;
