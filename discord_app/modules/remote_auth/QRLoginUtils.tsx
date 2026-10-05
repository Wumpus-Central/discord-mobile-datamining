// === Module 13661: QRLoginUtils ===

// Module 13661 (QRLoginUtils)
import URLUtilsDefault from "URLUtils" /* 1371 */;
import size from "module_2" /* 2 */;

const re2 = /^\/ra\/([\w-]+)$/;
const result = size.fileFinishedImporting("modules/remote_auth/QRLoginUtils.tsx");

export const findRemoteAuthFingerprint = function findRemoteAuthFingerprint(host, pathname) {
  if (null != host) {
    if (null != pathname) {
      const obj = URLUtilsDefault;
      if (obj.isDiscordHostname(host)) {
        const match = pathname.match(re2);
        let tmp6 = null;
        if (null != match) {
          tmp6 = match[1];
        }
        return tmp6;
      }
    }
  }
  return null;
};