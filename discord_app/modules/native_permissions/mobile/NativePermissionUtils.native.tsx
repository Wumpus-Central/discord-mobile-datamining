// discord_app/modules/native_permissions/mobile/NativePermissionUtils.native.tsx
import timestampDefault from "../../debug/Logger.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import useAlertStore from "../../../design/components/AlertModal/native/useAlertStore.native.tsx";
import openPrivacySettingsDefault from "openPrivacySettings.native.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import NativePermissionStatus from "../NativePermissionConstants.tsx";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import obj132 from "../../../utils/PlatformUtils.tsx";
import isMetaQuest from "../../device/MetaQuestUtils.android.tsx";
import { NativePermissionBaseUtils } from "../NativePermissionBaseUtils.tsx";

require = fn;
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
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_4 = tmp;
              closure_3 = tmp2;
              dependencyMap = undefined;
              closure_2 = dependencyMap;
              closure_1 = dependencyMap[Symbol.iterator]();
            }
          } else if (1 === tmp5) {
            let constants = 0;
            closure_1.return();
            throw closure_5;
          } else if (arg0 === 1) {
            c8 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            constants = 0;
            closure_1.return();
            c8 = 3;
            obj1 = { value: null, done: true };
            obj1[0] = arg1;
            return obj1;
          } else {
            closure_1 = arg1;
            if (closure_1 !== constants.AUTHORIZED) {
              constants = 0;
              let tmp11 = closure_1;
              closure_1.return();
              c8 = 3;
              obj = { value: null, done: true };
              obj[0] = tmp11;
              return obj;
            } else {
              constants = 0;
            }
          }
          if (closure_1 === undefined) {
            c8 = 3;
            let obj2 = { value: null, done: true };
            obj2[0] = constants.AUTHORIZED;
            return obj2;
          } else {
            constants = 1;
            dependencyMap = tmp19;
            c7 = 2;
            c8 = 1;
            let obj3 = { value: null, done: false };
            obj3[0] = dependencyMap();
            return obj3;
          }
        }
      }
    })();
  });
  closure_9 = tmp;
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
obj132 = obj132.isAndroid();
if (obj132) {
  obj132 = get_ActivityIndicator.Platform.constants.Version <= 28;
}
isMetaQuest = isMetaQuest.isMetaQuest();
if (obj132) {
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
if (obj132) {
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
    const obj = new timestampDefault("NativePermissionUtils");
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
  const intl = getSystemLocale.intl;
  obj[0] = intl.string(getSystemLocale.t.sMFVrS);
  obj[1] = body;
  obj[2] = onConfirm;
  obj.openAlert("permission-denied", jsx(React.lazy(() => callback(paths[11])(paths[10], paths.paths)), { title: null, body: null, onConfirm: null }));
};
if (obj132.isAndroid()) {
  fn = (arg0) => {
    const items = [NativeModules.NativePermissionManager.requestMicrophoneAuthorization, NativeModules.NativePermissionManager.requestModifyAudioAuthorization];
    return combineStatuses(items);
  };
} else {
  fn = NativeModules.NativePermissionManager.requestMicrophoneAuthorization;
}
obj132[NativePermissionTypes.AUDIO] = fn;
obj132[NativePermissionTypes.PHOTOS] = NativeModules.NativePermissionManager.requestPhotoAuthorization;
obj132[NativePermissionTypes.CONTACTS] = NativeModules.NativePermissionManager.requestContactsAuthorization;
obj132[NativePermissionTypes.INPUT_MONITORING] = () => Promise.resolve(constants.AUTHORIZED);
NativePermissionIOSUtils.requestPermissionLookup = obj132;
if (obj132.isAndroid()) {
  let fn2 = () => {
    const items = [NativeModules.NativePermissionManager.hasMicrophoneAuthorization, NativeModules.NativePermissionManager.hasModifyAudioAuthorization];
    return combineStatuses(items);
  };
} else {
  fn2 = NativeModules.NativePermissionManager.hasMicrophoneAuthorization;
}
obj132[NativePermissionTypes.AUDIO] = fn2;
obj132[NativePermissionTypes.INPUT_MONITORING] = () => Promise.resolve(constants.AUTHORIZED);
NativePermissionIOSUtils.hasPermissionLookup = obj132;
const nativePermissionIOSUtils = new NativePermissionIOSUtils();
const result = obj132.fileFinishedImporting("modules/native_permissions/mobile/NativePermissionUtils.native.tsx");

export default nativePermissionIOSUtils;