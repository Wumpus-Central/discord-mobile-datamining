// discord_app/modules/intelligence_layer/search/SuggestedSearchActionCreators.tsx
import BackoffDefault from "../../../../discord_common/js/packages/backoff/Backoff.tsx";
import DispatcherDefault from "../../../Dispatcher.tsx";
import SmartSearchExperiments from "SmartSearchExperiments.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import SuggestedSearchStore from "SuggestedSearchStore.tsx";

require = fn;
function canFetchSuggestedSearches(guildId, channelIds) {
  let isNlpSearchEnabledResult = SmartSearchExperiments.isNlpSearchEnabled(guildId, "suggested_searches");
  if (isNlpSearchEnabledResult) {
    const result = SuggestedSearchStore.isLoadingSuggestedSearches(guildId, channelIds);
    let tmp5 = !result;
    if (!result) {
      tmp5 = !closure_8.pending;
    }
    isNlpSearchEnabledResult = tmp5;
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
  if (c7 === 2) {
    c7 = 3;
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
      c7 = 2;
      if (0 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_4 = tmp3;
          closure_3 = tmp7;
          closure_131_2 = undefined;
          closure_131_0 = closure_0;
          closure_131_1 = closure_1;
          let tmp32 = closure_2;
          if (closure_2 === undefined) {
            tmp32 = null;
          }
          closure_131_2 = tmp32;
          closure_131_3 = undefined;
          c6 = 1;
          c7 = 1;
          return { value: "flex", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          const obj6 = { type: "SUGGESTED_SEARCHES_FETCH_START", guildId: closure_131_0, channelIds: closure_131_1 };
          closure_132_1(closure_132_2[6]).dispatch(obj6);
          c5 = 1;
          const HTTP = closure_132_0(closure_132_2[7]).HTTP;
          const request = {
            url: closure_132_6.SUGGESTED_SEARCHES(closure_131_0),
            body: null,
            oldFormErrors: true,
            rejectWithError: true,
          };
          const obj7 = { channel_ids: closure_131_1, limit: closure_132_5 };
          request.body = obj7;
          c6 = 3;
          c7 = 1;
          const obj8 = { value: HTTP.post(request), done: false };
          return obj8;
        }
      } else {
        if (2 === tmp7) {
          c5 = 0;
          closure_132_8.fail(closure_132_7);
          const obj9 = {
            type: "SUGGESTED_SEARCHES_FETCH_FAILURE",
            guildId: closure_131_0,
            channelIds: closure_131_1,
            refillWindowSize: closure_131_2,
          };
          closure_132_1(closure_132_2[6]).dispatch(obj9);
          c7 = 3;
          const obj4 = closure_132_1(closure_132_2[6]);
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_131_3 = value;
          closure_132_8.succeed();
          const obj11 = {
            type: "SUGGESTED_SEARCHES_FETCH_SUCCESS",
            guildId: closure_131_0,
            channelIds: closure_131_1,
            refillWindowSize: closure_131_2,
            response: closure_131_3.body,
          };
          closure_132_1(closure_132_2[6]).dispatch(obj11);
          c5 = 0;
          const obj = closure_132_1(closure_132_2[6]);
        }
        c5 = 0;
        c7 = 3;
        const obj12 = { value, done: true };
        return obj12;
      }
    } catch (tmp33) {
      if (tmp4 === c5) {
        c7 = tmp2;
        throw tmp33;
      } else {
        c6 = tmp;
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
      return { value: "HermesInternal", done: null };
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
        } else if (!SuggestedSearchStore.hasSuggestions(closure_0, closure_1)) {
          if (canFetchSuggestedSearches(closure_0, closure_1)) {
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
      return { value: "HermesInternal", done: null };
    } catch (tmp10) {
      c2 = tmp;
      throw tmp10;
    }
  }
};
const SmartSearchConstants = fn(12016);
({
  SUGGESTED_SEARCHES_REQUEST_LIMIT: hasOwnProperty,
  SUGGESTED_SEARCHES_RETRY_MIN_MS,
  SUGGESTED_SEARCHES_RETRY_MAX_MS,
} = SmartSearchConstants);
const Constants = fn(1074);
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
export const advanceSuggestedSearches = function advanceSuggestedSearches(guildId, channelIds, windowSize) {
  if (!SuggestedSearchStore.isLoadingSuggestedSearches(guildId, channelIds)) {
    if (SuggestedSearchStore.willExhaustSuggestedSearches(guildId, channelIds, windowSize)) {
      let isNlpSearchEnabledResult = SmartSearchExperiments.isNlpSearchEnabled(guildId, "suggested_searches");
      if (isNlpSearchEnabledResult) {
        const result = SuggestedSearchStore.isLoadingSuggestedSearches(guildId, channelIds);
        let tmp6 = !result;
        if (!result) {
          tmp6 = !closure_8.pending;
        }
        isNlpSearchEnabledResult = tmp6;
      }
      if (isNlpSearchEnabledResult) {
        performSuggestedSearchesFetch(guildId, channelIds, windowSize);
      }
    }
    const obj4 = { type: "SUGGESTED_SEARCH_ADVANCE", guildId, channelIds, windowSize };
    DispatcherDefault.dispatch(obj4);
  }
};
