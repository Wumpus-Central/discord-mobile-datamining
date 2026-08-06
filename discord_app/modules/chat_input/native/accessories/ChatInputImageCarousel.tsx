// discord_app/modules/chat_input/native/accessories/ChatInputImageCarousel.tsx
import handleInit from "handleInit";
import { DraftType } from "handleChanged";
import map from "map";
import { useChatShowingAutoComplete as closure_6 } from "updateChatInputContainerHeight";
import { jsx } from "jsxProd";
import importAllResult from "noop";

const require = arg1;
const memoResult = require("noop").memo(function ChatInputImageCarousel(canUpload) {
  canUpload = canUpload.canUpload;
  const channelId = canUpload.channelId;
  let dependencyMap;
  let tmp = callback(canUpload.screenIndex);
  dependencyMap = tmp;
  let obj = canUpload(589);
  const items = [map, handleInit];
  const items1 = [channelId, canUpload, tmp];
  const stateFromStores = obj.useStateFromStores(items, () => {
    let tmp = null;
    if (!c2) {
      let uploads = null;
      if (canUpload) {
        uploads = null;
        if (null == outer1_3.getActiveCommand(channelId)) {
          uploads = outer1_5.getUploads(tmp5, outer1_4.ChannelMessage);
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
    tmp4 = jsx(channelId(9922), { attachments: null, channelId: null });
  }
  return tmp4;
});
const result = require("handleChanged").fileFinishedImporting("modules/chat_input/native/accessories/ChatInputImageCarousel.tsx");

export default memoResult;