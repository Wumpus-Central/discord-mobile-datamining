// discord_app/modules/virtual_currency/native/BalanceWidgetMenu.tsx
import ref from "ref";
import { View } from "module_9357";
import { AnalyticEvents } from "ME";
import { CollectiblesMobileShopScreen as closure_6 } from "items";
import ContentDismissActionType from "ContentDismissActionType";
import { RewardFilterTypes } from "QuestsExperimentLocations";
import jsxProd from "QUICK_SWITCHER";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { PressableBase } from "../../../design/void/Pressables/native/Pressables.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { UNSAFE_isDismissibleContentDismissed } from "../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import { useIsMobileVisualRefreshExperimentEnabled } from "../../themes/experiments/MobileVisualRefreshExperiment.tsx";
import { index } from "../hooks/index.tsx";
import { BalanceWidgetPillButton } from "BalanceWidgetPillButton.tsx";

let c10;
let error;
let metroImportAll;
let unpackModuleId;
const require = arg1;
function BalanceWidget(arg0) {
  let accessibilityLabel;
  let accessibilityState;
  let children;
  let onPress;
  let style;
  ({ onPress, style, accessibilityLabel, accessibilityState, children } = arg0);
  const tmp = callback3(useIsMobileVisualRefreshExperimentEnabled("BalanceWidgetMenu"));
  let obj = { onPress, style: items, accessible: true, accessibilityRole: "button", accessibilityLabel, accessibilityState, activeOpacity: 0.8, children: null };
  items = [tmp.pressable, style];
  obj = { variant: "text-sm/semibold", color: "text-default", style: tmp.label, children: null };
  const intl = getSystemLocale.intl;
  obj[3] = intl.string(getSystemLocale.t.gGtZpz);
  const items1 = [callback(Text.Text, obj), ];
  obj = { style: tmp.pill, children };
  items1[1] = callback(View, obj);
  obj[7] = items1;
  return callback2(PressableBase.PressableOpacity, obj);
}
class OrbsOnboardingMenuDismissibleContent {
  constructor(arg0) {
    style = global.style;
    obj = { contentTypes: null, groupName: null, children: null };
    tmp = require("SelectedDismissibleContent");
    items = [];
    items[0] = require("DismissibleContent").DismissibleContent.VIRTUAL_CURRENCY_MOBILE_ONBOARDING_PILL;
    obj[0] = items;
    obj[1] = AnalyticEvents.VIRTUAL_CURRENCY_MOBILE_ONBOARDING;
    obj[2] = function children(markAsDismissed) {
      markAsDismissed = markAsDismissed.markAsDismissed;
      if (markAsDismissed.visibleContent === style(outer1_2[12]).DismissibleContent.VIRTUAL_CURRENCY_MOBILE_ONBOARDING_PILL) {
        function handleOnboardingPress() {
          markAsDismissed(outer1_7.TAKE_ACTION);
          let obj = outer1_1(outer1_2[13]);
          obj.track(outer1_5.USER_PROFILE_ACTION, { profile_action: "ORBS_BALANCE_PRESSED" });
          obj = { filter: outer1_9.VIRTUAL_CURRENCY, fromContent: markAsDismissed(outer1_2[15]).QuestContent.MOBILE_ORBS_ONBOARDING_DC };
          markAsDismissed(outer1_2[14]).openQuestHome(obj);
        }
        let obj = { onPress: null, style: null, accessibilityLabel: null, children: null };
        obj[0] = handleOnboardingPress;
        obj[1] = markAsDismissed;
        const intl = tmp(tmp2[10]).intl;
        obj[2] = intl.string(tmp(tmp2[10]).t.Kt2QDh);
        obj = { onPress: null, accessible: false };
        obj[0] = handleOnboardingPress;
        obj[3] = outer1_10(outer1_1(tmp2[16]), obj);
        return outer1_10(outer1_12, obj);
      } else {
        return null;
      }
    };
    return jsx(tmp, obj);
  }
}
function BalanceWidgetMenu(style) {
  let str;
  let obj = str(9357);
  str = obj.useFetchVirtualCurrencyBalance().balance;
  let items = [str];
  const callback = React.useCallback(() => {
    let obj = outer1_1(outer1_2[13]);
    obj.track(outer1_5.USER_PROFILE_ACTION, { profile_action: "ORBS_BALANCE_PRESSED" });
    let obj1 = outer1_1(outer1_2[18]);
    obj = { balance: str, primaryButtonConfig: null, secondaryButtonConfig: null, source: null };
    obj = { buttonText: null, onButtonPress: null };
    const intl = str(outer1_2[10]).intl;
    obj[0] = intl.string(str(outer1_2[10]).t.WrzJBf);
    obj[1] = function onButtonPress() {
      let obj = outer1_1(outer1_2[13]);
      obj = { type: "GO_TO_SHOP", source: outer1_1(outer1_2[21]).YOU_SCREEN, balance: closure_0 };
      obj.track(outer1_5.ORB_BALANCE_ACTION_SHEET_ACTION, obj);
      outer1_1(outer1_2[18]).hideActionSheet();
      const obj3 = outer1_1(outer1_2[18]);
      obj = { analyticsLocations: null, analyticsSource: null, screen: null };
      const items = [outer1_1(outer1_2[21]).COLLECTIBLES_SHOP];
      obj[0] = items;
      obj[1] = outer1_1(outer1_2[21]).COLLECTIBLES_SHOP;
      obj[2] = outer1_6.ORBS;
      const result = outer1_0(outer1_2[22]).openCollectiblesShopMobile(obj);
    };
    obj[1] = obj;
    obj1 = { buttonText: null, onButtonPress: null };
    const intl2 = str(outer1_2[10]).intl;
    obj1[0] = intl2.string(str(outer1_2[10]).t.SymzJC);
    obj1[1] = function onButtonPress() {
      let obj = outer1_1(outer1_2[13]);
      obj = { type: "GO_TO_QUEST_HOME", source: outer1_1(outer1_2[21]).YOU_SCREEN, balance: closure_0 };
      obj.track(outer1_5.ORB_BALANCE_ACTION_SHEET_ACTION, obj);
      outer1_1(outer1_2[18]).hideActionSheet();
      const obj3 = outer1_1(outer1_2[18]);
      obj = { mergeExistingRoutes: true, filter: outer1_9.VIRTUAL_CURRENCY, fromContent: outer1_0(outer1_2[15]).QuestContent.ORBS_BALANCE_MENU };
      outer1_0(outer1_2[14]).openQuestHome(obj);
    };
    obj[2] = obj1;
    obj[3] = outer1_1(outer1_2[21]).YOU_SCREEN;
    obj1.openLazy(() => callback(paths[20])(paths[19], paths.paths).then((arg0) => arg0.default), "BalanceWidgetMenu", obj);
  }, items);
  obj = { onPress: callback, style: style.style, accessibilityLabel: null, children: null };
  let intl = str(1236).intl;
  let str2;
  if (str != null) {
    str2 = str.toString();
  }
  if (str2 == null) {
    str2 = "";
  }
  obj[2] = intl.formatToPlainString(str(1236).t.zPaLL9, { balance: str2 });
  obj[3] = closure_10(BalanceWidgetPillButton, { balance: str, onPress: callback, accessible: false });
  return closure_10(BalanceWidget, obj);
}
({ ContentDismissActionType: error, DismissibleContentGroupName: metroImportAll } = ContentDismissActionType);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let closure_15 = createCacheKey.createStyles((arg0) => {
  const pressable = { flex: 1, flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: Themes.space.PX_8 };
  if (arg0) {
    let obj = { paddingHorizontal: null, paddingVertical: null };
    obj[0] = tmp(712).space.PX_8;
    obj[1] = tmp(712).space.PX_8;
  } else {
    obj = { padding: 16 };
  }
  const merged = Object.assign(obj);
  const radii = tmp(712).radii;
  pressable.borderRadius = arg0 ? radii.md : radii.lg;
  return { pressable, label: { flex: 1 }, pill: { alignItems: "center" }, loadingContainer: { height: 36, justifyContent: "center" } };
});
let result = require("ME").fileFinishedImporting("modules/virtual_currency/native/BalanceWidgetMenu.tsx");

export default function BalanceWidgetMenuWrapper(style) {
  let obj = index;
  const balance = obj.useFetchVirtualCurrencyBalance().balance;
  UNSAFE_isDismissibleContentDismissed;
  if (null == balance) {
    obj = { onPress: null, style: null, accessibilityLabel: null, accessibilityState: null, children: null };
    obj[0] = function onPress() {

    };
    obj[1] = style.style;
    const intl = tmp3(1236).intl;
    obj[2] = intl.string(tmp3(1236).t.cKwv4k);
    obj[3] = { busy: true };
    obj = { style: null, children: null };
    obj[0] = tmp2.loadingContainer;
    obj[1] = callback(tmp3(4727).Ellipsis, { variant: "primary", size: "sm" });
    obj[4] = callback(View, obj);
    let tmp6Result = callback(BalanceWidget, obj);
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