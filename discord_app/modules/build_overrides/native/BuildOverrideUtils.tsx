// discord_app/modules/build_overrides/native/BuildOverrideUtils.tsx
import AlertActionCreators from "../../../actions/native/AlertActionCreators.tsx";
import getCurrentBuildOverride from "getCurrentBuildOverride";
import set from "set";
import set from "set";
import { BundleUpdaterManager } from "../../../lib/native/BundleUpdater.tsx";

const require = arg1;
function setBuildOverrideForBranch(id) {
  setBuildOverride({ type: "branch", id });
}
function setBuildOverride(arg0) {
  const self = this;
  const apply = _setBuildOverride.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _setBuildOverride() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    return (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const dependencyMap = tmp2;
              const callback = tmp5;
              let lib;
              let obj4 = lib(outer1_2[3]);
              const obj1 = {};
              obj1[outer1_5] = lib;
              c3 = 1;
              c4 = 1;
              let obj2 = { value: null, done: false };
              obj2[0] = obj4.applyStaffBuildOverride(obj1);
              return obj2;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            lib = arg1;
            if (400 !== lib.status) {
              obj2 = callback(11193);
              const result = obj2.checkForUpdateAndReload();
            } else {
              obj = callback(4643);
              obj4 = { title: "Override Error", body: null, isDismissable: true };
              obj4[1] = lib.body[closure_5];
              obj.show(obj4);
            }
            c4 = 3;
          }
        } catch (tmp21) {
          c4 = tmp;
          throw tmp21;
        }
      }
    })();
  });
  const _setBuildOverride = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function clearBuildOverride() {
  const self = this;
  const apply = _clearBuildOverride.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _clearBuildOverride() {
  const self = this;
  const tmp = callback(function*() {
    if (c3 === 2) {
      c3 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const callback = tmp5;
            let closure_0 = tmp2;
            closure_0 = undefined;
            dependencyMap = 1;
            c3 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = outer1_0(11192).clearBuildOverride();
            return obj1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          let obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          closure_0 = arg1;
          if (400 !== closure_0.status) {
            obj2 = callback(11193);
            const result = obj2.checkForUpdateAndReload();
          } else {
            obj = callback(4643);
            const obj3 = { title: "Clear Override Error", body: null, isDismissable: true };
            obj3[1] = closure_0.body;
            obj.show(obj3);
          }
          c3 = 3;
        }
      } catch (tmp18) {
        c3 = tmp;
        throw tmp18;
      }
    }
  });
  const _clearBuildOverride = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _toggleOverride() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    return (function*(arg0) {
      if (currentBuildOverride === 2) {
        currentBuildOverride = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          currentBuildOverride = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              currentBuildOverride = 3;
              throw arg1;
            } else if (arg0 === 2) {
              currentBuildOverride = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const dependencyMap = 0;
              const callback = tmp2;
              let lib;
              const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
              let id;
              if (overrides != null) {
                if (overrides[outer1_5] != null) {
                  id = tmp18.id;
                }
              }
              const buildOverride = currentBuildOverride.getBuildOverride(tmp37);
              const override = buildOverride.override;
              let id1;
              if (override != null) {
                const targetBuildOverride = override.targetBuildOverride;
                if (targetBuildOverride != null) {
                  if (targetBuildOverride[outer1_5] != null) {
                    id1 = tmp23.id;
                  }
                }
              }
              if (id === id1) {
                outer1_9();
              } else if (null != buildOverride.payload) {
                if (obj10.isManualBuildOverrideLink(tmp37)) {
                  if (null != id1) {
                    outer1_6(id1);
                    currentBuildOverride = 3;
                    return { value: "HermesInternal", done: null };
                  }
                }
                obj10 = lib(outer1_2[6]);
                const tmp39 = lib;
                c3 = 1;
                currentBuildOverride = 1;
                const obj1 = { value: null, done: false };
                obj1[0] = lib(outer1_2[3]).applyPublicBuildOverride(buildOverride.payload);
                return obj1;
              }
              currentBuildOverride = 3;
              const obj9 = currentBuildOverride;
            }
          } else if (arg0 === 1) {
            currentBuildOverride = 3;
            throw arg1;
          } else if (arg0 === 2) {
            currentBuildOverride = 3;
            let obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            lib = arg1;
            if (400 === lib.status) {
              obj = callback(4643);
              const obj3 = { title: "Override Error", body: null, isDismissable: true };
              obj3[1] = lib.body[closure_5];
              obj.show(obj3);
            }
          }
          obj2 = callback(11193);
          const result = obj2.checkForUpdateAndReload();
        } catch (tmp29) {
          currentBuildOverride = tmp;
          throw tmp29;
        }
      }
    })();
  });
  const _toggleOverride = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _setBuildOverrideFromLink() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    return (function*(arg0) {
      if (currentBuildOverride === 2) {
        currentBuildOverride = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          currentBuildOverride = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              currentBuildOverride = 3;
              throw arg1;
            } else if (arg0 === 2) {
              currentBuildOverride = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              const dependencyMap = tmp2;
              const callback = tmp5;
              let lib;
              const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
              let id;
              if (overrides != null) {
                if (overrides[outer1_5] != null) {
                  id = tmp18.id;
                }
              }
              const buildOverride = currentBuildOverride.getBuildOverride(lib);
              const override = buildOverride.override;
              let id1;
              if (override != null) {
                const targetBuildOverride = override.targetBuildOverride;
                if (targetBuildOverride != null) {
                  if (targetBuildOverride[outer1_5] != null) {
                    id1 = tmp23.id;
                  }
                }
              }
              if (id !== id1) {
                if (null != buildOverride.payload) {
                  c3 = 1;
                  currentBuildOverride = 1;
                  const obj1 = { value: null, done: false };
                  obj1[0] = lib(outer1_2[3]).applyPublicBuildOverride(buildOverride.payload);
                  return obj1;
                }
              }
              currentBuildOverride = 3;
              const obj9 = currentBuildOverride;
              const tmp34 = lib;
            }
          } else if (arg0 === 1) {
            currentBuildOverride = 3;
            throw arg1;
          } else if (arg0 === 2) {
            currentBuildOverride = 3;
            let obj2 = { value: null, done: true };
            obj2[0] = arg1;
            return obj2;
          } else {
            lib = arg1;
            if (400 === lib.status) {
              obj = callback(4643);
              const obj3 = { title: "Override Error", body: null, isDismissable: true };
              obj3[1] = lib.body[closure_5];
              obj.show(obj3);
            }
          }
          obj2 = callback(11193);
          const result = obj2.checkForUpdateAndReload();
        } catch (tmp26) {
          currentBuildOverride = tmp;
          throw tmp26;
        }
      }
    })();
  });
  const _setBuildOverrideFromLink = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let str = "discord_ios";
if (set.isAndroid()) {
  str = "discord_android";
}
let result = set.fileFinishedImporting("modules/build_overrides/native/BuildOverrideUtils.tsx");

export const DEVICE_FIELD = str;
export { setBuildOverrideForBranch };
export const setBuildOverrideForId = function setBuildOverrideForId(id) {
  setBuildOverride({ type: "id", id });
};
export { setBuildOverride };
export const refreshBuildOverride = function refreshBuildOverride() {
  const result = BundleUpdaterManager.checkForUpdateAndReload();
};
export { clearBuildOverride };
export const toggleOverride = function toggleOverride(code) {
  const self = this;
  const apply = _toggleOverride.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const setBuildOverrideFromLink = function setBuildOverrideFromLink(arg0) {
  const self = this;
  const apply = _setBuildOverrideFromLink.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};