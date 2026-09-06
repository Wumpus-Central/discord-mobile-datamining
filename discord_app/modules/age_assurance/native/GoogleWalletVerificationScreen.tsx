// discord_app/modules/age_assurance/native/GoogleWalletVerificationScreen.tsx
import AgeVerificationAnalyticsUtils from "../AgeVerificationAnalyticsUtils.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const ActivityIndicator = fn(17).ActivityIndicator;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let closure_9 = { NOT_AVAILABLE: "not_available", FAILED: "credential_error" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_assurance/native/GoogleWalletVerificationScreen.tsx");

export default function GoogleWalletVerificationScreen(onClose) {
  onClose = onClose.onClose;
  const onComplete = onClose.onComplete;
  const modalSessionId = onClose.modalSessionId;
  _slicedToArray = undefined;
  let callback;
  let obj = onClose(modalSessionId[5]);
  const navigation = obj.useNavigation();
  [tmp5, c4] = _slicedToArray(callback.useState({ type: "loading" }), 2);
  let items = [onComplete, onClose];
  callback = callback.useCallback(() => {
    if (onComplete != null) {
      tmp();
    }
    onClose();
  }, items);
  let obj1 = onClose(modalSessionId[6]);
  const watchAgeVerificationStatusChange = obj1.useWatchAgeVerificationStatusChange(callback);
  const items1 = [navigation];
  const callback1 = callback.useCallback(() => {
    navigation.goBack();
  }, items1);
  const items2 = [callback1, callback];
  const callback2 = callback.useCallback(
    navigation(function* () {
      yield closure_0(tmp51[7]).requestGoogleWalletVerification();
      if (1 === tmp7) {
        c3 = 0;
        closure_128_2 = tmp51;
        let code;
        if (closure_128_2 != null) {
          code = closure_128_2.code;
        }
        if ("CANCELLED" === code) {
          let obj12 = tmp3(tmp51[9]);
          let obj2 = {
            name: onClose(tmp51[10]).MetricEvents.GOOGLE_WALLET_VERIFICATION_FAILED,
            tags: ["reason:user_cancelled"],
          };
          obj12.increment(obj2);
          closure_129_6();
          c5 = 3;
          return { value: undefined, done: true };
        } else {
          let reason;
          if (closure_128_2 != null) {
            const body = closure_128_2.body;
            if (body != null) {
              reason = body.reason;
            }
          }
          if ("unsupported_issuing_country" === reason) {
            let obj8 = tmp3(tmp51[9]);
            obj8.increment({
              name: onClose(tmp51[10]).MetricEvents.GOOGLE_WALLET_VERIFICATION_FAILED,
              tags: ["reason:unsupported_issuing_country"],
            });
            let obj5 = { type: "error", message: null };
            const intl = onClose(tmp51[11]).intl;
            obj5.message = intl.string(tmp3(tmp51[12]).Pf5xUq);
            closure_129_4(obj5);
            c5 = 3;
            return { value: undefined, done: true };
          } else {
            closure_128_3 = (function getFailureReason(status) {
              status = undefined;
              if (status != null) {
                status = status.status;
              }
              let str = "rate_limited";
              if (429 !== status) {
                let code;
                if (status != null) {
                  code = status.code;
                }
                let str3 = "unknown";
                if (null != code) {
                  str3 = "unknown";
                  if (status.code in closure_1_9) {
                    str3 = tmp3[status.code];
                  }
                }
                str = str3;
              }
              return str;
            })(closure_128_2);
            const obj7 = { name: onClose(tmp51[10]).MetricEvents.GOOGLE_WALLET_VERIFICATION_FAILED, tags: null };
            const _HermesInternal = HermesInternal;
            const items = ["reason:" + closure_128_3];
            obj7.tags = items;
            tmp3(tmp51[9]).increment(obj7);
            obj8 = { type: "error", message: null };
            const intl2 = onClose(tmp51[11]).intl;
            obj8.message = intl2.string(tmp3(tmp51[12])["+pwfOA"]);
            closure_129_4(obj8);
            c5 = 3;
            tmp3(tmp51[9]);
          }
        }
      } else if (2 === tmp7) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          return { value, done: true };
        } else {
          const request_json = value.request_json;
          obj5 = onClose(tmp51[7]);
          c4 = 3;
          c5 = 1;
          return { value: obj5.getGoogleWalletCredential(request_json), done: false };
        }
      } else if (3 === tmp7) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          return { value, done: true };
        } else {
          closure_128_1 = value;
          obj2 = onClose(tmp51[7]);
          c4 = 4;
          c5 = 1;
          obj12 = { value: obj2.verifyGoogleWalletCredential(closure_128_1), done: false };
          return obj12;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 !== 2) {
        if (obj.isCurrentUserSuspended()) {
          closure_129_5();
        }
        c3 = 0;
        obj = onClose(tmp51[8]);
      }
      return value;
    }),
    items2,
  );
  closure_8 = callback.useRef(false);
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
      closure_0();
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
    obj2.children = intl.string(onComplete(tmp2[12]).MlFuBI);
    items4[1] = callback2(tmp(tmp2[16]).Text, obj2);
    obj1.children = items4;
    obj.children = closure_8(tmp(tmp2[15]).Stack, obj1);
    obj.children = callback2(tmp(tmp2[14]).ModalContent, obj);
    let tmp15 = callback2(tmp(tmp2[13]).ModalScreen, obj);
  } else {
    const obj3 = { children: null };
    const obj4 = { children: null };
    let obj5 = { align: "center", justify: "center", spacing: 16, children: null };
    const obj6 = { variant: "text-md/medium", color: "text-strong", children: tmp5.message };
    const items5 = [callback2(tmp(tmp2[16]).Text, obj6)];
    let obj7 = { children: null };
    let obj8 = { variant: "primary", size: "lg", text: null, onPress: null };
    let intl2 = tmp(tmp2[11]).intl;
    obj8.text = intl2.string(onComplete(tmp2[12]).fEUKEv);
    obj8.onPress = function onPress() {
      const result = AgeVerificationAnalyticsUtils.trackAgeVerificationModalClicked(
        modalSessionId,
        AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.EXPRESSIVE_PRIMARY,
        AgeVerificationAnalyticsUtils.AgeVerificationModalCta.METHOD_SELECT,
      );
      callback1();
    };
    obj7.children = callback2(tmp(tmp2[18]).Button, obj8);
    items5[1] = callback2(tmp(tmp2[17]).ButtonGroup, obj7);
    obj5.children = items5;
    obj4.children = closure_8(tmp(tmp2[15]).Stack, obj5);
    obj3.children = callback2(tmp(tmp2[14]).ModalContent, obj4);
    tmp15 = callback2(tmp(tmp2[13]).ModalScreen, obj3);
  }
  return tmp15;
}
