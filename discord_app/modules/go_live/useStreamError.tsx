// === Module 9620: useStreamError ===

// Module 9620 (useStreamError)
import AVErrorStore from "AVErrorStore" /* 9596 */;

const require = fn;
let closure_3 = { [fn(9110).AVError.STREAM_SOUNDSHARE_FAILED]: 0, [fn(9110).AVError.STREAM_SEND_HIGH_PACKET_LOSS]: 1, [fn(9110).AVError.STREAM_VIEW_HIGH_PACKET_LOSS]: 1, [fn(9110).AVError.STREAM_SEND_LOW_FPS]: 2, [fn(9110).AVError.STREAM_VIEW_LOW_FPS]: 2, [fn(9110).AVError.STREAM_BAD_NETWORK_QUALITY]: 3 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/go_live/useStreamError.tsx");

export default function useStreamError(id) {
  id = id.id;
  const items = [AVErrorStore];
  const items1 = [id];
  return id(504).useStateFromStores(items, () => {
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
  }, items1);
};