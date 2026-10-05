// discord_app/modules/applications/installApplicationOnDemandIfNeeded.native.tsx
import Constants from "../../Constants.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import ApplicationRecord from "../../records/ApplicationRecord.tsx";
import ApplicationStore from "ApplicationStore.tsx";
import size from "../../../_runtime/metro/00002__.js";

let c4;

let obj = function _installApplicationOnDemandIfNeeded() {
  obj = _asyncToGenerator(async function (arg0) {
    let c0;
    let c1;
    let c2;
    let c3;
    let obj6;
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let application_id;
        let channel;
        let commandIntegrationTypes;
        let application;
        let closure_5;
        let USER_INSTALL;
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
            let closure_2 = tmp4;
            let closure_1 = tmp;
            application_id = undefined;
            channel = undefined;
            commandIntegrationTypes = undefined;
            ({ applicationId: c0, channel: c1, commandIntegrationTypes: c2, appLauncherContext: c3 } = closure_0);
            application = undefined;
            closure_5 = undefined;
            USER_INSTALL = undefined;
            let scopes;
            c3 = 1;
            c4 = 1;
            return { value: "Set", done: true };
          }
        } else {
          if (1 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              const obj7 = { applicationId: application_id, channel, commandIntegrationTypes };
              const obj11 = closure_130_0(closure_130_1[4]);
              if (obj11.shouldInstallApplicationOnDemand(obj7)) {
                application = closure_130_4.getApplication(application_id);
                if (null == application) {
                  c3 = 2;
                  c4 = 1;
                  const obj8 = { value: obj6.fetchApplication(application_id), done: false };
                  obj6 = closure_130_0(closure_130_1[5]);
                  return obj8;
                }
              } else {
                c4 = 3;
                const obj9 = { value: Promise.resolve({ isAuthorized: true }), done: true };
                return obj9;
              }
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_5 = value;
            application = closure_130_3.createFromServer(closure_5);
          }
          USER_INSTALL = closure_130_0(closure_130_1[6]).ApplicationIntegrationType.USER_INSTALL;
          scopes = undefined;
          if (application != null) {
            const integrationTypesConfig = application.integrationTypesConfig;
            if (integrationTypesConfig != null) {
              if (integrationTypesConfig[USER_INSTALL] != null) {
                const oauth2InstallParams = tmp24.oauth2InstallParams;
                if (oauth2InstallParams != null) {
                  scopes = oauth2InstallParams.scopes;
                }
              }
            }
          }
          if (null != c3) {
            let obj3 = closure_130_0(closure_130_1[7]);
            const obj10 = {
              application_id,
              location: c3.location,
              section_name: c3.sectionName,
              source: c3.entrypoint,
            };
            const trackWithMetadataResult = obj3.trackWithMetadata(
              closure_130_5.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED,
              obj10,
            );
          }
          const self = this;
          const self2 = this;
          const promise = new Promise((arg0) => {
            const clientId = arg0;
            obj = closure_1_0(channel[8]);
            obj.dismissKeyboard();
            const obj2 = closure_1_0(channel[9]);
            let obj3 = {
              clientId,
              integrationType,
              scopes,
              callback(location) {
                if (null != location.location) {
                  if (null != closure_2_3) {
                    const obj3 = { application_id, location: null, section_name: null, source: null };
                    ({
                      location: obj2.location,
                      sectionName: obj2.section_name,
                      entrypoint: obj2.source,
                    } = closure_2_3);
                    obj = closure_0(channel[7]);
                    obj.trackWithMetadata(closure_3_5.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, obj3);
                  }
                  closure_0({ isAuthorized: true });
                } else {
                  closure_0({ isAuthorized: false });
                }
              },
            };
            obj2.openOAuth2Modal(obj3);
          });
          c4 = 3;
          const obj12 = { value: promise, done: true };
          return obj12;
        }
      } catch (tmp47) {
        c4 = 3;
        throw tmp47;
      }
    }
  });
  return obj(...arguments);
};
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/applications/installApplicationOnDemandIfNeeded.native.tsx");

export const installApplicationOnDemandIfNeeded = function installApplicationOnDemandIfNeeded() {
  return obj(...arguments);
};
