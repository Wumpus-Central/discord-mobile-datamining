// === Module 12605: ApplicationInstallUtils ===

// Module 12605 (ApplicationInstallUtils)
import ApplicationIntegrationType from "ApplicationIntegrationType" /* 5890 */;
import isConjureApplicationDefault from "isConjureApplication" /* 6965 */;
import ApplicationCommandIndexStore from "ApplicationCommandIndexStore" /* 11339 */;

require = fn;
const BuiltInSectionId = fn(6282).BuiltInSectionId;
const size = fn(2);
let result = size.fileFinishedImporting("modules/applications/utils/ApplicationInstallUtils.tsx");

export function hasInstallConfiguration(application) {
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
}
export function isKnownConjureApplication(id) {
  id = id.id;
  let tmp = null != id.conjureProjectId;
  if (!tmp) {
    let tmp2 = null != id;
    if (tmp2) {
      tmp2 = isConjureApplicationDefault(id);
    }
    tmp = tmp2;
  }
  return tmp;
}
export function canInstallApplication(integrationTypesConfig) {
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
    const id = integrationTypesConfig.id;
    let tmp4 = null != integrationTypesConfig.conjureProjectId;
    if (!tmp4) {
      let tmp5 = null != id;
      if (tmp5) {
        tmp5 = isConjureApplicationDefault(id);
      }
      tmp4 = tmp5;
    }
    tmp = !tmp4;
  }
  return tmp;
}
export function isAppUserInstallable(integrationTypesConfig) {
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
}
export function shouldInstallApplicationOnDemand(arg0) {
  ({ applicationId, channel, commandIntegrationTypes } = arg0);
  let tmp = null != commandIntegrationTypes;
  if (tmp) {
    tmp = !commandIntegrationTypes.includes(ApplicationIntegrationType.ApplicationIntegrationType.USER_INSTALL);
  }
  let tmp4 = !tmp;
  if (!tmp) {
    let tmp6 = applicationId !== BuiltInSectionId.BUILT_IN;
    if (tmp6) {
      const result = ApplicationCommandIndexStore.hasUserStateApplication(applicationId);
      let tmp8 = !result;
      if (!result) {
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
}