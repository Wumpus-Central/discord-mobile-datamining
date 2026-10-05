// discord_app/modules/safety_flows/SafetyFlowsActionCreators.tsx
import Constants from "../../Constants.tsx";
import discord_common_AnalyticsUtils from "../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import TrackedHTTPUtilsDefault from "../../utils/TrackedHTTPUtils.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../../_runtime/metro/00002__.js";

let closure_1, closure_2, closure_3, flow_id;

let obj = function _getCurrentTask() {
  obj = _asyncToGenerator(async () => {
    let c1;
    let c2;
    let closure_0;
    let obj5;
    const obj4 = { url: constants.SAFETY_FLOWS_TASK, trackedActionData: obj5, rejectWithError: true };
    obj5 = { event: discord_common_AnalyticsUtils.NetworkActionNames.USER_VERIFY };
    const get = TrackedHTTPUtilsDefault.get;
    await get(obj4);
    const tmp3 = value;
    let body = null;
    if (204 !== tmp3.status) {
      body = tmp3.body;
    }
    return body;
  });
  return obj(...arguments);
};
obj = function _completeTask() {
  obj = _asyncToGenerator(async (body) => {
    let c2 = 0;
    let c1 = 0;
    return (async (arg0) => {
      let obj4;
      const request = { url: constants.SAFETY_FLOWS_TASK, body, trackedActionData: obj4, rejectWithError: true };
      obj4 = { event: discord_common_AnalyticsUtils.NetworkActionNames.USER_VERIFY };
      const post = TrackedHTTPUtilsDefault.post;
      TrackedHTTPUtilsDefault;
      await post(request);
      return value.body;
    })();
  });
  return obj(...arguments);
};
obj = function _resendVerificationCode() {
  obj = _asyncToGenerator(async (flow_id) => {
    let c5 = 0;
    let c6 = 0;
    let c4 = 0;
    return (async function (arg0) {
      let obj4;
      let obj5;
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
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
              return { value, done: true };
            } else {
              closure_2 = tmp;
              closure_1 = tmp4;
              c4 = 1;
              const request = {
                url: constants.SAFETY_FLOWS_RESEND_VERIFICATION_CODE,
                body: obj4,
                trackedActionData: obj5,
                rejectWithError: true,
              };
              obj4 = { flow_id };
              obj5 = { event: discord_common_AnalyticsUtils.NetworkActionNames.USER_VERIFY };
              const post = TrackedHTTPUtilsDefault.post;
              TrackedHTTPUtilsDefault;
              c5 = 2;
              c6 = 1;
              const obj6 = { value: post(request), done: false };
              return obj6;
            }
          } else if (1 === c5) {
            c4 = 0;
            flow_id = closure_3;
            const self = this;
            const self2 = this;
            const tmp12 = new closure_130_1(closure_130_2[4])(flow_id);
            throw tmp12;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 0;
            c6 = 3;
            return { value, done: true };
          } else {
            c4 = 0;
            c6 = 3;
            return { value, done: true };
          }
        } catch (tmp14) {
          closure_3 = tmp14;
          if (0 === c4) {
            c6 = 3;
            throw tmp14;
          } else {
            c5 = 1;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/safety_flows/SafetyFlowsActionCreators.tsx");

export const getCurrentTask = function getCurrentTask() {
  return obj(...arguments);
};
export const completeTask = function completeTask() {
  return obj(...arguments);
};
export const resendVerificationCode = function resendVerificationCode() {
  return obj(...arguments);
};
