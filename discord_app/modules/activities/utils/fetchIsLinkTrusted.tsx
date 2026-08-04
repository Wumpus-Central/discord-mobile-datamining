// discord_app/modules/activities/utils/fetchIsLinkTrusted.tsx
import asyncGeneratorStep from "asyncGeneratorStep";
import { Endpoints } from "ME";

const require = arg1;
function _fetchIsLinkTrusted() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c3 = 0;
    let c5 = 0;
    let c4 = 0;
    return (function*(arg0, body) {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp5 === 3) {
        if (arg0 === 1) {
          throw body;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = body;
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
              throw body;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = body;
              return obj;
            } else {
              let asyncGeneratorStep = tmp6;
              body = undefined;
              if (undefined === body) {
                c5 = 3;
                return { value: false, done: true };
              } else {
                let c4 = 1;
                const HTTP = callback(table[2]).HTTP;
                const obj1 = { url: null, rejectWithError: false, query: null, timeout: 500 };
                obj1[0] = c3.ACTIVITIES_TRUSTED_LINKS(tmp20);
                const obj2 = { url: null };
                obj2[0] = tmp21;
                obj1[2] = obj2;
                c3 = 2;
                c5 = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = HTTP.get(obj1);
                return obj3;
              }
            }
          } else if (1 === tmp6) {
            c4 = 0;
            c5 = 3;
            return { value: false, done: true };
          } else if (arg0 === 1) {
            c5 = 3;
            throw body;
          } else if (arg0 === 2) {
            c4 = 0;
            c5 = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = body;
            return obj4;
          } else {
            body = body.body;
            const _Boolean = Boolean;
            c4 = 0;
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = Boolean(body.trusted);
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
    })();
  });
  const _fetchIsLinkTrusted = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("sendRequest").fileFinishedImporting("modules/activities/utils/fetchIsLinkTrusted.tsx");

export const fetchIsLinkTrusted = function fetchIsLinkTrusted(id1, arg1) {
  const self = this;
  const apply = _fetchIsLinkTrusted.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};