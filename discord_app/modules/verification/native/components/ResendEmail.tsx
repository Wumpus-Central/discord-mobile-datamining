// discord_app/modules/verification/native/components/ResendEmail.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Constants from "../../../../Constants.tsx";
import intl5 from "../../../../intl/index.native.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import EmailVerificationModalActionCreatorsDefault from "../../../../actions/native/EmailVerificationModalActionCreators.tsx";
import AuthenticationActionCreatorsDefault from "../../../../actions/AuthenticationActionCreators.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import UserRequiredActionStore from "../../../../stores/UserRequiredActionStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let currentUser, navigation, ref;

let c10;
let c9;
const View = react_native.View;
const VerificationModalScenes = Constants.VerificationModalScenes;
({ jsx: c9, jsxs: c10 } = Fragment);
let closure_11 = createStyles.createStyles({
  container: { flex: 1, padding: 16, justifyContent: "center", alignItems: "center" },
  title: { marginTop: 16, textAlign: "center" },
  body: { marginTop: 8, lineHeight: 18, textAlign: "center" },
  resend: { marginTop: 16, width: "100%" },
  change: { marginTop: 8, width: "100%" },
});
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let Button2;
      let action;
      let email;
      let intl2;
      let intl3;
      let obj10;
      let tmp10;
      let tmp11;
      let tmp14;
      let tmp19;
      let tmp21;
      let tmp30;
      let tmp35Result;
      let tmp6;
      let tmp7;
      let verified;
      let tmp = navigation;
      let obj = navigation(576);
      const cResult = obj.c(37);
      const tmp4 = closure_11();
      let obj2 = navigation(1490);
      navigation = obj2.useNavigation();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function v() {
          currentUser = currentUser.getCurrentUser();
          verified(dependencyMap[11])(null != currentUser, "ResendEmail: user cannot be undefined");
          return currentUser;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp6 = items;
        tmp7 = fn;
      } else {
        [tmp6, tmp7] = cResult;
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp7);
      ({ email, verified } = stateFromStores);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [UserRequiredActionStore];
        const fn2 = function p() {
          return action.getAction();
        };
        cResult[2] = items1;
        cResult[3] = fn2;
        tmp11 = fn2;
        tmp10 = items1;
      } else {
        tmp10 = cResult[2];
        tmp11 = cResult[3];
      }
      const tmpResult2 = tmp(504);
      const stateFromStores1 = tmpResult2.useStateFromStores(tmp10, tmp11);
      if (cResult[4] !== stateFromStores1) {
        const obj5 = verified(6081);
        const result = obj5.isEmailReverification(stateFromStores1);
        cResult[4] = stateFromStores1;
        cResult[5] = result;
        tmp14 = result;
      } else {
        tmp14 = cResult[5];
      }
      [tmp19, dependencyMap] = ref(react.useState(false), 2);
      ref(react.useState(false), 2);
      ref = react.useRef(verified);
      if (cResult[6] !== verified) {
        class A {
          constructor() {
            const tmp = verified && false === ref.current;
            if (tmp) {
              const obj = EmailVerificationModalActionCreatorsDefault;
              obj.close();
            }
          }
        }
        const items2 = [verified];
        cResult[6] = verified;
        cResult[7] = A;
        cResult[8] = items2;
        tmp21 = items2;
      } else {
        class A {
          constructor() {
            const tmp = verified && false === ref.current;
            if (tmp) {
              const obj = EmailVerificationModalActionCreatorsDefault;
              obj.close();
            }
          }
        }
        tmp21 = cResult[8];
      }
      const effect = react.useEffect(A, tmp21);
      if (cResult[9] !== verified) {
        class O {
          constructor() {
            ref.current = verified;
          }
        }
        cResult[9] = verified;
        cResult[10] = O;
      } else {
        class O {
          constructor() {
            ref.current = verified;
          }
        }
      }
      const effect1 = react.useEffect(O);
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        class L {
          constructor() {
            let intl;
            dependencyMap(true);
            const obj = AuthenticationActionCreatorsDefault;
            obj.verifyResend();
            const obj2 = {
              key: "USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT",
              content: intl.string(intl5.t["84yeoz"]),
            };
            const open = ToastActionCreatorsDefault.open;
            ToastActionCreatorsDefault;
            intl = intl5.intl;
            open(obj2);
          }
        }
        cResult[11] = L;
      } else {
        class L {
          constructor() {
            let intl;
            dependencyMap(true);
            const obj = AuthenticationActionCreatorsDefault;
            obj.verifyResend();
            const obj2 = {
              key: "USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT",
              content: intl.string(intl5.t["84yeoz"]),
            };
            const open = ToastActionCreatorsDefault.open;
            ToastActionCreatorsDefault;
            intl = intl5.intl;
            open(obj2);
          }
        }
      }
      if (cResult[12] !== navigation) {
        class L {
          constructor() {
            let intl;
            dependencyMap(true);
            const obj = AuthenticationActionCreatorsDefault;
            obj.verifyResend();
            const obj2 = {
              key: "USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT",
              content: intl.string(intl5.t["84yeoz"]),
            };
            const open = ToastActionCreatorsDefault.open;
            ToastActionCreatorsDefault;
            intl = intl5.intl;
            open(obj2);
          }
        }
        cResult[12] = navigation;
        cResult[13] = tmp27;
      } else {
        class L {
          constructor() {
            let intl;
            dependencyMap(true);
            const obj = AuthenticationActionCreatorsDefault;
            obj.verifyResend();
            const obj2 = {
              key: "USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT",
              content: intl.string(intl5.t["84yeoz"]),
            };
            const open = ToastActionCreatorsDefault.open;
            ToastActionCreatorsDefault;
            intl = intl5.intl;
            open(obj2);
          }
        }
      }
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        class L {
          constructor() {
            let intl;
            dependencyMap(true);
            const obj = AuthenticationActionCreatorsDefault;
            obj.verifyResend();
            const obj2 = {
              key: "USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT",
              content: intl.string(intl5.t["84yeoz"]),
            };
            const open = ToastActionCreatorsDefault.open;
            ToastActionCreatorsDefault;
            intl = intl5.intl;
            open(obj2);
          }
        }
        cResult[14] = closure_9(tmp(6090).EnvelopeOpenSpotIllustration, { scale: 0.75 });
        const tmp29 = closure_9(tmp(6090).EnvelopeOpenSpotIllustration, { scale: 0.75 });
      } else {
        class L {
          constructor() {
            let intl;
            dependencyMap(true);
            const obj = AuthenticationActionCreatorsDefault;
            obj.verifyResend();
            const obj2 = {
              key: "USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT",
              content: intl.string(intl5.t["84yeoz"]),
            };
            const open = ToastActionCreatorsDefault.open;
            ToastActionCreatorsDefault;
            intl = intl5.intl;
            open(obj2);
          }
        }
      }
      const title = tmp4.title;
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        class L {
          constructor() {
            let intl;
            dependencyMap(true);
            const obj = AuthenticationActionCreatorsDefault;
            obj.verifyResend();
            const obj2 = {
              key: "USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT",
              content: intl.string(intl5.t["84yeoz"]),
            };
            const open = ToastActionCreatorsDefault.open;
            ToastActionCreatorsDefault;
            intl = intl5.intl;
            open(obj2);
          }
        }
        const stringResult = obj7.string(tmp(1126).t.fUtddV);
        cResult[15] = stringResult;
        tmp30 = stringResult;
      } else {
        class L {
          constructor() {
            let intl;
            dependencyMap(true);
            const obj = AuthenticationActionCreatorsDefault;
            obj.verifyResend();
            const obj2 = {
              key: "USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT",
              content: intl.string(intl5.t["84yeoz"]),
            };
            const open = ToastActionCreatorsDefault.open;
            ToastActionCreatorsDefault;
            intl = intl5.intl;
            open(obj2);
          }
        }
      }
      if (cResult[16] !== tmp4.title) {
        class L {
          constructor() {
            let intl;
            dependencyMap(true);
            const obj = AuthenticationActionCreatorsDefault;
            obj.verifyResend();
            const obj2 = {
              key: "USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT",
              content: intl.string(intl5.t["84yeoz"]),
            };
            const open = ToastActionCreatorsDefault.open;
            ToastActionCreatorsDefault;
            intl = intl5.intl;
            open(obj2);
          }
        }
        const obj3 = {
          style: title,
          accessibilityRole: "header",
          variant: "heading-xl/extrabold",
          color: "mobile-text-heading-primary",
          children: tmp30,
        };
        cResult[16] = tmp4.title;
        cResult[17] = closure_9(tmp(4886).Text, obj3);
        const tmp33 = closure_9(tmp(4886).Text, obj3);
      } else {
        class L {
          constructor() {
            let intl;
            dependencyMap(true);
            const obj = AuthenticationActionCreatorsDefault;
            obj.verifyResend();
            const obj2 = {
              key: "USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT",
              content: intl.string(intl5.t["84yeoz"]),
            };
            const open = ToastActionCreatorsDefault.open;
            ToastActionCreatorsDefault;
            intl = intl5.intl;
            open(obj2);
          }
        }
      }
      if (cResult[18] === email) {
        class L {
          constructor() {
            let intl;
            dependencyMap(true);
            const obj = AuthenticationActionCreatorsDefault;
            obj.verifyResend();
            const obj2 = {
              key: "USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT",
              content: intl.string(intl5.t["84yeoz"]),
            };
            const open = ToastActionCreatorsDefault.open;
            ToastActionCreatorsDefault;
            intl = intl5.intl;
            open(obj2);
          }
        }
        if (cResult[21] === tmp4.body) {
          let tmp41;
          class L {
            constructor() {
              let intl;
              dependencyMap(true);
              const obj = AuthenticationActionCreatorsDefault;
              obj.verifyResend();
              const obj2 = {
                key: "USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT",
                content: intl.string(intl5.t["84yeoz"]),
              };
              const open = ToastActionCreatorsDefault.open;
              ToastActionCreatorsDefault;
              intl = intl5.intl;
              open(obj2);
            }
          }
          const _Symbol = Symbol;
          if (cResult[24] === Symbol.for("react.memo_cache_sentinel")) {
            class L {
              constructor() {
                let intl;
                dependencyMap(true);
                const obj = AuthenticationActionCreatorsDefault;
                obj.verifyResend();
                const obj2 = {
                  key: "USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT",
                  content: intl.string(intl5.t["84yeoz"]),
                };
                const open = ToastActionCreatorsDefault.open;
                ToastActionCreatorsDefault;
                intl = intl5.intl;
                open(obj2);
              }
            }
            const obj4 = { text: intl2.string(tmp(1126).t.WnX4J2), variant: "primary", onPress: L, grow: true };
            const Button = tmp(5594).Button;
            intl2 = tmp(1126).intl;
            const tmp42 = closure_9(Button, obj4);
            cResult[24] = tmp42;
            tmp41 = tmp42;
          } else {
            class L {
              constructor() {
                let intl;
                dependencyMap(true);
                const obj = AuthenticationActionCreatorsDefault;
                obj.verifyResend();
                const obj2 = {
                  key: "USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT",
                  content: intl.string(intl5.t["84yeoz"]),
                };
                const open = ToastActionCreatorsDefault.open;
                ToastActionCreatorsDefault;
                intl = intl5.intl;
                open(obj2);
              }
            }
          }
          if (cResult[25] !== tmp4.resend) {
            class L {
              constructor() {
                let intl;
                dependencyMap(true);
                const obj = AuthenticationActionCreatorsDefault;
                obj.verifyResend();
                const obj2 = {
                  key: "USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT",
                  content: intl.string(intl5.t["84yeoz"]),
                };
                const open = ToastActionCreatorsDefault.open;
                ToastActionCreatorsDefault;
                intl = intl5.intl;
                open(obj2);
              }
            }
            const obj8 = { style: tmp4.resend, children: tmp41 };
            cResult[25] = tmp4.resend;
            cResult[26] = closure_9(View, obj8);
            const tmp45 = closure_9(View, obj8);
          } else {
            class L {
              constructor() {
                let intl;
                dependencyMap(true);
                const obj = AuthenticationActionCreatorsDefault;
                obj.verifyResend();
                const obj2 = {
                  key: "USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT",
                  content: intl.string(intl5.t["84yeoz"]),
                };
                const open = ToastActionCreatorsDefault.open;
                ToastActionCreatorsDefault;
                intl = intl5.intl;
                open(obj2);
              }
            }
          }
          if (cResult[27] === !tmp14) {
            class L {
              constructor() {
                let intl;
                dependencyMap(true);
                const obj = AuthenticationActionCreatorsDefault;
                obj.verifyResend();
                const obj2 = {
                  key: "USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT",
                  content: intl.string(intl5.t["84yeoz"]),
                };
                const open = ToastActionCreatorsDefault.open;
                ToastActionCreatorsDefault;
                intl = intl5.intl;
                open(obj2);
              }
            }
          }
          let tmp47 = tmp17;
          if (!tmp14) {
            class L {
              constructor() {
                let intl;
                dependencyMap(true);
                const obj = AuthenticationActionCreatorsDefault;
                obj.verifyResend();
                const obj2 = {
                  key: "USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT",
                  content: intl.string(intl5.t["84yeoz"]),
                };
                const open = ToastActionCreatorsDefault.open;
                ToastActionCreatorsDefault;
                intl = intl5.intl;
                open(obj2);
              }
            }
            const obj9 = { style: tmp4.change, children: closure_9(Button2, obj10) };
            obj10 = { text: intl3.string(tmp(1126).t.Vm8akB), variant: "secondary", onPress: tmp27, grow: true };
            Button2 = tmp(5594).Button;
            intl3 = tmp(1126).intl;
            tmp47 = closure_9(View, obj9);
          }
          cResult[27] = !tmp14;
          cResult[28] = tmp27;
          cResult[29] = tmp4.change;
          cResult[30] = tmp47;
        }
        const obj11 = { style: tmp4.body, variant: "text-sm/medium", color: "text-default", children: tmp34 };
        cResult[21] = tmp4.body;
        cResult[22] = tmp34;
        cResult[23] = closure_9(tmp(4886).Text, obj11);
        const tmp40 = closure_9(tmp(4886).Text, obj11);
      }
      let intl = tmp(1126).intl;
      if (tmp19) {
        class L {
          constructor() {
            let intl;
            dependencyMap(true);
            const obj = AuthenticationActionCreatorsDefault;
            obj.verifyResend();
            const obj2 = {
              key: "USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT",
              content: intl.string(intl5.t["84yeoz"]),
            };
            const open = ToastActionCreatorsDefault.open;
            ToastActionCreatorsDefault;
            intl = intl5.intl;
            open(obj2);
          }
        }
        const obj12 = { email };
        tmp35Result = tmp37(tmp(1126).t.JqLgQL, obj12);
      } else {
        class L {
          constructor() {
            let intl;
            dependencyMap(true);
            const obj = AuthenticationActionCreatorsDefault;
            obj.verifyResend();
            const obj2 = {
              key: "USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT",
              content: intl.string(intl5.t["84yeoz"]),
            };
            const open = ToastActionCreatorsDefault.open;
            ToastActionCreatorsDefault;
            intl = intl5.intl;
            open(obj2);
          }
        }
        tmp35Result = tmp35(tmp(1126).t.tSXg8O);
      }
      cResult[18] = email;
      cResult[19] = tmp19;
      cResult[20] = tmp35Result;
    }
  : () => {
      let Button;
      let Button2;
      let action;
      let formatResult;
      let intl;
      let intl3;
      let intl4;
      let items4;
      let obj10;
      let obj12;
      let tmp10;
      let tmp = closure_11();
      let obj = navigation(1490);
      navigation = obj.useNavigation();
      let obj2 = navigation(504);
      const items = [UserStore];
      const stateFromStores = obj2.useStateFromStores(items, () => {
        currentUser = currentUser.getCurrentUser();
        verified(dependencyMap[11])(null != currentUser, "ResendEmail: user cannot be undefined");
        return currentUser;
      });
      const verified = stateFromStores.verified;
      const email = stateFromStores.email;
      const items1 = [UserRequiredActionStore];
      const obj3 = navigation(504);
      const stateFromStores1 = obj3.useStateFromStores(items1, () => action.getAction());
      const obj4 = verified(6081);
      const result = obj4.isEmailReverification(stateFromStores1);
      let tmp16Result = !result;
      [tmp10, dependencyMap] = ref(react.useState(false), 2);
      ref(react.useState(false), 2);
      ref = react.useRef(verified);
      const items2 = [verified];
      const effect = react.useEffect(() => {
        const tmp = verified && false === ref.current;
        if (tmp) {
          const obj = EmailVerificationModalActionCreatorsDefault;
          obj.close();
        }
      }, items2);
      const effect1 = react.useEffect(() => {
        ref.current = verified;
      });
      const items3 = [navigation];
      const obj5 = { style: tmp.container, children: items4 };
      const callback = react.useCallback(() => {
        navigation.push(VerificationModalScenes.ENTER_EMAIL);
      }, items3);
      items4 = [closure_9(navigation(6090).EnvelopeOpenSpotIllustration, { scale: 0.75 }), , , ,];
      const obj6 = {
        style: tmp.title,
        accessibilityRole: "header",
        variant: "heading-xl/extrabold",
        color: "mobile-text-heading-primary",
        children: intl.string(navigation(1126).t.fUtddV),
      };
      const Text = navigation(4886).Text;
      intl = navigation(1126).intl;
      items4[1] = closure_9(Text, obj6);
      const obj7 = { style: tmp.body, variant: "text-sm/medium", color: "text-default", children: formatResult };
      const Text2 = navigation(4886).Text;
      const intl2 = navigation(1126).intl;
      if (tmp10) {
        const obj8 = { email };
        formatResult = intl2.format(tmp2(1126).t.JqLgQL, obj8);
      } else {
        formatResult = intl2.string(tmp2(1126).t.tSXg8O);
      }
      items4[2] = closure_9(Text2, obj7);
      const obj9 = { style: tmp.resend, children: closure_9(Button, obj10) };
      obj10 = {
        text: intl3.string(navigation(1126).t.WnX4J2),
        variant: "primary",
        onPress() {
          let intl;
          dependencyMap(true);
          const obj = AuthenticationActionCreatorsDefault;
          obj.verifyResend();
          const obj2 = {
            key: "USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT",
            content: intl.string(intl5.t["84yeoz"]),
          };
          const open = ToastActionCreatorsDefault.open;
          ToastActionCreatorsDefault;
          intl = intl5.intl;
          open(obj2);
        },
        grow: true,
      };
      Button = tmp2(5594).Button;
      intl3 = tmp2(1126).intl;
      items4[3] = closure_9(View, obj9);
      if (!result) {
        const obj11 = { style: tmp.change, children: closure_9(Button2, obj12) };
        obj12 = { text: intl4.string(navigation(1126).t.Vm8akB), variant: "secondary", onPress: callback, grow: true };
        Button2 = tmp2(5594).Button;
        intl4 = tmp2(1126).intl;
        tmp16Result = closure_9(View, obj11);
      }
      items4[4] = tmp16Result;
      return closure_10(View, obj5);
    };
let result = size.fileFinishedImporting("modules/verification/native/components/ResendEmail.tsx");

export default tmp3;
