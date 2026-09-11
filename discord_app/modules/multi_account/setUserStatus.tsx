// discord_app/modules/multi_account/setUserStatus.tsx
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import LastMentionTimestampStore from "../notifications/LastMentionTimestampStore.tsx";
import SelfPresenceStore from "../../stores/SelfPresenceStore.tsx";

const require = fn;
let closure_7 = async function _setUserStatus(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
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
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          dependencyMap = tmp5;
          closure_1 = tmp2;
          closure_129_0 = undefined;
          let status;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          closure_129_4 = undefined;
          ({
            nextStatus: closure_129_0,
            prevStatus: closure_129_1,
            analyticsContext: closure_129_2,
            durationMillis: closure_129_3,
            disableTracking,
          } = value);
          if (disableTracking === undefined) {
            disableTracking = false;
          }
          closure_129_4 = disableTracking;
          closure_129_5 = undefined;
          closure_129_6 = undefined;
          closure_129_7 = undefined;
          c3 = 1;
          c4 = 1;
          return { value: "PX_16", done: null };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          let obj1 = { value, done: true };
          return obj1;
        } else {
          if (null == status) {
            status = closure_130_5.getStatus();
          }
          let str = "0";
          if (null != closure_129_3) {
            const _Date = Date;
            const _HermesInternal = HermesInternal;
            str = "" + Date.now() + closure_129_3;
          }
          closure_129_5 = str;
          const PreloadedUserSettingsActionCreators = closure_130_0(
            closure_130_2[7],
          ).PreloadedUserSettingsActionCreators;
          c3 = 2;
          c4 = 1;
          const obj2 = {
            value: PreloadedUserSettingsActionCreators.updateAsync(
              "status",
              async (statusCreatedAtMs) => {
                const StringValue = value(1218).StringValue;
                let obj = { value };
                statusCreatedAtMs.status = StringValue.create(obj);
                statusCreatedAtMs.statusExpiresAtMs = statusExpiresAtMs;
                if (closure_1_1 === value) {
                  if (null != statusCreatedAtMs.statusCreatedAtMs) {
                    statusCreatedAtMs = statusCreatedAtMs.statusCreatedAtMs;
                  }
                  statusCreatedAtMs.statusCreatedAtMs = statusCreatedAtMs;
                }
                const UInt64Value = value(1218).UInt64Value;
                obj = { value: "" + Date.now() };
                statusCreatedAtMs = UInt64Value.create(obj);
              },
              closure_130_0(closure_130_2[7]).UserSettingsDelay.INFREQUENT_USER_ACTION,
            ),
            done: false,
          };
          return obj2;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        let obj3 = { value, done: true };
        return obj3;
      } else {
        closure_129_6 = (function getStatusUpdateAnnouncement(DND, arg1) {
          let obj = value(4451);
          const humanizeStatusResult = obj.humanizeStatus(DND);
          if ("0" === arg1) {
            const intl3 = value(1114).intl;
            obj = { statusLabel: humanizeStatusResult };
            return intl3.formatToPlainString(value(1114).t.dO2aLi, obj);
          } else {
            const statusExpiryParts = value(10182).getStatusExpiryParts(arg1);
            const timeString = statusExpiryParts.timeString;
            if ("today" === statusExpiryParts.kind) {
              const intl2 = value(1114).intl;
              obj = { statusLabel: humanizeStatusResult, timeString };
              let formatToPlainStringResult = intl2.formatToPlainString(value(1114).t["r50t/S"], obj);
            } else {
              const intl = value(1114).intl;
              const obj1 = { statusLabel: humanizeStatusResult, dateString: tmp6, timeString };
              formatToPlainStringResult = intl.formatToPlainString(value(1114).t["J+GJHv"], obj1);
            }
            return formatToPlainStringResult;
          }
        })(closure_129_0, closure_129_5);
        const AccessibilityAnnouncer = closure_130_0(closure_130_2[9]).AccessibilityAnnouncer;
        AccessibilityAnnouncer.announce(closure_129_6);
        if (!closure_129_4) {
          obj = { next_status: closure_129_0, prev_status: status };
          const merged = Object.assign(closure_130_4.getGlobalStats());
          closure_129_7 = obj;
          if (null != closure_129_3) {
            const obj4 = {};
            const merged1 = Object.assign(closure_129_7);
            let result = null;
            if (null != closure_129_3) {
              result = closure_129_3 / 60000;
            }
            obj4.expire_duration_minutes = result;
            closure_129_7 = obj4;
          }
          if (null != closure_129_2) {
            const obj5 = {};
            const merged2 = Object.assign(closure_129_7);
            const merged3 = Object.assign(closure_129_2);
            closure_129_7 = obj5;
          }
          obj3 = closure_130_1(closure_130_2[10]);
          obj3.track(closure_130_6.USER_STATUS_UPDATED, closure_129_7);
        }
        c4 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp54) {
      c4 = tmp;
      throw tmp54;
    }
  }
};
const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
let result = size.fileFinishedImporting("modules/multi_account/setUserStatus.tsx");

export default function setUserStatus() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
