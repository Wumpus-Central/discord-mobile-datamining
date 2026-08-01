// === Module 13589: ? ===

// Module 13589
import addApplication from "addApplication";
import ME from "ME";

let c4;
let c5;
let closure_6;
const require = arg1;
({ ComponentActions: c4, ApplicationFlags: c5, RPCErrors: closure_6 } = ME);
const tmp3 = require("authorizeWithPrompt")((arg0) => {
  let closure_10;
  let closure_11;
  let closure_12;
  let closure_13;
  let closure_14;
  let addApplication;
  let closure_4;
  let closure_5;
  let closure_6;
  let closure_7;
  let closure_8;
  let closure_9;
  let dependencyMap;
  let importDefault;
  let require;
  ({ clientId: require, authorizations: importDefault, scopes: dependencyMap, parsedPermissions: addApplication, responseType: closure_4, redirectUri: closure_5, codeChallenge: closure_6, codeChallengeMethod: closure_7, state: closure_8, guildId: closure_9, channelId: closure_10, prompt: closure_11, disableGuildSelect: closure_12, disclosures: closure_13, integrationType: closure_14 } = arg0);
  return new Promise((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let tmp2;
    if (null != closure_14) {
      let obj = closure_1;
      let value;
      if (closure_1 != null) {
        value = obj.get(tmp);
      }
      tmp2 = value;
    }
    let application;
    if (tmp2 != null) {
      application = tmp2.application;
    }
    if (application == null) {
      application = outer1_3.getApplication(closure_0);
    }
    obj = { clientId: closure_0, scopes: null, responseType: null, redirectUri: null, codeChallenge: null, codeChallengeMethod: null, state: null, guildId: null, channelId: null, permissions: null, prompt: null, disableGuildSelect: null, showLogout: false, callback: null, isEmbeddedFlow: null, disclosures: null, integrationType: null };
    let items = closure_2;
    if (closure_2 == null) {
      items = [];
    }
    obj[1] = items;
    obj[2] = closure_4;
    obj[3] = closure_5;
    obj[4] = closure_6;
    obj[5] = closure_7;
    obj[6] = closure_8;
    obj[7] = closure_9;
    obj[8] = closure_10;
    obj[9] = addApplication;
    obj[10] = closure_11;
    let tmp8 = closure_12;
    if (typeof closure_12 !== "T") {
      tmp8 = "true" === tmp7;
    }
    obj[11] = tmp8;
    obj[13] = function callback(location) {
      if (null != location.location) {
        callback(location.location);
      } else {
        const obj = { errorCode: null };
        obj[0] = outer1_6.OAUTH2_ERROR;
        const tmp8 = new callback2(outer1_2[2])(obj, "User cancelled authorization");
        callback2(tmp8);
      }
    };
    obj[14] = outer1_0(outer1_2[3]).hasApplicationFlag(application, outer1_5.EMBEDDED);
    obj[15] = closure_13;
    obj[16] = closure_14;
    const ComponentDispatch = outer1_0(outer1_2[4]).ComponentDispatch;
    ComponentDispatch.dispatch(outer1_4.SHOW_OAUTH2_MODAL, obj);
  });
}, function onAuthorizeValidationPassed() {

});
const result = require("prototype").fileFinishedImporting("modules/rpc/native/server/commands/auth.tsx");

export default tmp3;