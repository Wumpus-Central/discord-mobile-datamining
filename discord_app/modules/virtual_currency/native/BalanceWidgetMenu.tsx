// === Module 15695: BalanceWidgetMenu ===

// Module 15695 (BalanceWidgetMenu)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import dismissible_content from "dismissible_content" /* 1943 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4380 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import Text_Text from "Text/Text" /* 4556 */;
import ButtonEllipsis from "ButtonEllipsis" /* 4991 */;
import Pressables from "Pressables" /* 5123 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7182 */;
import _mod8850 from "module_8850" /* 8850 */;
import SelectedDismissibleContentDefault from "SelectedDismissibleContent" /* 10625 */;
import BalanceWidgetPillButtonDefault from "BalanceWidgetPillButton" /* 11100 */;
import OrbOnboardingPillDefault from "OrbOnboardingPill" /* 15696 */;
import noop from "module_19" /* 19 */;

require = fn;
function BalanceWidget(arg0) {
  ({ onPress, style, accessibilityLabel, accessibilityState, children } = arg0);
  const tmp = closure_15();
  let obj = { onPress, style: null, accessible: true, accessibilityRole: "button", accessibilityLabel, accessibilityState, activeOpacity: 0.8, children: null };
  const items = [tmp.pressable, style];
  obj.style = items;
  obj = { variant: "text-sm/semibold", color: "text-default", style: tmp.label, children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t.gGtZpz);
  const items1 = [closure_1_10(Text_Text.Text, obj), ];
  obj = { style: tmp.pill, children };
  items1[1] = closure_1_10(View, obj);
  obj.children = items1;
  return closure_1_11(Pressables.PressableOpacity, obj);
}
class OrbsOnboardingMenuDismissibleContent {
  constructor(arg0) {
    style = global.style;
    obj = { contentTypes: null, groupName: null, children: null };
    tmp = closure_1(closure_2[10]);
    items = [];
    items[0] = style(closure_2[11]).DismissibleContent.VIRTUAL_CURRENCY_MOBILE_ONBOARDING_PILL;
    obj.contentTypes = items;
    obj.groupName = closure_8.VIRTUAL_CURRENCY_MOBILE_ONBOARDING;
    obj.children = function children(markAsDismissed) {
      markAsDismissed = markAsDismissed.markAsDismissed;
      if (markAsDismissed.visibleContent === dismissible_content.DismissibleContent.VIRTUAL_CURRENCY_MOBILE_ONBOARDING_PILL) {
        function handleOnboardingPress() {
          markAsDismissed(constants2.TAKE_ACTION);
          let obj = AnalyticsUtilsDefault;
          obj.track(constants.USER_PROFILE_ACTION, { profile_action: "ORBS_BALANCE_PRESSED" });
          obj = { filter: constants3.VIRTUAL_CURRENCY, fromContent: style(5447).QuestContent.MOBILE_ORBS_ONBOARDING_DC };
          style(11767).openQuestHome(obj);
        }
        let obj = { onPress: handleOnboardingPress, style, accessibilityLabel: null, children: null };
        const intl = util.intl;
        obj.accessibilityLabel = intl.string(util.t.Kt2QDh);
        obj = { onPress: handleOnboardingPress, accessible: false };
        obj.children = closure_2_10(OrbOnboardingPillDefault, obj);
        return closure_2_10(BalanceWidget, obj);
      } else {
        return null;
      }
    };
    return jsx(tmp, obj);
  }
}
function BalanceWidgetMenu(style) {
  let str;
  let obj = str(8850);
  str = obj.useFetchVirtualCurrencyBalance().balance;
  let items = [str];
  const callback = noop.useCallback(() => {
    let obj = AnalyticsUtilsDefault;
    obj.track(AnalyticEvents.USER_PROFILE_ACTION, { profile_action: "ORBS_BALANCE_PRESSED" });
    obj = { balance: str, primaryButtonConfig: null, secondaryButtonConfig: null, source: null };
    obj = { buttonText: null, onButtonPress: null };
    const intl = util.intl;
    obj.buttonText = intl.string(util.t.WrzJBf);
    obj.onButtonPress = function onButtonPress() {
      let obj = { type: "GO_TO_SHOP", source: AnalyticsLocationDefault.YOU_SCREEN, balance };
      obj.track(constants.ORB_BALANCE_ACTION_SHEET_ACTION, obj);
      ActionSheetActionCreatorsDefault.hideActionSheet();
      obj = { analyticsLocations: null, analyticsSource: null, screen: null };
      const items = [AnalyticsLocationDefault.COLLECTIBLES_SHOP];
      obj.analyticsLocations = items;
      obj.analyticsSource = AnalyticsLocationDefault.COLLECTIBLES_SHOP;
      obj.screen = constants2.ORBS;
      const result = str(7541).openCollectiblesShopMobile(obj);
    };
    obj.primaryButtonConfig = obj;
    const obj1 = { buttonText: null, onButtonPress: null };
    const intl2 = util.intl;
    obj1.buttonText = intl2.string(util.t.SymzJC);
    obj1.onButtonPress = function onButtonPress() {
      let obj = { type: "GO_TO_QUEST_HOME", source: AnalyticsLocationDefault.YOU_SCREEN, balance };
      obj.track(constants.ORB_BALANCE_ACTION_SHEET_ACTION, obj);
      ActionSheetActionCreatorsDefault.hideActionSheet();
      obj = { mergeExistingRoutes: true, filter: constants3.VIRTUAL_CURRENCY, fromContent: str(5447).QuestContent.ORBS_BALANCE_MENU };
      str(11767).openQuestHome(obj);
    };
    obj.secondaryButtonConfig = obj1;
    obj.source = AnalyticsLocationDefault.YOU_SCREEN;
    obj1.openLazy(() => balance(paths[19])(paths[18], paths.paths).then((result) => result.default), "BalanceWidgetMenu", obj);
  }, items);
  obj = { onPress: callback, style: style.style, accessibilityLabel: null, children: null };
  let intl = str(1114).intl;
  let str2;
  if (str != null) {
    str2 = str.toString();
  }
  if (str2 == null) {
    str2 = "";
  }
  obj.accessibilityLabel = intl.formatToPlainString(str(1114).t.zPaLL9, { balance: str2 });
  obj.children = closure_10(BalanceWidgetPillButtonDefault, { balance: str, onPress: callback, accessible: false });
  return closure_10(BalanceWidget, obj);
}
const View = fn(17).View;
const AnalyticEvents = fn(1074).AnalyticEvents;
let closure_6 = fn(1076).CollectiblesMobileShopScreen;
const DismissibleContentConstants = fn(1954);
({ ContentDismissActionType: closure_7, DismissibleContentGroupName: closure_8 } = DismissibleContentConstants);
const RewardFilterTypes = fn(5444).RewardFilterTypes;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4560);
let closure_15 = createStyles.createStyles(() => {
  let obj = { pressable: null, label: null, pill: null, loadingContainer: null };
  obj = { flex: 1, flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.md };
  obj.pressable = obj;
  obj.label = { flex: 1 };
  obj.pill = { alignItems: "center" };
  obj.loadingContainer = { height: 36, justifyContent: "center" };
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/virtual_currency/native/BalanceWidgetMenu.tsx");

export default function BalanceWidgetMenuWrapper(style) {
  let obj = _mod8850;
  const balance = obj.useFetchVirtualCurrencyBalance().balance;
  DismissibleContentUnsafeUtils;
  if (null == balance) {
    obj = {
      onPress() {

        },
      style: style.style,
      accessibilityLabel: null,
      accessibilityState: null,
      children: null
    };
    const intl = util.intl;
    obj.accessibilityLabel = intl.string(util.t.cKwv4k);
    obj.accessibilityState = { busy: true };
    obj = { style: tmp.loadingContainer, children: closure_1_10(ButtonEllipsis.Ellipsis, { variant: "primary", size: "sm" }) };
    obj.children = closure_1_10(View, obj);
    let tmp6Result = closure_1_10(BalanceWidget, obj);
  } else {
    if (balance <= 0) {
      if (!tmp5) {
        let tmp7 = OrbsOnboardingMenuDismissibleContent;
      }
      const obj1 = {};
      const merged = Object.assign(style);
      tmp6Result = tmp6(tmp7, obj1);
    }
    tmp7 = BalanceWidgetMenu;
  }
  return tmp6Result;
};
export { OrbsOnboardingMenuDismissibleContent };