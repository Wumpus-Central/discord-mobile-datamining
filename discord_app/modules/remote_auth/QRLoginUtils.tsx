// discord_app/modules/remote_auth/QRLoginUtils.tsx
const re2 = /^\/ra\/([\w-]+)$/;
const result = require("set").fileFinishedImporting("modules/remote_auth/QRLoginUtils.tsx");

export const findRemoteAuthFingerprint = function findRemoteAuthFingerprint(host, pathname) {
  if (null != host) {
    if (null != pathname) {
      if (obj.isDiscordHostname(host)) {
        const match = pathname.match(closure_2);
        let tmp6 = null;
        if (null != match) {
          tmp6 = match[1];
        }
        return tmp6;
      }
      obj = require("../../utils/URLUtils.tsx");
    }
  }
  return null;
};