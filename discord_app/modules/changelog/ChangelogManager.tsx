// discord_app/modules/changelog/ChangelogManager.tsx
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import LocaleStore from "../user_settings/LocaleStore.tsx";
import ChangelogStore from "ChangelogStore.tsx";
import AutomaticLifecycleManager from "../../lib/AutomaticLifecycleManager.tsx";

let require = fn;
let prototype = function ChangelogManager() {
  let applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
  require = applyArgumentsResult;
  applyArgumentsResult.actions = {
    POST_CONNECTION_OPEN(arg0) {
      return applyArgumentsResult.handleConnectionOpen(arg0);
    },
  };
  closure_129_0 = asyncGeneratorStep(async () => {
    if (locale === 2) {
      locale = 3;
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
        locale = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            locale = 3;
            throw value;
          } else if (arg0 === 2) {
            locale = 3;
            obj = { value, done: true };
            return obj;
          } else {
            applyArgumentsResult = tmp7;
            closure_128_0 = undefined;
            let body;
            closure_128_2 = undefined;
            closure_128_3 = undefined;
            closure_128_4 = undefined;
            closure_128_5 = undefined;
            c3 = 1;
            c4 = 2;
            locale = 1;
            let obj1 = { value: tmp3(tmp86[5]).fetchChangelogConfig(), done: false };
            return obj1;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          tmp3(tmp86[7]).dispatch({ type: "CHANGE_LOG_RESOLVED" });
          throw tmp86;
        } else if (2 === tmp7) {
          if (arg0 === 1) {
            locale = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            tmp3(tmp86[7]).dispatch({ type: "CHANGE_LOG_RESOLVED" });
            locale = 3;
            let obj2 = { value, done: true };
            return obj2;
          } else {
            closure_128_0 = value;
            body = closure_128_0.body;
            closure_128_2 = (function getLatestChangelogIdForVersion(body, clientVersionForChangelog) {
              let num = 0;
              let first = null;
              const entries = Object.entries(body);
              while (tmp3 !== undefined) {
                let tmp6 = closure_1_4(tmp4, 2);
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
            })(body, applyArgumentsResult(tmp86[6]).getClientVersionForChangelog());
            const obj23 = applyArgumentsResult(tmp86[6]);
            let obj3 = { type: "CHANGE_LOG_SET_CONFIG", config: closure_128_0.body, latestChangelogId: closure_128_2 };
            tmp3(tmp86[7]).dispatch(obj3);
            if (null == closure_128_2) {
              c3 = 0;
              tmp3(tmp86[7]).dispatch({ type: "CHANGE_LOG_RESOLVED" });
              locale = 3;
              return { value: "HermesInternal", done: null };
            } else if (true !== body[closure_128_2].show_on_startup) {
              c3 = 0;
              tmp3(tmp86[7]).dispatch({ type: "CHANGE_LOG_RESOLVED" });
              locale = 3;
              return { value: "HermesInternal", done: null };
            } else {
              closure_128_3 = ChangelogStore.lastSeenChangelogId();
              closure_128_4 = ChangelogStore.lastSeenChangelogDate();
              if (null != closure_128_3) {
                if (obj10.compare(closure_128_2, closure_128_3) <= 0) {
                  c3 = 0;
                  tmp3(tmp86[7]).dispatch({ type: "CHANGE_LOG_RESOLVED" });
                  locale = 3;
                  return { value: "HermesInternal", done: null };
                }
                obj10 = tmp3(tmp86[8]);
              }
              c4 = 3;
              locale = 1;
              let obj4 = { value: tmp3(tmp86[5]).fetchChangelog(closure_128_2, locale.locale), done: false };
              return obj4;
            }
            const obj24 = tmp3(tmp86[7]);
          }
        } else if (arg0 === 1) {
          locale = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          tmp3(tmp86[7]).dispatch({ type: "CHANGE_LOG_RESOLVED" });
          locale = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_128_5 = value;
          if (null == closure_128_5) {
            c3 = 0;
            let obj6 = tmp3(tmp86[7]);
            obj6.dispatch({ type: "CHANGE_LOG_RESOLVED" });
            locale = 3;
            return { value: "HermesInternal", done: null };
          } else {
            if (null != closure_128_4) {
              if (null != ChangelogStore.lastSeenChangelogDate()) {
                if (ChangelogStore.isLocked()) {
                  c3 = 0;
                  obj2 = tmp3(tmp86[7]);
                  obj2.dispatch({ type: "CHANGE_LOG_RESOLVED" });
                  locale = 3;
                  return { value: "HermesInternal", done: null };
                } else {
                  const _Date = Date;
                  const date = new Date(closure_128_5.date);
                  const _Date2 = Date;
                  const date1 = new Date(closure_128_4);
                  if (date > date1) {
                    obj = applyArgumentsResult(tmp86[9]);
                    obj.openChangelog();
                  }
                  c3 = 0;
                  obj1 = tmp3(tmp86[7]);
                  obj1.dispatch({ type: "CHANGE_LOG_RESOLVED" });
                  locale = 3;
                  return { value: "HermesInternal", done: null };
                }
              }
            }
            obj3 = tmp3(tmp86[5]);
            obj3.markChangelogAsSeen(closure_128_2, closure_128_5.date);
            c3 = 0;
            obj4 = tmp3(tmp86[7]);
            obj4.dispatch({ type: "CHANGE_LOG_RESOLVED" });
            locale = 3;
            obj6 = { value: undefined, done: true };
            return obj6;
          }
        }
      } catch (tmp86) {
        if (tmp4 === c3) {
          locale = tmp2;
          throw tmp86;
        } else {
          c4 = tmp;
        }
      }
    }
  });
  applyArgumentsResult.handleConnectionOpen = function () {
    const self = this;
    const apply = applyArgumentsResult.apply;
    if (typeof apply === "unknown") {
      applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  return applyArgumentsResult;
}.prototype;
class prototype extends tmp2 {}
prototype = new prototype();
const size = fn(2);
const result = size.fileFinishedImporting("modules/changelog/ChangelogManager.tsx");

export default prototype;
