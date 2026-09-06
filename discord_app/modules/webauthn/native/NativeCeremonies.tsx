// discord_app/modules/webauthn/native/NativeCeremonies.tsx
import LoggerDefault from "../../debug/Logger.tsx";
import util from "../../../intl/index.native.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
let closure_5 = async function _promptForRegisterCredential(arg0, value) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
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
          closure_3 = tmp3;
          closure_2 = tmp2;
          closure_130_0 = undefined;
          let register = closure_0;
          if (closure_0 === undefined) {
            register = NativeModules.DCDSecurityKeyManager.register;
          }
          closure_130_0 = register;
          closure_130_1 = undefined;
          let ticket;
          let challenge;
          c4 = 1;
          c5 = 1;
          return { value: "PX_16", done: true };
        }
      } else if (1 === tmp6) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj1 = { value, done: true };
          return obj1;
        } else {
          let obj5 = closure_131_0(closure_131_1[3]);
          c4 = 2;
          c5 = 1;
          const obj2 = { value: obj5.startRegisterWebAuthnCredential(), done: false };
          return obj2;
        }
      } else if (2 === tmp6) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_130_1 = value;
          ticket = closure_130_1.ticket;
          challenge = closure_130_1.challenge;
          const obj4 = { ticket };
          c4 = 3;
          c5 = 1;
          obj5 = { value: closure_130_0(challenge), done: false };
          return obj5;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        obj4.credential = value;
        c5 = 3;
        obj = { value: obj4, done: true };
        return obj;
      }
    } catch (tmp19) {
      c5 = tmp;
      throw tmp19;
    }
  }
};
const NativeModules = fn(17).NativeModules;
let closure_4 = new LoggerDefault("WebAuthnUtils");
let obj = {};
Object.defineProperty(obj, "hasAndroidPasskeySupport", {
  get: () => {
    let isAndroidResult = require("PlatformUtils").isAndroid();
    if (isAndroidResult) {
      const DCDSecurityKeyManager = NativeModules.DCDSecurityKeyManager;
      let registerPasskey;
      if (DCDSecurityKeyManager != null) {
        registerPasskey = DCDSecurityKeyManager.registerPasskey;
      }
      isAndroidResult = null != registerPasskey;
    }
    return isAndroidResult;
  },
  set: undefined,
});
Object.defineProperty(obj, "shouldDisplayAndroidFidoSelector", {
  get: () => {
    let isAndroidResult = require("PlatformUtils").isAndroid();
    if (isAndroidResult) {
      isAndroidResult = !require("MetaQuestUtils").isMetaQuest();
      const tmpResult = require("MetaQuestUtils");
    }
    return isAndroidResult;
  },
  set: undefined,
});
obj.getPasskeyAuthenticator = function getPasskeyAuthenticator() {
  let authenticatePasskey = NativeModules.DCDSecurityKeyManager.authenticate;
  let isAndroidResult = authenticatePasskey(1115).isAndroid();
  if (isAndroidResult) {
    const DCDSecurityKeyManager = tmp.DCDSecurityKeyManager;
    authenticatePasskey = undefined;
    if (DCDSecurityKeyManager != null) {
      authenticatePasskey = DCDSecurityKeyManager.authenticatePasskey;
    }
    isAndroidResult = null != authenticatePasskey;
  }
  if (isAndroidResult) {
    authenticatePasskey = tmp.DCDSecurityKeyManager.authenticatePasskey;
  }
  return asyncGeneratorStep(async () => {
    closure_0 = [...arguments];
    c5 = 0;
    c6 = 0;
    c4 = 0;
    const iter = (async (arg0, value) => {
      if (c6 === 2) {
        c6 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp7 === 3) {
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
          c6 = 2;
          if (0 === c5) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              closure_2 = tmp3;
              closure_129_0 = closure_0;
              c5 = 1;
              c6 = 1;
              return { value: "PX_16", done: true };
            }
          } else if (1 === tmp8) {
            if (arg0 === 1) {
              c6 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj1 = { value, done: true };
              return obj1;
            } else {
              logger = 1;
              const items = [];
              HermesBuiltin.arraySpread(closure_129_0, 0);
              c5 = 3;
              c6 = 1;
              let obj2 = { value: HermesBuiltin.apply(items, undefined), done: false };
              return obj2;
            }
          } else if (2 === tmp8) {
            logger = 0;
            closure_129_1 = closure_3;
            const code = closure_129_1.code;
            if ("AbortError" !== code) {
              if ("NotAllowedError" !== code) {
                obj2 = closure_0(tmp5[7]);
                const result = obj2.captureWebAuthnException(closure_129_1);
                logger.error(closure_129_1);
                throw closure_129_1;
              }
            }
            logger.warn(closure_129_1);
            const ignorableWebAuthnError = new closure_0(tmp5[6]).IgnorableWebAuthnError();
            throw ignorableWebAuthnError;
          } else if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            logger = 0;
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            logger = 0;
            c6 = 3;
            obj = { value, done: true };
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
  setError = undefined;
  setError = setError.setError;
  const setRegistering = setError.setRegistering;
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
  })(fn)
    .then(setError.onRegisterSuccess)
    .catch((error) => {
      if (undefined === setError) {
        throw error;
      } else {
        const intl = util.intl;
        tmp(intl.string(util.t.xSCvBf));
        throw error;
      }
    })
    .finally(() => setRegistering(false));
};
obj.registerAndroidDevicePasskey = function registerAndroidDevicePasskey(setError) {
  setError = undefined;
  setError = setError.setError;
  const setRegistering = setError.setRegistering;
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
  })(fn)
    .then(setError.onRegisterSuccess)
    .catch((error) => {
      if (undefined === setError) {
        throw error;
      } else {
        const intl = util.intl;
        tmp(intl.string(util.t.xSCvBf));
        throw error;
      }
    })
    .finally(() => setRegistering(false));
};
obj.registerPasskey = function registerPasskey(setError) {
  const DCDSecurityKeyManager = NativeModules.DCDSecurityKeyManager;
  if (obj.isAndroid()) {
    setError = undefined;
    const setError2 = setError.setError;
    setError = setError2;
    const setRegistering2 = setError.setRegistering;
    let setRegistering = setRegistering2;
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
    })(fn)
      .then(setError.onRegisterSuccess)
      .catch((error) => {
        if (undefined === setError) {
          throw error;
        } else {
          const intl = util.intl;
          tmp(intl.string(util.t.xSCvBf));
          throw error;
        }
      })
      .finally(() => setRegistering(false));
    const catchPromise = (function promptForRegisterCredential() {
      const self = this;
      const apply = closure_1_5.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(fn)
      .then(setError.onRegisterSuccess)
      .catch((error) => {
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
    })(DCDSecurityKeyManager.register);
    const nextPromise1 = (function promptForRegisterCredential() {
      const self = this;
      const apply = closure_1_5.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(DCDSecurityKeyManager.register).then(setError.onRegisterSuccess);
    cleanupPromise = (function promptForRegisterCredential() {
      const self = this;
      const apply = closure_1_5.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(DCDSecurityKeyManager.register)
      .then(setError.onRegisterSuccess)
      .catch((error) => {
        if (undefined === setError) {
          throw error;
        } else {
          const intl = util.intl;
          tmp(intl.string(util.t.xSCvBf));
          throw error;
        }
      })
      .finally(() => setRegistering(false));
    const catchPromise1 = (function promptForRegisterCredential() {
      const self = this;
      const apply = closure_1_5.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(DCDSecurityKeyManager.register)
      .then(setError.onRegisterSuccess)
      .catch((error) => {
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
obj.registerSecurityKey = function registerSecurityKey(setError, fn) {
  let register = fn;
  if (fn === undefined) {
    register = NativeModules.DCDSecurityKeyManager.register;
  }
  setError = undefined;
  setError = setError.setError;
  const setRegistering = setError.setRegistering;
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
  })(register)
    .then(setError.onRegisterSuccess)
    .catch((error) => {
      if (undefined === setError) {
        throw error;
      } else {
        const intl = util.intl;
        tmp(intl.string(util.t.xSCvBf));
        throw error;
      }
    })
    .finally(() => setRegistering(false));
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/webauthn/native/NativeCeremonies.tsx");

export default obj;
