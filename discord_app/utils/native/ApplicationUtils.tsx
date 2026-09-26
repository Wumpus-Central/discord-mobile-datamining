// discord_app/utils/native/ApplicationUtils.tsx
import Constants from "../../Constants.tsx";
import BigFlagUtilsAll from "../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import AnalyticsUtilsDefault from "../AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../_runtime/01981_asyncRequireImpl.js";
import LinkingDefault from "../../lib/native/Linking.tsx";
import ModalActionCreatorsDefault from "../../actions/ModalActionCreators.tsx";
import OAuth2Scopes from "../../../discord_common/js/shared/shared-constants/OAuth2Scopes.tsx";
import Constants2 from "../../modules/oauth2/native/Constants.tsx";
import authorizeCallbackDefault from "../../modules/oauth2/native/authorizeCallback.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const AnalyticEvents = Constants.AnalyticEvents;
let closure_5 = Constants2.OAUTH2_AUTHORIZE_MODAL_KEY;
const result = size.fileFinishedImporting("utils/native/ApplicationUtils.tsx");

export const installApplication = function installApplication(arg0) {
  ({ applicationId, customInstallUrl } = arg0);
  ({
    installParams,
    integrationTypesConfig,
    guildId,
    channelId,
    disableGuildSelect,
    source,
    oauth2Callback: importDefault,
  } = arg0);
  if (null != customInstallUrl) {
    const obj = { application_id: applicationId, auth_type: "custom_url", source, device_platform: "mobile_native" };
    AnalyticsUtilsDefault.track(AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, obj);
    const obj2 = {
      href: customInstallUrl,
      onConfirm() {
        LinkingDefault.openURL(customInstallUrl);
      },
    };
    return customInstallUrl(7818).handleClick(obj2);
  } else {
    if (null != integrationTypesConfig) {
      const _Object = Object;
      const values = Object.values(integrationTypesConfig);
      if (
        values.some((oauth2_install_params) => {
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
        })
      ) {
        const obj3 = { application_id: applicationId, auth_type: "in_app", source, device_platform: "mobile_native" };
        AnalyticsUtilsDefault.track(AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, obj3);
        const obj4 = {
          clientId: applicationId,
          guildId,
          channelId,
          disableGuildSelect,
          callback(arg0) {
            authorizeCallbackDefault(arg0);
            if (null != closure_1_1) {
              closure_1_1(arg0);
            }
          },
        };
        closure_130_0 = obj4;
        ModalActionCreatorsDefault.popWithKey(closure_5);
        const obj6 = {};
        const obj9 = ModalActionCreatorsDefault;
        const merged = Object.assign(obj4);
        obj6.dismissOAuthModal = function dismissOAuthModal() {
          const dismissOAuthModal = customInstallUrl.dismissOAuthModal;
          if (dismissOAuthModal != null) {
            dismissOAuthModal();
          }
          ModalActionCreatorsDefault.popWithKey(closure_5);
        };
        obj9.pushLazy(customInstallUrl(1981)(8513, dependencyMap.paths), obj6, closure_5);
        const tmp22 = customInstallUrl(1981)(8513, dependencyMap.paths);
      }
    }
    if (null != installParams) {
      const obj7 = { application_id: applicationId, auth_type: "in_app", source, device_platform: "mobile_native" };
      AnalyticsUtilsDefault.track(AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, obj7);
      const obj10 = {
        clientId: applicationId,
        guildId,
        channelId,
        disableGuildSelect,
        scopes: null,
        permissions: null,
        callback: null,
      };
      let scopes;
      if (installParams != null) {
        scopes = installParams.scopes;
      }
      obj10.scopes = scopes;
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
      obj10.permissions = deserializeResult;
      obj10.callback = function callback(arg0) {
        authorizeCallbackDefault(arg0);
        if (null != closure_1_1) {
          closure_1_1(arg0);
        }
      };
      closure_129_0 = obj10;
      ModalActionCreatorsDefault.popWithKey(closure_5);
      const tmp32Result = ModalActionCreatorsDefault;
      const obj12 = {};
      const tmp32Result2 = ModalActionCreatorsDefault;
      const merged1 = Object.assign(obj10);
      obj12.dismissOAuthModal = function dismissOAuthModal() {
        const dismissOAuthModal = customInstallUrl.dismissOAuthModal;
        if (dismissOAuthModal != null) {
          dismissOAuthModal();
        }
        ModalActionCreatorsDefault.popWithKey(closure_5);
      };
      tmp32Result2.pushLazy(customInstallUrl(1981)(8513, dependencyMap.paths), obj12, closure_5);
      const tmp10 = customInstallUrl(1981)(8513, dependencyMap.paths);
    }
  }
};
export const openOAuth2Modal = function openOAuth2Modal(arg0) {
  _require = arg0;
  ModalActionCreatorsDefault.popWithKey(closure_5);
  const obj3 = {};
  const obj2 = ModalActionCreatorsDefault;
  const merged = Object.assign(arg0);
  obj3.dismissOAuthModal = function dismissOAuthModal() {
    const dismissOAuthModal = customInstallUrl.dismissOAuthModal;
    if (dismissOAuthModal != null) {
      dismissOAuthModal();
    }
    ModalActionCreatorsDefault.popWithKey(closure_5);
  };
  obj2.pushLazy(require("asyncRequireImpl")(8513, dependencyMap.paths), obj3, closure_5);
};
export const installPrivateChannelIntegration = function installPrivateChannelIntegration(arg0) {
  ({ applicationId, channelId, callback } = arg0);
  const obj2 = {
    clientId: applicationId,
    scopes: null,
    channelId: null,
    dismissOAuthModal: null,
    disableGuildSelect: true,
    callback: null,
  };
  const obj = ModalActionCreatorsDefault;
  const items = [OAuth2Scopes.OAuth2Scopes.APPLICATIONS_COMMANDS];
  obj2.scopes = items;
  obj2.channelId = channelId;
  obj2.dismissOAuthModal = function dismissOAuthModal() {
    return ModalActionCreatorsDefault.popWithKey(closure_1_5);
  };
  obj2.callback = callback;
  obj.pushLazy(asyncRequireImpl(8513, dependencyMap.paths), obj2, closure_5);
};
