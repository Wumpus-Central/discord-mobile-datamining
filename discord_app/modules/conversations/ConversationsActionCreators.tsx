// discord_app/modules/conversations/ConversationsActionCreators.tsx
import DispatcherDefault from "../../Dispatcher.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import MessageActionCreatorsDefault from "../../actions/MessageActionCreators.tsx";
import QualtricsActionCreatorsDefault from "../qualtrics/QualtricsActionCreators.tsx";
import SurveyActionTypes from "../../../discord_common/js/shared/shared-constants/SurveyActionTypes.tsx";
import ConversationsAnalytics2 from "ConversationsAnalytics.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import ChannelConversationsStore from "ChannelConversationsStore.tsx";
import ConversationPreviewStore from "ConversationPreviewStore.tsx";
import SelectedConversationStore from "SelectedConversationStore.tsx";
import TopicalNavigationSurveyStore from "TopicalNavigationSurveyStore.tsx";

require = fn;
let closure_10 = async function _fetchChannelConversations(arg0) {
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
          if (!closure_133_4.isListFetchPending(closure_132_0, closure_132_8)) {
            const obj7 = {
              type: "CHANNEL_CONVERSATIONS_FETCH_START",
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
            closure_133_1(closure_133_2[8]).dispatch(obj7);
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
            const HTTP = closure_133_0(closure_133_2[9]).HTTP;
            const request = {
              url: closure_133_9.CHANNEL_CONVERSATIONS(closure_132_0),
              query: closure_132_9,
              oldFormErrors: true,
              rejectWithError: true,
            };
            c7 = 3;
            c8 = 1;
            return { value: HTTP.get(request), done: false };
          }
        }
        obj15 = closure_133_0(closure_133_2[7]);
      }
    } else if (2 === tmp7) {
      c6 = 0;
      closure_133_1(closure_133_2[8]).dispatch({
        type: "CHANNEL_CONVERSATIONS_FETCH_FAILURE",
        channelId: closure_132_0,
        requestKey: closure_132_8,
      });
      if (closure_132_6) {
        const _Error = Error;
        const error = new Error("Failed to fetch conversations");
        throw error;
      }
      closure_133_1(closure_133_2[8]);
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
        type: "CHANNEL_CONVERSATIONS_FETCH_SUCCESS",
        channelId: closure_132_0,
        rawConversations: conversations,
        direction: closure_132_2,
        requestKey: closure_132_8,
        anchor: closure_132_3,
        isJump: null,
        fullyHydrated: null,
        selectedConversationId: null,
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
      obj12.selectedConversationId = closure_133_6.getSelectedConversationId(closure_132_0);
      closure_133_1(closure_133_2[8]).dispatch(obj12);
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
    return "flexDirection";
  })();
  iter.next();
  return iter;
};
function fetchConversation() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_12 = async function _fetchConversation(arg0) {
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
      return { value: "HermesInternal", done: "HermesInternal" };
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
            type: "CONVERSATION_FETCH_SUCCESS",
            channelId: closure_130_0,
            rawConversation: closure_130_1.body,
          };
          closure_131_1(closure_131_2[8]).dispatch(obj6);
          c4 = 0;
          const obj = closure_131_1(closure_131_2[8]);
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
let closure_13 = async function _hydrateSelectedConversation(arg0) {
  if (c6 === 2) {
    c6 = 3;
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
          closure_4 = tmp5;
          closure_3 = tmp2;
          closure_131_0 = closure_0;
          closure_131_1 = closure_1;
          closure_131_2 = closure_2;
          if ("preview" === closure_2) {
            c5 = 1;
            c6 = 1;
            const obj4 = { value: fetchConversation(tmp19, tmp20), done: false };
            return obj4;
          }
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        const obj = { value, done: true };
        return obj;
      }
      const obj5 = { includeReactions: true, includeMessageReferences: true, cacheType: closure_131_2 };
      closure_132_14(closure_131_0, closure_131_1, obj5);
      c6 = 3;
      return { value: "HermesInternal", done: "HermesInternal" };
    } catch (tmp14) {
      c6 = tmp;
      throw tmp14;
    }
  }
};
function fetchConversationMessages() {
  const self = this;
  const apply = closure_15.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_15 = async function _fetchConversationMessages() {
  closure_2 = arg2;
  c6 = 0;
  c7 = 0;
  c5 = 0;
  return (async (arg0, value, arg2) => {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c7 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_4 = tmp3;
            closure_3 = tmp7;
            closure_131_0 = channelId;
            closure_131_1 = conversationId;
            closure_131_2 = undefined;
            closure_131_3 = undefined;
            closure_131_4 = undefined;
            ({ previewLimit, cacheType } = closure_2);
            closure_131_2 = cacheType;
            closure_131_3 = tmp53;
            ({ includeMessageReferences, includeReactions } = closure_2);
            if (null == previewLimit) {
              if ("preview" === cacheType) {
                let isFullyHydratedResult = ConversationPreviewStore.isFullyHydrated(conversationId);
              } else {
                isFullyHydratedResult = ChannelConversationsStore.isFullyHydrated(channelId, conversationId);
              }
              if (isFullyHydratedResult) {
                c7 = 3;
                return { value: "HermesInternal", done: "HermesInternal" };
              }
            } else {
              if ("preview" === cacheType) {
                let hydratedMessages = ConversationPreviewStore.getHydratedMessages(conversationId);
              } else {
                hydratedMessages = ChannelConversationsStore.getHydratedMessages(channelId, conversationId);
              }
              if (null != hydratedMessages) {
                c7 = 3;
                return { value: "HermesInternal", done: "HermesInternal" };
              }
            }
            if ("preview" === cacheType) {
              let result = ConversationPreviewStore.isConversationFetchPending(conversationId, tmp53);
            } else {
              result = ChannelConversationsStore.isConversationFetchPending(conversationId, tmp53);
            }
            if (!result) {
              const obj6 = {
                type: "CONVERSATION_MESSAGES_FETCH_START",
                channelId,
                conversationId,
                full: tmp53,
                cacheType,
              };
              DispatcherDefault.dispatch(obj6);
              c5 = 1;
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
              c6 = 2;
              c7 = 1;
              const obj8 = { value: HTTP.get(request), done: false };
              return obj8;
            }
          }
        } else {
          if (1 === tmp7) {
            c5 = 0;
            const obj9 = {
              type: "CONVERSATION_MESSAGES_FETCH_FAILURE",
              channelId: closure_131_0,
              conversationId: closure_131_1,
              full: closure_131_3,
              cacheType: closure_131_2,
            };
            closure_132_1(closure_132_2[8]).dispatch(obj9);
            const obj2 = closure_132_1(closure_132_2[8]);
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 !== 2) {
            closure_131_4 = value;
            const obj10 = {
              type: "CONVERSATION_MESSAGES_FETCH_SUCCESS",
              channelId: closure_131_0,
              conversationId: closure_131_1,
              messages: closure_131_4.body.messages,
              messageReferences: closure_131_4.body.reference_messages,
              fullyHydrated: closure_131_3,
              cacheType: closure_131_2,
            };
            closure_132_1(closure_132_2[8]).dispatch(obj10);
            c5 = 0;
            const obj11 = closure_132_1(closure_132_2[8]);
          }
          c5 = 0;
          c7 = 3;
          const obj = { value, done: true };
          return obj;
        }
        c7 = 3;
      } catch (tmp32) {
        if (tmp4 === c5) {
          c7 = tmp2;
          throw tmp32;
        } else {
          c6 = tmp;
        }
      }
    }
  })();
};
const FETCH_LIMIT = fn(5655).FETCH_LIMIT;
const Endpoints = fn(1072).Endpoints;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conversations/ConversationsActionCreators.tsx");

