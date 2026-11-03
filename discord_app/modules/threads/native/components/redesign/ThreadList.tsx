// discord_app/modules/threads/native/components/redesign/ThreadList.tsx
import util from "../../../../../intl/index.native.tsx";
import _modDef1652 from "../../../../../../_runtime/metro/01652__.js";
import native from "../../../../../../discord_common/js/packages/design/native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import TableRow from "../../../../../design/components/TableRow/native/TableRow.native.tsx";
import _mod7414 from "../../../../../../discord_common/js/packages/flash-list/index.js";
import RowButton from "../../../../../design/components/TableRow/native/RowButton.native.tsx";
import ThreadPlusIcon from "../../../../../design/components/Icon/native/redesign/generated/ThreadPlusIcon.tsx";
import ThreadListTableRowDefault from "ThreadListTableRow.tsx";
import ThreadListEmptyDefault from "ThreadListEmpty.tsx";
import ThreadListLoadingIndicatorDefault from "ThreadListLoadingIndicator.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
function ThreadListSection(title) {
  const tmp = closure_7();
  return jsx(Text_Text.Text, {
    style: closure_7().section,
    accessibilityRole: "header",
    variant: "text-xs/semibold",
    color: "text-default",
    children: title.title.toUpperCase(),
  });
}
function renderItem(item) {
  item = item.item;
  const type = item.type;
  if ("section" === type) {
    const obj2 = { title: item.title };
    return <ThreadListSection title={item.title} />;
  } else if ("thread" === type) {
    const obj = { threadId: null, onPress: null, start: null, end: null };
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
function EnterExitCrossFadeContainer(state) {
  state = state.state;
  _require = state;
  importDefault = undefined;
  ({ contentContainerStyle, cleanUp, children } = state);
  let num = 0;
  if (state === require("native").TransitionStates.MOUNTED) {
    num = 1;
  }
  const sharedValue = require("../../../../../../_runtime/metro/01652__.js").useSharedValue(num);
  let obj = require("../../../../../../_runtime/metro/01652__.js");
  items = [
    closure_13,
    require("spring/spring").withSpring,
    sharedValue,
    require("springPresets").springStandard,
    closure_12,
    state,
    require("native").TransitionStates,
    require("../../../../../../_runtime/metro/01705__.js").scheduleOnRN,
    cleanUp,
  ];
  _require = undefined;
  importDefault = undefined;
  dependencyMap = undefined;
  noop = undefined;
  absoluteFill = undefined;
  c5 = undefined;
  jsx = undefined;
  c7 = undefined;
  [tmp4, tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12] = items;
  class ThreadListTsx2 {
    constructor() {
      tmp = closure_0;
      value = closure_1.get();
      tmp3 = closure_2;
      items = [, , , ,];
      items[0] = closure_3;
      items[1] = closure_4;
      items[2] = closure_5;
      items[3] = closure_6;
      items[4] = closure_7;
      closure_0 = undefined;
      closure_1 = undefined;
      closure_2 = undefined;
      closure_3 = undefined;
      [tmp4, tmp5, tmp6, tmp7, tmp8] = items;
      obj = { opacity: null };
      class ThreadListTsx1 {
        constructor(arg0) {
          tmp = state;
          if (state) {
            tmp2 = closure_0;
            tmp3 = closure_1;
            tmp = closure_0 === closure_1.YEETED;
          }
          if (tmp) {
            tmp4 = closure_2;
            tmp5 = closure_3;
            tmp6 = closure_2(closure_3);
          }
          return;
        }
      }
      items1 = [, , ,];
      items1[0] = tmp5;
      items1[1] = tmp6;
      items1[2] = tmp7;
      items1[3] = tmp8;
      ThreadListTsx1.__closure = items1;
      ThreadListTsx1.__workletHash = 18145764964;
      ThreadListTsx1.__initData = tmp4;
      obj.opacity = tmp(value, tmp3, "respect-motion-settings", ThreadListTsx1);
      return obj;
    }
  }
  let items1 = [tmp5, tmp6, tmp7, tmp8, tmp9, tmp10, tmp11, tmp12];
  ThreadListTsx2.__closure = items1;
  ThreadListTsx2.__workletHash = 5121386856921;
  ThreadListTsx2.__initData = tmp4;
  const items2 = [sharedValue, state];
  const animatedStyle = require("../../../../../../_runtime/metro/01652__.js").useAnimatedStyle(ThreadListTsx2);
  const effect = noop.useEffect(() => {
    let num = 1;
    if (c0 === native.TransitionStates.YEETED) {
      num = 0;
    }
    const result = _undefined.set(num);
  }, items2);
  const obj2 = { style: null, children: <c5 style={contentContainerStyle}>{children}</c5> };
  const items3 = [absoluteFill.absoluteFill, animatedStyle];
  obj2.style = items3;
  return jsx(_modDef1652.View, { style: null, children: <c5 style={contentContainerStyle}>{children}</c5> });
}
function getThreadListStateKey(arg0) {
  return arg0;
}
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
let jsx = fn(21).jsx;
const createStyles = fn(5141);
let closure_7 = createStyles.createStyles({
  container: { flex: 1, flexGrow: 1 },
  center: { justifyContent: "center", alignItems: "center" },
  header: { marginTop: 24, marginBottom: 10 },
  footer: { marginVertical: 16, justifyContent: "center", alignItems: "center" },
  section: { marginTop: 16, marginBottom: 8 },
});
const set = new Set();
let closure_12 = {
  code: "(function ThreadListTsx1(finished){let[state,TransitionStates,scheduleOnRN,cleanUp]=this.__closure;if(finished&&state===TransitionStates.YEETED){scheduleOnRN(cleanUp);}})",
};
let closure_13 = {
  code: "(function ThreadListTsx2(){let[withSpring,opacity,springStandard,_worklet_18145764964_init_data,state,TransitionStates,scheduleOnRN,cleanUp]=this.__closure;return{opacity:withSpring(opacity.get(),springStandard,'respect-motion-settings',function ThreadListTsx1Factory([_worklet_18145764964_init_data,state,TransitionStates,scheduleOnRN,cleanUp]){const ThreadListTsx1=function(finished){if(finished&&state===TransitionStates.YEETED){scheduleOnRN(cleanUp);}};ThreadListTsx1.__closure=[state,TransitionStates,scheduleOnRN,cleanUp];ThreadListTsx1.__workletHash=18145764964;ThreadListTsx1.__initData=_worklet_18145764964_init_data;return ThreadListTsx1;}([_worklet_18145764964_init_data,state,TransitionStates,scheduleOnRN,cleanUp]))};})",
};
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
  const activeThreads = onThreadPress(contentContainerStyle[11]).useActiveThreads(channel);
  const joinedThreadIds = activeThreads.joinedThreadIds;
  const unjoinedThreadIds = activeThreads.unjoinedThreadIds;
  let obj = onThreadPress(contentContainerStyle[11]);
  const archivedThreads = onThreadPress(contentContainerStyle[11]).useArchivedThreads(
    channel,
    onThreadPress(contentContainerStyle[12]).ThreadSortOrder.LATEST_ACTIVITY,
    loadMore,
    onThreadPress(contentContainerStyle[13]).ThreadSearchTagSetting.MATCH_SOME,
  );
  const threadIds = archivedThreads.threadIds;
  canLoadMore = archivedThreads.canLoadMore;
  loadMore = archivedThreads.loadMore;
  const loading = archivedThreads.loading;
  items = [loading, canLoadMore, loadMore];
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
    items = [];
    if (joinedThreadIds.length > 0) {
      const obj2 = { type: "section", title: null };
      const intl2 = onThreadPress(contentContainerStyle[14]).intl;
      const obj3 = { count: joinedThreadIds.length };
      obj2.title = intl2.formatToPlainString(onThreadPress(contentContainerStyle[14]).t.fcXlhe, obj3);
      items.push(obj2);
      const item = joinedThreadIds.forEach((threadId, index) =>
        items.push({
          type: "thread",
          threadId,
          start: 0 === index,
          end: index === joinedThreadIds.length - 1,
          onPress: onThreadPress,
        }),
      );
    }
    if (unjoinedThreadIds.length > 0) {
      const obj4 = { type: "section", title: null };
      const intl3 = onThreadPress(contentContainerStyle[14]).intl;
      const obj5 = { count: unjoinedThreadIds.length };
      obj4.title = intl3.formatToPlainString(onThreadPress(contentContainerStyle[14]).t.GHY7yQ, obj5);
      items.push(obj4);
      const item1 = unjoinedThreadIds.forEach((threadId, index) =>
        items.push({
          type: "thread",
          threadId,
          start: 0 === index,
          end: index === unjoinedThreadIds.length - 1,
          onPress: onThreadPress,
        }),
      );
    }
    if (threadIds.length > 0) {
      const obj = { type: "section", title: null };
      const intl = onThreadPress(contentContainerStyle[14]).intl;
      obj.title = intl.string(onThreadPress(contentContainerStyle[14]).t.XsgrjS);
      items.push(obj);
      const item2 = threadIds.forEach((threadId, index) =>
        items.push({
          type: "thread",
          threadId,
          start: 0 === index,
          end: index === threadIds.length - 1,
          onPress: onThreadPress,
        }),
      );
    }
    return items;
  }, items1);
  let items2 = [memo.length, loading];
  const items3 = [onCreateThreadPress];
  const memo1 = noop.useMemo(() => {
    if (loading) {
      if (0 === memo.length) {
        items = [constants.LOADING];
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
      const obj = { icon: null, onPress: null, label: null, start: true, end: true, arrow: true };
      const obj2 = { IconComponent: ThreadPlusIcon.ThreadPlusIcon };
      obj.icon = jsx(RowButton.RowButton.Icon, { IconComponent: ThreadPlusIcon.ThreadPlusIcon });
      obj.onPress = tmp;
      const intl = util.intl;
      obj.label = intl.string(util.t.rBIGBL);
      tmp2 = jsx(TableRow.TableRow, { icon: null, onPress: null, label: null, start: true, end: true, arrow: true });
    }
    return tmp2;
  }, items3);
  const items4 = [, , , , , , , , ,];
  ({ container: arr6[0], center: arr6[1], header: arr6[2], footer: arr6[3] } = tmp);
  items4[4] = onCreateThreadPress;
  items4[5] = memo;
  items4[6] = memo2;
  items4[7] = onEndReached;
  items4[8] = loading;
  items4[9] = contentContainerStyle;
  const callback1 = noop.useCallback((key, arg1, state, cleanUp) => {
    if (constants.EMPTY === arg1) {
      const obj2 = { contentContainerStyle: closure_3.container, state, cleanUp, children: null };
      const obj3 = { onCreateThreadPress };
      obj2.children = jsx(ThreadListEmptyDefault, { onCreateThreadPress });
      return (
        <EnterExitCrossFadeContainer
          key={key}
          contentContainerStyle={closure_3.container}
          state={state}
          cleanUp={cleanUp}
        >
          {null}
        </EnterExitCrossFadeContainer>
      );
    } else if (constants.LOADING === arg1) {
      const obj4 = { contentContainerStyle: null, state: null, cleanUp: null, children: null };
      items = [,];
      ({ container: arr[0], center: arr[1] } = closure_3);
      obj4.contentContainerStyle = items;
      obj4.state = state;
      obj4.cleanUp = cleanUp;
      obj4.children = jsx(ThreadListLoadingIndicatorDefault, {});
      return (
        <EnterExitCrossFadeContainer key={key} contentContainerStyle={null} state={null} cleanUp={null}>
          {null}
        </EnterExitCrossFadeContainer>
      );
    } else if (constants.LIST === arg1) {
      const obj = { contentContainerStyle: closure_3.container, state, cleanUp, children: null };
      const obj5 = {
        data: memo,
        ListHeaderComponent: memo2,
        ListHeaderComponentStyle: closure_3.header,
        renderItem,
        keyExtractor,
        onEndReached,
        onEndReachedThreshold: 0.4,
        accessibilityLabel: null,
        ListFooterComponent: null,
        ListFooterComponentStyle: null,
        contentContainerStyle: null,
      };
      const intl = util.intl;
      obj5.accessibilityLabel = intl.string(util.t.B2panI);
      let tmp13;
      if (loading) {
        tmp13 = ThreadListLoadingIndicatorDefault;
      }
      obj5.ListFooterComponent = tmp13;
      let footer;
      if (loading) {
        footer = closure_3.footer;
      }
      obj5.ListFooterComponentStyle = footer;
      obj5.contentContainerStyle = contentContainerStyle;
      obj.children = jsx(_mod7414.AnimatedFlashList, {
        data: memo,
        ListHeaderComponent: memo2,
        ListHeaderComponentStyle: closure_3.header,
        renderItem,
        keyExtractor,
        onEndReached,
        onEndReachedThreshold: 0.4,
        accessibilityLabel: null,
        ListFooterComponent: null,
        ListFooterComponentStyle: null,
        contentContainerStyle: null,
      });
      return (
        <EnterExitCrossFadeContainer
          key={key}
          contentContainerStyle={closure_3.container}
          state={state}
          cleanUp={cleanUp}
        >
          {null}
        </EnterExitCrossFadeContainer>
      );
    }
  }, items4);
  return threadIds(onThreadPress(contentContainerStyle[7]).TransitionGroup, {
    items: memo1,
    renderItem: callback1,
    getItemKey: getThreadListStateKey,
  });
}
