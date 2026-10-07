// === Module 12021: SuggestedSearchActionCreators ===

// Module 12021 (SuggestedSearchActionCreators)
import BackoffDefault from "Backoff" /* 569 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import SmartSearchExperiments from "SmartSearchExperiments" /* 12020 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import SuggestedSearchStore from "SuggestedSearchStore" /* 11981 */;

require = fn;
function canFetchSuggestedSearches(guildId) {
  let isNlpSearchEnabledResult = SmartSearchExperiments.isNlpSearchEnabled(guildId.guildId, "suggested_searches");
  if (isNlpSearchEnabledResult) {
    const result = SuggestedSearchStore.isLoadingSuggestedSearches(guildId);
    let tmp4 = !result;
    if (!result) {
      tmp4 = !closure_8.pending;
    }
    isNlpSearchEnabledResult = tmp4;
  }
  return isNlpSearchEnabledResult;
}
function performSuggestedSearchesFetch() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_11 = async function _performSuggestedSearchesFetch(arg0) {
  if (c9 === 2) {
    c9 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      c9 = 2;
      if (0 === c8) {
        if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c9 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_5 = tmp3;
          closure_4 = tmp7;
          closure_132_2 = undefined;
          closure_132_0 = closure_0;
          closure_132_1 = closure_1;
          let tmp32 = closure_2;
          if (closure_2 === undefined) {
            tmp32 = null;
          }
          closure_132_2 = tmp32;
          let guildId;
          let channelIds;
          let parentSuggestedSearch;
          closure_132_6 = undefined;
          closure_132_7 = undefined;
          closure_132_8 = undefined;
          c8 = 1;
          c9 = 1;
          return { value: "Reflect", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c9 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          guildId = closure_132_0.guildId;
          channelIds = closure_132_0.channelIds;
          parentSuggestedSearch = closure_133_1(closure_133_2[6]).getParentSuggestedSearch();
          const obj14 = closure_133_1(closure_133_2[6]);
          const obj7 = { type: "SUGGESTED_SEARCHES_FETCH_START", scope: closure_132_0 };
          closure_133_1(closure_133_2[7]).dispatch(obj7);
          const _performance3 = performance;
          closure_132_6 = performance.now();
          c7 = 1;
          const HTTP = closure_133_0(closure_133_2[8]).HTTP;
          const request = { url: closure_133_6.SUGGESTED_SEARCHES(guildId), body: null, oldFormErrors: true, rejectWithError: true };
          const obj8 = { channel_ids: channelIds, limit: closure_133_5 };
          request.body = obj8;
          c8 = 3;
          c9 = 1;
          const obj9 = { value: HTTP.post(request), done: false };
          return obj9;
        }
      } else {
        if (2 === tmp7) {
          c7 = 0;
          closure_132_9 = closure_6;
          closure_133_8.fail(closure_133_7);
          const obj11 = { type: "SUGGESTED_SEARCHES_FETCH_FAILURE", scope: closure_132_0, windowSize: closure_132_2 };
          closure_133_1(closure_133_2[7]).dispatch(obj11);
          const obj2 = closure_133_1(closure_133_2[7]);
          const obj13 = { smartSearchQuery: closure_132_0, requestId: null, durationMs: null, responseStatusCode: null, suggestedSearches: null, parentSuggestedSearch: null };
          const _performance = performance;
          obj13.durationMs = performance.now() - closure_132_6;
          let status;
          if (closure_132_9 != null) {
            status = closure_132_9.status;
          }
          let responseStatusCode = status;
          if (status == null) {
            responseStatusCode = null;
          }
          obj13.responseStatusCode = responseStatusCode;
          obj13.suggestedSearches = [];
          obj13.parentSuggestedSearch = parentSuggestedSearch;
          const result = closure_133_1(closure_133_2[6]).trackSuggestedSearchesReturned(obj13, closure_132_1);
          c9 = 3;
          const obj4 = closure_133_1(closure_133_2[6]);
        } else if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_132_7 = value;
          closure_133_8.succeed();
          const suggestions = closure_132_7.body.suggestions;
          closure_132_8 = suggestions.map((suggestionId) => ({ suggestionId: suggestionId.suggestion_id, suggestedSearchText: suggestionId.suggested_search_text }));
          const obj16 = { type: "SUGGESTED_SEARCHES_FETCH_SUCCESS", scope: closure_132_0, requestId: closure_132_7.body.request_id, suggestedSearches: closure_132_8, windowSize: closure_132_2 };
          closure_133_1(closure_133_2[7]).dispatch(obj16);
          const obj10 = closure_133_1(closure_133_2[7]);
          const obj17 = { smartSearchQuery: closure_132_0, requestId: closure_132_7.body.request_id, durationMs: null, responseStatusCode: null, suggestedSearches: null, parentSuggestedSearch: null };
          const _performance2 = performance;
          obj17.durationMs = performance.now() - closure_132_6;
          obj17.responseStatusCode = closure_132_7.status;
          obj17.suggestedSearches = closure_132_8;
          obj17.parentSuggestedSearch = parentSuggestedSearch;
          const result1 = closure_133_1(closure_133_2[6]).trackSuggestedSearchesReturned(obj17, closure_132_1);
          c7 = 0;
          const obj12 = closure_133_1(closure_133_2[6]);
        }
        c7 = 0;
        c9 = 3;
        const obj = { value, done: true };
        return obj;
      }
    } catch (tmp33) {
      closure_6 = tmp33;
      if (tmp4 === c7) {
        c9 = tmp2;
        throw tmp33;
      } else {
        c8 = tmp;
      }
    }
  }
};
let closure_12 = async function _fetchInitialSuggestedSearches(arg0) {
  if (c2 === 2) {
    c2 = 3;
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
      c2 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else if (!SuggestedSearchStore.hasSuggestions(closure_0)) {
          if (canFetchSuggestedSearches(closure_0)) {
            c3 = 1;
            c2 = 1;
            const obj4 = { value: performSuggestedSearchesFetch(closure_0, closure_1), done: false };
            return obj4;
          }
        }
      } else if (arg0 === 1) {
        c2 = 3;
        throw value;
      } else if (arg0 === 2) {
        c2 = 3;
        const obj = { value, done: true };
        return obj;
      }
      c2 = 3;
      return { value: "IconComponent", done: null };
    } catch (tmp10) {
      c2 = tmp;
      throw tmp10;
    }
  }
};
const SmartSearchConstants = fn(11982);
({ SUGGESTED_SEARCHES_REQUEST_LIMIT: hasOwnProperty, SUGGESTED_SEARCHES_RETRY_MIN_MS, SUGGESTED_SEARCHES_RETRY_MAX_MS } = SmartSearchConstants);
const Constants = fn(1085);
({ Endpoints: metroRequire, NOOP: closure_7 } = Constants);
let closure_8 = new BackoffDefault(SUGGESTED_SEARCHES_RETRY_MIN_MS, SUGGESTED_SEARCHES_RETRY_MAX_MS, true);
const size = fn(2);
let result = size.fileFinishedImporting("modules/intelligence_layer/search/SuggestedSearchActionCreators.tsx");

export const fetchInitialSuggestedSearches = function fetchInitialSuggestedSearches() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const advanceSuggestedSearches = function advanceSuggestedSearches(smartSearchQuery, arg1, windowSize) {
  if (!SuggestedSearchStore.isLoadingSuggestedSearches(smartSearchQuery)) {
    if (SuggestedSearchStore.willExhaustSuggestedSearches(smartSearchQuery, windowSize)) {
      let isNlpSearchEnabledResult = SmartSearchExperiments.isNlpSearchEnabled(smartSearchQuery.guildId, "suggested_searches");
      if (isNlpSearchEnabledResult) {
        const result = SuggestedSearchStore.isLoadingSuggestedSearches(smartSearchQuery);
        let tmp6 = !result;
        if (!result) {
          tmp6 = !closure_8.pending;
        }
        isNlpSearchEnabledResult = tmp6;
      }
      if (isNlpSearchEnabledResult) {
        performSuggestedSearchesFetch(smartSearchQuery, arg1, windowSize);
      }
    }
    const obj4 = { type: "SUGGESTED_SEARCH_ADVANCE", scope: smartSearchQuery, windowSize };
    DispatcherDefault.dispatch(obj4);
  }
};