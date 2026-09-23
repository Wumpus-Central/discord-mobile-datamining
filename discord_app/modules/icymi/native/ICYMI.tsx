// discord_app/modules/icymi/native/ICYMI.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ChannelTypes from "../../../../discord_common/js/shared/shared-constants/ChannelTypes.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import asyncRequireImpl from "../../../../_runtime/01980_asyncRequireImpl.js";
import client_themes_ClientThemesUtils from "../../client_themes/native/ClientThemesUtils.tsx";
import useColorThemeBackgroundDefault from "../../client_themes/native/useColorThemeBackground.tsx";
import CircleInformationIcon from "../../../design/components/Icon/native/redesign/generated/CircleInformationIcon.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import ThemedGradientDefault from "../../client_themes/native/ThemedGradient.tsx";
import useIsWindowLargeDefault from "../../screen/native/useIsWindowLarge.tsx";
import common_SafeAreaView from "../../../components_native/common/SafeAreaView.tsx";
import IconButton from "../../../design/components/Button/native/IconButton.native.tsx";
import ICYMITypes from "../ICYMITypes.tsx";
import ICYMIUtils from "../ICYMIUtils.tsx";
import ICYMIActionCreatorsDefault from "../ICYMIActionCreators.tsx";
import FiltersHorizontalIcon from "../../../design/components/Icon/native/redesign/generated/FiltersHorizontalIcon.tsx";
import NativeICYMIUtils from "NativeICYMIUtils.tsx";
import AnnouncementMessageRowDefault from "AnnouncementMessageRow.tsx";
import ICYMIMessageRowDefault from "ICYMIMessageRow.tsx";
import ContentInventoryEntryRowDefault from "ContentInventoryEntryRow.tsx";
import ICYMILoading from "ICYMILoading.tsx";
import ICYMIBottomLoading from "ICYMIBottomLoading.tsx";
import CaughtUpRowDefault from "CaughtUpRow.tsx";
import ICYMIGuildEventRowDefault from "ICYMIGuildEventRow.tsx";
import ICYMIServerRecommendationRow from "ICYMIServerRecommendationRow.tsx";
import ICYMIHeaderDefault from "ICYMIHeader.tsx";
import ICYMIForumThreadRow from "ICYMIForumThreadRow.tsx";
import CardHeightMeasurer from "CardHeightMeasurer.tsx";
import AppFreezerDefault from "../../panels/morphable/native/AppFreezer.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import ICYMIFiltersStore from "../ICYMIFiltersStore.tsx";
import ICYMIStore from "../ICYMIStore.tsx";

const require = globalThis.__r;

