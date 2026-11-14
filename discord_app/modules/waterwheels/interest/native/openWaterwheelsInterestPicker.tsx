// === Module 19026: openWaterwheelsInterestPicker ===

// Module 19026 (openWaterwheelsInterestPicker)
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import InterestPickerSessionStore from "InterestPickerSessionStore" /* 10218 */;

const require = fn;
let closure_7 = async function _openWaterwheelsInterestPicker() {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp8 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj5 = { value, done: true };
      return obj5;
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
          const obj6 = { value, done: true };
          return obj6;
        } else {
          dependencyMap = tmp4;
          const assert = tmp6;
          closure_129_0 = undefined;
          let flag = closure_0;
          if (closure_0 === undefined) {
            flag = false;
          }
          closure_129_0 = flag;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = function releaseOpenFlag() {
            if (dependencyMap === c6) {
              const result = closure_0(19027).setInterestPickerOpen(false);
              const obj = closure_0(19027);
            }
          };
          closure_129_4 = function cleanup() {
            c4.removeChangeListener(closure_1_5);
            assert.dispose();
          };
          closure_129_5 = function handleAccountChange() {
            if (!assert.isValid()) {
              if (dependencyMap === c6) {
                const result = closure_0(19027).setInterestPickerOpen(false);
                const obj = closure_0(19027);
              }
              c4.removeChangeListener(closure_1_5);
              assert.dispose();
            }
          };
          c5 = 1;
          c6 = 1;
          return { value: "Path", done: true };
        }
      } else {
        if (1 === tmp9) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            if (!closure_130_5.isPickerOpen()) {
              closure_129_1 = closure_130_0(closure_130_2[3]).captureDiscoverJoinAttribution(closure_130_4, () => {

              }, closure_130_1(closure_130_2[4]));
              if (closure_129_1.isValid()) {
                const sum = closure_130_6 + 1;
                closure_130_6 = sum;
                closure_129_2 = sum;
                closure_130_4.addChangeListener(closure_129_5);
                let result = closure_130_0(closure_130_2[5]).setInterestPickerOpen(true);
                c4 = 2;
                const obj3 = closure_130_0(closure_130_2[5]);
                const obj8 = { edit: closure_129_0 };
                const obj4 = closure_130_1(closure_130_2[6]);
                c5 = 4;
                c6 = 1;
                const obj9 = {
                  value: obj4.pushLazy(closure_130_3(async () => {
                                  await v3(paths[8])(paths[7], paths.paths);
                                  return value.default;
                                }), obj8, closure_130_0(closure_130_2[9]).WATERWHEELS_INTEREST_PICKER_MODAL_KEY),
                  done: false
                };
                return obj9;
              } else {
                closure_129_1.dispose();
              }
              const obj2 = closure_130_0(closure_130_2[3]);
            }
            c6 = 3;
          }
        } else if (2 !== tmp9) {
          if (3 === tmp9) {
            c4 = 1;
            closure_129_3();
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            closure_129_4();
            c6 = 3;
            let obj = { value, done: true };
            return obj;
          } else {
            c4 = 1;
          }
          c4 = 0;
          closure_129_4();
        }
        c4 = 0;
        closure_129_4();
        throw closure_3;
      }
    } catch (tmp53) {
      closure_3 = tmp53;
      if (tmp5 === c4) {
        c6 = tmp3;
        throw tmp53;
      } else if (tmp2 === tmp55) {
        c5 = tmp;
      } else {
        c5 = tmp3;
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