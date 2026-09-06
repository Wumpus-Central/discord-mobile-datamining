// === Module 9573: ApplicationUtils ===

// Module 9573 (ApplicationUtils)
import Constants from "Constants" /* 1074 */;
import BigFlagUtilsAll from "BigFlagUtils" /* 1086 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import LinkingDefault from "Linking" /* 4255 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4763 */;
import OAuth2Scopes from "OAuth2Scopes" /* 8339 */;
import Constants2 from "Constants" /* 9574 */;
import authorizeCallbackDefault from "authorizeCallback" /* 9575 */;
import size from "module_2" /* 2 */;

const AnalyticEvents = Constants.AnalyticEvents;
let closure_5 = Constants2.OAUTH2_AUTHORIZE_MODAL_KEY;
const result = size.fileFinishedImporting("utils/native/ApplicationUtils.tsx");

export const installApplication = function installApplication(arg0) {
  ({ applicationId, customInstallUrl } = arg0);
  ({ installParams, integrationTypesConfig, guildId, channelId, disableGuildSelect, source, oauth2Callback: importDefault } = arg0);
  if (null != customInstallUrl) {
    let obj = { application_id: applicationId, auth_type: "custom_url", source, device_platform: "mobile_native" };
    AnalyticsUtilsDefault.track(AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, obj);
    obj = {
      href: customInstallUrl,
      onConfirm() {
          LinkingDefault.openURL(customInstallUrl);
        }
    };
    return customInstallUrl(8370).handleClick(obj);
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
        let obj4 = AnalyticsUtilsDefault;
        const obj1 = { application_id: applicationId, auth_type: "in_app", source, device_platform: "mobile_native" };
        obj4.track(AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, obj1);
        const obj2 = {
          clientId: applicationId,
          guildId,
          channelId,
          disableGuildSelect,
          callback(arg0) {
                  authorizeCallbackDefault(arg0);
                  if (null != closure_1_1) {
                    closure_1_1(arg0);
                  }
                }
        };
        closure_130_0 = obj2;
        ModalActionCreatorsDefault.popWithKey(closure_5);
        const obj3 = {};
        const obj9 = ModalActionCreatorsDefault;
        const merged = Object.assign(obj2);
        obj3.dismissOAuthModal = function dismissOAuthModal() {
          const dismissOAuthModal = customInstallUrl.dismissOAuthModal;
          if (dismissOAuthModal != null) {
            dismissOAuthModal();
          }
          ModalActionCreatorsDefault.popWithKey(closure_5);
        };
        obj9.pushLazy(customInstallUrl(1896)(9578, dependencyMap.paths), obj3, closure_5);
      }
    }
    if (null != installParams) {
      obj4 = { application_id: applicationId, auth_type: "in_app", source, device_platform: "mobile_native" };
      AnalyticsUtilsDefault.track(AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, obj4);
      const obj5 = { clientId: applicationId, guildId, channelId, disableGuildSelect, scopes: null, permissions: null, callback: null };
      let scopes;
      if (installParams != null) {
        scopes = installParams.scopes;
      }
      obj5.scopes = scopes;
      let permissions;
      if (installParams != null) {
        permissions = installParams.permissions;
      }
      let deserializeResult;
      if (null != permissions) {
        const deserializer = BigFlagUtilsAll;
        let permissions1;
        if (installParams != null) {
          permissions1 = installParams.permissions;
        }
        deserializeResult = deserializer.deserialize(permissions1);
      }
      obj5.permissions = deserializeResult;
      obj5.callback = function callback(arg0) {
        authorizeCallbackDefault(arg0);
        if (null != closure_1_1) {
          closure_1_1(arg0);
        }
      };
      closure_129_0 = obj5;
      let tmp32Result = tmp32(4763);
      tmp32Result.popWithKey(closure_5);
      tmp32Result = tmp32(4763);
      const obj6 = {};
      const merged1 = Object.assign(obj5);
      obj6.dismissOAuthModal = function dismissOAuthModal() {
        const dismissOAuthModal = customInstallUrl.dismissOAuthModal;
        if (dismissOAuthModal != null) {
          dismissOAuthModal();
        }
        ModalActionCreatorsDefault.popWithKey(closure_5);
      };
      tmp32Result.pushLazy(customInstallUrl(1896)(9578, dependencyMap.paths), obj6, closure_5);
      const tmp10 = customInstallUrl(1896)(9578, dependencyMap.paths);
    }
  }
};
export const openOAuth2Modal = function openOAuth2Modal(arg0) {
  _require = arg0;
  let obj = ModalActionCreatorsDefault;
  obj.popWithKey(closure_5);
  obj = {};
  const obj2 = ModalActionCreatorsDefault;
  const merged = Object.assign(arg0);
  obj.dismissOAuthModal = function dismissOAuthModal() {
    const dismissOAuthModal = customInstallUrl.dismissOAuthModal;
    if (dismissOAuthModal != null) {
      dismissOAuthModal();
    }
    ModalActionCreatorsDefault.popWithKey(closure_5);
  };
  obj2.pushLazy(require("asyncRequireImpl")(9578, dependencyMap.paths), obj, closure_5);
};
export const installPrivateChannelIntegration = function installPrivateChannelIntegration(arg0) {
  ({ applicationId, channelId, callback } = arg0);
  const obj = { clientId: applicationId, scopes: null, channelId: null, dismissOAuthModal: null, disableGuildSelect: true, callback: null };
  const items = [OAuth2Scopes.OAuth2Scopes.APPLICATIONS_COMMANDS];
  obj.scopes = items;
  obj.channelId = channelId;
  obj.dismissOAuthModal = function dismissOAuthModal() {
    return ModalActionCreatorsDefault.popWithKey(closure_1_5);
  };
  obj.callback = callback;
  obj.pushLazy(asyncRequireImpl(9578, dependencyMap.paths), obj, closure_5);
};