// discord_app/modules/conjure/device_permissions/requestConjureDevicePermissions.tsx
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import ApplicationStore from "../../applications/ApplicationStore.tsx";
import ConjureDevicePermissionStore from "ConjureDevicePermissionStore.tsx";

const require = fn;
let closure_7 = async function _requestConjureDevicePermissions(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
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
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          let obj3 = { value, done: true };
          return obj3;
        } else {
          dependencyMap = tmp3;
          closure_1 = tmp5;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          closure_129_3 = undefined;
          const applicationId = _require.applicationId;
          closure_129_0 = applicationId;
          let appName = _require.appName;
          if (appName === undefined) {
            application = application.getApplication(applicationId);
            let name;
            if (application != null) {
              name = application.name;
            }
            appName = name;
          }
          closure_129_1 = appName;
          ({ iframeId: closure_129_2, permissions: closure_129_3 } = _require);
          closure_129_5 = undefined;
          closure_129_6 = undefined;
          closure_129_4 = function statuses() {
            return closure_1_3.map((permission) => {
              if (obj.isConjureDevicePermissionSupported(permission)) {
                const obj2 = { permission, state: null };
                let str = closure_2_5.getDecision(closure_1_0, permission);
                if (str == null) {
                  str = "prompt";
                }
                obj2.state = str;
                let obj3 = obj2;
              } else {
                obj3 = { permission, state: "unsupported" };
              }
              return obj3;
            });
          };
          c5 = 1;
          c6 = 1;
          return { value: "Reflect", done: true };
        }
      } else if (1 === tmp8) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_129_5 = closure_129_3.filter((permission) => {
            if (obj.isConjureDevicePermissionSupported(permission)) {
              const obj2 = { permission, state: null };
              let str = c5.getDecision(closure_1_0, permission);
              if (str == null) {
                str = "prompt";
              }
              obj2.state = str;
              let obj3 = obj2;
            } else {
              obj3 = { permission, state: "unsupported" };
            }
            return "prompt" === obj3.state;
          });
          if (0 !== closure_129_5.length) {
            if (null != closure_129_1) {
              if (!closure_130_6.has(closure_129_0)) {
                closure_130_6.add(closure_129_0);
                c4 = 1;
                const obj5 = { appName: closure_129_1, iframeId: closure_129_2, permissions: closure_129_5 };
                c5 = 3;
                c6 = 1;
                const obj6 = { value: closure_130_1(closure_130_2[4])(obj5), done: false };
                return obj6;
              }
            }
          }
          c6 = 3;
          const obj7 = { value: closure_129_4(), done: true };
          return obj7;
        }
      } else if (2 === tmp8) {
        c4 = 0;
        closure_130_6.delete(closure_129_0);
        throw closure_3;
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        closure_130_6.delete(closure_129_0);
        c6 = 3;
        const obj8 = { value, done: true };
        return obj8;
      } else {
        closure_129_6 = value;
        if (null != closure_129_6) {
          const obj9 = {
            type: "CONJURE_DEVICE_PERMISSIONS_DECIDE",
            applicationId: closure_129_0,
            permissions: closure_129_5,
            allowed: closure_129_6,
          };
          closure_130_1(closure_130_2[5]).dispatch(obj9);
          const obj = closure_130_1(closure_130_2[5]);
        }
        c4 = 0;
        closure_130_6.delete(closure_129_0);
        c6 = 3;
        const obj10 = { value: closure_129_4(), done: true };
        return obj10;
      }
    } catch (tmp53) {
      closure_3 = tmp53;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp53;
      } else {
        c5 = tmp;
      }
    }
  }
};
const set = new Set();
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/device_permissions/requestConjureDevicePermissions.tsx");

export default function requestConjureDevicePermissions() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export const getConjureDevicePermissionStatus = function getConjureDevicePermissionStatus(applicationId, permission) {
  if (obj.isConjureDevicePermissionSupported(permission)) {
    const obj2 = { permission, state: null };
    let str = ConjureDevicePermissionStore.getDecision(applicationId, permission);
    if (str == null) {
      str = "prompt";
    }
    obj2.state = str;
    let obj3 = obj2;
  } else {
    obj3 = { permission, state: "unsupported" };
  }
  return obj3;
};
