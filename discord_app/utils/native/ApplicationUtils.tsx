// discord_app/utils/native/ApplicationUtils.tsx
import set from "../../../_runtime/00002_set.js";
import fromStringAll from "../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import ME from "../../Constants.tsx";
import expandEventPropertiesDefault from "../AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../_runtime/02009_asyncRequireImpl.js";
import _modDef4691 from "../../actions/ModalActionCreators.tsx";
import set2 from "../../../discord_common/js/shared/shared-constants/OAuth2Scopes.tsx";
import OAUTH2_AUTHORIZE_MODAL_KEY from "../../modules/oauth2/native/Constants.tsx";
import { asyncRequireImpl } from "../../../_runtime/02009_asyncRequireImpl.js";

const AnalyticEvents = ME.AnalyticEvents;
let closure_5 = OAUTH2_AUTHORIZE_MODAL_KEY.OAUTH2_AUTHORIZE_MODAL_KEY;
const result = set.fileFinishedImporting("utils/native/ApplicationUtils.tsx");

export const installApplication = function installApplication(arg0) {
  ({ applicationId, customInstallUrl } = arg0);
  let obj5 = customInstallUrl;
  ({ installParams, integrationTypesConfig, guildId, channelId, disableGuildSelect, source, oauth2Callback: importDefault } = arg0);
  if (null != customInstallUrl) {
    let obj = { application_id: null, auth_type: "custom_url", source: null, device_platform: "mobile_native" };
    obj[0] = applicationId;
    obj[2] = source;
    expandEventPropertiesDefault.track(AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, obj);
    const obj12 = expandEventPropertiesDefault;
    obj = { href: null, onConfirm: null };
    obj[0] = customInstallUrl;
    obj[1] = function onConfirm() {
      closure_1_1(closure_1_3[4]).openURL(obj5);
    };
    return obj5(8609).handleClick(obj);
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
        obj5 = expandEventPropertiesDefault;
        obj1 = { application_id: null, auth_type: "in_app", source: null, device_platform: "mobile_native" };
        obj1[0] = applicationId;
        obj1[2] = source;
        obj5.track(AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, obj1);
        const obj2 = { clientId: null, guildId: null, channelId: null, disableGuildSelect: null, callback: null };
        obj2[0] = applicationId;
        obj2[1] = guildId;
        obj2[2] = channelId;
        obj2[3] = disableGuildSelect;
        obj2[4] = function callback(arg0) {
          closure_1_1(closure_1_3[5])(arg0);
          if (null != callback) {
            callback(arg0);
          }
        };
        obj5 = obj2;
        _modDef4691.popWithKey(closure_5);
        const obj9 = _modDef4691;
        const obj3 = {};
        const obj10 = _modDef4691;
        const merged = Object.assign(obj2);
        obj3.dismissOAuthModal = function dismissOAuthModal() {
          const dismissOAuthModal = obj5.dismissOAuthModal;
          if (dismissOAuthModal != null) {
            dismissOAuthModal();
          }
          closure_1_1(closure_1_3[7]).popWithKey(closure_1_5);
        };
        obj10.pushLazy(obj5(2009)(9245, dependencyMap.paths), obj3, closure_5);
      }
    }
    if (null != installParams) {
      const obj4 = { application_id: null, auth_type: "in_app", source: null, device_platform: "mobile_native" };
      obj4[0] = applicationId;
      obj4[2] = source;
      expandEventPropertiesDefault.track(AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, obj4);
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
        obj1 = fromStringAll;
        let permissions1;
        if (installParams != null) {
          permissions1 = installParams.permissions;
        }
        deserializeResult = obj1.deserialize(permissions1);
      }
      obj5[5] = deserializeResult;
      obj5[6] = function callback(arg0) {
        closure_1_1(closure_1_3[5])(arg0);
        if (null != callback) {
          callback(arg0);
        }
      };
      let tmp32Result = tmp32(4691);
      tmp32Result.popWithKey(closure_5);
      tmp32Result = tmp32(4691);
      const obj6 = {};
      const obj16 = expandEventPropertiesDefault;
      const tmp33 = dependencyMap;
      const merged1 = Object.assign(obj5);
      obj6.dismissOAuthModal = function dismissOAuthModal() {
        const dismissOAuthModal = obj5.dismissOAuthModal;
        if (dismissOAuthModal != null) {
          dismissOAuthModal();
        }
        closure_1_1(closure_1_3[7]).popWithKey(closure_1_5);
      };
      tmp32Result.pushLazy(obj5(2009)(9245, dependencyMap.paths), obj6, closure_5);
      const tmp10 = obj5(2009)(9245, dependencyMap.paths);
    }
  }
};
export const openOAuth2Modal = function openOAuth2Modal(arg0) {
  const _require = arg0;
  let obj = _modDef4691;
  obj.popWithKey(closure_5);
  obj = {};
  const obj2 = _modDef4691;
  const merged = Object.assign(arg0);
  obj.dismissOAuthModal = function dismissOAuthModal() {
    const dismissOAuthModal = obj5.dismissOAuthModal;
    if (dismissOAuthModal != null) {
      dismissOAuthModal();
    }
    closure_1_1(closure_1_3[7]).popWithKey(closure_1_5);
  };
  obj2.pushLazy(asyncRequireImpl(9245, dependencyMap.paths), obj, closure_5);
};
export const installPrivateChannelIntegration = function installPrivateChannelIntegration(arg0) {
  ({ applicationId, channelId, callback } = arg0);
  let obj = _modDef4691;
  obj = { clientId: applicationId, scopes: null, channelId: null, dismissOAuthModal: null, disableGuildSelect: true, callback: null };
  const items = [set2.OAuth2Scopes.APPLICATIONS_COMMANDS];
  obj[1] = items;
  obj[2] = channelId;
  obj[3] = function dismissOAuthModal() {
    return callback(table[7]).popWithKey(closure_5);
  };
  obj[5] = callback;
  obj.pushLazy(asyncRequireImpl(9245, dependencyMap.paths), obj, closure_5);
};