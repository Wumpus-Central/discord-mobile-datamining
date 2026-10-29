// === Module 18494: StandaloneChannelScreen ===

// Module 18494 (StandaloneChannelScreen)
import nativeDefault from "native" /* 587 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5187 */;
import PressableNavigatorBackIcon from "PressableNavigatorBackIcon" /* 9767 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4857 */;

require = fn;
let closure_3 = ["ref"];
get_ActivityIndicator = fn(17);
({ View: metroRequire, StyleSheet } = get_ActivityIndicator);
const MainTabsV2Constants = fn(9766);
({ ONYX_BORDER_WIDTH, MIN_HEADER_HEIGHT: closure_8 } = MainTabsV2Constants);
const Constants = fn(1084);
({ ChannelTypes: closure_9, EMPTY_STRING_SNOWFLAKE_ID: c10, ME: closure_11, ThemeTypes: closure_12 } = Constants);
const StaticChannelRoute = fn(4864).StaticChannelRoute;
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15, Fragment: closure_16 } = jsxProd);
const createStyles = fn(5005);
let obj = { container: { flex: 1 }, onyxContainerBorder: { borderLeftWidth: ONYX_BORDER_WIDTH, borderLeftColor: nativeDefault.colors.APP_FRAME_BORDER, borderTopWidth: ONYX_BORDER_WIDTH, borderTopColor: "transparent" }, contentContainer: null, containerEmpty: null, headerWrapper: null, headerBottomBorder: null, headerWithFadingFrame: null, splitDivider: null, splitDividerTop: null, actions: null, spacer: null };
let obj3 = { borderLeftWidth: ONYX_BORDER_WIDTH, borderLeftColor: nativeDefault.colors.APP_FRAME_BORDER, borderTopWidth: ONYX_BORDER_WIDTH, borderTopColor: "transparent" };
obj.contentContainer = { flex: 1, backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND };
let obj4 = { flex: 1, backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND };
obj.containerEmpty = { backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND };
let obj5 = { backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND };
obj.headerWrapper = { zIndex: 1, backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND, flexDirection: "row", alignItems: "center", flexShrink: 0, overflow: "visible" };
let obj7 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj7.top = undefined;
obj7.height = 1;
obj7.backgroundColor = nativeDefault.colors.STANDALONE_CHANNEL_HEADER_BORDER;
obj.headerBottomBorder = obj7;
let obj6 = { zIndex: 1, backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND, flexDirection: "row", alignItems: "center", flexShrink: 0, overflow: "visible" };
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
  const cResult = channelId(isNavigationScreen[11]).c(60);
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
                                  if (cResult[33] === showCreateThread) {
                                    let tmp33 = cResult[34];
                                  }
                                  if (cResult[35] === channelId) {
                                    if (cResult[36] === isNavigationScreen) {
                                      if (cResult[37] === screenIndex) {
                                        if (cResult[38] === showCreateThread) {
                                          let tmp36 = cResult[39];
                                        }
                                        if (cResult[40] === channelId) {
                                          if (cResult[41] === screenIndex) {
                                            if (cResult[42] === showCreateThread) {
                                              if (cResult[43] === tmp3.actions) {
                                                let tmp39 = cResult[44];
                                              }
                                              if (cResult[45] === tmp29) {
                                                if (cResult[46] === tmp33) {
                                                  if (cResult[47] === tmp36) {
                                                    if (cResult[48] === tmp39) {
                                                      let tmp42 = cResult[49];
                                                    }
                                                    if (cResult[50] === tmp25) {
                                                      if (cResult[51] === tmp42) {
                                                        let tmp45 = cResult[52];
                                                      }
                                                      if (cResult[53] === tmp45) {
                                                        if (cResult[54] === measureNavigationTTI) {
                                                          if (cResult[55] === tmp8) {
                                                            if (cResult[57] === frame) {
                                                              if (cResult[58] === tmp49) {
                                                                let tmp54 = cResult[59];
                                                              }
                                                              return tmp54;
                                                            }
                                                            const items1 = [cResult[56], frame];
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
                                                            const tmp57 = closure_15(closure_16, { children: null });
                                                            cResult[57] = frame;
                                                            cResult[58] = cResult[56];
                                                            cResult[59] = tmp57;
                                                            tmp54 = tmp57;
                                                            const obj6 = { children: null };
                                                          }
                                                        }
                                                      }
                                                      if (measureNavigationTTI) {
                                                        NavTTIView = NavTTIView(obj[26]).NavTTIView;
                                                        obj = { name: "channel_header", tracking: "include", style: tmp8, children: tmp45 };
                                                        let tmp50Result = closure_14(NavTTIView, obj);
                                                      } else {
                                                        const obj7 = { style: tmp8, children: tmp45 };
                                                        tmp50Result = closure_14(closure_6, obj7);
                                                      }
                                                      cResult[53] = tmp45;
                                                      cResult[54] = measureNavigationTTI;
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
                                                      cResult[55] = tmp8;
                                                      cResult[56] = tmp50Result;
                                                    }
                                                    const items2 = [tmp25, tmp42];
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
                                                    const tmp48 = closure_15(closure_16, { children: null });
                                                    cResult[50] = tmp25;
                                                    cResult[51] = tmp42;
                                                    cResult[52] = tmp48;
                                                    tmp45 = tmp48;
                                                    const obj8 = { children: null };
                                                  }
                                                }
                                              }
                                              const obj9 = { children: null };
                                              const items3 = [tmp29, tmp33, tmp36, ];
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
                                              obj9.children = items3;
                                              const tmp44 = closure_15(NavTTIView(obj[25]).LayerScope, obj9);
                                              cResult[45] = tmp29;
                                              cResult[46] = tmp33;
                                              cResult[47] = tmp36;
                                              cResult[48] = tmp39;
                                              cResult[49] = tmp44;
                                              tmp42 = tmp44;
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
                                        cResult[40] = channelId;
                                        cResult[41] = screenIndex;
                                        cResult[42] = showCreateThread;
                                        cResult[43] = tmp3.actions;
                                        cResult[44] = tmp41;
                                        tmp39 = tmp41;
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
                                  cResult[35] = channelId;
                                  cResult[36] = isNavigationScreen;
                                  cResult[37] = screenIndex;
                                  cResult[38] = showCreateThread;
                                  cResult[39] = tmp38;
                                  tmp36 = tmp38;
                                }
                                let tmp34 = null;
                                if (!showCreateThread) {
                                  const obj12 = { channelId };
                                  tmp34 = closure_14(NavTTIView(obj[22]).PinotMemberNoticeHeaderArrow, obj12);
                                }
                                cResult[32] = channelId;
                                cResult[33] = showCreateThread;
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
                                cResult[34] = tmp34;
                                tmp33 = tmp34;
                              }
                            }
                            let tmp30 = tmp21;
                            if (!isBackEnabled) {
                              const obj13 = { style: tmp3.spacer };
                              tmp30 = closure_14(closure_6, obj13);
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
                        const obj14 = {
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
                        let tmp22Result = closure_14(NavTTIView(obj[20]).ContextMenu, obj14);
                      } else {
                        const obj15 = { onPress: tmp9 };
                        tmp22Result = closure_14(NavTTIView(obj[21]).PressableNavigatorBackIcon, obj15);
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
                    const obj16 = {
                      IconComponent: NavTTIView(obj[18]).ServerIcon,
                      label: tmp19,
                      action() {
                                          NavigationRouteUtils.navigateToRootTab({ screen: "guilds", guildId: stateFromStores, channelId, resetRoot: false, drawerOpen: false });
                                        }
                    };
                    const items4 = [obj16];
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
                const fn = function w() {
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
    const obj17 = { marginTop: top, minHeight };
    let obj18 = obj17;
  } else {
    obj18 = { paddingTop: top, minHeight: top + minHeight };
  }
  cResult[0] = frame;
  cResult[1] = top;
  cResult[2] = obj18;
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
    let tmp13Result2 = closure_14(tmp(tmp2[20]).ContextMenu, obj5);
    let tmp13 = closure_14;
  } else {
    const obj6 = { onPress };
    tmp13Result2 = closure_14(tmp(tmp2[21]).PressableNavigatorBackIcon, obj6);
    tmp13 = closure_14;
  }
  const items6 = [tmp13(top, { style: tmp4.headerBottomBorder }), ];
  if (!isBackEnabled) {
    const obj8 = { style: tmp4.spacer };
    tmp13Result2 = tmp13(tmp16, obj8);
  }
  const items7 = [tmp13Result2, , , ];
  let tmp13Result = null;
  if (!showCreateThread) {
    const obj9 = { channelId };
    tmp13Result = tmp13(tmp(tmp2[22]).PinotMemberNoticeHeaderArrow, obj9);
  }
  const obj10 = { children: null };
  const obj11 = { children: null };
  items7[1] = tmp13Result;
  items7[2] = tmp13(guildId(isNavigationScreen[23]), { channelId, isNavigationScreen, screenIndex, showCreateThread });
  items7[3] = tmp13(guildId(isNavigationScreen[24]), { containerStyle: tmp4.actions, channelId, screenIndex, showCreateThread });
  obj11.children = items7;
  items6[1] = closure_15(channelId(isNavigationScreen[25]).LayerScope, obj11);
  obj10.children = items6;
  const tmp14Result = closure_15(closure_16, obj10);
  if (measureNavigationTTI) {
    const obj13 = { name: "channel_header", tracking: "include", style: memo, children: tmp14Result };
    let tmp13Result3 = tmp13(tmp(tmp2[26]).NavTTIView, obj13);
  } else {
    const obj14 = { style: memo, children: tmp14Result };
    tmp13Result3 = tmp13(tmp16, obj14);
  }
  const obj15 = { children: null };
  const items8 = [tmp13Result3, frame];
  obj15.children = items8;
  return closure_15(closure_16, obj15);
});
ReactCompilerGating = fn(558);
let obj12 = { width: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/StandaloneChannelScreen.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function StandaloneChannelScreen(frame) {
  const cResult = channelId(frame[11]).c(106);
  ({ guildId, channelId } = frame);
  ({ isActive, isNavigationTTIVisible, isNavigationScreen } = frame);
  frame = frame.frame;
  const showCreateThread = frame.showCreateThread;
  const screenIndex = frame.screenIndex;
  const tmp4 = closure_17();
  let obj = channelId(frame[11]);
  const navigation = channelId(frame[12]).useNavigation();
  const obj2 = channelId(frame[12]);
  const isSwipeToMemberListEnabled = channelId(frame[27]).useIsSwipeToMemberListEnabled();
  const needSubscriptionToAccess = isNavigationScreen(frame[28])(channelId).needSubscriptionToAccess;
  const obj3 = channelId(frame[27]);
  let tmp8 = guildId;
  if (guildId == null) {
    tmp8 = closure_10;
  }
  const canSeeOnboardingHome = channelId(frame[29]).useCanSeeOnboardingHome(tmp8);
  const obj4 = channelId(frame[29]);
  const ref = navigation.useRef(null);
  const tmp11 = isNavigationScreen(frame[30])();
  const isChatLockedOpen = isNavigationScreen(frame[31])().isChatLockedOpen;
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
      if (cResult[4] === splitDivider) {
        let tmp17 = cResult[5];
      }
      let tmp19 = !isChatLockedOpen;
      const isForumChannelSearchActive = channelId(tmp2[32]).useIsForumChannelSearchActive(channelId);
      if (isChatLockedOpen) {
        tmp19 = isNavigationScreen;
      }
      if (tmp19) {
        tmp19 = !isForumChannelSearchActive;
      }
      const isBackEnabled = tmp19;
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [channelId];
        cResult[6] = items;
        let tmp21 = items;
      } else {
        tmp21 = cResult[6];
      }
      if (cResult[7] !== channelId) {
        const fn = function j() {
          let channel = null;
          if (null != channelId) {
            channel = ChannelStore.getChannel(tmp);
          }
          return channel;
        };
        const items1 = [channelId];
        cResult[7] = channelId;
        cResult[8] = fn;
        cResult[9] = items1;
        let tmp24 = items1;
        let tmp23 = fn;
      } else {
        tmp23 = cResult[8];
        tmp24 = cResult[9];
      }
      const tmpResult = channelId(tmp2[32]);
      const stateFromStores = channelId(tmp2[16]).useStateFromStores(tmp21, tmp23, tmp24);
      const tmpResult4 = channelId(tmp2[16]);
      let type;
      const dMAppChannelApplicationId = channelId(tmp2[33]).useDMAppChannelApplicationId(stateFromStores);
      if (stateFromStores != null) {
        type = stateFromStores.type;
      }
      const tmpResult5 = channelId(tmp2[33]);
      let tmp30 = null;
      if (type === constants.GUILD_APP || null != dMAppChannelApplicationId) {
        tmp30 = channelId;
      }
      const dismissChannelSecondaryViewChatOnFrameDeepLink = channelId(tmp2[34]).useDismissChannelSecondaryViewChatOnFrameDeepLink(tmp30);
      if (null != channelId) {
        if (null != guildId) {
          if (cResult[16] === frame) {
            if (cResult[17] === channelId) {
              if (cResult[18] === guildId) {
                if (cResult[19] === tmp19) {
                  if (cResult[20] === isNavigationScreen) {
                    if (cResult[21] === screenIndex) {
                      if (cResult[22] === showCreateThread) {
                        let tmp32 = cResult[23];
                      }
                      if (channelId !== StaticChannelRoute.ROLE_SUBSCRIPTIONS) {
                        if (!needSubscriptionToAccess) {
                          if (channelId === StaticChannelRoute.GUILD_HOME) {
                            if (cResult[37] !== tmp32) {
                              const tmp32Result = tmp32();
                              cResult[37] = tmp32;
                              cResult[38] = tmp32Result;
                              let tmp89 = tmp32Result;
                            } else {
                              tmp89 = cResult[38];
                            }
                            if (cResult[39] === guildId) {
                              if (cResult[40] === canSeeOnboardingHome) {
                                let tmp91 = cResult[41];
                              }
                              if (cResult[42] === tmp17) {
                                if (cResult[43] === tmp91) {
                                  let tmp94 = cResult[44];
                                }
                                if (cResult[45] === tmp15) {
                                  if (cResult[46] === tmp94) {
                                    if (cResult[47] === tmp89) {
                                      let tmp98 = cResult[48];
                                    }
                                    return tmp98;
                                  }
                                }
                                const obj5 = { style: tmp15, children: null };
                                const items2 = [tmp89, tmp94];
                                obj5.children = items2;
                                const tmp101 = closure_15(isBackEnabled, obj5);
                                cResult[45] = tmp15;
                                cResult[46] = tmp94;
                                cResult[47] = tmp89;
                                cResult[48] = tmp101;
                                tmp98 = tmp101;
                              }
                              const obj6 = { style: tmp17, children: tmp91 };
                              const tmp97 = closure_14(isBackEnabled, obj6);
                              cResult[42] = tmp17;
                              cResult[43] = tmp91;
                              cResult[44] = tmp97;
                              tmp94 = tmp97;
                            }
                            let tmp92 = null;
                            if (canSeeOnboardingHome) {
                              const obj7 = { guildId };
                              tmp92 = closure_14(isNavigationScreen(tmp2[38]), obj7);
                            }
                            cResult[39] = guildId;
                            cResult[40] = canSeeOnboardingHome;
                            cResult[41] = tmp92;
                            tmp91 = tmp92;
                          } else if (channelId === StaticChannelRoute.MEMBER_SAFETY) {
                            const _Symbol2 = Symbol;
                            if (cResult[49] === Symbol.for("react.memo_cache_sentinel")) {
                              const tmp81 = closure_14(isNavigationScreen(tmp2[36]), { absolute: true });
                              cResult[49] = tmp81;
                              let tmp79 = tmp81;
                            } else {
                              tmp79 = cResult[49];
                            }
                            if (cResult[50] !== guildId) {
                              const obj8 = { guildId };
                              const tmp84 = closure_14(isNavigationScreen(tmp2[39]), obj8);
                              cResult[50] = guildId;
                              cResult[51] = tmp84;
                              let tmp82 = tmp84;
                            } else {
                              tmp82 = cResult[51];
                            }
                            if (cResult[52] === tmp4.container) {
                              if (cResult[53] === tmp82) {
                                let tmp85 = cResult[54];
                              }
                              return tmp85;
                            }
                            const obj9 = { style: tmp4.container, children: null };
                            const items3 = [tmp79, tmp82];
                            obj9.children = items3;
                            const tmp88 = closure_15(isBackEnabled, obj9);
                            cResult[52] = tmp4.container;
                            cResult[53] = tmp82;
                            cResult[54] = tmp88;
                            tmp85 = tmp88;
                          } else if (channelId === StaticChannelRoute.CONJURE) {
                            if (cResult[55] !== guildId) {
                              const obj10 = { guildId, inline: true };
                              const tmp78 = closure_14(isNavigationScreen(tmp2[40]), obj10);
                              cResult[55] = guildId;
                              cResult[56] = tmp78;
                              let tmp76 = tmp78;
                            } else {
                              tmp76 = cResult[56];
                            }
                            return tmp76;
                          } else if (showCreateThread) {
                            if (cResult[57] !== tmp32) {
                              const tmp32Result5 = tmp32();
                              cResult[57] = tmp32;
                              cResult[58] = tmp32Result5;
                              let tmp67 = tmp32Result5;
                            } else {
                              tmp67 = cResult[58];
                            }
                            if (cResult[59] === channelId) {
                              if (cResult[60] === screenIndex) {
                                let tmp69 = cResult[61];
                              }
                              if (cResult[62] === tmp17) {
                                if (cResult[63] === tmp69) {
                                  if (cResult[64] === tmp67) {
                                    let tmp72 = cResult[65];
                                  }
                                  return tmp72;
                                }
                              }
                              const obj11 = { style: tmp17, children: null };
                              const items4 = [tmp67, tmp69];
                              obj11.children = items4;
                              const tmp75 = closure_15(isBackEnabled, obj11);
                              cResult[62] = tmp17;
                              cResult[63] = tmp69;
                              cResult[64] = tmp67;
                              cResult[65] = tmp75;
                              tmp72 = tmp75;
                            }
                            const obj12 = { channelId, screenIndex };
                            const tmp71 = closure_14(channelId(tmp2[41]).CreateThreadView, obj12);
                            cResult[59] = channelId;
                            cResult[60] = screenIndex;
                            cResult[61] = tmp71;
                            tmp69 = tmp71;
                          } else {
                            if (null != stateFromStores) {
                              if (tmp29) {
                                if (cResult[66] !== tmp32) {
                                  const tmp32Result6 = tmp32();
                                  cResult[66] = tmp32;
                                  cResult[67] = tmp32Result6;
                                  let tmp54 = tmp32Result6;
                                } else {
                                  tmp54 = cResult[67];
                                }
                                if (cResult[68] !== stateFromStores) {
                                  const obj13 = { channel: stateFromStores };
                                  const tmp58 = closure_14(isNavigationScreen(tmp2[42]), obj13);
                                  cResult[68] = stateFromStores;
                                  cResult[69] = tmp58;
                                  let tmp56 = tmp58;
                                } else {
                                  tmp56 = cResult[69];
                                }
                                if (cResult[70] === tmp17) {
                                  if (cResult[71] === tmp56) {
                                    let tmp59 = cResult[72];
                                  }
                                  if (cResult[73] === tmp15) {
                                    if (cResult[74] === tmp59) {
                                      if (cResult[75] === tmp54) {
                                        let tmp63 = cResult[76];
                                      }
                                      return tmp63;
                                    }
                                  }
                                  const obj14 = { style: tmp15, children: null };
                                  const items5 = [tmp54, tmp59];
                                  obj14.children = items5;
                                  const tmp66 = closure_15(isBackEnabled, obj14);
                                  cResult[73] = tmp15;
                                  cResult[74] = tmp59;
                                  cResult[75] = tmp54;
                                  cResult[76] = tmp66;
                                  tmp63 = tmp66;
                                }
                                const obj15 = { style: tmp17, children: tmp56 };
                                const tmp62 = closure_14(isBackEnabled, obj15);
                                cResult[70] = tmp17;
                                cResult[71] = tmp56;
                                cResult[72] = tmp62;
                                tmp59 = tmp62;
                              }
                            }
                            if (cResult[77] !== tmp32) {
                              const tmp32Result7 = tmp32(true);
                              cResult[77] = tmp32;
                              cResult[78] = tmp32Result7;
                              let tmp34 = tmp32Result7;
                            } else {
                              tmp34 = cResult[78];
                            }
                            if (cResult[79] === channelId) {
                              if (cResult[80] === guildId) {
                                if (cResult[81] === isActive) {
                                  if (cResult[82] === screenIndex) {
                                    let tmp36 = cResult[83];
                                  }
                                  if (cResult[84] === tmp17) {
                                    if (cResult[85] === tmp36) {
                                      let tmp39 = cResult[86];
                                    }
                                    if (cResult[87] === tmp39) {
                                      if (cResult[88] === tmp34) {
                                        let tmp42 = cResult[89];
                                      }
                                      if (isSwipeToMemberListEnabled) {
                                        if (cResult[90] === channelId) {
                                          if (cResult[91] === tmp15) {
                                            if (cResult[92] === tmp19) {
                                              if (cResult[93] === isNavigationTTIVisible) {
                                                if (cResult[94] === tmp42) {
                                                }
                                              }
                                            }
                                          }
                                        }
                                        const obj16 = { style: tmp15, channelId, isNavigationTTIVisible, screenIndex, isBackEnabled: tmp19, children: tmp42 };
                                        const tmp52 = closure_14(isNavigationScreen(tmp2[44]), obj16);
                                        cResult[90] = channelId;
                                        cResult[91] = tmp15;
                                        cResult[92] = tmp19;
                                        cResult[93] = isNavigationTTIVisible;
                                        cResult[94] = tmp42;
                                        cResult[95] = screenIndex;
                                        cResult[96] = tmp52;
                                      } else {
                                        if (cResult[97] === tmp19) {
                                          if (cResult[98] === navigation) {
                                            let tmp46 = cResult[99];
                                          }
                                          class Le {
                                            constructor() {
                                              if (closure_6) {
                                                tmp = closure_5;
                                                goBackResult = closure_5.goBack();
                                              }
                                              return;
                                            }
                                          }
                                          const obj17 = { name: "channel_screen", navigationKey: channelId, definition: channelId(tmp2[46]).CHANNEL_NAVIGATION_TTI, visibilityMode: "prerendered", isVisible: isNavigationTTIVisible, descendantTracking: "included", accessible: false, onAccessibilityEscape: tmp46, style: tmp15, children: tmp42 };
                                          const tmp49 = closure_14(channelId(tmp2[45]).NavTTISurfaceProvider, obj17);
                                          cResult[100] = channelId;
                                          cResult[101] = tmp15;
                                          cResult[102] = isNavigationTTIVisible;
                                          cResult[103] = tmp42;
                                          cResult[104] = tmp46;
                                          cResult[105] = tmp49;
                                        }
                                        class Le {
                                          constructor() {
                                            if (closure_6) {
                                              tmp = closure_5;
                                              goBackResult = closure_5.goBack();
                                            }
                                            return;
                                          }
                                        }
                                        cResult[97] = tmp19;
                                        cResult[98] = navigation;
                                        cResult[99] = Le;
                                        tmp46 = Le;
                                      }
                                    }
                                    const obj18 = { children: null };
                                    const items6 = [tmp34, tmp39];
                                    obj18.children = items6;
                                    const tmp45 = closure_15(closure_16, obj18);
                                    cResult[87] = tmp39;
                                    cResult[88] = tmp34;
                                    cResult[89] = tmp45;
                                    tmp42 = tmp45;
                                  }
                                  const obj19 = { name: "chat_container", tracking: "include", style: tmp17, children: tmp36 };
                                  const tmp41 = closure_14(channelId(tmp2[26]).NavTTIView, obj19);
                                  cResult[84] = tmp17;
                                  cResult[85] = tmp36;
                                  cResult[86] = tmp41;
                                  tmp39 = tmp41;
                                }
                              }
                            }
                            const obj20 = { guildId, channelId, isActive, chatInputRef: ref, screenIndex };
                            const tmp38 = closure_14(isNavigationScreen(tmp2[43]), obj20);
                            cResult[79] = channelId;
                            cResult[80] = guildId;
                            cResult[81] = isActive;
                            cResult[82] = screenIndex;
                            cResult[83] = tmp38;
                            tmp36 = tmp38;
                          }
                        }
                      }
                      if (cResult[24] !== tmp32) {
                        const tmp32Result8 = tmp32();
                        class Le {
                          constructor() {
                            if (closure_6) {
                              tmp = closure_5;
                              goBackResult = closure_5.goBack();
                            }
                            return;
                          }
                        }
                        cResult[24] = tmp32;
                        cResult[25] = tmp32Result8;
                      }
                      const _Symbol3 = Symbol;
                      if (cResult[26] === Symbol.for("react.memo_cache_sentinel")) {
                        class Le {
                          constructor() {
                            if (closure_6) {
                              tmp = closure_5;
                              goBackResult = closure_5.goBack();
                            }
                            return;
                          }
                        }
                        cResult[26] = tmp106;
                        let tmp104 = tmp106;
                      } else {
                        tmp104 = cResult[26];
                      }
                      let tmp107;
                      if (needSubscriptionToAccess) {
                        tmp107 = channelId;
                      }
                      if (cResult[27] === guildId) {
                        if (cResult[28] === tmp107) {
                          let tmp108 = cResult[29];
                        }
                        class Le {
                          constructor() {
                            if (closure_6) {
                              tmp = closure_5;
                              goBackResult = closure_5.goBack();
                            }
                            return;
                          }
                        }
                        const obj21 = { style: tmp17, children: null };
                        const items7 = [tmp104, tmp108];
                        obj21.children = items7;
                        const tmp114 = closure_15(isBackEnabled, obj21);
                        cResult[30] = tmp17;
                        cResult[31] = tmp108;
                        cResult[32] = tmp114;
                      }
                      const obj22 = { guildId, gatedChannelId: tmp107 };
                      const tmp110 = closure_14(isNavigationScreen(tmp2[37]), obj22);
                      cResult[27] = guildId;
                      cResult[28] = tmp107;
                      cResult[29] = tmp110;
                      tmp108 = tmp110;
                    }
                  }
                }
              }
            }
          }
          function renderHeader(arg0) {
            const obj = { channelId, frame, guildId, isNavigationScreen, screenIndex, showCreateThread, isBackEnabled, measureNavigationTTI: null };
            let tmp3 = undefined !== arg0;
            if (tmp3) {
              tmp3 = arg0;
            }
            obj.measureNavigationTTI = tmp3;
            return closure_2_14(closure_18, obj);
          }
          cResult[16] = frame;
          cResult[17] = channelId;
          cResult[18] = guildId;
          cResult[19] = tmp19;
          cResult[20] = isNavigationScreen;
          cResult[21] = screenIndex;
          cResult[22] = showCreateThread;
          cResult[23] = renderHeader;
          tmp32 = renderHeader;
        }
      }
      if (cResult[10] === tmp15) {
        if (cResult[11] === tmp4.containerEmpty) {
          let tmp115 = cResult[12];
        }
        class Le {
          constructor() {
            if (closure_6) {
              tmp = closure_5;
              goBackResult = closure_5.goBack();
            }
            return;
          }
        }
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          class Le {
            constructor() {
              if (closure_6) {
                tmp = closure_5;
                goBackResult = closure_5.goBack();
              }
              return;
            }
          }
          const intl = channelId(tmp2[17]).intl;
          tmp118[0] = intl.string(channelId(tmp2[17]).t.ai6Lbr);
          const intl2 = channelId(tmp2[17]).intl;
          tmp118[1] = intl2.string(channelId(tmp2[17]).t["LTr+x9"]);
          const tmp119 = closure_14(channelId(tmp2[35]).EmptyState, tmp118);
          cResult[13] = tmp119;
          let tmp116 = tmp119;
        } else {
          tmp116 = cResult[13];
        }
        if (cResult[14] !== tmp115) {
          class Le {
            constructor() {
              if (closure_6) {
                tmp = closure_5;
                goBackResult = closure_5.goBack();
              }
              return;
            }
          }
          const obj23 = { style: tmp115, children: tmp116 };
          const tmp122 = closure_14(isBackEnabled, obj23);
          cResult[14] = tmp115;
          cResult[15] = tmp122;
          let tmp120 = tmp122;
        } else {
          tmp120 = cResult[15];
        }
        return tmp120;
      }
      const items8 = [tmp15, tmp4.containerEmpty];
      cResult[10] = tmp15;
      cResult[11] = tmp4.containerEmpty;
      cResult[12] = items8;
      tmp115 = items8;
      const tmpResult6 = channelId(tmp2[34]);
    }
    const items9 = [tmp4.contentContainer, splitDivider];
    cResult[3] = tmp4.contentContainer;
    cResult[4] = splitDivider;
    cResult[5] = items9;
    tmp17 = items9;
  }
  const items10 = [tmp4.container, onyxContainerBorder];
  cResult[0] = tmp4.container;
  cResult[1] = onyxContainerBorder;
  cResult[2] = items10;
  tmp15 = items10;
  const tmp12 = isNavigationScreen(frame[31])();
}) : (function StandaloneChannelScreen(isActive) {
  ({ guildId, channelId } = isActive);
  ({ isNavigationTTIVisible, isNavigationScreen, frame } = isActive);
  ({ showCreateThread, screenIndex } = isActive);
  closure_4 = undefined;
  let isChatBesideChannelList;
  closure_6 = undefined;
  const tmp = closure_17();
  dependencyMap = tmp;
  const navigation = channelId(1504).useNavigation();
  const obj = channelId(1504);
  const isSwipeToMemberListEnabled = channelId(11300).useIsSwipeToMemberListEnabled();
  const needSubscriptionToAccess = frame(6033)(channelId).needSubscriptionToAccess;
  const obj2 = channelId(11300);
  let tmp6 = guildId;
  if (guildId == null) {
    tmp6 = closure_10;
  }
  const canSeeOnboardingHome = channelId(7384).useCanSeeOnboardingHome(tmp6);
  const obj3 = channelId(7384);
  const tmp9 = frame(5242)() === constants2.ONYX;
  closure_4 = tmp9;
  const tmp10 = frame(5190)();
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
  const isForumChannelSearchActive = channelId(11084).useIsForumChannelSearchActive(channelId);
  if (isChatLockedOpen) {
    tmp14 = isNavigationScreen;
  }
  if (tmp14) {
    tmp14 = !isForumChannelSearchActive;
  }
  closure_6 = tmp14;
  const tmp2Result = channelId(11084);
  const items2 = [ChannelStore];
  const items3 = [channelId];
  const stateFromStores = channelId(504).useStateFromStores(items2, () => {
    let channel = null;
    if (null != channelId) {
      channel = ChannelStore.getChannel(tmp);
    }
    return channel;
  }, items3);
  const tmp2Result4 = channelId(504);
  let type;
  const dMAppChannelApplicationId = channelId(6865).useDMAppChannelApplicationId(stateFromStores);
  if (stateFromStores != null) {
    type = stateFromStores.type;
  }
  const tmp2Result5 = channelId(6865);
  let tmp19 = null;
  if (type === constants.GUILD_APP || null != dMAppChannelApplicationId) {
    tmp19 = channelId;
  }
  const dismissChannelSecondaryViewChatOnFrameDeepLink = channelId(9782).useDismissChannelSecondaryViewChatOnFrameDeepLink(tmp19);
  if (null != channelId) {
    if (null != guildId) {
      if (channelId !== StaticChannelRoute.ROLE_SUBSCRIPTIONS) {
        if (!needSubscriptionToAccess) {
          if (channelId === StaticChannelRoute.GUILD_HOME) {
            const obj4 = { style: memo, children: null };
            const obj5 = { channelId, frame, guildId, isNavigationScreen, screenIndex, showCreateThread, isBackEnabled: tmp14, measureNavigationTTI: false };
            const items4 = [closure_14(closure_18, obj5), ];
            const obj6 = { style: memo1, children: null };
            let tmp41Result = null;
            if (canSeeOnboardingHome) {
              const obj7 = { guildId };
              tmp41Result = closure_14(frame(18517), obj7);
            }
            obj6.children = tmp41Result;
            items4[1] = closure_14(closure_6, obj6);
            obj4.children = items4;
            return closure_15(closure_6, obj4);
          } else if (channelId === StaticChannelRoute.MEMBER_SAFETY) {
            const obj8 = { style: tmp.container, children: null };
            const items5 = [closure_14(frame(10693), { absolute: true }), ];
            const obj9 = { guildId };
            items5[1] = closure_14(frame(18535), obj9);
            obj8.children = items5;
            return closure_15(closure_6, obj8);
          } else if (channelId === StaticChannelRoute.CONJURE) {
            const obj10 = { guildId, inline: true };
            return closure_14(frame(11839), obj10);
          } else if (showCreateThread) {
            const obj11 = { style: memo1, children: null };
            const obj12 = { channelId, frame, guildId, isNavigationScreen, screenIndex, showCreateThread, isBackEnabled: tmp14, measureNavigationTTI: false };
            const items6 = [closure_14(closure_18, obj12), ];
            const obj13 = { channelId, screenIndex };
            items6[1] = closure_14(channelId(18553).CreateThreadView, obj13);
            obj11.children = items6;
            return closure_15(closure_6, obj11);
          } else {
            if (null != stateFromStores) {
              if (tmp18) {
                const obj14 = { style: memo, children: null };
                const obj15 = { channelId, frame, guildId, isNavigationScreen, screenIndex, showCreateThread, isBackEnabled: tmp14, measureNavigationTTI: false };
                const items7 = [closure_14(closure_18, obj15), ];
                const obj16 = { style: memo1, children: null };
                const obj17 = { channel: stateFromStores };
                obj16.children = closure_14(frame(18557), obj17);
                items7[1] = closure_14(closure_6, obj16);
                obj14.children = items7;
                return closure_15(closure_6, obj14);
              }
            }
            const obj18 = { children: null };
            const obj19 = { channelId, frame, guildId, isNavigationScreen, screenIndex, showCreateThread, isBackEnabled: tmp14, measureNavigationTTI: true };
            const items8 = [closure_14(closure_18, obj19), ];
            const obj20 = { name: "chat_container", tracking: "include", style: memo1, children: null };
            const obj21 = { guildId, channelId, isActive: isActive.isActive, chatInputRef: ref, screenIndex };
            obj20.children = closure_14(frame(10965), obj21);
            items8[1] = closure_14(channelId(18495).NavTTIView, obj20);
            obj18.children = items8;
            const tmp25 = closure_15(closure_16, obj18);
            if (isSwipeToMemberListEnabled) {
              const obj22 = { style: memo, channelId, isNavigationTTIVisible, screenIndex, isBackEnabled: tmp14, children: tmp25 };
              let tmp23Result = closure_14(frame(18573), obj22);
            } else {
              const obj23 = {
                name: "channel_screen",
                navigationKey: channelId,
                definition: channelId(13520).CHANNEL_NAVIGATION_TTI,
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
                children: tmp25
              };
              tmp23Result = closure_14(channelId(18574).NavTTISurfaceProvider, obj23);
            }
            return tmp23Result;
          }
        }
      }
      const obj24 = { style: memo, children: null };
      const obj25 = { channelId, frame, guildId, isNavigationScreen, screenIndex, showCreateThread, isBackEnabled: tmp14, measureNavigationTTI: false };
      const items9 = [closure_14(closure_18, obj25), ];
      const obj26 = { style: memo1, children: null };
      const items10 = [closure_14(frame(10693), { absolute: true }), ];
      const obj27 = { guildId, gatedChannelId: null };
      let tmp49;
      if (needSubscriptionToAccess) {
        tmp49 = channelId;
      }
      obj27.gatedChannelId = tmp49;
      items10[1] = closure_14(frame(18500), obj27);
      obj26.children = items10;
      items9[1] = closure_15(closure_6, obj26);
      obj24.children = items9;
      return closure_15(closure_6, obj24);
    }
  }
  const obj28 = { style: null, children: null };
  const items11 = [memo, tmp.containerEmpty];
  obj28.style = items11;
  const obj29 = { title: null, body: null };
  const intl = channelId(1125).intl;
  obj29.title = intl.string(channelId(1125).t.ai6Lbr);
  const intl2 = channelId(1125).intl;
  obj29.body = intl2.string(channelId(1125).t["LTr+x9"]);
  obj28.children = closure_14(channelId(1199).EmptyState, obj29);
  return closure_14(closure_6, obj28);
}));