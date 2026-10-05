// discord_app/modules/icymi/native/ICYMI.tsx
import get_initialized from "../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ChannelTypes from "../../../../discord_common/js/shared/shared-constants/ChannelTypes.tsx";
import intl3 from "../../../intl/index.native.tsx";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import DismissibleContentConstants from "../../dismissible_content/DismissibleContentConstants.tsx";
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
import IconButton2 from "../../../design/components/Button/native/IconButton.native.tsx";
import ICYMITypes from "../ICYMITypes.tsx";
import ICYMIActionCreatorsDefault from "../ICYMIActionCreators.tsx";
import FiltersHorizontalIcon from "../../../design/components/Icon/native/redesign/generated/FiltersHorizontalIcon.tsx";
import notifications_Notifications from "../../main_tabs_v2/native/tabs/notifications/Notifications.tsx";
import BackIconWithBadge from "../../main_tabs_v2/native/shared_components/BackIconWithBadge.tsx";
import ICYMIConstants from "../ICYMIConstants.tsx";
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
import ICYMIForumThreadRow2 from "ICYMIForumThreadRow.tsx";
import CardHeightMeasurer from "CardHeightMeasurer.tsx";
import AppFreezerDefault from "../../panels/morphable/native/AppFreezer.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import ICYMIFiltersStore from "../ICYMIFiltersStore.tsx";
import ICYMIStore from "../ICYMIStore.tsx";
import Fragment_mod from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import createICYMIStyles from "createICYMIStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, importDefault, item, route;

