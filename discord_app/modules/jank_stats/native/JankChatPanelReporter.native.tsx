// discord_app/modules/jank_stats/native/JankChatPanelReporter.native.tsx
import getJankScreenName from "getJankScreenName.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/jank_stats/native/JankChatPanelReporter.native.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (showCreateThread) => {
      const cResult = channelId(576).c(11);
      ({ translateX, maxWidth, channelId } = showCreateThread);
      showCreateThread = showCreateThread.showCreateThread;
      if (cResult[0] === channelId) {
        if (cResult[1] === showCreateThread) {
          let tmp4 = cResult[2];
        }
        dependencyMap = noop.useRef(tmp4);
        if (cResult[3] === channelId) {
          if (cResult[4] === showCreateThread) {
            let tmp5 = cResult[5];
            let tmp6 = cResult[6];
          }
          const effect = noop.useEffect(tmp5, tmp6);
          const _Symbol = Symbol;
          class C {
            constructor() {
              obj = { channelId, showCreateThread };
              closure_2.current = obj;
              return;
            }
          }
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            const fn = function p() {
              ({ channelId, showCreateThread } = ref.current);
              return getJankScreenName.getChatPanelScreenName(channelId, showCreateThread);
            };
            cResult[7] = fn;
            let tmp9 = fn;
          } else {
            tmp9 = cResult[7];
          }
          if (cResult[8] === maxWidth) {
            if (cResult[9] === translateX) {
              let tmp10 = cResult[10];
            }
            return tmp10;
          }
          const obj2 = {
            position: translateX,
            openAt: 0,
            closedAt: maxWidth,
            resolveOpenName: tmp9,
            resolveClosedName: channelId(15930).getPanelListScreenName,
          };
          const tmp14 = jsx(showCreateThread(15933), {
            position: translateX,
            openAt: 0,
            closedAt: maxWidth,
            resolveOpenName: tmp9,
            resolveClosedName: channelId(15930).getPanelListScreenName,
          });
          cResult[8] = maxWidth;
          cResult[9] = translateX;
          cResult[10] = tmp14;
          tmp10 = tmp14;
          const tmp13 = showCreateThread(15933);
        }
        class C {
          constructor() {
            obj = { channelId, showCreateThread };
            closure_2.current = obj;
            return;
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
      const obj = channelId(576);
    }
  : (channelId) => {
      channelId = channelId.channelId;
      const showCreateThread = channelId.showCreateThread;
      ({ translateX, maxWidth } = channelId);
      dependencyMap = noop.useRef({ channelId, showCreateThread });
      const items = [channelId, showCreateThread];
      const effect = noop.useEffect(() => {
        closure_2.current = { channelId, showCreateThread };
      }, items);
      const callback = noop.useCallback(() => {
        ({ channelId, showCreateThread } = ref.current);
        return getJankScreenName.getChatPanelScreenName(channelId, showCreateThread);
      }, []);
      const obj = {
        position: translateX,
        openAt: 0,
        closedAt: maxWidth,
        resolveOpenName: callback,
        resolveClosedName: channelId(15930).getPanelListScreenName,
      };
      return jsx(showCreateThread(15933), {
        position: translateX,
        openAt: 0,
        closedAt: maxWidth,
        resolveOpenName: callback,
        resolveClosedName: channelId(15930).getPanelListScreenName,
      });
    };
