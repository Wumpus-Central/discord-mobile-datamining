// === Module 17051: DisplayNameStylesFlywheelMobileActionSheet ===

// Module 17051 (DisplayNameStylesFlywheelMobileActionSheet)
import nativeDefault from "native" /* 576 */;
import openUserSettings from "openUserSettings" /* 7485 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const View = fn(17).View;
const Constants = fn(1074);
({ UserSettingsSections: metroRequire, Fonts: closure_7 } = Constants);
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4636);
let closure_11 = createStyles.createStyles(() => {
  const obj = { content: { alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16 }, imageContainer: null, image: null, title: null, subtitle: null, actions: null };
  const size = { width: "100%", height: 162, alignItems: "center", justifyContent: "center", marginVertical: nativeDefault.space.PX_24 };
  obj.imageContainer = size;
  obj.image = { width: "100%", height: "100%" };
  const obj2 = { alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16 };
  obj.title = { textAlign: "center", fontFamily: constants.GINTO_NORD_EXTRA_BOLD, textTransform: "uppercase", marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12 };
  const obj3 = { textAlign: "center", fontFamily: constants.GINTO_NORD_EXTRA_BOLD, textTransform: "uppercase", marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_12 };
  obj.subtitle = { textAlign: "center", marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_32 };
  const obj4 = { textAlign: "center", marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_32 };
  obj.actions = { gap: nativeDefault.space.PX_12, width: "100%" };
  return obj;
});
let size = fn(2);
let result = size.fileFinishedImporting("modules/display_name_styles/native/DisplayNameStylesFlywheelMobileActionSheet.tsx");

export default function DisplayNameStylesFlywheelMobileActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const ref = noop.useRef(null);
  const enabled = noop.useContext(markAsDismissed(4357).AccessibilityPreferencesContext).reducedMotion.enabled;
  const isThemeDarkResult = markAsDismissed(4488).isThemeDark(ref(4571)());
  const tmp6 = closure_11();
  const obj2 = markAsDismissed(4488);
  const typeConsolidationTextTransform = markAsDismissed(7082).useTypeConsolidationTextTransform("DisplayNameStylesFlywheel");
  const obj3 = markAsDismissed(7082);
  const items = [UserStore];
  const stateFromStores = markAsDismissed(504).useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj4 = markAsDismissed(504);
  let result = ref(4294).canUsePremiumProfileCustomization(stateFromStores);
  dependencyMap = result;
  const intl = markAsDismissed(1114).intl;
  const string = intl.string;
  const tmp10 = ref(2786);
  if (result) {
    let stringResult = string(tmp10.TyUdka);
  } else {
    stringResult = string(tmp10.dluV0R);
  }
  const items1 = [result, markAsDismissed];
  const items2 = [markAsDismissed];
  const callback = noop.useCallback(() => {
    openUserSettings.openUserSettings({ screen: c2 ? timestampProducer.PROFILE_CUSTOMIZATION : timestampProducer.PROFILE_CUSTOMIZATION_TRY_IT_OUT }, () => {
      markAsDismissed(7141).runAfterInteractions(() => {
        markAsDismissed(7485).openUserSettings({ screen: constants.DISPLAY_NAME_STYLES }, () => {
          closure_1_0(constants.TAKE_ACTION);
          const result = closure_2_0(4457).UNSAFE_markDismissibleContentAsDismissed(closure_2_0(1943).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK, { dismissAction: constants.INDIRECT_ACTION });
        });
      });
    });
    const tmp2 = c2 ? timestampProducer.PROFILE_CUSTOMIZATION : timestampProducer.PROFILE_CUSTOMIZATION_TRY_IT_OUT;
  }, items1);
  const items3 = [markAsDismissed];
  const callback1 = noop.useCallback(() => {
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items2);
  const callback2 = noop.useCallback(() => {
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items3);
  const obj6 = { ref, onDismiss: callback2, startExpanded: true, handleDisabled: true, children: null };
  const obj7 = { style: tmp6.content, children: null };
  const items4 = [
    closure_9(markAsDismissed(7257).ActionSheetHeaderBar, {
      onPress() {
        const current = ref.current;
        if (current != null) {
          current.closeActionSheet();
        }
        markAsDismissed(ContentDismissActionType.USER_DISMISS);
      }
    }),
  ,
  ,
  ,

  ];
  const obj9 = { style: tmp6.imageContainer, children: null };
  let tmp15Result = enabled;
  if (enabled) {
    tmp15Result = closure_9(tmp2(5773).DisplayNameStylesV2AbstractUI, { resizeMode: "contain" });
  }
  const items5 = [tmp15Result, ];
  if (enabled) {
    items5[1] = !enabled;
    obj9.children = items5;
    items4[1] = closure_10(View, obj9);
    const obj10 = { variant: "display-md", style: null, color: null, children: null };
    const items6 = [tmp6.title, typeConsolidationTextTransform];
    obj10.style = items6;
    let str = "text-overlay-dark";
    let str2 = "text-overlay-dark";
    if (isThemeDarkResult) {
      str2 = "text-overlay-light";
    }
    obj10.color = str2;
    const intl2 = tmp2(1114).intl;
    obj10.children = intl2.string(tmp4(2786).Uzms61);
    items4[2] = closure_9(tmp2(4632).Text, obj10);
    const obj11 = { variant: "text-lg/medium", style: tmp6.subtitle, color: null, children: null };
    if (isThemeDarkResult) {
      str = "text-overlay-light";
    }
    const obj12 = { bottom: true, children: null };
    obj11.color = str;
    obj11.children = stringResult;
    items4[3] = closure_9(tmp2(4632).Text, obj11);
    const obj13 = { style: tmp6.actions, children: null };
    const obj14 = { text: null, variant: "primary", size: "lg", onPress: null };
    const intl3 = tmp2(1114).intl;
    obj14.text = intl3.string(tmp2(1114).t["4P5I8V"]);
    obj14.onPress = callback;
    const items7 = [closure_9(tmp2(5056).Button, obj14), ];
    const obj15 = { text: null, variant: "secondary", size: "lg", onPress: null };
    const intl4 = tmp2(1114).intl;
    obj15.text = intl4.string(tmp2(1114).t.TulDPl);
    obj15.onPress = callback1;
    items7[1] = closure_9(tmp2(5056).Button, obj15);
    obj13.children = items7;
    items4[4] = closure_10(View, obj13);
    obj7.children = items4;
    obj12.children = closure_10(View, obj7);
    obj6.children = closure_9(tmp2(7226).SafeAreaPaddingView, obj12);
    return closure_9(tmp2(7253).BottomSheet, obj6);
  } else {
    if (tmp2Result.isIOS()) {
      const obj16 = { source: null, style: null, resizeMode: "contain", enableAnimation: null };
      const obj17 = { uri: tmp4(17052) };
      obj16.source = obj17;
      obj16.style = tmp6.image;
      obj16.enableAnimation = !enabled;
      let tmp15Result2 = closure_9(tmp4(5668), obj16);
      const tmp4Result = tmp4(5668);
    } else {
      const obj18 = { url: tmp4(17052), style: tmp6.image, autoplay: true };
      tmp15Result2 = closure_9(tmp2(8935).APNGPlayer, obj18);
    }
    tmp2Result = tmp2(1363);
  }
  const obj5 = ref(4294);
  const obj8 = {
    onPress() {
      const current = ref.current;
      if (current != null) {
        current.closeActionSheet();
      }
      markAsDismissed(ContentDismissActionType.USER_DISMISS);
    }
  };
};