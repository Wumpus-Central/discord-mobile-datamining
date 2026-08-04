// discord_app/modules/age_assurance/ReactiveCheckActionCreators.tsx
import asyncGeneratorStep from "asyncGeneratorStep";
import { Endpoints } from "ME";

const require = arg1;
function _fetchReactiveCheckResult() {
  const self = this;
  const tmp = callback(function*() {
    if (c5 === 2) {
      c5 = 3;
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
        c5 = 2;
        if (0 === constants) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const callback = tmp3;
            let body = tmp7;
            body = undefined;
            let c3 = 1;
            const HTTP = outer1_0(outer1_2[2]).HTTP;
            const obj1 = { url: null, rejectWithError: true };
            obj1[0] = constants.AGE_VERIFICATION_REACTIVE_CHECK;
            constants = 2;
            c5 = 1;
            const obj2 = { value: null, done: false };
            obj2[0] = HTTP.get(obj1);
            return obj2;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          c5 = 3;
          return { value: null, done: true };
        } else if (arg0 === 1) {
          c5 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj3 = { value: null, done: true };
          obj3[0] = arg1;
          return obj3;
        } else {
          body = arg1.body;
          obj = callback(table[3]);
          const obj4 = { type: "AGE_VERIFICATION_CHECK_RESULT_SET", status: null };
          obj4[1] = body.status;
          obj.dispatch(obj4);
          c3 = 0;
          c5 = 3;
          const obj5 = { value: null, done: true };
          obj5[0] = body.status;
          return obj5;
        }
      } catch (tmp19) {
        table = tmp19;
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp19;
        } else {
          constants = tmp;
        }
      }
    }
  });
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _resetAgeVerification() {
  const self = this;
  const tmp = callback(function*() {
    if (dependencyMap === 2) {
      dependencyMap = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
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
        dependencyMap = 2;
        if (0 === v0) {
          if (arg0 === 1) {
            dependencyMap = 3;
            throw arg1;
          } else if (arg0 === 2) {
            dependencyMap = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_0 = tmp2;
            const HTTP = outer1_0(530).HTTP;
            const obj1 = { url: null, rejectWithError: true };
            obj1[0] = outer1_4.AGE_VERIFICATION_RESET;
            v0 = 1;
            dependencyMap = 1;
            const obj2 = { value: null, done: false };
            obj2[0] = HTTP.post(obj1);
            return obj2;
          }
        } else if (arg0 === 1) {
          dependencyMap = 3;
          throw arg1;
        } else if (arg0 === 2) {
          dependencyMap = 3;
          const obj3 = { value: null, done: true };
          obj3[0] = arg1;
          return obj3;
        } else {
          obj = v0(709);
          obj.dispatch({ type: "AGE_VERIFICATION_RESET" });
          dependencyMap = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp13) {
        dependencyMap = tmp;
        throw tmp13;
      }
    }
  });
  const _resetAgeVerification = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("sendRequest").fileFinishedImporting("modules/age_assurance/ReactiveCheckActionCreators.tsx");

export const fetchReactiveCheckResult = function fetchReactiveCheckResult() {
  const self = this;
  const apply = _fetchReactiveCheckResult.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const resetAgeVerification = function resetAgeVerification() {
  const self = this;
  const apply = _resetAgeVerification.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};