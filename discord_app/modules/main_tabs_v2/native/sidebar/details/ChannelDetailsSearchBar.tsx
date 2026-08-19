// discord_app/modules/main_tabs_v2/native/sidebar/details/ChannelDetailsSearchBar.tsx
import importAllResult from "../../../../../../_runtime/00019_noop.js";
import prototype from "../../../../search/native/stores/SearchQueryStore.tsx";
import { setIsChannelDetailsSearchActive as closure_5 } from "stores/ChannelDetailsStore.tsx";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

const require = fn;
let c3 = importAllResult;
let obj = { justifyContent: "center", height: require("SEARCH_BAR_HEIGHT").SEARCH_BAR_HEIGHT, paddingStart: require("ChannelDetailsNavigatorScreens").CHANNEL_DETAILS_MARGIN, paddingEnd: 8 };
obj[0] = obj;
let closure_7 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(importAllResult.forwardRef((channelId, ref) => {
  channelId = channelId.channelId;
  const onBackPress = channelId.onBackPress;
  let flag = channelId.showBackButton;
  ({ guildId, onSuggestionsLayoutMesure, suggestionsDismissed, setSuggestionsDismissed } = channelId);
  if (flag === undefined) {
    flag = true;
  }
  let channelDetailsSearchContext;
  let callback;
  let obj = channelId(channelDetailsSearchContext[7]);
  channelDetailsSearchContext = obj.useChannelDetailsSearchContext(channelId, guildId);
  const items = [channelId, channelDetailsSearchContext];
  const effect = callback.useEffect(() => () => {
    onBackPress(channelDetailsSearchContext[8]);
    const obj = { searchContext: closure_2 };
    obj.trackSearchClosed(obj);
  }, items);
  const items1 = [channelDetailsSearchContext];
  callback = callback.useCallback(() => {
    if (!callback1.isInitialSearchQuery(channelDetailsSearchContext)) {
      onBackPress(channelDetailsSearchContext[9]).updateSearchQuery(channelDetailsSearchContext, (reset) => reset.reset());
      const obj = onBackPress(channelDetailsSearchContext[9]);
    }
  }, items1);
  const items2 = [channelId, callback];
  const callback1 = callback.useCallback(() => {
    callback();
    closure_1_5(channelId, false, "action");
  }, items2);
  const items3 = [onBackPress, callback1, callback];
  const callback2 = callback.useCallback(() => {
    callback();
    if (undefined !== onBackPress) {
      onBackPress();
    } else {
      callback1();
    }
  }, items3);
  obj = { ref, searchContext: channelDetailsSearchContext, onSuggestionsLayoutMesure, suggestionsDismissed, setSuggestionsDismissed, backButton: null };
  let tmp9Result = null;
  const tmp = callback();
  if (flag) {
    obj = { accessibilityRole: "button", onPress: null, style: null, accessibilityLabel: null, children: null };
    obj[1] = callback2;
    obj[2] = tmp.back;
    const intl = tmp2(tmp3[12]).intl;
    obj[3] = intl.string(tmp2(tmp3[12]).t["13/7kX"]);
    obj[4] = jsx(tmp2(tmp3[13]).ChevronLargeLeftIcon, { size: "sm", color: "interactive-text-default" });
    tmp9Result = jsx(tmp2(tmp3[11]).PressableOpacity, { accessibilityRole: "button", onPress: null, style: null, accessibilityLabel: null, children: null });
  }
  obj[5] = tmp9Result;
  return jsx(onBackPress(channelDetailsSearchContext[10]), { ref, searchContext: channelDetailsSearchContext, onSuggestionsLayoutMesure, suggestionsDismissed, setSuggestionsDismissed, backButton: null });
}));
const result = require("obj132").fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/ChannelDetailsSearchBar.tsx");

export default memoResult;