// discord_app/modules/collectibles/native/useCollectiblesShopHeader.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import CollectiblesShopConstants from "../CollectiblesShopConstants.tsx";
import intl4 from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import QuestConstants from "../../quests/QuestConstants.tsx";
import CheckmarkSmallIcon3 from "../../../design/components/Icon/native/redesign/generated/CheckmarkSmallIcon.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import showUserProfileActionSheetDefault from "../../user_profile/native/showUserProfileActionSheet.tsx";
import Constants2 from "../../user_profile/Constants.tsx";
import ShopIcon from "../../../design/components/Icon/native/redesign/generated/ShopIcon.tsx";
import react from "../../../../_runtime/00019_react.js";
import UserStore from "../../../stores/UserStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let navigation;

let c10;
let obj2;
let obj3;
let unpackModuleId;
function CollectiblesShopHeaderRight(currentScreen) {
  let constants2;
  let constants3;
  let currentUser;
  let intl;
  let intl2;
  let items4;
  let tmp13Result;
  let tmp16;
  currentScreen = currentScreen.currentScreen;
  let balance;
  const tmp = closure_12();
  let obj = currentScreen(balance[15]);
  let items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser(), []);
  let obj2 = currentScreen(balance[16]);
  balance = obj2.useFetchVirtualCurrencyBalance().balance;
  let obj3 = currentScreen(balance[17]);
  const items1 = [currentScreen];
  const isEligibleForQuests = obj3.getIsEligibleForQuests();
  const items2 = [balance];
  const memo = react.useMemo(() => {
    let CheckmarkSmallIcon;
    let CheckmarkSmallIcon1;
    let CheckmarkSmallIcon2;
    let intl;
    let intl2;
    let intl3;
    let obj = {
      label: intl.string(intl4.t["xNiB/O"]),
      action() {
        let items;
        const obj = {
          analyticsLocations: items,
          analyticsSource: stateFromStores(balance[19]).COLLECTIBLES_SHOP_MOBILE_FEATURED_PAGE_MENU_ITEM,
          screen: constants.FEATURED_PAGE,
        };
        const openCollectiblesShopMobile = currentScreen(balance[18]).openCollectiblesShopMobile;
        items = [];
        currentScreen(balance[18]);
        items[0] = stateFromStores(balance[19]).COLLECTIBLES_SHOP_MOBILE_FEATURED_PAGE_MENU_ITEM;
        const result = openCollectiblesShopMobile(obj);
      },
      trailingIndicator: CheckmarkSmallIcon,
    };
    intl = intl4.intl;
    CheckmarkSmallIcon = undefined;
    if (currentScreen === constants.FEATURED_PAGE) {
      CheckmarkSmallIcon = CheckmarkSmallIcon3.CheckmarkSmallIcon;
    }
    let items = [obj, ,];
    const obj2 = {
      label: intl2.string(intl4.t.RSyoZu),
      action() {
        let items;
        const obj = {
          analyticsLocations: items,
          analyticsSource: stateFromStores(balance[19]).COLLECTIBLES_SHOP_MOBILE_SHOP_ALL_MENU_ITEM,
          screen: constants.SHOP_ALL,
        };
        const openCollectiblesShopMobile = currentScreen(balance[18]).openCollectiblesShopMobile;
        items = [];
        currentScreen(balance[18]);
        items[0] = stateFromStores(balance[19]).COLLECTIBLES_SHOP_MOBILE_SHOP_ALL_MENU_ITEM;
        const result = openCollectiblesShopMobile(obj);
      },
      trailingIndicator: CheckmarkSmallIcon1,
    };
    intl2 = intl4.intl;
    CheckmarkSmallIcon1 = undefined;
    if (currentScreen === constants.SHOP_ALL) {
      CheckmarkSmallIcon1 = CheckmarkSmallIcon3.CheckmarkSmallIcon;
    }
    items[1] = obj2;
    const obj3 = {
      label: intl3.string(intl4.t.EBYkzk),
      action() {
        let items;
        const obj = {
          analyticsLocations: items,
          analyticsSource: stateFromStores(balance[19]).COLLECTIBLES_SHOP_MOBILE_ORBS_MENU_ITEM,
          screen: constants.ORBS,
        };
        const openCollectiblesShopMobile = currentScreen(balance[18]).openCollectiblesShopMobile;
        items = [];
        currentScreen(balance[18]);
        items[0] = stateFromStores(balance[19]).COLLECTIBLES_SHOP_MOBILE_ORBS_MENU_ITEM;
        const result = openCollectiblesShopMobile(obj);
      },
      trailingIndicator: CheckmarkSmallIcon2,
    };
    intl3 = intl4.intl;
    CheckmarkSmallIcon2 = undefined;
    if (currentScreen === constants.ORBS) {
      CheckmarkSmallIcon2 = CheckmarkSmallIcon3.CheckmarkSmallIcon;
    }
    items[2] = obj3;
    return items;
  }, items1);
  const items3 = [currentScreen];
  let id;
  const callback = react.useCallback(() => {
    let intl;
    let intl2;
    let obj2;
    let obj3;
    let obj = {
      balance,
      primaryButtonConfig: obj2,
      secondaryButtonConfig: obj3,
      source: AnalyticsLocationDefault.COLLECTIBLES_SHOP,
    };
    obj2 = {
      buttonText: intl.string(intl4.t.SymzJC),
      onButtonPress() {
        const obj = stateFromStores(balance[24]);
        const obj2 = { type: "GO_TO_QUEST_HOME", source: stateFromStores(balance[19]).COLLECTIBLES_SHOP, balance };
        obj.track(constants2.ORB_BALANCE_ACTION_SHEET_ACTION, obj2);
        const obj3 = stateFromStores(balance[21]);
        obj3.hideActionSheet();
        const obj4 = currentScreen(balance[25]);
        const obj5 = {
          mergeExistingRoutes: true,
          filter: constants3.VIRTUAL_CURRENCY,
          fromContent: currentScreen(balance[26]).QuestContent.ORBS_BALANCE_MENU,
        };
        obj4.openQuestHome(obj5);
      },
    };
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    ActionSheetActionCreatorsDefault;
    intl = intl4.intl;
    obj3 = {
      buttonText: intl2.string(intl4.t["/g10LC"]),
      onButtonPress() {
        const obj = stateFromStores(balance[24]);
        const obj2 = { type: "GO_BACK", source: stateFromStores(balance[19]).COLLECTIBLES_SHOP, balance };
        obj.track(constants2.ORB_BALANCE_ACTION_SHEET_ACTION, obj2);
        const obj3 = stateFromStores(balance[21]);
        obj3.hideActionSheet();
      },
    };
    intl2 = intl4.intl;
    openLazy(
      () => {
        const promise = currentScreen(balance[23])(balance[22], balance.paths);
        return promise.then((result) => result.default);
      },
      "BalanceWidgetActionSheet",
      obj,
    );
  }, items2);
  const useCallback = react.useCallback;
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  items3[1] = id;
  let obj4 = { style: tmp.headerRightContainer, children: items4 };
  const callback1 = useCallback(() => {
    let items;
    let id;
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    if (null != id) {
      const obj2 = { cta_name: "wishlist header button", page_type: currentScreen };
      const obj = AnalyticsUtilsDefault;
      obj.track(AnalyticEvents.COLLECTIBLES_SHOP_ELEMENT_CLICKED, obj2);
      const obj3 = ModalActionCreatorsDefault;
      obj3.popAll();
      const obj4 = {
        userId: stateFromStores.id,
        sourceAnalyticsLocations: items,
        initialSection: UserProfileSections.WISHLIST,
      };
      items = [];
      const tmp9 = showUserProfileActionSheetDefault;
      items[0] = AnalyticsLocationDefault.COLLECTIBLES_SHOP;
      tmp9(obj4);
    }
  }, items3);
  const tmp2Result = currentScreen(balance[29]);
  if (isEligibleForQuests) {
    let obj5 = { balance, onPress: callback };
    tmp13Result = closure_10(tmp2Result.BalanceWidgetPillButton, obj5);
    tmp16 = closure_10;
  } else {
    const obj6 = { balance };
    tmp13Result = closure_10(tmp2Result.BalanceWidgetPill, obj6);
    tmp16 = closure_10;
  }
  items4 = [tmp13Result, ,];
  let tmp16Result = null != stateFromStores;
  if (tmp16Result) {
    const obj7 = {
      accessibilityLabel: intl.string(currentScreen(balance[13]).t["7lZ31J"]),
      variant: "tertiary",
      size: "sm",
      icon: tmp16(currentScreen(balance[31]).HeartIcon, { size: "sm", color: "redesign-button-tertiary-text" }),
      onPress: callback1,
    };
    let IconButton = tmp2(tmp3[30]).IconButton;
    intl = tmp2(tmp3[13]).intl;
    tmp16Result = tmp16(IconButton, obj7);
  }
  items4[1] = tmp16Result;
  const obj8 = {
    items: memo,
    align: "below",
    title: intl2.string(currentScreen(balance[13]).t.nSFuC0),
    keyboardShouldPersistTaps: "handled",
    children(ref) {
      let intl;
      const merged = Object.assign(ref, Object.assign({ ref: 0 }));
      const obj = {
        ref: ref.ref,
        variant: "tertiary",
        accessibilityLabel: intl.string(currentScreen(balance[13]).t.nSFuC0),
        size: "sm",
        icon: closure_1_10(currentScreen(balance[33]).MenuIcon, { size: "sm", color: "redesign-button-tertiary-text" }),
      };
      const IconButton = currentScreen(balance[30]).IconButton;
      const merged1 = Object.assign(merged);
      intl = currentScreen(balance[13]).intl;
      return closure_1_10(IconButton, obj);
    },
  };
  const ContextMenu = tmp2(tmp3[32]).ContextMenu;
  intl2 = tmp2(tmp3[13]).intl;
  items4[2] = tmp16(ContextMenu, obj8, currentScreen);
  return closure_11(View, obj4);
}
const View = react_native.View;
const constants = CollectiblesShopConstants.CollectiblesMobileShopScreen;
const AnalyticEvents = Constants.AnalyticEvents;
const RewardFilterTypes = QuestConstants.RewardFilterTypes;
const UserProfileSections = Constants2.UserProfileSections;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { headerTitleContainer: obj2, headerTitle: { flexShrink: 1 }, headerRightContainer: obj3 };
obj2 = {
  width: "100%",
  flexDirection: "row",
  alignItems: "center",
  marginTop: nativeDefault.space.PX_8,
  paddingLeft: nativeDefault.space.PX_8,
  gap: nativeDefault.space.PX_8,
};
createStyles = createStyles.createStyles;
obj3 = {
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  marginTop: nativeDefault.space.PX_8,
};
let closure_12 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? (currentScreen) => {
      let first;
      let items;
      let tmp8;
      const obj = react2;
      const cResult = obj.c(9);
      currentScreen = currentScreen.currentScreen;
      const tmp4 = closure_12();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp7 = authStore(ShopIcon.ShopIcon, { size: "md", color: "icon-strong" });
        cResult[0] = tmp7;
        first = tmp7;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== currentScreen) {
        let stringResult;
        if (currentScreen === constants.ORBS) {
          const intl2 = intl4.intl;
          stringResult = intl2.string(intl4.t.ElYQFS);
        } else {
          const intl = intl4.intl;
          stringResult = intl.string(intl4.t.pWG4ze);
        }
        cResult[1] = currentScreen;
        cResult[2] = stringResult;
        tmp8 = stringResult;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] === tmp4.headerTitle) {
        let tmp11;
        if (cResult[4] === tmp8) {
          tmp11 = cResult[5];
        }
        if (cResult[6] === tmp4.headerTitleContainer) {
          let tmp13;
          if (cResult[7] === tmp11) {
            tmp13 = cResult[8];
          }
          return tmp13;
        }
        const obj2 = { style: tmp4.headerTitleContainer, children: items };
        items = [first, tmp11];
        const tmp16 = unpackModuleId(View, obj2);
        cResult[6] = tmp4.headerTitleContainer;
        cResult[7] = tmp11;
        cResult[8] = tmp16;
        tmp13 = tmp16;
      }
      const obj3 = {
        variant: "redesign/heading-18/bold",
        color: "mobile-text-heading-primary",
        maxFontSizeMultiplier: 2,
        lineClamp: 1,
        style: tmp4.headerTitle,
        children: tmp8,
      };
      const tmp12 = authStore(Text_Text.Heading, obj3);
      cResult[3] = tmp4.headerTitle;
      cResult[4] = tmp8;
      cResult[5] = tmp12;
      tmp11 = tmp12;
    }
  : (currentScreen) => {
      let items;
      let stringResult;
      currentScreen = currentScreen.currentScreen;
      const tmp = closure_12();
      const obj = { style: tmp.headerTitleContainer, children: items };
      items = [authStore(ShopIcon.ShopIcon, { size: "md", color: "icon-strong" })];
      const obj2 = {
        variant: "redesign/heading-18/bold",
        color: "mobile-text-heading-primary",
        maxFontSizeMultiplier: 2,
        lineClamp: 1,
        style: tmp.headerTitle,
        children: stringResult,
      };
      const Heading = Text_Text.Heading;
      if (currentScreen === constants.ORBS) {
        const intl2 = intl4.intl;
        stringResult = intl2.string(intl4.t.ElYQFS);
      } else {
        const intl = intl4.intl;
        stringResult = intl.string(intl4.t.pWG4ze);
      }
      items[1] = authStore(Heading, obj2);
      return unpackModuleId(View, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let currentScreen;
      let tmp4;
      let obj = currentScreen(576);
      const cResult = obj.c(6);
      const tmp = currentScreen;
      if (cResult[0] !== arg0) {
        let obj2 = arg0;
        if (undefined === arg0) {
          obj2 = {};
        }
        cResult[0] = arg0;
        cResult[1] = obj2;
        tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      currentScreen = tmp4.currentScreen;
      const tmpResult = tmp(1490);
      navigation = tmpResult.useNavigation();
      if (cResult[2] === currentScreen) {
        let tmp6;
        let tmp7;
        if (cResult[3] === navigation) {
          tmp6 = cResult[4];
          tmp7 = cResult[5];
        }
        const layoutEffect = react.useLayoutEffect(tmp6, tmp7);
      }
      const fn = function c() {
        let obj = {
          headerTitle() {
            const obj = { currentScreen };
            return closure_2_10(closure_2_13, obj);
          },
          headerRight() {
            const obj = { currentScreen };
            return closure_2_10(CollectiblesShopHeaderRight, obj);
          },
        };
        navigation.setOptions(obj);
      };
      const items = [navigation, currentScreen];
      cResult[2] = currentScreen;
      cResult[3] = navigation;
      cResult[4] = fn;
      cResult[5] = items;
      tmp7 = items;
      tmp6 = fn;
    }
  : () => {
      let obj = arg0;
      if (arg0 === undefined) {
        obj = {};
      }
      const currentScreen = obj.currentScreen;
      const obj2 = currentScreen(1490);
      navigation = obj2.useNavigation();
      const items = [navigation, currentScreen];
      const layoutEffect = react.useLayoutEffect(() => {
        let obj = {
          headerTitle() {
            const obj = { currentScreen };
            return closure_2_10(closure_2_13, obj);
          },
          headerRight() {
            const obj = { currentScreen };
            return closure_2_10(CollectiblesShopHeaderRight, obj);
          },
        };
        navigation.setOptions(obj);
      }, items);
    };
let result = size.fileFinishedImporting("modules/collectibles/native/useCollectiblesShopHeader.tsx");

export default tmp4;
