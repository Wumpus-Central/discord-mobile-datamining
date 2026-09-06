// discord_app/modules/collectibles/profile_frames/native/tooling/FramePreviewOverrideStore.tsx
import LoggerDefault from "../../../../debug/Logger.tsx";
import NativeFileModuleDefault from "../../../../../../discord_common/js/packages/rtn-codegen/js/NativeFileModule.tsx";
import FileManagerUtils from "../../../../../utils/FileManagerUtils.android.tsx";
import asyncGeneratorStep from "../../../../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
function measure(arg0) {
  closure_0 = arg0;
  return new Promise((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    let size = Image.getSize(
      closure_0,
      (width, height) => {
        const size = { width, height };
        return closure_0(size);
      },
      (arg0) => {
        let error = arg0;
        if (!(arg0 instanceof Error)) {
          const _Error = Error;
          const _String = String;
          error = new Error(String(arg0));
        }
        return closure_1(error);
      },
    );
  });
}
let closure_10 = async function _readManifest() {
  closure_0 = tmp2;
  const _HermesInternal = HermesInternal;
  await FileManagerUtils.readFile("documents", "" + closure_2_6 + "/" + closure_2_5, "utf8");
  closure_128_0 = value;
  let parsed = null;
  if (null != closure_128_0) {
    const _JSON = JSON;
    parsed = JSON.parse(closure_128_0);
  }
  return parsed;
};
let closure_11 = async function _buildOverride(arg0) {
  let layers = arg0;
  c7 = 0;
  c8 = 0;
  c6 = 0;
  return (async (arg0) => {
    if (c8 === 2) {
      c8 = 3;
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
      while (true) {
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_4 = tmp;
            closure_3 = tmp2;
            closure_131_0 = layers;
            closure_131_1 = undefined;
            closure_131_2 = undefined;
            closure_131_3 = undefined;
            closure_131_4 = undefined;
            closure_131_5 = undefined;
            let folder;
            let filename;
            closure_131_8 = undefined;
            let parsed;
            let errorType;
            closure_131_11 = undefined;
            closure_131_12 = undefined;
            closure_131_13 = undefined;
            closure_131_14 = undefined;
            closure_131_15 = undefined;
            closure_131_16 = undefined;
            closure_131_17 = undefined;
            let _Array = Array;
            let tmp75 = layers;
            if (Array.isArray(layers.layers)) {
              let obj2 = NativeFileModuleDefault;
              let _HermesInternal = HermesInternal;
              closure_131_1 = "file://" + obj2.getConstants().DocumentsDirPath + "/" + closure_2_6;
              closure_131_2 = [];
              closure_131_3 = {};
              closure_131_4 = [];
              layers = tmp75.layers;
              closure_1 = layers[Symbol.iterator]();
            } else {
              let _Error = Error;
              let tmp18 = new.target;
              let tmp19 = new.target;
              let str = "Malformed manifest (no layers). Re-push the frame.";
              let error = new Error("Malformed manifest (no layers). Re-push the frame.");
              throw error;
            }
          }
        } else if (1 === tmp5) {
          c6 = 0;
          closure_1.return();
          throw closure_1_5;
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          closure_1.return();
          c8 = 3;
          let obj1 = { value, done: true };
          return obj1;
        } else {
          closure_131_16 = value;
          obj2 = { layer: null, order: null, index: null };
          obj2.layer = closure_131_15;
          obj2.order = closure_131_12;
          obj2.index = parsed.index;
          let arr = closure_131_2.push(obj2);
          let obj3 = { uri: null, ratio: null };
          obj3.uri = closure_131_14;
          let num2 = 0;
          let tmp71 = closure_131_3;
          let tmp72 = closure_131_13;
          if (closure_131_16.width > 0) {
            num2 = closure_131_16.height / closure_131_16.width;
          }
          obj3.ratio = num2;
          tmp71[tmp72] = obj3;
          obj = { layer: null, dims: null };
          obj.layer = closure_131_15;
          obj.dims = closure_131_16;
          arr = closure_131_4.push(obj);
          c6 = 0;
        }
        if (closure_1 === undefined) {
          if (0 === closure_131_2.length) {
            let _Error3 = Error;
            let tmp56 = new.target;
            let tmp57 = new.target;
            let str6 = "Frame has no valid layers.";
            let error1 = new Error("Frame has no valid layers.");
            throw error1;
          } else {
            let sorted = closure_131_2.sort(closure_132_0(closure_132_2[6]).compareLayerFiles);
            let obj12 = closure_132_0(closure_132_2[7]);
            closure_131_17 = obj12.computeProfileFrameDimensions(closure_131_4);
            let obj4 = { frameKey: null, previewUri: null, layers: null, layerAssetById: null };
            obj4.frameKey = closure_131_0.frameKey;
            let combined = null;
            if (null != closure_131_0.preview) {
              let _HermesInternal3 = HermesInternal;
              combined = "" + closure_131_1 + "/" + closure_131_0.preview;
            }
            obj4.previewUri = combined;
            obj4.layers = closure_131_2.map((layer) => layer.layer);
            obj4.layerAssetById = closure_131_3;
            let merged = Object.assign(closure_131_17);
            c8 = 3;
            let obj5 = { value: obj4, done: true };
            return obj5;
          }
        } else {
          c6 = 1;
          closure_131_5 = tmp28;
          folder = closure_131_5.folder;
          filename = closure_131_5.filename;
          let obj10 = closure_132_0(closure_132_2[6]);
          closure_131_8 = obj10.parseLayerFilename(filename);
          parsed = closure_131_8.parsed;
          errorType = closure_131_8.errorType;
          if (null == parsed) {
            let str2 = "invalid";
            if (null != errorType) {
              str2 = closure_132_0(closure_132_2[6]).PARSE_ERROR_LABELS[errorType];
            }
            closure_131_11 = str2;
            let _Error2 = Error;
            let _HermesInternal2 = HermesInternal;
            let str3 = 'Bad layer file "';
            let str4 = "/";
            let str5 = '": ';
            let tmp40 = new.target;
            let tmp41 = new.target;
            let error2 = new Error('Bad layer file "' + folder + "/" + filename + '": ' + closure_131_11);
            throw error2;
          } else {
            closure_131_12 = closure_132_0(closure_132_2[6]).FOLDER_ORDER_MAP[folder];
            let _HermesInternal4 = HermesInternal;
            closure_131_13 = "override-" + closure_131_12 + "-" + parsed.index;
            let _HermesInternal5 = HermesInternal;
            let str18 = "";
            let str19 = "/";
            let str20 = "/";
            closure_131_14 = "" + closure_131_1 + "/" + folder + "/" + filename;
            let obj6 = { id: null, type: null, order: null, anchor: null, responsive: null };
            obj6.id = closure_131_13;
            obj6.type = parsed.type;
            obj6.order = closure_131_12;
            obj6.anchor = parsed.anchor;
            obj6.responsive = parsed.responsive;
            closure_131_15 = obj6;
            c7 = 2;
            c8 = 1;
            let obj7 = { value: closure_132_9(closure_131_14), done: false };
            return obj7;
          }
        }
      }
    }
  })();
};
const Image = fn(17).Image;
const FrameOverrideConstants = fn(8204);
({ MANIFEST_NAME: hasOwnProperty, OVERRIDE_DIR: metroRequire } = FrameOverrideConstants);
let closure_7 = new LoggerDefault("FramePreviewOverrideStore");
let closure_8 = 0;
let module_560 = fn(560);
module_560 = module_560.create((arg0) => {
  closure_0 = arg0;
  let obj = { override: null, status: "idle", error: null, loadFromDevice: null, clear: null };
  closure_1 = asyncGeneratorStep(async () => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
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
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_1 = tmp3;
            closure_128_2 = undefined;
            closure_128_3 = undefined;
            closure_128_4 = undefined;
            closure_128_1 = function isStale() {
              return closure_1_0 !== sum;
            };
            sum = sum + 1;
            closure_128_0 = sum;
            tmp5({ status: "loading", error: null });
            c3 = 1;
            c4 = 2;
            c5 = 1;
            const obj1 = {
              value: (function readManifest() {
                const self = this;
                const apply = closure_1_10.apply;
                if (typeof apply === "unknown") {
                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                } else {
                  applyArgumentsResult = apply(self, arguments);
                }
                return applyArgumentsResult;
              })(),
              done: false,
            };
            return obj1;
          }
        } else if (1 === tmp8) {
          c3 = 0;
          closure_128_5 = closure_2;
          if (closure_128_1()) {
            c5 = 3;
            return { value: "HermesInternal", done: null };
          } else {
            const _Error = Error;
            if (closure_128_5 instanceof Error) {
              let message = closure_128_5.message;
            } else {
              const _String = String;
              message = String(closure_128_5);
            }
            closure_128_4 = message;
            logger.error("Failed to load frame override", closure_128_5);
            const obj2 = { status: "error", error: closure_128_4 };
            closure_129_0(obj2);
          }
        } else if (2 === tmp8) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_128_2 = value;
            if (closure_128_1()) {
              c3 = 0;
              c5 = 3;
              return { value: "HermesInternal", done: null };
            } else if (null == closure_128_2) {
              closure_129_0({
                status: "error",
                error: "No frame on device. Ask Cap to push one (or run pushFrameOverride.mjs).",
              });
              c3 = 0;
              c5 = 3;
              const obj4 = { value: undefined, done: true };
              return obj4;
            } else {
              c4 = 3;
              c5 = 1;
              const obj5 = {
                value: (function buildOverride() {
                  const self = this;
                  const apply = closure_1_11.apply;
                  if (typeof apply === "unknown") {
                    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                  } else {
                    applyArgumentsResult = apply(self, arguments);
                  }
                  return applyArgumentsResult;
                })(closure_128_2),
                done: false,
              };
              return obj5;
            }
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_128_3 = value;
          if (!closure_128_1()) {
            obj = { override: closure_128_3, status: "idle", error: null };
            closure_129_0(obj);
            c3 = 0;
            c5 = 3;
          }
          c3 = 0;
          c5 = 3;
          return { value: "HermesInternal", done: null };
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
  obj.loadFromDevice = function () {
    const self = this;
    const apply = closure_1.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  obj.clear = function clear() {
    closure_8 = closure_8 + 1;
    closure_0({ override: null, status: "idle", error: null });
  };
  return obj;
});
let size = fn(2);
const result = size.fileFinishedImporting(
  "modules/collectibles/profile_frames/native/tooling/FramePreviewOverrideStore.tsx",
);

export const useFramePreviewOverrideStore = module_560;
