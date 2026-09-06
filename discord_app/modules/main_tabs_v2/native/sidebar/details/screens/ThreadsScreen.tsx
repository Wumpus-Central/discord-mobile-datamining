// discord_app/modules/main_tabs_v2/native/sidebar/details/screens/ThreadsScreen.tsx
import nativeDefault from "../../../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsKeyboardAwareDefault from "../../../../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import navigateToThreadCreation from "../../../../../threads/native/navigateToThreadCreation.tsx";
import ThreadListDefault from "../../../../../threads/native/components/redesign/ThreadList.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../../../stores/ChannelStore.tsx";

require = fn;
function ThreadsScreen(channel) {
  channel = channel.channel;
  let obj = channel(7269);
  const canStartThread = obj.useCanStartThread(channel);
  const items = [channel];
  const callback = noop.useCallback(() => {
    const result = navigateToThreadCreation.navigateToThreadCreation(channel, "Thread Browser Empty State");
  }, items);
  obj = { style: null, children: null };
  const items1 = [closure_9().container, channel.style];
  obj.style = items1;
  const callback1 = noop.useCallback((arg0) => {
    channel = channel.getChannel(arg0);
    if (null != channel) {
      channel(dependencyMap[11]);
      const obj = { source: constants.BROWSER };
      obj.transitionToThread(channel, obj);
    }
  }, []);
  obj = { channel, onCreateThreadPress: null, onThreadPress: null, contentContainerStyle: null };
  let tmp10;
  const tmp = closure_9();
  if (canStartThread) {
    tmp10 = callback;
  }
  obj.onCreateThreadPress = tmp10;
  obj.onThreadPress = callback1;
  obj.contentContainerStyle = {
    paddingBottom:
      useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets.bottom + nativeDefault.space.PX_16,
    paddingHorizontal: 16,
  };
  obj.children = (
    <tmp9 channel={channel} onCreateThreadPress={null} onThreadPress={null} contentContainerStyle={null} />
  );
  return <tmp8 channel={channel} onCreateThreadPress={null} onThreadPress={null} contentContainerStyle={null} />;
}
const View = fn(17).View;
const SearchTypes = fn(1074).SearchTypes;
let closure_7 = fn(1113).OpenThreadAnalyticsLocations;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let obj = { container: { flex: 1 }, screen: null };
obj = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
obj.screen = obj;
let closure_9 = createStyles.createStyles(obj);
const memoResult = noop.memo((searchContext) => {
  searchContext = searchContext.searchContext;
  let channelId;
  if (searchContext.type === SearchTypes.CHANNEL) {
    channelId = searchContext.channelId;
  } else {
    channelId = null;
  }
  let obj = channelId(563);
  const items = [ChannelStore];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let tmp4 = null;
  if (null != stateFromStores) {
    obj = { channel: stateFromStores };
    tmp4 = <ThreadsScreen channel={stateFromStores} />;
  }
  return tmp4;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/screens/ThreadsScreen.tsx");

export default noop.memo(() => {
  let obj = channelId(1484);
  channelId = obj.useRoute().params.channelId;
  const items = [ChannelStore];
  const stateFromStores = channelId(563).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let tmp3 = null;
  if (null != stateFromStores) {
    obj = { style: tmp2.screen, channel: stateFromStores };
    tmp3 = <ThreadsScreen style={tmp2.screen} channel={stateFromStores} />;
  }
  return tmp3;
});
export const SearchTabsThreadScreen = memoResult;
