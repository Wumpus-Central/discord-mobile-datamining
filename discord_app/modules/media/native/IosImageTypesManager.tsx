// === Module 5160: IosImageTypesManager ===

// Module 5160 (IosImageTypesManager)
import LoggerDefault from "Logger" /* 3 */;
import _slicedToArray from "module_32" /* 32 */;
import LifecycleManager from "LifecycleManager" /* 1898 */;

const NativeModules = fn(17).NativeModules;
const logger = new LoggerDefault("IosImageTypesManager");
let closure_3 = null;
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
        let tmp19 = _slicedToArray(tmp16, 2);
        [r10040, tmp20] = tmp19;
        let extension = tmp20.extension;
        let tmp21 = extension;
        let mimeType = tmp20.mimeType;
        let tmp22 = null != extension;
        if (tmp22) {
          tmp22 = "" !== tmp21;
        }
        if (tmp22) {
          let addResult = obj2.add(tmp21);
        }
        let tmp28 = null != mimeType;
        if (tmp28) {
          tmp28 = "" !== mimeType;
        }
        if (tmp28) {
          let addResult1 = obj3.add(mimeType);
        }
        continue;
      }
      set.add("jpg");
      set2.add("gif");
      set2.add("webp");
      set3 = set;
      set4 = set1;
      set5 = set2;
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
  return closure_3;
};
prototype["isImageTypeSupported"] = function isImageTypeSupported(arg0) {
  let tmp2 = null !== closure_3;
  if (tmp2) {
    tmp2 = arg0 in tmp;
  }
  return tmp2;
};
prototype["getSupportedExtensions"] = function getSupportedExtensions() {
  return set3;
};
prototype["getSupportedMimeTypes"] = function getSupportedMimeTypes() {
  return set4;
};
prototype["getAnimatedExtensions"] = function getAnimatedExtensions() {
  return set5;
};
prototype["isExtensionSupported"] = function isExtensionSupported(arg0) {
  let hasItem = null !== set3;
  if (hasItem) {
    hasItem = set3.has(arg0);
  }
  return hasItem;
};
prototype["isMimeTypeSupported"] = function isMimeTypeSupported(arg0) {
  let hasItem = null !== set4;
  if (hasItem) {
    hasItem = set4.has(arg0);
  }
  return hasItem;
};
prototype["isExtensionAnimated"] = function isExtensionAnimated(formatted) {
  let hasItem = null !== set5;
  if (hasItem) {
    hasItem = set5.has(formatted);
  }
  return hasItem;
};
const iosImageTypesManager = new IosImageTypesManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/media/native/IosImageTypesManager.tsx");

export default iosImageTypesManager;