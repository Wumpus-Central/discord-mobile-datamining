// discord_app/modules/mfa/MFAConstants.tsx
const obj = {};
Object.defineProperty(obj, "webauthn", {
  get: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.gTH4Dp);
  },
  set: undefined
});
Object.defineProperty(obj, "totp", {
  get: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.nXKmyf);
  },
  set: undefined
});
Object.defineProperty(obj, "sms", {
  get: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.ZbVwZW);
  },
  set: undefined
});
Object.defineProperty(obj, "password", {
  get: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t["8F6hKS"]);
  },
  set: undefined
});
Object.defineProperty(obj, "backup", {
  get: () => {
    const intl = require("../../intl/index.native.tsx") /* getSystemLocale */.intl;
    return intl.string(require("../../intl/index.native.tsx") /* getSystemLocale */.t.vhSRKf);
  },
  set: undefined
});
const result = require("set").fileFinishedImporting("modules/mfa/MFAConstants.tsx");

export const SELECT_NAMES = obj;