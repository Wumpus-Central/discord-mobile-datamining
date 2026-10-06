// === Module 16827: SuggestedSearchRow ===

// Module 16827 (SuggestedSearchRow)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import SearchPlatformUtilsDefault from "SearchPlatformUtils" /* 11980 */;
import SearchSessionAnalyticsManagerDefault from "SearchSessionAnalyticsManager" /* 12002 */;
import SmartSearchAnalyticsManagerDefault from "SmartSearchAnalyticsManager" /* 12004 */;
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 12005 */;
import SuggestedSearchActionCreators from "SuggestedSearchActionCreators" /* 12021 */;
import react from "react" /* 19 */;
import SmartSearchConstants from "SmartSearchConstants" /* 11982 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let suggestedSearch;

let SUGGESTED_SEARCH_COMPACT_LABEL_HEIGHT;
let hasOwnProperty;
let size;
const View = react_native.View;
({ SUGGESTED_SEARCHES_WINDOW_SIZE: hasOwnProperty, SUGGESTED_SEARCH_COMPACT_LABEL_HEIGHT } = SmartSearchConstants);
const jsx = Fragment.jsx;
let obj = { iconCircle: size, text: { flexShrink: 1 }, compactLabel: { height: SUGGESTED_SEARCH_COMPACT_LABEL_HEIGHT, justifyContent: "center", overflow: "hidden" } };
size = { width: 48, height: 48, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, alignItems: "center", justifyContent: "center" };
let closure_7 = createStyles.createStyles(obj);
const memo = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((suggestedSearch) => {
  let suggestionSource;
  let obj = suggestedSearch(suggestionSource[7]);
  const cResult = obj.c(21);
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
          let tmp5;
          if (cResult[4] === suggestionSource) {
            tmp5 = cResult[5];
          }
          let str2 = "redesign/channel-title/semibold";
          if ("default" === str) {
            str2 = "text-md/normal";
          }
          if (cResult[6] === tmp4.text) {
            if (cResult[7] === suggestedSearch.suggestedSearchText) {
              let tmp7;
              if (cResult[8] === str2) {
                tmp7 = cResult[9];
              }
              let compactLabel;
              if ("compact" === str) {
                compactLabel = tmp4.compactLabel;
              }
              if (cResult[10] === tmp7) {
                let tmp11;
                let tmp17;
                let tmp20;
                if (cResult[11] === compactLabel) {
                  tmp11 = cResult[12];
                }
                let iconCircle;
                if ("default" === str) {
                  iconCircle = tmp4.iconCircle;
                }
                const _Symbol = Symbol;
                if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
                  const tmp19 = jsx(suggestedSearch(suggestionSource[14]).MagnifyingGlassIcon, { size: "sm", color: "icon-muted" });
                  cResult[13] = tmp19;
                  tmp17 = tmp19;
                } else {
                  tmp17 = cResult[13];
                }
                if (cResult[14] !== iconCircle) {
                  const tmp23 = <numSuggestedSearches style={iconCircle}>{tmp17}</numSuggestedSearches>;
                  cResult[14] = iconCircle;
                  cResult[15] = tmp23;
                  tmp20 = tmp23;
                } else {
                  tmp20 = cResult[15];
                }
                if (cResult[16] === tmp5) {
                  if (cResult[17] === suggestedSearch.suggestedSearchText) {
                    if (cResult[18] === tmp11) {
                      let tmp24;
                      if (cResult[19] === tmp20) {
                        tmp24 = cResult[20];
                      }
                      return tmp24;
                    }
                  }
                }
                const tmp26 = jsx(suggestedSearch(suggestionSource[15]).SearchListRow, { onPress: tmp5, accessibilityLabel: suggestedSearch.suggestedSearchText, label: tmp11, icon: tmp20 });
                cResult[16] = tmp5;
                cResult[17] = suggestedSearch.suggestedSearchText;
                cResult[18] = tmp11;
                cResult[19] = tmp20;
                cResult[20] = tmp26;
                tmp24 = tmp26;
              }
              const tmp14 = <numSuggestedSearches style={compactLabel}>{tmp7}</numSuggestedSearches>;
              cResult[10] = tmp7;
              cResult[11] = compactLabel;
              cResult[12] = tmp14;
              tmp11 = tmp14;
            }
          }
          const tmp9 = jsx(suggestedSearch(suggestionSource[13]).Text, { lineClamp: 2, variant: str2, color: "redesign-channel-name-muted-text", style: tmp4.text, children: suggestedSearch.suggestedSearchText });
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
    let suggestedSearchText;
    const obj = SmartSearchAnalyticsManagerDefault;
    const obj2 = { smartSearchQuery, suggestedSearch, suggestionSource, index, numSuggestedSearches };
    const result = obj.trackSuggestedSearchStarted(obj2, SearchSessionAnalyticsManagerDefault);
    const obj3 = SearchPlatformActionCreatorsDefault;
    obj3.updateSearchQuery(smartSearchQuery.searchContext, (setTextInputValue) => {
      setTextInputValue.setTextInputValue(suggestedSearchText.suggestedSearchText);
    });
    const obj4 = SearchPlatformUtilsDefault;
    const initialMessages = obj4.fetchInitialMessages(smartSearchQuery.searchContext);
    const obj5 = SuggestedSearchActionCreators;
    const result1 = obj5.advanceSuggestedSearches(smartSearchQuery, SearchSessionAnalyticsManagerDefault, hasOwnProperty);
  };
  cResult[0] = index;
  cResult[1] = numSuggestedSearches;
  cResult[2] = smartSearchQuery;
  cResult[3] = suggestedSearch;
  cResult[4] = suggestionSource;
  cResult[5] = fn;
  tmp5 = fn;
}) : ((suggestedSearch) => {
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
    let suggestedSearchText;
    const obj = SmartSearchAnalyticsManagerDefault;
    const obj2 = { smartSearchQuery, suggestedSearch, suggestionSource, index, numSuggestedSearches };
    const result = obj.trackSuggestedSearchStarted(obj2, SearchSessionAnalyticsManagerDefault);
    const obj3 = SearchPlatformActionCreatorsDefault;
    obj3.updateSearchQuery(smartSearchQuery.searchContext, (setTextInputValue) => {
      setTextInputValue.setTextInputValue(suggestedSearchText.suggestedSearchText);
    });
    const obj4 = SearchPlatformUtilsDefault;
    const initialMessages = obj4.fetchInitialMessages(smartSearchQuery.searchContext);
    const obj5 = SuggestedSearchActionCreators;
    const result1 = obj5.advanceSuggestedSearches(smartSearchQuery, SearchSessionAnalyticsManagerDefault, hasOwnProperty);
  }, items);
  let str2 = "redesign/channel-title/semibold";
  const Text = suggestedSearch(suggestionSource[13]).Text;
  if ("default" === str) {
    str2 = "text-md/normal";
  }
  let compactLabel;
  const SearchListRow = tmp4(tmp5[15]).SearchListRow;
  if ("compact" === str) {
    compactLabel = tmp.compactLabel;
  }
  let iconCircle;
  if ("default" === str) {
    iconCircle = tmp.iconCircle;
  }
  let obj3 = { style: iconCircle, children: jsx(tmp4(tmp5[14]).MagnifyingGlassIcon, { size: "sm", color: "icon-muted" }) };
  return <SearchListRow onPress={callback} accessibilityLabel={suggestedSearch.suggestedSearchText} label={null} icon={null} />;
}));
size = size_mod;
let result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SuggestedSearchRow.tsx");

export default memoResult;