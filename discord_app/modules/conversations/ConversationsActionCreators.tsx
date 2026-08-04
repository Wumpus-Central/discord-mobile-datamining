import apexExperiment from "apexExperiment";
import removePendingListFetch from "removePendingListFetch";
import initialize from "initialize";
import { FETCH_LIMIT } from "CONVERSATION_COLORS";
import { Endpoints } from "ME";

const require = arg1;
function _fetchChannelConversations() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    const iter = (function*(arg0, body) {
      let c0;
      let c1;
      let c2;
      let c3;
      let c5;
      let limit2;
      let throwOnError;
      c5 = tmp3;
      limit2 = tmp7;
      let callback;
      let callback2;
      let dependencyMap;
      c3 = undefined;
      limit2 = undefined;
      c5 = undefined;
      let c6;
      let hydrateMessages;
      ({ channelId: c0, guildId: c1, direction: c2, anchor: c3, limit: limit2 } = callback);
      if (limit2 === undefined) {
        limit2 = c6;
      }
      ({ isJump: c5, throwOnError } = callback);
      if (throwOnError === undefined) {
        throwOnError = false;
      }
      c6 = throwOnError;
      hydrateMessages = tmp94.hydrateMessages;
      let c8;
      let obj3;
      let conversations;
      hydrateMessages = 1;
      c8 = 1;
      yield "ct";
      if (1 === tmp7) {
        if (arg0 === 1) {
          c8 = 3;
          throw body;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj1 = { value: null, done: true };
          obj1[0] = body;
          return obj1;
        } else {
          if (obj15.isTopicalNavEnabled(callback2, "fetch_channel_conversations")) {
            const _HermesInternal = HermesInternal;
            c8 = "" + dependencyMap + ":" + c3 + ":" + limit2 + ":" + true === c5;
            if (!limit2.isListFetchPending(callback, c8)) {
              let obj4 = callback2(709);
              let obj2 = { type: "CONVERSATIONS_FETCH_START", channelId: null, direction: null, requestKey: null, isJump: null };
              obj2[1] = callback;
              obj2[2] = dependencyMap;
              obj2[3] = c8;
              callback2 = c5;
              if (c5 == null) {
                callback2 = false;
              }
              obj2[4] = callback2;
              obj4.dispatch(obj2);
              obj3 = { limit: null };
              obj3[0] = limit2;
              if (null != c3) {
                if ("before" === dependencyMap) {
                  obj3.before = c3;
                } else if ("after" === dependencyMap) {
                  obj3.after = c3;
                } else {
                  obj3.around = c3;
                }
              }
              if (null != hydrateMessages) {
                obj3.include_messages = true;
                let limit = hydrateMessages.limit;
                dependencyMap = limit;
                if (limit == null) {
                  dependencyMap = undefined;
                }
                obj3.message_limit = dependencyMap;
                const tmp60 = obj3;
              }
              c6 = 1;
              const HTTP = callback(530).HTTP;
              obj4 = { url: null, query: null, oldFormErrors: true, rejectWithError: true };
              obj4[0] = hydrateMessages.CHANNEL_CONVERSATIONS(callback);
              obj4[1] = obj3;
              hydrateMessages = 3;
              c8 = 1;
              const obj5 = { value: null, done: false };
              obj5[0] = HTTP.get(obj4);
              return obj5;
            }
          }
          obj15 = callback(8365);
        }
      } else if (2 === tmp7) {
        c6 = 0;
        obj2 = callback2(709);
        const obj6 = { type: "CONVERSATIONS_FETCH_FAILURE", channelId: null, requestKey: null };
        obj6[1] = callback;
        obj6[2] = c8;
        obj2.dispatch(obj6);
        if (c6) {
          const _Error = Error;
          const error = new Error("Failed to fetch conversations");
          throw error;
        }
      } else if (arg0 === 1) {
        c8 = 3;
        throw body;
      } else if (arg0 === 2) {
        c6 = 0;
        c8 = 3;
        const obj7 = { value: null, done: true };
        obj7[0] = body;
        return obj7;
      } else {
        conversations = body.body.conversations;
        const obj8 = { type: "CONVERSATIONS_FETCH_SUCCESS", channelId: null, rawConversations: null, direction: null, requestKey: null, anchor: null, isJump: null, fullyHydrated: null };
        obj8[1] = callback;
        obj8[2] = conversations;
        obj8[3] = dependencyMap;
        obj8[4] = c8;
        obj8[5] = c3;
        c3 = c5;
        if (c5 == null) {
          c3 = false;
        }
        obj8[6] = c3;
        limit = undefined;
        if (hydrateMessages != null) {
          limit = hydrateMessages.limit;
        }
        obj8[7] = null == limit;
        callback2(709).dispatch(obj8);
        c6 = 0;
        c8 = 3;
        const obj = { value: null, done: true };
        obj[0] = conversations;
        return obj;
      }
      c8 = 3;
      yield "HermesInternal";
    })();
    iter.next();
    return iter;
  });
  const _fetchChannelConversations = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function fetchConversationMessages(channelId, guildId, id, arg3) {
  const self = this;
  const apply = _fetchConversationMessages.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _fetchConversationMessages() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2, arg3) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let apexExperiment = arg3;
    let c9 = 0;
    let c10 = 0;
    let c8 = 0;
    return (function*(arg0, arg1, arg2, arg3) {
      let includeMessageReferences;
      let includeReactions;
      if (c10 === 2) {
        c10 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c10 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let closure_6 = tmp3;
              let initialize = tmp7;
              const callback2 = dependencyMap;
              dependencyMap = undefined;
              let apexExperiment;
              if (obj14.isTopicalNavEnabled(callback2, "fetch_conversation")) {
                let previewLimit = tmp51;
                if (tmp51 == null) {
                  previewLimit = {};
                }
                previewLimit = previewLimit.previewLimit;
                dependencyMap = tmp18;
                let obj3 = outer1_4;
                ({ includeMessageReferences, includeReactions } = previewLimit);
                const conversationMetadata = outer1_4.getConversationMetadata(tmp48, tmp50);
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
                  if (!obj3.isConversationFetchPending(tmp50, tmp18)) {
                    let obj4 = callback2(709);
                    let obj1 = { type: "CONVERSATION_FETCH_START", channelId: null, conversationId: null, full: null };
                    obj1[1] = tmp48;
                    obj1[2] = tmp50;
                    obj1[3] = tmp18;
                    obj4.dispatch(obj1);
                    let c8 = 1;
                    const HTTP = tmp52(530).HTTP;
                    const obj2 = { url: null, query: null, oldFormErrors: true, rejectWithError: true };
                    obj2[0] = outer1_7.CHANNEL_CONVERSATION_MESSAGES(tmp48, tmp50);
                    obj3 = { limit: null, include_message_references: null, include_reactions: null };
                    obj3[0] = previewLimit;
                    obj3[1] = includeMessageReferences;
                    obj3[2] = includeReactions;
                    obj2[1] = obj3;
                    c9 = 2;
                    c10 = 1;
                    obj4 = { value: null, done: false };
                    obj4[0] = HTTP.get(obj2);
                    return obj4;
                  }
                }
              }
              obj14 = callback(8365);
              tmp52 = callback;
            }
          } else {
            if (1 === tmp7) {
              c8 = 0;
              obj1 = callback2(709);
              const obj5 = { type: "CONVERSATION_FETCH_FAILURE", channelId: null, conversationId: null, full: null };
              obj5[1] = callback;
              obj5[2] = callback2;
              obj5[3] = dependencyMap;
              obj1.dispatch(obj5);
            } else if (arg0 === 1) {
              c10 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              apexExperiment = arg1;
              const obj6 = { type: "CONVERSATION_FETCH_SUCCESS", channelId: null, conversationId: null, messages: null, messageReferences: null, fullyHydrated: null };
              obj6[1] = callback;
              obj6[2] = callback2;
              obj6[3] = apexExperiment.body.messages;
              obj6[4] = apexExperiment.body.reference_messages;
              obj6[5] = dependencyMap;
              callback2(709).dispatch(obj6);
              c8 = 0;
              const obj12 = callback2(709);
            }
            c8 = 0;
            c10 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          c10 = 3;
        } catch (tmp29) {
          let closure_7 = tmp29;
          if (tmp4 === c8) {
            c10 = tmp2;
            throw tmp29;
          } else {
            c9 = tmp;
          }
        }
      }
    })();
  });
  const _fetchConversationMessages = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let result = require("initialize").fileFinishedImporting("modules/conversations/ConversationsActionCreators.tsx");

