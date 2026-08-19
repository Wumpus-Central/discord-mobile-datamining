// === Module 8947: measure ===

// Module 8947 (measure)
import timestampDefault from "timestamp" /* 3 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import { Image } from "get ActivityIndicator" /* 17 */;
import OVERRIDE_DIR from "OVERRIDE_DIR" /* 8948 */;
import keys from "keys" /* 644 */;

const require = fn;
function measure(arg0) {
  closure_0 = arg0;
  return new Promise((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    const size = Image.getSize(closure_0, (width, height) => callback({ width, height }), (arg0) => {
      error = arg0;
      if (!(arg0 instanceof Error)) {
        const _Error = Error;
        const _String = String;
        error = new Error(String(arg0));
      }
      return callback(error);
    });
  });
}
function _readManifest() {
  const self = this;
  const tmp = callback(function*() {
    const _HermesInternal = HermesInternal;
    closure_0 = yield closure_1_0(table[4]).readFile("documents", "" + closure_1_6 + "/" + closure_1_5, "utf8");
    let parsed = null;
    if (null != closure_0) {
      const _JSON = JSON;
      parsed = JSON.parse(closure_0);
    }
    return parsed;
  });
  closure_10 = tmp;
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
    closure_0 = arg0;
    c7 = 0;
    c8 = 0;
    c6 = 0;
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
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        while (true) {
          c8 = 2;
          if (0 === filename) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_1 = undefined;
              let layers;
              closure_3 = undefined;
              let arr;
              c5 = undefined;
              let folder;
              filename = undefined;
              c8 = undefined;
              let parsed;
              let errorType;
              let str2;
              closure_12 = undefined;
              closure_13 = undefined;
              closure_14 = undefined;
              let obj6;
              let styles;
              closure_17 = undefined;
              let _Array = Array;
              if (Array.isArray(lib.layers)) {
                let obj2 = closure_1_1(closure_1_2[5]);
                let _HermesInternal = HermesInternal;
                "file://" + obj2.getConstants().DocumentsDirPath + "/" + c6;
                closure_3 = {};
                arr = [];
                layers = lib.layers;
                closure_1 = layers[Symbol.iterator]();
              } else {
                let _Error = Error;
                error = new Error("Malformed manifest (no layers). Re-push the frame.");
                throw error;
              }
            }
          } else if (1 === tmp5) {
            folder = 0;
            closure_1.return();
            throw c5;
          } else if (arg0 === 1) {
            c8 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            folder = 0;
            closure_1.return();
            c8 = 3;
            obj1 = { value: null, done: true };
            obj1[0] = arg1;
            return obj1;
          } else {
            styles = arg1;
            obj2 = { layer: null, order: null, index: null };
            obj2[0] = obj6;
            obj2[1] = closure_12;
            obj2[2] = parsed.index;
            arr = layers.push(obj2);
            let obj3 = { uri: null, ratio: null };
            obj3[0] = closure_14;
            let num2 = 0;
            let tmp72 = closure_3;
            let tmp73 = closure_13;
            if (styles.width > 0) {
              num2 = styles.height / styles.width;
            }
            obj3[1] = num2;
            tmp72[tmp73] = obj3;
            obj = { layer: null, dims: null };
            obj[0] = obj6;
            obj[1] = styles;
            arr = arr.push(obj);
            folder = 0;
          }
          if (closure_1 === undefined) {
            if (0 === layers.length) {
              let _Error3 = Error;
              let error1 = new Error("Frame has no valid layers.");
              throw error1;
            } else {
              let sorted = layers.sort(lib(layers[6]).compareLayerFiles);
              let obj12 = lib(layers[7]);
              closure_17 = obj12.computeProfileFrameDimensions(arr);
              let obj4 = { frameKey: null, previewUri: null, layers: null, layerAssetById: null };
              obj4[0] = lib.frameKey;
              let combined = null;
              if (null != lib.preview) {
                let _HermesInternal3 = HermesInternal;
                combined = "" + closure_1 + "/" + lib.preview;
              }
              obj4[1] = combined;
              obj4[2] = layers.map((item, index) => item.layer);
              obj4[3] = closure_3;
              let merged = Object.assign(closure_17);
              c8 = 3;
              let obj5 = { value: null, done: true };
              obj5[0] = obj4;
              return obj5;
            }
          } else {
            c5 = tmp28;
            folder = c5.folder;
            filename = c5.filename;
            let obj10 = lib(layers[6]);
            c8 = obj10.parseLayerFilename(filename);
            parsed = c8.parsed;
            errorType = c8.errorType;
            if (null == parsed) {
              str2 = "invalid";
              if (null != errorType) {
                str2 = lib(layers[6]).PARSE_ERROR_LABELS[errorType];
              }
              let _Error2 = Error;
              let _HermesInternal2 = HermesInternal;
              let error2 = new Error("Bad layer file \"" + folder + "/" + filename + "\": " + str2);
              throw error2;
            } else {
              closure_12 = lib(layers[6]).FOLDER_ORDER_MAP[folder];
              let _HermesInternal4 = HermesInternal;
              closure_13 = "override-" + closure_12 + "-" + parsed.index;
              let _HermesInternal5 = HermesInternal;
              closure_14 = "" + closure_1 + "/" + folder + "/" + filename;
              obj6 = { id: null, type: null, order: null, anchor: null, responsive: null };
              obj6[0] = closure_13;
              obj6[1] = parsed.type;
              obj6[2] = closure_12;
              obj6[3] = parsed.anchor;
              obj6[4] = parsed.responsive;
              filename = 2;
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
  closure_11 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ MANIFEST_NAME: c5, OVERRIDE_DIR: closure_6 } = OVERRIDE_DIR);
