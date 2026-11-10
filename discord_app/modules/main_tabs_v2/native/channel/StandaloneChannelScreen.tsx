// === Module 18994: StandaloneChannelScreen ===

// Module 18994 (StandaloneChannelScreen)
import nativeDefault from "native" /* 575 */;
import NavigationRouteUtils from "NavigationRouteUtils" /* 5316 */;
import PressableNavigatorBackIcon from "PressableNavigatorBackIcon" /* 9910 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4991 */;

require = fn;
function Header(channelId) {
  channelId = channelId.channelId;
  ({ screenIndex, guildId } = channelId);
  const isNavigationScreen = channelId.isNavigationScreen;
  const frame = channelId.frame;
  const showCreateThread = channelId.showCreateThread;
  ({ isBackEnabled, measureNavigationTTI } = channelId);
  const navigation = channelId(isNavigationScreen[9]).useNavigation();
  const tmp4 = closure_15();
  const headerWrapper = tmp4;
  const top = guildId(isNavigationScreen[10])().top;
  let obj = channelId(isNavigationScreen[9]);
  const gradientTop = channelId(isNavigationScreen[11]).useGradientTop();
  items = [, , , , , ];
  ({ headerWrapper: arr[0], headerWithFadingFrame: arr[1], splitDividerTop: arr[2] } = tmp4);
  items[3] = gradientTop;
  items[4] = frame;
  items[5] = top;
  const memo = frame.useMemo(() => {
    items = [headerWrapper.headerWrapper, gradientTop, , , ];
    let prop;
    if (null != frame) {
      prop = headerWrapper.headerWithFadingFrame;
    }
    items[2] = prop;
    let splitDividerTop;
    if (null != frame) {
      splitDividerTop = headerWrapper.splitDividerTop;
    }
    items[3] = splitDividerTop;
    if (null != frame) {
      const obj2 = { marginTop: top, minHeight };
      let obj = obj2;
    } else {
      obj = { paddingTop: top, minHeight: top + minHeight };
    }
    items[4] = obj;
    return items;
  }, items);
  const items1 = [navigation, isNavigationScreen];
  const onPress = frame.useCallback(() => {
    if (isNavigationScreen) {
      navigation.goBack();
    }
  }, items1);
  let obj2 = channelId(isNavigationScreen[11]);
  const items2 = [headerWrapper];
  const items3 = [guildId, channelId];
  const stateFromStores = channelId(isNavigationScreen[12]).useStateFromStores(items2, () => {
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
  const memo1 = frame.useMemo(() => {
    let tmp2 = null != stateFromStores;
    if (tmp2) {
      tmp2 = tmp !== React6;
    }
    return tmp2;
  }, items4);
  obj4.IconComponent = channelId(isNavigationScreen[14]).ServerIcon;
  const intl = channelId(isNavigationScreen[15]).intl;
  obj4.label = intl.string(channelId(isNavigationScreen[15]).t.WYj55Y);
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
          return application_id(PressableNavigatorBackIcon.PressableNavigatorBackIcon, obj);
        }
    };
    let tmp13Result2 = closure_12(tmp(tmp2[17]).ContextMenu, obj5);
    let tmp13 = closure_12;
  } else {
    const obj6 = { onPress };
    tmp13Result2 = closure_12(tmp(tmp2[18]).PressableNavigatorBackIcon, obj6);
    tmp13 = closure_12;
  }
  const items6 = [tmp13(navigation, { style: tmp4.headerBottomBorder }), ];
  if (!isBackEnabled) {
    const obj8 = { style: tmp4.spacer };
    tmp13Result2 = tmp13(tmp16, obj8);
  }
  const items7 = [tmp13Result2, , , ];
  let tmp13Result = null;
  if (!showCreateThread) {
    const obj9 = { channelId };
    tmp13Result = tmp13(tmp(tmp2[20]).PinotMemberNoticeHeaderArrow, obj9);
  }
  const obj10 = { children: null };
  const obj11 = { children: null };
  items7[1] = tmp13Result;
  items7[2] = tmp13(guildId(isNavigationScreen[21]), { channelId, isNavigationScreen, screenIndex, showCreateThread });
  items7[3] = tmp13(guildId(isNavigationScreen[22]), { containerStyle: tmp4.actions, channelId, screenIndex, showCreateThread });
  obj11.children = items7;
  items6[1] = closure_13(channelId(isNavigationScreen[19]).LayerScope, obj11);
  obj10.children = items6;
  const tmp14Result = closure_13(closure_14, obj10);
  if (measureNavigationTTI) {
    const obj13 = { name: "channel_header", tracking: "include", style: memo, children: tmp14Result };
    let tmp13Result3 = tmp13(tmp(tmp2[23]).NavTTIView, obj13);
  } else {
    const obj14 = { style: memo, children: tmp14Result };
    tmp13Result3 = tmp13(tmp16, obj14);
  }
  const obj15 = { children: null };
  const items8 = [tmp13Result3, frame];
  obj15.children = items8;
  return closure_13(closure_14, obj15);
}
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const MainTabsV2Constants = fn(9909);
({ ONYX_BORDER_WIDTH, MIN_HEADER_HEIGHT: closure_6 } = MainTabsV2Constants);
const Constants = fn(1072);
({ ChannelTypes: metroImportDefault, EMPTY_STRING_SNOWFLAKE_ID: closure_8, ME: closure_9, ThemeTypes: closure_10 } = Constants);
const StaticChannelRoute = fn(4998).StaticChannelRoute;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
const createStyles = fn(5142);
let obj = { container: { flex: 1 }, onyxContainerBorder: { borderLeftWidth: ONYX_BORDER_WIDTH, borderLeftColor: nativeDefault.colors.APP_FRAME_BORDER, borderTopWidth: ONYX_BORDER_WIDTH, borderTopColor: "transparent" }, contentContainer: null, containerEmpty: null, headerWrapper: null, headerBottomBorder: null, headerWithFadingFrame: null, splitDividerTop: null, actions: null, spacer: null };
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
obj.splitDividerTop = { borderTopWidth: nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH, borderTopColor: nativeDefault.colors.APP_FRAME_BORDER };
let obj9 = { borderTopWidth: nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH, borderTopColor: nativeDefault.colors.APP_FRAME_BORDER };
obj.actions = { marginRight: nativeDefault.space.PX_16 };
let obj10 = { marginRight: nativeDefault.space.PX_16 };
obj.spacer = { width: nativeDefault.space.PX_16 };
let closure_15 = createStyles.createStyles(obj);
let obj11 = { width: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/StandaloneChannelScreen.tsx");

export default noop.memo(function StandaloneChannelScreen(isActive) {
  ({ guildId, channelId } = isActive);
  ({ isNavigationTTIVisible, isNavigationScreen, frame } = isActive);
  ({ showCreateThread, screenIndex } = isActive);
  closure_4 = undefined;
  let isChatBesideChannelList;
  closure_6 = undefined;
  const tmp = closure_15();
  dependencyMap = tmp;
  noop = channelId(1500).useNavigation();
  const obj = channelId(1500);
  const isSwipeToMemberListEnabled = channelId(11692).useIsSwipeToMemberListEnabled();
  const needSubscriptionToAccess = frame(6179)(channelId).needSubscriptionToAccess;
  const obj2 = channelId(11692);
  let tmp6 = guildId;
  if (guildId == null) {
    tmp6 = closure_8;
  }
  const canSeeOnboardingHome = channelId(7464).useCanSeeOnboardingHome(tmp6);
  const obj3 = channelId(7464);
  const tmp9 = frame(5371)() === constants2.ONYX;
  closure_4 = tmp9;
  const tmp10 = frame(5319)();
  isChatBesideChannelList = tmp10.isChatBesideChannelList;
  const isChatLockedOpen = tmp10.isChatLockedOpen;
  items = [frame, tmp9, isChatBesideChannelList, , ];
  ({ container: arr[3], onyxContainerBorder: arr[4] } = tmp);
  const memo = noop.useMemo(() => {
    items = [container.container, ];
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
  const contentContainer = tmp.contentContainer;
  const ref = noop.useRef(null);
  let tmp13 = !isChatLockedOpen;
  const isForumChannelSearchActive = channelId(11496).useIsForumChannelSearchActive(channelId);
  if (isChatLockedOpen) {
    tmp13 = isNavigationScreen;
  }
  if (tmp13) {
    tmp13 = !isForumChannelSearchActive;
  }
  closure_6 = tmp13;
  const tmp2Result = channelId(11496);
  const items1 = [isChatBesideChannelList];
  const items2 = [channelId];
  const stateFromStores = channelId(504).useStateFromStores(items1, () => {
    let channel = null;
    if (null != channelId) {
      channel = ChannelStore.getChannel(tmp);
    }
    return channel;
  }, items2);
  const tmp2Result4 = channelId(504);
  let type;
  const dMAppChannelApplicationId = channelId(6936).useDMAppChannelApplicationId(stateFromStores);
  if (stateFromStores != null) {
    type = stateFromStores.type;
  }
  const tmp2Result5 = channelId(6936);
  let tmp18 = null;
  if (type === constants.GUILD_APP || null != dMAppChannelApplicationId) {
    tmp18 = channelId;
  }
  const dismissChannelSecondaryViewChatOnFrameDeepLink = channelId(9925).useDismissChannelSecondaryViewChatOnFrameDeepLink(tmp18);
  if (null != channelId) {
    if (null != guildId) {
      if (channelId !== StaticChannelRoute.ROLE_SUBSCRIPTIONS) {
        if (!needSubscriptionToAccess) {
          if (channelId === StaticChannelRoute.GUILD_HOME) {
            const obj4 = { style: memo, children: null };
            const obj5 = { channelId, frame, guildId, isNavigationScreen, screenIndex, showCreateThread, isBackEnabled: tmp13, measureNavigationTTI: false };
            const items3 = [closure_12(Header, obj5), ];
            const obj6 = { style: contentContainer, children: null };
            let tmp40Result = null;
            if (canSeeOnboardingHome) {
              const obj7 = { guildId };
              tmp40Result = closure_12(frame(19017), obj7);
            }
            obj6.children = tmp40Result;
            items3[1] = closure_12(closure_4, obj6);
            obj4.children = items3;
            return closure_13(closure_4, obj4);
          } else if (channelId === StaticChannelRoute.MEMBER_SAFETY) {
            const obj8 = { style: tmp.container, children: null };
            const items4 = [closure_12(frame(10864), { absolute: true }), ];
            const obj9 = { guildId };
            items4[1] = closure_12(frame(19034), obj9);
            obj8.children = items4;
            return closure_13(closure_4, obj8);
          } else if (channelId === StaticChannelRoute.CONJURE) {
            const obj10 = { guildId, inline: true };
            return closure_12(frame(12244), obj10);
          } else if (showCreateThread) {
            const obj11 = { style: contentContainer, children: null };
            const obj12 = { channelId, frame, guildId, isNavigationScreen, screenIndex, showCreateThread, isBackEnabled: tmp13, measureNavigationTTI: false };
            const items5 = [closure_12(Header, obj12), ];
            const obj13 = { channelId, screenIndex };
            items5[1] = closure_12(channelId(19052).CreateThreadView, obj13);
            obj11.children = items5;
            return closure_13(closure_4, obj11);
          } else {
            if (null != stateFromStores) {
              if (tmp17) {
                const obj14 = { style: memo, children: null };
                const obj15 = { channelId, frame, guildId, isNavigationScreen, screenIndex, showCreateThread, isBackEnabled: tmp13, measureNavigationTTI: false };
                const items6 = [closure_12(Header, obj15), ];
                const obj16 = { style: contentContainer, children: null };
                const obj17 = { channel: stateFromStores };
                obj16.children = closure_12(frame(19056), obj17);
                items6[1] = closure_12(closure_4, obj16);
                obj14.children = items6;
                return closure_13(closure_4, obj14);
              }
            }
            const obj18 = { children: null };
            const obj19 = { channelId, frame, guildId, isNavigationScreen, screenIndex, showCreateThread, isBackEnabled: tmp13, measureNavigationTTI: true };
            const items7 = [closure_12(Header, obj19), ];
            const obj20 = { name: "chat_container", tracking: "include", style: contentContainer, children: null };
            const obj21 = { guildId, channelId, isActive: isActive.isActive, chatInputRef: ref, screenIndex };
            obj20.children = closure_12(frame(11363), obj21);
            items7[1] = closure_12(channelId(18995).NavTTIView, obj20);
            obj18.children = items7;
            const tmp24 = closure_13(closure_14, obj18);
            if (isSwipeToMemberListEnabled) {
              const obj22 = { style: memo, channelId, isNavigationTTIVisible, screenIndex, isBackEnabled: tmp13, children: tmp24 };
              let tmp22Result = closure_12(frame(19068), obj22);
            } else {
              const obj23 = {
                name: "channel_screen",
                navigationKey: channelId,
                definition: channelId(13977).CHANNEL_NAVIGATION_TTI,
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
                children: tmp24
              };
              tmp22Result = closure_12(channelId(19069).NavTTISurfaceProvider, obj23);
            }
            return tmp22Result;
          }
        }
      }
      const obj24 = { style: memo, children: null };
      const obj25 = { channelId, frame, guildId, isNavigationScreen, screenIndex, showCreateThread, isBackEnabled: tmp13, measureNavigationTTI: false };
      const items8 = [closure_12(Header, obj25), ];
      const obj26 = { style: contentContainer, children: null };
      const items9 = [closure_12(frame(10864), { absolute: true }), ];
      const obj27 = { guildId, gatedChannelId: null };
      let tmp48;
      if (needSubscriptionToAccess) {
        tmp48 = channelId;
      }
      obj27.gatedChannelId = tmp48;
      items9[1] = closure_12(frame(19000), obj27);
      obj26.children = items9;
      items8[1] = closure_13(closure_4, obj26);
      obj24.children = items8;
      return closure_13(closure_4, obj24);
    }
  }
  const obj28 = { style: null, children: null };
  const items10 = [memo, tmp.containerEmpty];
  obj28.style = items10;
  const obj29 = { title: null, body: null };
  const intl = channelId(1113).intl;
  obj29.title = intl.string(channelId(1113).t.ai6Lbr);
  const intl2 = channelId(1113).intl;
  obj29.body = intl2.string(channelId(1113).t["LTr+x9"]);
  obj28.children = closure_12(channelId(1187).EmptyState, obj29);
  return closure_12(closure_4, obj28);
});