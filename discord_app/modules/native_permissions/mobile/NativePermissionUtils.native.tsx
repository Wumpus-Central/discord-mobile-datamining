// === Module 7294: mobile/NativePermissionUtils ===

// Module 7294 (mobile/NativePermissionUtils)
import LoggerDefault from "Logger" /* 3 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import intl2 from "intl" /* 1126 */;
import useAlertStore from "useAlertStore" /* 5716 */;
import NativePermissionBaseUtils2 from "NativePermissionBaseUtils" /* 7291 */;
import react_nativeDefault from "react-native" /* 7296 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import NativePermissionConstants from "NativePermissionConstants" /* 5105 */;
import PlatformUtils_mod from "PlatformUtils" /* 1369 */;
import MetaQuestUtils_mod from "MetaQuestUtils" /* 1615 */;
import react_native2_mod from "react-native" /* 7295 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let c7, c8;

let AUDIO;
let AUDIO2;
let HEADSET_CAMERA;
let HEADSET_CAMERA2;
let NativePermissionTypes;
let fn;
let fn2;
let hasOwnProperty;
let items1;
let items4;
let items6;
let items9;
let react_native2;
let tmp6;
function combineStatuses() {
  return obj(...arguments);
}
let requestPermissionLookup = function _combineStatuses() {
  let obj = _asyncToGenerator(async (arg0) => {
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
        let c0;
        let closure_1;
        c8 = 2;
        if (0 === c7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            let obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_4 = tmp;
            let closure_3 = tmp2;
            c0 = undefined;
            let closure_2 = closure_0;
            closure_1 = closure_0[Symbol.iterator]();
          }
        } else if (1 === tmp5) {
          let c6 = 0;
          closure_1.return();
          throw constants;
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          closure_1.return();
          c8 = 3;
          let obj4 = { value, done: true };
          return obj4;
        } else {
          closure_1 = value;
          if (closure_1 !== closure_132_5.AUTHORIZED) {
            c6 = 0;
            let tmp11 = closure_1;
            closure_1.return();
            c8 = 3;
            let obj = { value: tmp11, done: true };
            return obj;
          } else {
            c6 = 0;
          }
        }
        if (closure_1 === undefined) {
          c8 = 3;
          let obj5 = { value: closure_132_5.AUTHORIZED, done: true };
          return obj5;
        } else {
          c6 = 1;
          c0 = tmp19;
          c7 = 2;
          c8 = 1;
          let obj6 = { value: c0(), done: false };
          return obj6;
        }
      }
    }
  });
  return obj(...arguments);
};
const Platform = react_native.Platform;
({ NativePermissionTypes, NativePermissionStatus: hasOwnProperty } = NativePermissionConstants);
const jsx = Fragment.jsx;
let PlatformUtils = PlatformUtils_mod;
PlatformUtils = PlatformUtils.isAndroid();
if (PlatformUtils) {
  let num = 28;
  PlatformUtils = Platform.constants.Version <= 28;
}
let MetaQuestUtils = MetaQuestUtils_mod;
MetaQuestUtils = MetaQuestUtils.isMetaQuest();
if (PlatformUtils) {
  let items = [react_native2.requestExternalStorageAuthorization];
  items1 = items;
} else {
  items1 = [];
}
const items2 = [...items1];
react_native2 = react_native2_mod;
if (MetaQuestUtils) {
  const items3 = [react_native2.requestAvatarCameraAuthorization];
  items4 = items3;
} else {
  items4 = [react_native2.requestCameraAuthorization];
}
HermesBuiltin.arraySpread(items2, items4, tmp6);
if (PlatformUtils) {
  const items5 = [react_native2.hasExternalStorageAuthorization];
  items6 = items5;
} else {
  items6 = [];
}
const items7 = [...items6];
react_native2 = react_native2_mod;
if (MetaQuestUtils) {
  const items8 = [react_native2.hasAvatarCameraAuthorization];
  items9 = items8;
} else {
  items9 = [react_native2.hasCameraAuthorization];
}
HermesBuiltin.arraySpread(items7, items9, tmp9);
const NativePermissionBaseUtils = NativePermissionBaseUtils2.NativePermissionBaseUtils;
class NativePermissionIOSUtils extends NativePermissionBaseUtils {
  requestPermissionCore(arg0, arg1) {
    return this.performRequest(NativePermissionIOSUtils.requestPermissionLookup, arg0, arg1);
  }
  hasPermissionCore(arg0, arg1) {
    return this.performRequest(NativePermissionIOSUtils.hasPermissionLookup, arg0, arg1);
  }
  performRequest(hasPermissionLookup, arg1, arg2) {
    let resolved;
    if (null == hasPermissionLookup[arg1]) {
      const self2 = this;
      const self3 = this;
      const _HermesInternal = HermesInternal;
      const obj = new LoggerDefault("NativePermissionUtils");
      obj.error("Unable to locate permission type " + arg1);
      resolved = Promise.resolve(false);
    } else {
      const self = this;
      resolved = this.requestAuthorization(arg1, tmp, arg2);
    }
    return resolved;
  }
  didHavePermission(arg0) {
    const storage = this.storage;
    return storage.hasPermission(arg0);
  }
  openSettings() {
    react_nativeDefault();
  }
  openAlertModal(arg0) {
    let body;
    let onConfirm;
    let paths;
    ({ body, onConfirm } = arg0);
    react.lazy(() => require("asyncRequire")(paths[11], paths.paths));
    const openAlert = useAlertStore.openAlert;
    useAlertStore;
    const intl = intl2.intl;
    openAlert("permission-denied", <lazyResult title={intl.string(intl2.t.sMFVrS)} body={body} onConfirm={onConfirm} />);
  }
}
const prototype = NativePermissionIOSUtils.prototype;
requestPermissionLookup = { [NativePermissionTypes.CAMERA]: () => combineStatuses(items2), [HEADSET_CAMERA]: react_native2.requestHeadsetCameraAuthorization };
({ HEADSET_CAMERA, AUDIO } = NativePermissionTypes);
PlatformUtils = PlatformUtils_mod;
if (PlatformUtils.isAndroid()) {
  fn = () => {
    const items = [react_native.requestMicrophoneAuthorization, react_native.requestModifyAudioAuthorization];
    return combineStatuses(items);
  };
} else {
  fn = react_native2.requestMicrophoneAuthorization;
}
requestPermissionLookup[AUDIO] = fn;
requestPermissionLookup[NativePermissionTypes.PHOTOS] = react_native2.requestPhotoAuthorization;
requestPermissionLookup[NativePermissionTypes.CONTACTS] = react_native2.requestContactsAuthorization;
requestPermissionLookup[NativePermissionTypes.INPUT_MONITORING] = () => Promise.resolve(hasOwnProperty.AUTHORIZED);
NativePermissionIOSUtils.requestPermissionLookup = requestPermissionLookup;
let obj2 = { [NativePermissionTypes.CAMERA]: () => combineStatuses(items7), [HEADSET_CAMERA2]: react_native2.hasHeadsetCameraAuthorization };
({ HEADSET_CAMERA: HEADSET_CAMERA2, AUDIO: AUDIO2 } = NativePermissionTypes);
PlatformUtils = PlatformUtils_mod;
if (PlatformUtils.isAndroid()) {
  fn2 = () => {
    const items = [react_native.hasMicrophoneAuthorization, react_native.hasModifyAudioAuthorization];
    return combineStatuses(items);
  };
} else {
  fn2 = react_native2.hasMicrophoneAuthorization;
}
obj2[AUDIO2] = fn2;
obj2[NativePermissionTypes.INPUT_MONITORING] = () => Promise.resolve(hasOwnProperty.AUTHORIZED);
NativePermissionIOSUtils.hasPermissionLookup = obj2;
const nativePermissionIOSUtils = new NativePermissionIOSUtils();
const result = size.fileFinishedImporting("modules/native_permissions/mobile/NativePermissionUtils.native.tsx");

export default nativePermissionIOSUtils;