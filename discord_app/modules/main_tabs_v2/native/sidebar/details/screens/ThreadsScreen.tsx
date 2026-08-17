// discord_app/modules/main_tabs_v2/native/sidebar/details/screens/ThreadsScreen.tsx
import ThemesDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsKeyboardAwareDefault from "../../../../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import ThreadListSectionDefault from "../../../../../threads/native/components/redesign/ThreadList.tsx";
import importAllResult from "../../../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../../../../../stores/ChannelStore.tsx";
import { SearchTypes } from "../../../../../../Constants.tsx";
import { OpenThreadAnalyticsLocations as closure_7 } from "../../../../../threads/ThreadConstants.tsx";
import { jsx } from "../../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
function ThreadsScreen(channel) {
  channel = channel.channel;
  let obj = channel(7234);
  const canStartThread = obj.useCanStartThread(channel);
  const items = [channel];
  const callback = importAllResult.useCallback(() => {
    const result = channel(closure_1_2[10]).navigateToThreadCreation(channel, "Thread Browser Empty State");
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
  const tmp9 = ThreadListSectionDefault;
  obj[3] = { paddingBottom: useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets.bottom + ThemesDefault.space.PX_16, paddingHorizontal: 16 };
  obj[1] = <tmp9 channel={channel} onCreateThreadPress={null} onThreadPress={null} contentContainerStyle={null} />;
  return <tmp8 channel={channel} onCreateThreadPress={null} onThreadPress={null} contentContainerStyle={null} />;
}
let c3 = importAllResult;
let obj = { container: { flex: 1 }, screen: null };
obj = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOWER };
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
  const items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_5.getChannel(channelId));
  let tmp4 = null;
  if (null != stateFromStores) {
    obj = { channel: null };
    obj[0] = stateFromStores;
    tmp4 = <ThreadsScreen channel={null} />;
  }
  return tmp4;
});
const memoResult1 = importAllResult.memo(() => {
  let obj = channelId(1501);
  channelId = obj.useRoute().params.channelId;
  const items = [closure_5];
  const stateFromStores = channelId(647).useStateFromStores(items, () => closure_1_5.getChannel(channelId));
  let tmp3 = null;
  if (null != stateFromStores) {
    obj = { style: null, channel: null };
    obj[0] = tmp2.screen;
    obj[1] = stateFromStores;
    tmp3 = <ThreadsScreen style={null} channel={null} />;
  }
  return tmp3;
});
let result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/screens/ThreadsScreen.tsx");

export default memoResult1;
export const SearchTabsThreadScreen = memoResult;