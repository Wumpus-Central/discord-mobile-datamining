// === Module 16870: ThreadsScreen ===

// Module 16870 (ThreadsScreen)
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6471 */;
import navigateToThreadCreation from "navigateToThreadCreation" /* 11019 */;
import ThreadListDefault from "ThreadList" /* 16871 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;

require = fn;
const View = fn(17).View;
const SearchTypes = fn(1085).SearchTypes;
let closure_7 = fn(1125).OpenThreadAnalyticsLocations;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj = { container: { flex: 1 }, screen: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER } };
let closure_9 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = channel(576).c(16);
  ({ style, channel } = arg0);
  const tmp3 = closure_9();
  let obj = channel(576);
  const canStartThread = channel(6772).useCanStartThread(channel);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { includeKeyboardHeight: true };
    cResult[0] = obj3;
    let first = obj3;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channel) {
    const fn = function p() {
      const result = navigateToThreadCreation.navigateToThreadCreation(channel, "Thread Browser Empty State");
    };
    cResult[1] = channel;
    cResult[2] = fn;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function _(arg0) {
      channel = channel.getChannel(arg0);
      if (null != channel) {
        const obj2 = { source: constants.BROWSER };
        channel(dependencyMap[13]).transitionToThread(channel, obj2);
        const obj = channel(dependencyMap[13]);
      }
    };
    cResult[3] = fn2;
    let tmp8 = fn2;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === style) {
    if (cResult[5] === tmp3.container) {
      let tmp9 = cResult[6];
    }
    let tmp10;
    if (canStartThread) {
      tmp10 = tmp7;
    }
    const sum = useSafeAreaInsetsKeyboardAwareDefault(first).insets.bottom + nativeDefault.space.PX_16;
    if (cResult[7] !== sum) {
      const obj4 = { paddingBottom: sum, paddingHorizontal: 16 };
      cResult[7] = sum;
      cResult[8] = obj4;
      let tmp12 = obj4;
    } else {
      tmp12 = cResult[8];
    }
    if (cResult[9] === channel) {
      if (cResult[10] === tmp10) {
        if (cResult[11] === tmp12) {
          let tmp13 = cResult[12];
        }
        if (cResult[13] === tmp9) {
          if (cResult[14] === tmp13) {
            let tmp16 = cResult[15];
          }
          return tmp16;
        }
        const obj5 = { style: tmp9, children: tmp13 };
        const tmp19 = <View style={tmp9}>{tmp13}</View>;
        cResult[13] = tmp9;
        cResult[14] = tmp13;
        cResult[15] = tmp19;
        tmp16 = tmp19;
      }
    }
    const obj6 = { channel, onCreateThreadPress: tmp10, onThreadPress: tmp8, contentContainerStyle: tmp12 };
    const tmp15 = jsx(ThreadListDefault, { channel, onCreateThreadPress: tmp10, onThreadPress: tmp8, contentContainerStyle: tmp12 });
    cResult[9] = channel;
    cResult[10] = tmp10;
    cResult[11] = tmp12;
    cResult[12] = tmp15;
    tmp13 = tmp15;
  }
  const items = [tmp3.container, style];
  cResult[4] = style;
  cResult[5] = tmp3.container;
  cResult[6] = items;
  tmp9 = items;
  let obj2 = channel(6772);
}) : ((channel) => {
  channel = channel.channel;
  const tmp = closure_9();
  const canStartThread = channel(6772).useCanStartThread(channel);
  const items = [channel];
  const callback = noop.useCallback(() => {
    const result = navigateToThreadCreation.navigateToThreadCreation(channel, "Thread Browser Empty State");
  }, items);
  let obj2 = { style: null, children: null };
  const items1 = [tmp.container, channel.style];
  obj2.style = items1;
  const callback1 = noop.useCallback((arg0) => {
    channel = channel.getChannel(arg0);
    if (null != channel) {
      const obj2 = { source: constants.BROWSER };
      channel(dependencyMap[13]).transitionToThread(channel, obj2);
      const obj = channel(dependencyMap[13]);
    }
  }, []);
  const obj3 = { channel, onCreateThreadPress: null, onThreadPress: null, contentContainerStyle: null };
  let tmp10;
  let obj = channel(6772);
  if (canStartThread) {
    tmp10 = callback;
  }
  obj3.onCreateThreadPress = tmp10;
  obj3.onThreadPress = callback1;
  obj3.contentContainerStyle = { paddingBottom: useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets.bottom + nativeDefault.space.PX_16, paddingHorizontal: 16 };
  obj2.children = <tmp9 channel={channel} onCreateThreadPress={null} onThreadPress={null} contentContainerStyle={null} />;
  return <View style={null}>{null}</View>;
});
fn(558);
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
ReactCompilerGating = fn(558);
const memoResult = noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((searchContext) => {
  const cResult = channelId(576).c(5);
  searchContext = searchContext.searchContext;
  if (searchContext.type === SearchTypes.CHANNEL) {
    channelId = searchContext.channelId;
  } else {
    channelId = null;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function s() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const obj = channelId(576);
  const stateFromStores = channelId(573).useStateFromStores(first, tmp8);
  if (null == stateFromStores) {
    return null;
  } else if (cResult[3] !== stateFromStores) {
    const obj2 = { channel: stateFromStores };
    const tmp13 = <closure_10 channel={stateFromStores} />;
    cResult[3] = stateFromStores;
    cResult[4] = tmp13;
  }
  const tmpResult = channelId(573);
}) : ((searchContext) => {
  searchContext = searchContext.searchContext;
  let channelId;
  if (searchContext.type === SearchTypes.CHANNEL) {
    channelId = searchContext.channelId;
  } else {
    channelId = null;
  }
  const items = [ChannelStore];
  const stateFromStores = channelId(573).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let tmp4 = null;
  if (null != stateFromStores) {
    const obj2 = { channel: stateFromStores };
    tmp4 = <closure_10 channel={stateFromStores} />;
  }
  return tmp4;
}));
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/screens/ThreadsScreen.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = channelId(576).c(6);
  const obj = channelId(576);
  const tmp = channelId;
  channelId = channelId(1491).useRoute().params.channelId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function t() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const obj2 = channelId(1491);
  const stateFromStores = tmp(573).useStateFromStores(first, tmp6);
  let screen = closure_9();
  if (null == stateFromStores) {
    return null;
  } else {
    if (cResult[3] === stateFromStores) {
    }
    const obj3 = { style: screen.screen, channel: stateFromStores };
    const tmp11 = <closure_10 style={screen.screen} channel={stateFromStores} />;
    cResult[3] = stateFromStores;
    screen = screen.screen;
    cResult[4] = screen;
    cResult[5] = tmp11;
  }
  const tmpResult = tmp(573);
}) : (() => {
  channelId = channelId(1491).useRoute().params.channelId;
  const obj = channelId(1491);
  const items = [ChannelStore];
  const stateFromStores = channelId(573).useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let tmp3 = null;
  if (null != stateFromStores) {
    const obj3 = { style: tmp2.screen, channel: stateFromStores };
    tmp3 = <closure_10 style={tmp2.screen} channel={stateFromStores} />;
  }
  return tmp3;
}));
export const SearchTabsThreadScreen = memoResult;