export const fetchChannelConversations = function fetchChannelConversations(arg0) {
  const self = this;
  const apply = _fetchChannelConversations.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const toggleConversationHighlighting = function toggleConversationHighlighting() {
  importDefault(709).dispatch({ type: "CONVERSATIONS_TOGGLE_HIGHLIGHTING" });
};
export const setSelectedConversation = function setSelectedConversation(channelId, guildId, conversationId) {
  let flag = arg3;
  if (arg3 === undefined) {
    flag = true;
  }
  let obj = importDefault(709);
  obj = { type: "SET_SELECTED_CONVERSATION", channelId, conversationId };
  obj.dispatch(obj);
  fetchConversationMessages(channelId, guildId, conversationId, { includeReactions: true, includeMessageReferences: true });
  conversationMetadata = conversationMetadata.getConversationMetadata(channelId, conversationId);
  if (flag) {
    let startMessageId;
    if (conversationMetadata != null) {
      startMessageId = conversationMetadata.conversation.startMessageId;
    }
    flag = null != startMessageId;
  }
  if (flag) {
    obj = { channelId: null, messageId: null, flash: false };
    obj[0] = channelId;
    obj[1] = conversationMetadata.conversation.startMessageId;
    importDefault(6826).jumpToMessage(obj);
    const tmpResult = importDefault(6826);
  }
};
export const clearConversationSelection = function clearConversationSelection(channelId, conversationId) {
  let obj = importDefault(709);
  obj = { type: "CLEAR_CONVERSATION_SELECTION", channelId, conversationId };
  obj.dispatch(obj);
};
export const setConversationFeedbackRating = function setConversationFeedbackRating(closure_0, closure_1, down) {
  let obj = importDefault(709);
  obj = { type: "SET_CONVERSATION_FEEDBACK_RATING", channelId: closure_0, conversationId: closure_1, rating: down };
  obj.dispatch(obj);
};
export { fetchConversationMessages };
export const trackTopicalNavigationEntrypointImpression = function trackTopicalNavigationEntrypointImpression(id, stateFromStores1) {
  const ConversationsAnalytics = require(8369) /* ConversationsAnalytics */.ConversationsAnalytics;
  const result = ConversationsAnalytics.trackEntrypointImpression({ channelId: id, conversationCount: stateFromStores1 });
  if (initialize.shouldTriggerOnNextExposure()) {
    importDefault(8370).fireSurveyAction(require(8377) /* SurveyActionTypes */.SurveyActionTypes.TOPICAL_NAVIGATION_MULTIPLE_IMPRESSIONS);
    const obj2 = importDefault(8370);
  }
  importDefault(709).dispatch({ type: "TOPICAL_NAVIGATION_ENTRYPOINT_IMPRESSION" });
};