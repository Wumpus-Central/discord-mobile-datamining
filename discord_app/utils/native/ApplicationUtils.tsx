// discord_app/utils/native/ApplicationUtils.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import fromStringAll from "../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import ME from "../../Constants.tsx";
import expandEventPropertiesDefault from "../AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../_runtime/02007_asyncRequireImpl.js";
import _modDef4090 from "../../lib/native/Linking.tsx";
import set from "../../../discord_common/js/shared/shared-constants/OAuth2Scopes.tsx";
import _modDef5260 from "../../actions/ModalActionCreators.tsx";
import OAUTH2_AUTHORIZE_MODAL_KEY from "../../modules/oauth2/native/Constants.tsx";
import authorizeCallbackDefault from "../../modules/oauth2/native/authorizeCallback.tsx";
import { asyncRequireImpl } from "../../../_runtime/02007_asyncRequireImpl.js";

const AnalyticEvents = ME.AnalyticEvents;
let closure_5 = OAUTH2_AUTHORIZE_MODAL_KEY.OAUTH2_AUTHORIZE_MODAL_KEY;
const result = obj132.fileFinishedImporting("utils/native/ApplicationUtils.tsx");

export const installApplication = function installApplication(arg0) {
  ({ applicationId, customInstallUrl } = arg0);
  let obj5 = customInstallUrl;
  ({ installParams, integrationTypesConfig, guildId, channelId, disableGuildSelect, source, oauth2Callback: importDefault } = arg0);
  if (null != customInstallUrl) {
    let obj = { application_id: null, auth_type: "custom_url", source: null, device_platform: "mobile_native" };
    obj[0] = applicationId;
    obj[2] = source;
    expandEventPropertiesDefault.track(AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, obj);
    obj = { href: null, onConfirm: null };
    obj[0] = customInstallUrl;
    obj[1] = function onConfirm() {
      _modDef4090.openURL(obj5);
    };
    return obj5(8775).handleClick(obj);
  } else {
    if (null != integrationTypesConfig) {
      const _Object = Object;
      const values = Object.values(integrationTypesConfig);
      if (values.some((item, index) => {
        let prop;
        if (item != null) {
          prop = item.oauth2_install_params;
        }
        let tmp2 = null != prop;
        if (!tmp2) {
          let oauth2InstallParams;
          if (item != null) {
            oauth2InstallParams = item.oauth2InstallParams;
          }
          tmp2 = null != oauth2InstallParams;
        }
        return tmp2;
      })) {
        let obj4 = expandEventPropertiesDefault;
        obj1 = { application_id: null, auth_type: "in_app", source: null, device_platform: "mobile_native" };
        obj1[0] = applicationId;
        obj1[2] = source;
        obj4.track(AnalyticEvents.APPLICATION_ADD_TO_SERVER_CLICKED, obj1);
        const obj2 = { clientId: null, guildId: null, channelId: null, disableGuildSelect: null, callback: null };
        obj2[0] = applicationId;
        obj2[1] = guildId;
        obj2[2] = channelId;
        obj2[3] = disableGuildSelect;
        obj2[4] = function callback(arg0) {
          authorizeCallbackDefault(arg0);
          if (null != callback) {
            callback(arg0);
          }
        };
        obj5 = obj2;
        _modDef5260.popWithKey(closure_5);
        const obj3 = {};
        const obj9 = _modDef5260;
        const merged = Object.assign(obj2);
        obj3.dismissOAuthModal = function dismissOAuthModal() {
          const dismissOAuthModal = obj5.dismissOAuthModal;
          if (dismissOAuthModal != null) {
            dismissOAuthModal();
          }
          _modDef5260.popWithKey(closure_1_5);
        };
        obj9.pushLazy(obj5(2007)(10766, dependencyMap.paths), obj3, closure_5);
        const tmp22 = obj5(2007)(10766, dependencyMap.paths);
      }
    }
    if (null != installParams) {
      obj4 = { application_id: null, auth_type: "in_app", source: null, device_platform: "mobile_native" };
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
        const deserializer = fromStringAll;
        let permissions1;
        if (installParams != null) {
          permissions1 = installParams.permissions;
        }
        deserializeResult = deserializer.deserialize(permissions1);
      }
      obj5[5] = deserializeResult;
      obj5[6] = function callback(arg0) {
        authorizeCallbackDefault(arg0);
        if (null != callback) {
          callback(arg0);
        }
      };
      let tmp32Result = _modDef5260;
      tmp32Result.popWithKey(closure_5);
      tmp32Result = _modDef5260;
      const obj6 = {};
      const merged1 = Object.assign(obj5);
      obj6.dismissOAuthModal = function dismissOAuthModal() {
        const dismissOAuthModal = obj5.dismissOAuthModal;
        if (dismissOAuthModal != null) {
          dismissOAuthModal();
        }
        _modDef5260.popWithKey(closure_1_5);
      };
      tmp32Result.pushLazy(obj5(2007)(10766, dependencyMap.paths), obj6, closure_5);
      const tmp10 = obj5(2007)(10766, dependencyMap.paths);
    }
  }
};
export const openOAuth2Modal = function openOAuth2Modal(arg0) {
  const _require = arg0;
  let obj = _modDef5260;
  obj.popWithKey(closure_5);
  obj = {};
  const obj2 = _modDef5260;
  const merged = Object.assign(arg0);
  obj.dismissOAuthModal = function dismissOAuthModal() {
    const dismissOAuthModal = obj5.dismissOAuthModal;
    if (dismissOAuthModal != null) {
      dismissOAuthModal();
    }
    _modDef5260.popWithKey(closure_1_5);
  };
  obj2.pushLazy(asyncRequireImpl(10766, dependencyMap.paths), obj, closure_5);
};
export const installPrivateChannelIntegration = function installPrivateChannelIntegration(arg0) {
  ({ applicationId, channelId, callback } = arg0);
  const obj = { clientId: applicationId, scopes: null, channelId: null, dismissOAuthModal: null, disableGuildSelect: true, callback: null };
  const items = [set.OAuth2Scopes.APPLICATIONS_COMMANDS];
  obj[1] = items;
  obj[2] = channelId;
  obj[3] = function dismissOAuthModal() {
    return callback(table[7]).popWithKey(closure_5);
  };
  obj[5] = callback;
  obj.pushLazy(asyncRequireImpl(10766, dependencyMap.paths), obj, closure_5);
};