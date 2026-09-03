// discord_app/modules/age_assurance/native/GoogleWalletVerificationScreen.tsx
import closure_3 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_5 from "../../../../_runtime/00019_noop.js";
import { ActivityIndicator } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";

const require = arg1;
({ jsx: error, jsxs: closure_8 } = jsxProd);
let closure_9 = { NOT_AVAILABLE: "not_available", FAILED: "credential_error" };
let result = require("set").fileFinishedImporting("modules/age_assurance/native/GoogleWalletVerificationScreen.tsx");

export default function GoogleWalletVerificationScreen(onClose) {
  onClose = onClose.onClose;
  const onComplete = onClose.onComplete;
  const modalSessionId = onClose.modalSessionId;
  let navigation;
  let callback;
  callback = undefined;
  let callback1;
  let callback2;
  callback2 = undefined;
  let obj = onClose(modalSessionId[5]);
  navigation = obj.useNavigation();
  [tmp5, c4] = callback(callback.useState({ type: "loading" }), 2);
  let items = [onComplete, onClose];
  callback = callback.useCallback(() => {
    if (onComplete != null) {
      tmp();
    }
    onClose();
  }, items);
  obj1 = onClose(modalSessionId[6]);
  const watchAgeVerificationStatusChange = obj1.useWatchAgeVerificationStatusChange(callback);
  const items1 = [navigation];
  callback1 = callback.useCallback(() => {
    navigation.goBack();
  }, items1);
  const items2 = [callback1, callback];
  callback2 = callback.useCallback(
    navigation(function* () {
      c1 = tmp3;
      c3 = 1;
      yield request_json(closure_2[7]).requestGoogleWalletVerification();
      if (1 === tmp7) {
        c3 = 0;
        closure_2 = c2;
        let code;
        if (closure_2 != null) {
          code = closure_2.code;
        }
        if ("CANCELLED" === code) {
          let obj12 = callback(closure_2[9]);
          let obj2 = { name: null, tags: null };
          obj2[0] = request_json(closure_2[10]).MetricEvents.GOOGLE_WALLET_VERIFICATION_FAILED;
          obj2[1] = ["reason:user_cancelled"];
          obj12.increment(obj2);
          closure_1_6();
          let v02 = 3;
          const obj3 = { value: null, done: true };
          obj3[0] = undefined;
          return obj3;
        } else {
          let reason;
          if (closure_2 != null) {
            const body = closure_2.body;
            if (body != null) {
              reason = body.reason;
            }
          }
          if ("unsupported_issuing_country" === reason) {
            let obj8 = callback(closure_2[9]);
            const obj4 = { name: null, tags: null };
            obj4[0] = request_json(closure_2[10]).MetricEvents.GOOGLE_WALLET_VERIFICATION_FAILED;
            obj4[1] = ["reason:unsupported_issuing_country"];
            obj8.increment(obj4);
            let obj5 = { type: "error", message: null };
            const intl = request_json(closure_2[11]).intl;
            obj5[1] = intl.string(callback(closure_2[12]).Pf5xUq);
            v0(obj5);
            v02 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = undefined;
            return obj6;
          } else {
            c3 = (function getFailureReason(c2) {
              let status;
              if (c2 != null) {
                status = c2.status;
              }
              let str = "rate_limited";
              if (429 !== status) {
                let code;
                if (c2 != null) {
                  code = c2.code;
                }
                let str3 = "unknown";
                if (null != code) {
                  str3 = "unknown";
                  if (c2.code in closure_9) {
                    str3 = tmp3[c2.code];
                  }
                }
                str = str3;
              }
              return str;
            })(c2);
            const obj7 = { name: null, tags: null };
            obj7[0] = request_json(closure_2[10]).MetricEvents.GOOGLE_WALLET_VERIFICATION_FAILED;
            const _HermesInternal = HermesInternal;
            const items = ["reason:" + c3];
            obj7[1] = items;
            callback(closure_2[9]).increment(obj7);
            obj8 = { type: "error", message: null };
            const intl2 = request_json(closure_2[11]).intl;
            obj8[1] = intl2.string(callback(closure_2[12])["+pwfOA"]);
            v0(obj8);
            v02 = 3;
            const obj20 = callback(closure_2[9]);
          }
        }
      } else if (2 === tmp7) {
        if (arg0 === 1) {
          v02 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 0;
          v02 = 3;
          const obj9 = { value: null, done: true };
          obj9[0] = arg1;
          return obj9;
        } else {
          request_json = arg1.request_json;
          obj5 = request_json(closure_2[7]);
          v0 = 3;
          v02 = 1;
          const obj10 = { value: null, done: false };
          obj10[0] = obj5.getGoogleWalletCredential(request_json);
          return obj10;
        }
      } else if (3 === tmp7) {
        if (arg0 === 1) {
          v02 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 0;
          v02 = 3;
          const obj11 = { value: null, done: true };
          obj11[0] = arg1;
          return obj11;
        } else {
          callback = arg1;
          obj2 = request_json(closure_2[7]);
          v0 = 4;
          v02 = 1;
          obj12 = { value: null, done: false };
          obj12[0] = obj2.verifyGoogleWalletCredential(callback);
          return obj12;
        }
      } else if (arg0 === 1) {
        v02 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        const obj = request_json(closure_2[8]);
        if (obj.isCurrentUserSuspended()) {
          v02();
        }
        c3 = 0;
      }
      c3 = 0;
      return arg1;
    }),
    items2,
  );
  callback2 = callback.useRef(false);
  const items3 = [navigation, callback2];
  const effect = callback.useEffect(() => {
    closure_0 = navigation.addListener("transitionEnd", (data) => {
      let current = ref.current;
      if (!current) {
        current = true === data.data.closing;
      }
      if (!current) {
        ref.current = true;
        callback2();
      }
    });
    const timeout = setTimeout(() => {
      if (!ref.current) {
        tmp.current = true;
        callback2();
      }
    }, 1000);
    return () => {
      callback();
      clearTimeout(closure_1);
    };
  }, items3);
  if ("loading" === tmp5.type) {
    obj = { children: null };
    obj = { children: null };
    obj1 = { align: "center", justify: "center", spacing: 16, children: null };
    const items4 = [callback2(callback1, { size: "large" })];
    let obj2 = { variant: "text-md/medium", color: "text-strong", children: null };
    let intl = tmp(tmp2[11]).intl;
    obj2[2] = intl.string(onComplete(tmp2[12]).MlFuBI);
    items4[1] = callback2(tmp(tmp2[16]).Text, obj2);
    obj1[3] = items4;
    obj[0] = callback2(tmp(tmp2[15]).Stack, obj1);
    obj[0] = callback2(tmp(tmp2[14]).ModalContent, obj);
    let tmp15 = callback2(tmp(tmp2[13]).ModalScreen, obj);
  } else {
    let obj3 = { children: null };
    let obj4 = { children: null };
    let obj5 = { align: "center", justify: "center", spacing: 16, children: null };
    let obj6 = { variant: "text-md/medium", color: "text-strong", children: null };
    obj6[2] = tmp5.message;
    const items5 = [callback2(tmp(tmp2[16]).Text, obj6)];
    let obj7 = { children: null };
    let obj8 = { variant: "primary", size: "lg", text: null, onPress: null };
    let intl2 = tmp(tmp2[11]).intl;
    obj8[2] = intl2.string(onComplete(tmp2[12]).fEUKEv);
    obj8[3] = function onPress() {
      const result = onClose(modalSessionId[19]).trackAgeVerificationModalClicked(
        modalSessionId,
        onClose(modalSessionId[19]).AgeVerificationModalVersion.EXPRESSIVE_PRIMARY,
        onClose(modalSessionId[19]).AgeVerificationModalCta.METHOD_SELECT,
      );
      callback1();
    };
    obj7[0] = callback2(tmp(tmp2[18]).Button, obj8);
    items5[1] = callback2(tmp(tmp2[17]).ButtonGroup, obj7);
    obj5[3] = items5;
    obj4[0] = callback2(tmp(tmp2[15]).Stack, obj5);
    obj3[0] = callback2(tmp(tmp2[14]).ModalContent, obj4);
    tmp15 = callback2(tmp(tmp2[13]).ModalScreen, obj3);
  }
  return tmp15;
}
