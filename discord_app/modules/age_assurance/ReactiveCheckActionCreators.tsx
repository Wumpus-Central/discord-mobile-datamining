// discord_app/modules/age_assurance/ReactiveCheckActionCreators.tsx
import Constants from "../../Constants.tsx";
import HTTPUtils from "../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../../_runtime/metro/00002__.js";

let c1, c2;

let obj = function _fetchReactiveCheckResult() {
  obj = _asyncToGenerator(async () => {
    let c3;
    let c4;
    let c5;
    let closure_0;
    let closure_1;
    let closure_2;
    const HTTP = HTTPUtils.HTTP;
    const obj4 = { url: constants.AGE_VERIFICATION_REACTIVE_CHECK, rejectWithError: true };
    await HTTP.get(obj4);
    const body = value.body;
    const obj7 = { type: "AGE_VERIFICATION_CHECK_RESULT_SET", status: body.status };
    obj = closure_129_1(closure_129_2[3]);
    obj.dispatch(obj7);
    return body.status;
  });
  return obj(...arguments);
};
obj = function _resetAgeVerification() {
  obj = _asyncToGenerator(async () => {
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
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
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_0 = tmp;
            const HTTP = HTTPUtils.HTTP;
            const obj4 = { url: constants.AGE_VERIFICATION_RESET, rejectWithError: true };
            c1 = 1;
            c2 = 1;
            const obj5 = { value: HTTP.post(obj4), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          obj = closure_128_1(closure_128_2[3]);
          obj.dispatch({ type: "AGE_VERIFICATION_RESET" });
          c2 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp12) {
        c2 = 3;
        throw tmp12;
      }
    }
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/age_assurance/ReactiveCheckActionCreators.tsx");

export const fetchReactiveCheckResult = function fetchReactiveCheckResult() {
  return obj(...arguments);
};
export const resetAgeVerification = function resetAgeVerification() {
  return obj(...arguments);
};
