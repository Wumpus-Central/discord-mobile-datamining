// === Module 16889: ThreadsScreen ===

// Module 16889 (ThreadsScreen)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import ThreadConstants from "ThreadConstants" /* 1125 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 6471 */;
import navigateToThreadCreation from "navigateToThreadCreation" /* 11019 */;
import ThreadListDefault from "ThreadList" /* 16890 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let searchContext;

let obj2;
const View = react_native.View;
const SearchTypes = Constants.SearchTypes;
let closure_7 = ThreadConstants.OpenThreadAnalyticsLocations;
const jsx = Fragment.jsx;
let obj = { container: { flex: 1 }, screen: obj2 };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWER };
let closure_9 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let channel;
  let first;
  let style;
  let tmp7;
  let tmp8;
  let obj = channel(576);
  const cResult = obj.c(16);
  ({ style, channel } = arg0);
  const tmp3 = closure_9();
  let obj2 = channel(6772);
  const canStartThread = obj2.useCanStartThread(channel);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { includeKeyboardHeight: true };
    cResult[0] = obj3;
    first = obj3;
  } else {
    first = cResult[0];
  }
  const insets = useSafeAreaInsetsKeyboardAwareDefault(first).insets;
  if (cResult[1] !== channel) {
    const fn = function p() {
      const obj = navigateToThreadCreation;
      const result = obj.navigateToThreadCreation(channel, "Thread Browser Empty State");
    };
    cResult[1] = channel;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function _(arg0) {
      channel = channel.getChannel(arg0);
      if (null != channel) {
        const obj2 = { source: constants.BROWSER };
        const obj = channel(dependencyMap[13]);
        obj.transitionToThread(channel, obj2);
      }
    };
    cResult[3] = fn2;
    tmp8 = fn2;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] === style) {
    let tmp9;
    let tmp12;
    if (cResult[5] === tmp3.container) {
      tmp9 = cResult[6];
    }
    let tmp10;
    if (canStartThread) {
      tmp10 = tmp7;
    }
    const sum = insets.bottom + nativeDefault.space.PX_16;
    if (cResult[7] !== sum) {
      const obj4 = { paddingBottom: sum, paddingHorizontal: 16 };
      cResult[7] = sum;
      cResult[8] = obj4;
      tmp12 = obj4;
    } else {
      tmp12 = cResult[8];
    }
    if (cResult[9] === channel) {
      if (cResult[10] === tmp10) {
        let tmp13;
        if (cResult[11] === tmp12) {
          tmp13 = cResult[12];
        }
        if (cResult[13] === tmp9) {
          let tmp16;
          if (cResult[14] === tmp13) {
            tmp16 = cResult[15];
          }
          return tmp16;
        }
        const tmp19 = <View style={tmp9}>{tmp13}</View>;
        cResult[13] = tmp9;
        cResult[14] = tmp13;
        cResult[15] = tmp19;
        tmp16 = tmp19;
      }
    }
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
}) : ((channel) => {
  let tmp10;
  channel = channel.channel;
  const style = channel.style;
  const tmp = closure_9();
  let obj = channel(6772);
  const canStartThread = obj.useCanStartThread(channel);
  const items = [channel];
  const insets = useSafeAreaInsetsKeyboardAwareDefault({ includeKeyboardHeight: true }).insets;
  const callback = react.useCallback(() => {
    const obj = navigateToThreadCreation;
    const result = obj.navigateToThreadCreation(channel, "Thread Browser Empty State");
  }, items);
  const items1 = [tmp.container, style];
  const callback1 = react.useCallback((arg0) => {
    channel = channel.getChannel(arg0);
    if (null != channel) {
      const obj2 = { source: constants.BROWSER };
      const obj = channel(dependencyMap[13]);
      obj.transitionToThread(channel, obj2);
    }
  }, []);
  ({ channel, onCreateThreadPress: tmp10, onThreadPress: callback1, contentContainerStyle: { paddingBottom: insets.bottom + nativeDefault.space.PX_16, paddingHorizontal: 16 } });
  tmp10 = undefined;
  ThreadListDefault;
  if (canStartThread) {
    tmp10 = callback;
  }
  ({ paddingBottom: insets.bottom + nativeDefault.space.PX_16, paddingHorizontal: 16 });
  return <View style={items1}>{null}</View>;
});
const memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
const memo2 = react.memo;
const memoResult = memo(ReactCompilerGating.isReactCompilerEnabled() ? ((searchContext) => {
  let channelId;
  let first;
  let tmp8;
  const obj = channelId(576);
  const cResult = obj.c(5);
  searchContext = searchContext.searchContext;
  const tmp = channelId;
  if (searchContext.type === SearchTypes.CHANNEL) {
    channelId = searchContext.channelId;
  } else {
    channelId = null;
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function s() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const tmpResult = tmp(573);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp8);
  let tmp10 = null;
  if (null != stateFromStores) {
    let tmp11;
    if (cResult[3] !== stateFromStores) {
      const tmp14 = <closure_10 channel={stateFromStores} />;
      cResult[3] = stateFromStores;
      cResult[4] = tmp14;
      tmp11 = tmp14;
    } else {
      tmp11 = cResult[4];
    }
    tmp10 = tmp11;
  }
  return tmp10;
}) : ((searchContext) => {
  searchContext = searchContext.searchContext;
  let channelId;
  if (searchContext.type === SearchTypes.CHANNEL) {
    channelId = searchContext.channelId;
  } else {
    channelId = null;
  }
  const items = [ChannelStore];
  const obj = channelId(573);
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let tmp4 = null;
  if (null != stateFromStores) {
    tmp4 = <closure_10 channel={stateFromStores} />;
  }
  return tmp4;
}));
ReactCompilerGating = ReactCompilerGating_mod;
const memo2Result = memo2(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let channelId;
  let first;
  let tmp6;
  const obj = channelId(576);
  const cResult = obj.c(6);
  const obj2 = channelId(1491);
  const tmp = channelId;
  channelId = obj2.useRoute().params.channelId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== channelId) {
    const fn = function t() {
      return ChannelStore.getChannel(channelId);
    };
    cResult[1] = channelId;
    cResult[2] = fn;
    tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  const tmpResult = tmp(573);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
  const tmp8 = closure_9();
  let tmp9 = null;
  if (null != stateFromStores) {
    if (cResult[3] === stateFromStores) {
      let tmp10;
      if (cResult[4] === tmp8.screen) {
        tmp10 = cResult[5];
      }
      tmp9 = tmp10;
    }
    const tmp13 = <closure_10 style={tmp8.screen} channel={stateFromStores} />;
    cResult[3] = stateFromStores;
    cResult[4] = tmp8.screen;
    cResult[5] = tmp13;
    tmp10 = tmp13;
  }
  return tmp9;
}) : (() => {
  let channelId;
  const obj = channelId(1491);
  channelId = obj.useRoute().params.channelId;
  const items = [ChannelStore];
  const obj2 = channelId(573);
  const stateFromStores = obj2.useStateFromStores(items, () => ChannelStore.getChannel(channelId));
  let tmp3 = null;
  if (null != stateFromStores) {
    tmp3 = <closure_10 style={tmp2.screen} channel={stateFromStores} />;
  }
  return tmp3;
}));
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/sidebar/details/screens/ThreadsScreen.tsx");

export default memo2Result;
export const SearchTabsThreadScreen = memoResult;