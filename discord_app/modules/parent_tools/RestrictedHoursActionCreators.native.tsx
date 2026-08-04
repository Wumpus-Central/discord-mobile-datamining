// discord_app/modules/parent_tools/RestrictedHoursActionCreators.native.tsx
import asyncGeneratorStep from "asyncGeneratorStep";

const require = arg1;
function closeRestrictedHoursModal() {
  importDefault(4399).popWithKey(RESTRICTED_HOURS_MODAL_KEY);
}
const RESTRICTED_HOURS_MODAL_KEY = "RESTRICTED_HOURS_MODAL_KEY";
const result = require("RestrictedHoursLogoutBlockingLayer").fileFinishedImporting("modules/parent_tools/RestrictedHoursActionCreators.native.tsx");

export const openRestrictedHoursModal = function openRestrictedHoursModal() {
  let obj = importDefault(4399);
  obj = { onClose: closeRestrictedHoursModal };
  obj.pushLazy(callback(function*() {
    if (v0 === 2) {
      v0 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp3 === 3) {
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
        v0 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            v0 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c1 = 1;
            v0 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = v0(outer1_2[3])(outer1_2[2], outer1_2.paths);
            return obj1;
          }
        } else if (arg0 === 1) {
          v0 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          v0 = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          v0 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1.default;
          return obj;
        }
      } catch (tmp7) {
        v0 = tmp;
        throw tmp7;
      }
    }
  }), obj, RESTRICTED_HOURS_MODAL_KEY, { animation: "none", presentation: "fullScreenModal" });
};
export { closeRestrictedHoursModal };