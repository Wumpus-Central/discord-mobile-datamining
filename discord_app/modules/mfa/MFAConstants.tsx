// discord_app/modules/mfa/MFAConstants.tsx
import size from "../../../_runtime/metro/00002__.js";

const obj = {};
Object.defineProperty(obj, "webauthn", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.gTH4Dp);
  },
  set: undefined,
});
Object.defineProperty(obj, "totp", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.nXKmyf);
  },
  set: undefined,
});
Object.defineProperty(obj, "sms", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.ZbVwZW);
  },
  set: undefined,
});
Object.defineProperty(obj, "password", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t["8F6hKS"]);
  },
  set: undefined,
});
Object.defineProperty(obj, "backup", {
  get: () => {
    const intl = require("util").intl;
    return intl.string(require("util").t.vhSRKf);
  },
  set: undefined,
});
const result = size.fileFinishedImporting("modules/mfa/MFAConstants.tsx");

export const SELECT_NAMES = obj;
