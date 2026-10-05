// discord_app/utils/native/ApplicationUtils.tsx
import Constants from "../../Constants.tsx";
import BigFlagUtilsAll from "../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import AnalyticsUtilsDefault from "../AnalyticsUtils.tsx";
import asyncRequire from "../../../_runtime/01987_asyncRequire.js";
import LinkingDefault from "../../lib/native/Linking.tsx";
import ModalActionCreatorsDefault from "../../actions/ModalActionCreators.tsx";
import OAuth2Scopes from "../../../discord_common/js/shared/shared-constants/OAuth2Scopes.tsx";
import Constants2 from "../../modules/oauth2/native/Constants.tsx";
import authorizeCallbackDefault from "../../modules/oauth2/native/authorizeCallback.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const AnalyticEvents = Constants.AnalyticEvents;
let closure_5 = Constants2.OAUTH2_AUTHORIZE_MODAL_KEY;
const result = size.fileFinishedImporting("utils/native/ApplicationUtils.tsx");

export const installApplication = function installApplication(arg0) {
  let applicationId;
  let channelId;
  let customInstallUrl;
  let deserializeResult;
  let disableGuildSelect;
  let guildId;
  let installParams;
  let integrationTypesConfig;
  let scopes;
  let source;
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
    let obj = { application_id: applicationId, auth_type: "custom_url", source, device_platform: "mobile_native" };
    const obj9 = AnalyticsUtilsDefault;
    obj9.track(AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, obj);
    const obj2 = {
      href: customInstallUrl,
      onConfirm() {
        const obj = LinkingDefault;
        obj.openURL(customInstallUrl);
      },
    };
    const obj11 = customInstallUrl(8047);
    return obj11.handleClick(obj2);
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
        const obj4 = AnalyticsUtilsDefault;
        obj4.track(AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, obj3);
        const obj5 = {
          clientId: applicationId,
          guildId,
          channelId,
          disableGuildSelect,
          callback(arg0) {
            authorizeCallbackDefault(arg0);
            if (null != importDefault) {
              importDefault(arg0);
            }
          },
        };
        const obj7 = ModalActionCreatorsDefault;
        obj7.popWithKey(closure_5);
        const pushLazy2 = ModalActionCreatorsDefault.pushLazy;
        const obj6 = {
          dismissOAuthModal() {
            const dismissOAuthModal = obj5.dismissOAuthModal;
            if (dismissOAuthModal != null) {
              dismissOAuthModal();
            }
            const obj = ModalActionCreatorsDefault;
            obj.popWithKey(closure_2_5);
          },
        };
        ModalActionCreatorsDefault;
        const tmp25 = customInstallUrl(1987)(8716, dependencyMap.paths);
        const merged = Object.assign(obj5);
        pushLazy2(tmp25, obj6, closure_5);
      }
    }
    if (null != installParams) {
      const obj8 = { application_id: applicationId, auth_type: "in_app", source, device_platform: "mobile_native" };
      const obj13 = AnalyticsUtilsDefault;
      obj13.track(AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, obj8);
      const obj10 = {
        clientId: applicationId,
        guildId,
        channelId,
        disableGuildSelect,
        scopes,
        permissions: deserializeResult,
        callback(arg0) {
          authorizeCallbackDefault(arg0);
          if (null != importDefault) {
            importDefault(arg0);
          }
        },
      };
      scopes = undefined;
      if (installParams != null) {
        scopes = installParams.scopes;
      }
      let permissions;
      if (installParams != null) {
        permissions = installParams.permissions;
      }
      deserializeResult = undefined;
      if (null != permissions) {
        let permissions1;
        const deserialize = BigFlagUtilsAll.deserialize;
        BigFlagUtilsAll;
        if (installParams != null) {
          permissions1 = installParams.permissions;
        }
        deserializeResult = deserialize(permissions1);
      }
      const tmp35Result = ModalActionCreatorsDefault;
      tmp35Result.popWithKey(closure_5);
      const pushLazy = ModalActionCreatorsDefault.pushLazy;
      const obj12 = {
        dismissOAuthModal() {
          const dismissOAuthModal = obj5.dismissOAuthModal;
          if (dismissOAuthModal != null) {
            dismissOAuthModal();
          }
          const obj = ModalActionCreatorsDefault;
          obj.popWithKey(closure_2_5);
        },
      };
      ModalActionCreatorsDefault;
      const tmp12 = customInstallUrl(1987)(8716, dependencyMap.paths);
      const merged1 = Object.assign(obj10);
      pushLazy(tmp12, obj12, closure_5);
    }
  }
};
export const openOAuth2Modal = function openOAuth2Modal(arg0) {
  let closure_0;
  _require = arg0;
  const obj = ModalActionCreatorsDefault;
  obj.popWithKey(closure_5);
  const pushLazy = ModalActionCreatorsDefault.pushLazy;
  const obj2 = {
    dismissOAuthModal() {
      const dismissOAuthModal = obj5.dismissOAuthModal;
      if (dismissOAuthModal != null) {
        dismissOAuthModal();
      }
      const obj = ModalActionCreatorsDefault;
      obj.popWithKey(closure_2_5);
    },
  };
  ModalActionCreatorsDefault;
  const tmp3 = require("asyncRequire")(8716, dependencyMap.paths);
  const merged = Object.assign(arg0);
  pushLazy(tmp3, obj2, closure_5);
};
export const installPrivateChannelIntegration = function installPrivateChannelIntegration(arg0) {
  let applicationId;
  let callback;
  let channelId;
  let items;
  ({ applicationId, channelId, callback } = arg0);
  const pushLazy = ModalActionCreatorsDefault.pushLazy;
  let obj = {
    clientId: applicationId,
    scopes: items,
    channelId,
    dismissOAuthModal() {
      const obj = ModalActionCreatorsDefault;
      return obj.popWithKey(closure_1_5);
    },
    disableGuildSelect: true,
    callback,
  };
  ModalActionCreatorsDefault;
  items = [];
  const tmp2 = asyncRequire(8716, dependencyMap.paths);
  items[0] = OAuth2Scopes.OAuth2Scopes.APPLICATIONS_COMMANDS;
  pushLazy(tmp2, obj, closure_5);
};
