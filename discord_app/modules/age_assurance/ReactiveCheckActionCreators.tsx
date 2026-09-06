// === Module 13764: ReactiveCheckActionCreators ===

// Module 13764 (ReactiveCheckActionCreators)
import HTTPUtils from "HTTPUtils" /* 1272 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_5 = async function _fetchReactiveCheckResult() {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
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
          obj = { value, done: true };
          return obj;
        } else {
          closure_1 = tmp3;
          closure_0 = tmp7;
          let body;
          c3 = 1;
          const HTTP = HTTPUtils.HTTP;
          const obj1 = { url: constants.AGE_VERIFICATION_REACTIVE_CHECK, rejectWithError: true };
          c4 = 2;
          c5 = 1;
          const obj2 = { value: HTTP.get(obj1), done: false };
          return obj2;
        }
      } else if (1 === tmp7) {
        c3 = 0;
        c5 = 3;
        return { value: null, done: true };
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        c5 = 3;
        const obj3 = { value, done: true };
        return obj3;
      } else {
        body = value.body;
        obj = closure_129_1(closure_129_2[3]);
        const obj4 = { type: "AGE_VERIFICATION_CHECK_RESULT_SET", status: body.status };
        obj.dispatch(obj4);
        c3 = 0;
        c5 = 3;
        const obj5 = { value: body.status, done: true };
        return obj5;
      }
    } catch (tmp19) {
      closure_2 = tmp19;
      if (tmp4 === c3) {
        c5 = tmp2;
        throw tmp19;
      } else {
        c4 = tmp;
      }
    }
  }
};
let closure_6 = async function _resetAgeVerification() {
  if (c2 === 2) {
    c2 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c2 = 2;
      if (0 === c1) {
        if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_0 = tmp2;
          const HTTP = HTTPUtils.HTTP;
          const obj1 = { url: constants.AGE_VERIFICATION_RESET, rejectWithError: true };
          c1 = 1;
          c2 = 1;
          const obj2 = { value: HTTP.post(obj1), done: false };
          return obj2;
        }
      } else if (arg0 === 1) {
        c2 = 3;
        throw value;
      } else if (arg0 === 2) {
        c2 = 3;
        const obj3 = { value, done: true };
        return obj3;
      } else {
        obj = closure_128_1(closure_128_2[3]);
        obj.dispatch({ type: "AGE_VERIFICATION_RESET" });
        c2 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp13) {
      c2 = tmp;
      throw tmp13;
    }
  }
};
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_assurance/ReactiveCheckActionCreators.tsx");

export const fetchReactiveCheckResult = function fetchReactiveCheckResult() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const resetAgeVerification = function resetAgeVerification() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};