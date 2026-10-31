// === Module 17863: useCollectiblesShopHeader ===

// Module 17863 (useCollectiblesShopHeader)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import Text_Text from "Text/Text" /* 5624 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6744 */;
import CheckmarkSmallIcon3 from "CheckmarkSmallIcon" /* 7303 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7351 */;
import showUserProfileActionSheetDefault from "showUserProfileActionSheet" /* 8750 */;
import ShopIcon from "ShopIcon" /* 12328 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1383 */;

require = fn;
function CollectiblesShopHeaderTitle(currentScreen) {
  const tmp = closure_13();
  const obj = { style: tmp.headerTitleContainer, children: null };
  const items = [closure_1_11(ShopIcon.ShopIcon, { size: "md", color: "icon-strong" }), ];
  const obj2 = { variant: "redesign/heading-18/bold", color: "mobile-text-heading-primary", maxFontSizeMultiplier: 2, lineClamp: 1, style: tmp.headerTitle, children: null };
  if (currentScreen.currentScreen === constants.ORBS) {
    const intl2 = util.intl;
    let stringResult = intl2.string(util.t.ElYQFS);
  } else {
    const intl = util.intl;
    stringResult = intl.string(util.t.pWG4ze);
  }
  obj2.children = stringResult;
  items[1] = closure_1_11(Text_Text.Heading, obj2);
  obj.children = items;
  return closure_1_12(View, obj);
}
function CollectiblesShopHeaderRight(currentScreen) {
  currentScreen = currentScreen.currentScreen;
  let openBalanceWidgetActionSheet;
  let id;
  const tmp = closure_13();
  let items = [UserStore];
  const stateFromStores = currentScreen(openBalanceWidgetActionSheet[13]).useStateFromStores(items, () => currentUser.getCurrentUser(), []);
  let obj = currentScreen(openBalanceWidgetActionSheet[13]);
  const balance = currentScreen(openBalanceWidgetActionSheet[14]).useFetchVirtualCurrencyBalance().balance;
  let obj2 = currentScreen(openBalanceWidgetActionSheet[14]);
  const isEligibleForQuests = currentScreen(openBalanceWidgetActionSheet[15]).getIsEligibleForQuests();
  let obj3 = currentScreen(openBalanceWidgetActionSheet[15]);
  const orbBalanceEntrypoint = currentScreen(openBalanceWidgetActionSheet[16]).useOrbBalanceEntrypoint({ location: "MobileCollectiblesShopHeader" });
  openBalanceWidgetActionSheet = orbBalanceEntrypoint.openBalanceWidgetActionSheet;
  const items1 = [currentScreen];
  ({ isOrbchievementsEnabled, hasUnreadUpdate } = orbBalanceEntrypoint);
  const items2 = [balance, currentScreen, openBalanceWidgetActionSheet];
  const memo = id.useMemo(() => {
    const obj = { label: null, action: null, trailingIndicator: null };
    const intl = util.intl;
    obj.label = intl.string(util.t["xNiB/O"]);
    obj.action = function action() {
      const obj2 = { analyticsLocations: null, analyticsSource: null, screen: null };
      const items = [balance(7351).COLLECTIBLES_SHOP_MOBILE_FEATURED_PAGE_MENU_ITEM];
      obj2.analyticsLocations = items;
      obj2.analyticsSource = balance(7351).COLLECTIBLES_SHOP_MOBILE_FEATURED_PAGE_MENU_ITEM;
      obj2.screen = constants.FEATURED_PAGE;
      const result = currentScreen(7719).openCollectiblesShopMobile(obj2);
    };
    let CheckmarkSmallIcon;
    if (currentScreen === constants.FEATURED_PAGE) {
      CheckmarkSmallIcon = CheckmarkSmallIcon3.CheckmarkSmallIcon;
    }
    obj.trailingIndicator = CheckmarkSmallIcon;
    let items = [obj, , ];
    let obj2 = { label: null, action: null, trailingIndicator: null };
    const intl2 = util.intl;
    obj2.label = intl2.string(util.t.RSyoZu);
    obj2.action = function action() {
      const obj2 = { analyticsLocations: null, analyticsSource: null, screen: null };
      const items = [balance(7351).COLLECTIBLES_SHOP_MOBILE_SHOP_ALL_MENU_ITEM];
      obj2.analyticsLocations = items;
      obj2.analyticsSource = balance(7351).COLLECTIBLES_SHOP_MOBILE_SHOP_ALL_MENU_ITEM;
      obj2.screen = constants.SHOP_ALL;
      const result = currentScreen(7719).openCollectiblesShopMobile(obj2);
    };
    let CheckmarkSmallIcon1;
    if (currentScreen === constants.SHOP_ALL) {
      CheckmarkSmallIcon1 = CheckmarkSmallIcon3.CheckmarkSmallIcon;
    }
    obj2.trailingIndicator = CheckmarkSmallIcon1;
    items[1] = obj2;
    const obj3 = { label: null, action: null, trailingIndicator: null };
    const intl3 = util.intl;
    obj3.label = intl3.string(util.t.fG3RIg);
    obj3.action = function action() {
      const obj2 = { analyticsLocations: null, analyticsSource: null, screen: null };
      const items = [balance(7351).COLLECTIBLES_SHOP_MOBILE_ORBS_MENU_ITEM];
      obj2.analyticsLocations = items;
      obj2.analyticsSource = balance(7351).COLLECTIBLES_SHOP_MOBILE_ORBS_MENU_ITEM;
      obj2.screen = constants.ORBS;
      const result = currentScreen(7719).openCollectiblesShopMobile(obj2);
    };
    let CheckmarkSmallIcon2;
    if (currentScreen === constants.ORBS) {
      CheckmarkSmallIcon2 = CheckmarkSmallIcon3.CheckmarkSmallIcon;
    }
    obj3.trailingIndicator = CheckmarkSmallIcon2;
    items[2] = obj3;
    return items;
  }, items1);
  id = undefined;
  const callback = id.useCallback(() => {
    let obj = { balance, primaryButtonConfig: null, secondaryButtonConfig: null, source: null, analyticsPage: null };
    let obj2 = { buttonText: null, onButtonPress: null };
    const intl = util.intl;
    obj2.buttonText = intl.string(util.t.SymzJC);
    obj2.onButtonPress = function onButtonPress() {
      const obj = balance(openBalanceWidgetActionSheet[20]);
      obj.track(constants2.ORB_BALANCE_ACTION_SHEET_ACTION, { type: "GO_TO_QUEST_HOME", source: balance(openBalanceWidgetActionSheet[18]).COLLECTIBLES_SHOP, balance });
      const obj2 = { type: "GO_TO_QUEST_HOME", source: balance(openBalanceWidgetActionSheet[18]).COLLECTIBLES_SHOP, balance };
      balance(openBalanceWidgetActionSheet[21]).hideActionSheet();
      const obj3 = balance(openBalanceWidgetActionSheet[21]);
      const obj4 = currentScreen(openBalanceWidgetActionSheet[22]);
      obj4.openQuestHome({ mergeExistingRoutes: true, filter: constants3.VIRTUAL_CURRENCY, fromContent: currentScreen(openBalanceWidgetActionSheet[23]).QuestContent.ORBS_BALANCE_MENU });
    };
    obj.primaryButtonConfig = obj2;
    let obj3 = { buttonText: null, onButtonPress: null };
    const intl2 = util.intl;
    obj3.buttonText = intl2.string(util.t["/g10LC"]);
    obj3.onButtonPress = function onButtonPress() {
      const obj = balance(openBalanceWidgetActionSheet[20]);
      obj.track(constants2.ORB_BALANCE_ACTION_SHEET_ACTION, { type: "GO_BACK", source: balance(openBalanceWidgetActionSheet[18]).COLLECTIBLES_SHOP, balance });
      const obj2 = { type: "GO_BACK", source: balance(openBalanceWidgetActionSheet[18]).COLLECTIBLES_SHOP, balance };
      balance(openBalanceWidgetActionSheet[21]).hideActionSheet();
    };
    obj.secondaryButtonConfig = obj3;
    obj.source = AnalyticsLocationDefault.COLLECTIBLES_SHOP;
    if (currentScreen === constants.ORBS) {
      let COLLECTIBLES_SHOP = constants3.SHOP_ORBS_TAB;
    } else {
      COLLECTIBLES_SHOP = constants3.COLLECTIBLES_SHOP;
    }
    obj.analyticsPage = COLLECTIBLES_SHOP;
    openBalanceWidgetActionSheet(obj);
  }, items2);
  if (stateFromStores != null) {
    id = stateFromStores.id;
  }
  const items3 = [currentScreen, id];
  const obj5 = { style: tmp.headerRightContainer, children: null };
  if (!isEligibleForQuests) {
    if (!isOrbchievementsEnabled) {
      const obj6 = { balance };
      let tmp14 = closure_11;
      let tmp15 = closure_11(tmp2(tmp3[26]).BalanceWidgetPill, obj6);
    }
    const items4 = [tmp15, , ];
    let tmp14Result = null != stateFromStores;
    if (tmp14Result) {
      const obj7 = { accessibilityLabel: null, variant: "tertiary", size: "sm", icon: null, onPress: null };
      let intl = tmp2(tmp3[12]).intl;
      obj7.accessibilityLabel = intl.string(tmp2(tmp3[12]).t["7lZ31J"]);
      obj7.icon = tmp14(tmp2(tmp3[28]).HeartIcon, { size: "sm", color: "redesign-button-tertiary-text" });
      obj7.onPress = tmp10;
      tmp14Result = tmp14(tmp2(tmp3[27]).IconButton, obj7);
    }
    items4[1] = tmp14Result;
    const obj8 = { items: memo, align: "below", title: null, keyboardShouldPersistTaps: "handled", children: null };
    let intl2 = tmp2(tmp3[12]).intl;
    obj8.title = intl2.string(tmp2(tmp3[12]).t.nSFuC0);
    obj8.children = function children(ref) {
      const merged = Object.assign(ref, Object.assign({ ref: 0 }));
      const obj = { ref: ref.ref };
      const merged1 = Object.assign(merged);
      obj.variant = "tertiary";
      const intl = currentScreen(openBalanceWidgetActionSheet[12]).intl;
      obj.accessibilityLabel = intl.string(currentScreen(openBalanceWidgetActionSheet[12]).t.nSFuC0);
      obj.size = "sm";
      obj.icon = closure_1_11(currentScreen(openBalanceWidgetActionSheet[30]).MenuIcon, { size: "sm", color: "redesign-button-tertiary-text" });
      return closure_1_11(currentScreen(openBalanceWidgetActionSheet[27]).IconButton, obj);
    };
    items4[2] = tmp14(tmp2(tmp3[29]).ContextMenu, obj8, currentScreen);
    obj5.children = items4;
    return tmp11(tmp12, obj5);
  }
  tmp15 = closure_11(tmp2(tmp3[26]).BalanceWidgetPillButton, { balance, onPress: callback, showNotificationBadge: hasUnreadUpdate });
  tmp14 = closure_11;
  let obj4 = currentScreen(openBalanceWidgetActionSheet[16]);
}
const View = fn(17).View;
const constants = fn(1074).CollectiblesMobileShopScreen;
const Constants = fn(1072);
({ AnalyticEvents: closure_7, AnalyticsPages: closure_8 } = Constants);
const RewardFilterTypes = fn(6781).RewardFilterTypes;
const UserProfileSections = fn(8754).UserProfileSections;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12 } = jsxProd);
const createStyles = fn(5014);
let obj2 = { headerTitleContainer: { width: "100%", flexDirection: "row", alignItems: "center", marginTop: nativeDefault.space.PX_8, paddingLeft: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 }, headerTitle: { flexShrink: 1 }, headerRightContainer: null };
let obj3 = { width: "100%", flexDirection: "row", alignItems: "center", marginTop: nativeDefault.space.PX_8, paddingLeft: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_8 };
obj2.headerRightContainer = { flexDirection: "row", justifyContent: "flex-end", alignItems: "center", gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_8 };
let closure_13 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/native/useCollectiblesShopHeader.tsx");

export default function useCollectiblesShopHeader() {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  const currentScreen = obj.currentScreen;
  const navigation = currentScreen(1497).useNavigation();
  const items = [navigation, currentScreen];
  const layoutEffect = noop.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle() {
        return closure_2_11(CollectiblesShopHeaderTitle, { currentScreen });
      },
      headerRight() {
        return closure_2_11(CollectiblesShopHeaderRight, { currentScreen });
      }
    });
  }, items);
};