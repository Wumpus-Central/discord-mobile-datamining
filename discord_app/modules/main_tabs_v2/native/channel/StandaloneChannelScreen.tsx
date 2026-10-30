// discord_app/modules/main_tabs_v2/native/channel/StandaloneChannelScreen.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import NavigationRouteUtils from "../../helpers/NavigationRouteUtils.native.tsx";
import PressableNavigatorBackIcon from "../shared_components/navigator/PressableNavigatorBackIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../../stores/ChannelStore.tsx";

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
  let obj2 = channelId(isNavigationScreen[11]);
  const items2 = [headerWrapper];
  const items3 = [guildId, channelId];
  const stateFromStores = channelId(isNavigationScreen[12]).useStateFromStores(
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
  obj4.IconComponent = channelId(isNavigationScreen[14]).ServerIcon;
  const intl = channelId(isNavigationScreen[15]).intl;
  obj4.label = intl.string(channelId(isNavigationScreen[15]).t.WYj55Y);
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
    let tmp13Result2 = closure_12(tmp(tmp2[17]).ContextMenu, obj5);
    let tmp13 = closure_12;
  } else {
    const obj6 = { onPress };
    tmp13Result2 = closure_12(tmp(tmp2[18]).PressableNavigatorBackIcon, obj6);
    tmp13 = closure_12;
  }
  const items6 = [tmp13(navigation, { style: tmp4.headerBottomBorder })];
  if (!isBackEnabled) {
    const obj8 = { style: tmp4.spacer };
    tmp13Result2 = tmp13(tmp16, obj8);
  }
  const items7 = [tmp13Result2, , ,];
  let tmp13Result = null;
  if (!showCreateThread) {
    const obj9 = { channelId };
    tmp13Result = tmp13(tmp(tmp2[20]).PinotMemberNoticeHeaderArrow, obj9);
  }
  const obj10 = { children: null };
  const obj11 = { children: null };
  items7[1] = tmp13Result;
  items7[2] = tmp13(guildId(isNavigationScreen[21]), { channelId, isNavigationScreen, screenIndex, showCreateThread });
  items7[3] = tmp13(guildId(isNavigationScreen[22]), {
    containerStyle: tmp4.actions,
    channelId,
    screenIndex,
    showCreateThread,
  });
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
const MainTabsV2Constants = fn(9792);
({ ONYX_BORDER_WIDTH, MIN_HEADER_HEIGHT: metroRequire } = MainTabsV2Constants);
const Constants = fn(1072);
({ ChannelTypes: closure_7, EMPTY_STRING_SNOWFLAKE_ID: closure_8, ME: closure_9, ThemeTypes: c10 } = Constants);
const StaticChannelRoute = fn(4865).StaticChannelRoute;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
const createStyles = fn(5009);
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
  overflow: "visible",
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
  overflow: "visible",
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

