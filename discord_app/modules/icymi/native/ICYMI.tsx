// discord_app/modules/icymi/native/ICYMI.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ChannelTypes from "../../../../discord_common/js/shared/shared-constants/ChannelTypes.tsx";
import util from "../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import asyncRequireImpl from "../../../../_runtime/01987_asyncRequireImpl.js";
import native from "../../../../discord_common/js/packages/design/native.tsx";
import client_themes_ClientThemesUtils from "../../client_themes/native/ClientThemesUtils.tsx";
import useColorThemeBackgroundDefault from "../../client_themes/native/useColorThemeBackground.tsx";
import CircleInformationIcon from "../../../design/components/Icon/native/redesign/generated/CircleInformationIcon.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import ThemedGradientDefault from "../../client_themes/native/ThemedGradient.tsx";
import XSmallIcon from "../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx";
import useIsWindowLargeDefault from "../../screen/native/useIsWindowLarge.tsx";
import common_SafeAreaView from "../../../components_native/common/SafeAreaView.tsx";
import IconButton from "../../../design/components/Button/native/IconButton.native.tsx";
import ICYMITypes from "../ICYMITypes.tsx";
import ICYMIActionCreatorsDefault from "../ICYMIActionCreators.tsx";
import FiltersHorizontalIcon from "../../../design/components/Icon/native/redesign/generated/FiltersHorizontalIcon.tsx";
import notifications_Notifications from "../../main_tabs_v2/native/tabs/notifications/Notifications.tsx";
import BackIconWithBadge from "../../main_tabs_v2/native/shared_components/BackIconWithBadge.tsx";
import ICYMIContext from "ICYMIContext.tsx";
import ICYMIStoreUtils from "../ICYMIStoreUtils.tsx";
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

