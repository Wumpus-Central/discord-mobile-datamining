// discord_app/modules/intelligence_layer/search/native/components/SuggestedSearchRow.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import SearchPlatformUtilsDefault from "../../../../search/native/SearchPlatformUtils.tsx";
import SearchPlatformActionCreatorsDefault from "../../../../search/native/SearchPlatformActionCreators.tsx";
import SuggestedSearchActionCreators from "../../SuggestedSearchActionCreators.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const SmartSearchConstants = fn(12050);
({ SUGGESTED_SEARCHES_WINDOW_SIZE: hasOwnProperty, SUGGESTED_SEARCH_COMPACT_LABEL_HEIGHT } = SmartSearchConstants);
const jsx = fn(21).jsx;
const createStyles = fn(4866);
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
    const result = SuggestedSearchActionCreators.advanceSuggestedSearches(
      smartSearchQuery.guildId,
      smartSearchQuery.channelIds,
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
    <View style={compactLabel}>
      {jsx(suggestedSearch(4862).Text, {
        lineClamp: 2,
        variant: str2,
        color: "redesign-channel-name-muted-text",
        style: tmp.text,
        children: suggestedSearch.suggestedSearchText,
      })}
    </View>
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
  const tmp3Result = jsx(suggestedSearch(4862).Text, {
    lineClamp: 2,
    variant: str2,
    color: "redesign-channel-name-muted-text",
    style: tmp.text,
    children: suggestedSearch.suggestedSearchText,
  });
  obj2.icon = (
    <View style={iconCircle}>
      {jsx(suggestedSearch(6668).MagnifyingGlassIcon, { size: "sm", color: "icon-muted" })}
    </View>
  );
  return jsx(suggestedSearch(16677).SearchListRow, {
    onPress: callback,
    accessibilityLabel: suggestedSearch.suggestedSearchText,
    label: null,
    icon: null,
  });
});
