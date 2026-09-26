// discord_app/modules/applications/installApplicationOnDemandIfNeeded.native.tsx
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import ApplicationRecord from "../../records/ApplicationRecord.tsx";
import ApplicationStore from "ApplicationStore.tsx";

const require = fn;
let closure_6 = async function _installApplicationOnDemandIfNeeded(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_2 = tmp5;
          dependencyMap = tmp2;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          ({
            applicationId: closure_129_0,
            channel: closure_129_1,
            commandIntegrationTypes: closure_129_2,
            appLauncherContext: closure_129_3,
          } = closure_0);
          let application;
          closure_129_5 = undefined;
          let USER_INSTALL;
          closure_129_7 = undefined;
          c3 = 1;
          c4 = 1;
          return { value: "flex", done: true };
        }
      } else {
        if (1 === tmp5) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            const obj7 = {
              applicationId: closure_129_0,
              channel: closure_129_1,
              commandIntegrationTypes: closure_129_2,
            };
            if (obj11.shouldInstallApplicationOnDemand(obj7)) {
              application = closure_130_4.getApplication(closure_129_0);
              if (null == application) {
                c3 = 2;
                c4 = 1;
                const obj8 = { value: closure_130_0(closure_130_1[5]).fetchApplication(closure_129_0), done: false };
                return obj8;
              }
            } else {
              c4 = 3;
              const obj9 = { value: Promise.resolve({ isAuthorized: true }), done: true };
              return obj9;
            }
            obj11 = closure_130_0(closure_130_1[4]);
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          let obj = { value, done: true };
          return obj;
        } else {
          closure_129_5 = value;
          application = closure_130_3.createFromServer(closure_129_5);
        }
        USER_INSTALL = closure_130_0(closure_130_1[6]).ApplicationIntegrationType.USER_INSTALL;
        let scopes;
        if (application != null) {
          const integrationTypesConfig = application.integrationTypesConfig;
          if (integrationTypesConfig != null) {
            if (integrationTypesConfig[USER_INSTALL] != null) {
              const oauth2InstallParams = tmp25.oauth2InstallParams;
              if (oauth2InstallParams != null) {
                scopes = oauth2InstallParams.scopes;
              }
            }
          }
        }
        closure_129_7 = scopes;
        if (null != closure_129_3) {
          const obj10 = {
            application_id: closure_129_0,
            location: closure_129_3.location,
            section_name: closure_129_3.sectionName,
            source: closure_129_3.entrypoint,
          };
          closure_130_0(closure_130_1[7]).trackWithMetadata(closure_130_5.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, obj10);
          let obj3 = closure_130_0(closure_130_1[7]);
        }
        const promise = new Promise((arg0) => {
          const clientId = arg0;
          closure_1_0(4701).dismissKeyboard();
          let obj = closure_1_0(4701);
          closure_1_0(8506).openOAuth2Modal({
            clientId,
            integrationType,
            scopes,
            callback(location) {
              if (null != location.location) {
                if (null != closure_2_3) {
                  const obj3 = { application_id, location: null, section_name: null, source: null };
                  ({ location: obj2.location, sectionName: obj2.section_name, entrypoint: obj2.source } = closure_2_3);
                  closure_0(dependencyMap[7]).trackWithMetadata(
                    closure_3_5.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED,
                    obj3,
                  );
                  const obj = closure_0(dependencyMap[7]);
                }
                closure_0({ isAuthorized: true });
              } else {
                closure_0({ isAuthorized: false });
              }
            },
          });
        });
        c4 = 3;
        const obj12 = { value: promise, done: true };
        return obj12;
      }
    } catch (tmp50) {
      c4 = tmp;
      throw tmp50;
    }
  }
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
