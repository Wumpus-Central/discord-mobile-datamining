// === Module 7907: ConversationsActionCreators ===

// Module 7907 (ConversationsActionCreators)
import DispatcherDefault from "Dispatcher" /* 573 */;
import QualtricsActionCreatorsDefault from "QualtricsActionCreators" /* 4750 */;
import SurveyActionTypes from "SurveyActionTypes" /* 4758 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 7456 */;
import ConversationExperiments from "ConversationExperiments" /* 7905 */;
import ConversationsAnalytics2 from "ConversationsAnalytics" /* 7909 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ConversationsStore from "ConversationsStore" /* 7596 */;
import TopicalNavigationSurveyStore from "TopicalNavigationSurveyStore" /* 7908 */;

require = fn;
let closure_8 = async function _fetchChannelConversations(arg0, value) {
  if (1 === tmp7) {
    if (arg0 === 1) {
      c8 = 3;
      throw value;
    } else if (arg0 === 2) {
      c8 = 3;
      return { value, done: true };
    } else {
      if (obj15.isTopicalNavEnabled(closure_132_1, "fetch_channel_conversations")) {
        const _HermesInternal = HermesInternal;
        closure_132_8 = "" + closure_132_2 + ":" + closure_132_3 + ":" + closure_132_4 + ":" + true === closure_132_5;
        if (!closure_133_4.isListFetchPending(closure_132_0, closure_132_8)) {
          let obj4 = closure_133_1(closure_133_2[6]);
          let obj2 = { type: "CONVERSATIONS_FETCH_START", channelId: closure_132_0, direction: closure_132_2, requestKey: closure_132_8, isJump: null };
          let isJump = closure_132_5;
          if (closure_132_5 == null) {
            isJump = false;
          }
          obj2.isJump = isJump;
          obj4.dispatch(obj2);
          closure_132_9 = { limit: closure_132_4 };
          if (null != closure_132_3) {
            if ("before" === closure_132_2) {
              closure_132_9.before = closure_132_3;
            } else if ("after" === closure_132_2) {
              closure_132_9.after = closure_132_3;
            } else {
              closure_132_9.around = closure_132_3;
            }
          }
          if (null != hydrateMessages) {
            closure_132_9.include_messages = true;
            let limit = hydrateMessages.limit;
            let message_limit = limit;
            if (limit == null) {
              message_limit = undefined;
            }
            closure_132_9.message_limit = message_limit;
          }
          c6 = 1;
          const HTTP = closure_133_0(closure_133_2[7]).HTTP;
          const request = { url: closure_133_7.CHANNEL_CONVERSATIONS(closure_132_0), query: closure_132_9, oldFormErrors: true, rejectWithError: true };
          c7 = 3;
          c8 = 1;
          obj4 = { value: HTTP.get(request), done: false };
          return obj4;
        }
      }
      obj15 = closure_133_0(closure_133_2[5]);
    }
  } else if (2 === tmp7) {
    c6 = 0;
    obj2 = closure_133_1(closure_133_2[6]);
    obj2.dispatch({ type: "CONVERSATIONS_FETCH_FAILURE", channelId: closure_132_0, requestKey: closure_132_8 });
    if (closure_132_6) {
      const _Error = Error;
      const error = new Error("Failed to fetch conversations");
      throw error;
    }
  } else if (arg0 === 1) {
    c8 = 3;
    throw value;
  } else if (arg0 === 2) {
    c6 = 0;
    c8 = 3;
    return { value, done: true };
  } else {
    const conversations = value.body.conversations;
    const obj7 = { type: "CONVERSATIONS_FETCH_SUCCESS", channelId: closure_132_0, rawConversations: conversations, direction: closure_132_2, requestKey: closure_132_8, anchor: closure_132_3, isJump: null, fullyHydrated: null };
    let isJump2 = closure_132_5;
    if (closure_132_5 == null) {
      isJump2 = false;
    }
    obj7.isJump = isJump2;
    limit = undefined;
    if (hydrateMessages != null) {
      limit = hydrateMessages.limit;
    }
    obj7.fullyHydrated = null == limit;
    closure_133_1(closure_133_2[6]).dispatch(obj7);
    c6 = 0;
    c8 = 3;
    return { value: conversations, done: true };
  }
  await "HermesInternal";
  closure_5 = tmp3;
  ({ channelId: closure_132_0, guildId: closure_132_1, direction: closure_132_2, anchor: closure_132_3, limit: limit2 } = closure_0);
  if (limit2 === undefined) {
    limit2 = FETCH_LIMIT;
  }
  closure_132_4 = limit2;
  ({ isJump: closure_132_5, throwOnError } = closure_0);
  if (throwOnError === undefined) {
    throwOnError = false;
  }
  closure_132_6 = throwOnError;
  hydrateMessages = tmp93.hydrateMessages;
  return "PX_16";
};
function fetchConversationMessages() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_10 = async function _fetchConversationMessages(arg0, value) {
  if (c10 === 2) {
    c10 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c10 = 2;
      if (0 === c9) {
        if (arg0 === 1) {
          c10 = 3;
          throw value;
        } else if (arg0 === 2) {
          c10 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_6 = tmp3;
          closure_5 = tmp7;
          closure_133_0 = closure_0;
          closure_133_1 = closure_2;
          closure_133_2 = undefined;
          closure_133_3 = undefined;
          if (obj14.isTopicalNavEnabled(closure_1, "fetch_conversation")) {
            let previewLimit = tmp50;
            if (tmp50 == null) {
              previewLimit = {};
            }
            previewLimit = previewLimit.previewLimit;
            closure_133_2 = tmp18;
            let obj3 = conversationMetadata;
            ({ includeMessageReferences, includeReactions } = previewLimit);
            conversationMetadata = conversationMetadata.getConversationMetadata(tmp47, tmp49);
            if (null == previewLimit) {
              let fullyHydrated;
              if (!tmp20) {
                fullyHydrated = conversationMetadata.fullyHydrated;
              }
              let tmp22 = true !== fullyHydrated;
            } else {
              let hydratedMessages;
              if (!tmp20) {
                hydratedMessages = conversationMetadata.hydratedMessages;
              }
              tmp22 = null == hydratedMessages;
            }
            if (tmp22) {
              if (!obj3.isConversationFetchPending(tmp49, tmp18)) {
                let obj4 = DispatcherDefault;
                let obj1 = { type: "CONVERSATION_FETCH_START", channelId: tmp47, conversationId: tmp49, full: tmp18 };
                obj4.dispatch(obj1);
                c8 = 1;
                const HTTP = tmp51(1272).HTTP;
                const request = { url: Endpoints.CHANNEL_CONVERSATION_MESSAGES(tmp47, tmp49), query: null, oldFormErrors: true, rejectWithError: true };
                const obj2 = { limit: previewLimit, include_message_references: includeMessageReferences, include_reactions: includeReactions };
                request.query = obj2;
                c9 = 2;
                c10 = 1;
                obj3 = { value: HTTP.get(request), done: false };
                return obj3;
              }
            }
          }
          obj14 = ConversationExperiments;
          tmp51 = require;
        }
      } else {
        if (1 === tmp7) {
          c8 = 0;
          obj1 = closure_134_1(closure_134_2[6]);
          obj4 = { type: "CONVERSATION_FETCH_FAILURE", channelId: closure_133_0, conversationId: closure_133_1, full: closure_133_2 };
          obj1.dispatch(obj4);
        } else if (arg0 === 1) {
          c10 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_133_3 = value;
          const obj5 = { type: "CONVERSATION_FETCH_SUCCESS", channelId: closure_133_0, conversationId: closure_133_1, messages: closure_133_3.body.messages, messageReferences: closure_133_3.body.reference_messages, fullyHydrated: closure_133_2 };
          closure_134_1(closure_134_2[6]).dispatch(obj5);
          c8 = 0;
          const obj12 = closure_134_1(closure_134_2[6]);
        }
        c8 = 0;
        c10 = 3;
        obj = { value, done: true };
        return obj;
      }
      c10 = 3;
    } catch (tmp29) {
      closure_7 = tmp29;
      if (tmp4 === c8) {
        c10 = tmp2;
        throw tmp29;
      } else {
        c9 = tmp;
      }
    }
  }
};
const FETCH_LIMIT = fn(7598).FETCH_LIMIT;
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conversations/ConversationsActionCreators.tsx");

