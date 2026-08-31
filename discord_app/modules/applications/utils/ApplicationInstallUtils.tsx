// === Module 8413: canInstallApplication ===

// Module 8413 (canInstallApplication)
import ApplicationIntegrationType from "ApplicationIntegrationType" /* 8401 */;
import closure_2 from "getIndexKey" /* 8114 */;
import { BuiltInSectionId } from "TRUE_OPTION_NAME" /* 4920 */;

require = arg1;
let result = require("set").fileFinishedImporting("modules/applications/utils/ApplicationInstallUtils.tsx");

export const canInstallApplication = function canInstallApplication(application) {
  const integrationTypesConfig = application.integrationTypesConfig;
  let tmp = null != application.customInstallUrl || null != application.installParams;
  if (!tmp) {
    let someResult = null != integrationTypesConfig;
    if (someResult) {
      const _Object = Object;
      const values = Object.values(integrationTypesConfig);
      someResult = values.some((oauth2_install_params) => {
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
      });
    }
    tmp = someResult;
  }
  return tmp;
};
export const isAppUserInstallable = function isAppUserInstallable(integrationTypesConfig) {
  integrationTypesConfig = integrationTypesConfig.integrationTypesConfig;
  let tmp = null != integrationTypesConfig.customInstallUrl || null != integrationTypesConfig.installParams;
  if (!tmp) {
    let someResult = null != integrationTypesConfig;
    if (someResult) {
      const _Object = Object;
      const values = Object.values(integrationTypesConfig);
      someResult = values.some((oauth2_install_params) => {
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
      });
    }
    tmp = someResult;
  }
  if (tmp) {
    tmp = null != integrationTypesConfig;
  }
  if (tmp) {
    tmp = ApplicationIntegrationType.ApplicationIntegrationType.USER_INSTALL in integrationTypesConfig;
  }
  return tmp;
};
export const shouldInstallApplicationOnDemand = function shouldInstallApplicationOnDemand(arg0) {
  ({ applicationId, channel, commandIntegrationTypes } = arg0);
  let tmp = null != commandIntegrationTypes;
  if (tmp) {
    tmp = !commandIntegrationTypes.includes(ApplicationIntegrationType.ApplicationIntegrationType.USER_INSTALL);
  }
  let tmp4 = !tmp;
  if (!tmp) {
    let tmp6 = applicationId !== BuiltInSectionId.BUILT_IN;
    if (tmp6) {
      let obj = closure_2;
      const result = closure_2.hasUserStateApplication(applicationId);
      let tmp8 = !result;
      if (!result) {
        let tmp9 = null == channel;
        if (!tmp9) {
          obj = { applicationId: null, channelId: null, guildId: null };
          obj[0] = applicationId;
          ({ id: obj2[1], guild_id: obj2[2] } = channel);
          tmp9 = !obj.hasContextStateApplication(obj);
        }
        tmp8 = tmp9;
      }
      tmp6 = tmp8;
    }
    tmp4 = tmp6;
  }
  return tmp4;
};