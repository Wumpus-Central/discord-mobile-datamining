// === Module 6069: ChangeEmailCollectReasons ===

// Module 6069 (ChangeEmailCollectReasons)
import nativeDefault from "native" /* 587 */;
import ConstantsIOS from "ConstantsIOS" /* 1105 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import TableRadioGroup from "TableRadioGroup" /* 6072 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1377 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const VerificationConstants = fn(6070);
({ CHANGE_EMAIL_REASONS_ORDER: closure_7, SUSPICIOUS_CHANGE_EMAIL_REASONS: closure_8 } = VerificationConstants);
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { background: { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, container: null, radioGroup: null, title: null };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.container = { paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 };
let obj4 = { paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 };
obj2.radioGroup = { paddingTop: nativeDefault.space.PX_16, paddingBottom: 38 };
obj2.title = { textAlign: "center" };
let closure_12 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { paddingTop: nativeDefault.space.PX_16, paddingBottom: 38 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/verification/native/components/ChangeEmailCollectReasons.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((changeEmailReason) => {
  const cResult = changeEmailReason(navigation[9]).c(29);
  changeEmailReason = changeEmailReason.changeEmailReason;
  const setChangeEmailReason = changeEmailReason.setChangeEmailReason;
  const tmp4 = closure_12();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function c() {
      return currentUser.getCurrentUser();
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  let obj = changeEmailReason(navigation[9]);
  const stateFromStores = changeEmailReason(navigation[10]).useStateFromStores(tmp5, tmp6);
  const tmpResult = changeEmailReason(navigation[10]);
  navigation = changeEmailReason(navigation[11]).useNavigation();
  if (cResult[2] === changeEmailReason) {
    if (cResult[3] === navigation) {
      let tmp10 = cResult[4];
    }
    if (cResult[5] !== setChangeEmailReason) {
      class I {
        constructor(arg0) {
          obj = closure_1(closure_2[12]);
          obj1 = { change_email_reason_enum: changeEmailReason };
          trackResult = obj.track(AnalyticEvents.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, obj1);
          tmp2 = setChangeEmailReason(changeEmailReason);
          return;
        }
      }
      cResult[5] = setChangeEmailReason;
      cResult[6] = I;
    } else {
      class I {
        constructor(arg0) {
          obj = closure_1(closure_2[12]);
          obj1 = { change_email_reason_enum: changeEmailReason };
          trackResult = obj.track(AnalyticEvents.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, obj1);
          tmp2 = setChangeEmailReason(changeEmailReason);
          return;
        }
      }
    }
    if (changeEmailReason == null) {
      class I {
        constructor(arg0) {
          obj = closure_1(closure_2[12]);
          obj1 = { change_email_reason_enum: changeEmailReason };
          trackResult = obj.track(AnalyticEvents.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, obj1);
          tmp2 = setChangeEmailReason(changeEmailReason);
          return;
        }
      }
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      class I {
        constructor(arg0) {
          obj = closure_1(closure_2[12]);
          obj1 = { change_email_reason_enum: changeEmailReason };
          trackResult = obj.track(AnalyticEvents.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, obj1);
          tmp2 = setChangeEmailReason(changeEmailReason);
          return;
        }
      }
      const mapped = closure_7.map((value, index) => {
        const obj = { label: changeEmailReason(navigation[15]).getChangeEmailReasonDisplayText(value), value };
        return closure_1_10(changeEmailReason(navigation[14]).TableRadioRow, obj, "formrow-" + index);
      });
      cResult[7] = mapped;
      const tmp14 = mapped;
    } else {
      class I {
        constructor(arg0) {
          obj = closure_1(closure_2[12]);
          obj1 = { change_email_reason_enum: changeEmailReason };
          trackResult = obj.track(AnalyticEvents.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, obj1);
          tmp2 = setChangeEmailReason(changeEmailReason);
          return;
        }
      }
    }
    if (cResult[8] === I) {
      class I {
        constructor(arg0) {
          obj = closure_1(closure_2[12]);
          obj1 = { change_email_reason_enum: changeEmailReason };
          trackResult = obj.track(AnalyticEvents.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, obj1);
          tmp2 = setChangeEmailReason(changeEmailReason);
          return;
        }
      }
      if (null == stateFromStores) {
        class I {
          constructor(arg0) {
            obj = closure_1(closure_2[12]);
            obj1 = { change_email_reason_enum: changeEmailReason };
            trackResult = obj.track(AnalyticEvents.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, obj1);
            tmp2 = setChangeEmailReason(changeEmailReason);
            return;
          }
        }
      } else {
        class I {
          constructor(arg0) {
            obj = closure_1(closure_2[12]);
            obj1 = { change_email_reason_enum: changeEmailReason };
            trackResult = obj.track(AnalyticEvents.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, obj1);
            tmp2 = setChangeEmailReason(changeEmailReason);
            return;
          }
        }
        ({ background, container, title } = tmp4);
        if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
          class I {
            constructor(arg0) {
              obj = closure_1(closure_2[12]);
              obj1 = { change_email_reason_enum: changeEmailReason };
              trackResult = obj.track(AnalyticEvents.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, obj1);
              tmp2 = setChangeEmailReason(changeEmailReason);
              return;
            }
          }
          const stringResult = obj5.string(tmp(tmp2[17]).t["41NIIh"]);
          cResult[11] = stringResult;
          const tmp19 = stringResult;
        } else {
          class I {
            constructor(arg0) {
              obj = closure_1(closure_2[12]);
              obj1 = { change_email_reason_enum: changeEmailReason };
              trackResult = obj.track(AnalyticEvents.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, obj1);
              tmp2 = setChangeEmailReason(changeEmailReason);
              return;
            }
          }
        }
        if (cResult[12] !== tmp4.title) {
          class I {
            constructor(arg0) {
              obj = closure_1(closure_2[12]);
              obj1 = { change_email_reason_enum: changeEmailReason };
              trackResult = obj.track(AnalyticEvents.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, obj1);
              tmp2 = setChangeEmailReason(changeEmailReason);
              return;
            }
          }
          let obj2 = { style: title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: tmp19 };
          const tmp22 = closure_10(tmp(tmp2[18]).Text, obj2);
          cResult[12] = tmp4.title;
          cResult[13] = tmp22;
        } else {
          class I {
            constructor(arg0) {
              obj = closure_1(closure_2[12]);
              obj1 = { change_email_reason_enum: changeEmailReason };
              trackResult = obj.track(AnalyticEvents.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, obj1);
              tmp2 = setChangeEmailReason(changeEmailReason);
              return;
            }
          }
        }
        if (cResult[14] === tmp16) {
          class I {
            constructor(arg0) {
              obj = closure_1(closure_2[12]);
              obj1 = { change_email_reason_enum: changeEmailReason };
              trackResult = obj.track(AnalyticEvents.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, obj1);
              tmp2 = setChangeEmailReason(changeEmailReason);
              return;
            }
          }
          const _Symbol2 = Symbol;
          if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
            class I {
              constructor(arg0) {
                obj = closure_1(closure_2[12]);
                obj1 = { change_email_reason_enum: changeEmailReason };
                trackResult = obj.track(AnalyticEvents.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, obj1);
                tmp2 = setChangeEmailReason(changeEmailReason);
                return;
              }
            }
            const stringResult1 = obj8.string(tmp(tmp2[17]).t.XiOHRX);
            cResult[17] = stringResult1;
            const tmp27 = stringResult1;
          } else {
            class I {
              constructor(arg0) {
                obj = closure_1(closure_2[12]);
                obj1 = { change_email_reason_enum: changeEmailReason };
                trackResult = obj.track(AnalyticEvents.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, obj1);
                tmp2 = setChangeEmailReason(changeEmailReason);
                return;
              }
            }
          }
          if (cResult[18] === tmp10) {
            class I {
              constructor(arg0) {
                obj = closure_1(closure_2[12]);
                obj1 = { change_email_reason_enum: changeEmailReason };
                trackResult = obj.track(AnalyticEvents.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, obj1);
                tmp2 = setChangeEmailReason(changeEmailReason);
                return;
              }
            }
            if (cResult[21] === tmp4.container) {
              class I {
                constructor(arg0) {
                  obj = closure_1(closure_2[12]);
                  obj1 = { change_email_reason_enum: changeEmailReason };
                  trackResult = obj.track(AnalyticEvents.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, obj1);
                  tmp2 = setChangeEmailReason(changeEmailReason);
                  return;
                }
              }
            }
            const obj3 = { style: container, children: null };
            const items1 = [tmp21, tmp23, tmp30];
            obj3.children = items1;
            const tmp36 = closure_11(closure_4, obj3);
            cResult[21] = tmp4.container;
            cResult[22] = tmp21;
            cResult[23] = tmp23;
            cResult[24] = tmp30;
            cResult[25] = tmp36;
          }
          const obj4 = { size: "md", variant: "primary", onPress: tmp10, text: tmp27, disabled: null == changeEmailReason };
          const tmp32 = closure_10(tmp(tmp2[19]).Button, obj4);
          cResult[18] = tmp10;
          cResult[19] = null == changeEmailReason;
          cResult[20] = tmp32;
        }
        const obj6 = { style: tmp4.radioGroup, children: tmp16 };
        const tmp26 = closure_10(closure_4, obj6);
        cResult[14] = tmp16;
        cResult[15] = tmp4.radioGroup;
        cResult[16] = tmp26;
      }
    }
    const obj7 = { value: changeEmailReason, onChange: I, hasIcons: false, children: tmp14 };
    const tmp18 = closure_10(tmp(tmp2[16]).TableRadioGroup, obj7);
    cResult[8] = I;
    cResult[9] = changeEmailReason;
    cResult[10] = tmp18;
  }
  const fn2 = function b() {
    AnalyticsUtilsDefault.track(AnalyticEvents.USER_ACCOUNT_EMAIL_CHANGE_REASON_CONTINUE, { change_email_reason_enum: changeEmailReason });
    if (null != changeEmailReason) {
      if (set.has(changeEmailReason)) {
        navigation.push(ConstantsIOS.VerificationModalScenes.CHANGE_EMAIL_WARNING);
      }
    }
    navigation.push(ConstantsIOS.VerificationModalScenes.ENTER_EMAIL);
    const obj2 = { change_email_reason_enum: changeEmailReason };
  };
  cResult[2] = changeEmailReason;
  cResult[3] = navigation;
  cResult[4] = fn2;
  tmp10 = fn2;
  const tmpResult2 = changeEmailReason(navigation[11]);
}) : ((changeEmailReason) => {
  changeEmailReason = changeEmailReason.changeEmailReason;
  const setChangeEmailReason = changeEmailReason.setChangeEmailReason;
  let navigation;
  let callback1;
  const tmp = closure_12();
  const items = [UserStore];
  const stateFromStores = changeEmailReason(navigation[10]).useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj = changeEmailReason(navigation[10]);
  navigation = changeEmailReason(navigation[11]).useNavigation();
  const items1 = [navigation, changeEmailReason];
  const items2 = [setChangeEmailReason];
  const callback = callback1.useCallback(() => {
    AnalyticsUtilsDefault.track(AnalyticEvents.USER_ACCOUNT_EMAIL_CHANGE_REASON_CONTINUE, { change_email_reason_enum: changeEmailReason });
    if (null != changeEmailReason) {
      if (set.has(changeEmailReason)) {
        navigation.push(ConstantsIOS.VerificationModalScenes.CHANGE_EMAIL_WARNING);
      }
    }
    navigation.push(ConstantsIOS.VerificationModalScenes.ENTER_EMAIL);
    const obj2 = { change_email_reason_enum: changeEmailReason };
  }, items1);
  callback1 = callback1.useCallback((change_email_reason_enum) => {
    AnalyticsUtilsDefault.track(AnalyticEvents.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, { change_email_reason_enum });
    setChangeEmailReason(change_email_reason_enum);
  }, items2);
  const items3 = [changeEmailReason, callback1];
  let tmp9 = null;
  if (null != stateFromStores) {
    const obj3 = { keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, style: tmp.background, children: null };
    const obj4 = { style: tmp.container, children: null };
    const obj5 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
    const intl = tmp2(tmp3[17]).intl;
    obj5.children = intl.string(tmp2(tmp3[17]).t["41NIIh"]);
    const items4 = [closure_10(tmp2(tmp3[18]).Text, obj5), , ];
    const obj6 = { style: tmp.radioGroup, children: tmp8 };
    items4[1] = closure_10(closure_4, obj6);
    const obj7 = { size: "md", variant: "primary", onPress: callback, text: null, disabled: null };
    const intl2 = tmp2(tmp3[17]).intl;
    obj7.text = intl2.string(tmp2(tmp3[17]).t.XiOHRX);
    obj7.disabled = null == changeEmailReason;
    items4[2] = closure_10(tmp2(tmp3[19]).Button, obj7);
    obj4.children = items4;
    obj3.children = closure_11(closure_4, obj4);
    tmp9 = closure_10(closure_5, obj3);
  }
  return tmp9;
});