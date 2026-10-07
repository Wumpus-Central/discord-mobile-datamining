// discord_app/modules/changelog/useChangelogIdFromChannel.tsx
import MessageStore from "../../stores/MessageStore.tsx";

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/changelog/useChangelogIdFromChannel.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      _require = arg0;
      const cResult = require("c").c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [MessageStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function s() {
          return MessageStore.getLastMessage(closure_0);
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
      let changelogId;
      if (stateFromStores != null) {
        changelogId = stateFromStores.changelogId;
      }
      return changelogId;
    }
  : (arg0) => {
      _require = arg0;
      const items = [MessageStore];
      const stateFromStores = require("initialize").useStateFromStores(items, () =>
        MessageStore.getLastMessage(closure_0),
      );
      let changelogId;
      if (stateFromStores != null) {
        changelogId = stateFromStores.changelogId;
      }
      return changelogId;
    };
