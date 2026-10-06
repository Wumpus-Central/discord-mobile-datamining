// === Module 8970: ApplicationInstallUtils ===

// Module 8970 (ApplicationInstallUtils)
import ApplicationCommandConstants from "ApplicationCommandConstants" /* 5795 */;
import ApplicationIntegrationType from "ApplicationIntegrationType" /* 8740 */;
import ApplicationCommandIndexStore from "ApplicationCommandIndexStore" /* 8827 */;
import size from "module_2" /* 2 */;

const f99048 = (oauth2_install_params) => {
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
};
const BuiltInSectionId = ApplicationCommandConstants.BuiltInSectionId;
let result = size.fileFinishedImporting("modules/applications/utils/ApplicationInstallUtils.tsx");

export const canInstallApplication = function canInstallApplication(installAppProps) {
  const integrationTypesConfig = installAppProps.integrationTypesConfig;
  let tmp = null != installAppProps.customInstallUrl || null != installAppProps.installParams;
  if (!tmp) {
    let someResult = null != integrationTypesConfig;
    if (someResult) {
      const _Object = Object;
      const values = Object.values(integrationTypesConfig);
      someResult = values.some(f99048);
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
      someResult = values.some(f99048);
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
  let applicationId;
  let channel;
  let commandIntegrationTypes;
  ({ applicationId, channel, commandIntegrationTypes } = arg0);
  let tmp4 = !(null != commandIntegrationTypes && !commandIntegrationTypes.includes(ApplicationIntegrationType.ApplicationIntegrationType.USER_INSTALL));
  const tmp = null != commandIntegrationTypes && !commandIntegrationTypes.includes(ApplicationIntegrationType.ApplicationIntegrationType.USER_INSTALL);
  if (tmp4) {
    let tmp6 = applicationId !== BuiltInSectionId.BUILT_IN;
    if (tmp6) {
      const result = ApplicationCommandIndexStore.hasUserStateApplication(applicationId);
      let tmp8 = !result;
      if (tmp8) {
        let tmp9 = null == channel;
        if (!tmp9) {
          const obj3 = { applicationId, channelId: null, guildId: null };
          ({ id: obj2.channelId, guild_id: obj2.guildId } = channel);
          tmp9 = !ApplicationCommandIndexStore.hasContextStateApplication(obj3);
        }
        tmp8 = tmp9;
      }
      tmp6 = tmp8;
    }
    tmp4 = tmp6;
  }
  return tmp4;
};