let closure_7 = new timestampDefault("FramePreviewOverrideStore");
let c8 = 0;
keys = keys.create((arg0) => {
  closure_0 = arg0;
  let obj = { override: null, status: "idle", error: null, loadFromDevice: null, clear: null };
  closure_1 = callback(function*() {
    if (c5 === 2) {
      c5 = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw arg1;
      } else if (arg0 === 2) {
        let obj = { value: null, done: true };
        obj[0] = arg1;
        return obj;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let isStale = tmp3;
            let callback = tmp5;
            closure_2 = undefined;
            c3 = undefined;
            c4 = undefined;
            isStale = function isStale() {
              return closure_0 !== closure_1_8;
            };
            sum = sum + 1;
            callback = sum;
            closure_1_0({ status: "loading", error: null });
            c3 = 1;
            c4 = 2;
            c5 = 1;
            obj1 = { value: null, done: false };
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
          let message = closure_2;
          if (closure_1_1()) {
            c5 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          } else {
            const _Error = Error;
            if (message instanceof Error) {
              message = message.message;
            } else {
              const _String = String;
              message = String(message);
            }
            c4 = message;
            closure_1_7.error("Failed to load frame override", c5);
            const obj2 = { status: "error", error: null };
            obj2[1] = c4;
            closure_1_0(obj2);
          }
        } else if (2 === tmp8) {
          if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            closure_2 = arg1;
            if (isStale()) {
              c3 = 0;
              c5 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            } else if (null == closure_2) {
              closure_1_0({ status: "error", error: "No frame on device. Ask Cap to push one (or run pushFrameOverride.mjs)." });
              c3 = 0;
              c5 = 3;
              const obj4 = { value: null, done: true };
              obj4[0] = undefined;
              return obj4;
            } else {
              c4 = 3;
              c5 = 1;
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
          c5 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
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
            c5 = 3;
          }
          c3 = 0;
          c5 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } catch (tmp44) {
        closure_2 = tmp44;
        if (tmp4 === c3) {
          c5 = tmp2;
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
    closure_8 = closure_8 + 1;
    callback({ override: null, status: "idle", error: null });
  };
  return obj;
});
const tmp3 = new timestampDefault("FramePreviewOverrideStore");
const result = require("obj132").fileFinishedImporting("modules/collectibles/profile_frames/native/tooling/FramePreviewOverrideStore.tsx");

export const useFramePreviewOverrideStore = keys;