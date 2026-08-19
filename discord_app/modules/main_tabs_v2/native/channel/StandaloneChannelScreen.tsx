// === Module 15788: Header ===

// Module 15788 (Header)
import ThemesDefault from "Themes" /* 712 */;
import useThemeDefault from "useTheme" /* 4310 */;
import getChannelRoleSubscriptionStatusDefault from "getChannelRoleSubscriptionStatus" /* 6817 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import MIN_HEADER_HEIGHT from "MIN_HEADER_HEIGHT" /* 8493 */;
import ME from "ME" /* 676 */;
import { StaticChannelRoute } from "set" /* 1398 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
function Header(channelId) {
  channelId = channelId.channelId;
  ({ screenIndex, guildId } = channelId);
  const isNavigationScreen = channelId.isNavigationScreen;
  const frame = channelId.frame;
  const isMIDNIGHTTheme = channelId.isMIDNIGHTTheme;
  const isChatInputFloating = channelId.isChatInputFloating;
  const showCreateThread = channelId.showCreateThread;
  let obj = channelId(isNavigationScreen[9]);
  const navigation = obj.useNavigation();
  const tmp4 = callback2();
  closure_7 = tmp4;
  const top = guildId(isNavigationScreen[10])().top;
  obj1 = channelId(isNavigationScreen[11]);
  const gradientTop = obj1.useGradientTop();
  let items = [, , , , , , , , , ];
  ({ headerWrapper: arr[0], headerWithFadingFrame: arr[1], splitDivider: arr[2], splitDividerTop: arr[3], headerWithFadingFrameMidnight: arr[4] } = tmp4);
  items[5] = gradientTop;
  items[6] = frame;
  items[7] = isMIDNIGHTTheme;
  items[8] = isChatInputFloating;
  items[9] = top;
  const items1 = [navigation, isNavigationScreen];
  const memo = frame.useMemo(() => {
    const items = [headerWrapper.headerWrapper, gradientTop, , , , , ];
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
    let prop1;
    if (null != frame) {
      if (isMIDNIGHTTheme) {
        if (!isChatInputFloating) {
          prop1 = headerWrapper.headerWithFadingFrameMidnight;
        }
      }
    }
    items[5] = prop1;
    if (null != frame) {
      let obj = { marginTop: null, minHeight: null };
      obj[0] = top;
      obj[1] = headerWrapper;
    } else {
      obj = { paddingTop: null, minHeight: null };
      obj[0] = top;
      obj[1] = top + headerWrapper;
    }
    items[6] = obj;
    return items;
  }, items);
  const callback = frame.useCallback(() => {
    if (isNavigationScreen) {
      navigation.goBack();
    }
  }, items1);
  let obj2 = channelId(isNavigationScreen[12]);
  const items2 = [isChatInputFloating];
  const items3 = [guildId, channelId];
  const stateFromStores = obj2.useStateFromStores(items2, () => {
    let tmp = guildId;
    if (obj.isFavoritesGuildId(guildId)) {
      const channel = isChatInputFloating.getChannel(channelId);
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
      tmp2 = tmp !== gradientTop;
    }
    return tmp2;
  }, items4);
  obj[0] = channelId(isNavigationScreen[14]).ServerIcon;
  const intl = channelId(isNavigationScreen[15]).intl;
  obj[1] = intl.string(channelId(isNavigationScreen[15]).t.WYj55Y);
  obj[2] = function action() {
    channelId(isNavigationScreen[16]);
    const obj = { screen: "guilds", guildId: stateFromStores, channelId, resetRoot: false, drawerOpen: false };
    obj.navigateToRootTab(obj);
  };
  const items5 = [obj];
  if (memo1) {
    obj = { triggerOnLongPress: true, align: "below", items: null, children: null };
    obj[2] = items5;
    obj[3] = function children(ref) {
      const merged = Object.assign(ref, Object.create(null));
      const obj = { ref: ref.ref };
      const merged1 = Object.assign(merged);
      obj.onPress = callback;
      return closure_1_12(channelId(isNavigationScreen[18]).PressableNavigatorBackIcon, obj);
    };
    let tmp13Result = callback(tmp(tmp2[17]).ContextMenu, obj);
    let tmp13 = callback;
  } else {
    obj1 = { onPress: null };
    obj1[0] = callback;
    tmp13Result = callback(tmp(tmp2[18]).PressableNavigatorBackIcon, obj1);
    tmp13 = callback;
  }
  tmp13Result = null;
  if (null != frame) {
    tmp13Result = null;
    if (isMIDNIGHTTheme) {
      tmp13Result = null;
      if (!isChatInputFloating) {
        obj2 = { style: null };
        const items6 = [tmp4.midnightFrameCover, ];
        const obj3 = { height: null };
        obj3[0] = top + navigation;
        items6[1] = obj3;
        obj2[0] = items6;
        tmp13Result = tmp13(isMIDNIGHTTheme, obj2);
      }
    }
  }
  const items7 = [tmp13Result, , ];
  const obj4 = { style: memo, children: null };
  const items8 = [tmp13(isMIDNIGHTTheme, { style: tmp4.headerBottomBorder }), ];
  if (!channelId.isBackEnabled) {
    const obj6 = { style: null };
    obj6[0] = tmp4.spacer;
    tmp13Result = tmp13(tmp19, obj6);
  }
  const obj7 = { children: null };
  const obj8 = { children: null };
  const items9 = [tmp13Result, tmp13(guildId(isNavigationScreen[20]), { channelId, isNavigationScreen, screenIndex, showCreateThread }), tmp13(guildId(isNavigationScreen[21]), { containerStyle: tmp4.actions, channelId, screenIndex, showCreateThread })];
  obj8[0] = items9;
  items8[1] = callback2(channelId(isNavigationScreen[19]).LayerScope, obj8);
  obj4[1] = items8;
  items7[1] = callback2(isMIDNIGHTTheme, obj4);
  items7[2] = frame;
  obj7[0] = items7;
  return callback2(closure_14, obj7);
}
let c3 = importAllResult;
({ View: c4, StyleSheet } = get_ActivityIndicator);
({ HEADER_CORNER_RADIUS: closure_6, MIDNIGHT_BORDER_WIDTH, MIN_HEADER_HEIGHT: error } = MIN_HEADER_HEIGHT);
({ EMPTY_STRING_SNOWFLAKE_ID: closure_8, ME: c9, ThemeTypes: c10 } = ME);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
let obj = { borderLeftWidth: MIDNIGHT_BORDER_WIDTH, borderLeftColor: ThemesDefault.colors.APP_FRAME_BORDER, borderTopWidth: MIDNIGHT_BORDER_WIDTH, borderTopColor: "transparent" };
obj[1] = obj;
const createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND };
obj[2] = createCacheKey;
obj[3] = { borderLeftWidth: MIDNIGHT_BORDER_WIDTH, borderLeftColor: ThemesDefault.colors.APP_FRAME_BORDER };
obj[4] = { backgroundColor: ThemesDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND };
obj[5] = { zIndex: 1, backgroundColor: ThemesDefault.colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND, flexDirection: "row", alignItems: "center", flexShrink: 0 };
let obj5 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj5.top = undefined;
obj5.height = 1;
obj5.backgroundColor = ThemesDefault.colors.STANDALONE_CHANNEL_HEADER_BORDER;
obj[6] = obj5;
obj[7] = { borderTopLeftRadius: ThemesDefault.modules.mobile.CHANNEL_DRAWER_CORNER_RADIUS };
obj[8] = { borderLeftWidth: ThemesDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH, borderLeftColor: ThemesDefault.colors.APP_FRAME_BORDER };
obj[9] = { borderTopWidth: ThemesDefault.modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH, borderTopColor: ThemesDefault.colors.APP_FRAME_BORDER };
obj[10] = { borderLeftColor: ThemesDefault.colors.APP_FRAME_BORDER, borderTopColor: ThemesDefault.colors.APP_FRAME_BORDER, borderLeftWidth: MIDNIGHT_BORDER_WIDTH, borderTopWidth: MIDNIGHT_BORDER_WIDTH };
obj[11] = { backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW, position: "absolute", left: -MIDNIGHT_BORDER_WIDTH, top: 0, width: MIDNIGHT_BORDER_WIDTH };
obj[12] = { marginRight: ThemesDefault.space.PX_16 };
obj[13] = { width: ThemesDefault.space.PX_16 };
let closure_15 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function StandaloneChannelScreen(arg0) {
  ({ guildId, channelId, isNavigationScreen, frame } = arg0);
  ({ showCreateThread, screenIndex } = arg0);
  importAllResult = undefined;
  let chatInputFloating;
  let orientation;
  closure_6 = undefined;
  const tmp = callback2();
  importDefault = tmp;
  let obj = frame(1501);
  dependencyMap = obj.useNavigation();
  obj1 = frame(10667);
  const isSwipeToMemberListEnabled = obj1.useIsSwipeToMemberListEnabled();
  const needSubscriptionToAccess = getChannelRoleSubscriptionStatusDefault(channelId).needSubscriptionToAccess;
  let obj2 = frame(5283);
  let tmp6 = guildId;
  if (guildId == null) {
    tmp6 = closure_8;
  }
  const canSeeOnboardingHome = obj2.useCanSeeOnboardingHome(tmp6);
  const tmp9 = useThemeDefault() === constants.MIDNIGHT;
  importAllResult = tmp9;
  let tmp2Result = frame(1367);
  chatInputFloating = tmp2Result.useMobileVisualRefreshConfig({ location: "StandaloneChannelScreen" }).chatInputFloating;
  tmp2Result = frame(8671);
  orientation = tmp2Result.useOrientation();
  let items = [frame, tmp9, chatInputFloating, orientation, , ];
  ({ container: arr[4], midnightContainerBorder: arr[5] } = tmp);
  const memo = importAllResult.useMemo(() => {
    const items = [closure_1.container, ];
    let prop;
    if (null == frame) {
      if (closure_3) {
        if (!chatInputFloating) {
          prop = tmp.midnightContainerBorder;
        }
      }
    }
    items[1] = prop;
    return items;
  }, items);
  const items1 = [frame, tmp9, chatInputFloating, , , ];
  ({ contentContainer: arr2[3], splitDivider: arr2[4], midnightContentContainerBorder: arr2[5] } = tmp);
  const memo1 = importAllResult.useMemo(() => {
    const items = [closure_1.contentContainer, , ];
    let splitDivider;
    if (null != frame) {
      splitDivider = closure_1.splitDivider;
    }
    items[1] = splitDivider;
    let prop;
    if (null != frame) {
      if (closure_3) {
        if (!chatInputFloating) {
          prop = closure_1.midnightContentContainerBorder;
        }
      }
    }
    items[2] = prop;
    return items;
  }, items1);
  const ref = importAllResult.useRef(null);
  const isForumChannelSearchActive = frame(12715).useIsForumChannelSearchActive(channelId);
  const isChatLockedOpen = tmp5(4232)().isChatLockedOpen;
  let tmp14 = !isChatLockedOpen;
  if (isChatLockedOpen) {
    tmp14 = isNavigationScreen;
  }
  if (tmp14) {
    tmp14 = !isForumChannelSearchActive;
  }
  closure_6 = tmp14;
  if (null != channelId) {
    if (null != guildId) {
      obj = { channelId: null, frame: null, guildId: null, isNavigationScreen: null, screenIndex: null, isMIDNIGHTTheme: null, isChatInputFloating: null, showCreateThread: null, isBackEnabled: null };
      obj[0] = channelId;
      obj[1] = frame;
      obj[2] = guildId;
      obj[3] = isNavigationScreen;
      obj[4] = screenIndex;
      obj[5] = tmp9;
      obj[6] = chatInputFloating;
      obj[7] = showCreateThread;
      obj[8] = tmp14;
      const tmp29 = callback(Header, obj);
      if (channelId !== StaticChannelRoute.ROLE_SUBSCRIPTIONS) {
        if (!needSubscriptionToAccess) {
          if (channelId === StaticChannelRoute.GUILD_HOME) {
            obj = { style: null, children: null };
            obj[0] = memo;
            const items2 = [tmp29, ];
            obj1 = { style: null, children: null };
            obj1[0] = memo1;
            let tmp27Result = null;
            if (canSeeOnboardingHome) {
              obj2 = { guildId: null };
              obj2[0] = guildId;
              tmp27Result = callback(tmp5(15806), obj2);
            }
            obj1[1] = tmp27Result;
            items2[1] = callback(chatInputFloating, obj1);
            obj[1] = items2;
            return callback2(chatInputFloating, obj);
          } else if (channelId === StaticChannelRoute.MEMBER_SAFETY) {
            const obj3 = { guildId: null };
            obj3[0] = guildId;
            return callback(tmp5(15824), obj3);
          } else if (showCreateThread) {
            const obj4 = { style: null, children: null };
            obj4[0] = memo1;
            const items3 = [tmp29, ];
            const obj5 = { channelId: null, screenIndex: null };
            obj5[0] = channelId;
            obj5[1] = screenIndex;
            items3[1] = callback(frame(15841).CreateThreadView, obj5);
            obj4[1] = items3;
            return callback2(chatInputFloating, obj4);
          } else {
            const obj6 = { children: null };
            const items4 = [tmp29, ];
            const obj7 = { style: null, children: null };
            obj7[0] = memo1;
            const obj8 = { guildId: null, channelId: null, chatInputRef: null, screenIndex: null };
            obj8[0] = guildId;
            obj8[1] = channelId;
            obj8[2] = ref;
            obj8[3] = screenIndex;
            obj7[1] = callback(tmp5(10546), obj8);
            items4[1] = callback(chatInputFloating, obj7);
            obj6[0] = items4;
            const tmp31Result = callback2(closure_14, obj6);
            if (isSwipeToMemberListEnabled) {
              const obj9 = { style: null, channelId: null, screenIndex: null, isBackEnabled: null, children: null };
              obj9[0] = memo;
              obj9[1] = channelId;
              obj9[2] = screenIndex;
              obj9[3] = tmp14;
              obj9[4] = tmp31Result;
              tmp27Result = callback(tmp5(15845), obj9);
            } else {
              const obj10 = { style: null, accessible: false, onAccessibilityEscape: null, children: null };
              obj10[0] = memo;
              obj10[2] = function onAccessibilityEscape() {
                if (closure_6) {
                  navigation.goBack();
                }
              };
              obj10[3] = tmp31Result;
              tmp27Result = callback(chatInputFloating, obj10);
            }
            return tmp27Result;
          }
        }
      }
      const obj11 = { style: null, children: null };
      obj11[0] = memo;
      const items5 = [tmp29, ];
      const obj12 = { style: null, children: null };
      obj12[0] = memo1;
      const items6 = [callback(tmp5(9091), { absolute: true }), ];
      const obj13 = { guildId: null, gatedChannelId: null };
      obj13[0] = guildId;
      let tmp26;
      if (needSubscriptionToAccess) {
        tmp26 = channelId;
      }
      obj13[1] = tmp26;
      items6[1] = callback(tmp5(15789), obj13);
      obj12[1] = items6;
      items5[1] = callback2(chatInputFloating, obj12);
      obj11[1] = items5;
      return callback2(chatInputFloating, obj11);
    }
  }
  const obj14 = { style: items7, children: null };
  items7 = [memo, tmp.containerEmpty];
  const obj15 = { title: null, body: null };
  const intl = frame(1236).intl;
  obj15[0] = intl.string(frame(1236).t.ai6Lbr);
  const intl2 = frame(1236).intl;
  obj15[1] = intl2.string(frame(1236).t["LTr+x9"]);
  obj14[1] = callback(frame(1297).EmptyState, obj15);
  return callback(chatInputFloating, obj14);
});
const result = require("obj132").fileFinishedImporting("modules/main_tabs_v2/native/channel/StandaloneChannelScreen.tsx");

export default memoResult;