// discord_app/modules/user_profile/native/UserProfileDismissibleUpsells.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

const util = ShopIcon(1114);
const native = ShopIcon(1178);
const Text_Text = ShopIcon(4556);
const components_Button_Button = ShopIcon(4975);
const Pressables = ShopIcon(5123);
const XSmallIcon = ShopIcon(5680);
const NitroWheelIcon = ShopIcon(8662);
const ShopIcon2 = ShopIcon(12138);
require = fn;
const View = fn(17).View;
const TrackUserProfileActions = fn(8183).TrackUserProfileActions;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let items = [...fn(7432).Gradients.PREMIUM_GUILD];
let closure_10 = items.reverse();
fn(4560);
let createStyles = {
  upsellContainer: null,
  customProfileThemeUpsellContainer: null,
  header: null,
  upsellButtonsContainer: null,
  upsellButton: null,
};
createStyles = {
  paddingVertical: 16,
  paddingHorizontal: 12,
  borderRadius: nativeDefault.radii.lg,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
createStyles.upsellContainer = createStyles;
createStyles.customProfileThemeUpsellContainer = {
  backgroundColor: nativeDefault.colors.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME,
};
createStyles.header = { display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" };
createStyles.upsellButtonsContainer = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: 10,
  marginTop: 12,
};
createStyles.upsellButton = { flex: 1 };
let closure_11 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileDismissibleUpsells.tsx");

export default function UserProfileDismissibleUpsells(navigateToShop) {
  navigateToShop = navigateToShop.navigateToShop;
  const navigateToPremium = navigateToShop.navigateToPremium;
  const hasCustomProfileTheme = navigateToShop.hasCustomProfileTheme;
  let currentUser;
  noop = closure_11();
  let obj = navigateToShop(hasCustomProfileTheme[9]);
  const isPrivacyNoticeVisible = obj.useIsPrivacyNoticeVisible();
  const trackUserProfileAction = navigateToShop(hasCustomProfileTheme[10]).useUserProfileAnalyticsContext()
    .trackUserProfileAction;
  let obj2 = navigateToShop(hasCustomProfileTheme[10]);
  let tmp = navigateToShop;
  let items = [currentUser];
  const stateFromStores = navigateToShop(hasCustomProfileTheme[11]).useStateFromStores(items, () =>
    currentUser.getCurrentUser(),
  );
  let obj3 = navigateToShop(hasCustomProfileTheme[11]);
  currentUser = navigateToShop(hasCustomProfileTheme[12]).isPremium(stateFromStores);
  let items1 = [navigateToShop, trackUserProfileAction];
  const onPress = noop.useCallback(() => {
    trackUserProfileAction({ action: TrackUserProfileActions.VISIT_SHOP });
    navigateToShop();
  }, items1);
  const items2 = [navigateToPremium, trackUserProfileAction];
  closure_7 = noop.useCallback(() => {
    trackUserProfileAction({ action: TrackUserProfileActions.GET_PREMIUM });
    navigateToPremium();
  }, items2);
  const items3 = [navigateToPremium, trackUserProfileAction];
  closure_8 = noop.useCallback(() => {
    trackUserProfileAction({ action: TrackUserProfileActions.VIEW_PREMIUM_PERKS });
    navigateToPremium();
  }, items3);
  if (isPrivacyNoticeVisible) {
    let tmp5Result = tmp5(tmp6(tmp2[9]), {});
  } else {
    obj = { contentTypes: null, children: null };
    const items4 = [tmp(tmp2[14]).DismissibleContent.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS];
    obj.contentTypes = items4;
    obj.children = function children(markAsDismissed) {
      markAsDismissed = markAsDismissed.markAsDismissed;
      let ShopIcon = require;
      let tmp = dependencyMap;
      if (
        markAsDismissed.visibleContent !==
        dismissible_content.DismissibleContent.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS
      ) {
        return null;
      } else {
        let obj = {
          borderWidth: 2,
          direction: native.GradientBorder.Direction.VERTICAL,
          colors,
          borderRadius: nativeDefault.radii.lg,
          children: null,
        };
        obj = {};
        let tmp12Result = upsellContainer;
        const merged = Object.assign(upsellContainer.upsellContainer);
        const tmp2 = hasCustomProfileTheme ? tmp12Result.customProfileThemeUpsellContainer : {};
        let obj1 = { style: null, children: null };
        const merged1 = Object.assign(tmp2);
        obj1.style = obj;
        const obj2 = { style: tmp12Result.header, children: null };
        const obj3 = { accessibilityRole: "header", variant: "text-sm/semibold", children: null };
        const intl = util.intl;
        obj3.children = intl.string(util.t.EIYbj6);
        const items = [React6(Text_Text.Text, obj3)];
        const obj4 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
        const intl2 = util.intl;
        obj4.accessibilityLabel = intl2.string(util.t["6Xcq+Y"]);
        obj4.onPress = function onPress() {
          return markAsDismissed(constants.USER_DISMISS);
        };
        obj4.children = React6(XSmallIcon.XSmallIcon, { size: "sm" });
        items[1] = React6(Pressables.PressableOpacity, obj4);
        obj2.children = items;
        const items1 = [React7(View, obj2)];
        let obj5 = { style: tmp12Result.upsellButtonsContainer, children: null };
        let obj6 = { style: tmp12Result.upsellButton, children: null };
        let Button = components_Button_Button.Button;
        const intl3 = util.intl;
        const string = intl3.string;
        const t = util.t;
        if (closure_5) {
          let stringResult = string(t["0Q61kF"]);
        } else {
          stringResult = string(t.x6rkDp);
        }
        let obj7 = {
          text: stringResult,
          onPress: closure_5 ? closure_8 : constants,
          icon: React6(NitroWheelIcon.NitroWheelIcon, { size: "sm" }),
          iconPosition: "start",
          variant: "secondary",
          shiny: true,
        };
        obj6.children = React6(Button, obj7);
        tmp12Result = React6(View, obj6);
        obj6 = [tmp12Result];
        const obj8 = { style: tmp12Result.upsellButton, children: null };
        Button = components_Button_Button.Button;
        const obj9 = { text: null, onPress: null, icon: null, iconPosition: "start", variant: "secondary" };
        const intl4 = util.intl;
        obj9.text = intl4.string(util.t.pWG4ze);
        obj9.onPress = onPress;
        ShopIcon = ShopIcon2.ShopIcon;
        tmp = React6(ShopIcon, { size: "sm" });
        obj9.icon = tmp;
        tmp12Result = React6(Button, obj9);
        obj8.children = tmp12Result;
        obj7 = React6(View, obj8);
        obj6[1] = obj7;
        obj5.children = obj6;
        obj5 = React7(View, obj5);
        items1[1] = obj5;
        obj1.children = items1;
        obj1 = React7(View, obj1);
        obj.children = obj1;
        React6(native.GradientBorder, obj);
      }
    };
    tmp5Result = tmp5(tmp6(tmp2[13]), obj);
    const tmp6Result = tmp6(tmp2[13]);
  }
  return tmp5Result;
}
