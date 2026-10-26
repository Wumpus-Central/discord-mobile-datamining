// === Module 10072: ConversationDeepLinkUtils ===

// Module 10072 (ConversationDeepLinkUtils)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ConversationPreviewStore from "ConversationPreviewStore" /* 7701 */;

const require = fn;
function resolveConversationFocusLink() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_8 = async function _resolveConversationFocusLink() {
  closure_1 = tmp2;
  ({ channelId: closure_129_0, conversationId: closure_129_1, messageId: closure_129_2 } = closure_0);
  await "Reflect";
  await closure_130_0(closure_130_2[4]).fetchConversation(closure_129_0, closure_129_1);
  const conversation = closure_130_5.getConversation(closure_129_1);
  let tmp8 = null == conversation;
  if (!tmp8) {
    tmp8 = conversation.messageCount <= 1;
  }
  let tmp9 = !tmp8;
  if (!tmp8) {
    const messageIds = conversation.messageIds;
    let flag = messageIds.includes(closure_129_2);
    if (flag) {
      const result = closure_130_0(closure_130_2[4]).setSelectedConversation(closure_129_0, conversation.id, { cacheType: "preview", shouldJump: false });
      flag = true;
      closure_130_0(closure_130_2[4]);
    }
    tmp9 = flag;
  }
  return tmp9;
};
fn(6859).addPostConnectionCallback;
const CONVERSATION_QUERY_PARAM = fn(5607).CONVERSATION_QUERY_PARAM;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conversations/ConversationDeepLinkUtils.tsx");

export { resolveConversationFocusLink };
export const consumeConversationFocusParam = function consumeConversationFocusParam(state) {
  ({ pathname, hash } = state);
  let channelId;
  let messageId;
  dependencyMap = undefined;
  const str = new URLSearchParams(state.search);
  value = str.get(CONVERSATION_QUERY_PARAM);
  if (null == value) {
    return null;
  } else {
    str.delete(CONVERSATION_QUERY_PARAM);
    const tryParseChannelPathResult = channelId(5606).tryParseChannelPath(pathname);
    channelId = undefined;
    if (tryParseChannelPathResult != null) {
      channelId = tryParseChannelPathResult.channelId;
    }
    messageId = undefined;
    if (tryParseChannelPathResult != null) {
      messageId = tryParseChannelPathResult.messageId;
    }
    if (null != channelId) {
      if (null != messageId) {
        if (obj.isProbablyAValidSnowflake(value)) {
          dependencyMap = tmp5(11).cast(value);
          addPostConnectionCallback(asyncGeneratorStep(async () => {
            if (conversationId === 2) {
              conversationId = 3;
              throw new TypeError("Generator functions may not be called on executing generators");
            } else if (tmp3 === 3) {
              if (arg0 === 1) {
                throw value;
              } else if (arg0 === 2) {
                const obj2 = { value, done: true };
                return obj2;
              } else {
                return { value: "IconComponent", done: "+352" };
              }
            } else {
              try {
                conversationId = 2;
                if (0 === c1) {
                  if (arg0 === 1) {
                    conversationId = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    conversationId = 3;
                    const obj3 = { value, done: true };
                    return obj3;
                  } else {
                    const obj4 = { channelId, conversationId, messageId };
                    c1 = 1;
                    conversationId = 1;
                    const obj5 = { value: resolveConversationFocusLink(obj4), done: false };
                    return obj5;
                  }
                } else if (arg0 === 1) {
                  conversationId = 3;
                  throw value;
                } else if (arg0 === 2) {
                  conversationId = 3;
                  const obj6 = { value, done: true };
                  return obj6;
                } else {
                  if (value) {
                    const conversationFocus = tmp4(conversationId[4]).requestConversationFocus();
                    const obj = tmp4(conversationId[4]);
                  }
                  conversationId = 3;
                  return { value: "IconComponent", done: "+352" };
                }
              } catch (tmp13) {
                conversationId = tmp;
                throw tmp13;
              }
            }
          }));
          const tmp5Result = tmp5(11);
        }
        obj = messageId(11);
        tmp5 = messageId;
      }
    }
    const str1 = str.toString();
    if ("" === str1) {
      let sum = pathname + hash;
    } else {
      const _HermesInternal = HermesInternal;
      sum = "" + pathname + "?" + str1 + hash;
    }
    let obj2 = { path: sum, state: state.state };
    return obj2;
  }
};