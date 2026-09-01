// discord_app/modules/virtual_currency/native/BalanceWidgetMenu.tsx
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import UNSAFE_isDismissibleContentDismissed from "../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import PressableBase from "../../../design/void/Pressables/native/Pressables.tsx";
import SelectedDismissibleContentDefault from "../../dismissible_content/native/SelectedDismissibleContent.tsx";
import BalanceWidgetPillButtonDefault from "BalanceWidgetPillButton.tsx";
import _mod11352 from "../hooks/index.tsx";
import closure_3 from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { AnalyticEvents } from "../../../Constants.tsx";
import { CollectiblesMobileShopScreen as closure_6 } from "../../collectibles/CollectiblesShopConstants.tsx";
import ContentDismissActionType from "../../dismissible_content/DismissibleContentConstants.tsx";
import { RewardFilterTypes } from "../../quests/QuestConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function BalanceWidget(arg0) {
  ({ onPress, style, accessibilityLabel, accessibilityState, children } = arg0);
  const tmp = callback3();
  let obj = {
    onPress,
    style: items,
    accessible: true,
    accessibilityRole: "button",
    accessibilityLabel,
    accessibilityState,
    activeOpacity: 0.8,
    children: null,
  };
  items = [tmp.pressable, style];
  obj = { variant: "text-sm/semibold", color: "text-default", style: tmp.label, children: null };
  const intl = getSystemLocale.intl;
  obj[3] = intl.string(getSystemLocale.t.gGtZpz);
  const items1 = [callback(Text.Text, obj)];
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
      if (
        markAsDismissed.visibleContent ===
        style(closure_1_2[11]).DismissibleContent.VIRTUAL_CURRENCY_MOBILE_ONBOARDING_PILL
      ) {
        function handleOnboardingPress() {
          markAsDismissed(closure_1_7.TAKE_ACTION);
          let obj = closure_1_1(closure_1_2[12]);
          obj.track(closure_1_5.USER_PROFILE_ACTION, { profile_action: "ORBS_BALANCE_PRESSED" });
          obj = {
            filter: closure_1_9.VIRTUAL_CURRENCY,
            fromContent: markAsDismissed(closure_1_2[14]).QuestContent.MOBILE_ORBS_ONBOARDING_DC,
          };
          markAsDismissed(closure_1_2[13]).openQuestHome(obj);
        }
        let obj = { onPress: null, style: null, accessibilityLabel: null, children: null };
        obj[0] = handleOnboardingPress;
        obj[1] = markAsDismissed;
        const intl = tmp(tmp2[9]).intl;
        obj[2] = intl.string(tmp(tmp2[9]).t.Kt2QDh);
        obj = { onPress: null, accessible: false };
        obj[0] = handleOnboardingPress;
        obj[3] = closure_1_10(closure_1_1(tmp2[15]), obj);
        return closure_1_10(closure_1_12, obj);
      } else {
        return null;
      }
    };
    return jsx(tmp, obj);
  }
}
function BalanceWidgetMenu(style) {
  let str;
  let obj = str(11352);
  str = obj.useFetchVirtualCurrencyBalance().balance;
  let items = [str];
  const callback = React.useCallback(() => {
    let obj = closure_1_1(closure_1_2[12]);
    obj.track(closure_1_5.USER_PROFILE_ACTION, { profile_action: "ORBS_BALANCE_PRESSED" });
    obj1 = closure_1_1(closure_1_2[17]);
    obj = { balance: str, primaryButtonConfig: null, secondaryButtonConfig: null, source: null };
    obj = { buttonText: null, onButtonPress: null };
    const intl = str(closure_1_2[9]).intl;
    obj[0] = intl.string(str(closure_1_2[9]).t.WrzJBf);
    obj[1] = function onButtonPress() {
      let obj = closure_1_1(closure_1_2[12]);
      obj = { type: "GO_TO_SHOP", source: closure_1_1(closure_1_2[20]).YOU_SCREEN, balance: closure_0 };
      obj.track(closure_1_5.ORB_BALANCE_ACTION_SHEET_ACTION, obj);
      closure_1_1(closure_1_2[17]).hideActionSheet();
      const obj3 = closure_1_1(closure_1_2[17]);
      obj = { analyticsLocations: null, analyticsSource: null, screen: null };
      const items = [closure_1_1(closure_1_2[20]).COLLECTIBLES_SHOP];
      obj[0] = items;
      obj[1] = closure_1_1(closure_1_2[20]).COLLECTIBLES_SHOP;
      obj[2] = closure_1_6.ORBS;
      const result = closure_1_0(closure_1_2[21]).openCollectiblesShopMobile(obj);
    };
    obj[1] = obj;
    obj1 = { buttonText: null, onButtonPress: null };
    const intl2 = str(closure_1_2[9]).intl;
    obj1[0] = intl2.string(str(closure_1_2[9]).t.SymzJC);
    obj1[1] = function onButtonPress() {
      let obj = closure_1_1(closure_1_2[12]);
      obj = { type: "GO_TO_QUEST_HOME", source: closure_1_1(closure_1_2[20]).YOU_SCREEN, balance: closure_0 };
      obj.track(closure_1_5.ORB_BALANCE_ACTION_SHEET_ACTION, obj);
      closure_1_1(closure_1_2[17]).hideActionSheet();
      const obj3 = closure_1_1(closure_1_2[17]);
      obj = {
        mergeExistingRoutes: true,
        filter: closure_1_9.VIRTUAL_CURRENCY,
        fromContent: closure_1_0(closure_1_2[14]).QuestContent.ORBS_BALANCE_MENU,
      };
      closure_1_0(closure_1_2[13]).openQuestHome(obj);
    };
    obj[2] = obj1;
    obj[3] = closure_1_1(closure_1_2[20]).YOU_SCREEN;
    obj1.openLazy(
      () => callback(paths[19])(paths[18], paths.paths).then((arg0) => arg0.default),
      "BalanceWidgetMenu",
      obj,
    );
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
  obj[3] = closure_10(BalanceWidgetPillButtonDefault, { balance: str, onPress: callback, accessible: false });
  return closure_10(BalanceWidget, obj);
}
({ ContentDismissActionType: error, DismissibleContentGroupName: closure_8 } = ContentDismissActionType);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
let closure_15 = createCacheKey.createStyles(() => {
  let obj = { pressable: null, label: null, pill: null, loadingContainer: null };
  obj = {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap",
    gap: ThemesDefault.space.PX_8,
    paddingHorizontal: ThemesDefault.space.PX_8,
    paddingVertical: ThemesDefault.space.PX_8,
    borderRadius: ThemesDefault.radii.md,
  };
  obj[0] = obj;
  obj[1] = { flex: 1 };
  obj[2] = { alignItems: "center" };
  obj[3] = { height: 36, justifyContent: "center" };
  return obj;
});
let result = require("set").fileFinishedImporting("modules/virtual_currency/native/BalanceWidgetMenu.tsx");

export default function BalanceWidgetMenuWrapper(style) {
  let obj = _mod11352;
  const balance = obj.useFetchVirtualCurrencyBalance().balance;
  UNSAFE_isDismissibleContentDismissed;
  if (null == balance) {
    obj = { onPress: null, style: null, accessibilityLabel: null, accessibilityState: null, children: null };
    obj[0] = function onPress() {};
    obj[1] = style.style;
    const intl = tmp2(1236).intl;
    obj[2] = intl.string(tmp2(1236).t.cKwv4k);
    obj[3] = { busy: true };
    obj = { style: null, children: null };
    obj[0] = tmp.loadingContainer;
    obj[1] = callback(tmp2(4944).Ellipsis, { variant: "primary", size: "sm" });
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
}
export { OrbsOnboardingMenuDismissibleContent };
