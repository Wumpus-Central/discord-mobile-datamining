// === Module 16532: StandaloneChannelScreen ===

// Module 16532 (StandaloneChannelScreen)
import nativeDefault from "native" /* 576 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 4417 */;
import PressableNavigatorBackIcon from "PressableNavigatorBackIcon" /* 7865 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;

require = fn;
function Header(channelId) {
  channelId = channelId.channelId;
  ({ screenIndex, guildId } = channelId);
  const isNavigationScreen = channelId.isNavigationScreen;
  const frame = channelId.frame;
  const showCreateThread = channelId.showCreateThread;
  let obj = channelId(isNavigationScreen[9]);
  const navigation = obj.useNavigation();
  const tmp4 = closure_14();
  const headerWrapper = tmp4;
  const top = guildId(isNavigationScreen[10])().top;
  let obj1 = channelId(isNavigationScreen[11]);
  const gradientTop = obj1.useGradientTop();
  let items = [, , , , , , ];
  ({ headerWrapper: arr[0], headerWithFadingFrame: arr[1], splitDivider: arr[2], splitDividerTop: arr[3] } = tmp4);
  items[4] = gradientTop;
  items[5] = frame;
  items[6] = top;
  const items1 = [navigation, isNavigationScreen];
  const memo = frame.useMemo(() => {
    const items = [headerWrapper.headerWrapper, gradientTop, , , , ];
    let prop;
    if (null != frame) {
      prop = tmp.headerWithFadingFrame;
    }
    items[2] = prop;
    let splitDivider;
    if (null != frame) {
      splitDivider = tmp.splitDivider;
    }
    items[3] = splitDivider;
    let splitDividerTop;
    if (null != frame) {
      splitDividerTop = tmp.splitDividerTop;
    }
    items[4] = splitDividerTop;
    if (null != frame) {
      let obj = { marginTop: top, minHeight };
    } else {
      obj = { paddingTop: top, minHeight: top + minHeight };
    }
    items[5] = obj;
    return items;
  }, items);
  const onPress = frame.useCallback(() => {
    if (isNavigationScreen) {
      navigation.goBack();
    }
  }, items1);
  let obj2 = channelId(isNavigationScreen[12]);
  const items2 = [headerWrapper];
  const items3 = [guildId, channelId];
  const stateFromStores = obj2.useStateFromStores(items2, () => {
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
  obj = { IconComponent: null, label: null, action: null };
  const memo1 = frame.useMemo(() => {
    let tmp2 = null != stateFromStores;
    if (tmp2) {
      tmp2 = tmp !== React6;
    }
    return tmp2;
  }, items4);
  obj.IconComponent = channelId(isNavigationScreen[14]).ServerIcon;
  const intl = channelId(isNavigationScreen[15]).intl;
  obj.label = intl.string(channelId(isNavigationScreen[15]).t.WYj55Y);
  obj.action = function action() {
    const obj = { screen: "guilds", guildId: stateFromStores, channelId, resetRoot: false, drawerOpen: false };
    obj.navigateToRootTab(obj);
  };
  const items5 = [obj];
  if (memo1) {
    obj = {
      triggerOnLongPress: true,
      align: "below",
      items: items5,
      children(ref) {
          const merged = Object.assign(ref, Object.assign({ ref: 0 }));
          const obj = { ref: ref.ref };
          const merged1 = Object.assign(merged);
          obj.onPress = onPress;
          return closure_2_11(PressableNavigatorBackIcon.PressableNavigatorBackIcon, obj);
        }
    };
    let tmp13Result = tmp11(tmp(tmp2[17]).ContextMenu, obj);
    let tmp13 = tmp11;
  } else {
    obj1 = { onPress };
    tmp13Result = tmp11(tmp(tmp2[18]).PressableNavigatorBackIcon, obj1);
    tmp13 = tmp11;
  }
  obj2 = { style: memo, children: null };
  const items6 = [tmp13(navigation, { style: tmp4.headerBottomBorder }), ];
  if (!channelId.isBackEnabled) {
    const obj4 = { style: tmp4.spacer };
    tmp13Result = tmp13(tmp16, obj4);
  }
  const obj5 = { children: null };
  const obj6 = { children: null };
  const items7 = [tmp13Result, tmp13(guildId(isNavigationScreen[20]), { channelId, isNavigationScreen, screenIndex, showCreateThread }), tmp13(guildId(isNavigationScreen[21]), { containerStyle: tmp4.actions, channelId, screenIndex, showCreateThread })];
  obj6.children = items7;
  items6[1] = closure_12(channelId(isNavigationScreen[19]).LayerScope, obj6);
  obj2.children = items6;
  const items8 = [closure_12(navigation, obj2), frame];
  obj5.children = items8;
  return closure_12(closure_13, obj5);
}
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const MainTabsV2Constants = fn(7864);
({ MIDNIGHT_BORDER_WIDTH, MIN_HEADER_HEIGHT: metroRequire } = MainTabsV2Constants);
const Constants = fn(1074);
({ EMPTY_STRING_SNOWFLAKE_ID: closure_7, ME: closure_8, ThemeTypes: closure_9 } = Constants);
const StaticChannelRoute = fn(1964).StaticChannelRoute;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
fn(4560);
let obj = { container: { flex: 1 }, midnightContainerBorder: null, contentContainer: null, containerEmpty: null, headerWrapper: null, headerBottomBorder: null, headerWithFadingFrame: null, splitDivider: null, splitDividerTop: null, actions: null, spacer: null };
obj = { borderLeftWidth: MIDNIGHT_BORDER_WIDTH, borderLeftColor: nativeDefault.colors.APP_FRAME_BORDER, borderTopWidth: MIDNIGHT_BORDER_WIDTH, borderTopColor: "transparent" };
obj.midnightContainerBorder = obj;
const createStyles = { flex: 1, backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND };
obj.contentContainer = createStyles;
obj.containerEmpty = { backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND };
let obj2 = { backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND };
obj.headerWrapper = { zIndex: 1, backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND, flexDirection: "row", alignItems: "center", flexShrink: 0 };
let obj4 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj4.top = undefined;
obj4.height = 1;
obj4.backgroundColor = nativeDefault.colors.STANDALONE_CHANNEL_HEADER_BORDER;
obj.headerBottomBorder = obj4;
let obj3 = { zIndex: 1, backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND, flexDirection: "row", alignItems: "center", flexShrink: 0 };
obj.headerWithFadingFrame = { borderTopLeftRadius: nativeDefault.modules.mobile.CHANNEL_DRAWER_CORNER_RADIUS };
let obj5 = { borderTopLeftRadius: nativeDefault.modules.mobile.CHANNEL_DRAWER_CORNER_RADIUS };
obj.splitDivider = { borderLeftWidth: nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH, borderLeftColor: nativeDefault.colors.APP_FRAME_BORDER };
let obj6 = { borderLeftWidth: nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH, borderLeftColor: nativeDefault.colors.APP_FRAME_BORDER };
obj.splitDividerTop = { borderTopWidth: nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH, borderTopColor: nativeDefault.colors.APP_FRAME_BORDER };
let obj7 = { borderTopWidth: nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH, borderTopColor: nativeDefault.colors.APP_FRAME_BORDER };
obj.actions = { marginRight: nativeDefault.space.PX_16 };
let obj8 = { marginRight: nativeDefault.space.PX_16 };
obj.spacer = { width: nativeDefault.space.PX_16 };
let closure_14 = createStyles.createStyles(obj);
let obj9 = { width: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/StandaloneChannelScreen.tsx");

export default noop.memo(function StandaloneChannelScreen(arg0) {
  ({ guildId, channelId } = arg0);
  ({ isNavigationScreen, frame } = arg0);
  ({ showCreateThread, screenIndex } = arg0);
  closure_4 = undefined;
  let isChatBesideChannelList;
  closure_6 = undefined;
  const tmp = closure_14();
  dependencyMap = tmp;
  let obj = channelId(1484);
  noop = obj.useNavigation();
  let obj1 = channelId(11466);
  const isSwipeToMemberListEnabled = obj1.useIsSwipeToMemberListEnabled();
  const needSubscriptionToAccess = frame(5007)(channelId).needSubscriptionToAccess;
  let obj2 = channelId(7222);
  let tmp6 = guildId;
  if (guildId == null) {
    tmp6 = closure_7;
  }
  const canSeeOnboardingHome = obj2.useCanSeeOnboardingHome(tmp6);
  const tmp9 = frame(4495)() === constants.MIDNIGHT;
  closure_4 = tmp9;
  const tmp10 = frame(4420)();
  isChatBesideChannelList = tmp10.isChatBesideChannelList;
  const isChatLockedOpen = tmp10.isChatLockedOpen;
  let items = [frame, tmp9, isChatBesideChannelList, , ];
  ({ container: arr[3], midnightContainerBorder: arr[4] } = tmp);
  const memo = noop.useMemo(() => {
    const items = [closure_2.container, ];
    let prop;
    if (null == frame) {
      if (closure_4) {
        if (!isChatBesideChannelList) {
          prop = tmp.midnightContainerBorder;
        }
      }
    }
    items[1] = prop;
    return items;
  }, items);
  const items1 = [frame, , ];
  ({ contentContainer: arr2[1], splitDivider: arr2[2] } = tmp);
  const memo1 = noop.useMemo(() => {
    const items = [closure_2.contentContainer, ];
    let splitDivider;
    if (null != frame) {
      splitDivider = closure_2.splitDivider;
    }
    items[1] = splitDivider;
    return items;
  }, items1);
  let tmp2Result = tmp2(13274);
  let tmp14 = !isChatLockedOpen;
  const isForumChannelSearchActive = tmp2Result.useIsForumChannelSearchActive(channelId);
  if (isChatLockedOpen) {
    tmp14 = isNavigationScreen;
  }
  if (tmp14) {
    tmp14 = !isForumChannelSearchActive;
  }
  closure_6 = tmp14;
  tmp2Result = tmp2(504);
  const items2 = [isChatBesideChannelList];
  const items3 = [channelId];
  const stateFromStores = tmp2Result.useStateFromStores(items2, () => {
    let channel = null;
    if (null != channelId) {
      channel = ChannelStore.getChannel(tmp);
    }
    return channel;
  }, items3);
  channelId(7247);
  if (null != channelId) {
    if (null != guildId) {
      obj = { channelId, frame, guildId, isNavigationScreen, screenIndex, showCreateThread, isBackEnabled: tmp14 };
      const tmp35 = closure_11(Header, obj);
      if (channelId !== StaticChannelRoute.ROLE_SUBSCRIPTIONS) {
        if (!needSubscriptionToAccess) {
          if (channelId === tmp36.GUILD_HOME) {
            obj = { style: memo, children: null };
            const items4 = [tmp35, ];
            obj1 = { style: memo1, children: null };
            let tmp33Result = null;
            if (canSeeOnboardingHome) {
              obj2 = { guildId };
              tmp33Result = tmp33(tmp5(16550), obj2);
            }
            obj1.children = tmp33Result;
            items4[1] = tmp33(closure_4, obj1);
            obj.children = items4;
            return closure_12(closure_4, obj);
          } else if (channelId === tmp36.MEMBER_SAFETY) {
            const obj3 = { guildId };
            return tmp33(tmp5(16568), obj3);
          } else if (channelId === tmp36.VIBEGRATIONS) {
            const obj4 = { guildId };
            return tmp33(tmp5(16585), obj4);
          } else {
            if (tmp17) {
              if (null != stateFromStores) {
                const obj5 = { style: memo, children: null };
                const items5 = [tmp35, ];
                const obj6 = { style: memo1, children: null };
                const obj7 = { channel: stateFromStores };
                obj6.children = tmp33(tmp5(16613), obj7);
                items5[1] = tmp33(closure_4, obj6);
                obj5.children = items5;
                return closure_12(closure_4, obj5);
              }
            }
            if (showCreateThread) {
              const obj8 = { style: memo1, children: null };
              const items6 = [tmp35, ];
              const obj9 = { channelId, screenIndex };
              items6[1] = tmp33(tmp2(16619).CreateThreadView, obj9);
              obj8.children = items6;
              return tmp18(closure_4, obj8);
            } else {
              const obj10 = { children: null };
              const items7 = [tmp35, ];
              const obj11 = { style: memo1, children: null };
              const obj12 = { guildId, channelId, chatInputRef: ref, screenIndex };
              obj11.children = tmp33(tmp5(11340), obj12);
              items7[1] = tmp33(closure_4, obj11);
              obj10.children = items7;
              const tmp18Result = tmp18(closure_13, obj10);
              if (isSwipeToMemberListEnabled) {
                const obj13 = { style: memo, channelId, screenIndex, isBackEnabled: tmp14, children: tmp18Result };
                tmp33Result = tmp33(tmp5(16623), obj13);
              } else {
                const obj14 = {
                  style: memo,
                  accessible: false,
                  onAccessibilityEscape() {
                                  if (closure_6) {
                                    navigation.goBack();
                                  }
                                },
                  children: tmp18Result
                };
                tmp33Result = tmp33(closure_4, obj14);
              }
              return tmp33Result;
            }
          }
        }
      }
      const obj15 = { style: memo, children: null };
      const items8 = [tmp35, ];
      const obj16 = { style: memo1, children: null };
      const items9 = [closure_11(tmp5(5125), { absolute: true }), ];
      const obj17 = { guildId, gatedChannelId: null };
      let tmp32;
      if (needSubscriptionToAccess) {
        tmp32 = channelId;
      }
      obj17.gatedChannelId = tmp32;
      items9[1] = closure_11(tmp5(16533), obj17);
      obj16.children = items9;
      items8[1] = closure_12(closure_4, obj16);
      obj15.children = items8;
      return closure_12(closure_4, obj15);
    }
  }
  const obj18 = { style: null, children: null };
  const items10 = [memo, tmp.containerEmpty];
  obj18.style = items10;
  const obj19 = { title: null, body: null };
  const intl = tmp2(1114).intl;
  obj19.title = intl.string(channelId(1114).t.ai6Lbr);
  const intl2 = tmp2(1114).intl;
  obj19.body = intl2.string(channelId(1114).t["LTr+x9"]);
  obj18.children = closure_11(channelId(1178).EmptyState, obj19);
  return closure_11(closure_4, obj18);
});