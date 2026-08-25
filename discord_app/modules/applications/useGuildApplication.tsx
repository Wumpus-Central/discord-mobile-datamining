// === Module 17025: useGuildApplication ===

// Module 17025 (useGuildApplication)
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import closure_6 from "addApplication" /* 4421 */;

const require = arg1;
const result = require("set").fileFinishedImporting("modules/applications/useGuildApplication.tsx");

export default function useGuildApplication(arg0, arg1) {
  const _require = arg0;
  closure_1 = arg1;
  const items = [closure_6];
  application = _require(application[4]).useStateFromStores(items, () => guildApplication.getGuildApplication(closure_0, closure_1));
  let obj = _require(application[4]);
  [tmp3, closure_3] = callback2(first.useState(null == application), 2);
  error = callback2(first.useState(), 2);
  callback2 = error[1];
  const tmp5 = callback2(first.useState(false), 2);
  first = tmp5[0];
  closure_6 = tmp5[1];
  const items1 = [application, arg1, arg0];
  callback = first.useCallback(callback(function*() {
    if (c5 === 2) {
      c5 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c5 = 2;
        if (0 === v02) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            closure_1 = tmp4;
            closure_0 = tmp8;
            if (null == closure_1_2) {
              if (null != closure_1_0) {
                closure_1_6(true);
                v0(true);
                v0 = 2;
                obj1 = closure_1_1(closure_1_2[5]);
                obj1 = { type: null, includeTeam: true };
                obj1[0] = closure_1_1;
                v02 = 3;
                c5 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = obj1.getApplicationsForGuild(tmp33, obj1);
                return obj2;
              }
            }
            c5 = 3;
          }
        } else if (1 !== tmp8) {
          if (2 === tmp8) {
            v0 = 1;
            closure_0 = closure_2;
            const aPIError = new closure_1_0(closure_1_2[6]).APIError(closure_0);
            v02(aPIError);
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            v0 = 0;
            v0(false);
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            v0 = 1;
          }
          v0 = 0;
          v0(false);
        }
        v0 = 0;
        v0(false);
        throw closure_2;
      } catch (tmp41) {
        closure_2 = tmp41;
        if (tmp5 === v0) {
          c5 = tmp3;
          throw tmp41;
        } else if (tmp2 === tmp43) {
          v02 = tmp2;
        } else {
          v02 = tmp;
        }
      }
    }
  }), items1);
  const items2 = [first, callback];
  const effect = first.useEffect(() => {
    if (!first) {
      callback();
    }
  }, items2);
  return { application, error: error[0], loading };
};