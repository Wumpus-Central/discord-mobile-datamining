// === Module 14083: handlePasskeyUpsellShow ===

// Module 14083 (handlePasskeyUpsellShow)
import DismissibleContent from "DismissibleContent" /* 1377 */;
import UNSAFE_isDismissibleContentDismissed from "UNSAFE_isDismissibleContentDismissed" /* 4196 */;
import coerceMainRoute from "coerceMainRoute" /* 4229 */;
import initializeDefault from "initialize" /* 5038 */;
import _fetchWebAuthnConditionalChallenge from "_fetchWebAuthnConditionalChallenge" /* 5264 */;
import _crypto from "_crypto" /* 8588 */;
import _modDef14084 from "module_14084" /* 14084 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import hasFetchedCredentials from "hasFetchedCredentials" /* 14077 */;
import { LoginStates } from "ME" /* 676 */;

require = fn;
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
        if (loginStatus.attemptedPasswordLogin()) {
          let tmpResult = UNSAFE_isDismissibleContentDismissed;
          if (!tmpResult.UNSAFE_isDismissibleContentDismissed(DismissibleContent.DismissibleContent.PASSWORDLESS_UPSELL)) {
            if (!closure_5.hasFetchedCredentials()) {
              tmpResult = coerceMainRoute;
              if (!tmpResult.isModalOpen()) {
                currentUser = currentUser.getCurrentUser();
                if (tmp6) {
                  if (closure_5.hasFetchedCredentials()) {
                    _modDef14084.openPasskeyUpsell();
                  } else if (!c7) {
                    c7 = true;
                    const webAuthnCredentials = _fetchWebAuthnConditionalChallenge.fetchWebAuthnCredentials();
                    const tmpResult1 = _fetchWebAuthnConditionalChallenge;
                  }
                }
                tmp6 = undefined !== currentUser && currentUser.verified;
              }
            }
          }
        }
      }
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
  const obj = { dismissAction: USER_DISMISS, forceTrack: true };
  return obj.UNSAFE_markDismissibleContentAsDismissed(DismissibleContent.DismissibleContent.PASSWORDLESS_UPSELL, obj);
};
const passkeyUpsellManager = new PasskeyUpsellManager();
let result = require("obj132").fileFinishedImporting("modules/webauthn/native/PasskeyUpsellManager.tsx");

export default passkeyUpsellManager;