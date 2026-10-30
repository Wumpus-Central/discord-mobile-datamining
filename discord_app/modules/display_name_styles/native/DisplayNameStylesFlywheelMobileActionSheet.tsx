// discord_app/modules/display_name_styles/native/DisplayNameStylesFlywheelMobileActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentUnsafeUtils from "../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import openUserSettings from "../../user_settings/core/native/openUserSettings.tsx";
import openPremiumTryItOutModal from "../../profile_customization/native/openPremiumTryItOutModal.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const Constants = fn(1072);
({ UserSettingsSections: metroRequire, Fonts: closure_7 } = Constants);
const ContentDismissActionType = fn(4855).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5009);
let closure_11 = createStyles.createStyles(() => {
  const obj = {
    content: { alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16 },
    imageContainer: null,
    image: null,
    title: null,
    subtitle: null,
    actions: null,
  };
  const size = {
    width: "100%",
    height: 162,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: nativeDefault.space.PX_24,
  };
  obj.imageContainer = size;
  obj.image = { width: "100%", height: "100%" };
  const obj2 = { alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16 };
  obj.title = {
    textAlign: "center",
    fontFamily: constants.GINTO_NORD_EXTRA_BOLD,
    textTransform: "uppercase",
    marginTop: nativeDefault.space.PX_12,
    marginBottom: nativeDefault.space.PX_16,
    paddingTop: nativeDefault.space.PX_12,
  };
  const obj3 = {
    textAlign: "center",
    fontFamily: constants.GINTO_NORD_EXTRA_BOLD,
    textTransform: "uppercase",
    marginTop: nativeDefault.space.PX_12,
    marginBottom: nativeDefault.space.PX_16,
    paddingTop: nativeDefault.space.PX_12,
  };
  obj.subtitle = { textAlign: "center", marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_32 };
  const obj4 = { textAlign: "center", marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_32 };
  obj.actions = { gap: nativeDefault.space.PX_12, width: "100%" };
  return obj;
});
let size = fn(2);
let result = size.fileFinishedImporting(
  "modules/display_name_styles/native/DisplayNameStylesFlywheelMobileActionSheet.tsx",
);

export default function DisplayNameStylesFlywheelMobileActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  let enabled2;
  const ref = enabled2.useRef(null);
  const enabled = enabled2.useContext(markAsDismissed(5023).AccessibilityPreferencesContext).reducedMotion.enabled;
  const isThemeDarkResult = markAsDismissed(5016).isThemeDark(ref(5248)());
  const tmp6 = closure_11();
  let obj2 = markAsDismissed(5016);
  const typeConsolidationTextTransform =
    markAsDismissed(7142).useTypeConsolidationTextTransform("DisplayNameStylesFlywheel");
  let obj3 = markAsDismissed(7142);
  const items = [UserStore];
  const stateFromStores = markAsDismissed(504).useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj4 = markAsDismissed(504);
  let result = ref(2048).canUsePremiumProfileCustomization(stateFromStores);
  dependencyMap = result;
  const obj5 = ref(2048);
  enabled2 = markAsDismissed(16414).useTryItOutMobileRefreshConfig(
    "DisplayNameStylesFlywheelMobileActionSheet",
  ).enabled;
  const intl = markAsDismissed(1114).intl;
  const string = intl.string;
  const tmp10 = ref(2931);
  if (result) {
    let stringResult = string(tmp10.TyUdka);
  } else {
    stringResult = string(tmp10.dluV0R);
  }
  const items1 = [result, enabled2, markAsDismissed];
  const items2 = [markAsDismissed];
  const callback = obj.useCallback(() => {
    if (!c2) {
      if (enabled2) {
        markAsDismissed(ContentDismissActionType.TAKE_ACTION);
        const obj2 = { dismissAction: ContentDismissActionType.INDIRECT_ACTION };
        let result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(
          dismissible_content.DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK,
          obj2,
        );
        const result1 = openPremiumTryItOutModal.openPremiumTryItOutModal("display-name-styles");
      }
    }
    openUserSettings.openUserSettings(
      { screen: c2 ? timestampProducer.PROFILE_CUSTOMIZATION : timestampProducer.PROFILE_CUSTOMIZATION_TRY_IT_OUT },
      () => {
        markAsDismissed(7201).runAfterInteractions(() => {
          markAsDismissed(7557).openUserSettings({ screen: constants.DISPLAY_NAME_STYLES }, () => {
            closure_1_0(constants.TAKE_ACTION);
            const result = closure_2_0(5039).UNSAFE_markDismissibleContentAsDismissed(
              closure_2_0(4842).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK,
              { dismissAction: constants.INDIRECT_ACTION },
            );
          });
        });
      },
    );
    const tmp15 = c2 ? timestampProducer.PROFILE_CUSTOMIZATION : timestampProducer.PROFILE_CUSTOMIZATION_TRY_IT_OUT;
  }, items1);
  const items3 = [markAsDismissed];
  const callback1 = obj.useCallback(() => {
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items2);
  const callback2 = obj.useCallback(() => {
    markAsDismissed(ContentDismissActionType.USER_DISMISS);
  }, items3);
  const obj7 = { ref, onDismiss: callback2, startExpanded: true, handleDisabled: true, children: null };
  const obj8 = { style: tmp6.content, children: null };
  const items4 = [
    closure_9(markAsDismissed(5590).ActionSheetHeaderBar, {
      onPress() {
        const current = ref.current;
        if (current != null) {
          current.closeActionSheet();
        }
        markAsDismissed(ContentDismissActionType.USER_DISMISS);
      },
    }),
    ,
    ,
    ,
  ];
  const obj10 = { style: tmp6.imageContainer, children: null };
  let tmp15Result = enabled;
  if (enabled) {
    tmp15Result = closure_9(tmp2(18977).DisplayNameStylesV2AbstractUI, { resizeMode: "contain" });
  }
  const items5 = [tmp15Result];
  if (enabled) {
    items5[1] = !enabled;
    obj10.children = items5;
    items4[1] = closure_10(View, obj10);
    const obj11 = { variant: "display-md", style: null, color: null, children: null };
    const items6 = [tmp6.title, typeConsolidationTextTransform];
    obj11.style = items6;
    let str = "text-overlay-dark";
    let str2 = "text-overlay-dark";
    if (isThemeDarkResult) {
      str2 = "text-overlay-light";
    }
    obj11.color = str2;
    const intl2 = tmp2(1114).intl;
    obj11.children = intl2.string(tmp4(2931).Uzms61);
    items4[2] = closure_9(tmp2(5619).Text, obj11);
    const obj12 = { variant: "text-lg/medium", style: tmp6.subtitle, color: null, children: null };
    if (isThemeDarkResult) {
      str = "text-overlay-light";
    }
    const obj13 = { bottom: true, children: null };
    obj12.color = str;
    obj12.children = stringResult;
    items4[3] = closure_9(tmp2(5619).Text, obj12);
    const obj14 = { style: tmp6.actions, children: null };
    const obj15 = { text: null, variant: "primary", size: "lg", onPress: null };
    const intl3 = tmp2(1114).intl;
    obj15.text = intl3.string(tmp2(1114).t["4P5I8V"]);
    obj15.onPress = callback;
    const items7 = [closure_9(tmp2(5629).Button, obj15)];
    const obj16 = { text: null, variant: "secondary", size: "lg", onPress: null };
    const intl4 = tmp2(1114).intl;
    obj16.text = intl4.string(tmp2(1114).t.TulDPl);
    obj16.onPress = callback1;
    items7[1] = closure_9(tmp2(5629).Button, obj16);
    obj14.children = items7;
    items4[4] = closure_10(View, obj14);
    obj8.children = items4;
    obj13.children = closure_10(View, obj8);
    obj7.children = closure_9(tmp2(7286).SafeAreaPaddingView, obj13);
    return closure_9(tmp2(5267).BottomSheet, obj7);
  } else {
    if (tmp2Result.isIOS()) {
      const obj17 = { source: null, style: null, resizeMode: "contain", enableAnimation: null };
      const obj18 = { uri: tmp4(18981) };
      obj17.source = obj18;
      obj17.style = tmp6.image;
      obj17.enableAnimation = !enabled;
      let tmp15Result2 = closure_9(tmp4(5712), obj17);
      const tmp4Result = tmp4(5712);
    } else {
      const obj19 = { url: tmp4(18981), style: tmp6.image, autoplay: true };
      tmp15Result2 = closure_9(tmp2(9482).APNGPlayer, obj19);
    }
    tmp2Result = tmp2(1376);
  }
  const obj6 = markAsDismissed(16414);
  const obj9 = {
    onPress() {
      const current = ref.current;
      if (current != null) {
        current.closeActionSheet();
      }
      markAsDismissed(ContentDismissActionType.USER_DISMISS);
    },
  };
}
