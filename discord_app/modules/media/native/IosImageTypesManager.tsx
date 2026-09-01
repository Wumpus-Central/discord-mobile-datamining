// === Module 5104: _initialize ===

// Module 5104 (_initialize)
import timestampDefault from "timestamp" /* 3 */;
import initializeDefault from "initialize" /* 4662 */;
import closure_0 from "_slicedToArray" /* 32 */;
import { NativeModules } from "get ActivityIndicator" /* 17 */;

let closure_2 = new timestampDefault("IosImageTypesManager");
let c3 = null;
let c4 = null;
let c5 = null;
let c6 = null;
initializeDefault;
class IosImageTypesManager extends tmp3 {
}
const prototype = IosImageTypesManager.prototype;
prototype["_initialize"] = function _initialize() {
  const result = this.initializeSupportedImageTypes();
};
prototype["_terminate"] = function _terminate() {

};
prototype["initializeSupportedImageTypes"] = function initializeSupportedImageTypes() {
  if (null === closure_3) {
    try {
      const MediaManager = NativeModules.MediaManager;
      const supportedImageTypes = MediaManager.getSupportedImageTypes();
      closure_3 = supportedImageTypes;
      const _Set = Set;
      const set = new Set();
      const _Set2 = Set;
      const set1 = new Set();
      const _Set3 = Set;
      const set2 = new Set();
      const _Object = Object;
      const entries = Object.entries(supportedImageTypes);
      const tmp14 = entries[Symbol.iterator]();
      while (tmp14 !== undefined) {
        let tmp18 = callback;
        let tmp19 = callback(tmp16, 2);
        [r10040, tmp20] = tmp19;
        let extension = tmp20.extension;
        let tmp21 = extension;
        let mimeType = tmp20.mimeType;
        let tmp22 = null != extension;
        if (tmp22) {
          let tmp23 = extension;
          tmp22 = "" !== tmp21;
        }
        if (tmp22) {
          let tmp24 = set;
          let tmp25 = extension;
          let addResult = obj2.add(tmp21);
        }
        let tmp27 = mimeType;
        let tmp28 = null != mimeType;
        if (tmp28) {
          let tmp29 = mimeType;
          tmp28 = "" !== mimeType;
        }
        if (tmp28) {
          let tmp30 = set1;
          let tmp31 = mimeType;
          let addResult1 = obj3.add(mimeType);
        }
        continue;
      }
      set.add("jpg");
      set2.add("gif");
      set2.add("webp");
      let set3 = set;
      let set4 = set1;
      let set5 = set2;
      obj2 = set;
      obj3 = set1;
    } catch (tmp36) {
      logger.warn("Failed to get iOS supported image types:", tmp36);
      closure_3 = {};
      const _Set4 = Set;
      set3 = new Set();
      const _Set5 = Set;
      set4 = new Set();
      const _Set6 = Set;
      set5 = new Set();
    }
  }
};
prototype["getSupportedImageTypes"] = function getSupportedImageTypes() {
  return c3;
};
prototype["isImageTypeSupported"] = function isImageTypeSupported(arg0) {
  let tmp2 = null !== c3;
  if (tmp2) {
    tmp2 = arg0 in tmp;
  }
  return tmp2;
};
prototype["getSupportedExtensions"] = function getSupportedExtensions() {
  return c4;
};
prototype["getSupportedMimeTypes"] = function getSupportedMimeTypes() {
  return c5;
};
prototype["getAnimatedExtensions"] = function getAnimatedExtensions() {
  return c6;
};
prototype["isExtensionSupported"] = function isExtensionSupported(arg0) {
  let hasItem = null !== c4;
  if (hasItem) {
    hasItem = c4.has(arg0);
  }
  return hasItem;
};
prototype["isMimeTypeSupported"] = function isMimeTypeSupported(arg0) {
  let hasItem = null !== c5;
  if (hasItem) {
    hasItem = c5.has(arg0);
  }
  return hasItem;
};
prototype["isExtensionAnimated"] = function isExtensionAnimated(formatted) {
  let hasItem = null !== c6;
  if (hasItem) {
    hasItem = c6.has(formatted);
  }
  return hasItem;
};
const iosImageTypesManager = new IosImageTypesManager();
let tmp2 = new timestampDefault("IosImageTypesManager");
let result = require("set").fileFinishedImporting("modules/media/native/IosImageTypesManager.tsx");

export default iosImageTypesManager;