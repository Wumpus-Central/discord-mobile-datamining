// === Module 14662: PasskeyUpsellManager ===

// Module 14662 (PasskeyUpsellManager)
import dismissible_content from "dismissible_content" /* 1943 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4380 */;
import MFAUtils from "MFAUtils" /* 6951 */;
import PasskeyUpsellActionCreatorsDefault from "PasskeyUpsellActionCreators" /* 14663 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import UserStore from "UserStore" /* 1371 */;
import WebAuthnStore from "WebAuthnStore" /* 14656 */;
import AutomaticLifecycleManager from "AutomaticLifecycleManager" /* 7118 */;

require = fn;
const LoginStates = fn(1074).LoginStates;
let c7 = false;
let c8 = false;
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
    if (MFAUtils.hasWebAuthn) {
      if (AuthenticationStore.getLoginStatus() === LoginStates.NONE) {
        if (obj.attemptedPasswordLogin()) {
          let tmpResult = tmp(4380);
          if (!tmpResult.UNSAFE_isDismissibleContentDismissed(tmp(1943).DismissibleContent.PASSWORDLESS_UPSELL)) {
            if (!WebAuthnStore.hasFetchedCredentials()) {
              tmpResult = tmp(4417);
              if (!tmpResult.isModalOpen()) {
                const currentUser = UserStore.getCurrentUser();
                if (tmp6) {
                  if (obj3.hasFetchedCredentials()) {
                    PasskeyUpsellActionCreatorsDefault.openPasskeyUpsell();
                  } else if (!c7) {
                    c7 = true;
                    const webAuthnCredentials = tmp(6597).fetchWebAuthnCredentials();
                    const tmpResult1 = tmp(6597);
                  }
                }
                tmp6 = undefined !== currentUser && currentUser.verified;
              }
            }
          }
        }
      }
      obj = AuthenticationStore;
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
  return obj.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.PASSWORDLESS_UPSELL, obj);
};
const passkeyUpsellManager = new PasskeyUpsellManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellManager.tsx");

export default passkeyUpsellManager;