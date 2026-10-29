// === Module 18916: DisplayNameStylesFlywheelMobileActionSheet ===

// Module 18916 (DisplayNameStylesFlywheelMobileActionSheet)
import nativeDefault from "native" /* 587 */;
import dismissible_content from "dismissible_content" /* 4841 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5035 */;
import openUserSettings from "openUserSettings" /* 7549 */;
import openPremiumTryItOutModal from "openPremiumTryItOutModal" /* 16439 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1389 */;

require = fn;
const View = fn(17).View;
const Constants = fn(1084);
({ UserSettingsSections: metroRequire, Fonts: closure_7 } = Constants);
const ContentDismissActionType = fn(4854).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const ReactCompilerGating = fn(558);
const createStyles = fn(5005);
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

export default ReactCompilerGating.isReactCompilerEnabled() ? (function DisplayNameStylesFlywheelMobileActionSheet(markAsDismissed) {
  const cResult = markAsDismissed(576).c(56);
  markAsDismissed = markAsDismissed.markAsDismissed;
  const ref = enabled2.useRef(null);
  const enabled = enabled2.useContext(markAsDismissed(5019).AccessibilityPreferencesContext).reducedMotion.enabled;
  let obj = markAsDismissed(576);
  markAsDismissed(5012).isThemeDark(ref(5242)());
  const tmp7 = closure_11();
  let obj2 = markAsDismissed(5012);
  const typeConsolidationTextTransform = markAsDismissed(7134).useTypeConsolidationTextTransform("DisplayNameStylesFlywheel");
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function y() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp10 = fn;
    tmp9 = items;
  } else {
    [tmp9, tmp10] = cResult;
  }
  let obj3 = markAsDismissed(7134);
  const stateFromStores = markAsDismissed(504).useStateFromStores(tmp9, tmp10);
  if (cResult[2] !== stateFromStores) {
    let result = tmp5(2051).canUsePremiumProfileCustomization(stateFromStores);
    cResult[2] = stateFromStores;
    cResult[3] = result;
    let tmp13 = result;
    const tmp5Result = tmp5(2051);
  } else {
    tmp13 = cResult[3];
  }
  dependencyMap = tmp13;
  const tmpResult = markAsDismissed(504);
  enabled2 = markAsDismissed(16361).useTryItOutMobileRefreshConfig("DisplayNameStylesFlywheelMobileActionSheet").enabled;
  if (cResult[4] !== tmp13) {
    const intl = tmp(1125).intl;
    const string = intl.string;
    let TyUdka = tmp5(2930);
    if (tmp13) {
      TyUdka = TyUdka.TyUdka;
      let stringResult = string(TyUdka);
    } else {
      stringResult = string(TyUdka.dluV0R);
    }
    cResult[4] = tmp13;
    cResult[5] = stringResult;
  } else {
    if (cResult[6] === tmp13) {
      if (cResult[7] === enabled2) {
        if (cResult[10] !== markAsDismissed) {
          class L {
            constructor() {
              tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
              return;
            }
          }
          cResult[10] = markAsDismissed;
          cResult[11] = L;
        } else {
          class L {
            constructor() {
              tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
              return;
            }
          }
        }
        if (cResult[12] !== markAsDismissed) {
          class L {
            constructor() {
              tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
              return;
            }
          }
          cResult[12] = markAsDismissed;
          cResult[13] = tmp21;
        } else {
          class L {
            constructor() {
              tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
              return;
            }
          }
        }
        const content = tmp7.content;
        if (cResult[14] !== markAsDismissed) {
          class L {
            constructor() {
              tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
              return;
            }
          }
          let obj4 = {
            onPress() {
                      const current = ref.current;
                      if (current != null) {
                        current.closeActionSheet();
                      }
                      markAsDismissed(ContentDismissActionType.USER_DISMISS);
                    }
          };
          const tmp23 = closure_9(tmp(5619).ActionSheetHeaderBar, obj4);
          cResult[14] = markAsDismissed;
          cResult[15] = tmp23;
        } else {
          class L {
            constructor() {
              tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
              return;
            }
          }
        }
        if (cResult[16] !== enabled) {
          class L {
            constructor() {
              tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
              return;
            }
          }
          if (enabled) {
            class L {
              constructor() {
                tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
                return;
              }
            }
            const tmp25 = closure_9(tmp(18917).DisplayNameStylesV2AbstractUI, { resizeMode: "contain" });
          }
          cResult[16] = enabled;
          cResult[17] = tmp25;
        } else {
          class L {
            constructor() {
              tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
              return;
            }
          }
        }
        if (cResult[18] === enabled) {
          class L {
            constructor() {
              tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
              return;
            }
          }
          if (cResult[21] === tmp7.imageContainer) {
            class L {
              constructor() {
                tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
                return;
              }
            }
          }
          const obj5 = { style: tmp7.imageContainer, children: null };
          const items1 = [tmp24, tmp26];
          obj5.children = items1;
          const tmp37 = closure_10(View, obj5);
          cResult[21] = tmp7.imageContainer;
          cResult[22] = tmp24;
          cResult[23] = tmp26;
          cResult[24] = tmp37;
        }
        if (enabled) {
          class L {
            constructor() {
              tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
              return;
            }
          }
          cResult[18] = enabled;
          cResult[19] = tmp7.image;
          cResult[20] = tmp27;
        } else {
          class L {
            constructor() {
              tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
              return;
            }
          }
          if (obj8.isIOS()) {
            class L {
              constructor() {
                tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
                return;
              }
            }
            const obj6 = { uri: tmp5(18921) };
            tmp32[0] = obj6;
            tmp32[1] = tmp7.image;
            tmp32[3] = !enabled;
            let tmp28Result = closure_9(tmp5(5707), tmp32);
            const tmp5Result2 = tmp5(5707);
          } else {
            class L {
              constructor() {
                tmp = markAsDismissed(ContentDismissActionType.USER_DISMISS);
                return;
              }
            }
            tmp29[0] = tmp5(18921);
            tmp29[1] = tmp7.image;
            tmp28Result = closure_9(tmp(9463).APNGPlayer, tmp29);
          }
        }
      }
    }
    const fn2 = function v() {
      if (!dependencyMap) {
        if (enabled2) {
          markAsDismissed(ContentDismissActionType.TAKE_ACTION);
          const obj2 = { dismissAction: ContentDismissActionType.INDIRECT_ACTION };
          let result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK, obj2);
          const result1 = openPremiumTryItOutModal.openPremiumTryItOutModal("display-name-styles");
        }
      }
      openUserSettings.openUserSettings({ screen: dependencyMap ? timestampProducer.PROFILE_CUSTOMIZATION : timestampProducer.PROFILE_CUSTOMIZATION_TRY_IT_OUT }, () => {
        markAsDismissed(7193).runAfterInteractions(() => {
          markAsDismissed(7549).openUserSettings({ screen: constants.DISPLAY_NAME_STYLES }, () => {
            closure_1_0(constants.TAKE_ACTION);
            const result = closure_2_0(5035).UNSAFE_markDismissibleContentAsDismissed(closure_2_0(4841).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK, { dismissAction: constants.INDIRECT_ACTION });
          });
        });
      });
      const tmp15 = dependencyMap ? timestampProducer.PROFILE_CUSTOMIZATION : timestampProducer.PROFILE_CUSTOMIZATION_TRY_IT_OUT;
    };
    cResult[6] = tmp13;
    cResult[7] = enabled2;
    cResult[8] = markAsDismissed;
    cResult[9] = fn2;
  }
  const tmpResult2 = markAsDismissed(16361);
}) : (function DisplayNameStylesFlywheelMobileActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  let enabled2;
  const ref = enabled2.useRef(null);
  const enabled = enabled2.useContext(markAsDismissed(5019).AccessibilityPreferencesContext).reducedMotion.enabled;
  const isThemeDarkResult = markAsDismissed(5012).isThemeDark(ref(5242)());
  const tmp6 = closure_11();
  let obj2 = markAsDismissed(5012);
  const typeConsolidationTextTransform = markAsDismissed(7134).useTypeConsolidationTextTransform("DisplayNameStylesFlywheel");
  let obj3 = markAsDismissed(7134);
  const items = [UserStore];
  const stateFromStores = markAsDismissed(504).useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj4 = markAsDismissed(504);
  let result = ref(2051).canUsePremiumProfileCustomization(stateFromStores);
  dependencyMap = result;
  const obj5 = ref(2051);
  enabled2 = markAsDismissed(16361).useTryItOutMobileRefreshConfig("DisplayNameStylesFlywheelMobileActionSheet").enabled;
  const intl = markAsDismissed(1125).intl;
  const string = intl.string;
  const tmp10 = ref(2930);
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
        let result = DismissibleContentUnsafeUtils.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK, obj2);
        const result1 = openPremiumTryItOutModal.openPremiumTryItOutModal("display-name-styles");
      }
    }
    openUserSettings.openUserSettings({ screen: c2 ? timestampProducer.PROFILE_CUSTOMIZATION : timestampProducer.PROFILE_CUSTOMIZATION_TRY_IT_OUT }, () => {
      markAsDismissed(7193).runAfterInteractions(() => {
        markAsDismissed(7549).openUserSettings({ screen: constants.DISPLAY_NAME_STYLES }, () => {
          closure_1_0(constants.TAKE_ACTION);
          const result = closure_2_0(5035).UNSAFE_markDismissibleContentAsDismissed(closure_2_0(4841).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK, { dismissAction: constants.INDIRECT_ACTION });
        });
      });
    });
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
    closure_9(markAsDismissed(5619).ActionSheetHeaderBar, {
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
  const obj10 = { style: tmp6.imageContainer, children: null };
  let tmp15Result = enabled;
  if (enabled) {
    tmp15Result = closure_9(tmp2(18917).DisplayNameStylesV2AbstractUI, { resizeMode: "contain" });
  }
  const items5 = [tmp15Result, ];
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
    const intl2 = tmp2(1125).intl;
    obj11.children = intl2.string(tmp4(2930).Uzms61);
    items4[2] = closure_9(tmp2(5271).Text, obj11);
    const obj12 = { variant: "text-lg/medium", style: tmp6.subtitle, color: null, children: null };
    if (isThemeDarkResult) {
      str = "text-overlay-light";
    }
    const obj13 = { bottom: true, children: null };
    obj12.color = str;
    obj12.children = stringResult;
    items4[3] = closure_9(tmp2(5271).Text, obj12);
    const obj14 = { style: tmp6.actions, children: null };
    const obj15 = { text: null, variant: "primary", size: "lg", onPress: null };
    const intl3 = tmp2(1125).intl;
    obj15.text = intl3.string(tmp2(1125).t["4P5I8V"]);
    obj15.onPress = callback;
    const items7 = [closure_9(tmp2(5281).Button, obj15), ];
    const obj16 = { text: null, variant: "secondary", size: "lg", onPress: null };
    const intl4 = tmp2(1125).intl;
    obj16.text = intl4.string(tmp2(1125).t.TulDPl);
    obj16.onPress = callback1;
    items7[1] = closure_9(tmp2(5281).Button, obj16);
    obj14.children = items7;
    items4[4] = closure_10(View, obj14);
    obj8.children = items4;
    obj13.children = closure_10(View, obj8);
    obj7.children = closure_9(tmp2(7281).SafeAreaPaddingView, obj13);
    return closure_9(tmp2(5302).BottomSheet, obj7);
  } else {
    if (tmp2Result.isIOS()) {
      const obj17 = { source: null, style: null, resizeMode: "contain", enableAnimation: null };
      const obj18 = { uri: tmp4(18921) };
      obj17.source = obj18;
      obj17.style = tmp6.image;
      obj17.enableAnimation = !enabled;
      let tmp15Result2 = closure_9(tmp4(5707), obj17);
      const tmp4Result = tmp4(5707);
    } else {
      const obj19 = { url: tmp4(18921), style: tmp6.image, autoplay: true };
      tmp15Result2 = closure_9(tmp2(9463).APNGPlayer, obj19);
    }
    tmp2Result = tmp2(1381);
  }
  const obj6 = markAsDismissed(16361);
  const obj9 = {
    onPress() {
      const current = ref.current;
      if (current != null) {
        current.closeActionSheet();
      }
      markAsDismissed(ContentDismissActionType.USER_DISMISS);
    }
  };
});