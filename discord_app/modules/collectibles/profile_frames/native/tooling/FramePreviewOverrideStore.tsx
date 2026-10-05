// === Module 7874: FramePreviewOverrideStore ===

// Module 7874 (FramePreviewOverrideStore)
import LoggerDefault from "Logger" /* 3 */;
import react_native from "react-native" /* 17 */;
import react_nativeDefault from "react-native" /* 1162 */;
import FileManagerUtils from "FileManagerUtils" /* 7876 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import FrameOverrideConstants from "FrameOverrideConstants" /* 7875 */;
import module_570 from "module_570" /* 570 */;
import size_mod from "module_2" /* 2 */;

let c1, c2, c4, c7, c8;

let hasOwnProperty;
let metroRequire;
function measure(arg0) {
  let closure_0 = arg0;
  const promise = new Promise((arg0, arg1) => {
    closure_0 = arg0;
    let closure_1 = arg1;
    size = Image.getSize(closure_0, (width, height) => {
      size = { width, height };
      return closure_0(size);
    }, function(arg0) {
      let error = arg0;
      if (!(arg0 instanceof Error)) {
        const _Error = Error;
        const _String = String;
        const self = this;
        const self2 = this;
        error = new Error(String(arg0));
      }
      return closure_1(error);
    });
  });
  return promise;
}
let obj = function _readManifest() {
  obj = _asyncToGenerator(async () => {
    let obj6;
    if (c2 === 2) {
      c2 = 3;
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
        let closure_0;
        c2 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_0 = undefined;
            const _HermesInternal = HermesInternal;
            c1 = 1;
            c2 = 1;
            const obj4 = { value: obj6.readFile("documents", "" + metroRequire + "/" + hasOwnProperty, "utf8"), done: false };
            obj6 = FileManagerUtils;
            return obj4;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_0 = value;
          let parsed = null;
          if (null != closure_0) {
            const _JSON = JSON;
            parsed = JSON.parse(closure_0);
          }
          c2 = 3;
          obj = { value: parsed, done: true };
          return obj;
        }
      } catch (tmp11) {
        c2 = 3;
        throw tmp11;
      }
    }
  });
  return obj(...arguments);
};
obj = function _buildOverride() {
  obj = _asyncToGenerator(async function(arg0) {
    let combined;
    let num2;
    let closure_0 = arg0;
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      while (true) {
        let closure_1;
        let layers;
        let layerAssetById;
        let closure_4;
        let c5;
        let folder;
        let filename;
        let parsed;
        let errorType;
        let str2;
        let order;
        let id;
        let uri;
        let obj11;
        let dims;
        let closure_17;
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            let obj4 = { value, done: true };
            return obj4;
          } else {
            closure_1 = undefined;
            layers = undefined;
            layerAssetById = undefined;
            closure_4 = undefined;
            c5 = undefined;
            folder = undefined;
            filename = undefined;
            closure_8 = undefined;
            parsed = undefined;
            errorType = undefined;
            str2 = undefined;
            order = undefined;
            id = undefined;
            uri = undefined;
            obj11 = undefined;
            dims = undefined;
            closure_17 = undefined;
            let _Array = Array;
            if (Array.isArray(closure_0.layers)) {
              let obj3 = react_nativeDefault;
              let _HermesInternal = HermesInternal;
              "file://" + obj3.getConstants().DocumentsDirPath + "/" + metroRequire;
              layers = [];
              layerAssetById = {};
              closure_4 = [];
              layers = closure_0.layers;
              closure_1 = layers[Symbol.iterator]();
            } else {
              let _Error = Error;
              let self = this;
              let self2 = this;
              let str = "Malformed manifest (no layers). Re-push the frame.";
              let error = new Error("Malformed manifest (no layers). Re-push the frame.");
              throw error;
            }
          }
        } else if (1 === tmp5) {
          let c6 = 0;
          closure_1.return();
          throw closure_1_5;
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          closure_1.return();
          c8 = 3;
          let obj5 = { value, done: true };
          return obj5;
        } else {
          dims = value;
          let obj6 = { layer: obj11, order, index: parsed.index };
          let arr = layers.push(obj6);
          let obj7 = { uri, ratio: num2 };
          num2 = 0;
          let tmp65 = layerAssetById;
          let tmp66 = id;
          if (dims.width > 0) {
            num2 = dims.height / dims.width;
          }
          tmp65[tmp66] = obj7;
          obj = { layer: obj11, dims };
          let arr2 = closure_4.push(obj);
          c6 = 0;
        }
        if (closure_1 === undefined) {
          if (0 === layers.length) {
            let _Error3 = Error;
            let self5 = this;
            let self6 = this;
            let str6 = "Frame has no valid layers.";
            let error1 = new Error("Frame has no valid layers.");
            throw error1;
          } else {
            let sorted = layers.sort(closure_132_0(closure_132_2[6]).compareLayerFiles);
            let obj12 = closure_132_0(closure_132_2[7]);
            closure_17 = obj12.computeProfileFrameDimensions(closure_4);
            let obj8 = { frameKey: closure_0.frameKey, previewUri: combined, layers: layers.map((layer) => layer.layer), layerAssetById };
            combined = null;
            if (null != closure_0.preview) {
              let _HermesInternal3 = HermesInternal;
              combined = "" + closure_1 + "/" + closure_0.preview;
            }
            let merged = Object.assign(closure_17);
            c8 = 3;
            let obj9 = { value: obj8, done: true };
            return obj9;
          }
        } else {
          c6 = 1;
          c5 = tmp26;
          folder = c5.folder;
          filename = c5.filename;
          let obj10 = closure_132_0(closure_132_2[6]);
          closure_8 = obj10.parseLayerFilename(filename);
          parsed = closure_8.parsed;
          errorType = closure_8.errorType;
          if (null == parsed) {
            str2 = "invalid";
            if (null != errorType) {
              str2 = closure_132_0(closure_132_2[6]).PARSE_ERROR_LABELS[errorType];
            }
            let _Error2 = Error;
            let _HermesInternal2 = HermesInternal;
            let str3 = "Bad layer file \"";
            let str4 = "/";
            let str5 = "\": ";
            let self3 = this;
            let self4 = this;
            let error2 = new Error("Bad layer file \"" + folder + "/" + filename + "\": " + str2);
            throw error2;
          } else {
            order = closure_132_0(closure_132_2[6]).FOLDER_ORDER_MAP[folder];
            let _HermesInternal4 = HermesInternal;
            id = "override-" + order + "-" + parsed.index;
            let _HermesInternal5 = HermesInternal;
            let str18 = "";
            let str19 = "/";
            let str20 = "/";
            uri = "" + closure_1 + "/" + folder + "/" + filename;
            obj11 = { id, type: parsed.type, order, anchor: parsed.anchor, responsive: parsed.responsive };
            c7 = 2;
            c8 = 1;
            let obj13 = { value: closure_132_9(uri), done: false };
            return obj13;
          }
        }
      }
    }
  });
  return obj(...arguments);
};
const Image = react_native.Image;
({ MANIFEST_NAME: hasOwnProperty, OVERRIDE_DIR: metroRequire } = FrameOverrideConstants);
const tmp3 = new LoggerDefault("FramePreviewOverrideStore");
let closure_7 = tmp3;
let closure_8 = 0;
obj = module_570.create((arg0) => {
  let closure_0 = arg0;
  obj = {
    override: null,
    status: "idle",
    error: null,
    loadFromDevice: function() {
      return closure_1(...arguments);
    },
    clear() {
      closure_8 = closure_8 + 1;
      closure_0({ override: null, status: "idle", error: null });
    }
  };
  let closure_1 = _asyncToGenerator(async () => {
    let sum;
    function readManifest() {
      return closure_1_10(...arguments);
    }
    function buildOverride() {
      return closure_1_11(...arguments);
    }
    if (c5 === 2) {
      c5 = 3;
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
      let c3;
      let closure_2;
      try {
        let override;
        let message;
        let isStale;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_1 = tmp;
            closure_2 = undefined;
            override = undefined;
            message = undefined;
            isStale = function isStale() {
              return sum !== closure_2_8;
            };
            sum = sum + 1;
            message({ status: "loading", error: null });
            c3 = 1;
            message = readManifest();
            c4 = 2;
            c5 = 1;
            const obj4 = { value: message, done: false };
            return obj4;
          }
        } else {
          if (1 === c4) {
            message = closure_2;
            c3 = 0;
            const message2 = closure_2;
            if (isStale()) {
              c5 = 3;
              return { value: "IconComponent", done: null };
            } else {
              const _Error = Error;
              message = message2 instanceof Error;
              if (message) {
                message = message2.message;
              } else {
                const _String = String;
                message = String(message2);
              }
              logger.error("Failed to load frame override", message2);
              message = closure_129_0;
              const obj5 = { status: "error", error: message };
              closure_129_0(obj5);
            }
          } else if (2 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              closure_2 = value;
              if (isStale()) {
                c3 = 0;
                c5 = 3;
                return { value: "IconComponent", done: null };
              } else if (null == closure_2) {
                message = closure_129_0;
                closure_129_0({ status: "error", error: "No frame on device. Ask Cap to push one (or run pushFrameOverride.mjs)." });
                c3 = 0;
                c5 = 3;
                const obj7 = { value: undefined, done: true };
                return obj7;
              } else {
                message = buildOverride(closure_2);
                c4 = 3;
                c5 = 1;
                const obj8 = { value: message, done: false };
                return obj8;
              }
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj9 = { value, done: true };
            return obj9;
          } else {
            override = value;
            if (isStale()) {
              c3 = 0;
              c5 = 3;
              return { value: "IconComponent", done: null };
            } else {
              message = closure_129_0;
              obj = { override, status: "idle", error: null };
              closure_129_0(obj);
              c3 = 0;
            }
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp36) {
        closure_2 = tmp36;
        if (0 === c3) {
          c5 = 3;
          throw tmp36;
        } else {
          c4 = 1;
        }
      }
    }
  });
  return obj;
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/collectibles/profile_frames/native/tooling/FramePreviewOverrideStore.tsx");

export const useFramePreviewOverrideStore = obj;