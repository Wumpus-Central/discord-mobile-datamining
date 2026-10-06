// === Module 12021: SuggestedSearchActionCreators ===

// Module 12021 (SuggestedSearchActionCreators)
import BackoffDefault from "Backoff" /* 569 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import SmartSearchExperiments from "SmartSearchExperiments" /* 12020 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import SuggestedSearchStore from "SuggestedSearchStore" /* 11981 */;
import SmartSearchConstants from "SmartSearchConstants" /* 11982 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let c2, c3;

let SUGGESTED_SEARCHES_RETRY_MAX_MS;
let SUGGESTED_SEARCHES_RETRY_MIN_MS;
let hasOwnProperty;
let metroImportDefault;
let metroRequire;
function canFetchSuggestedSearches(guildId) {
  obj = SmartSearchExperiments;
  let isNlpSearchEnabledResult = obj.isNlpSearchEnabled(guildId.guildId, "suggested_searches");
  if (isNlpSearchEnabledResult) {
    const result = SuggestedSearchStore.isLoadingSuggestedSearches(guildId);
    isNlpSearchEnabledResult = !result && !closure_8.pending;
    const tmp4 = !result && !closure_8.pending;
  }
  return isNlpSearchEnabledResult;
}
function performSuggestedSearchesFetch() {
  return obj(...arguments);
}
let obj = function _performSuggestedSearchesFetch() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let closure_0;
    let closure_4;
    let obj7;
    let responseStatusCode;
    let windowSize;
    let closure_1 = arg1;
    const guildId = smartSearchQuery.guildId;
    const channelIds = smartSearchQuery.channelIds;
    const obj12 = closure_133_1(closure_133_2[6]);
    let parentSuggestedSearch = obj12.getParentSuggestedSearch();
    const obj6 = { type: "SUGGESTED_SEARCHES_FETCH_START", scope: smartSearchQuery };
    const obj13 = closure_133_1(closure_133_2[7]);
    obj13.dispatch(obj6);
    const _performance3 = performance;
    let closure_6 = performance.now();
    const HTTP = closure_133_0(closure_133_2[8]).HTTP;
    const request = { url: closure_133_6.SUGGESTED_SEARCHES(guildId), body: obj7, oldFormErrors: true, rejectWithError: true };
    const post = HTTP.post;
    obj7 = { channel_ids: channelIds, limit: closure_133_5 };
    await post(request);
    if (2 === c8) {
      let c7 = 0;
      closure_133_8.fail(closure_133_7);
      const obj10 = { type: "SUGGESTED_SEARCHES_FETCH_FAILURE", scope: smartSearchQuery, windowSize };
      const obj2 = closure_133_1(closure_133_2[7]);
      obj2.dispatch(obj10);
      const obj11 = { smartSearchQuery, requestId: null, durationMs: performance.now() - closure_6, responseStatusCode, suggestedSearches: [], parentSuggestedSearch };
      const _performance = performance;
      const trackSuggestedSearchesReturned = closure_133_1(closure_133_2[6]).trackSuggestedSearchesReturned;
      let status;
      if (status != null) {
        status = status.status;
      }
      responseStatusCode = status;
      if (status == null) {
        responseStatusCode = null;
      }
      const result = trackSuggestedSearchesReturned(obj11, closure_1);
    } else if (arg0 === 1) {
      let c9 = 3;
      throw value;
    } else if (arg0 === 2) {
      c7 = 0;
      c9 = 3;
      obj = { value, done: true };
      return obj;
    } else {
      let closure_7 = value;
      closure_133_8.succeed();
      const suggestions = closure_7.body.suggestions;
      const suggestedSearches = suggestions.map((suggestionId) => ({ suggestionId: suggestionId.suggestion_id, suggestedSearchText: suggestionId.suggested_search_text }));
      const obj14 = { type: "SUGGESTED_SEARCHES_FETCH_SUCCESS", scope: smartSearchQuery, requestId: closure_7.body.request_id, suggestedSearches, windowSize };
      const obj9 = closure_133_1(closure_133_2[7]);
      obj9.dispatch(obj14);
      const obj15 = { smartSearchQuery, requestId: closure_7.body.request_id, durationMs: performance.now() - closure_6, responseStatusCode: closure_7.status, suggestedSearches, parentSuggestedSearch };
      const _performance2 = performance;
      const trackSuggestedSearchesReturned2 = closure_133_1(closure_133_2[6]).trackSuggestedSearchesReturned;
      const result1 = trackSuggestedSearchesReturned2(obj15, closure_1);
      c7 = 0;
    }
    await "IconComponent";
    parentSuggestedSearch = tmp;
    let tmp30 = closure_2;
    if (closure_2 === undefined) {
      tmp30 = null;
    }
    windowSize = tmp30;
    return "Reflect";
  });
  return obj(...arguments);
};
obj = function _fetchInitialSuggestedSearches() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
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
          obj = { value, done: true };
          return obj;
        }
        c2 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp9) {
        c2 = 3;
        throw tmp9;
      }
    }
  });
  return obj(...arguments);
};
({ SUGGESTED_SEARCHES_REQUEST_LIMIT: hasOwnProperty, SUGGESTED_SEARCHES_RETRY_MIN_MS, SUGGESTED_SEARCHES_RETRY_MAX_MS } = SmartSearchConstants);
({ Endpoints: metroRequire, NOOP: metroImportDefault } = Constants);
let tmp4 = new BackoffDefault(SUGGESTED_SEARCHES_RETRY_MIN_MS, SUGGESTED_SEARCHES_RETRY_MAX_MS, true);
let closure_8 = tmp4;
let result = size.fileFinishedImporting("modules/intelligence_layer/search/SuggestedSearchActionCreators.tsx");

export const fetchInitialSuggestedSearches = function fetchInitialSuggestedSearches() {
  return obj(...arguments);
};
export const advanceSuggestedSearches = function advanceSuggestedSearches(smartSearchQuery, arg1, windowSize) {
  if (!SuggestedSearchStore.isLoadingSuggestedSearches(smartSearchQuery)) {
    if (SuggestedSearchStore.willExhaustSuggestedSearches(smartSearchQuery, windowSize)) {
      const obj2 = SmartSearchExperiments;
      let isNlpSearchEnabledResult = obj2.isNlpSearchEnabled(smartSearchQuery.guildId, "suggested_searches");
      if (isNlpSearchEnabledResult) {
        const result = SuggestedSearchStore.isLoadingSuggestedSearches(smartSearchQuery);
        isNlpSearchEnabledResult = !result && !closure_8.pending;
        const tmp6 = !result && !closure_8.pending;
      }
      if (isNlpSearchEnabledResult) {
        performSuggestedSearchesFetch(smartSearchQuery, arg1, windowSize);
      }
    }
    const obj4 = { type: "SUGGESTED_SEARCH_ADVANCE", scope: smartSearchQuery, windowSize };
    const obj3 = DispatcherDefault;
    obj3.dispatch(obj4);
  }
};