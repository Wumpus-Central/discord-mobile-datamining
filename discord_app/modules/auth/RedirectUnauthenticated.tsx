import { _extends } from "../../../_runtime/metro/04113__extends.js";
import { getAuthenticationPath } from "../../../discord_common/js/shared/utils/PathUtils.tsx";
// discord_app/modules/auth/RedirectUnauthenticated.tsx
import "noop";
import { Routes } from "ME";
import { CONFERENCE_MODE_ENABLED } from "CONFERENCE_MODE_ENABLED";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("CONFERENCE_MODE_ENABLED").fileFinishedImporting("modules/auth/RedirectUnauthenticated.tsx");

export default function RedirectUnauthenticated() {
  if (CONFERENCE_MODE_ENABLED) {
    let to = Routes.REGISTER;
  } else {
    to = getAuthenticationPath /* getAuthenticationPath */.getLoginPath(tmp4, false);
    const tmp2Result = getAuthenticationPath /* getAuthenticationPath */;
  }
  return jsx(_extends /* _extends */.Redirect, { to });
};
export const getRedirectPath = function getRedirectPath() {
  if (CONFERENCE_MODE_ENABLED) {
    let REGISTER = Routes.REGISTER;
  } else {
    REGISTER = getAuthenticationPath /* getAuthenticationPath */.getLoginPath(tmp, false);
    const obj = getAuthenticationPath /* getAuthenticationPath */;
  }
  return REGISTER;
};