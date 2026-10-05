// === Module 7810: SuspiciousDownloadUtils ===

// Module 7810 (SuspiciousDownloadUtils)
import URLUtilsDefault from "URLUtils" /* 1371 */;
import _modDef7811 from "module_7811" /* 7811 */;
import size from "module_2" /* 2 */;

let regExp;
let regExp1;
let regExp2;
const set = new Set(_modDef7811);
let obj = { "github.com": regExp, "bitbucket.org": regExp1, "gitlab.com": regExp2 };
regExp = new RegExp("/releases\\S*/download|archive/refs/\\S*|/i/raw/i/\\S*|/user-attachments\\S*");
regExp1 = new RegExp("/downloads\\S*/[^/]*");
regExp2 = new RegExp("/downloads\\S*/[^/]*");
const result = size.fileFinishedImporting("modules/suspicious_downloads/SuspiciousDownloadUtils.tsx");

export const isSuspiciousDownload = function isSuspiciousDownload(url) {
  let hostname;
  let pathname;
  obj = URLUtilsDefault;
  let toURLSafeResult = obj.toURLSafe(url);
  if (toURLSafeResult == null) {
    toURLSafeResult = {};
  }
  ({ pathname, hostname } = toURLSafeResult);
  if (null == hostname) {
    return null;
  } else {
    if (null != obj[hostname]) {
      if (null != pathname) {
        if (!obj[hostname].test(pathname)) {
          return null;
        }
      }
    }
    if (null == pathname) {
      return null;
    } else {
      let str = pathname;
      try {
        const _decodeURIComponent = decodeURIComponent;
        str = decodeURIComponent(pathname);
      } catch (err) {
      }
      const parts = str.split("/");
      let diff = parts.length - 1;
      let tmp4 = null;
      let num3 = 0;
      if (0 <= diff) {
        while (true) {
          let tmp5 = parts[diff];
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
    }
  }
};