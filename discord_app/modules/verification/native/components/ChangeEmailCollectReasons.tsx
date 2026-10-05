// discord_app/modules/verification/native/components/ChangeEmailCollectReasons.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import ConstantsIOS from "../../../../ConstantsIOS.tsx";
import AnalyticsUtilsDefault from "../../../../utils/AnalyticsUtils.tsx";
import TableRadioGroup2 from "../../../../design/components/TableRow/native/TableRadioGroup.native.tsx";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import UserStore from "../../../../stores/UserStore.tsx";
import VerificationConstants from "../../VerificationConstants.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let changeEmailReason, navigation;

let c10;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let unpackModuleId;
({ View: closure_4, ScrollView: hasOwnProperty } = react_native);
({ CHANGE_EMAIL_REASONS_ORDER: metroImportDefault, SUSPICIOUS_CHANGE_EMAIL_REASONS: metroImportAll } =
  VerificationConstants);
const AnalyticEvents = Constants.AnalyticEvents;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { background: obj2, container: obj3, radioGroup: obj4, title: { textAlign: "center" } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = { paddingVertical: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 };
obj4 = { paddingTop: nativeDefault.space.PX_16, paddingBottom: 38 };
let closure_12 = createStyles(obj);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (changeEmailReason) => {
      let background;
      let container;
      let currentUser;
      let items1;
      let title;
      let tmp5;
      let tmp6;
      let obj = changeEmailReason(navigation[9]);
      const cResult = obj.c(29);
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
      const tmpResult = changeEmailReason(navigation[10]);
      const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
      const tmpResult2 = changeEmailReason(navigation[11]);
      navigation = tmpResult2.useNavigation();
      if (cResult[2] === changeEmailReason) {
        let tmp10;
        let tmp14;
        if (cResult[3] === navigation) {
          tmp10 = cResult[4];
        }
        if (cResult[5] !== setChangeEmailReason) {
          class I {
            constructor(change_email_reason_enum) {
              const obj = AnalyticsUtilsDefault;
              const obj2 = { change_email_reason_enum };
              obj.track(AnalyticEvents.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, obj2);
              setChangeEmailReason(change_email_reason_enum);
            }
          }
          cResult[5] = setChangeEmailReason;
          cResult[6] = I;
        } else {
          class I {
            constructor(change_email_reason_enum) {
              const obj = AnalyticsUtilsDefault;
              const obj2 = { change_email_reason_enum };
              obj.track(AnalyticEvents.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, obj2);
              setChangeEmailReason(change_email_reason_enum);
            }
          }
        }
        if (changeEmailReason == null) {
          class I {
            constructor(change_email_reason_enum) {
              const obj = AnalyticsUtilsDefault;
              const obj2 = { change_email_reason_enum };
              obj.track(AnalyticEvents.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, obj2);
              setChangeEmailReason(change_email_reason_enum);
            }
          }
        }
        const _Symbol = Symbol;
        if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
          class I {
            constructor(change_email_reason_enum) {
              const obj = AnalyticsUtilsDefault;
              const obj2 = { change_email_reason_enum };
              obj.track(AnalyticEvents.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, obj2);
              setChangeEmailReason(change_email_reason_enum);
            }
          }
          const mapped = closure_7.map((value, index) => {
            let obj2;
            const obj = { label: obj2.getChangeEmailReasonDisplayText(value), value };
            const TableRadioRow = changeEmailReason(navigation[14]).TableRadioRow;
            obj2 = changeEmailReason(navigation[15]);
            return closure_1_10(TableRadioRow, obj, "formrow-" + index);
          });
          cResult[7] = mapped;
          tmp14 = mapped;
        } else {
          class I {
            constructor(change_email_reason_enum) {
              const obj = AnalyticsUtilsDefault;
              const obj2 = { change_email_reason_enum };
              obj.track(AnalyticEvents.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, obj2);
              setChangeEmailReason(change_email_reason_enum);
            }
          }
        }
        if (cResult[8] === I) {
          class I {
            constructor(change_email_reason_enum) {
              const obj = AnalyticsUtilsDefault;
              const obj2 = { change_email_reason_enum };
              obj.track(AnalyticEvents.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, obj2);
              setChangeEmailReason(change_email_reason_enum);
            }
          }
          if (null == stateFromStores) {
            class I {
              constructor(change_email_reason_enum) {
                const obj = AnalyticsUtilsDefault;
                const obj2 = { change_email_reason_enum };
                obj.track(AnalyticEvents.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, obj2);
                setChangeEmailReason(change_email_reason_enum);
              }
            }
          } else {
            let tmp19;
            class I {
              constructor(change_email_reason_enum) {
                const obj = AnalyticsUtilsDefault;
                const obj2 = { change_email_reason_enum };
                obj.track(AnalyticEvents.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, obj2);
                setChangeEmailReason(change_email_reason_enum);
              }
            }
            ({ background, container, title } = tmp4);
            if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
              class I {
                constructor(change_email_reason_enum) {
                  const obj = AnalyticsUtilsDefault;
                  const obj2 = { change_email_reason_enum };
                  obj.track(AnalyticEvents.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, obj2);
                  setChangeEmailReason(change_email_reason_enum);
                }
              }
              const stringResult = obj5.string(changeEmailReason(navigation[17]).t["41NIIh"]);
              cResult[11] = stringResult;
              tmp19 = stringResult;
            } else {
              class I {
                constructor(change_email_reason_enum) {
                  const obj = AnalyticsUtilsDefault;
                  const obj2 = { change_email_reason_enum };
                  obj.track(AnalyticEvents.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, obj2);
                  setChangeEmailReason(change_email_reason_enum);
                }
              }
            }
            if (cResult[12] !== tmp4.title) {
              class I {
                constructor(change_email_reason_enum) {
                  const obj = AnalyticsUtilsDefault;
                  const obj2 = { change_email_reason_enum };
                  obj.track(AnalyticEvents.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, obj2);
                  setChangeEmailReason(change_email_reason_enum);
                }
              }
              let obj2 = {
                style: title,
                accessibilityRole: "header",
                variant: "heading-xl/extrabold",
                color: "mobile-text-heading-primary",
                children: tmp19,
              };
              cResult[12] = tmp4.title;
              cResult[13] = closure_10(changeEmailReason(navigation[18]).Text, obj2);
              const tmp22 = closure_10(changeEmailReason(navigation[18]).Text, obj2);
            } else {
              class I {
                constructor(change_email_reason_enum) {
                  const obj = AnalyticsUtilsDefault;
                  const obj2 = { change_email_reason_enum };
                  obj.track(AnalyticEvents.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, obj2);
                  setChangeEmailReason(change_email_reason_enum);
                }
              }
            }
            if (cResult[14] === tmp16) {
              let tmp27;
              class I {
                constructor(change_email_reason_enum) {
                  const obj = AnalyticsUtilsDefault;
                  const obj2 = { change_email_reason_enum };
                  obj.track(AnalyticEvents.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, obj2);
                  setChangeEmailReason(change_email_reason_enum);
                }
              }
              const _Symbol2 = Symbol;
              if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                class I {
                  constructor(change_email_reason_enum) {
                    const obj = AnalyticsUtilsDefault;
                    const obj2 = { change_email_reason_enum };
                    obj.track(AnalyticEvents.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, obj2);
                    setChangeEmailReason(change_email_reason_enum);
                  }
                }
                const stringResult1 = obj8.string(changeEmailReason(navigation[17]).t.XiOHRX);
                cResult[17] = stringResult1;
                tmp27 = stringResult1;
              } else {
                class I {
                  constructor(change_email_reason_enum) {
                    const obj = AnalyticsUtilsDefault;
                    const obj2 = { change_email_reason_enum };
                    obj.track(AnalyticEvents.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, obj2);
                    setChangeEmailReason(change_email_reason_enum);
                  }
                }
              }
              if (cResult[18] === tmp10) {
                class I {
                  constructor(change_email_reason_enum) {
                    const obj = AnalyticsUtilsDefault;
                    const obj2 = { change_email_reason_enum };
                    obj.track(AnalyticEvents.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, obj2);
                    setChangeEmailReason(change_email_reason_enum);
                  }
                }
                if (cResult[21] === tmp4.container) {
                  class I {
                    constructor(change_email_reason_enum) {
                      const obj = AnalyticsUtilsDefault;
                      const obj2 = { change_email_reason_enum };
                      obj.track(AnalyticEvents.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, obj2);
                      setChangeEmailReason(change_email_reason_enum);
                    }
                  }
                }
                const obj3 = { style: container, children: items1 };
                items1 = [tmp21, tmp23, tmp30];
                cResult[21] = tmp4.container;
                cResult[22] = tmp21;
                cResult[23] = tmp23;
                cResult[24] = tmp30;
                cResult[25] = closure_11(closure_4, obj3);
                const tmp36 = closure_11(closure_4, obj3);
              }
              const obj4 = {
                size: "md",
                variant: "primary",
                onPress: tmp10,
                text: tmp27,
                disabled: null == changeEmailReason,
              };
              cResult[18] = tmp10;
              cResult[19] = null == changeEmailReason;
              cResult[20] = closure_10(changeEmailReason(navigation[19]).Button, obj4);
              const tmp32 = closure_10(changeEmailReason(navigation[19]).Button, obj4);
            }
            const obj6 = { style: tmp4.radioGroup, children: tmp16 };
            cResult[14] = tmp16;
            cResult[15] = tmp4.radioGroup;
            cResult[16] = closure_10(closure_4, obj6);
            const tmp26 = closure_10(closure_4, obj6);
          }
        }
        const obj7 = { value: changeEmailReason, onChange: I, hasIcons: false, children: tmp14 };
        cResult[8] = I;
        cResult[9] = changeEmailReason;
        cResult[10] = closure_10(changeEmailReason(navigation[16]).TableRadioGroup, obj7);
        const tmp18 = closure_10(changeEmailReason(navigation[16]).TableRadioGroup, obj7);
      }
      const fn2 = function b() {
        const obj = AnalyticsUtilsDefault;
        const obj2 = { change_email_reason_enum: changeEmailReason };
        obj.track(AnalyticEvents.USER_ACCOUNT_EMAIL_CHANGE_REASON_CONTINUE, obj2);
        if (null != changeEmailReason) {
          if (metroImportAll.has(changeEmailReason)) {
            navigation.push(ConstantsIOS.VerificationModalScenes.CHANGE_EMAIL_WARNING);
          }
        }
        navigation.push(ConstantsIOS.VerificationModalScenes.ENTER_EMAIL);
      };
      cResult[2] = changeEmailReason;
      cResult[3] = navigation;
      cResult[4] = fn2;
      tmp10 = fn2;
    }
  : (changeEmailReason) => {
      let currentUser;
      let intl;
      let intl2;
      let items4;
      let obj4;
      changeEmailReason = changeEmailReason.changeEmailReason;
      const setChangeEmailReason = changeEmailReason.setChangeEmailReason;
      navigation = undefined;
      let callback1;
      const tmp = closure_12();
      let obj = changeEmailReason(navigation[10]);
      const items = [UserStore];
      const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
      let obj2 = changeEmailReason(navigation[11]);
      navigation = obj2.useNavigation();
      const items1 = [navigation, changeEmailReason];
      const items2 = [setChangeEmailReason];
      const callback = callback1.useCallback(() => {
        const obj = AnalyticsUtilsDefault;
        const obj2 = { change_email_reason_enum: changeEmailReason };
        obj.track(AnalyticEvents.USER_ACCOUNT_EMAIL_CHANGE_REASON_CONTINUE, obj2);
        if (null != changeEmailReason) {
          if (metroImportAll.has(changeEmailReason)) {
            navigation.push(ConstantsIOS.VerificationModalScenes.CHANGE_EMAIL_WARNING);
          }
        }
        navigation.push(ConstantsIOS.VerificationModalScenes.ENTER_EMAIL);
      }, items1);
      callback1 = callback1.useCallback((change_email_reason_enum) => {
        const obj = AnalyticsUtilsDefault;
        const obj2 = { change_email_reason_enum };
        obj.track(AnalyticEvents.USER_ACCOUNT_EMAIL_CHANGE_REASON_SELECTED, obj2);
        setChangeEmailReason(change_email_reason_enum);
      }, items2);
      const items3 = [changeEmailReason, callback1];
      let tmp9 = null;
      if (null != stateFromStores) {
        const obj3 = {
          keyboardShouldPersistTaps: "handled",
          alwaysBounceVertical: false,
          style: tmp.background,
          children: closure_11(closure_4, obj4),
        };
        obj4 = { style: tmp.container, children: items4 };
        const obj5 = {
          style: tmp.title,
          accessibilityRole: "header",
          variant: "heading-xl/extrabold",
          color: "mobile-text-heading-primary",
          children: intl.string(changeEmailReason(navigation[17]).t["41NIIh"]),
        };
        const Text = tmp2(tmp3[18]).Text;
        intl = tmp2(tmp3[17]).intl;
        items4 = [closure_10(Text, obj5), ,];
        const obj6 = { style: tmp.radioGroup, children: tmp8 };
        items4[1] = closure_10(closure_4, obj6);
        const obj7 = {
          size: "md",
          variant: "primary",
          onPress: callback,
          text: intl2.string(changeEmailReason(navigation[17]).t.XiOHRX),
          disabled: null == changeEmailReason,
        };
        const Button = tmp2(tmp3[19]).Button;
        intl2 = tmp2(tmp3[17]).intl;
        items4[2] = closure_10(Button, obj7);
        tmp9 = closure_10(closure_5, obj3);
      }
      return tmp9;
    };
const result = size.fileFinishedImporting("modules/verification/native/components/ChangeEmailCollectReasons.tsx");

export default tmp6;