export default noop.memo(function StandaloneChannelScreen(isActive) {
  ({ guildId, channelId } = isActive);
  ({ isNavigationTTIVisible, isNavigationScreen, frame } = isActive);
  ({ showCreateThread, screenIndex } = isActive);
  closure_4 = undefined;
  let isChatBesideChannelList;
  closure_6 = undefined;
  const tmp = closure_15();
  dependencyMap = tmp;
  noop = channelId(1499).useNavigation();
  const obj = channelId(1499);
  const isSwipeToMemberListEnabled = channelId(11503).useIsSwipeToMemberListEnabled();
  const needSubscriptionToAccess = frame(6040)(channelId).needSubscriptionToAccess;
  const obj2 = channelId(11503);
  let tmp6 = guildId;
  if (guildId == null) {
    tmp6 = closure_8;
  }
  const canSeeOnboardingHome = channelId(7391).useCanSeeOnboardingHome(tmp6);
  const obj3 = channelId(7391);
  const tmp9 = frame(5248)() === constants2.ONYX;
  closure_4 = tmp9;
  const tmp10 = frame(5196)();
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
  const isForumChannelSearchActive = channelId(11310).useIsForumChannelSearchActive(channelId);
  if (isChatLockedOpen) {
    tmp14 = isNavigationScreen;
  }
  if (tmp14) {
    tmp14 = !isForumChannelSearchActive;
  }
  closure_6 = tmp14;
  const tmp2Result = channelId(11310);
  const items2 = [isChatBesideChannelList];
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
  let type;
  const dMAppChannelApplicationId = channelId(6872).useDMAppChannelApplicationId(stateFromStores);
  if (stateFromStores != null) {
    type = stateFromStores.type;
  }
  const tmp2Result5 = channelId(6872);
  let tmp19 = null;
  if (type === constants.GUILD_APP || null != dMAppChannelApplicationId) {
    tmp19 = channelId;
  }
  const dismissChannelSecondaryViewChatOnFrameDeepLink =
    channelId(9808).useDismissChannelSecondaryViewChatOnFrameDeepLink(tmp19);
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
            let tmp41Result = null;
            if (canSeeOnboardingHome) {
              const obj7 = { guildId };
              tmp41Result = closure_12(frame(18576), obj7);
            }
            obj6.children = tmp41Result;
            items4[1] = closure_12(closure_4, obj6);
            obj4.children = items4;
            return closure_13(closure_4, obj4);
          } else if (channelId === StaticChannelRoute.MEMBER_SAFETY) {
            const obj8 = { style: tmp.container, children: null };
            const items5 = [closure_12(frame(10716), { absolute: true })];
            const obj9 = { guildId };
            items5[1] = closure_12(frame(18594), obj9);
            obj8.children = items5;
            return closure_13(closure_4, obj8);
          } else if (channelId === StaticChannelRoute.CONJURE) {
            const obj10 = { guildId, inline: true };
            return closure_12(frame(12032), obj10);
          } else if (showCreateThread) {
            const obj11 = { style: memo1, children: null };
            const obj12 = {
              channelId,
              frame,
              guildId,
              isNavigationScreen,
              screenIndex,
              showCreateThread,
              isBackEnabled: tmp14,
              measureNavigationTTI: false,
            };
            const items6 = [closure_12(Header, obj12)];
            const obj13 = { channelId, screenIndex };
            items6[1] = closure_12(channelId(18612).CreateThreadView, obj13);
            obj11.children = items6;
            return closure_13(closure_4, obj11);
          } else {
            if (null != stateFromStores) {
              if (tmp18) {
                const obj14 = { style: memo, children: null };
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
                const items7 = [closure_12(Header, obj15)];
                const obj16 = { style: memo1, children: null };
                const obj17 = { channel: stateFromStores };
                obj16.children = closure_12(frame(18616), obj17);
                items7[1] = closure_12(closure_4, obj16);
                obj14.children = items7;
                return closure_13(closure_4, obj14);
              }
            }
            const obj18 = { children: null };
            const obj19 = {
              channelId,
              frame,
              guildId,
              isNavigationScreen,
              screenIndex,
              showCreateThread,
              isBackEnabled: tmp14,
              measureNavigationTTI: true,
            };
            const items8 = [closure_12(Header, obj19)];
            const obj20 = { name: "chat_container", tracking: "include", style: memo1, children: null };
            const obj21 = { guildId, channelId, isActive: isActive.isActive, chatInputRef: ref, screenIndex };
            obj20.children = closure_12(frame(11195), obj21);
            items8[1] = closure_12(channelId(18554).NavTTIView, obj20);
            obj18.children = items8;
            const tmp25 = closure_13(closure_14, obj18);
            if (isSwipeToMemberListEnabled) {
              const obj22 = {
                style: memo,
                channelId,
                isNavigationTTIVisible,
                screenIndex,
                isBackEnabled: tmp14,
                children: tmp25,
              };
              let tmp23Result = closure_12(frame(18632), obj22);
            } else {
              const obj23 = {
                name: "channel_screen",
                navigationKey: channelId,
                definition: channelId(13670).CHANNEL_NAVIGATION_TTI,
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
                children: tmp25,
              };
              tmp23Result = closure_12(channelId(18633).NavTTISurfaceProvider, obj23);
            }
            return tmp23Result;
          }
        }
      }
      const obj24 = { style: memo, children: null };
      const obj25 = {
        channelId,
        frame,
        guildId,
        isNavigationScreen,
        screenIndex,
        showCreateThread,
        isBackEnabled: tmp14,
        measureNavigationTTI: false,
      };
      const items9 = [closure_12(Header, obj25)];
      const obj26 = { style: memo1, children: null };
      const items10 = [closure_12(frame(10716), { absolute: true })];
      const obj27 = { guildId, gatedChannelId: null };
      let tmp49;
      if (needSubscriptionToAccess) {
        tmp49 = channelId;
      }
      obj27.gatedChannelId = tmp49;
      items10[1] = closure_12(frame(18559), obj27);
      obj26.children = items10;
      items9[1] = closure_13(closure_4, obj26);
      obj24.children = items9;
      return closure_13(closure_4, obj24);
    }
  }
  const obj28 = { style: null, children: null };
  const items11 = [memo, tmp.containerEmpty];
  obj28.style = items11;
  const obj29 = { title: null, body: null };
  const intl = channelId(1114).intl;
  obj29.title = intl.string(channelId(1114).t.ai6Lbr);
  const intl2 = channelId(1114).intl;
  obj29.body = intl2.string(channelId(1114).t["LTr+x9"]);
  obj28.children = closure_12(channelId(1188).EmptyState, obj29);
  return closure_12(closure_4, obj28);
});
