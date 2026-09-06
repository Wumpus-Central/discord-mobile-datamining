// === Module 16745: RedirectUnauthenticated ===

// Module 16745 (RedirectUnauthenticated)
import utils_PathUtils from "utils/PathUtils" /* 1083 */;
import _mod4392 from "module_4392" /* 4392 */;
import noop from "module_19" /* 19 */;

require = fn;
const Routes = fn(1074).Routes;
const CONFERENCE_MODE_ENABLED = fn(1081).CONFERENCE_MODE_ENABLED;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/RedirectUnauthenticated.tsx");

export default function RedirectUnauthenticated() {
  if (CONFERENCE_MODE_ENABLED) {
    let to = Routes.REGISTER;
  } else {
    to = utils_PathUtils.getLoginPath(tmp4, false);
    const tmp2Result = utils_PathUtils;
  }
  return jsx(_mod4392.Redirect, { to });
};
export const getRedirectPath = function getRedirectPath() {
  if (CONFERENCE_MODE_ENABLED) {
    let REGISTER = Routes.REGISTER;
  } else {
    REGISTER = utils_PathUtils.getLoginPath(tmp, false);
  }
  return REGISTER;
};