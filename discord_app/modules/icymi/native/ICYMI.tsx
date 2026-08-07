// discord_app/modules/icymi/native/ICYMI.tsx
import generateHydrationId from "generateHydrationId";
import importAllResult from "asyncRequireImpl";
import get_ActivityIndicator from "ACTION_SHEET_HEIGHT_HALF";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import fetchFingerprint from "fetchFingerprint";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import initialize from "initialize";
import filterStaffGuild from "filterStaffGuild";
import { NUM_GUILDS_EXTENDED_ONBOARDING as closure_12 } from "NUM_GUILDS_EXTENDED_ONBOARDING";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "pushICYMIInfoModal";
import createCacheKey from "createCacheKey";
import createICYMIStyles from "createICYMIStyles";
import { ManaContext } from "../../../../discord_common/js/packages/design/native.tsx";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
import { SafeAreaPaddingView } from "../../../components_native/common/SafeAreaView.tsx";
import { IconButton } from "../../../design/components/Button/native/IconButton.native.tsx";
import { CircleInformationIcon } from "../../../design/components/Icon/native/redesign/generated/CircleInformationIcon.tsx";
import { FiltersHorizontalIcon } from "../../../design/components/Icon/native/redesign/generated/FiltersHorizontalIcon.tsx";
import { getGradientColorByPercentage } from "../../client_themes/native/ClientThemesUtils.tsx";
import { getMixedGradientColor } from "../../client_themes/native/ThemedGradient.tsx";
import { getGuildThemeName } from "../../client_themes/native/useColorThemeBackground.tsx";
import { jsx } from "../../panels/morphable/native/AppFreezer.tsx";
import { useSafeAreaInsets } from "../../safe_area/useSafeAreaInsets.native.tsx";
import { useIsWindowLarge } from "../../screen/native/useIsWindowLarge.tsx";
import { generateHydrationId } from "../ICYMIUtils.tsx";
import { context } from "ICYMIContext.tsx";

