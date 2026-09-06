// === Module 17869: SafetyFlowsActionCreators ===

// Module 17869 (SafetyFlowsActionCreators)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1250 */;
import TrackedHTTPUtilsDefault from "TrackedHTTPUtils" /* 4753 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_5 = async function _getCurrentTask() {
  closure_0 = tmp4;
  closure_128_0 = await TrackedHTTPUtilsDefault.get({ url: constants.SAFETY_FLOWS_TASK, trackedActionData: { event: discord_common_AnalyticsUtils.NetworkActionNames.USER_VERIFY }, rejectWithError: true });
  let body = null;
  if (204 !== closure_128_0.status) {
    body = closure_128_0.body;
  }
  return body;
};
let closure_6 = async function _completeTask(body) {
  c2 = 0;
  c1 = 0;
  return (async (arg0, value) => {
    const request = { url: constants.SAFETY_FLOWS_TASK, body, trackedActionData: { event: discord_common_AnalyticsUtils.NetworkActionNames.USER_VERIFY }, rejectWithError: true };
    await TrackedHTTPUtilsDefault.post(request);
    return value.body;
  })();
};
let closure_7 = async function _resendVerificationCode(flow_id) {
  c5 = 0;
  c6 = 0;
  c4 = 0;
  return (async (arg0, value) => {
    if (c6 === 2) {
      c6 = 3;
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
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_2 = tmp3;
            closure_1 = tmp7;
            c4 = 1;
            const request = { url: constants.SAFETY_FLOWS_RESEND_VERIFICATION_CODE, body: null, trackedActionData: null, rejectWithError: true };
            const obj1 = { flow_id };
            request.body = obj1;
            const obj2 = { event: discord_common_AnalyticsUtils.NetworkActionNames.USER_VERIFY };
            request.trackedActionData = obj2;
            c5 = 2;
            c6 = 1;
            const obj3 = { value: TrackedHTTPUtilsDefault.post(request), done: false };
            return obj3;
          }
        } else if (1 === tmp7) {
          c4 = 0;
          closure_129_0 = closure_3;
          const tmp17 = new closure_130_1(closure_130_2[4])(closure_129_0);
          throw tmp17;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          c4 = 0;
          c6 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp19) {
        closure_3 = tmp19;
        if (tmp4 === c4) {
          c6 = tmp2;
          throw tmp19;
        } else {
          c5 = tmp;
        }
      }
    }
  })();
};
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/safety_flows/SafetyFlowsActionCreators.tsx");

export const getCurrentTask = function getCurrentTask() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const completeTask = function completeTask() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const resendVerificationCode = function resendVerificationCode() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};