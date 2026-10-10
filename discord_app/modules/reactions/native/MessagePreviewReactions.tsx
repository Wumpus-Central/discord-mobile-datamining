// === Module 9595: MessagePreviewReactions ===

// Module 9595 (MessagePreviewReactions)
import c from "c" /* 576 */;
import useAnalyticsLocations from "useAnalyticsLocations" /* 6851 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6878 */;
import MessageReactionsContent from "MessageReactionsContent" /* 9584 */;
import noop from "module_19" /* 19 */;
import ChannelConversationsStore from "ChannelConversationsStore" /* 7313 */;
import ConversationPreviewStore from "ConversationPreviewStore" /* 7318 */;
import MessagePreviewStore from "MessagePreviewStore" /* 8480 */;

const useAnalyticsLocationsDefault = useAnalyticsLocations;

require = fn;
const jsx = fn(21).jsx;
let closure_7 = [];
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function usePreviewMessageReactions(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  const cResult = require("c").c(5);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [MessagePreviewStore, ChannelConversationsStore, ConversationPreviewStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === arg0) {
    if (cResult[2] === arg1) {
      let tmp8 = cResult[3];
      let tmp9 = cResult[4];
    }
    return tmp(504).useStateFromStores(first, tmp8, tmp9);
  }
  class M {
    constructor() {
      tmp = closure_1;
      message = closure_5.getMessage(closure_1);
      if (message == null) {
        tmp3 = closure_3;
        tmp4 = closure_0;
        message = closure_3.getMessage(closure_0, tmp);
      }
      if (message == null) {
        tmp5 = closure_4;
        message = closure_4.getMessage(tmp);
      }
      return null != message ? message.reactions : closure_7;
    }
  }
  const items1 = [arg0, arg1];
  cResult[1] = arg0;
  cResult[2] = arg1;
  cResult[3] = M;
  cResult[4] = items1;
  tmp9 = items1;
  tmp8 = M;
  const obj = require("c");
  tmp = _require;
}) : (function usePreviewMessageReactions(arg0, arg1) {
  _require = arg0;
  closure_1 = arg1;
  const items = [MessagePreviewStore, ChannelConversationsStore, ConversationPreviewStore];
  const items1 = [arg0, arg1];
  return require("initialize").useStateFromStores(items, () => {
    let message = MessagePreviewStore.getMessage(closure_1);
    if (message == null) {
      message = ChannelConversationsStore.getMessage(closure_0, closure_1);
    }
    if (message == null) {
      message = ConversationPreviewStore.getMessage(closure_1);
    }
    return null != message ? message.reactions : closure_7;
  }, items1);
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/reactions/native/MessagePreviewReactions.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function MessagePreviewReactions(arg0) {
  const cResult = c.c(8);
  ({ channelId, messageId, emoji } = arg0);
  const arr = closure_8(channelId, messageId);
  const analyticsLocations = useAnalyticsLocationsDefault(AnalyticsLocationDefault.MESSAGE_PREVIEW_REACTIONS).analyticsLocations;
  if (cResult[0] === channelId) {
    if (cResult[1] === emoji) {
      if (cResult[2] === messageId) {
        if (cResult[3] === arr) {
          if (cResult[5] === analyticsLocations) {
            if (cResult[6] === tmp5) {
              let tmp9 = cResult[7];
            }
            return tmp9;
          }
          const obj2 = { value: analyticsLocations, children: cResult[4] };
          const tmp11 = jsx(useAnalyticsLocations.AnalyticsLocationProvider, { value: analyticsLocations, children: cResult[4] });
          cResult[5] = analyticsLocations;
          cResult[6] = cResult[4];
          cResult[7] = tmp11;
          tmp9 = tmp11;
        }
      }
    }
  }
  let num = 0;
  if (arr.length > 0) {
    const obj3 = { channelId, messageId, emoji, reactions: arr };
    let tmp7 = jsx(MessageReactionsContent.MessageReactionsContent, { channelId, messageId, emoji, reactions: arr });
  } else {
    tmp7 = jsx(MessageReactionsContent.MessageReactionsEmpty, {});
  }
  cResult[num] = channelId;
  cResult[1] = emoji;
  cResult[2] = messageId;
  cResult[3] = arr;
  num = 4;
  cResult[4] = tmp7;
}) : (function MessagePreviewReactions(emoji) {
  ({ channelId, messageId } = emoji);
  const arr = closure_8(channelId, messageId);
  const obj = { value: useAnalyticsLocationsDefault(AnalyticsLocationDefault.MESSAGE_PREVIEW_REACTIONS).analyticsLocations, children: null };
  if (arr.length > 0) {
    const obj2 = { channelId, messageId, emoji: emoji.emoji, reactions: arr };
    let tmp3Result = jsx(MessageReactionsContent.MessageReactionsContent, { channelId, messageId, emoji: emoji.emoji, reactions: arr });
  } else {
    tmp3Result = jsx(MessageReactionsContent.MessageReactionsEmpty, {});
  }
  obj.children = tmp3Result;
  return jsx(useAnalyticsLocations.AnalyticsLocationProvider, { value: useAnalyticsLocationsDefault(AnalyticsLocationDefault.MESSAGE_PREVIEW_REACTIONS).analyticsLocations, children: null });
});