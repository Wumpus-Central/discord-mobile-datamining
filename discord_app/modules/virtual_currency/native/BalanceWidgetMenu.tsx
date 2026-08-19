// discord_app/modules/virtual_currency/native/BalanceWidgetMenu.tsx
import expandEventPropertiesDefault from "../../../utils/AnalyticsUtils.tsx";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import useIsMobileVisualRefreshExperimentEnabledDefault from "../../themes/experiments/MobileVisualRefreshExperiment.tsx";
import UNSAFE_isDismissibleContentDismissed from "../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import EllipsisCircle from "../../../design/components/Button/native/ButtonEllipsis.native.tsx";
import PressableBase from "../../../design/void/Pressables/native/Pressables.tsx";
import QUICK_SWITCHERDefault from "../../app_analytics/AnalyticsLocation.tsx";
import _mod9252 from "../hooks/index.tsx";
import SelectedDismissibleContentDefault from "../../dismissible_content/native/SelectedDismissibleContent.tsx";
import BalanceWidgetPillButtonDefault from "BalanceWidgetPillButton.tsx";
import OrbOnboardingPillDefault from "OrbOnboardingPill.tsx";
import noop from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { AnalyticEvents } from "../../../Constants.tsx";
import { CollectiblesMobileShopScreen as closure_6 } from "../../collectibles/CollectiblesShopConstants.tsx";
import ContentDismissActionType from "../../dismissible_content/DismissibleContentConstants.tsx";
import { RewardFilterTypes } from "../../quests/QuestConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = fn;
function BalanceWidget(arg0) {
  ({ onPress, style, accessibilityLabel, accessibilityState, children } = arg0);
  const tmp = callback3(useIsMobileVisualRefreshExperimentEnabledDefault("BalanceWidgetMenu"));
  const items = [tmp.pressable, style];
  let obj = { variant: "text-sm/semibold", color: "text-default", style: tmp.label, children: null };
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
    obj[1] = closure_8.VIRTUAL_CURRENCY_MOBILE_ONBOARDING;
    obj[2] = function children(markAsDismissed) {
      markAsDismissed = markAsDismissed.markAsDismissed;
      if (markAsDismissed.visibleContent === style(dependencyMap[12]).DismissibleContent.VIRTUAL_CURRENCY_MOBILE_ONBOARDING_PILL) {
        function handleOnboardingPress() {
          markAsDismissed(closure_1_7.TAKE_ACTION);
          let obj = closure_1_1(closure_1_2[13]);
          obj.track(closure_1_5.USER_PROFILE_ACTION, { profile_action: "ORBS_BALANCE_PRESSED" });
          obj = { filter: closure_1_9.VIRTUAL_CURRENCY, fromContent: markAsDismissed(closure_1_2[15]).QuestContent.MOBILE_ORBS_ONBOARDING_DC };
          markAsDismissed(closure_1_2[14]).openQuestHome(obj);
        }
        let obj = { onPress: null, style: null, accessibilityLabel: null, children: null };
        obj[0] = handleOnboardingPress;
        obj[1] = markAsDismissed;
        const intl = style(dependencyMap[10]).intl;
        obj[2] = intl.string(style(dependencyMap[10]).t.Kt2QDh);
        obj = { onPress: null, accessible: false };
        obj[0] = handleOnboardingPress;
        obj[3] = closure_1_10(OrbOnboardingPillDefault, obj);
        return closure_1_10(BalanceWidget, obj);
      } else {
        return null;
      }
    };
    return jsx(tmp, obj);
  }
}
function BalanceWidgetMenu(style) {
  let str;
  let obj = str(9252);
  str = obj.useFetchVirtualCurrencyBalance().balance;
  let items = [str];
  const callback = React.useCallback(() => {
    let obj = expandEventPropertiesDefault;
    obj.track(AnalyticEvents.USER_PROFILE_ACTION, { profile_action: "ORBS_BALANCE_PRESSED" });
    obj = { buttonText: null, onButtonPress: null };
    const intl = str(dependencyMap[10]).intl;
    obj[0] = intl.string(str(dependencyMap[10]).t.WrzJBf);
    obj[1] = function onButtonPress() {
      closure_1_1(closure_1_2[13]);
      let obj = { type: "GO_TO_SHOP", source: closure_1_1(closure_1_2[21]).YOU_SCREEN, balance: closure_0 };
      obj.track(closure_1_5.ORB_BALANCE_ACTION_SHEET_ACTION, obj);
      closure_1_1(closure_1_2[18]).hideActionSheet();
      const obj3 = closure_1_1(closure_1_2[18]);
      obj = { analyticsLocations: null, analyticsSource: null, screen: null };
      const items = [closure_1_1(closure_1_2[21]).COLLECTIBLES_SHOP];
      obj[0] = items;
      obj[1] = closure_1_1(closure_1_2[21]).COLLECTIBLES_SHOP;
      obj[2] = closure_1_6.ORBS;
      const result = str(closure_1_2[22]).openCollectiblesShopMobile(obj);
    };
    obj[1] = obj;
    obj1 = { buttonText: null, onButtonPress: null };
    const intl2 = str(dependencyMap[10]).intl;
    obj1[0] = intl2.string(str(dependencyMap[10]).t.SymzJC);
    obj1[1] = function onButtonPress() {
      closure_1_1(closure_1_2[13]);
      let obj = { type: "GO_TO_QUEST_HOME", source: closure_1_1(closure_1_2[21]).YOU_SCREEN, balance: closure_0 };
      obj.track(closure_1_5.ORB_BALANCE_ACTION_SHEET_ACTION, obj);
      closure_1_1(closure_1_2[18]).hideActionSheet();
      const obj3 = closure_1_1(closure_1_2[18]);
      obj = { mergeExistingRoutes: true, filter: closure_1_9.VIRTUAL_CURRENCY, fromContent: str(closure_1_2[15]).QuestContent.ORBS_BALANCE_MENU };
      str(closure_1_2[14]).openQuestHome(obj);
    };
    obj[2] = obj1;
    obj[3] = QUICK_SWITCHERDefault.YOU_SCREEN;
    obj1.openLazy(() => callback(paths[20])(paths[19], paths.paths).then((result) => result.default), "BalanceWidgetMenu", obj);
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
  obj[3] = callback(BalanceWidgetPillButtonDefault, { balance: str, onPress: callback, accessible: false });
  return callback(BalanceWidget, obj);
}
({ ContentDismissActionType: error, DismissibleContentGroupName: closure_8 } = ContentDismissActionType);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let closure_15 = createCacheKey.createStyles((arg0) => {
  const pressable = { flex: 1, flexDirection: "row", alignItems: "center", flexWrap: "wrap", gap: ThemesDefault.space.PX_8 };
  if (arg0) {
    let obj = { paddingHorizontal: null, paddingVertical: null };
    obj[0] = ThemesDefault.space.PX_8;
    obj[1] = ThemesDefault.space.PX_8;
  } else {
    obj = { padding: 16 };
  }
  const merged = Object.assign(obj);
  const radii = ThemesDefault.radii;
  pressable.borderRadius = arg0 ? radii.md : radii.lg;
  return { pressable, label: { flex: 1 }, pill: { alignItems: "center" }, loadingContainer: { height: 36, justifyContent: "center" } };
});
let result = require("obj132").fileFinishedImporting("modules/virtual_currency/native/BalanceWidgetMenu.tsx");

export default function BalanceWidgetMenuWrapper(style) {
  let obj = _mod9252;
  const balance = obj.useFetchVirtualCurrencyBalance().balance;
  UNSAFE_isDismissibleContentDismissed;
  if (null == balance) {
    obj = { onPress: null, style: null, accessibilityLabel: null, accessibilityState: null, children: null };
    obj[0] = function onPress() {

    };
    obj[1] = style.style;
    const intl = getSystemLocale.intl;
    obj[2] = intl.string(getSystemLocale.t.cKwv4k);
    obj[3] = { busy: true };
    obj = { style: null, children: null };
    obj[0] = tmp2.loadingContainer;
    obj[1] = callback(EllipsisCircle.Ellipsis, { variant: "primary", size: "sm" });
    obj[4] = callback(View, obj);
    let tmp6Result = callback(BalanceWidget, obj);
  } else {
    if (balance <= 0) {
      if (!tmp5) {
        let tmp7 = OrbsOnboardingMenuDismissibleContent;
      }
      obj1 = {};
      const merged = Object.assign(style);
      tmp6Result = tmp6(tmp7, obj1);
    }
    tmp7 = BalanceWidgetMenu;
  }
  return tmp6Result;
};
export { OrbsOnboardingMenuDismissibleContent };