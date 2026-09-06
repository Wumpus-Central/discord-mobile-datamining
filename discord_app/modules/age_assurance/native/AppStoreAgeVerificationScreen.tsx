// === Module 8567: trackFailure ===

// Module 8567 (trackFailure)
import setDefault from "set" /* 7602 */;
import set from "set" /* 7607 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import { ActivityIndicator } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

require = arg1;
function trackFailure(arg0) {
  let obj = setDefault;
  obj = { name: set.MetricEvents.APP_STORE_AGE_VERIFICATION_FAILED, tags: null };
  const items = ["reason:" + arg0];
  obj[1] = items;
  obj.increment(obj);
}
({ jsx: error, Fragment: closure_8, jsxs: c9 } = jsxProd);
let result = require("set").fileFinishedImporting("modules/age_assurance/native/AppStoreAgeVerificationScreen.tsx");

export default function AppStoreAgeVerificationScreen(modalSessionId) {
  modalSessionId = modalSessionId.modalSessionId;
  let navigation;
  dependencyMap = undefined;
  let callback;
  let callback1;
  let React;
  let obj = modalSessionId(1483);
  navigation = obj.useNavigation();
  [tmp5, c2] = callback1(React.useState({ type: "loading" }), 2);
  obj1 = modalSessionId(4773);
  const watchAgeVerificationStatusChange = obj1.useWatchAgeVerificationStatusChange(modalSessionId.onClose);
  let items = [navigation];
  callback = React.useCallback(() => {
    navigation.goBack();
  }, items);
  const items1 = [callback];
  callback1 = React.useCallback(callback(() => {
    c5 = 0;
    let status = 0;
    c4 = 0;
    return (function*() {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c6 = 2;
          if (0 === closure_5) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let lib = tmp3;
              dependencyMap = tmp7;
              let unknown;
              dependencyMap = undefined;
              lib = undefined;
              let lib2;
              let v0;
              closure_5 = undefined;
              c6 = undefined;
              v0 = 1;
              const result = closure_1_0(closure_1_2[9]).warmAgeSignalAttestation();
              const obj12 = closure_1_0(closure_1_2[9]);
              obj1 = { firstAgeGate: null, secondAgeGate: null };
              obj1[0] = closure_1_0(closure_1_2[11]).MIN_AGE_GATE;
              obj1[1] = closure_1_0(closure_1_2[11]).ADULT_AGE_GATE;
              const items = [closure_1_1(closure_1_2[10]).getAgeSignals(obj1), ];
              const obj13 = closure_1_1(closure_1_2[10]);
              items[1] = closure_1_0(closure_1_2[9]).getAgeSignalChallenge();
              closure_5 = 2;
              c6 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = Promise.all(items);
              return obj2;
            }
          } else {
            if (1 === tmp7) {
              v0 = 0;
              status = undefined;
              if (lib2 != null) {
                status = lib2.status;
              }
              let str2 = "unknown";
              if (429 === status) {
                str2 = "rate_limited";
              }
              closure_1_10(str2);
              lib({ type: "error" });
              c6 = 3;
              const tmp39 = closure_1_10;
            } else if (2 === tmp7) {
              if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                v0 = 0;
                c6 = 3;
                const obj3 = { value: null, done: true };
                obj3[0] = arg1;
                return obj3;
              } else {
                unknown = arg1;
                dependencyMap = v0(unknown, 2);
                lib = 5;
                lib2 = 32;
                if ("declined" === lib.appleVerifiedMethod) {
                  closure_1_10("user_declined");
                  lib2();
                  v0 = 0;
                  c6 = 3;
                  let obj4 = { value: null, done: true };
                  obj4[0] = undefined;
                  return obj4;
                } else {
                  obj4 = closure_1_0(closure_1_2[9]);
                  closure_5 = 3;
                  c6 = 1;
                  const obj5 = { value: null, done: false };
                  obj5[0] = obj4.getAgeSignalIntegrityToken(lib2, lib);
                  return obj5;
                }
              }
            } else if (3 === tmp7) {
              if (arg0 === 1) {
                c6 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                v0 = 0;
                c6 = 3;
                const obj6 = { value: null, done: true };
                obj6[0] = arg1;
                return obj6;
              } else {
                v0 = arg1;
                obj1 = closure_1_0(closure_1_2[12]);
                closure_5 = 4;
                c6 = 1;
                const obj7 = { value: null, done: false };
                obj7[0] = obj1.submitAgeSignal(lib, v0, false, "user_initiated");
                return obj7;
              }
            } else if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              v0 = 0;
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_5 = arg1;
              if ("accepted" !== closure_5.result) {
                const reason = closure_5.reason;
                unknown = reason;
                if (reason == null) {
                  unknown = "unknown";
                }
                closure_1_10(unknown);
                lib({ type: "error" });
                v0 = 0;
                const tmp10 = closure_1_10;
              }
            }
            v0 = 0;
            c6 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp44) {
          lib2 = tmp44;
          if (tmp4 === v0) {
            c6 = tmp2;
            throw tmp44;
          } else {
            closure_5 = tmp;
          }
        }
      }
    })();
  }), items1);
  React = React.useRef(false);
  const items2 = [navigation, callback1];
  const effect = React.useEffect(() => {
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
    const items3 = [tmp10(ActivityIndicator, { size: "large" }), ];
    obj = { variant: "text-md/medium", color: "text-strong", children: null };
    const intl = tmp(1114).intl;
    obj[2] = intl.string(navigation(2946).MN6I4Y);
    items3[1] = tmp10(tmp(4556).Text, obj);
    obj[0] = items3;
    let tmp15 = callback(closure_8, obj);
  } else {
    obj1 = { children: null };
    let obj2 = { variant: "text-md/medium", color: "text-strong", accessibilityRole: "alert", children: null };
    const intl2 = tmp(1114).intl;
    obj2[3] = intl2.string(navigation(2946).tBwanH);
    const items4 = [tmp10(tmp(4556).Text, obj2), ];
    let obj3 = { children: null };
    let obj4 = { variant: "primary", size: "lg", text: null, onPress: null };
    const intl3 = tmp(1114).intl;
    obj4[2] = intl3.string(navigation(2946)["Jx33+I"]);
    obj4[3] = function onPress() {
      const result = modalSessionId(_undefined[21]).trackAgeVerificationModalClicked(modalSessionId, modalSessionId(_undefined[21]).AgeVerificationModalVersion.EXPRESSIVE_V2, modalSessionId(_undefined[21]).AgeVerificationModalCta.METHOD_SELECT);
      callback();
    };
    obj3[0] = tmp10(tmp(4975).Button, obj4);
    items4[1] = tmp10(tmp(5433).ButtonGroup, obj3);
    obj1[0] = items4;
    tmp15 = callback(closure_8, obj1);
  }
  let obj5 = { children: null };
  const tmp4 = callback1(React.useState({ type: "loading" }), 2);
  obj5[0] = closure_7(modalSessionId(8422).ModalContent, { children: closure_7(modalSessionId(4973).Stack, { align: "center", justify: "center", spacing: 16, children: tmp15 }) });
  return closure_7(modalSessionId(8421).ModalScreen, obj5);
};