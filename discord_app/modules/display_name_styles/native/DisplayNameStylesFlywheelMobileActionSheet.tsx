// discord_app/modules/display_name_styles/native/DisplayNameStylesFlywheelMobileActionSheet.tsx
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_5 from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;
import { ContentDismissActionType } from "ContentDismissActionType" /* 1388 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = arg1;
({ UserSettingsSections: closure_6, Fonts: error } = ME);
({ jsx: c9, jsxs: c10 } = jsxProd);
let closure_11 = createCacheKey.createStyles(() => {
  let obj = { content: null, imageContainer: null, image: null, title: null, subtitle: null, actions: null };
  obj = { alignItems: "center", paddingHorizontal: ThemesDefault.space.PX_16 };
  obj[0] = obj;
  obj = { width: "100%", height: 162, alignItems: "center", justifyContent: "center", marginVertical: ThemesDefault.space.PX_24 };
  obj[1] = obj;
  obj[2] = { width: "100%", height: "100%" };
  obj[3] = { textAlign: "center", fontFamily: constants.GINTO_NORD_EXTRA_BOLD, textTransform: "uppercase", marginTop: ThemesDefault.space.PX_12, marginBottom: ThemesDefault.space.PX_16, paddingTop: ThemesDefault.space.PX_12 };
  obj1 = { textAlign: "center", fontFamily: constants.GINTO_NORD_EXTRA_BOLD, textTransform: "uppercase", marginTop: ThemesDefault.space.PX_12, marginBottom: ThemesDefault.space.PX_16, paddingTop: ThemesDefault.space.PX_12 };
  obj[4] = { textAlign: "center", marginTop: ThemesDefault.space.PX_12, marginBottom: ThemesDefault.space.PX_32 };
  const obj2 = { textAlign: "center", marginTop: ThemesDefault.space.PX_12, marginBottom: ThemesDefault.space.PX_32 };
  obj[5] = { gap: ThemesDefault.space.PX_12, width: "100%" };
  return obj;
});
let result = require("set").fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesFlywheelMobileActionSheet.tsx");

export default function DisplayNameStylesFlywheelMobileActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  let ref;
  dependencyMap = undefined;
  let obj = React;
  ref = React.useRef(null);
  const enabled = React.useContext(markAsDismissed(1356).AccessibilityPreferencesContext).reducedMotion.enabled;
  obj1 = markAsDismissed(1363);
  const isThemeDarkResult = obj1.isThemeDark(ref(4310)());
  const tmp6 = callback2();
  let obj2 = markAsDismissed(589);
  const items = [closure_5];
  const stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj3 = ref(4039);
  let result = obj3.canUsePremiumProfileCustomization(stateFromStores);
  dependencyMap = result;
  const intl = markAsDismissed(1236).intl;
  const string = intl.string;
  const tmp9 = ref(2693);
  if (result) {
    let stringResult = string(tmp9.TyUdka);
  } else {
    stringResult = string(tmp9.dluV0R);
  }
  const items1 = [result, markAsDismissed];
  const items2 = [markAsDismissed];
  const callback = obj.useCallback(() => {
    markAsDismissed(_undefined[13]).openUserSettings({ screen: _undefined ? closure_1_6.PROFILE_CUSTOMIZATION : closure_1_6.PROFILE_CUSTOMIZATION_TRY_IT_OUT }, () => {
      closure_1_0(closure_1_2[14]).runAfterInteractions(() => {
        let obj = closure_1_0(closure_1_2[13]);
        obj = { screen: closure_1_6.DISPLAY_NAME_STYLES };
        obj.openUserSettings(obj, () => {
          callback(closure_1_8.TAKE_ACTION);
          let obj = closure_1_0(closure_1_2[15]);
          obj = { dismissAction: closure_1_8.INDIRECT_ACTION };
          const result = obj.UNSAFE_markDismissibleContentAsDismissed(closure_1_0(closure_1_2[16]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK, obj);
        });
      });
    });
  }, items1);
  const items3 = [markAsDismissed];
  const callback1 = obj.useCallback(() => {
    markAsDismissed(closure_1_8.USER_DISMISS);
  }, items2);
  callback2 = obj.useCallback(() => {
    markAsDismissed(closure_1_8.USER_DISMISS);
  }, items3);
  obj = { ref, onDismiss: callback2, startExpanded: true, handleDisabled: true, children: null };
  obj = { style: tmp6.content, children: null };
  obj1 = {
    onPress() {
      const current = ref.current;
      if (current != null) {
        current.closeActionSheet();
      }
      markAsDismissed(closure_1_8.USER_DISMISS);
    }
  };
  const items4 = [callback(markAsDismissed(7124).ActionSheetHeaderBar, obj1), , , , ];
  obj2 = { style: tmp6.imageContainer, children: null };
  let tmp14Result = enabled;
  if (enabled) {
    tmp14Result = tmp14(tmp2(5447).DisplayNameStylesV2AbstractUI, { resizeMode: "contain" });
  }
  const items5 = [tmp14Result, ];
  if (enabled) {
    items5[1] = !enabled;
    obj2[1] = items5;
    items4[1] = tmp15(tmp16, obj2);
    obj3 = { variant: "display-md", style: null, color: null, children: null };
    obj3[1] = tmp6.title;
    let str = "text-overlay-dark";
    let str2 = "text-overlay-dark";
    if (isThemeDarkResult) {
      str2 = "text-overlay-light";
    }
    obj3[2] = str2;
    const intl2 = tmp2(1236).intl;
    obj3[3] = intl2.string(tmp4(2693).Uzms61);
    items4[2] = tmp14(tmp2(4734).Text, obj3);
    const obj4 = { variant: "text-lg/medium", style: null, color: null, children: null };
    obj4[1] = tmp6.subtitle;
    if (isThemeDarkResult) {
      str = "text-overlay-light";
    }
    const obj5 = { bottom: true, children: null };
    obj4[2] = str;
    obj4[3] = stringResult;
    items4[3] = tmp14(tmp2(4734).Text, obj4);
    const obj6 = { style: null, children: null };
    obj6[0] = tmp6.actions;
    const obj7 = { text: null, variant: "primary", size: "lg", onPress: null };
    const intl3 = tmp2(1236).intl;
    obj7[0] = intl3.string(tmp2(1236).t["4P5I8V"]);
    obj7[3] = callback;
    const items6 = [tmp14(tmp2(4745).Button, obj7), ];
    const obj8 = { text: null, variant: "secondary", size: "lg", onPress: null };
    const intl4 = tmp2(1236).intl;
    obj8[0] = intl4.string(tmp2(1236).t.TulDPl);
    obj8[3] = callback1;
    items6[1] = tmp14(tmp2(4745).Button, obj8);
    obj6[1] = items6;
    items4[4] = tmp15(tmp16, obj6);
    obj[1] = items4;
    obj5[1] = tmp15(tmp16, obj);
    obj[4] = tmp14(tmp2(6803).SafeAreaPaddingView, obj5);
    return tmp14(tmp2(6950).BottomSheet, obj);
  } else {
    if (tmp2Result.isIOS()) {
      const obj9 = { source: null, style: null, resizeMode: "contain", enableAnimation: null };
      const obj10 = { uri: null };
      obj10[0] = tmp4(16154);
      obj9[0] = obj10;
      obj9[1] = tmp6.image;
      obj9[3] = !enabled;
      tmp14Result = tmp14(tmp4(5449), obj9);
      const tmp4Result = tmp4(5449);
    } else {
      const obj11 = { url: null, style: null, autoplay: true };
      obj11[0] = tmp4(16154);
      obj11[1] = tmp6.image;
      tmp14Result = tmp14(tmp2(9217).APNGPlayer, obj11);
    }
    tmp2Result = tmp2(500);
  }
};