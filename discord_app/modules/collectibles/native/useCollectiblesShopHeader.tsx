// === Module 15837: useCollectiblesShopHeader ===

// Module 15837 (useCollectiblesShopHeader)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import Text_Text from "Text/Text" /* 4556 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7182 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8179 */;
import ShopIcon from "ShopIcon" /* 12138 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function CollectiblesShopHeaderTitle(currentScreen) {
  const tmp = closure_12();
  let obj = { style: tmp.headerTitleContainer, children: null };
  const items = [closure_1_10(ShopIcon.ShopIcon, { size: "md", color: "icon-strong" }), ];
  obj = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", maxFontSizeMultiplier: 2, lineClamp: 1, style: tmp.headerTitle, children: null };
  if (currentScreen.currentScreen === constants.ORBS) {
    const intl2 = tmp5(1114).intl;
    let stringResult = intl2.string(tmp5(1114).t.ElYQFS);
  } else {
    const intl = tmp5(1114).intl;
    stringResult = intl.string(tmp5(1114).t.pWG4ze);
  }
  obj.children = stringResult;
  items[1] = closure_1_10(Text_Text.Heading, obj);
  obj.children = items;
  return closure_1_11(View, obj);
}
function CollectiblesShopHeaderRight(currentScreen) {
  currentScreen = currentScreen.currentScreen;
  let balance;
  let obj = currentScreen(balance[13]);
  let items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser(), []);
  let obj1 = currentScreen(balance[14]);
  balance = obj1.useFetchVirtualCurrencyBalance().balance;
  let obj2 = currentScreen(balance[15]);
  const items1 = [currentScreen];
  const isEligibleForQuests = obj2.getIsEligibleForQuests();
  const items2 = [balance];
  const memo = noop.useMemo(() => {
    let obj = { label: null, action: null, trailingIndicator: null };
    const intl = util.intl;
    obj.label = intl.string(util.t["xNiB/O"]);
    obj.action = function action() {
      currentScreen(7541);
      const obj = { analyticsLocations: null, analyticsSource: null, screen: null };
      const items = [stateFromStores(7182).COLLECTIBLES_SHOP_MOBILE_FEATURED_PAGE_MENU_ITEM];
      obj.analyticsLocations = items;
      obj.analyticsSource = stateFromStores(7182).COLLECTIBLES_SHOP_MOBILE_FEATURED_PAGE_MENU_ITEM;
      obj.screen = constants.FEATURED_PAGE;
      const result = obj.openCollectiblesShopMobile(obj);
    };
    let CheckmarkSmallIcon;
    if (currentScreen === constants.FEATURED_PAGE) {
      CheckmarkSmallIcon = tmp(7133).CheckmarkSmallIcon;
    }
    obj.trailingIndicator = CheckmarkSmallIcon;
    let items = [obj, , ];
    obj = { label: null, action: null, trailingIndicator: null };
    const intl2 = tmp(1114).intl;
    obj.label = intl2.string(util.t.RSyoZu);
    obj.action = function action() {
      currentScreen(7541);
      const obj = { analyticsLocations: null, analyticsSource: null, screen: null };
      const items = [stateFromStores(7182).COLLECTIBLES_SHOP_MOBILE_SHOP_ALL_MENU_ITEM];
      obj.analyticsLocations = items;
      obj.analyticsSource = stateFromStores(7182).COLLECTIBLES_SHOP_MOBILE_SHOP_ALL_MENU_ITEM;
      obj.screen = constants.SHOP_ALL;
      const result = obj.openCollectiblesShopMobile(obj);
    };
    let CheckmarkSmallIcon1;
    if (currentScreen === constants.SHOP_ALL) {
      CheckmarkSmallIcon1 = tmp(7133).CheckmarkSmallIcon;
    }
    obj.trailingIndicator = CheckmarkSmallIcon1;
    items[1] = obj;
    obj = { label: null, action: null, trailingIndicator: null };
    const intl3 = tmp(1114).intl;
    obj.label = intl3.string(util.t.EBYkzk);
    obj.action = function action() {
      currentScreen(7541);
      const obj = { analyticsLocations: null, analyticsSource: null, screen: null };
      const items = [stateFromStores(7182).COLLECTIBLES_SHOP_MOBILE_ORBS_MENU_ITEM];
      obj.analyticsLocations = items;
      obj.analyticsSource = stateFromStores(7182).COLLECTIBLES_SHOP_MOBILE_ORBS_MENU_ITEM;
      obj.screen = constants.ORBS;
      const result = obj.openCollectiblesShopMobile(obj);
    };
    let CheckmarkSmallIcon2;
    if (currentScreen === constants.ORBS) {
      CheckmarkSmallIcon2 = tmp(7133).CheckmarkSmallIcon;
    }
    obj.trailingIndicator = CheckmarkSmallIcon2;
    items[2] = obj;
    return items;
  }, items1);
  const items3 = [currentScreen, ];
  let id;
  const callback = noop.useCallback(() => {
    let obj = { balance, primaryButtonConfig: null, secondaryButtonConfig: null, source: null };
    obj = { buttonText: null, onButtonPress: null };
    const intl = util.intl;
    obj.buttonText = intl.string(util.t.SymzJC);
    obj.onButtonPress = function onButtonPress() {
      stateFromStores(balance[22]);
      let obj = { type: "GO_TO_QUEST_HOME", source: stateFromStores(balance[17]).COLLECTIBLES_SHOP, balance };
      obj.track(constants2.ORB_BALANCE_ACTION_SHEET_ACTION, obj);
      stateFromStores(balance[19]).hideActionSheet();
      const obj3 = stateFromStores(balance[19]);
      obj = { mergeExistingRoutes: true, filter: constants3.VIRTUAL_CURRENCY, fromContent: currentScreen(balance[24]).QuestContent.ORBS_BALANCE_MENU };
      currentScreen(balance[23]).openQuestHome(obj);
    };
    obj.primaryButtonConfig = obj;
    const obj1 = { buttonText: null, onButtonPress: null };
    const intl2 = util.intl;
    obj1.buttonText = intl2.string(util.t["/g10LC"]);
    obj1.onButtonPress = function onButtonPress() {
      stateFromStores(balance[22]);
      const obj = { type: "GO_BACK", source: stateFromStores(balance[17]).COLLECTIBLES_SHOP, balance };
      obj.track(constants2.ORB_BALANCE_ACTION_SHEET_ACTION, obj);
      stateFromStores(balance[19]).hideActionSheet();
    };
    obj.secondaryButtonConfig = obj1;
    obj.source = AnalyticsLocationDefault.COLLECTIBLES_SHOP;
    obj.openLazy(() => currentScreen(balance[21])(balance[20], balance.paths).then((result) => result.default), "BalanceWidgetActionSheet", obj);
  }, items2);
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  items3[1] = id;
  obj = { style: closure_12().headerRightContainer, children: null };
  const callback1 = noop.useCallback(() => {
    let id;
    if (stateFromStores != null) {
      id = tmp.id;
    }
    if (null != id) {
      let obj = { cta_name: "wishlist header button", page_type: currentScreen };
      obj.track(AnalyticEvents.COLLECTIBLES_SHOP_ELEMENT_CLICKED, obj);
      ModalActionCreatorsDefault.popAll();
      obj = { userId: tmp.id, sourceAnalyticsLocations: null, initialSection: null };
      const items = [AnalyticsLocationDefault.COLLECTIBLES_SHOP];
      obj.sourceAnalyticsLocations = items;
      obj.initialSection = UserProfileSections.WISHLIST;
      showUserProfileActionSheetDefault(obj);
    }
  }, items3);
  const tmp2Result = currentScreen(balance[27]);
  if (isEligibleForQuests) {
    obj = { balance, onPress: callback };
    let tmp13Result = tmp13(tmp2Result.BalanceWidgetPillButton, obj);
    let tmp16 = tmp13;
  } else {
    obj1 = { balance };
    tmp13Result = tmp13(tmp2Result.BalanceWidgetPill, obj1);
    tmp16 = tmp13;
  }
  const items4 = [tmp13Result, , ];
  let tmp16Result = null != stateFromStores;
  if (tmp16Result) {
    obj2 = { accessibilityLabel: null, variant: "tertiary", size: "sm", icon: null, onPress: null };
    let intl = tmp2(tmp3[12]).intl;
    obj2.accessibilityLabel = intl.string(tmp2(tmp3[12]).t["7lZ31J"]);
    obj2.icon = tmp16(tmp2(tmp3[29]).HeartIcon, { size: "sm", color: "redesign-button-tertiary-text" });
    obj2.onPress = callback1;
    tmp16Result = tmp16(tmp2(tmp3[28]).IconButton, obj2);
  }
  items4[1] = tmp16Result;
  let obj3 = { items: memo, align: "below", title: null, keyboardShouldPersistTaps: "handled", children: null };
  let intl2 = tmp2(tmp3[12]).intl;
  obj3.title = intl2.string(currentScreen(balance[12]).t.nSFuC0);
  obj3.children = function children(ref) {
    const merged = Object.assign(ref, Object.assign({ ref: 0 }));
    const obj = { ref: ref.ref };
    const merged1 = Object.assign(merged);
    obj.variant = "tertiary";
    const intl = currentScreen(balance[12]).intl;
    obj.accessibilityLabel = intl.string(currentScreen(balance[12]).t.nSFuC0);
    obj.size = "sm";
    obj.icon = closure_1_10(currentScreen(balance[31]).MenuIcon, { size: "sm", color: "redesign-button-tertiary-text" });
    return closure_1_10(currentScreen(balance[28]).IconButton, obj);
  };
  items4[2] = tmp16(currentScreen(balance[30]).ContextMenu, obj3, currentScreen);
  obj.children = items4;
  return closure_11(View, obj);
}
const View = fn(17).View;
const constants = fn(1076).CollectiblesMobileShopScreen;
const AnalyticEvents = fn(1074).AnalyticEvents;
const RewardFilterTypes = fn(5444).RewardFilterTypes;
const UserProfileSections = fn(8183).UserProfileSections;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
fn(4560);
let createStyles = { headerTitleContainer: null, headerTitle: null, headerRightContainer: null };
createStyles = { width: "100%", flexDirection: "row", alignItems: "center", marginTop: nativeDefault.space.PX_8, paddingLeft: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
createStyles.headerTitleContainer = createStyles;
createStyles.headerTitle = { flexShrink: 1 };
createStyles.headerRightContainer = { flexDirection: "row", justifyContent: "flex-end", alignItems: "center", gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_8 };
let closure_12 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/useCollectiblesShopHeader.tsx");

export default function useCollectiblesShopHeader() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const currentScreen = obj.currentScreen;
  const navigation = currentScreen(1483).useNavigation();
  const items = [navigation, currentScreen];
  const layoutEffect = noop.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle() {
        return closure_2_10(CollectiblesShopHeaderTitle, { currentScreen });
      },
      headerRight() {
        return closure_2_10(CollectiblesShopHeaderRight, { currentScreen });
      }
    });
  }, items);
};