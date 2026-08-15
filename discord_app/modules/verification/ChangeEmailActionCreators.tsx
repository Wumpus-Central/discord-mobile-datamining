// discord_app/modules/verification/ChangeEmailActionCreators.tsx
import asyncGeneratorStep from "asyncGeneratorStep";
import { Endpoints } from "ME";
import { encodeProperties } from "../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import { TrackedHTTPUtils } from "../../utils/TrackedHTTPUtils.tsx";

const require = arg1;
function _confirmEmailChange() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c2 = 0;
    let c1 = 0;
    return (function*(arg0, body) {
      const obj5 = v0(5227);
      const obj1 = { url: null, body: null, trackedActionData: null, rejectWithError: false };
      obj1[0] = outer1_4.USER_EMAIL_VERIFY_CODE;
      const obj2 = { code: null };
      obj2[0] = callback;
      obj1[1] = obj2;
      const obj3 = { event: null };
      obj3[0] = callback(503).NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_VERIFY_CODE;
      obj1[2] = obj3;
      yield obj5.post(obj1);
      return body.body;
    })();
  });
  const _confirmEmailChange = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("module_5227").fileFinishedImporting("modules/verification/ChangeEmailActionCreators.tsx");

export const sendConfirmationCode = function sendConfirmationCode() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let obj = TrackedHTTPUtils;
  obj = { url: Endpoints.USER_EMAIL, trackedActionData: null, rejectWithError: false };
  obj = { event: encodeProperties.NetworkActionNames.USER_ACCOUNT_EMAIL_CHANGE_SEND_CODE, properties: { is_resend: flag } };
  obj[1] = obj;
  return obj.put(obj);
};
export const confirmEmailChange = function confirmEmailChange(closure_0) {
  const self = this;
  const apply = _confirmEmailChange.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};