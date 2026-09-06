// === Module 4693: DCDSendUtils ===

// Module 4693 (DCDSendUtils)
import PlatformUtils from "PlatformUtils" /* 1115 */;
import NativeIntentsModuleDefault from "NativeIntentsModule" /* 4694 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import size from "module_2" /* 2 */;

({ Linking: c3, NativeModules: closure_4 } = get_ActivityIndicator);
const result = size.fileFinishedImporting("modules/instant_invite/native/DCDSendUtils.tsx");

export const sendSMS = function sendSMS(body, recipients) {
  if (obj.isAndroid()) {
    let str = body.body;
    if (str == null) {
      str = "";
    }
    recipients = body.recipients;
    if (recipients == null) {
      recipients = [];
    }
    NativeIntentsModuleDefault.sendSMS(str, recipients);
  } else {
    const DCDSend = React4.DCDSend;
    DCDSend.sendSMS(body, recipients);
  }
  obj = PlatformUtils;
};
export const sendMail = function sendMail(subject, subject) {
  if (obj.isAndroid()) {
    let str = subject.subject;
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
    NativeIntentsModuleDefault.sendMail(str, str2, recipients);
  } else {
    const DCDSend = React4.DCDSend;
    DCDSend.sendMail(subject, subject);
  }
  obj = PlatformUtils;
};
export const canSendSMS = function canSendSMS() {
  if (obj.isAndroid()) {
    let resolved = Promise.resolve(NativeIntentsModuleDefault.canSendSMS());
  } else {
    const DCDSend = React4.DCDSend;
    resolved = DCDSend.canSendSMS();
  }
  return resolved;
};
export const canSendMail = function canSendMail() {
  if (obj.isAndroid()) {
    let resolved = Promise.resolve(NativeIntentsModuleDefault.canSendMail());
  } else {
    const DCDSend = React4.DCDSend;
    resolved = DCDSend.canSendMail();
  }
  return resolved;
};
export const canOpenUrlScheme = function canOpenUrlScheme(roblox) {
  _require = roblox;
  if (obj.isAndroid()) {
    try {
      return Promise.resolve(NativeIntentsModuleDefault.canOpenUrlScheme(roblox));
    } catch (err) {
      return Promise.resolve(false);
    }
  } else {
    const promise = new Promise((arg0) => {
      closure_0 = arg0;
      const canOpenURLResult = React3.canOpenURL("" + closure_0 + "://app");
      React3.canOpenURL("" + closure_0 + "://app").then((result) => {
        closure_0(result);
      }).catch(() => {
        closure_0(false);
      });
    });
    return promise;
  }
  obj = require("PlatformUtils");
};