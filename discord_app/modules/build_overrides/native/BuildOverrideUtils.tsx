// === Module 11412: build_overrides/BuildOverrideUtils ===

// Module 11412 (build_overrides/BuildOverrideUtils)
import BuildOverrideUtils from "BuildOverrideUtils" /* 1366 */;
import ApplyBuildOverrideUtils from "ApplyBuildOverrideUtils" /* 11413 */;
import BundleUpdaterDefault from "BundleUpdater" /* 11414 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import BuildOverrideStore from "BuildOverrideStore" /* 11095 */;
import PlatformUtils from "PlatformUtils" /* 1369 */;
import size from "module_2" /* 2 */;

let c3, c4;

function setBuildOverrideForBranch(id) {
  obj = { type: "branch", id };
  setBuildOverride(obj);
}
function setBuildOverride() {
  return obj(...arguments);
}
let obj = function _setBuildOverride() {
  obj = _asyncToGenerator(async (arg0) => {
    let obj5;
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
            let closure_2 = tmp;
            let closure_1 = tmp4;
            closure_0 = undefined;
            const obj6 = {};
            obj6[str] = closure_0;
            c3 = 1;
            c4 = 1;
            const obj7 = { value: obj5.applyStaffBuildOverride(obj6), done: false };
            obj5 = ApplyBuildOverrideUtils;
            return obj7;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          closure_0 = value;
          if (400 !== closure_0.status) {
            const obj3 = closure_130_1(closure_130_2[4]);
            const result = obj3.checkForUpdateAndReload();
          } else {
            const obj9 = { title: "Override Error", body: closure_0.body[closure_130_5], isDismissable: true };
            obj = closure_130_1(closure_130_2[5]);
            obj.show(obj9);
          }
          c4 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp20) {
        c4 = 3;
        throw tmp20;
      }
    }
  });
  return obj(...arguments);
};
function clearBuildOverride() {
  return obj(...arguments);
}
obj = function _clearBuildOverride() {
  obj = _asyncToGenerator(async () => {
    let closure_0;
    let obj5;
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
        let tmp;
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
            let closure_1 = tmp4;
            tmp = undefined;
            c2 = 1;
            c3 = 1;
            const obj6 = { value: obj5.clearBuildOverride(), done: false };
            obj5 = ApplyBuildOverrideUtils;
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
          tmp = value;
          if (400 !== tmp.status) {
            const obj3 = closure_129_1(closure_129_2[4]);
            const result = obj3.checkForUpdateAndReload();
          } else {
            const obj8 = { title: "Clear Override Error", body: tmp.body, isDismissable: true };
            obj = closure_129_1(closure_129_2[5]);
            obj.show(obj8);
          }
          c3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp17) {
        c3 = 3;
        throw tmp17;
      }
    }
  });
  return obj(...arguments);
};
obj = function _toggleOverride() {
  let currentBuildOverride;
  obj = _asyncToGenerator(async (arg0) => {
    let tmp36Result;
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
            let c2 = 0;
            let closure_1 = tmp;
            closure_0 = undefined;
            const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
            let id;
            if (overrides != null) {
              if (overrides[str] != null) {
                id = tmp17.id;
              }
            }
            const buildOverride = currentBuildOverride.getBuildOverride(tmp34);
            const override = buildOverride.override;
            let id1;
            if (override != null) {
              const targetBuildOverride = override.targetBuildOverride;
              if (targetBuildOverride != null) {
                if (targetBuildOverride[str] != null) {
                  id1 = tmp22.id;
                }
              }
            }
            if (id === id1) {
              clearBuildOverride();
            } else if (null != buildOverride.payload) {
              const obj10 = BuildOverrideUtils;
              if (obj10.isManualBuildOverrideLink(closure_0)) {
                if (null != id1) {
                  setBuildOverrideForBranch(id1);
                  c4 = 3;
                  return { value: "IconComponent", done: null };
                }
              }
              c3 = 1;
              c4 = 1;
              const obj5 = { value: tmp36Result.applyPublicBuildOverride(buildOverride.payload), done: false };
              tmp36Result = ApplyBuildOverrideUtils;
              return obj5;
            }
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_0 = value;
          if (400 !== closure_0.status) {
            const obj3 = closure_130_1(closure_130_2[4]);
            const result = obj3.checkForUpdateAndReload();
          } else {
            const obj7 = { title: "Override Error", body: closure_0.body[closure_130_5], isDismissable: true };
            obj = closure_130_1(closure_130_2[5]);
            obj.show(obj7);
          }
        }
        c4 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp28) {
        c4 = 3;
        throw tmp28;
      }
    }
  });
  return obj(...arguments);
};
obj = function _setBuildOverrideFromLink() {
  let currentBuildOverride;
  obj = _asyncToGenerator(async (arg0) => {
    let obj5;
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
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
            let closure_2 = tmp;
            let closure_1 = tmp4;
            closure_0 = undefined;
            const overrides = currentBuildOverride.getCurrentBuildOverride().overrides;
            let id;
            const tmp31 = closure_0;
            if (overrides != null) {
              if (overrides[str] != null) {
                id = tmp17.id;
              }
            }
            const buildOverride = currentBuildOverride.getBuildOverride(tmp31);
            const override = buildOverride.override;
            let id1;
            if (override != null) {
              const targetBuildOverride = override.targetBuildOverride;
              if (targetBuildOverride != null) {
                if (targetBuildOverride[str] != null) {
                  id1 = tmp22.id;
                }
              }
            }
            if (id !== id1) {
              if (null != buildOverride.payload) {
                c3 = 1;
                c4 = 1;
                const obj6 = { value: obj5.applyPublicBuildOverride(buildOverride.payload), done: false };
                obj5 = ApplyBuildOverrideUtils;
                return obj6;
              }
            }
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          closure_0 = value;
          if (400 !== closure_0.status) {
            const obj3 = closure_130_1(closure_130_2[4]);
            const result = obj3.checkForUpdateAndReload();
          } else {
            const obj8 = { title: "Override Error", body: closure_0.body[closure_130_5], isDismissable: true };
            obj = closure_130_1(closure_130_2[5]);
            obj.show(obj8);
          }
        }
        c4 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp25) {
        c4 = 3;
        throw tmp25;
      }
    }
  });
  return obj(...arguments);
};
let str = "discord_ios";
if (PlatformUtils.isAndroid()) {
  str = "discord_android";
}
let result = size.fileFinishedImporting("modules/build_overrides/native/BuildOverrideUtils.tsx");

export const DEVICE_FIELD = str;
export { setBuildOverrideForBranch };
export const setBuildOverrideForId = function setBuildOverrideForId(id) {
  obj = { type: "id", id };
  setBuildOverride(obj);
};
export { setBuildOverride };
export const refreshBuildOverride = function refreshBuildOverride() {
  obj = BundleUpdaterDefault;
  const result = obj.checkForUpdateAndReload();
};
export { clearBuildOverride };
export const toggleOverride = function toggleOverride() {
  return obj(...arguments);
};
export const setBuildOverrideFromLink = function setBuildOverrideFromLink() {
  return obj(...arguments);
};