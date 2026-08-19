// === Module 4646: sendSMS ===

// Module 4646 (sendSMS)
import obj132 from "obj132" /* 2 */;
import obj1322 from "obj132" /* 500 */;
import enforcingDefault from "enforcing" /* 4647 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;

({ Linking: c3, NativeModules: c4 } = get_ActivityIndicator);
const result = obj132.fileFinishedImporting("modules/instant_invite/native/DCDSendUtils.tsx");

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
    enforcingDefault.sendSMS(str, recipients);
  } else {
    const DCDSend = closure_4.DCDSend;
    DCDSend.sendSMS(body, recipients);
  }
  obj = obj1322;
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
    enforcingDefault.sendMail(str, str2, recipients);
  } else {
    const DCDSend = closure_4.DCDSend;
    DCDSend.sendMail(subject, subject);
  }
  obj = obj1322;
};
export const canSendSMS = function canSendSMS() {
  if (obj.isAndroid()) {
    let resolved = Promise.resolve(enforcingDefault.canSendSMS());
  } else {
    const DCDSend = closure_4.DCDSend;
    resolved = DCDSend.canSendSMS();
  }
  return resolved;
};
export const canSendMail = function canSendMail() {
  if (obj.isAndroid()) {
    let resolved = Promise.resolve(enforcingDefault.canSendMail());
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
      return Promise.resolve(enforcingDefault.canOpenUrlScheme(closure_3));
    } catch (err) {
      return Promise.resolve(false);
    }
  } else {
    const promise = new Promise((arg0) => {
      closure_0 = arg0;
      const canOpenURLResult = closure_1_3.canOpenURL("" + closure_0 + "://app");
      closure_1_3.canOpenURL("" + closure_0 + "://app").then((result) => {
        callback(result);
      }).catch((error) => {
        callback(false);
      });
    });
    return promise;
  }
  obj = _require(500);
};