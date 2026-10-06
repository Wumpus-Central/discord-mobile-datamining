// === Module 14375: auth ===

// Module 14375 (auth)
import ComponentDispatchUtils from "ComponentDispatchUtils" /* 1121 */;
import EmbeddedSurfaceUtils from "EmbeddedSurfaceUtils" /* 2016 */;
import AuthCommandsFactoryDefault from "AuthCommandsFactory" /* 14376 */;
import ApplicationStore from "ApplicationStore" /* 5124 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let importDefault;

let closure_4;
let hasOwnProperty;
({ ComponentActions: closure_4, RPCErrors: hasOwnProperty } = Constants);
const tmp3 = AuthCommandsFactoryDefault((arg0) => {
  let _prompt;
  let channelId;
  let clientId;
  let closure_10;
  let closure_11;
  let closure_13;
  let closure_14;
  let closure_4;
  let closure_5;
  let closure_6;
  let closure_7;
  let closure_8;
  let closure_9;
  let codeChallenge;
  let codeChallengeMethod;
  let disclosures;
  let guildId;
  let integrationType;
  let permissions;
  let redirectUri;
  let responseType;
  let state;
  ({ clientId: require, authorizations: importDefault, scopes: dependencyMap, parsedPermissions: ApplicationStore, responseType: closure_4, redirectUri: closure_5, codeChallenge: closure_6, codeChallengeMethod: closure_7, state: closure_8, guildId: closure_9, channelId: closure_10, prompt: closure_11, disableGuildSelect: closure_12, disclosures: closure_13, integrationType: closure_14 } = arg0);
  const promise = new Promise((arg0, arg1) => {
    let OAUTH2_ERROR;
    let items;
    let obj3;
    let tmp8;
    let closure_0 = arg0;
    importDefault = arg1;
    let tmp2;
    if (null != integrationType) {
      let obj = importDefault;
      let value;
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
      application = ApplicationStore.getApplication(require);
    }
    const obj2 = {
      clientId: require,
      scopes: items,
      responseType,
      redirectUri,
      codeChallenge,
      codeChallengeMethod,
      state,
      guildId,
      channelId,
      permissions: ApplicationStore,
      prompt: _prompt,
      disableGuildSelect: tmp8,
      showLogout: false,
      callback(location) {
        if (null != location.location) {
          closure_0(location.location);
        } else {
          const self = this;
          const self2 = this;
          const obj = { errorCode: OAUTH2_ERROR.OAUTH2_ERROR };
          const tmp6 = new closure_2_1(closure_2_2[2])(obj, "User cancelled authorization");
          closure_1(tmp6);
        }
      },
      isEmbeddedFlow: obj3.isEmbeddedApplication(application),
      disclosures,
      integrationType
    };
    items = dependencyMap;
    if (dependencyMap == null) {
      items = [];
    }
    tmp8 = closure_12;
    if (typeof closure_12 !== "boolean") {
      tmp8 = "true" === tmp7;
    }
    obj3 = EmbeddedSurfaceUtils;
    const ComponentDispatch = ComponentDispatchUtils.ComponentDispatch;
    ComponentDispatch.dispatch(responseType.SHOW_OAUTH2_MODAL, obj2);
  });
  return promise;
}, function onAuthorizeValidationPassed() {

});
const result = size.fileFinishedImporting("modules/rpc/native/server/commands/auth.tsx");

export default tmp3;