// === Module 10071: ConversationDeepLinkUtils ===

// Module 10071 (ConversationDeepLinkUtils)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ConversationPreviewStore from "ConversationPreviewStore" /* 7699 */;

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
let closure_8 = async function _resolveConversationFocusLink(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp5;
          closure_1 = tmp2;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          ({ channelId: closure_129_0, conversationId: closure_129_1, messageId: closure_129_2 } = closure_0);
          let conversation;
          c3 = 1;
          c4 = 1;
          return { value: "Reflect", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          c3 = 2;
          c4 = 1;
          const obj6 = { value: closure_130_0(closure_130_2[4]).fetchConversation(closure_129_0, closure_129_1), done: false };
          return obj6;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } else {
        conversation = closure_130_5.getConversation(closure_129_1);
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
            const obj = closure_130_0(closure_130_2[4]);
          }
          tmp9 = flag;
        }
        c4 = 3;
        const obj8 = { value: tmp9, done: true };
        return obj8;
      }
    } catch (tmp27) {
      c4 = tmp;
      throw tmp27;
    }
  }
};
fn(6857).addPostConnectionCallback;
const CONVERSATION_QUERY_PARAM = fn(5605).CONVERSATION_QUERY_PARAM;
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
    const tryParseChannelPathResult = channelId(5604).tryParseChannelPath(pathname);
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
                return { value: "IconComponent", done: null };
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
                  return { value: "IconComponent", done: null };
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