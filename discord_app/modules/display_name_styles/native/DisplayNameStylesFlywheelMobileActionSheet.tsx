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
({ UserSettingsSections: closure_6, Fonts: metroImportDefault } = Constants);
const ContentDismissActionType = fn(4986).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
const createStyles = fn(5140);
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
    marginTop: nativeDefault.space.PX_12,
    marginBottom: nativeDefault.space.PX_16,
    paddingTop: nativeDefault.space.PX_12,
  };
  const obj3 = {
    textAlign: "center",
    fontFamily: constants.GINTO_NORD_EXTRA_BOLD,
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
  const enabled = enabled2.useContext(markAsDismissed(5154).AccessibilityPreferencesContext).reducedMotion.enabled;
  const isThemeDarkResult = markAsDismissed(5147).isThemeDark(ref(5369)());
  const tmp6 = closure_11();
  let obj2 = markAsDismissed(5147);
  items = [UserStore];
  const stateFromStores = markAsDismissed(504).useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj3 = markAsDismissed(504);
  let result = ref(2171).canUsePremiumProfileCustomization(stateFromStores);
  dependencyMap = result;
  let obj4 = ref(2171);
  enabled2 = markAsDismissed(16771).useTryItOutMobileRefreshConfig(
    "DisplayNameStylesFlywheelMobileActionSheet",
  ).enabled;
  const intl = markAsDismissed(1113).intl;
  const string = intl.string;
  const tmp9 = ref(3056);
  if (result) {
    let stringResult = string(tmp9.TyUdka);
  } else {
    stringResult = string(tmp9.dluV0R);
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
        markAsDismissed(7270).runAfterInteractions(() => {
          markAsDismissed(7635).openUserSettings({ screen: constants.DISPLAY_NAME_STYLES }, () => {
            closure_1_0(constants.TAKE_ACTION);
            const result = closure_2_0(5170).UNSAFE_markDismissibleContentAsDismissed(
              closure_2_0(4973).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK,
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
  const obj6 = { ref, onDismiss: callback2, startExpanded: true, handleDisabled: true, children: null };
  const obj7 = { style: tmp6.content, children: null };
  const items4 = [
    closure_9(markAsDismissed(5723).ActionSheetHeaderBar, {
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
  const obj9 = { style: tmp6.imageContainer, children: null };
  let tmp14Result = enabled;
  if (enabled) {
    tmp14Result = closure_9(tmp2(19390).DisplayNameStylesV2AbstractUI, { resizeMode: "contain" });
  }
  const items5 = [tmp14Result];
  if (enabled) {
    items5[1] = !enabled;
    obj9.children = items5;
    items4[1] = closure_10(View, obj9);
    const obj10 = { variant: "display-md", style: tmp6.title, color: null, children: null };
    let str = "text-overlay-dark";
    let str2 = "text-overlay-dark";
    if (isThemeDarkResult) {
      str2 = "text-overlay-light";
    }
    obj10.color = str2;
    const intl2 = tmp2(1113).intl;
    obj10.children = intl2.string(tmp4(3056).Uzms61);
    items4[2] = closure_9(tmp2(5751).Text, obj10);
    const obj11 = { variant: "body-lg/medium", style: tmp6.subtitle, color: null, children: null };
    if (isThemeDarkResult) {
      str = "text-overlay-light";
    }
    const obj12 = { bottom: true, children: null };
    obj11.color = str;
    obj11.children = stringResult;
    items4[3] = closure_9(tmp2(5751).Text, obj11);
    const obj13 = { style: tmp6.actions, children: null };
    const obj14 = { text: null, variant: "primary", size: "lg", onPress: null };
    const intl3 = tmp2(1113).intl;
    obj14.text = intl3.string(tmp2(1113).t["4P5I8V"]);
    obj14.onPress = callback;
    const items6 = [closure_9(tmp2(5758).Button, obj14)];
    const obj15 = { text: null, variant: "secondary", size: "lg", onPress: null };
    const intl4 = tmp2(1113).intl;
    obj15.text = intl4.string(tmp2(1113).t.TulDPl);
    obj15.onPress = callback1;
    items6[1] = closure_9(tmp2(5758).Button, obj15);
    obj13.children = items6;
    items4[4] = closure_10(View, obj13);
    obj7.children = items4;
    obj12.children = closure_10(View, obj7);
    obj6.children = closure_9(tmp2(7355).SafeAreaPaddingView, obj12);
    return closure_9(tmp2(5388).BottomSheet, obj6);
  } else {
    if (tmp2Result.isIOS()) {
      const obj16 = { source: null, style: null, resizeMode: "contain", enableAnimation: null };
      const obj17 = { uri: tmp4(19394) };
      obj16.source = obj17;
      obj16.style = tmp6.image;
      obj16.enableAnimation = !enabled;
      let tmp14Result2 = closure_9(tmp4(5842), obj16);
      const tmp4Result = tmp4(5842);
    } else {
      const obj18 = { url: tmp4(19394), style: tmp6.image, autoplay: true };
      tmp14Result2 = closure_9(tmp2(9588).APNGPlayer, obj18);
    }
    tmp2Result = tmp2(1377);
  }
  const obj5 = markAsDismissed(16771);
  const obj8 = {
    onPress() {
      const current = ref.current;
      if (current != null) {
        current.closeActionSheet();
      }
      markAsDismissed(ContentDismissActionType.USER_DISMISS);
    },
  };
}
