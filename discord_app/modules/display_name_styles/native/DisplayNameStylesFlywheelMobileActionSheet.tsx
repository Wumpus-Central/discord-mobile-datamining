// discord_app/modules/display_name_styles/native/DisplayNameStylesFlywheelMobileActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import openUserSettings from "../../user_settings/core/native/openUserSettings.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ UserSettingsSections: metroRequire, Fonts: closure_7 } = Constants);
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4560);
let closure_11 = createStyles.createStyles(() => {
  let obj = { content: null, imageContainer: null, image: null, title: null, subtitle: null, actions: null };
  obj = { alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16 };
  obj.content = obj;
  const size = {
    width: "100%",
    height: 162,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: nativeDefault.space.PX_24,
  };
  obj.imageContainer = size;
  obj.image = { width: "100%", height: "100%" };
  obj = {
    textAlign: "center",
    fontFamily: constants.GINTO_NORD_EXTRA_BOLD,
    textTransform: "uppercase",
    marginTop: nativeDefault.space.PX_12,
    marginBottom: nativeDefault.space.PX_16,
    paddingTop: nativeDefault.space.PX_12,
  };
  obj.title = obj;
  obj.subtitle = { textAlign: "center", marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_32 };
  const obj1 = { textAlign: "center", marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_32 };
  obj.actions = { gap: nativeDefault.space.PX_12, width: "100%" };
  return obj;
});
let size = fn(2);
let result = size.fileFinishedImporting(
  "modules/display_name_styles/native/DisplayNameStylesFlywheelMobileActionSheet.tsx",
);

export default function DisplayNameStylesFlywheelMobileActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  let obj = noop;
  const ref = noop.useRef(null);
  const enabled = noop.useContext(markAsDismissed(4279).AccessibilityPreferencesContext).reducedMotion.enabled;
  let obj1 = markAsDismissed(4411);
  const isThemeDarkResult = obj1.isThemeDark(ref(4495)());
  const tmp6 = closure_11();
  let obj2 = markAsDismissed(504);
  const items = [UserStore];
  const stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj3 = ref(4218);
  let result = obj3.canUsePremiumProfileCustomization(stateFromStores);
  dependencyMap = result;
  const intl = markAsDismissed(1114).intl;
  const string = intl.string;
  const tmp9 = ref(2786);
  if (result) {
    let stringResult = string(tmp9.TyUdka);
  } else {
    stringResult = string(tmp9.dluV0R);
  }
  const items1 = [result, markAsDismissed];
  const items2 = [markAsDismissed];
  const callback = obj.useCallback(() => {
    openUserSettings.openUserSettings(
      { screen: c2 ? timestampProducer.PROFILE_CUSTOMIZATION : timestampProducer.PROFILE_CUSTOMIZATION_TRY_IT_OUT },
      () => {
        markAsDismissed(7038).runAfterInteractions(() => {
          markAsDismissed(7382);
          let obj = { screen: constants.DISPLAY_NAME_STYLES };
          obj.openUserSettings(obj, () => {
            closure_1_0(constants.TAKE_ACTION);
            closure_2_0(4380);
            const obj = { dismissAction: constants.INDIRECT_ACTION };
            const result = obj.UNSAFE_markDismissibleContentAsDismissed(
              closure_2_0(1943).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK,
              obj,
            );
          });
        });
      },
    );
    const tmp2 = c2 ? timestampProducer.PROFILE_CUSTOMIZATION : timestampProducer.PROFILE_CUSTOMIZATION_TRY_IT_OUT;
  }, items1);
  const items3 = [markAsDismissed];
  const callback1 = obj.useCallback(() => {
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items2);
  const callback2 = obj.useCallback(() => {
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items3);
  obj = { ref, onDismiss: callback2, startExpanded: true, handleDisabled: true, children: null };
  obj = { style: tmp6.content, children: null };
  obj1 = {
    onPress() {
      const current = ref.current;
      if (current != null) {
        current.closeActionSheet();
      }
      markAsDismissed(ContentDismissActionType.USER_DISMISS);
    },
  };
  const items4 = [closure_9(markAsDismissed(7154).ActionSheetHeaderBar, obj1), , , ,];
  obj2 = { style: tmp6.imageContainer, children: null };
  let tmp14Result = enabled;
  if (enabled) {
    tmp14Result = closure_9(tmp2(5692).DisplayNameStylesV2AbstractUI, { resizeMode: "contain" });
  }
  const items5 = [tmp14Result];
  if (enabled) {
    items5[1] = !enabled;
    obj2.children = items5;
    items4[1] = closure_10(View, obj2);
    obj3 = { variant: "display-md", style: tmp6.title, color: null, children: null };
    let str = "text-overlay-dark";
    let str2 = "text-overlay-dark";
    if (isThemeDarkResult) {
      str2 = "text-overlay-light";
    }
    obj3.color = str2;
    const intl2 = tmp2(1114).intl;
    obj3.children = intl2.string(tmp4(2786).Uzms61);
    items4[2] = closure_9(tmp2(4556).Text, obj3);
    const obj4 = { variant: "text-lg/medium", style: tmp6.subtitle, color: null, children: null };
    if (isThemeDarkResult) {
      str = "text-overlay-light";
    }
    const obj5 = { bottom: true, children: null };
    obj4.color = str;
    obj4.children = stringResult;
    items4[3] = closure_9(tmp2(4556).Text, obj4);
    const obj6 = { style: tmp6.actions, children: null };
    const obj7 = { text: null, variant: "primary", size: "lg", onPress: null };
    const intl3 = tmp2(1114).intl;
    obj7.text = intl3.string(tmp2(1114).t["4P5I8V"]);
    obj7.onPress = callback;
    const items6 = [closure_9(tmp2(4975).Button, obj7)];
    const obj8 = { text: null, variant: "secondary", size: "lg", onPress: null };
    const intl4 = tmp2(1114).intl;
    obj8.text = intl4.string(tmp2(1114).t.TulDPl);
    obj8.onPress = callback1;
    items6[1] = closure_9(tmp2(4975).Button, obj8);
    obj6.children = items6;
    items4[4] = closure_10(View, obj6);
    obj.children = items4;
    obj5.children = closure_10(View, obj);
    obj.children = closure_9(tmp2(7123).SafeAreaPaddingView, obj5);
    return closure_9(tmp2(7150).BottomSheet, obj);
  } else {
    if (tmp2Result.isIOS()) {
      const obj9 = { source: null, style: null, resizeMode: "contain", enableAnimation: null };
      const obj10 = { uri: tmp4(16937) };
      obj9.source = obj10;
      obj9.style = tmp6.image;
      obj9.enableAnimation = !enabled;
      tmp14Result = closure_9(tmp4(5587), obj9);
      const tmp4Result = tmp4(5587);
    } else {
      const obj11 = { url: tmp4(16937), style: tmp6.image, autoplay: true };
      tmp14Result = closure_9(tmp2(8808).APNGPlayer, obj11);
    }
    tmp2Result = tmp2(1115);
  }
}
