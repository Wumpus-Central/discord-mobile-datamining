// discord_app/modules/applications/getApplicationInstallURL.tsx
import obj132 from "../../../_runtime/00002_obj132.js";
import ME from "../../Constants.tsx";

const Routes = ME.Routes;
let result = obj132.fileFinishedImporting("modules/applications/getApplicationInstallURL.tsx");

export const getActivityLaunchURL = function getActivityLaunchURL(applicationId) {
  ({ customId, referrerId, linkId } = applicationId);
  const str = new URL(Routes.ACTIVITY_DETAILS(applicationId.applicationId), "" + location.protocol + "//" + location.host);
  const searchParams = str.searchParams;
  if (null != linkId) {
    const result = searchParams.set("link_id", linkId);
  }
  if (null != referrerId) {
    const result1 = searchParams.set("referrer_id", referrerId);
  }
  if (null != customId) {
    const result2 = searchParams.set("custom_id", customId);
  }
  return str.toString();
};
export const getApplicationInstallURL = function getApplicationInstallURL(application) {
  ({ customInstallUrl, installParams, integrationTypesConfig } = application);
  if (null != customInstallUrl) {
    return customInstallUrl;
  } else {
    const _URLSearchParams = URLSearchParams;
    const str7 = new URLSearchParams();
    const result = str7.set("client_id", tmp);
    let someResult = null != integrationTypesConfig;
    if (someResult) {
      const _Object = Object;
      const values = Object.values(integrationTypesConfig);
      someResult = values.some((item, index) => {
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
      });
    }
    if (null != installParams) {
      if (!someResult) {
        ({ permissions, scopes } = installParams);
        if (null != permissions) {
          const result1 = str7.set("permissions", permissions);
        }
        if (null != scopes) {
          const result2 = str7.set("scope", scopes.join(" "));
        }
      }
    }
    const _location = location;
    const _location2 = location;
    const _HermesInternal = HermesInternal;
    return "" + location.protocol + "//" + location.host + Routes.OAUTH2_AUTHORIZE + "?" + str7.toString();
  }
};