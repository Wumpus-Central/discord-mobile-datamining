// === Module 10185: ConversationDeepLinkUtils ===

// Module 10185 (ConversationDeepLinkUtils)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ConversationPreviewStore from "ConversationPreviewStore" /* 7770 */;

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
      return { value: "HermesInternal", done: "HermesInternal" };
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
          return { value: "flexDirection", done: true };
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
fn(6932).addPostConnectionCallback;
const CONVERSATION_QUERY_PARAM = fn(5655).CONVERSATION_QUERY_PARAM;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conversations/ConversationDeepLinkUtils.tsx");

export { resolveConversationFocusLink };
export function consumeConversationFocusParam(state) {
  ({ pathname, hash } = state);
  let channelId;
  let messageId;
  let guildId;
  asyncGeneratorStep = undefined;
  const str = new URLSearchParams(state.search);
  value = str.get(CONVERSATION_QUERY_PARAM);
  if (null == value) {
    return null;
  } else {
    str.delete(CONVERSATION_QUERY_PARAM);
    const tryParseChannelPathResult = channelId(guildId[5]).tryParseChannelPath(pathname);
    channelId = undefined;
    if (tryParseChannelPathResult != null) {
      channelId = tryParseChannelPathResult.channelId;
    }
    messageId = undefined;
    if (tryParseChannelPathResult != null) {
      messageId = tryParseChannelPathResult.messageId;
    }
    if (null != tryParseChannelPathResult) {
      if (null != channelId) {
        if (null != messageId) {
          if (obj.isProbablyAValidSnowflake(value)) {
            guildId = tryParseChannelPathResult.guildId;
            asyncGeneratorStep = tmp5(tmp16[6]).cast(value);
            addPostConnectionCallback(asyncGeneratorStep(async () => {
              if (dependencyMap === 2) {
                dependencyMap = 3;
                throw new TypeError("Generator functions may not be called on executing generators");
              } else if (tmp3 === 3) {
                if (arg0 === 1) {
                  throw value;
                } else if (arg0 === 2) {
                  const obj2 = { value, done: true };
                  return obj2;
                } else {
                  return { value: "HermesInternal", done: "HermesInternal" };
                }
              } else {
                try {
                  dependencyMap = 2;
                  if (0 === v2) {
                    if (arg0 === 1) {
                      dependencyMap = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      dependencyMap = 3;
                      const obj3 = { value, done: true };
                      return obj3;
                    } else {
                      channelId = tmp4;
                      v2 = 1;
                      dependencyMap = 1;
                      const obj4 = { value: v2(10186)(guildId), done: false };
                      return obj4;
                    }
                  } else if (1 === tmp4) {
                    if (arg0 === 1) {
                      dependencyMap = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      dependencyMap = 3;
                      const obj5 = { value, done: true };
                      return obj5;
                    } else {
                      const obj6 = { channelId: closure_128_0, conversationId: closure_128_3, messageId: closure_128_1 };
                      v2 = 2;
                      dependencyMap = 1;
                      const obj7 = { value: resolveConversationFocusLink(obj6), done: false };
                      return obj7;
                    }
                  } else if (arg0 === 1) {
                    dependencyMap = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    dependencyMap = 3;
                    const obj8 = { value, done: true };
                    return obj8;
                  } else {
                    if (value) {
                      const conversationFocus = channelId(9849).requestConversationFocus();
                      const obj = channelId(9849);
                    }
                    dependencyMap = 3;
                    return { value: "HermesInternal", done: "HermesInternal" };
                  }
                } catch (tmp17) {
                  dependencyMap = tmp;
                  throw tmp17;
                }
              }
            }));
            const tmp5Result = tmp5(tmp16[6]);
          }
          obj = messageId(tmp16[6]);
          tmp5 = messageId;
        }
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
}