const util = LeftBackIconWithBadge(1115);
const Pressables = LeftBackIconWithBadge(5425);
const XSmallIcon = LeftBackIconWithBadge(5983);
const notifications_Notifications = LeftBackIconWithBadge(16804);
const BackIconWithBadge = LeftBackIconWithBadge(16806);
require = fn;
function SettingsButton() {
  return closure_1_14(IconButton.IconButton, {
    accessibilityLabel: "button",
    variant: "tertiary",
    size: "sm",
    icon: closure_1_14(FiltersHorizontalIcon.FiltersHorizontalIcon, { size: "sm" }),
    onPress() {
      require("ICYMIActionCreators").itemInteracted("filters_button", "filters_button", "press_info_button");
      const obj = require("ICYMIActionCreators");
      require("ICYMIActionCreators").feedPageActioned({
        actionParameters: {
          actionGestureType: "press",
          actionTargetElement: "settings_button",
          actionIntentType: "open",
          actionDestinationType: null,
        },
      });
      const obj2 = require("ICYMIActionCreators");
      require("ActionSheetActionCreators").openLazy(
        require("asyncRequireImpl")(paths[18], paths.paths),
        "ICYMISettingsActionSheet",
        {},
      );
    },
  });
}
function InfoButton() {
  return closure_1_14(IconButton.IconButton, {
    accessibilityLabel: "button",
    variant: "tertiary",
    size: "sm",
    icon: closure_1_14(CircleInformationIcon.CircleInformationIcon, { size: "sm" }),
    onPress() {
      ICYMIActionCreatorsDefault.itemInteracted("info_button", "info_button", "press_info_button");
      ICYMIActionCreatorsDefault.feedPageActioned({
        actionParameters: {
          actionGestureType: "press",
          actionTargetElement: "info_button",
          actionIntentType: "open",
          actionDestinationType: null,
        },
      });
      require("NativeICYMIUtils").pushICYMIInfoModal({ extendedOnboarding: true });
    },
  });
}
function ICYMIHeaderTextWrapper() {
  const tmp = closure_18();
  return closure_1_14(hasOwnProperty, {
    style: closure_18().headerText,
    children: noop.useMemo(() => {
      const obj = { children: null };
      const obj2 = {
        color: "mobile-text-heading-primary",
        variant: "heading-lg/bold",
        maxFontSizeMultiplier: 1.75,
        accessibilityRole: "header",
        children: null,
      };
      const intl = require("util").intl;
      obj2.children = intl.string(require("util").t.SY4sdZ);
      const items = [closure_1_14(require("Text/Text").Text, obj2)];
      const obj3 = { color: "text-brand", variant: "text-xs/bold", style: { marginTop: 4 }, children: null };
      const intl2 = require("util").intl;
      obj3.children = intl2.string(require("util").t.Ac2OZA);
      items[1] = closure_1_14(require("Text/Text").Text, obj3);
      obj.children = items;
      return closure_1_16(closure_1_15, obj);
    }, []),
  });
}
function handleEndReached() {
  ICYMIUtils.hydrateNextPage();
}
function ICYMI(inNestedNavigator) {
  let isFocused;
  let stateFromStores;
  visibleItemIds = undefined;
  handleOnRefresh = undefined;
  let stateFromStores2;
  let ref1;
  let stateFromStores3;
  closure_11 = undefined;
  const tmp = closure_18();
  ({ height, width } = stateFromStores(visibleItemIds[33])());
  const tmp3 = stateFromStores(visibleItemIds[33])();
  isFocused = isFocused(visibleItemIds[35]).useIsFocused();
  const layoutEffect = handleOnRefresh.useLayoutEffect(() => {
    isFocused(visibleItemIds[36]).trackAppUIViewed();
  });
  let obj = isFocused(visibleItemIds[35]);
  const items = [stateFromStores2];
  stateFromStores = isFocused(visibleItemIds[37]).useStateFromStores(items, () => stateFromStores2.useReducedMotion);
  let obj2 = isFocused(visibleItemIds[37]);
  const items1 = [closure_11];
  const stateFromStores1 = isFocused(visibleItemIds[37]).useStateFromStores(
    items1,
    () => closure_11.notificationItem(),
    [],
  );
  const items2 = [isFocused];
  const effect = handleOnRefresh.useEffect(() => {
    ICYMIActionCreatorsDefault.setTabFocused(isFocused);
  }, items2);
  let obj3 = isFocused(visibleItemIds[37]);
  const sharedICYMILogic = isFocused(visibleItemIds[39]).useSharedICYMILogic({
    showDot: stateFromStores(visibleItemIds[38])().showDot,
    notificationItem: stateFromStores1,
  });
  ({ loading, visibleItemIds } = sharedICYMILogic);
  const endVisible = sharedICYMILogic.endVisible;
  ({ isRefreshing, handleOnRefresh } = sharedICYMILogic);
  ({ data, version, stickyHeaderIndices, viewabilityConfigCallbackPairs } = sharedICYMILogic);
  let obj4 = isFocused(visibleItemIds[39]);
  const iCYMIEmptyLoadingAnalytics = isFocused(visibleItemIds[40]).useICYMIEmptyLoadingAnalytics(loading, isFocused);
  let obj5 = isFocused(visibleItemIds[40]);
  const items3 = [isFocused(visibleItemIds[42]).DismissibleContent.ICYMI_ALPHA_UPSELL];
  const tmp12 = endVisible(isFocused(visibleItemIds[41]).useGetDismissibleContent(items3), 2);
  const first = tmp12[0];
  closure_6 = tmp14;
  let obj6 = isFocused(visibleItemIds[41]);
  const items4 = [ref1];
  stateFromStores2 = isFocused(visibleItemIds[37]).useStateFromStores(items4, () => ref1.getGuildCount());
  const items5 = [first, tmp12[1], stateFromStores2];
  const effect1 = handleOnRefresh.useEffect(() => {
    if (null != first) {
      const obj2 = { extendedOnboarding: stateFromStores2 <= closure_12 };
      NativeICYMIUtils.pushICYMIInfoModal(obj2);
      closure_6(ContentDismissActionType.USER_DISMISS);
    }
  }, items5);
  const items6 = [endVisible];
  const effect2 = handleOnRefresh.useEffect(() => {
    let hasOpenedEnoughTimesResult = endVisible;
    if (endVisible) {
      hasOpenedEnoughTimesResult = ICYMIStore.hasOpenedEnoughTimes();
    }
    if (hasOpenedEnoughTimesResult) {
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16878, dependencyMap.paths), "ICYMIFeedbackSheet", {});
    }
  }, items6);
  const ref = handleOnRefresh.useRef(null);
  ref1 = handleOnRefresh.useRef({
    scrollToTop() {
      const current = ref.current;
      if (current != null) {
        const obj = { offset: 0, animated: !stateFromStores };
        current.scrollToOffset(obj);
      }
    },
  });
  let obj7 = isFocused(visibleItemIds[37]);
  const obj8 = {
    scrollToTop() {
      const current = ref.current;
      if (current != null) {
        const obj = { offset: 0, animated: !stateFromStores };
        current.scrollToOffset(obj);
      }
    },
  };
  const scrollToTop = isFocused(visibleItemIds[35]).useScrollToTop(ref1);
  const obj9 = isFocused(visibleItemIds[35]);
  const items7 = [stateFromStores3];
  stateFromStores3 = isFocused(visibleItemIds[37]).useStateFromStores(items7, () =>
    stateFromStores3.getDoubleTapBehavior(),
  );
  const obj10 = isFocused(visibleItemIds[37]);
  const items8 = [stateFromStores3, isFocused(visibleItemIds[44]).useNavigation(), stateFromStores];
  const effect3 = handleOnRefresh.useEffect(() => {
    if (stateFromStores3 === ICYMITypes.GravityICYMIDoubleTapBehavior.DEFAULT) {
      const obj2 = {
        scrollToTop() {
          const current = ref.current;
          if (current != null) {
            const obj = { offset: 0, animated: !stateFromStores };
            current.scrollToOffset(obj);
          }
        },
      };
      ref1.current = obj2;
    } else {
      let obj = {
        scrollToTop() {
          isFocused(8188).showForLaterModal(isFocused(8189).SavedMessageSortTypes.BOOKMARK);
        },
      };
      ref1.current = obj;
    }
  }, items8);
  const items9 = [ref, stateFromStores];
  closure_11 = handleOnRefresh.useCallback(() => {
    const current = ref.current;
    if (current != null) {
      const obj = { offset: 0, animated: !stateFromStores };
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
      if (item.channelType === ChannelTypes.ChannelTypes.GUILD_ANNOUNCEMENT) {
        const obj2 = {
          unread: item.unread,
          message: item.data.message,
          visible: null != visibleItemIds.find((item) => item.item.id === item.id),
        };
        let tmp41 = closure_2_14(AnnouncementMessageRowDefault, obj2);
      } else {
        const obj3 = {
          message: item.data.message,
          messageContext: item.data.messageContext,
          visible: null != visibleItemIds.find((item) => item.item.id === item.id),
        };
        tmp41 = closure_2_14(ICYMIMessageRowDefault, obj3);
      }
    } else {
      if ("contentInventory" === kind) {
        const obj4 = {
          visible: null != visibleItemIds.find((item) => item.item.id === item.id),
          content: item.data.content,
        };
        let tmp7 = closure_2_14(ContentInventoryEntryRowDefault, obj4);
      } else if ("loading" === kind) {
        return closure_2_14(ICYMILoading.ICYMILoading, {});
      } else if ("bottomLoading" === kind) {
        return closure_2_14(ICYMIBottomLoading.ICYMIBottomLoading, {});
      } else if ("end" === kind) {
        const obj5 = { visible: endVisible };
        return closure_2_14(CaughtUpRowDefault, obj5);
      } else if ("guildEvent" === kind) {
        const obj6 = { eventId: item.data.eventId };
        tmp7 = closure_2_14(ICYMIGuildEventRowDefault, obj6);
      } else if ("recommendedGuilds" === kind) {
        tmp7 = closure_2_14(ICYMIServerRecommendationRow.ICYMIServerRecommendationRow, {});
      } else if ("icymiHeader" === kind) {
        return closure_2_14(ICYMIHeaderDefault, {});
      } else if ("forumThread" === kind) {
        const obj = {
          message: item.data.message,
          channel: item.data.threadChannel,
          visible: null != visibleItemIds.find((item) => item.item.id === item.id),
        };
        tmp7 = closure_2_14(ICYMIForumThreadRow.ICYMIForumThreadRow, obj);
      } else {
        return null;
      }
      const obj7 = { itemId: item.id, children: tmp7 };
      return closure_2_14(CardHeightMeasurer.CardHeightMeasurer, obj7);
    }
  }, items10);
  const memo = handleOnRefresh.useMemo(() => ({ backgroundColor: "transparent" }), []);
  const obj12 = isFocused(visibleItemIds[48]);
  const clientThemesOverride = isFocused(visibleItemIds[61]).useClientThemesOverride();
  const obj13 = isFocused(visibleItemIds[61]);
  const items11 = [closure_11];
  const obj15 = { style: null, children: null };
  const items12 = [,];
  ({ containerInPanels: arr13[0], containerBackground: arr13[1] } = tmp);
  obj15.style = items12;
  const stateFromStores4 = isFocused(visibleItemIds[37]).useStateFromStores(
    items11,
    () => closure_11.hasNewContent(),
    [],
  );
  const items13 = [closure_14(closure_22, { inNestedNavigator: inNestedNavigator.inNestedNavigator })];
  const obj16 = { style: null, children: null };
  const items14 = [tmp.flashListWrapper, ,];
  const size = {
    height: height - stateFromStores(visibleItemIds[34])().top - 32 - 24 - mobileQuestDockHeight,
    width,
    marginHorizontal: "auto",
  };
  items14[1] = size;
  items14[2] = clientThemesOverride;
  obj16.style = items14;
  const items15 = [
    closure_14(stateFromStores(visibleItemIds[62]), {
      onPress() {
        ICYMIActionCreatorsDefault.itemInteracted("refresh_button", "refresh_button", "press_refresh_button");
        ICYMIActionCreatorsDefault.feedPageActioned({
          actionParameters: {
            actionGestureType: "press",
            actionTargetElement: "new_content_pill",
            actionIntentType: "refresh",
            actionDestinationType: null,
          },
        });
        handleOnRefresh();
        closure_11();
      },
      isRefreshing,
    }),
    ,
  ];
  const obj18 = {
    ref,
    scrollEnabled: !loading,
    extraData: { endVisible },
    contentContainerStyle: memo,
    accessibilityLabel: null,
    data: null,
    refreshing: null,
    refreshControl: null,
    onEndReachedThreshold: 3,
    onEndReached: null,
    keyExtractor: null,
    renderItem: null,
    getItemType: null,
    drawDistance: 100,
    stickyHeaderIndices: null,
    viewabilityConfigCallbackPairs: null,
  };
  const intl = isFocused(visibleItemIds[23]).intl;
  obj18.accessibilityLabel = intl.string(isFocused(visibleItemIds[23]).t.OIgYlQ);
  obj18.data = data;
  obj18.refreshing = isRefreshing;
  const obj19 = { onRefresh: handleOnRefresh, refreshing: isRefreshing, tintColor: tmp.refreshing.color, style: null };
  let num = 1;
  let num2 = 1;
  if (stateFromStores4) {
    num2 = 0;
  }
  obj19.style = { opacity: num2 };
  obj18.refreshControl = closure_14(closure_6, obj19);
  obj18.onEndReached = handleEndReached;
  obj18.keyExtractor = keyExtractor;
  obj18.renderItem = callback;
  obj18.getItemType = isFocused(visibleItemIds[32]).itemToType;
  const obj14 = isFocused(visibleItemIds[37]);
  const obj17 = {
    onPress() {
      ICYMIActionCreatorsDefault.itemInteracted("refresh_button", "refresh_button", "press_refresh_button");
      ICYMIActionCreatorsDefault.feedPageActioned({
        actionParameters: {
          actionGestureType: "press",
          actionTargetElement: "new_content_pill",
          actionIntentType: "refresh",
          actionDestinationType: null,
        },
      });
      handleOnRefresh();
      closure_11();
    },
    isRefreshing,
  };
  isFocused(visibleItemIds[64]).isAndroid();
  obj18.stickyHeaderIndices = stickyHeaderIndices;
  obj18.viewabilityConfigCallbackPairs = viewabilityConfigCallbackPairs;
  if (!loading) {
    num = version;
  }
  items15[1] = closure_14(isFocused(visibleItemIds[63]).FlashList, obj18, "Version-" + num);
  items15[2] = closure_14(isFocused(visibleItemIds[65]).TTIFirstContentfulPaint, { label: "icymi" });
  obj16.children = items15;
  items13[1] = closure_16(first, obj16);
  obj15.children = items13;
  return closure_16(first, obj15);
}
function keyExtractor(id) {
  return id.id;
}
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, RefreshControl: metroRequire } = get_ActivityIndicator);
let closure_12 = fn(16854).NUM_GUILDS_EXTENDED_ONBOARDING;
const ContentDismissActionType = fn(2039).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = jsxProd);
const createStyles = fn(4827);
let closure_17 = createStyles.createStyles((paddingTop) => {
  const obj = {
    containerOuterTablet: {
      backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
      paddingHorizontal: nativeDefault.space.PX_8,
      overflow: "hidden",
      flex: 1,
      paddingTop,
    },
  };
  return obj;
});
const createICYMIStyles = fn(16855);
let closure_18 = createICYMIStyles.createICYMIStyles((margin) => {
  const obj = {
    container: { flex: 1, flexShrink: 1, flexGrow: 1 },
    containerInPanels: {
      flex: 1,
      flexShrink: 1,
      flexGrow: 1,
      overflow: "hidden",
      borderTopLeftRadius: nativeDefault.radii.sm,
      borderTopRightRadius: nativeDefault.radii.sm,
    },
    containerBackground: null,
    flashListWrapper: null,
    refreshing: null,
    header: null,
    headerLeft: null,
    headerClose: null,
    headerTitle: null,
    headerText: null,
    headerActions: null,
    notificationBadge: null,
    loading: null,
    headerBorder: null,
  };
  const obj2 = {
    flex: 1,
    flexShrink: 1,
    flexGrow: 1,
    overflow: "hidden",
    borderTopLeftRadius: nativeDefault.radii.sm,
    borderTopRightRadius: nativeDefault.radii.sm,
  };
  obj.containerBackground = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
  const obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
  obj.flashListWrapper = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, minHeight: 2, flex: 1 };
  const obj4 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, minHeight: 2, flex: 1 };
  obj.refreshing = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
  const obj5 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
  obj.header = {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    position: "relative",
    overflow: "hidden",
    width: "100%",
  };
  obj.headerLeft = { flexDirection: "row", alignItems: "center" };
  const size = {
    marginRight: nativeDefault.space.PX_16,
    height: nativeDefault.space.PX_32,
    width: nativeDefault.space.PX_32,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: nativeDefault.radii.lg,
  };
  obj.headerClose = size;
  obj.headerTitle = {
    height: 56,
    marginHorizontal: margin.margin,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  };
  obj.headerText = { flexDirection: "row", alignItems: "center", gap: 4 };
  const obj6 = {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    position: "relative",
    overflow: "hidden",
    width: "100%",
  };
  const obj7 = {
    height: 56,
    marginHorizontal: margin.margin,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  };
  obj.headerActions = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
  const size1 = { height: 18, width: 18, borderRadius: nativeDefault.radii.round };
  obj.notificationBadge = size1;
  const obj8 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
  obj.loading = { flex: 1, justifyContent: "center", paddingTop: nativeDefault.space.PX_96 };
  const rect = {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
    height: 1,
  };
  obj.headerBorder = rect;
  return obj;
});
let closure_22 = noop.memo((inNestedNavigator) => {
  inNestedNavigator = inNestedNavigator.inNestedNavigator;
  const tmp = closure_18();
  let obj = dependencyMap;
  const tmp2 = useIsWindowLargeDefault();
  let LeftBackIconWithBadge = require;
  const obj2 = { top: !tmp2, style: tmp.header, children: null };
  const obj3 = { absolute: true, wide: true, tall: true, mix: true, mixAmount: null };
  const obj4 = {
    dark: client_themes_ClientThemesUtils.OverlayOpacity.LEVEL_7,
    light: client_themes_ClientThemesUtils.OverlayOpacity.LEVEL_8,
  };
  obj3.mixAmount = obj4;
  const items = [closure_1_14(ThemedGradientDefault, obj3), ,];
  const obj5 = { style: tmp.headerTitle, children: null };
  const obj6 = { style: tmp.headerLeft, children: null };
  if (!tmp2) {
    if (!inNestedNavigator) {
      const items1 = [null, closure_1_14(ICYMIHeaderTextWrapper, {})];
      obj6.children = items1;
      const items2 = [value2(hasOwnProperty, obj6)];
      const obj7 = { style: tmp.headerActions, children: null };
      const items3 = [closure_1_14(InfoButton, {}), closure_1_14(SettingsButton, {})];
      obj7.children = items3;
      items2[1] = value2(hasOwnProperty, obj7);
      obj5.children = items2;
      items[1] = value2(hasOwnProperty, obj5);
      const obj8 = { style: tmp.headerBorder };
      items[2] = closure_1_14(hasOwnProperty, obj8);
      obj2.children = items;
      return value2(common_SafeAreaView.SafeAreaPaddingView, obj2);
    }
  }
  const obj9 = { style: tmp.headerClose, accessibilityLabel: null, onPress: null, children: null };
  const intl = util.intl;
  obj9.accessibilityLabel = intl.string(util.t["13/7kX"]);
  obj9.onPress = notifications_Notifications.goBack;
  if (inNestedNavigator) {
    LeftBackIconWithBadge = BackIconWithBadge.LeftBackIconWithBadge;
    obj = { includeNotificationsCount: true };
    let tmp4Result = closure_1_14(LeftBackIconWithBadge, obj);
  } else {
    tmp4Result = closure_1_14(XSmallIcon.XSmallIcon, { color: "interactive-text-default" });
  }
  obj9.children = tmp4Result;
  closure_1_14(Pressables.PressableOpacity, obj9);
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/ICYMI.tsx");

export const ICYMITab = function ICYMITab(route) {
  route = route.route;
  _require = undefined;
  importDefault = undefined;
  const tmp3 = useColorThemeBackgroundDefault();
  const items = [AuthenticationStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => id.getId());
  const tmp6 = useIsWindowLargeDefault();
  _require = tmp6;
  let inNestedNavigator;
  if (route != null) {
    const params = route.params;
    if (params != null) {
      inNestedNavigator = params.inNestedNavigator;
    }
  }
  const tmp8 = closure_17(useSafeAreaInsetsDefault().top);
  importDefault = tmp8;
  const items1 = [tmp6, tmp8.containerOuterTablet];
  const memo = noop.useMemo(() => {
    containerOuterTablet = undefined;
    if (closure_0) {
      containerOuterTablet = containerOuterTablet.containerOuterTablet;
    }
    return containerOuterTablet;
  }, items1);
  const obj = require("initialize");
  const tmp11 = tmp6 ? closure_5 : noop.Fragment;
  if (tmp6) {
    const obj2 = { style: memo };
    let obj3 = obj2;
  } else {
    obj3 = {};
  }
  const obj4 = { children: null };
  const obj5 = { children: null };
  const obj6 = {};
  const merged = Object.assign(obj3);
  const items2 = [closure_14(ThemedGradientDefault, { absolute: true })];
  const tmpResult = AppFreezerDefault;
  items2[1] = closure_14(require("native").ThemeContextProvider, {
    gradient: tmp3,
    children: closure_14(ICYMI, { inNestedNavigator }, "" + stateFromStores),
  });
  obj6.children = items2;
  obj5.children = closure_16(tmp11, obj6);
  obj4.children = closure_14(require("ICYMIContext").ICYMIContextProvider, obj5);
  return closure_14(tmpResult, obj4);
};
