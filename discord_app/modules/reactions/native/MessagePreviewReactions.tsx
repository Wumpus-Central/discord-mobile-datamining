// discord_app/modules/reactions/native/MessagePreviewReactions.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import closure_3 from "../../conversations/ConversationsStore.tsx";
import closure_4 from "../../../stores/native/MessagePreviewStore.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
noopAll;
let closure_6 = [];
const result = require("set").fileFinishedImporting("modules/reactions/native/MessagePreviewReactions.tsx");

export default function MessagePreviewReactions(emoji) {
  ({ channelId, messageId } = emoji);
  let obj = channelId(504);
  const items = [closure_4, closure_3];
  const items1 = [channelId, messageId];
  const stateFromStores = obj.useStateFromStores(
    items,
    () => {
      let message = closure_1_4.getMessage(messageId);
      if (message == null) {
        message = closure_1_3.getMessage(channelId, messageId);
      }
      return null != message ? message.reactions : closure_1_6;
    },
    items1,
  );
  obj = { value: messageId(7162)(messageId(7182).MESSAGE_PREVIEW_REACTIONS).analyticsLocations, children: null };
  if (stateFromStores.length > 0) {
    obj = { channelId: null, messageId: null, emoji: null, reactions: null };
    obj[0] = channelId;
    obj[1] = messageId;
    obj[2] = emoji.emoji;
    obj[3] = stateFromStores;
    let tmp4Result = tmp4(tmp(11256).MessageReactionsContent, obj);
  } else {
    tmp4Result = tmp4(tmp(11256).MessageReactionsEmpty, {});
  }
  obj[1] = tmp4Result;
  return jsx(channelId(7162).AnalyticsLocationProvider, {
    value: messageId(7162)(messageId(7182).MESSAGE_PREVIEW_REACTIONS).analyticsLocations,
    children: null,
  });
}
