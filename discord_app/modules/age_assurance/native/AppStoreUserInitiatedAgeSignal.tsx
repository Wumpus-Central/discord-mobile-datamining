// discord_app/modules/age_assurance/native/AppStoreUserInitiatedAgeSignal.tsx
import AppStoreAgeSignalSupport from "AppStoreAgeSignalSupport.tsx";
import AppStoreAgeAssuranceDefault from "AppStoreAgeAssurance.android.tsx";
import AppStoreAgeSignalAttestation from "AppStoreAgeSignalAttestation.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
let closure_5 = async function _submitUserInitiatedAgeSignal() {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_1 = tmp3;
          closure_0 = tmp7;
          closure_128_0 = undefined;
          closure_128_1 = undefined;
          closure_128_2 = undefined;
          closure_128_3 = undefined;
          closure_128_4 = undefined;
          closure_128_5 = undefined;
          closure_128_6 = undefined;
          c3 = 1;
          const result = AppStoreAgeSignalAttestation.warmAgeSignalAttestation();
          const obj6 = {
            firstAgeGate: AppStoreAgeSignalSupport.MIN_AGE_GATE,
            secondAgeGate: AppStoreAgeSignalSupport.ADULT_AGE_GATE,
          };
          items = [AppStoreAgeAssuranceDefault.getAgeSignals(obj6)];
          items[1] = AppStoreAgeSignalAttestation.getAgeSignalChallenge();
          c4 = 2;
          c5 = 1;
          const obj7 = { value: Promise.all(items), done: false };
          return obj7;
        }
      } else if (1 === tmp7) {
        c3 = 0;
        closure_128_7 = closure_2;
        const result1 = closure_129_0(closure_129_2[7]).trackAgeSignalReported("user_initiated", "failed");
        throw closure_128_7;
      } else if (2 === tmp7) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          closure_128_0 = value;
          closure_128_1 = closure_129_3(closure_128_0, 2);
          closure_128_2 = closure_128_1[0];
          closure_128_3 = closure_128_1[1];
          if ("declined" === closure_128_2.appleVerifiedMethod) {
            c3 = 0;
            c5 = 3;
            return { value: null, done: true };
          } else {
            c4 = 3;
            c5 = 1;
            const obj10 = {
              value: closure_129_0(closure_129_2[2]).getAgeSignalIntegrityToken(closure_128_3, closure_128_2),
              done: false,
            };
            return obj10;
          }
        }
      } else if (3 === tmp7) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj12 = { value, done: true };
          return obj12;
        } else {
          closure_128_4 = value;
          c4 = 4;
          c5 = 1;
          const obj13 = {
            value: closure_129_0(closure_129_2[2]).getAppStoreAgeSignalAssertion(closure_128_2, false),
            done: false,
          };
          return obj13;
        }
      } else if (4 === tmp7) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj15 = { value, done: true };
          return obj15;
        } else {
          closure_128_5 = value;
          const obj5 = closure_129_0(closure_129_2[5]);
          c4 = 5;
          c5 = 1;
          const obj16 = {
            value: obj5.submitAgeSignal(closure_128_2, closure_128_4, false, "user_initiated", closure_128_5),
            done: false,
          };
          return obj16;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        c5 = 3;
        const obj17 = { value, done: true };
        return obj17;
      } else {
        closure_128_6 = value;
        const result2 = closure_129_0(closure_129_2[6]).recordAgeSignalSubmitted(closure_128_2, closure_128_6);
        const obj = closure_129_0(closure_129_2[6]);
        const result3 = closure_129_0(closure_129_2[7]).trackAgeSignalReported(
          "user_initiated",
          "submitted",
          closure_128_6,
        );
        c3 = 0;
        c5 = 3;
        const obj20 = { value: closure_128_6, done: true };
        return obj20;
      }
    } catch (tmp46) {
      closure_2 = tmp46;
      if (tmp4 === c3) {
        c5 = tmp2;
        throw tmp46;
      } else {
        c4 = tmp;
      }
    }
  }
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/age_assurance/native/AppStoreUserInitiatedAgeSignal.tsx");

export function submitUserInitiatedAgeSignal() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
