// discord_app/modules/messages/useLongestChannelMessageBeforeReply.tsx
import MessageStore from "../../stores/MessageStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let closure_0;
      let closure_1;
      let first;
      _require = arg0;
      dependencyMap = arg1;
      const obj = require("react");
      const cResult = obj.c(5);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [MessageStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === arg0) {
        let tmp6;
        let tmp7;
        if (cResult[2] === arg1) {
          tmp6 = cResult[3];
          tmp7 = cResult[4];
        }
        const tmpResult = tmp(504);
        return tmpResult.useStateFromStores(first, tmp6, tmp7);
      }
      const fn = function l() {
        if (null != closure_1) {
          const messages = MessageStore.getMessages(closure_0);
          const findOldestResult = messages.findOldest((author) => author.author.id === closure_1_1);
          let tmp4 = findOldestResult;
          if (null != findOldestResult) {
            const toArrayResult = messages.toArray();
            for (const item10018 of toArrayResult) {
              if (item10018.author.id !== closure_1) {
                obj2.return();
                break;
              } else {
                let length1;
                let length = tmp8.content.length;
                if (tmp4 != null) {
                  length1 = tmp4.content.length;
                }
                if (length > length1) {
                  tmp4 = item10018;
                }
                continue;
              }
              return tmp4;
            }
          }
        }
      };
      const items1 = [arg0, arg1];
      cResult[1] = arg0;
      cResult[2] = arg1;
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
      const items = [MessageStore];
      const items1 = [arg0, arg1];
      const obj = require("get initialized");
      return obj.useStateFromStores(
        items,
        () => {
          if (null != closure_1) {
            const messages = MessageStore.getMessages(closure_0);
            const findOldestResult = messages.findOldest((author) => author.author.id === closure_1_1);
            let tmp4 = findOldestResult;
            if (null != findOldestResult) {
              const toArrayResult = messages.toArray();
              for (const item10018 of toArrayResult) {
                if (item10018.author.id !== closure_1) {
                  obj2.return();
                  break;
                } else {
                  let length1;
                  let length = tmp8.content.length;
                  if (tmp4 != null) {
                    length1 = tmp4.content.length;
                  }
                  if (length > length1) {
                    tmp4 = item10018;
                  }
                  continue;
                }
                return tmp4;
              }
            }
          }
        },
        items1,
      );
    };
const result = size.fileFinishedImporting("modules/messages/useLongestChannelMessageBeforeReply.tsx");

export const useLongestChannelMessageBeforeReply = tmp2;
