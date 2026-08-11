// discord_app/modules/webauthn/native/PasskeyUpsellManager.tsx
import fetchFingerprint from "fetchFingerprint";
import mergeGuildAvatar from "mergeGuildAvatar";
import hasFetchedCredentials from "hasFetchedCredentials";
import { LoginStates } from "ME";
import "initialize";
import { DismissibleContent } from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import { _crypto } from "../../../utils/MFAUtils.tsx";
import { UNSAFE_isDismissibleContentDismissed } from "../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import { PasskeyUpsellActionCreators } from "PasskeyUpsellActionCreators.tsx";

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
    if (_crypto.hasWebAuthn) {
      if (loginStatus.getLoginStatus() === LoginStates.NONE) {
        if (obj.attemptedPasswordLogin()) {
          let tmpResult = tmp(4125);
          if (!tmpResult.UNSAFE_isDismissibleContentDismissed(tmp(1377).DismissibleContent.PASSWORDLESS_UPSELL)) {
            if (!hasFetchedCredentials.hasFetchedCredentials()) {
              tmpResult = tmp(4158);
              if (!tmpResult.isModalOpen()) {
                currentUser = currentUser.getCurrentUser();
                if (tmp6) {
                  if (obj3.hasFetchedCredentials()) {
                    PasskeyUpsellActionCreators.openPasskeyUpsell();
                    const obj6 = PasskeyUpsellActionCreators;
                  } else if (!c7) {
                    c7 = true;
                    const webAuthnCredentials = tmp(5831).fetchWebAuthnCredentials();
                    const tmpResult1 = tmp(5831);
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
  let obj = UNSAFE_isDismissibleContentDismissed;
  obj = { dismissAction: USER_DISMISS, forceTrack: true };
  return obj.UNSAFE_markDismissibleContentAsDismissed(DismissibleContent.DismissibleContent.PASSWORDLESS_UPSELL, obj);
};
const passkeyUpsellManager = new PasskeyUpsellManager();
let result = require("hasFetchedCredentials").fileFinishedImporting("modules/webauthn/native/PasskeyUpsellManager.tsx");

export default passkeyUpsellManager;