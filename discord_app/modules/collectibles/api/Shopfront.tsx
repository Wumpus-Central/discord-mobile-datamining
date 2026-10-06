// === Module 14890: Shopfront ===

// Module 14890 (Shopfront)
import Constants from "Constants" /* 1085 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let c6, c7, closure_4;

let obj = function _search() {
  obj = _asyncToGenerator(async function(query) {
    let closure_1 = arg1;
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (query === 1) {
        throw value;
      } else if (query === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c5;
      try {
        let closure_3;
        let timeout;
        let aPIError;
        c7 = 2;
        if (0 === c6) {
          if (query === 1) {
            c7 = 3;
            throw value;
          } else if (query === 2) {
            c7 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_3 = tmp;
            let closure_2 = tmp4;
            timeout = undefined;
            let obj5 = closure_1;
            if (closure_1 === undefined) {
              obj5 = {};
            }
            timeout = obj5.timeout;
            aPIError = undefined;
            c6 = 1;
            c7 = 1;
            return { value: "Reflect", done: true };
          }
        } else if (1 === c6) {
          if (query === 1) {
            c7 = 3;
            throw value;
          } else if (query === 2) {
            c7 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            c5 = 1;
            const HTTP = closure_131_0(closure_131_1[2]).HTTP;
            const request = { url: closure_131_3.COLLECTIBLES_SEARCH, query, rejectWithError: true, timeout };
            c6 = 3;
            c7 = 1;
            const obj7 = { value: HTTP.get(request), done: false };
            return obj7;
          }
        } else if (2 === c6) {
          c5 = 0;
          closure_3 = closure_4;
          const self = this;
          const self2 = this;
          aPIError = new closure_131_0(closure_131_1[3]).APIError(closure_3);
          const obj3 = closure_131_0(closure_131_1[4]);
          const result = obj3.captureOrIgnoreApiError(aPIError);
          throw aPIError;
        } else if (query === 1) {
          c7 = 3;
          throw value;
        } else if (query === 2) {
          c5 = 0;
          c7 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          c5 = 0;
          c7 = 3;
          obj = { value: value.body, done: true };
          return obj;
        }
      } catch (tmp27) {
        closure_4 = tmp27;
        if (0 === c5) {
          c7 = 3;
          throw tmp27;
        } else {
          c6 = 2;
        }
      }
    }
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
let result = size.fileFinishedImporting("modules/collectibles/api/Shopfront.tsx");

export const search = function search() {
  return obj(...arguments);
};