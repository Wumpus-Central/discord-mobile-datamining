// === Module 17876: useGuildApplication ===

// Module 17876 (useGuildApplication)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 5118 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c4, c5, closure_0;

const result = size.fileFinishedImporting("modules/applications/useGuildApplication.tsx");

export default function useGuildApplication(arg0, arg1) {
  let application;
  let closure_4;
  let closure_6;
  let error;
  let first1;
  let tmp3;
  _require = arg0;
  let closure_1 = arg1;
  let obj = require("get initialized");
  const items = [closure_6];
  application = obj.useStateFromStores(items, () => ApplicationStore.getGuildApplication(closure_0, closure_1));
  [tmp3, _asyncToGenerator] = first1.useState(null == application);
  _slicedToArray(first1.useState(null == application), 2);
  [error, _slicedToArray] = first1.useState();
  [first1, closure_6] = first1.useState(false);
  const items1 = [application, arg1, arg0];
  const callback = first1.useCallback(_asyncToGenerator(async function() {
    let closure_2;
    let obj2;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c3;
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
            const type = tmp;
            closure_0 = tmp4;
            if (null == application) {
              if (null != closure_0) {
                closure_6(true);
                _asyncToGenerator(true);
                c3 = 2;
                const obj5 = { type, includeTeam: true };
                c4 = 3;
                c5 = 1;
                const obj6 = { value: obj2.getApplicationsForGuild(tmp27, obj5), done: false };
                obj2 = type(application[5]);
                return obj6;
              }
            }
          }
        } else if (1 === c4) {
          c3 = 0;
          closure_129_3(false);
          throw application;
        } else {
          if (2 === c4) {
            c3 = 1;
            closure_0 = application;
            const self = this;
            const self2 = this;
            const aPIError = new closure_0(application[6]).APIError(closure_0);
            closure_129_4(aPIError);
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            closure_129_3(false);
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          } else {
            c3 = 1;
          }
          c3 = 0;
          closure_129_3(false);
        }
        c5 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp35) {
        application = tmp35;
        if (0 === c3) {
          c5 = 3;
          throw tmp35;
        } else if (1 === tmp37) {
          c4 = 1;
        } else {
          c4 = 2;
        }
      }
    }
  }), items1);
  const items2 = [first1, callback];
  const effect = first1.useEffect(() => {
    if (!first1) {
      callback();
    }
  }, items2);
  return { application, error, loading };
};