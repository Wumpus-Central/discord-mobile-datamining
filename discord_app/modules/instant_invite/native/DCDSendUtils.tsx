import get_ActivityIndicator from "get ActivityIndicator";

let c3;
let c4;
({ Linking: c3, NativeModules: c4 } = get_ActivityIndicator);
const result = require("enforcing").fileFinishedImporting("modules/instant_invite/native/DCDSendUtils.tsx");

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
    importDefault(4368).sendSMS(str, recipients);
    const obj2 = importDefault(4368);
  } else {
    const DCDSend = closure_4.DCDSend;
    DCDSend.sendSMS(body, recipients);
  }
};
export const sendMail = function sendMail(subject, subject, recipients) {
  if (obj.isAndroid()) {
    let str = subject.subject;
    if (str == null) {
      str = "";
    }
    let str2 = subject.body;
    if (str2 == null) {
      str2 = "";
    }
    recipients = subject.recipients;
    if (recipients == null) {
      recipients = [];
    }
    importDefault(4368).sendMail(str, str2, recipients);
    const obj2 = importDefault(4368);
  } else {
    const DCDSend = closure_4.DCDSend;
    DCDSend.sendMail(subject, subject);
  }
};
export const canSendSMS = function canSendSMS() {
  if (obj.isAndroid()) {
    let resolved = Promise.resolve(importDefault(4368).canSendSMS());
    const obj2 = importDefault(4368);
  } else {
    const DCDSend = closure_4.DCDSend;
    resolved = DCDSend.canSendSMS();
  }
  return resolved;
};
export const canSendMail = function canSendMail() {
  if (obj.isAndroid()) {
    let resolved = Promise.resolve(importDefault(4368).canSendMail());
    const obj2 = importDefault(4368);
  } else {
    const DCDSend = closure_4.DCDSend;
    resolved = DCDSend.canSendMail();
  }
  return resolved;
};
export const canOpenUrlScheme = function canOpenUrlScheme(closure_3) {
  const _require = closure_3;
  if (obj.isAndroid()) {
    try {
      return Promise.resolve(importDefault(4368).canOpenUrlScheme(closure_3));
    } catch (err) {
      return Promise.resolve(false);
    }
  } else {
    const promise = new Promise((arg0) => {
      let closure_0 = arg0;
      const canOpenURLResult = outer1_3.canOpenURL("" + closure_0 + "://app");
      outer1_3.canOpenURL("" + closure_0 + "://app").then((arg0) => {
        callback(arg0);
      }).catch(() => {
        callback(false);
      });
    });
    return promise;
  }
};