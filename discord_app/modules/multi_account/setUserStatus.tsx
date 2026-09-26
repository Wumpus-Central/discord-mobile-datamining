// discord_app/modules/multi_account/setUserStatus.tsx
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import LastMentionTimestampStore from "../notifications/LastMentionTimestampStore.tsx";
import SelfPresenceStore from "../../stores/SelfPresenceStore.tsx";

const require = fn;
let closure_7 = async function _setUserStatus() {
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
  const PreloadedUserSettingsActionCreators = closure_130_0(closure_130_2[7]).PreloadedUserSettingsActionCreators;
  await PreloadedUserSettingsActionCreators.updateAsync(
    "status",
    async (statusCreatedAtMs) => {
      const StringValue = value(1217).StringValue;
      statusCreatedAtMs.status = StringValue.create({ value });
      statusCreatedAtMs.statusExpiresAtMs = statusExpiresAtMs;
      if (closure_1_1 === value) {
        if (null != statusCreatedAtMs.statusCreatedAtMs) {
          statusCreatedAtMs = statusCreatedAtMs.statusCreatedAtMs;
        }
        statusCreatedAtMs.statusCreatedAtMs = statusCreatedAtMs;
      }
      const UInt64Value = value(1217).UInt64Value;
      statusCreatedAtMs = UInt64Value.create({ value: "" + Date.now() });
      const obj = { value };
      const obj2 = { value: "" + Date.now() };
    },
    closure_130_0(closure_130_2[7]).UserSettingsDelay.INFREQUENT_USER_ACTION,
  );
  closure_129_6 = (function getStatusUpdateAnnouncement(DND, arg1) {
    const humanizeStatusResult = value(4678).humanizeStatus(DND);
    if ("0" === arg1) {
      const intl3 = value(1115).intl;
      const obj2 = { statusLabel: humanizeStatusResult };
      return intl3.formatToPlainString(value(1115).t.dO2aLi, obj2);
    } else {
      const statusExpiryParts = value(9552).getStatusExpiryParts(arg1);
      const timeString = statusExpiryParts.timeString;
      if ("today" === statusExpiryParts.kind) {
        const intl2 = value(1115).intl;
        const obj3 = { statusLabel: humanizeStatusResult, timeString };
        let formatToPlainStringResult = intl2.formatToPlainString(value(1115).t["r50t/S"], obj3);
      } else {
        const intl = value(1115).intl;
        const obj4 = { statusLabel: humanizeStatusResult, dateString: tmp6, timeString };
        formatToPlainStringResult = intl.formatToPlainString(value(1115).t["J+GJHv"], obj4);
      }
      return formatToPlainStringResult;
    }
    const obj = value(4678);
  })(closure_129_0, closure_129_5);
  const AccessibilityAnnouncer = closure_130_0(closure_130_2[9]).AccessibilityAnnouncer;
  AccessibilityAnnouncer.announce(closure_129_6);
  if (!closure_129_4) {
    const merged = Object.assign(closure_130_4.getGlobalStats());
    closure_129_7 = { next_status: closure_129_0, prev_status: status };
    if (null != closure_129_3) {
      const obj8 = {};
      const merged1 = Object.assign(closure_129_7);
      let result = null;
      if (null != closure_129_3) {
        result = closure_129_3 / 60000;
      }
      obj8.expire_duration_minutes = result;
      closure_129_7 = obj8;
    }
    if (null != closure_129_2) {
      const merged2 = Object.assign(closure_129_7);
      const merged3 = Object.assign(closure_129_2);
      closure_129_7 = {};
    }
    closure_130_1(closure_130_2[10]).track(closure_130_6.USER_STATUS_UPDATED, closure_129_7);
    closure_130_1(closure_130_2[10]);
  }
  await "HermesInternal";
  closure_1 = tmp2;
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
  return "flex";
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
