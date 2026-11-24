// === Module 8272: DCDSendUtils ===

// Module 8272 (DCDSendUtils)
import NativeIntentsModuleDefault from "NativeIntentsModule" /* 8273 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

const require = globalThis.__r;

const require = fn;
let closure_5 = async function _sendSMS(arg0, arg1) {
  let body = arg0;
  closure_1 = arg1;
  c5 = 0;
  c7 = 0;
  c6 = 0;
  return (async (arg0, value) => {
    if (c7 === 2) {
      c7 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c7 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 === 2) {
            c7 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_4 = tmp6;
            closure_132_0 = closure_1;
            closure_132_1 = undefined;
            body = body.body;
            c2 = body;
            if (body == null) {
              c2 = "";
            }
            const recipients = body.recipients;
            closure_3 = recipients;
            if (recipients == null) {
              closure_3 = [];
            }
            const sendSMSResult = NativeIntentsModuleDefault.sendSMS(c2, closure_3);
            if (obj3.isAndroid()) {
              c6 = 1;
              c5 = 3;
              c7 = 1;
              const obj5 = { value: sendSMSResult, done: false };
              return obj5;
            } else {
              c5 = 2;
              c7 = 1;
              const obj6 = { value: sendSMSResult, done: false };
              return obj6;
            }
            obj3 = require("PlatformUtils");
          }
        } else {
          if (1 === tmp6) {
            c6 = 0;
            c7 = 3;
          } else if (2 === tmp6) {
            if (arg0 === 1) {
              c7 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              closure_132_1 = value;
              closure_132_0(closure_132_1.completed, closure_132_1.canceled, closure_132_1.error);
            }
          } else if (arg0 === 1) {
            c7 = 3;
            throw value;
          } else if (arg0 !== 2) {
            c6 = 0;
          }
          c6 = 0;
          c7 = 3;
          const obj = { value, done: true };
          return obj;
        }
      } catch (tmp17) {
        if (tmp3 === c6) {
          c7 = tmp2;
          throw tmp17;
        } else {
          c5 = tmp;
        }
      }
    }
  })();
};
let closure_6 = async function _sendMail(arg0, arg1) {
  let subject = arg0;
  closure_1 = arg1;
  c6 = 0;
  c8 = 0;
  c7 = 0;
  return (async (arg0, value) => {
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c8 = 2;
        if (0 === c6) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_5 = tmp6;
            closure_133_0 = closure_1;
            closure_133_1 = undefined;
            subject = subject.subject;
            c2 = subject;
            if (subject == null) {
              c2 = "";
            }
            const body = tmp26.body;
            c3 = body;
            if (body == null) {
              c3 = "";
            }
            const recipients = tmp26.recipients;
            closure_4 = recipients;
            if (recipients == null) {
              closure_4 = [];
            }
            const sendMailResult = NativeIntentsModuleDefault.sendMail(c2, c3, closure_4);
            if (obj3.isAndroid()) {
              c7 = 1;
              c6 = 3;
              c8 = 1;
              const obj5 = { value: sendMailResult, done: false };
              return obj5;
            } else {
              c6 = 2;
              c8 = 1;
              const obj6 = { value: sendMailResult, done: false };
              return obj6;
            }
            obj3 = require("PlatformUtils");
          }
        } else {
          if (1 === tmp6) {
            c7 = 0;
            c8 = 3;
          } else if (2 === tmp6) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              const obj7 = { value, done: true };
              return obj7;
            } else {
              closure_133_1 = value;
              closure_133_0(closure_133_1.completed, closure_133_1.canceled, closure_133_1.saved, closure_133_1.error);
            }
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 !== 2) {
            c7 = 0;
          }
          c7 = 0;
          c8 = 3;
          const obj = { value, done: true };
          return obj;
        }
      } catch (tmp19) {
        if (tmp3 === c7) {
          c8 = tmp2;
          throw tmp19;
        } else {
          c6 = tmp;
        }
      }
    }
  })();
};
const Linking = fn(17).Linking;
const size = fn(2);
const result = size.fileFinishedImporting("modules/instant_invite/native/DCDSendUtils.tsx");

export function sendSMS() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function sendMail() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function canSendSMS() {
  return NativeIntentsModuleDefault.canSendSMS();
}
export function canSendMail() {
  return NativeIntentsModuleDefault.canSendMail();
}
export function canOpenUrlScheme(roblox) {
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
      const canOpenURLResult = Linking.canOpenURL("" + closure_0 + "://app");
      Linking.canOpenURL("" + closure_0 + "://app").then((result) => {
        closure_0(result);
      }).catch(() => {
        closure_0(false);
      });
    });
    return promise;
  }
  obj = require("PlatformUtils");
}