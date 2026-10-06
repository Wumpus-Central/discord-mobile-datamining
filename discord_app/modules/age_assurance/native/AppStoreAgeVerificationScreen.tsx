// discord_app/modules/age_assurance/native/AppStoreAgeVerificationScreen.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import MonitoringAgentDefault from "../../monitoring/MonitoringAgent.tsx";
import MetricEvents from "../../../../discord_common/js/shared/shared-constants/MetricEvents.tsx";
import AgeVerificationAnalyticsUtils from "../AgeVerificationAnalyticsUtils.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import size from "../../../../_runtime/metro/00002__.js";

let c5, c6, closure_5, dependencyMap, navigation;

let c9;
let metroImportAll;
let metroImportDefault;
function trackFailure(arg0) {
  let items;
  const tmp = MonitoringAgentDefault;
  const increment = tmp.increment;
  const obj = { name: MetricEvents.MetricEvents.APP_STORE_AGE_VERIFICATION_FAILED, tags: items };
  items = ["reason:" + arg0];
  increment(obj);
}
let react = react_mod;
const ActivityIndicator = react_native.ActivityIndicator;
({ jsx: metroImportDefault, Fragment: metroImportAll, jsxs: c9 } = Fragment);
let result = size.fileFinishedImporting("modules/age_assurance/native/AppStoreAgeVerificationScreen.tsx");

