// === Module 7550: ConversationsActionCreators ===

// Module 7550 (ConversationsActionCreators)
import DispatcherDefault from "Dispatcher" /* 584 */;
import Constants from "Constants" /* 1085 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import QualtricsActionCreatorsDefault from "QualtricsActionCreators" /* 5080 */;
import SurveyActionTypes from "SurveyActionTypes" /* 5088 */;
import MessageActionCreatorsDefault from "MessageActionCreators" /* 6965 */;
import ConversationConstants from "ConversationConstants" /* 7105 */;
import ConversationsAnalytics2 from "ConversationsAnalytics" /* 7552 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import ChannelConversationsStore from "ChannelConversationsStore" /* 7103 */;
import ConversationPreviewStore from "ConversationPreviewStore" /* 7108 */;
import TopicalNavigationSurveyStore from "TopicalNavigationSurveyStore" /* 7551 */;
import size from "module_2" /* 2 */;

let obj = function _fetchChannelConversations() {
  obj = _asyncToGenerator(async function(channelId) {
    let _false;
    let _undefined;
    let c0;
    let c1;
    let c2;
    let c3;
    let c5;
    let closure_4;
    let closure_5;
    let hydrateMessages;
    let isJump;
    let limit1;
    let limit2;
    let requestKey;
    let throwOnError;
    if (1 === c7) {
      if (channelId === 1) {
        let c8 = 3;
        throw value;
      } else if (channelId === 2) {
        c8 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        const obj13 = closure_133_0(closure_133_2[6]);
        if (obj13.isTopicalNavEnabled(isJump, "fetch_channel_conversations")) {
          const _HermesInternal = HermesInternal;
          requestKey = "" + _undefined + ":" + _false + ":" + limit2 + ":" + true === c5;
          if (!closure_133_4.isListFetchPending(channelId, requestKey)) {
            const obj6 = { type: "CHANNEL_CONVERSATIONS_FETCH_START", channelId, direction: _undefined, requestKey, isJump };
            isJump = c5;
            const dispatch = closure_133_1(closure_133_2[7]).dispatch;
            const tmp33 = closure_133_1(closure_133_2[7]);
            if (c5 == null) {
              isJump = false;
            }
            dispatch(obj6);
            const obj7 = { limit: limit2 };
            if (null != _false) {
              if ("before" === _undefined) {
                obj7.before = _false;
              } else if ("after" === _undefined) {
                obj7.after = _false;
              } else {
                obj7.around = _false;
              }
            }
            if (null != hydrateMessages) {
              obj7.include_messages = true;
              const limit = hydrateMessages.limit;
              _undefined = limit;
              const tmp56 = obj7;
              if (limit == null) {
                _undefined = undefined;
              }
              tmp56.message_limit = _undefined;
            }
            let c6 = 1;
            const HTTP = closure_133_0(closure_133_2[8]).HTTP;
            const request = { url: closure_133_8.CHANNEL_CONVERSATIONS(channelId), query: obj7, oldFormErrors: true, rejectWithError: true };
            const get = HTTP.get;
            c7 = 3;
            c8 = 1;
            const obj8 = { value: get(request), done: false };
            return obj8;
          }
        }
      }
    } else if (2 === c7) {
      c6 = 0;
      const obj9 = { type: "CHANNEL_CONVERSATIONS_FETCH_FAILURE", channelId, requestKey };
      const obj3 = closure_133_1(closure_133_2[7]);
      obj3.dispatch(obj9);
      const tmp17 = throwOnError;
      if (tmp17) {
        const _Error = Error;
        const self = this;
        const self2 = this;
        const error = new Error("Failed to fetch conversations");
        throw error;
      }
    } else if (channelId === 1) {
      c8 = 3;
      throw value;
    } else if (channelId === 2) {
      c6 = 0;
      c8 = 3;
      const obj10 = { value, done: true };
      return obj10;
    } else {
      const conversations = value.body.conversations;
      const obj11 = { type: "CHANNEL_CONVERSATIONS_FETCH_SUCCESS", channelId, rawConversations: conversations, direction: _undefined, requestKey, anchor: _false, isJump: _false, fullyHydrated: null == limit1 };
      _false = c5;
      const dispatch2 = closure_133_1(closure_133_2[7]).dispatch;
      const tmp77 = closure_133_1(closure_133_2[7]);
      if (c5 == null) {
        _false = false;
      }
      limit1 = undefined;
      if (hydrateMessages != null) {
        limit1 = hydrateMessages.limit;
      }
      dispatch2(obj11);
      c6 = 0;
      c8 = 3;
      obj = { value: conversations, done: true };
      return obj;
    }
    await "IconComponent";
    ({ channelId: c0, guildId: c1, direction: c2, anchor: c3, limit: limit2 } = channelId);
    if (limit2 === undefined) {
      limit2 = FETCH_LIMIT;
    }
    ({ isJump: c5, throwOnError } = channelId);
    if (throwOnError === undefined) {
      throwOnError = false;
    }
    hydrateMessages = channelId.hydrateMessages;
    return "Set";
  });
  return obj(...arguments);
};
obj = function _fetchConversation() {
  obj = _asyncToGenerator(async (channelId, arg1) => {
    let body = arg1;
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async (arg0, value) => {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp;
              closure_2 = tmp4;
              body = undefined;
              const tmp21 = body;
              if (!ConversationPreviewStore.touchConversation(body)) {
                c4 = 1;
                const HTTP = HTTPUtils.HTTP;
                const get = HTTP.get;
                c5 = 2;
                c6 = 1;
                const obj4 = { url: Endpoints.CHANNEL_CONVERSATION(channelId, tmp21), oldFormErrors: true, rejectWithError: true };
                const obj5 = { value: get(obj4), done: false };
                return obj5;
              }
            }
          } else if (1 === c5) {
            c4 = 0;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            return { value, done: true };
          } else {
            body = value;
            const obj7 = { type: "CONVERSATION_FETCH_SUCCESS", channelId, rawConversation: body.body };
            obj = closure_131_1(closure_131_2[7]);
            obj.dispatch(obj7);
            c4 = 0;
          }
          c6 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp15) {
          if (0 === c4) {
            c6 = 3;
            throw tmp15;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
function fetchConversationMessages() {
  return obj(...arguments);
}
obj = function _fetchConversationMessages() {
  obj = _asyncToGenerator(async (channelId, conversationId, arg2) => {
    let closure_3;
    let closure_2 = arg2;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (async (arg0, value, arg2) => {
      let includeMessageReferences;
      let includeReactions;
      let isStandalone;
      let obj7;
      let previewLimit;
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let fullyHydrated;
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              let result;
              closure_5 = tmp;
              isStandalone = undefined;
              closure_4 = undefined;
              fullyHydrated = closure_2;
              if (closure_2 == null) {
                fullyHydrated = {};
              }
              ({ previewLimit, isStandalone } = fullyHydrated);
              let tmp15 = undefined !== isStandalone;
              ({ includeMessageReferences, includeReactions } = fullyHydrated);
              if (tmp15) {
                tmp15 = isStandalone;
              }
              isStandalone = tmp15;
              fullyHydrated = tmp16;
              if (null == previewLimit) {
                let isFullyHydratedResult;
                if (tmp15) {
                  isFullyHydratedResult = ConversationPreviewStore.isFullyHydrated(conversationId);
                } else {
                  isFullyHydratedResult = ChannelConversationsStore.isFullyHydrated(channelId, conversationId);
                }
                if (isFullyHydratedResult) {
                  c8 = 3;
                  return { value: "IconComponent", done: null };
                }
              } else {
                let hydratedMessages;
                if (tmp15) {
                  hydratedMessages = ConversationPreviewStore.getHydratedMessages(conversationId);
                } else {
                  hydratedMessages = ChannelConversationsStore.getHydratedMessages(channelId, conversationId);
                }
                if (null != hydratedMessages) {
                  c8 = 3;
                  return { value: "IconComponent", done: null };
                }
              }
              if (tmp15) {
                result = ConversationPreviewStore.isConversationFetchPending(conversationId, tmp16);
              } else {
                result = ChannelConversationsStore.isConversationFetchPending(conversationId, tmp16);
              }
              if (!result) {
                const obj6 = { type: "CONVERSATION_MESSAGES_FETCH_START", channelId, conversationId, full: null == previewLimit, isStandalone: tmp15 };
                const obj4 = DispatcherDefault;
                obj4.dispatch(obj6);
                c6 = 1;
                const HTTP = HTTPUtils.HTTP;
                const request = { url: Endpoints.CHANNEL_CONVERSATION_MESSAGES(channelId, conversationId), query: obj7, oldFormErrors: true, rejectWithError: true };
                const get = HTTP.get;
                c7 = 2;
                c8 = 1;
                obj7 = { limit: previewLimit, include_message_references: includeMessageReferences, include_reactions: includeReactions };
                const obj8 = { value: get(request), done: false };
                return obj8;
              }
            }
          } else if (1 === c7) {
            c6 = 0;
            const obj9 = { type: "CONVERSATION_MESSAGES_FETCH_FAILURE", channelId, conversationId, full: fullyHydrated, isStandalone };
            const obj2 = closure_133_1(closure_133_2[7]);
            obj2.dispatch(obj9);
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 0;
            c8 = 3;
            return { value, done: true };
          } else {
            closure_4 = value;
            const obj10 = { type: "CONVERSATION_MESSAGES_FETCH_SUCCESS", channelId, conversationId, messages: closure_4.body.messages, messageReferences: closure_4.body.reference_messages, fullyHydrated, isStandalone };
            const obj11 = closure_133_1(closure_133_2[7]);
            obj11.dispatch(obj10);
            c6 = 0;
          }
          c8 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp32) {
          if (0 === c6) {
            c8 = 3;
            throw tmp32;
          } else {
            c7 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
const FETCH_LIMIT = ConversationConstants.FETCH_LIMIT;
const Endpoints = Constants.Endpoints;
let result = size.fileFinishedImporting("modules/conversations/ConversationsActionCreators.tsx");

export const fetchChannelConversations = function fetchChannelConversations() {
  return obj(...arguments);
};
export const fetchConversation = function fetchConversation() {
  return obj(...arguments);
};
export const toggleConversationHighlighting = function toggleConversationHighlighting() {
  obj = DispatcherDefault;
  obj.dispatch({ type: "CONVERSATIONS_TOGGLE_HIGHLIGHTING" });
};
export const setSelectedConversation = function setSelectedConversation(channelId, conversationId, arg2) {
  obj = arg2;
  if (arg2 === undefined) {
    obj = {};
  }
  let flag = obj.shouldJump;
  if (flag === undefined) {
    flag = true;
  }
  if (null != conversationId) {
    const obj2 = { type: "SET_SELECTED_CONVERSATION", channelId, conversationId };
    const obj4 = DispatcherDefault;
    obj4.dispatch(obj2);
    fetchConversationMessages(channelId, conversationId, { includeReactions: true, includeMessageReferences: true });
    if (flag) {
      const conversationMetadata = ChannelConversationsStore.getConversationMetadata(channelId, conversationId);
      let startMessageId;
      if (conversationMetadata != null) {
        startMessageId = conversationMetadata.conversation.startMessageId;
      }
      if (null != startMessageId) {
        const obj3 = { channelId, messageId: startMessageId, flash: false };
        const tmp6Result = MessageActionCreatorsDefault;
        tmp6Result.jumpToMessage(obj3);
      }
    }
  }
};
export const clearConversationSelection = function clearConversationSelection(channelId, conversationId) {
  obj = DispatcherDefault;
  const obj2 = { type: "CLEAR_CONVERSATION_SELECTION", channelId, conversationId };
  obj.dispatch(obj2);
};
export const requestConversationFocus = function requestConversationFocus() {
  obj = DispatcherDefault;
  obj.dispatch({ type: "CONVERSATION_FOCUS_REQUEST" });
};
export const setConversationFeedbackRating = function setConversationFeedbackRating(channelId, conversationId, down) {
  obj = DispatcherDefault;
  const obj2 = { type: "SET_CONVERSATION_FEEDBACK_RATING", channelId, conversationId, rating: down };
  obj.dispatch(obj2);
};
export { fetchConversationMessages };
export const trackTopicalNavigationEntrypointImpression = function trackTopicalNavigationEntrypointImpression(id, stateFromStores1) {
  const ConversationsAnalytics = ConversationsAnalytics2.ConversationsAnalytics;
  obj = { channelId: id, conversationCount: stateFromStores1 };
  const result = ConversationsAnalytics.trackEntrypointImpression(obj);
  if (TopicalNavigationSurveyStore.shouldTriggerOnNextExposure()) {
    const obj2 = QualtricsActionCreatorsDefault;
    obj2.fireSurveyAction(SurveyActionTypes.SurveyActionTypes.TOPICAL_NAVIGATION_MULTIPLE_IMPRESSIONS);
  }
  const obj3 = DispatcherDefault;
  obj3.dispatch({ type: "TOPICAL_NAVIGATION_ENTRYPOINT_IMPRESSION" });
};