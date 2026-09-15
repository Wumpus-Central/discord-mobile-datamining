// discord_app/modules/virtual_currency/native/BalanceWidgetMenu.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import AnalyticsUtilsDefault from "../../../utils/AnalyticsUtils.tsx";
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentUnsafeUtils from "../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import ButtonEllipsis from "../../../design/components/Button/native/ButtonEllipsis.native.tsx";
import Pressables from "../../../design/void/Pressables/native/Pressables.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import _mod8978 from "../hooks/index.tsx";
import SelectedDismissibleContentDefault from "../../dismissible_content/native/SelectedDismissibleContent.tsx";
import BalanceWidgetPillButtonDefault from "BalanceWidgetPillButton.tsx";
import OrbOnboardingPillDefault from "OrbOnboardingPill.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function BalanceWidget(arg0) {
  ({ onPress, style, accessibilityLabel, accessibilityState, children } = arg0);
  const tmp = closure_15();
  const obj = {
    onPress,
    style: null,
    accessible: true,
    accessibilityRole: "button",
    accessibilityLabel,
    accessibilityState,
    activeOpacity: 0.8,
    children: null,
  };
  const items = [tmp.pressable, style];
  obj.style = items;
  const obj2 = { variant: "text-sm/semibold", color: "text-default", style: tmp.label, children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.gGtZpz);
  const items1 = [closure_1_10(Text_Text.Text, obj2), closure_1_10(View, { style: tmp.pill, children })];
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
      if (
        markAsDismissed.visibleContent ===
        dismissible_content.DismissibleContent.VIRTUAL_CURRENCY_MOBILE_ONBOARDING_PILL
      ) {
        function handleOnboardingPress() {
          markAsDismissed(constants2.TAKE_ACTION);
          AnalyticsUtilsDefault.track(constants.USER_PROFILE_ACTION, { profile_action: "ORBS_BALANCE_PRESSED" });
          const obj2 = style(11901);
          obj2.openQuestHome({
            filter: constants3.VIRTUAL_CURRENCY,
            fromContent: style(5532).QuestContent.MOBILE_ORBS_ONBOARDING_DC,
          });
        }
        let obj = { onPress: handleOnboardingPress, style, accessibilityLabel: null, children: null };
        const intl = util.intl;
        obj.accessibilityLabel = intl.string(util.t.Kt2QDh);
        let obj2 = { onPress: handleOnboardingPress, accessible: false };
        obj.children = closure_2_10(OrbOnboardingPillDefault, obj2);
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
  str = str(8978).useFetchVirtualCurrencyBalance().balance;
  let items = [str];
  const callback = noop.useCallback(() => {
    AnalyticsUtilsDefault.track(AnalyticEvents.USER_PROFILE_ACTION, { profile_action: "ORBS_BALANCE_PRESSED" });
    let obj3 = { balance: str, primaryButtonConfig: null, secondaryButtonConfig: null, source: null };
    let obj4 = { buttonText: null, onButtonPress: null };
    const intl = util.intl;
    obj4.buttonText = intl.string(util.t.WrzJBf);
    obj4.onButtonPress = function onButtonPress() {
      const obj = AnalyticsUtilsDefault;
      obj.track(constants.ORB_BALANCE_ACTION_SHEET_ACTION, {
        type: "GO_TO_SHOP",
        source: AnalyticsLocationDefault.YOU_SCREEN,
        balance,
      });
      const obj2 = { type: "GO_TO_SHOP", source: AnalyticsLocationDefault.YOU_SCREEN, balance };
      ActionSheetActionCreatorsDefault.hideActionSheet();
      const obj5 = { analyticsLocations: null, analyticsSource: null, screen: null };
      const items = [AnalyticsLocationDefault.COLLECTIBLES_SHOP];
      obj5.analyticsLocations = items;
      obj5.analyticsSource = AnalyticsLocationDefault.COLLECTIBLES_SHOP;
      obj5.screen = constants2.ORBS;
      const result = str(7648).openCollectiblesShopMobile(obj5);
    };
    obj3.primaryButtonConfig = obj4;
    let obj5 = { buttonText: null, onButtonPress: null };
    const intl2 = util.intl;
    obj5.buttonText = intl2.string(util.t.SymzJC);
    obj5.onButtonPress = function onButtonPress() {
      const obj = AnalyticsUtilsDefault;
      obj.track(constants.ORB_BALANCE_ACTION_SHEET_ACTION, {
        type: "GO_TO_QUEST_HOME",
        source: AnalyticsLocationDefault.YOU_SCREEN,
        balance,
      });
      const obj2 = { type: "GO_TO_QUEST_HOME", source: AnalyticsLocationDefault.YOU_SCREEN, balance };
      ActionSheetActionCreatorsDefault.hideActionSheet();
      const obj4 = str(11901);
      obj4.openQuestHome({
        mergeExistingRoutes: true,
        filter: constants3.VIRTUAL_CURRENCY,
        fromContent: str(5532).QuestContent.ORBS_BALANCE_MENU,
      });
    };
    obj3.secondaryButtonConfig = obj5;
    obj3.source = AnalyticsLocationDefault.YOU_SCREEN;
    ActionSheetActionCreatorsDefault.openLazy(
      () => balance(paths[19])(paths[18], paths.paths).then((result) => result.default),
      "BalanceWidgetMenu",
      obj3,
    );
  }, items);
  let obj2 = { onPress: callback, style: style.style, accessibilityLabel: null, children: null };
  let intl = str(1115).intl;
  let str2;
  if (str != null) {
    str2 = str.toString();
  }
  if (str2 == null) {
    str2 = "";
  }
  obj2.accessibilityLabel = intl.formatToPlainString(str(1115).t.zPaLL9, { balance: str2 });
  obj2.children = closure_10(BalanceWidgetPillButtonDefault, { balance: str, onPress: callback, accessible: false });
  return closure_10(BalanceWidget, obj2);
}
const View = fn(17).View;
const AnalyticEvents = fn(1074).AnalyticEvents;
let closure_6 = fn(1076).CollectiblesMobileShopScreen;
const DismissibleContentConstants = fn(1955);
({ ContentDismissActionType: closure_7, DismissibleContentGroupName: closure_8 } = DismissibleContentConstants);
const RewardFilterTypes = fn(5529).RewardFilterTypes;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4639);
let closure_15 = createStyles.createStyles(() => {
  const obj = {
    pressable: {
      flex: 1,
      flexDirection: "row",
      alignItems: "center",
      flexWrap: "wrap",
      gap: nativeDefault.space.PX_8,
      paddingHorizontal: nativeDefault.space.PX_8,
      paddingVertical: nativeDefault.space.PX_8,
      borderRadius: nativeDefault.radii.md,
    },
    label: { flex: 1 },
    pill: { alignItems: "center" },
    loadingContainer: { height: 36, justifyContent: "center" },
  };
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/virtual_currency/native/BalanceWidgetMenu.tsx");

export default function BalanceWidgetMenuWrapper(style) {
  const tmp = closure_15();
  const balance = _mod8978.useFetchVirtualCurrencyBalance().balance;
  DismissibleContentUnsafeUtils;
  if (null == balance) {
    const obj2 = {
      onPress() {},
      style: style.style,
      accessibilityLabel: null,
      accessibilityState: null,
      children: null,
    };
    const intl = util.intl;
    obj2.accessibilityLabel = intl.string(util.t.cKwv4k);
    obj2.accessibilityState = { busy: true };
    const obj3 = {
      style: tmp.loadingContainer,
      children: closure_1_10(ButtonEllipsis.Ellipsis, { variant: "primary", size: "sm" }),
    };
    obj2.children = closure_1_10(View, obj3);
    let tmp6Result = closure_1_10(BalanceWidget, obj2);
  } else {
    if (balance <= 0) {
      if (!tmp5) {
        let tmp7 = OrbsOnboardingMenuDismissibleContent;
      }
      const obj4 = {};
      const merged = Object.assign(style);
      tmp6Result = tmp6(tmp7, obj4);
    }
    tmp7 = BalanceWidgetMenu;
  }
  return tmp6Result;
}
export { OrbsOnboardingMenuDismissibleContent };
