// === Module 16890: ThreadList ===

// Module 16890 (ThreadList)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl5 from "intl" /* 1126 */;
import native from "native" /* 4589 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import Text_Text from "Text/Text" /* 4886 */;
import spring from "spring" /* 5597 */;
import springPresets from "springPresets" /* 5598 */;
import TableRow2 from "TableRow" /* 5993 */;
import defaultMVCPConfig from "defaultMVCPConfig" /* 8371 */;
import RowButton from "RowButton" /* 8897 */;
import ThreadPlusIcon from "ThreadPlusIcon" /* 11866 */;
import ThreadListTableRowDefault from "ThreadListTableRow" /* 16891 */;
import ThreadListLoadingIndicatorDefault from "ThreadListLoadingIndicator" /* 16894 */;
import react_mod from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let onCreateThreadPress, onEndReached;

let closure_4;
let hasOwnProperty;
function renderItem(item) {
  item = item.item;
  const type = item.type;
  if ("section" === type) {
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
let react = react_mod;
({ StyleSheet: closure_4, View: hasOwnProperty } = react_native);
const jsx = Fragment.jsx;
let closure_7 = createStyles.createStyles({ container: { flex: 1, flexGrow: 1 }, center: { justifyContent: "center", alignItems: "center" }, header: { marginTop: 24, marginBottom: 10 }, footer: { marginVertical: 16, justifyContent: "center", alignItems: "center" }, section: { marginTop: 16, marginBottom: 8 } });
let set = new Set();
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((title) => {
  let tmp5;
  const obj = react2;
  const cResult = obj.c(5);
  const tmp4 = closure_7();
  const section = tmp4.section;
  if (cResult[0] !== title.title) {
    const formatted = str.toUpperCase();
    cResult[0] = title.title;
    cResult[1] = formatted;
    tmp5 = formatted;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.section) {
    let tmp7;
    if (cResult[3] === tmp5) {
      tmp7 = cResult[4];
    }
    return tmp7;
  }
  const tmp8 = jsx(Text_Text.Text, { style: section, accessibilityRole: "header", variant: "text-xs/bold", color: "text-default", children: tmp5 });
  cResult[2] = tmp4.section;
  cResult[3] = tmp5;
  cResult[4] = tmp8;
  tmp7 = tmp8;
}) : ((title) => {
  const str = title.title;
  const Text = Text_Text.Text;
  return <Text style={closure_7().section} accessibilityRole="header" variant="text-xs/bold" color="text-default">{str.toUpperCase()}</Text>;
});
let __initData = { code: "function ThreadListTsx1(){const{withSpring,opacity,springStandard,state,TransitionStates,runOnJS,cleanUp}=this.__closure;return{opacity:withSpring(opacity.get(),springStandard,\"respect-motion-settings\",function(finished){if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}})};}" };
let ListHeaderComponent = { code: "function ThreadListTsx2(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
__initData = { code: "function ThreadListTsx3(){const{withSpring,opacity,springStandard,state,TransitionStates,runOnJS,cleanUp}=this.__closure;return{opacity:withSpring(opacity.get(),springStandard,'respect-motion-settings',function(finished){if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}})};}" };
let closure_15 = { code: "function ThreadListTsx4(finished){const{state,TransitionStates,runOnJS,cleanUp}=this.__closure;if(finished&&state===TransitionStates.YEETED){runOnJS(cleanUp)();}}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((state) => {
  let cleanUp;
  let contentContainerStyle;
  let sharedValue;
  let obj = cleanUp(sharedValue[5]);
  const cResult = obj.c(12);
  ({ contentContainerStyle, cleanUp } = state);
  state = state.state;
  const children = state.children;
  const useSharedValue = cleanUp(sharedValue[8]).useSharedValue;
  let num = 0;
  cleanUp(sharedValue[8]);
  if (state === cleanUp(sharedValue[9]).TransitionStates.MOUNTED) {
    num = 1;
  }
  sharedValue = useSharedValue(num);
  let fn = function c() {
    let fn;
    let springStandard;
    let value;
    let withSpring;
    let obj = { opacity: withSpring(value, springStandard, "respect-motion-settings", fn) };
    let tmp = spring;
    withSpring = tmp.withSpring;
    value = sharedValue.get();
    fn = function t(arg0) {
      const tmp = arg0 && state === cleanUp(sharedValue[9]).TransitionStates.YEETED;
      if (tmp) {
        const obj = cleanUp(sharedValue[8]);
        obj.runOnJS(closure_1_0)();
      }
    };
    const obj2 = { state, TransitionStates: native.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, cleanUp };
    springStandard = springPresets.springStandard;
    fn.__closure = obj2;
    fn.__workletHash = 2519144051135;
    fn.__initData = __initData;
    return obj;
  };
  const tmpResult = cleanUp(sharedValue[8]);
  let obj2 = { withSpring: cleanUp(tmp2[10]).withSpring, opacity: sharedValue, springStandard: cleanUp(tmp2[11]).springStandard, state, TransitionStates: cleanUp(tmp2[9]).TransitionStates, runOnJS: cleanUp(tmp2[8]).runOnJS, cleanUp };
  fn.__closure = obj2;
  fn.__workletHash = 14452694677256;
  fn.__initData = __initData;
  const animatedStyle = tmpResult.useAnimatedStyle(fn);
  if (cResult[0] === sharedValue) {
    let tmp7;
    let tmp8;
    let tmp11;
    if (cResult[1] === state) {
      tmp7 = cResult[2];
      tmp8 = cResult[3];
    }
    const effect = react.useEffect(tmp7, tmp8);
    if (cResult[4] !== animatedStyle) {
      const items = [closure_4.absoluteFill, animatedStyle];
      cResult[4] = animatedStyle;
      cResult[5] = items;
      tmp11 = items;
    } else {
      tmp11 = cResult[5];
    }
    if (cResult[6] === children) {
      let tmp13;
      if (cResult[7] === contentContainerStyle) {
        tmp13 = cResult[8];
      }
      if (cResult[9] === tmp11) {
        let tmp17;
        if (cResult[10] === tmp13) {
          tmp17 = cResult[11];
        }
        return tmp17;
      }
      const tmp20 = jsx(state(sharedValue[8]).View, { style: tmp11, children: tmp13 });
      cResult[9] = tmp11;
      cResult[10] = tmp13;
      cResult[11] = tmp20;
      tmp17 = tmp20;
    }
    const tmp16 = <closure_5 style={contentContainerStyle}>{children}</closure_5>;
    cResult[6] = children;
    cResult[7] = contentContainerStyle;
    cResult[8] = tmp16;
    tmp13 = tmp16;
  }
  const fn2 = function l() {
    let num = 1;
    set = sharedValue.set;
    if (state === native.TransitionStates.YEETED) {
      num = 0;
    }
    const result = set(num);
  };
  const items1 = [sharedValue, state];
  cResult[0] = sharedValue;
  cResult[1] = state;
  cResult[2] = fn2;
  cResult[3] = items1;
  tmp8 = items1;
  tmp7 = fn2;
}) : ((cleanUp) => {
  let children;
  let contentContainerStyle;
  cleanUp = cleanUp.cleanUp;
  const state = cleanUp.state;
  let sharedValue;
  let tmp = cleanUp;
  ({ contentContainerStyle, children } = cleanUp);
  const useSharedValue = cleanUp(sharedValue[8]).useSharedValue;
  let num = 0;
  cleanUp(sharedValue[8]);
  if (state === cleanUp(sharedValue[9]).TransitionStates.MOUNTED) {
    num = 1;
  }
  sharedValue = useSharedValue(num);
  let fn = function u() {
    let fn;
    let springStandard;
    let value;
    let withSpring;
    let obj = { opacity: withSpring(value, springStandard, "respect-motion-settings", fn) };
    let tmp = spring;
    withSpring = tmp.withSpring;
    value = sharedValue.get();
    fn = function t(arg0) {
      const tmp = arg0 && state === cleanUp(sharedValue[9]).TransitionStates.YEETED;
      if (tmp) {
        const obj = cleanUp(sharedValue[8]);
        obj.runOnJS(closure_1_0)();
      }
    };
    const obj2 = { state, TransitionStates: native.TransitionStates, runOnJS: ReanimatedRexport.runOnJS, cleanUp };
    springStandard = springPresets.springStandard;
    fn.__closure = obj2;
    fn.__workletHash = 16446648633017;
    fn.__initData = __initData;
    return obj;
  };
  const tmpResult = tmp(sharedValue[8]);
  let obj = { withSpring: tmp(tmp2[10]).withSpring, opacity: sharedValue, springStandard: tmp(tmp2[11]).springStandard, state, TransitionStates: tmp(tmp2[9]).TransitionStates, runOnJS: tmp(tmp2[8]).runOnJS, cleanUp };
  fn.__closure = obj;
  fn.__workletHash = 14186737058634;
  fn.__initData = __initData;
  const items = [sharedValue, state];
  const animatedStyle = tmpResult.useAnimatedStyle(fn);
  const effect = react.useEffect(() => {
    let num = 1;
    set = sharedValue.set;
    if (state === native.TransitionStates.YEETED) {
      num = 0;
    }
    const result = set(num);
  }, items);
  const items1 = [closure_4.absoluteFill, animatedStyle];
  const View = state(tmp2[8]).View;
  return <View style={items1}>{null}</View>;
});
const constants = { LIST: "list", EMPTY: "empty", LOADING: "loading" };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((onCreateThreadPress) => {
  let Icon;
  let arr4;
  let canLoadMore;
  let channel;
  let closure_3;
  let contentContainerStyle;
  let formatToPlainString;
  let formatToPlainString2;
  let intl3;
  let intl4;
  let loadMore;
  let obj4;
  let obj7;
  let obj9;
  let onThreadPress;
  let obj = onThreadPress(contentContainerStyle[5]);
  const cResult = obj.c(28);
  ({ channel, onThreadPress } = onCreateThreadPress);
  onCreateThreadPress = onCreateThreadPress.onCreateThreadPress;
  contentContainerStyle = onCreateThreadPress.contentContainerStyle;
  const tmp4 = canLoadMore();
  react = tmp4;
  const obj2 = onThreadPress(contentContainerStyle[12]);
  const activeThreads = obj2.useActiveThreads(channel);
  const joinedThreadIds = activeThreads.joinedThreadIds;
  const unjoinedThreadIds = activeThreads.unjoinedThreadIds;
  const useArchivedThreads = onThreadPress(contentContainerStyle[12]).useArchivedThreads;
  onThreadPress(contentContainerStyle[12]);
  const archivedThreads = useArchivedThreads(channel, onThreadPress(contentContainerStyle[13]).ThreadSortOrder.LATEST_ACTIVITY, loadMore, onThreadPress(contentContainerStyle[14]).ThreadSearchTagSetting.MATCH_SOME);
  const threadIds = archivedThreads.threadIds;
  canLoadMore = archivedThreads.canLoadMore;
  loadMore = archivedThreads.loadMore;
  const loading = archivedThreads.loading;
  if (cResult[0] === canLoadMore) {
    if (cResult[1] === loadMore) {
      let tmp8;
      let items3;
      if (cResult[2] === loading) {
        tmp8 = cResult[3];
      }
      onEndReached = tmp8;
      if (cResult[4] === threadIds) {
        if (cResult[5] === joinedThreadIds) {
          if (cResult[6] === onThreadPress) {
            if (cResult[7] === unjoinedThreadIds) {
              items3 = cResult[8];
            }
            if (loading) {
              let tmp23;
              if (0 === arr4.length) {
                const _Symbol3 = Symbol;
                if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
                  let items = [constants.LOADING];
                  cResult[9] = items;
                  class Y {
                    constructor(key, arg1, state, cleanUp) {
                      let footer;
                      let intl;
                      let tmp13;
                      if (constants.EMPTY === arg1) {
                        return <closure_16 key={key} contentContainerStyle={closure_3.container} state={state} cleanUp={cleanUp}>{null}</closure_16>;
                      } else if (constants.LOADING === arg1) {
                        const items = [, ];
                        ({ container: arr[0], center: arr[1] } = closure_3);
                        return <closure_16 key={key} contentContainerStyle={items} state={state} cleanUp={cleanUp}>{null}</closure_16>;
                      } else if (constants.LIST === arg1) {
                        ({ data: arr4, ListHeaderComponent, ListHeaderComponentStyle: closure_3.header, renderItem, keyExtractor, onEndReached, onEndReachedThreshold: 0.4, accessibilityLabel: intl.string(intl5.t.B2panI), ListFooterComponent: tmp13, ListFooterComponentStyle: footer, contentContainerStyle });
                        const AnimatedFlashList = defaultMVCPConfig.AnimatedFlashList;
                        intl = intl5.intl;
                        tmp13 = undefined;
                        if (loading) {
                          tmp13 = ThreadListLoadingIndicatorDefault;
                        }
                        footer = undefined;
                        if (loading) {
                          footer = closure_3.footer;
                        }
                        return <closure_16 key={key} contentContainerStyle={closure_3.container} state={state} cleanUp={cleanUp}>{null}</closure_16>;
                      }
                    }
                  }
                }
                class Y {
                  constructor(key, arg1, state, cleanUp) {
                    let footer;
                    let intl;
                    let tmp13;
                    if (constants.EMPTY === arg1) {
                      return <closure_16 key={key} contentContainerStyle={closure_3.container} state={state} cleanUp={cleanUp}>{null}</closure_16>;
                    } else if (constants.LOADING === arg1) {
                      const items = [, ];
                      ({ container: arr[0], center: arr[1] } = closure_3);
                      return <closure_16 key={key} contentContainerStyle={items} state={state} cleanUp={cleanUp}>{null}</closure_16>;
                    } else if (constants.LIST === arg1) {
                      ({ data: arr4, ListHeaderComponent, ListHeaderComponentStyle: closure_3.header, renderItem, keyExtractor, onEndReached, onEndReachedThreshold: 0.4, accessibilityLabel: intl.string(intl5.t.B2panI), ListFooterComponent: tmp13, ListFooterComponentStyle: footer, contentContainerStyle });
                      const AnimatedFlashList = defaultMVCPConfig.AnimatedFlashList;
                      intl = intl5.intl;
                      tmp13 = undefined;
                      if (loading) {
                        tmp13 = ThreadListLoadingIndicatorDefault;
                      }
                      footer = undefined;
                      if (loading) {
                        footer = closure_3.footer;
                      }
                      return <closure_16 key={key} contentContainerStyle={closure_3.container} state={state} cleanUp={cleanUp}>{null}</closure_16>;
                    }
                  }
                }
              }
              if (cResult[12] !== onCreateThreadPress) {
                let tmp24 = null;
                if (null != onCreateThreadPress) {
                  const obj3 = { icon: threadIds(Icon, obj4), onPress: onCreateThreadPress, label: intl4.string(onThreadPress(contentContainerStyle[15]).t.rBIGBL), start: true, end: true, arrow: true };
                  const TableRow = onThreadPress(tmp2[16]).TableRow;
                  obj4 = { IconComponent: null };
                  Icon = onThreadPress(tmp2[17]).RowButton.Icon;
                  class Y {
                    constructor(key, arg1, state, cleanUp) {
                      let footer;
                      let intl;
                      let tmp13;
                      if (constants.EMPTY === arg1) {
                        return <closure_16 key={key} contentContainerStyle={closure_3.container} state={state} cleanUp={cleanUp}>{null}</closure_16>;
                      } else if (constants.LOADING === arg1) {
                        const items = [, ];
                        ({ container: arr[0], center: arr[1] } = closure_3);
                        return <closure_16 key={key} contentContainerStyle={items} state={state} cleanUp={cleanUp}>{null}</closure_16>;
                      } else if (constants.LIST === arg1) {
                        ({ data: arr4, ListHeaderComponent, ListHeaderComponentStyle: closure_3.header, renderItem, keyExtractor, onEndReached, onEndReachedThreshold: 0.4, accessibilityLabel: intl.string(intl5.t.B2panI), ListFooterComponent: tmp13, ListFooterComponentStyle: footer, contentContainerStyle });
                        const AnimatedFlashList = defaultMVCPConfig.AnimatedFlashList;
                        intl = intl5.intl;
                        tmp13 = undefined;
                        if (loading) {
                          tmp13 = ThreadListLoadingIndicatorDefault;
                        }
                        footer = undefined;
                        if (loading) {
                          footer = closure_3.footer;
                        }
                        return <closure_16 key={key} contentContainerStyle={closure_3.container} state={state} cleanUp={cleanUp}>{null}</closure_16>;
                      }
                    }
                  }
                  intl4 = onThreadPress(tmp2[15]).intl;
                  tmp24 = threadIds(TableRow, obj3);
                }
                cResult[12] = onCreateThreadPress;
                class Y {
                  constructor(key, arg1, state, cleanUp) {
                    let footer;
                    let intl;
                    let tmp13;
                    if (constants.EMPTY === arg1) {
                      return <closure_16 key={key} contentContainerStyle={closure_3.container} state={state} cleanUp={cleanUp}>{null}</closure_16>;
                    } else if (constants.LOADING === arg1) {
                      const items = [, ];
                      ({ container: arr[0], center: arr[1] } = closure_3);
                      return <closure_16 key={key} contentContainerStyle={items} state={state} cleanUp={cleanUp}>{null}</closure_16>;
                    } else if (constants.LIST === arg1) {
                      ({ data: arr4, ListHeaderComponent, ListHeaderComponentStyle: closure_3.header, renderItem, keyExtractor, onEndReached, onEndReachedThreshold: 0.4, accessibilityLabel: intl.string(intl5.t.B2panI), ListFooterComponent: tmp13, ListFooterComponentStyle: footer, contentContainerStyle });
                      const AnimatedFlashList = defaultMVCPConfig.AnimatedFlashList;
                      intl = intl5.intl;
                      tmp13 = undefined;
                      if (loading) {
                        tmp13 = ThreadListLoadingIndicatorDefault;
                      }
                      footer = undefined;
                      if (loading) {
                        footer = closure_3.footer;
                      }
                      return <closure_16 key={key} contentContainerStyle={closure_3.container} state={state} cleanUp={cleanUp}>{null}</closure_16>;
                    }
                  }
                }
                tmp23 = tmp24;
              } else {
                tmp23 = cResult[13];
              }
              ListHeaderComponent = tmp23;
              if (cResult[14] === contentContainerStyle) {
                if (cResult[15] === tmp23) {
                  if (cResult[16] === arr4) {
                    if (cResult[17] === loading) {
                      if (cResult[18] === onCreateThreadPress) {
                        if (cResult[19] === tmp8) {
                          if (cResult[20] === tmp4.center) {
                            if (cResult[21] === tmp4.container) {
                              if (cResult[22] === tmp4.footer) {
                                let tmp26;
                                if (cResult[23] === tmp4.header) {
                                  tmp26 = cResult[24];
                                }
                                if (cResult[25] === tmp26) {
                                  let tmp27;
                                  if (cResult[26] === tmp15) {
                                    tmp27 = cResult[27];
                                  }
                                  return tmp27;
                                }
                                const obj5 = { items: tmp15, renderItem: null, getItemKey: getThreadListStateKey };
                                class Y {
                                  constructor(key, arg1, state, cleanUp) {
                                    let footer;
                                    let intl;
                                    let tmp13;
                                    if (constants.EMPTY === arg1) {
                                      return <closure_16 key={key} contentContainerStyle={closure_3.container} state={state} cleanUp={cleanUp}>{null}</closure_16>;
                                    } else if (constants.LOADING === arg1) {
                                      const items = [, ];
                                      ({ container: arr[0], center: arr[1] } = closure_3);
                                      return <closure_16 key={key} contentContainerStyle={items} state={state} cleanUp={cleanUp}>{null}</closure_16>;
                                    } else if (constants.LIST === arg1) {
                                      ({ data: arr4, ListHeaderComponent, ListHeaderComponentStyle: closure_3.header, renderItem, keyExtractor, onEndReached, onEndReachedThreshold: 0.4, accessibilityLabel: intl.string(intl5.t.B2panI), ListFooterComponent: tmp13, ListFooterComponentStyle: footer, contentContainerStyle });
                                      const AnimatedFlashList = defaultMVCPConfig.AnimatedFlashList;
                                      intl = intl5.intl;
                                      tmp13 = undefined;
                                      if (loading) {
                                        tmp13 = ThreadListLoadingIndicatorDefault;
                                      }
                                      footer = undefined;
                                      if (loading) {
                                        footer = closure_3.footer;
                                      }
                                      return <closure_16 key={key} contentContainerStyle={closure_3.container} state={state} cleanUp={cleanUp}>{null}</closure_16>;
                                    }
                                  }
                                }
                                const tmp30 = threadIds(onThreadPress(contentContainerStyle[9]).TransitionGroup, obj5);
                                cResult[25] = tmp26;
                                cResult[26] = tmp15;
                                cResult[27] = tmp30;
                                tmp27 = tmp30;
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
                constructor(key, arg1, state, cleanUp) {
                  let footer;
                  let intl;
                  let tmp13;
                  if (constants.EMPTY === arg1) {
                    return <closure_16 key={key} contentContainerStyle={closure_3.container} state={state} cleanUp={cleanUp}>{null}</closure_16>;
                  } else if (constants.LOADING === arg1) {
                    const items = [, ];
                    ({ container: arr[0], center: arr[1] } = closure_3);
                    return <closure_16 key={key} contentContainerStyle={items} state={state} cleanUp={cleanUp}>{null}</closure_16>;
                  } else if (constants.LIST === arg1) {
                    ({ data: arr4, ListHeaderComponent, ListHeaderComponentStyle: closure_3.header, renderItem, keyExtractor, onEndReached, onEndReachedThreshold: 0.4, accessibilityLabel: intl.string(intl5.t.B2panI), ListFooterComponent: tmp13, ListFooterComponentStyle: footer, contentContainerStyle });
                    const AnimatedFlashList = defaultMVCPConfig.AnimatedFlashList;
                    intl = intl5.intl;
                    tmp13 = undefined;
                    if (loading) {
                      tmp13 = ThreadListLoadingIndicatorDefault;
                    }
                    footer = undefined;
                    if (loading) {
                      footer = closure_3.footer;
                    }
                    return <closure_16 key={key} contentContainerStyle={closure_3.container} state={state} cleanUp={cleanUp}>{null}</closure_16>;
                  }
                }
              }
              cResult[14] = contentContainerStyle;
              cResult[15] = tmp23;
              cResult[16] = arr4;
              cResult[17] = loading;
              cResult[18] = onCreateThreadPress;
              cResult[19] = tmp8;
              cResult[20] = tmp4.center;
              cResult[21] = tmp4.container;
              cResult[22] = tmp4.footer;
              cResult[23] = tmp4.header;
              cResult[24] = Y;
              tmp26 = Y;
            }
            if (0 !== arr4.length) {
              const _Symbol2 = Symbol;
              if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
                const items1 = [constants.LIST];
                cResult[11] = items1;
                class Y {
                  constructor(key, arg1, state, cleanUp) {
                    let footer;
                    let intl;
                    let tmp13;
                    if (constants.EMPTY === arg1) {
                      return <closure_16 key={key} contentContainerStyle={closure_3.container} state={state} cleanUp={cleanUp}>{null}</closure_16>;
                    } else if (constants.LOADING === arg1) {
                      const items = [, ];
                      ({ container: arr[0], center: arr[1] } = closure_3);
                      return <closure_16 key={key} contentContainerStyle={items} state={state} cleanUp={cleanUp}>{null}</closure_16>;
                    } else if (constants.LIST === arg1) {
                      ({ data: arr4, ListHeaderComponent, ListHeaderComponentStyle: closure_3.header, renderItem, keyExtractor, onEndReached, onEndReachedThreshold: 0.4, accessibilityLabel: intl.string(intl5.t.B2panI), ListFooterComponent: tmp13, ListFooterComponentStyle: footer, contentContainerStyle });
                      const AnimatedFlashList = defaultMVCPConfig.AnimatedFlashList;
                      intl = intl5.intl;
                      tmp13 = undefined;
                      if (loading) {
                        tmp13 = ThreadListLoadingIndicatorDefault;
                      }
                      footer = undefined;
                      if (loading) {
                        footer = closure_3.footer;
                      }
                      return <closure_16 key={key} contentContainerStyle={closure_3.container} state={state} cleanUp={cleanUp}>{null}</closure_16>;
                    }
                  }
                }
              }
              class Y {
                constructor(key, arg1, state, cleanUp) {
                  let footer;
                  let intl;
                  let tmp13;
                  if (constants.EMPTY === arg1) {
                    return <closure_16 key={key} contentContainerStyle={closure_3.container} state={state} cleanUp={cleanUp}>{null}</closure_16>;
                  } else if (constants.LOADING === arg1) {
                    const items = [, ];
                    ({ container: arr[0], center: arr[1] } = closure_3);
                    return <closure_16 key={key} contentContainerStyle={items} state={state} cleanUp={cleanUp}>{null}</closure_16>;
                  } else if (constants.LIST === arg1) {
                    ({ data: arr4, ListHeaderComponent, ListHeaderComponentStyle: closure_3.header, renderItem, keyExtractor, onEndReached, onEndReachedThreshold: 0.4, accessibilityLabel: intl.string(intl5.t.B2panI), ListFooterComponent: tmp13, ListFooterComponentStyle: footer, contentContainerStyle });
                    const AnimatedFlashList = defaultMVCPConfig.AnimatedFlashList;
                    intl = intl5.intl;
                    tmp13 = undefined;
                    if (loading) {
                      tmp13 = ThreadListLoadingIndicatorDefault;
                    }
                    footer = undefined;
                    if (loading) {
                      footer = closure_3.footer;
                    }
                    return <closure_16 key={key} contentContainerStyle={closure_3.container} state={state} cleanUp={cleanUp}>{null}</closure_16>;
                  }
                }
              }
            } else {
              const _Symbol = Symbol;
              if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
                const items2 = [constants.EMPTY];
                cResult[10] = items2;
                class Y {
                  constructor(key, arg1, state, cleanUp) {
                    let footer;
                    let intl;
                    let tmp13;
                    if (constants.EMPTY === arg1) {
                      return <closure_16 key={key} contentContainerStyle={closure_3.container} state={state} cleanUp={cleanUp}>{null}</closure_16>;
                    } else if (constants.LOADING === arg1) {
                      const items = [, ];
                      ({ container: arr[0], center: arr[1] } = closure_3);
                      return <closure_16 key={key} contentContainerStyle={items} state={state} cleanUp={cleanUp}>{null}</closure_16>;
                    } else if (constants.LIST === arg1) {
                      ({ data: arr4, ListHeaderComponent, ListHeaderComponentStyle: closure_3.header, renderItem, keyExtractor, onEndReached, onEndReachedThreshold: 0.4, accessibilityLabel: intl.string(intl5.t.B2panI), ListFooterComponent: tmp13, ListFooterComponentStyle: footer, contentContainerStyle });
                      const AnimatedFlashList = defaultMVCPConfig.AnimatedFlashList;
                      intl = intl5.intl;
                      tmp13 = undefined;
                      if (loading) {
                        tmp13 = ThreadListLoadingIndicatorDefault;
                      }
                      footer = undefined;
                      if (loading) {
                        footer = closure_3.footer;
                      }
                      return <closure_16 key={key} contentContainerStyle={closure_3.container} state={state} cleanUp={cleanUp}>{null}</closure_16>;
                    }
                  }
                }
              }
            }
          }
        }
      }
      items3 = [];
      if (joinedThreadIds.length > 0) {
        const push = items3.push;
        const obj6 = { type: "section", title: formatToPlainString(onThreadPress(contentContainerStyle[15]).t.fcXlhe, obj7) };
        let intl = onThreadPress(tmp2[15]).intl;
        formatToPlainString = intl.formatToPlainString;
        obj7 = { count: null };
        class Y {
          constructor(key, arg1, state, cleanUp) {
            let footer;
            let intl;
            let tmp13;
            if (constants.EMPTY === arg1) {
              return <closure_16 key={key} contentContainerStyle={closure_3.container} state={state} cleanUp={cleanUp}>{null}</closure_16>;
            } else if (constants.LOADING === arg1) {
              const items = [, ];
              ({ container: arr[0], center: arr[1] } = closure_3);
              return <closure_16 key={key} contentContainerStyle={items} state={state} cleanUp={cleanUp}>{null}</closure_16>;
            } else if (constants.LIST === arg1) {
              ({ data: arr4, ListHeaderComponent, ListHeaderComponentStyle: closure_3.header, renderItem, keyExtractor, onEndReached, onEndReachedThreshold: 0.4, accessibilityLabel: intl.string(intl5.t.B2panI), ListFooterComponent: tmp13, ListFooterComponentStyle: footer, contentContainerStyle });
              const AnimatedFlashList = defaultMVCPConfig.AnimatedFlashList;
              intl = intl5.intl;
              tmp13 = undefined;
              if (loading) {
                tmp13 = ThreadListLoadingIndicatorDefault;
              }
              footer = undefined;
              if (loading) {
                footer = closure_3.footer;
              }
              return <closure_16 key={key} contentContainerStyle={closure_3.container} state={state} cleanUp={cleanUp}>{null}</closure_16>;
            }
          }
        }
        const arr = push(obj6);
        const item = joinedThreadIds.forEach((threadId, index) => {
          const obj = { type: "thread", threadId, start: 0 === index, end: index === joinedThreadIds.length - 1, onPress: onThreadPress };
          return items3.push(obj);
        });
      }
      if (unjoinedThreadIds.length > 0) {
        const push2 = items3.push;
        const obj8 = { type: "section", title: formatToPlainString2(onThreadPress(contentContainerStyle[15]).t.GHY7yQ, obj9) };
        const intl2 = onThreadPress(tmp2[15]).intl;
        formatToPlainString2 = intl2.formatToPlainString;
        obj9 = { count: null };
        class Y {
          constructor(key, arg1, state, cleanUp) {
            let footer;
            let intl;
            let tmp13;
            if (constants.EMPTY === arg1) {
              return <closure_16 key={key} contentContainerStyle={closure_3.container} state={state} cleanUp={cleanUp}>{null}</closure_16>;
            } else if (constants.LOADING === arg1) {
              const items = [, ];
              ({ container: arr[0], center: arr[1] } = closure_3);
              return <closure_16 key={key} contentContainerStyle={items} state={state} cleanUp={cleanUp}>{null}</closure_16>;
            } else if (constants.LIST === arg1) {
              ({ data: arr4, ListHeaderComponent, ListHeaderComponentStyle: closure_3.header, renderItem, keyExtractor, onEndReached, onEndReachedThreshold: 0.4, accessibilityLabel: intl.string(intl5.t.B2panI), ListFooterComponent: tmp13, ListFooterComponentStyle: footer, contentContainerStyle });
              const AnimatedFlashList = defaultMVCPConfig.AnimatedFlashList;
              intl = intl5.intl;
              tmp13 = undefined;
              if (loading) {
                tmp13 = ThreadListLoadingIndicatorDefault;
              }
              footer = undefined;
              if (loading) {
                footer = closure_3.footer;
              }
              return <closure_16 key={key} contentContainerStyle={closure_3.container} state={state} cleanUp={cleanUp}>{null}</closure_16>;
            }
          }
        }
        push2(obj8);
        const item1 = unjoinedThreadIds.forEach((threadId, index) => {
          const obj = { type: "thread", threadId, start: 0 === index, end: index === unjoinedThreadIds.length - 1, onPress: onThreadPress };
          return items3.push(obj);
        });
      }
      if (threadIds.length > 0) {
        const push3 = items3.push;
        ({ type: "section", title: intl3.string(onThreadPress(contentContainerStyle[15]).t.XsgrjS) });
        intl3 = onThreadPress(tmp2[15]).intl;
        class Y {
          constructor(key, arg1, state, cleanUp) {
            let footer;
            let intl;
            let tmp13;
            if (constants.EMPTY === arg1) {
              return <closure_16 key={key} contentContainerStyle={closure_3.container} state={state} cleanUp={cleanUp}>{null}</closure_16>;
            } else if (constants.LOADING === arg1) {
              const items = [, ];
              ({ container: arr[0], center: arr[1] } = closure_3);
              return <closure_16 key={key} contentContainerStyle={items} state={state} cleanUp={cleanUp}>{null}</closure_16>;
            } else if (constants.LIST === arg1) {
              ({ data: arr4, ListHeaderComponent, ListHeaderComponentStyle: closure_3.header, renderItem, keyExtractor, onEndReached, onEndReachedThreshold: 0.4, accessibilityLabel: intl.string(intl5.t.B2panI), ListFooterComponent: tmp13, ListFooterComponentStyle: footer, contentContainerStyle });
              const AnimatedFlashList = defaultMVCPConfig.AnimatedFlashList;
              intl = intl5.intl;
              tmp13 = undefined;
              if (loading) {
                tmp13 = ThreadListLoadingIndicatorDefault;
              }
              footer = undefined;
              if (loading) {
                footer = closure_3.footer;
              }
              return <closure_16 key={key} contentContainerStyle={closure_3.container} state={state} cleanUp={cleanUp}>{null}</closure_16>;
            }
          }
        }
        const item2 = threadIds.forEach((threadId, index) => {
          const obj = { type: "thread", threadId, start: 0 === index, end: index === threadIds.length - 1, onPress: onThreadPress };
          return items3.push(obj);
        });
      }
      cResult[4] = threadIds;
      cResult[5] = joinedThreadIds;
      cResult[6] = onThreadPress;
      cResult[7] = unjoinedThreadIds;
      cResult[8] = items3;
      arr4 = items3;
    }
  }
  const fn = function n() {
    const tmp = !loading && canLoadMore;
    if (tmp) {
      loadMore();
    }
  };
  cResult[0] = canLoadMore;
  cResult[1] = loadMore;
  cResult[2] = loading;
  cResult[3] = fn;
  tmp8 = fn;
}) : ((onCreateThreadPress) => {
  let channel;
  let closure_3;
  let onThreadPress;
  ({ channel, onThreadPress } = onCreateThreadPress);
  onCreateThreadPress = onCreateThreadPress.onCreateThreadPress;
  const contentContainerStyle = onCreateThreadPress.contentContainerStyle;
  let canLoadMore;
  let loadMore;
  let tmp = canLoadMore();
  react = tmp;
  let obj = onThreadPress(contentContainerStyle[12]);
  const activeThreads = obj.useActiveThreads(channel);
  const joinedThreadIds = activeThreads.joinedThreadIds;
  const unjoinedThreadIds = activeThreads.unjoinedThreadIds;
  const useArchivedThreads = onThreadPress(contentContainerStyle[12]).useArchivedThreads;
  const tmp3 = onThreadPress(contentContainerStyle[12]);
  const archivedThreads = useArchivedThreads(channel, onThreadPress(contentContainerStyle[13]).ThreadSortOrder.LATEST_ACTIVITY, loadMore, onThreadPress(contentContainerStyle[14]).ThreadSearchTagSetting.MATCH_SOME);
  const threadIds = archivedThreads.threadIds;
  canLoadMore = archivedThreads.canLoadMore;
  loadMore = archivedThreads.loadMore;
  const loading = archivedThreads.loading;
  let items = [loading, canLoadMore, loadMore];
  onEndReached = react.useCallback(() => {
    const tmp = !loading && canLoadMore;
    if (tmp) {
      loadMore();
    }
  }, items);
  let items1 = [threadIds, joinedThreadIds, onThreadPress, unjoinedThreadIds];
  const memo = react.useMemo(() => {
    let intl;
    let intl2;
    let intl3;
    let obj3;
    let obj5;
    const items = [];
    if (joinedThreadIds.length > 0) {
      const push2 = items.push;
      const obj2 = { type: "section", title: intl2.formatToPlainString(onThreadPress(contentContainerStyle[15]).t.fcXlhe, obj3) };
      intl2 = onThreadPress(contentContainerStyle[15]).intl;
      obj3 = { count: joinedThreadIds.length };
      push2(obj2);
      const item = joinedThreadIds.forEach((threadId, index) => {
        const obj = { type: "thread", threadId, start: 0 === index, end: index === joinedThreadIds.length - 1, onPress: onThreadPress };
        return items.push(obj);
      });
    }
    if (unjoinedThreadIds.length > 0) {
      const push3 = items.push;
      const obj4 = { type: "section", title: intl3.formatToPlainString(onThreadPress(contentContainerStyle[15]).t.GHY7yQ, obj5) };
      intl3 = onThreadPress(contentContainerStyle[15]).intl;
      obj5 = { count: unjoinedThreadIds.length };
      push3(obj4);
      const item1 = unjoinedThreadIds.forEach((threadId, index) => {
        const obj = { type: "thread", threadId, start: 0 === index, end: index === unjoinedThreadIds.length - 1, onPress: onThreadPress };
        return items.push(obj);
      });
    }
    if (threadIds.length > 0) {
      let obj = { type: "section", title: intl.string(onThreadPress(contentContainerStyle[15]).t.XsgrjS) };
      const push = items.push;
      intl = onThreadPress(contentContainerStyle[15]).intl;
      push(obj);
      const item2 = threadIds.forEach((threadId, index) => {
        const obj = { type: "thread", threadId, start: 0 === index, end: index === threadIds.length - 1, onPress: onThreadPress };
        return items.push(obj);
      });
    }
    return items;
  }, items1);
  let items2 = [memo.length, loading];
  const items3 = [onCreateThreadPress];
  const memo1 = react.useMemo(() => {
    let items2;
    if (loading) {
      if (0 === memo.length) {
        const items = [constants.LOADING];
        items2 = items;
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
  const memo2 = react.useMemo(() => {
    let tmp2 = null;
    if (null != onCreateThreadPress) {
      const TableRow = TableRow2.TableRow;
      ({ IconComponent: ThreadPlusIcon.ThreadPlusIcon });
      const Icon = RowButton.RowButton.Icon;
      const intl = intl5.intl;
      tmp2 = <TableRow icon={null} onPress={tmp} label={intl.string(intl5.t.rBIGBL)} start end arrow />;
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
  const callback1 = react.useCallback((key, arg1, state, cleanUp) => {
    let footer;
    let intl;
    let tmp13;
    if (constants.EMPTY === arg1) {
      return <closure_16 key={key} contentContainerStyle={closure_3.container} state={state} cleanUp={cleanUp}>{null}</closure_16>;
    } else if (constants.LOADING === arg1) {
      const items = [, ];
      ({ container: arr[0], center: arr[1] } = closure_3);
      return <closure_16 key={key} contentContainerStyle={items} state={state} cleanUp={cleanUp}>{null}</closure_16>;
    } else if (constants.LIST === arg1) {
      ({ data: memo, ListHeaderComponent: memo2, ListHeaderComponentStyle: closure_3.header, renderItem, keyExtractor, onEndReached, onEndReachedThreshold: 0.4, accessibilityLabel: intl.string(intl5.t.B2panI), ListFooterComponent: tmp13, ListFooterComponentStyle: footer, contentContainerStyle });
      const AnimatedFlashList = defaultMVCPConfig.AnimatedFlashList;
      intl = intl5.intl;
      tmp13 = undefined;
      if (loading) {
        tmp13 = ThreadListLoadingIndicatorDefault;
      }
      footer = undefined;
      if (loading) {
        footer = closure_3.footer;
      }
      return <closure_16 key={key} contentContainerStyle={closure_3.container} state={state} cleanUp={cleanUp}>{null}</closure_16>;
    }
  }, items4);
  let obj2 = { items: memo1, renderItem: callback1, getItemKey: getThreadListStateKey };
  return threadIds(onThreadPress(contentContainerStyle[9]).TransitionGroup, obj2);
});
let result = size.fileFinishedImporting("modules/threads/native/components/redesign/ThreadList.tsx");

export default tmp4;