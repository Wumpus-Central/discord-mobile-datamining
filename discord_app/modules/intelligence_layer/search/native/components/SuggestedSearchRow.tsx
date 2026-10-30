// discord_app/modules/intelligence_layer/search/native/components/SuggestedSearchRow.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import SearchPlatformUtilsDefault from "../../../../search/native/SearchPlatformUtils.tsx";
import SearchSessionAnalyticsManagerDefault from "../../../../search/managers/native/SearchSessionAnalyticsManager.tsx";
import SmartSearchAnalyticsManagerDefault from "../../SmartSearchAnalyticsManager.tsx";
import SearchPlatformActionCreatorsDefault from "../../../../search/native/SearchPlatformActionCreators.tsx";
import SuggestedSearchActionCreators from "../../SuggestedSearchActionCreators.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const SmartSearchConstants = fn(13838);
({ SUGGESTED_SEARCHES_WINDOW_SIZE: hasOwnProperty, SUGGESTED_SEARCH_COMPACT_LABEL_HEIGHT } = SmartSearchConstants);
const jsx = fn(21).jsx;
const createStyles = fn(5009);
let obj = { iconCircle: null, text: null, compactLabel: null };
let size = {
  width: 48,
  height: 48,
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  alignItems: "center",
  justifyContent: "center",
};
obj.iconCircle = size;
obj.text = { flexShrink: 1 };
obj.compactLabel = { height: SUGGESTED_SEARCH_COMPACT_LABEL_HEIGHT, justifyContent: "center", overflow: "hidden" };
let closure_7 = createStyles.createStyles(obj);
size = fn(2);
let result = size.fileFinishedImporting("modules/intelligence_layer/search/native/components/SuggestedSearchRow.tsx");

export default noop.memo(function SuggestedSearchRow(suggestedSearch) {
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
    const result = SmartSearchAnalyticsManagerDefault.trackSuggestedSearchStarted(
      { smartSearchQuery, suggestedSearch, suggestionSource, index, numSuggestedSearches },
      SearchSessionAnalyticsManagerDefault,
    );
    const obj2 = { smartSearchQuery, suggestedSearch, suggestionSource, index, numSuggestedSearches };
    SearchPlatformActionCreatorsDefault.updateSearchQuery(smartSearchQuery.searchContext, (setTextInputValue) => {
      setTextInputValue.setTextInputValue(suggestedSearchText.suggestedSearchText);
    });
    const initialMessages = SearchPlatformUtilsDefault.fetchInitialMessages(smartSearchQuery.searchContext);
    const result1 = SuggestedSearchActionCreators.advanceSuggestedSearches(
      smartSearchQuery,
      SearchSessionAnalyticsManagerDefault,
      hasOwnProperty,
    );
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
  obj2.label = (
    <numSuggestedSearches style={compactLabel}>
      {jsx(suggestedSearch(suggestionSource[11]).Text, {
        lineClamp: 2,
        variant: str2,
        color: "redesign-channel-name-muted-text",
        style: tmp.text,
        children: suggestedSearch.suggestedSearchText,
      })}
    </numSuggestedSearches>
  );
  let iconCircle;
  if ("default" === str) {
    iconCircle = tmp.iconCircle;
  }
  let obj = {
    lineClamp: 2,
    variant: str2,
    color: "redesign-channel-name-muted-text",
    style: tmp.text,
    children: suggestedSearch.suggestedSearchText,
  };
  const tmp3Result = jsx(suggestedSearch(suggestionSource[11]).Text, {
    lineClamp: 2,
    variant: str2,
    color: "redesign-channel-name-muted-text",
    style: tmp.text,
    children: suggestedSearch.suggestedSearchText,
  });
  obj2.icon = (
    <numSuggestedSearches style={iconCircle}>
      {jsx(suggestedSearch(suggestionSource[13]).MagnifyingGlassIcon, { size: "sm", color: "icon-muted" })}
    </numSuggestedSearches>
  );
  return jsx(suggestedSearch(suggestionSource[12]).SearchListRow, {
    onPress: callback,
    accessibilityLabel: suggestedSearch.suggestedSearchText,
    label: null,
    icon: null,
  });
});
