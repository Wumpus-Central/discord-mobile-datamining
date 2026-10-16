// === Module 17605: StandaloneChannelScreen ===

// Module 17605 (StandaloneChannelScreen)
import nativeDefault from "native" /* 587 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5035 */;
import PressableNavigatorBackIcon from "PressableNavigatorBackIcon" /* 9536 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2068 */;

require = fn;
let closure_3 = ["ref"];
get_ActivityIndicator = fn(17);
({ View: metroRequire, StyleSheet } = get_ActivityIndicator);
const MainTabsV2Constants = fn(9535);
({ ONYX_BORDER_WIDTH, MIN_HEADER_HEIGHT: closure_8 } = MainTabsV2Constants);
const Constants = fn(1087);
({ ChannelTypes: closure_9, EMPTY_STRING_SNOWFLAKE_ID: c10, ME: closure_11, ThemeTypes: closure_12 } = Constants);
const StaticChannelRoute = fn(2075).StaticChannelRoute;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
const createStyles = fn(5153);
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
  let NavTTIView = channelId;
  let obj = isNavigationScreen;
  const cResult = channelId(isNavigationScreen[11]).c(56);
  channelId = channelId.channelId;
  ({ screenIndex, guildId } = channelId);
  isNavigationScreen = channelId.isNavigationScreen;
  ({ frame, showCreateThread, isBackEnabled, measureNavigationTTI } = channelId);
  const obj2 = channelId(isNavigationScreen[11]);
  const navigation = channelId(isNavigationScreen[12]).useNavigation();
  const tmp3 = closure_17();
  const top = guildId(isNavigationScreen[13])().top;
  const obj3 = channelId(isNavigationScreen[12]);
  const gradientTop = channelId(isNavigationScreen[14]).useGradientTop();
  if (null != frame) {
    const headerWithFadingFrame = tmp3.headerWithFadingFrame;
  }
  if (null != frame) {
    const splitDivider = tmp3.splitDivider;
  }
  if (null != frame) {
    const splitDividerTop = tmp3.splitDividerTop;
  }
  if (cResult[0] === frame) {
    if (cResult[1] === top) {
      if (cResult[3] === gradientTop) {
        if (cResult[4] === tmp3.headerWrapper) {
          if (cResult[5] === headerWithFadingFrame) {
            if (cResult[6] === splitDivider) {
              if (cResult[7] === splitDividerTop) {
                if (cResult[8] === tmp5) {
                  let tmp8 = cResult[9];
                }
                if (cResult[10] === isNavigationScreen) {
                  if (cResult[11] === navigation) {
                    let tmp9 = cResult[12];
                  }
                  const onPress = tmp9;
                  const _Symbol = Symbol;
                  if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
                    const items = [ChannelStore];
                    cResult[13] = items;
                    let tmp11 = items;
                  } else {
                    tmp11 = cResult[13];
                  }
                  if (cResult[14] === channelId) {
                    if (cResult[15] === guildId) {
                      let tmp13 = cResult[16];
                      let tmp14 = cResult[17];
                    }
                    const stateFromStores = NavTTIView(obj[16]).useStateFromStores(tmp11, tmp13, tmp14);
                    let tmp16 = null != stateFromStores;
                    if (tmp16) {
                      tmp16 = stateFromStores !== closure_11;
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
                      if (cResult[20] === stateFromStores) {
                        let tmp20 = cResult[21];
                      }
                      if (cResult[22] === tmp16) {
                        if (cResult[23] === tmp9) {
                          if (cResult[24] === tmp20) {
                            if (cResult[26] !== tmp3.headerBottomBorder) {
                              const obj5 = { style: tmp3.headerBottomBorder };
                              cResult[26] = tmp3.headerBottomBorder;
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
                              let tmp25 = closure_14(closure_6, obj5);
                              const tmp28 = closure_14(closure_6, obj5);
                            } else {
                              tmp25 = cResult[27];
                            }
                            if (cResult[28] === cResult[25]) {
                              if (cResult[29] === isBackEnabled) {
                                if (cResult[30] === tmp3.spacer) {
                                  let tmp29 = cResult[31];
                                }
                                if (cResult[32] === channelId) {
                                  if (cResult[33] === isNavigationScreen) {
                                    if (cResult[34] === screenIndex) {
                                      if (cResult[35] === showCreateThread) {
                                        let tmp33 = cResult[36];
                                      }
                                      if (cResult[37] === channelId) {
                                        if (cResult[38] === screenIndex) {
                                          if (cResult[39] === showCreateThread) {
                                            if (cResult[40] === tmp3.actions) {
                                              let tmp36 = cResult[41];
                                            }
                                            if (cResult[42] === tmp29) {
                                              if (cResult[43] === tmp33) {
                                                if (cResult[44] === tmp36) {
                                                  let tmp39 = cResult[45];
                                                }
                                                if (cResult[46] === tmp25) {
                                                  if (cResult[47] === tmp39) {
                                                    let tmp42 = cResult[48];
                                                  }
                                                  if (cResult[49] === tmp42) {
                                                    if (cResult[50] === measureNavigationTTI) {
                                                      if (cResult[51] === tmp8) {
                                                        if (cResult[53] === frame) {
                                                          if (cResult[54] === tmp46) {
                                                            let tmp51 = cResult[55];
                                                          }
                                                          return tmp51;
                                                        }
                                                        const items1 = [cResult[52], frame];
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
                                                        const tmp54 = closure_15(closure_16, { children: null });
                                                        cResult[53] = frame;
                                                        cResult[54] = cResult[52];
                                                        cResult[55] = tmp54;
                                                        tmp51 = tmp54;
                                                        const obj6 = { children: null };
                                                      }
                                                    }
                                                  }
                                                  if (measureNavigationTTI) {
                                                    NavTTIView = NavTTIView(obj[25]).NavTTIView;
                                                    obj = { name: "channel_header", tracking: "include", style: tmp8, children: tmp42 };
                                                    let tmp47Result = closure_14(NavTTIView, obj);
                                                  } else {
                                                    const obj7 = { style: tmp8, children: tmp42 };
                                                    tmp47Result = closure_14(closure_6, obj7);
                                                  }
                                                  cResult[49] = tmp42;
                                                  cResult[50] = measureNavigationTTI;
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
                                                  cResult[51] = tmp8;
                                                  cResult[52] = tmp47Result;
                                                }
                                                const items2 = [tmp25, tmp39];
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
                                                const tmp45 = closure_15(closure_16, { children: null });
                                                cResult[46] = tmp25;
                                                cResult[47] = tmp39;
                                                cResult[48] = tmp45;
                                                tmp42 = tmp45;
                                                const obj8 = { children: null };
                                              }
                                            }
                                            const items3 = [tmp29, tmp33, tmp36];
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
                                            const tmp41 = closure_15(NavTTIView(obj[24]).LayerScope, { children: null });
                                            cResult[42] = tmp29;
                                            cResult[43] = tmp33;
                                            cResult[44] = tmp36;
                                            cResult[45] = tmp41;
                                            tmp39 = tmp41;
                                            const obj9 = { children: null };
                                          }
                                        }
                                      }
                                      const obj10 = { containerStyle: tmp3.actions, channelId, screenIndex, showCreateThread };
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
                                      cResult[37] = channelId;
                                      cResult[38] = screenIndex;
                                      cResult[39] = showCreateThread;
                                      cResult[40] = tmp3.actions;
                                      cResult[41] = tmp38;
                                      tmp36 = tmp38;
                                    }
                                  }
                                }
                                const obj11 = { channelId, isNavigationScreen, screenIndex, showCreateThread };
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
                                cResult[32] = channelId;
                                cResult[33] = isNavigationScreen;
                                cResult[34] = screenIndex;
                                cResult[35] = showCreateThread;
                                cResult[36] = tmp35;
                                tmp33 = tmp35;
                              }
                            }
                            let tmp30 = tmp21;
                            if (!isBackEnabled) {
                              const obj12 = { style: tmp3.spacer };
                              tmp30 = closure_14(closure_6, obj12);
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
                            cResult[30] = tmp3.spacer;
                            cResult[31] = tmp30;
                            tmp29 = tmp30;
                          }
                        }
                      }
                      if (tmp16) {
                        const obj13 = {
                          triggerOnLongPress: true,
                          align: "below",
                          items: tmp20,
                          children(ref) {
                                                  const obj = { ref: ref.ref };
                                                  const merged = Object.assign(_objectWithoutProperties(ref, closure_3));
                                                  obj.onPress = onPress;
                                                  return closure_2_14(PressableNavigatorBackIcon.PressableNavigatorBackIcon, obj);
                                                }
                        };
                        let tmp22Result = closure_14(NavTTIView(obj[20]).ContextMenu, obj13);
                      } else {
                        const obj14 = { onPress: tmp9 };
                        tmp22Result = closure_14(NavTTIView(obj[21]).PressableNavigatorBackIcon, obj14);
                      }
                      cResult[22] = tmp16;
                      cResult[23] = tmp9;
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
                      cResult[24] = tmp20;
                      cResult[25] = tmp22Result;
                    }
                    const obj15 = {
                      IconComponent: NavTTIView(obj[18]).ServerIcon,
                      label: tmp19,
                      action() {
                                          NavigationRouteUtils.navigateToRootTab({ screen: "guilds", guildId: stateFromStores, channelId, resetRoot: false, drawerOpen: false });
                                        }
                    };
                    const items4 = [obj15];
                    cResult[19] = channelId;
                    cResult[20] = stateFromStores;
                    cResult[21] = items4;
                    tmp20 = items4;
                    const NavTTIViewResult = NavTTIView(obj[16]);
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
                  const items5 = [guildId, channelId];
                  cResult[14] = channelId;
                  cResult[15] = guildId;
                  cResult[16] = M;
                  cResult[17] = items5;
                  tmp14 = items5;
                  tmp13 = M;
                }
                const fn = function k() {
                  if (isNavigationScreen) {
                    navigation.goBack();
                  }
                };
                cResult[10] = isNavigationScreen;
                cResult[11] = navigation;
                tmp9 = fn;
              }
            }
          }
        }
      }
      const items6 = [tmp3.headerWrapper, gradientTop, headerWithFadingFrame, splitDivider, splitDividerTop, ];
      cResult[3] = gradientTop;
      cResult[4] = tmp3.headerWrapper;
      cResult[5] = headerWithFadingFrame;
      cResult[6] = splitDivider;
      cResult[7] = splitDividerTop;
      cResult[8] = cResult[2];
      cResult[9] = items6;
      tmp8 = items6;
    }
  }
  if (null != frame) {
    const obj16 = { marginTop: top, minHeight };
    let obj17 = obj16;
  } else {
    obj17 = { paddingTop: top, minHeight: top + minHeight };
  }
  cResult[0] = frame;
  cResult[1] = top;
  cResult[2] = obj17;
  const obj4 = channelId(isNavigationScreen[14]);
}) : (function Header(channelId) {
  channelId = channelId.channelId;
  ({ screenIndex, guildId } = channelId);
  const isNavigationScreen = channelId.isNavigationScreen;
  const frame = channelId.frame;
  const showCreateThread = channelId.showCreateThread;
  ({ isBackEnabled, measureNavigationTTI } = channelId);
  const navigation = channelId(isNavigationScreen[12]).useNavigation();
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
  const navigation = channelId(frame[12]).useNavigation();
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
      const tmpResult5 = channelId(tmp2[16]);
      const isAppChannelChatOpen = channelId(tmp2[32]).useIsAppChannelChatOpen(channelId);
      const tmpResult6 = channelId(tmp2[32]);
      if (stateFromStores != null) {
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
      if (undefined === constants.GUILD_APP) {
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
      const closeAppChannelChatOnFrameDeepLink = channelId(tmp2[32]).useCloseAppChannelChatOnFrameDeepLink(tmp29);
      channelId(tmp2[33]);
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
          const tmp34 = closure_14(channelId(tmp2[34]).EmptyState, obj5);
          cResult[13] = tmp34;
          const tmp33 = tmp34;
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
        if (cResult[14] !== tmp32) {
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
          const obj6 = { style: tmp32, children: tmp33 };
          const tmp37 = closure_14(isBackEnabled, obj6);
          cResult[14] = tmp32;
          cResult[15] = tmp37;
          const tmp35 = tmp37;
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
        return tmp35;
      }
      const items2 = [tmp15, tmp4.containerEmpty];
      cResult[10] = tmp15;
      cResult[11] = tmp4.containerEmpty;
      cResult[12] = items2;
      const tmpResult7 = channelId(tmp2[32]);
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
  const navigation = channelId(1506).useNavigation();
  const obj = channelId(1506);
  const isSwipeToMemberListEnabled = channelId(11004).useIsSwipeToMemberListEnabled();
  const needSubscriptionToAccess = frame(5475)(channelId).needSubscriptionToAccess;
  const obj2 = channelId(11004);
  let tmp6 = guildId;
  if (guildId == null) {
    tmp6 = closure_10;
  }
  const canSeeOnboardingHome = channelId(7146).useCanSeeOnboardingHome(tmp6);
  const obj3 = channelId(7146);
  const tmp9 = frame(5090)() === constants2.ONYX;
  closure_4 = tmp9;
  const tmp10 = frame(5038)();
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
  const isForumChannelSearchActive = channelId(13719).useIsForumChannelSearchActive(channelId);
  if (isChatLockedOpen) {
    tmp14 = isNavigationScreen;
  }
  if (tmp14) {
    tmp14 = !isForumChannelSearchActive;
  }
  closure_6 = tmp14;
  const tmp2Result = channelId(13719);
  const items2 = [ChannelStore];
  const items3 = [channelId];
  const stateFromStores = channelId(504).useStateFromStores(items2, () => {
    let channel = null;
    if (null != channelId) {
      channel = ChannelStore.getChannel(tmp);
    }
    return channel;
  }, items3);
  const tmp2Result5 = channelId(504);
  const isAppChannelChatOpen = channelId(9551).useIsAppChannelChatOpen(channelId);
  const tmp2Result6 = channelId(9551);
  let type;
  if (stateFromStores != null) {
    type = stateFromStores.type;
  }
  let tmp19 = null;
  if (type === constants.GUILD_APP) {
    tmp19 = channelId;
  }
  const closeAppChannelChatOnFrameDeepLink = channelId(9551).useCloseAppChannelChatOnFrameDeepLink(tmp19);
  channelId(6284);
  if (null != channelId) {
    if (null != guildId) {
      if (channelId !== StaticChannelRoute.ROLE_SUBSCRIPTIONS) {
        if (!needSubscriptionToAccess) {
          if (channelId === StaticChannelRoute.GUILD_HOME) {
            const obj4 = { style: memo, children: null };
            const obj5 = { channelId, frame, guildId, isNavigationScreen, screenIndex, showCreateThread, isBackEnabled: tmp14, measureNavigationTTI: false };
            const items4 = [closure_14(closure_18, obj5), ];
            const obj6 = { style: memo1, children: null };
            let tmp42Result = null;
            if (canSeeOnboardingHome) {
              const obj7 = { guildId };
              tmp42Result = closure_14(frame(17628), obj7);
            }
            obj6.children = tmp42Result;
            items4[1] = closure_14(closure_6, obj6);
            obj4.children = items4;
            return closure_15(closure_6, obj4);
          } else if (channelId === StaticChannelRoute.MEMBER_SAFETY) {
            const obj8 = { guildId };
            return closure_14(frame(17646), obj8);
          } else if (channelId === StaticChannelRoute.CONJURE) {
            const obj9 = { guildId, inline: true };
            return closure_14(frame(11519), obj9);
          } else {
            let type1;
            if (stateFromStores != null) {
              type1 = stateFromStores.type;
            }
            if (null != stateFromStores) {
              if (tmp24) {
                if (!isAppChannelChatOpen) {
                  const obj10 = { style: memo, children: null };
                  const obj11 = { channelId, frame, guildId, isNavigationScreen, screenIndex, showCreateThread, isBackEnabled: tmp14, measureNavigationTTI: false };
                  const items5 = [closure_14(closure_18, obj11), ];
                  const obj12 = { style: memo1, children: null };
                  const obj13 = { channel: stateFromStores };
                  obj12.children = closure_14(frame(17664), obj13);
                  items5[1] = closure_14(closure_6, obj12);
                  obj10.children = items5;
                  return closure_15(closure_6, obj10);
                }
              }
            }
            if (showCreateThread) {
              const obj14 = { style: memo1, children: null };
              const obj15 = { channelId, frame, guildId, isNavigationScreen, screenIndex, showCreateThread, isBackEnabled: tmp14, measureNavigationTTI: false };
              const items6 = [closure_14(closure_18, obj15), ];
              const obj16 = { channelId, screenIndex };
              items6[1] = closure_14(channelId(17673).CreateThreadView, obj16);
              obj14.children = items6;
              return closure_15(closure_6, obj14);
            } else {
              const obj17 = { children: null };
              const obj18 = { channelId, frame, guildId, isNavigationScreen, screenIndex, showCreateThread, isBackEnabled: tmp14, measureNavigationTTI: true };
              const items7 = [closure_14(closure_18, obj18), ];
              const obj19 = { name: "chat_container", tracking: "include", style: memo1, children: null };
              const obj20 = { guildId, channelId, chatInputRef: ref, screenIndex };
              obj19.children = closure_14(frame(10611), obj20);
              items7[1] = closure_14(channelId(17606).NavTTIView, obj19);
              obj17.children = items7;
              const tmp29Result = closure_15(closure_16, obj17);
              if (isSwipeToMemberListEnabled) {
                const obj21 = { style: memo, channelId, isNavigationTTIVisible, screenIndex, isBackEnabled: tmp14, children: tmp29Result };
                let tmp31Result = closure_14(frame(17677), obj21);
              } else {
                const obj22 = {
                  name: "channel_screen",
                  navigationKey: channelId,
                  definition: channelId(12730).CHANNEL_NAVIGATION_TTI,
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
                  children: tmp29Result
                };
                tmp31Result = closure_14(channelId(17678).NavTTISurfaceProvider, obj22);
              }
              return tmp31Result;
            }
            tmp24 = type1 === constants.GUILD_APP || null != tmp22;
          }
        }
      }
      const obj23 = { style: memo, children: null };
      const obj24 = { channelId, frame, guildId, isNavigationScreen, screenIndex, showCreateThread, isBackEnabled: tmp14, measureNavigationTTI: false };
      const items8 = [closure_14(closure_18, obj24), ];
      const obj25 = { style: memo1, children: null };
      const items9 = [closure_14(frame(10465), { absolute: true }), ];
      const obj26 = { guildId, gatedChannelId: null };
      let tmp50;
      if (needSubscriptionToAccess) {
        tmp50 = channelId;
      }
      obj26.gatedChannelId = tmp50;
      items9[1] = closure_14(frame(17611), obj26);
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
  const intl = channelId(1128).intl;
  obj28.title = intl.string(channelId(1128).t.ai6Lbr);
  const intl2 = channelId(1128).intl;
  obj28.body = intl2.string(channelId(1128).t["LTr+x9"]);
  obj27.children = closure_14(channelId(1202).EmptyState, obj28);
  return closure_14(closure_6, obj27);
}));