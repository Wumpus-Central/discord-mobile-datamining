// === Module 12949: UserProfileDismissibleUpsells ===

// Module 12949 (UserProfileDismissibleUpsells)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import dismissible_content from "dismissible_content" /* 2036 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import Text_Text from "Text/Text" /* 4892 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import Pressables from "Pressables" /* 5916 */;
import XSmallIcon from "XSmallIcon" /* 6024 */;
import ColorConstants from "ColorConstants" /* 6951 */;
import Constants from "Constants" /* 7865 */;
import NitroWheelIcon from "NitroWheelIcon" /* 8346 */;
import ShopIcon from "ShopIcon" /* 11776 */;
import react_mod from "react" /* 19 */;
import UserStore from "UserStore" /* 1377 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let navigateToShop;

let c9;
let metroImportAll;
let obj2;
let obj3;
let react = react_mod;
const View = react_native.View;
const TrackUserProfileActions = Constants.TrackUserProfileActions;
const Gradients = ColorConstants.Gradients;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let items = [...Gradients.PREMIUM_GUILD];
let closure_10 = items.reverse();
let createStyles = createStyles_mod;
let obj = { upsellContainer: obj2, customProfileThemeUpsellContainer: obj3, header: { display: "flex", flexDirection: "row", justifyContent: "space-between", alignItems: "center" }, upsellButtonsContainer: { display: "flex", flexDirection: "row", justifyContent: "space-between", flexWrap: "wrap", gap: 10, marginTop: 12 }, upsellButton: { flex: 1 } };
obj2 = { paddingVertical: 16, paddingHorizontal: 12, borderRadius: nativeDefault.radii.lg, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME };
let closure_11 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((navigateToShop) => {
  let colors;
  let currentUser;
  let hasCustomProfileTheme;
  let tmp10;
  let tmp6;
  let tmp7;
  let obj = navigateToShop(hasCustomProfileTheme[10]);
  const cResult = obj.c(22);
  navigateToShop = navigateToShop.navigateToShop;
  const navigateToPremium = navigateToShop.navigateToPremium;
  hasCustomProfileTheme = navigateToShop.hasCustomProfileTheme;
  let tmp4 = closure_11();
  const upsellContainer = tmp4;
  let obj2 = navigateToShop(hasCustomProfileTheme[11]);
  const isPrivacyNoticeVisible = obj2.useIsPrivacyNoticeVisible();
  let obj3 = navigateToShop(hasCustomProfileTheme[12]);
  const trackUserProfileAction = obj3.useUserProfileAnalyticsContext().trackUserProfileAction;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [currentUser];
    const fn = function u() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp6 = items;
    tmp7 = fn;
  } else {
    [tmp6, tmp7] = cResult;
  }
  const tmpResult = navigateToShop(hasCustomProfileTheme[13]);
  const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
  if (cResult[2] !== stateFromStores) {
    const tmpResult2 = navigateToShop(hasCustomProfileTheme[14]);
    const isPremiumResult = tmpResult2.isPremium(stateFromStores);
    cResult[2] = stateFromStores;
    cResult[3] = isPremiumResult;
    tmp10 = isPremiumResult;
  } else {
    tmp10 = cResult[3];
  }
  currentUser = tmp10;
  if (cResult[4] === navigateToShop) {
    let tmp12;
    if (cResult[5] === trackUserProfileAction) {
      tmp12 = cResult[6];
    }
    const onPress = tmp12;
    if (cResult[7] === navigateToPremium) {
      let tmp13;
      if (cResult[8] === trackUserProfileAction) {
        tmp13 = cResult[9];
      }
      let closure_7 = tmp13;
      if (cResult[10] === navigateToPremium) {
        let tmp14;
        if (cResult[11] === trackUserProfileAction) {
          tmp14 = cResult[12];
        }
        let closure_8 = tmp14;
        if (isPrivacyNoticeVisible) {
          const _Symbol2 = Symbol;
          if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp24 = closure_8(navigateToPremium(hasCustomProfileTheme[11]), {});
            class D {
              constructor() {
                const obj = { action: TrackUserProfileActions.GET_PREMIUM };
                trackUserProfileAction(obj);
                navigateToPremium();
              }
            }
            cResult[13] = tmp24;
          }
          class D {
            constructor() {
              const obj = { action: TrackUserProfileActions.GET_PREMIUM };
              trackUserProfileAction(obj);
              navigateToPremium();
            }
          }
        } else {
          let tmp16;
          const _Symbol = Symbol;
          if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
            let items1 = [tmp(tmp2[15]).DismissibleContent.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS];
            class D {
              constructor() {
                const obj = { action: TrackUserProfileActions.GET_PREMIUM };
                trackUserProfileAction(obj);
                navigateToPremium();
              }
            }
            tmp16 = items1;
          } else {
            tmp16 = cResult[14];
          }
          class D {
            constructor() {
              const obj = { action: TrackUserProfileActions.GET_PREMIUM };
              trackUserProfileAction(obj);
              navigateToPremium();
            }
          }
          let obj4 = {
            contentTypes: tmp16,
            children(markAsDismissed) {
                      let Button;
                      let Button2;
                      let intl;
                      let intl2;
                      let intl4;
                      let items;
                      let items1;
                      let items2;
                      let obj;
                      let obj11;
                      let obj9;
                      markAsDismissed = markAsDismissed.markAsDismissed;
                      let tmp11Result = null;
                      if (markAsDismissed.visibleContent === dismissible_content.DismissibleContent.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS) {
                        let stringResult;
                        const obj2 = { borderWidth: 2, direction: native.GradientBorder.Direction.VERTICAL, colors, borderRadius: nativeDefault.radii.lg, children: React4(View, obj) };
                        const GradientBorder = native.GradientBorder;
                        const obj3 = {};
                        const merged = Object.assign(upsellContainer.upsellContainer);
                        obj = { style: obj3, children: items1 };
                        const tmp4 = hasCustomProfileTheme ? upsellContainer.customProfileThemeUpsellContainer : {};
                        const merged1 = Object.assign(tmp4);
                        const obj4 = { style: upsellContainer.header, children: items };
                        const obj5 = { accessibilityRole: "header", variant: "text-sm/semibold", children: intl.string(intl5.t.EIYbj6) };
                        const Text = Text_Text.Text;
                        intl = intl5.intl;
                        items = [metroImportAll(Text, obj5), ];
                        const obj6 = {
                          accessibilityRole: "button",
                          accessibilityLabel: intl2.string(intl5.t["6Xcq+Y"]),
                          onPress() {
                              return markAsDismissed(constants.USER_DISMISS);
                            },
                          children: metroImportAll(XSmallIcon.XSmallIcon, { size: "sm" })
                        };
                        const PressableOpacity = Pressables.PressableOpacity;
                        intl2 = intl5.intl;
                        items[1] = metroImportAll(PressableOpacity, obj6);
                        items1 = [React4(View, obj4), ];
                        const obj7 = { style: upsellContainer.upsellButtonsContainer, children: items2 };
                        const obj8 = { style: upsellContainer.upsellButton, children: metroImportAll(Button, obj9) };
                        Button = components_Button_Button.Button;
                        const intl3 = intl5.intl;
                        const string = intl3.string;
                        const t = intl5.t;
                        if (currentUser) {
                          stringResult = string(t["0Q61kF"]);
                        } else {
                          stringResult = string(t.x6rkDp);
                        }
                        obj9 = { text: stringResult, onPress: currentUser ? metroImportAll : constants, icon: metroImportAll(NitroWheelIcon.NitroWheelIcon, { size: "sm" }), iconPosition: "start", variant: "secondary", shiny: true };
                        items2 = [metroImportAll(View, obj8), ];
                        const obj10 = { style: upsellContainer.upsellButton, children: metroImportAll(Button2, obj11) };
                        obj11 = { text: intl4.string(intl5.t.pWG4ze), onPress, icon: metroImportAll(ShopIcon.ShopIcon, { size: "sm" }), iconPosition: "start", variant: "secondary" };
                        Button2 = components_Button_Button.Button;
                        intl4 = intl5.intl;
                        items2[1] = metroImportAll(View, obj10);
                        items1[1] = React4(View, obj7);
                        tmp11Result = metroImportAll(GradientBorder, obj2);
                      }
                      return tmp11Result;
                    }
          };
          const tmp20 = closure_8(navigateToPremium(hasCustomProfileTheme[16]), obj4);
          cResult[15] = tmp13;
          cResult[16] = tmp12;
          cResult[17] = tmp14;
          cResult[18] = hasCustomProfileTheme;
          cResult[19] = tmp10;
          cResult[20] = tmp4;
          cResult[21] = tmp20;
        }
        class D {
          constructor() {
            const obj = { action: TrackUserProfileActions.GET_PREMIUM };
            trackUserProfileAction(obj);
            navigateToPremium();
          }
        }
      }
      class D {
        constructor() {
          const obj = { action: TrackUserProfileActions.GET_PREMIUM };
          trackUserProfileAction(obj);
          navigateToPremium();
        }
      }
      cResult[10] = navigateToPremium;
      cResult[11] = trackUserProfileAction;
      cResult[12] = tmp15;
      tmp14 = tmp15;
    }
    class D {
      constructor() {
        const obj = { action: TrackUserProfileActions.GET_PREMIUM };
        trackUserProfileAction(obj);
        navigateToPremium();
      }
    }
    cResult[7] = navigateToPremium;
    cResult[8] = trackUserProfileAction;
    cResult[9] = D;
    tmp13 = D;
  }
  const fn2 = function f() {
    const obj = { action: TrackUserProfileActions.VISIT_SHOP };
    trackUserProfileAction(obj);
    navigateToShop();
  };
  cResult[4] = navigateToShop;
  cResult[5] = trackUserProfileAction;
  cResult[6] = fn2;
  tmp12 = fn2;
}) : ((navigateToShop) => {
  let colors;
  let items4;
  let tmp5Result;
  let upsellContainer;
  navigateToShop = navigateToShop.navigateToShop;
  const navigateToPremium = navigateToShop.navigateToPremium;
  const hasCustomProfileTheme = navigateToShop.hasCustomProfileTheme;
  let currentUser;
  react = closure_11();
  let obj = navigateToShop(hasCustomProfileTheme[11]);
  const isPrivacyNoticeVisible = obj.useIsPrivacyNoticeVisible();
  let obj2 = navigateToShop(hasCustomProfileTheme[12]);
  const trackUserProfileAction = obj2.useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj3 = navigateToShop(hasCustomProfileTheme[13]);
  let items = [currentUser];
  const stateFromStores = obj3.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj4 = navigateToShop(hasCustomProfileTheme[14]);
  currentUser = obj4.isPremium(stateFromStores);
  let items1 = [navigateToShop, trackUserProfileAction];
  const onPress = react.useCallback(() => {
    const obj = { action: TrackUserProfileActions.VISIT_SHOP };
    trackUserProfileAction(obj);
    navigateToShop();
  }, items1);
  let items2 = [navigateToPremium, trackUserProfileAction];
  let closure_7 = react.useCallback(() => {
    const obj = { action: TrackUserProfileActions.GET_PREMIUM };
    trackUserProfileAction(obj);
    navigateToPremium();
  }, items2);
  const items3 = [navigateToPremium, trackUserProfileAction];
  let closure_8 = react.useCallback(() => {
    const obj = { action: TrackUserProfileActions.VIEW_PREMIUM_PERKS };
    trackUserProfileAction(obj);
    navigateToPremium();
  }, items3);
  const tmp = navigateToShop;
  if (isPrivacyNoticeVisible) {
    tmp5Result = tmp5(tmp6(tmp2[11]), {});
  } else {
    let obj5 = {
      contentTypes: items4,
      children(markAsDismissed) {
          let Button;
          let Button2;
          let intl;
          let intl2;
          let intl4;
          let items;
          let items1;
          let items2;
          let obj;
          let obj11;
          let obj9;
          markAsDismissed = markAsDismissed.markAsDismissed;
          let tmp11Result = null;
          if (markAsDismissed.visibleContent === dismissible_content.DismissibleContent.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS) {
            let stringResult;
            const obj2 = { borderWidth: 2, direction: native.GradientBorder.Direction.VERTICAL, colors, borderRadius: nativeDefault.radii.lg, children: React4(View, obj) };
            const GradientBorder = native.GradientBorder;
            const obj3 = {};
            const merged = Object.assign(upsellContainer.upsellContainer);
            obj = { style: obj3, children: items1 };
            const tmp4 = hasCustomProfileTheme ? upsellContainer.customProfileThemeUpsellContainer : {};
            const merged1 = Object.assign(tmp4);
            const obj4 = { style: upsellContainer.header, children: items };
            const obj5 = { accessibilityRole: "header", variant: "text-sm/semibold", children: intl.string(intl5.t.EIYbj6) };
            const Text = Text_Text.Text;
            intl = intl5.intl;
            items = [metroImportAll(Text, obj5), ];
            const obj6 = {
              accessibilityRole: "button",
              accessibilityLabel: intl2.string(intl5.t["6Xcq+Y"]),
              onPress() {
                  return markAsDismissed(constants.USER_DISMISS);
                },
              children: metroImportAll(XSmallIcon.XSmallIcon, { size: "sm" })
            };
            const PressableOpacity = Pressables.PressableOpacity;
            intl2 = intl5.intl;
            items[1] = metroImportAll(PressableOpacity, obj6);
            items1 = [React4(View, obj4), ];
            const obj7 = { style: upsellContainer.upsellButtonsContainer, children: items2 };
            const obj8 = { style: upsellContainer.upsellButton, children: metroImportAll(Button, obj9) };
            Button = components_Button_Button.Button;
            const intl3 = intl5.intl;
            const string = intl3.string;
            const t = intl5.t;
            if (currentUser) {
              stringResult = string(t["0Q61kF"]);
            } else {
              stringResult = string(t.x6rkDp);
            }
            obj9 = { text: stringResult, onPress: currentUser ? metroImportAll : constants, icon: metroImportAll(NitroWheelIcon.NitroWheelIcon, { size: "sm" }), iconPosition: "start", variant: "secondary", shiny: true };
            items2 = [metroImportAll(View, obj8), ];
            const obj10 = { style: upsellContainer.upsellButton, children: metroImportAll(Button2, obj11) };
            obj11 = { text: intl4.string(intl5.t.pWG4ze), onPress, icon: metroImportAll(ShopIcon.ShopIcon, { size: "sm" }), iconPosition: "start", variant: "secondary" };
            Button2 = components_Button_Button.Button;
            intl4 = intl5.intl;
            items2[1] = metroImportAll(View, obj10);
            items1[1] = React4(View, obj7);
            tmp11Result = metroImportAll(GradientBorder, obj2);
          }
          return tmp11Result;
        }
    };
    items4 = [];
    const tmp6Result = navigateToPremium(hasCustomProfileTheme[16]);
    items4[0] = tmp(hasCustomProfileTheme[15]).DismissibleContent.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS;
    tmp5Result = tmp5(tmp6Result, obj5);
  }
  return tmp5Result;
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileDismissibleUpsells.tsx");

export default tmp4;