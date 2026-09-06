// discord_app/modules/verification/ChangeEmailActionCreators.tsx
import discord_common_AnalyticsUtils from "../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import TrackedHTTPUtilsDefault from "../../utils/TrackedHTTPUtils.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
let closure_5 = async function _confirmEmailChange(code) {
  c2 = 0;
  c1 = 0;
  return (async (arg0, value) => {
    const request = {
      url: constants.USER_EMAIL_VERIFY_CODE,
      body: { code },
      trackedActionData: {
        event: discord_common_AnalyticsUtils.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE,
      },
      rejectWithError: false,
    };
    await TrackedHTTPUtilsDefault.post(request);
    return value.body;
  })();
};
const Endpoints = fn(1074).Endpoints;
const size = fn(2);
const result = size.fileFinishedImporting("modules/verification/ChangeEmailActionCreators.tsx");

export const sendConfirmationCode = function sendConfirmationCode() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let obj = { url: Endpoints.USER_EMAIL, trackedActionData: null, rejectWithError: false };
  obj = {
    event: discord_common_AnalyticsUtils.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE,
    properties: { is_resend: flag },
  };
  obj.trackedActionData = obj;
  return obj.put(obj);
};
export const confirmEmailChange = function confirmEmailChange() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
