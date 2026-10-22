// discord_app/modules/conjure/device_permissions/promptConjureDevicePermissionsOnInstall.tsx
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import ConjureDevicePermissionStore from "ConjureDevicePermissionStore.tsx";

const require = fn;
let closure_6 = async function _promptConjureDevicePermissionsOnInstall(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
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
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          ({ applicationId: closure_129_0, appName: closure_129_1, permissions: closure_129_2 } = closure_0);
          closure_129_3 = undefined;
          closure_129_4 = undefined;
          c5 = 1;
          c6 = 1;
          return { value: "Reflect", done: true };
        }
      } else {
        if (1 === tmp7) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_129_3 = closure_129_2.filter((item) => {
              let result = closure_0(closure_2[2]).isConjureDevicePermissionSupported(item);
              if (result) {
                result = null == decision.getDecision(closure_1_0, item);
              }
              return result;
            });
            if (0 !== closure_129_3.length) {
              if (!closure_130_5.has(closure_129_0)) {
                closure_130_5.add(closure_129_0);
                c4 = 1;
                const obj5 = { appName: closure_129_1, iframeId: null, permissions: closure_129_3 };
                c5 = 3;
                c6 = 1;
                const obj6 = { value: closure_130_1(closure_130_2[3])(obj5), done: false };
                return obj6;
              }
            }
            c6 = 3;
          }
        } else if (2 === tmp7) {
          c4 = 0;
          closure_130_5.delete(closure_129_0);
          throw closure_3;
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 !== 2) {
          closure_129_4 = value;
          if (null != closure_129_4) {
            const obj7 = {
              type: "CONJURE_DEVICE_PERMISSIONS_DECIDE",
              applicationId: closure_129_0,
              permissions: closure_129_3,
              allowed: closure_129_4,
            };
            closure_130_1(closure_130_2[4]).dispatch(obj7);
            const obj = closure_130_1(closure_130_2[4]);
          }
          c4 = 0;
          closure_130_5.delete(closure_129_0);
        }
        c4 = 0;
        closure_130_5.delete(closure_129_0);
        c6 = 3;
        const obj8 = { value, done: true };
        return obj8;
      }
    } catch (tmp47) {
      closure_3 = tmp47;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp47;
      } else {
        c5 = tmp;
      }
    }
  }
};
const set = new Set();
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/conjure/device_permissions/promptConjureDevicePermissionsOnInstall.tsx",
);

export default function promptConjureDevicePermissionsOnInstall() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
