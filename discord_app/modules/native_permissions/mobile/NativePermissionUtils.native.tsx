// === Module 5146: mobile/NativePermissionUtils ===

// Module 5146 (mobile/NativePermissionUtils)
import LoggerDefault from "Logger" /* 3 */;
import util from "util" /* 1114 */;
import useAlertStore from "useAlertStore" /* 4906 */;
import openPrivacySettingsDefault from "openPrivacySettings" /* 5147 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

require = fn;
function combineStatuses() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_9 = async function _combineStatuses(arg0) {
  dependencyMap = arg0;
  c7 = 0;
  c8 = 0;
  c6 = 0;
  return (async (arg0, value) => {
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
            closure_131_0 = undefined;
            closure_131_1 = undefined;
            closure_2 = dependencyMap;
            closure_1 = dependencyMap[Symbol.iterator]();
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
          closure_131_1 = value;
          if (closure_131_1 !== closure_132_6.AUTHORIZED) {
            c6 = 0;
            let tmp11 = closure_131_1;
            closure_1.return();
            c8 = 3;
            obj = { value: tmp11, done: true };
            return obj;
          } else {
            c6 = 0;
          }
        }
        if (closure_1 === undefined) {
          c8 = 3;
          let obj2 = { value: closure_132_6.AUTHORIZED, done: true };
          return obj2;
        } else {
          c6 = 1;
          closure_131_0 = tmp19;
          c7 = 2;
          c8 = 1;
          let obj3 = { value: closure_131_0(), done: false };
          return obj3;
        }
      }
    }
  })();
};
get_ActivityIndicator = fn(17);
const NativeModules = get_ActivityIndicator.NativeModules;
const NativePermissionConstants = fn(4770);
({ NativePermissionTypes, NativePermissionStatus: metroRequire } = NativePermissionConstants);
const jsx = fn(21).jsx;
let PlatformUtils = fn(1115);
PlatformUtils = PlatformUtils.isAndroid();
if (PlatformUtils) {
  PlatformUtils = get_ActivityIndicator.Platform.constants.Version <= 28;
}
let MetaQuestUtils = fn(1608);
MetaQuestUtils = MetaQuestUtils.isMetaQuest();
if (PlatformUtils) {
  let items = [NativeModules.NativePermissionManager.requestExternalStorageAuthorization];
  let items1 = items;
} else {
  items1 = [];
}
const items2 = [...items1];
const NativePermissionManager = NativeModules.NativePermissionManager;
if (MetaQuestUtils) {
  const items3 = [NativePermissionManager.requestAvatarCameraAuthorization];
  let items4 = items3;
} else {
  items4 = [NativePermissionManager.requestCameraAuthorization];
}
HermesBuiltin.arraySpread(items4, tmp6);
if (PlatformUtils) {
  const items5 = [NativeModules.NativePermissionManager.hasExternalStorageAuthorization];
  let items6 = items5;
} else {
  items6 = [];
}
const items7 = [...items6];
const NativePermissionManager2 = NativeModules.NativePermissionManager;
if (MetaQuestUtils) {
  const items8 = [NativePermissionManager2.hasAvatarCameraAuthorization];
  let items9 = items8;
} else {
  items9 = [NativePermissionManager2.hasCameraAuthorization];
}
HermesBuiltin.arraySpread(items9, tmp8);
let NativePermissionIOSUtils;
const NativePermissionBaseUtils = fn(5143).NativePermissionBaseUtils;
class NativePermissionIOSUtils extends NativePermissionBaseUtils {
}
const prototype = NativePermissionIOSUtils.prototype;
prototype["requestPermissionCore"] = function requestPermissionCore(arg0, arg1) {
  return this.performRequest(NativePermissionIOSUtils.requestPermissionLookup, arg0, arg1);
};
prototype["hasPermissionCore"] = function hasPermissionCore(arg0, arg1) {
  return this.performRequest(NativePermissionIOSUtils.hasPermissionLookup, arg0, arg1);
};
prototype["performRequest"] = function performRequest(hasPermissionLookup, arg1, arg2) {
  if (null == hasPermissionLookup[arg1]) {
    const obj = new LoggerDefault("NativePermissionUtils");
    const _HermesInternal = HermesInternal;
    obj.error("Unable to locate permission type " + arg1);
    let resolved = Promise.resolve(false);
  } else {
    const self = this;
    resolved = this.requestAuthorization(arg1, tmp, arg2);
  }
  return resolved;
};
prototype["didHavePermission"] = function didHavePermission(arg0) {
  const storage = this.storage;
  return storage.hasPermission(arg0);
};
prototype["openSettings"] = function openSettings() {
  openPrivacySettingsDefault();
};
prototype["openAlertModal"] = function openAlertModal(arg0) {
  ({ body, onConfirm } = arg0);
  const obj = { title: null, body: null, onConfirm: null };
  const intl = util.intl;
  obj.title = intl.string(util.t.sMFVrS);
  obj.body = body;
  obj.onConfirm = onConfirm;
  obj.openAlert("permission-denied", jsx(noop.lazy(() => require("asyncRequireImpl")(paths[10], paths.paths)), { title: null, body: null, onConfirm: null }));
};
PlatformUtils = { [NativePermissionTypes.CAMERA]: () => combineStatuses(items2), [NativePermissionTypes.HEADSET_CAMERA]: NativeModules.NativePermissionManager.requestHeadsetCameraAuthorization };
PlatformUtils = fn(1115);
if (PlatformUtils.isAndroid()) {
  fn = () => {
    const items = [NativeModules.NativePermissionManager.requestMicrophoneAuthorization, NativeModules.NativePermissionManager.requestModifyAudioAuthorization];
    return combineStatuses(items);
  };
} else {
  fn = NativeModules.NativePermissionManager.requestMicrophoneAuthorization;
}
PlatformUtils[NativePermissionTypes.AUDIO] = fn;
PlatformUtils[NativePermissionTypes.PHOTOS] = NativeModules.NativePermissionManager.requestPhotoAuthorization;
PlatformUtils[NativePermissionTypes.CONTACTS] = NativeModules.NativePermissionManager.requestContactsAuthorization;
PlatformUtils[NativePermissionTypes.INPUT_MONITORING] = () => Promise.resolve(constants.AUTHORIZED);
NativePermissionIOSUtils.requestPermissionLookup = PlatformUtils;
PlatformUtils = { [NativePermissionTypes.CAMERA]: () => combineStatuses(items7), [NativePermissionTypes.HEADSET_CAMERA]: NativeModules.NativePermissionManager.hasHeadsetCameraAuthorization };
PlatformUtils = fn(1115);
if (PlatformUtils.isAndroid()) {
  let fn2 = () => {
    const items = [NativeModules.NativePermissionManager.hasMicrophoneAuthorization, NativeModules.NativePermissionManager.hasModifyAudioAuthorization];
    return combineStatuses(items);
  };
} else {
  fn2 = NativeModules.NativePermissionManager.hasMicrophoneAuthorization;
}
PlatformUtils[NativePermissionTypes.AUDIO] = fn2;
PlatformUtils[NativePermissionTypes.INPUT_MONITORING] = () => Promise.resolve(constants.AUTHORIZED);
NativePermissionIOSUtils.hasPermissionLookup = PlatformUtils;
const nativePermissionIOSUtils = new NativePermissionIOSUtils();
const size = fn(2);
const result = size.fileFinishedImporting("modules/native_permissions/mobile/NativePermissionUtils.native.tsx");

export default nativePermissionIOSUtils;