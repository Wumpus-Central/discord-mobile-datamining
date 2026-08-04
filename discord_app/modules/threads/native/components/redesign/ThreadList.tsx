import noop from "noop";
import get_ActivityIndicator from "module_15661";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import set from "jsxProd";

let c4;
let c5;
const require = arg1;
function ThreadListSection(title) {
  const obj = { style: callback().section, accessibilityRole: "header", variant: "text-xs/bold", color: "text-default", children: null };
  obj[4] = title.title.toUpperCase();
  return jsx(require(4281) /* Text */.Text, { style: callback().section, accessibilityRole: "header", variant: "text-xs/bold", color: "text-default", children: null });
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
    return jsx(importDefault(15659), { threadId: null, onPress: null, start: null, end: null });
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
  let children;
  let contentContainerStyle;
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
    let obj = { opacity: null };
    const value = sharedValue.get();
    const fn = function t(arg0) {
      let tmp = arg0;
      if (arg0) {
        tmp = closure_1 === outer1_0(outer1_2[7]).TransitionStates.YEETED;
      }
      if (tmp) {
        outer1_0(outer1_2[6]).runOnJS(closure_0)();
        const obj = outer1_0(outer1_2[6]);
      }
    };
    obj = { state, TransitionStates: null, runOnJS: null, cleanUp: null };
    obj[1] = cleanUp(sharedValue[7]).TransitionStates;
    obj[2] = cleanUp(sharedValue[6]).runOnJS;
    obj[3] = cleanUp;
    fn.__closure = obj;
    fn.__workletHash = 2519144051135;
    fn.__initData = outer1_13;
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
  obj = { style: items1, children: null };
  items1 = [absoluteFill.absoluteFill, animatedStyle];
  obj[1] = <closure_5 style={contentContainerStyle}>{children}</closure_5>;
  return jsx(state(sharedValue[6]).View, { style: items1, children: null });
}
function getThreadListStateKey(arg0) {
  return arg0;
}
({ StyleSheet: c4, View: c5 } = get_ActivityIndicator);
let closure_7 = createCacheKey.createStyles({ container: { flex: 1, flexGrow: 1 }, center: { justifyContent: "center", alignItems: "center" }, header: { marginTop: 24, marginBottom: 10 }, footer: { marginVertical: 16, justifyContent: "center", alignItems: "center" }, section: { marginTop: 16, marginBottom: 8 } });
let set = new Set();
let closure_12 = { code: "function ThreadListTsx1(){const{withSpring,opacity,springStandard,state,TransitionStates,runOnJS,cleanUp}=this.__closure;return{opacity:withSpring(opacity.get(),springStandard,'respect-motion-settings',function(finished){if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}})};}" };
let closure_13 = { code: "function ThreadListTsx2(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
let closure_15 = { LIST: "list", EMPTY: "empty", LOADING: "loading" };
let result = set.fileFinishedImporting("modules/threads/native/components/redesign/ThreadList.tsx");

export default function ThreadList(onCreateThreadPress) {
  let channel;
  let onThreadPress;
  ({ channel, onThreadPress } = onCreateThreadPress);
  onCreateThreadPress = onCreateThreadPress.onCreateThreadPress;
  const contentContainerStyle = onCreateThreadPress.contentContainerStyle;
  let React;
  let joinedThreadIds;
  let unjoinedThreadIds;
  let threadIds;
  let canLoadMore;
  let loadMore;
  let loading;
  let callback;
  let memo;
  let memo2;
  let tmp = canLoadMore();
  React = tmp;
  let obj = onThreadPress(contentContainerStyle[10]);
  const activeThreads = obj.useActiveThreads(channel);
  joinedThreadIds = activeThreads.joinedThreadIds;
  unjoinedThreadIds = activeThreads.unjoinedThreadIds;
  const archivedThreads = onThreadPress(contentContainerStyle[10]).useArchivedThreads(channel, onThreadPress(contentContainerStyle[11]).ThreadSortOrder.LATEST_ACTIVITY, loadMore, onThreadPress(contentContainerStyle[12]).ThreadSearchTagSetting.MATCH_SOME);
  threadIds = archivedThreads.threadIds;
  canLoadMore = archivedThreads.canLoadMore;
  loadMore = archivedThreads.loadMore;
  loading = archivedThreads.loading;
  let items = [loading, canLoadMore, loadMore];
  callback = React.useCallback(() => {
    let tmp = !loading;
    if (!loading) {
      tmp = canLoadMore;
    }
    if (tmp) {
      loadMore();
    }
  }, items);
  let items1 = [threadIds, joinedThreadIds, onThreadPress, unjoinedThreadIds];
  memo = React.useMemo(() => {
    const items = [];
    let arr1 = joinedThreadIds;
    if (joinedThreadIds.length > 0) {
      let obj = { type: "section", title: null };
      const intl2 = onThreadPress(contentContainerStyle[13]).intl;
      obj = { count: null };
      obj[0] = arr1.length;
      obj[1] = intl2.formatToPlainString(onThreadPress(contentContainerStyle[13]).t.fcXlhe, obj);
      items.push(obj);
      const item = arr1.forEach((threadId) => items.push({ type: "thread", threadId, start: 0 === arg1, end: arg1 === outer1_4.length - 1, onPress: items }));
    }
    if (unjoinedThreadIds.length > 0) {
      const obj1 = { type: "section", title: null };
      const intl3 = onThreadPress(contentContainerStyle[13]).intl;
      const obj2 = { count: null };
      obj2[0] = arr3.length;
      obj1[1] = intl3.formatToPlainString(onThreadPress(contentContainerStyle[13]).t.GHY7yQ, obj2);
      items.push(obj1);
      const item1 = arr3.forEach((threadId) => items.push({ type: "thread", threadId, start: 0 === arg1, end: arg1 === outer1_5.length - 1, onPress: items }));
    }
    if (threadIds.length > 0) {
      obj = { type: "section", title: null };
      const intl = onThreadPress(contentContainerStyle[13]).intl;
      obj[1] = intl.string(onThreadPress(contentContainerStyle[13]).t.XsgrjS);
      arr1 = items.push(obj);
      const item2 = threadIds.forEach((threadId) => items.push({ type: "thread", threadId, start: 0 === arg1, end: arg1 === outer1_6.length - 1, onPress: items }));
    }
    return items;
  }, items1);
  let items2 = [memo.length, loading];
  const items3 = [onCreateThreadPress];
  const memo1 = React.useMemo(() => {
    if (loading) {
      if (0 === memo.length) {
        const items = [outer1_15.LOADING];
        let items2 = items;
      }
      return items2;
    }
    if (0 === memo.length) {
      const items1 = [outer1_15.EMPTY];
      items2 = items1;
    } else {
      items2 = [outer1_15.LIST];
    }
  }, items2);
  memo2 = React.useMemo(() => {
    let tmp2 = null;
    if (null != onCreateThreadPress) {
      let obj = { icon: null, onPress: null, label: null, start: true, end: true, arrow: true };
      obj = { IconComponent: null };
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
    if (outer1_15.EMPTY === arg1) {
      let obj = { contentContainerStyle: null, state: null, cleanUp: null, children: null };
      obj[0] = _undefined.container;
      obj[1] = arg2;
      obj[2] = arg3;
      obj = { onCreateThreadPress: null };
      obj[0] = onCreateThreadPress;
      obj[3] = threadIds(onCreateThreadPress(contentContainerStyle[17]), obj);
      return threadIds(outer1_14, obj, arg0);
    } else if (tmp.LOADING === arg1) {
      const obj1 = { contentContainerStyle: null, state: null, cleanUp: null, children: null };
      const items = [, ];
      ({ container: arr[0], center: arr[1] } = _undefined);
      obj1[0] = items;
      obj1[1] = arg2;
      obj1[2] = arg3;
      obj1[3] = threadIds(onCreateThreadPress(contentContainerStyle[18]), {});
      return threadIds(outer1_14, obj1, arg0);
    } else if (tmp.LIST === arg1) {
      obj = { contentContainerStyle: null, state: null, cleanUp: null, children: null };
      obj[0] = _undefined.container;
      obj[1] = arg2;
      obj[2] = arg3;
      const obj2 = { data: null, ListHeaderComponent: null, ListHeaderComponentStyle: null, renderItem: null, keyExtractor: null, onEndReached: null, onEndReachedThreshold: 0.4, accessibilityLabel: null, ListFooterComponent: null, ListFooterComponentStyle: null, contentContainerStyle: null };
      obj2[0] = memo;
      obj2[1] = memo2;
      obj2[2] = _undefined.header;
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
        footer = _undefined.footer;
      }
      obj2[9] = footer;
      obj2[10] = contentContainerStyle;
      obj[3] = threadIds(onThreadPress(contentContainerStyle[19]).AnimatedFlashList, obj2);
      return threadIds(outer1_14, obj, arg0);
    }
  }, items4);
  obj = { items: memo1, renderItem: callback1, getItemKey: getThreadListStateKey };
  return threadIds(onThreadPress(contentContainerStyle[7]).TransitionGroup, obj);
};