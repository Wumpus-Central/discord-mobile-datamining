// discord_app/modules/native_permissions/mobile/NativePermissionUtils.native.tsx
import closure_3 from "set";
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import NativePermissionStatus from "NativePermissionStatus";
import { jsx } from "jsxProd";
import set from "set";
import isMetaQuest from "isMetaQuest";
import { NativePermissionBaseUtils } from "requestAuthorization";
import set from "set";
import set from "set";
import set from "get ActivityIndicator";

let NativePermissionTypes;
let closure_6;
const require = arg1;
function combineStatuses(items) {
  const self = this;
  const apply = _combineStatuses.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _combineStatuses() {
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
          if (0 === c7) {
            if (arg0 === 1) {
              let num8 = 3;
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              let num7 = 3;
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let noop = tmp;
              let closure_3 = tmp2;
              let tmp28 = dependencyMap;
              dependencyMap = undefined;
              let closure_1;
              let closure_2 = dependencyMap;
              let tmp29 = dependencyMap;
              closure_2 = dependencyMap;
              closure_1 = dependencyMap[Symbol.iterator]();
            }
          } else if (1 === tmp5) {
            let tmp14 = closure_5;
            let tmp15 = closure_5;
            let constants = 0;
            let tmp16 = closure_1;
            closure_1.return();
            throw closure_5;
          } else if (arg0 === 1) {
            let num4 = 3;
            c8 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            constants = 0;
            let tmp13 = closure_1;
            closure_1.return();
            let num3 = 3;
            c8 = 3;
            let obj1 = { value: null, done: true };
            obj1[0] = arg1;
            return obj1;
          } else {
            let tmp6 = closure_3;
            let tmp7 = noop;
            closure_1 = arg1;
            let tmp8 = closure_1;
            let tmp9 = constants;
            if (closure_1 !== constants.AUTHORIZED) {
              let tmp10 = closure_3;
              constants = 0;
              let tmp12 = closure_1;
              let tmp11 = closure_1;
              closure_1.return();
              let num2 = 3;
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = tmp11;
              return obj;
            } else {
              constants = 0;
            }
          }
          let tmp17 = closure_2;
          let tmp18 = closure_1;
          if (closure_1 === undefined) {
            let tmp22 = noop;
            let tmp23 = constants;
            let num6 = 3;
            c8 = 3;
            let obj2 = { value: null, done: true };
            obj2[0] = constants.AUTHORIZED;
            return obj2;
          } else {
            let tmp20 = closure_3;
            constants = 1;
            dependencyMap = tmp19;
            let tmp21 = dependencyMap;
            c7 = 2;
            let num5 = 1;
            c8 = 1;
            let obj3 = { value: null, done: false };
            obj3[0] = dependencyMap();
            return obj3;
          }
        }
      }
    })();
  });
  const _combineStatuses = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const NativeModules = get_ActivityIndicator.NativeModules;
({ NativePermissionTypes, NativePermissionStatus: closure_6 } = NativePermissionStatus);
set = set.isAndroid();
if (set) {
  set = get_ActivityIndicator.Platform.constants.Version <= 28;
}
isMetaQuest = isMetaQuest.isMetaQuest();
if (set) {
  let items = [NativeModules.NativePermissionManager.requestExternalStorageAuthorization];
  let items1 = items;
} else {
  items1 = [];
}
const items2 = [...items1];
const NativePermissionManager = NativeModules.NativePermissionManager;
if (isMetaQuest) {
  const items3 = [NativePermissionManager.requestAvatarCameraAuthorization];
  let items4 = items3;
} else {
  items4 = [NativePermissionManager.requestCameraAuthorization];
}
HermesBuiltin.arraySpread(items4, tmp6);
if (set) {
  const items5 = [NativeModules.NativePermissionManager.hasExternalStorageAuthorization];
  let items6 = items5;
} else {
  items6 = [];
}
const items7 = [...items6];
const NativePermissionManager2 = NativeModules.NativePermissionManager;
if (isMetaQuest) {
  const items8 = [NativePermissionManager2.hasAvatarCameraAuthorization];
  let items9 = items8;
} else {
  items9 = [NativePermissionManager2.hasCameraAuthorization];
}
HermesBuiltin.arraySpread(items9, tmp8);
let NativePermissionIOSUtils;
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
    const obj = new importDefault(3)("NativePermissionUtils");
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
  importDefault(4744)();
};
prototype["openAlertModal"] = function openAlertModal(arg0) {
  let body;
  let onConfirm;
  ({ body, onConfirm } = arg0);
  let obj = require(4534) /* useAlertStore */;
  obj = { title: null, body: null, onConfirm: null };
  const intl = require(1236) /* getSystemLocale */.intl;
  obj[0] = intl.string(require(1236) /* getSystemLocale */.t.sMFVrS);
  obj[1] = body;
  obj[2] = onConfirm;
  obj.openAlert("permission-denied", jsx(React.lazy(() => callback(paths[11])(paths[10], paths.paths)), { title: null, body: null, onConfirm: null }));
};
set = { [NativePermissionTypes.CAMERA]: () => combineStatuses(items2), [NativePermissionTypes.HEADSET_CAMERA]: NativeModules.NativePermissionManager.requestHeadsetCameraAuthorization };
if (set.isAndroid()) {
  let fn = () => {
    const items = [NativeModules.NativePermissionManager.requestMicrophoneAuthorization, NativeModules.NativePermissionManager.requestModifyAudioAuthorization];
    return combineStatuses(items);
  };
} else {
  fn = NativeModules.NativePermissionManager.requestMicrophoneAuthorization;
}
set[NativePermissionTypes.AUDIO] = fn;
set[NativePermissionTypes.PHOTOS] = NativeModules.NativePermissionManager.requestPhotoAuthorization;
set[NativePermissionTypes.CONTACTS] = NativeModules.NativePermissionManager.requestContactsAuthorization;
set[NativePermissionTypes.INPUT_MONITORING] = () => Promise.resolve(constants.AUTHORIZED);
NativePermissionIOSUtils.requestPermissionLookup = set;
set = { [NativePermissionTypes.CAMERA]: () => combineStatuses(items7), [NativePermissionTypes.HEADSET_CAMERA]: NativeModules.NativePermissionManager.hasHeadsetCameraAuthorization };
if (set.isAndroid()) {
  let fn2 = () => {
    const items = [NativeModules.NativePermissionManager.hasMicrophoneAuthorization, NativeModules.NativePermissionManager.hasModifyAudioAuthorization];
    return combineStatuses(items);
  };
} else {
  fn2 = NativeModules.NativePermissionManager.hasMicrophoneAuthorization;
}
set[NativePermissionTypes.AUDIO] = fn2;
set[NativePermissionTypes.INPUT_MONITORING] = () => Promise.resolve(constants.AUTHORIZED);
NativePermissionIOSUtils.hasPermissionLookup = set;
const nativePermissionIOSUtils = new NativePermissionIOSUtils();
const result = set.fileFinishedImporting("modules/native_permissions/mobile/NativePermissionUtils.native.tsx");

export default nativePermissionIOSUtils;