// discord_app/modules/build_overrides/native/BuildOverrideUtils.tsx
import BuildOverrideUtils from "../BuildOverrideUtils.tsx";
import ApplyBuildOverrideUtils from "../ApplyBuildOverrideUtils.tsx";
import BundleUpdaterDefault from "../../../lib/native/BundleUpdater.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import BuildOverrideStore from "../BuildOverrideStore.tsx";

require = fn;
function setBuildOverrideForBranch(id) {
  setBuildOverride({ type: "branch", id });
}
function setBuildOverride() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_8 = async function _setBuildOverride(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
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
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp2;
          closure_1 = tmp5;
          closure_129_0 = undefined;
          let obj4 = ApplyBuildOverrideUtils;
          const obj1 = {};
          obj1[str] = closure_0;
          c3 = 1;
          c4 = 1;
          let obj2 = { value: obj4.applyStaffBuildOverride(obj1), done: false };
          return obj2;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj3 = { value, done: true };
        return obj3;
      } else {
        closure_129_0 = value;
        if (400 !== closure_129_0.status) {
          obj2 = closure_130_1(closure_130_2[4]);
          const result = obj2.checkForUpdateAndReload();
        } else {
          obj = closure_130_1(closure_130_2[5]);
          obj4 = { title: "Override Error", body: closure_129_0.body[closure_130_5], isDismissable: true };
          obj.show(obj4);
        }
        c4 = 3;
      }
    } catch (tmp21) {
      c4 = tmp;
      throw tmp21;
    }
  }
};
function clearBuildOverride() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_10 = async function _clearBuildOverride() {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c3 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_1 = tmp5;
          closure_0 = tmp2;
          closure_128_0 = undefined;
          c2 = 1;
          c3 = 1;
          const obj1 = { value: ApplyBuildOverrideUtils.clearBuildOverride(), done: false };
          return obj1;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        let obj2 = { value, done: true };
        return obj2;
      } else {
        closure_128_0 = value;
        if (400 !== closure_128_0.status) {
          obj2 = closure_129_1(closure_129_2[4]);
          const result = obj2.checkForUpdateAndReload();
        } else {
          obj = closure_129_1(closure_129_2[5]);
          const obj3 = { title: "Clear Override Error", body: closure_128_0.body, isDismissable: true };
          obj.show(obj3);
        }
        c3 = 3;
      }
    } catch (tmp18) {
      c3 = tmp;
      throw tmp18;
    }
  }
};
let closure_11 = async function _toggleOverride(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
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
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c2 = 0;
          closure_1 = tmp2;
          closure_129_0 = undefined;
          const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
          let id;
          if (overrides != null) {
            if (overrides[str] != null) {
              id = tmp18.id;
            }
          }
          const buildOverride = currentBuildOverride.getBuildOverride(closure_0);
          const override = buildOverride.override;
          let id1;
          if (override != null) {
            const targetBuildOverride = override.targetBuildOverride;
            if (targetBuildOverride != null) {
              if (targetBuildOverride[str] != null) {
                id1 = tmp23.id;
              }
            }
          }
          if (id === id1) {
            clearBuildOverride();
          } else if (null != buildOverride.payload) {
            if (obj10.isManualBuildOverrideLink(closure_0)) {
              if (null != id1) {
                setBuildOverrideForBranch(id1);
                c4 = 3;
                return { value: "HermesInternal", done: null };
              }
            }
            obj10 = BuildOverrideUtils;
            c3 = 1;
            c4 = 1;
            const obj1 = {
              value: ApplyBuildOverrideUtils.applyPublicBuildOverride(buildOverride.payload),
              done: false,
            };
            return obj1;
          }
          c4 = 3;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        let obj2 = { value, done: true };
        return obj2;
      } else {
        closure_129_0 = value;
        if (400 === closure_129_0.status) {
          obj = closure_130_1(closure_130_2[5]);
          const obj3 = { title: "Override Error", body: closure_129_0.body[closure_130_5], isDismissable: true };
          obj.show(obj3);
        }
      }
      obj2 = closure_130_1(closure_130_2[4]);
      const result = obj2.checkForUpdateAndReload();
    } catch (tmp29) {
      c4 = tmp;
      throw tmp29;
    }
  }
};
let closure_12 = async function _setBuildOverrideFromLink(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
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
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp2;
          closure_1 = tmp5;
          closure_129_0 = undefined;
          const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
          let id;
          if (overrides != null) {
            if (overrides[str] != null) {
              id = tmp18.id;
            }
          }
          const buildOverride = currentBuildOverride.getBuildOverride(closure_0);
          const override = buildOverride.override;
          let id1;
          if (override != null) {
            const targetBuildOverride = override.targetBuildOverride;
            if (targetBuildOverride != null) {
              if (targetBuildOverride[str] != null) {
                id1 = tmp23.id;
              }
            }
          }
          if (id !== id1) {
            if (null != buildOverride.payload) {
              c3 = 1;
              c4 = 1;
              const obj1 = {
                value: ApplyBuildOverrideUtils.applyPublicBuildOverride(buildOverride.payload),
                done: false,
              };
              return obj1;
            }
          }
          c4 = 3;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        let obj2 = { value, done: true };
        return obj2;
      } else {
        closure_129_0 = value;
        if (400 === closure_129_0.status) {
          obj = closure_130_1(closure_130_2[5]);
          const obj3 = { title: "Override Error", body: closure_129_0.body[closure_130_5], isDismissable: true };
          obj.show(obj3);
        }
      }
      obj2 = closure_130_1(closure_130_2[4]);
      const result = obj2.checkForUpdateAndReload();
    } catch (tmp26) {
      c4 = tmp;
      throw tmp26;
    }
  }
};
const PlatformUtils = fn(1115);
let str = "discord_ios";
if (PlatformUtils.isAndroid()) {
  str = "discord_android";
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/build_overrides/native/BuildOverrideUtils.tsx");

export const DEVICE_FIELD = str;
export { setBuildOverrideForBranch };
export const setBuildOverrideForId = function setBuildOverrideForId(id) {
  setBuildOverride({ type: "id", id });
};
export { setBuildOverride };
export const refreshBuildOverride = function refreshBuildOverride() {
  const result = BundleUpdaterDefault.checkForUpdateAndReload();
};
export { clearBuildOverride };
export const toggleOverride = function toggleOverride() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const setBuildOverrideFromLink = function setBuildOverrideFromLink() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
