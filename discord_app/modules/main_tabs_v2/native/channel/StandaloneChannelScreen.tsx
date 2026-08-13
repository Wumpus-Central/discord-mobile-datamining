// discord_app/modules/main_tabs_v2/native/channel/StandaloneChannelScreen.tsx
import importAllResult from "Layer";
import get_ActivityIndicator from "ContextMenu";
import ensureGuildLoaded from "ensureGuildLoaded";
import MIN_HEADER_HEIGHT from "MIN_HEADER_HEIGHT";
import ME from "ME";
import { StaticChannelRoute } from "set";
import jsxProd from "JoinCallButton";
import createCacheKey from "createCacheKey";
import { useTheme } from "../../../../hooks/useTheme.tsx";
import { getChannelRoleSubscriptionStatus } from "../../../guild_role_subscriptions/useChannelRoleSubscriptionStatus.tsx";

let MIDNIGHT_BORDER_WIDTH;
let StyleSheet;
let c10;
let c4;
let c9;
let closure_12;
let closure_14;
let closure_6;
let error;
let map1;
let metroImportAll;
const require = arg1;
function Header(channelId) {
  let guildId;
  let screenIndex;
  channelId = channelId.channelId;
  ({ screenIndex, guildId } = channelId);
  const isNavigationScreen = channelId.isNavigationScreen;
  const frame = channelId.frame;
  const isMIDNIGHTTheme = channelId.isMIDNIGHTTheme;
  const isChatInputFloating = channelId.isChatInputFloating;
  const showCreateThread = channelId.showCreateThread;
  let navigation;
  let c7;
  let top;
  let gradientTop;
  let callback;
  let stateFromStores;
  let obj = channelId(isNavigationScreen[9]);
  navigation = obj.useNavigation();
  const tmp4 = callback2();
  c7 = tmp4;
  top = guildId(isNavigationScreen[10])().top;
  let obj1 = channelId(isNavigationScreen[11]);
  gradientTop = obj1.useGradientTop();
  let items = [, , , , , , , , , ];
  ({ headerWrapper: arr[0], headerWithFadingFrame: arr[1], splitDivider: arr[2], splitDividerTop: arr[3], headerWithFadingFrameMidnight: arr[4] } = tmp4);
  items[5] = gradientTop;
  items[6] = frame;
  items[7] = isMIDNIGHTTheme;
  items[8] = isChatInputFloating;
  items[9] = top;
  const items1 = [navigation, isNavigationScreen];
  const memo = frame.useMemo(() => {
    const items = [_undefined.headerWrapper, gradientTop, , , , , ];
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
    let prop1;
    if (null != frame) {
      if (isMIDNIGHTTheme) {
        if (!isChatInputFloating) {
          prop1 = tmp.headerWithFadingFrameMidnight;
        }
      }
    }
    items[5] = prop1;
    if (null != frame) {
      let obj = { marginTop: null, minHeight: null };
      obj[0] = top;
      obj[1] = _undefined;
    } else {
      obj = { paddingTop: null, minHeight: null };
      obj[0] = top;
      obj[1] = top + _undefined;
    }
    items[6] = obj;
    return items;
  }, items);
  callback = frame.useCallback(() => {
    if (isNavigationScreen) {
      navigation.goBack();
    }
  }, items1);
  let obj2 = channelId(isNavigationScreen[12]);
  const items2 = [isChatInputFloating];
  const items3 = [guildId, channelId];
  stateFromStores = obj2.useStateFromStores(items2, () => {
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
    let obj = channelId(isNavigationScreen[16]);
    obj = { screen: "guilds", guildId: stateFromStores, channelId, resetRoot: false, drawerOpen: false };
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
      return outer1_12(channelId(isNavigationScreen[18]).PressableNavigatorBackIcon, obj);
    };
    let tmp13Result = tmp11(tmp(tmp2[17]).ContextMenu, obj);
    let tmp13 = tmp11;
  } else {
    obj1 = { onPress: null };
    obj1[0] = callback;
    tmp13Result = tmp11(tmp(tmp2[18]).PressableNavigatorBackIcon, obj1);
    tmp13 = tmp11;
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
  items8[1] = closure_13(channelId(isNavigationScreen[19]).LayerScope, obj8);
  obj4[1] = items8;
  items7[1] = closure_13(isMIDNIGHTTheme, obj4);
  items7[2] = frame;
  obj7[0] = items7;
  return closure_13(closure_14, obj7);
}
let c3 = importAllResult;
({ View: c4, StyleSheet } = get_ActivityIndicator);
({ HEADER_CORNER_RADIUS: closure_6, MIDNIGHT_BORDER_WIDTH, MIN_HEADER_HEIGHT: error } = MIN_HEADER_HEIGHT);
({ EMPTY_STRING_SNOWFLAKE_ID: metroImportAll, ME: c9, ThemeTypes: c10 } = ME);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
let obj = { container: { flex: 1 }, midnightContainerBorder: null, contentContainer: null, midnightContentContainerBorder: null, containerEmpty: null, headerWrapper: null, headerBottomBorder: null, headerWithFadingFrame: null, splitDivider: null, splitDividerTop: null, headerWithFadingFrameMidnight: null, midnightFrameCover: null, actions: null, spacer: null };
obj = { borderLeftWidth: MIDNIGHT_BORDER_WIDTH, borderLeftColor: require("Themes").colors.APP_FRAME_BORDER, borderTopWidth: MIDNIGHT_BORDER_WIDTH, borderTopColor: "transparent" };
obj[1] = obj;
createCacheKey = { flex: 1, backgroundColor: require("Themes").colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND };
obj[2] = createCacheKey;
obj[3] = { borderLeftWidth: MIDNIGHT_BORDER_WIDTH, borderLeftColor: require("Themes").colors.APP_FRAME_BORDER };
let obj2 = { borderLeftWidth: MIDNIGHT_BORDER_WIDTH, borderLeftColor: require("Themes").colors.APP_FRAME_BORDER };
obj[4] = { backgroundColor: require("Themes").colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND };
let obj3 = { backgroundColor: require("Themes").colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND };
obj[5] = { zIndex: 1, backgroundColor: require("Themes").colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND, flexDirection: "row", alignItems: "center", flexShrink: 0 };
let obj5 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj5.top = undefined;
obj5.height = 1;
obj5.backgroundColor = require("Themes").colors.STANDALONE_CHANNEL_HEADER_BORDER;
obj[6] = obj5;
let obj4 = { zIndex: 1, backgroundColor: require("Themes").colors.STANDALONE_CHANNEL_CONTENT_BACKGROUND, flexDirection: "row", alignItems: "center", flexShrink: 0 };
obj[7] = { borderTopLeftRadius: require("Themes").modules.mobile.CHANNEL_DRAWER_CORNER_RADIUS };
let obj6 = { borderTopLeftRadius: require("Themes").modules.mobile.CHANNEL_DRAWER_CORNER_RADIUS };
obj[8] = { borderLeftWidth: require("Themes").modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH, borderLeftColor: require("Themes").colors.APP_FRAME_BORDER };
let obj7 = { borderLeftWidth: require("Themes").modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH, borderLeftColor: require("Themes").colors.APP_FRAME_BORDER };
obj[9] = { borderTopWidth: require("Themes").modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH, borderTopColor: require("Themes").colors.APP_FRAME_BORDER };
let obj8 = { borderTopWidth: require("Themes").modules.mobile.CHANNEL_DRAWER_DIVIDER_WIDTH, borderTopColor: require("Themes").colors.APP_FRAME_BORDER };
obj[10] = { borderLeftColor: require("Themes").colors.APP_FRAME_BORDER, borderTopColor: require("Themes").colors.APP_FRAME_BORDER, borderLeftWidth: MIDNIGHT_BORDER_WIDTH, borderTopWidth: MIDNIGHT_BORDER_WIDTH };
let obj9 = { borderLeftColor: require("Themes").colors.APP_FRAME_BORDER, borderTopColor: require("Themes").colors.APP_FRAME_BORDER, borderLeftWidth: MIDNIGHT_BORDER_WIDTH, borderTopWidth: MIDNIGHT_BORDER_WIDTH };
obj[11] = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, position: "absolute", left: -MIDNIGHT_BORDER_WIDTH, top: 0, width: MIDNIGHT_BORDER_WIDTH };
let obj10 = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, position: "absolute", left: -MIDNIGHT_BORDER_WIDTH, top: 0, width: MIDNIGHT_BORDER_WIDTH };
obj[12] = { marginRight: require("Themes").space.PX_16 };
let obj11 = { marginRight: require("Themes").space.PX_16 };
obj[13] = { width: require("Themes").space.PX_16 };
let closure_15 = createCacheKey.createStyles(obj);
let obj12 = { width: require("Themes").space.PX_16 };
const memoResult = importAllResult.memo(function StandaloneChannelScreen(arg0) {
  let channelId;
  let frame;
  let guildId;
  let isNavigationScreen;
  let screenIndex;
  let showCreateThread;
  ({ guildId, channelId, isNavigationScreen, frame } = arg0);
  ({ showCreateThread, screenIndex } = arg0);
  let importDefault;
  let dependencyMap;
  let importAllResult;
  let chatInputFloating;
  let orientation;
  let c6;
  const tmp = callback2();
  importDefault = tmp;
  let obj = frame(1500);
  dependencyMap = obj.useNavigation();
  let obj1 = frame(10405);
  const isSwipeToMemberListEnabled = obj1.useIsSwipeToMemberListEnabled();
  const needSubscriptionToAccess = getChannelRoleSubscriptionStatus(channelId).needSubscriptionToAccess;
  let obj2 = frame(5884);
  let tmp6 = guildId;
  if (guildId == null) {
    tmp6 = closure_8;
  }
  const canSeeOnboardingHome = obj2.useCanSeeOnboardingHome(tmp6);
  const tmp9 = useTheme() === constants.MIDNIGHT;
  importAllResult = tmp9;
  let tmp2Result = tmp2(1367);
  chatInputFloating = tmp2Result.useMobileVisualRefreshConfig({ location: "StandaloneChannelScreen" }).chatInputFloating;
  tmp2Result = tmp2(8944);
  orientation = tmp2Result.useOrientation();
  let items = [frame, tmp9, chatInputFloating, orientation, , ];
  ({ container: arr[4], midnightContainerBorder: arr[5] } = tmp);
  const memo = importAllResult.useMemo(() => {
    const items = [_undefined.container, ];
    let prop;
    if (null == frame) {
      if (c3) {
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
    const items = [_undefined.contentContainer, , ];
    let splitDivider;
    if (null != frame) {
      splitDivider = tmp.splitDivider;
    }
    items[1] = splitDivider;
    let prop;
    if (null != frame) {
      if (c3) {
        if (!chatInputFloating) {
          prop = tmp.midnightContentContainerBorder;
        }
      }
    }
    items[2] = prop;
    return items;
  }, items1);
  const ref = importAllResult.useRef(null);
  const isForumChannelSearchActive = frame(12618).useIsForumChannelSearchActive(channelId);
  const isChatLockedOpen = tmp5(4200)().isChatLockedOpen;
  let tmp14 = !isChatLockedOpen;
  if (isChatLockedOpen) {
    tmp14 = isNavigationScreen;
  }
  if (tmp14) {
    tmp14 = !isForumChannelSearchActive;
  }
  c6 = tmp14;
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
          if (channelId === tmp30.GUILD_HOME) {
            obj = { style: null, children: null };
            obj[0] = memo;
            const items2 = [tmp29, ];
            obj1 = { style: null, children: null };
            obj1[0] = memo1;
            let tmp27Result = null;
            if (canSeeOnboardingHome) {
              obj2 = { guildId: null };
              obj2[0] = guildId;
              tmp27Result = tmp27(tmp5(15747), obj2);
            }
            obj1[1] = tmp27Result;
            items2[1] = tmp27(chatInputFloating, obj1);
            obj[1] = items2;
            return closure_13(chatInputFloating, obj);
          } else if (channelId === tmp30.MEMBER_SAFETY) {
            const obj3 = { guildId: null };
            obj3[0] = guildId;
            return tmp27(tmp5(15765), obj3);
          } else if (showCreateThread) {
            const obj4 = { style: null, children: null };
            obj4[0] = memo1;
            const items3 = [tmp29, ];
            const obj5 = { channelId: null, screenIndex: null };
            obj5[0] = channelId;
            obj5[1] = screenIndex;
            items3[1] = tmp27(tmp2(15782).CreateThreadView, obj5);
            obj4[1] = items3;
            return tmp31(chatInputFloating, obj4);
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
            obj7[1] = tmp27(tmp5(10274), obj8);
            items4[1] = tmp27(chatInputFloating, obj7);
            obj6[0] = items4;
            const tmp31Result = tmp31(closure_14, obj6);
            if (isSwipeToMemberListEnabled) {
              const obj9 = { style: null, channelId: null, screenIndex: null, isBackEnabled: null, children: null };
              obj9[0] = memo;
              obj9[1] = channelId;
              obj9[2] = screenIndex;
              obj9[3] = tmp14;
              obj9[4] = tmp31Result;
              tmp27Result = tmp27(tmp5(15786), obj9);
            } else {
              const obj10 = { style: null, accessible: false, onAccessibilityEscape: null, children: null };
              obj10[0] = memo;
              obj10[2] = function onAccessibilityEscape() {
                if (c6) {
                  navigation.goBack();
                }
              };
              obj10[3] = tmp31Result;
              tmp27Result = tmp27(chatInputFloating, obj10);
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
      const items6 = [callback(tmp5(4889), { absolute: true }), ];
      const obj13 = { guildId: null, gatedChannelId: null };
      obj13[0] = guildId;
      let tmp26;
      if (needSubscriptionToAccess) {
        tmp26 = channelId;
      }
      obj13[1] = tmp26;
      items6[1] = callback(tmp5(15730), obj13);
      obj12[1] = items6;
      items5[1] = closure_13(chatInputFloating, obj12);
      obj11[1] = items5;
      return closure_13(chatInputFloating, obj11);
    }
  }
  const obj14 = { style: items7, children: null };
  items7 = [memo, tmp.containerEmpty];
  const obj15 = { title: null, body: null };
  const intl = tmp2(1236).intl;
  obj15[0] = intl.string(frame(1236).t.ai6Lbr);
  const intl2 = tmp2(1236).intl;
  obj15[1] = intl2.string(frame(1236).t["LTr+x9"]);
  obj14[1] = callback(frame(1297).EmptyState, obj15);
  return callback(chatInputFloating, obj14);
});
const result = require("ensureGuildLoaded").fileFinishedImporting("modules/main_tabs_v2/native/channel/StandaloneChannelScreen.tsx");

export default memoResult;