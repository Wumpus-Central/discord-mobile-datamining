// === Module 16806: SuggestedSearchRow ===

// Module 16806 (SuggestedSearchRow)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import SearchPlatformUtilsDefault from "SearchPlatformUtils" /* 11966 */;
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 11985 */;
import SuggestedSearchActionCreators from "SuggestedSearchActionCreators" /* 12006 */;
import react from "react" /* 19 */;
import SmartSearchConstants from "SmartSearchConstants" /* 11988 */;
import createStyles from "createStyles" /* 4890 */;
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
  let obj = suggestedSearch(576);
  const cResult = obj.c(20);
  suggestedSearch = suggestedSearch.suggestedSearch;
  const smartSearchQuery = suggestedSearch.smartSearchQuery;
  const variant = suggestedSearch.variant;
  let str = "default";
  if (undefined !== variant) {
    str = variant;
  }
  const tmp4 = closure_7();
  if (cResult[0] === smartSearchQuery.channelIds) {
    if (cResult[1] === smartSearchQuery.guildId) {
      if (cResult[2] === smartSearchQuery.searchContext) {
        let tmp5;
        if (cResult[3] === suggestedSearch.suggestedSearchText) {
          tmp5 = cResult[4];
        }
        let str2 = "redesign/channel-title/semibold";
        if ("default" === str) {
          str2 = "text-md/normal";
        }
        if (cResult[5] === tmp4.text) {
          if (cResult[6] === suggestedSearch.suggestedSearchText) {
            let tmp7;
            if (cResult[7] === str2) {
              tmp7 = cResult[8];
            }
            let compactLabel;
            if ("compact" === str) {
              compactLabel = tmp4.compactLabel;
            }
            if (cResult[9] === tmp7) {
              let tmp11;
              let tmp17;
              let tmp20;
              if (cResult[10] === compactLabel) {
                tmp11 = cResult[11];
              }
              let iconCircle;
              if ("default" === str) {
                iconCircle = tmp4.iconCircle;
              }
              const _Symbol = Symbol;
              if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
                const tmp19 = jsx(suggestedSearch(6548).MagnifyingGlassIcon, { size: "sm", color: "icon-muted" });
                cResult[12] = tmp19;
                tmp17 = tmp19;
              } else {
                tmp17 = cResult[12];
              }
              if (cResult[13] !== iconCircle) {
                const tmp23 = <View style={iconCircle}>{tmp17}</View>;
                cResult[13] = iconCircle;
                cResult[14] = tmp23;
                tmp20 = tmp23;
              } else {
                tmp20 = cResult[14];
              }
              if (cResult[15] === tmp5) {
                if (cResult[16] === suggestedSearch.suggestedSearchText) {
                  if (cResult[17] === tmp11) {
                    let tmp24;
                    if (cResult[18] === tmp20) {
                      tmp24 = cResult[19];
                    }
                    return tmp24;
                  }
                }
              }
              const tmp26 = jsx(suggestedSearch(16807).SearchListRow, { onPress: tmp5, accessibilityLabel: suggestedSearch.suggestedSearchText, label: tmp11, icon: tmp20 });
              cResult[15] = tmp5;
              cResult[16] = suggestedSearch.suggestedSearchText;
              cResult[17] = tmp11;
              cResult[18] = tmp20;
              cResult[19] = tmp26;
              tmp24 = tmp26;
            }
            const tmp14 = <View style={compactLabel}>{tmp7}</View>;
            cResult[9] = tmp7;
            cResult[10] = compactLabel;
            cResult[11] = tmp14;
            tmp11 = tmp14;
          }
        }
        const tmp9 = jsx(suggestedSearch(4886).Text, { lineClamp: 2, variant: str2, color: "redesign-channel-name-muted-text", style: tmp4.text, children: suggestedSearch.suggestedSearchText });
        cResult[5] = tmp4.text;
        cResult[6] = suggestedSearch.suggestedSearchText;
        cResult[7] = str2;
        cResult[8] = tmp9;
        tmp7 = tmp9;
      }
    }
  }
  const fn = function c() {
    let suggestedSearchText;
    const obj = SearchPlatformActionCreatorsDefault;
    obj.updateSearchQuery(smartSearchQuery.searchContext, (setTextInputValue) => {
      setTextInputValue.setTextInputValue(suggestedSearchText.suggestedSearchText);
    });
    const obj2 = SearchPlatformUtilsDefault;
    const initialMessages = obj2.fetchInitialMessages(smartSearchQuery.searchContext);
    const obj3 = SuggestedSearchActionCreators;
    const result = obj3.advanceSuggestedSearches(smartSearchQuery.guildId, smartSearchQuery.channelIds, hasOwnProperty);
  };
  cResult[0] = smartSearchQuery.channelIds;
  cResult[1] = smartSearchQuery.guildId;
  cResult[2] = smartSearchQuery.searchContext;
  cResult[3] = suggestedSearch.suggestedSearchText;
  cResult[4] = fn;
  tmp5 = fn;
}) : ((suggestedSearch) => {
  suggestedSearch = suggestedSearch.suggestedSearch;
  const smartSearchQuery = suggestedSearch.smartSearchQuery;
  let str = suggestedSearch.variant;
  if (str === undefined) {
    str = "default";
  }
  const tmp = closure_7();
  const items = [smartSearchQuery, suggestedSearch.suggestedSearchText];
  const callback = react.useCallback(() => {
    let suggestedSearchText;
    const obj = SearchPlatformActionCreatorsDefault;
    obj.updateSearchQuery(smartSearchQuery.searchContext, (setTextInputValue) => {
      setTextInputValue.setTextInputValue(suggestedSearchText.suggestedSearchText);
    });
    const obj2 = SearchPlatformUtilsDefault;
    const initialMessages = obj2.fetchInitialMessages(smartSearchQuery.searchContext);
    const obj3 = SuggestedSearchActionCreators;
    const result = obj3.advanceSuggestedSearches(smartSearchQuery.guildId, smartSearchQuery.channelIds, hasOwnProperty);
  }, items);
  let str2 = "redesign/channel-title/semibold";
  const Text = suggestedSearch(4886).Text;
  if ("default" === str) {
    str2 = "text-md/normal";
  }
  let compactLabel;
  const SearchListRow = tmp4(16807).SearchListRow;
  if ("compact" === str) {
    compactLabel = tmp.compactLabel;
  }
  let iconCircle;
  if ("default" === str) {
    iconCircle = tmp.iconCircle;
  }
  let obj3 = { style: iconCircle, children: jsx(tmp4(6548).MagnifyingGlassIcon, { size: "sm", color: "icon-muted" }) };
  return <SearchListRow onPress={callback} accessibilityLabel={suggestedSearch.suggestedSearchText} label={null} icon={null} />;
}));
size = size_mod;
let result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SuggestedSearchRow.tsx");

export default memoResult;