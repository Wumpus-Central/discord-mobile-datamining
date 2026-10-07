// discord_app/modules/collectibles/native/useCollectiblesShopHeader.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import CheckmarkSmallIcon3 from "../../../design/components/Icon/native/redesign/generated/CheckmarkSmallIcon.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import showUserProfileActionSheetDefault from "../../user_profile/native/showUserProfileActionSheet.tsx";
import ShopIcon from "../../../design/components/Icon/native/redesign/generated/ShopIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
function CollectiblesShopHeaderRight(currentScreen) {
  currentScreen = currentScreen.currentScreen;
  let balance;
  const tmp = closure_12();
  let items = [UserStore];
  const stateFromStores = currentScreen(balance[15]).useStateFromStores(items, () => currentUser.getCurrentUser(), []);
  let obj = currentScreen(balance[15]);
  balance = currentScreen(balance[16]).useFetchVirtualCurrencyBalance().balance;
  let obj2 = currentScreen(balance[16]);
  const items1 = [currentScreen];
  const isEligibleForQuests = currentScreen(balance[17]).getIsEligibleForQuests();
  const items2 = [balance];
  const memo = noop.useMemo(() => {
    const obj = { label: null, action: null, trailingIndicator: null };
    const intl = util.intl;
    obj.label = intl.string(util.t["xNiB/O"]);
    obj.action = function action() {
      const obj2 = { analyticsLocations: null, analyticsSource: null, screen: null };
      const items = [stateFromStores(6688).COLLECTIBLES_SHOP_MOBILE_FEATURED_PAGE_MENU_ITEM];
      obj2.analyticsLocations = items;
      obj2.analyticsSource = stateFromStores(6688).COLLECTIBLES_SHOP_MOBILE_FEATURED_PAGE_MENU_ITEM;
      obj2.screen = constants.FEATURED_PAGE;
      const result = currentScreen(7065).openCollectiblesShopMobile(obj2);
    };
    let CheckmarkSmallIcon;
    if (currentScreen === constants.FEATURED_PAGE) {
      CheckmarkSmallIcon = CheckmarkSmallIcon3.CheckmarkSmallIcon;
    }
    obj.trailingIndicator = CheckmarkSmallIcon;
    let items = [obj, ,];
    let obj2 = { label: null, action: null, trailingIndicator: null };
    const intl2 = util.intl;
    obj2.label = intl2.string(util.t.RSyoZu);
    obj2.action = function action() {
      const obj2 = { analyticsLocations: null, analyticsSource: null, screen: null };
      const items = [stateFromStores(6688).COLLECTIBLES_SHOP_MOBILE_SHOP_ALL_MENU_ITEM];
      obj2.analyticsLocations = items;
      obj2.analyticsSource = stateFromStores(6688).COLLECTIBLES_SHOP_MOBILE_SHOP_ALL_MENU_ITEM;
      obj2.screen = constants.SHOP_ALL;
      const result = currentScreen(7065).openCollectiblesShopMobile(obj2);
    };
    let CheckmarkSmallIcon1;
    if (currentScreen === constants.SHOP_ALL) {
      CheckmarkSmallIcon1 = CheckmarkSmallIcon3.CheckmarkSmallIcon;
    }
    obj2.trailingIndicator = CheckmarkSmallIcon1;
    items[1] = obj2;
    const obj3 = { label: null, action: null, trailingIndicator: null };
    const intl3 = util.intl;
    obj3.label = intl3.string(util.t.EBYkzk);
    obj3.action = function action() {
      const obj2 = { analyticsLocations: null, analyticsSource: null, screen: null };
      const items = [stateFromStores(6688).COLLECTIBLES_SHOP_MOBILE_ORBS_MENU_ITEM];
      obj2.analyticsLocations = items;
      obj2.analyticsSource = stateFromStores(6688).COLLECTIBLES_SHOP_MOBILE_ORBS_MENU_ITEM;
      obj2.screen = constants.ORBS;
      const result = currentScreen(7065).openCollectiblesShopMobile(obj2);
    };
    let CheckmarkSmallIcon2;
    if (currentScreen === constants.ORBS) {
      CheckmarkSmallIcon2 = CheckmarkSmallIcon3.CheckmarkSmallIcon;
    }
    obj3.trailingIndicator = CheckmarkSmallIcon2;
    items[2] = obj3;
    return items;
  }, items1);
  const items3 = [currentScreen];
  let id;
  const callback = noop.useCallback(() => {
    let obj2 = { balance, primaryButtonConfig: null, secondaryButtonConfig: null, source: null };
    let obj3 = { buttonText: null, onButtonPress: null };
    const intl = util.intl;
    obj3.buttonText = intl.string(util.t.SymzJC);
    obj3.onButtonPress = function onButtonPress() {
      const obj = stateFromStores(balance[24]);
      obj.track(constants2.ORB_BALANCE_ACTION_SHEET_ACTION, {
        type: "GO_TO_QUEST_HOME",
        source: stateFromStores(balance[19]).COLLECTIBLES_SHOP,
        balance,
      });
      const obj2 = { type: "GO_TO_QUEST_HOME", source: stateFromStores(balance[19]).COLLECTIBLES_SHOP, balance };
      stateFromStores(balance[21]).hideActionSheet();
      const obj3 = stateFromStores(balance[21]);
      const obj4 = currentScreen(balance[25]);
      obj4.openQuestHome({
        mergeExistingRoutes: true,
        filter: constants3.VIRTUAL_CURRENCY,
        fromContent: currentScreen(balance[26]).QuestContent.ORBS_BALANCE_MENU,
      });
    };
    obj2.primaryButtonConfig = obj3;
    let obj4 = { buttonText: null, onButtonPress: null };
    const intl2 = util.intl;
    obj4.buttonText = intl2.string(util.t["/g10LC"]);
    obj4.onButtonPress = function onButtonPress() {
      const obj = stateFromStores(balance[24]);
      obj.track(constants2.ORB_BALANCE_ACTION_SHEET_ACTION, {
        type: "GO_BACK",
        source: stateFromStores(balance[19]).COLLECTIBLES_SHOP,
        balance,
      });
      const obj2 = { type: "GO_BACK", source: stateFromStores(balance[19]).COLLECTIBLES_SHOP, balance };
      stateFromStores(balance[21]).hideActionSheet();
    };
    obj2.secondaryButtonConfig = obj4;
    obj2.source = AnalyticsLocationDefault.COLLECTIBLES_SHOP;
    ActionSheetActionCreatorsDefault.openLazy(
      () => currentScreen(balance[23])(balance[22], balance.paths).then((result) => result.default),
      "BalanceWidgetActionSheet",
      obj2,
    );
  }, items2);
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  items3[1] = id;
  let obj4 = { style: tmp.headerRightContainer, children: null };
  const callback1 = noop.useCallback(() => {
    let id;
    if (stateFromStores != null) {
      id = stateFromStores.id;
    }
    if (null != id) {
      const obj2 = { cta_name: "wishlist header button", page_type: currentScreen };
      AnalyticsUtilsDefault.track(AnalyticEvents.COLLECTIBLES_SHOP_ELEMENT_CLICKED, obj2);
      ModalActionCreatorsDefault.popAll();
      const obj4 = { userId: stateFromStores.id, sourceAnalyticsLocations: null, initialSection: null };
      const items = [AnalyticsLocationDefault.COLLECTIBLES_SHOP];
      obj4.sourceAnalyticsLocations = items;
      obj4.initialSection = UserProfileSections.WISHLIST;
      showUserProfileActionSheetDefault(obj4);
    }
  }, items3);
  const tmp2Result = currentScreen(balance[29]);
  if (isEligibleForQuests) {
    const obj5 = { balance, onPress: callback };
    let tmp13Result = closure_10(tmp2Result.BalanceWidgetPillButton, obj5);
    let tmp16 = closure_10;
  } else {
    const obj6 = { balance };
    tmp13Result = closure_10(tmp2Result.BalanceWidgetPill, obj6);
    tmp16 = closure_10;
  }
  const items4 = [tmp13Result, ,];
  let tmp16Result = null != stateFromStores;
  if (tmp16Result) {
    const obj7 = { accessibilityLabel: null, variant: "tertiary", size: "sm", icon: null, onPress: null };
    let intl = tmp2(tmp3[13]).intl;
    obj7.accessibilityLabel = intl.string(tmp2(tmp3[13]).t["7lZ31J"]);
    obj7.icon = tmp16(tmp2(tmp3[31]).HeartIcon, { size: "sm", color: "redesign-button-tertiary-text" });
    obj7.onPress = callback1;
    tmp16Result = tmp16(tmp2(tmp3[30]).IconButton, obj7);
  }
  items4[1] = tmp16Result;
  const obj8 = { items: memo, align: "below", title: null, keyboardShouldPersistTaps: "handled", children: null };
  let intl2 = tmp2(tmp3[13]).intl;
  obj8.title = intl2.string(currentScreen(balance[13]).t.nSFuC0);
  obj8.children = function children(ref) {
    const merged = Object.assign(ref, Object.assign({ ref: 0 }));
    const obj = { ref: ref.ref };
    const merged1 = Object.assign(merged);
    obj.variant = "tertiary";
    const intl = currentScreen(balance[13]).intl;
    obj.accessibilityLabel = intl.string(currentScreen(balance[13]).t.nSFuC0);
    obj.size = "sm";
    obj.icon = closure_1_10(currentScreen(balance[33]).MenuIcon, {
      size: "sm",
      color: "redesign-button-tertiary-text",
    });
    return closure_1_10(currentScreen(balance[30]).IconButton, obj);
  };
  items4[2] = tmp16(currentScreen(balance[32]).ContextMenu, obj8, currentScreen);
  obj4.children = items4;
  return closure_11(View, obj4);
}
const View = fn(17).View;
const constants = fn(1087).CollectiblesMobileShopScreen;
const AnalyticEvents = fn(1085).AnalyticEvents;
const RewardFilterTypes = fn(5630).RewardFilterTypes;
const UserProfileSections = fn(7865).UserProfileSections;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4896);
let obj2 = {
  headerTitleContainer: {
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
    marginTop: nativeDefault.space.PX_8,
    paddingLeft: nativeDefault.space.PX_8,
    gap: nativeDefault.space.PX_8,
  },
  headerTitle: { flexShrink: 1 },
  headerRightContainer: null,
};
let obj3 = {
  width: "100%",
  flexDirection: "row",
  alignItems: "center",
  marginTop: nativeDefault.space.PX_8,
  paddingLeft: nativeDefault.space.PX_8,
  gap: nativeDefault.space.PX_8,
};
obj2.headerRightContainer = {
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  marginTop: nativeDefault.space.PX_8,
};
let closure_12 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? (currentScreen) => {
      const cResult = c.c(9);
      currentScreen = currentScreen.currentScreen;
      const tmp4 = closure_12();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp7 = v65535(ShopIcon.ShopIcon, { size: "md", color: "icon-strong" });
        cResult[0] = tmp7;
        let first = tmp7;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== currentScreen) {
        if (currentScreen === constants.ORBS) {
          const intl2 = util.intl;
          let stringResult = intl2.string(util.t.ElYQFS);
        } else {
          const intl = util.intl;
          stringResult = intl.string(util.t.pWG4ze);
        }
        cResult[1] = currentScreen;
        cResult[2] = stringResult;
      } else {
        if (cResult[3] === tmp4.headerTitle) {
          if (cResult[4] === tmp8) {
            let tmp12 = cResult[5];
          }
          if (cResult[6] === tmp4.headerTitleContainer) {
            if (cResult[7] === tmp12) {
              let tmp15 = cResult[8];
            }
            return tmp15;
          }
          const obj2 = { style: tmp4.headerTitleContainer, children: null };
          const items = [first, tmp12];
          obj2.children = items;
          const tmp18 = closure_1_11(View, obj2);
          cResult[6] = tmp4.headerTitleContainer;
          cResult[7] = tmp12;
          cResult[8] = tmp18;
          tmp15 = tmp18;
        }
        const obj3 = {
          variant: "redesign/heading-18/bold",
          color: "mobile-text-heading-primary",
          maxFontSizeMultiplier: 2,
          lineClamp: 1,
          style: tmp4.headerTitle,
          children: cResult[2],
        };
        const tmp14 = v65535(Text_Text.Heading, obj3);
        cResult[3] = tmp4.headerTitle;
        cResult[4] = cResult[2];
        cResult[5] = tmp14;
        tmp12 = tmp14;
      }
    }
  : (currentScreen) => {
      const tmp = closure_12();
      const obj = { style: tmp.headerTitleContainer, children: null };
      const items = [v65535(ShopIcon.ShopIcon, { size: "md", color: "icon-strong" })];
      const obj2 = {
        variant: "redesign/heading-18/bold",
        color: "mobile-text-heading-primary",
        maxFontSizeMultiplier: 2,
        lineClamp: 1,
        style: tmp.headerTitle,
        children: null,
      };
      if (currentScreen.currentScreen === constants.ORBS) {
        const intl2 = util.intl;
        let stringResult = intl2.string(util.t.ElYQFS);
      } else {
        const intl = util.intl;
        stringResult = intl.string(util.t.pWG4ze);
      }
      obj2.children = stringResult;
      items[1] = v65535(Text_Text.Heading, obj2);
      obj.children = items;
      return closure_1_11(View, obj);
    };
