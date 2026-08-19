// === Module 16538: prototype ===

// Module 16538 (prototype)
import initializeDefault from "initialize" /* 5038 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import _getSystemLocale from "_getSystemLocale" /* 1994 */;
import handleUserSettingsProtoStoreChange from "handleUserSettingsProtoStoreChange" /* 4771 */;

const require = fn;
initializeDefault;
let prototype = function ChangelogManager() {
  let applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  applyArgumentsResult.actions = {
    POST_CONNECTION_OPEN(arg0) {
      return closure_0.handleConnectionOpen(arg0);
    }
  };
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
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            c1 = tmp3;
            c0 = tmp7;
            c0 = undefined;
            c1 = undefined;
            c2 = undefined;
            c3 = undefined;
            c4 = undefined;
            c5 = undefined;
            c3 = 1;
            c4 = 2;
            c5 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = body(8304).fetchChangelogConfig();
            return obj1;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          body(709).dispatch({ type: "CHANGE_LOG_RESOLVED" });
          throw c2;
        } else if (2 === tmp7) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            body(709).dispatch({ type: "CHANGE_LOG_RESOLVED" });
            c5 = 3;
            let obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            const lib = arg1;
            body = lib.body;
            dependencyMap = (function getLatestChangelogIdForVersion(body, clientVersionForChangelog) {
              let num = 0;
              let first = null;
              const entries = Object.entries(body);
              while (tmp3 !== undefined) {
                let tmp6 = v3(tmp4, 2);
                let min_version = tmp6[1].min_version;
                let tmp8 = min_version <= clientVersionForChangelog;
                if (tmp8) {
                  tmp8 = tmp7 > num;
                }
                if (tmp8) {
                  num = min_version;
                  first = tmp6[0];
                }
                continue;
              }
              return first;
            })(body, lib(16539).getClientVersionForChangelog());
            const obj23 = lib(16539);
            let obj3 = { type: "CHANGE_LOG_SET_CONFIG", config: null, latestChangelogId: null };
            obj3[1] = lib.body;
            obj3[2] = dependencyMap;
            body(709).dispatch(obj3);
            if (null == dependencyMap) {
              c3 = 0;
              body(709).dispatch({ type: "CHANGE_LOG_RESOLVED" });
              c5 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            } else if (true !== body[dependencyMap].show_on_startup) {
              c3 = 0;
              body(709).dispatch({ type: "CHANGE_LOG_RESOLVED" });
              c5 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            } else {
              closure_3 = closure_1_6.lastSeenChangelogId();
              closure_4 = closure_1_6.lastSeenChangelogDate();
              if (null != closure_3) {
                if (obj10.compare(dependencyMap, closure_3) <= 0) {
                  c3 = 0;
                  body(709).dispatch({ type: "CHANGE_LOG_RESOLVED" });
                  c5 = 3;
                  return { value: "HermesInternal", done: "HermesInternal" };
                }
                obj10 = body(11);
              }
              c4 = 3;
              c5 = 1;
              let obj4 = { value: null, done: false };
              obj4[0] = body(8304).fetchChangelog(dependencyMap, c5.locale);
              return obj4;
            }
            const obj24 = body(709);
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 0;
          body(709).dispatch({ type: "CHANGE_LOG_RESOLVED" });
          c5 = 3;
          const obj5 = { value: null, done: true };
          obj5[0] = arg1;
          return obj5;
        } else {
          c5 = arg1;
          if (null == c5) {
            c3 = 0;
            let obj6 = body(709);
            obj6.dispatch({ type: "CHANGE_LOG_RESOLVED" });
            c5 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          } else {
            if (null != c4) {
              if (null != closure_1_6.lastSeenChangelogDate()) {
                if (closure_1_6.isLocked()) {
                  c3 = 0;
                  obj2 = body(709);
                  obj2.dispatch({ type: "CHANGE_LOG_RESOLVED" });
                  c5 = 3;
                  return { value: "HermesInternal", done: "HermesInternal" };
                } else {
                  const _Date = Date;
                  const date = new Date(c5.date);
                  const _Date2 = Date;
                  const date1 = new Date(c4);
                  if (date > date1) {
                    obj = lib(16541);
                    obj.openChangelog();
                  }
                  c3 = 0;
                  obj1 = body(709);
                  obj1.dispatch({ type: "CHANGE_LOG_RESOLVED" });
                  c5 = 3;
                  return { value: "HermesInternal", done: "HermesInternal" };
                }
              }
            }
            obj3 = body(8304);
            obj3.markChangelogAsSeen(dependencyMap, c5.date);
            c3 = 0;
            obj4 = body(709);
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
        } else {
          c4 = tmp;
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
const result = require("obj132").fileFinishedImporting("modules/changelog/ChangelogManager.tsx");

export default prototype;