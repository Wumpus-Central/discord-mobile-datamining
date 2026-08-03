import ref from "ref";
import { View } from "CheckmarkSmallIcon";
import mergeGuildAvatar from "mergeGuildAvatar";
import { CollectiblesMobileShopScreen as closure_6 } from "items";
import { AnalyticEvents } from "ME";
import { RewardFilterTypes } from "QuestsExperimentLocations";
import { UserProfileSections } from "USER_PROFILE_TOOLTIP_DELAY";
import jsxProd from "expandEventProperties";
import createCacheKey from "createCacheKey";

let c10;
let unpackModuleId;
const require = arg1;
function CollectiblesShopHeaderTitle(currentScreen) {
  const tmp = createCacheKey();
  let obj = { style: tmp.headerTitleContainer, children: null };
  const items = [callback(require(11329) /* ShopIcon */.ShopIcon, { size: "md", color: "icon-strong" }), ];
  obj = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", maxFontSizeMultiplier: 2, lineClamp: 1, style: tmp.headerTitle, children: null };
  if (currentScreen.currentScreen === constants.ORBS) {
    const intl2 = tmp5(1236).intl;
    let stringResult = intl2.string(tmp5(1236).t.ElYQFS);
  } else {
    const intl = tmp5(1236).intl;
    stringResult = intl.string(tmp5(1236).t.pWG4ze);
  }
  obj[5] = stringResult;
  items[1] = callback(require(4189) /* Text */.Heading, obj);
  obj[1] = items;
  return closure_11(View, obj);
}
function CollectiblesShopHeaderRight(currentScreen) {
  currentScreen = currentScreen.currentScreen;
  let stateFromStores;
  let balance;
  let obj = currentScreen(balance[13]);
  let items = [mergeGuildAvatar];
  stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser(), []);
  let obj1 = currentScreen(balance[14]);
  balance = obj1.useFetchVirtualCurrencyBalance().balance;
  const items1 = [currentScreen];
  const items2 = [balance];
  const memo = React.useMemo(() => {
    let obj = { label: null, action: null, trailingIndicator: null };
    const intl = currentScreen(balance[12]).intl;
    obj[0] = intl.string(currentScreen(balance[12]).t["xNiB/O"]);
    obj[1] = function action() {
      let obj = callback(5802);
      obj = { analyticsLocations: null, analyticsSource: null, screen: null };
      const items = [callback2(5539).COLLECTIBLES_SHOP_MOBILE_FEATURED_PAGE_MENU_ITEM];
      obj[0] = items;
      obj[1] = callback2(5539).COLLECTIBLES_SHOP_MOBILE_FEATURED_PAGE_MENU_ITEM;
      obj[2] = constants.FEATURED_PAGE;
      const result = obj.openCollectiblesShopMobile(obj);
    };
    let CheckmarkSmallIcon;
    if (currentScreen === outer1_6.FEATURED_PAGE) {
      CheckmarkSmallIcon = tmp(tmp2[17]).CheckmarkSmallIcon;
    }
    obj[2] = CheckmarkSmallIcon;
    let items = [obj, , ];
    obj = { label: null, action: null, trailingIndicator: null };
    const intl2 = tmp(tmp2[12]).intl;
    obj[0] = intl2.string(currentScreen(balance[12]).t.RSyoZu);
    obj[1] = function action() {
      let obj = callback(5802);
      obj = { analyticsLocations: null, analyticsSource: null, screen: null };
      const items = [callback2(5539).COLLECTIBLES_SHOP_MOBILE_SHOP_ALL_MENU_ITEM];
      obj[0] = items;
      obj[1] = callback2(5539).COLLECTIBLES_SHOP_MOBILE_SHOP_ALL_MENU_ITEM;
      obj[2] = constants.SHOP_ALL;
      const result = obj.openCollectiblesShopMobile(obj);
    };
    let CheckmarkSmallIcon1;
    if (currentScreen === outer1_6.SHOP_ALL) {
      CheckmarkSmallIcon1 = tmp(tmp2[17]).CheckmarkSmallIcon;
    }
    obj[2] = CheckmarkSmallIcon1;
    items[1] = obj;
    obj = { label: null, action: null, trailingIndicator: null };
    const intl3 = tmp(tmp2[12]).intl;
    obj[0] = intl3.string(currentScreen(balance[12]).t.EBYkzk);
    obj[1] = function action() {
      let obj = callback(5802);
      obj = { analyticsLocations: null, analyticsSource: null, screen: null };
      const items = [callback2(5539).COLLECTIBLES_SHOP_MOBILE_ORBS_MENU_ITEM];
      obj[0] = items;
      obj[1] = callback2(5539).COLLECTIBLES_SHOP_MOBILE_ORBS_MENU_ITEM;
      obj[2] = constants.ORBS;
      const result = obj.openCollectiblesShopMobile(obj);
    };
    let CheckmarkSmallIcon2;
    if (currentScreen === outer1_6.ORBS) {
      CheckmarkSmallIcon2 = tmp(tmp2[17]).CheckmarkSmallIcon;
    }
    obj[2] = CheckmarkSmallIcon2;
    items[2] = obj;
    return items;
  }, items1);
  const items3 = [currentScreen, ];
  let id;
  const callback = React.useCallback(() => {
    let obj = stateFromStores(balance[18]);
    obj = { balance, primaryButtonConfig: null, secondaryButtonConfig: null, source: null };
    obj = { buttonText: null, onButtonPress: null };
    const intl = currentScreen(balance[12]).intl;
    obj[0] = intl.string(currentScreen(balance[12]).t.SymzJC);
    obj[1] = function onButtonPress() {
      let obj = outer1_1(outer1_2[21]);
      obj = { type: "GO_TO_QUEST_HOME", source: outer1_1(outer1_2[16]).COLLECTIBLES_SHOP, balance: closure_2 };
      obj.track(outer1_7.ORB_BALANCE_ACTION_SHEET_ACTION, obj);
      outer1_1(outer1_2[18]).hideActionSheet();
      const obj3 = outer1_1(outer1_2[18]);
      obj = { mergeExistingRoutes: true, filter: outer1_8.VIRTUAL_CURRENCY, fromContent: outer1_0(outer1_2[23]).QuestContent.ORBS_BALANCE_MENU };
      outer1_0(outer1_2[22]).openQuestHome(obj);
    };
    obj[1] = obj;
    const obj1 = { buttonText: null, onButtonPress: null };
    const intl2 = currentScreen(balance[12]).intl;
    obj1[0] = intl2.string(currentScreen(balance[12]).t["/g10LC"]);
    obj1[1] = function onButtonPress() {
      let obj = outer1_1(outer1_2[21]);
      obj = { type: "GO_BACK", source: outer1_1(outer1_2[16]).COLLECTIBLES_SHOP, balance: closure_2 };
      obj.track(outer1_7.ORB_BALANCE_ACTION_SHEET_ACTION, obj);
      outer1_1(outer1_2[18]).hideActionSheet();
    };
    obj[2] = obj1;
    obj[3] = stateFromStores(balance[16]).COLLECTIBLES_SHOP;
    obj.openLazy(() => callback(paths[20])(paths[19], paths.paths).then((arg0) => arg0.default), "BalanceWidgetActionSheet", obj);
  }, items2);
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  items3[1] = id;
  obj = { style: createCacheKey().headerRightContainer, children: null };
  const callback1 = React.useCallback(() => {
    let id;
    if (stateFromStores != null) {
      id = tmp.id;
    }
    if (null != id) {
      let obj = stateFromStores(balance[21]);
      obj = { cta_name: "wishlist header button", page_type: null };
      obj[1] = currentScreen;
      obj.track(outer1_7.COLLECTIBLES_SHOP_ELEMENT_CLICKED, obj);
      stateFromStores(balance[24]).popAll();
      obj = { userId: null, sourceAnalyticsLocations: null, initialSection: null };
      obj[0] = tmp.id;
      const obj3 = stateFromStores(balance[24]);
      const items = [stateFromStores(balance[16]).COLLECTIBLES_SHOP];
      obj[1] = items;
      obj[2] = outer1_9.WISHLIST;
      stateFromStores(balance[25])(obj);
      const tmp9 = stateFromStores(balance[25]);
    }
  }, items3);
  const items4 = [callback(currentScreen(balance[26]).BalanceWidgetPillButton, { balance, onPress: callback }), , ];
  let tmp12Result = null != stateFromStores;
  if (tmp12Result) {
    obj = { accessibilityLabel: null, variant: "tertiary", size: "sm", icon: null, onPress: null };
    let intl = tmp2(tmp3[12]).intl;
    obj[0] = intl.string(tmp2(tmp3[12]).t["7lZ31J"]);
    obj[3] = tmp12(tmp2(tmp3[28]).HeartIcon, { size: "sm", color: "redesign-button-tertiary-text" });
    obj[4] = callback1;
    tmp12Result = tmp12(tmp2(tmp3[27]).IconButton, obj);
  }
  items4[1] = tmp12Result;
  obj1 = { items: memo, align: "below", title: null, keyboardShouldPersistTaps: "handled", children: null };
  let intl2 = tmp2(tmp3[12]).intl;
  obj1[2] = intl2.string(currentScreen(balance[12]).t.nSFuC0);
  obj1[4] = function children(ref) {
    const merged = Object.assign(ref, Object.create(null));
    const obj = { ref: ref.ref };
    const merged1 = Object.assign(merged);
    obj.variant = "tertiary";
    const intl = currentScreen(balance[12]).intl;
    obj.accessibilityLabel = intl.string(currentScreen(balance[12]).t.nSFuC0);
    obj.size = "sm";
    obj.icon = callback(currentScreen(balance[30]).MenuIcon, { size: "sm", color: "redesign-button-tertiary-text" });
    return callback(currentScreen(balance[27]).IconButton, obj);
  };
  items4[2] = callback(currentScreen(balance[29]).ContextMenu, obj1, currentScreen);
  obj[1] = items4;
  return closure_11(View, obj);
}
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
createCacheKey = { headerTitleContainer: null, headerTitle: null, headerRightContainer: null };
createCacheKey = { width: "100%", flexDirection: "row", alignItems: "center", marginTop: require("Themes").space.PX_8, paddingLeft: require("Themes").space.PX_8, gap: require("Themes").space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flexShrink: 1 };
createCacheKey[2] = { flexDirection: "row", justifyContent: "flex-end", alignItems: "center", gap: require("Themes").space.PX_8, marginTop: require("Themes").space.PX_8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { flexDirection: "row", justifyContent: "flex-end", alignItems: "center", gap: require("Themes").space.PX_8, marginTop: require("Themes").space.PX_8 };
let result = require("mergeGuildAvatar").fileFinishedImporting("modules/collectibles/native/useCollectiblesShopHeader.tsx");

export default function useCollectiblesShopHeader() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const currentScreen = obj.currentScreen;
  let navigation;
  navigation = currentScreen(1480).useNavigation();
  const items = [navigation, currentScreen];
  const layoutEffect = React.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle() {
        return outer1_10(outer1_13, { currentScreen: closure_0 });
      },
      headerRight() {
        return outer1_10(outer1_14, { currentScreen: closure_0 });
      }
    });
  }, items);
};