// discord_app/modules/remote_auth/QRLoginUtils.tsx
import URLUtilsDefault from "../../utils/URLUtils.tsx";
import size from "../../../_runtime/metro/00002__.js";

const re2 = /^\/ra\/([\w-]+)$/;
const result = size.fileFinishedImporting("modules/remote_auth/QRLoginUtils.tsx");

export const findRemoteAuthFingerprint = function findRemoteAuthFingerprint(host, pathname) {
  if (null != host) {
    if (null != pathname) {
      if (obj.isDiscordHostname(host)) {
        const match = pathname.match(re2);
        let tmp6 = null;
        if (null != match) {
          tmp6 = match[1];
        }
        return tmp6;
      }
      obj = URLUtilsDefault;
    }
  }
  return null;
};
