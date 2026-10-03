// discord_app/modules/go_live/useStreamError.tsx
import AVErrorStore from "../errors/av_errors/AVErrorStore.tsx";

const require = fn;
let closure_3 = {
  [fn(9095).AVError.STREAM_SOUNDSHARE_FAILED]: 0,
  [fn(9095).AVError.STREAM_SEND_HIGH_PACKET_LOSS]: 1,
  [fn(9095).AVError.STREAM_VIEW_HIGH_PACKET_LOSS]: 1,
  [fn(9095).AVError.STREAM_SEND_LOW_FPS]: 2,
  [fn(9095).AVError.STREAM_VIEW_LOW_FPS]: 2,
  [fn(9095).AVError.STREAM_BAD_NETWORK_QUALITY]: 3,
};
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/go_live/useStreamError.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (id) => {
      const cResult = id(576).c(4);
      id = id.id;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AVErrorStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== id) {
        const fn = function s() {
          const activeErrors = AVErrorStore.getActiveErrors();
          const found = Array.from(activeErrors.values()).filter((streamKey) => {
            let tmp = "streamKey" in streamKey;
            if (tmp) {
              tmp = streamKey.streamKey === id;
            }
            if (tmp) {
              tmp = null != closure_2_3[streamKey.type];
            }
            return tmp;
          });
          const first = found.sort((arg0, arg1) => {
            let num = dependencyMap[arg0.type];
            if (num == null) {
              num = 0;
            }
            let num2 = dependencyMap[arg1.type];
            if (num2 == null) {
              num2 = 0;
            }
            return num - num2;
          })[0];
          let type;
          if (first != null) {
            type = first.type;
          }
          return type;
        };
        const items1 = [id];
        cResult[1] = id;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp7 = items1;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const obj = id(576);
      return id(504).useStateFromStores(first, tmp6, tmp7);
    }
  : (id) => {
      id = id.id;
      const items = [AVErrorStore];
      const items1 = [id];
      return id(504).useStateFromStores(
        items,
        () => {
          const activeErrors = AVErrorStore.getActiveErrors();
          const found = Array.from(activeErrors.values()).filter((streamKey) => {
            let tmp = "streamKey" in streamKey;
            if (tmp) {
              tmp = streamKey.streamKey === id;
            }
            if (tmp) {
              tmp = null != closure_2_3[streamKey.type];
            }
            return tmp;
          });
          const first = found.sort((arg0, arg1) => {
            let num = dependencyMap[arg0.type];
            if (num == null) {
              num = 0;
            }
            let num2 = dependencyMap[arg1.type];
            if (num2 == null) {
              num2 = 0;
            }
            return num - num2;
          })[0];
          let type;
          if (first != null) {
            type = first.type;
          }
          return type;
        },
        items1,
      );
    };
