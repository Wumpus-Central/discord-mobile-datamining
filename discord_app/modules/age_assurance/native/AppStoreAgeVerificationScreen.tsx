// === Module 8567: AppStoreAgeVerificationScreen ===

// Module 8567 (AppStoreAgeVerificationScreen)
import MonitoringAgentDefault from "MonitoringAgent" /* 7602 */;
import MetricEvents from "MetricEvents" /* 7607 */;
import AgeVerificationAnalyticsUtils from "AgeVerificationAnalyticsUtils" /* 8413 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function trackFailure(arg0) {
  const obj = { name: MetricEvents.MetricEvents.APP_STORE_AGE_VERIFICATION_FAILED, tags: null };
  const items = ["reason:" + arg0];
  obj.tags = items;
  obj.increment(obj);
}
const ActivityIndicator = fn(17).ActivityIndicator;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_assurance/native/AppStoreAgeVerificationScreen.tsx");

export default function AppStoreAgeVerificationScreen(modalSessionId) {
  modalSessionId = modalSessionId.modalSessionId;
  dependencyMap = undefined;
  let callback1;
  noop = undefined;
  let obj = modalSessionId(1483);
  let navigation = obj.useNavigation();
  [tmp5, c2] = callback1(noop.useState({ type: "loading" }), 2);
  let obj1 = modalSessionId(4773);
  const watchAgeVerificationStatusChange = obj1.useWatchAgeVerificationStatusChange(modalSessionId.onClose);
  let items = [navigation];
  const callback = noop.useCallback(() => {
    navigation.goBack();
  }, items);
  const items1 = [callback];
  callback1 = noop.useCallback(callback(function*(arg0, value) {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj = { value, done: true };
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            navigation = tmp7;
            closure_129_0 = undefined;
            closure_129_1 = undefined;
            closure_129_2 = undefined;
            closure_129_3 = undefined;
            closure_129_4 = undefined;
            closure_129_5 = undefined;
            closure_129_6 = undefined;
            let v0 = 1;
            const result = unknown(tmp3[9]).warmAgeSignalAttestation();
            const obj12 = unknown(tmp3[9]);
            let obj1 = { firstAgeGate: unknown(tmp3[11]).MIN_AGE_GATE, secondAgeGate: unknown(tmp3[11]).ADULT_AGE_GATE };
            const items = [navigation(tmp3[10]).getAgeSignals(obj1), ];
            const obj13 = navigation(tmp3[10]);
            items[1] = unknown(tmp3[9]).getAgeSignalChallenge();
            c5 = 2;
            c6 = 1;
            const obj2 = { value: Promise.all(items), done: false };
            return obj2;
          }
        } else {
          if (1 === tmp7) {
            v0 = 0;
            let status;
            if (tmp44 != null) {
              status = tmp44.status;
            }
            closure_129_6 = status;
            let str2 = "unknown";
            if (429 === closure_129_6) {
              str2 = "rate_limited";
            }
            trackFailure(str2);
            closure_130_2({ type: "error" });
            c6 = 3;
          } else if (2 === tmp7) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              v0 = 0;
              c6 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              closure_129_0 = value;
              closure_129_1 = v0(closure_129_0, 2);
              closure_129_2 = closure_129_1[0];
              closure_129_3 = closure_129_1[1];
              if ("declined" === closure_129_2.appleVerifiedMethod) {
                trackFailure("user_declined");
                closure_130_3();
                v0 = 0;
                c6 = 3;
                let obj4 = { value: undefined, done: true };
                return obj4;
              } else {
                obj4 = unknown(tmp3[9]);
                c5 = 3;
                c6 = 1;
                const obj5 = { value: obj4.getAgeSignalIntegrityToken(closure_129_3, closure_129_2), done: false };
                return obj5;
              }
            }
          } else if (3 === tmp7) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              v0 = 0;
              c6 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              closure_129_4 = value;
              obj1 = unknown(tmp3[12]);
              c5 = 4;
              c6 = 1;
              const obj7 = { value: obj1.submitAgeSignal(closure_129_2, closure_129_4, false, "user_initiated"), done: false };
              return obj7;
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            v0 = 0;
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_129_5 = value;
            if ("accepted" !== closure_129_5.result) {
              const reason = closure_129_5.reason;
              unknown = reason;
              if (reason == null) {
                unknown = "unknown";
              }
              trackFailure(unknown);
              closure_130_2({ type: "error" });
              v0 = 0;
            }
          }
          v0 = 0;
          c6 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp44) {
        if (tmp4 === v0) {
          c6 = tmp2;
          throw tmp44;
        } else {
          c5 = tmp;
        }
      }
    }
  }), items1);
  noop = noop.useRef(false);
  const items2 = [navigation, callback1];
  const effect = noop.useEffect(() => {
    closure_0 = navigation.addListener("transitionEnd", (data) => {
      let current = ref.current;
      if (!current) {
        current = true === data.data.closing;
      }
      if (!current) {
        ref.current = true;
        callback1();
      }
    });
    navigation = setTimeout(() => {
      if (!ref.current) {
        tmp.current = true;
        callback1();
      }
    }, 1000);
    return () => {
      closure_0();
      clearTimeout(closure_1);
    };
  }, items2);
  if ("loading" === tmp5.type) {
    obj = { children: null };
    const items3 = [tmp10(ActivityIndicator, { size: "large" }), ];
    obj = { variant: "text-md/medium", color: "text-strong", children: null };
    const intl = tmp(1114).intl;
    obj.children = intl.string(navigation(2946).MN6I4Y);
    items3[1] = tmp10(tmp(4556).Text, obj);
    obj.children = items3;
    let tmp15 = closure_9(closure_8, obj);
  } else {
    obj1 = { children: null };
    let obj2 = { variant: "text-md/medium", color: "text-strong", accessibilityRole: "alert", children: null };
    const intl2 = tmp(1114).intl;
    obj2.children = intl2.string(navigation(2946).tBwanH);
    const items4 = [tmp10(tmp(4556).Text, obj2), ];
    let obj3 = { children: null };
    let obj4 = { variant: "primary", size: "lg", text: null, onPress: null };
    const intl3 = tmp(1114).intl;
    obj4.text = intl3.string(navigation(2946)["Jx33+I"]);
    obj4.onPress = function onPress() {
      const result = AgeVerificationAnalyticsUtils.trackAgeVerificationModalClicked(modalSessionId, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.EXPRESSIVE_V2, AgeVerificationAnalyticsUtils.AgeVerificationModalCta.METHOD_SELECT);
      callback();
    };
    obj3.children = tmp10(tmp(4975).Button, obj4);
    items4[1] = tmp10(tmp(5433).ButtonGroup, obj3);
    obj1.children = items4;
    tmp15 = closure_9(closure_8, obj1);
  }
  let obj5 = { children: null };
  const tmp4 = callback1(noop.useState({ type: "loading" }), 2);
  obj5.children = closure_7(modalSessionId(8422).ModalContent, { children: closure_7(modalSessionId(4973).Stack, { align: "center", justify: "center", spacing: 16, children: tmp15 }) });
  return closure_7(modalSessionId(8421).ModalScreen, obj5);
};