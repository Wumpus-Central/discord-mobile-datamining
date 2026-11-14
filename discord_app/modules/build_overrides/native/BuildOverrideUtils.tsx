// === Module 14059: build_overrides/BuildOverrideUtils ===

// Module 14059 (build_overrides/BuildOverrideUtils)
import BuildOverrideUtils from "BuildOverrideUtils" /* 1377 */;
import ApplyBuildOverrideUtils from "ApplyBuildOverrideUtils" /* 14060 */;
import BundleUpdaterDefault from "BundleUpdater" /* 14061 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import BuildOverrideStore from "BuildOverrideStore" /* 12367 */;

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
      const obj3 = { value, done: true };
      return obj3;
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
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_2 = tmp2;
          closure_1 = tmp5;
          closure_129_0 = closure_0;
          closure_129_1 = undefined;
          const obj7 = {};
          obj7[str] = closure_0;
          c3 = 1;
          c4 = 1;
          const obj8 = { value: ApplyBuildOverrideUtils.applyStaffBuildOverride(obj7), done: false };
          return obj8;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj9 = { value, done: true };
        return obj9;
      } else {
        closure_129_1 = value;
        if (200 === closure_129_1.status) {
          const result = closure_130_0(closure_130_2[4]).recordDeviceBuildOverride(closure_129_0);
          const obj = closure_130_0(closure_130_2[4]);
        }
        if (400 !== closure_129_1.status) {
          const result1 = closure_130_1(closure_130_2[5]).checkForUpdateAndReload();
          const obj4 = closure_130_1(closure_130_2[5]);
        } else {
          const obj10 = { title: "Override Error", body: closure_129_1.body[closure_130_5], isDismissable: true };
          closure_130_1(closure_130_2[6]).show(obj10);
          const obj2 = closure_130_1(closure_130_2[6]);
        }
        c4 = 3;
      }
    } catch (tmp29) {
      c4 = tmp;
      throw tmp29;
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
      const obj2 = { value, done: true };
      return obj2;
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
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_1 = tmp5;
          closure_0 = tmp2;
          closure_128_0 = undefined;
          c2 = 1;
          c3 = 1;
          const obj6 = { value: ApplyBuildOverrideUtils.clearBuildOverride(), done: false };
          return obj6;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } else {
        closure_128_0 = value;
        if (400 !== closure_128_0.status) {
          const result = closure_129_1(closure_129_2[5]).checkForUpdateAndReload();
          const obj3 = closure_129_1(closure_129_2[5]);
        } else {
          const obj8 = { title: "Clear Override Error", body: closure_128_0.body, isDismissable: true };
          closure_129_1(closure_129_2[6]).show(obj8);
          const obj = closure_129_1(closure_129_2[6]);
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
            const obj5 = { value: ApplyBuildOverrideUtils.applyPublicBuildOverride(buildOverride.payload), done: false };
            return obj5;
          }
          c4 = 3;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        closure_129_0 = value;
        if (400 === closure_129_0.status) {
          const obj7 = { title: "Override Error", body: closure_129_0.body[closure_130_5], isDismissable: true };
          closure_130_1(closure_130_2[6]).show(obj7);
          const obj = closure_130_1(closure_130_2[6]);
        }
      }
      const result = closure_130_1(closure_130_2[5]).checkForUpdateAndReload();
      const obj3 = closure_130_1(closure_130_2[5]);
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
              const obj6 = { value: ApplyBuildOverrideUtils.applyPublicBuildOverride(buildOverride.payload), done: false };
              return obj6;
            }
          }
          c4 = 3;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } else {
        closure_129_0 = value;
        if (400 === closure_129_0.status) {
          const obj8 = { title: "Override Error", body: closure_129_0.body[closure_130_5], isDismissable: true };
          closure_130_1(closure_130_2[6]).show(obj8);
          const obj = closure_130_1(closure_130_2[6]);
        }
      }
      const result = closure_130_1(closure_130_2[5]).checkForUpdateAndReload();
      const obj3 = closure_130_1(closure_130_2[5]);
    } catch (tmp26) {
      c4 = tmp;
      throw tmp26;
    }
  }
};
const PlatformUtils = fn(1380);
let str = "discord_ios";
if (PlatformUtils.isAndroid()) {
  str = "discord_android";
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/build_overrides/native/BuildOverrideUtils.tsx");

export const DEVICE_FIELD = str;
export { setBuildOverrideForBranch };
export { setBuildOverride };
export function refreshBuildOverride() {
  const result = BundleUpdaterDefault.checkForUpdateAndReload();
}
export { clearBuildOverride };
export function toggleOverride() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function setBuildOverrideFromLink() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}