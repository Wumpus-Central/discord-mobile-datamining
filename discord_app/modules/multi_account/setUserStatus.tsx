// === Module 9987: _setUserStatus ===

// Module 9987 (_setUserStatus)
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "initialize" /* 5430 */;
import closure_5 from "filterPlayingActivities" /* 5170 */;
import { AnalyticEvents } from "ME" /* 676 */;

const require = arg1;
function _setUserStatus() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    const iter = (function*(arg0) {
      if (globalStats === 2) {
        globalStats = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
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
          globalStats = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              globalStats = 3;
              throw arg1;
            } else if (arg0 === 2) {
              globalStats = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              dependencyMap = tmp5;
              let callback2 = tmp2;
              let callback;
              callback2 = undefined;
              dependencyMap = undefined;
              c3 = undefined;
              globalStats = undefined;
              ({ nextStatus: c0, prevStatus: c1, analyticsContext: c2, durationMillis: c3, disableTracking } = callback);
              if (disableTracking === undefined) {
                disableTracking = false;
              }
              globalStats = disableTracking;
              let str;
              let constants;
              let obj5;
              c3 = 1;
              globalStats = 1;
              return { value: "ct", done: true };
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              globalStats = 3;
              throw arg1;
            } else if (arg0 === 2) {
              globalStats = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              if (null == callback2) {
                const status = str.getStatus();
              }
              str = "0";
              if (null != c3) {
                const _Date = Date;
                const _HermesInternal = HermesInternal;
                str = "" + Date.now() + c3;
              }
              const PreloadedUserSettingsActionCreators = callback(1374).PreloadedUserSettingsActionCreators;
              c3 = 2;
              globalStats = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = PreloadedUserSettingsActionCreators.updateAsync("status", (statusCreatedAtMs) => {
                const StringValue = _undefined(_undefined2[8]).StringValue;
                let obj = { value: _undefined };
                statusCreatedAtMs.status = StringValue.create(obj);
                statusCreatedAtMs.statusExpiresAtMs = str;
                if (c1 === _undefined) {
                  if (null != statusCreatedAtMs.statusCreatedAtMs) {
                    statusCreatedAtMs = statusCreatedAtMs.statusCreatedAtMs;
                  }
                  statusCreatedAtMs.statusCreatedAtMs = statusCreatedAtMs;
                }
                const UInt64Value = _undefined(_undefined2[8]).UInt64Value;
                obj = { value: "" + Date.now() };
                statusCreatedAtMs = UInt64Value.create(obj);
              }, callback(1374).UserSettingsDelay.INFREQUENT_USER_ACTION);
              return obj2;
            }
          } else if (arg0 === 1) {
            globalStats = 3;
            throw arg1;
          } else if (arg0 === 2) {
            globalStats = 3;
            let obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            constants = (function getStatusUpdateAnnouncement(c0, arg1) {
              let obj = _undefined(_undefined2[4]);
              const humanizeStatusResult = obj.humanizeStatus(c0);
              if ("0" === arg1) {
                const intl3 = tmp(tmp2[5]).intl;
                obj = { statusLabel: null };
                obj[0] = humanizeStatusResult;
                return intl3.formatToPlainString(tmp(tmp2[5]).t.dO2aLi, obj);
              } else {
                const statusExpiryParts = tmp(tmp2[6]).getStatusExpiryParts(arg1);
                const timeString = statusExpiryParts.timeString;
                if ("today" === statusExpiryParts.kind) {
                  const intl2 = tmp(tmp2[5]).intl;
                  obj = { statusLabel: null, timeString: null };
                  obj[0] = humanizeStatusResult;
                  obj[1] = timeString;
                  let formatToPlainStringResult = intl2.formatToPlainString(tmp(tmp2[5]).t["r50t/S"], obj);
                } else {
                  const intl = tmp(tmp2[5]).intl;
                  obj1 = { statusLabel: null, dateString: null, timeString: null };
                  obj1[0] = humanizeStatusResult;
                  obj1[1] = tmp6;
                  obj1[2] = timeString;
                  formatToPlainStringResult = intl.formatToPlainString(tmp(tmp2[5]).t["J+GJHv"], obj1);
                }
                return formatToPlainStringResult;
              }
            })(callback, str);
            const AccessibilityAnnouncer = callback(1350).AccessibilityAnnouncer;
            AccessibilityAnnouncer.announce(constants);
            if (!globalStats) {
              obj = { next_status: null, prev_status: null };
              obj[0] = callback;
              obj[1] = callback2;
              const merged = Object.assign(globalStats.getGlobalStats());
              obj5 = obj;
              if (null != c3) {
                const obj4 = {};
                const merged1 = Object.assign(obj5);
                let result = null;
                if (null != c3) {
                  result = c3 / 60000;
                }
                obj4.expire_duration_minutes = result;
                obj5 = obj4;
              }
              if (null != dependencyMap) {
                obj5 = {};
                const merged2 = Object.assign(obj5);
                const merged3 = Object.assign(dependencyMap);
              }
              obj3 = callback2(698);
              obj3.track(constants.USER_STATUS_UPDATED, obj5);
            }
            globalStats = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp54) {
          globalStats = tmp;
          throw tmp54;
        }
      }
    })();
    iter.next();
    return iter;
  });
  closure_7 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let result = require("set").fileFinishedImporting("modules/multi_account/setUserStatus.tsx");

export default function setUserStatus() {
  const self = this;
  const apply = _setUserStatus.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};