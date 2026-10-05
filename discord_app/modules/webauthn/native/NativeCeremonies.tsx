// discord_app/modules/webauthn/native/NativeCeremonies.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import intl2 from "../../../intl/index.native.tsx";
import react_nativeDefault from "../../../../discord_common/js/packages/rtn-codegen/js/NativeSecurityKeyManagerModule.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, code, logger;

let obj = function _promptForRegisterCredential() {
  obj = _asyncToGenerator(async () => {
    let obj6;
    let closure_0 = arg0;
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        let register;
        let obj8;
        let ticket;
        let challenge;
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            let closure_3 = tmp2;
            let closure_2 = tmp;
            register = closure_0;
            if (closure_0 === undefined) {
              register = react_nativeDefault.register;
            }
            obj8 = undefined;
            ticket = undefined;
            challenge = undefined;
            c4 = 1;
            c5 = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            c4 = 2;
            c5 = 1;
            const obj5 = { value: obj6.startRegisterWebAuthnCredential(), done: false };
            obj6 = closure_131_0(closure_131_2[3]);
            return obj5;
          }
        } else if (2 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            obj8 = value;
            ticket = obj8.ticket;
            challenge = obj8.challenge;
            obj8 = { ticket };
            c4 = 3;
            c5 = 1;
            const obj9 = { value: register(challenge), done: false };
            return obj9;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj10 = { value, done: true };
          return obj10;
        } else {
          obj8.credential = value;
          c5 = 3;
          obj = { value: obj8, done: true };
          return obj;
        }
      } catch (tmp19) {
        c5 = 3;
        throw tmp19;
      }
    }
  });
  return obj(...arguments);
};
let tmp2 = new LoggerDefault("WebAuthnUtils");
let closure_4 = tmp2;
obj = {
  getPasskeyAuthenticator() {
    obj = require("PlatformUtils");
    const isAndroidResult = obj.isAndroid();
    const tmp2 = react_nativeDefault;
    _require = isAndroidResult ? tmp2.authenticatePasskey : tmp2.authenticate;
    return _asyncToGenerator(async () => {
      closure_0 = [...arguments];
      let c5 = 0;
      let c6 = 0;
      let c4 = 0;
      const iter = (async function (arg0) {
        if (c6 === 2) {
          c6 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            return { value, done: true };
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          try {
            c6 = 2;
            if (0 === c5) {
              if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                c6 = 3;
                return { value, done: true };
              } else {
                closure_2 = tmp;
                c5 = 1;
                c6 = 1;
                return { value: "Set", done: true };
              }
            } else {
              let self;
              if (1 === c5) {
                if (arg0 === 1) {
                  c6 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c6 = 3;
                  return { value, done: true };
                } else {
                  logger = 1;
                  const items = [];
                  HermesBuiltin.arraySpread(items, closure_0, 0);
                  self = HermesBuiltin.apply(closure_130_0, items, undefined);
                  c5 = 3;
                  c6 = 1;
                  return { value: self, done: false };
                }
              } else if (2 === c5) {
                self = closure_3;
                logger = 0;
                code = closure_3;
                code = code.code;
                if ("AbortError" !== code) {
                  if ("NotAllowedError" !== code) {
                    const obj3 = closure_0(closure_2[7]);
                    const result = obj3.captureWebAuthnException(code);
                    logger.error(code);
                    throw code;
                  }
                }
                logger.warn(code);
                self = this;
                const self2 = this;
                const ignorableWebAuthnError = new closure_0(closure_2[6]).IgnorableWebAuthnError();
                throw ignorableWebAuthnError;
              } else if (arg0 === 1) {
                c6 = 3;
                throw value;
              } else if (arg0 === 2) {
                logger = 0;
                c6 = 3;
                return { value, done: true };
              } else {
                logger = 0;
                c6 = 3;
                return { value, done: true };
              }
            }
          } catch (tmp37) {
            closure_3 = tmp37;
            if (0 === logger) {
              c6 = 3;
              throw tmp37;
            } else {
              c5 = 2;
            }
          }
        }
      })();
      iter.next();
      return iter;
    });
  },
  registerAndroidCredentialManagerPasskey(setError) {
    let setRegistering;
    const registerPasskey = setRegistering(6089).registerPasskey;
    setError = undefined;
    setError = setError.setError;
    setRegistering = setError.setRegistering;
    const onRegisterSuccess = setError.onRegisterSuccess;
    if (undefined !== setError) {
      setError("");
    }
    const fn = (arg0) => {
      const parsed = JSON.parse(arg0);
      parsed.publicKey.authenticatorSelection.residentKey = "required";
      return registerPasskey(JSON.stringify(parsed));
    };
    setRegistering(true);
    const promise = (function promptForRegisterCredential() {
      return obj(...arguments);
    })(fn);
    const nextPromise = promise.then(onRegisterSuccess);
    const catchPromise = nextPromise.catch((error) => {
      if (undefined === setError) {
        throw error;
      } else {
        const intl = intl2.intl;
        tmp(intl.string(intl2.t.xSCvBf));
        throw error;
      }
    });
    return catchPromise.finally(() => setRegistering(false));
  },
  registerAndroidDevicePasskey(setError) {
    let setRegistering;
    const register = setRegistering(6089).register;
    setError = undefined;
    setError = setError.setError;
    setRegistering = setError.setRegistering;
    const onRegisterSuccess = setError.onRegisterSuccess;
    if (undefined !== setError) {
      setError("");
    }
    const fn = (arg0) => {
      const parsed = JSON.parse(arg0);
      parsed.publicKey.authenticatorSelection.residentKey = "required";
      return registerPasskey(JSON.stringify(parsed));
    };
    setRegistering(true);
    const promise = (function promptForRegisterCredential() {
      return obj(...arguments);
    })(fn);
    const nextPromise = promise.then(onRegisterSuccess);
    const catchPromise = nextPromise.catch((error) => {
      if (undefined === setError) {
        throw error;
      } else {
        const intl = intl2.intl;
        tmp(intl.string(intl2.t.xSCvBf));
        throw error;
      }
    });
    return catchPromise.finally(() => setRegistering(false));
  },
  registerPasskey(setError) {
    let cleanupPromise;
    let setRegistering;
    obj = setError(1369);
    const isAndroidResult = obj.isAndroid();
    const tmp2 = setRegistering(6089);
    if (isAndroidResult) {
      const registerPasskey = tmp2.registerPasskey;
      setError = undefined;
      const setError2 = setError.setError;
      setError = setError2;
      const setRegistering2 = setError.setRegistering;
      setRegistering = setRegistering2;
      const onRegisterSuccess2 = setError.onRegisterSuccess;
      if (undefined !== setError2) {
        setError2("");
      }
      const fn = (arg0) => {
        const parsed = JSON.parse(arg0);
        parsed.publicKey.authenticatorSelection.residentKey = "required";
        return registerPasskey(JSON.stringify(parsed));
      };
      setRegistering2(true);
      const promise4 = (function promptForRegisterCredential() {
        return obj(...arguments);
      })(fn);
      const nextPromise = promise4.then(onRegisterSuccess2);
      const catchPromise = nextPromise.catch((error) => {
        if (undefined === setError) {
          throw error;
        } else {
          const intl = intl2.intl;
          tmp(intl.string(intl2.t.xSCvBf));
          throw error;
        }
      });
      cleanupPromise = catchPromise.finally(() => setRegistering(false));
    } else {
      setError = undefined;
      setError = setError.setError;
      setRegistering = setError.setRegistering;
      const register = tmp2.register;
      const onRegisterSuccess = setError.onRegisterSuccess;
      if (undefined !== setError) {
        setError("");
      }
      setRegistering(true);
      const promise = (function promptForRegisterCredential() {
        return obj(...arguments);
      })(register);
      const nextPromise1 = promise.then(onRegisterSuccess);
      const catchPromise1 = nextPromise1.catch((error) => {
        if (undefined === setError) {
          throw error;
        } else {
          const intl = intl2.intl;
          tmp(intl.string(intl2.t.xSCvBf));
          throw error;
        }
      });
      cleanupPromise = catchPromise1.finally(() => setRegistering(false));
    }
    return cleanupPromise;
  },
  registerSecurityKey(setError) {
    let setRegistering;
    let register = fn;
    if (fn === undefined) {
      register = setRegistering(6089).register;
    }
    setError = undefined;
    setError = setError.setError;
    setRegistering = setError.setRegistering;
    const onRegisterSuccess = setError.onRegisterSuccess;
    if (undefined !== setError) {
      setError("");
    }
    setRegistering(true);
    const promise = (function promptForRegisterCredential() {
      return obj(...arguments);
    })(register);
    const nextPromise = promise.then(onRegisterSuccess);
    const catchPromise = nextPromise.catch((error) => {
      if (undefined === setError) {
        throw error;
      } else {
        const intl = intl2.intl;
        tmp(intl.string(intl2.t.xSCvBf));
        throw error;
      }
    });
    return catchPromise.finally(() => setRegistering(false));
  },
};
Object.defineProperty(obj, "hasAndroidPasskeySupport", {
  get: () => {
    obj = require("PlatformUtils");
    return obj.isAndroid();
  },
  set: undefined,
});
Object.defineProperty(obj, "shouldDisplayAndroidFidoSelector", {
  get: () => {
    obj = require("PlatformUtils");
    let isAndroidResult = obj.isAndroid();
    if (isAndroidResult) {
      const tmpResult = require("MetaQuestUtils");
      isAndroidResult = !tmpResult.isMetaQuest();
    }
    return isAndroidResult;
  },
  set: undefined,
});
let result = size.fileFinishedImporting("modules/webauthn/native/NativeCeremonies.tsx");

export default obj;
