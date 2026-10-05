// _runtime/metro/00476__.js
import _modDef38 from "00038__.js";
import PermissionsAndroidDefault from "../00477_PermissionsAndroid.js";
import _asyncToGenerator from "00005__asyncToGenerator.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";

let closure_3, constants;

const _false = Object.freeze({ GRANTED: "granted", DENIED: "denied", NEVER_ASK_AGAIN: "never_ask_again" });
const React3 = Object.freeze({
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
let closure_1;
class PermissionsAndroidImpl {
  constructor() {
    _classCallCheck(this, PermissionsAndroidImpl);
    this.PERMISSIONS = PERMISSIONS;
    this.RESULTS = RESULTS;
  }
}
const entry = {
  key: "checkPermission",
  value: function checkPermission(arg0) {
    console.warn('"PermissionsAndroid.checkPermission" is deprecated. Use "PermissionsAndroid.check" instead');
    const tmp2 = _modDef38;
    tmp2(PermissionsAndroidDefault, "PermissionsAndroid is not installed correctly.");
    const obj = PermissionsAndroidDefault;
    return obj.checkPermission(arg0);
  },
};
const items = [
  entry,
  {
    key: "check",
    value: function check(arg0) {
      const tmp = _modDef38;
      tmp(PermissionsAndroidDefault, "PermissionsAndroid is not installed correctly.");
      const obj = PermissionsAndroidDefault;
      return obj.checkPermission(arg0);
    },
  },
  ,
  ,
];
const entry1 = {
  key: "requestPermission",
  value: function requestPermission(arg0, arg1) {
    return closure_1(...arguments);
  },
};
closure_1 = _asyncToGenerator(async function (arg0, arg1) {
  const self = this;
  let closure_1 = arg0;
  let closure_2 = arg1;
  let c4 = 0;
  let c5 = 0;
  return (async (arg0, value) => {
    constants = self;
    const _console = console;
    console.warn('"PermissionsAndroid.requestPermission" is deprecated. Use "PermissionsAndroid.request" instead');
    await self.request(closure_1, closure_2);
    return value === constants.RESULTS.GRANTED;
  })();
});
items[2] = entry1;
const entry2 = {
  key: "request",
  value: function request(arg0, arg1) {
    return closure_0(...arguments);
  },
};
closure_0 = _asyncToGenerator(async function (arg0, arg1) {
  let obj4;
  closure_0 = arg0;
  closure_1 = arg1;
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "IconComponent", done: null };
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
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_3 = tmp4;
          let closure_2 = tmp;
          const tmp26 = closure_0(closure_1[3]);
          tmp26(closure_0(closure_1[4]), "PermissionsAndroid is not installed correctly.");
          if (closure_1) {
            c4 = 1;
            c5 = 1;
            const obj6 = { value: obj4.shouldShowRequestPermissionRationale(closure_0), done: false };
            obj4 = closure_0(closure_1[4]);
            return obj6;
          }
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        let obj = { value, done: true };
        return obj;
      } else if (value) {
        let permission;
        if (closure_0(closure_1[5])) {
          const self = this;
          const self2 = this;
          permission = new Promise((arg0, arg1) => {
            closure_0 = arg0;
            closure_1 = arg1;
            let obj = {};
            const merged = Object.assign(closure_1);
            const obj2 = closure_1_0(closure_1_1[5]);
            obj2.showAlert(
              obj,
              () => {
                const error = new Error("Error showing rationale");
                return closure_1(error);
              },
              () => {
                const obj = closure_0(closure_1[4]);
                return closure_0(obj.requestPermission(closure_2_0));
              },
            );
          });
        }
        c5 = 3;
        const obj7 = { value: permission, done: true };
        return obj7;
      }
      let obj2 = closure_0(closure_1[4]);
      permission = obj2.requestPermission(closure_0);
    } catch (tmp18) {
      c5 = 3;
      throw tmp18;
    }
  }
});
items[3] = entry2;
items[4] = {
  key: "requestMultiple",
  value: function requestMultiple(arg0) {
    const tmp = _modDef38;
    tmp(PermissionsAndroidDefault, "PermissionsAndroid is not installed correctly.");
    const obj = PermissionsAndroidDefault;
    return obj.requestMultiplePermissions(arg0);
  },
};
const tmp4 = new _createClass(PermissionsAndroidImpl, items)();

export default tmp4;
