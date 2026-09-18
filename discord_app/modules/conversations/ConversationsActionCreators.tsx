// discord_app/modules/conversations/ConversationsActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import QualtricsActionCreatorsDefault from "../qualtrics/QualtricsActionCreators.tsx";
import SurveyActionTypes from "../../../discord_common/js/shared/shared-constants/SurveyActionTypes.tsx";
import MessageActionCreatorsDefault from "../../actions/MessageActionCreators.tsx";
import ConversationsAnalytics2 from "ConversationsAnalytics.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import ConversationPreviewStore from "ConversationPreviewStore.tsx";
import ConversationsStore from "ConversationsStore.tsx";
import TopicalNavigationSurveyStore from "TopicalNavigationSurveyStore.tsx";

require = fn;
let closure_9 = async function _fetchChannelConversations(arg0) {
  let hydrateMessages = arg0;
  c7 = 0;
  c8 = 0;
  c6 = 0;
  let iter = (async (arg0) => {
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
          if (!closure_133_5.isListFetchPending(closure_132_0, closure_132_8)) {
            const obj7 = {
              type: "CONVERSATIONS_FETCH_START",
              channelId: closure_132_0,
              direction: closure_132_2,
              requestKey: closure_132_8,
              isJump: null,
            };
            isJump = closure_132_5;
            if (closure_132_5 == null) {
              isJump = false;
            }
            obj7.isJump = isJump;
            closure_133_1(closure_133_2[7]).dispatch(obj7);
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
              const limit = hydrateMessages.limit;
              message_limit = limit;
              if (limit == null) {
                message_limit = undefined;
              }
              closure_132_9.message_limit = message_limit;
            }
            c6 = 1;
            const HTTP = closure_133_0(closure_133_2[8]).HTTP;
            const request = {
              url: closure_133_8.CHANNEL_CONVERSATIONS(closure_132_0),
              query: closure_132_9,
              oldFormErrors: true,
              rejectWithError: true,
            };
            c7 = 3;
            c8 = 1;
            return { value: HTTP.get(request), done: false };
          }
        }
        obj15 = closure_133_0(closure_133_2[6]);
      }
    } else if (2 === tmp7) {
      c6 = 0;
      closure_133_1(closure_133_2[7]).dispatch({
        type: "CONVERSATIONS_FETCH_FAILURE",
        channelId: closure_132_0,
        requestKey: closure_132_8,
      });
      if (closure_132_6) {
        const _Error = Error;
        const error = new Error("Failed to fetch conversations");
        throw error;
      }
      closure_133_1(closure_133_2[7]);
    } else if (arg0 === 1) {
      c8 = 3;
      throw value;
    } else if (arg0 === 2) {
      c6 = 0;
      c8 = 3;
      return { value, done: true };
    } else {
      const conversations = value.body.conversations;
      const obj12 = {
        type: "CONVERSATIONS_FETCH_SUCCESS",
        channelId: closure_132_0,
        rawConversations: conversations,
        direction: closure_132_2,
        requestKey: closure_132_8,
        anchor: closure_132_3,
        isJump: null,
        fullyHydrated: null,
      };
      isJump2 = closure_132_5;
      if (closure_132_5 == null) {
        isJump2 = false;
      }
      obj12.isJump = isJump2;
      let limit1;
      if (hydrateMessages != null) {
        limit1 = hydrateMessages.limit;
      }
      obj12.fullyHydrated = null == limit1;
      closure_133_1(closure_133_2[7]).dispatch(obj12);
      c6 = 0;
      c8 = 3;
      return { value: conversations, done: true };
    }
    await "HermesInternal";
    closure_5 = tmp3;
    ({
      channelId: closure_132_0,
      guildId: closure_132_1,
      direction: closure_132_2,
      anchor: closure_132_3,
      limit: limit2,
    } = hydrateMessages);
    if (limit2 === undefined) {
      limit2 = FETCH_LIMIT;
    }
    closure_132_4 = limit2;
    ({ isJump: closure_132_5, throwOnError } = hydrateMessages);
    if (throwOnError === undefined) {
      throwOnError = false;
    }
    closure_132_6 = throwOnError;
    hydrateMessages = hydrateMessages.hydrateMessages;
    return "PX_16";
  })();
  iter.next();
  return iter;
};
let closure_10 = async function _fetchConversation(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
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
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_3 = tmp3;
          closure_2 = tmp7;
          closure_130_0 = closure_0;
          closure_130_1 = undefined;
          if (!ConversationPreviewStore.touchConversation(closure_1)) {
            c4 = 1;
            const HTTP = HTTPUtils.HTTP;
            const obj4 = {
              url: Endpoints.CHANNEL_CONVERSATION(closure_0, closure_1),
              oldFormErrors: true,
              rejectWithError: true,
            };
            c5 = 2;
            c6 = 1;
            const obj5 = { value: HTTP.get(obj4), done: false };
            return obj5;
          }
        }
      } else {
        if (1 === tmp7) {
          c4 = 0;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_130_1 = value;
          const obj6 = {
            type: "CONVERSATION_GET_SUCCESS",
            channelId: closure_130_0,
            rawConversation: closure_130_1.body,
          };
          closure_131_1(closure_131_2[7]).dispatch(obj6);
          c4 = 0;
          const obj = closure_131_1(closure_131_2[7]);
        }
        c4 = 0;
        c6 = 3;
        const obj7 = { value, done: true };
        return obj7;
      }
      c6 = 3;
    } catch (tmp18) {
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp18;
      } else {
        c5 = tmp;
      }
    }
  }
};
function fetchConversationMessages() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_12 = async function _fetchConversationMessages() {
  closure_2 = arg2;
  c7 = 0;
  c8 = 0;
  c6 = 0;
  return (async (arg0, value, arg2) => {
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_5 = tmp3;
            closure_4 = tmp7;
            closure_132_0 = channelId;
            closure_132_1 = conversationId;
            closure_132_2 = undefined;
            closure_132_3 = undefined;
            closure_132_4 = undefined;
            closure_3 = closure_2;
            if (closure_2 == null) {
              closure_3 = {};
            }
            ({ previewLimit, isStandalone } = closure_3);
            let tmp18 = undefined !== isStandalone;
            ({ includeMessageReferences, includeReactions } = closure_3);
            if (tmp18) {
              tmp18 = isStandalone;
            }
            closure_132_2 = tmp18;
            closure_132_3 = tmp19;
            if (null == previewLimit) {
              if (tmp18) {
                let isFullyHydratedResult = ConversationPreviewStore.isFullyHydrated(conversationId);
              } else {
                isFullyHydratedResult = ConversationsStore.isFullyHydrated(channelId, conversationId);
              }
              if (isFullyHydratedResult) {
                c8 = 3;
                return { value: "HermesInternal", done: null };
              }
            } else {
              if (tmp18) {
                let hydratedMessages = ConversationPreviewStore.getHydratedMessages(conversationId);
              } else {
                hydratedMessages = ConversationsStore.getHydratedMessages(channelId, conversationId);
              }
              if (null != hydratedMessages) {
                c8 = 3;
                return { value: "HermesInternal", done: null };
              }
            }
            if (tmp18) {
              let result = ConversationPreviewStore.isConversationFetchPending(conversationId, tmp19);
            } else {
              result = ConversationsStore.isConversationFetchPending(conversationId, tmp19);
            }
            if (!result) {
              const obj6 = {
                type: "CONVERSATION_FETCH_START",
                channelId,
                conversationId,
                full: tmp19,
                isStandalone: tmp18,
              };
              DispatcherDefault.dispatch(obj6);
              c6 = 1;
              const HTTP = HTTPUtils.HTTP;
              const request = {
                url: Endpoints.CHANNEL_CONVERSATION_MESSAGES(channelId, conversationId),
                query: null,
                oldFormErrors: true,
                rejectWithError: true,
              };
              const obj7 = {
                limit: previewLimit,
                include_message_references: includeMessageReferences,
                include_reactions: includeReactions,
              };
              request.query = obj7;
              c7 = 2;
              c8 = 1;
              const obj8 = { value: HTTP.get(request), done: false };
              return obj8;
            }
          }
        } else {
          if (1 === tmp7) {
            c6 = 0;
            const obj9 = {
              type: "CONVERSATION_FETCH_FAILURE",
              channelId: closure_132_0,
              conversationId: closure_132_1,
              full: closure_132_3,
              isStandalone: closure_132_2,
            };
            closure_133_1(closure_133_2[7]).dispatch(obj9);
            const obj2 = closure_133_1(closure_133_2[7]);
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_132_4 = value;
            const obj10 = {
              type: "CONVERSATION_FETCH_SUCCESS",
              channelId: closure_132_0,
              conversationId: closure_132_1,
              messages: closure_132_4.body.messages,
              messageReferences: closure_132_4.body.reference_messages,
              fullyHydrated: closure_132_3,
              isStandalone: closure_132_2,
            };
            closure_133_1(closure_133_2[7]).dispatch(obj10);
            c6 = 0;
            const obj11 = closure_133_1(closure_133_2[7]);
          }
          c6 = 0;
          c8 = 3;
          const obj = { value, done: true };
          return obj;
        }
        c8 = 3;
      } catch (tmp35) {
        if (tmp4 === c6) {
          c8 = tmp2;
          throw tmp35;
        } else {
          c7 = tmp;
        }
      }
    }
  })();
};
const FETCH_LIMIT = fn(7791).FETCH_LIMIT;
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conversations/ConversationsActionCreators.tsx");

