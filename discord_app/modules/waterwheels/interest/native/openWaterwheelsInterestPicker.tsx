// === Module 18977: openWaterwheelsInterestPicker ===

// Module 18977 (openWaterwheelsInterestPicker)
import DispatcherDefault from "Dispatcher" /* 572 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6785 */;
import WaterwheelsDiscoverJoinAttribution from "WaterwheelsDiscoverJoinAttribution" /* 18879 */;
import InterestPickerActionCreators from "InterestPickerActionCreators" /* 18978 */;
import WaterwheelsInterestPickerModal from "WaterwheelsInterestPickerModal" /* 18979 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import InterestPickerSessionStore from "InterestPickerSessionStore" /* 10151 */;

require = fn;
let closure_7 = async function _openWaterwheelsInterestPicker() {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj4 = { value, done: true };
      return obj4;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c4 = 2;
      if (0 === c1) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          const assert = tmp5;
          closure_128_0 = undefined;
          closure_128_1 = undefined;
          closure_128_2 = function releaseOpenFlag() {
            if (closure_1_1 === closure_2_6) {
              const result = assert(18978).setInterestPickerOpen(false);
              const obj = assert(18978);
            }
          };
          closure_128_3 = function cleanup() {
            c4.removeChangeListener(closure_1_4);
            assert.dispose();
          };
          function handleAccountChange() {
            if (!assert.isValid()) {
              if (closure_1_1 === closure_2_6) {
                const result = assert(18978).setInterestPickerOpen(false);
                const obj2 = assert(18978);
              }
              c4.removeChangeListener(closure_1_4);
              assert.dispose();
            }
          }
          closure_128_4 = handleAccountChange;
          if (!pickerOpen.isPickerOpen()) {
            let result = WaterwheelsDiscoverJoinAttribution.captureDiscoverJoinAttribution(AuthenticationStore, () => {

            }, DispatcherDefault);
            closure_128_0 = result;
            if (result.isValid()) {
              sum = sum + 1;
              closure_128_1 = sum;
              AuthenticationStore.addChangeListener(handleAccountChange);
              const result1 = InterestPickerActionCreators.setInterestPickerOpen(true);
              c3 = 2;
              const tmp23Result = InterestPickerActionCreators;
              const tmp25Result = ModalActionCreatorsDefault;
              c1 = 3;
              c4 = 1;
              const obj6 = {
                value: tmp25Result.pushLazy(asyncGeneratorStep(async () => {
                              await v3(paths[8])(paths[7], paths.paths);
                              return value.default;
                            }), {}, WaterwheelsInterestPickerModal.WATERWHEELS_INTEREST_PICKER_MODAL_KEY),
                done: false
              };
              return obj6;
            } else {
              result.dispose();
            }
          }
          c4 = 3;
        }
      } else if (1 !== tmp8) {
        if (2 === tmp8) {
          c3 = 1;
          closure_128_2();
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          closure_128_3();
          c4 = 3;
          let obj = { value, done: true };
          return obj;
        } else {
          c3 = 1;
        }
        c3 = 0;
        closure_128_3();
      }
      c3 = 0;
      closure_128_3();
      throw dependencyMap;
    } catch (tmp33) {
      dependencyMap = tmp33;
      if (tmp4 === c3) {
        c4 = tmp3;
        throw tmp33;
      } else if (tmp2 === tmp35) {
        c1 = tmp2;
      } else {
        c1 = tmp;
      }
    }
  }
};
let c6 = 0;
const size = fn(2);
let result = size.fileFinishedImporting("modules/waterwheels/interest/native/openWaterwheelsInterestPicker.tsx");

export default function openWaterwheelsInterestPicker() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};