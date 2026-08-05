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
    to = require("../../../discord_common/js/shared/utils/PathUtils.tsx") /* getAuthenticationPath */.getLoginPath(tmp4, false);
    const tmp2Result = require("../../../discord_common/js/shared/utils/PathUtils.tsx") /* getAuthenticationPath */;
  }
  return jsx(require("../../../_runtime/metro/04113__extends.js") /* _extends */.Redirect, { to });
};
export const getRedirectPath = function getRedirectPath() {
  if (CONFERENCE_MODE_ENABLED) {
    let REGISTER = Routes.REGISTER;
  } else {
    REGISTER = require("../../../discord_common/js/shared/utils/PathUtils.tsx") /* getAuthenticationPath */.getLoginPath(tmp, false);
    const obj = require("../../../discord_common/js/shared/utils/PathUtils.tsx") /* getAuthenticationPath */;
  }
  return REGISTER;
};