export function fetchChannelConversations() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export { fetchConversation };
export function toggleConversationHighlighting() {
  DispatcherDefault.dispatch({ type: "CONVERSATIONS_TOGGLE_HIGHLIGHTING" });
}
export function setSelectedConversation(channelId, id, arg2) {
  ({ cacheType, shouldJump } = arg2);
  if (shouldJump === undefined) {
    shouldJump = true;
  }
  if (null != id) {
    const obj = { type: "SET_SELECTED_CONVERSATION", channelId, conversationId: id, cacheType };
    DispatcherDefault.dispatch(obj);
    (function hydrateSelectedConversation() {
      const self = this;
      const apply = closure_1_13.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(channelId, id, cacheType);
    if (shouldJump) {
      const conversation = SelectedConversationStore.getConversation(channelId);
      let startMessageId;
      if (conversation != null) {
        startMessageId = conversation.startMessageId;
      }
      if (null != startMessageId) {
        const obj2 = { channelId, messageId: startMessageId, flash: false };
        MessageActionCreatorsDefault.jumpToMessage(obj2);
        const tmp6Result = MessageActionCreatorsDefault;
      }
    }
  }
}
export function clearConversationSelection(channelId, conversationId) {
  DispatcherDefault.dispatch({ type: "CLEAR_CONVERSATION_SELECTION", channelId, conversationId });
}
export function requestConversationFocus() {
  DispatcherDefault.dispatch({ type: "CONVERSATION_FOCUS_REQUEST" });
}
export function setConversationFeedbackRating(channelId, conversationId, down) {
  DispatcherDefault.dispatch({ type: "SET_CONVERSATION_FEEDBACK_RATING", channelId, conversationId, rating: down });
}
export { fetchConversationMessages };
export function trackTopicalNavigationEntrypointImpression(id, stateFromStores1) {
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
}
