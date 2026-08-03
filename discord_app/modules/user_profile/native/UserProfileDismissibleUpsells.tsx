import XSmallIcon from "XSmallIcon";
import { View } from "getSystemLocale";
import mergeGuildAvatar from "mergeGuildAvatar";
import { TrackUserProfileActions } from "USER_PROFILE_TOOLTIP_DELAY";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "NitroWheelIcon";
import createCacheKey from "createCacheKey";

let c9;
let metroImportAll;
const require = arg1;
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
let items = [...require("items").Gradients.PREMIUM_GUILD];
let closure_10 = items.reverse();
createCacheKey = { upsellContainer: null, customProfileThemeUpsellContainer: null, header: null, upsellButtonsContainer: null, upsellButton: null };
createCacheKey = { paddingVertical: 16, paddingHorizontal: 12, borderRadius: require("Themes").radii.lg, backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { backgroundColor: require("Themes").colors.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME };
createCacheKey[2] = { display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" };
createCacheKey[3] = { display: "flex", flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap", gap: 10, marginTop: 12 };
createCacheKey[4] = { flex: 1 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj1 = { backgroundColor: require("Themes").colors.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME };
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/user_profile/native/UserProfileDismissibleUpsells.tsx");

export default function UserProfileDismissibleUpsells(navigateToShop) {
  navigateToShop = navigateToShop.navigateToShop;
  const navigateToPremium = navigateToShop.navigateToPremium;
  const hasCustomProfileTheme = navigateToShop.hasCustomProfileTheme;
  let React;
  let trackUserProfileAction;
  let mergeGuildAvatar;
  let closure_6;
  let closure_7;
  let closure_8;
  React = createCacheKey();
  let obj = navigateToShop(hasCustomProfileTheme[9]);
  const isPrivacyNoticeVisible = obj.useIsPrivacyNoticeVisible();
  trackUserProfileAction = navigateToShop(hasCustomProfileTheme[10]).useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj2 = navigateToShop(hasCustomProfileTheme[10]);
  let tmp = navigateToShop;
  let items = [mergeGuildAvatar];
  const stateFromStores = navigateToShop(hasCustomProfileTheme[11]).useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj3 = navigateToShop(hasCustomProfileTheme[11]);
  mergeGuildAvatar = navigateToShop(hasCustomProfileTheme[12]).isPremium(stateFromStores);
  let items1 = [navigateToShop, trackUserProfileAction];
  closure_6 = React.useCallback(() => {
    trackUserProfileAction({ action: constants.VISIT_SHOP });
    navigateToShop();
  }, items1);
  const items2 = [navigateToPremium, trackUserProfileAction];
  closure_7 = React.useCallback(() => {
    trackUserProfileAction({ action: constants.GET_PREMIUM });
    navigateToPremium();
  }, items2);
  const items3 = [navigateToPremium, trackUserProfileAction];
  closure_8 = React.useCallback(() => {
    trackUserProfileAction({ action: constants.VIEW_PREMIUM_PERKS });
    navigateToPremium();
  }, items3);
  if (isPrivacyNoticeVisible) {
    let tmp5Result = tmp5(tmp6(tmp2[9]), {});
  } else {
    obj = { contentTypes: null, children: null };
    const items4 = [tmp(tmp2[14]).DismissibleContent.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS];
    obj[0] = items4;
    obj[1] = function children(markAsDismissed) {
      markAsDismissed = markAsDismissed.markAsDismissed;
      let ShopIcon = navigateToShop;
      let tmp = hasCustomProfileTheme;
      if (markAsDismissed.visibleContent !== navigateToShop(hasCustomProfileTheme[14]).DismissibleContent.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS) {
        return null;
      } else {
        let obj = { borderWidth: 2, direction: null, colors: null, borderRadius: null, children: null };
        obj[1] = ShopIcon(tmp[15]).GradientBorder.Direction.VERTICAL;
        obj[2] = outer1_10;
        obj[3] = navigateToPremium(tmp[8]).radii.lg;
        obj = {};
        let tmp12Result = upsellContainer;
        const merged = Object.assign(upsellContainer.upsellContainer);
        const tmp2 = hasCustomProfileTheme ? tmp12Result.customProfileThemeUpsellContainer : {};
        let obj1 = { style: null, children: null };
        const merged1 = Object.assign(tmp2);
        obj1[0] = obj;
        const obj2 = { style: null, children: null };
        obj2[0] = tmp12Result.header;
        const obj3 = { accessibilityRole: "header", variant: "text-sm/semibold", children: null };
        const intl = ShopIcon(tmp[17]).intl;
        obj3[2] = intl.string(ShopIcon(tmp[17]).t.EIYbj6);
        const items = [closure_8(ShopIcon(tmp[16]).Text, obj3), ];
        const obj4 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
        const intl2 = ShopIcon(tmp[17]).intl;
        obj4[1] = intl2.string(ShopIcon(tmp[17]).t["6Xcq+Y"]);
        obj4[2] = function onPress() {
          return markAsDismissed(outer1_7.USER_DISMISS);
        };
        obj4[3] = closure_8(ShopIcon(tmp[19]).XSmallIcon, { size: "sm" });
        items[1] = closure_8(ShopIcon(tmp[18]).PressableOpacity, obj4);
        obj2[1] = items;
        const items1 = [outer1_9(trackUserProfileAction, obj2), ];
        let obj5 = { style: null, children: null };
        obj5[0] = tmp12Result.upsellButtonsContainer;
        let obj6 = { style: null, children: null };
        obj6[0] = tmp12Result.upsellButton;
        let Button = ShopIcon(tmp[20]).Button;
        const intl3 = ShopIcon(tmp[17]).intl;
        const string = intl3.string;
        const t = ShopIcon(tmp[17]).t;
        if (mergeGuildAvatar) {
          let stringResult = string(t["0Q61kF"]);
        } else {
          stringResult = string(t.x6rkDp);
        }
        let obj7 = { text: null, onPress: null, icon: null, iconPosition: "start", variant: "secondary", shiny: true };
        obj7[0] = stringResult;
        obj7[1] = mergeGuildAvatar ? closure_8 : closure_7;
        obj7[2] = closure_8(ShopIcon(tmp[21]).NitroWheelIcon, { size: "sm" });
        obj6[1] = closure_8(Button, obj7);
        tmp12Result = tmp12(tmp16, obj6);
        obj6 = [tmp12Result, ];
        const obj8 = { style: null, children: null };
        obj8[0] = tmp12Result.upsellButton;
        Button = ShopIcon(tmp[20]).Button;
        const obj9 = { text: null, onPress: null, icon: null, iconPosition: "start", variant: "secondary" };
        const intl4 = ShopIcon(tmp[17]).intl;
        obj9[0] = intl4.string(ShopIcon(tmp[17]).t.pWG4ze);
        obj9[1] = closure_6;
        ShopIcon = ShopIcon(tmp[22]).ShopIcon;
        tmp = tmp12(ShopIcon, { size: "sm" });
        obj9[2] = tmp;
        tmp12Result = tmp12(Button, obj9);
        obj8[1] = tmp12Result;
        obj7 = tmp12(tmp16, obj8);
        obj6[1] = obj7;
        obj5[1] = obj6;
        obj5 = tmp15(tmp16, obj5);
        items1[1] = obj5;
        obj1[1] = items1;
        obj1 = tmp15(tmp16, obj1);
        obj[4] = obj1;
        closure_8(ShopIcon(tmp[15]).GradientBorder, obj);
        const tmp6 = mergeGuildAvatar;
      }
    };
    tmp5Result = tmp5(tmp6(tmp2[13]), obj);
    const tmp6Result = tmp6(tmp2[13]);
  }
  return tmp5Result;
};