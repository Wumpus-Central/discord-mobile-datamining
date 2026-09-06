// discord_app/modules/activities/utils/fetchIsLinkTrusted.tsx
import HTTPUtils from "../../../../discord_common/js/packages/http-utils/HTTPUtils.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
let closure_4 = async function _fetchIsLinkTrusted(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
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
      if (0 === c3) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp6;
          let body;
          if (undefined === closure_0) {
            c5 = 3;
            return { value: false, done: true };
          } else {
            c4 = 1;
            const HTTP = HTTPUtils.HTTP;
            const request = {
              url: Endpoints.ACTIVITIES_TRUSTED_LINKS(tmp19),
              rejectWithError: false,
              query: null,
              timeout: 500,
            };
            const obj1 = { url: tmp20 };
            request.query = obj1;
            c3 = 2;
            c5 = 1;
            const obj2 = { value: HTTP.get(request), done: false };
            return obj2;
          }
        }
      } else if (1 === tmp6) {
        c4 = 0;
        c5 = 3;
        return { value: false, done: true };
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c5 = 3;
        const obj3 = { value, done: true };
        return obj3;
      } else {
        body = value.body;
        const _Boolean = Boolean;
        c4 = 0;
        c5 = 3;
        obj = { value: Boolean(body.trusted), done: true };
        return obj;
      }
    } catch (tmp12) {
      if (tmp3 === c4) {
        c5 = tmp2;
        throw tmp12;
      } else {
        c3 = tmp;
      }
    }
  }
};
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/utils/fetchIsLinkTrusted.tsx");

export const fetchIsLinkTrusted = function fetchIsLinkTrusted() {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
