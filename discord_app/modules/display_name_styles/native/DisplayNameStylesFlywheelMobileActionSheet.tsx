// discord_app/modules/display_name_styles/native/DisplayNameStylesFlywheelMobileActionSheet.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import DismissibleContentConstants from "../../dismissible_content/DismissibleContentConstants.tsx";
import openUserSettings from "../../user_settings/core/native/openUserSettings.tsx";
import react from "../../../../_runtime/00019_react.js";
import UserStore from "../../../stores/UserStore.tsx";
import Constants from "../../../Constants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import size_mod from "../../../../_runtime/metro/00002__.js";

let BottomSheet, dependencyMap, markAsDismissed, openUserSettingsResult, tmp;

let c10;
let c9;
let metroImportDefault;
let metroRequire;
const View = react_native.View;
({ UserSettingsSections: metroRequire, Fonts: metroImportDefault } = Constants);
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: c9, jsxs: c10 } = Fragment);
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (markAsDismissed) => {
      let closure_2;
      let currentUser;
      let items1;
      let tmp10;
      let tmp13;
      let tmp24;
      let tmp9;
      let tmp2 = dependencyMap;
      let obj = markAsDismissed(576);
      const cResult = obj.c(55);
      markAsDismissed = markAsDismissed.markAsDismissed;
      const ref = react.useRef(null);
      const enabled = react.useContext(markAsDismissed(4602).AccessibilityPreferencesContext).reducedMotion.enabled;
      let obj2 = markAsDismissed(4735);
      obj2.isThemeDark(ref(4797)());
      const tmp7 = closure_11();
      const obj3 = markAsDismissed(6476);
      const typeConsolidationTextTransform = obj3.useTypeConsolidationTextTransform("DisplayNameStylesFlywheel");
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function _() {
          return currentUser.getCurrentUser();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp10 = fn;
        tmp9 = items;
      } else {
        [tmp9, tmp10] = cResult;
      }
      const tmpResult = markAsDismissed(504);
      const stateFromStores = tmpResult.useStateFromStores(tmp9, tmp10);
      if (cResult[2] !== stateFromStores) {
        const tmp5Result = ref(4534);
        let result = tmp5Result.canUsePremiumProfileCustomization(stateFromStores);
        cResult[2] = stateFromStores;
        cResult[3] = result;
        tmp13 = result;
      } else {
        tmp13 = cResult[3];
      }
      dependencyMap = tmp13;
      if (cResult[4] !== tmp13) {
        let stringResult;
        const intl = tmp(1126).intl;
        const string = intl.string;
        const tmp5Result3 = ref(2911);
        if (tmp13) {
          stringResult = string(tmp5Result3.TyUdka);
        } else {
          stringResult = string(tmp5Result3.dluV0R);
        }
        cResult[4] = tmp13;
        cResult[5] = stringResult;
      }
      if (cResult[6] === tmp13) {
        if (cResult[9] !== markAsDismissed) {
          const fn2 = function f() {
            markAsDismissed(ContentDismissActionType.USER_DISMISS);
          };
          cResult[9] = markAsDismissed;
          cResult[10] = fn2;
        }
        if (cResult[11] !== markAsDismissed) {
          class N {
            constructor() {
              markAsDismissed(ContentDismissActionType.USER_DISMISS);
            }
          }
          cResult[11] = markAsDismissed;
          cResult[12] = N;
        } else {
          class N {
            constructor() {
              markAsDismissed(ContentDismissActionType.USER_DISMISS);
            }
          }
        }
        const content = tmp7.content;
        if (cResult[13] !== markAsDismissed) {
          class N {
            constructor() {
              markAsDismissed(ContentDismissActionType.USER_DISMISS);
            }
          }
          const obj4 = {
            onPress() {
              const current = ref.current;
              if (current != null) {
                current.closeActionSheet();
              }
              markAsDismissed(ContentDismissActionType.USER_DISMISS);
            },
          };
          cResult[13] = markAsDismissed;
          cResult[14] = closure_9(markAsDismissed(6656).ActionSheetHeaderBar, obj4);
          const tmp22 = closure_9(markAsDismissed(6656).ActionSheetHeaderBar, obj4);
        } else {
          class N {
            constructor() {
              markAsDismissed(ContentDismissActionType.USER_DISMISS);
            }
          }
        }
        if (cResult[15] !== enabled) {
          class N {
            constructor() {
              markAsDismissed(ContentDismissActionType.USER_DISMISS);
            }
          }
          if (tmp24) {
            class N {
              constructor() {
                markAsDismissed(ContentDismissActionType.USER_DISMISS);
              }
            }
            tmp24 = closure_9(markAsDismissed(17145).DisplayNameStylesV2AbstractUI, { resizeMode: "contain" });
          }
          cResult[15] = enabled;
          cResult[16] = tmp24;
        } else {
          class N {
            constructor() {
              markAsDismissed(ContentDismissActionType.USER_DISMISS);
            }
          }
        }
        if (cResult[17] === enabled) {
          class N {
            constructor() {
              markAsDismissed(ContentDismissActionType.USER_DISMISS);
            }
          }
          if (cResult[20] === tmp7.imageContainer) {
            class N {
              constructor() {
                markAsDismissed(ContentDismissActionType.USER_DISMISS);
              }
            }
          }
          const obj5 = { style: tmp7.imageContainer, children: items1 };
          items1 = [tmp23, tmp25];
          cResult[20] = tmp7.imageContainer;
          cResult[21] = tmp23;
          cResult[22] = tmp25;
          cResult[23] = closure_10(View, obj5);
          const tmp35 = closure_10(View, obj5);
        }
        let tmp26 = !enabled;
        if (tmp26) {
          let tmp27Result;
          class N {
            constructor() {
              markAsDismissed(ContentDismissActionType.USER_DISMISS);
            }
          }
          if (obj7.isIOS()) {
            class N {
              constructor() {
                markAsDismissed(ContentDismissActionType.USER_DISMISS);
              }
            }
            const obj6 = { uri: ref(17147) };
            tmp31[0] = obj6;
            tmp31[1] = tmp7.image;
            tmp31[3] = !enabled;
            const tmp5Result4 = ref(5981);
            tmp27Result = closure_9(tmp5Result4, tmp31);
          } else {
            class N {
              constructor() {
                markAsDismissed(ContentDismissActionType.USER_DISMISS);
              }
            }
            const APNGPlayer = tmp(8497).APNGPlayer;
            tmp28[0] = ref(17147);
            tmp28[1] = tmp7.image;
            tmp27Result = closure_9(APNGPlayer, tmp28);
          }
          tmp26 = tmp27Result;
        }
        cResult[17] = enabled;
        cResult[18] = tmp7.image;
        cResult[19] = tmp26;
      }
      class O {
        constructor() {
          tmp = UserSettingsSections;
          tmp2 = closure_2 ? tmp.PROFILE_CUSTOMIZATION : tmp.PROFILE_CUSTOMIZATION_TRY_IT_OUT;
          obj = closure_0(closure_2[16]);
          openUserSettingsResult = obj.openUserSettings({ screen: tmp2 }, () => {
            let obj = markAsDismissed(closure_2[17]);
            obj.runAfterInteractions(() => {
              /* body not rendered: F153873 */
            });
          });
          return;
        }
      }
      cResult[6] = tmp13;
      cResult[7] = markAsDismissed;
      cResult[8] = O;
    }
  : (markAsDismissed) => {
      let SafeAreaPaddingView;
      let c2;
      let currentUser;
      let intl2;
      let intl3;
      let intl4;
      let items4;
      let items5;
      let items6;
      let items7;
      let obj11;
      let obj15;
      let str2;
      let stringResult;
      markAsDismissed = markAsDismissed.markAsDismissed;
      const ref = react.useRef(null);
      let tmp2 = markAsDismissed;
      const enabled = react.useContext(markAsDismissed(4602).AccessibilityPreferencesContext).reducedMotion.enabled;
      let obj2 = markAsDismissed(4735);
      const isThemeDarkResult = obj2.isThemeDark(ref(4797)());
      const tmp6 = closure_11();
      const obj3 = markAsDismissed(6476);
      const typeConsolidationTextTransform = obj3.useTypeConsolidationTextTransform("DisplayNameStylesFlywheel");
      const items = [UserStore];
      const obj4 = markAsDismissed(504);
      const stateFromStores = obj4.useStateFromStores(items, () => currentUser.getCurrentUser());
      const obj5 = ref(4534);
      let result = obj5.canUsePremiumProfileCustomization(stateFromStores);
      dependencyMap = result;
      const intl = markAsDismissed(1126).intl;
      const string = intl.string;
      const tmp10 = ref(2911);
      if (result) {
        stringResult = string(tmp10.TyUdka);
      } else {
        stringResult = string(tmp10.dluV0R);
      }
      const items1 = [result, markAsDismissed];
      const items2 = [markAsDismissed];
      const callback = react.useCallback(() => {
        const tmp2 = c2 ? metroRequire.PROFILE_CUSTOMIZATION : metroRequire.PROFILE_CUSTOMIZATION_TRY_IT_OUT;
        let obj = openUserSettings;
        obj.openUserSettings({ screen: tmp2 }, () => {
          let obj = markAsDismissed(c2[17]);
          obj.runAfterInteractions(() => {
            let obj = markAsDismissed(closure_2_2[16]);
            let obj2 = { screen: constants.DISPLAY_NAME_STYLES };
            obj.openUserSettings(obj2, () => {
              closure_1_0(constants.TAKE_ACTION);
              const obj = closure_2_0(closure_2_2[18]);
              const obj2 = { dismissAction: constants.INDIRECT_ACTION };
              const result = obj.UNSAFE_markDismissibleContentAsDismissed(
                closure_2_0(closure_2_2[19]).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK,
                obj2,
              );
            });
          });
        });
      }, items1);
      const items3 = [markAsDismissed];
      const callback1 = react.useCallback(() => {
        markAsDismissed(ContentDismissActionType.USER_DISMISS);
      }, items2);
      const callback2 = react.useCallback(() => {
        markAsDismissed(ContentDismissActionType.USER_DISMISS);
      }, items3);
      const obj6 = {
        ref,
        onDismiss: callback2,
        startExpanded: true,
        handleDisabled: true,
        children: closure_9(SafeAreaPaddingView, obj15),
      };
      BottomSheet = tmp2(6652).BottomSheet;
      const obj7 = { style: tmp6.content, children: items4 };
      SafeAreaPaddingView = tmp2(6626).SafeAreaPaddingView;
      items4 = [, , , ,];
      const obj8 = {
        onPress() {
          const current = ref.current;
          if (current != null) {
            current.closeActionSheet();
          }
          markAsDismissed(ContentDismissActionType.USER_DISMISS);
        },
      };
      items4[0] = closure_9(tmp2(6656).ActionSheetHeaderBar, obj8);
      const obj9 = { style: tmp6.imageContainer, children: items5 };
      items5 = [enabled && closure_9(tmp2(17145).DisplayNameStylesV2AbstractUI, { resizeMode: "contain" })];
      let tmp19 = !enabled;
      enabled && closure_9(tmp2(17145).DisplayNameStylesV2AbstractUI, { resizeMode: "contain" });
      if (tmp19) {
        let tmp15Result;
        const tmp2Result = tmp2(1369);
        if (tmp2Result.isIOS()) {
          const obj10 = { source: obj11, style: tmp6.image, resizeMode: "contain", enableAnimation: !enabled };
          obj11 = { uri: ref(17147) };
          const tmp4Result = ref(5981);
          tmp15Result = closure_9(tmp4Result, obj10);
        } else {
          const obj12 = { url: ref(17147), style: tmp6.image, autoplay: true };
          const APNGPlayer = tmp2(8497).APNGPlayer;
          tmp15Result = closure_9(APNGPlayer, obj12);
        }
        tmp19 = tmp15Result;
      }
      items5[1] = tmp19;
      items4[1] = closure_10(View, obj9);
      const obj13 = { variant: "display-md", style: items6, color: str2, children: intl2.string(ref(2911).Uzms61) };
      items6 = [tmp6.title, typeConsolidationTextTransform];
      let str = "text-overlay-dark";
      str2 = "text-overlay-dark";
      const Text = tmp2(4892).Text;
      if (isThemeDarkResult) {
        str2 = "text-overlay-light";
      }
      intl2 = tmp2(1126).intl;
      items4[2] = closure_9(Text, obj13);
      const obj14 = { variant: "text-lg/medium", style: tmp6.subtitle, color: str, children: stringResult };
      const Text2 = tmp2(4892).Text;
      if (isThemeDarkResult) {
        str = "text-overlay-light";
      }
      obj15 = { bottom: true, children: closure_10(View, obj7) };
      items4[3] = closure_9(Text2, obj14);
      const obj16 = { style: tmp6.actions, children: items7 };
      const obj17 = { text: intl3.string(tmp2(1126).t["4P5I8V"]), variant: "primary", size: "lg", onPress: callback };
      const Button = tmp2(5601).Button;
      intl3 = tmp2(1126).intl;
      items7 = [closure_9(Button, obj17)];
      const obj18 = { text: intl4.string(tmp2(1126).t.TulDPl), variant: "secondary", size: "lg", onPress: callback1 };
      const Button2 = tmp2(5601).Button;
      intl4 = tmp2(1126).intl;
      items7[1] = closure_9(Button2, obj18);
      items4[4] = closure_10(View, obj16);
      return closure_9(BottomSheet, obj6);
    };
