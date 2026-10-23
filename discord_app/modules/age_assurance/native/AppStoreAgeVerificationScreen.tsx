// discord_app/modules/age_assurance/native/AppStoreAgeVerificationScreen.tsx
import MonitoringAgentDefault from "../../monitoring/MonitoringAgent.tsx";
import MetricEvents from "../../../../discord_common/js/shared/shared-constants/MetricEvents.tsx";
import AgeVerificationAnalyticsUtils from "../AgeVerificationAnalyticsUtils.tsx";
import AppStoreAgeSignalSupport from "AppStoreAgeSignalSupport.tsx";
import AppStoreAgeSignalAttestation from "AppStoreAgeSignalAttestation.tsx";
import AppStoreAgeAssuranceDefault from "AppStoreAgeAssurance.android.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function trackFailure(arg0) {
  const obj2 = { name: MetricEvents.MetricEvents.APP_STORE_AGE_VERIFICATION_FAILED, tags: null };
  const items = ["reason:" + arg0];
  obj2.tags = items;
  MonitoringAgentDefault.increment(obj2);
}
function submitUserInitiatedAgeSignal() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_12 = async function _submitUserInitiatedAgeSignal() {
  closure_1 = tmp2;
  const result = AppStoreAgeSignalAttestation.warmAgeSignalAttestation();
  const items = [AppStoreAgeAssuranceDefault.getAgeSignals({ firstAgeGate: AppStoreAgeSignalSupport.MIN_AGE_GATE, secondAgeGate: AppStoreAgeSignalSupport.ADULT_AGE_GATE }), ];
  items[1] = AppStoreAgeSignalAttestation.getAgeSignalChallenge();
  await Promise.all(items);
  closure_128_0 = value;
  closure_128_1 = closure_129_3(closure_128_0, 2);
  closure_128_2 = closure_128_1[0];
  closure_128_3 = closure_128_1[1];
  if ("declined" === closure_128_2.appleVerifiedMethod) {
    return null;
  }
  await closure_129_0(closure_129_2[7]).getAgeSignalIntegrityToken(closure_128_3, closure_128_2);
  closure_128_4 = value;
  await closure_129_0(closure_129_2[7]).getAppStoreAgeSignalAssertion(closure_128_2, false);
  closure_128_5 = value;
  { firstAgeGate: AppStoreAgeSignalSupport.MIN_AGE_GATE, secondAgeGate: AppStoreAgeSignalSupport.ADULT_AGE_GATE };
  await closure_129_0(closure_129_2[10]).submitAgeSignal(closure_128_2, closure_128_4, false, "user_initiated", closure_128_5);
  return value;
};
const ActivityIndicator = fn(17).ActivityIndicator;
const jsxProd = fn(21);
({ jsx: closure_7, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_assurance/native/AppStoreAgeVerificationScreen.tsx");

export default function AppStoreAgeVerificationScreen(modalSessionId) {
  modalSessionId = modalSessionId.modalSessionId;
  dependencyMap = undefined;
  let callback;
  let callback1;
  noop = undefined;
  let navigation = modalSessionId(1505).useNavigation();
  let obj = modalSessionId(1505);
  [tmp5, c2] = callback(noop.useState({ type: "loading" }), 2);
  const tmp4 = callback(noop.useState({ type: "loading" }), 2);
  const watchAgeVerificationStatusChange = modalSessionId(6652).useWatchAgeVerificationStatusChange(modalSessionId.onClose);
  const items = [navigation];
  callback = noop.useCallback(() => {
    navigation.goBack();
  }, items);
  const items1 = [callback];
  callback1 = noop.useCallback(callback1(function*() {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
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
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_1 = tmp7;
            closure_129_0 = undefined;
            closure_129_1 = undefined;
            c4 = 1;
            c5 = 2;
            c6 = 1;
            const obj5 = { value: unknown(tmp3[13]).queueAppStoreAgeSignalSubmit(submitUserInitiatedAgeSignal), done: false };
            return obj5;
          }
        } else {
          if (1 === tmp7) {
            c4 = 0;
            let status;
            if (tmp36 != null) {
              status = tmp36.status;
            }
            closure_129_1 = status;
            let str = "unknown";
            if (429 === closure_129_1) {
              str = "rate_limited";
            }
            trackFailure(str);
            closure_130_2({ type: "error" });
            c6 = 3;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_129_0 = value;
            if (null == closure_129_0) {
              trackFailure("user_declined");
              closure_130_3();
              c4 = 0;
              c6 = 3;
              const obj = { value: undefined, done: true };
              return obj;
            } else if ("accepted" !== closure_129_0.result) {
              const reason = closure_129_0.reason;
              unknown = reason;
              if (reason == null) {
                unknown = "unknown";
              }
              trackFailure(unknown);
              closure_130_2({ type: "error" });
              c4 = 0;
            }
          }
          c4 = 0;
          c6 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp36) {
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp36;
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
    const obj3 = { children: null };
    const items3 = [closure_7(ActivityIndicator, { size: "large" }), ];
    let obj4 = { variant: "text-md/medium", color: "text-strong", children: null };
    const intl = tmp(1128).intl;
    obj4.children = intl.string(navigation(3090).MN6I4Y);
    items3[1] = closure_7(tmp(5232).Text, obj4);
    obj3.children = items3;
    let tmp15 = closure_9(closure_8, obj3);
  } else {
    let obj5 = { children: null };
    let obj6 = { variant: "text-md/medium", color: "text-strong", accessibilityRole: "alert", children: null };
    const intl2 = tmp(1128).intl;
    obj6.children = intl2.string(navigation(3090).tBwanH);
    const items4 = [closure_7(tmp(5232).Text, obj6), ];
    const obj7 = { children: null };
    const obj8 = { variant: "primary", size: "lg", text: null, onPress: null };
    const intl3 = tmp(1128).intl;
    obj8.text = intl3.string(navigation(3090)["Jx33+I"]);
    obj8.onPress = function onPress() {
      const result = AgeVerificationAnalyticsUtils.trackAgeVerificationModalClicked(modalSessionId, AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.EXPRESSIVE_V2, AgeVerificationAnalyticsUtils.AgeVerificationModalCta.METHOD_SELECT);
      callback();
    };
    obj7.children = closure_7(tmp(5242).Button, obj8);
    items4[1] = closure_7(tmp(6694).ButtonGroup, obj7);
    obj5.children = items4;
    tmp15 = closure_9(closure_8, obj5);
  }
  const obj9 = { children: null };
  let obj2 = modalSessionId(6652);
  obj9.children = closure_7(modalSessionId(7899).ModalContent, { children: closure_7(modalSessionId(5975).Stack, { align: "center", justify: "center", spacing: 16, children: tmp15 }) });
  return closure_7(modalSessionId(7898).ModalScreen, obj9);
};