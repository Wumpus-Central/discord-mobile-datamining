// discord_app/modules/conjure/device_permissions/requestConjureDevicePermissions.tsx
import DurationsDefault from "../../../utils/Durations.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import ApplicationStore from "../../applications/ApplicationStore.tsx";
import FramesStore from "../../frames/FramesStore.tsx";
import ConjureDevicePermissionStore from "ConjureDevicePermissionStore.tsx";

const require = fn;
let closure_10 = async function _requestConjureDevicePermissions(arg0) {
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
      return { value: "HermesInternal", done: null };
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
          closure_129_4 = undefined;
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
          ({ iframeId: closure_129_2, modalContextKey: closure_129_3, permissions: closure_129_4 } = _require);
          closure_129_7 = undefined;
          closure_129_8 = undefined;
          closure_129_5 = function statuses() {
            return closure_1_4.map((permission) => {
              if (obj.isConjureDevicePermissionSupported(permission)) {
                const obj2 = { permission, state: null };
                let str = decision.getDecision(closure_1_0, permission);
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
          closure_129_6 = function _answerWithoutPrompting() {
            const self = this;
            const tmp = closure_3(function* () {
              if (c2 === 2) {
                c2 = 3;
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
                  c2 = 2;
                  if (0 === c1) {
                    if (arg0 === 1) {
                      c2 = 3;
                      throw value;
                    } else if (arg0 === 2) {
                      c2 = 3;
                      const obj4 = { value, done: true };
                      return obj4;
                    } else {
                      if (obj7.some((state) => "granted" !== state.state)) {
                        c1 = 1;
                        c2 = 1;
                        const obj5 = { value: tmp2(c2[7]).sleep(closure_1_9), done: false };
                        return obj5;
                      }
                      obj7 = frameByIframeId();
                    }
                  } else if (arg0 === 1) {
                    c2 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c2 = 3;
                    const obj = { value, done: true };
                    return obj;
                  }
                  c2 = 3;
                  const obj6 = { value: closure_128_5(), done: true };
                  return obj6;
                } catch (tmp11) {
                  c2 = tmp;
                  throw tmp11;
                }
              }
            });
            closure_6 = tmp;
            const apply = tmp.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          };
          c5 = 1;
          c6 = 1;
          return { value: "flexDirection", done: true };
        }
      } else if (1 === tmp8) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          let obj4 = { value, done: true };
          return obj4;
        } else {
          closure_129_7 = closure_129_4.filter((permission) => {
            if (obj.isConjureDevicePermissionSupported(permission)) {
              const obj2 = { permission, state: null };
              let str = decision.getDecision(closure_1_0, permission);
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
          if (0 !== closure_129_7.length) {
            if (null != closure_129_1) {
              if (!closure_130_8.has(closure_129_0)) {
                if (
                  (function isInUse(iframeId) {
                    if (null == iframeId) {
                      return true;
                    } else {
                      frameByIframeId = frameByIframeId.getFrameByIframeId(iframeId);
                      let tmp2 = null != frameByIframeId && frameByIframeId.isFrameVisible(frameByIframeId.id);
                      if (tmp2) {
                        tmp2 = frameByIframeId.data.layoutMode !== constants.PIP;
                      }
                      return tmp2;
                    }
                  })(closure_129_2)
                ) {
                  closure_130_8.add(closure_129_0);
                  c4 = 1;
                  let obj5 = {
                    appName: closure_129_1,
                    iframeId: closure_129_2,
                    modalContextKey: closure_129_3,
                    permissions: closure_129_7,
                  };
                  c5 = 3;
                  c6 = 1;
                  let obj6 = { value: closure_130_1(closure_130_2[8])(obj5), done: false };
                  return obj6;
                }
              }
            }
          }
          c6 = 3;
          let obj7 = {
            value: (function answerWithoutPrompting() {
              const self = this;
              const apply = closure_6.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            })(),
            done: true,
          };
          return obj7;
        }
      } else if (2 === tmp8) {
        c4 = 0;
        closure_130_8.delete(closure_129_0);
        throw closure_3;
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        closure_130_8.delete(closure_129_0);
        c6 = 3;
        const obj8 = { value, done: true };
        return obj8;
      } else {
        closure_129_8 = value;
        if (null != closure_129_8) {
          const obj9 = {
            type: "CONJURE_DEVICE_PERMISSIONS_DECIDE",
            applicationId: closure_129_0,
            permissions: closure_129_7,
            allowed: closure_129_8,
          };
          closure_130_1(closure_130_2[9]).dispatch(obj9);
          let obj = closure_130_1(closure_130_2[9]);
        }
        c4 = 0;
        closure_130_8.delete(closure_129_0);
        c6 = 3;
        const obj10 = { value: closure_129_5(), done: true };
        return obj10;
      }
    } catch (tmp55) {
      closure_3 = tmp55;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp55;
      } else {
        c5 = tmp;
      }
    }
  }
};
const FrameLayoutModes = fn(6841).FrameLayoutModes;
const set = new Set();
const SECOND = DurationsDefault.Millis.SECOND;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/device_permissions/requestConjureDevicePermissions.tsx");

export default function requestConjureDevicePermissions() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export const UNANSWERED_REQUEST_DELAY_MS = SECOND;
export function getConjureDevicePermissionStatus(applicationId, permission) {
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
}
