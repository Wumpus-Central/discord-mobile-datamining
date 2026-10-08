// === Module 17196: ThreadList ===

// Module 17196 (ThreadList)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import native from "native" /* 4787 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4810 */;
import Text_Text from "Text/Text" /* 5086 */;
import spring from "spring" /* 5374 */;
import springPresets from "springPresets" /* 5378 */;
import TableRow from "TableRow" /* 6184 */;
import RowButton from "RowButton" /* 8557 */;
import _mod8600 from "module_8600" /* 8600 */;
import ThreadPlusIcon from "ThreadPlusIcon" /* 11952 */;
import ThreadListTableRowDefault from "ThreadListTableRow" /* 17197 */;
import ThreadListEmptyDefault from "ThreadListEmpty" /* 17199 */;
import ThreadListLoadingIndicatorDefault from "ThreadListLoadingIndicator" /* 17200 */;
import noop from "module_19" /* 19 */;

require = fn;
function renderItem(item) {
  item = item.item;
  const type = item.type;
  if ("section" === type) {
    const obj2 = { title: item.title };
    return <closure_9 title={item.title} />;
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
function getThreadListStateKey(arg0) {
  return arg0;
}
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let closure_7 = createStyles.createStyles({ container: { flex: 1, flexGrow: 1 }, center: { justifyContent: "center", alignItems: "center" }, header: { marginTop: 24, marginBottom: 10 }, footer: { marginVertical: 16, justifyContent: "center", alignItems: "center" }, section: { marginTop: 16, marginBottom: 8 } });
const set = new Set();
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function ThreadListSection(title) {
  const cResult = c.c(5);
  const tmp4 = closure_7();
  if (cResult[0] !== title.title) {
    const formatted = str.toUpperCase();
    cResult[0] = str;
    cResult[1] = formatted;
    let tmp5 = formatted;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.section) {
    if (cResult[3] === tmp5) {
      let tmp7 = cResult[4];
    }
    return tmp7;
  }
  const tmp8 = jsx(Text_Text.Text, { style: tmp4.section, accessibilityRole: "header", variant: "text-xs/bold", color: "text-default", children: tmp5 });
  cResult[2] = tmp4.section;
  cResult[3] = tmp5;
  cResult[4] = tmp8;
  tmp7 = tmp8;
}) : (function ThreadListSection(title) {
  const tmp = closure_7();
  return jsx(Text_Text.Text, { style: closure_7().section, accessibilityRole: "header", variant: "text-xs/bold", color: "text-default", children: title.title.toUpperCase() });
});
let __initData = { code: "function ThreadListTsx1(){const{withSpring,opacity,springStandard,state,TransitionStates,runOnJS,cleanUp}=this.__closure;return{opacity:withSpring(opacity.get(),springStandard,\"respect-motion-settings\",function(finished){if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}})};}" };
let ListHeaderComponent = { code: "function ThreadListTsx2(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
__initData = { code: "function ThreadListTsx3(){const{withSpring,opacity,springStandard,state,TransitionStates,runOnJS,cleanUp}=this.__closure;return{opacity:withSpring(opacity.get(),springStandard,'respect-motion-settings',function(finished){if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}})};}" };
let closure_15 = { code: "function ThreadListTsx4(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function EnterExitCrossFadeContainer(state) {
  const cResult = cleanUp(sharedValue[5]).c(12);
  ({ contentContainerStyle, cleanUp } = state);
  state = state.state;
  const children = state.children;
  let obj = cleanUp(sharedValue[5]);
  let num = 0;
  if (state === cleanUp(sharedValue[9]).TransitionStates.MOUNTED) {
    num = 1;
  }
  sharedValue = cleanUp(sharedValue[8]).useSharedValue(num);
  let obj2 = cleanUp(sharedValue[8]);
  let fn = function c() {
    let obj = { opacity: null };
    value = sharedValue.get();
    const fn = function t(arg0) {
      let tmp = arg0;
      if (arg0) {
        tmp = state === cleanUp(sharedValue[9]).TransitionStates.YEETED;
      }
      if (tmp) {
        cleanUp(sharedValue[8]).runOnJS(closure_1_0)();
        const obj = cleanUp(sharedValue[8]);
      }
    };
    const obj2 = spring;
    fn.__closure = { state, TransitionStates: native.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, cleanUp };
    fn.__workletHash = 2519144051135;
    fn.__initData = __initData;
    obj.opacity = obj2.withSpring(value, springPresets.springStandard, "respect-motion-settings", fn);
    return obj;
  };
  const tmpResult = cleanUp(sharedValue[8]);
  fn.__closure = { withSpring: cleanUp(sharedValue[10]).withSpring, opacity: sharedValue, springStandard: cleanUp(sharedValue[11]).springStandard, state, TransitionStates: cleanUp(sharedValue[9]).TransitionStates, runOnJS: cleanUp(sharedValue[8]).runOnJS, cleanUp };
  fn.__workletHash = 14452694677256;
  fn.__initData = __initData;
  const animatedStyle = tmpResult.useAnimatedStyle(fn);
  if (cResult[0] === sharedValue) {
    if (cResult[1] === state) {
      let tmp6 = cResult[2];
      let tmp7 = cResult[3];
    }
    const effect = noop.useEffect(tmp6, tmp7);
    if (cResult[4] !== animatedStyle) {
      const items = [closure_4.absoluteFill, animatedStyle];
      cResult[4] = animatedStyle;
      cResult[5] = items;
      let tmp10 = items;
    } else {
      tmp10 = cResult[5];
    }
    if (cResult[6] === children) {
      if (cResult[7] === contentContainerStyle) {
        let tmp12 = cResult[8];
      }
      if (cResult[9] === tmp10) {
        if (cResult[10] === tmp12) {
          let tmp16 = cResult[11];
        }
        return tmp16;
      }
      const obj4 = { style: tmp10, children: tmp12 };
      const tmp19 = jsx(state(tmp2[8]).View, { style: tmp10, children: tmp12 });
      cResult[9] = tmp10;
      cResult[10] = tmp12;
      cResult[11] = tmp19;
      tmp16 = tmp19;
    }
    const obj5 = { style: contentContainerStyle, children };
    const tmp15 = <closure_5 style={contentContainerStyle}>{children}</closure_5>;
    cResult[6] = children;
    cResult[7] = contentContainerStyle;
    cResult[8] = tmp15;
    tmp12 = tmp15;
  }
  const fn2 = function l() {
    let num = 1;
    if (state === native.TransitionStates.YEETED) {
      num = 0;
    }
    const result = sharedValue.set(num);
  };
  const items1 = [sharedValue, state];
  cResult[0] = sharedValue;
  cResult[1] = state;
  cResult[2] = fn2;
  cResult[3] = items1;
  tmp7 = items1;
  tmp6 = fn2;
  const obj3 = { withSpring: cleanUp(sharedValue[10]).withSpring, opacity: sharedValue, springStandard: cleanUp(sharedValue[11]).springStandard, state, TransitionStates: cleanUp(sharedValue[9]).TransitionStates, runOnJS: cleanUp(sharedValue[8]).runOnJS, cleanUp };
}) : (function EnterExitCrossFadeContainer(cleanUp) {
  cleanUp = cleanUp.cleanUp;
  state = cleanUp.state;
  let sharedValue;
  ({ contentContainerStyle, children } = cleanUp);
  let num = 0;
  if (state === cleanUp(sharedValue[9]).TransitionStates.MOUNTED) {
    num = 1;
  }
  sharedValue = cleanUp(sharedValue[8]).useSharedValue(num);
  let obj = cleanUp(sharedValue[8]);
  let fn = function u() {
    let obj = { opacity: null };
    value = sharedValue.get();
    const fn = function t(arg0) {
      let tmp = arg0;
      if (arg0) {
        tmp = state === cleanUp(sharedValue[9]).TransitionStates.YEETED;
      }
      if (tmp) {
        cleanUp(sharedValue[8]).runOnJS(closure_1_0)();
        const obj = cleanUp(sharedValue[8]);
      }
    };
    const obj2 = spring;
    fn.__closure = { state, TransitionStates: native.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, cleanUp };
    fn.__workletHash = 16446648633017;
    fn.__initData = __initData;
    obj.opacity = obj2.withSpring(value, springPresets.springStandard, "respect-motion-settings", fn);
    return obj;
  };
  const tmpResult = cleanUp(sharedValue[8]);
  fn.__closure = { withSpring: cleanUp(sharedValue[10]).withSpring, opacity: sharedValue, springStandard: cleanUp(sharedValue[11]).springStandard, state, TransitionStates: cleanUp(sharedValue[9]).TransitionStates, runOnJS: cleanUp(sharedValue[8]).runOnJS, cleanUp };
  fn.__workletHash = 14186737058634;
  fn.__initData = __initData;
  const items = [sharedValue, state];
  const animatedStyle = tmpResult.useAnimatedStyle(fn);
  const effect = noop.useEffect(() => {
    let num = 1;
    if (state === native.TransitionStates.YEETED) {
      num = 0;
    }
    const result = sharedValue.set(num);
  }, items);
  const obj3 = { style: null, children: <closure_5 style={contentContainerStyle}>{children}</closure_5> };
  const items1 = [closure_4.absoluteFill, animatedStyle];
  obj3.style = items1;
  return jsx(state(sharedValue[8]).View, { style: null, children: <closure_5 style={contentContainerStyle}>{children}</closure_5> });
});
const constants = { LIST: "list", EMPTY: "empty", LOADING: "loading" };
ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/threads/native/components/redesign/ThreadList.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ThreadList(onCreateThreadPress) {
  const cResult = onThreadPress(contentContainerStyle[5]).c(28);
  ({ channel, onThreadPress } = onCreateThreadPress);
  onCreateThreadPress = onCreateThreadPress.onCreateThreadPress;
  contentContainerStyle = onCreateThreadPress.contentContainerStyle;
  const tmp4 = canLoadMore();
  noop = tmp4;
  let obj = onThreadPress(contentContainerStyle[5]);
  const activeThreads = onThreadPress(contentContainerStyle[12]).useActiveThreads(channel);
  const joinedThreadIds = activeThreads.joinedThreadIds;
  const unjoinedThreadIds = activeThreads.unjoinedThreadIds;
  let obj2 = onThreadPress(contentContainerStyle[12]);
  const archivedThreads = onThreadPress(contentContainerStyle[12]).useArchivedThreads(channel, onThreadPress(contentContainerStyle[13]).ThreadSortOrder.LATEST_ACTIVITY, loadMore, onThreadPress(contentContainerStyle[14]).ThreadSearchTagSetting.MATCH_SOME);
  const threadIds = archivedThreads.threadIds;
  canLoadMore = archivedThreads.canLoadMore;
  loadMore = archivedThreads.loadMore;
  const loading = archivedThreads.loading;
  if (cResult[0] === canLoadMore) {
    if (cResult[1] === loadMore) {
      if (cResult[2] === loading) {
        let tmp7 = cResult[3];
      }
      onEndReached = tmp7;
      if (cResult[4] === threadIds) {
        if (cResult[5] === joinedThreadIds) {
          if (cResult[6] === onThreadPress) {
            if (cResult[7] === unjoinedThreadIds) {
              let items3 = cResult[8];
            }
            if (loading) {
              if (0 === arr3.length) {
                const _Symbol3 = Symbol;
                if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
                  let items = [constants.LOADING];
                  cResult[9] = items;
                }
              }
            }
            if (0 !== arr3.length) {
              const _Symbol2 = Symbol;
              if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
                const items1 = [constants.LIST];
                cResult[11] = items1;
                let tmp14 = items1;
              } else {
                tmp14 = cResult[11];
              }
              let tmp11 = tmp14;
            } else {
              const _Symbol = Symbol;
              if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
                const items2 = [constants.EMPTY];
                cResult[10] = items2;
                tmp11 = items2;
              } else {
                tmp11 = cResult[10];
              }
            }
            if (cResult[12] !== onCreateThreadPress) {
              let tmp21 = null;
              if (null != onCreateThreadPress) {
                let obj4 = { icon: null, onPress: null, label: null, start: true, end: true, arrow: true };
                let obj5 = { IconComponent: onThreadPress(tmp2[18]).ThreadPlusIcon };
                obj4.icon = threadIds(onThreadPress(tmp2[17]).RowButton.Icon, obj5);
                obj4.onPress = onCreateThreadPress;
                class Y {
                  constructor(arg0, arg1, arg2, arg3) {
                    tmp = closure_17;
                    if (closure_17.EMPTY === arg1) {
                      tmp22 = jsx;
                      tmp23 = EnterExitCrossFadeContainer;
                      obj1 = { contentContainerStyle: null, state: null, cleanUp: null, children: null };
                      tmp24 = closure_3;
                      obj1.contentContainerStyle = closure_3.container;
                      obj1.state = arg2;
                      obj1.cleanUp = arg3;
                      tmp25 = closure_1;
                      tmp26 = closure_2;
                      obj6 = { onCreateThreadPress: null };
                      tmp27 = onCreateThreadPress;
                      obj6.onCreateThreadPress = onCreateThreadPress;
                      obj1.children = jsx(closure_1(closure_2[19]), obj6);
                      return jsx(EnterExitCrossFadeContainer, obj1, onCreateThreadPress);
                    } else if (tmp.LOADING === arg1) {
                      tmp17 = jsx;
                      tmp18 = EnterExitCrossFadeContainer;
                      obj7 = { contentContainerStyle: null, state: null, cleanUp: null, children: null };
                      tmp19 = closure_3;
                      items = [, ];
                      ({ container: arr[0], center: arr[1] } = closure_3);
                      obj7.contentContainerStyle = items;
                      obj7.state = arg2;
                      obj7.cleanUp = arg3;
                      tmp20 = closure_1;
                      tmp21 = closure_2;
                      obj7.children = jsx(closure_1(closure_2[20]), {});
                      return jsx(EnterExitCrossFadeContainer, obj7, onCreateThreadPress);
                    } else if (tmp.LIST === arg1) {
                      tmp2 = jsx;
                      obj = { contentContainerStyle: null, state: null, cleanUp: null, children: null };
                      obj.contentContainerStyle = closure_3.container;
                      obj.state = arg2;
                      obj.cleanUp = arg3;
                      tmp5 = closure_0;
                      tmp3 = EnterExitCrossFadeContainer;
                      tmp4 = closure_3;
                      tmp6 = closure_2;
                      obj8 = { data: null, ListHeaderComponent: null, ListHeaderComponentStyle: null, renderItem: null, keyExtractor: null, onEndReached: null, onEndReachedThreshold: 0.4, accessibilityLabel: null, ListFooterComponent: null, ListFooterComponentStyle: null, contentContainerStyle: null };
                      tmp7 = closure_12;
                      obj8.data = closure_12;
                      tmp8 = closure_13;
                      obj8.ListHeaderComponent = closure_13;
                      obj8.ListHeaderComponentStyle = closure_3.header;
                      tmp9 = renderItem;
                      obj8.renderItem = renderItem;
                      tmp10 = keyExtractor;
                      obj8.keyExtractor = keyExtractor;
                      tmp11 = closure_11;
                      obj8.onEndReached = closure_11;
                      intl = closure_0(closure_2[15]).intl;
                      obj8.accessibilityLabel = intl.string(closure_0(closure_2[15]).t.B2panI);
                      tmp13 = undefined;
                      tmp12 = loading;
                      if (loading) {
                        tmp14 = closure_1;
                        tmp13 = closure_1(tmp6[20]);
                      }
                      obj8.ListFooterComponent = tmp13;
                      footer = undefined;
                      if (tmp12) {
                        footer = tmp4.footer;
                      }
                      obj8.ListFooterComponentStyle = footer;
                      tmp16 = contentContainerStyle;
                      obj8.contentContainerStyle = contentContainerStyle;
                      obj.children = tmp2(closure_0(closure_2[21]).AnimatedFlashList, obj8);
                      return tmp2(tmp3, obj, onCreateThreadPress);
                    } else {
                      return;
                    }
                  }
                }
                obj4.label = obj10.string(onThreadPress(tmp2[15]).t.rBIGBL);
                tmp21 = threadIds(onThreadPress(tmp2[16]).TableRow, obj4);
              }
              cResult[12] = onCreateThreadPress;
              cResult[13] = tmp21;
              let tmp20 = tmp21;
            } else {
              tmp20 = cResult[13];
            }
            ListHeaderComponent = tmp20;
            if (cResult[14] === contentContainerStyle) {
              if (cResult[15] === tmp20) {
                if (cResult[16] === arr3) {
                  if (cResult[17] === loading) {
                    if (cResult[18] === onCreateThreadPress) {
                      if (cResult[19] === tmp7) {
                        if (cResult[20] === tmp4.center) {
                          if (cResult[21] === tmp4.container) {
                            if (cResult[22] === tmp4.footer) {
                              if (cResult[23] === tmp4.header) {
                                let tmp23 = cResult[24];
                              }
                              if (cResult[25] === tmp23) {
                                if (cResult[26] === tmp11) {
                                  let tmp24 = cResult[27];
                                }
                                return tmp24;
                              }
                              const obj6 = { items: tmp11, renderItem: tmp23, getItemKey: getThreadListStateKey };
                              class Y {
                                constructor(arg0, arg1, arg2, arg3) {
                                  tmp = closure_17;
                                  if (closure_17.EMPTY === arg1) {
                                    tmp22 = jsx;
                                    tmp23 = EnterExitCrossFadeContainer;
                                    obj1 = { contentContainerStyle: null, state: null, cleanUp: null, children: null };
                                    tmp24 = closure_3;
                                    obj1.contentContainerStyle = closure_3.container;
                                    obj1.state = arg2;
                                    obj1.cleanUp = arg3;
                                    tmp25 = closure_1;
                                    tmp26 = closure_2;
                                    obj6 = { onCreateThreadPress: null };
                                    tmp27 = onCreateThreadPress;
                                    obj6.onCreateThreadPress = onCreateThreadPress;
                                    obj1.children = jsx(closure_1(closure_2[19]), obj6);
                                    return jsx(EnterExitCrossFadeContainer, obj1, onCreateThreadPress);
                                  } else if (tmp.LOADING === arg1) {
                                    tmp17 = jsx;
                                    tmp18 = EnterExitCrossFadeContainer;
                                    obj7 = { contentContainerStyle: null, state: null, cleanUp: null, children: null };
                                    tmp19 = closure_3;
                                    items = [, ];
                                    ({ container: arr[0], center: arr[1] } = closure_3);
                                    obj7.contentContainerStyle = items;
                                    obj7.state = arg2;
                                    obj7.cleanUp = arg3;
                                    tmp20 = closure_1;
                                    tmp21 = closure_2;
                                    obj7.children = jsx(closure_1(closure_2[20]), {});
                                    return jsx(EnterExitCrossFadeContainer, obj7, onCreateThreadPress);
                                  } else if (tmp.LIST === arg1) {
                                    tmp2 = jsx;
                                    obj = { contentContainerStyle: null, state: null, cleanUp: null, children: null };
                                    obj.contentContainerStyle = closure_3.container;
                                    obj.state = arg2;
                                    obj.cleanUp = arg3;
                                    tmp5 = closure_0;
                                    tmp3 = EnterExitCrossFadeContainer;
                                    tmp4 = closure_3;
                                    tmp6 = closure_2;
                                    obj8 = { data: null, ListHeaderComponent: null, ListHeaderComponentStyle: null, renderItem: null, keyExtractor: null, onEndReached: null, onEndReachedThreshold: 0.4, accessibilityLabel: null, ListFooterComponent: null, ListFooterComponentStyle: null, contentContainerStyle: null };
                                    tmp7 = closure_12;
                                    obj8.data = closure_12;
                                    tmp8 = closure_13;
                                    obj8.ListHeaderComponent = closure_13;
                                    obj8.ListHeaderComponentStyle = closure_3.header;
                                    tmp9 = renderItem;
                                    obj8.renderItem = renderItem;
                                    tmp10 = keyExtractor;
                                    obj8.keyExtractor = keyExtractor;
                                    tmp11 = closure_11;
                                    obj8.onEndReached = closure_11;
                                    intl = closure_0(closure_2[15]).intl;
                                    obj8.accessibilityLabel = intl.string(closure_0(closure_2[15]).t.B2panI);
                                    tmp13 = undefined;
                                    tmp12 = loading;
                                    if (loading) {
                                      tmp14 = closure_1;
                                      tmp13 = closure_1(tmp6[20]);
                                    }
                                    obj8.ListFooterComponent = tmp13;
                                    footer = undefined;
                                    if (tmp12) {
                                      footer = tmp4.footer;
                                    }
                                    obj8.ListFooterComponentStyle = footer;
                                    tmp16 = contentContainerStyle;
                                    obj8.contentContainerStyle = contentContainerStyle;
                                    obj.children = tmp2(closure_0(closure_2[21]).AnimatedFlashList, obj8);
                                    return tmp2(tmp3, obj, onCreateThreadPress);
                                  } else {
                                    return;
                                  }
                                }
                              }
                              cResult[25] = tmp23;
                              cResult[26] = tmp11;
                              cResult[27] = tmp27;
                              tmp24 = tmp27;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            class Y {
              constructor(arg0, arg1, arg2, arg3) {
                tmp = closure_17;
                if (closure_17.EMPTY === arg1) {
                  tmp22 = jsx;
                  tmp23 = EnterExitCrossFadeContainer;
                  obj1 = { contentContainerStyle: null, state: null, cleanUp: null, children: null };
                  tmp24 = closure_3;
                  obj1.contentContainerStyle = closure_3.container;
                  obj1.state = arg2;
                  obj1.cleanUp = arg3;
                  tmp25 = closure_1;
                  tmp26 = closure_2;
                  obj6 = { onCreateThreadPress: null };
                  tmp27 = onCreateThreadPress;
                  obj6.onCreateThreadPress = onCreateThreadPress;
                  obj1.children = jsx(closure_1(closure_2[19]), obj6);
                  return jsx(EnterExitCrossFadeContainer, obj1, onCreateThreadPress);
                } else if (tmp.LOADING === arg1) {
                  tmp17 = jsx;
                  tmp18 = EnterExitCrossFadeContainer;
                  obj7 = { contentContainerStyle: null, state: null, cleanUp: null, children: null };
                  tmp19 = closure_3;
                  items = [, ];
                  ({ container: arr[0], center: arr[1] } = closure_3);
                  obj7.contentContainerStyle = items;
                  obj7.state = arg2;
                  obj7.cleanUp = arg3;
                  tmp20 = closure_1;
                  tmp21 = closure_2;
                  obj7.children = jsx(closure_1(closure_2[20]), {});
                  return jsx(EnterExitCrossFadeContainer, obj7, onCreateThreadPress);
                } else if (tmp.LIST === arg1) {
                  tmp2 = jsx;
                  obj = { contentContainerStyle: null, state: null, cleanUp: null, children: null };
                  obj.contentContainerStyle = closure_3.container;
                  obj.state = arg2;
                  obj.cleanUp = arg3;
                  tmp5 = closure_0;
                  tmp3 = EnterExitCrossFadeContainer;
                  tmp4 = closure_3;
                  tmp6 = closure_2;
                  obj8 = { data: null, ListHeaderComponent: null, ListHeaderComponentStyle: null, renderItem: null, keyExtractor: null, onEndReached: null, onEndReachedThreshold: 0.4, accessibilityLabel: null, ListFooterComponent: null, ListFooterComponentStyle: null, contentContainerStyle: null };
                  tmp7 = closure_12;
                  obj8.data = closure_12;
                  tmp8 = closure_13;
                  obj8.ListHeaderComponent = closure_13;
                  obj8.ListHeaderComponentStyle = closure_3.header;
                  tmp9 = renderItem;
                  obj8.renderItem = renderItem;
                  tmp10 = keyExtractor;
                  obj8.keyExtractor = keyExtractor;
                  tmp11 = closure_11;
                  obj8.onEndReached = closure_11;
                  intl = closure_0(closure_2[15]).intl;
                  obj8.accessibilityLabel = intl.string(closure_0(closure_2[15]).t.B2panI);
                  tmp13 = undefined;
                  tmp12 = loading;
                  if (loading) {
                    tmp14 = closure_1;
                    tmp13 = closure_1(tmp6[20]);
                  }
                  obj8.ListFooterComponent = tmp13;
                  footer = undefined;
                  if (tmp12) {
                    footer = tmp4.footer;
                  }
                  obj8.ListFooterComponentStyle = footer;
                  tmp16 = contentContainerStyle;
                  obj8.contentContainerStyle = contentContainerStyle;
                  obj.children = tmp2(closure_0(closure_2[21]).AnimatedFlashList, obj8);
                  return tmp2(tmp3, obj, onCreateThreadPress);
                } else {
                  return;
                }
              }
            }
            cResult[14] = contentContainerStyle;
            cResult[15] = tmp20;
            cResult[16] = arr3;
            cResult[17] = loading;
            cResult[18] = onCreateThreadPress;
            cResult[19] = tmp7;
            cResult[20] = tmp4.center;
            cResult[21] = tmp4.container;
            cResult[22] = tmp4.footer;
            cResult[23] = tmp4.header;
            cResult[24] = Y;
            tmp23 = Y;
          }
        }
      }
      items3 = [];
      if (joinedThreadIds.length > 0) {
        const obj7 = { type: "section", title: null };
        let intl = onThreadPress(tmp2[15]).intl;
        const obj8 = { count: joinedThreadIds.length };
        obj7.title = intl.formatToPlainString(onThreadPress(tmp2[15]).t.fcXlhe, obj8);
        items3.push(obj7);
        class Y {
          constructor(arg0, arg1, arg2, arg3) {
            tmp = closure_17;
            if (closure_17.EMPTY === arg1) {
              tmp22 = jsx;
              tmp23 = EnterExitCrossFadeContainer;
              obj1 = { contentContainerStyle: null, state: null, cleanUp: null, children: null };
              tmp24 = closure_3;
              obj1.contentContainerStyle = closure_3.container;
              obj1.state = arg2;
              obj1.cleanUp = arg3;
              tmp25 = closure_1;
              tmp26 = closure_2;
              obj6 = { onCreateThreadPress: null };
              tmp27 = onCreateThreadPress;
              obj6.onCreateThreadPress = onCreateThreadPress;
              obj1.children = jsx(closure_1(closure_2[19]), obj6);
              return jsx(EnterExitCrossFadeContainer, obj1, onCreateThreadPress);
            } else if (tmp.LOADING === arg1) {
              tmp17 = jsx;
              tmp18 = EnterExitCrossFadeContainer;
              obj7 = { contentContainerStyle: null, state: null, cleanUp: null, children: null };
              tmp19 = closure_3;
              items = [, ];
              ({ container: arr[0], center: arr[1] } = closure_3);
              obj7.contentContainerStyle = items;
              obj7.state = arg2;
              obj7.cleanUp = arg3;
              tmp20 = closure_1;
              tmp21 = closure_2;
              obj7.children = jsx(closure_1(closure_2[20]), {});
              return jsx(EnterExitCrossFadeContainer, obj7, onCreateThreadPress);
            } else if (tmp.LIST === arg1) {
              tmp2 = jsx;
              obj = { contentContainerStyle: null, state: null, cleanUp: null, children: null };
              obj.contentContainerStyle = closure_3.container;
              obj.state = arg2;
              obj.cleanUp = arg3;
              tmp5 = closure_0;
              tmp3 = EnterExitCrossFadeContainer;
              tmp4 = closure_3;
              tmp6 = closure_2;
              obj8 = { data: null, ListHeaderComponent: null, ListHeaderComponentStyle: null, renderItem: null, keyExtractor: null, onEndReached: null, onEndReachedThreshold: 0.4, accessibilityLabel: null, ListFooterComponent: null, ListFooterComponentStyle: null, contentContainerStyle: null };
              tmp7 = closure_12;
              obj8.data = closure_12;
              tmp8 = closure_13;
              obj8.ListHeaderComponent = closure_13;
              obj8.ListHeaderComponentStyle = closure_3.header;
              tmp9 = renderItem;
              obj8.renderItem = renderItem;
              tmp10 = keyExtractor;
              obj8.keyExtractor = keyExtractor;
              tmp11 = closure_11;
              obj8.onEndReached = closure_11;
              intl = closure_0(closure_2[15]).intl;
              obj8.accessibilityLabel = intl.string(closure_0(closure_2[15]).t.B2panI);
              tmp13 = undefined;
              tmp12 = loading;
              if (loading) {
                tmp14 = closure_1;
                tmp13 = closure_1(tmp6[20]);
              }
              obj8.ListFooterComponent = tmp13;
              footer = undefined;
              if (tmp12) {
                footer = tmp4.footer;
              }
              obj8.ListFooterComponentStyle = footer;
              tmp16 = contentContainerStyle;
              obj8.contentContainerStyle = contentContainerStyle;
              obj.children = tmp2(closure_0(closure_2[21]).AnimatedFlashList, obj8);
              return tmp2(tmp3, obj, onCreateThreadPress);
            } else {
              return;
            }
          }
        }
      }
      if (unjoinedThreadIds.length > 0) {
        const obj9 = { type: "section", title: null };
        const intl2 = onThreadPress(tmp2[15]).intl;
        const obj11 = { count: unjoinedThreadIds.length };
        obj9.title = intl2.formatToPlainString(onThreadPress(tmp2[15]).t.GHY7yQ, obj11);
        items3.push(obj9);
        class Y {
          constructor(arg0, arg1, arg2, arg3) {
            tmp = closure_17;
            if (closure_17.EMPTY === arg1) {
              tmp22 = jsx;
              tmp23 = EnterExitCrossFadeContainer;
              obj1 = { contentContainerStyle: null, state: null, cleanUp: null, children: null };
              tmp24 = closure_3;
              obj1.contentContainerStyle = closure_3.container;
              obj1.state = arg2;
              obj1.cleanUp = arg3;
              tmp25 = closure_1;
              tmp26 = closure_2;
              obj6 = { onCreateThreadPress: null };
              tmp27 = onCreateThreadPress;
              obj6.onCreateThreadPress = onCreateThreadPress;
              obj1.children = jsx(closure_1(closure_2[19]), obj6);
              return jsx(EnterExitCrossFadeContainer, obj1, onCreateThreadPress);
            } else if (tmp.LOADING === arg1) {
              tmp17 = jsx;
              tmp18 = EnterExitCrossFadeContainer;
              obj7 = { contentContainerStyle: null, state: null, cleanUp: null, children: null };
              tmp19 = closure_3;
              items = [, ];
              ({ container: arr[0], center: arr[1] } = closure_3);
              obj7.contentContainerStyle = items;
              obj7.state = arg2;
              obj7.cleanUp = arg3;
              tmp20 = closure_1;
              tmp21 = closure_2;
              obj7.children = jsx(closure_1(closure_2[20]), {});
              return jsx(EnterExitCrossFadeContainer, obj7, onCreateThreadPress);
            } else if (tmp.LIST === arg1) {
              tmp2 = jsx;
              obj = { contentContainerStyle: null, state: null, cleanUp: null, children: null };
              obj.contentContainerStyle = closure_3.container;
              obj.state = arg2;
              obj.cleanUp = arg3;
              tmp5 = closure_0;
              tmp3 = EnterExitCrossFadeContainer;
              tmp4 = closure_3;
              tmp6 = closure_2;
              obj8 = { data: null, ListHeaderComponent: null, ListHeaderComponentStyle: null, renderItem: null, keyExtractor: null, onEndReached: null, onEndReachedThreshold: 0.4, accessibilityLabel: null, ListFooterComponent: null, ListFooterComponentStyle: null, contentContainerStyle: null };
              tmp7 = closure_12;
              obj8.data = closure_12;
              tmp8 = closure_13;
              obj8.ListHeaderComponent = closure_13;
              obj8.ListHeaderComponentStyle = closure_3.header;
              tmp9 = renderItem;
              obj8.renderItem = renderItem;
              tmp10 = keyExtractor;
              obj8.keyExtractor = keyExtractor;
              tmp11 = closure_11;
              obj8.onEndReached = closure_11;
              intl = closure_0(closure_2[15]).intl;
              obj8.accessibilityLabel = intl.string(closure_0(closure_2[15]).t.B2panI);
              tmp13 = undefined;
              tmp12 = loading;
              if (loading) {
                tmp14 = closure_1;
                tmp13 = closure_1(tmp6[20]);
              }
              obj8.ListFooterComponent = tmp13;
              footer = undefined;
              if (tmp12) {
                footer = tmp4.footer;
              }
              obj8.ListFooterComponentStyle = footer;
              tmp16 = contentContainerStyle;
              obj8.contentContainerStyle = contentContainerStyle;
              obj.children = tmp2(closure_0(closure_2[21]).AnimatedFlashList, obj8);
              return tmp2(tmp3, obj, onCreateThreadPress);
            } else {
              return;
            }
          }
        }
      }
      cResult[4] = threadIds;
      cResult[5] = joinedThreadIds;
      cResult[6] = onThreadPress;
      cResult[7] = unjoinedThreadIds;
      cResult[8] = items3;
    }
  }
  const fn = function n() {
    let tmp = !loading;
    if (!loading) {
      tmp = canLoadMore;
    }
    if (tmp) {
      loadMore();
    }
  };
  cResult[0] = canLoadMore;
  cResult[1] = loadMore;
  cResult[2] = loading;
  cResult[3] = fn;
  tmp7 = fn;
  let obj3 = onThreadPress(contentContainerStyle[12]);
}) : (function ThreadList(onCreateThreadPress) {
  ({ channel, onThreadPress } = onCreateThreadPress);
  onCreateThreadPress = onCreateThreadPress.onCreateThreadPress;
  const contentContainerStyle = onCreateThreadPress.contentContainerStyle;
  let canLoadMore;
  let loadMore;
  let tmp = canLoadMore();
  noop = tmp;
  const activeThreads = onThreadPress(contentContainerStyle[12]).useActiveThreads(channel);
  const joinedThreadIds = activeThreads.joinedThreadIds;
  const unjoinedThreadIds = activeThreads.unjoinedThreadIds;
  let obj = onThreadPress(contentContainerStyle[12]);
  const archivedThreads = onThreadPress(contentContainerStyle[12]).useArchivedThreads(channel, onThreadPress(contentContainerStyle[13]).ThreadSortOrder.LATEST_ACTIVITY, loadMore, onThreadPress(contentContainerStyle[14]).ThreadSearchTagSetting.MATCH_SOME);
  const threadIds = archivedThreads.threadIds;
  canLoadMore = archivedThreads.canLoadMore;
  loadMore = archivedThreads.loadMore;
  const loading = archivedThreads.loading;
  let items = [loading, canLoadMore, loadMore];
  onEndReached = noop.useCallback(() => {
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
    if (joinedThreadIds.length > 0) {
      const obj2 = { type: "section", title: null };
      const intl2 = onThreadPress(contentContainerStyle[15]).intl;
      const obj3 = { count: joinedThreadIds.length };
      obj2.title = intl2.formatToPlainString(onThreadPress(contentContainerStyle[15]).t.fcXlhe, obj3);
      items.push(obj2);
      const item = joinedThreadIds.forEach((threadId, index) => items.push({ type: "thread", threadId, start: 0 === index, end: index === joinedThreadIds.length - 1, onPress: onThreadPress }));
    }
    if (unjoinedThreadIds.length > 0) {
      const obj4 = { type: "section", title: null };
      const intl3 = onThreadPress(contentContainerStyle[15]).intl;
      const obj5 = { count: unjoinedThreadIds.length };
      obj4.title = intl3.formatToPlainString(onThreadPress(contentContainerStyle[15]).t.GHY7yQ, obj5);
      items.push(obj4);
      const item1 = unjoinedThreadIds.forEach((threadId, index) => items.push({ type: "thread", threadId, start: 0 === index, end: index === unjoinedThreadIds.length - 1, onPress: onThreadPress }));
    }
    if (threadIds.length > 0) {
      const obj = { type: "section", title: null };
      const intl = onThreadPress(contentContainerStyle[15]).intl;
      obj.title = intl.string(onThreadPress(contentContainerStyle[15]).t.XsgrjS);
      items.push(obj);
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
  const items4 = [, , , , , , , , , ];
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
      return <closure_16 key={key} contentContainerStyle={closure_3.container} state={state} cleanUp={cleanUp}>{null}</closure_16>;
    } else if (constants.LOADING === arg1) {
      const obj4 = { contentContainerStyle: null, state: null, cleanUp: null, children: null };
      const items = [, ];
      ({ container: arr[0], center: arr[1] } = closure_3);
      obj4.contentContainerStyle = items;
      obj4.state = state;
      obj4.cleanUp = cleanUp;
      obj4.children = jsx(ThreadListLoadingIndicatorDefault, {});
      return <closure_16 key={key} contentContainerStyle={null} state={null} cleanUp={null}>{null}</closure_16>;
    } else if (constants.LIST === arg1) {
      const obj = { contentContainerStyle: closure_3.container, state, cleanUp, children: null };
      const obj5 = { data: memo, ListHeaderComponent: memo2, ListHeaderComponentStyle: closure_3.header, renderItem, keyExtractor, onEndReached, onEndReachedThreshold: 0.4, accessibilityLabel: null, ListFooterComponent: null, ListFooterComponentStyle: null, contentContainerStyle: null };
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
      obj.children = jsx(_mod8600.AnimatedFlashList, { data: memo, ListHeaderComponent: memo2, ListHeaderComponentStyle: closure_3.header, renderItem, keyExtractor, onEndReached, onEndReachedThreshold: 0.4, accessibilityLabel: null, ListFooterComponent: null, ListFooterComponentStyle: null, contentContainerStyle: null });
      return <closure_16 key={key} contentContainerStyle={closure_3.container} state={state} cleanUp={cleanUp}>{null}</closure_16>;
    }
  }, items4);
  return threadIds(onThreadPress(contentContainerStyle[9]).TransitionGroup, { items: memo1, renderItem: callback1, getItemKey: getThreadListStateKey });
});