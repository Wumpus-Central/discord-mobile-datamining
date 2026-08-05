// discord_app/modules/webauthn/native/PasskeyUpsellManager.tsx
import fetchFingerprint from "fetchFingerprint";
import mergeGuildAvatar from "mergeGuildAvatar";
import hasFetchedCredentials from "hasFetchedCredentials";
import { LoginStates } from "ME";
import "initialize";

const require = arg1;
let c7 = false;
let c8 = false;
class PasskeyUpsellManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.actions = { POST_CONNECTION_OPEN: applyArgumentsResult.handlePasskeyUpsellShow, LOGIN_RESET: applyArgumentsResult.handleLogout, LOGIN_SUCCESS: applyArgumentsResult.handleLoginSuccess, LOGOUT: applyArgumentsResult.handleLogout };
    map = new Map();
    result = map.set(fetchFingerprint, applyArgumentsResult.handlePasskeyUpsellShow);
    result1 = result.set(mergeGuildAvatar, applyArgumentsResult.handlePasskeyUpsellShow);
    applyArgumentsResult.stores = result1.set(hasFetchedCredentials, applyArgumentsResult.handlePasskeyUpsellShow);
    return applyArgumentsResult;
  }
}
const prototype = PasskeyUpsellManager.prototype;
prototype["handlePasskeyUpsellShow"] = function handlePasskeyUpsellShow() {
  if (c8) {
    if (require("../../../utils/MFAUtils.tsx") /* _crypto */.hasWebAuthn) {
      if (loginStatus.getLoginStatus() === LoginStates.NONE) {
        if (obj.attemptedPasswordLogin()) {
          let tmpResult = tmp(4101);
          if (!tmpResult.UNSAFE_isDismissibleContentDismissed(tmp(1358).DismissibleContent.PASSWORDLESS_UPSELL)) {
            if (!hasFetchedCredentials.hasFetchedCredentials()) {
              tmpResult = tmp(4136);
              if (!tmpResult.isModalOpen()) {
                currentUser = currentUser.getCurrentUser();
                if (tmp6) {
                  if (obj3.hasFetchedCredentials()) {
                    require("PasskeyUpsellActionCreators.tsx").openPasskeyUpsell();
                    const obj6 = require("PasskeyUpsellActionCreators.tsx");
                  } else if (!c7) {
                    c7 = true;
                    const webAuthnCredentials = tmp(5740).fetchWebAuthnCredentials();
                    const tmpResult1 = tmp(5740);
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
  let c8 = true;
};
prototype["handleLogout"] = function handleLogout() {
  let c7 = false;
  let c8 = false;
};
prototype["markDismissed"] = function markDismissed(USER_DISMISS) {
  let obj = require("../../dismissible_content/DismissibleContentUnsafeUtils.tsx") /* UNSAFE_isDismissibleContentDismissed */;
  obj = { dismissAction: USER_DISMISS, forceTrack: true };
  return obj.UNSAFE_markDismissibleContentAsDismissed(require("../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx") /* DismissibleContent */.DismissibleContent.PASSWORDLESS_UPSELL, obj);
};
const passkeyUpsellManager = new PasskeyUpsellManager();
let result = require("hasFetchedCredentials").fileFinishedImporting("modules/webauthn/native/PasskeyUpsellManager.tsx");

export default passkeyUpsellManager;