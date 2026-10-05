// discord_app/modules/go_live/useStreamError.tsx
import AVError from "../errors/av_errors/AVError.tsx";
import AVErrorStore from "../errors/av_errors/AVErrorStore.tsx";
import ReactCompilerGating from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let id;

let closure_3 = {
  [AVError.AVError.STREAM_SOUNDSHARE_FAILED]: 0,
  [AVError.AVError.STREAM_SEND_HIGH_PACKET_LOSS]: 1,
  [AVError.AVError.STREAM_VIEW_HIGH_PACKET_LOSS]: 1,
  [AVError.AVError.STREAM_SEND_LOW_FPS]: 2,
  [AVError.AVError.STREAM_VIEW_LOW_FPS]: 2,
  [AVError.AVError.STREAM_BAD_NETWORK_QUALITY]: 3,
};
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (id) => {
      let first;
      let tmp6;
      let tmp7;
      const tmp = id;
      const obj = id(576);
      const cResult = obj.c(4);
      id = id.id;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AVErrorStore];
        let num = 0;
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== id) {
        const fn = function s() {
          const activeErrors = AVErrorStore.getActiveErrors();
          const arr = Array.from(activeErrors.values());
          const found = arr.filter(
            (streamKey) =>
              "streamKey" in streamKey && streamKey.streamKey === id && null != closure_2_3[streamKey.type],
          );
          const first = found.sort((arg0, arg1) => {
            let num = closure_1_3[arg0.type];
            if (num == null) {
              num = 0;
            }
            let num2 = closure_1_3[arg1.type];
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
        let num2 = 1;
        cResult[1] = id;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp7 = items1;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(first, tmp6, tmp7);
    }
  : (id) => {
      id = id.id;
      const items = [AVErrorStore];
      const items1 = [id];
      const obj = id(504);
      return obj.useStateFromStores(
        items,
        () => {
          const activeErrors = AVErrorStore.getActiveErrors();
          const arr = Array.from(activeErrors.values());
          const found = arr.filter(
            (streamKey) =>
              "streamKey" in streamKey && streamKey.streamKey === id && null != closure_2_3[streamKey.type],
          );
          const first = found.sort((arg0, arg1) => {
            let num = closure_1_3[arg0.type];
            if (num == null) {
              num = 0;
            }
            let num2 = closure_1_3[arg1.type];
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
const result = size.fileFinishedImporting("modules/go_live/useStreamError.tsx");

export default tmp2;
