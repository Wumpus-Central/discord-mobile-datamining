// _runtime/00476_PermissionsAndroidImpl.js
import asyncGeneratorStep from "00005_asyncGeneratorStep.js";
import _classCallCheck from "metro/00041__classCallCheck.js";
import _createClass from "metro/00042__createClass.js";

const React3 = Object.freeze({ GRANTED: "granted", DENIED: "denied", NEVER_ASK_AGAIN: "never_ask_again" });
const React4 = Object.freeze({
  READ_CALENDAR: "android.permission.READ_CALENDAR",
  WRITE_CALENDAR: "android.permission.WRITE_CALENDAR",
  CAMERA: "android.permission.CAMERA",
  READ_CONTACTS: "android.permission.READ_CONTACTS",
  WRITE_CONTACTS: "android.permission.WRITE_CONTACTS",
  GET_ACCOUNTS: "android.permission.GET_ACCOUNTS",
  ACCESS_FINE_LOCATION: "android.permission.ACCESS_FINE_LOCATION",
  ACCESS_COARSE_LOCATION: "android.permission.ACCESS_COARSE_LOCATION",
  ACCESS_BACKGROUND_LOCATION: "android.permission.ACCESS_BACKGROUND_LOCATION",
  RECORD_AUDIO: "android.permission.RECORD_AUDIO",
  READ_PHONE_STATE: "android.permission.READ_PHONE_STATE",
  CALL_PHONE: "android.permission.CALL_PHONE",
  READ_CALL_LOG: "android.permission.READ_CALL_LOG",
  WRITE_CALL_LOG: "android.permission.WRITE_CALL_LOG",
  ADD_VOICEMAIL: "com.android.voicemail.permission.ADD_VOICEMAIL",
  READ_VOICEMAIL: "com.android.voicemail.permission.READ_VOICEMAIL",
  WRITE_VOICEMAIL: "com.android.voicemail.permission.WRITE_VOICEMAIL",
  USE_SIP: "android.permission.USE_SIP",
  PROCESS_OUTGOING_CALLS: "android.permission.PROCESS_OUTGOING_CALLS",
  BODY_SENSORS: "android.permission.BODY_SENSORS",
  BODY_SENSORS_BACKGROUND: "android.permission.BODY_SENSORS_BACKGROUND",
  SEND_SMS: "android.permission.SEND_SMS",
  RECEIVE_SMS: "android.permission.RECEIVE_SMS",
  READ_SMS: "android.permission.READ_SMS",
  RECEIVE_WAP_PUSH: "android.permission.RECEIVE_WAP_PUSH",
  RECEIVE_MMS: "android.permission.RECEIVE_MMS",
  READ_EXTERNAL_STORAGE: "android.permission.READ_EXTERNAL_STORAGE",
  READ_MEDIA_IMAGES: "android.permission.READ_MEDIA_IMAGES",
  READ_MEDIA_VIDEO: "android.permission.READ_MEDIA_VIDEO",
  READ_MEDIA_AUDIO: "android.permission.READ_MEDIA_AUDIO",
  READ_MEDIA_VISUAL_USER_SELECTED: "android.permission.READ_MEDIA_VISUAL_USER_SELECTED",
  WRITE_EXTERNAL_STORAGE: "android.permission.WRITE_EXTERNAL_STORAGE",
  BLUETOOTH_CONNECT: "android.permission.BLUETOOTH_CONNECT",
  BLUETOOTH_SCAN: "android.permission.BLUETOOTH_SCAN",
  BLUETOOTH_ADVERTISE: "android.permission.BLUETOOTH_ADVERTISE",
  ACCESS_MEDIA_LOCATION: "android.permission.ACCESS_MEDIA_LOCATION",
  ACCEPT_HANDOVER: "android.permission.ACCEPT_HANDOVER",
  ACTIVITY_RECOGNITION: "android.permission.ACTIVITY_RECOGNITION",
  ANSWER_PHONE_CALLS: "android.permission.ANSWER_PHONE_CALLS",
  READ_PHONE_NUMBERS: "android.permission.READ_PHONE_NUMBERS",
  UWB_RANGING: "android.permission.UWB_RANGING",
  POST_NOTIFICATIONS: "android.permission.POST_NOTIFICATIONS",
  NEARBY_WIFI_DEVICES: "android.permission.NEARBY_WIFI_DEVICES",
});
let closure_0;
let dependencyMap;
class PermissionsAndroidImpl {
  constructor() {
    tmp = c2(this, PermissionsAndroidImpl);
    this.PERMISSIONS = closure_4;
    this.RESULTS = closure_3;
    return;
  }
}
_classCallCheck = PermissionsAndroidImpl;
const entry = {
  key: "checkPermission",
  value: function checkPermission(arg0) {
    console.warn('"PermissionsAndroid.checkPermission" is deprecated. Use "PermissionsAndroid.check" instead');
    closure_0(38)(closure_0(477), "PermissionsAndroid is not installed correctly.");
    const tmp2 = closure_0(38);
    return closure_0(477).checkPermission(arg0);
  },
};
const items = [
  entry,
  {
    key: "check",
    value: function check(arg0) {
      closure_0(38)(closure_0(477), "PermissionsAndroid is not installed correctly.");
      const tmp = closure_0(38);
      return closure_0(477).checkPermission(arg0);
    },
  },
  ,
  ,
];
const entry1 = { key: "requestPermission", value: null };
dependencyMap = asyncGeneratorStep(async function (arg0, arg1) {
  const self = this;
  closure_1 = arg0;
  closure_2 = arg1;
  c4 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    constants = self;
    const _console = console;
    console.warn('"PermissionsAndroid.requestPermission" is deprecated. Use "PermissionsAndroid.request" instead');
    await self.request(closure_1, closure_2);
    return value === constants.RESULTS.GRANTED;
  })();
});
entry1.value = function requestPermission(arg0, arg1) {
  const self = this;
  const apply = closure_1.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
items[2] = entry1;
const entry2 = { key: "request", value: null };
closure_0 = asyncGeneratorStep(async (arg0, arg1) => {
  closure_0 = arg0;
  dependencyMap = arg1;
  c4 = 0;
  c5 = 0;
  return (async (arg0, value) => {
    if (c5 === 2) {
      c5 = 3;
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
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            closure_3 = tmp5;
            closure_2 = tmp2;
            closure_130_0 = closure_0;
            closure_130_1 = dependencyMap;
            closure_0(38)(closure_0(477), "PermissionsAndroid is not installed correctly.");
            if (dependencyMap) {
              c4 = 1;
              c5 = 1;
              let obj1 = { value: closure_0(477).shouldShowRequestPermissionRationale(tmp27), done: false };
              return obj1;
            } else {
              obj1 = closure_0(477);
              const permission = obj1.requestPermission(closure_130_0);
              c5 = 3;
            }
            tmp27 = closure_0;
            const tmp31 = closure_0(38);
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 !== 2) {
          if (value) {
            if (closure_0(232)) {
              new Promise((arg0, arg1) => {
                closure_0 = arg0;
                dependencyMap = arg1;
                const merged = Object.assign(dependencyMap);
                closure_1_0(closure_1_1[5]).showAlert(
                  {},
                  () => {
                    const error = new Error("Error showing rationale");
                    return dependencyMap(error);
                  },
                  () => closure_0(closure_0(477).requestPermission(closure_2_0)),
                );
              });
            }
          }
        }
        c5 = 3;
        obj = { value, done: true };
        return obj;
      } catch (tmp22) {
        c5 = tmp;
        throw tmp22;
      }
    }
  })();
});
entry2.value = function request(arg0, arg1) {
  const self = this;
  const apply = closure_0.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
items[3] = entry2;
items[4] = {
  key: "requestMultiple",
  value: function requestMultiple(arg0) {
    closure_0(38)(closure_0(477), "PermissionsAndroid is not installed correctly.");
    const tmp = closure_0(38);
    return closure_0(477).requestMultiplePermissions(arg0);
  },
};

export default new _createClass(PermissionsAndroidImpl, items)();
