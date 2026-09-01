// discord_app/modules/app_startup/native/executeHeadlessTask.tsx
import closure_4 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import { AppState } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../../../stores/AuthenticationStore.tsx";
import linkFromAppsFlyer from "NativeAppStartup.tsx";
import { AnalyticEvents } from "../../../Constants.tsx";

const require = arg1;
function _executeHeadlessTask() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c11 = 0;
    c12 = 0;
    c9 = 0;
    return (function* (arg0, arg1, arg2) {
      if (c12 === 2) {
        c12 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp11 === 3) {
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
          if (arg0 === 1) {
            c12 = 3;
            throw arg1;
          } else {
            if (arg0 !== 2) {
              c9 = 0;
              c12 = 3;
            }
            c9 = 0;
            c12 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
        } catch (tmp12) {
          closure_10 = tmp12;
          if (tmp4 === c9) {
            c12 = tmp3;
            throw tmp12;
          } else if (tmp2 === tmp14) {
            c11 = tmp2;
          } else if (tmp === tmp14) {
            c11 = tmp;
          } else if (tmp3 === tmp14) {
            c11 = tmp9;
          } else if (tmp5 === tmp14) {
            c11 = tmp8;
          } else if (tmp9 === tmp14) {
            c11 = tmp7;
          } else {
            c11 = tmp6;
          }
        }
      }
    })();
  });
  closure_10 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ initHeadlessTask: error, applicationReady: closure_8 } = linkFromAppsFlyer);
const result = require("set").fileFinishedImporting("modules/app_startup/native/executeHeadlessTask.tsx");

export default function executeHeadlessTask() {
  const self = this;
  const apply = _executeHeadlessTask.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
