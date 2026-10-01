// discord_app/modules/applications/installApplicationOnDemandIfNeeded.native.tsx
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import ApplicationRecord from "../../records/ApplicationRecord.tsx";
import ApplicationStore from "ApplicationStore.tsx";

const require = fn;
let closure_6 = async function _installApplicationOnDemandIfNeeded(arg0) {
  ({
    applicationId: closure_129_0,
    channel: closure_129_1,
    commandIntegrationTypes: closure_129_2,
    appLauncherContext: closure_129_3,
  } = closure_0);
  await "flex";
  if (1 === tmp5) {
    if (arg0 === 1) {
      c4 = 3;
      throw value;
    } else if (arg0 === 2) {
      c4 = 3;
      return { value, done: true };
    } else {
      if (obj11.shouldInstallApplicationOnDemand(obj7)) {
        let application = closure_130_4.getApplication(closure_129_0);
        if (null == application) {
          c3 = 2;
          c4 = 1;
          return { value: closure_130_0(closure_130_1[5]).fetchApplication(closure_129_0), done: false };
        }
      } else {
        c4 = 3;
        return { value: Promise.resolve({ isAuthorized: true }), done: true };
      }
      obj11 = closure_130_0(closure_130_1[4]);
      obj7 = { applicationId: closure_129_0, channel: closure_129_1, commandIntegrationTypes: closure_129_2 };
    }
  } else if (arg0 === 1) {
    c4 = 3;
    throw value;
  } else if (arg0 === 2) {
    c4 = 3;
    return { value, done: true };
  } else {
    closure_129_5 = value;
    application = closure_130_3.createFromServer(closure_129_5);
  }
  const USER_INSTALL = closure_130_0(closure_130_1[6]).ApplicationIntegrationType.USER_INSTALL;
  if (application != null) {
    const integrationTypesConfig = application.integrationTypesConfig;
    if (integrationTypesConfig != null) {
      if (integrationTypesConfig[USER_INSTALL] != null) {
        const oauth2InstallParams = tmp25.oauth2InstallParams;
        if (oauth2InstallParams != null) {
          const scopes = oauth2InstallParams.scopes;
        }
      }
    }
  }
  closure_129_7 = scopes;
  if (null != closure_129_3) {
    closure_130_0(closure_130_1[7]).trackWithMetadata(closure_130_5.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, {
      application_id: closure_129_0,
      location: closure_129_3.location,
      section_name: closure_129_3.sectionName,
      source: closure_129_3.entrypoint,
    });
    closure_130_0(closure_130_1[7]);
  }
  return new Promise((arg0) => {
    const clientId = arg0;
    closure_1_0(4730).dismissKeyboard();
    let obj = closure_1_0(4730);
    closure_1_0(8697).openOAuth2Modal({
      clientId,
      integrationType,
      scopes,
      callback(location) {
        if (null != location.location) {
          if (null != closure_2_3) {
            const obj3 = { application_id, location: null, section_name: null, source: null };
            ({ location: obj2.location, sectionName: obj2.section_name, entrypoint: obj2.source } = closure_2_3);
            closure_0(dependencyMap[7]).trackWithMetadata(closure_3_5.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, obj3);
            const obj = closure_0(dependencyMap[7]);
          }
          closure_0({ isAuthorized: true });
        } else {
          closure_0({ isAuthorized: false });
        }
      },
    });
  });
};
const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/applications/installApplicationOnDemandIfNeeded.native.tsx");

export const installApplicationOnDemandIfNeeded = function installApplicationOnDemandIfNeeded() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
