// discord_app/modules/suspicious_downloads/SuspiciousDownloadUtils.tsx
import set from "set";
import { isDiscordProxiedAssetUrl } from "../../utils/URLUtils.tsx";

let set = new Set(require("module_8014"));
let obj = { "github.com": null, "bitbucket.org": null, "gitlab.com": null };
const regExp = new RegExp("/releases\\S*/download|archive/refs/\\S*|/i/raw/i/\\S*|/user-attachments\\S*");
obj[0] = regExp;
const regExp1 = new RegExp("/downloads\\S*/[^/]*");
obj[1] = regExp1;
const regExp2 = new RegExp("/downloads\\S*/[^/]*");
obj[2] = regExp2;
const result = set.fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadUtils.tsx");

export const isSuspiciousDownload = function isSuspiciousDownload(localUri) {
  let hostname;
  let pathname;
  const obj = isDiscordProxiedAssetUrl;
  let toURLSafeResult = obj.toURLSafe(localUri);
  if (toURLSafeResult == null) {
    toURLSafeResult = {};
  }
  ({ pathname, hostname } = toURLSafeResult);
  if (null == hostname) {
    return null;
  } else {
    if (null != obj[hostname]) {
      if (null != pathname) {
        if (!obj3.test(pathname)) {
          return null;
        }
      }
    }
    if (null == pathname) {
      return null;
    } else {
      try {
        const _decodeURIComponent = decodeURIComponent;
        const str = decodeURIComponent(pathname);
        const parts = str.split("/");
        let diff = parts.length - 1;
        let tmp4 = null;
        let num3 = 0;
        if (0 <= diff) {
          while (true) {
            let tmp5 = parts[diff];
            let tmp6 = diff;
            let tmp7 = num3;
            let sum = num3;
            if ("" !== tmp5) {
              sum = num3;
              if ("." !== tmp5) {
                if (".." !== tmp5) {
                  break;
                } else {
                  sum = num3 + 1;
                }
              }
            }
            diff = diff - 1;
            num3 = sum;
            tmp4 = null;
          }
          tmp4 = null;
          if (diff >= num3) {
            tmp4 = parts[diff - num3];
          }
        }
        if (null == tmp4) {
          return null;
        } else {
          const parts1 = tmp4.split(".");
          if (parts1.length < 2) {
            return null;
          } else {
            const str6 = parts1.pop();
            let formatted;
            if (str6 != null) {
              formatted = str6.toLowerCase();
            }
            let tmp10 = null;
            if (null != formatted) {
              tmp10 = null;
              if (set.has(formatted)) {
                tmp10 = formatted;
              }
            }
            return tmp10;
          }
        }
      } catch (err) {
      }
    }
  }
};