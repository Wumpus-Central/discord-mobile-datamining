// discord_app/modules/verification/native/components/ResendEmail.tsx
import util from "../../../../intl/index.native.tsx";
import ToastActionCreatorsDefault from "../../../toast/native/ToastActionCreators.tsx";
import EmailVerificationModalActionCreatorsDefault from "../../../../actions/native/EmailVerificationModalActionCreators.tsx";
import AuthenticationActionCreatorsDefault from "../../../../actions/AuthenticationActionCreators.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import UserRequiredActionStore from "../../../../stores/UserRequiredActionStore.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const VerificationModalScenes = fn(1085).VerificationModalScenes;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4890);
let closure_11 = createStyles.createStyles({
  container: { flex: 1, padding: 16, justifyContent: "center", alignItems: "center" },
  title: { marginTop: 16, textAlign: "center" },
  body: { marginTop: 8, lineHeight: 18, textAlign: "center" },
  resend: { marginTop: 16, width: "100%" },
  change: { marginTop: 8, width: "100%" },
});
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/verification/native/components/ResendEmail.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = navigation(576).c(37);
      const tmp4 = closure_11();
      let obj = navigation(576);
      navigation = navigation(1490).useNavigation();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function v() {
          currentUser = currentUser.getCurrentUser();
          verified(38)(null != currentUser, "ResendEmail: user cannot be undefined");
          return currentUser;
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp6 = items;
        tmp7 = fn;
      } else {
        [tmp6, tmp7] = cResult;
      }
      const obj2 = navigation(1490);
      const stateFromStores = navigation(504).useStateFromStores(tmp6, tmp7);
      ({ email, verified } = stateFromStores);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [UserRequiredActionStore];
        const fn2 = function p() {
          return action.getAction();
        };
        cResult[2] = items1;
        cResult[3] = fn2;
        let tmp11 = fn2;
        let tmp10 = items1;
      } else {
        tmp10 = cResult[2];
        tmp11 = cResult[3];
      }
      const tmpResult = navigation(504);
      const stateFromStores1 = navigation(504).useStateFromStores(tmp10, tmp11);
      if (cResult[4] !== stateFromStores1) {
        const result = verified(6081).isEmailReverification(stateFromStores1);
        cResult[4] = stateFromStores1;
        cResult[5] = result;
        const obj5 = verified(6081);
      }
      const tmpResult2 = navigation(504);
      [tmp18, dependencyMap] = ref(noop.useState(false), 2);
      const tmp17 = ref(noop.useState(false), 2);
      if (cResult[6] !== verified) {
        class A {
          constructor() {
            tmp = verified;
            if (verified) {
              tmp2 = closure_3;
              flag = false;
              tmp = false === closure_3.current;
            }
            if (tmp) {
              tmp3 = closure_1;
              tmp4 = closure_2;
              obj = closure_1(closure_2[14]);
              closeResult = obj.close();
            }
            return;
          }
        }
        const items2 = [verified];
        cResult[6] = verified;
        cResult[7] = A;
        cResult[8] = items2;
        let tmp20 = items2;
      } else {
        class A {
          constructor() {
            tmp = verified;
            if (verified) {
              tmp2 = closure_3;
              flag = false;
              tmp = false === closure_3.current;
            }
            if (tmp) {
              tmp3 = closure_1;
              tmp4 = closure_2;
              obj = closure_1(closure_2[14]);
              closeResult = obj.close();
            }
            return;
          }
        }
        tmp20 = cResult[8];
      }
      const effect = noop.useEffect(A, tmp20);
      if (cResult[9] !== verified) {
        class O {
          constructor() {
            closure_3.current = verified;
            return;
          }
        }
        cResult[9] = verified;
        cResult[10] = O;
      } else {
        class O {
          constructor() {
            closure_3.current = verified;
            return;
          }
        }
      }
      const effect1 = noop.useEffect(O);
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        class L {
          constructor() {
            tmp = closure_2(true);
            obj = closure_1(closure_2[15]);
            verifyResendResult = obj.verifyResend();
            obj2 = closure_1(closure_2[16]);
            obj1 = { key: "USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT", content: null };
            intl = closure_0(closure_2[17]).intl;
            obj1.content = intl.string(closure_0(closure_2[17]).t["84yeoz"]);
            openResult = obj2.open(obj1);
            return;
          }
        }
        cResult[11] = L;
      } else {
        class L {
          constructor() {
            tmp = closure_2(true);
            obj = closure_1(closure_2[15]);
            verifyResendResult = obj.verifyResend();
            obj2 = closure_1(closure_2[16]);
            obj1 = { key: "USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT", content: null };
            intl = closure_0(closure_2[17]).intl;
            obj1.content = intl.string(closure_0(closure_2[17]).t["84yeoz"]);
            openResult = obj2.open(obj1);
            return;
          }
        }
      }
      if (cResult[12] !== navigation) {
        class L {
          constructor() {
            tmp = closure_2(true);
            obj = closure_1(closure_2[15]);
            verifyResendResult = obj.verifyResend();
            obj2 = closure_1(closure_2[16]);
            obj1 = { key: "USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT", content: null };
            intl = closure_0(closure_2[17]).intl;
            obj1.content = intl.string(closure_0(closure_2[17]).t["84yeoz"]);
            openResult = obj2.open(obj1);
            return;
          }
        }
        cResult[12] = navigation;
        cResult[13] = tmp26;
      } else {
        class L {
          constructor() {
            tmp = closure_2(true);
            obj = closure_1(closure_2[15]);
            verifyResendResult = obj.verifyResend();
            obj2 = closure_1(closure_2[16]);
            obj1 = { key: "USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT", content: null };
            intl = closure_0(closure_2[17]).intl;
            obj1.content = intl.string(closure_0(closure_2[17]).t["84yeoz"]);
            openResult = obj2.open(obj1);
            return;
          }
        }
      }
      if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
        class L {
          constructor() {
            tmp = closure_2(true);
            obj = closure_1(closure_2[15]);
            verifyResendResult = obj.verifyResend();
            obj2 = closure_1(closure_2[16]);
            obj1 = { key: "USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT", content: null };
            intl = closure_0(closure_2[17]).intl;
            obj1.content = intl.string(closure_0(closure_2[17]).t["84yeoz"]);
            openResult = obj2.open(obj1);
            return;
          }
        }
        const tmp28 = closure_9(tmp(6090).EnvelopeOpenSpotIllustration, { scale: 0.75 });
        cResult[14] = tmp28;
      } else {
        class L {
          constructor() {
            tmp = closure_2(true);
            obj = closure_1(closure_2[15]);
            verifyResendResult = obj.verifyResend();
            obj2 = closure_1(closure_2[16]);
            obj1 = { key: "USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT", content: null };
            intl = closure_0(closure_2[17]).intl;
            obj1.content = intl.string(closure_0(closure_2[17]).t["84yeoz"]);
            openResult = obj2.open(obj1);
            return;
          }
        }
      }
      if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
        class L {
          constructor() {
            tmp = closure_2(true);
            obj = closure_1(closure_2[15]);
            verifyResendResult = obj.verifyResend();
            obj2 = closure_1(closure_2[16]);
            obj1 = { key: "USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT", content: null };
            intl = closure_0(closure_2[17]).intl;
            obj1.content = intl.string(closure_0(closure_2[17]).t["84yeoz"]);
            openResult = obj2.open(obj1);
            return;
          }
        }
        const stringResult = obj7.string(tmp(1126).t.fUtddV);
        cResult[15] = stringResult;
        const tmp29 = stringResult;
      } else {
        class L {
          constructor() {
            tmp = closure_2(true);
            obj = closure_1(closure_2[15]);
            verifyResendResult = obj.verifyResend();
            obj2 = closure_1(closure_2[16]);
            obj1 = { key: "USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT", content: null };
            intl = closure_0(closure_2[17]).intl;
            obj1.content = intl.string(closure_0(closure_2[17]).t["84yeoz"]);
            openResult = obj2.open(obj1);
            return;
          }
        }
      }
      if (cResult[16] !== tmp4.title) {
        class L {
          constructor() {
            tmp = closure_2(true);
            obj = closure_1(closure_2[15]);
            verifyResendResult = obj.verifyResend();
            obj2 = closure_1(closure_2[16]);
            obj1 = { key: "USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT", content: null };
            intl = closure_0(closure_2[17]).intl;
            obj1.content = intl.string(closure_0(closure_2[17]).t["84yeoz"]);
            openResult = obj2.open(obj1);
            return;
          }
        }
        let obj3 = {
          style: tmp4.title,
          accessibilityRole: "header",
          variant: "heading-xl/extrabold",
          color: "mobile-text-heading-primary",
          children: tmp29,
        };
        const tmp32 = closure_9(tmp(4886).Text, obj3);
        cResult[16] = tmp4.title;
        cResult[17] = tmp32;
      } else {
        class L {
          constructor() {
            tmp = closure_2(true);
            obj = closure_1(closure_2[15]);
            verifyResendResult = obj.verifyResend();
            obj2 = closure_1(closure_2[16]);
            obj1 = { key: "USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT", content: null };
            intl = closure_0(closure_2[17]).intl;
            obj1.content = intl.string(closure_0(closure_2[17]).t["84yeoz"]);
            openResult = obj2.open(obj1);
            return;
          }
        }
      }
      if (cResult[18] === email) {
        class L {
          constructor() {
            tmp = closure_2(true);
            obj = closure_1(closure_2[15]);
            verifyResendResult = obj.verifyResend();
            obj2 = closure_1(closure_2[16]);
            obj1 = { key: "USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT", content: null };
            intl = closure_0(closure_2[17]).intl;
            obj1.content = intl.string(closure_0(closure_2[17]).t["84yeoz"]);
            openResult = obj2.open(obj1);
            return;
          }
        }
      }
      let intl = tmp(1126).intl;
      if (tmp18) {
        class L {
          constructor() {
            tmp = closure_2(true);
            obj = closure_1(closure_2[15]);
            verifyResendResult = obj.verifyResend();
            obj2 = closure_1(closure_2[16]);
            obj1 = { key: "USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT", content: null };
            intl = closure_0(closure_2[17]).intl;
            obj1.content = intl.string(closure_0(closure_2[17]).t["84yeoz"]);
            openResult = obj2.open(obj1);
            return;
          }
        }
        const obj4 = { email };
        let tmp33Result = tmp35(tmp(1126).t.JqLgQL, obj4);
      } else {
        class L {
          constructor() {
            tmp = closure_2(true);
            obj = closure_1(closure_2[15]);
            verifyResendResult = obj.verifyResend();
            obj2 = closure_1(closure_2[16]);
            obj1 = { key: "USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT", content: null };
            intl = closure_0(closure_2[17]).intl;
            obj1.content = intl.string(closure_0(closure_2[17]).t["84yeoz"]);
            openResult = obj2.open(obj1);
            return;
          }
        }
        tmp33Result = tmp33(tmp(1126).t.tSXg8O);
      }
      cResult[18] = email;
      cResult[19] = tmp18;
      cResult[20] = tmp33Result;
      ref = noop.useRef(verified);
    }
  : () => {
      let tmp = closure_11();
      navigation = navigation(1490).useNavigation();
      let obj = navigation(1490);
      const items = [UserStore];
      const stateFromStores = navigation(504).useStateFromStores(items, () => {
        currentUser = currentUser.getCurrentUser();
        verified(38)(null != currentUser, "ResendEmail: user cannot be undefined");
        return currentUser;
      });
      const verified = stateFromStores.verified;
      const obj2 = navigation(504);
      const items1 = [UserRequiredActionStore];
      const stateFromStores1 = navigation(504).useStateFromStores(items1, () => action.getAction());
      let obj3 = navigation(504);
      const result = verified(6081).isEmailReverification(stateFromStores1);
      let tmp16Result = !result;
      const obj4 = verified(6081);
      [tmp10, dependencyMap] = ref(noop.useState(false), 2);
      const tmp9 = ref(noop.useState(false), 2);
      const items2 = [verified];
      const effect = noop.useEffect(() => {
        let tmp = verified;
        if (verified) {
          tmp = false === ref.current;
        }
        if (tmp) {
          EmailVerificationModalActionCreatorsDefault.close();
        }
      }, items2);
      const effect1 = noop.useEffect(() => {
        closure_3.current = verified;
      });
      const items3 = [navigation];
      const obj5 = { style: tmp.container, children: null };
      const callback = noop.useCallback(() => {
        navigation.push(VerificationModalScenes.ENTER_EMAIL);
      }, items3);
      const items4 = [closure_9(navigation(6090).EnvelopeOpenSpotIllustration, { scale: 0.75 }), , , ,];
      const obj6 = {
        style: tmp.title,
        accessibilityRole: "header",
        variant: "heading-xl/extrabold",
        color: "mobile-text-heading-primary",
        children: null,
      };
      let intl = navigation(1126).intl;
      obj6.children = intl.string(navigation(1126).t.fUtddV);
      items4[1] = closure_9(navigation(4886).Text, obj6);
      const obj7 = { style: tmp.body, variant: "text-sm/medium", color: "text-default", children: null };
      const intl2 = navigation(1126).intl;
      if (tmp10) {
        const obj8 = { email: stateFromStores.email };
        let formatResult = intl2.format(tmp2(1126).t.JqLgQL, obj8);
      } else {
        formatResult = intl2.string(tmp2(1126).t.tSXg8O);
      }
      obj7.children = formatResult;
      items4[2] = closure_9(navigation(4886).Text, obj7);
      const obj9 = { style: tmp.resend, children: null };
      const obj10 = { text: null, variant: "primary", onPress: null, grow: true };
      const intl3 = tmp2(1126).intl;
      obj10.text = intl3.string(navigation(1126).t.WnX4J2);
      obj10.onPress = function onPress() {
        dependencyMap(true);
        AuthenticationActionCreatorsDefault.verifyResend();
        const obj3 = { key: "USER_SETTINGS_ACCOUNT_CHANGE_EMAIL_CONFIRM_CODE_SENT", content: null };
        const intl = util.intl;
        obj3.content = intl.string(util.t["84yeoz"]);
        ToastActionCreatorsDefault.open(obj3);
      };
      obj9.children = closure_9(navigation(5594).Button, obj10);
      items4[3] = closure_9(View, obj9);
      if (!result) {
        const obj11 = { style: tmp.change, children: null };
        const obj12 = { text: null, variant: "secondary", onPress: null, grow: true };
        const intl4 = tmp2(1126).intl;
        obj12.text = intl4.string(tmp2(1126).t.Vm8akB);
        obj12.onPress = callback;
        obj11.children = closure_9(tmp2(5594).Button, obj12);
        tmp16Result = closure_9(View, obj11);
      }
      items4[4] = tmp16Result;
      obj5.children = items4;
      return closure_10(View, obj5);
    };
