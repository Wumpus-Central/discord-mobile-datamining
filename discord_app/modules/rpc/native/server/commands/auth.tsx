// === Module 14407: ? ===

// Module 14407
import authorizeWithPromptDefault from "authorizeWithPrompt" /* 14408 */;
import closure_3 from "addApplication" /* 4519 */;
import ME from "ME" /* 673 */;

const require = arg1;
({ ComponentActions: c4, ApplicationFlags: c5, RPCErrors: closure_6 } = ME);
const tmp3 = authorizeWithPromptDefault((arg0) => {
  ({ clientId: require, authorizations: importDefault, scopes: dependencyMap, parsedPermissions: closure_3, responseType: closure_4, redirectUri: closure_5, codeChallenge: closure_6, codeChallengeMethod: closure_7, state: closure_8, guildId: closure_9, channelId: closure_10, prompt: closure_11, disableGuildSelect: closure_12, disclosures: closure_13, integrationType: closure_14 } = arg0);
  return new Promise((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
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
      application = closure_1_3.getApplication(closure_0);
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
    obj[9] = closure_3;
    obj[10] = closure_11;
    let tmp8 = closure_12;
    if (typeof closure_12 !== "boolean") {
      tmp8 = "true" === tmp7;
    }
    obj[11] = tmp8;
    obj[13] = function callback(location) {
      if (null != location.location) {
        callback(location.location);
      } else {
        const obj = { errorCode: null };
        obj[0] = closure_1_6.OAUTH2_ERROR;
        const tmp8 = new callback2(closure_1_2[2])(obj, "User cancelled authorization");
        callback2(tmp8);
      }
    };
    obj[14] = closure_1_0(closure_1_2[3]).hasApplicationFlag(application, closure_1_5.EMBEDDED);
    obj[15] = closure_13;
    obj[16] = closure_14;
    const ComponentDispatch = closure_1_0(closure_1_2[4]).ComponentDispatch;
    ComponentDispatch.dispatch(closure_1_4.SHOW_OAUTH2_MODAL, obj);
  });
}, function onAuthorizeValidationPassed() {

});
const result = require("set").fileFinishedImporting("modules/rpc/native/server/commands/auth.tsx");

export default tmp3;