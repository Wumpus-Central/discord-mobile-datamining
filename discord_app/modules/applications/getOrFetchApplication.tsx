// discord_app/modules/applications/getOrFetchApplication.tsx
import ApplicationActionCreators from "ApplicationActionCreators.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import ApplicationStore from "ApplicationStore.tsx";

require = fn;
let closure_4 = async function _getOrFetchApplication(arg0) {
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
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = closure_0;
          if (!hydrated.isHydrated(closure_0)) {
            c3 = 1;
            c4 = 2;
            c5 = 1;
            const obj5 = { value: ApplicationActionCreators.fetchApplication(closure_0), done: false };
            return obj5;
          }
        }
      } else {
        if (1 === tmp7) {
          c3 = 0;
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 !== 2) {
          c3 = 0;
        }
        c3 = 0;
        c5 = 3;
        const obj = { value, done: true };
        return obj;
      }
      const application = closure_130_3.getApplication(closure_129_0);
      c5 = 3;
    } catch (tmp15) {
      if (tmp4 === c3) {
        c5 = tmp2;
        throw tmp15;
      } else {
        c4 = tmp;
      }
    }
  }
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/applications/getOrFetchApplication.tsx");

export default function getOrFetchApplication() {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
