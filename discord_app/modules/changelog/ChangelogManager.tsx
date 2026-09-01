// discord_app/modules/changelog/ChangelogManager.tsx
import initializeDefault from "../../lib/AutomaticLifecycleManager.tsx";
import closure_3 from "../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "../../../_runtime/metro/00032__slicedToArray.js";
import closure_5 from "../user_settings/LocaleStore.tsx";
import closure_6 from "ChangelogStore.tsx";

const require = arg1;
initializeDefault;
let prototype = function ChangelogManager() {
  let applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  closure_0 = applyArgumentsResult;
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
            c1 = tmp3;
            c0 = tmp7;
            c0 = undefined;
            c1 = undefined;
            c2 = undefined;
            c3 = undefined;
            dispatchResult2 = undefined;
            c5 = undefined;
            c3 = 1;
            dispatchResult2 = 2;
            c5 = 1;
            obj1 = { value: null, done: false };
            obj1[0] = body(8001).fetchChangelogConfig();
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
            dispatchResult2 = c0;
            dispatchResult2 = c1;
            const lib = arg1;
            dispatchResult2 = lib;
            body = lib.body;
            dispatchResult2 = body;
            dispatchResult2 = lib;
            dispatchResult2 = dependencyMap;
            dependencyMap = (function getLatestChangelogIdForVersion(body, clientVersionForChangelog) {
              let num = 0;
              let first = null;
              const entries = Object.entries(body);
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
            })(body, lib(16904).getClientVersionForChangelog());
            dispatchResult2 = body;
            dispatchResult2 = dependencyMap;
            const obj23 = lib(16904);
            let obj3 = { type: "CHANGE_LOG_SET_CONFIG", config: null, latestChangelogId: null };
            dispatchResult2 = lib;
            obj3[1] = lib.body;
            dispatchResult2 = dependencyMap;
            obj3[2] = dependencyMap;
            dispatchResult2 = body(709).dispatch(obj3);
            dispatchResult2 = dependencyMap;
            if (null == dependencyMap) {
              c3 = 0;
              body(709).dispatch({ type: "CHANGE_LOG_RESOLVED" });
              c5 = 3;
              return { value: "HermesInternal", done: null };
            } else {
              dispatchResult2 = c0;
              dispatchResult2 = body;
              dispatchResult2 = dependencyMap;
              if (true !== body[dependencyMap].show_on_startup) {
                c3 = 0;
                body(709).dispatch({ type: "CHANGE_LOG_RESOLVED" });
                c5 = 3;
                return { value: "HermesInternal", done: null };
              } else {
                dispatchResult2 = c0;
                dispatchResult2 = c1;
                dispatchResult2 = closure_1_6;
                closure_3 = closure_1_6.lastSeenChangelogId();
                dispatchResult2 = closure_1_6;
                closure_4 = closure_1_6.lastSeenChangelogDate();
                dispatchResult2 = closure_3;
                if (null != closure_3) {
                  if (obj10.compare(dependencyMap, closure_3) <= 0) {
                    c3 = 0;
                    body(709).dispatch({ type: "CHANGE_LOG_RESOLVED" });
                    c5 = 3;
                    return { value: "HermesInternal", done: null };
                  }
                  obj10 = body(11);
                }
                dispatchResult2 = 3;
                c5 = 1;
                let obj4 = { value: null, done: false };
                obj4[0] = body(8001).fetchChangelog(dependencyMap, c5.locale);
                return obj4;
              }
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
            return { value: "HermesInternal", done: null };
          } else {
            if (null != dispatchResult2) {
              dispatchResult2 = c1;
              dispatchResult2 = closure_1_6;
              if (null != closure_1_6.lastSeenChangelogDate()) {
                dispatchResult2 = c1;
                dispatchResult2 = closure_1_6;
                if (closure_1_6.isLocked()) {
                  c3 = 0;
                  obj2 = body(709);
                  obj2.dispatch({ type: "CHANGE_LOG_RESOLVED" });
                  c5 = 3;
                  return { value: "HermesInternal", done: null };
                } else {
                  const _Date = Date;
                  const date = new Date(c5.date);
                  const _Date2 = Date;
                  const date1 = new Date(dispatchResult2);
                  if (date > date1) {
                    obj = lib(16906);
                    obj.openChangelog();
                  }
                  c3 = 0;
                  obj1 = body(709);
                  obj1.dispatch({ type: "CHANGE_LOG_RESOLVED" });
                  c5 = 3;
                  return { value: "HermesInternal", done: null };
                }
              }
            }
            obj3 = body(8001);
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
const result = require("set").fileFinishedImporting("modules/changelog/ChangelogManager.tsx");

export default prototype;