// discord_app/modules/verification/ChangeEmailActionCreators.tsx
import Constants from "../../Constants.tsx";
import discord_common_AnalyticsUtils from "../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import TrackedHTTPUtilsDefault from "../../utils/TrackedHTTPUtils.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../../_runtime/metro/00002__.js";

let obj = function _confirmEmailChange() {
  obj = _asyncToGenerator(async (code) => {
    let c2 = 0;
    let c1 = 0;
    return (async (arg0) => {
      let obj4;
      let obj5;
      const request = {
        url: constants.USER_EMAIL_VERIFY_CODE,
        body: obj4,
        trackedActionData: obj5,
        rejectWithError: false,
      };
      obj4 = { code };
      obj5 = { event: discord_common_AnalyticsUtils.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE };
      const post = TrackedHTTPUtilsDefault.post;
      TrackedHTTPUtilsDefault;
      await post(request);
      return value.body;
    })();
  });
  return obj(...arguments);
};
const Endpoints = Constants.Endpoints;
const result = size.fileFinishedImporting("modules/verification/ChangeEmailActionCreators.tsx");

export const sendConfirmationCode = function sendConfirmationCode() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  const obj2 = {
    url: Endpoints.USER_EMAIL,
    trackedActionData: {
      event: discord_common_AnalyticsUtils.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE,
      properties: { is_resend: flag },
    },
    rejectWithError: false,
  };
  obj = TrackedHTTPUtilsDefault;
  ({
    event: discord_common_AnalyticsUtils.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE,
    properties: { is_resend: flag },
  });
  return obj.put(obj2);
};
export const confirmEmailChange = function confirmEmailChange() {
  return obj(...arguments);
};