let c5;
let closure_14;
let closure_15;
let closure_16;
let closure_6;
const require = arg1;
function SettingsButton() {
  let obj = { accessibilityLabel: "button", variant: "tertiary", size: "sm", icon: null, onPress: null };
  obj[3] = callback(FiltersHorizontalIcon.FiltersHorizontalIcon, { size: "sm" });
  obj[4] = function onPress() {
    callback2(paths[16]).itemInteracted("filters_button", "filters_button", "press_info_button");
    const obj = callback2(paths[16]);
    callback2(paths[16]).feedPageActioned({ actionParameters: { actionGestureType: "press", actionTargetElement: "settings_button", actionIntentType: "open", actionDestinationType: null } });
    const obj2 = callback2(paths[16]);
    callback2(paths[17]).openLazy(callback(paths[19])(paths[18], paths.paths), "ICYMISettingsActionSheet", {});
  };
  return callback(IconButton.IconButton, obj);
}
function InfoButton() {
  let obj = { accessibilityLabel: "button", variant: "tertiary", size: "sm", icon: null, onPress: null };
  obj[3] = callback(CircleInformationIcon.CircleInformationIcon, { size: "sm" });
  obj[4] = function onPress() {
    callback2(8853).itemInteracted("info_button", "info_button", "press_info_button");
    const obj = callback2(8853);
    callback2(8853).feedPageActioned({ actionParameters: { actionGestureType: "press", actionTargetElement: "info_button", actionIntentType: "open", actionDestinationType: null } });
    const obj2 = callback2(8853);
    callback(15497).pushICYMIInfoModal({ extendedOnboarding: true });
  };
  return callback(IconButton.IconButton, obj);
}
function ICYMIHeaderTextWrapper() {
  const tmp = callback3();
  return callback(closure_5, {
    style: callback3().headerText,
    children: importAllResult.useMemo(() => {
      let obj = { children: null };
      obj = { color: "mobile-text-heading-primary", variant: "heading-lg/bold", maxFontSizeMultiplier: 1.75, accessibilityRole: "header", children: null };
      const intl = callback(1236).intl;
      obj[4] = intl.string(callback(1236).t.SY4sdZ);
      const items = [callback2(callback(4298).Text, obj), ];
      obj = { color: "text-brand", variant: "text-xs/bold", style: { marginTop: 4 }, children: null };
      const intl2 = callback(1236).intl;
      obj[3] = intl2.string(callback(1236).t.Ac2OZA);
      items[1] = callback2(callback(4298).Text, obj);
      obj[0] = items;
      return callback3(closure_15, obj);
    }, [])
  });
}
function handleEndReached() {
  generateHydrationId.hydrateNextPage();
}
function ICYMI(inNestedNavigator) {
  let data;
  let handleOnRefresh;
  let height;
  let isRefreshing;
  let loading;
  let stickyHeaderIndices;
  let version;
  let viewabilityConfigCallbackPairs;
  let visibleItemIds;
  let width;
  let isFocused;
  let stateFromStores;
  visibleItemIds = undefined;
  let endVisible;
  handleOnRefresh = undefined;
  let first;
  let c6;
  let stateFromStores2;
  let ref;
  let ref1;
  let stateFromStores3;
  let filterStaffGuild;
  const tmp = callback3();
  ({ height, width } = stateFromStores(visibleItemIds[33])());
  let obj = isFocused(visibleItemIds[35]);
  isFocused = obj.useIsFocused();
  const layoutEffect = handleOnRefresh.useLayoutEffect(() => {
    isFocused(visibleItemIds[36]).trackAppUIViewed();
  });
  let obj1 = isFocused(visibleItemIds[37]);
  const items = [stateFromStores2];
  stateFromStores = obj1.useStateFromStores(items, () => stateFromStores2.useReducedMotion);
  let obj2 = isFocused(visibleItemIds[37]);
  const items1 = [filterStaffGuild];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => lib.notificationItem(), []);
  const items2 = [isFocused];
  const effect = handleOnRefresh.useEffect(() => {
    stateFromStores(visibleItemIds[16]).setTabFocused(isFocused);
  }, items2);
  let obj3 = isFocused(visibleItemIds[39]);
  const sharedICYMILogic = obj3.useSharedICYMILogic({ showDot: stateFromStores(visibleItemIds[38])().showDot, notificationItem: stateFromStores1 });
  ({ loading, visibleItemIds } = sharedICYMILogic);
  endVisible = sharedICYMILogic.endVisible;
  ({ isRefreshing, handleOnRefresh } = sharedICYMILogic);
  ({ data, version, stickyHeaderIndices, viewabilityConfigCallbackPairs } = sharedICYMILogic);
  let obj4 = isFocused(visibleItemIds[40]);
  const iCYMIEmptyLoadingAnalytics = obj4.useICYMIEmptyLoadingAnalytics(loading, isFocused);
  let obj5 = isFocused(visibleItemIds[41]);
  const items3 = [isFocused(visibleItemIds[42]).DismissibleContent.ICYMI_ALPHA_UPSELL];
  const tmp12 = endVisible(obj5.useGetDismissibleContent(items3), 2);
  first = tmp12[0];
  c6 = tmp14;
  const tmp3 = stateFromStores(visibleItemIds[33])();
  const items4 = [ref1];
  stateFromStores2 = isFocused(visibleItemIds[37]).useStateFromStores(items4, () => ref1.getGuildCount());
  const items5 = [first, tmp12[1], stateFromStores2];
  const effect1 = handleOnRefresh.useEffect(() => {
    if (null != first) {
      let obj = isFocused(visibleItemIds[21]);
      obj = { extendedOnboarding: null };
      obj[0] = stateFromStores2 <= outer1_12;
      obj.pushICYMIInfoModal(obj);
      _undefined(outer1_13.USER_DISMISS);
    }
  }, items5);
  const items6 = [endVisible];
  const effect2 = handleOnRefresh.useEffect(() => {
    let hasOpenedEnoughTimesResult = endVisible;
    if (endVisible) {
      hasOpenedEnoughTimesResult = lib.hasOpenedEnoughTimes();
    }
    if (hasOpenedEnoughTimesResult) {
      stateFromStores(visibleItemIds[17]).openLazy(isFocused(visibleItemIds[19])(visibleItemIds[43], visibleItemIds.paths), "ICYMIFeedbackSheet", {});
      const obj = stateFromStores(visibleItemIds[17]);
    }
  }, items6);
  ref = handleOnRefresh.useRef(null);
  obj = {
    scrollToTop() {
      const current = ref.current;
      if (current != null) {
        const obj = { offset: 0, animated: null };
        obj[1] = !stateFromStores;
        current.scrollToOffset(obj);
      }
    }
  };
  ref1 = handleOnRefresh.useRef(obj);
  const obj7 = isFocused(visibleItemIds[37]);
  const scrollToTop = isFocused(visibleItemIds[35]).useScrollToTop(ref1);
  const obj9 = isFocused(visibleItemIds[35]);
  const items7 = [stateFromStores3];
  stateFromStores3 = isFocused(visibleItemIds[37]).useStateFromStores(items7, () => stateFromStores3.getDoubleTapBehavior());
  const obj10 = isFocused(visibleItemIds[37]);
  const items8 = [stateFromStores3, isFocused(visibleItemIds[44]).useNavigation(), stateFromStores];
  const effect3 = handleOnRefresh.useEffect(() => {
    if (stateFromStores3 === isFocused(visibleItemIds[45]).GravityICYMIDoubleTapBehavior.DEFAULT) {
      let obj = { scrollToTop: null };
      obj[0] = function scrollToTop() {
        const current = ref.current;
        if (current != null) {
          const obj = { offset: 0, animated: null };
          obj[1] = !closure_1;
          current.scrollToOffset(obj);
        }
      };
      ref1.current = obj;
    } else {
      obj = { scrollToTop: null };
      obj[0] = function scrollToTop() {
        callback(8319).showForLaterModal(callback(8321).SavedMessageSortTypes.BOOKMARK);
      };
      ref1.current = obj;
    }
  }, items8);
  const items9 = [ref, stateFromStores];
  filterStaffGuild = handleOnRefresh.useCallback(() => {
    const current = ref.current;
    if (current != null) {
      const obj = { offset: 0, animated: null };
      obj[1] = !stateFromStores;
      current.scrollToOffset(obj);
    }
  }, items9);
  const obj11 = isFocused(visibleItemIds[44]);
  const items10 = [visibleItemIds, endVisible];
  const mobileQuestDockHeight = isFocused(visibleItemIds[48]).useMobileQuestDockHeight();
  const callback = handleOnRefresh.useCallback((item) => {
    item = item.item;
    const kind = item.data.kind;
    if ("message" === kind) {
      if (item.channelType === isFocused(visibleItemIds[49]).ChannelTypes.GUILD_ANNOUNCEMENT) {
        let obj = { unread: null, message: null, visible: null };
        obj[0] = item.unread;
        obj[1] = item.data.message;
        obj[2] = null != visibleItemIds.find((item) => item.item.id === item.id);
        let tmp41 = outer1_14(stateFromStores(visibleItemIds[50]), obj);
        const tmp45 = stateFromStores(visibleItemIds[50]);
      } else {
        obj = { message: null, messageContext: null, visible: null };
        obj[0] = item.data.message;
        obj[1] = item.data.messageContext;
        obj[2] = null != visibleItemIds.find((item) => item.item.id === item.id);
        tmp41 = outer1_14(stateFromStores(visibleItemIds[51]), obj);
        const tmp38 = stateFromStores(visibleItemIds[51]);
      }
    } else {
      if ("contentInventory" === kind) {
        const obj1 = { visible: null, content: null };
        obj1[0] = null != visibleItemIds.find((item) => item.item.id === item.id);
        obj1[1] = item.data.content;
        let tmp7 = outer1_14(stateFromStores(visibleItemIds[52]), obj1);
        const tmp30 = stateFromStores(visibleItemIds[52]);
      } else if ("loading" === kind) {
        return outer1_14(isFocused(visibleItemIds[53]).ICYMILoading, {});
      } else if ("bottomLoading" === kind) {
        return outer1_14(isFocused(visibleItemIds[54]).ICYMIBottomLoading, {});
      } else if ("end" === kind) {
        const obj2 = { visible: null };
        obj2[0] = endVisible;
        return outer1_14(stateFromStores(visibleItemIds[55]), obj2);
      } else if ("guildEvent" === kind) {
        const obj3 = { eventId: null };
        obj3[0] = item.data.eventId;
        tmp7 = outer1_14(stateFromStores(visibleItemIds[56]), obj3);
      } else if ("recommendedGuilds" === kind) {
        tmp7 = outer1_14(isFocused(visibleItemIds[57]).ICYMIServerRecommendationRow, {});
      } else if ("icymiHeader" === kind) {
        return outer1_14(stateFromStores(visibleItemIds[58]), {});
      } else if ("forumThread" === kind) {
        obj = { message: null, channel: null, visible: null };
        obj[0] = item.data.message;
        obj[1] = item.data.threadChannel;
        obj[2] = null != visibleItemIds.find((item) => item.item.id === item.id);
        tmp7 = outer1_14(isFocused(visibleItemIds[59]).ICYMIForumThreadRow, obj);
      } else {
        return null;
      }
      const obj4 = { itemId: null, children: null };
      obj4[0] = item.id;
      obj4[1] = tmp7;
      return outer1_14(isFocused(visibleItemIds[60]).CardHeightMeasurer, obj4);
    }
  }, items10);
  const memo = handleOnRefresh.useMemo(() => ({ backgroundColor: "transparent" }), []);
  const obj12 = isFocused(visibleItemIds[48]);
  const clientThemesOverride = isFocused(visibleItemIds[61]).useClientThemesOverride();
  const obj13 = isFocused(visibleItemIds[61]);
  const items11 = [filterStaffGuild];
  obj = { style: items12, children: null };
  items12 = [, ];
  ({ containerInPanels: arr13[0], containerBackground: arr13[1] } = tmp);
  const stateFromStores4 = isFocused(visibleItemIds[37]).useStateFromStores(items11, () => lib.hasNewContent(), []);
  const items13 = [callback(closure_22, { inNestedNavigator: inNestedNavigator.inNestedNavigator }), ];
  obj1 = { style: items14, children: null };
  items14 = [tmp.flashListWrapper, , ];
  obj2 = { height: height - stateFromStores(visibleItemIds[34])().top - 32 - 24 - mobileQuestDockHeight, width, marginHorizontal: "auto" };
  items14[1] = obj2;
  items14[2] = clientThemesOverride;
  obj3 = {
    onPress() {
      stateFromStores(visibleItemIds[16]).itemInteracted("refresh_button", "refresh_button", "press_refresh_button");
      const obj = stateFromStores(visibleItemIds[16]);
      stateFromStores(visibleItemIds[16]).feedPageActioned({ actionParameters: { actionGestureType: "press", actionTargetElement: "new_content_pill", actionIntentType: "refresh", actionDestinationType: null } });
      handleOnRefresh();
      lib();
    },
    isRefreshing
  };
  const items15 = [callback(stateFromStores(visibleItemIds[62]), obj3), , ];
  obj4 = { ref, scrollEnabled: !loading, extraData: { endVisible }, contentContainerStyle: memo, accessibilityLabel: null, data: null, refreshing: null, refreshControl: null, onEndReachedThreshold: 3, onEndReached: null, keyExtractor: null, renderItem: null, getItemType: null, drawDistance: 100, stickyHeaderIndices: null, viewabilityConfigCallbackPairs: null };
  const intl = isFocused(visibleItemIds[23]).intl;
  obj4[4] = intl.string(isFocused(visibleItemIds[23]).t.OIgYlQ);
  obj4[5] = data;
  obj4[6] = isRefreshing;
  obj5 = { onRefresh: handleOnRefresh, refreshing: isRefreshing, tintColor: tmp.refreshing.color, style: null };
  let num = 1;
  let num2 = 1;
  if (stateFromStores4) {
    num2 = 0;
  }
  obj5[3] = { opacity: num2 };
  obj4[7] = callback(c6, obj5);
  obj4[9] = handleEndReached;
  obj4[10] = keyExtractor;
  obj4[11] = callback;
  obj4[12] = isFocused(visibleItemIds[32]).itemToType;
  const obj14 = isFocused(visibleItemIds[37]);
  const tmp31 = c6;
  isFocused(visibleItemIds[64]).isAndroid();
  obj4[14] = stickyHeaderIndices;
  obj4[15] = viewabilityConfigCallbackPairs;
  if (!loading) {
    num = version;
  }
  items15[1] = callback(isFocused(visibleItemIds[63]).FlashList, obj4, "Version-" + num);
  items15[2] = callback(isFocused(visibleItemIds[65]).TTIFirstContentfulPaint, { label: "icymi" });
  obj1[1] = items15;
  items13[1] = closure_16(first, obj1);
  obj[1] = items13;
  return closure_16(first, obj);
}
function keyExtractor(id) {
  return id.id;
}
let c4 = importAllResult;
({ View: c5, RefreshControl: closure_6 } = get_ActivityIndicator);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = jsxProd);
let closure_17 = createCacheKey.createStyles((paddingTop) => {
  let obj = { containerOuterTablet: null };
  obj = { backgroundColor: Themes.colors.BACKGROUND_BASE_LOWEST, paddingHorizontal: Themes.space.PX_8, overflow: "hidden", flex: 1, paddingTop };
  obj[0] = obj;
  return obj;
});
let closure_18 = createICYMIStyles.createICYMIStyles((margin) => {
  let obj = { container: { flex: 1, flexShrink: 1, flexGrow: 1 }, containerInPanels: null, containerBackground: null, flashListWrapper: null, refreshing: null, header: null, headerLeft: null, headerClose: null, headerTitle: null, headerText: null, headerActions: null, notificationBadge: null, loading: null, headerBorder: null };
  obj = { flex: 1, flexShrink: 1, flexGrow: 1, overflow: "hidden", borderTopLeftRadius: Themes.radii.sm, borderTopRightRadius: Themes.radii.sm };
  obj[1] = obj;
  obj = { backgroundColor: Themes.colors.BACKGROUND_BASE_LOW };
  obj[2] = obj;
  obj[3] = { backgroundColor: Themes.colors.BACKGROUND_BASE_LOW, minHeight: 2, flex: 1 };
  const obj1 = { backgroundColor: Themes.colors.BACKGROUND_BASE_LOW, minHeight: 2, flex: 1 };
  obj[4] = { color: Themes.colors.INTERACTIVE_TEXT_DEFAULT };
  const obj2 = { color: Themes.colors.INTERACTIVE_TEXT_DEFAULT };
  obj[5] = { backgroundColor: Themes.colors.BACKGROUND_BASE_LOW, position: "relative", overflow: "hidden", width: "100%" };
  obj[6] = { flexDirection: "row", alignItems: "center" };
  const obj3 = { backgroundColor: Themes.colors.BACKGROUND_BASE_LOW, position: "relative", overflow: "hidden", width: "100%" };
  obj[7] = { marginRight: Themes.space.PX_16, height: Themes.space.PX_32, width: Themes.space.PX_32, alignItems: "center", justifyContent: "center", borderRadius: Themes.radii.lg };
  obj[8] = { height: 56, marginHorizontal: margin.margin, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
  obj[9] = { flexDirection: "row", alignItems: "center", gap: 4 };
  const obj4 = { marginRight: Themes.space.PX_16, height: Themes.space.PX_32, width: Themes.space.PX_32, alignItems: "center", justifyContent: "center", borderRadius: Themes.radii.lg };
  const obj5 = { height: 56, marginHorizontal: margin.margin, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
  obj[10] = { flexDirection: "row", alignItems: "center", gap: Themes.space.PX_12 };
  const obj6 = { flexDirection: "row", alignItems: "center", gap: Themes.space.PX_12 };
  obj[11] = { height: 18, width: 18, borderRadius: Themes.radii.round };
  const obj7 = { height: 18, width: 18, borderRadius: Themes.radii.round };
  obj[12] = { flex: 1, justifyContent: "center", paddingTop: Themes.space.PX_96 };
  const obj8 = { flex: 1, justifyContent: "center", paddingTop: Themes.space.PX_96 };
  obj[13] = { position: "absolute", bottom: 0, left: 0, right: 0, backgroundColor: Themes.colors.BORDER_SUBTLE, height: 1 };
  return obj;
});
let closure_22 = importAllResult.memo((inNestedNavigator) => {
  inNestedNavigator = inNestedNavigator.inNestedNavigator;
  const tmp = callback3();
  let obj = dependencyMap;
  const tmp2 = useIsWindowLarge();
  let LeftBackIconWithBadge = require;
  obj = { top: !tmp2, style: tmp.header, children: null };
  obj = { absolute: true, wide: true, tall: true, mix: true, mixAmount: null };
  const obj1 = { dark: null, light: null };
  obj1[0] = getGradientColorByPercentage.OverlayOpacity.LEVEL_7;
  obj1[1] = getGradientColorByPercentage.OverlayOpacity.LEVEL_8;
  obj[4] = obj1;
  const items = [callback(getMixedGradientColor, obj), , ];
  const obj2 = { style: tmp.headerTitle, children: null };
  const obj3 = { style: tmp.headerLeft, children: null };
  if (!tmp2) {
    if (!inNestedNavigator) {
      const items1 = [null, tmp4(ICYMIHeaderTextWrapper, {})];
      obj3[1] = items1;
      const items2 = [tmp3(tmp6, obj3), ];
      const obj4 = { style: null, children: null };
      obj4[0] = tmp.headerActions;
      const items3 = [tmp4(InfoButton, {}), tmp4(SettingsButton, {})];
      obj4[1] = items3;
      items2[1] = tmp3(tmp6, obj4);
      obj2[1] = items2;
      items[1] = tmp3(tmp6, obj2);
      const obj5 = { style: null };
      obj5[0] = tmp.headerBorder;
      items[2] = tmp4(tmp6, obj5);
      obj[2] = items;
      return tmp3(SafeAreaPaddingView.SafeAreaPaddingView, obj);
    }
  }
  const obj6 = { style: tmp.headerClose, accessibilityLabel: null, onPress: null, children: null };
  const intl = LeftBackIconWithBadge(1236).intl;
  obj6[1] = intl.string(LeftBackIconWithBadge(1236).t["13/7kX"]);
  obj6[2] = LeftBackIconWithBadge(15433).goBack;
  if (inNestedNavigator) {
    LeftBackIconWithBadge = LeftBackIconWithBadge(15435).LeftBackIconWithBadge;
    obj = { includeNotificationsCount: true };
    let tmp4Result = tmp4(LeftBackIconWithBadge, obj);
  } else {
    tmp4Result = tmp4(LeftBackIconWithBadge(5325).XSmallIcon, { color: "interactive-text-default" });
  }
  obj6[3] = tmp4Result;
  tmp4Result = tmp4(LeftBackIconWithBadge(4844).PressableOpacity, obj6);
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/icymi/native/ICYMI.tsx");

export const ICYMITab = function ICYMITab(route) {
  route = route.route;
  let _require;
  let importDefault;
  let obj = _initialize;
  const items = [fetchFingerprint];
  const stateFromStores = obj.useStateFromStores(items, () => id.getId());
  const tmp6 = useIsWindowLarge();
  _require = tmp6;
  let inNestedNavigator;
  if (route != null) {
    const params = route.params;
    if (params != null) {
      inNestedNavigator = params.inNestedNavigator;
    }
  }
  const tmp8 = callback2(useSafeAreaInsets().top);
  importDefault = tmp8;
  const items1 = [tmp6, tmp8.containerOuterTablet];
  const memo = importAllResult.useMemo(() => {
    let containerOuterTablet;
    if (c0) {
      containerOuterTablet = _undefined.containerOuterTablet;
    }
    return containerOuterTablet;
  }, items1);
  const tmp11 = tmp6 ? closure_5 : importAllResult.Fragment;
  const tmp3 = getGuildThemeName();
  const tmp9 = importAllResult;
  if (tmp6) {
    obj = { style: null };
    obj[0] = memo;
  } else {
    obj = {};
  }
  const obj1 = { children: null };
  const obj2 = { children: null };
  const obj3 = {};
  const merged = Object.assign(obj);
  const items2 = [closure_14(getMixedGradientColor, { absolute: true }), ];
  const obj4 = { gradient: tmp3, children: null };
  obj4[1] = closure_14(ICYMI, { inNestedNavigator }, "" + stateFromStores);
  items2[1] = closure_14(_ManaContext.ThemeContextProvider, obj4);
  obj3.children = items2;
  obj2[0] = closure_16(tmp11, obj3);
  obj1[0] = closure_14(_context.ICYMIContextProvider, obj2);
  return closure_14(jsx, obj1);
};