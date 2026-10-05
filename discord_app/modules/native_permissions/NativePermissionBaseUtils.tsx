// discord_app/modules/native_permissions/NativePermissionBaseUtils.tsx
import Constants from "../../Constants.tsx";
import intl14 from "../../intl/index.native.tsx";
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import NativePermissionStore from "NativePermissionStore.tsx";
import NativePermissionConstants from "NativePermissionConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
({
  NativePermissionTypes: hasOwnProperty,
  NativePermissionStates: metroRequire,
  NativePermissionStatus: metroImportDefault,
} = NativePermissionConstants);
const AnalyticEvents = Constants.AnalyticEvents;
class NativePermissionBaseUtils {
  constructor() {
    const merged = Object.assign({ storage: null });
    merged[0] = new NativePermissionStore();
    new NativePermissionStore();
    return merged;
  }
  requestAuthorization(arg0, hasPermissionLookup, arg2) {
    let closure_0 = arg0;
    let closure_1 = hasPermissionLookup;
    let closure_2 = arg2;
    let self = this;
    return self(function* () {
      let DENIED;
      let c3;
      let value = tmp4;
      let type = tmp;
      if (typeof value !== "function") {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        self = this;
        const self2 = this;
        const error = new Error("requestAuthorization: Was provided with not a function for " + type + ".");
        throw error;
      }
      const obj4 = { type };
      const obj7 = value(c2[4]);
      obj7.track(constants2.PERMISSIONS_REQUESTED, obj4);
      yield tmp41();
      type = value;
      const tmp9 = type === constants.AUTHORIZED || type === constants.LIMITED;
      value = tmp9;
      if (value) {
        DENIED = constants.ACCEPTED;
      } else {
        DENIED = constants.DENIED;
      }
      const obj = value(c2[5]);
      obj.setPermission(closure_129_0, DENIED);
      const showAuthorizationError = !value && closure_129_2.showAuthorizationError;
      if (showAuthorizationError) {
        closure_129_3.showAlert(closure_129_0);
      }
      return value;
    })();
  }
  requestPermission(arg0, arg1) {
    return this.requestPermissionCore(arg0, NativePermissionBaseUtils.defaultNativePermissionsRequestOptions(arg1));
  }
  hasPermission(arg0, arg1) {
    return this.hasPermissionCore(arg0, NativePermissionBaseUtils.defaultNativePermissionsRequestOptions(arg1));
  }
  showAlert(arg0) {
    let intl11;
    let intl12;
    let intl13;
    const self = this;
    let closure_0 = arg0;
    const intl = intl14.intl;
    const stringResult = intl.string(intl14.t["68G7fD"]);
    const intl2 = intl14.intl;
    const combined = "" + stringResult + ". " + intl2.string(intl14.t["5Jvu1R"]);
    const obj = { [closure_1_5.CAMERA]: combined, [closure_1_5.HEADSET_CAMERA]: combined };
    const AUDIO = hasOwnProperty.AUDIO;
    const intl3 = intl14.intl;
    const stringResult1 = intl3.string(intl14.t.xisTfe);
    const intl4 = intl14.intl;
    obj[AUDIO] = "" + stringResult1 + ". " + intl4.string(intl14.t["5Jvu1R"]);
    const PHOTOS = hasOwnProperty.PHOTOS;
    const intl5 = intl14.intl;
    const stringResult2 = intl5.string(intl14.t.jQHU4M);
    const intl6 = intl14.intl;
    obj[PHOTOS] = "" + stringResult2 + ". " + intl6.string(intl14.t["5Jvu1R"]);
    const INPUT_MONITORING = hasOwnProperty.INPUT_MONITORING;
    const intl7 = intl14.intl;
    const stringResult3 = intl7.string(intl14.t.UIBqsS);
    const intl8 = intl14.intl;
    obj[INPUT_MONITORING] = "" + stringResult3 + ". " + intl8.string(intl14.t["5Jvu1R"]);
    const CONTACTS = hasOwnProperty.CONTACTS;
    const intl9 = intl14.intl;
    const stringResult4 = intl9.string(intl14.t.kTtf7o);
    const intl10 = intl14.intl;
    obj[CONTACTS] = "" + stringResult4 + ". " + intl10.string(intl14.t["5Jvu1R"]);
    if (null != obj[arg0]) {
      const openAlertModal = self.openAlertModal;
      const obj2 = {
        title: intl11.string(intl14.t.u1Gxpu),
        body: obj[arg0],
        onConfirm() {
          return self.openSettings(closure_0);
        },
        cancelText: intl12.string(intl14.t["ETE/oC"]),
        confirmText: intl13.string(intl14.t["XgZk+u"]),
      };
      intl11 = intl14.intl;
      intl12 = intl14.intl;
      intl13 = intl14.intl;
      openAlertModal(obj2);
    }
  }
  static defaultNativePermissionsRequestOptions(arg0) {
    const obj = { showAuthorizationError: true };
    let tmp = obj;
    if (null != arg0) {
      const obj2 = {};
      const merged = Object.assign(obj);
      const merged1 = Object.assign(arg0);
      tmp = obj2;
    }
    return tmp;
  }
}
const prototype = NativePermissionBaseUtils.prototype;
const result = size.fileFinishedImporting("modules/native_permissions/NativePermissionBaseUtils.tsx");

export { NativePermissionBaseUtils };
