// === Module 16166: prototype ===

// Module 16166 (prototype)
import cacheBustParam from "cacheBustParam";
import _slicedToArray from "_slicedToArray";
import _getSystemLocale from "_getSystemLocale";
import handleUserSettingsProtoStoreChange from "handleUserSettingsProtoStoreChange";
import "initialize";

const require = arg1;
let prototype = function ChangelogManager() {
  let applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  let closure_0 = applyArgumentsResult;
  applyArgumentsResult.actions = {
    POST_CONNECTION_OPEN(arg0) {
      return closure_0.handleConnectionOpen(arg0);
    }
  };
  closure_0 = undefined;
  closure_0 = callback(function*() {
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
        if (0 === dispatchResult2) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let c1 = tmp3;
            let c0 = tmp7;
            c0 = undefined;
            c1 = undefined;
            let c2;
            let c3;
            dispatchResult2 = undefined;
            c5 = undefined;
            c3 = 1;
            dispatchResult2 = 2;
            c5 = 1;
            let obj1 = { value: null, done: false };
            obj1[0] = outer1_1(outer1_2[5]).fetchChangelogConfig();
            return obj1;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          outer1_1(outer1_2[7]).dispatch({ type: "CHANGE_LOG_RESOLVED" });
          throw c2;
        } else if (2 === tmp7) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            outer1_1(outer1_2[7]).dispatch({ type: "CHANGE_LOG_RESOLVED" });
            c5 = 3;
            let obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            dispatchResult2 = c0;
            dispatchResult2 = c1;
            const outer1_0 = arg1;
            dispatchResult2 = outer1_0;
            outer1_1 = outer1_0.body;
            dispatchResult2 = outer1_1;
            dispatchResult2 = outer1_0;
            dispatchResult2 = outer1_2;
            outer1_2 = (function getLatestChangelogIdForVersion(outer1_1, clientVersionForChangelog) {
              let num = 0;
              let first = null;
              const entries = Object.entries(outer1_1);
              while (tmp3 !== undefined) {
                let tmp5 = dispatchResult2;
                let tmp6 = dispatchResult2(tmp4, 2);
                let min_version = tmp6[1].min_version;
                let tmp8 = min_version <= clientVersionForChangelog;
                if (tmp8) {
                  let tmp9 = min_version;
                  let tmp10 = num;
                  tmp8 = tmp7 > num;
                }
                if (tmp8) {
                  num = min_version;
                  first = tmp6[0];
                }
                continue;
              }
              return first;
            })(outer1_1, outer1_0(outer1_2[6]).getClientVersionForChangelog());
            dispatchResult2 = outer1_1;
            dispatchResult2 = outer1_2;
            const obj23 = outer1_0(outer1_2[6]);
            let obj3 = { type: "CHANGE_LOG_SET_CONFIG", config: null, latestChangelogId: null };
            dispatchResult2 = outer1_0;
            obj3[1] = outer1_0.body;
            dispatchResult2 = outer1_2;
            obj3[2] = outer1_2;
            dispatchResult2 = outer1_1(outer1_2[7]).dispatch(obj3);
            dispatchResult2 = outer1_2;
            if (null == outer1_2) {
              c3 = 0;
              outer1_1(outer1_2[7]).dispatch({ type: "CHANGE_LOG_RESOLVED" });
              c5 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              dispatchResult2 = c0;
              dispatchResult2 = outer1_1;
              dispatchResult2 = outer1_2;
              if (true !== outer1_1[outer1_2].show_on_startup) {
                c3 = 0;
                outer1_1(outer1_2[7]).dispatch({ type: "CHANGE_LOG_RESOLVED" });
                c5 = 3;
                return { value: "HermesInternal", done: null };
              } else {
                dispatchResult2 = c0;
                dispatchResult2 = c1;
                dispatchResult2 = outer1_6;
                c3 = outer1_6.lastSeenChangelogId();
                dispatchResult2 = outer1_6;
                let c4 = outer1_6.lastSeenChangelogDate();
                dispatchResult2 = c3;
                if (null != c3) {
                  if (obj10.compare(outer1_2, c3) <= 0) {
                    c3 = 0;
                    outer1_1(outer1_2[7]).dispatch({ type: "CHANGE_LOG_RESOLVED" });
                    c5 = 3;
                    return { value: "HermesInternal", done: null };
                  }
                  obj10 = outer1_1(outer1_2[8]);
                }
                dispatchResult2 = 3;
                c5 = 1;
                let obj4 = { value: null, done: false };
                obj4[0] = outer1_1(outer1_2[5]).fetchChangelog(outer1_2, c5.locale);
                return obj4;
              }
            }
            const obj24 = outer1_1(outer1_2[7]);
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 0;
          outer1_1(outer1_2[7]).dispatch({ type: "CHANGE_LOG_RESOLVED" });
          c5 = 3;
          const obj5 = { value: null, done: true };
          obj5[0] = arg1;
          return obj5;
        } else {
          c5 = arg1;
          if (null == c5) {
            c3 = 0;
            let obj6 = outer1_1(outer1_2[7]);
            obj6.dispatch({ type: "CHANGE_LOG_RESOLVED" });
            c5 = 3;
            return { value: "HermesInternal", done: null };
          } else {
            if (null != dispatchResult2) {
              dispatchResult2 = c1;
              dispatchResult2 = outer1_6;
              if (null != outer1_6.lastSeenChangelogDate()) {
                dispatchResult2 = c1;
                dispatchResult2 = outer1_6;
                if (outer1_6.isLocked()) {
                  c3 = 0;
                  obj2 = outer1_1(outer1_2[7]);
                  obj2.dispatch({ type: "CHANGE_LOG_RESOLVED" });
                  c5 = 3;
                  return { value: "HermesInternal", done: null };
                } else {
                  const _Date = Date;
                  const date = new Date(c5.date);
                  const _Date2 = Date;
                  const date1 = new Date(dispatchResult2);
                  if (date > date1) {
                    obj = outer1_0(outer1_2[9]);
                    obj.openChangelog();
                  }
                  c3 = 0;
                  obj1 = outer1_1(outer1_2[7]);
                  obj1.dispatch({ type: "CHANGE_LOG_RESOLVED" });
                  c5 = 3;
                  return { value: "HermesInternal", done: null };
                }
              }
            }
            obj3 = outer1_1(outer1_2[5]);
            obj3.markChangelogAsSeen(outer1_2, c5.date);
            c3 = 0;
            obj4 = outer1_1(outer1_2[7]);
            obj4.dispatch({ type: "CHANGE_LOG_RESOLVED" });
            c5 = 3;
            obj6 = { value: null, done: true };
            obj6[0] = undefined;
            return obj6;
          }
        }
      } catch (tmp86) {
        c2 = tmp86;
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp86;
        }
      }
    }
  });
  applyArgumentsResult.handleConnectionOpen = function() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {
}
prototype = new prototype();
const result = require("_getSystemLocale").fileFinishedImporting("modules/changelog/ChangelogManager.tsx");

export default prototype;