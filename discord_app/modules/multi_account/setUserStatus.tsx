// discord_app/modules/multi_account/setUserStatus.tsx
import Constants from "../../Constants.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import LastMentionTimestampStore from "../notifications/LastMentionTimestampStore.tsx";
import SelfPresenceStore from "../../stores/SelfPresenceStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

let closure_2, statusCreatedAtMs;

let obj = function _setUserStatus() {
  obj = _asyncToGenerator(async (next_status) => {
    let c0;
    let c2;
    let c3;
    let c4;
    let closure_1;
    let disableTracking;
    let prev_status;
    let result;
    function getStatusUpdateAnnouncement(c0, arg1) {
      obj = value(closure_1_2[4]);
      const humanizeStatusResult = obj.humanizeStatus(c0);
      if ("0" === arg1) {
        const intl3 = value(closure_1_2[5]).intl;
        const obj2 = { statusLabel: humanizeStatusResult };
        return intl3.formatToPlainString(value(closure_1_2[5]).t.dO2aLi, obj2);
      } else {
        let formatToPlainStringResult;
        const tmpResult = value(closure_1_2[6]);
        const statusExpiryParts = tmpResult.getStatusExpiryParts(arg1);
        const timeString = statusExpiryParts.timeString;
        if ("today" === statusExpiryParts.kind) {
          const intl2 = value(closure_1_2[5]).intl;
          const obj3 = { statusLabel: humanizeStatusResult, timeString };
          formatToPlainStringResult = intl2.formatToPlainString(value(closure_1_2[5]).t["r50t/S"], obj3);
        } else {
          const intl = value(closure_1_2[5]).intl;
          const obj4 = { statusLabel: humanizeStatusResult, dateString: tmp6, timeString };
          formatToPlainStringResult = intl.formatToPlainString(value(closure_1_2[5]).t["J+GJHv"], obj4);
        }
        return formatToPlainStringResult;
      }
    }
    if (null == prev_status) {
      prev_status = closure_130_5.getStatus();
    }
    let str = "0";
    if (null != c3) {
      const _Date = Date;
      const _HermesInternal = HermesInternal;
      str = "" + Date.now() + c3;
    }
    const PreloadedUserSettingsActionCreators = closure_130_0(closure_130_2[7]).PreloadedUserSettingsActionCreators;
    await PreloadedUserSettingsActionCreators.updateAsync(
      "status",
      async (statusCreatedAtMs) => {
        const StringValue = value(closure_2[8]).StringValue;
        obj = { value };
        statusCreatedAtMs.status = StringValue.create(obj);
        statusCreatedAtMs.statusExpiresAtMs = statusExpiresAtMs;
        if (prev_status === value) {
          if (null != statusCreatedAtMs.statusCreatedAtMs) {
            statusCreatedAtMs = statusCreatedAtMs.statusCreatedAtMs;
          }
          statusCreatedAtMs.statusCreatedAtMs = statusCreatedAtMs;
        }
        const UInt64Value = value(closure_2[8]).UInt64Value;
        const obj2 = { value: "" + Date.now() };
        statusCreatedAtMs = UInt64Value.create(obj2);
      },
      closure_130_0(closure_130_2[7]).UserSettingsDelay.INFREQUENT_USER_ACTION,
    );
    let closure_6 = getStatusUpdateAnnouncement(next_status, str);
    const AccessibilityAnnouncer = closure_130_0(closure_130_2[9]).AccessibilityAnnouncer;
    AccessibilityAnnouncer.announce(closure_6);
    const tmp65 = disableTracking;
    if (!tmp65) {
      const tmp6 = closure_2;
      obj = { next_status, prev_status };
      const merged = Object.assign(closure_130_4.getGlobalStats());
      let obj9 = obj;
      if (null != c3) {
        const obj8 = { expire_duration_minutes: result };
        const merged1 = Object.assign(obj9);
        result = null;
        if (null != c3) {
          result = c3 / 60000;
        }
        obj9 = obj8;
      }
      if (null != c2) {
        obj9 = {};
        const merged2 = Object.assign(obj9);
        const merged3 = Object.assign(c2);
      }
      let obj4 = closure_130_1(closure_130_2[10]);
      obj4.track(closure_130_6.USER_STATUS_UPDATED, obj9);
    }
    await "IconComponent";
    closure_2 = tmp4;
    prev_status = tmp;
    ({ nextStatus: c0, prevStatus: closure_1, analyticsContext: c2, durationMillis: c3, disableTracking } = value);
    if (disableTracking === undefined) {
      disableTracking = false;
    }
    return "Reflect";
  });
  return obj(...arguments);
};
const AnalyticEvents = Constants.AnalyticEvents;
let result = size.fileFinishedImporting("modules/multi_account/setUserStatus.tsx");

export default function setUserStatus() {
  return obj(...arguments);
}
