// discord_app/modules/collectibles/api/Shopfront.tsx
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

const require = fn;
let closure_4 = async function _search(arg0, value) {
  if (c7 === 2) {
    c7 = 3;
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
      c7 = 2;
      if (0 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_3 = tmp3;
          closure_2 = tmp7;
          let timeout;
          closure_130_0 = closure_0;
          let obj1 = closure_1;
          if (closure_1 === undefined) {
            obj1 = {};
          }
          timeout = obj1.timeout;
          closure_130_2 = undefined;
          c6 = 1;
          c7 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          let obj2 = { value, done: true };
          return obj2;
        } else {
          c5 = 1;
          const HTTP = closure_131_0(closure_131_1[2]).HTTP;
          const request = {
            url: closure_131_3.COLLECTIBLES_SEARCH,
            query: closure_130_0,
            rejectWithError: true,
            timeout,
          };
          c6 = 3;
          c7 = 1;
          const obj3 = { value: HTTP.get(request), done: false };
          return obj3;
        }
      } else if (2 === tmp7) {
        c5 = 0;
        closure_130_3 = closure_4;
        const aPIError = new closure_131_0(closure_131_1[3]).APIError(closure_130_3);
        closure_130_2 = aPIError;
        obj2 = closure_131_0(closure_131_1[4]);
        const result = obj2.captureOrIgnoreApiError(closure_130_2);
        throw closure_130_2;
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 0;
        c7 = 3;
        const obj4 = { value, done: true };
        return obj4;
      } else {
        c5 = 0;
        c7 = 3;
        obj = { value: value.body, done: true };
        return obj;
      }
    } catch (tmp32) {
      closure_4 = tmp32;
      if (tmp4 === c5) {
        c7 = tmp2;
        throw tmp32;
      } else {
        c6 = tmp;
      }
    }
  }
};
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
let result = size.fileFinishedImporting("modules/collectibles/api/Shopfront.tsx");

export const search = function search() {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
