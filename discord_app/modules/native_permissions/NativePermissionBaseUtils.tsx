// === Module 5143: NativePermissionBaseUtils ===

// Module 5143 (NativePermissionBaseUtils)
import util from "util" /* 1114 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import NativePermissionStore from "NativePermissionStore" /* 5144 */;

require = fn;
const NativePermissionConstants = fn(4770);
({ NativePermissionTypes: hasOwnProperty, NativePermissionStates: metroRequire, NativePermissionStatus: closure_7 } = NativePermissionConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
let NativePermissionBaseUtils;
class NativePermissionBaseUtils {
  constructor() {
    merged = Object.assign({ storage: null });
    tmp2 = new closure_4();
    merged[0] = tmp2;
    return merged;
  }
}
const prototype = NativePermissionBaseUtils.prototype;
prototype["requestAuthorization"] = function requestAuthorization(arg0, hasPermissionLookup, arg2) {
  closure_0 = arg0;
  closure_1 = hasPermissionLookup;
  closure_2 = arg2;
  const self = this;
  return self(function*() {
    const type = tmp2;
    if (typeof tmp5 !== "function") {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("requestAuthorization: Was provided with not a function for " + type + ".");
      throw error;
    }
    tmp5(1242).track(constants2.PERMISSIONS_REQUESTED, { type });
    yield tmp45();
    closure_128_0 = value;
    let tmp10 = closure_128_0 === constants.AUTHORIZED;
    if (!tmp10) {
      tmp10 = closure_128_0 === constants.LIMITED;
    }
    closure_128_1 = tmp10;
    if (closure_128_1) {
      let DENIED = constants.ACCEPTED;
    } else {
      DENIED = constants.DENIED;
    }
    closure_128_2 = DENIED;
    tmp5(5145).setPermission(closure_129_0, closure_128_2);
    let showAuthorizationError = !closure_128_1;
    if (!closure_128_1) {
      showAuthorizationError = closure_129_2.showAuthorizationError;
    }
    if (showAuthorizationError) {
      closure_129_3.showAlert(closure_129_0);
    }
    return closure_128_1;
  })();
};
prototype["requestPermission"] = function requestPermission(arg0, arg1) {
  return this.requestPermissionCore(arg0, NativePermissionBaseUtils.defaultNativePermissionsRequestOptions(arg1));
};
prototype["hasPermission"] = function hasPermission(arg0, arg1) {
  return this.hasPermissionCore(arg0, NativePermissionBaseUtils.defaultNativePermissionsRequestOptions(arg1));
};
prototype["showAlert"] = function showAlert(arg0) {
  const self = this;
  closure_0 = arg0;
  const intl = util.intl;
  const intl2 = util.intl;
  const combined = "" + intl.string(util.t["68G7fD"]) + ". " + intl2.string(util.t["5Jvu1R"]);
  let obj = { [closure_1_5.CAMERA]: combined, [closure_1_5.HEADSET_CAMERA]: combined };
  const intl3 = util.intl;
  const stringResult = intl.string(util.t["68G7fD"]);
  const intl4 = util.intl;
  obj[constants.AUDIO] = "" + intl3.string(util.t.xisTfe) + ". " + intl4.string(util.t["5Jvu1R"]);
  const intl5 = util.intl;
  const stringResult1 = intl3.string(util.t.xisTfe);
  const intl6 = util.intl;
  obj[constants.PHOTOS] = "" + intl5.string(util.t.jQHU4M) + ". " + intl6.string(util.t["5Jvu1R"]);
  const intl7 = util.intl;
  const stringResult2 = intl5.string(util.t.jQHU4M);
  const intl8 = util.intl;
  obj[constants.INPUT_MONITORING] = "" + intl7.string(util.t.UIBqsS) + ". " + intl8.string(util.t["5Jvu1R"]);
  const intl9 = util.intl;
  const stringResult3 = intl7.string(util.t.UIBqsS);
  const intl10 = util.intl;
  obj[constants.CONTACTS] = "" + intl9.string(util.t.kTtf7o) + ". " + intl10.string(util.t["5Jvu1R"]);
  if (null != obj[arg0]) {
    obj = { title: null, body: null, onConfirm: null, cancelText: null, confirmText: null };
    const intl11 = util.intl;
    obj.title = intl11.string(util.t.u1Gxpu);
    obj.body = tmp9;
    obj.onConfirm = function onConfirm() {
      return self.openSettings(closure_0);
    };
    const intl12 = util.intl;
    obj.cancelText = intl12.string(util.t["ETE/oC"]);
    const intl13 = util.intl;
    obj.confirmText = intl13.string(util.t["XgZk+u"]);
    self.openAlertModal(obj);
  }
  const stringResult4 = intl9.string(util.t.kTtf7o);
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/native_permissions/NativePermissionBaseUtils.tsx");

export { NativePermissionBaseUtils };