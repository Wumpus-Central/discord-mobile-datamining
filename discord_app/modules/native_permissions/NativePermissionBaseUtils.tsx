// discord_app/modules/native_permissions/NativePermissionBaseUtils.tsx
import setPermission from "setPermission";
import initialize from "initialize";
import NativePermissionStatus from "NativePermissionStatus";
import { AnalyticEvents } from "ME";
import { getSystemLocale } from "../../intl/index.native.tsx";

let c5;
let closure_6;
let error;
const require = arg1;
({ NativePermissionTypes: c5, NativePermissionStates: closure_6, NativePermissionStatus: error } = NativePermissionStatus);
let NativePermissionBaseUtils;
class NativePermissionBaseUtils {
  constructor() {
    obj = Object.create(new.target.prototype);
    tmp2 = new initialize();
    obj[0] = tmp2;
    return obj;
  }
}
const prototype = NativePermissionBaseUtils.prototype;
prototype["requestAuthorization"] = function requestAuthorization(arg0, hasPermissionLookup, arg2) {
  let closure_0 = arg0;
  let closure_1 = hasPermissionLookup;
  let closure_2 = arg2;
  const self = this;
  return self(function*() {
    let c1 = tmp5;
    let closure_0 = tmp2;
    if (typeof outer1_1 !== "function") {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("requestAuthorization: Was provided with not a function for " + outer1_0 + ".");
      throw error;
    }
    const obj1 = { type: null };
    obj1[0] = outer1_0;
    outer1_1(obj[4]).track(outer1_8.PERMISSIONS_REQUESTED, obj1);
    closure_0 = yield tmp46();
    let tmp10 = closure_0 === outer1_7.AUTHORIZED;
    if (!tmp10) {
      tmp10 = closure_0 === outer1_7.LIMITED;
    }
    outer1_1 = tmp10;
    if (outer1_1) {
      let DENIED = tmp14.ACCEPTED;
    } else {
      DENIED = tmp14.DENIED;
    }
    obj.setPermission(closure_0, obj);
    let showAuthorizationError = !outer1_1;
    if (!outer1_1) {
      showAuthorizationError = obj.showAuthorizationError;
    }
    if (showAuthorizationError) {
      c3.showAlert(outer1_0);
    }
    return outer1_1;
  })();
};
prototype["requestPermission"] = function requestPermission(arg0, arg1) {
  return this.requestPermissionCore(arg0, NativePermissionBaseUtils.defaultNativePermissionsRequestOptions(arg1));
};
prototype["hasPermission"] = function hasPermission(arg0, arg1) {
  return this.hasPermissionCore(arg0, NativePermissionBaseUtils.defaultNativePermissionsRequestOptions(arg1));
};
prototype["showAlert"] = function showAlert(outer1_0, arg1, arg2) {
  let self = this;
  self = this;
  const _require = outer1_0;
  const intl = _getSystemLocale.intl;
  const intl2 = _getSystemLocale.intl;
  const combined = "" + intl.string(_getSystemLocale.t["68G7fD"]) + ". " + intl2.string(_getSystemLocale.t["5Jvu1R"]);
  let obj = { [closure_5.CAMERA]: combined, [closure_5.HEADSET_CAMERA]: combined };
  const intl3 = _getSystemLocale.intl;
  const stringResult = intl.string(_getSystemLocale.t["68G7fD"]);
  const intl4 = _getSystemLocale.intl;
  obj[constants.AUDIO] = "" + intl3.string(_getSystemLocale.t.xisTfe) + ". " + intl4.string(_getSystemLocale.t["5Jvu1R"]);
  const intl5 = _getSystemLocale.intl;
  const stringResult1 = intl3.string(_getSystemLocale.t.xisTfe);
  const intl6 = _getSystemLocale.intl;
  obj[constants.PHOTOS] = "" + intl5.string(_getSystemLocale.t.jQHU4M) + ". " + intl6.string(_getSystemLocale.t["5Jvu1R"]);
  const intl7 = _getSystemLocale.intl;
  const stringResult2 = intl5.string(_getSystemLocale.t.jQHU4M);
  const intl8 = _getSystemLocale.intl;
  obj[constants.INPUT_MONITORING] = "" + intl7.string(_getSystemLocale.t.UIBqsS) + ". " + intl8.string(_getSystemLocale.t["5Jvu1R"]);
  const intl9 = _getSystemLocale.intl;
  const stringResult3 = intl7.string(_getSystemLocale.t.UIBqsS);
  const intl10 = _getSystemLocale.intl;
  obj[constants.CONTACTS] = "" + intl9.string(_getSystemLocale.t.kTtf7o) + ". " + intl10.string(_getSystemLocale.t["5Jvu1R"]);
  if (null != obj[outer1_0]) {
    obj = { title: null, body: null, onConfirm: null, cancelText: null, confirmText: null };
    const intl11 = tmp(1236).intl;
    obj[0] = intl11.string(tmp(1236).t.u1Gxpu);
    obj[1] = tmp9;
    obj[2] = function onConfirm() {
      return self.openSettings(closure_0);
    };
    const intl12 = tmp(1236).intl;
    obj[3] = intl12.string(tmp(1236).t["ETE/oC"]);
    const intl13 = tmp(1236).intl;
    obj[4] = intl13.string(tmp(1236).t["XgZk+u"]);
    self.openAlertModal(obj);
  }
};
NativePermissionBaseUtils["defaultNativePermissionsRequestOptions"] = function defaultNativePermissionsRequestOptions(arg0) {
  let obj = { showAuthorizationError: true };
  let tmp = obj;
  if (null != arg0) {
    obj = {};
    const merged = Object.assign(obj);
    const merged1 = Object.assign(arg0);
    tmp = obj;
  }
  return tmp;
};
const result = require("NativePermissionStatus").fileFinishedImporting("modules/native_permissions/NativePermissionBaseUtils.tsx");

export { NativePermissionBaseUtils };