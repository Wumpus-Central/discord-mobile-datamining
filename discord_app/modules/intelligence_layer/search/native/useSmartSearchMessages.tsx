// === Module 16877: useSmartSearchMessages ===

// Module 16877 (useSmartSearchMessages)
import SmartSearchTypes from "SmartSearchTypes" /* 11989 */;
import SmartSearchUtils from "SmartSearchUtils" /* 11997 */;
import noop from "module_19" /* 19 */;
import SuggestedSearchStore from "SuggestedSearchStore" /* 12004 */;

const require = globalThis.__r;

require = fn;
const SearchListItemTypes = fn(7513).SearchListItemTypes;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/intelligence_layer/search/native/useSmartSearchMessages.tsx");

export const useSmartSearchMessages = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = require("c").c(13);
  ({ searchContext, searchQueryString, hasKeywordResults } = arg0);
  if (cResult[0] === searchContext) {
    if (cResult[1] === searchQueryString) {
      let tmp5 = cResult[2];
    }
    _require = tmp5;
    const smartSearchStatus = tmp(16783).useSmartSearchStatus(tmp5);
    const tmpResult = tmp(16783);
    let guildId;
    if (tmp5 != null) {
      guildId = tmp5.guildId;
    }
    const _Symbol = Symbol;
    const isNlpSearchEnabled = tmp(12005).useIsNlpSearchEnabled(guildId, "fetch_answer");
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [SuggestedSearchStore];
      cResult[3] = items;
    }
    if (cResult[4] !== tmp5) {
      const fn = function p() {
        let hasSuggestionsResult = null != closure_0;
        if (hasSuggestionsResult) {
          hasSuggestionsResult = SuggestedSearchStore.hasSuggestions(closure_0.guildId, closure_0.channelIds);
        }
        return hasSuggestionsResult;
      };
      const items1 = [tmp5];
      cResult[4] = tmp5;
      cResult[5] = fn;
      cResult[6] = items1;
    }
    tmp(504);
    let tmp19 = null;
    if (null != tmp5) {
      tmp19 = null;
      if (isNlpSearchEnabled) {
        tmp19 = null;
        if (!tmp4) {
          tmp19 = null;
          if (smartSearchStatus !== tmp(11989).SmartSearchStatus.NOT_QUALIFIED) {
            if (tmpResult7.isSmartSearchEmptyOrErrored(smartSearchStatus)) {
              tmp19 = null;
            }
            if (cResult[7] === hasKeywordResults) {
            }
            const element = { type: SearchListItemTypes.SMART_SEARCH, props: null };
            const obj2 = { smartSearchQuery: tmp5, hasKeywordResults };
            element.props = obj2;
            cResult[7] = hasKeywordResults;
            cResult[8] = tmp5;
            cResult[9] = element;
            tmpResult7 = tmp(11997);
          }
        }
      }
    }
    if (cResult[10] === tmp19) {
      if (cResult[11] === smartSearchStatus) {
        let tmp23 = cResult[12];
      }
      return tmp23;
    }
    const obj3 = { item: tmp19, status: smartSearchStatus };
    cResult[10] = tmp19;
    cResult[11] = smartSearchStatus;
    cResult[12] = obj3;
    tmp23 = obj3;
    const tmpResult5 = tmp(12005);
  }
  const obj = require("c");
  const smartSearchQuery = require("SmartSearchUtils").getSmartSearchQuery(searchContext, searchQueryString);
  cResult[0] = searchContext;
  cResult[1] = searchQueryString;
  cResult[2] = smartSearchQuery;
  tmp5 = smartSearchQuery;
  const tmpResult8 = require("SmartSearchUtils");
}) : ((searchContext) => {
  searchContext = searchContext.searchContext;
  const searchQueryString = searchContext.searchQueryString;
  const hasKeywordResults = searchContext.hasKeywordResults;
  const isKeywordFirstPageLoading = searchContext.isKeywordFirstPageLoading;
  let isNlpSearchEnabled;
  let stateFromStores;
  const items = [searchContext, searchQueryString];
  const memo = hasKeywordResults.useMemo(() => SmartSearchUtils.getSmartSearchQuery(searchContext, searchQueryString), items);
  const smartSearchStatus = searchContext(searchQueryString[6]).useSmartSearchStatus(memo);
  let obj = hasKeywordResults;
  const obj2 = searchContext(searchQueryString[6]);
  let tmp2 = searchContext;
  const tmp3 = searchQueryString;
  let guildId;
  if (memo != null) {
    guildId = memo.guildId;
  }
  isNlpSearchEnabled = searchContext(searchQueryString[7]).useIsNlpSearchEnabled(guildId, "fetch_answer");
  const obj3 = searchContext(searchQueryString[7]);
  const items1 = [isKeywordFirstPageLoading];
  const items2 = [memo];
  stateFromStores = tmp2(tmp3[8]).useStateFromStores(items1, () => {
    let hasSuggestionsResult = null != memo;
    if (hasSuggestionsResult) {
      hasSuggestionsResult = SuggestedSearchStore.hasSuggestions(memo.guildId, memo.channelIds);
    }
    return hasSuggestionsResult;
  }, items2);
  const obj4 = { item: null, status: smartSearchStatus };
  const items3 = [hasKeywordResults, stateFromStores, memo, isKeywordFirstPageLoading, isNlpSearchEnabled, smartSearchStatus];
  obj4.item = obj.useMemo(() => {
    let tmp2 = null;
    if (null != memo) {
      tmp2 = null;
      if (isNlpSearchEnabled) {
        tmp2 = null;
        if (!isKeywordFirstPageLoading) {
          tmp2 = null;
          if (smartSearchStatus !== SmartSearchTypes.SmartSearchStatus.NOT_QUALIFIED) {
            if (!tmp6Result.isSmartSearchEmptyOrErrored(smartSearchStatus)) {
              const element = { type: SearchListItemTypes.SMART_SEARCH, props: null };
              const obj = { smartSearchQuery: tmp, hasKeywordResults };
              element.props = obj;
              tmp2 = element;
            } else {
              tmp2 = null;
            }
            tmp6Result = SmartSearchUtils;
          }
        }
      }
    }
    return tmp2;
  }, items3);
  return obj4;
});