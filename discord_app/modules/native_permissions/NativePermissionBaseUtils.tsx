// discord_app/modules/native_permissions/NativePermissionBaseUtils.tsx
import closure_3 from "../../../_runtime/00005_asyncGeneratorStep.js";
import closure_4 from "NativePermissionStore.tsx";
import NativePermissionStatus from "NativePermissionConstants.tsx";
import { AnalyticEvents } from "../../Constants.tsx";

const require = arg1;
({
  NativePermissionTypes: c5,
  NativePermissionStates: closure_6,
  NativePermissionStatus: error,
} = NativePermissionStatus);
let NativePermissionBaseUtils;
class NativePermissionBaseUtils {
  constructor() {
    obj = Object.create(new.target.prototype);
    tmp2 = new closure_4();
    obj[0] = tmp2;
    return obj;
  }
}
const prototype = NativePermissionBaseUtils.prototype;
prototype["requestAuthorization"] = function requestAuthorization(arg0, hasPermissionLookup, arg2) {
  closure_0 = arg0;
  closure_1 = hasPermissionLookup;
  closure_2 = arg2;
  const self = this;
  return self(() => {
    let DENIED = 0;
    c3 = 0;
    return (function* () {
      c1 = tmp5;
      closure_0 = tmp2;
      if (typeof callback !== "function") {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        error = new Error("requestAuthorization: Was provided with not a function for " + closure_1_0 + ".");
        throw error;
      }
      obj1 = { type: null };
      obj1[0] = closure_1_0;
      callback(DENIED[4]).track(closure_1_8.PERMISSIONS_REQUESTED, obj1);
      closure_0 = yield tmp46();
      let tmp10 = closure_0 === closure_1_7.AUTHORIZED;
      if (!tmp10) {
        tmp10 = closure_0 === closure_1_7.LIMITED;
      }
      callback = tmp10;
      if (callback) {
        DENIED = tmp14.ACCEPTED;
      } else {
        DENIED = tmp14.DENIED;
      }
      const obj = callback(DENIED[5]);
      obj.setPermission(closure_0, DENIED);
      let showAuthorizationError = !callback;
      if (!callback) {
        showAuthorizationError = DENIED.showAuthorizationError;
      }
      if (showAuthorizationError) {
        c3.showAlert(closure_1_0);
      }
      return callback;
    })();
  })();
};
prototype["requestPermission"] = function requestPermission(arg0, arg1) {
  return this.requestPermissionCore(arg0, NativePermissionBaseUtils.defaultNativePermissionsRequestOptions(arg1));
};
prototype["hasPermission"] = function hasPermission(arg0, arg1) {
  return this.hasPermissionCore(arg0, NativePermissionBaseUtils.defaultNativePermissionsRequestOptions(arg1));
};
prototype["showAlert"] = function showAlert(closure_1_0, arg1, arg2) {
  let self = this;
  self = this;
  const _require = closure_1_0;
  const intl = require("../../intl/index.native.tsx").intl;
  const intl2 = require("../../intl/index.native.tsx").intl;
  const combined =
    "" +
    intl.string(require("../../intl/index.native.tsx").t["68G7fD"]) +
    ". " +
    intl2.string(require("../../intl/index.native.tsx").t["5Jvu1R"]);
  let obj = { [closure_5.CAMERA]: combined, [closure_5.HEADSET_CAMERA]: combined };
  const intl3 = require("../../intl/index.native.tsx").intl;
  const stringResult = intl.string(require("../../intl/index.native.tsx").t["68G7fD"]);
  const intl4 = require("../../intl/index.native.tsx").intl;
  obj[constants.AUDIO] =
    "" +
    intl3.string(require("../../intl/index.native.tsx").t.xisTfe) +
    ". " +
    intl4.string(require("../../intl/index.native.tsx").t["5Jvu1R"]);
  const intl5 = require("../../intl/index.native.tsx").intl;
  const stringResult1 = intl3.string(require("../../intl/index.native.tsx").t.xisTfe);
  const intl6 = require("../../intl/index.native.tsx").intl;
  obj[constants.PHOTOS] =
    "" +
    intl5.string(require("../../intl/index.native.tsx").t.jQHU4M) +
    ". " +
    intl6.string(require("../../intl/index.native.tsx").t["5Jvu1R"]);
  const intl7 = require("../../intl/index.native.tsx").intl;
  const stringResult2 = intl5.string(require("../../intl/index.native.tsx").t.jQHU4M);
  const intl8 = require("../../intl/index.native.tsx").intl;
  obj[constants.INPUT_MONITORING] =
    "" +
    intl7.string(require("../../intl/index.native.tsx").t.UIBqsS) +
    ". " +
    intl8.string(require("../../intl/index.native.tsx").t["5Jvu1R"]);
  const intl9 = require("../../intl/index.native.tsx").intl;
  const stringResult3 = intl7.string(require("../../intl/index.native.tsx").t.UIBqsS);
  const intl10 = require("../../intl/index.native.tsx").intl;
  obj[constants.CONTACTS] =
    "" +
    intl9.string(require("../../intl/index.native.tsx").t.kTtf7o) +
    ". " +
    intl10.string(require("../../intl/index.native.tsx").t["5Jvu1R"]);
  if (null != obj[closure_1_0]) {
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
NativePermissionBaseUtils["defaultNativePermissionsRequestOptions"] = function defaultNativePermissionsRequestOptions(
  arg0,
) {
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
const result = require("set").fileFinishedImporting("modules/native_permissions/NativePermissionBaseUtils.tsx");

export { NativePermissionBaseUtils };