let closure_11 = createStyles.createStyles(() => {
  const obj = {
    content: { alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16 },
    imageContainer: size,
    image: { width: "100%", height: "100%" },
    title: {
      textAlign: "center",
      fontFamily: metroImportDefault.GINTO_NORD_EXTRA_BOLD,
      textTransform: "uppercase",
      marginTop: nativeDefault.space.PX_12,
      marginBottom: nativeDefault.space.PX_16,
      paddingTop: nativeDefault.space.PX_12,
    },
    subtitle: { textAlign: "center", marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_32 },
    actions: { gap: nativeDefault.space.PX_12, width: "100%" },
  };
  ({ alignItems: "center", paddingHorizontal: nativeDefault.space.PX_16 });
  size = {
    width: "100%",
    height: 162,
    alignItems: "center",
    justifyContent: "center",
    marginVertical: nativeDefault.space.PX_24,
  };
  ({
    textAlign: "center",
    fontFamily: metroImportDefault.GINTO_NORD_EXTRA_BOLD,
    textTransform: "uppercase",
    marginTop: nativeDefault.space.PX_12,
    marginBottom: nativeDefault.space.PX_16,
    paddingTop: nativeDefault.space.PX_12,
  });
  ({ textAlign: "center", marginTop: nativeDefault.space.PX_12, marginBottom: nativeDefault.space.PX_32 });
  ({ gap: nativeDefault.space.PX_12, width: "100%" });
  return obj;
});
let size = size_mod;
let result = size.fileFinishedImporting(
  "modules/display_name_styles/native/DisplayNameStylesFlywheelMobileActionSheet.tsx",
);

export default tmp4;
