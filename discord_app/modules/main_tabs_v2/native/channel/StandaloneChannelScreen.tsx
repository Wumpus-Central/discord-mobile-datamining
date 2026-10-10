// === Module 16970: StandaloneChannelScreen ===

// Module 16970 (StandaloneChannelScreen)
import nativeDefault from "native" /* 587 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4976 */;
import PressableNavigatorBackIcon from "PressableNavigatorBackIcon" /* 9299 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2065 */;

require = fn;
let navigation = ["ref"];
get_ActivityIndicator = fn(17);
({ View: metroRequire, StyleSheet } = get_ActivityIndicator);
const MainTabsV2Constants = fn(9298);
({ ONYX_BORDER_WIDTH, MIN_HEADER_HEIGHT: closure_8 } = MainTabsV2Constants);
const Constants = fn(1085);
({ ChannelTypes: closure_9, EMPTY_STRING_SNOWFLAKE_ID: c10, ME: closure_11, ThemeTypes: closure_12 } = Constants);
const StaticChannelRoute = fn(2072).StaticChannelRoute;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
const createStyles = fn(5092);
let obj = { container: { flex: 1 }, onyxContainerBorder: { borderLeftWidth: ONYX_BORDER_WIDTH, borderLeftColor: nativeDefault.colors.APP_FRAME_BORDER, borderTopWidth: ONYX_BORDER_WIDTH, borderTopColor: "transparent" }, contentContainer: null, containerEmpty: null, headerWrapper: null, headerBottomBorder: null, headerWithFadingFrame: null, splitDivider: null, splitDividerTop: null, actions: null, spacer: null };
let obj3 = { borderLeftWidth: ONYX_BORDER_WIDTH, borderLeftColor: nativeDefault.colors.APP_FRAME_BORDER, borderTopWidth: ONYX_BORDER_WIDTH, borderTopColor: "transparent" };
obj.contentContainer = { flex: 1, backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND };
let obj4 = { flex: 1, backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND };
obj.containerEmpty = { backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND };
let obj5 = { backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND };
obj.headerWrapper = { zIndex: 1, backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND, flexDirection: "row", alignItems: "center", flexShrink: 0 };
let obj7 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj7.top = undefined;
obj7.height = 1;
obj7.backgroundColor = nativeDefault.colors.STANDALONE_CHANNEL_HEADER_BORDER;
obj.headerBottomBorder = obj7;
let obj6 = { zIndex: 1, backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND, flexDirection: "row", alignItems: "center", flexShrink: 0 };
obj.headerWithFadingFrame = { borderTopLeftRadius: nativeDefault.modules.mobile.CHANNEL_DRAWER_CORNER_RADIUS };
let obj8 = { borderTopLeftRadius: nativeDefault.modules.mobile.CHANNEL_DRAWER_CORNER_RADIUS };
obj.splitDivider = { borderLeftWidth: nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH, borderLeftColor: nativeDefault.colors.APP_FRAME_BORDER };
let obj9 = { borderLeftWidth: nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH, borderLeftColor: nativeDefault.colors.APP_FRAME_BORDER };
obj.splitDividerTop = { borderTopWidth: nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH, borderTopColor: nativeDefault.colors.APP_FRAME_BORDER };
let obj10 = { borderTopWidth: nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH, borderTopColor: nativeDefault.colors.APP_FRAME_BORDER };
obj.actions = { marginRight: nativeDefault.space.PX_16 };
let obj11 = { marginRight: nativeDefault.space.PX_16 };
obj.spacer = { width: nativeDefault.space.PX_16 };
let closure_17 = createStyles.createStyles(obj);
let ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function Header(channelId) {
  const cResult = channelId(isNavigationScreen[11]).c(56);
  channelId = channelId.channelId;
  ({ screenIndex, guildId } = channelId);
  isNavigationScreen = channelId.isNavigationScreen;
  ({ frame, showCreateThread, isBackEnabled, measureNavigationTTI } = channelId);
  let obj = channelId(isNavigationScreen[11]);
  navigation = channelId(isNavigationScreen[12]).useNavigation();
  const tmp5 = closure_17();
  const top = guildId(isNavigationScreen[13])().top;
  const obj2 = channelId(isNavigationScreen[12]);
  const gradientTop = channelId(isNavigationScreen[14]).useGradientTop();
  if (null != frame) {
    const headerWithFadingFrame = tmp5.headerWithFadingFrame;
  }
  if (null != frame) {
    const splitDivider = tmp5.splitDivider;
  }
  if (null != frame) {
    const splitDividerTop = tmp5.splitDividerTop;
  }
  if (cResult[0] === frame) {
    if (cResult[1] === top) {
      if (cResult[3] === gradientTop) {
        if (cResult[4] === tmp5.headerWrapper) {
          if (cResult[5] === headerWithFadingFrame) {
            if (cResult[6] === splitDivider) {
              if (cResult[7] === splitDividerTop) {
                if (cResult[10] === isNavigationScreen) {
                  if (cResult[11] === navigation) {
                    let tmp10 = cResult[12];
                  }
                  const onPress = tmp10;
                  class P {
                    constructor() {
                      if (isNavigationScreen) {
                        tmp = closure_3;
                        goBackResult = closure_3.goBack();
                      }
                      return;
                    }
                  }
                  const _Symbol = Symbol;
                  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
                    const items = [];
                    class P {
                      constructor() {
                        if (isNavigationScreen) {
                          tmp = closure_3;
                          goBackResult = closure_3.goBack();
                        }
                        return;
                      }
                    }
                    cResult[13] = items;
                  }
                  if (cResult[14] === channelId) {
                    tmp(tmp2[16]);
                    class P {
                      constructor() {
                        if (isNavigationScreen) {
                          tmp = closure_3;
                          goBackResult = closure_3.goBack();
                        }
                        return;
                      }
                    }
                    noop = tmp16;
                    let tmp17 = null != tmp16;
                    if (tmp17) {
                      tmp17 = tmp16 !== closure_11;
                    }
                    const _Symbol2 = Symbol;
                    class M {
                      constructor() {
                        obj = closure_0(closure_2[15]);
                        tmp = guildId;
                        if (obj.isFavoritesGuildId(guildId)) {
                          tmp2 = closure_7;
                          tmp3 = channelId;
                          channel = closure_7.getChannel(channelId);
                          tmp5 = null;
                          guild_id = undefined;
                          if (channel != null) {
                            guild_id = channel.guild_id;
                          }
                          tmp = guild_id;
                        }
                        return tmp;
                      }
                    }
                    if (cResult[19] === channelId) {
                      if (cResult[20] === tmp16) {
                        let tmp21 = cResult[21];
                      }
                      if (cResult[22] === tmp17) {
                        if (cResult[23] === tmp10) {
                          if (cResult[24] === tmp21) {
                            if (cResult[26] !== tmp5.headerBottomBorder) {
                              class P {
                                constructor() {
                                  if (isNavigationScreen) {
                                    tmp = closure_3;
                                    goBackResult = closure_3.goBack();
                                  }
                                  return;
                                }
                              }
                              tmp29[0] = tmp5.headerBottomBorder;
                              cResult[26] = tmp5.headerBottomBorder;
                              class M {
                                constructor() {
                                  obj = closure_0(closure_2[15]);
                                  tmp = guildId;
                                  if (obj.isFavoritesGuildId(guildId)) {
                                    tmp2 = closure_7;
                                    tmp3 = channelId;
                                    channel = closure_7.getChannel(channelId);
                                    tmp5 = null;
                                    guild_id = undefined;
                                    if (channel != null) {
                                      guild_id = channel.guild_id;
                                    }
                                    tmp = guild_id;
                                  }
                                  return tmp;
                                }
                              }
                              const tmp30 = closure_14(closure_6, tmp29);
                            }
                            class P {
                              constructor() {
                                if (isNavigationScreen) {
                                  tmp = closure_3;
                                  goBackResult = closure_3.goBack();
                                }
                                return;
                              }
                            }
                            let tmp32 = tmp22;
                            if (!isBackEnabled) {
                              class P {
                                constructor() {
                                  if (isNavigationScreen) {
                                    tmp = closure_3;
                                    goBackResult = closure_3.goBack();
                                  }
                                  return;
                                }
                              }
                              tmp35[0] = tmp5.spacer;
                              tmp32 = closure_14(closure_6, tmp35);
                            }
                            cResult[28] = cResult[25];
                            class M {
                              constructor() {
                                obj = closure_0(closure_2[15]);
                                tmp = guildId;
                                if (obj.isFavoritesGuildId(guildId)) {
                                  tmp2 = closure_7;
                                  tmp3 = channelId;
                                  channel = closure_7.getChannel(channelId);
                                  tmp5 = null;
                                  guild_id = undefined;
                                  if (channel != null) {
                                    guild_id = channel.guild_id;
                                  }
                                  tmp = guild_id;
                                }
                                return tmp;
                              }
                            }
                            cResult[30] = tmp5.spacer;
                            cResult[31] = tmp32;
                          }
                        }
                      }
                      class P {
                        constructor() {
                          if (isNavigationScreen) {
                            tmp = closure_3;
                            goBackResult = closure_3.goBack();
                          }
                          return;
                        }
                      }
                      if (tmp17) {
                        const obj4 = { triggerOnLongPress: true, align: "below", items: tmp21, children: null };
                        class P {
                          constructor() {
                            if (isNavigationScreen) {
                              tmp = closure_3;
                              goBackResult = closure_3.goBack();
                            }
                            return;
                          }
                        }
                        const tmp23Result = tmp23(tmp(tmp2[20]).ContextMenu, obj4);
                      } else {
                        { onPress: null }.onPress = tmp10;
                        class P {
                          constructor() {
                            if (isNavigationScreen) {
                              tmp = closure_3;
                              goBackResult = closure_3.goBack();
                            }
                            return;
                          }
                        }
                        const obj5 = { onPress: null };
                      }
                      cResult[22] = tmp17;
                      cResult[23] = tmp10;
                      class M {
                        constructor() {
                          obj = closure_0(closure_2[15]);
                          tmp = guildId;
                          if (obj.isFavoritesGuildId(guildId)) {
                            tmp2 = closure_7;
                            tmp3 = channelId;
                            channel = closure_7.getChannel(channelId);
                            tmp5 = null;
                            guild_id = undefined;
                            if (channel != null) {
                              guild_id = channel.guild_id;
                            }
                            tmp = guild_id;
                          }
                          return tmp;
                        }
                      }
                      cResult[24] = tmp21;
                      cResult[25] = tmp23Result;
                    }
                    const obj6 = {
                      IconComponent: tmp(tmp2[18]).ServerIcon,
                      label: tmp20,
                      action() {
                                          NavigationRouteUtils.navigateToRootTab({ screen: "guilds", guildId, channelId, resetRoot: false, drawerOpen: false });
                                        }
                    };
                    const items1 = [obj6];
                    cResult[19] = channelId;
                    cResult[20] = tmp16;
                    cResult[21] = items1;
                    tmp21 = items1;
                  }
                  class M {
                    constructor() {
                      obj = closure_0(closure_2[15]);
                      tmp = guildId;
                      if (obj.isFavoritesGuildId(guildId)) {
                        tmp2 = closure_7;
                        tmp3 = channelId;
                        channel = closure_7.getChannel(channelId);
                        tmp5 = null;
                        guild_id = undefined;
                        if (channel != null) {
                          guild_id = channel.guild_id;
                        }
                        tmp = guild_id;
                      }
                      return tmp;
                    }
                  }
                  const items2 = [guildId, channelId];
                  cResult[14] = channelId;
                  cResult[15] = guildId;
                  cResult[16] = M;
                  cResult[17] = items2;
                }
                class P {
                  constructor() {
                    if (isNavigationScreen) {
                      tmp = closure_3;
                      goBackResult = closure_3.goBack();
                    }
                    return;
                  }
                }
                cResult[10] = isNavigationScreen;
                cResult[11] = navigation;
                tmp10 = P;
              }
            }
          }
        }
      }
      tmp9[0] = tmp5.headerWrapper;
      tmp9[1] = gradientTop;
      tmp9[2] = headerWithFadingFrame;
      tmp9[3] = splitDivider;
      tmp9[4] = splitDividerTop;
      cResult[3] = gradientTop;
      cResult[4] = tmp5.headerWrapper;
      cResult[5] = headerWithFadingFrame;
      cResult[6] = splitDivider;
      cResult[7] = splitDividerTop;
      cResult[8] = cResult[2];
      cResult[9] = tmp9;
    }
  }
  if (null != frame) {
    const obj7 = { marginTop: top, minHeight: null };
    class P {
      constructor() {
        if (isNavigationScreen) {
          tmp = closure_3;
          goBackResult = closure_3.goBack();
        }
        return;
      }
    }
    obj7.minHeight = minHeight;
    let obj8 = obj7;
  } else {
    obj8 = { paddingTop: top, minHeight: null };
    class P {
      constructor() {
        if (isNavigationScreen) {
          tmp = closure_3;
          goBackResult = closure_3.goBack();
        }
        return;
      }
    }
    obj8.minHeight = top + minHeight;
  }
  cResult[0] = frame;
  cResult[1] = top;
  cResult[2] = obj8;
  const obj3 = channelId(isNavigationScreen[14]);
}) : (function Header(channelId) {
  channelId = channelId.channelId;
  ({ screenIndex, guildId } = channelId);
  const isNavigationScreen = channelId.isNavigationScreen;
  const frame = channelId.frame;
  const showCreateThread = channelId.showCreateThread;
  ({ isBackEnabled, measureNavigationTTI } = channelId);
  navigation = channelId(isNavigationScreen[12]).useNavigation();
  const tmp4 = closure_17();
  noop = tmp4;
  const top = guildId(isNavigationScreen[13])().top;
  let obj = channelId(isNavigationScreen[12]);
  const gradientTop = channelId(isNavigationScreen[14]).useGradientTop();
  let items = [, , , , , , ];
  ({ headerWrapper: arr[0], headerWithFadingFrame: arr[1], splitDivider: arr[2], splitDividerTop: arr[3] } = tmp4);
  items[4] = gradientTop;
  items[5] = frame;
  items[6] = top;
  const memo = noop.useMemo(() => {
    const items = [headerWrapper.headerWrapper, gradientTop, , , , ];
    let prop;
    if (null != frame) {
      prop = headerWrapper.headerWithFadingFrame;
    }
    items[2] = prop;
    let splitDivider;
    if (null != frame) {
      splitDivider = headerWrapper.splitDivider;
    }
    items[3] = splitDivider;
    let splitDividerTop;
    if (null != frame) {
      splitDividerTop = headerWrapper.splitDividerTop;
    }
    items[4] = splitDividerTop;
    if (null != frame) {
      const obj2 = { marginTop: top, minHeight };
      let obj = obj2;
    } else {
      obj = { paddingTop: top, minHeight: top + minHeight };
    }
    items[5] = obj;
    return items;
  }, items);
  const items1 = [navigation, isNavigationScreen];
  const onPress = noop.useCallback(() => {
    if (isNavigationScreen) {
      navigation.goBack();
    }
  }, items1);
  let obj2 = channelId(isNavigationScreen[14]);
  const items2 = [gradientTop];
  const items3 = [guildId, channelId];
  const stateFromStores = channelId(isNavigationScreen[16]).useStateFromStores(items2, () => {
    let tmp = guildId;
    if (obj.isFavoritesGuildId(guildId)) {
      const channel = ChannelStore.getChannel(channelId);
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      tmp = guild_id;
    }
    return tmp;
  }, items3);
  const items4 = [stateFromStores];
  const obj4 = { IconComponent: null, label: null, action: null };
  const memo1 = noop.useMemo(() => {
    let tmp2 = null != stateFromStores;
    if (tmp2) {
      tmp2 = tmp !== closure_2_11;
    }
    return tmp2;
  }, items4);
  obj4.IconComponent = channelId(isNavigationScreen[18]).ServerIcon;
  const intl = channelId(isNavigationScreen[17]).intl;
  obj4.label = intl.string(channelId(isNavigationScreen[17]).t.WYj55Y);
  obj4.action = function action() {
    NavigationRouteUtils.navigateToRootTab({ screen: "guilds", guildId: stateFromStores, channelId, resetRoot: false, drawerOpen: false });
  };
  const items5 = [obj4];
  if (memo1) {
    const obj5 = {
      triggerOnLongPress: true,
      align: "below",
      items: items5,
      children(ref) {
          const merged = Object.assign(ref, Object.assign({ ref: 0 }));
          const obj = { ref: ref.ref };
          const merged1 = Object.assign(merged);
          obj.onPress = onPress;
          return closure_2_14(PressableNavigatorBackIcon.PressableNavigatorBackIcon, obj);
        }
    };
    let tmp13Result1 = closure_14(tmp(tmp2[20]).ContextMenu, obj5);
    let tmp13 = closure_14;
  } else {
    const obj6 = { onPress };
    tmp13Result1 = closure_14(tmp(tmp2[21]).PressableNavigatorBackIcon, obj6);
    tmp13 = closure_14;
  }
  const items6 = [tmp13(top, { style: tmp4.headerBottomBorder }), ];
  if (!isBackEnabled) {
    const obj8 = { style: tmp4.spacer };
    tmp13Result1 = tmp13(tmp16, obj8);
  }
  const obj9 = { children: null };
  const obj10 = { children: null };
  const items7 = [tmp13Result1, tmp13(guildId(isNavigationScreen[22]), { channelId, isNavigationScreen, screenIndex, showCreateThread }), tmp13(guildId(isNavigationScreen[23]), { containerStyle: tmp4.actions, channelId, screenIndex, showCreateThread })];
  obj10.children = items7;
  items6[1] = closure_15(channelId(isNavigationScreen[24]).LayerScope, obj10);
  obj9.children = items6;
  const tmp14Result = closure_15(closure_16, obj9);
  if (measureNavigationTTI) {
    const obj12 = { name: "channel_header", tracking: "include", style: memo, children: tmp14Result };
    let tmp13Result = tmp13(tmp(tmp2[25]).NavTTIView, obj12);
  } else {
    const obj13 = { style: memo, children: tmp14Result };
    tmp13Result = tmp13(tmp16, obj13);
  }
  const obj14 = { children: null };
  const items8 = [tmp13Result, frame];
  obj14.children = items8;
  return closure_15(closure_16, obj14);
});
ReactCompilerGating = fn(558);
let obj12 = { width: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/StandaloneChannelScreen.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function StandaloneChannelScreen(frame) {
  const cResult = channelId(frame[11]).c(101);
  ({ guildId, channelId } = frame);
  ({ isNavigationTTIVisible, isNavigationScreen } = frame);
  frame = frame.frame;
  const showCreateThread = frame.showCreateThread;
  const screenIndex = frame.screenIndex;
  const tmp4 = closure_17();
  let obj = channelId(frame[11]);
  navigation = channelId(frame[12]).useNavigation();
  const obj2 = channelId(frame[12]);
  const isSwipeToMemberListEnabled = channelId(frame[26]).useIsSwipeToMemberListEnabled();
  const needSubscriptionToAccess = isNavigationScreen(frame[27])(channelId).needSubscriptionToAccess;
  const obj3 = channelId(frame[26]);
  let tmp8 = guildId;
  if (guildId == null) {
    tmp8 = closure_10;
  }
  const canSeeOnboardingHome = channelId(frame[28]).useCanSeeOnboardingHome(tmp8);
  navigation.useRef(null);
  const obj4 = channelId(frame[28]);
  const tmp11 = isNavigationScreen(frame[29])();
  const isChatLockedOpen = isNavigationScreen(frame[30])().isChatLockedOpen;
  let onyxContainerBorder;
  if (null == frame) {
    if (tmp11 === constants2.ONYX) {
      if (!tmp13) {
        onyxContainerBorder = tmp4.onyxContainerBorder;
      }
    }
  }
  if (cResult[0] === tmp4.container) {
    if (cResult[1] === onyxContainerBorder) {
      let tmp15 = cResult[2];
    }
    let splitDivider;
    if (null != frame) {
      splitDivider = tmp4.splitDivider;
    }
    if (cResult[3] === tmp4.contentContainer) {
      let tmp19 = !isChatLockedOpen;
      const isForumChannelSearchActive = channelId(tmp2[31]).useIsForumChannelSearchActive(channelId);
      if (isChatLockedOpen) {
        tmp19 = isNavigationScreen;
      }
      if (tmp19) {
        tmp19 = !isForumChannelSearchActive;
      }
      const isBackEnabled = tmp19;
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[6] = items;
        let tmp21 = items;
      } else {
        tmp21 = cResult[6];
      }
      if (cResult[7] !== channelId) {
        class Y {
          constructor() {
            channel = null;
            if (null != channelId) {
              tmp3 = closure_7;
              channel = closure_7.getChannel(tmp);
            }
            return channel;
          }
        }
        const items1 = [channelId];
        cResult[7] = channelId;
        cResult[8] = Y;
        cResult[9] = items1;
        let tmp24 = items1;
      } else {
        class Y {
          constructor() {
            channel = null;
            if (null != channelId) {
              tmp3 = closure_7;
              channel = closure_7.getChannel(tmp);
            }
            return channel;
          }
        }
        tmp24 = cResult[9];
      }
      const tmpResult = channelId(tmp2[31]);
      const stateFromStores = channelId(tmp2[16]).useStateFromStores(tmp21, Y, tmp24);
      channelId(tmp2[32]);
      if (null != channelId) {
        class Y {
          constructor() {
            channel = null;
            if (null != channelId) {
              tmp3 = closure_7;
              channel = closure_7.getChannel(tmp);
            }
            return channel;
          }
        }
      }
      if (cResult[10] === tmp15) {
        class Y {
          constructor() {
            channel = null;
            if (null != channelId) {
              tmp3 = closure_7;
              channel = closure_7.getChannel(tmp);
            }
            return channel;
          }
        }
        const _Symbol2 = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          class Y {
            constructor() {
              channel = null;
              if (null != channelId) {
                tmp3 = closure_7;
                channel = closure_7.getChannel(tmp);
              }
              return channel;
            }
          }
          const obj5 = { title: null, body: null };
          const intl = channelId(tmp2[17]).intl;
          obj5.title = intl.string(channelId(tmp2[17]).t.ai6Lbr);
          const intl2 = channelId(tmp2[17]).intl;
          obj5.body = intl2.string(channelId(tmp2[17]).t["LTr+x9"]);
          const tmp29 = closure_14(channelId(tmp2[33]).EmptyState, obj5);
          cResult[13] = tmp29;
          const tmp28 = tmp29;
        } else {
          class Y {
            constructor() {
              channel = null;
              if (null != channelId) {
                tmp3 = closure_7;
                channel = closure_7.getChannel(tmp);
              }
              return channel;
            }
          }
        }
        if (cResult[14] !== tmp27) {
          class Y {
            constructor() {
              channel = null;
              if (null != channelId) {
                tmp3 = closure_7;
                channel = closure_7.getChannel(tmp);
              }
              return channel;
            }
          }
          const obj6 = { style: tmp27, children: tmp28 };
          const tmp32 = closure_14(isBackEnabled, obj6);
          cResult[14] = tmp27;
          cResult[15] = tmp32;
          const tmp30 = tmp32;
        } else {
          class Y {
            constructor() {
              channel = null;
              if (null != channelId) {
                tmp3 = closure_7;
                channel = closure_7.getChannel(tmp);
              }
              return channel;
            }
          }
        }
        return tmp30;
      }
      const items2 = [tmp15, tmp4.containerEmpty];
      cResult[10] = tmp15;
      cResult[11] = tmp4.containerEmpty;
      cResult[12] = items2;
      const tmpResult3 = channelId(tmp2[16]);
    }
    const items3 = [tmp4.contentContainer, splitDivider];
    cResult[3] = tmp4.contentContainer;
    cResult[4] = splitDivider;
    cResult[5] = items3;
  }
  const items4 = [tmp4.container, onyxContainerBorder];
  cResult[0] = tmp4.container;
  cResult[1] = onyxContainerBorder;
  cResult[2] = items4;
  tmp15 = items4;
  const tmp12 = isNavigationScreen(frame[30])();
}) : (function StandaloneChannelScreen(arg0) {
  ({ guildId, channelId } = arg0);
  ({ isNavigationTTIVisible, isNavigationScreen, frame } = arg0);
  ({ showCreateThread, screenIndex } = arg0);
  closure_4 = undefined;
  let isChatBesideChannelList;
  closure_6 = undefined;
  const tmp = closure_17();
  dependencyMap = tmp;
  navigation = channelId(1504).useNavigation();
  const obj = channelId(1504);
  const isSwipeToMemberListEnabled = channelId(10661).useIsSwipeToMemberListEnabled();
  const needSubscriptionToAccess = frame(5413)(channelId).needSubscriptionToAccess;
  const obj2 = channelId(10661);
  let tmp6 = guildId;
  if (guildId == null) {
    tmp6 = closure_10;
  }
  const canSeeOnboardingHome = channelId(6924).useCanSeeOnboardingHome(tmp6);
  const obj3 = channelId(6924);
  const tmp9 = frame(5031)() === constants2.ONYX;
  closure_4 = tmp9;
  const tmp10 = frame(4979)();
  isChatBesideChannelList = tmp10.isChatBesideChannelList;
  const isChatLockedOpen = tmp10.isChatLockedOpen;
  let items = [frame, tmp9, isChatBesideChannelList, , ];
  ({ container: arr[3], onyxContainerBorder: arr[4] } = tmp);
  const memo = isChatBesideChannelList.useMemo(() => {
    const items = [closure_2.container, ];
    let onyxContainerBorder;
    if (null == frame) {
      if (closure_4) {
        if (!isChatBesideChannelList) {
          onyxContainerBorder = tmp.onyxContainerBorder;
        }
      }
    }
    items[1] = onyxContainerBorder;
    return items;
  }, items);
  const items1 = [frame, , ];
  ({ contentContainer: arr2[1], splitDivider: arr2[2] } = tmp);
  const memo1 = isChatBesideChannelList.useMemo(() => {
    const items = [closure_2.contentContainer, ];
    let splitDivider;
    if (null != frame) {
      splitDivider = closure_2.splitDivider;
    }
    items[1] = splitDivider;
    return items;
  }, items1);
  const ref = isChatBesideChannelList.useRef(null);
  let tmp14 = !isChatLockedOpen;
  const isForumChannelSearchActive = channelId(12864).useIsForumChannelSearchActive(channelId);
  if (isChatLockedOpen) {
    tmp14 = isNavigationScreen;
  }
  if (tmp14) {
    tmp14 = !isForumChannelSearchActive;
  }
  closure_6 = tmp14;
  const tmp2Result = channelId(12864);
  const items2 = [ChannelStore];
  const items3 = [channelId];
  const stateFromStores = channelId(504).useStateFromStores(items2, () => {
    let channel = null;
    if (null != channelId) {
      channel = ChannelStore.getChannel(tmp);
    }
    return channel;
  }, items3);
  channelId(9314);
  if (null != channelId) {
    if (null != guildId) {
      if (channelId !== StaticChannelRoute.ROLE_SUBSCRIPTIONS) {
        if (!needSubscriptionToAccess) {
          if (channelId === StaticChannelRoute.GUILD_HOME) {
            const obj4 = { style: memo, children: null };
            const obj5 = { channelId, frame, guildId, isNavigationScreen, screenIndex, showCreateThread, isBackEnabled: tmp14, measureNavigationTTI: false };
            const items4 = [closure_14(closure_18, obj5), ];
            const obj6 = { style: memo1, children: null };
            let tmp37Result = null;
            if (canSeeOnboardingHome) {
              const obj7 = { guildId };
              tmp37Result = closure_14(frame(16993), obj7);
            }
            obj6.children = tmp37Result;
            items4[1] = closure_14(closure_6, obj6);
            obj4.children = items4;
            return closure_15(closure_6, obj4);
          } else if (channelId === StaticChannelRoute.MEMBER_SAFETY) {
            const obj8 = { guildId };
            return closure_14(frame(17011), obj8);
          } else if (channelId === StaticChannelRoute.CONJURE) {
            const obj9 = { guildId };
            return closure_14(frame(17029), obj9);
          } else {
            let type;
            if (stateFromStores != null) {
              type = stateFromStores.type;
            }
            if (type === constants.GUILD_APP) {
              if (!tmp17) {
                const obj10 = { style: memo, children: null };
                const obj11 = { channelId, frame, guildId, isNavigationScreen, screenIndex, showCreateThread, isBackEnabled: tmp14, measureNavigationTTI: false };
                const items5 = [closure_14(closure_18, obj11), ];
                const obj12 = { style: memo1, children: null };
                const obj13 = { channel: stateFromStores };
                obj12.children = closure_14(frame(17295), obj13);
                items5[1] = closure_14(closure_6, obj12);
                obj10.children = items5;
                return closure_15(closure_6, obj10);
              }
            }
            if (showCreateThread) {
              const obj14 = { style: memo1, children: null };
              const obj15 = { channelId, frame, guildId, isNavigationScreen, screenIndex, showCreateThread, isBackEnabled: tmp14, measureNavigationTTI: false };
              const items6 = [closure_14(closure_18, obj15), ];
              const obj16 = { channelId, screenIndex };
              items6[1] = closure_14(channelId(17304).CreateThreadView, obj16);
              obj14.children = items6;
              return closure_15(closure_6, obj14);
            } else {
              const obj17 = { children: null };
              const obj18 = { channelId, frame, guildId, isNavigationScreen, screenIndex, showCreateThread, isBackEnabled: tmp14, measureNavigationTTI: true };
              const items7 = [closure_14(closure_18, obj18), ];
              const obj19 = { name: "chat_container", tracking: "include", style: memo1, children: null };
              const obj20 = { guildId, channelId, chatInputRef: ref, screenIndex };
              obj19.children = closure_14(frame(10362), obj20);
              items7[1] = closure_14(channelId(16971).NavTTIView, obj19);
              obj17.children = items7;
              const tmp24Result = closure_15(closure_16, obj17);
              if (isSwipeToMemberListEnabled) {
                const obj21 = { style: memo, channelId, isNavigationTTIVisible, screenIndex, isBackEnabled: tmp14, children: tmp24Result };
                let tmp26Result = closure_14(frame(17308), obj21);
              } else {
                const obj22 = {
                  name: "channel_screen",
                  navigationKey: channelId,
                  definition: channelId(11626).CHANNEL_NAVIGATION_TTI,
                  visibilityMode: "prerendered",
                  isVisible: isNavigationTTIVisible,
                  descendantTracking: "included",
                  accessible: false,
                  onAccessibilityEscape() {
                                  if (closure_6) {
                                    navigation.goBack();
                                  }
                                },
                  style: memo,
                  children: tmp24Result
                };
                tmp26Result = closure_14(channelId(17309).NavTTISurfaceProvider, obj22);
              }
              return tmp26Result;
            }
          }
        }
      }
      const obj23 = { style: memo, children: null };
      const obj24 = { channelId, frame, guildId, isNavigationScreen, screenIndex, showCreateThread, isBackEnabled: tmp14, measureNavigationTTI: false };
      const items8 = [closure_14(closure_18, obj24), ];
      const obj25 = { style: memo1, children: null };
      const items9 = [closure_14(frame(10225), { absolute: true }), ];
      const obj26 = { guildId, gatedChannelId: null };
      let tmp45;
      if (needSubscriptionToAccess) {
        tmp45 = channelId;
      }
      obj26.gatedChannelId = tmp45;
      items9[1] = closure_14(frame(16976), obj26);
      obj25.children = items9;
      items8[1] = closure_15(closure_6, obj25);
      obj23.children = items8;
      return closure_15(closure_6, obj23);
    }
  }
  const obj27 = { style: null, children: null };
  const items10 = [memo, tmp.containerEmpty];
  obj27.style = items10;
  const obj28 = { title: null, body: null };
  const intl = channelId(1126).intl;
  obj28.title = intl.string(channelId(1126).t.ai6Lbr);
  const intl2 = channelId(1126).intl;
  obj28.body = intl2.string(channelId(1126).t["LTr+x9"]);
  obj27.children = closure_14(channelId(1200).EmptyState, obj28);
  return closure_14(closure_6, obj27);
}));