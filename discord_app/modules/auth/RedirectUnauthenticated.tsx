// discord_app/modules/auth/RedirectUnauthenticated.tsx
import noopAll from "../../../_runtime/00019_noop.js";
import getAuthenticationPath from "../../../discord_common/js/shared/utils/PathUtils.tsx";
import _extends from "../../../_runtime/metro/04208__extends.js";
import { Routes } from "../../Constants.tsx";
import { CONFERENCE_MODE_ENABLED } from "../conference_mode/ConferenceModeConstants.tsx";
import { jsx } from "../../../_runtime/react/00021_jsxProd.js";

require = arg1;
noopAll;
const result = require("set").fileFinishedImporting("modules/auth/RedirectUnauthenticated.tsx");

export default function RedirectUnauthenticated() {
  if (CONFERENCE_MODE_ENABLED) {
    let to = Routes.REGISTER;
  } else {
    to = getAuthenticationPath.getLoginPath(tmp4, false);
    const tmp2Result = getAuthenticationPath;
  }
  return jsx(_extends.Redirect, { to });
};
export const getRedirectPath = function getRedirectPath() {
  if (CONFERENCE_MODE_ENABLED) {
    let REGISTER = Routes.REGISTER;
  } else {
    REGISTER = getAuthenticationPath.getLoginPath(tmp, false);
    const obj = getAuthenticationPath;
  }
  return REGISTER;
};