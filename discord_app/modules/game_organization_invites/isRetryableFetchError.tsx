// === Module 11316: isRetryableFetchError ===

// Module 11316 (isRetryableFetchError)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/game_organization_invites/isRetryableFetchError.tsx");

export default function isRetryableFetchError(status) {
  status = status.status;
  let tmp = null != status;
  if (tmp) {
    let tmp2 = 429 === status;
    if (!tmp2) {
      let tmp3 = status >= 500;
      if (tmp3) {
        tmp3 = 503 !== status;
      }
      tmp2 = tmp3;
    }
    tmp = tmp2;
  }
  return tmp;
};