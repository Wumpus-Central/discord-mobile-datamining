// discord_app/modules/webauthn/native/NativeCeremonies.tsx
import timestampDefault from "../../debug/Logger.tsx";
import closure_2 from "../../../../_runtime/00005_asyncGeneratorStep.js";
import { NativeModules } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { set } from "../../../utils/PlatformUtils.tsx";
import { isMetaQuest } from "../../device/MetaQuestUtils.android.tsx";

const require = arg1;
function _promptForRegisterCredential() {
  const self = this;
  const tmp = callback(() => {
    closure_0 = arg0;
    c4 = 0;
    c5 = 0;
    const iter = (function* (arg0, credential) {
      let challenge = tmp3;
      let ticket = tmp2;
      if (register === undefined) {
        register = closure_1_3.DCDSecurityKeyManager.register;
      }
      yield "PX_16";
      const obj5 = register(obj4[3]);
      obj4 = yield obj5.startRegisterWebAuthnCredential();
      ticket = obj4.ticket;
      challenge = obj4.challenge;
      obj4 = { ticket };
      obj4.credential = yield register(challenge);
      return obj4;
    })();
    iter.next();
    return iter;
  });
  closure_5 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_4 = new timestampDefault("WebAuthnUtils");
let obj = {};
Object.defineProperty(obj, "hasAndroidPasskeySupport", {
  get: () => {
    let isAndroidResult =
      set /* set */
        .isAndroid();
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
    let isAndroidResult =
      set /* set */
        .isAndroid();
    if (isAndroidResult) {
      isAndroidResult =
        !isMetaQuest /* isMetaQuest */
          .isMetaQuest();
      const tmpResult = isMetaQuest;
    }
    return isAndroidResult;
  },
  set: undefined,
});
obj.getPasskeyAuthenticator = function getPasskeyAuthenticator() {
  let authenticatePasskey = NativeModules.DCDSecurityKeyManager.authenticate;
  let isAndroidResult = authenticatePasskey(500).isAndroid();
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
  return callback(() => {
    closure_0 = [...arguments];
    c5 = 0;
    c6 = 0;
    c4 = 0;
    const iter = (function* () {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp7 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
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
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_2 = tmp3;
              let code = tmp5;
              c5 = 1;
              c6 = 1;
              return { value: "PX_16", done: null };
            }
          } else if (1 === tmp8) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj1 = { value: null, done: true };
              obj1[0] = arg1;
              return obj1;
            } else {
              let logger = 1;
              const items = [];
              HermesBuiltin.arraySpread(callback, 0);
              c5 = 3;
              c6 = 1;
              let obj2 = { value: null, done: false };
              obj2[0] = HermesBuiltin.apply(items, undefined);
              return obj2;
            }
          } else if (2 === tmp8) {
            logger = 0;
            code = closure_3;
            code = code.code;
            if ("AbortError" !== code) {
              if ("NotAllowedError" !== code) {
                obj2 = callback(closure_1_1[7]);
                const result = obj2.captureWebAuthnException(code);
                logger.error(code);
                throw code;
              }
            }
            logger.warn(closure_1_1);
            const ignorableWebAuthnError = new callback(closure_1_1[6]).IgnorableWebAuthnError();
            throw ignorableWebAuthnError;
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            logger = 0;
            c6 = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            logger = 0;
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
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
  setError = NativeModules.DCDSecurityKeyManager.registerPasskey;
  setError = undefined;
  let setRegistering;
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
  const promise = (function promptForRegisterCredential(fn) {
    const self = this;
    const apply = closure_5.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })(fn);
  const nextPromise = (function promptForRegisterCredential(fn) {
    const self = this;
    const apply = closure_5.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })(fn).then(setError.onRegisterSuccess);
  return (function promptForRegisterCredential(fn) {
    const self = this;
    const apply = closure_5.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })(fn)
    .then(setError.onRegisterSuccess)
    .catch((arg0) => {
      if (undefined === setError) {
        throw arg0;
      } else {
        const intl = setError(setRegistering[4]).intl;
        tmp(intl.string(setError(setRegistering[4]).t.xSCvBf));
        throw arg0;
      }
    })
    .finally(() => setRegistering(false));
};
obj.registerAndroidDevicePasskey = function registerAndroidDevicePasskey(setError) {
  setError = NativeModules.DCDSecurityKeyManager.register;
  setError = undefined;
  let setRegistering;
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
  const promise = (function promptForRegisterCredential(fn) {
    const self = this;
    const apply = closure_5.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })(fn);
  const nextPromise = (function promptForRegisterCredential(fn) {
    const self = this;
    const apply = closure_5.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })(fn).then(setError.onRegisterSuccess);
  return (function promptForRegisterCredential(fn) {
    const self = this;
    const apply = closure_5.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })(fn)
    .then(setError.onRegisterSuccess)
    .catch((arg0) => {
      if (undefined === setError) {
        throw arg0;
      } else {
        const intl = setError(setRegistering[4]).intl;
        tmp(intl.string(setError(setRegistering[4]).t.xSCvBf));
        throw arg0;
      }
    })
    .finally(() => setRegistering(false));
};
obj.registerPasskey = function registerPasskey(setError) {
  const DCDSecurityKeyManager = NativeModules.DCDSecurityKeyManager;
  if (obj.isAndroid()) {
    setError = DCDSecurityKeyManager.registerPasskey;
    setError = undefined;
    let setRegistering;
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
    const promise4 = (function promptForRegisterCredential(fn) {
      const self = this;
      const apply = closure_5.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(fn);
    const nextPromise = (function promptForRegisterCredential(fn) {
      const self = this;
      const apply = closure_5.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(fn).then(setError.onRegisterSuccess);
    let cleanupPromise = (function promptForRegisterCredential(fn) {
      const self = this;
      const apply = closure_5.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(fn)
      .then(setError.onRegisterSuccess)
      .catch((arg0) => {
        if (undefined === setError) {
          throw arg0;
        } else {
          const intl = setError(setRegistering[4]).intl;
          tmp(intl.string(setError(setRegistering[4]).t.xSCvBf));
          throw arg0;
        }
      })
      .finally(() => setRegistering(false));
    const catchPromise = (function promptForRegisterCredential(fn) {
      const self = this;
      const apply = closure_5.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(fn)
      .then(setError.onRegisterSuccess)
      .catch((arg0) => {
        if (undefined === setError) {
          throw arg0;
        } else {
          const intl = setError(setRegistering[4]).intl;
          tmp(intl.string(setError(setRegistering[4]).t.xSCvBf));
          throw arg0;
        }
      });
  } else {
    setError = undefined;
    setRegistering = undefined;
    setError = setError.setError;
    setRegistering = setError.setRegistering;
    if (undefined !== setError) {
      setError("");
    }
    setRegistering(true);
    const promise = (function promptForRegisterCredential(fn) {
      const self = this;
      const apply = closure_5.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(DCDSecurityKeyManager.register);
    const nextPromise1 = (function promptForRegisterCredential(fn) {
      const self = this;
      const apply = closure_5.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(DCDSecurityKeyManager.register).then(setError.onRegisterSuccess);
    cleanupPromise = (function promptForRegisterCredential(fn) {
      const self = this;
      const apply = closure_5.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(DCDSecurityKeyManager.register)
      .then(setError.onRegisterSuccess)
      .catch((arg0) => {
        if (undefined === setError) {
          throw arg0;
        } else {
          const intl = setError(setRegistering[4]).intl;
          tmp(intl.string(setError(setRegistering[4]).t.xSCvBf));
          throw arg0;
        }
      })
      .finally(() => setRegistering(false));
    const catchPromise1 = (function promptForRegisterCredential(fn) {
      const self = this;
      const apply = closure_5.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(DCDSecurityKeyManager.register)
      .then(setError.onRegisterSuccess)
      .catch((arg0) => {
        if (undefined === setError) {
          throw arg0;
        } else {
          const intl = setError(setRegistering[4]).intl;
          tmp(intl.string(setError(setRegistering[4]).t.xSCvBf));
          throw arg0;
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
  let setRegistering;
  setError = setError.setError;
  setRegistering = setError.setRegistering;
  if (undefined !== setError) {
    setError("");
  }
  setRegistering(true);
  const promise = (function promptForRegisterCredential(fn) {
    const self = this;
    const apply = closure_5.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })(register);
  const nextPromise = (function promptForRegisterCredential(fn) {
    const self = this;
    const apply = closure_5.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })(register).then(setError.onRegisterSuccess);
  return (function promptForRegisterCredential(fn) {
    const self = this;
    const apply = closure_5.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  })(register)
    .then(setError.onRegisterSuccess)
    .catch((arg0) => {
      if (undefined === setError) {
        throw arg0;
      } else {
        const intl = setError(setRegistering[4]).intl;
        tmp(intl.string(setError(setRegistering[4]).t.xSCvBf));
        throw arg0;
      }
    })
    .finally(() => setRegistering(false));
};
const tmp2 = new timestampDefault("WebAuthnUtils");
let result = require("set").fileFinishedImporting("modules/webauthn/native/NativeCeremonies.tsx");

export default obj;
