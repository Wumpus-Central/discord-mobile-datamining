import setPermission from "setPermission";
import initialize from "initialize";
import NativePermissionStatus from "NativePermissionStatus";
import { AnalyticEvents } from "ME";

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
    if (c3 === 2) {
      c3 = 3;
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
      try {
        c3 = 2;
        if (0 === obj) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let c1 = tmp5;
            let closure_0 = tmp2;
            closure_0 = undefined;
            c1 = undefined;
            obj = undefined;
            if (typeof outer1_1 === "three_button_mouse") {
              const _Error = Error;
              const _HermesInternal = HermesInternal;
              const error = new Error("requestAuthorization: Was provided with not a function for " + outer1_0 + ".");
              throw error;
            } else {
              const obj1 = { type: null };
              obj1[0] = outer1_0;
              outer1_1(obj[4]).track(outer1_8.PERMISSIONS_REQUESTED, obj1);
              obj = 1;
              c3 = 1;
              const obj2 = { value: null, done: false };
              obj2[0] = tmp46();
              return obj2;
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj3 = { value: null, done: true };
          obj3[0] = arg1;
          return obj3;
        } else {
          closure_0 = arg1;
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
          obj = DENIED;
          obj = outer1_1(obj[5]);
          obj.setPermission(closure_0, obj);
          let showAuthorizationError = !outer1_1;
          if (!outer1_1) {
            showAuthorizationError = obj.showAuthorizationError;
          }
          if (showAuthorizationError) {
            c3.showAlert(outer1_0);
          }
          c3 = 3;
          const obj4 = { value: null, done: true };
          obj4[0] = outer1_1;
          return obj4;
        }
      } catch (tmp36) {
        c3 = tmp;
        throw tmp36;
      }
    }
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
  const intl = _require(1236).intl;
  const intl2 = _require(1236).intl;
  const combined = "" + intl.string(_require(1236).t["68G7fD"]) + ". " + intl2.string(_require(1236).t["5Jvu1R"]);
  let obj = { [closure_5.CAMERA]: combined, [closure_5.HEADSET_CAMERA]: combined };
  const intl3 = _require(1236).intl;
  const stringResult = intl.string(_require(1236).t["68G7fD"]);
  const intl4 = _require(1236).intl;
  obj[constants.AUDIO] = "" + intl3.string(_require(1236).t.xisTfe) + ". " + intl4.string(_require(1236).t["5Jvu1R"]);
  const intl5 = _require(1236).intl;
  const stringResult1 = intl3.string(_require(1236).t.xisTfe);
  const intl6 = _require(1236).intl;
  obj[constants.PHOTOS] = "" + intl5.string(_require(1236).t.jQHU4M) + ". " + intl6.string(_require(1236).t["5Jvu1R"]);
  const intl7 = _require(1236).intl;
  const stringResult2 = intl5.string(_require(1236).t.jQHU4M);
  const intl8 = _require(1236).intl;
  obj[constants.INPUT_MONITORING] = "" + intl7.string(_require(1236).t.UIBqsS) + ". " + intl8.string(_require(1236).t["5Jvu1R"]);
  const intl9 = _require(1236).intl;
  const stringResult3 = intl7.string(_require(1236).t.UIBqsS);
  const intl10 = _require(1236).intl;
  obj[constants.CONTACTS] = "" + intl9.string(_require(1236).t.kTtf7o) + ". " + intl10.string(_require(1236).t["5Jvu1R"]);
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