let closure_14;
let closure_15;
let closure_16;
let hasOwnProperty;
let metroRequire;
function SettingsButton() {
  let paths;
  let obj = {
    accessibilityLabel: "button",
    variant: "tertiary",
    size: "sm",
    icon: authStore2(FiltersHorizontalIcon.FiltersHorizontalIcon, { size: "sm" }),
    onPress() {
      const obj = require("ICYMIActionCreators");
      obj.itemInteracted("filters_button", "filters_button", "press_info_button");
      const obj2 = require("ICYMIActionCreators");
      obj2.feedPageActioned({
        actionParameters: {
          actionGestureType: "press",
          actionTargetElement: "settings_button",
          actionIntentType: "open",
          actionDestinationType: null,
        },
      });
      const obj3 = require("ActionSheetActionCreators");
      obj3.openLazy(require("asyncRequire")(paths[18], paths.paths), "ICYMISettingsActionSheet", {});
    },
  };
  const IconButton = IconButton2.IconButton;
  return authStore2(IconButton, obj);
}
function handleEndReached() {
  const obj = ICYMIStoreUtils;
  obj.hydrateNextPage();
}
function ICYMI(inNestedNavigator) {
  let data;
  let handleOnRefresh;
  let height;
  let intl;
  let isRefreshing;
  let items12;
  let items13;
  let items14;
  let items15;
  let loading;
  let num2;
  let obj18;
  let stickyHeaderIndices;
  let tmp32;
  let version;
  let viewabilityConfigCallbackPairs;
  let visibleItemIds;
  let width;
  let isFocused;
  let stateFromStores;
  visibleItemIds = undefined;
  handleOnRefresh = undefined;
  let stateFromStores2;
  let ref1;
  let stateFromStores3;
  let closure_11;
  inNestedNavigator = inNestedNavigator.inNestedNavigator;
  const tmp = closure_18();
  ({ height, width } = stateFromStores(visibleItemIds[35])());
  const tmp3 = stateFromStores(visibleItemIds[35])();
  const top = stateFromStores(visibleItemIds[36])().top;
  let obj = isFocused(visibleItemIds[37]);
  isFocused = obj.useIsFocused();
  const layoutEffect = handleOnRefresh.useLayoutEffect(() => {
    const obj = isFocused(visibleItemIds[38]);
    obj.trackAppUIViewed();
  });
  let obj2 = isFocused(visibleItemIds[39]);
  const items = [stateFromStores2];
  stateFromStores = obj2.useStateFromStores(items, () => stateFromStores2.useReducedMotion);
  let obj3 = isFocused(visibleItemIds[39]);
  const items1 = [closure_11];
  const stateFromStores1 = obj3.useStateFromStores(items1, () => closure_11.notificationItem(), []);
  const items2 = [isFocused];
  const showDot = stateFromStores(visibleItemIds[40])().showDot;
  const effect = handleOnRefresh.useEffect(() => {
    const obj = ICYMIActionCreatorsDefault;
    obj.setTabFocused(isFocused);
  }, items2);
  let obj4 = isFocused(visibleItemIds[41]);
  const sharedICYMILogic = obj4.useSharedICYMILogic({ showDot, notificationItem: stateFromStores1 });
  ({ loading, visibleItemIds } = sharedICYMILogic);
  const endVisible = sharedICYMILogic.endVisible;
  ({ isRefreshing, handleOnRefresh } = sharedICYMILogic);
  ({ data, version, stickyHeaderIndices, viewabilityConfigCallbackPairs } = sharedICYMILogic);
  let obj5 = isFocused(visibleItemIds[42]);
  const iCYMIEmptyLoadingAnalytics = obj5.useICYMIEmptyLoadingAnalytics(loading, isFocused);
  const useGetDismissibleContent = isFocused(visibleItemIds[43]).useGetDismissibleContent;
  const items3 = [];
  isFocused(visibleItemIds[43]);
  items3[0] = isFocused(visibleItemIds[44]).DismissibleContent.ICYMI_ALPHA_UPSELL;
  const tmp13 = endVisible(useGetDismissibleContent(items3), 2);
  const first = tmp13[0];
  let closure_6 = tmp15;
  let obj6 = isFocused(visibleItemIds[39]);
  const items4 = [ref1];
  stateFromStores2 = obj6.useStateFromStores(items4, () => ref1.getGuildCount());
  const items5 = [first, tmp13[1], stateFromStores2];
  const effect1 = handleOnRefresh.useEffect(() => {
    if (null != first) {
      const obj2 = { extendedOnboarding: stateFromStores2 <= closure_12 };
      const obj = NativeICYMIUtils;
      obj.pushICYMIInfoModal(obj2);
      closure_6(ContentDismissActionType.USER_DISMISS);
    }
  }, items5);
  const items6 = [endVisible];
  const effect2 = handleOnRefresh.useEffect(() => {
    const hasOpenedEnoughTimesResult = endVisible && ICYMIStore.hasOpenedEnoughTimes();
    if (hasOpenedEnoughTimesResult) {
      const obj = ActionSheetActionCreatorsDefault;
      obj.openLazy(asyncRequire(16419, dependencyMap.paths), "ICYMIFeedbackSheet", {});
    }
  }, items6);
  const ref = handleOnRefresh.useRef(null);
  let obj7 = {
    scrollToTop() {
      const current = ref.current;
      if (current != null) {
        const obj = { offset: 0, animated: !stateFromStores };
        current.scrollToOffset(obj);
      }
    },
  };
  ref1 = handleOnRefresh.useRef(obj7);
  const obj8 = isFocused(visibleItemIds[37]);
  const scrollToTop = obj8.useScrollToTop(ref1);
  const items7 = [stateFromStores3];
  const obj9 = isFocused(visibleItemIds[39]);
  stateFromStores3 = obj9.useStateFromStores(items7, () => stateFromStores3.getDoubleTapBehavior());
  const items8 = [stateFromStores3, ,];
  const obj10 = isFocused(visibleItemIds[46]);
  items8[1] = obj10.useNavigation();
  items8[2] = stateFromStores;
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
          const obj = isFocused(visibleItemIds[48]);
          obj.showForLaterModal(isFocused(visibleItemIds[49]).SavedMessageSortTypes.BOOKMARK);
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
  const items10 = [visibleItemIds, endVisible];
  const obj11 = isFocused(visibleItemIds[50]);
  const mobileQuestDockHeight = obj11.useMobileQuestDockHeight();
  const callback = handleOnRefresh.useCallback((item) => {
    let tmp7;
    item = item.item;
    const kind = item.data.kind;
    if ("message" === kind) {
      let tmp41;
      if (item.channelType === ChannelTypes.ChannelTypes.GUILD_ANNOUNCEMENT) {
        const obj2 = {
          unread: item.unread,
          message: item.data.message,
          visible: null != visibleItemIds.find((item) => item.item.id === item.id),
        };
        const tmp45 = AnnouncementMessageRowDefault;
        tmp41 = authStore2(tmp45, obj2);
      } else {
        const obj3 = {
          message: item.data.message,
          messageContext: item.data.messageContext,
          visible: null != visibleItemIds.find((item) => item.item.id === item.id),
        };
        const tmp38 = ICYMIMessageRowDefault;
        tmp41 = authStore2(tmp38, obj3);
      }
      tmp7 = tmp41;
    } else if ("contentInventory" === kind) {
      const obj4 = {
        visible: null != visibleItemIds.find((item) => item.item.id === item.id),
        content: item.data.content,
      };
      const tmp30 = ContentInventoryEntryRowDefault;
      tmp7 = authStore2(tmp30, obj4);
    } else if ("loading" === kind) {
      return authStore2(ICYMILoading.ICYMILoading, {});
    } else if ("bottomLoading" === kind) {
      return authStore2(ICYMIBottomLoading.ICYMIBottomLoading, {});
    } else if ("end" === kind) {
      const obj5 = { visible: endVisible };
      return authStore2(CaughtUpRowDefault, obj5);
    } else if ("guildEvent" === kind) {
      const obj6 = { eventId: item.data.eventId };
      tmp7 = authStore2(ICYMIGuildEventRowDefault, obj6);
    } else if ("recommendedGuilds" === kind) {
      tmp7 = authStore2(ICYMIServerRecommendationRow.ICYMIServerRecommendationRow, {});
    } else if ("icymiHeader" === kind) {
      return authStore2(ICYMIHeaderDefault, {});
    } else if ("forumThread" === kind) {
      const obj = {
        message: item.data.message,
        channel: item.data.threadChannel,
        visible: null != visibleItemIds.find((item) => item.item.id === item.id),
      };
      const ICYMIForumThreadRow = ICYMIForumThreadRow2.ICYMIForumThreadRow;
      tmp7 = authStore2(ICYMIForumThreadRow, obj);
    } else {
      return null;
    }
    const obj7 = { itemId: item.id, children: tmp7 };
    return authStore2(CardHeightMeasurer.CardHeightMeasurer, obj7);
  }, items10);
  const memo = handleOnRefresh.useMemo(() => ({ backgroundColor: "transparent" }), []);
  const obj12 = isFocused(visibleItemIds[63]);
  const clientThemesOverride = obj12.useClientThemesOverride();
  const items11 = [closure_11];
  let tmp30 = first;
  const obj14 = { style: items12, children: items13 };
  items12 = [,];
  ({ containerInPanels: arr13[0], containerBackground: arr13[1] } = tmp);
  const obj13 = isFocused(visibleItemIds[39]);
  const stateFromStores4 = obj13.useStateFromStores(items11, () => closure_11.hasNewContent(), []);
  items13 = [closure_14(closure_22, { inNestedNavigator })];
  const obj15 = { style: items14, children: items15 };
  items14 = [tmp.flashListWrapper, ,];
  size = { height: height - top - 32 - 24 - mobileQuestDockHeight, width, marginHorizontal: "auto" };
  items14[1] = size;
  items14[2] = clientThemesOverride;
  items15 = [, ,];
  const obj16 = {
    onPress() {
      const obj = ICYMIActionCreatorsDefault;
      obj.itemInteracted("refresh_button", "refresh_button", "press_refresh_button");
      const obj2 = ICYMIActionCreatorsDefault;
      obj2.feedPageActioned({
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
  items15[0] = closure_14(stateFromStores(visibleItemIds[64]), obj16);
  const obj17 = {
    ref,
    scrollEnabled: !loading,
    extraData: { endVisible },
    contentContainerStyle: memo,
    accessibilityLabel: intl.string(isFocused(visibleItemIds[25]).t.OIgYlQ),
    data,
    refreshing: isRefreshing,
    refreshControl: closure_14(tmp32, obj18),
    onEndReachedThreshold: 3,
    onEndReached: handleEndReached,
    keyExtractor,
    renderItem: callback,
    getItemType: isFocused(visibleItemIds[66]).itemToType,
    drawDistance: 100,
    stickyHeaderIndices,
    viewabilityConfigCallbackPairs,
  };
  const FlashList = isFocused(visibleItemIds[65]).FlashList;
  intl = isFocused(visibleItemIds[25]).intl;
  let num = 1;
  obj18 = {
    onRefresh: handleOnRefresh,
    refreshing: isRefreshing,
    tintColor: tmp.refreshing.color,
    style: { opacity: num2 },
  };
  num2 = 1;
  tmp32 = closure_6;
  if (stateFromStores4) {
    num2 = 0;
  }
  const tmp4Result = isFocused(visibleItemIds[67]);
  tmp4Result.isAndroid();
  if (!loading) {
    num = version;
  }
  items15[1] = closure_14(FlashList, obj17, "Version-" + num);
  items15[2] = closure_14(isFocused(visibleItemIds[68]).TTIFirstContentfulPaint, { label: "icymi" });
  items13[1] = closure_16(tmp30, obj15);
  return closure_16(tmp30, obj14);
}
function keyExtractor(id) {
  return id.id;
}
({ View: hasOwnProperty, RefreshControl: metroRequire } = react_native);
let closure_12 = ICYMIConstants.NUM_GUILDS_EXTENDED_ONBOARDING;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
let Fragment = Fragment_mod;
({ jsx: closure_14, Fragment: closure_15, jsxs: closure_16 } = Fragment);
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
  ({
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
    paddingHorizontal: nativeDefault.space.PX_8,
    overflow: "hidden",
    flex: 1,
    paddingTop,
  });
  return obj;
});
let closure_18 = createICYMIStyles.createICYMIStyles((margin) => {
  let obj7;
  let rect;
  let size1;
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
    containerBackground: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW },
    flashListWrapper: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, minHeight: 2, flex: 1 },
    refreshing: { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT },
    header: {
      backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
      position: "relative",
      overflow: "hidden",
      width: "100%",
    },
    headerLeft: { flexDirection: "row", alignItems: "center" },
    headerClose: size,
    headerTitle: obj7,
    headerText: { flexDirection: "row", alignItems: "center", gap: 4 },
    headerActions: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 },
    notificationBadge: size1,
    loading: { flex: 1, justifyContent: "center", paddingTop: nativeDefault.space.PX_96 },
    headerBorder: rect,
  };
  ({
    flex: 1,
    flexShrink: 1,
    flexGrow: 1,
    overflow: "hidden",
    borderTopLeftRadius: nativeDefault.radii.sm,
    borderTopRightRadius: nativeDefault.radii.sm,
  });
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW });
  ({ backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, minHeight: 2, flex: 1 });
  ({ color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT });
  ({
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    position: "relative",
    overflow: "hidden",
    width: "100%",
  });
  size = {
    marginRight: nativeDefault.space.PX_16,
    height: nativeDefault.space.PX_32,
    width: nativeDefault.space.PX_32,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: nativeDefault.radii.lg,
  };
  obj7 = {
    height: 56,
    marginHorizontal: margin.margin,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  };
  ({ flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 });
  size1 = { height: 18, width: 18, borderRadius: nativeDefault.radii.round };
  ({ flex: 1, justifyContent: "center", paddingTop: nativeDefault.space.PX_96 });
  rect = {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: nativeDefault.colors.BORDER_SUBTLE,
    height: 1,
  };
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let obj = react2;
      const cResult = obj.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = {
          accessibilityLabel: "button",
          variant: "tertiary",
          size: "sm",
          icon: authStore2(CircleInformationIcon.CircleInformationIcon, { size: "sm" }),
          onPress() {
            const obj = ICYMIActionCreatorsDefault;
            obj.itemInteracted("info_button", "info_button", "press_info_button");
            const obj2 = ICYMIActionCreatorsDefault;
            obj2.feedPageActioned({
              actionParameters: {
                actionGestureType: "press",
                actionTargetElement: "info_button",
                actionIntentType: "open",
                actionDestinationType: null,
              },
            });
            const obj3 = require("NativeICYMIUtils");
            obj3.pushICYMIInfoModal({ extendedOnboarding: true });
          },
        };
        const IconButton = IconButton2.IconButton;
        const tmp6 = authStore2(IconButton, obj2);
        cResult[0] = tmp6;
        first = tmp6;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : () => {
      let obj = {
        accessibilityLabel: "button",
        variant: "tertiary",
        size: "sm",
        icon: authStore2(CircleInformationIcon.CircleInformationIcon, { size: "sm" }),
        onPress() {
          const obj = ICYMIActionCreatorsDefault;
          obj.itemInteracted("info_button", "info_button", "press_info_button");
          const obj2 = ICYMIActionCreatorsDefault;
          obj2.feedPageActioned({
            actionParameters: {
              actionGestureType: "press",
              actionTargetElement: "info_button",
              actionIntentType: "open",
              actionDestinationType: null,
            },
          });
          const obj3 = require("NativeICYMIUtils");
          obj3.pushICYMIInfoModal({ extendedOnboarding: true });
        },
      };
      const IconButton = IconButton2.IconButton;
      return authStore2(IconButton, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let intl;
      let intl2;
      let items;
      let tmp13;
      let tmp8;
      const obj = react2;
      const cResult = obj.c(4);
      const tmp4 = closure_18();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = {
          color: "mobile-text-heading-primary",
          variant: "heading-lg/bold",
          maxFontSizeMultiplier: 1.75,
          accessibilityRole: "header",
          children: intl.string(intl3.t.SY4sdZ),
        };
        const Text = Text_Text.Text;
        intl = intl3.intl;
        const tmp7 = authStore2(Text, obj2);
        cResult[0] = tmp7;
        first = tmp7;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { children: items };
        items = [first];
        const obj4 = {
          color: "text-brand",
          variant: "text-xs/bold",
          style: { marginTop: 4 },
          children: intl2.string(intl3.t.Ac2OZA),
        };
        const Text2 = Text_Text.Text;
        intl2 = intl3.intl;
        items[1] = authStore2(Text2, obj4);
        const tmp12 = authStore3(closure_15, obj3);
        cResult[1] = tmp12;
        tmp8 = tmp12;
      } else {
        tmp8 = cResult[1];
      }
      if (cResult[2] !== tmp4.headerText) {
        const obj5 = { style: tmp4.headerText, children: tmp8 };
        const tmp16 = authStore2(hasOwnProperty, obj5);
        cResult[2] = tmp4.headerText;
        cResult[3] = tmp16;
        tmp13 = tmp16;
      } else {
        tmp13 = cResult[3];
      }
      return tmp13;
    }
  : () => {
      const tmp = closure_18();
      let obj = {
        style: tmp.headerText,
        children: react.useMemo(() => {
          let intl;
          let intl2;
          let items;
          const obj = { children: items };
          const obj2 = {
            color: "mobile-text-heading-primary",
            variant: "heading-lg/bold",
            maxFontSizeMultiplier: 1.75,
            accessibilityRole: "header",
            children: intl.string(require("intl").t.SY4sdZ),
          };
          const Text = require("Text/Text").Text;
          intl = require("intl").intl;
          items = [closure_1_14(Text, obj2)];
          const obj3 = {
            color: "text-brand",
            variant: "text-xs/bold",
            style: { marginTop: 4 },
            children: intl2.string(require("intl").t.Ac2OZA),
          };
          const Text2 = require("Text/Text").Text;
          intl2 = require("intl").intl;
          items[1] = closure_1_14(Text2, obj3);
          return closure_1_16(closure_1_15, obj);
        }, []),
      };
      return authStore2(hasOwnProperty, obj);
    };
