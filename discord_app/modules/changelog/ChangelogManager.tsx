// === Module 17469: ChangelogManager ===

// Module 17469 (ChangelogManager)
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import LocaleStore from "LocaleStore" /* 2116 */;
import ChangelogStore from "ChangelogStore" /* 4904 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 6613 */;
import size from "module_2" /* 2 */;

let c4, c5;

class ChangelogManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    applyArgumentsResult.actions = {
      POST_CONNECTION_OPEN(arg0) {
        return require.handleConnectionOpen(arg0);
      }
    };
    let closure_0 = _asyncToGenerator(async function() {
      let closure_1;
      let obj11;
      let obj19;
      let tmp;
      let tmp3;
      function getLatestChangelogIdForVersion(body, clientVersionForChangelog) {
        let num = 0;
        let tmp = null;
        const entries = Object.entries(body);
        const tmp3 = entries[Symbol.iterator]();
        while (tmp3 !== undefined) {
          let tmp6 = closure_1_4(tmp4, 2);
          let min_version = tmp6[1].min_version;
          let tmp9 = min_version <= clientVersionForChangelog;
          let first = tmp6[0];
          if (tmp9) {
            tmp9 = tmp8 > num;
          }
          if (tmp9) {
            num = min_version;
            tmp = first;
          }
          continue;
        }
        return tmp;
      }
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj6 = { value, done: true };
          return obj6;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        let latestChangelogId;
        try {
          let body;
          let closure_3;
          let closure_4;
          let closure_5;
          let num = 2;
          c5 = 2;
          const tmp4 = c4;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj9 = { value, done: true };
              return obj9;
            } else {
              closure_0 = undefined;
              body = undefined;
              latestChangelogId = undefined;
              closure_3 = undefined;
              closure_4 = undefined;
              closure_5 = undefined;
              c3 = 1;
              c4 = 2;
              c5 = 1;
              const obj12 = { value: obj19.fetchChangelogConfig(), done: false };
              obj19 = tmp(latestChangelogId[5]);
              return obj12;
            }
          } else if (1 === tmp4) {
            c3 = 0;
            const obj18 = tmp(latestChangelogId[7]);
            obj18.dispatch({ type: "CHANGE_LOG_RESOLVED" });
            throw latestChangelogId;
          } else if (2 === tmp4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              const obj16 = tmp(latestChangelogId[7]);
              obj16.dispatch({ type: "CHANGE_LOG_RESOLVED" });
              c5 = 3;
              const obj17 = { value, done: true };
              return obj17;
            } else {
              closure_0 = value;
              body = closure_0.body;
              const obj23 = closure_0(latestChangelogId[6]);
              latestChangelogId = getLatestChangelogIdForVersion(body, obj23.getClientVersionForChangelog());
              const obj20 = { type: "CHANGE_LOG_SET_CONFIG", config: closure_0.body, latestChangelogId };
              const obj24 = tmp(latestChangelogId[7]);
              obj24.dispatch(obj20);
              if (null == latestChangelogId) {
                c3 = 0;
                const obj15 = tmp(latestChangelogId[7]);
                obj15.dispatch({ type: "CHANGE_LOG_RESOLVED" });
                c5 = 3;
                return { value: "IconComponent", done: null };
              } else if (true !== body[latestChangelogId].show_on_startup) {
                c3 = 0;
                const obj14 = tmp(latestChangelogId[7]);
                obj14.dispatch({ type: "CHANGE_LOG_RESOLVED" });
                c5 = 3;
                return { value: "IconComponent", done: null };
              } else {
                closure_3 = closure_1_6.lastSeenChangelogId();
                closure_4 = closure_1_6.lastSeenChangelogDate();
                if (null != closure_3) {
                  const obj10 = tmp(latestChangelogId[8]);
                  if (obj10.compare(latestChangelogId, closure_3) <= 0) {
                    c3 = 0;
                    const obj13 = tmp(latestChangelogId[7]);
                    obj13.dispatch({ type: "CHANGE_LOG_RESOLVED" });
                    c5 = 3;
                    return { value: "IconComponent", done: null };
                  }
                }
                c4 = 3;
                c5 = 1;
                const obj21 = { value: obj11.fetchChangelog(latestChangelogId, c5.locale), done: false };
                obj11 = tmp(latestChangelogId[5]);
                return obj21;
              }
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            const obj8 = tmp(latestChangelogId[7]);
            obj8.dispatch({ type: "CHANGE_LOG_RESOLVED" });
            c5 = 3;
            const obj22 = { value, done: true };
            return obj22;
          } else {
            closure_5 = value;
            if (null == closure_5) {
              c3 = 0;
              const obj7 = tmp(latestChangelogId[7]);
              obj7.dispatch({ type: "CHANGE_LOG_RESOLVED" });
              c5 = 3;
              return { value: "IconComponent", done: null };
            } else {
              if (null != closure_4) {
                if (null != closure_1_6.lastSeenChangelogDate()) {
                  if (closure_1_6.isLocked()) {
                    c3 = 0;
                    const obj3 = tmp(latestChangelogId[7]);
                    obj3.dispatch({ type: "CHANGE_LOG_RESOLVED" });
                    c5 = 3;
                    return { value: "IconComponent", done: null };
                  } else {
                    const _Date = Date;
                    let tmp6 = closure_5;
                    const self = this;
                    const self2 = this;
                    const date = new Date(closure_5.date);
                    const _Date2 = Date;
                    const tmp8 = closure_4;
                    const self3 = this;
                    const self4 = this;
                    const date1 = new Date(closure_4);
                    let tmp10 = date1;
                    let tmp11 = date;
                    if (date > date1) {
                      const obj = closure_0(latestChangelogId[9]);
                      obj.openChangelog();
                    }
                    c3 = 0;
                    const obj2 = tmp(latestChangelogId[7]);
                    obj2.dispatch({ type: "CHANGE_LOG_RESOLVED" });
                    c5 = 3;
                    return { value: "IconComponent", done: null };
                  }
                }
              }
              const obj4 = tmp(latestChangelogId[5]);
              obj4.markChangelogAsSeen(latestChangelogId, closure_5.date);
              c3 = 0;
              const obj5 = tmp(latestChangelogId[7]);
              obj5.dispatch({ type: "CHANGE_LOG_RESOLVED" });
              c5 = 3;
              const obj25 = { value: undefined, done: true };
              return obj25;
            }
          }
        } catch (tmp79) {
          latestChangelogId = tmp79;
          if (0 === c3) {
            c5 = 3;
            throw tmp79;
          } else {
            c4 = 1;
          }
        }
      }
    });
    applyArgumentsResult.handleConnectionOpen = function() {
      return closure_0(...arguments);
    };
    return applyArgumentsResult;
  }
}
const changelogManager = new ChangelogManager();
const result = size.fileFinishedImporting("modules/changelog/ChangelogManager.tsx");

export default changelogManager;