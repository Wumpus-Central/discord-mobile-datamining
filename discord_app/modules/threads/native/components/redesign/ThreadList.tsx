// === Module 16704: ThreadList ===

// Module 16704 (ThreadList)
import util from "util" /* 1114 */;
import native from "native" /* 4271 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4296 */;
import Text_Text from "Text/Text" /* 4556 */;
import spring from "spring" /* 4974 */;
import springPresets from "springPresets" /* 4978 */;
import TableRow from "TableRow" /* 5605 */;
import RowButton from "RowButton" /* 8595 */;
import _mod8874 from "module_8874" /* 8874 */;
import ThreadPlusIcon from "ThreadPlusIcon" /* 12237 */;
import ThreadListTableRowDefault from "ThreadListTableRow" /* 16705 */;
import ThreadListEmptyDefault from "ThreadListEmpty" /* 16707 */;
import ThreadListLoadingIndicatorDefault from "ThreadListLoadingIndicator" /* 16708 */;
import noop from "module_19" /* 19 */;

require = fn;
function ThreadListSection(title) {
  const tmp = closure_7();
  return jsx(Text_Text.Text, { style: closure_7().section, accessibilityRole: "header", variant: "text-xs/bold", color: "text-default", children: title.title.toUpperCase() });
}
function renderItem(item) {
  item = item.item;
  const type = item.type;
  if ("section" === type) {
    let obj = { title: item.title };
    return <ThreadListSection title={item.title} />;
  } else if ("thread" === type) {
    obj = { threadId: null, onPress: null, start: null, end: null };
    ({ threadId: obj.threadId, onPress: obj.onPress, start: obj.start, end: obj.end } = item);
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
    let obj = { opacity: null };
    value = sharedValue.get();
    const fn = function t(arg0) {
      let tmp = arg0;
      if (arg0) {
        tmp = state === cleanUp(sharedValue[7]).TransitionStates.YEETED;
      }
      if (tmp) {
        cleanUp(sharedValue[6]).runOnJS(closure_1_0)();
        const obj = cleanUp(sharedValue[6]);
      }
    };
    obj = { state, TransitionStates: native.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, cleanUp };
    fn.__closure = obj;
    fn.__workletHash = 2519144051135;
    fn.__initData = __initData;
    obj.opacity = spring.withSpring(value, springPresets.springStandard, "respect-motion-settings", fn);
    return obj;
  };
  obj = { withSpring: tmp(tmp2[8]).withSpring, opacity: sharedValue, springStandard: tmp(tmp2[9]).springStandard, state, TransitionStates: tmp(tmp2[7]).TransitionStates, runOnJS: tmp(tmp2[6]).runOnJS, cleanUp };
  fn.__closure = obj;
  fn.__workletHash = 5037750127944;
  fn.__initData = __initData;
  const items = [sharedValue, state];
  const animatedStyle = cleanUp(sharedValue[6]).useAnimatedStyle(fn);
  const effect = noop.useEffect(() => {
    let num = 1;
    if (state === native.TransitionStates.YEETED) {
      num = 0;
    }
    const result = sharedValue.set(num);
  }, items);
  obj = { style: null, children: <closure_5 style={contentContainerStyle}>{children}</closure_5> };
  const items1 = [absoluteFill.absoluteFill, animatedStyle];
  obj.style = items1;
  return jsx(state(sharedValue[6]).View, { style: null, children: <closure_5 style={contentContainerStyle}>{children}</closure_5> });
}
function getThreadListStateKey(arg0) {
  return arg0;
}
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles({ container: { flex: 1, flexGrow: 1 }, center: { justifyContent: "center", alignItems: "center" }, header: { marginTop: 24, marginBottom: 10 }, footer: { marginVertical: 16, justifyContent: "center", alignItems: "center" }, section: { marginTop: 16, marginBottom: 8 } });
const set = new Set();
const __initData = { code: "function ThreadListTsx1(){const{withSpring,opacity,springStandard,state,TransitionStates,runOnJS,cleanUp}=this.__closure;return{opacity:withSpring(opacity.get(),springStandard,'respect-motion-settings',function(finished){if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}})};}" };
let closure_13 = { code: "function ThreadListTsx2(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
let closure_15 = { LIST: "list", EMPTY: "empty", LOADING: "loading" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/threads/native/components/redesign/ThreadList.tsx");

export default function ThreadList(onCreateThreadPress) {
  ({ channel, onThreadPress } = onCreateThreadPress);
  onCreateThreadPress = onCreateThreadPress.onCreateThreadPress;
  const contentContainerStyle = onCreateThreadPress.contentContainerStyle;
  let canLoadMore;
  let loadMore;
  let tmp = canLoadMore();
  noop = tmp;
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
  const onEndReached = noop.useCallback(() => {
    let tmp = !loading;
    if (!loading) {
      tmp = canLoadMore;
    }
    if (tmp) {
      loadMore();
    }
  }, items);
  let items1 = [threadIds, joinedThreadIds, onThreadPress, unjoinedThreadIds];
  const memo = noop.useMemo(() => {
    const items = [];
    let arr1 = joinedThreadIds;
    if (joinedThreadIds.length > 0) {
      let obj = { type: "section", title: null };
      const intl2 = onThreadPress(contentContainerStyle[13]).intl;
      obj = { count: arr1.length };
      obj.title = intl2.formatToPlainString(onThreadPress(contentContainerStyle[13]).t.fcXlhe, obj);
      items.push(obj);
      const item = arr1.forEach((threadId, index) => items.push({ type: "thread", threadId, start: 0 === index, end: index === joinedThreadIds.length - 1, onPress: onThreadPress }));
    }
    if (unjoinedThreadIds.length > 0) {
      const obj1 = { type: "section", title: null };
      const intl3 = onThreadPress(contentContainerStyle[13]).intl;
      const obj2 = { count: arr3.length };
      obj1.title = intl3.formatToPlainString(onThreadPress(contentContainerStyle[13]).t.GHY7yQ, obj2);
      items.push(obj1);
      const item1 = arr3.forEach((threadId, index) => items.push({ type: "thread", threadId, start: 0 === index, end: index === unjoinedThreadIds.length - 1, onPress: onThreadPress }));
    }
    if (threadIds.length > 0) {
      obj = { type: "section", title: null };
      const intl = onThreadPress(contentContainerStyle[13]).intl;
      obj.title = intl.string(onThreadPress(contentContainerStyle[13]).t.XsgrjS);
      arr1 = items.push(obj);
      const item2 = threadIds.forEach((threadId, index) => items.push({ type: "thread", threadId, start: 0 === index, end: index === threadIds.length - 1, onPress: onThreadPress }));
    }
    return items;
  }, items1);
  let items2 = [memo.length, loading];
  const items3 = [onCreateThreadPress];
  const memo1 = noop.useMemo(() => {
    if (loading) {
      if (0 === memo.length) {
        const items = [constants.LOADING];
        let items2 = items;
      }
      return items2;
    }
    if (0 === memo.length) {
      const items1 = [constants.EMPTY];
      items2 = items1;
    } else {
      items2 = [constants.LIST];
    }
  }, items2);
  const memo2 = noop.useMemo(() => {
    let tmp2 = null;
    if (null != onCreateThreadPress) {
      let obj = { icon: null, onPress: null, label: null, start: true, end: true, arrow: true };
      obj = { IconComponent: ThreadPlusIcon.ThreadPlusIcon };
      obj.icon = jsx(RowButton.RowButton.Icon, { IconComponent: ThreadPlusIcon.ThreadPlusIcon });
      obj.onPress = tmp;
      const intl = util.intl;
      obj.label = intl.string(util.t.rBIGBL);
      tmp2 = jsx(TableRow.TableRow, { IconComponent: ThreadPlusIcon.ThreadPlusIcon });
    }
    return tmp2;
  }, items3);
  const items4 = [, , , , , , , , , ];
  ({ container: arr6[0], center: arr6[1], header: arr6[2], footer: arr6[3] } = tmp);
  items4[4] = onCreateThreadPress;
  items4[5] = memo;
  items4[6] = memo2;
  items4[7] = onEndReached;
  items4[8] = loading;
  items4[9] = contentContainerStyle;
  const callback1 = noop.useCallback((arg0, arg1, state, cleanUp) => {
    if (constants.EMPTY === arg1) {
      let obj = { contentContainerStyle: closure_3.container, state, cleanUp, children: null };
      obj = { onCreateThreadPress };
      obj.children = jsx(ThreadListEmptyDefault, { onCreateThreadPress });
      return <EnterExitCrossFadeContainer key={arg0} onCreateThreadPress={onCreateThreadPress} />;
    } else if (tmp.LOADING === arg1) {
      const obj1 = { contentContainerStyle: null, state: null, cleanUp: null, children: null };
      const items = [, ];
      ({ container: arr[0], center: arr[1] } = closure_3);
      obj1.contentContainerStyle = items;
      obj1.state = state;
      obj1.cleanUp = cleanUp;
      obj1.children = jsx(ThreadListLoadingIndicatorDefault, {});
      return <EnterExitCrossFadeContainer key={arg0} contentContainerStyle={null} state={null} cleanUp={null}>{null}</EnterExitCrossFadeContainer>;
    } else if (tmp.LIST === arg1) {
      obj = { contentContainerStyle: closure_3.container, state, cleanUp, children: null };
      const obj2 = { data: memo, ListHeaderComponent: memo2, ListHeaderComponentStyle: closure_3.header, renderItem, keyExtractor, onEndReached, onEndReachedThreshold: 0.4, accessibilityLabel: null, ListFooterComponent: null, ListFooterComponentStyle: null, contentContainerStyle: null };
      const intl = util.intl;
      obj2.accessibilityLabel = intl.string(util.t.B2panI);
      let tmp13;
      if (loading) {
        tmp13 = ThreadListLoadingIndicatorDefault;
      }
      obj2.ListFooterComponent = tmp13;
      let footer;
      if (loading) {
        footer = closure_3.footer;
      }
      obj2.ListFooterComponentStyle = footer;
      obj2.contentContainerStyle = contentContainerStyle;
      obj.children = jsx(_mod8874.AnimatedFlashList, { data: memo, ListHeaderComponent: memo2, ListHeaderComponentStyle: closure_3.header, renderItem, keyExtractor, onEndReached, onEndReachedThreshold: 0.4, accessibilityLabel: null, ListFooterComponent: null, ListFooterComponentStyle: null, contentContainerStyle: null });
      return <EnterExitCrossFadeContainer key={arg0} contentContainerStyle={closure_3.container} state={arg2} cleanUp={arg3}>{null}</EnterExitCrossFadeContainer>;
    }
  }, items4);
  obj = { items: memo1, renderItem: callback1, getItemKey: getThreadListStateKey };
  return threadIds(onThreadPress(contentContainerStyle[7]).TransitionGroup, obj);
};