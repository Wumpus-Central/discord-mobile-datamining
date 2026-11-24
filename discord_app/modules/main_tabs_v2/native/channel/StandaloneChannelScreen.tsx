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
  const frame = channelId.frame;
  ({ showCreateThread, onBackPress } = channelId);
  ({ isNavigationScreen, isBackEnabled, measureNavigationTTI } = channelId);
  let tmp = closure_15();
  const headerWrapper = tmp;
  const top = guildId(frame[9])().top;
  const gradientTop = channelId(frame[10]).useGradientTop();
  items = [, , , , ,];
  ({ headerWrapper: arr[0], headerWithFadingFrame: arr[1], splitDividerTop: arr[2] } = tmp);
  items[3] = gradientTop;
  items[4] = frame;
  items[5] = top;
  const memo = onBackPress.useMemo(() => {
    items = [headerWrapper.headerWrapper, gradientTop, , ,];
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
  let obj = channelId(frame[10]);
  const items1 = [top];
  const items2 = [guildId, channelId];
  const stateFromStores = channelId(frame[11]).useStateFromStores(
    items1,
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
    items2,
  );
  const items3 = [stateFromStores];
  const obj3 = { IconComponent: null, label: null, action: null };
  const memo1 = onBackPress.useMemo(() => {
    let tmp2 = null != stateFromStores;
    if (tmp2) {
      tmp2 = tmp !== React6;
    }
    return tmp2;
  }, items3);
  obj3.IconComponent = channelId(frame[13]).ServerIcon;
  const intl = channelId(frame[14]).intl;
  obj3.label = intl.string(channelId(frame[14]).t.WYj55Y);
  obj3.action = function action() {
    NavigationRouteUtils.navigateToRootTab({
      screen: "guilds",
      guildId: stateFromStores,
      channelId,
      resetRoot: false,
      drawerOpen: false,
    });
  };
  const items4 = [obj3];
  if (memo1) {
    const obj4 = {
      triggerOnLongPress: true,
      align: "below",
      items: items4,
      children(ref) {
        const merged = Object.assign(ref, Object.assign({ ref: 0 }));
        const obj = { ref: ref.ref };
        const merged1 = Object.assign(merged);
        obj.onPress = onBackPress;
        return application_id(PressableNavigatorBackIcon.PressableNavigatorBackIcon, obj);
      },
    };
    let tmp11Result2 = closure_12(tmp4(tmp3[16]).ContextMenu, obj4);
    let tmp11 = closure_12;
  } else {
    const obj5 = { onPress: onBackPress };
    tmp11Result2 = closure_12(tmp4(tmp3[17]).PressableNavigatorBackIcon, obj5);
    tmp11 = closure_12;
  }
  const items5 = [tmp11(headerWrapper, { style: tmp.headerBottomBorder })];
  if (!isBackEnabled) {
    const obj7 = { style: tmp.spacer };
    tmp11Result2 = tmp11(tmp14, obj7);
  }
  const items6 = [tmp11Result2, , ,];
  let tmp11Result = null;
  if (!showCreateThread) {
    const obj8 = { channelId };
    tmp11Result = tmp11(tmp4(tmp3[19]).PinotMemberNoticeHeaderArrow, obj8);
  }
  const obj9 = { children: null };
  const obj10 = { children: null };
  items6[1] = tmp11Result;
  items6[2] = tmp11(guildId(frame[20]), { channelId, isNavigationScreen, screenIndex, showCreateThread });
  items6[3] = tmp11(guildId(frame[21]), { containerStyle: tmp.actions, channelId, screenIndex, showCreateThread });
  obj10.children = items6;
  items5[1] = closure_13(channelId(frame[18]).LayerScope, obj10);
  obj9.children = items5;
  const tmp12Result = closure_13(closure_14, obj9);
  if (measureNavigationTTI) {
    const obj12 = { name: "channel_header", tracking: "include", style: memo, children: tmp12Result };
    let tmp11Result3 = tmp11(tmp4(tmp3[22]).NavTTIView, obj12);
  } else {
    const obj13 = { style: memo, children: tmp12Result };
    tmp11Result3 = tmp11(tmp14, obj13);
  }
  const obj14 = { children: null };
  const items7 = [tmp11Result3, frame];
  obj14.children = items7;
  return closure_13(closure_14, obj14);
}
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const MainTabsV2Constants = fn(8864);
({ ONYX_BORDER_WIDTH, MIN_HEADER_HEIGHT: closure_6 } = MainTabsV2Constants);
const Constants = fn(1071);
({
  ChannelTypes: metroImportDefault,
  EMPTY_STRING_SNOWFLAKE_ID: closure_8,
  ME: closure_9,
  ThemeTypes: closure_10,
} = Constants);
const StaticChannelRoute = fn(4773).StaticChannelRoute;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
const createStyles = fn(4917);
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
obj.splitDividerTop = {
  borderTopWidth: nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH,
  borderTopColor: nativeDefault.colors.APP_FRAME_BORDER,
};
let obj9 = {
  borderTopWidth: nativeDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH,
  borderTopColor: nativeDefault.colors.APP_FRAME_BORDER,
};
obj.actions = { marginRight: nativeDefault.space.PX_16 };
let obj10 = { marginRight: nativeDefault.space.PX_16 };
obj.spacer = { width: nativeDefault.space.PX_16 };
let closure_15 = createStyles.createStyles(obj);
let obj11 = { width: nativeDefault.space.PX_16 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/channel/StandaloneChannelScreen.tsx");

export default noop.memo(function StandaloneChannelScreen(frame) {
  ({ guildId, channelId } = frame);
  ({ subRouteId, isNavigationTTIVisible, isNavigationScreen } = frame);
  frame = frame.frame;
  ({ showCreateThread, screenIndex } = frame);
  closure_5 = undefined;
  let isChatBesideChannelList;
  constants = undefined;
  const tmp = closure_15();
  noop = tmp;
  const navigation = channelId(frame[23]).useNavigation();
  const obj = channelId(frame[23]);
  const isSwipeToMemberListEnabled = channelId(frame[24]).useIsSwipeToMemberListEnabled();
  const needSubscriptionToAccess = isNavigationScreen(frame[25])(channelId).needSubscriptionToAccess;
  const obj2 = channelId(frame[24]);
  let tmp7 = guildId;
  if (guildId == null) {
    tmp7 = closure_8;
  }
  const canSeeOnboardingHome = channelId(frame[26]).useCanSeeOnboardingHome(tmp7);
  const obj3 = channelId(frame[26]);
  const obj4 = noop;
  const tmp10 = isNavigationScreen(frame[27])() === constants2.ONYX;
  closure_5 = tmp10;
  const tmp11 = isNavigationScreen(frame[28])();
  isChatBesideChannelList = tmp11.isChatBesideChannelList;
  const isChatLockedOpen = tmp11.isChatLockedOpen;
  items = [frame, tmp10, isChatBesideChannelList, ,];
  ({ container: arr[3], onyxContainerBorder: arr[4] } = tmp);
  const memo = noop.useMemo(() => {
    items = [container.container];
    let onyxContainerBorder;
    if (null == frame) {
      if (closure_5) {
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
  let tmp14 = !isChatLockedOpen;
  const isForumChannelSearchActive = channelId(frame[29]).useIsForumChannelSearchActive(channelId);
  if (isChatLockedOpen) {
    tmp14 = isNavigationScreen;
  }
  if (tmp14) {
    tmp14 = !isForumChannelSearchActive;
  }
  constants = tmp14;
  const items1 = [navigation, isNavigationScreen];
  const callback = obj4.useCallback(() => {
    if (isNavigationScreen) {
      navigation.goBack();
    }
  }, items1);
  const tmp2Result = channelId(frame[29]);
  const items2 = [closure_5];
  const items3 = [channelId];
  const stateFromStores = channelId(frame[11]).useStateFromStores(
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
  const tmp2Result4 = channelId(frame[11]);
  let type;
  const dMAppChannelApplicationId = channelId(frame[30]).useDMAppChannelApplicationId(stateFromStores);
  if (stateFromStores != null) {
    type = stateFromStores.type;
  }
  const tmp2Result5 = channelId(frame[30]);
  let tmp20 = null;
  if (type === constants.GUILD_APP || null != dMAppChannelApplicationId) {
    tmp20 = channelId;
  }
  const dismissChannelSecondaryViewChatOnFrameDeepLink = channelId(
    frame[31],
  ).useDismissChannelSecondaryViewChatOnFrameDeepLink(tmp20);
  if (null != channelId) {
    if (null != guildId) {
      if (channelId !== StaticChannelRoute.ROLE_SUBSCRIPTIONS) {
        if (!needSubscriptionToAccess) {
          if (channelId === StaticChannelRoute.GUILD_HOME) {
            const obj5 = { style: memo, children: null };
            const obj6 = {
              channelId,
              frame,
              guildId,
              isNavigationScreen,
              screenIndex,
              showCreateThread,
              isBackEnabled: tmp14,
              onBackPress: callback,
              measureNavigationTTI: false,
            };
            const items4 = [closure_12(Header, obj6)];
            const obj7 = { style: contentContainer, children: null };
            let tmp45Result = null;
            if (canSeeOnboardingHome) {
              const obj8 = { guildId };
              tmp45Result = closure_12(isNavigationScreen(tmp3[36]), obj8);
            }
            const items5 = [tmp45Result, closure_12(isNavigationScreen(tmp3[35]), {})];
            obj7.children = items5;
            items4[1] = closure_13(navigation, obj7);
            obj5.children = items4;
            return closure_13(navigation, obj5);
          } else if (channelId === StaticChannelRoute.MEMBER_SAFETY) {
            const obj9 = { style: tmp.container, children: null };
            const items6 = [closure_12(isNavigationScreen(tmp3[33]), { absolute: true }), ,];
            const obj10 = { guildId };
            items6[1] = closure_12(isNavigationScreen(tmp3[37]), obj10);
            items6[2] = closure_12(isNavigationScreen(tmp3[35]), {});
            obj9.children = items6;
            return closure_13(navigation, obj9);
          } else if (channelId === StaticChannelRoute.CONJURE_PROJECT) {
            const obj11 = { guildId, projectId: subRouteId, inline: true, onBack: null };
            let tmp38;
            if (tmp14) {
              tmp38 = callback;
            }
            obj11.onBack = tmp38;
            if (subRouteId == null) {
              subRouteId = "";
            }
            const _HermesInternal = HermesInternal;
            return closure_12(isNavigationScreen(tmp3[38]), obj11, "" + guildId + ":" + subRouteId);
          } else if (showCreateThread) {
            const obj12 = { style: contentContainer, children: null };
            const obj13 = {
              channelId,
              frame,
              guildId,
              isNavigationScreen,
              screenIndex,
              showCreateThread,
              isBackEnabled: tmp14,
              onBackPress: callback,
              measureNavigationTTI: false,
            };
            const items7 = [closure_12(Header, obj13)];
            const obj14 = { channelId, screenIndex };
            items7[1] = closure_12(channelId(tmp3[39]).CreateThreadView, obj14);
            obj12.children = items7;
            return closure_13(navigation, obj12);
          } else {
            if (null != stateFromStores) {
              if (tmp19) {
                const obj15 = { style: memo, children: null };
                const obj16 = {
                  channelId,
                  frame,
                  guildId,
                  isNavigationScreen,
                  screenIndex,
                  showCreateThread,
                  isBackEnabled: tmp14,
                  onBackPress: callback,
                  measureNavigationTTI: false,
                };
                const items8 = [closure_12(Header, obj16)];
                const obj17 = { style: contentContainer, children: null };
                const obj18 = { channel: stateFromStores };
                obj17.children = closure_12(isNavigationScreen(tmp3[40]), obj18);
                items8[1] = closure_12(navigation, obj17);
                obj15.children = items8;
                return closure_13(navigation, obj15);
              }
            }
            const obj19 = { children: null };
            const obj20 = {
              channelId,
              frame,
              guildId,
              isNavigationScreen,
              screenIndex,
              showCreateThread,
              isBackEnabled: tmp14,
              onBackPress: callback,
              measureNavigationTTI: true,
            };
            const items9 = [closure_12(Header, obj20)];
            const obj21 = { name: "chat_container", tracking: "include", style: contentContainer, children: null };
            const obj22 = { guildId, channelId, isActive: frame.isActive, chatInputRef: ref, screenIndex };
            obj21.children = closure_12(isNavigationScreen(tmp3[41]), obj22);
            items9[1] = closure_12(channelId(tmp3[22]).NavTTIView, obj21);
            obj19.children = items9;
            const tmp26 = closure_13(closure_14, obj19);
            if (isSwipeToMemberListEnabled) {
              const obj23 = {
                style: memo,
                channelId,
                isNavigationTTIVisible,
                screenIndex,
                isBackEnabled: tmp14,
                children: tmp26,
              };
              let tmp24Result = closure_12(isNavigationScreen(tmp3[42]), obj23);
            } else {
              const obj24 = {
                name: "channel_screen",
                navigationKey: channelId,
                definition: channelId(tmp3[44]).CHANNEL_NAVIGATION_TTI,
                visibilityMode: "prerendered",
                isVisible: isNavigationTTIVisible,
                descendantTracking: "included",
                accessible: false,
                onAccessibilityEscape() {
                  if (closure_7) {
                    navigation.goBack();
                  }
                },
                style: memo,
                children: tmp26,
              };
              tmp24Result = closure_12(channelId(tmp3[43]).NavTTISurfaceProvider, obj24);
            }
            return tmp24Result;
          }
        }
      }
      const obj25 = { style: memo, children: null };
      const obj26 = {
        channelId,
        frame,
        guildId,
        isNavigationScreen,
        screenIndex,
        showCreateThread,
        isBackEnabled: tmp14,
        onBackPress: callback,
        measureNavigationTTI: false,
      };
      const items10 = [closure_12(Header, obj26)];
      const obj27 = { style: contentContainer, children: null };
      const items11 = [closure_12(isNavigationScreen(tmp3[33]), { absolute: true }), ,];
      const obj28 = { guildId, gatedChannelId: null };
      let tmp53;
      if (needSubscriptionToAccess) {
        tmp53 = channelId;
      }
      obj28.gatedChannelId = tmp53;
      items11[1] = closure_12(isNavigationScreen(tmp3[34]), obj28);
      items11[2] = closure_12(isNavigationScreen(tmp3[35]), {});
      obj27.children = items11;
      items10[1] = closure_13(navigation, obj27);
      obj25.children = items10;
      return closure_13(navigation, obj25);
    }
  }
  const obj29 = { style: null, children: null };
  const items12 = [memo, tmp.containerEmpty];
  obj29.style = items12;
  const obj30 = { title: null, body: null };
  const intl = channelId(tmp3[14]).intl;
  obj30.title = intl.string(channelId(frame[14]).t.ai6Lbr);
  const intl2 = channelId(tmp3[14]).intl;
  obj30.body = intl2.string(channelId(frame[14]).t["LTr+x9"]);
  obj29.children = closure_12(channelId(frame[32]).EmptyState, obj30);
  return closure_12(navigation, obj29);
});
