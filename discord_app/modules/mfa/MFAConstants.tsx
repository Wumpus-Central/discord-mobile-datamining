const obj = {};
Object.defineProperty(obj, "webauthn", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.gTH4Dp);
  },
  set: undefined
});
Object.defineProperty(obj, "totp", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.nXKmyf);
  },
  set: undefined
});
Object.defineProperty(obj, "sms", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.ZbVwZW);
  },
  set: undefined
});
Object.defineProperty(obj, "password", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t["8F6hKS"]);
  },
  set: undefined
});
Object.defineProperty(obj, "backup", {
  get: () => {
    const intl = require(1236) /* getSystemLocale */.intl;
    return intl.string(require(1236) /* getSystemLocale */.t.vhSRKf);
  },
  set: undefined
});
const result = require("set").fileFinishedImporting("modules/mfa/MFAConstants.tsx");

export const SELECT_NAMES = obj;