ReactCompilerGating = fn(558);
let obj4 = {
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: nativeDefault.space.PX_8,
  marginTop: nativeDefault.space.PX_8,
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/useCollectiblesShopHeader.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = currentScreen(576).c(6);
      if (cResult[0] !== arg0) {
        let obj2 = arg0;
        if (undefined === arg0) {
          obj2 = {};
        }
        cResult[0] = arg0;
        cResult[1] = obj2;
        let tmp4 = obj2;
      } else {
        tmp4 = cResult[1];
      }
      currentScreen = tmp4.currentScreen;
      const obj = currentScreen(576);
      const navigation = currentScreen(1490).useNavigation();
      if (cResult[2] === currentScreen) {
        if (cResult[3] === navigation) {
          let tmp6 = cResult[4];
          let tmp7 = cResult[5];
        }
        const layoutEffect = noop.useLayoutEffect(tmp6, tmp7);
      }
      const fn = function c() {
        navigation.setOptions({
          headerTitle() {
            return closure_2_10(closure_2_13, { currentScreen });
          },
          headerRight() {
            return closure_2_10(CollectiblesShopHeaderRight, { currentScreen });
          },
        });
      };
      const items = [navigation, currentScreen];
      cResult[2] = currentScreen;
      cResult[3] = navigation;
      cResult[4] = fn;
      cResult[5] = items;
      tmp7 = items;
      tmp6 = fn;
      const tmpResult = currentScreen(1490);
    }
  : () => {
      let obj = arg0;
      if (arg0 === undefined) {
        obj = {};
      }
      const currentScreen = obj.currentScreen;
      const navigation = currentScreen(1490).useNavigation();
      const items = [navigation, currentScreen];
      const layoutEffect = noop.useLayoutEffect(() => {
        navigation.setOptions({
          headerTitle() {
            return closure_2_10(closure_2_13, { currentScreen });
          },
          headerRight() {
            return closure_2_10(CollectiblesShopHeaderRight, { currentScreen });
          },
        });
      }, items);
    };
