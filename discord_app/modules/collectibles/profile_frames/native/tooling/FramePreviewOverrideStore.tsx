import enforcing from "enforcing";
import { Image } from "get ActivityIndicator";
import OVERRIDE_DIR from "OVERRIDE_DIR";
import keys from "keys";

let c5;
let closure_6;
const require = arg1;
function measure(arg0) {
  let closure_0 = arg0;
  return new Promise((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    const size = outer1_4.getSize(closure_0, (width, height) => callback({ width, height }), (arg0) => {
      let error = arg0;
      if (!(arg0 instanceof Error)) {
        const _Error = Error;
        const _String = String;
        error = new Error(String(arg0));
      }
      return closure_1(error);
    });
  });
}
function _readManifest() {
  const self = this;
  const tmp = callback(function*() {
    if (table === 2) {
      table = 3;
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
        table = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            table = 3;
            throw arg1;
          } else if (arg0 === 2) {
            table = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_0 = tmp2;
            closure_0 = undefined;
            const _HermesInternal = HermesInternal;
            c1 = 1;
            table = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = outer1_0(table[4]).readFile("documents", "" + outer1_6 + "/" + outer1_5, "utf8");
            return obj1;
          }
        } else if (arg0 === 1) {
          table = 3;
          throw arg1;
        } else if (arg0 === 2) {
          table = 3;
          const obj2 = { value: null, done: true };
          obj2[0] = arg1;
          return obj2;
        } else {
          closure_0 = arg1;
          let parsed = null;
          if (null != closure_0) {
            const _JSON = JSON;
            parsed = JSON.parse(closure_0);
          }
          table = 3;
          obj = { value: null, done: true };
          obj[0] = parsed;
          return obj;
        }
      } catch (tmp12) {
        table = tmp;
        throw tmp12;
      }
    }
  });
  const _readManifest = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _buildOverride() {
  const self = this;
  const tmp = callback((arg0) => {
    let closure_0 = arg0;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (function*(arg0) {
      if (c8 === 2) {
        c8 = 3;
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
        while (true) {
          let num = 2;
          c8 = 2;
          if (0 === filename) {
            if (arg0 === 1) {
              let num7 = 3;
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              let num6 = 3;
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let arr = sorted;
              let enforcing = tmp2;
              let closure_1;
              let layers;
              enforcing = undefined;
              arr = undefined;
              let c5;
              let folder;
              filename = undefined;
              c8 = undefined;
              let parsed;
              let errorType;
              let str2;
              let closure_12;
              let closure_13;
              let closure_14;
              let obj6;
              let styles;
              let closure_17;
              let _Array = Array;
              let tmp76 = lib;
              if (Array.isArray(lib.layers)) {
                let tmp22 = outer1_1;
                let tmp23 = outer1_2;
                let obj2 = outer1_1(outer1_2[5]);
                let tmp24 = c6;
                let _HermesInternal = HermesInternal;
                closure_1 = "file://" + obj2.getConstants().DocumentsDirPath + "/" + c6;
                layers = [];
                enforcing = {};
                arr = [];
                layers = tmp76.layers;
                let tmp25 = layers;
                closure_1 = layers[Symbol.iterator]();
              } else {
                let _Error = Error;
                let tmp18 = new.target;
                let tmp19 = new.target;
                let str = "Malformed manifest (no layers). Re-push the frame.";
                let error = new Error("Malformed manifest (no layers). Re-push the frame.");
                let tmp21 = error;
                throw error;
              }
            }
          } else if (1 === tmp5) {
            let tmp15 = c5;
            let tmp16 = c5;
            folder = 0;
            let tmp17 = closure_1;
            closure_1.return();
            throw c5;
          } else if (arg0 === 1) {
            let num4 = 3;
            c8 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            folder = 0;
            let tmp14 = closure_1;
            closure_1.return();
            let num3 = 3;
            c8 = 3;
            let obj1 = { value: null, done: true };
            obj1[0] = arg1;
            return obj1;
          } else {
            let tmp66 = enforcing;
            styles = arg1;
            let tmp67 = layers;
            obj2 = { layer: null, order: null, index: null };
            let tmp68 = obj6;
            obj2[0] = obj6;
            let tmp69 = closure_12;
            obj2[1] = closure_12;
            let tmp70 = parsed;
            obj2[2] = parsed.index;
            arr = layers.push(obj2);
            let obj3 = { uri: null, ratio: null };
            let tmp74 = closure_14;
            obj3[0] = closure_14;
            let tmp75 = styles;
            let num2 = 0;
            let tmp72 = enforcing;
            let tmp73 = closure_13;
            if (styles.width > 0) {
              let tmp6 = enforcing;
              let tmp7 = styles;
              let tmp8 = styles;
              num2 = styles.height / styles.width;
            }
            let tmp9 = enforcing;
            obj3[1] = num2;
            tmp72[tmp73] = obj3;
            let tmp10 = arr;
            obj = { layer: null, dims: null };
            let tmp11 = obj6;
            obj[0] = obj6;
            let tmp12 = styles;
            obj[1] = styles;
            arr = arr.push(obj);
            folder = 0;
          }
          let tmp26 = layers;
          let tmp27 = closure_1;
          if (closure_1 === undefined) {
            let tmp44 = enforcing;
            let tmp45 = layers;
            if (0 === layers.length) {
              let _Error3 = Error;
              let tmp56 = new.target;
              let tmp57 = new.target;
              let str6 = "Frame has no valid layers.";
              let error1 = new Error("Frame has no valid layers.");
              let tmp59 = error1;
              throw error1;
            } else {
              sorted = enforcing;
              sorted = arr;
              sorted = layers;
              sorted = lib;
              sorted = layers;
              sorted = layers.sort(lib(layers[6]).compareLayerFiles);
              sorted = lib;
              sorted = layers;
              let obj12 = lib(layers[7]);
              sorted = arr;
              closure_17 = obj12.computeProfileFrameDimensions(arr);
              let obj4 = { frameKey: null, previewUri: null, layers: null, layerAssetById: null };
              sorted = lib;
              obj4[0] = lib.frameKey;
              sorted = lib;
              let combined = null;
              if (null != lib.preview) {
                let tmp46 = enforcing;
                let tmp47 = closure_1;
                let tmp48 = lib;
                let _HermesInternal3 = HermesInternal;
                combined = "" + closure_1 + "/" + lib.preview;
              }
              let tmp50 = enforcing;
              obj4[1] = combined;
              let tmp51 = layers;
              obj4[2] = layers.map((layer) => layer.layer);
              let tmp52 = enforcing;
              obj4[3] = enforcing;
              let tmp53 = closure_17;
              let tmp54 = obj4;
              let merged = Object.assign(closure_17);
              let num5 = 3;
              c8 = 3;
              let obj5 = { value: null, done: true };
              obj5[0] = obj4;
              return obj5;
            }
          } else {
            let tmp77 = enforcing;
            let tmp78 = arr;
            folder = 1;
            c5 = tmp28;
            let tmp79 = c5;
            folder = c5.folder;
            let tmp80 = c5;
            filename = c5.filename;
            let tmp81 = lib;
            let tmp82 = layers;
            let obj10 = lib(layers[6]);
            let tmp83 = filename;
            c8 = obj10.parseLayerFilename(filename);
            let tmp84 = c8;
            parsed = c8.parsed;
            let tmp85 = c8;
            errorType = c8.errorType;
            let tmp86 = parsed;
            if (null == parsed) {
              let tmp29 = enforcing;
              let tmp30 = errorType;
              str2 = "invalid";
              if (null != errorType) {
                let tmp31 = enforcing;
                let tmp32 = arr;
                let tmp33 = lib;
                let tmp34 = layers;
                let tmp35 = errorType;
                str2 = lib(layers[6]).PARSE_ERROR_LABELS[errorType];
              }
              let tmp36 = enforcing;
              let _Error2 = Error;
              let tmp37 = folder;
              let tmp38 = filename;
              let tmp39 = str2;
              let _HermesInternal2 = HermesInternal;
              let str3 = "Bad layer file \"";
              let str4 = "/";
              let str5 = "\": ";
              let tmp40 = new.target;
              let tmp41 = new.target;
              let error2 = new Error("Bad layer file \"" + folder + "/" + filename + "\": " + str2);
              let tmp43 = error2;
              throw error2;
            } else {
              let tmp87 = enforcing;
              let tmp88 = arr;
              let tmp89 = lib;
              let tmp90 = layers;
              let tmp91 = folder;
              closure_12 = lib(layers[6]).FOLDER_ORDER_MAP[folder];
              let tmp92 = closure_12;
              let tmp93 = parsed;
              let _HermesInternal4 = HermesInternal;
              closure_13 = "override-" + closure_12 + "-" + parsed.index;
              let tmp94 = closure_1;
              let tmp95 = folder;
              let tmp96 = filename;
              let _HermesInternal5 = HermesInternal;
              let str18 = "";
              let str19 = "/";
              let str20 = "/";
              closure_14 = "" + closure_1 + "/" + folder + "/" + filename;
              obj6 = { id: null, type: null, order: null, anchor: null, responsive: null };
              let tmp97 = closure_13;
              obj6[0] = closure_13;
              let tmp98 = parsed;
              obj6[1] = parsed.type;
              let tmp99 = closure_12;
              obj6[2] = closure_12;
              sorted = parsed;
              obj6[3] = parsed.anchor;
              sorted = parsed;
              obj6[4] = parsed.responsive;
              sorted = parsed;
              sorted = closure_14;
              filename = 2;
              let num13 = 1;
              c8 = 1;
              let obj7 = { value: null, done: false };
              obj7[0] = parsed(closure_14);
              return obj7;
            }
          }
        }
      }
    })();
  });
  const _buildOverride = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ MANIFEST_NAME: c5, OVERRIDE_DIR: closure_6 } = OVERRIDE_DIR);
