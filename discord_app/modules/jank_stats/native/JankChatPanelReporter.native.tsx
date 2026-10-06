// discord_app/modules/jank_stats/native/JankChatPanelReporter.native.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import getJankScreenName from "getJankScreenName.tsx";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let dependencyMap;

const jsx = Fragment.jsx;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (showCreateThread) => {
      let channelId;
      let maxWidth;
      let ref;
      let translateX;
      let obj = channelId(576);
      const cResult = obj.c(11);
      ({ translateX, maxWidth, channelId } = showCreateThread);
      showCreateThread = showCreateThread.showCreateThread;
      if (cResult[0] === channelId) {
        let tmp4;
        if (cResult[1] === showCreateThread) {
          tmp4 = cResult[2];
        }
        dependencyMap = react.useRef(tmp4);
        if (cResult[3] === channelId) {
          let tmp5;
          let tmp6;
          let tmp9;
          if (cResult[4] === showCreateThread) {
            tmp5 = cResult[5];
            tmp6 = cResult[6];
          }
          const effect = react.useEffect(tmp5, tmp6);
          const _Symbol = Symbol;
          class C {
            constructor() {
              const obj = { channelId, showCreateThread };
              ref.current = obj;
            }
          }
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            const fn = function p() {
              ({ channelId, showCreateThread } = ref.current);
              const obj = getJankScreenName;
              return obj.getChatPanelScreenName(channelId, showCreateThread);
            };
            cResult[7] = fn;
            tmp9 = fn;
          } else {
            tmp9 = cResult[7];
          }
          if (cResult[8] === maxWidth) {
            let tmp10;
            if (cResult[9] === translateX) {
              tmp10 = cResult[10];
            }
            return tmp10;
          }
          showCreateThread(15976);
          const tmp14 = (
            <tmp13
              position={translateX}
              openAt={0}
              closedAt={maxWidth}
              resolveOpenName={tmp9}
              resolveClosedName={channelId(15973).getPanelListScreenName}
            />
          );
          cResult[8] = maxWidth;
          cResult[9] = translateX;
          cResult[10] = tmp14;
          tmp10 = tmp14;
        }
        class C {
          constructor() {
            const obj = { channelId, showCreateThread };
            ref.current = obj;
          }
        }
        const items = [channelId, showCreateThread];
        cResult[3] = channelId;
        cResult[4] = showCreateThread;
        cResult[5] = C;
        cResult[6] = items;
        tmp6 = items;
        tmp5 = C;
      }
      const obj4 = { channelId, showCreateThread };
      cResult[0] = channelId;
      cResult[1] = showCreateThread;
      cResult[2] = obj4;
      tmp4 = obj4;
    }
  : (channelId) => {
      let maxWidth;
      let ref;
      let translateX;
      channelId = channelId.channelId;
      const showCreateThread = channelId.showCreateThread;
      ({ translateX, maxWidth } = channelId);
      dependencyMap = react.useRef({ channelId, showCreateThread });
      const items = [channelId, showCreateThread];
      const effect = react.useEffect(() => {
        const obj = { channelId, showCreateThread };
        ref.current = obj;
      }, items);
      const callback = react.useCallback(() => {
        ({ channelId, showCreateThread } = ref.current);
        const obj = getJankScreenName;
        return obj.getChatPanelScreenName(channelId, showCreateThread);
      }, []);
      showCreateThread(15976);
      return (
        <tmp3
          position={translateX}
          openAt={0}
          closedAt={maxWidth}
          resolveOpenName={callback}
          resolveClosedName={channelId(15973).getPanelListScreenName}
        />
      );
    };
const result = size.fileFinishedImporting("modules/jank_stats/native/JankChatPanelReporter.native.tsx");

export default tmp2;
