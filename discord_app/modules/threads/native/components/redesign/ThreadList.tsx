// discord_app/modules/threads/native/components/redesign/ThreadList.tsx
import Text from "../../../../../design/components/Text/native/Text.tsx";
import ThreadListTableRowDefault from "ThreadListTableRow.tsx";
import noop from "../../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

require = fn;
function ThreadListSection(title) {
  const tmp = callback();
  return jsx(Text.Text, { style: callback().section, accessibilityRole: "header", variant: "text-xs/bold", color: "text-default", children: title.title.toUpperCase() });
}
function renderItem(item) {
  item = item.item;
  const type = item.type;
  if ("section" === type) {
    let obj = { title: null };
    obj[0] = item.title;
    return <ThreadListSection title={null} />;
  } else if ("thread" === type) {
    obj = { threadId: null, onPress: null, start: null, end: null };
    ({ threadId: obj[0], onPress: obj[1], start: obj[2], end: obj[3] } = item);
    return jsx(ThreadListTableRowDefault, { threadId: null, onPress: null, start: null, end: null });
  }
}
function keyExtractor(type) {
  type = type.type;
  if ("section" === type) {
    return type.title;
  } else {
    return "thread" === type ? type.threadId : undefined;
  }
}
function EnterExitCrossFadeContainer(cleanUp) {
  cleanUp = cleanUp.cleanUp;
  const state = cleanUp.state;
  let sharedValue;
  ({ contentContainerStyle, children } = cleanUp);
  let obj = cleanUp(sharedValue[6]);
  let num = 0;
  if (state === cleanUp(sharedValue[7]).TransitionStates.MOUNTED) {
    num = 1;
  }
  sharedValue = obj.useSharedValue(num);
  let fn = function p() {
    const value = sharedValue.get();
    const fn = function t(arg0) {
      let tmp = arg0;
      if (arg0) {
        tmp = closure_1 === cleanUp(sharedValue[7]).TransitionStates.YEETED;
      }
      if (tmp) {
        cleanUp(sharedValue[6]).runOnJS(closure_0)();
        const obj = cleanUp(sharedValue[6]);
      }
    };
    let obj = { state, TransitionStates: cleanUp(sharedValue[7]).TransitionStates, runOnJS: cleanUp(sharedValue[6]).runOnJS, cleanUp };
    fn.__closure = obj;
    fn.__workletHash = 2519144051135;
    fn.__initData = closure_1_13;
    obj[0] = cleanUp(sharedValue[8]).withSpring(value, cleanUp(sharedValue[9]).springStandard, "respect-motion-settings", fn);
    return obj;
  };
  obj = { withSpring: tmp(tmp2[8]).withSpring, opacity: sharedValue, springStandard: tmp(tmp2[9]).springStandard, state, TransitionStates: tmp(tmp2[7]).TransitionStates, runOnJS: tmp(tmp2[6]).runOnJS, cleanUp };
  fn.__closure = obj;
  fn.__workletHash = 5037750127944;
  fn.__initData = closure_12;
  const items = [sharedValue, state];
  const animatedStyle = cleanUp(sharedValue[6]).useAnimatedStyle(fn);
  const effect = React.useEffect(() => {
    let num = 1;
    if (state === cleanUp(sharedValue[7]).TransitionStates.YEETED) {
      num = 0;
    }
    const result = sharedValue.set(num);
  }, items);
  obj = { style: items1, children: <closure_5 style={contentContainerStyle}>{children}</closure_5> };
  items1 = [absoluteFill.absoluteFill, animatedStyle];
  return jsx(state(sharedValue[6]).View, { style: items1, children: <closure_5 style={contentContainerStyle}>{children}</closure_5> });
}
function getThreadListStateKey(arg0) {
  return arg0;
}
({ StyleSheet: c4, View: c5 } = get_ActivityIndicator);
let closure_7 = createCacheKey.createStyles({ container: { flex: 1, flexGrow: 1 }, center: { justifyContent: "center", alignItems: "center" }, header: { marginTop: 24, marginBottom: 10 }, footer: { marginVertical: 16, justifyContent: "center", alignItems: "center" }, section: { marginTop: 16, marginBottom: 8 } });
const set = new Set();
let closure_12 = { code: "function ThreadListTsx1(){const{withSpring,opacity,springStandard,state,TransitionStates,runOnJS,cleanUp}=this.__closure;return{opacity:withSpring(opacity.get(),springStandard,'respect-motion-settings',function(finished){if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}})};}" };
let closure_13 = { code: "function ThreadListTsx2(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
let closure_15 = { LIST: "list", EMPTY: "empty", LOADING: "loading" };
let result = require("obj132").fileFinishedImporting("modules/threads/native/components/redesign/ThreadList.tsx");

export default function ThreadList(onCreateThreadPress) {
  ({ channel, onThreadPress } = onCreateThreadPress);
  onCreateThreadPress = onCreateThreadPress.onCreateThreadPress;
  const contentContainerStyle = onCreateThreadPress.contentContainerStyle;
  let canLoadMore;
  let loadMore;
  let tmp = canLoadMore();
  const React = tmp;
  let obj = onThreadPress(contentContainerStyle[10]);
  const activeThreads = obj.useActiveThreads(channel);
  const joinedThreadIds = activeThreads.joinedThreadIds;
  const unjoinedThreadIds = activeThreads.unjoinedThreadIds;
  const archivedThreads = onThreadPress(contentContainerStyle[10]).useArchivedThreads(channel, onThreadPress(contentContainerStyle[11]).ThreadSortOrder.LATEST_ACTIVITY, loadMore, onThreadPress(contentContainerStyle[12]).ThreadSearchTagSetting.MATCH_SOME);
  const threadIds = archivedThreads.threadIds;
  canLoadMore = archivedThreads.canLoadMore;
  loadMore = archivedThreads.loadMore;
  const loading = archivedThreads.loading;
  let items = [loading, canLoadMore, loadMore];
  const callback = React.useCallback(() => {
    let tmp = !loading;
    if (!loading) {
      tmp = canLoadMore;
    }
    if (tmp) {
      loadMore();
    }
  }, items);
  let items1 = [threadIds, joinedThreadIds, onThreadPress, unjoinedThreadIds];
  const memo = React.useMemo(() => {
    const items = [];
    let arr1 = joinedThreadIds;
    if (joinedThreadIds.length > 0) {
      const intl2 = onThreadPress(contentContainerStyle[13]).intl;
      let obj = { count: null };
      obj[0] = arr1.length;
      obj[1] = intl2.formatToPlainString(onThreadPress(contentContainerStyle[13]).t.fcXlhe, obj);
      items.push(obj);
      const item = arr1.forEach((item, index) => items.push({ type: "thread", threadId: item, start: 0 === index, end: index === joinedThreadIds.length - 1, onPress: items }));
    }
    if (unjoinedThreadIds.length > 0) {
      obj1 = { type: "section", title: null };
      const intl3 = onThreadPress(contentContainerStyle[13]).intl;
      const obj2 = { count: null };
      obj2[0] = unjoinedThreadIds.length;
      obj1[1] = intl3.formatToPlainString(onThreadPress(contentContainerStyle[13]).t.GHY7yQ, obj2);
      items.push(obj1);
      const item1 = unjoinedThreadIds.forEach((item, index) => items.push({ type: "thread", threadId: item, start: 0 === index, end: index === unjoinedThreadIds.length - 1, onPress: items }));
    }
    if (threadIds.length > 0) {
      obj = { type: "section", title: null };
      const intl = onThreadPress(contentContainerStyle[13]).intl;
      obj[1] = intl.string(onThreadPress(contentContainerStyle[13]).t.XsgrjS);
      arr1 = items.push(obj);
      const item2 = threadIds.forEach((item, index) => items.push({ type: "thread", threadId: item, start: 0 === index, end: index === threadIds.length - 1, onPress: items }));
    }
    return items;
  }, items1);
  let items2 = [memo.length, loading];
  const items3 = [onCreateThreadPress];
  const memo1 = React.useMemo(() => {
    if (loading) {
      if (0 === memo.length) {
        const items = [closure_1_15.LOADING];
        let items2 = items;
      }
      return items2;
    }
    if (0 === memo.length) {
      const items1 = [closure_1_15.EMPTY];
      items2 = items1;
    } else {
      items2 = [closure_1_15.LIST];
    }
  }, items2);
  const memo2 = React.useMemo(() => {
    let tmp2 = null;
    if (null != onCreateThreadPress) {
      const obj = { IconComponent: null };
      obj[0] = onThreadPress(contentContainerStyle[16]).ThreadPlusIcon;
      obj[0] = threadIds(onThreadPress(contentContainerStyle[15]).RowButton.Icon, obj);
      obj[1] = tmp;
      const intl = onThreadPress(contentContainerStyle[13]).intl;
      obj[2] = intl.string(onThreadPress(contentContainerStyle[13]).t.rBIGBL);
      tmp2 = threadIds(onThreadPress(contentContainerStyle[14]).TableRow, obj);
    }
    return tmp2;
  }, items3);
  const items4 = [, , , , , , , , , ];
  ({ container: arr6[0], center: arr6[1], header: arr6[2], footer: arr6[3] } = tmp);
  items4[4] = onCreateThreadPress;
  items4[5] = memo;
  items4[6] = memo2;
  items4[7] = callback;
  items4[8] = loading;
  items4[9] = contentContainerStyle;
  const callback1 = React.useCallback((arg0, arg1, arg2, arg3) => {
    if (closure_1_15.EMPTY === arg1) {
      let obj = { contentContainerStyle: null, state: null, cleanUp: null, children: null };
      obj[0] = closure_3.container;
      obj[1] = arg2;
      obj[2] = arg3;
      obj = { onCreateThreadPress: null };
      obj[0] = onCreateThreadPress;
      obj[3] = threadIds(onCreateThreadPress(contentContainerStyle[17]), obj);
      return threadIds(EnterExitCrossFadeContainer, obj, arg0);
    } else if (closure_1_15.LOADING === arg1) {
      obj1 = { contentContainerStyle: null, state: null, cleanUp: null, children: null };
      const items = [, ];
      ({ container: arr[0], center: arr[1] } = closure_3);
      obj1[0] = items;
      obj1[1] = arg2;
      obj1[2] = arg3;
      obj1[3] = threadIds(onCreateThreadPress(contentContainerStyle[18]), {});
      return threadIds(EnterExitCrossFadeContainer, obj1, arg0);
    } else if (closure_1_15.LIST === arg1) {
      obj = { contentContainerStyle: null, state: null, cleanUp: null, children: null };
      obj[0] = closure_3.container;
      obj[1] = arg2;
      obj[2] = arg3;
      const obj2 = { data: null, ListHeaderComponent: null, ListHeaderComponentStyle: null, renderItem: null, keyExtractor: null, onEndReached: null, onEndReachedThreshold: 0.4, accessibilityLabel: null, ListFooterComponent: null, ListFooterComponentStyle: null, contentContainerStyle: null };
      obj2[0] = memo;
      obj2[1] = memo2;
      obj2[2] = closure_3.header;
      obj2[3] = callback;
      obj2[4] = memo;
      obj2[5] = callback;
      const intl = onThreadPress(contentContainerStyle[13]).intl;
      obj2[7] = intl.string(onThreadPress(contentContainerStyle[13]).t.B2panI);
      let tmp13;
      if (loading) {
        tmp13 = onCreateThreadPress(contentContainerStyle[18]);
      }
      obj2[8] = tmp13;
      let footer;
      if (loading) {
        footer = closure_3.footer;
      }
      obj2[9] = footer;
      obj2[10] = contentContainerStyle;
      obj[3] = threadIds(onThreadPress(contentContainerStyle[19]).AnimatedFlashList, obj2);
      return threadIds(EnterExitCrossFadeContainer, obj, arg0);
    }
  }, items4);
  obj = { items: memo1, renderItem: callback1, getItemKey: getThreadListStateKey };
  return threadIds(onThreadPress(contentContainerStyle[7]).TransitionGroup, obj);
};