let error = new require("timestamp")("FramePreviewOverrideStore");
let c8 = 0;
keys = keys.create((arg0) => {
  let closure_0 = arg0;
  let obj = { override: null, status: "idle", error: null, loadFromDevice: null, clear: null };
  let closure_1 = callback(function*() {
    if (message === 2) {
      message = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp7 === 3) {
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
        message = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            message = 3;
            throw arg1;
          } else if (arg0 === 2) {
            message = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let isStale = tmp3;
            let callback = tmp5;
            let closure_2;
            let c3;
            c4 = undefined;
            isStale = function isStale() {
              return closure_0 !== outer1_8;
            };
            const sum = outer1_8 + 1;
            outer1_8 = sum;
            callback = sum;
            outer1_0({ status: "loading", error: null });
            c3 = 1;
            c4 = 2;
            message = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = (function readManifest() {
              const self = this;
              const apply = closure_10.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            })();
            return obj1;
          }
        } else if (1 === tmp8) {
          c3 = 0;
          message = closure_2;
          if (outer1_1()) {
            message = 3;
            return { value: "HermesInternal", done: null };
          } else {
            const _Error = Error;
            if (message instanceof Error) {
              message = message.message;
            } else {
              const _String = String;
              message = String(message);
            }
            c4 = message;
            outer1_7.error("Failed to load frame override", message);
            const obj2 = { status: "error", error: null };
            obj2[1] = c4;
            outer1_0(obj2);
          }
        } else if (2 === tmp8) {
          if (arg0 === 1) {
            message = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            message = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            closure_2 = arg1;
            if (isStale()) {
              c3 = 0;
              message = 3;
              return { value: "HermesInternal", done: null };
            } else if (null == closure_2) {
              outer1_0({ status: "error", error: "No frame on device. Ask Cap to push one (or run pushFrameOverride.mjs)." });
              c3 = 0;
              message = 3;
              const obj4 = { value: null, done: true };
              obj4[0] = undefined;
              return obj4;
            } else {
              c4 = 3;
              message = 1;
              const obj5 = { value: null, done: false };
              obj5[0] = (function buildOverride(closure_2) {
                const self = this;
                const apply = closure_11.apply;
                if (typeof apply === "unknown") {
                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                } else {
                  applyArgumentsResult = apply(self, arguments);
                }
                return applyArgumentsResult;
              })(closure_2);
              return obj5;
            }
          }
        } else if (arg0 === 1) {
          message = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 0;
          message = 3;
          const obj6 = { value: null, done: true };
          obj6[0] = arg1;
          return obj6;
        } else {
          c3 = arg1;
          if (!isStale()) {
            obj = { override: null, status: "idle", error: null };
            obj[0] = c3;
            callback(obj);
            c3 = 0;
            message = 3;
          }
          c3 = 0;
          message = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp44) {
        closure_2 = tmp44;
        if (tmp4 === c3) {
          message = tmp2;
          throw tmp44;
        } else {
          c4 = tmp;
        }
      }
    }
  });
  obj[3] = function() {
    const self = this;
    const apply = closure_1.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  obj[4] = function clear() {
    outer1_8 = outer1_8 + 1;
    callback({ override: null, status: "idle", error: null });
  };
  return obj;
});
const tmp3 = new require("timestamp")("FramePreviewOverrideStore");
const result = require("OVERRIDE_DIR").fileFinishedImporting("modules/collectibles/profile_frames/native/tooling/FramePreviewOverrideStore.tsx");

export const useFramePreviewOverrideStore = keys;