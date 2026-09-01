// discord_app/modules/collectibles/native/useCollectiblesShopHeader.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import ShopIcon from "../../../design/components/Icon/native/redesign/generated/ShopIcon.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_5 from "../../../stores/UserStore.tsx";
import { CollectiblesMobileShopScreen as closure_6 } from "../CollectiblesShopConstants.tsx";
import { AnalyticEvents } from "../../../Constants.tsx";
import { RewardFilterTypes } from "../../quests/QuestConstants.tsx";
import { UserProfileSections } from "../../user_profile/Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function CollectiblesShopHeaderTitle(currentScreen) {
  const tmp = callback2();
  let obj = { style: tmp.headerTitleContainer, children: null };
  const items = [callback(ShopIcon.ShopIcon, { size: "md", color: "icon-strong" })];
  obj = {
    variant: "redesign/heading-18/bold",
    color: "mobile-text-heading-primary",
    maxFontSizeMultiplier: 2,
    lineClamp: 1,
    style: tmp.headerTitle,
    children: null,
  };
  if (currentScreen.currentScreen === constants.ORBS) {
    const intl2 = tmp5(1236).intl;
    let stringResult = intl2.string(tmp5(1236).t.ElYQFS);
  } else {
    const intl = tmp5(1236).intl;
    stringResult = intl.string(tmp5(1236).t.pWG4ze);
  }
  obj[5] = stringResult;
  items[1] = callback(Text.Heading, obj);
  obj[1] = items;
  return closure_11(View, obj);
}
function CollectiblesShopHeaderRight(currentScreen) {
  currentScreen = currentScreen.currentScreen;
  let stateFromStores;
  let balance;
  let obj = currentScreen(balance[13]);
  let items = [closure_5];
  stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser(), []);
  obj1 = currentScreen(balance[14]);
  balance = obj1.useFetchVirtualCurrencyBalance().balance;
  let obj2 = currentScreen(balance[15]);
  const items1 = [currentScreen];
  const isEligibleForQuests = obj2.getIsEligibleForQuests();
  const items2 = [balance];
  const memo = React.useMemo(() => {
    let obj = { label: null, action: null, trailingIndicator: null };
    const intl = currentScreen(balance[12]).intl;
    obj[0] = intl.string(currentScreen(balance[12]).t["xNiB/O"]);
    obj[1] = function action() {
      let obj = callback(7286);
      obj = { analyticsLocations: null, analyticsSource: null, screen: null };
      const items = [callback2(5973).COLLECTIBLES_SHOP_MOBILE_FEATURED_PAGE_MENU_ITEM];
      obj[0] = items;
      obj[1] = callback2(5973).COLLECTIBLES_SHOP_MOBILE_FEATURED_PAGE_MENU_ITEM;
      obj[2] = constants.FEATURED_PAGE;
      const result = obj.openCollectiblesShopMobile(obj);
    };
    let CheckmarkSmallIcon;
    if (currentScreen === closure_1_6.FEATURED_PAGE) {
      CheckmarkSmallIcon = tmp(tmp2[18]).CheckmarkSmallIcon;
    }
    obj[2] = CheckmarkSmallIcon;
    let items = [obj, ,];
    obj = { label: null, action: null, trailingIndicator: null };
    const intl2 = tmp(tmp2[12]).intl;
    obj[0] = intl2.string(currentScreen(balance[12]).t.RSyoZu);
    obj[1] = function action() {
      let obj = callback(7286);
      obj = { analyticsLocations: null, analyticsSource: null, screen: null };
      const items = [callback2(5973).COLLECTIBLES_SHOP_MOBILE_SHOP_ALL_MENU_ITEM];
      obj[0] = items;
      obj[1] = callback2(5973).COLLECTIBLES_SHOP_MOBILE_SHOP_ALL_MENU_ITEM;
      obj[2] = constants.SHOP_ALL;
      const result = obj.openCollectiblesShopMobile(obj);
    };
    let CheckmarkSmallIcon1;
    if (currentScreen === closure_1_6.SHOP_ALL) {
      CheckmarkSmallIcon1 = tmp(tmp2[18]).CheckmarkSmallIcon;
    }
    obj[2] = CheckmarkSmallIcon1;
    items[1] = obj;
    obj = { label: null, action: null, trailingIndicator: null };
    const intl3 = tmp(tmp2[12]).intl;
    obj[0] = intl3.string(currentScreen(balance[12]).t.EBYkzk);
    obj[1] = function action() {
      let obj = callback(7286);
      obj = { analyticsLocations: null, analyticsSource: null, screen: null };
      const items = [callback2(5973).COLLECTIBLES_SHOP_MOBILE_ORBS_MENU_ITEM];
      obj[0] = items;
      obj[1] = callback2(5973).COLLECTIBLES_SHOP_MOBILE_ORBS_MENU_ITEM;
      obj[2] = constants.ORBS;
      const result = obj.openCollectiblesShopMobile(obj);
    };
    let CheckmarkSmallIcon2;
    if (currentScreen === closure_1_6.ORBS) {
      CheckmarkSmallIcon2 = tmp(tmp2[18]).CheckmarkSmallIcon;
    }
    obj[2] = CheckmarkSmallIcon2;
    items[2] = obj;
    return items;
  }, items1);
  const items3 = [currentScreen];
  let id;
  const callback = React.useCallback(() => {
    let obj = stateFromStores(balance[19]);
    obj = { balance, primaryButtonConfig: null, secondaryButtonConfig: null, source: null };
    obj = { buttonText: null, onButtonPress: null };
    const intl = currentScreen(balance[12]).intl;
    obj[0] = intl.string(currentScreen(balance[12]).t.SymzJC);
    obj[1] = function onButtonPress() {
      let obj = closure_1_1(closure_1_2[22]);
      obj = { type: "GO_TO_QUEST_HOME", source: closure_1_1(closure_1_2[17]).COLLECTIBLES_SHOP, balance: closure_2 };
      obj.track(closure_1_7.ORB_BALANCE_ACTION_SHEET_ACTION, obj);
      closure_1_1(closure_1_2[19]).hideActionSheet();
      const obj3 = closure_1_1(closure_1_2[19]);
      obj = {
        mergeExistingRoutes: true,
        filter: closure_1_8.VIRTUAL_CURRENCY,
        fromContent: closure_1_0(closure_1_2[24]).QuestContent.ORBS_BALANCE_MENU,
      };
      closure_1_0(closure_1_2[23]).openQuestHome(obj);
    };
    obj[1] = obj;
    obj1 = { buttonText: null, onButtonPress: null };
    const intl2 = currentScreen(balance[12]).intl;
    obj1[0] = intl2.string(currentScreen(balance[12]).t["/g10LC"]);
    obj1[1] = function onButtonPress() {
      let obj = closure_1_1(closure_1_2[22]);
      obj = { type: "GO_BACK", source: closure_1_1(closure_1_2[17]).COLLECTIBLES_SHOP, balance: closure_2 };
      obj.track(closure_1_7.ORB_BALANCE_ACTION_SHEET_ACTION, obj);
      closure_1_1(closure_1_2[19]).hideActionSheet();
    };
    obj[2] = obj1;
    obj[3] = stateFromStores(balance[17]).COLLECTIBLES_SHOP;
    obj.openLazy(
      () => callback(paths[21])(paths[20], paths.paths).then((arg0) => arg0.default),
      "BalanceWidgetActionSheet",
      obj,
    );
  }, items2);
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  items3[1] = id;
  obj = { style: callback2().headerRightContainer, children: null };
  const callback1 = React.useCallback(() => {
    let id;
    if (stateFromStores != null) {
      id = tmp.id;
    }
    if (null != id) {
      let obj = stateFromStores(balance[22]);
      obj = { cta_name: "wishlist header button", page_type: null };
      obj[1] = currentScreen;
      obj.track(closure_1_7.COLLECTIBLES_SHOP_ELEMENT_CLICKED, obj);
      stateFromStores(balance[25]).popAll();
      obj = { userId: null, sourceAnalyticsLocations: null, initialSection: null };
      obj[0] = tmp.id;
      const obj3 = stateFromStores(balance[25]);
      const items = [stateFromStores(balance[17]).COLLECTIBLES_SHOP];
      obj[1] = items;
      obj[2] = closure_1_9.WISHLIST;
      stateFromStores(balance[26])(obj);
      const tmp9 = stateFromStores(balance[26]);
    }
  }, items3);
  const tmp2Result = currentScreen(balance[27]);
  if (isEligibleForQuests) {
    obj = { balance: null, onPress: null };
    obj[0] = balance;
    obj[1] = callback;
    let tmp13Result = tmp13(tmp2Result.BalanceWidgetPillButton, obj);
    let tmp16 = tmp13;
  } else {
    obj1 = { balance: null };
    obj1[0] = balance;
    tmp13Result = tmp13(tmp2Result.BalanceWidgetPill, obj1);
    tmp16 = tmp13;
  }
  const items4 = [tmp13Result, ,];
  let tmp16Result = null != stateFromStores;
  if (tmp16Result) {
    obj2 = { accessibilityLabel: null, variant: "tertiary", size: "sm", icon: null, onPress: null };
    let intl = tmp2(tmp3[12]).intl;
    obj2[0] = intl.string(tmp2(tmp3[12]).t["7lZ31J"]);
    obj2[3] = tmp16(tmp2(tmp3[29]).HeartIcon, { size: "sm", color: "redesign-button-tertiary-text" });
    obj2[4] = callback1;
    tmp16Result = tmp16(tmp2(tmp3[28]).IconButton, obj2);
  }
  items4[1] = tmp16Result;
  let obj3 = { items: memo, align: "below", title: null, keyboardShouldPersistTaps: "handled", children: null };
  let intl2 = tmp2(tmp3[12]).intl;
  obj3[2] = intl2.string(currentScreen(balance[12]).t.nSFuC0);
  obj3[4] = function children(ref) {
    const merged = Object.assign(ref, Object.create(null));
    const obj = { ref: ref.ref };
    const merged1 = Object.assign(merged);
    obj.variant = "tertiary";
    const intl = currentScreen(balance[12]).intl;
    obj.accessibilityLabel = intl.string(currentScreen(balance[12]).t.nSFuC0);
    obj.size = "sm";
    obj.icon = callback(currentScreen(balance[31]).MenuIcon, { size: "sm", color: "redesign-button-tertiary-text" });
    return callback(currentScreen(balance[28]).IconButton, obj);
  };
  items4[2] = tmp16(currentScreen(balance[30]).ContextMenu, obj3, currentScreen);
  obj[1] = items4;
  return closure_11(View, obj);
}
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
createCacheKey = { headerTitleContainer: null, headerTitle: null, headerRightContainer: null };
createCacheKey = {
  width: "100%",
  flexDirection: "row",
  alignItems: "center",
  marginTop: ThemesDefault.space.PX_8,
  paddingLeft: ThemesDefault.space.PX_8,
  gap: ThemesDefault.space.PX_8,
};
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexShrink: 1 };
createCacheKey[2] = {
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: ThemesDefault.space.PX_8,
  marginTop: ThemesDefault.space.PX_8,
};
let closure_12 = createCacheKey.createStyles(createCacheKey);
let obj1 = {
  flexDirection: "row",
  justifyContent: "flex-end",
  alignItems: "center",
  gap: ThemesDefault.space.PX_8,
  marginTop: ThemesDefault.space.PX_8,
};
let result = require("set").fileFinishedImporting("modules/collectibles/native/useCollectiblesShopHeader.tsx");

export default function useCollectiblesShopHeader() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const currentScreen = obj.currentScreen;
  let navigation;
  navigation = currentScreen(1499).useNavigation();
  const items = [navigation, currentScreen];
  const layoutEffect = React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle() {
        return closure_1_10(closure_1_13, { currentScreen: closure_0 });
      },
      headerRight() {
        return closure_1_10(closure_1_14, { currentScreen: closure_0 });
      },
    });
  }, items);
}
