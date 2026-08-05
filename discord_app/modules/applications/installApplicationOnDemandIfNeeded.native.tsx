// discord_app/modules/applications/installApplicationOnDemandIfNeeded.native.tsx
import fetchApplication from "fetchApplication";
import createExecutable from "createExecutable";
import addApplication from "addApplication";
import { AnalyticEvents } from "ME";

const require = arg1;
function _installApplicationOnDemandIfNeeded() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    const iter = (function*(arg0) {
      let c0;
      let c1;
      let c2;
      let c3;
      const dependencyMap = tmp2;
      ({ applicationId: c0, channel: c1, commandIntegrationTypes: c2, appLauncherContext: c3 } = callback);
      yield "PX_8";
      if (1 === tmp5) {
        if (arg0 === 1) {
          let application = 3;
          throw arg1;
        } else if (arg0 === 2) {
          application = 3;
          const obj1 = { value: null, done: true };
          obj1[0] = arg1;
          return obj1;
        } else {
          let obj2 = { applicationId: null, channel: null, commandIntegrationTypes: null };
          obj2[0] = callback;
          obj2[1] = dependencyMap;
          obj2[2] = c2;
          if (obj11.shouldInstallApplicationOnDemand(obj2)) {
            application = application.getApplication(callback);
            if (null == application) {
              let obj5 = callback(5596);
              c3 = 2;
              application = 1;
              const obj3 = { value: null, done: false };
              obj3[0] = obj5.fetchApplication(callback);
              return obj3;
            }
          } else {
            application = 3;
            const obj4 = { value: null, done: true };
            obj4[0] = Promise.resolve({ isAuthorized: true });
            return obj4;
          }
          obj11 = callback(10859);
        }
      } else if (arg0 === 1) {
        application = 3;
        throw arg1;
      } else if (arg0 === 2) {
        application = 3;
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        obj = arg1;
        application = c3.createFromServer(obj);
      }
      const USER_INSTALL = callback(9430).ApplicationIntegrationType.USER_INSTALL;
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
      if (null != c3) {
        obj2 = callback(4449);
        obj5 = { application_id: null, location: null, section_name: null, source: null };
        obj5[0] = callback;
        obj5[1] = c3.location;
        obj5[2] = c3.sectionName;
        obj5[3] = c3.entrypoint;
        obj2.trackWithMetadata(obj.APP_LAUNCHER_OAUTH2_AUTHORIZE_OPENED, obj5);
      }
      const promise = new Promise((arg0) => {
        let closure_0 = arg0;
        let obj = _undefined(_undefined2[8]);
        obj.dismissKeyboard();
        obj = {
          clientId: closure_0,
          integrationType: USER_INSTALL,
          scopes,
          callback(location) {
            if (null != location.location) {
              if (null != outer1_3) {
                let obj = callback(table[7]);
                obj = { application_id: null, location: null, section_name: null, source: null };
                obj[0] = callback;
                ({ location: obj2[1], sectionName: obj2[2], entrypoint: obj2[3] } = tmp3);
                obj.trackWithMetadata(obj.APP_LAUNCHER_OAUTH2_AUTHORIZE_SUCCEEDED, obj);
              }
              callback({ isAuthorized: true });
              tmp3 = outer1_3;
            } else {
              callback({ isAuthorized: false });
            }
          }
        };
        _undefined(_undefined2[9]).openOAuth2Modal(obj);
      });
      return promise;
    })();
    iter.next();
    return iter;
  });
  const _installApplicationOnDemandIfNeeded = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("addApplication").fileFinishedImporting("modules/applications/installApplicationOnDemandIfNeeded.native.tsx");

export const installApplicationOnDemandIfNeeded = function installApplicationOnDemandIfNeeded(arg0) {
  const self = this;
  const apply = _installApplicationOnDemandIfNeeded.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};