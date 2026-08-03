import { AnalyticEvents } from "ME";
import { OAUTH2_AUTHORIZE_MODAL_KEY as closure_5 } from "OAUTH2_AUTHORIZE_MODAL_KEY";

const result = require("expandEventProperties").fileFinishedImporting("utils/native/ApplicationUtils.tsx");

export const installApplication = function installApplication(arg0) {
  let applicationId;
  let channelId;
  let customInstallUrl;
  let disableGuildSelect;
  let guildId;
  let importDefault;
  let installParams;
  let integrationTypesConfig;
  let source;
  ({ applicationId, customInstallUrl } = arg0);
  let obj5 = customInstallUrl;
  ({ installParams, integrationTypesConfig, guildId, channelId, disableGuildSelect, source, oauth2Callback: importDefault } = arg0);
  if (null != customInstallUrl) {
    let obj = { application_id: null, auth_type: "custom_url", source: null, device_platform: "mobile_native" };
    obj[0] = applicationId;
    obj[2] = source;
    importDefault(698).track(AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, obj);
    const obj12 = importDefault(698);
    obj = { href: null, onConfirm: null };
    obj[0] = customInstallUrl;
    obj[1] = function onConfirm() {
      outer1_1(outer1_3[4]).openURL(obj5);
    };
    return obj5(8511).handleClick(obj);
  } else {
    if (null != integrationTypesConfig) {
      const _Object = Object;
      const values = Object.values(integrationTypesConfig);
      if (values.some((oauth2_install_params) => {
        let prop;
        if (oauth2_install_params != null) {
          prop = oauth2_install_params.oauth2_install_params;
        }
        let tmp2 = null != prop;
        if (!tmp2) {
          let oauth2InstallParams;
          if (oauth2_install_params != null) {
            oauth2InstallParams = oauth2_install_params.oauth2InstallParams;
          }
          tmp2 = null != oauth2InstallParams;
        }
        return tmp2;
      })) {
        obj5 = importDefault(698);
        let obj1 = { application_id: null, auth_type: "in_app", source: null, device_platform: "mobile_native" };
        obj1[0] = applicationId;
        obj1[2] = source;
        obj5.track(AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, obj1);
        const obj2 = { clientId: null, guildId: null, channelId: null, disableGuildSelect: null, callback: null };
        obj2[0] = applicationId;
        obj2[1] = guildId;
        obj2[2] = channelId;
        obj2[3] = disableGuildSelect;
        obj2[4] = function callback(arg0) {
          outer1_1(outer1_3[5])(arg0);
          if (null != callback) {
            callback(arg0);
          }
        };
        obj5 = obj2;
        importDefault(4461).popWithKey(closure_5);
        const obj9 = importDefault(4461);
        const obj3 = {};
        const obj10 = importDefault(4461);
        const merged = Object.assign(obj2);
        obj3.dismissOAuthModal = function dismissOAuthModal() {
          const dismissOAuthModal = obj5.dismissOAuthModal;
          if (dismissOAuthModal != null) {
            dismissOAuthModal();
          }
          outer1_1(outer1_3[7]).popWithKey(outer1_5);
        };
        obj10.pushLazy(obj5(1959)(10173, dependencyMap.paths), obj3, closure_5);
      }
    }
    if (null != installParams) {
      const obj4 = { application_id: null, auth_type: "in_app", source: null, device_platform: "mobile_native" };
      obj4[0] = applicationId;
      obj4[2] = source;
      importDefault(698).track(AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, obj4);
      obj5 = { clientId: null, guildId: null, channelId: null, disableGuildSelect: null, scopes: null, permissions: null, callback: null };
      obj5[0] = applicationId;
      obj5[1] = guildId;
      obj5[2] = channelId;
      obj5[3] = disableGuildSelect;
      let scopes;
      if (installParams != null) {
        scopes = installParams.scopes;
      }
      obj5[4] = scopes;
      let permissions;
      if (installParams != null) {
        permissions = installParams.permissions;
      }
      let deserializeResult;
      if (null != permissions) {
        obj1 = importAll(506);
        let permissions1;
        if (installParams != null) {
          permissions1 = installParams.permissions;
        }
        deserializeResult = obj1.deserialize(permissions1);
      }
      obj5[5] = deserializeResult;
      obj5[6] = function callback(arg0) {
        outer1_1(outer1_3[5])(arg0);
        if (null != callback) {
          callback(arg0);
        }
      };
      let tmp32Result = tmp32(4461);
      tmp32Result.popWithKey(closure_5);
      tmp32Result = tmp32(4461);
      const obj6 = {};
      const obj16 = importDefault(698);
      const tmp33 = dependencyMap;
      const merged1 = Object.assign(obj5);
      obj6.dismissOAuthModal = function dismissOAuthModal() {
        const dismissOAuthModal = obj5.dismissOAuthModal;
        if (dismissOAuthModal != null) {
          dismissOAuthModal();
        }
        outer1_1(outer1_3[7]).popWithKey(outer1_5);
      };
      tmp32Result.pushLazy(obj5(1959)(10173, dependencyMap.paths), obj6, closure_5);
      const tmp10 = obj5(1959)(10173, dependencyMap.paths);
    }
  }
};
export const openOAuth2Modal = function openOAuth2Modal(arg0) {
  const _require = arg0;
  let obj = importDefault(4461);
  obj.popWithKey(closure_5);
  obj = {};
  const obj2 = importDefault(4461);
  const merged = Object.assign(arg0);
  obj.dismissOAuthModal = function dismissOAuthModal() {
    const dismissOAuthModal = obj5.dismissOAuthModal;
    if (dismissOAuthModal != null) {
      dismissOAuthModal();
    }
    outer1_1(outer1_3[7]).popWithKey(outer1_5);
  };
  obj2.pushLazy(_require(1959)(10173, dependencyMap.paths), obj, closure_5);
};
export const installPrivateChannelIntegration = function installPrivateChannelIntegration(arg0) {
  let applicationId;
  let callback;
  let channelId;
  ({ applicationId, channelId, callback } = arg0);
  let obj = importDefault(4461);
  obj = { clientId: applicationId, scopes: null, channelId: null, dismissOAuthModal: null, disableGuildSelect: true, callback: null };
  const items = [require(8485) /* set */.OAuth2Scopes.APPLICATIONS_COMMANDS];
  obj[1] = items;
  obj[2] = channelId;
  obj[3] = function dismissOAuthModal() {
    return callback(table[7]).popWithKey(closure_5);
  };
  obj[5] = callback;
  obj.pushLazy(require(1959) /* asyncRequireImpl */(10173, dependencyMap.paths), obj, closure_5);
};