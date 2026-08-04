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
    to = require(507) /* getAuthenticationPath */.getLoginPath(tmp4, false);
    const tmp2Result = require(507) /* getAuthenticationPath */;
  }
  return jsx(require(4113) /* _extends */.Redirect, { to });
};
export const getRedirectPath = function getRedirectPath() {
  if (CONFERENCE_MODE_ENABLED) {
    let REGISTER = Routes.REGISTER;
  } else {
    REGISTER = require(507) /* getAuthenticationPath */.getLoginPath(tmp, false);
    const obj = require(507) /* getAuthenticationPath */;
  }
  return REGISTER;
};