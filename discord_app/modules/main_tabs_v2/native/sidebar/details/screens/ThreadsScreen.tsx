// discord_app/modules/main_tabs_v2/native/sidebar/details/screens/ThreadsScreen.tsx
import importAllResult from "noop";
import { View } from "get ActivityIndicator";
import ensureGuildLoaded from "ensureGuildLoaded";
import { SearchTypes } from "ME";
import { OpenThreadAnalyticsLocations as closure_7 } from "AbortCodes";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { useSafeAreaInsetsKeyboardAware } from "../../../../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import { ThreadListSection } from "../../../../../threads/native/components/redesign/ThreadList.tsx";

const require = arg1;
function ThreadsScreen(channel) {
  channel = channel.channel;
  let obj = channel(5889);
  const canStartThread = obj.useCanStartThread(channel);
  const items = [channel];
  const callback = importAllResult.useCallback(() => {
    const result = channel(outer1_2[10]).navigateToThreadCreation(channel, "Thread Browser Empty State");
  }, items);
  obj = { style: items1, children: null };
  items1 = [callback().container, channel.style];
  const callback1 = importAllResult.useCallback((arg0) => {
    channel = channel.getChannel(arg0);
    if (null != channel) {
      let obj = channel(table[11]);
      obj = { source: null };
      obj[0] = constants.BROWSER;
      obj.transitionToThread(channel, obj);
    }
  }, []);
  obj = { channel, onCreateThreadPress: null, onThreadPress: null, contentContainerStyle: null };
  let tmp10;
  const tmp = callback();
  const tmp4 = importDefault;
  const tmp8 = View;
  if (canStartThread) {
    tmp10 = callback;
  }
  obj[1] = tmp10;
  obj[2] = callback1;
  const tmp9 = ThreadListSection;
  obj[3] = { paddingBottom: useSafeAreaInsetsKeyboardAware({ includeKeyboardHeight: true }).insets.bottom + tmp4(712).space.PX_16, paddingHorizontal: 16 };
  obj[1] = <tmp9 channel={channel} onCreateThreadPress={null} onThreadPress={null} contentContainerStyle={null} />;
  return <tmp8 channel={channel} onCreateThreadPress={null} onThreadPress={null} contentContainerStyle={null} />;
}
let c3 = importAllResult;
let obj = { container: { flex: 1 }, screen: null };
obj = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER };
obj[1] = obj;
let closure_9 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo((searchContext) => {
  searchContext = searchContext.searchContext;
  let channelId;
  if (searchContext.type === SearchTypes.CHANNEL) {
    channelId = searchContext.channelId;
  } else {
    channelId = null;
  }
  let obj = channelId(647);
  const items = [ensureGuildLoaded];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_5.getChannel(channelId));
  let tmp4 = null;
  if (null != stateFromStores) {
    obj = { channel: null };
    obj[0] = stateFromStores;
    tmp4 = <ThreadsScreen channel={null} />;
  }
  return tmp4;
});
const memoResult1 = importAllResult.memo(() => {
  let obj = channelId(1481);
  channelId = obj.useRoute().params.channelId;
  const items = [ensureGuildLoaded];
  const stateFromStores = channelId(647).useStateFromStores(items, () => outer1_5.getChannel(channelId));
  let tmp3 = null;
  if (null != stateFromStores) {
    obj = { style: null, channel: null };
    obj[0] = tmp2.screen;
    obj[1] = stateFromStores;
    tmp3 = <ThreadsScreen style={null} channel={null} />;
  }
  return tmp3;
});
let result = require("ensureGuildLoaded").fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/screens/ThreadsScreen.tsx");

export default memoResult1;
export const SearchTabsThreadScreen = memoResult;