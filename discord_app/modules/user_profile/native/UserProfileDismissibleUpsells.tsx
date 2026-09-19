// discord_app/modules/user_profile/native/UserProfileDismissibleUpsells.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

const util = ShopIcon(1115);
const native = ShopIcon(1177);
const Text_Text = ShopIcon(4752);
const components_Button_Button = ShopIcon(5186);
const Pressables = ShopIcon(5334);
const XSmallIcon = ShopIcon(5892);
const NitroWheelIcon = ShopIcon(8939);
const ShopIcon2 = ShopIcon(12389);
require = fn;
const View = fn(17).View;
const TrackUserProfileActions = fn(8451).TrackUserProfileActions;
const ContentDismissActionType = fn(2038).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let items = [...fn(7672).Gradients.PREMIUM_GUILD];
let closure_10 = items.reverse();
const createStyles = fn(4756);
let obj2 = {
  upsellContainer: {
    paddingVertical: 16,
    paddingHorizontal: 12,
    borderRadius: nativeDefault.radii.lg,
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  },
  customProfileThemeUpsellContainer: null,
  header: null,
  upsellButtonsContainer: null,
  upsellButton: null,
};
let obj3 = {
  paddingVertical: 16,
  paddingHorizontal: 12,
  borderRadius: nativeDefault.radii.lg,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
obj2.customProfileThemeUpsellContainer = {
  backgroundColor: nativeDefault.colors.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME,
};
obj2.header = { display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" };
obj2.upsellButtonsContainer = {
  display: "flex",
  flexDirection: "row",
  justifyContent: "space-between",
  flexWrap: "wrap",
  gap: 10,
  marginTop: 12,
};
obj2.upsellButton = { flex: 1 };
let closure_11 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileDismissibleUpsells.tsx");

export default function UserProfileDismissibleUpsells(navigateToShop) {
  navigateToShop = navigateToShop.navigateToShop;
  const navigateToPremium = navigateToShop.navigateToPremium;
  const hasCustomProfileTheme = navigateToShop.hasCustomProfileTheme;
  let currentUser;
  noop = closure_11();
  const isPrivacyNoticeVisible = navigateToShop(hasCustomProfileTheme[9]).useIsPrivacyNoticeVisible();
  let obj = navigateToShop(hasCustomProfileTheme[9]);
  let tmp = navigateToShop;
  const trackUserProfileAction = navigateToShop(hasCustomProfileTheme[10]).useUserProfileAnalyticsContext()
    .trackUserProfileAction;
  let obj2 = navigateToShop(hasCustomProfileTheme[10]);
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
    let obj5 = { contentTypes: null, children: null };
    const items4 = [tmp(tmp2[14]).DismissibleContent.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS];
    obj5.contentTypes = items4;
    obj5.children = function children(markAsDismissed) {
      markAsDismissed = markAsDismissed.markAsDismissed;
      let ShopIcon = require;
      let tmp = dependencyMap;
      if (
        markAsDismissed.visibleContent !==
        dismissible_content.DismissibleContent.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS
      ) {
        return null;
      } else {
        const obj = {
          borderWidth: 2,
          direction: native.GradientBorder.Direction.VERTICAL,
          colors,
          borderRadius: nativeDefault.radii.lg,
          children: null,
        };
        const obj2 = {};
        let tmp12Result3 = upsellContainer;
        const merged = Object.assign(upsellContainer.upsellContainer);
        const tmp2 = hasCustomProfileTheme ? tmp12Result3.customProfileThemeUpsellContainer : {};
        let obj3 = { style: null, children: null };
        const merged1 = Object.assign(tmp2);
        obj3.style = obj2;
        const obj4 = { style: tmp12Result3.header, children: null };
        const obj5 = { accessibilityRole: "header", variant: "text-sm/semibold", children: null };
        const intl = util.intl;
        obj5.children = intl.string(util.t.EIYbj6);
        const items = [React6(Text_Text.Text, obj5)];
        const obj6 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
        const intl2 = util.intl;
        obj6.accessibilityLabel = intl2.string(util.t["6Xcq+Y"]);
        obj6.onPress = function onPress() {
          return markAsDismissed(constants.USER_DISMISS);
        };
        obj6.children = React6(XSmallIcon.XSmallIcon, { size: "sm" });
        items[1] = React6(Pressables.PressableOpacity, obj6);
        obj4.children = items;
        const items1 = [React7(View, obj4)];
        let obj7 = { style: tmp12Result3.upsellButtonsContainer, children: null };
        let obj8 = { style: tmp12Result3.upsellButton, children: null };
        let Button = components_Button_Button.Button;
        const intl3 = util.intl;
        const string = intl3.string;
        const t = util.t;
        if (closure_5) {
          let stringResult = string(t["0Q61kF"]);
        } else {
          stringResult = string(t.x6rkDp);
        }
        let obj9 = {
          text: stringResult,
          onPress: closure_5 ? closure_8 : constants,
          icon: React6(NitroWheelIcon.NitroWheelIcon, { size: "sm" }),
          iconPosition: "start",
          variant: "secondary",
          shiny: true,
        };
        obj8.children = React6(Button, obj9);
        obj8 = [,];
        obj8[0] = React6(View, obj8);
        const obj10 = { style: tmp12Result3.upsellButton, children: null };
        Button = components_Button_Button.Button;
        const obj20 = { text: null, onPress: null, icon: null, iconPosition: "start", variant: "secondary" };
        const intl4 = util.intl;
        obj20.text = intl4.string(util.t.pWG4ze);
        obj20.onPress = onPress;
        ShopIcon = ShopIcon2.ShopIcon;
        tmp = React6(ShopIcon, { size: "sm" });
        obj20.icon = tmp;
        tmp12Result3 = React6(Button, obj20);
        obj10.children = tmp12Result3;
        obj9 = React6(View, obj10);
        obj8[1] = obj9;
        obj7.children = obj8;
        obj7 = React7(View, obj7);
        items1[1] = obj7;
        obj3.children = items1;
        obj3 = React7(View, obj3);
        obj.children = obj3;
        React6(native.GradientBorder, obj);
        const tmp12Result = React6(View, obj8);
      }
    };
    tmp5Result = tmp5(tmp6(tmp2[13]), obj5);
    const tmp6Result = tmp6(tmp2[13]);
  }
  return tmp5Result;
}
