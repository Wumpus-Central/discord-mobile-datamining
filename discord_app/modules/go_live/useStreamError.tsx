// discord_app/modules/go_live/useStreamError.tsx
import isAVErrorContextOfType from "../errors/av_errors/AVErrorStore.tsx";

const require = fn;
let closure_3 = { [fn(9668).AVError.STREAM_SOUNDSHARE_FAILED]: 0, [fn(9668).AVError.STREAM_SEND_HIGH_PACKET_LOSS]: 1, [fn(9668).AVError.STREAM_VIEW_HIGH_PACKET_LOSS]: 1, [fn(9668).AVError.STREAM_SEND_LOW_FPS]: 2, [fn(9668).AVError.STREAM_VIEW_LOW_FPS]: 2, [fn(9668).AVError.STREAM_BAD_NETWORK_QUALITY]: 3 };
const result = require("obj132").fileFinishedImporting("modules/go_live/useStreamError.tsx");

export default function useStreamError(id) {
  id = id.id;
  const items = [closure_2];
  const items1 = [id];
  return id(589).useStateFromStores(items, () => {
    const activeErrors = closure_1_2.getActiveErrors();
    const found = Array.from(activeErrors.values()).filter((item, index) => {
      let tmp = "streamKey" in item;
      if (tmp) {
        tmp = item.streamKey === closure_0;
      }
      if (tmp) {
        tmp = null != closure_1_3[item.type];
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