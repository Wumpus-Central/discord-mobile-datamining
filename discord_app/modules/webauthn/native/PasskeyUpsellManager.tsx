// discord_app/modules/webauthn/native/PasskeyUpsellManager.tsx
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentUnsafeUtils from "../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import NavigationRouteUtils from "../../main_tabs_v2/helpers/NavigationRouteUtils.native.tsx";
import WebAuthnActionCreators from "../WebAuthnActionCreators.tsx";
import MFAUtils from "../../../utils/MFAUtils.tsx";
import PasskeyUpsellActionCreatorsDefault from "PasskeyUpsellActionCreators.tsx";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import WebAuthnStore from "../WebAuthnStore.tsx";
import AutomaticLifecycleManager from "../../../lib/AutomaticLifecycleManager.tsx";

require = fn;
const LoginStates = fn(1074).LoginStates;
let c7 = false;
let c8 = false;
class PasskeyUpsellManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.actions = {
      POST_CONNECTION_OPEN: applyArgumentsResult.handlePasskeyUpsellShow,
      LOGIN_RESET: applyArgumentsResult.handleLogout,
      LOGIN_SUCCESS: applyArgumentsResult.handleLoginSuccess,
      LOGOUT: applyArgumentsResult.handleLogout,
    };
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
        if (AuthenticationStore.attemptedPasswordLogin()) {
          let tmpResult = DismissibleContentUnsafeUtils;
          if (
            !tmpResult.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.PASSWORDLESS_UPSELL)
          ) {
            if (!WebAuthnStore.hasFetchedCredentials()) {
              tmpResult = NavigationRouteUtils;
              if (!tmpResult.isModalOpen()) {
                const currentUser = UserStore.getCurrentUser();
                if (tmp6) {
                  if (WebAuthnStore.hasFetchedCredentials()) {
                    PasskeyUpsellActionCreatorsDefault.openPasskeyUpsell();
                  } else if (!c7) {
                    c7 = true;
                    const webAuthnCredentials = WebAuthnActionCreators.fetchWebAuthnCredentials();
                    const tmpResult1 = WebAuthnActionCreators;
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
  return obj.UNSAFE_markDismissibleContentAsDismissed(dismissible_content.DismissibleContent.PASSWORDLESS_UPSELL, obj);
};
const passkeyUpsellManager = new PasskeyUpsellManager();
const size = fn(2);
let result = size.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellManager.tsx");

export default passkeyUpsellManager;
