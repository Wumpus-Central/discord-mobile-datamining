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
  let obj = channelId(isNavigationScreen[10]);
  const navigation = obj.useNavigation();
  const tmp4 = closure_15();
  const top = guildId(isNavigationScreen[11])().top;
  let obj1 = channelId(isNavigationScreen[12]);
  const gradientTop = obj1.useGradientTop();
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
      let obj = { marginTop: top, minHeight };
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
  let obj2 = channelId(isNavigationScreen[13]);
  const items2 = [top];
  const items3 = [guildId, channelId];
  const stateFromStores = obj2.useStateFromStores(
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
  obj = { IconComponent: null, label: null, action: null };
  const memo1 = frame.useMemo(() => {
    let tmp2 = null != stateFromStores;
    if (tmp2) {
      tmp2 = tmp !== React7;
    }
    return tmp2;
  }, items4);
  obj.IconComponent = channelId(isNavigationScreen[15]).ServerIcon;
  const intl = channelId(isNavigationScreen[16]).intl;
  obj.label = intl.string(channelId(isNavigationScreen[16]).t.WYj55Y);
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
        return closure_2_12(PressableNavigatorBackIcon.PressableNavigatorBackIcon, obj);
      },
    };
    let tmp13Result = closure_12(tmp(tmp2[18]).ContextMenu, obj);
    let tmp13 = closure_12;
  } else {
    obj1 = { onPress };
    tmp13Result = closure_12(tmp(tmp2[19]).PressableNavigatorBackIcon, obj1);
    tmp13 = closure_12;
  }
  obj2 = { style: tmp4.headerBottomBorder };
  const items6 = [tmp13(navigation, obj2)];
  if (!isBackEnabled) {
    const obj3 = { style: tmp4.spacer };
    tmp13Result = tmp13(tmp16, obj3);
  }
  const obj4 = { children: null };
  const obj5 = { children: null };
  const items7 = [
    tmp13Result,
    tmp13(guildId(isNavigationScreen[21]), { channelId, isNavigationScreen, screenIndex, showCreateThread }),
    tmp13(guildId(isNavigationScreen[22]), { containerStyle: tmp4.actions, channelId, screenIndex, showCreateThread }),
  ];
  obj5.children = items7;
  items6[1] = closure_13(channelId(isNavigationScreen[20]).LayerScope, obj5);
  obj4.children = items6;
  const tmp14Result = closure_13(closure_14, obj4);
  if (measureNavigationTTI) {
    const obj7 = { spanComponent: "channel_header", tracking: "include", style: memo, children: tmp14Result };
    tmp13Result = tmp13(tmp(tmp2[23]).NavTTIView, obj7);
  } else {
    const obj8 = { style: memo, children: tmp14Result };
    tmp13Result = tmp13(tmp16, obj8);
  }
  const obj9 = { children: null };
  const items8 = [tmp13Result, frame];
  obj9.children = items8;
  return closure_13(closure_14, obj9);
}
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const MainTabsV2Constants = fn(7937);
({ ONYX_BORDER_WIDTH, MIN_HEADER_HEIGHT: closure_7 } = MainTabsV2Constants);
const Constants = fn(1074);
({ EMPTY_STRING_SNOWFLAKE_ID: closure_8, ME: closure_9, ThemeTypes: c10 } = Constants);
const StaticChannelRoute = fn(1964).StaticChannelRoute;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
fn(4606);
let obj = {
  container: { flex: 1 },
  onyxContainerBorder: null,
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
obj = {
  borderLeftWidth: ONYX_BORDER_WIDTH,
  borderLeftColor: nativeDefault.colors.APP_FRAME_BORDER,
  borderTopWidth: ONYX_BORDER_WIDTH,
  borderTopColor: "transparent",
};
obj.onyxContainerBorder = obj;
const createStyles = { flex: 1, backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND };
obj.contentContainer = createStyles;
obj.containerEmpty = { backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND };
let obj2 = { backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND };
obj.headerWrapper = {
  zIndex: 1,
  backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND,
  flexDirection: "row",
  alignItems: "center",
  flexShrink: 0,
};
let obj4 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj4.top = undefined;
obj4.height = 1;
obj4.backgroundColor = nativeDefault.colors.STANDALONE_CHANNEL_HEADER_BORDER;
obj.headerBottomBorder = obj4;
let obj3 = {
  zIndex: 1,
  backgroundColor: nativeDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND,
  flexDirection: "row",
  alignItems: "center",
  flexShrink: 0,
};
obj.headerWithFadingFrame = { borderTopLeftRadius: nativeDefault.modules.mobile.CHANNEL_DRAWER_CORNER_RADIUS };
let obj5 = { borderTopLeftRadius: nativeDefault.modules.mobile.CHANNEL_DRAWER_CORNER_RADIUS };
obj.splitDivider = {
  borderLeftWidth: nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH,
  borderLeftColor: nativeDefault.colors.APP_FRAME_BORDER,
};
let obj6 = {
  borderLeftWidth: nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH,
  borderLeftColor: nativeDefault.colors.APP_FRAME_BORDER,
};
obj.splitDividerTop = {
  borderTopWidth: nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH,
  borderTopColor: nativeDefault.colors.APP_FRAME_BORDER,
};
let obj7 = {
  borderTopWidth: nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH,
  borderTopColor: nativeDefault.colors.APP_FRAME_BORDER,
};
obj.actions = { marginRight: nativeDefault.space.PX_16 };
let obj8 = { marginRight: nativeDefault.space.PX_16 };
obj.spacer = { width: nativeDefault.space.PX_16 };
let closure_15 = createStyles.createStyles(obj);
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
  const tmp = closure_15();
  dependencyMap = tmp;
  let obj = channelId(1484);
  noop = obj.useNavigation();
  let obj1 = channelId(11560);
  const isSwipeToMemberListEnabled = obj1.useIsSwipeToMemberListEnabled();
  const needSubscriptionToAccess = frame(5058)(channelId).needSubscriptionToAccess;
  let obj2 = channelId(7295);
  let tmp6 = guildId;
  if (guildId == null) {
    tmp6 = closure_8;
  }
  const canSeeOnboardingHome = obj2.useCanSeeOnboardingHome(tmp6);
  const tmp9 = frame(4541)() === constants.ONYX;
  closure_4 = tmp9;
  const tmp10 = frame(4467)();
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
  let tmp2Result = channelId(13373);
  let tmp14 = !isChatLockedOpen;
  const isForumChannelSearchActive = tmp2Result.useIsForumChannelSearchActive(channelId);
  if (isChatLockedOpen) {
    tmp14 = isNavigationScreen;
  }
  if (tmp14) {
    tmp14 = !isForumChannelSearchActive;
  }
  closure_6 = tmp14;
  tmp2Result = channelId(504);
  const items2 = [closure_6];
  const items3 = [channelId];
  const stateFromStores = tmp2Result.useStateFromStores(
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
  const ref = noop.useRef(null);
  const isVibegrationsChannelCandidate = channelId(7317).useIsVibegrationsChannelCandidate(
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
            obj = { style: memo, children: null };
            obj = {
              channelId,
              frame,
              guildId,
              isNavigationScreen,
              screenIndex,
              showCreateThread,
              isBackEnabled: tmp14,
              measureNavigationTTI: false,
            };
            const items4 = [closure_12(Header, obj)];
            obj1 = { style: memo1, children: null };
            let tmp32Result = null;
            if (canSeeOnboardingHome) {
              obj2 = { guildId };
              tmp32Result = closure_12(frame(16627), obj2);
            }
            obj1.children = tmp32Result;
            items4[1] = closure_12(closure_4, obj1);
            obj.children = items4;
            return closure_13(closure_4, obj);
          } else if (channelId === StaticChannelRoute.MEMBER_SAFETY) {
            const obj3 = { guildId };
            return closure_12(frame(16645), obj3);
          } else if (channelId === StaticChannelRoute.VIBEGRATIONS) {
            const obj4 = { guildId };
            return closure_12(frame(16662), obj4);
          } else {
            if (isVibegrationsChannelCandidate) {
              if (!tmp18) {
                if (null != stateFromStores) {
                  const obj5 = { style: memo, children: null };
                  const obj6 = {
                    channelId,
                    frame,
                    guildId,
                    isNavigationScreen,
                    screenIndex,
                    showCreateThread,
                    isBackEnabled: tmp14,
                    measureNavigationTTI: false,
                  };
                  const items5 = [closure_12(Header, obj6)];
                  const obj7 = { style: memo1, children: null };
                  const obj8 = { channel: stateFromStores };
                  obj7.children = closure_12(frame(16691), obj8);
                  items5[1] = closure_12(closure_4, obj7);
                  obj5.children = items5;
                  return closure_13(closure_4, obj5);
                }
              }
            }
            if (showCreateThread) {
              const obj9 = { style: memo1, children: null };
              const obj10 = {
                channelId,
                frame,
                guildId,
                isNavigationScreen,
                screenIndex,
                showCreateThread,
                isBackEnabled: tmp14,
                measureNavigationTTI: false,
              };
              const items6 = [closure_12(Header, obj10)];
              const obj11 = { channelId, screenIndex };
              items6[1] = closure_12(channelId(16697).CreateThreadView, obj11);
              obj9.children = items6;
              return closure_13(closure_4, obj9);
            } else {
              const obj12 = { children: null };
              const obj13 = {
                channelId,
                frame,
                guildId,
                isNavigationScreen,
                screenIndex,
                showCreateThread,
                isBackEnabled: tmp14,
                measureNavigationTTI: true,
              };
              const items7 = [closure_12(Header, obj13)];
              const obj14 = { spanComponent: "chat_container", tracking: "include", style: memo1, children: null };
              const obj15 = { guildId, channelId, chatInputRef: ref, screenIndex };
              obj14.children = closure_12(frame(11434), obj15);
              items7[1] = closure_12(channelId(16604).NavTTIView, obj14);
              obj12.children = items7;
              const tmp19Result = closure_13(closure_14, obj12);
              if (isSwipeToMemberListEnabled) {
                const obj16 = { style: memo, channelId, screenIndex, isBackEnabled: tmp14, children: tmp19Result };
                let tmp21Result = closure_12(frame(16701), obj16);
              } else {
                const obj17 = {
                  navigationKey: channelId,
                  definition: channelId(16703).CHANNEL_NAVIGATION_TTI,
                  accessible: false,
                  onAccessibilityEscape() {
                    if (closure_6) {
                      navigation.goBack();
                    }
                  },
                  style: memo,
                  children: tmp19Result,
                };
                tmp21Result = closure_12(channelId(16702).NavTTISurfaceProvider, obj17);
              }
              return tmp21Result;
            }
          }
        }
      }
      const obj18 = { style: memo, children: null };
      const obj19 = {
        channelId,
        frame,
        guildId,
        isNavigationScreen,
        screenIndex,
        showCreateThread,
        isBackEnabled: tmp14,
        measureNavigationTTI: false,
      };
      const items8 = [closure_12(Header, obj19)];
      const obj20 = { style: memo1, children: null };
      const items9 = [closure_12(frame(5176), { absolute: true })];
      const obj21 = { guildId, gatedChannelId: null };
      let tmp40;
      if (needSubscriptionToAccess) {
        tmp40 = channelId;
      }
      obj21.gatedChannelId = tmp40;
      items9[1] = closure_12(frame(16610), obj21);
      obj20.children = items9;
      items8[1] = closure_13(closure_4, obj20);
      obj18.children = items8;
      return closure_13(closure_4, obj18);
    }
  }
  const obj22 = { style: null, children: null };
  const items10 = [memo, tmp.containerEmpty];
  obj22.style = items10;
  const obj23 = { title: null, body: null };
  const intl = channelId(1114).intl;
  obj23.title = intl.string(channelId(1114).t.ai6Lbr);
  const intl2 = channelId(1114).intl;
  obj23.body = intl2.string(channelId(1114).t["LTr+x9"]);
  obj22.children = closure_12(channelId(1178).EmptyState, obj23);
  return closure_12(closure_4, obj22);
});