export const fetchChannelConversations = function fetchChannelConversations() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const toggleConversationHighlighting = function toggleConversationHighlighting() {
  DispatcherDefault.dispatch({ type: "CONVERSATIONS_TOGGLE_HIGHLIGHTING" });
};
export const setSelectedConversation = function setSelectedConversation(channelId, guildId, conversationId) {
  let flag = arg3;
  if (arg3 === undefined) {
    flag = true;
  }
  let obj = { type: "SET_SELECTED_CONVERSATION", channelId, conversationId };
  obj.dispatch(obj);
  fetchConversationMessages(channelId, guildId, conversationId, { includeReactions: true, includeMessageReferences: true });
  const conversationMetadata = ConversationsStore.getConversationMetadata(channelId, conversationId);
  if (flag) {
    let startMessageId;
    if (conversationMetadata != null) {
      startMessageId = conversationMetadata.conversation.startMessageId;
    }
    flag = null != startMessageId;
  }
  if (flag) {
    obj = { channelId, messageId: conversationMetadata.conversation.startMessageId, flash: false };
    MessageActionCreatorsDefault.jumpToMessage(obj);
    const tmpResult = MessageActionCreatorsDefault;
  }
};
export const clearConversationSelection = function clearConversationSelection(channelId, conversationId) {
  const obj = { type: "CLEAR_CONVERSATION_SELECTION", channelId, conversationId };
  obj.dispatch(obj);
};
export const setConversationFeedbackRating = function setConversationFeedbackRating(channelId, conversationId, down) {
  const obj = { type: "SET_CONVERSATION_FEEDBACK_RATING", channelId, conversationId, rating: down };
  obj.dispatch(obj);
};
export { fetchConversationMessages };
export const trackTopicalNavigationEntrypointImpression = function trackTopicalNavigationEntrypointImpression(id, stateFromStores1) {
  const ConversationsAnalytics = ConversationsAnalytics2.ConversationsAnalytics;
  const result = ConversationsAnalytics.trackEntrypointImpression({ channelId: id, conversationCount: stateFromStores1 });
  if (TopicalNavigationSurveyStore.shouldTriggerOnNextExposure()) {
    QualtricsActionCreatorsDefault.fireSurveyAction(SurveyActionTypes.SurveyActionTypes.TOPICAL_NAVIGATION_MULTIPLE_IMPRESSIONS);
  }
  DispatcherDefault.dispatch({ type: "TOPICAL_NAVIGATION_ENTRYPOINT_IMPRESSION" });
};