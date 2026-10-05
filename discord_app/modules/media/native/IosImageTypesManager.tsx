// discord_app/modules/media/native/IosImageTypesManager.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import react_nativeDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeMediaManagerModule.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import LifecycleManager from "../../../lib/LifecycleManager.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let set, set2;

const tmp2 = new LoggerDefault("IosImageTypesManager");
const _false = tmp2;
let closure_4 = null;
const set3 = null;
const set4 = null;
const set5 = null;
class IosImageTypesManager extends LifecycleManager {
  _initialize() {
    const result = this.initializeSupportedImageTypes();
  }
  _terminate() {}
  initializeSupportedImageTypes() {
    let tmp15;
    if (null === closure_4) {
      try {
        const obj = react_nativeDefault;
        const supportedImageTypes = obj.getSupportedImageTypes();
        closure_4 = supportedImageTypes;
        const _Set = Set;
        const self = this;
        const self2 = this;
        set = new Set();
        const _Set2 = Set;
        const self3 = this;
        const self4 = this;
        const set1 = new Set();
        const _Set3 = Set;
        const self5 = this;
        const self6 = this;
        set2 = new Set();
        const _Object = Object;
        const entries = Object.entries(supportedImageTypes);
        const obj3 = set;
        const obj4 = set1;
        const tmp9 = entries[Symbol.iterator]();
        while (tmp9 !== undefined) {
          let tmp14 = _slicedToArray(tmp11, 2);
          [r10042, tmp15] = tmp14;
          let extension = tmp15.extension;
          let tmp16 = extension;
          let mimeType = tmp15.mimeType;
          let tmp17 = null != extension;
          if (tmp17) {
            tmp17 = "" !== tmp16;
          }
          if (tmp17) {
            let addResult = obj3.add(tmp16);
          }
          let tmp23 = null != mimeType;
          if (tmp23) {
            tmp23 = "" !== mimeType;
          }
          if (tmp23) {
            let addResult1 = obj4.add(mimeType);
          }
          continue;
        }
        set.add("jpg");
        set2.add("gif");
        set2.add("webp");
      } catch (tmp31) {
        logger.warn("Failed to get iOS supported image types:", tmp31);
        closure_4 = {};
        const _Set4 = Set;
        const self7 = this;
        const self8 = this;
        new Set();
        const _Set5 = Set;
        const self9 = this;
        const self10 = this;
        new Set();
        const _Set6 = Set;
        const self11 = this;
        const self12 = this;
        new Set();
      }
    }
  }
  getSupportedImageTypes() {
    return closure_4;
  }
  isImageTypeSupported(arg0) {
    return null !== closure_4 && arg0 in tmp;
  }
  getSupportedExtensions() {
    return set3;
  }
  getSupportedMimeTypes() {
    return set4;
  }
  getAnimatedExtensions() {
    return set5;
  }
  isExtensionSupported(arg0) {
    const hasItem = null !== set3 && set3.has(arg0);
    return hasItem;
  }
  isMimeTypeSupported(arg0) {
    const hasItem = null !== set4 && set4.has(arg0);
    return hasItem;
  }
  isExtensionAnimated(formatted) {
    const hasItem = null !== set5 && set5.has(formatted);
    return hasItem;
  }
}
const prototype = IosImageTypesManager.prototype;
const iosImageTypesManager = new IosImageTypesManager();
let result = size.fileFinishedImporting("modules/media/native/IosImageTypesManager.tsx");

export default iosImageTypesManager;
