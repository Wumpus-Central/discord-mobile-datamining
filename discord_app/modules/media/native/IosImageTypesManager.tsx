// discord_app/modules/media/native/IosImageTypesManager.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import NativeMediaManagerModuleDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeMediaManagerModule.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import LifecycleManager from "../../../lib/LifecycleManager.tsx";

const logger = new LoggerDefault("IosImageTypesManager");
let closure_4 = null;
class IosImageTypesManager extends tmp3 {}
const prototype = IosImageTypesManager.prototype;
prototype["_initialize"] = function _initialize() {
  const result = this.initializeSupportedImageTypes();
};
prototype["_terminate"] = function _terminate() {};
prototype["initializeSupportedImageTypes"] = function initializeSupportedImageTypes() {
  if (null === closure_4) {
    try {
      const supportedImageTypes = NativeMediaManagerModuleDefault.getSupportedImageTypes();
      closure_4 = supportedImageTypes;
      const _Set = Set;
      const set = new Set();
      const _Set2 = Set;
      const set1 = new Set();
      const _Set3 = Set;
      const set2 = new Set();
      const _Object = Object;
      const entries = Object.entries(supportedImageTypes);
      const tmp15 = entries[Symbol.iterator]();
      while (tmp15 !== undefined) {
        let tmp20 = _slicedToArray(tmp17, 2);
        [r10042, tmp21] = tmp20;
        let extension = tmp21.extension;
        let tmp22 = extension;
        let mimeType = tmp21.mimeType;
        let tmp23 = null != extension;
        if (tmp23) {
          tmp23 = "" !== tmp22;
        }
        if (tmp23) {
          let addResult = obj3.add(tmp22);
        }
        let tmp29 = null != mimeType;
        if (tmp29) {
          tmp29 = "" !== mimeType;
        }
        if (tmp29) {
          let addResult1 = obj4.add(mimeType);
        }
        continue;
      }
      set.add("jpg");
      set2.add("gif");
      set2.add("webp");
      set3 = set;
      set4 = set1;
      set5 = set2;
      obj3 = set;
      obj4 = set1;
    } catch (tmp37) {
      logger.warn("Failed to get iOS supported image types:", tmp37);
      closure_4 = {};
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
  return closure_4;
};
prototype["isImageTypeSupported"] = function isImageTypeSupported(arg0) {
  let tmp2 = null !== closure_4;
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
