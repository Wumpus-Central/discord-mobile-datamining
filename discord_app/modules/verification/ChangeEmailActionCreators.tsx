// === Module 7647: _confirmEmailChange ===

// Module 7647 (_confirmEmailChange)
import encodeProperties from "encodeProperties" /* 503 */;
import _modDef4679 from "module_4679" /* 4679 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import { Endpoints } from "ME" /* 676 */;

require = arg1;
function _confirmEmailChange() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c2 = 0;
    c1 = 0;
    return (function*(arg0, body) {
      const obj5 = v0(4679);
      obj1 = { url: null, body: null, trackedActionData: null, rejectWithError: false };
      obj1[0] = closure_1_4.USER_EMAIL_VERIFY_CODE;
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
  closure_5 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("set").fileFinishedImporting("modules/verification/ChangeEmailActionCreators.tsx");

export const sendConfirmationCode = function sendConfirmationCode() {
  let flag = arg0;
  if (arg0 === undefined) {
    flag = false;
  }
  let obj = _modDef4679;
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