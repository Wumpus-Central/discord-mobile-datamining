// discord_app/modules/user_profile/native/UserProfileDismissibleUpsells.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

const util = ShopIcon(1126);
const native = ShopIcon(1188);
const Text_Text = ShopIcon(4886);
const components_Button_Button = ShopIcon(5594);
const Pressables = ShopIcon(5909);
const XSmallIcon = ShopIcon(6017);
const NitroWheelIcon = ShopIcon(8313);
const ShopIcon2 = ShopIcon(11762);
require = fn;
const View = fn(17).View;
const TrackUserProfileActions = fn(7854).TrackUserProfileActions;
const ContentDismissActionType = fn(2048).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let items = [...fn(6938).Gradients.PREMIUM_GUILD];
let closure_10 = items.reverse();
const createStyles = fn(4890);
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
const ReactCompilerGating = fn(558);
let obj4 = { backgroundColor: nativeDefault.colors.PROFILE_GRADIENT_OVERLAY_SYNCED_WITH_USER_THEME };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileDismissibleUpsells.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (navigateToShop) => {
      let tmp2 = hasCustomProfileTheme;
      const cResult = navigateToShop(hasCustomProfileTheme[10]).c(22);
      navigateToShop = navigateToShop.navigateToShop;
      const navigateToPremium = navigateToShop.navigateToPremium;
      hasCustomProfileTheme = navigateToShop.hasCustomProfileTheme;
      const tmp4 = closure_11();
      const upsellContainer = tmp4;
      let obj = navigateToShop(hasCustomProfileTheme[10]);
      const isPrivacyNoticeVisible = navigateToShop(hasCustomProfileTheme[11]).useIsPrivacyNoticeVisible();
      let obj2 = navigateToShop(hasCustomProfileTheme[11]);
      const trackUserProfileAction = navigateToShop(hasCustomProfileTheme[12]).useUserProfileAnalyticsContext()
        .trackUserProfileAction;
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
      let obj3 = navigateToShop(hasCustomProfileTheme[12]);
      const stateFromStores = navigateToShop(tmp2[13]).useStateFromStores(tmp6, tmp7);
      if (cResult[2] !== stateFromStores) {
        const isPremiumResult = tmp(tmp2[14]).isPremium(stateFromStores);
        cResult[2] = stateFromStores;
        cResult[3] = isPremiumResult;
        let tmp10 = isPremiumResult;
        const tmpResult2 = tmp(tmp2[14]);
      } else {
        tmp10 = cResult[3];
      }
      currentUser = tmp10;
      if (cResult[4] === navigateToShop) {
        if (cResult[5] === trackUserProfileAction) {
          let tmp12 = cResult[6];
        }
        const onPress = tmp12;
        if (cResult[7] === navigateToPremium) {
          if (cResult[8] === trackUserProfileAction) {
            let tmp13 = cResult[9];
          }
          closure_7 = tmp13;
          if (cResult[10] === navigateToPremium) {
            if (cResult[11] === trackUserProfileAction) {
              let tmp14 = cResult[12];
            }
            closure_8 = tmp14;
            if (isPrivacyNoticeVisible) {
              const _Symbol2 = Symbol;
              if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
                tmp2 = closure_8(navigateToPremium(tmp2[11]), {});
                class D {
                  constructor() {
                    obj = { action: TrackUserProfileActions.GET_PREMIUM };
                    tmp = trackUserProfileAction(obj);
                    tmp2 = navigateToPremium();
                    return;
                  }
                }
                cResult[13] = tmp2;
              }
              class D {
                constructor() {
                  obj = { action: TrackUserProfileActions.GET_PREMIUM };
                  tmp = trackUserProfileAction(obj);
                  tmp2 = navigateToPremium();
                  return;
                }
              }
            } else {
              const _Symbol = Symbol;
              if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
                let items1 = [tmp(tmp2[15]).DismissibleContent.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS];
                class D {
                  constructor() {
                    obj = { action: TrackUserProfileActions.GET_PREMIUM };
                    tmp = trackUserProfileAction(obj);
                    tmp2 = navigateToPremium();
                    return;
                  }
                }
                let tmp16 = items1;
              } else {
                tmp16 = cResult[14];
              }
              class D {
                constructor() {
                  obj = { action: TrackUserProfileActions.GET_PREMIUM };
                  tmp = trackUserProfileAction(obj);
                  tmp2 = navigateToPremium();
                  return;
                }
              }
              let obj4 = {
                contentTypes: tmp16,
                children(markAsDismissed) {
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
                    const items = [closure_2_8(Text_Text.Text, obj5)];
                    const obj6 = {
                      accessibilityRole: "button",
                      accessibilityLabel: null,
                      onPress: null,
                      children: null,
                    };
                    const intl2 = util.intl;
                    obj6.accessibilityLabel = intl2.string(util.t["6Xcq+Y"]);
                    obj6.onPress = function onPress() {
                      return markAsDismissed(constants.USER_DISMISS);
                    };
                    obj6.children = closure_2_8(XSmallIcon.XSmallIcon, { size: "sm" });
                    items[1] = closure_2_8(Pressables.PressableOpacity, obj6);
                    obj4.children = items;
                    const items1 = [options(View, obj4)];
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
                      icon: closure_2_8(NitroWheelIcon.NitroWheelIcon, { size: "sm" }),
                      iconPosition: "start",
                      variant: "secondary",
                      shiny: true,
                    };
                    obj8.children = closure_2_8(Button, obj9);
                    obj8 = [,];
                    obj8[0] = closure_2_8(View, obj8);
                    const obj10 = { style: tmp12Result3.upsellButton, children: null };
                    Button = components_Button_Button.Button;
                    const obj20 = {
                      text: null,
                      onPress: null,
                      icon: null,
                      iconPosition: "start",
                      variant: "secondary",
                    };
                    const intl4 = util.intl;
                    obj20.text = intl4.string(util.t.pWG4ze);
                    obj20.onPress = onPress;
                    ShopIcon = ShopIcon2.ShopIcon;
                    tmp = closure_2_8(ShopIcon, { size: "sm" });
                    obj20.icon = tmp;
                    tmp12Result3 = closure_2_8(Button, obj20);
                    obj10.children = tmp12Result3;
                    obj9 = closure_2_8(View, obj10);
                    obj8[1] = obj9;
                    obj7.children = obj8;
                    obj7 = options(View, obj7);
                    items1[1] = obj7;
                    obj3.children = items1;
                    obj3 = options(View, obj3);
                    obj.children = obj3;
                    closure_2_8(native.GradientBorder, obj);
                    const tmp12Result = closure_2_8(View, obj8);
                  }
                },
              };
              const tmp20 = closure_8(navigateToPremium(tmp2[16]), obj4);
              cResult[15] = tmp13;
              cResult[16] = tmp12;
              cResult[17] = tmp14;
              cResult[18] = hasCustomProfileTheme;
              cResult[19] = tmp10;
              cResult[20] = tmp4;
              cResult[21] = tmp20;
            }
          }
          class D {
            constructor() {
              obj = { action: TrackUserProfileActions.GET_PREMIUM };
              tmp = trackUserProfileAction(obj);
              tmp2 = navigateToPremium();
              return;
            }
          }
          cResult[10] = navigateToPremium;
          cResult[11] = trackUserProfileAction;
          cResult[12] = tmp15;
          tmp14 = tmp15;
        }
        class D {
          constructor() {
            obj = { action: TrackUserProfileActions.GET_PREMIUM };
            tmp = trackUserProfileAction(obj);
            tmp2 = navigateToPremium();
            return;
          }
        }
        cResult[7] = navigateToPremium;
        cResult[8] = trackUserProfileAction;
        cResult[9] = D;
        tmp13 = D;
      }
      const fn2 = function f() {
        trackUserProfileAction({ action: TrackUserProfileActions.VISIT_SHOP });
        navigateToShop();
      };
      cResult[4] = navigateToShop;
      cResult[5] = trackUserProfileAction;
      cResult[6] = fn2;
      tmp12 = fn2;
    }
  : (navigateToShop) => {
      navigateToShop = navigateToShop.navigateToShop;
      const navigateToPremium = navigateToShop.navigateToPremium;
      const hasCustomProfileTheme = navigateToShop.hasCustomProfileTheme;
      let currentUser;
      noop = closure_11();
      const isPrivacyNoticeVisible = navigateToShop(hasCustomProfileTheme[11]).useIsPrivacyNoticeVisible();
      let obj = navigateToShop(hasCustomProfileTheme[11]);
      let tmp = navigateToShop;
      const trackUserProfileAction = navigateToShop(hasCustomProfileTheme[12]).useUserProfileAnalyticsContext()
        .trackUserProfileAction;
      let obj2 = navigateToShop(hasCustomProfileTheme[12]);
      let items = [currentUser];
      const stateFromStores = navigateToShop(hasCustomProfileTheme[13]).useStateFromStores(items, () =>
        currentUser.getCurrentUser(),
      );
      let obj3 = navigateToShop(hasCustomProfileTheme[13]);
      currentUser = navigateToShop(hasCustomProfileTheme[14]).isPremium(stateFromStores);
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
        let tmp5Result = tmp5(tmp6(tmp2[11]), {});
      } else {
        let obj5 = { contentTypes: null, children: null };
        const items4 = [tmp(tmp2[15]).DismissibleContent.USER_PROFILE_PREMIUM_AND_SHOP_ENTRY_POINTS];
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
            const items = [closure_2_8(Text_Text.Text, obj5)];
            const obj6 = { accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
            const intl2 = util.intl;
            obj6.accessibilityLabel = intl2.string(util.t["6Xcq+Y"]);
            obj6.onPress = function onPress() {
              return markAsDismissed(constants.USER_DISMISS);
            };
            obj6.children = closure_2_8(XSmallIcon.XSmallIcon, { size: "sm" });
            items[1] = closure_2_8(Pressables.PressableOpacity, obj6);
            obj4.children = items;
            const items1 = [options(View, obj4)];
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
              icon: closure_2_8(NitroWheelIcon.NitroWheelIcon, { size: "sm" }),
              iconPosition: "start",
              variant: "secondary",
              shiny: true,
            };
            obj8.children = closure_2_8(Button, obj9);
            obj8 = [,];
            obj8[0] = closure_2_8(View, obj8);
            const obj10 = { style: tmp12Result3.upsellButton, children: null };
            Button = components_Button_Button.Button;
            const obj20 = { text: null, onPress: null, icon: null, iconPosition: "start", variant: "secondary" };
            const intl4 = util.intl;
            obj20.text = intl4.string(util.t.pWG4ze);
            obj20.onPress = onPress;
            ShopIcon = ShopIcon2.ShopIcon;
            tmp = closure_2_8(ShopIcon, { size: "sm" });
            obj20.icon = tmp;
            tmp12Result3 = closure_2_8(Button, obj20);
            obj10.children = tmp12Result3;
            obj9 = closure_2_8(View, obj10);
            obj8[1] = obj9;
            obj7.children = obj8;
            obj7 = options(View, obj7);
            items1[1] = obj7;
            obj3.children = items1;
            obj3 = options(View, obj3);
            obj.children = obj3;
            closure_2_8(native.GradientBorder, obj);
            const tmp12Result = closure_2_8(View, obj8);
          }
        };
        tmp5Result = tmp5(tmp6(tmp2[16]), obj5);
        const tmp6Result = tmp6(tmp2[16]);
      }
      return tmp5Result;
    };
