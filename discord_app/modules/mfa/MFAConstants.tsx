// discord_app/modules/mfa/MFAConstants.tsx
import { getSystemLocale } from "../../intl/index.native.tsx";
const obj = {};
Object.defineProperty(obj, "webauthn", {
  get: () => {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.gTH4Dp);
  },
  set: undefined
});
Object.defineProperty(obj, "totp", {
  get: () => {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.nXKmyf);
  },
  set: undefined
});
Object.defineProperty(obj, "sms", {
  get: () => {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.ZbVwZW);
  },
  set: undefined
});
Object.defineProperty(obj, "password", {
  get: () => {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t["8F6hKS"]);
  },
  set: undefined
});
Object.defineProperty(obj, "backup", {
  get: () => {
    const intl = getSystemLocale.intl;
    return intl.string(getSystemLocale.t.vhSRKf);
  },
  set: undefined
});
const result = require("set").fileFinishedImporting("modules/mfa/MFAConstants.tsx");

export const SELECT_NAMES = obj;