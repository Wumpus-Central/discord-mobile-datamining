// discord_app/modules/main_tabs_v2/native/channel/StandaloneChannelScreen.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import NavigationRouteUtils from "../../helpers/NavigationRouteUtils.native.tsx";
import PressableNavigatorBackIcon from "../shared_components/navigator/PressableNavigatorBackIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import VibegrationsAppChannelsStore from "../../../vibegrations/stores/VibegrationsAppChannelsStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";

require = fn;
function Header(channelId) {
  channelId = channelId.channelId;
  ({ screenIndex, guildId } = channelId);
  const isNavigationScreen = channelId.isNavigationScreen;
  const frame = channelId.frame;
  const showCreateThread = channelId.showCreateThread;
  ({ isBackEnabled, measureNavigationTTI } = channelId);
  const navigation = channelId(isNavigationScreen[10]).useNavigation();
  const tmp4 = closure_15();
  const top = guildId(isNavigationScreen[11])().top;
  let obj = channelId(isNavigationScreen[10]);
  const gradientTop = channelId(isNavigationScreen[12]).useGradientTop();
  let items = [, , , , , ,];
  ({ headerWrapper: arr[0], headerWithFadingFrame: arr[1], splitDivider: arr[2], splitDividerTop: arr[3] } = tmp4);
  items[4] = gradientTop;
  items[5] = frame;
  items[6] = top;
  const memo = frame.useMemo(() => {
    const items = [headerWrapper.headerWrapper, gradientTop, , , ,];
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
  const onPress = frame.useCallback(() => {
    if (isNavigationScreen) {
      navigation.goBack();
    }
  }, items1);
  let obj2 = channelId(isNavigationScreen[12]);
  const items2 = [top];
  const items3 = [guildId, channelId];
  const stateFromStores = channelId(isNavigationScreen[13]).useStateFromStores(
    items2,
    () => {
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
    },
    items3,
  );
  const items4 = [stateFromStores];
  const obj4 = { IconComponent: null, label: null, action: null };
  const memo1 = frame.useMemo(() => {
    let tmp2 = null != stateFromStores;
    if (tmp2) {
      tmp2 = tmp !== React7;
    }
    return tmp2;
  }, items4);
  obj4.IconComponent = channelId(isNavigationScreen[15]).ServerIcon;
  const intl = channelId(isNavigationScreen[16]).intl;
  obj4.label = intl.string(channelId(isNavigationScreen[16]).t.WYj55Y);
  obj4.action = function action() {
    NavigationRouteUtils.navigateToRootTab({
      screen: "guilds",
      guildId: stateFromStores,
      channelId,
      resetRoot: false,
      drawerOpen: false,
    });
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
        return closure_2_12(PressableNavigatorBackIcon.PressableNavigatorBackIcon, obj);
      },
    };
    let tmp13Result1 = closure_12(tmp(tmp2[18]).ContextMenu, obj5);
    let tmp13 = closure_12;
  } else {
    const obj6 = { onPress };
    tmp13Result1 = closure_12(tmp(tmp2[19]).PressableNavigatorBackIcon, obj6);
    tmp13 = closure_12;
  }
  const items6 = [tmp13(navigation, { style: tmp4.headerBottomBorder })];
  if (!isBackEnabled) {
    const obj8 = { style: tmp4.spacer };
    tmp13Result1 = tmp13(tmp16, obj8);
  }
  const obj9 = { children: null };
  const obj10 = { children: null };
  const items7 = [
    tmp13Result1,
    tmp13(guildId(isNavigationScreen[21]), { channelId, isNavigationScreen, screenIndex, showCreateThread }),
    tmp13(guildId(isNavigationScreen[22]), { containerStyle: tmp4.actions, channelId, screenIndex, showCreateThread }),
  ];
  obj10.children = items7;
  items6[1] = closure_13(channelId(isNavigationScreen[20]).LayerScope, obj10);
  obj9.children = items6;
  const tmp14Result = closure_13(closure_14, obj9);
  if (measureNavigationTTI) {
    const obj12 = { name: "channel_header", tracking: "include", style: memo, children: tmp14Result };
    let tmp13Result = tmp13(tmp(tmp2[23]).NavTTIView, obj12);
  } else {
    const obj13 = { style: memo, children: tmp14Result };
    tmp13Result = tmp13(tmp16, obj13);
  }
  const obj14 = { children: null };
  const items8 = [tmp13Result, frame];
  obj14.children = items8;
  return closure_13(closure_14, obj14);
}
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const MainTabsV2Constants = fn(8195);
({ ONYX_BORDER_WIDTH, MIN_HEADER_HEIGHT: closure_7 } = MainTabsV2Constants);
const Constants = fn(1074);
({ EMPTY_STRING_SNOWFLAKE_ID: closure_8, ME: closure_9, ThemeTypes: c10 } = Constants);
const StaticChannelRoute = fn(2051).StaticChannelRoute;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
const createStyles = fn(4829);
let obj = {
  container: { flex: 1 },
  onyxContainerBorder: {
    borderLeftWidth: ONYX_BORDER_WIDTH,
    borderLeftColor: nativeDefault.colors.APP_FRAME_BORDER,
    borderTopWidth: ONYX_BORDER_WIDTH,
    borderTopColor: "transparent",
  },
  contentContainer: null,
  containerEmpty: null,
  headerWrapper: null,
  headerBottomBorder: null,
  headerWithFadingFrame: null,
  splitDivider: null,
  splitDividerTop: null,
  actions: null,
  spacer: null,
};
let obj3 = {
  borderLeftWidth: ONYX_BORDER_WIDTH,
  borderLeftColor: nativeDefault.colors.APP_FRAME_BORDER,
  borderTopWidth: ONYX_BORDER_WIDTH,
  borderTopColor: "transparent",
};
obj.contentContainer = { flex: 1, backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND };
let obj4 = { flex: 1, backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND };
obj.containerEmpty = { backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND };
let obj5 = { backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND };
obj.headerWrapper = {
  zIndex: 1,
  backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND,
  flexDirection: "row",
  alignItems: "center",
  flexShrink: 0,
};
let obj7 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj7.top = undefined;
obj7.height = 1;
obj7.backgroundColor = nativeDefault.colors.STANDALONE_CHANNEL_HEADER_BORDER;
obj.headerBottomBorder = obj7;
let obj6 = {
  zIndex: 1,
  backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND,
  flexDirection: "row",
  alignItems: "center",
  flexShrink: 0,
};
obj.headerWithFadingFrame = { borderTopLeftRadius: nativeDefault.modules.mobile.CHANNEL_DRAWER_CORNER_RADIUS };
let obj8 = { borderTopLeftRadius: nativeDefault.modules.mobile.CHANNEL_DRAWER_CORNER_RADIUS };
obj.splitDivider = {
  borderLeftWidth: nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH,
  borderLeftColor: nativeDefault.colors.APP_FRAME_BORDER,
};
let obj9 = {
  borderLeftWidth: nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH,
  borderLeftColor: nativeDefault.colors.APP_FRAME_BORDER,
};
obj.splitDividerTop = {
  borderTopWidth: nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH,
  borderTopColor: nativeDefault.colors.APP_FRAME_BORDER,
};
let obj10 = {
  borderTopWidth: nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH,
  borderTopColor: nativeDefault.colors.APP_FRAME_BORDER,
};
obj.actions = { marginRight: nativeDefault.space.PX_16 };
let obj11 = { marginRight: nativeDefault.space.PX_16 };
obj.spacer = { width: nativeDefault.space.PX_16 };
let closure_15 = createStyles.createStyles(obj);
let obj12 = { width: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/StandaloneChannelScreen.tsx");

export default noop.memo(function StandaloneChannelScreen(arg0) {
  ({ guildId, channelId } = arg0);
  ({ isNavigationTTIVisible, isNavigationScreen, frame } = arg0);
  ({ showCreateThread, screenIndex } = arg0);
  closure_4 = undefined;
  let isChatBesideChannelList;
  closure_6 = undefined;
  const tmp = closure_15();
  dependencyMap = tmp;
  noop = channelId(1485).useNavigation();
  const obj = channelId(1485);
  const isSwipeToMemberListEnabled = channelId(11809).useIsSwipeToMemberListEnabled();
  const needSubscriptionToAccess = frame(5306)(channelId).needSubscriptionToAccess;
  const obj2 = channelId(11809);
  let tmp6 = guildId;
  if (guildId == null) {
    tmp6 = closure_8;
  }
  const canSeeOnboardingHome = channelId(7555).useCanSeeOnboardingHome(tmp6);
  const obj3 = channelId(7555);
  const tmp9 = frame(4763)() === constants.ONYX;
  closure_4 = tmp9;
  const tmp10 = frame(4689)();
  isChatBesideChannelList = tmp10.isChatBesideChannelList;
  const isChatLockedOpen = tmp10.isChatLockedOpen;
  let items = [frame, tmp9, isChatBesideChannelList, ,];
  ({ container: arr[3], onyxContainerBorder: arr[4] } = tmp);
  const memo = noop.useMemo(() => {
    const items = [closure_2.container];
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
  const items1 = [frame, ,];
  ({ contentContainer: arr2[1], splitDivider: arr2[2] } = tmp);
  const memo1 = noop.useMemo(() => {
    const items = [closure_2.contentContainer];
    let splitDivider;
    if (null != frame) {
      splitDivider = closure_2.splitDivider;
    }
    items[1] = splitDivider;
    return items;
  }, items1);
  const ref = noop.useRef(null);
  let tmp14 = !isChatLockedOpen;
  const isForumChannelSearchActive = channelId(13682).useIsForumChannelSearchActive(channelId);
  if (isChatLockedOpen) {
    tmp14 = isNavigationScreen;
  }
  if (tmp14) {
    tmp14 = !isForumChannelSearchActive;
  }
  closure_6 = tmp14;
  const tmp2Result = channelId(13682);
  const items2 = [closure_6];
  const items3 = [channelId];
  const stateFromStores = channelId(504).useStateFromStores(
    items2,
    () => {
      let channel = null;
      if (null != channelId) {
        channel = ChannelStore.getChannel(tmp);
      }
      return channel;
    },
    items3,
  );
  const tmp2Result4 = channelId(504);
  const isVibegrationsChannelCandidate = channelId(5362).useIsVibegrationsChannelCandidate(
    stateFromStores,
    "StandaloneChannelScreen",
  );
  channelId(504);
  [][0] = channelId;
  if (null != channelId) {
    if (null != guildId) {
      if (channelId !== StaticChannelRoute.ROLE_SUBSCRIPTIONS) {
        if (!needSubscriptionToAccess) {
          if (channelId === StaticChannelRoute.GUILD_HOME) {
            const obj4 = { style: memo, children: null };
            const obj5 = {
              channelId,
              frame,
              guildId,
              isNavigationScreen,
              screenIndex,
              showCreateThread,
              isBackEnabled: tmp14,
              measureNavigationTTI: false,
            };
            const items4 = [closure_12(Header, obj5)];
            const obj6 = { style: memo1, children: null };
            let tmp32Result = null;
            if (canSeeOnboardingHome) {
              const obj7 = { guildId };
              tmp32Result = closure_12(frame(16987), obj7);
            }
            obj6.children = tmp32Result;
            items4[1] = closure_12(closure_4, obj6);
            obj4.children = items4;
            return closure_13(closure_4, obj4);
          } else if (channelId === StaticChannelRoute.MEMBER_SAFETY) {
            const obj8 = { guildId };
            return closure_12(frame(17005), obj8);
          } else if (channelId === StaticChannelRoute.VIBEGRATIONS) {
            const obj9 = { guildId };
            return closure_12(frame(17022), obj9);
          } else {
            if (isVibegrationsChannelCandidate) {
              if (!tmp18) {
                if (null != stateFromStores) {
                  const obj10 = { style: memo, children: null };
                  const obj11 = {
                    channelId,
                    frame,
                    guildId,
                    isNavigationScreen,
                    screenIndex,
                    showCreateThread,
                    isBackEnabled: tmp14,
                    measureNavigationTTI: false,
                  };
                  const items5 = [closure_12(Header, obj11)];
                  const obj12 = { style: memo1, children: null };
                  const obj13 = { channel: stateFromStores };
                  obj12.children = closure_12(frame(17179), obj13);
                  items5[1] = closure_12(closure_4, obj12);
                  obj10.children = items5;
                  return closure_13(closure_4, obj10);
                }
              }
            }
            if (showCreateThread) {
              const obj14 = { style: memo1, children: null };
              const obj15 = {
                channelId,
                frame,
                guildId,
                isNavigationScreen,
                screenIndex,
                showCreateThread,
                isBackEnabled: tmp14,
                measureNavigationTTI: false,
              };
              const items6 = [closure_12(Header, obj15)];
              const obj16 = { channelId, screenIndex };
              items6[1] = closure_12(channelId(17183).CreateThreadView, obj16);
              obj14.children = items6;
              return closure_13(closure_4, obj14);
            } else {
              const obj17 = { children: null };
              const obj18 = {
                channelId,
                frame,
                guildId,
                isNavigationScreen,
                screenIndex,
                showCreateThread,
                isBackEnabled: tmp14,
                measureNavigationTTI: true,
              };
              const items7 = [closure_12(Header, obj18)];
              const obj19 = { name: "chat_container", tracking: "include", style: memo1, children: null };
              const obj20 = { guildId, channelId, chatInputRef: ref, screenIndex };
              obj19.children = closure_12(frame(11689), obj20);
              items7[1] = closure_12(channelId(16961).NavTTIView, obj19);
              obj17.children = items7;
              const tmp19Result = closure_13(closure_14, obj17);
              if (isSwipeToMemberListEnabled) {
                const obj21 = {
                  style: memo,
                  channelId,
                  isNavigationTTIVisible,
                  screenIndex,
                  isBackEnabled: tmp14,
                  children: tmp19Result,
                };
                let tmp21Result = closure_12(frame(17187), obj21);
              } else {
                const obj22 = {
                  name: "channel_screen",
                  navigationKey: channelId,
                  definition: channelId(17189).CHANNEL_NAVIGATION_TTI,
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
                  children: tmp19Result,
                };
                tmp21Result = closure_12(channelId(17188).NavTTISurfaceProvider, obj22);
              }
              return tmp21Result;
            }
          }
        }
      }
      const obj23 = { style: memo, children: null };
      const obj24 = {
        channelId,
        frame,
        guildId,
        isNavigationScreen,
        screenIndex,
        showCreateThread,
        isBackEnabled: tmp14,
        measureNavigationTTI: false,
      };
      const items8 = [closure_12(Header, obj24)];
      const obj25 = { style: memo1, children: null };
      const items9 = [closure_12(frame(5429), { absolute: true })];
      const obj26 = { guildId, gatedChannelId: null };
      let tmp40;
      if (needSubscriptionToAccess) {
        tmp40 = channelId;
      }
      obj26.gatedChannelId = tmp40;
      items9[1] = closure_12(frame(16970), obj26);
      obj25.children = items9;
      items8[1] = closure_13(closure_4, obj25);
      obj23.children = items8;
      return closure_13(closure_4, obj23);
    }
  }
  const obj27 = { style: null, children: null };
  const items10 = [memo, tmp.containerEmpty];
  obj27.style = items10;
  const obj28 = { title: null, body: null };
  const intl = channelId(1115).intl;
  obj28.title = intl.string(channelId(1115).t.ai6Lbr);
  const intl2 = channelId(1115).intl;
  obj28.body = intl2.string(channelId(1115).t["LTr+x9"]);
  obj27.children = closure_12(channelId(1177).EmptyState, obj28);
  return closure_12(closure_4, obj27);
});
