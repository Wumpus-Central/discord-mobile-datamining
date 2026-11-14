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
const ContentDismissActionType = fn(5152).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
const createStyles = fn(5306);
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
  const enabled = enabled2.useContext(markAsDismissed(5320).AccessibilityPreferencesContext).reducedMotion.enabled;
  const isThemeDarkResult = markAsDismissed(5313).isThemeDark(ref(5547)());
  const tmp6 = closure_11();
  let obj2 = markAsDismissed(5313);
  items = [UserStore];
  const stateFromStores = markAsDismissed(504).useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj3 = markAsDismissed(504);
  let result = ref(2174).canUsePremiumProfileCustomization(stateFromStores);
  dependencyMap = result;
  let obj4 = ref(2174);
  enabled2 = markAsDismissed(17088).useTryItOutMobileRefreshConfig(
    "DisplayNameStylesFlywheelMobileActionSheet",
  ).enabled;
  const intl = markAsDismissed(1113).intl;
  const string = intl.string;
  const tmp9 = ref(3125);
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
        markAsDismissed(7587).runAfterInteractions(() => {
          markAsDismissed(8604).openUserSettings({ screen: constants.DISPLAY_NAME_STYLES }, () => {
            closure_1_0(constants.TAKE_ACTION);
            const result = closure_2_0(5348).UNSAFE_markDismissibleContentAsDismissed(
              closure_2_0(5139).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK,
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
    closure_9(markAsDismissed(5901).ActionSheetHeaderBar, {
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
    tmp14Result = closure_9(tmp2(19810).DisplayNameStylesV2AbstractUI, { resizeMode: "contain" });
  }
  const items5 = [tmp14Result];
  let tmp14Result2 = !enabled;
  if (!enabled) {
    const obj10 = { source: null, style: null, resizeMode: "contain" };
    const obj11 = { uri: tmp4(19814) };
    obj10.source = obj11;
    obj10.style = tmp6.image;
    tmp14Result2 = closure_9(tmp4(6020), obj10);
    const tmp4Result = tmp4(6020);
  }
  items5[1] = tmp14Result2;
  obj9.children = items5;
  items4[1] = closure_10(View, obj9);
  const obj12 = { variant: "display-md", style: tmp6.title, color: null, children: null };
  let str = "text-overlay-dark";
  let str2 = "text-overlay-dark";
  if (isThemeDarkResult) {
    str2 = "text-overlay-light";
  }
  obj12.color = str2;
  const intl2 = tmp2(1113).intl;
  obj12.children = intl2.string(ref(3125).Uzms61);
  items4[2] = closure_9(markAsDismissed(5929).Text, obj12);
  const obj13 = { variant: "body-lg/medium", style: tmp6.subtitle, color: null, children: null };
  if (isThemeDarkResult) {
    str = "text-overlay-light";
  }
  const obj14 = { bottom: true, children: null };
  obj13.color = str;
  obj13.children = stringResult;
  items4[3] = closure_9(markAsDismissed(5929).Text, obj13);
  const obj15 = { style: tmp6.actions, children: null };
  const obj16 = { text: null, variant: "primary", size: "lg", onPress: null };
  const intl3 = tmp2(1113).intl;
  obj16.text = intl3.string(markAsDismissed(1113).t["4P5I8V"]);
  obj16.onPress = callback;
  const items6 = [closure_9(markAsDismissed(5936).Button, obj16)];
  const obj17 = { text: null, variant: "secondary", size: "lg", onPress: null };
  const intl4 = tmp2(1113).intl;
  obj17.text = intl4.string(markAsDismissed(1113).t.TulDPl);
  obj17.onPress = callback1;
  items6[1] = closure_9(markAsDismissed(5936).Button, obj17);
  obj15.children = items6;
  items4[4] = closure_10(View, obj15);
  obj7.children = items4;
  obj14.children = closure_10(View, obj7);
  obj6.children = closure_9(markAsDismissed(7415).SafeAreaPaddingView, obj14);
  return closure_9(markAsDismissed(5566).BottomSheet, obj6);
}
