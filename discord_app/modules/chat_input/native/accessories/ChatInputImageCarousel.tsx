// === Module 11446: ? ===

// Module 11446
import closure_3 from "handleInit" /* 7565 */;
import { DraftType } from "handleChanged" /* 4830 */;
import closure_5 from "map" /* 4829 */;
import { useChatShowingAutoComplete as closure_6 } from "updateChatInputContainerHeight" /* 8719 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

const require = arg1;
const memoResult = importAllResult.memo(function ChatInputImageCarousel(canUpload) {
  canUpload = canUpload.canUpload;
  const channelId = canUpload.channelId;
  dependencyMap = undefined;
  let tmp = callback(canUpload.screenIndex);
  dependencyMap = tmp;
  let obj = canUpload(589);
  const items = [closure_5, closure_3];
  const items1 = [channelId, canUpload, tmp];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let tmp = null;
    if (!closure_2) {
      let uploads = null;
      if (canUpload) {
        uploads = null;
        if (null == closure_1_3.getActiveCommand(channelId)) {
          uploads = closure_1_5.getUploads(tmp5, closure_1_4.ChannelMessage);
        }
        tmp5 = channelId;
      }
      tmp = uploads;
    }
    return tmp;
  }, items1);
  let tmp4 = null;
  if (null != stateFromStores) {
    obj = { attachments: null, channelId: null };
    obj[0] = stateFromStores;
    obj[1] = channelId;
    tmp4 = jsx(channelId(10304), { attachments: null, channelId: null });
  }
  return tmp4;
});
const result = require("set").fileFinishedImporting("modules/chat_input/native/accessories/ChatInputImageCarousel.tsx");

export default memoResult;