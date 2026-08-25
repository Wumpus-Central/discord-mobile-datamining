// _runtime/04141_c.js
import noop from "00019_noop.js";

let closure_0 = noop.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;

export const c = (arg0) => {
  const H = constants.H;
  return H.useMemoCache(arg0);
};