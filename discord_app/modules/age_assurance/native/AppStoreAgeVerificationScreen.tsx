// discord_app/modules/age_assurance/native/AppStoreAgeVerificationScreen.tsx
import MonitoringAgentDefault from "../../monitoring/MonitoringAgent.tsx";
import MetricEvents from "../../../../discord_common/js/shared/shared-constants/MetricEvents.tsx";
import AgeVerificationAnalyticsUtils from "../AgeVerificationAnalyticsUtils.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
function trackFailure(arg0) {
  const obj2 = { name: MetricEvents.MetricEvents.APP_STORE_AGE_VERIFICATION_FAILED, tags: null };
  items = ["reason:" + arg0];
  obj2.tags = items;
  MonitoringAgentDefault.increment(obj2);
}
const ActivityIndicator = fn(17).ActivityIndicator;
const jsxProd = fn(21);
({ jsx: metroImportDefault, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_assurance/native/AppStoreAgeVerificationScreen.tsx");

export default function AppStoreAgeVerificationScreen(modalSessionId) {
  modalSessionId = modalSessionId.modalSessionId;
  dependencyMap = undefined;
  let callback1;
  noop = undefined;
  let navigation = modalSessionId(1501).useNavigation();
  let obj = modalSessionId(1501);
  [tmp5, c2] = callback1(noop.useState({ type: "loading" }), 2);
  const tmp4 = callback1(noop.useState({ type: "loading" }), 2);
  const watchAgeVerificationStatusChange = modalSessionId(6825).useWatchAgeVerificationStatusChange(
    modalSessionId.onClose,
  );
  items = [navigation];
  const callback = noop.useCallback(() => {
    navigation.goBack();
  }, items);
  const items1 = [callback];
  callback1 = noop.useCallback(
    callback(function* () {
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
          return { value: "HermesInternal", done: "+95" };
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
              const obj5 = {
                value: unknown(tmp3[9]).queueAppStoreAgeSignalSubmit(unknown(tmp3[10]).submitUserInitiatedAgeSignal),
                done: false,
              };
              return obj5;
            }
          } else {
            if (1 === tmp7) {
              c4 = 0;
              let status;
              if (tmp35 != null) {
                status = tmp35.status;
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
            return { value: "HermesInternal", done: "+95" };
          }
        } catch (tmp35) {
          if (tmp4 === c4) {
            c6 = tmp2;
            throw tmp35;
          } else {
            c5 = tmp;
          }
        }
      }
    }),
    items1,
  );
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
    const items3 = [closure_7(ActivityIndicator, { size: "large" })];
    let obj4 = { variant: "body-md/medium", color: "text-strong", children: null };
    const intl = tmp(1112).intl;
    obj4.children = intl.string(navigation(3499).MN6I4Y);
    items3[1] = closure_7(tmp(5634).Text, obj4);
    obj3.children = items3;
    let tmp15 = closure_9(closure_8, obj3);
  } else {
    let obj5 = { children: null };
    let obj6 = { variant: "body-md/medium", color: "text-strong", accessibilityRole: "alert", children: null };
    const intl2 = tmp(1112).intl;
    obj6.children = intl2.string(navigation(3499).tBwanH);
    const items4 = [closure_7(tmp(5634).Text, obj6)];
    const obj7 = { children: null };
    const obj8 = { variant: "primary", size: "lg", text: null, onPress: null };
    const intl3 = tmp(1112).intl;
    obj8.text = intl3.string(navigation(3499)["Jx33+I"]);
    obj8.onPress = function onPress() {
      const result = AgeVerificationAnalyticsUtils.trackAgeVerificationModalClicked(
        modalSessionId,
        AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.EXPRESSIVE_V2,
        AgeVerificationAnalyticsUtils.AgeVerificationModalCta.METHOD_SELECT,
      );
      callback();
    };
    obj7.children = closure_7(tmp(5641).Button, obj8);
    items4[1] = closure_7(tmp(6863).ButtonGroup, obj7);
    obj5.children = items4;
    tmp15 = closure_9(closure_8, obj5);
  }
  const obj9 = { children: null };
  let obj2 = modalSessionId(6825);
  obj9.children = closure_7(modalSessionId(7890).ModalContent, {
    children: closure_7(modalSessionId(6115).Stack, {
      align: "center",
      justify: "center",
      spacing: 16,
      children: tmp15,
    }),
  });
  return closure_7(modalSessionId(7888).ModalScreen, obj9);
}