require = fn;
function SettingsButton() {
  return state(IconButton.IconButton, {
    accessibilityLabel: "button",
    variant: "tertiary",
    size: "sm",
    icon: state(FiltersHorizontalIcon.FiltersHorizontalIcon, { size: "sm" }),
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
function handleEndReached() {
  ICYMIStoreUtils.hydrateNextPage();
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
  ({ height, width } = stateFromStores(visibleItemIds[35])());
  const tmp3 = stateFromStores(visibleItemIds[35])();
  isFocused = isFocused(visibleItemIds[37]).useIsFocused();
  const layoutEffect = handleOnRefresh.useLayoutEffect(() => {
    isFocused(visibleItemIds[38]).trackAppUIViewed();
  });
  let obj = isFocused(visibleItemIds[37]);
  const items = [stateFromStores2];
  stateFromStores = isFocused(visibleItemIds[39]).useStateFromStores(items, () => stateFromStores2.useReducedMotion);
  let obj2 = isFocused(visibleItemIds[39]);
  const items1 = [closure_11];
  const stateFromStores1 = isFocused(visibleItemIds[39]).useStateFromStores(
    items1,
    () => closure_11.notificationItem(),
    [],
  );
  const items2 = [isFocused];
  const effect = handleOnRefresh.useEffect(() => {
    ICYMIActionCreatorsDefault.setTabFocused(isFocused);
  }, items2);
  let obj3 = isFocused(visibleItemIds[39]);
  const sharedICYMILogic = isFocused(visibleItemIds[41]).useSharedICYMILogic({
    showDot: stateFromStores(visibleItemIds[40])().showDot,
    notificationItem: stateFromStores1,
  });
  ({ loading, visibleItemIds } = sharedICYMILogic);
  const endVisible = sharedICYMILogic.endVisible;
  ({ isRefreshing, handleOnRefresh } = sharedICYMILogic);
  ({ data, version, stickyHeaderIndices, viewabilityConfigCallbackPairs } = sharedICYMILogic);
  let obj4 = isFocused(visibleItemIds[41]);
  const iCYMIEmptyLoadingAnalytics = isFocused(visibleItemIds[42]).useICYMIEmptyLoadingAnalytics(loading, isFocused);
  let obj5 = isFocused(visibleItemIds[42]);
  const items3 = [isFocused(visibleItemIds[44]).DismissibleContent.ICYMI_ALPHA_UPSELL];
  const tmp12 = endVisible(isFocused(visibleItemIds[43]).useGetDismissibleContent(items3), 2);
  const first = tmp12[0];
  closure_6 = tmp14;
  let obj6 = isFocused(visibleItemIds[43]);
  const items4 = [ref1];
  stateFromStores2 = isFocused(visibleItemIds[39]).useStateFromStores(items4, () => ref1.getGuildCount());
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
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(16419, dependencyMap.paths), "ICYMIFeedbackSheet", {});
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
  let obj7 = isFocused(visibleItemIds[39]);
  const obj8 = {
    scrollToTop() {
      const current = ref.current;
      if (current != null) {
        const obj = { offset: 0, animated: !stateFromStores };
        current.scrollToOffset(obj);
      }
    },
  };
  const scrollToTop = isFocused(visibleItemIds[37]).useScrollToTop(ref1);
  const obj9 = isFocused(visibleItemIds[37]);
  const items7 = [stateFromStores3];
  stateFromStores3 = isFocused(visibleItemIds[39]).useStateFromStores(items7, () =>
    stateFromStores3.getDoubleTapBehavior(),
  );
  const obj10 = isFocused(visibleItemIds[39]);
  const items8 = [stateFromStores3, isFocused(visibleItemIds[46]).useNavigation(), stateFromStores];
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
          isFocused(7494).showForLaterModal(isFocused(7495).SavedMessageSortTypes.BOOKMARK);
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
  const obj11 = isFocused(visibleItemIds[46]);
  const items10 = [visibleItemIds, endVisible];
  const mobileQuestDockHeight = isFocused(visibleItemIds[50]).useMobileQuestDockHeight();
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
        let tmp41 = state(AnnouncementMessageRowDefault, obj2);
      } else {
        const obj3 = {
          message: item.data.message,
          messageContext: item.data.messageContext,
          visible: null != visibleItemIds.find((item) => item.item.id === item.id),
        };
        tmp41 = state(ICYMIMessageRowDefault, obj3);
      }
    } else {
      if ("contentInventory" === kind) {
        const obj4 = {
          visible: null != visibleItemIds.find((item) => item.item.id === item.id),
          content: item.data.content,
        };
        let tmp7 = state(ContentInventoryEntryRowDefault, obj4);
      } else if ("loading" === kind) {
        return state(ICYMILoading.ICYMILoading, {});
      } else if ("bottomLoading" === kind) {
        return state(ICYMIBottomLoading.ICYMIBottomLoading, {});
      } else if ("end" === kind) {
        const obj5 = { visible: endVisible };
        return state(CaughtUpRowDefault, obj5);
      } else if ("guildEvent" === kind) {
        const obj6 = { eventId: item.data.eventId };
        tmp7 = state(ICYMIGuildEventRowDefault, obj6);
      } else if ("recommendedGuilds" === kind) {
        tmp7 = state(ICYMIServerRecommendationRow.ICYMIServerRecommendationRow, {});
      } else if ("icymiHeader" === kind) {
        return state(ICYMIHeaderDefault, {});
      } else if ("forumThread" === kind) {
        const obj = {
          message: item.data.message,
          channel: item.data.threadChannel,
          visible: null != visibleItemIds.find((item) => item.item.id === item.id),
        };
        tmp7 = state(ICYMIForumThreadRow.ICYMIForumThreadRow, obj);
      } else {
        return null;
      }
      const obj7 = { itemId: item.id, children: tmp7 };
      return state(CardHeightMeasurer.CardHeightMeasurer, obj7);
    }
  }, items10);
  const memo = handleOnRefresh.useMemo(() => ({ backgroundColor: "transparent" }), []);
  const obj12 = isFocused(visibleItemIds[50]);
  const clientThemesOverride = isFocused(visibleItemIds[63]).useClientThemesOverride();
  const obj13 = isFocused(visibleItemIds[63]);
  const items11 = [closure_11];
  const obj15 = { style: null, children: null };
  const items12 = [,];
  ({ containerInPanels: arr13[0], containerBackground: arr13[1] } = tmp);
  obj15.style = items12;
  const stateFromStores4 = isFocused(visibleItemIds[39]).useStateFromStores(
    items11,
    () => closure_11.hasNewContent(),
    [],
  );
  const items13 = [closure_14(closure_22, { inNestedNavigator: inNestedNavigator.inNestedNavigator })];
  const obj16 = { style: null, children: null };
  const items14 = [tmp.flashListWrapper, ,];
  const size = {
    height: height - stateFromStores(visibleItemIds[36])().top - 32 - 24 - mobileQuestDockHeight,
    width,
    marginHorizontal: "auto",
  };
  items14[1] = size;
  items14[2] = clientThemesOverride;
  obj16.style = items14;
  const items15 = [
    closure_14(stateFromStores(visibleItemIds[64]), {
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
  const intl = isFocused(visibleItemIds[25]).intl;
  obj18.accessibilityLabel = intl.string(isFocused(visibleItemIds[25]).t.OIgYlQ);
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
  obj18.getItemType = isFocused(visibleItemIds[66]).itemToType;
  const obj14 = isFocused(visibleItemIds[39]);
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
  isFocused(visibleItemIds[67]).isAndroid();
  obj18.stickyHeaderIndices = stickyHeaderIndices;
  obj18.viewabilityConfigCallbackPairs = viewabilityConfigCallbackPairs;
  if (!loading) {
    num = version;
  }
  items15[1] = closure_14(isFocused(visibleItemIds[65]).FlashList, obj18, "Version-" + num);
  items15[2] = closure_14(isFocused(visibleItemIds[68]).TTIFirstContentfulPaint, { label: "icymi" });
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
let closure_12 = fn(16393).NUM_GUILDS_EXTENDED_ONBOARDING;
const ContentDismissActionType = fn(2048).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = jsxProd);
const createStyles = fn(4890);
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
const createICYMIStyles = fn(16394);
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
let ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = {
          accessibilityLabel: "button",
          variant: "tertiary",
          size: "sm",
          icon: state(CircleInformationIcon.CircleInformationIcon, { size: "sm" }),
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
        };
        const tmp6 = state(IconButton.IconButton, obj2);
        cResult[0] = tmp6;
        let first = tmp6;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : () =>
      state(IconButton.IconButton, {
        accessibilityLabel: "button",
        variant: "tertiary",
        size: "sm",
        icon: state(CircleInformationIcon.CircleInformationIcon, { size: "sm" }),
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
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(4);
      const tmp4 = closure_18();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = {
          color: "mobile-text-heading-primary",
          variant: "heading-lg/bold",
          maxFontSizeMultiplier: 1.75,
          accessibilityRole: "header",
          children: null,
        };
        const intl = util.intl;
        obj2.children = intl.string(util.t.SY4sdZ);
        const tmp7 = state(Text_Text.Text, obj2);
        cResult[0] = tmp7;
        let first = tmp7;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { children: null };
        const items = [first];
        const obj4 = { color: "text-brand", variant: "text-xs/bold", style: { marginTop: 4 }, children: null };
        const intl2 = util.intl;
        obj4.children = intl2.string(util.t.Ac2OZA);
        items[1] = state(Text_Text.Text, obj4);
        obj3.children = items;
        const tmp12 = value2(closure_1_15, obj3);
        cResult[1] = tmp12;
        let tmp8 = tmp12;
      } else {
        tmp8 = cResult[1];
      }
      if (cResult[2] !== tmp4.headerText) {
        const obj5 = { style: tmp4.headerText, children: tmp8 };
        const tmp16 = state(hasOwnProperty, obj5);
        cResult[2] = tmp4.headerText;
        cResult[3] = tmp16;
        let tmp13 = tmp16;
      } else {
        tmp13 = cResult[3];
      }
      return tmp13;
    }
  : () => {
      const tmp = closure_18();
      return state(hasOwnProperty, {
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
    };
ReactCompilerGating = fn(558);
let closure_22 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (inNestedNavigator) => {
        const cResult = c.c(24);
        inNestedNavigator = inNestedNavigator.inNestedNavigator;
        const tmp4 = closure_18();
        const tmp6 = useIsWindowLargeDefault();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { absolute: true, wide: true, tall: true, mix: true, mixAmount: null };
          const obj3 = {
            dark: client_themes_ClientThemesUtils.OverlayOpacity.LEVEL_7,
            light: client_themes_ClientThemesUtils.OverlayOpacity.LEVEL_8,
          };
          obj2.mixAmount = obj3;
          const tmp11 = state(ThemedGradientDefault, obj2);
          cResult[0] = tmp11;
          let first = tmp11;
          const tmp5Result = ThemedGradientDefault;
        } else {
          first = cResult[0];
        }
        if (cResult[1] === inNestedNavigator) {
          if (cResult[2] === tmp6) {
            if (cResult[3] === tmp4.headerClose) {
              let tmp12 = cResult[4];
            }
            const _Symbol = Symbol;
            if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp20 = state(closure_21, {});
              cResult[5] = tmp20;
              let tmp17 = tmp20;
            } else {
              tmp17 = cResult[5];
            }
            if (cResult[6] === tmp4.headerLeft) {
              if (cResult[7] === tmp12) {
                let tmp21 = cResult[8];
              }
              const _Symbol2 = Symbol;
              if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
                const tmp29 = state(closure_20, {});
                const tmp31 = state(SettingsButton, {});
                cResult[9] = tmp29;
                cResult[10] = tmp31;
                let tmp26 = tmp31;
                let tmp25 = tmp29;
              } else {
                tmp25 = cResult[9];
                tmp26 = cResult[10];
              }
              if (cResult[11] !== tmp4.headerActions) {
                const obj4 = { style: tmp4.headerActions, children: null };
                const items = [tmp25, tmp26];
                obj4.children = items;
                const tmp35 = value2(hasOwnProperty, obj4);
                cResult[11] = tmp4.headerActions;
                cResult[12] = tmp35;
                let tmp32 = tmp35;
              } else {
                tmp32 = cResult[12];
              }
              if (cResult[13] === tmp4.headerTitle) {
                if (cResult[14] === tmp21) {
                  if (cResult[15] === tmp32) {
                    let tmp36 = cResult[16];
                  }
                  if (cResult[17] !== tmp4.headerBorder) {
                    const obj5 = { style: tmp4.headerBorder };
                    const tmp43 = state(hasOwnProperty, obj5);
                    cResult[17] = tmp4.headerBorder;
                    cResult[18] = tmp43;
                    let tmp40 = tmp43;
                  } else {
                    tmp40 = cResult[18];
                  }
                  if (cResult[19] === tmp4.header) {
                    if (cResult[20] === tmp7) {
                      if (cResult[21] === tmp40) {
                        if (cResult[22] === tmp36) {
                          let tmp44 = cResult[23];
                        }
                        return tmp44;
                      }
                    }
                  }
                  const obj6 = { top: tmp7, style: tmp4.header, children: null };
                  const items1 = [first, tmp36, tmp40];
                  obj6.children = items1;
                  const tmp46 = value2(common_SafeAreaView.SafeAreaPaddingView, obj6);
                  cResult[19] = tmp4.header;
                  cResult[20] = tmp7;
                  cResult[21] = tmp40;
                  cResult[22] = tmp36;
                  cResult[23] = tmp46;
                  tmp44 = tmp46;
                }
              }
              const obj7 = { style: tmp4.headerTitle, children: null };
              const items2 = [tmp21, tmp32];
              obj7.children = items2;
              const tmp39 = value2(hasOwnProperty, obj7);
              cResult[13] = tmp4.headerTitle;
              cResult[14] = tmp21;
              cResult[15] = tmp32;
              cResult[16] = tmp39;
              tmp36 = tmp39;
            }
            const obj8 = { style: tmp4.headerLeft, children: null };
            const items3 = [tmp12, tmp17];
            obj8.children = items3;
            const tmp24 = value2(hasOwnProperty, obj8);
            cResult[6] = tmp4.headerLeft;
            cResult[7] = tmp12;
            cResult[8] = tmp24;
            tmp21 = tmp24;
          }
        }
        if (!tmp6) {
          if (!inNestedNavigator) {
            cResult[1] = inNestedNavigator;
            cResult[2] = tmp6;
            cResult[3] = tmp4.headerClose;
            cResult[4] = null;
            tmp12 = null;
          }
        }
        const obj9 = { style: tmp4.headerClose, accessibilityLabel: null, onPress: null, children: null };
        const intl = util.intl;
        obj9.accessibilityLabel = intl.string(util.t["13/7kX"]);
        obj9.onPress = notifications_Notifications.goBack;
        if (inNestedNavigator) {
          let tmp14Result = state(BackIconWithBadge.LeftBackIconWithBadge, { includeNotificationsCount: true });
        } else {
          tmp14Result = state(XSmallIcon.XSmallIcon, { color: "interactive-text-default" });
        }
        obj9.children = tmp14Result;
        state(Pressables.PressableOpacity, obj9);
      }
    : (inNestedNavigator) => {
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
        const items = [state(ThemedGradientDefault, obj3), ,];
        const obj5 = { style: tmp.headerTitle, children: null };
        const obj6 = { style: tmp.headerLeft, children: null };
        if (!tmp2) {
          if (!inNestedNavigator) {
            const items1 = [null, state(closure_21, {})];
            obj6.children = items1;
            const items2 = [value2(hasOwnProperty, obj6)];
            const obj7 = { style: tmp.headerActions, children: null };
            const items3 = [state(closure_20, {}), state(SettingsButton, {})];
            obj7.children = items3;
            items2[1] = value2(hasOwnProperty, obj7);
            obj5.children = items2;
            items[1] = value2(hasOwnProperty, obj5);
            const obj8 = { style: tmp.headerBorder };
            items[2] = state(hasOwnProperty, obj8);
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
          let tmp4Result = state(LeftBackIconWithBadge, obj);
        } else {
          tmp4Result = state(XSmallIcon.XSmallIcon, { color: "interactive-text-default" });
        }
        obj9.children = tmp4Result;
        state(Pressables.PressableOpacity, obj9);
      },
);
ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/ICYMI.tsx");

export const ICYMITab = ReactCompilerGating.isReactCompilerEnabled()
  ? (route) => {
      const cResult = c.c(16);
      route = route.route;
      const tmp5 = useColorThemeBackgroundDefault();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AuthenticationStore];
        const fn = function l() {
          return id.getId();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp6 = items;
        tmp7 = fn;
      } else {
        [tmp6, tmp7] = cResult;
      }
      const stateFromStores = initialize.useStateFromStores(tmp6, tmp7);
      const tmp10 = useIsWindowLargeDefault();
      if (route != null) {
        const params = route.params;
        if (params != null) {
          const inNestedNavigator = params.inNestedNavigator;
        }
      }
      let containerOuterTablet;
      if (tmp10) {
        containerOuterTablet = closure_17(useSafeAreaInsetsDefault().top).containerOuterTablet;
      }
      if (tmp10) {
        let Fragment = hasOwnProperty;
      } else {
        Fragment = noop.Fragment;
      }
      if (cResult[2] === tmp10) {
        if (cResult[3] === containerOuterTablet) {
          const _Symbol = Symbol;
          if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp16 = state(ThemedGradientDefault, { absolute: true });
            cResult[5] = tmp16;
            let tmp14 = tmp16;
          } else {
            tmp14 = cResult[5];
          }
          const _HermesInternal = HermesInternal;
          const combined = "" + stateFromStores;
          if (cResult[6] === inNestedNavigator) {
            if (cResult[7] === combined) {
              let tmp18 = cResult[8];
            }
            if (cResult[9] === tmp5) {
              if (cResult[10] === tmp18) {
                let tmp22 = cResult[11];
              }
              if (cResult[12] === Fragment) {
                if (cResult[13] === tmp13) {
                  if (cResult[14] === tmp22) {
                    let tmp25 = cResult[15];
                  }
                  return tmp25;
                }
              }
              const obj2 = { children: null };
              const obj3 = { children: null };
              const obj4 = {};
              const merged = Object.assign(tmp13);
              const items1 = [tmp14, tmp22];
              obj4.children = items1;
              obj3.children = value2(Fragment, obj4);
              obj2.children = state(ICYMIContext.ICYMIContextProvider, obj3);
              const tmp32 = state(AppFreezerDefault, obj2);
              cResult[12] = Fragment;
              cResult[13] = tmp13;
              cResult[14] = tmp22;
              cResult[15] = tmp32;
              tmp25 = tmp32;
              const tmp4Result = AppFreezerDefault;
            }
            const obj5 = { gradient: tmp5, children: tmp18 };
            const tmp24 = state(native.ThemeContextProvider, obj5);
            cResult[9] = tmp5;
            cResult[10] = tmp18;
            cResult[11] = tmp24;
            tmp22 = tmp24;
          }
          const obj6 = { inNestedNavigator };
          const tmp21 = state(ICYMI, obj6, combined);
          cResult[6] = inNestedNavigator;
          cResult[7] = combined;
          cResult[8] = tmp21;
          tmp18 = tmp21;
        }
      }
      if (tmp10) {
        const obj7 = { style: containerOuterTablet };
        let obj8 = obj7;
      } else {
        obj8 = {};
      }
      cResult[2] = tmp10;
      cResult[3] = containerOuterTablet;
      cResult[4] = obj8;
      const tmpResult = initialize;
    }
  : (route) => {
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