export const fetchChannelConversations = function fetchChannelConversations() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const fetchConversation = function fetchConversation() {
  const self = this;
  const apply = closure_10.apply;
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
export const setSelectedConversation = function setSelectedConversation(channelId, arg1, conversationId) {
  let flag = arg3;
  if (arg3 === undefined) {
    flag = true;
  }
  DispatcherDefault.dispatch({ type: "SET_SELECTED_CONVERSATION", channelId, conversationId });
  fetchConversationMessages(channelId, conversationId, { includeReactions: true, includeMessageReferences: true });
  const conversationMetadata = ConversationsStore.getConversationMetadata(channelId, conversationId);
  if (flag) {
    let startMessageId;
    if (conversationMetadata != null) {
      startMessageId = conversationMetadata.conversation.startMessageId;
    }
    flag = null != startMessageId;
  }
  if (flag) {
    const obj3 = { channelId, messageId: conversationMetadata.conversation.startMessageId, flash: false };
    MessageActionCreatorsDefault.jumpToMessage(obj3);
    const tmpResult = MessageActionCreatorsDefault;
  }
  const obj2 = { type: "SET_SELECTED_CONVERSATION", channelId, conversationId };
};
export const clearConversationSelection = function clearConversationSelection(channelId, conversationId) {
  DispatcherDefault.dispatch({ type: "CLEAR_CONVERSATION_SELECTION", channelId, conversationId });
};
export const setConversationFeedbackRating = function setConversationFeedbackRating(channelId, conversationId, down) {
  DispatcherDefault.dispatch({ type: "SET_CONVERSATION_FEEDBACK_RATING", channelId, conversationId, rating: down });
};
export { fetchConversationMessages };
export const trackTopicalNavigationEntrypointImpression = function trackTopicalNavigationEntrypointImpression(
  id,
  stateFromStores1,
) {
  const ConversationsAnalytics = ConversationsAnalytics2.ConversationsAnalytics;
  const result = ConversationsAnalytics.trackEntrypointImpression({
    channelId: id,
    conversationCount: stateFromStores1,
  });
  if (TopicalNavigationSurveyStore.shouldTriggerOnNextExposure()) {
    QualtricsActionCreatorsDefault.fireSurveyAction(
      SurveyActionTypes.SurveyActionTypes.TOPICAL_NAVIGATION_MULTIPLE_IMPRESSIONS,
    );
  }
  DispatcherDefault.dispatch({ type: "TOPICAL_NAVIGATION_ENTRYPOINT_IMPRESSION" });
  const obj = { channelId: id, conversationCount: stateFromStores1 };
};
