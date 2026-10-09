// === Module 17256: SuggestedSearchRow ===

// Module 17256 (SuggestedSearchRow)
import nativeDefault from "native" /* 587 */;
import SearchPlatformUtilsDefault from "SearchPlatformUtils" /* 11990 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 12012 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 12014 */;
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 12015 */;
import SuggestedSearchActionCreators from "SuggestedSearchActionCreators" /* 12031 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const SmartSearchConstants = fn(11992);
({ SUGGESTED_SEARCHES_WINDOW_SIZE: hasOwnProperty, SUGGESTED_SEARCH_COMPACT_LABEL_HEIGHT } = SmartSearchConstants);
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let obj = { iconCircle: null, text: null, compactLabel: null };
let size = { width: 48, height: 48, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, alignItems: "center", justifyContent: "center" };
obj.iconCircle = size;
obj.text = { flexShrink: 1 };
obj.compactLabel = { height: SUGGESTED_SEARCH_COMPACT_LABEL_HEIGHT, justifyContent: "center", overflow: "hidden" };
let closure_7 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
size = fn(2);
let result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SuggestedSearchRow.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function SuggestedSearchRow(suggestedSearch) {
  const cResult = suggestedSearch(suggestionSource[7]).c(21);
  suggestedSearch = suggestedSearch.suggestedSearch;
  const smartSearchQuery = suggestedSearch.smartSearchQuery;
  suggestionSource = suggestedSearch.suggestionSource;
  const index = suggestedSearch.index;
  const numSuggestedSearches = suggestedSearch.numSuggestedSearches;
  const variant = suggestedSearch.variant;
  let str = "default";
  if (undefined !== variant) {
    str = variant;
  }
  const tmp4 = closure_7();
  if (cResult[0] === index) {
    if (cResult[1] === numSuggestedSearches) {
      if (cResult[2] === smartSearchQuery) {
        if (cResult[3] === suggestedSearch) {
          if (cResult[4] === suggestionSource) {
            let tmp5 = cResult[5];
          }
          let str2 = "redesign/channel-title/semibold";
          if ("default" === str) {
            str2 = "text-md/normal";
          }
          if (cResult[6] === tmp4.text) {
            if (cResult[7] === suggestedSearch.suggestedSearchText) {
              if (cResult[8] === str2) {
                let tmp7 = cResult[9];
              }
              let compactLabel;
              if ("compact" === str) {
                compactLabel = tmp4.compactLabel;
              }
              if (cResult[10] === tmp7) {
                if (cResult[11] === compactLabel) {
                  let tmp11 = cResult[12];
                }
                let iconCircle;
                if (tmp6) {
                  iconCircle = tmp4.iconCircle;
                }
                const _Symbol = Symbol;
                if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
                  const tmp19 = jsx(tmp(tmp2[14]).MagnifyingGlassIcon, { size: "sm", color: "icon-muted" });
                  cResult[13] = tmp19;
                  let tmp17 = tmp19;
                } else {
                  tmp17 = cResult[13];
                }
                if (cResult[14] !== iconCircle) {
                  let obj2 = { style: iconCircle, children: tmp17 };
                  const tmp23 = <numSuggestedSearches style={iconCircle}>{tmp17}</numSuggestedSearches>;
                  cResult[14] = iconCircle;
                  cResult[15] = tmp23;
                  let tmp20 = tmp23;
                } else {
                  tmp20 = cResult[15];
                }
                if (cResult[16] === tmp5) {
                  if (cResult[17] === suggestedSearch.suggestedSearchText) {
                    if (cResult[18] === tmp11) {
                      if (cResult[19] === tmp20) {
                        let tmp24 = cResult[20];
                      }
                      return tmp24;
                    }
                  }
                }
                let obj3 = { onPress: tmp5, accessibilityLabel: suggestedSearch.suggestedSearchText, label: tmp11, icon: tmp20 };
                const tmp26 = jsx(tmp(tmp2[15]).SearchListRow, { onPress: tmp5, accessibilityLabel: suggestedSearch.suggestedSearchText, label: tmp11, icon: tmp20 });
                cResult[16] = tmp5;
                cResult[17] = suggestedSearch.suggestedSearchText;
                cResult[18] = tmp11;
                cResult[19] = tmp20;
                cResult[20] = tmp26;
                tmp24 = tmp26;
              }
              let obj4 = { style: compactLabel, children: tmp7 };
              const tmp14 = <numSuggestedSearches style={compactLabel}>{tmp7}</numSuggestedSearches>;
              cResult[10] = tmp7;
              cResult[11] = compactLabel;
              cResult[12] = tmp14;
              tmp11 = tmp14;
            }
          }
          const obj5 = { lineClamp: 2, variant: str2, color: "redesign-channel-name-muted-text", style: tmp4.text, children: suggestedSearch.suggestedSearchText };
          const tmp9 = jsx(tmp(tmp2[13]).Text, { lineClamp: 2, variant: str2, color: "redesign-channel-name-muted-text", style: tmp4.text, children: suggestedSearch.suggestedSearchText });
          cResult[6] = tmp4.text;
          cResult[7] = suggestedSearch.suggestedSearchText;
          cResult[8] = str2;
          cResult[9] = tmp9;
          tmp7 = tmp9;
        }
      }
    }
  }
  const fn = function c() {
    const result = SmartSearchAnalyticsManagerDefault.trackSuggestedSearchStarted({ smartSearchQuery, suggestedSearch, suggestionSource, index, numSuggestedSearches }, SearchSessionAnalyticsManagerDefault);
    const obj2 = { smartSearchQuery, suggestedSearch, suggestionSource, index, numSuggestedSearches };
    SearchPlatformActionCreatorsDefault.updateSearchQuery(smartSearchQuery.searchContext, (setTextInputValue) => {
      setTextInputValue.setTextInputValue(suggestedSearchText.suggestedSearchText);
    });
    const initialMessages = SearchPlatformUtilsDefault.fetchInitialMessages(smartSearchQuery.searchContext);
    const result1 = SuggestedSearchActionCreators.advanceSuggestedSearches(smartSearchQuery, SearchSessionAnalyticsManagerDefault, hasOwnProperty);
  };
  cResult[0] = index;
  cResult[1] = numSuggestedSearches;
  cResult[2] = smartSearchQuery;
  cResult[3] = suggestedSearch;
  cResult[4] = suggestionSource;
  cResult[5] = fn;
  tmp5 = fn;
  let obj = suggestedSearch(suggestionSource[7]);
}) : (function SuggestedSearchRow(suggestedSearch) {
  suggestedSearch = suggestedSearch.suggestedSearch;
  const smartSearchQuery = suggestedSearch.smartSearchQuery;
  const suggestionSource = suggestedSearch.suggestionSource;
  const index = suggestedSearch.index;
  const numSuggestedSearches = suggestedSearch.numSuggestedSearches;
  let str = suggestedSearch.variant;
  if (str === undefined) {
    str = "default";
  }
  const tmp = closure_7();
  const items = [smartSearchQuery, suggestedSearch, suggestionSource, index, numSuggestedSearches];
  const callback = index.useCallback(() => {
    const result = SmartSearchAnalyticsManagerDefault.trackSuggestedSearchStarted({ smartSearchQuery, suggestedSearch, suggestionSource, index, numSuggestedSearches }, SearchSessionAnalyticsManagerDefault);
    const obj2 = { smartSearchQuery, suggestedSearch, suggestionSource, index, numSuggestedSearches };
    SearchPlatformActionCreatorsDefault.updateSearchQuery(smartSearchQuery.searchContext, (setTextInputValue) => {
      setTextInputValue.setTextInputValue(suggestedSearchText.suggestedSearchText);
    });
    const initialMessages = SearchPlatformUtilsDefault.fetchInitialMessages(smartSearchQuery.searchContext);
    const result1 = SuggestedSearchActionCreators.advanceSuggestedSearches(smartSearchQuery, SearchSessionAnalyticsManagerDefault, hasOwnProperty);
  }, items);
  let str2 = "redesign/channel-title/semibold";
  if ("default" === str) {
    str2 = "text-md/normal";
  }
  let obj2 = { onPress: callback, accessibilityLabel: suggestedSearch.suggestedSearchText, label: null, icon: null };
  let compactLabel;
  if ("compact" === str) {
    compactLabel = tmp.compactLabel;
  }
  obj2.label = <numSuggestedSearches style={compactLabel}>{jsx(suggestedSearch(suggestionSource[13]).Text, { lineClamp: 2, variant: str2, color: "redesign-channel-name-muted-text", style: tmp.text, children: suggestedSearch.suggestedSearchText })}</numSuggestedSearches>;
  let iconCircle;
  if ("default" === str) {
    iconCircle = tmp.iconCircle;
  }
  let obj = { lineClamp: 2, variant: str2, color: "redesign-channel-name-muted-text", style: tmp.text, children: suggestedSearch.suggestedSearchText };
  const tmp3Result = jsx(suggestedSearch(suggestionSource[13]).Text, { lineClamp: 2, variant: str2, color: "redesign-channel-name-muted-text", style: tmp.text, children: suggestedSearch.suggestedSearchText });
  obj2.icon = <numSuggestedSearches style={iconCircle}>{jsx(suggestedSearch(suggestionSource[14]).MagnifyingGlassIcon, { size: "sm", color: "icon-muted" })}</numSuggestedSearches>;
  return jsx(suggestedSearch(suggestionSource[15]).SearchListRow, { onPress: callback, accessibilityLabel: suggestedSearch.suggestedSearchText, label: null, icon: null });
}));