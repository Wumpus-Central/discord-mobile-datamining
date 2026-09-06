// === Module 14514: auth ===

// Module 14514 (auth)
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1109 */;
import ApplicationFlagUtils from "ApplicationFlagUtils" /* 8856 */;
import RPCErrorDefault from "RPCError" /* 9554 */;
import AuthCommandsFactoryDefault from "AuthCommandsFactory" /* 14515 */;
import ApplicationStore from "ApplicationStore" /* 4788 */;

require = fn;
const Constants = fn(1074);
({ ComponentActions: closure_4, ApplicationFlags: hasOwnProperty, RPCErrors: metroRequire } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/rpc/native/server/commands/auth.tsx");

export default AuthCommandsFactoryDefault((arg0) => {
  ({ clientId: require, authorizations: importDefault, scopes: dependencyMap, parsedPermissions: ApplicationStore, responseType: closure_4, redirectUri: closure_5, codeChallenge: closure_6, codeChallengeMethod: closure_7, state: closure_8, guildId: closure_9, channelId: closure_10, prompt: closure_11, disableGuildSelect: closure_12, disclosures: closure_13, integrationType: closure_14 } = arg0);
  return new Promise((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    let tmp2;
    if (null != integrationType) {
      let obj = importDefault;
      value = undefined;
      if (importDefault != null) {
        value = obj.get(integrationType);
      }
      tmp2 = value;
    }
    let application;
    if (tmp2 != null) {
      application = tmp2.application;
    }
    if (application == null) {
      application = ApplicationStore.getApplication(clientId);
    }
    obj = { clientId, scopes: null, responseType: null, redirectUri: null, codeChallenge: null, codeChallengeMethod: null, state: null, guildId: null, channelId: null, permissions: null, prompt: null, disableGuildSelect: null, showLogout: false, callback: null, isEmbeddedFlow: null, disclosures: null, integrationType: null };
    let items = dependencyMap;
    if (dependencyMap == null) {
      items = [];
    }
    obj.scopes = items;
    obj.responseType = responseType;
    obj.redirectUri = redirectUri;
    obj.codeChallenge = codeChallenge;
    obj.codeChallengeMethod = codeChallengeMethod;
    obj.state = state;
    obj.guildId = guildId;
    obj.channelId = channelId;
    obj.permissions = permissions;
    obj.prompt = _prompt;
    let tmp8 = closure_1_12;
    if (typeof closure_1_12 !== "boolean") {
      tmp8 = "true" === tmp7;
    }
    obj.disableGuildSelect = tmp8;
    obj.callback = function callback(location) {
      if (null != location.location) {
        closure_0(location.location);
      } else {
        const obj = { errorCode: codeChallenge.OAUTH2_ERROR };
        const tmp8 = new RPCErrorDefault(obj, "User cancelled authorization");
        closure_1(tmp8);
      }
    };
    obj.isEmbeddedFlow = ApplicationFlagUtils.hasApplicationFlag(application, constants.EMBEDDED);
    obj.disclosures = disclosures;
    obj.integrationType = integrationType;
    const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
    ComponentDispatch.dispatch(SHOW_OAUTH2_MODAL.SHOW_OAUTH2_MODAL, obj);
  });
}, function onAuthorizeValidationPassed() {

});