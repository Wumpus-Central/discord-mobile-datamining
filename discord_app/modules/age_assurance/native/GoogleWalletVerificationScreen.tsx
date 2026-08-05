// discord_app/modules/age_assurance/native/GoogleWalletVerificationScreen.tsx
import useNavigation from "useNavigation";
import _slicedToArray from "_slicedToArray";
import set from "set";
import { ActivityIndicator } from "Button";
import jsxProd from "jsxProd";

let error;
let metroImportAll;
const require = arg1;
({ jsx: error, jsxs: metroImportAll } = jsxProd);
let closure_9 = { NOT_AVAILABLE: "not_available", FAILED: "credential_error" };
let result = require("noop").fileFinishedImporting("modules/age_assurance/native/GoogleWalletVerificationScreen.tsx");

export default function GoogleWalletVerificationScreen(modalSessionId) {
  let c2;
  let tmp5;
  modalSessionId = modalSessionId.modalSessionId;
  let navigation;
  let dependencyMap;
  let callback;
  let callback1;
  let React;
  let obj = modalSessionId(1480);
  navigation = obj.useNavigation();
  [tmp5, c2] = callback1(React.useState({ type: "loading" }), 2);
  let obj1 = modalSessionId(4500);
  const watchAgeVerificationStatusChange = obj1.useWatchAgeVerificationStatusChange(modalSessionId.onClose);
  let items = [navigation];
  callback = React.useCallback(() => {
    navigation.goBack();
  }, items);
  const items1 = [callback];
  callback1 = React.useCallback(callback(function*() {
    let closure_1 = tmp3;
    let v0 = 1;
    yield outer1_0(outer1_2[7]).requestGoogleWalletVerification();
    if (1 === tmp7) {
      v0 = 0;
      let code;
      if (lib != null) {
        code = lib.code;
      }
      if ("CANCELLED" === code) {
        let obj11 = outer1_1(outer1_2[8]);
        const obj2 = { name: null, tags: null };
        obj2[0] = outer1_0(outer1_2[9]).MetricEvents.GOOGLE_WALLET_VERIFICATION_FAILED;
        obj2[1] = ["reason:user_cancelled"];
        obj11.increment(obj2);
        v0();
        let c5 = 3;
        const obj3 = { value: null, done: true };
        obj3[0] = undefined;
        return obj3;
      } else {
        let reason;
        if (lib != null) {
          const body = lib.body;
          if (body != null) {
            reason = body.reason;
          }
        }
        if ("unsupported_issuing_country" === reason) {
          let obj7 = outer1_1(outer1_2[8]);
          let obj4 = { name: null, tags: null };
          obj4[0] = outer1_0(outer1_2[9]).MetricEvents.GOOGLE_WALLET_VERIFICATION_FAILED;
          obj4[1] = ["reason:unsupported_issuing_country"];
          obj7.increment(obj4);
          const obj5 = { type: "error", message: null };
          const intl = outer1_0(outer1_2[10]).intl;
          obj5[1] = intl.string(outer1_1(outer1_2[11]).Pf5xUq);
          lib(obj5);
          c5 = 3;
          const obj6 = { value: null, done: true };
          obj6[0] = undefined;
          return obj6;
        } else {
          v0 = (function getFailureReason(closure_2) {
            let status;
            if (closure_2 != null) {
              status = closure_2.status;
            }
            let str = "rate_limited";
            if (429 !== status) {
              let code;
              if (closure_2 != null) {
                code = closure_2.code;
              }
              let str3 = "unknown";
              if (null != code) {
                str3 = "unknown";
                if (closure_2.code in closure_9) {
                  str3 = tmp3[closure_2.code];
                }
              }
              str = str3;
            }
            return str;
          })(lib);
          obj7 = { name: null, tags: null };
          obj7[0] = outer1_0(outer1_2[9]).MetricEvents.GOOGLE_WALLET_VERIFICATION_FAILED;
          const _HermesInternal = HermesInternal;
          const items = ["reason:" + v0];
          obj7[1] = items;
          outer1_1(outer1_2[8]).increment(obj7);
          const obj8 = { type: "error", message: null };
          const intl2 = outer1_0(outer1_2[10]).intl;
          obj8[1] = intl2.string(outer1_1(outer1_2[11])["+pwfOA"]);
          lib(obj8);
          c5 = 3;
          const obj19 = outer1_1(outer1_2[8]);
        }
      }
    } else if (2 === tmp7) {
      if (arg0 === 1) {
        c5 = 3;
        throw arg1;
      } else if (arg0 === 2) {
        v0 = 0;
        c5 = 3;
        const obj9 = { value: null, done: true };
        obj9[0] = arg1;
        return obj9;
      } else {
        const request_json = arg1.request_json;
        obj4 = outer1_0(outer1_2[7]);
        let c4 = 3;
        c5 = 1;
        const obj10 = { value: null, done: false };
        obj10[0] = obj4.getGoogleWalletCredential(request_json);
        return obj10;
      }
    } else if (3 === tmp7) {
      if (arg0 === 1) {
        c5 = 3;
        throw arg1;
      } else if (arg0 === 2) {
        v0 = 0;
        c5 = 3;
        obj11 = { value: null, done: true };
        obj11[0] = arg1;
        return obj11;
      } else {
        closure_1 = arg1;
        const obj1 = outer1_0(outer1_2[7]);
        c4 = 4;
        c5 = 1;
        const obj12 = { value: null, done: false };
        obj12[0] = obj1.verifyGoogleWalletCredential(closure_1);
        return obj12;
      }
    } else if (arg0 === 1) {
      c5 = 3;
      throw arg1;
    } else if (arg0 !== 2) {
      v0 = 0;
    }
    v0 = 0;
    return arg1;
  }), items1);
  React = React.useRef(false);
  const items2 = [navigation, callback1];
  const effect = React.useEffect(() => {
    let closure_0 = navigation.addListener("transitionEnd", (data) => {
      let current = ref.current;
      if (!current) {
        current = true === data.data.closing;
      }
      if (!current) {
        ref.current = true;
        callback2();
      }
    });
    navigation = setTimeout(() => {
      if (!ref.current) {
        tmp.current = true;
        callback2();
      }
    }, 1000);
    return () => {
      callback();
      clearTimeout(closure_1);
    };
  }, items2);
  if ("loading" === tmp5.type) {
    obj = { children: null };
    obj = { children: null };
    obj1 = { align: "center", justify: "center", spacing: 16, children: null };
    const items3 = [callback(ActivityIndicator, { size: "large" }), ];
    let obj2 = { variant: "text-md/medium", color: "text-strong", children: null };
    let intl = tmp(1236).intl;
    obj2[2] = intl.string(navigation(2803).MlFuBI);
    items3[1] = callback(tmp(4281).Text, obj2);
    obj1[3] = items3;
    obj[0] = callback2(tmp(4693).Stack, obj1);
    obj[0] = callback(tmp(7758).ModalContent, obj);
    let tmp14 = callback(tmp(7757).ModalScreen, obj);
  } else {
    let obj3 = { children: null };
    let obj4 = { children: null };
    let obj5 = { align: "center", justify: "center", spacing: 16, children: null };
    let obj6 = { variant: "text-md/medium", color: "text-strong", children: null };
    obj6[2] = tmp5.message;
    const items4 = [callback(tmp(4281).Text, obj6), ];
    let obj7 = { children: null };
    let obj8 = { variant: "primary", size: "lg", text: null, onPress: null };
    let intl2 = tmp(1236).intl;
    obj8[2] = intl2.string(navigation(2803).fEUKEv);
    obj8[3] = function onPress() {
      const result = modalSessionId(_undefined[18]).trackAgeVerificationModalClicked(modalSessionId, modalSessionId(_undefined[18]).AgeVerificationModalVersion.EXPRESSIVE_PRIMARY, modalSessionId(_undefined[18]).AgeVerificationModalCta.METHOD_SELECT);
      callback();
    };
    obj7[0] = callback(tmp(4695).Button, obj8);
    items4[1] = callback(tmp(5117).ButtonGroup, obj7);
    obj5[3] = items4;
    obj4[0] = callback2(tmp(4693).Stack, obj5);
    obj3[0] = callback(tmp(7758).ModalContent, obj4);
    tmp14 = callback(tmp(7757).ModalScreen, obj3);
  }
  return tmp14;
};