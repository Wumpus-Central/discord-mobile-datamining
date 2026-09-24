// === Module 7280: NativeCeremonies ===

// Module 7280 (NativeCeremonies)
import LoggerDefault from "Logger" /* 3 */;
import util from "util" /* 1115 */;
import NativeSecurityKeyManagerModuleDefault from "NativeSecurityKeyManagerModule" /* 6929 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_5 = async function _promptForRegisterCredential() {
  if (c5 === 2) {
    c5 = 3;
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
          closure_3 = tmp3;
          closure_2 = tmp2;
          closure_130_0 = undefined;
          let register = closure_0;
          if (closure_0 === undefined) {
            register = NativeSecurityKeyManagerModuleDefault.register;
          }
          closure_130_0 = register;
          closure_130_1 = undefined;
          let ticket;
          let challenge;
          c4 = 1;
          c5 = 1;
          return { value: "flex", done: true };
        }
      } else if (1 === tmp6) {
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
          const obj5 = { value: closure_131_0(closure_131_2[3]).startRegisterWebAuthnCredential(), done: false };
          return obj5;
        }
      } else if (2 === tmp6) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
          closure_130_1 = value;
          ticket = closure_130_1.ticket;
          challenge = closure_130_1.challenge;
          const obj8 = { ticket };
          c4 = 3;
          c5 = 1;
          const obj9 = { value: closure_130_0(challenge), done: false };
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
        const obj = { value: obj8, done: true };
        return obj;
      }
    } catch (tmp20) {
      c5 = tmp;
      throw tmp20;
    }
  }
};
let closure_4 = new LoggerDefault("WebAuthnUtils");
let obj = {};
Object.defineProperty(obj, "hasAndroidPasskeySupport", { get: () => require("PlatformUtils").isAndroid(), set: undefined });
Object.defineProperty(obj, "shouldDisplayAndroidFidoSelector", {
  get: () => {
    let isAndroidResult = require("PlatformUtils").isAndroid();
    if (isAndroidResult) {
      isAndroidResult = !require("MetaQuestUtils").isMetaQuest();
      const tmpResult = require("MetaQuestUtils");
    }
    return isAndroidResult;
  },
  set: undefined
});
obj.getPasskeyAuthenticator = function getPasskeyAuthenticator() {
  let obj = require("PlatformUtils");
  const tmp2 = NativeSecurityKeyManagerModuleDefault;
  _require = require("PlatformUtils").isAndroid() ? tmp2.authenticatePasskey : tmp2.authenticate;
  return asyncGeneratorStep(async () => {
    closure_0 = [...arguments];
    c5 = 0;
    c6 = 0;
    c4 = 0;
    const iter = (async (arg0) => {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_1 = tmp5;
              closure_129_0 = closure_0;
              c5 = 1;
              c6 = 1;
              return { value: "flex", done: true };
            }
          } else if (1 === tmp8) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj5 = { value, done: true };
              return obj5;
            } else {
              logger = 1;
              const items = [];
              HermesBuiltin.arraySpread(closure_129_0, 0);
              c5 = 3;
              c6 = 1;
              const obj6 = { value: HermesBuiltin.apply(items, undefined), done: false };
              return obj6;
            }
          } else if (2 === tmp8) {
            logger = 0;
            closure_129_1 = closure_3;
            const code = closure_129_1.code;
            if ("AbortError" !== code) {
              if ("NotAllowedError" !== code) {
                const result = closure_0(tmp3[7]).captureWebAuthnException(closure_129_1);
                logger.error(closure_129_1);
                throw closure_129_1;
              }
            }
            logger.warn(closure_129_1);
            const ignorableWebAuthnError = new closure_0(tmp3[6]).IgnorableWebAuthnError();
            throw ignorableWebAuthnError;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            logger = 0;
            c6 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            logger = 0;
            c6 = 3;
            const obj = { value, done: true };
            return obj;
          }
        } catch (tmp44) {
          closure_3 = tmp44;
          if (tmp4 === logger) {
            c6 = tmp2;
            throw tmp44;
          } else {
            c5 = tmp;
          }
        }
      }
    })();
    iter.next();
    return iter;
  });
};
obj.registerAndroidCredentialManagerPasskey = function registerAndroidCredentialManagerPasskey(setError) {
  setRegistering(6929).registerPasskey;
  setError = undefined;
  setError = setError.setError;
  setRegistering = setError.setRegistering;
  if (undefined !== setError) {
    setError("");
  }
  const fn = (arg0) => {
    const parsed = JSON.parse(arg0);
    parsed.publicKey.authenticatorSelection.residentKey = "required";
    return setError(JSON.stringify(parsed));
  };
  setRegistering(true);
  const promise = (function promptForRegisterCredential() {
    const self = this;
    const apply = closure_1_5.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })(fn);
  const nextPromise = (function promptForRegisterCredential() {
    const self = this;
    const apply = closure_1_5.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })(fn).then(setError.onRegisterSuccess);
  return (function promptForRegisterCredential() {
    const self = this;
    const apply = closure_1_5.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })(fn).then(setError.onRegisterSuccess).catch((error) => {
    if (undefined === setError) {
      throw error;
    } else {
      const intl = util.intl;
      tmp(intl.string(util.t.xSCvBf));
      throw error;
    }
  }).finally(() => setRegistering(false));
};
obj.registerAndroidDevicePasskey = function registerAndroidDevicePasskey(setError) {
  setRegistering(6929).register;
  setError = undefined;
  setError = setError.setError;
  setRegistering = setError.setRegistering;
  if (undefined !== setError) {
    setError("");
  }
  const fn = (arg0) => {
    const parsed = JSON.parse(arg0);
    parsed.publicKey.authenticatorSelection.residentKey = "required";
    return setError(JSON.stringify(parsed));
  };
  setRegistering(true);
  const promise = (function promptForRegisterCredential() {
    const self = this;
    const apply = closure_1_5.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })(fn);
  const nextPromise = (function promptForRegisterCredential() {
    const self = this;
    const apply = closure_1_5.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })(fn).then(setError.onRegisterSuccess);
  return (function promptForRegisterCredential() {
    const self = this;
    const apply = closure_1_5.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })(fn).then(setError.onRegisterSuccess).catch((error) => {
    if (undefined === setError) {
      throw error;
    } else {
      const intl = util.intl;
      tmp(intl.string(util.t.xSCvBf));
      throw error;
    }
  }).finally(() => setRegistering(false));
};
obj.registerPasskey = function registerPasskey(setError) {
  const obj = setError(1364);
  const tmp2 = setRegistering(6929);
  if (isAndroidResult) {
    setError = undefined;
    const setError2 = setError.setError;
    setError = setError2;
    const setRegistering2 = setError.setRegistering;
    setRegistering = setRegistering2;
    if (undefined !== setError2) {
      setError2("");
    }
    const fn = (arg0) => {
      const parsed = JSON.parse(arg0);
      parsed.publicKey.authenticatorSelection.residentKey = "required";
      return setError(JSON.stringify(parsed));
    };
    setRegistering2(true);
    const promise4 = (function promptForRegisterCredential() {
      const self = this;
      const apply = closure_1_5.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(fn);
    const nextPromise = (function promptForRegisterCredential() {
      const self = this;
      const apply = closure_1_5.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(fn).then(setError.onRegisterSuccess);
    let cleanupPromise = (function promptForRegisterCredential() {
      const self = this;
      const apply = closure_1_5.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(fn).then(setError.onRegisterSuccess).catch((error) => {
      if (undefined === setError) {
        throw error;
      } else {
        const intl = util.intl;
        tmp(intl.string(util.t.xSCvBf));
        throw error;
      }
    }).finally(() => setRegistering(false));
    const catchPromise = (function promptForRegisterCredential() {
      const self = this;
      const apply = closure_1_5.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(fn).then(setError.onRegisterSuccess).catch((error) => {
      if (undefined === setError) {
        throw error;
      } else {
        const intl = util.intl;
        tmp(intl.string(util.t.xSCvBf));
        throw error;
      }
    });
  } else {
    setError = undefined;
    setError = setError.setError;
    setRegistering = setError.setRegistering;
    if (undefined !== setError) {
      setError("");
    }
    setRegistering(true);
    const promise = (function promptForRegisterCredential() {
      const self = this;
      const apply = closure_1_5.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(tmp2.register);
    const nextPromise1 = (function promptForRegisterCredential() {
      const self = this;
      const apply = closure_1_5.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(tmp2.register).then(setError.onRegisterSuccess);
    cleanupPromise = (function promptForRegisterCredential() {
      const self = this;
      const apply = closure_1_5.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(tmp2.register).then(setError.onRegisterSuccess).catch((error) => {
      if (undefined === setError) {
        throw error;
      } else {
        const intl = util.intl;
        tmp(intl.string(util.t.xSCvBf));
        throw error;
      }
    }).finally(() => setRegistering(false));
    const catchPromise1 = (function promptForRegisterCredential() {
      const self = this;
      const apply = closure_1_5.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(tmp2.register).then(setError.onRegisterSuccess).catch((error) => {
      if (undefined === setError) {
        throw error;
      } else {
        const intl = util.intl;
        tmp(intl.string(util.t.xSCvBf));
        throw error;
      }
    });
  }
  return cleanupPromise;
};
obj.registerSecurityKey = function registerSecurityKey(setError) {
  let register = fn;
  if (fn === undefined) {
    register = setRegistering(6929).register;
  }
  setError = undefined;
  setError = setError.setError;
  setRegistering = setError.setRegistering;
  if (undefined !== setError) {
    setError("");
  }
  setRegistering(true);
  const promise = (function promptForRegisterCredential() {
    const self = this;
    const apply = closure_1_5.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })(register);
  const nextPromise = (function promptForRegisterCredential() {
    const self = this;
    const apply = closure_1_5.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })(register).then(setError.onRegisterSuccess);
  return (function promptForRegisterCredential() {
    const self = this;
    const apply = closure_1_5.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })(register).then(setError.onRegisterSuccess).catch((error) => {
    if (undefined === setError) {
      throw error;
    } else {
      const intl = util.intl;
      tmp(intl.string(util.t.xSCvBf));
      throw error;
    }
  }).finally(() => setRegistering(false));
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/webauthn/native/NativeCeremonies.tsx");

export default obj;