let memo = react.memo;
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (inNestedNavigator) => {
        let first;
        let intl;
        let items;
        let items1;
        let items2;
        let items3;
        let obj3;
        let tmp14Result;
        let tmp14Result2;
        const obj = react2;
        const cResult = obj.c(24);
        inNestedNavigator = inNestedNavigator.inNestedNavigator;
        const tmp4 = closure_18();
        const tmp6 = useIsWindowLargeDefault();
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj2 = { absolute: true, wide: true, tall: true, mix: true, mixAmount: obj3 };
          obj3 = {
            dark: client_themes_ClientThemesUtils.OverlayOpacity.LEVEL_7,
            light: client_themes_ClientThemesUtils.OverlayOpacity.LEVEL_8,
          };
          const tmp5Result = ThemedGradientDefault;
          const tmp11 = authStore2(tmp5Result, obj2);
          cResult[0] = tmp11;
          first = tmp11;
        } else {
          first = cResult[0];
        }
        if (cResult[1] === inNestedNavigator) {
          if (cResult[2] === tmp6) {
            let tmp12;
            let tmp16;
            if (cResult[3] === tmp4.headerClose) {
              tmp12 = cResult[4];
            }
            const _Symbol = Symbol;
            if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp19 = authStore2(closure_21, {});
              cResult[5] = tmp19;
              tmp16 = tmp19;
            } else {
              tmp16 = cResult[5];
            }
            if (cResult[6] === tmp4.headerLeft) {
              let tmp20;
              let tmp25;
              let tmp24;
              let tmp31;
              if (cResult[7] === tmp12) {
                tmp20 = cResult[8];
              }
              const _Symbol2 = Symbol;
              if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
                const tmp28 = authStore2(closure_20, {});
                const tmp30 = authStore2(SettingsButton, {});
                cResult[9] = tmp28;
                cResult[10] = tmp30;
                tmp25 = tmp30;
                tmp24 = tmp28;
              } else {
                tmp24 = cResult[9];
                tmp25 = cResult[10];
              }
              if (cResult[11] !== tmp4.headerActions) {
                const obj4 = { style: tmp4.headerActions, children: items };
                items = [tmp24, tmp25];
                const tmp34 = authStore3(hasOwnProperty, obj4);
                cResult[11] = tmp4.headerActions;
                cResult[12] = tmp34;
                tmp31 = tmp34;
              } else {
                tmp31 = cResult[12];
              }
              if (cResult[13] === tmp4.headerTitle) {
                if (cResult[14] === tmp20) {
                  let tmp35;
                  let tmp39;
                  if (cResult[15] === tmp31) {
                    tmp35 = cResult[16];
                  }
                  if (cResult[17] !== tmp4.headerBorder) {
                    const obj5 = { style: tmp4.headerBorder };
                    const tmp42 = authStore2(hasOwnProperty, obj5);
                    cResult[17] = tmp4.headerBorder;
                    cResult[18] = tmp42;
                    tmp39 = tmp42;
                  } else {
                    tmp39 = cResult[18];
                  }
                  if (cResult[19] === tmp4.header) {
                    if (cResult[20] === !tmp6) {
                      if (cResult[21] === tmp39) {
                        let tmp43;
                        if (cResult[22] === tmp35) {
                          tmp43 = cResult[23];
                        }
                        return tmp43;
                      }
                    }
                  }
                  const obj6 = { top: !tmp6, style: tmp4.header, children: items1 };
                  items1 = [first, tmp35, tmp39];
                  const tmp45 = authStore3(common_SafeAreaView.SafeAreaPaddingView, obj6);
                  cResult[19] = tmp4.header;
                  cResult[20] = !tmp6;
                  cResult[21] = tmp39;
                  cResult[22] = tmp35;
                  cResult[23] = tmp45;
                  tmp43 = tmp45;
                }
              }
              const obj7 = { style: tmp4.headerTitle, children: items2 };
              items2 = [tmp20, tmp31];
              const tmp38 = authStore3(hasOwnProperty, obj7);
              cResult[13] = tmp4.headerTitle;
              cResult[14] = tmp20;
              cResult[15] = tmp31;
              cResult[16] = tmp38;
              tmp35 = tmp38;
            }
            const obj8 = { style: tmp4.headerLeft, children: items3 };
            items3 = [tmp12, tmp16];
            const tmp23 = authStore3(hasOwnProperty, obj8);
            cResult[6] = tmp4.headerLeft;
            cResult[7] = tmp12;
            cResult[8] = tmp23;
            tmp20 = tmp23;
          }
        }
        if (tmp6) {
          const obj9 = {
            style: tmp4.headerClose,
            accessibilityLabel: intl.string(intl3.t["13/7kX"]),
            onPress: notifications_Notifications.goBack,
            children: tmp14Result,
          };
          const PressableOpacity = Pressables.PressableOpacity;
          intl = intl3.intl;
          if (inNestedNavigator) {
            tmp14Result = authStore2(BackIconWithBadge.LeftBackIconWithBadge, { includeNotificationsCount: true });
          } else {
            tmp14Result = authStore2(XSmallIcon.XSmallIcon, { color: "interactive-text-default" });
          }
          tmp14Result2 = authStore2(PressableOpacity, obj9);
        } else {
          tmp14Result2 = null;
        }
        cResult[1] = inNestedNavigator;
        cResult[2] = tmp6;
        cResult[3] = tmp4.headerClose;
        cResult[4] = tmp14Result2;
        tmp12 = tmp14Result2;
      }
    : (inNestedNavigator) => {
        let intl;
        let items;
        let items1;
        let items2;
        let items3;
        let obj3;
        let tmp6Result;
        let tmp6Result2;
        inNestedNavigator = inNestedNavigator.inNestedNavigator;
        const tmp = closure_18();
        const tmp3 = useIsWindowLargeDefault();
        const obj = { top: !tmp3, style: tmp.header, children: items };
        const SafeAreaPaddingView = common_SafeAreaView.SafeAreaPaddingView;
        const obj2 = { absolute: true, wide: true, tall: true, mix: true, mixAmount: obj3 };
        obj3 = {
          dark: client_themes_ClientThemesUtils.OverlayOpacity.LEVEL_7,
          light: client_themes_ClientThemesUtils.OverlayOpacity.LEVEL_8,
        };
        const tmp7 = ThemedGradientDefault;
        items = [authStore2(tmp7, obj2), ,];
        const obj4 = { style: tmp.headerTitle, children: items2 };
        const obj5 = { style: tmp.headerLeft, children: items1 };
        if (tmp3) {
          const obj6 = {
            style: tmp.headerClose,
            accessibilityLabel: intl.string(intl3.t["13/7kX"]),
            onPress: notifications_Notifications.goBack,
            children: tmp6Result,
          };
          const PressableOpacity = Pressables.PressableOpacity;
          intl = intl3.intl;
          if (inNestedNavigator) {
            tmp6Result = authStore2(BackIconWithBadge.LeftBackIconWithBadge, { includeNotificationsCount: true });
          } else {
            tmp6Result = authStore2(XSmallIcon.XSmallIcon, { color: "interactive-text-default" });
          }
          tmp6Result2 = authStore2(PressableOpacity, obj6);
        } else {
          tmp6Result2 = null;
        }
        items1 = [tmp6Result2, authStore2(closure_21, {})];
        items2 = [authStore3(hasOwnProperty, obj5)];
        const obj7 = { style: tmp.headerActions, children: items3 };
        items3 = [authStore2(closure_20, {}), authStore2(SettingsButton, {})];
        items2[1] = authStore3(hasOwnProperty, obj7);
        items[1] = authStore3(hasOwnProperty, obj4);
        const obj8 = { style: tmp.headerBorder };
        items[2] = authStore2(hasOwnProperty, obj8);
        return authStore3(SafeAreaPaddingView, obj);
      },
);
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (route) => {
      let Fragment;
      let ICYMIContextProvider;
      let id;
      let inNestedNavigator;
      let items1;
      let obj3;
      let obj4;
      let obj8;
      let tmp6;
      let tmp7;
      const obj = react2;
      const cResult = obj.c(16);
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
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
      const tmp10 = useIsWindowLargeDefault();
      const top = useSafeAreaInsetsDefault().top;
      if (route != null) {
        const params = route.params;
        if (params != null) {
          inNestedNavigator = params.inNestedNavigator;
        }
      }
      let containerOuterTablet;
      if (tmp10) {
        containerOuterTablet = closure_17(top).containerOuterTablet;
      }
      if (tmp10) {
        Fragment = hasOwnProperty;
      } else {
        Fragment = react.Fragment;
      }
      if (cResult[2] === tmp10) {
        let tmp13;
        let tmp14;
        if (cResult[3] === containerOuterTablet) {
          tmp13 = cResult[4];
        }
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp16 = authStore2(ThemedGradientDefault, { absolute: true });
          cResult[5] = tmp16;
          tmp14 = tmp16;
        } else {
          tmp14 = cResult[5];
        }
        const _HermesInternal = HermesInternal;
        const combined = "" + stateFromStores;
        if (cResult[6] === inNestedNavigator) {
          let tmp18;
          if (cResult[7] === combined) {
            tmp18 = cResult[8];
          }
          if (cResult[9] === tmp5) {
            let tmp22;
            if (cResult[10] === tmp18) {
              tmp22 = cResult[11];
            }
            if (cResult[12] === Fragment) {
              if (cResult[13] === tmp13) {
                let tmp25;
                if (cResult[14] === tmp22) {
                  tmp25 = cResult[15];
                }
                return tmp25;
              }
            }
            const obj2 = { children: authStore2(ICYMIContextProvider, obj3) };
            obj3 = { children: authStore3(Fragment, obj4) };
            obj4 = { children: items1 };
            const tmp4Result = AppFreezerDefault;
            ICYMIContextProvider = ICYMIContext.ICYMIContextProvider;
            const merged = Object.assign(tmp13);
            items1 = [tmp14, tmp22];
            const tmp32 = authStore2(tmp4Result, obj2);
            cResult[12] = Fragment;
            cResult[13] = tmp13;
            cResult[14] = tmp22;
            cResult[15] = tmp32;
            tmp25 = tmp32;
          }
          const obj5 = { gradient: tmp5, children: tmp18 };
          const tmp24 = authStore2(native.ThemeContextProvider, obj5);
          cResult[9] = tmp5;
          cResult[10] = tmp18;
          cResult[11] = tmp24;
          tmp22 = tmp24;
        }
        const obj6 = { inNestedNavigator };
        const tmp21 = authStore2(ICYMI, obj6, combined);
        cResult[6] = inNestedNavigator;
        cResult[7] = combined;
        cResult[8] = tmp21;
        tmp18 = tmp21;
      }
      if (tmp10) {
        obj8 = { style: containerOuterTablet };
        const obj7 = { style: containerOuterTablet };
      } else {
        obj8 = {};
      }
      cResult[2] = tmp10;
      cResult[3] = containerOuterTablet;
      cResult[4] = obj8;
      tmp13 = obj8;
    }
  : (route) => {
      let closure_0;
      let id;
      let items2;
      let obj3;
      let obj5;
      let obj6;
      route = route.route;
      _require = undefined;
      importDefault = undefined;
      const items = [AuthenticationStore];
      const tmp3 = useColorThemeBackgroundDefault();
      const obj = require("get initialized");
      const stateFromStores = obj.useStateFromStores(items, () => id.getId());
      const tmp6 = useIsWindowLargeDefault();
      _require = tmp6;
      let inNestedNavigator;
      const top = useSafeAreaInsetsDefault().top;
      if (route != null) {
        const params = route.params;
        if (params != null) {
          inNestedNavigator = params.inNestedNavigator;
        }
      }
      const tmp8 = closure_17(top);
      importDefault = tmp8;
      const items1 = [tmp6, tmp8.containerOuterTablet];
      const memo = react.useMemo(() => {
        containerOuterTablet = undefined;
        if (closure_0) {
          containerOuterTablet = containerOuterTablet.containerOuterTablet;
        }
        return containerOuterTablet;
      }, items1);
      const tmp11 = tmp6 ? closure_5 : react.Fragment;
      const tmpResult = AppFreezerDefault;
      const ICYMIContextProvider = tmp4(16395).ICYMIContextProvider;
      if (tmp6) {
        obj3 = { style: memo };
        const obj2 = { style: memo };
      } else {
        obj3 = {};
      }
      const obj4 = { children: closure_14(ICYMIContextProvider, obj5) };
      obj5 = { children: closure_16(tmp11, obj6) };
      obj6 = { children: items2 };
      const merged = Object.assign(obj3);
      items2 = [closure_14(ThemedGradientDefault, { absolute: true })];
      const obj7 = { gradient: tmp3, children: closure_14(ICYMI, { inNestedNavigator }, "" + stateFromStores) };
      const ThemeContextProvider = tmp4(4589).ThemeContextProvider;
      items2[1] = closure_14(ThemeContextProvider, obj7);
      return closure_14(tmpResult, obj4);
    };
let size = size_mod;
const result = size.fileFinishedImporting("modules/icymi/native/ICYMI.tsx");

export const ICYMITab = tmp5;
