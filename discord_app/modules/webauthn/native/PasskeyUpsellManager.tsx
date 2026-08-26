// === Module 14253: handlePasskeyUpsellShow ===

// Module 14253 (handlePasskeyUpsellShow)
import DismissibleContent from "DismissibleContent" /* 1377 */;
import UNSAFE_isDismissibleContentDismissed from "UNSAFE_isDismissibleContentDismissed" /* 4265 */;
import initializeDefault from "initialize" /* 5433 */;
import _crypto from "_crypto" /* 8703 */;
import _modDef14254 from "module_14254" /* 14254 */;
import closure_3 from "fetchFingerprint" /* 1218 */;
import closure_4 from "mergeGuildAvatar" /* 1922 */;
import closure_5 from "hasFetchedCredentials" /* 14247 */;
import { LoginStates } from "ME" /* 676 */;

require = arg1;
let c7 = false;
let c8 = false;
initializeDefault;
class PasskeyUpsellManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.actions = { POST_CONNECTION_OPEN: applyArgumentsResult.handlePasskeyUpsellShow, LOGIN_RESET: applyArgumentsResult.handleLogout, LOGIN_SUCCESS: applyArgumentsResult.handleLoginSuccess, LOGOUT: applyArgumentsResult.handleLogout };
    map = new Map();
    result = map.set(closure_3, applyArgumentsResult.handlePasskeyUpsellShow);
    result1 = result.set(closure_4, applyArgumentsResult.handlePasskeyUpsellShow);
    applyArgumentsResult.stores = result1.set(closure_5, applyArgumentsResult.handlePasskeyUpsellShow);
    return applyArgumentsResult;
  }
}
const prototype = PasskeyUpsellManager.prototype;
prototype["handlePasskeyUpsellShow"] = function handlePasskeyUpsellShow() {
  if (c8) {
    if (_crypto.hasWebAuthn) {
      if (loginStatus.getLoginStatus() === LoginStates.NONE) {
        if (obj.attemptedPasswordLogin()) {
          let tmpResult = tmp(4265);
          if (!tmpResult.UNSAFE_isDismissibleContentDismissed(tmp(1377).DismissibleContent.PASSWORDLESS_UPSELL)) {
            if (!closure_5.hasFetchedCredentials()) {
              tmpResult = tmp(4298);
              if (!tmpResult.isModalOpen()) {
                currentUser = currentUser.getCurrentUser();
                if (tmp6) {
                  if (obj3.hasFetchedCredentials()) {
                    _modDef14254.openPasskeyUpsell();
                    const obj6 = _modDef14254;
                  } else if (!c7) {
                    c7 = true;
                    const webAuthnCredentials = tmp(6003).fetchWebAuthnCredentials();
                    const tmpResult1 = tmp(6003);
                  }
                }
                tmp6 = undefined !== currentUser && currentUser.verified;
              }
            }
          }
        }
      }
      obj = loginStatus;
    }
  }
};
prototype["handleLoginSuccess"] = function handleLoginSuccess() {
  c8 = true;
};
prototype["handleLogout"] = function handleLogout() {
  c7 = false;
  c8 = false;
};
prototype["markDismissed"] = function markDismissed(USER_DISMISS) {
  let obj = UNSAFE_isDismissibleContentDismissed;
  obj = { dismissAction: USER_DISMISS, forceTrack: true };
  return obj.UNSAFE_markDismissibleContentAsDismissed(DismissibleContent.DismissibleContent.PASSWORDLESS_UPSELL, obj);
};
const passkeyUpsellManager = new PasskeyUpsellManager();
let result = require("set").fileFinishedImporting("modules/webauthn/native/PasskeyUpsellManager.tsx");

export default passkeyUpsellManager;