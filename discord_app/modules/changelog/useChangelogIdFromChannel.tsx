// discord_app/modules/changelog/useChangelogIdFromChannel.tsx
import MessageStore from "../../stores/MessageStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp6;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(3);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [MessageStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function s() {
          return MessageStore.getLastMessage(closure_0);
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      let changelogId;
      if (stateFromStores != null) {
        changelogId = stateFromStores.changelogId;
      }
      return changelogId;
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      const items = [MessageStore];
      const obj = require("get initialized");
      const stateFromStores = obj.useStateFromStores(items, () => MessageStore.getLastMessage(closure_0));
      let changelogId;
      if (stateFromStores != null) {
        changelogId = stateFromStores.changelogId;
      }
      return changelogId;
    };
const result = size.fileFinishedImporting("modules/changelog/useChangelogIdFromChannel.tsx");

export default tmp2;
