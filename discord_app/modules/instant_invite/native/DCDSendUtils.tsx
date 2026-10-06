// === Module 5029: DCDSendUtils ===

// Module 5029 (DCDSendUtils)
import PlatformUtils from "PlatformUtils" /* 1369 */;
import react_nativeDefault from "react-native" /* 5030 */;
import react_native from "react-native" /* 17 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c3;
let closure_4;
({ Linking: c3, NativeModules: closure_4 } = react_native);
const result = size.fileFinishedImporting("modules/instant_invite/native/DCDSendUtils.tsx");

export const sendSMS = function sendSMS(body, recipients) {
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    let str = body.body;
    const sendSMS = react_nativeDefault.sendSMS;
    react_nativeDefault;
    if (str == null) {
      str = "";
    }
    recipients = body.recipients;
    if (recipients == null) {
      recipients = [];
    }
    sendSMS(str, recipients);
  } else {
    const DCDSend = React3.DCDSend;
    DCDSend.sendSMS(body, recipients);
  }
};
export const sendMail = function sendMail(subject, subject2) {
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    let str = subject.subject;
    const sendMail = react_nativeDefault.sendMail;
    react_nativeDefault;
    if (str == null) {
      str = "";
    }
    let str2 = subject.body;
    if (str2 == null) {
      str2 = "";
    }
    let recipients = subject.recipients;
    if (recipients == null) {
      recipients = [];
    }
    sendMail(str, str2, recipients);
  } else {
    const DCDSend = React3.DCDSend;
    DCDSend.sendMail(subject, subject);
  }
};
export const canSendSMS = function canSendSMS() {
  let resolveResult;
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    const obj2 = react_nativeDefault;
    resolveResult = resolve(obj2.canSendSMS());
  } else {
    const DCDSend = React3.DCDSend;
    resolveResult = DCDSend.canSendSMS();
  }
  return resolveResult;
};
export const canSendMail = function canSendMail() {
  let resolveResult;
  const obj = PlatformUtils;
  if (obj.isAndroid()) {
    const obj2 = react_nativeDefault;
    resolveResult = resolve(obj2.canSendMail());
  } else {
    const DCDSend = React3.DCDSend;
    resolveResult = DCDSend.canSendMail();
  }
  return resolveResult;
};
export const canOpenUrlScheme = function canOpenUrlScheme(roblox) {
  _require = roblox;
  const obj = require("PlatformUtils");
  if (obj.isAndroid()) {
    try {
      const obj2 = react_nativeDefault;
      return resolve(obj2.canOpenUrlScheme(roblox));
    } catch (err) {
      return Promise.resolve(false);
    }
  } else {
    const self = this;
    const self2 = this;
    const promise = new Promise((arg0) => {
      let closure_0 = arg0;
      const canOpenURLResult = _false.canOpenURL("" + closure_0 + "://app");
      const nextPromise = canOpenURLResult.then((result) => {
        closure_0(result);
      });
      nextPromise.catch(() => {
        closure_0(false);
      });
    });
    return promise;
  }
};