// === Module 11395: ? ===

// Module 11395
import handleInit from "handleInit" /* 7527 */;
import { DraftType } from "handleChanged" /* 4825 */;
import map from "map" /* 4824 */;
import { useChatShowingAutoComplete as closure_6 } from "updateChatInputContainerHeight" /* 8682 */;
import { jsx } from "jsxProd" /* 21 */;
import importAllResult from "noop" /* 19 */;

const require = fn;
const memoResult = importAllResult.memo(function ChatInputImageCarousel(canUpload) {
  canUpload = canUpload.canUpload;
  const channelId = canUpload.channelId;
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
          uploads = closure_1_5.getUploads(channelId, DraftType.ChannelMessage);
        }
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
    tmp4 = jsx(channelId(10265), { attachments: null, channelId: null });
  }
  return tmp4;
});
const result = require("obj132").fileFinishedImporting("modules/chat_input/native/accessories/ChatInputImageCarousel.tsx");

export default memoResult;