export default function AppStoreAgeVerificationScreen(modalSessionId) {
  let Button;
  let c2;
  let intl;
  let intl2;
  let intl3;
  let items3;
  let items4;
  let obj10;
  let obj8;
  let tmp15;
  let tmp5;
  modalSessionId = modalSessionId.modalSessionId;
  dependencyMap = undefined;
  let callback1;
  react = undefined;
  const tmp = modalSessionId;
  const onClose = modalSessionId.onClose;
  let obj = modalSessionId(1490);
  navigation = obj.useNavigation();
  const tmp4 = callback1(react.useState({ type: "loading" }), 2);
  [tmp5, c2] = tmp4;
  let obj2 = modalSessionId(5108);
  const watchAgeVerificationStatusChange = obj2.useWatchAgeVerificationStatusChange(onClose);
  let items = [navigation];
  const callback = react.useCallback(() => {
    navigation.goBack();
  }, items);
  const items1 = [callback];
  callback1 = react.useCallback(
    callback(function* () {
      let closure_1;
      let obj5;
      let unknown_str;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let v0;
        let status;
        try {
          let closure_0;
          let appleVerifiedMethod;
          let closure_4;
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
              closure_0 = undefined;
              navigation = undefined;
              appleVerifiedMethod = undefined;
              closure_4 = undefined;
              closure_5 = undefined;
              status = undefined;
              v0 = 1;
              const obj12 = unknown_str(appleVerifiedMethod[9]);
              const result = obj12.warmAgeSignalAttestation();
              const obj6 = {
                firstAgeGate: unknown_str(appleVerifiedMethod[11]).MIN_AGE_GATE,
                secondAgeGate: unknown_str(appleVerifiedMethod[11]).ADULT_AGE_GATE,
              };
              const getAgeSignals = navigation(appleVerifiedMethod[10]).getAgeSignals;
              const tmp63 = navigation(appleVerifiedMethod[10]);
              const items = [getAgeSignals(obj6)];
              const obj14 = unknown_str(appleVerifiedMethod[9]);
              items[1] = obj14.getAgeSignalChallenge();
              c5 = 2;
              c6 = 1;
              const obj7 = { value: all(items), done: false };
              return obj7;
            }
          } else {
            if (1 === c5) {
              v0 = 0;
              status = undefined;
              if (status != null) {
                status = status.status;
              }
              let str2 = "unknown";
              if (429 === status) {
                str2 = "rate_limited";
              }
              trackFailure(str2);
              closure_130_2({ type: "error" });
            } else if (2 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                v0 = 0;
                c6 = 3;
                const obj8 = { value, done: true };
                return obj8;
              } else {
                closure_0 = value;
                navigation = v0(closure_0, 2);
                appleVerifiedMethod = navigation[0];
                status = navigation[1];
                if ("declined" === appleVerifiedMethod.appleVerifiedMethod) {
                  trackFailure("user_declined");
                  closure_130_3();
                  v0 = 0;
                  c6 = 3;
                  const obj9 = { value: undefined, done: true };
                  return obj9;
                } else {
                  c5 = 3;
                  c6 = 1;
                  const obj10 = { value: obj5.getAgeSignalIntegrityToken(status, appleVerifiedMethod), done: false };
                  obj5 = unknown_str(appleVerifiedMethod[9]);
                  return obj10;
                }
              }
            } else if (3 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                v0 = 0;
                c6 = 3;
                const obj11 = { value, done: true };
                return obj11;
              } else {
                closure_4 = value;
                const obj2 = unknown_str(appleVerifiedMethod[12]);
                c5 = 4;
                c6 = 1;
                const obj13 = {
                  value: obj2.submitAgeSignal(appleVerifiedMethod, closure_4, false, "user_initiated"),
                  done: false,
                };
                return obj13;
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              v0 = 0;
              c6 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              closure_5 = value;
              if ("accepted" === closure_5.result) {
                v0 = 0;
                c6 = 3;
                return { value: "IconComponent", done: null };
              } else {
                const reason = closure_5.reason;
                unknown_str = reason;
                if (reason == null) {
                  unknown_str = "unknown";
                }
                trackFailure(unknown_str);
                closure_130_2({ type: "error" });
                v0 = 0;
              }
            }
            c6 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp41) {
          status = tmp41;
          if (0 === v0) {
            c6 = 3;
            throw tmp41;
          } else {
            c5 = 1;
          }
        }
      }
    }),
    items1,
  );
  react = react.useRef(false);
  const items2 = [navigation, callback1];
  const effect = react.useEffect(() => {
    let closure_1;
    let ref;
    let closure_0 = navigation.addListener("transitionEnd", (data) => {
      const current = ref.current || true === data.data.closing;
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
  const ModalScreen = modalSessionId(8128).ModalScreen;
  const ModalContent = modalSessionId(8129).ModalContent;
  const Stack = modalSessionId(5600).Stack;
  if ("loading" === tmp5.type) {
    let obj3 = { children: items3 };
    items3 = [closure_7(ActivityIndicator, { size: "large" })];
    let obj4 = { variant: "text-md/medium", color: "text-strong", children: intl.string(navigation(3073).MN6I4Y) };
    const Text = tmp(4892).Text;
    intl = tmp(1126).intl;
    items3[1] = closure_7(Text, obj4);
    tmp15 = closure_9(closure_8, obj3);
  } else {
    let obj5 = { children: items4 };
    let obj6 = {
      variant: "text-md/medium",
      color: "text-strong",
      accessibilityRole: "alert",
      children: intl2.string(navigation(3073).tBwanH),
    };
    const Text2 = tmp(4892).Text;
    intl2 = tmp(1126).intl;
    items4 = [closure_7(Text2, obj6)];
    let obj7 = { children: closure_7(Button, obj8) };
    const ButtonGroup = tmp(5599).ButtonGroup;
    obj8 = {
      variant: "primary",
      size: "lg",
      text: intl3.string(navigation(3073)["Jx33+I"]),
      onPress() {
        const trackAgeVerificationModalClicked = AgeVerificationAnalyticsUtils.trackAgeVerificationModalClicked;
        AgeVerificationAnalyticsUtils;
        const result = trackAgeVerificationModalClicked(
          modalSessionId,
          AgeVerificationAnalyticsUtils.AgeVerificationModalVersion.EXPRESSIVE_V2,
          AgeVerificationAnalyticsUtils.AgeVerificationModalCta.METHOD_SELECT,
        );
        callback();
      },
    };
    Button = tmp(5601).Button;
    intl3 = tmp(1126).intl;
    items4[1] = closure_7(ButtonGroup, obj7);
    tmp15 = closure_9(closure_8, obj5);
  }
  let obj9 = { children: closure_7(ModalContent, obj10) };
  obj10 = { children: closure_7(Stack, { align: "center", justify: "center", spacing: 16, children: tmp15 }) };
  return closure_7(ModalScreen, obj9);
}
