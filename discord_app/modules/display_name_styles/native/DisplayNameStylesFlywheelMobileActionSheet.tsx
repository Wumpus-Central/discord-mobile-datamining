// === Module 17115: DisplayNameStylesFlywheelMobileActionSheet ===

// Module 17115 (DisplayNameStylesFlywheelMobileActionSheet)
import nativeDefault from "native" /* 587 */;
import openUserSettings from "openUserSettings" /* 6885 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1377 */;

require = fn;
const View = fn(17).View;
const Constants = fn(1085);
({ UserSettingsSections: metroRequire, Fonts: closure_7 } = Constants);
const ContentDismissActionType = fn(2048).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const ReactCompilerGating = fn(558);
const createStyles = fn(4890);
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

export default ReactCompilerGating.isReactCompilerEnabled() ? ((markAsDismissed) => {
  const cResult = markAsDismissed(576).c(55);
  markAsDismissed = markAsDismissed.markAsDismissed;
  const ref = noop.useRef(null);
  const enabled = noop.useContext(markAsDismissed(4596).AccessibilityPreferencesContext).reducedMotion.enabled;
  let obj = markAsDismissed(576);
  const isThemeDarkResult = markAsDismissed(4729).isThemeDark(ref(4791)());
  const tmp7 = closure_11();
  const obj2 = markAsDismissed(4729);
  const typeConsolidationTextTransform = markAsDismissed(6469).useTypeConsolidationTextTransform("DisplayNameStylesFlywheel");
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
  const obj3 = markAsDismissed(6469);
  const stateFromStores = markAsDismissed(504).useStateFromStores(tmp9, tmp10);
  if (cResult[2] !== stateFromStores) {
    let result = tmp5(4528).canUsePremiumProfileCustomization(stateFromStores);
    cResult[2] = stateFromStores;
    cResult[3] = result;
    let tmp13 = result;
    const tmp5Result = tmp5(4528);
  } else {
    tmp13 = cResult[3];
  }
  dependencyMap = tmp13;
  if (cResult[4] !== tmp13) {
    const intl = tmp(1126).intl;
    const string = intl.string;
    let TyUdka = tmp5(2883);
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
      if (cResult[9] !== markAsDismissed) {
        const fn2 = function f() {
          markAsDismissed(ContentDismissActionType.USER_DISMISS);
        };
        class O {
          constructor() {
            tmp = UserSettingsSections;
            tmp2 = closure_2 ? tmp.PROFILE_CUSTOMIZATION : tmp.PROFILE_CUSTOMIZATION_TRY_IT_OUT;
            obj = closure_0(closure_2[16]);
            openUserSettingsResult = obj.openUserSettings({ screen: tmp2 }, () => {
              markAsDismissed(6534).runAfterInteractions(() => { ... });
            });
            return;
          }
        }
        cResult[10] = fn2;
      }
      class O {
        constructor() {
          tmp = UserSettingsSections;
          tmp2 = closure_2 ? tmp.PROFILE_CUSTOMIZATION : tmp.PROFILE_CUSTOMIZATION_TRY_IT_OUT;
          obj = closure_0(closure_2[16]);
          openUserSettingsResult = obj.openUserSettings({ screen: tmp2 }, () => {
            markAsDismissed(6534).runAfterInteractions(() => { ... });
          });
          return;
        }
      }
      const content = tmp7.content;
      if (cResult[13] !== markAsDismissed) {
        class O {
          constructor() {
            tmp = UserSettingsSections;
            tmp2 = closure_2 ? tmp.PROFILE_CUSTOMIZATION : tmp.PROFILE_CUSTOMIZATION_TRY_IT_OUT;
            obj = closure_0(closure_2[16]);
            openUserSettingsResult = obj.openUserSettings({ screen: tmp2 }, () => {
              markAsDismissed(6534).runAfterInteractions(() => { ... });
            });
            return;
          }
        }
        const tmp22 = closure_9(tmp(6649).ActionSheetHeaderBar, { onPress: null });
        cResult[13] = markAsDismissed;
        cResult[14] = tmp22;
        const obj4 = { onPress: null };
      }
      if (cResult[15] !== enabled) {
        let tmp24 = enabled;
        if (enabled) {
          tmp24 = closure_9(tmp(17116).DisplayNameStylesV2AbstractUI, { resizeMode: "contain" });
        }
        class O {
          constructor() {
            tmp = UserSettingsSections;
            tmp2 = closure_2 ? tmp.PROFILE_CUSTOMIZATION : tmp.PROFILE_CUSTOMIZATION_TRY_IT_OUT;
            obj = closure_0(closure_2[16]);
            openUserSettingsResult = obj.openUserSettings({ screen: tmp2 }, () => {
              markAsDismissed(6534).runAfterInteractions(() => { ... });
            });
            return;
          }
        }
        cResult[15] = enabled;
        cResult[16] = tmp24;
        let tmp23 = tmp24;
      } else {
        tmp23 = cResult[16];
      }
      if (cResult[17] === enabled) {
        if (cResult[18] === tmp7.image) {
          let tmp26 = cResult[19];
        }
        if (cResult[20] === tmp7.imageContainer) {
          if (cResult[21] === tmp23) {
            if (cResult[24] === tmp7.title) {
              if (cResult[25] === typeConsolidationTextTransform) {
                let tmp35 = cResult[26];
              }
              let str = "text-overlay-dark";
              class O {
                constructor() {
                  tmp = UserSettingsSections;
                  tmp2 = closure_2 ? tmp.PROFILE_CUSTOMIZATION : tmp.PROFILE_CUSTOMIZATION_TRY_IT_OUT;
                  obj = closure_0(closure_2[16]);
                  openUserSettingsResult = obj.openUserSettings({ screen: tmp2 }, () => {
                    markAsDismissed(6534).runAfterInteractions(() => { ... });
                  });
                  return;
                }
              }
              const _Symbol = Symbol;
              if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
                const string2 = tmp(1126).intl.string;
                class O {
                  constructor() {
                    tmp = UserSettingsSections;
                    tmp2 = closure_2 ? tmp.PROFILE_CUSTOMIZATION : tmp.PROFILE_CUSTOMIZATION_TRY_IT_OUT;
                    obj = closure_0(closure_2[16]);
                    openUserSettingsResult = obj.openUserSettings({ screen: tmp2 }, () => {
                      markAsDismissed(6534).runAfterInteractions(() => { ... });
                    });
                    return;
                  }
                }
                cResult[27] = tmp38;
                let tmp37 = tmp38;
              } else {
                tmp37 = cResult[27];
              }
              if (cResult[28] === tmp35) {
                if (isThemeDarkResult) {
                  str = "text-overlay-light";
                }
                class O {
                  constructor() {
                    tmp = UserSettingsSections;
                    tmp2 = closure_2 ? tmp.PROFILE_CUSTOMIZATION : tmp.PROFILE_CUSTOMIZATION_TRY_IT_OUT;
                    obj = closure_0(closure_2[16]);
                    openUserSettingsResult = obj.openUserSettings({ screen: tmp2 }, () => {
                      markAsDismissed(6534).runAfterInteractions(() => { ... });
                    });
                    return;
                  }
                }
                const obj5 = { variant: "text-lg/medium", style: tmp7.subtitle, color: str, children: tmp15 };
                const tmp44 = closure_9(tmp(4886).Text, obj5);
                cResult[31] = tmp7.subtitle;
                cResult[32] = tmp15;
                cResult[33] = str;
                cResult[34] = tmp44;
              }
              const obj6 = { variant: "display-md", style: tmp35, color: str2, children: tmp37 };
              const tmp41 = closure_9(tmp(4886).Text, obj6);
              cResult[28] = tmp35;
              cResult[29] = str2;
              cResult[30] = tmp41;
            }
            class O {
              constructor() {
                tmp = UserSettingsSections;
                tmp2 = closure_2 ? tmp.PROFILE_CUSTOMIZATION : tmp.PROFILE_CUSTOMIZATION_TRY_IT_OUT;
                obj = closure_0(closure_2[16]);
                openUserSettingsResult = obj.openUserSettings({ screen: tmp2 }, () => {
                  markAsDismissed(6534).runAfterInteractions(() => { ... });
                });
                return;
              }
            }
            tmp36[0] = tmp7.title;
            tmp36[1] = typeConsolidationTextTransform;
            cResult[24] = tmp7.title;
            cResult[25] = typeConsolidationTextTransform;
            cResult[26] = tmp36;
            tmp35 = tmp36;
          }
        }
        class O {
          constructor() {
            tmp = UserSettingsSections;
            tmp2 = closure_2 ? tmp.PROFILE_CUSTOMIZATION : tmp.PROFILE_CUSTOMIZATION_TRY_IT_OUT;
            obj = closure_0(closure_2[16]);
            openUserSettingsResult = obj.openUserSettings({ screen: tmp2 }, () => {
              markAsDismissed(6534).runAfterInteractions(() => { ... });
            });
            return;
          }
        }
        const obj7 = { style: tmp7.imageContainer, children: null };
        const items1 = [tmp23, tmp26];
        obj7.children = items1;
        const tmp34 = closure_10(View, obj7);
        cResult[20] = tmp7.imageContainer;
        cResult[21] = tmp23;
        cResult[22] = tmp26;
        cResult[23] = tmp34;
      }
      if (enabled) {
        cResult[17] = enabled;
        class O {
          constructor() {
            tmp = UserSettingsSections;
            tmp2 = closure_2 ? tmp.PROFILE_CUSTOMIZATION : tmp.PROFILE_CUSTOMIZATION_TRY_IT_OUT;
            obj = closure_0(closure_2[16]);
            openUserSettingsResult = obj.openUserSettings({ screen: tmp2 }, () => {
              markAsDismissed(6534).runAfterInteractions(() => { ... });
            });
            return;
          }
        }
        cResult[18] = tmp7.image;
        cResult[19] = tmp27;
        tmp26 = tmp27;
      } else {
        tmp(1369);
        class O {
          constructor() {
            tmp = UserSettingsSections;
            tmp2 = closure_2 ? tmp.PROFILE_CUSTOMIZATION : tmp.PROFILE_CUSTOMIZATION_TRY_IT_OUT;
            obj = closure_0(closure_2[16]);
            openUserSettingsResult = obj.openUserSettings({ screen: tmp2 }, () => {
              markAsDismissed(6534).runAfterInteractions(() => { ... });
            });
            return;
          }
        }
      }
    }
    class O {
      constructor() {
        tmp = UserSettingsSections;
        tmp2 = closure_2 ? tmp.PROFILE_CUSTOMIZATION : tmp.PROFILE_CUSTOMIZATION_TRY_IT_OUT;
        obj = closure_0(closure_2[16]);
        openUserSettingsResult = obj.openUserSettings({ screen: tmp2 }, () => {
          markAsDismissed(6534).runAfterInteractions(() => { ... });
        });
        return;
      }
    }
    cResult[6] = tmp13;
    cResult[7] = markAsDismissed;
    cResult[8] = O;
  }
  const tmpResult = markAsDismissed(504);
}) : ((markAsDismissed) => {
  markAsDismissed = markAsDismissed.markAsDismissed;
  const ref = noop.useRef(null);
  const enabled = noop.useContext(markAsDismissed(4596).AccessibilityPreferencesContext).reducedMotion.enabled;
  const isThemeDarkResult = markAsDismissed(4729).isThemeDark(ref(4791)());
  const tmp6 = closure_11();
  const obj2 = markAsDismissed(4729);
  const typeConsolidationTextTransform = markAsDismissed(6469).useTypeConsolidationTextTransform("DisplayNameStylesFlywheel");
  const obj3 = markAsDismissed(6469);
  const items = [UserStore];
  const stateFromStores = markAsDismissed(504).useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj4 = markAsDismissed(504);
  let result = ref(4528).canUsePremiumProfileCustomization(stateFromStores);
  dependencyMap = result;
  const intl = markAsDismissed(1126).intl;
  const string = intl.string;
  const tmp10 = ref(2883);
  if (result) {
    let stringResult = string(tmp10.TyUdka);
  } else {
    stringResult = string(tmp10.dluV0R);
  }
  const items1 = [result, markAsDismissed];
  const items2 = [markAsDismissed];
  const callback = noop.useCallback(() => {
    openUserSettings.openUserSettings({ screen: c2 ? timestampProducer.PROFILE_CUSTOMIZATION : timestampProducer.PROFILE_CUSTOMIZATION_TRY_IT_OUT }, () => {
      markAsDismissed(6534).runAfterInteractions(() => {
        markAsDismissed(6885).openUserSettings({ screen: constants.DISPLAY_NAME_STYLES }, () => {
          closure_1_0(constants.TAKE_ACTION);
          const result = closure_2_0(4698).UNSAFE_markDismissibleContentAsDismissed(closure_2_0(2036).DismissibleContent.DISPLAY_NAME_STYLES_FLYWHEEL_MOBILE_PROFILE_COACHMARK, { dismissAction: constants.INDIRECT_ACTION });
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
    closure_9(markAsDismissed(6649).ActionSheetHeaderBar, {
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
    tmp15Result = closure_9(tmp2(17116).DisplayNameStylesV2AbstractUI, { resizeMode: "contain" });
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
    const intl2 = tmp2(1126).intl;
    obj10.children = intl2.string(tmp4(2883).Uzms61);
    items4[2] = closure_9(tmp2(4886).Text, obj10);
    const obj11 = { variant: "text-lg/medium", style: tmp6.subtitle, color: null, children: null };
    if (isThemeDarkResult) {
      str = "text-overlay-light";
    }
    const obj12 = { bottom: true, children: null };
    obj11.color = str;
    obj11.children = stringResult;
    items4[3] = closure_9(tmp2(4886).Text, obj11);
    const obj13 = { style: tmp6.actions, children: null };
    const obj14 = { text: null, variant: "primary", size: "lg", onPress: null };
    const intl3 = tmp2(1126).intl;
    obj14.text = intl3.string(tmp2(1126).t["4P5I8V"]);
    obj14.onPress = callback;
    const items7 = [closure_9(tmp2(5594).Button, obj14), ];
    const obj15 = { text: null, variant: "secondary", size: "lg", onPress: null };
    const intl4 = tmp2(1126).intl;
    obj15.text = intl4.string(tmp2(1126).t.TulDPl);
    obj15.onPress = callback1;
    items7[1] = closure_9(tmp2(5594).Button, obj15);
    obj13.children = items7;
    items4[4] = closure_10(View, obj13);
    obj7.children = items4;
    obj12.children = closure_10(View, obj7);
    obj6.children = closure_9(tmp2(6619).SafeAreaPaddingView, obj12);
    return closure_9(tmp2(6645).BottomSheet, obj6);
  } else {
    if (tmp2Result.isIOS()) {
      const obj16 = { source: null, style: null, resizeMode: "contain", enableAnimation: null };
      const obj17 = { uri: tmp4(17118) };
      obj16.source = obj17;
      obj16.style = tmp6.image;
      obj16.enableAnimation = !enabled;
      let tmp15Result2 = closure_9(tmp4(5974), obj16);
      const tmp4Result = tmp4(5974);
    } else {
      const obj18 = { url: tmp4(17118), style: tmp6.image, autoplay: true };
      tmp15Result2 = closure_9(tmp2(8464).APNGPlayer, obj18);
    }
    tmp2Result = tmp2(1369);
  }
  const obj5 = ref(4528);
  const obj8 = {
    onPress() {
      const current = ref.current;
      if (current != null) {
        current.closeActionSheet();
      }
      markAsDismissed(ContentDismissActionType.USER_DISMISS);
    }
  };
});