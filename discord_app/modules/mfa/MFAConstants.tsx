// === Module 15507: get webauthn ===

// Module 15507 (get webauthn)
import set from "set" /* 2 */;

const obj = {};
Object.defineProperty(obj, "webauthn", {
  get: () => {
    const intl = require(1233) /* getSystemLocale */.intl;
    return intl.string(require(1233) /* getSystemLocale */.t.gTH4Dp);
  },
  set: undefined
});
Object.defineProperty(obj, "totp", {
  get: () => {
    const intl = require(1233) /* getSystemLocale */.intl;
    return intl.string(require(1233) /* getSystemLocale */.t.nXKmyf);
  },
  set: undefined
});
Object.defineProperty(obj, "sms", {
  get: () => {
    const intl = require(1233) /* getSystemLocale */.intl;
    return intl.string(require(1233) /* getSystemLocale */.t.ZbVwZW);
  },
  set: undefined
});
Object.defineProperty(obj, "password", {
  get: () => {
    const intl = require(1233) /* getSystemLocale */.intl;
    return intl.string(require(1233) /* getSystemLocale */.t["8F6hKS"]);
  },
  set: undefined
});
Object.defineProperty(obj, "backup", {
  get: () => {
    const intl = require(1233) /* getSystemLocale */.intl;
    return intl.string(require(1233) /* getSystemLocale */.t.vhSRKf);
  },
  set: undefined
});
const result = set.fileFinishedImporting("modules/mfa/MFAConstants.tsx");

export const SELECT_NAMES = obj;