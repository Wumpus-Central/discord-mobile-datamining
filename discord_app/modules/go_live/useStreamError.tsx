// === Module 9589: useStreamError ===

// Module 9589 (useStreamError)
import closure_2 from "isAVErrorContextOfType" /* 9564 */;

const require = arg1;
let closure_3 = { [arg1(9565).AVError.STREAM_SOUNDSHARE_FAILED]: 0, [arg1(9565).AVError.STREAM_SEND_HIGH_PACKET_LOSS]: 1, [arg1(9565).AVError.STREAM_VIEW_HIGH_PACKET_LOSS]: 1, [arg1(9565).AVError.STREAM_SEND_LOW_FPS]: 2, [arg1(9565).AVError.STREAM_VIEW_LOW_FPS]: 2, [arg1(9565).AVError.STREAM_BAD_NETWORK_QUALITY]: 3 };
const result = require("set").fileFinishedImporting("modules/go_live/useStreamError.tsx");

export default function useStreamError(id) {
  id = id.id;
  const items = [closure_2];
  const items1 = [id];
  return id(589).useStateFromStores(items, () => {
    const activeErrors = closure_1_2.getActiveErrors();
    const found = Array.from(activeErrors.values()).filter((streamKey) => {
      let tmp = "streamKey" in streamKey;
      if (tmp) {
        tmp = streamKey.streamKey === closure_0;
      }
      if (tmp) {
        tmp = null != closure_1_3[streamKey.type];
      }
      return tmp;
    });
    const first = found.sort((arg0, arg1) => {
      let num = table[arg0.type];
      if (num == null) {
        num = 0;
      }
      let num2 = table[arg1.type];
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