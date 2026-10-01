// === Module 16699: SuggestedSearchRow ===

// Module 16699 (SuggestedSearchRow)
import nativeDefault from "native" /* 576 */;
import SearchPlatformUtilsDefault from "SearchPlatformUtils" /* 12031 */;
import SearchPlatformActionCreatorsDefault from "SearchPlatformActionCreators" /* 12055 */;
import SuggestedSearchActionCreators from "SuggestedSearchActionCreators" /* 12071 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const SmartSearchConstants = fn(12058);
({ SUGGESTED_SEARCHES_WINDOW_SIZE: hasOwnProperty, SUGGESTED_SEARCH_COMPACT_LABEL_HEIGHT } = SmartSearchConstants);
const jsx = fn(21).jsx;
const createStyles = fn(4845);
let obj = { iconCircle: null, text: null, compactLabel: null };
let size = { width: 48, height: 48, borderRadius: nativeDefault.radii.round, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, alignItems: "center", justifyContent: "center" };
obj.iconCircle = size;
obj.text = { flexShrink: 1 };
obj.compactLabel = { height: SUGGESTED_SEARCH_COMPACT_LABEL_HEIGHT, justifyContent: "center", overflow: "hidden" };
let closure_7 = createStyles.createStyles(obj);
size = fn(2);
let result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SuggestedSearchRow.tsx");

export default noop.memo((suggestedSearch) => {
  suggestedSearch = suggestedSearch.suggestedSearch;
  const smartSearchQuery = suggestedSearch.smartSearchQuery;
  let str = suggestedSearch.variant;
  if (str === undefined) {
    str = "default";
  }
  const tmp = closure_7();
  const items = [smartSearchQuery, suggestedSearch.suggestedSearchText];
  const callback = noop.useCallback(() => {
    SearchPlatformActionCreatorsDefault.updateSearchQuery(smartSearchQuery.searchContext, (setTextInputValue) => {
      setTextInputValue.setTextInputValue(suggestedSearchText.suggestedSearchText);
    });
    const initialMessages = SearchPlatformUtilsDefault.fetchInitialMessages(smartSearchQuery.searchContext);
    const result = SuggestedSearchActionCreators.advanceSuggestedSearches(smartSearchQuery.guildId, smartSearchQuery.channelIds, hasOwnProperty);
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
  obj2.label = <View style={compactLabel}>{jsx(suggestedSearch(4841).Text, { lineClamp: 2, variant: str2, color: "redesign-channel-name-muted-text", style: tmp.text, children: suggestedSearch.suggestedSearchText })}</View>;
  let iconCircle;
  if ("default" === str) {
    iconCircle = tmp.iconCircle;
  }
  let obj = { lineClamp: 2, variant: str2, color: "redesign-channel-name-muted-text", style: tmp.text, children: suggestedSearch.suggestedSearchText };
  const tmp3Result = jsx(suggestedSearch(4841).Text, { lineClamp: 2, variant: str2, color: "redesign-channel-name-muted-text", style: tmp.text, children: suggestedSearch.suggestedSearchText });
  obj2.icon = <View style={iconCircle}>{jsx(suggestedSearch(6658).MagnifyingGlassIcon, { size: "sm", color: "icon-muted" })}</View>;
  return jsx(suggestedSearch(16700).SearchListRow, { onPress: callback, accessibilityLabel: suggestedSearch.suggestedSearchText, label: null, icon: null });
});