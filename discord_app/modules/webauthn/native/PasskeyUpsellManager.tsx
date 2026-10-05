// discord_app/modules/webauthn/native/PasskeyUpsellManager.tsx
import Constants from "../../../Constants.tsx";
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
import size from "../../../../_runtime/metro/00002__.js";

let map;

const LoginStates = Constants.LoginStates;
let c7 = false;
let c8 = false;
class PasskeyUpsellManager extends AutomaticLifecycleManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.actions = {
      POST_CONNECTION_OPEN: applyArgumentsResult.handlePasskeyUpsellShow,
      LOGIN_RESET: applyArgumentsResult.handleLogout,
      LOGIN_SUCCESS: applyArgumentsResult.handleLoginSuccess,
      LOGOUT: applyArgumentsResult.handleLogout,
    };
    map = new Map();
    const result = map.set(AuthenticationStore, applyArgumentsResult.handlePasskeyUpsellShow);
    const result1 = result.set(UserStore, applyArgumentsResult.handlePasskeyUpsellShow);
    applyArgumentsResult.stores = result1.set(WebAuthnStore, applyArgumentsResult.handlePasskeyUpsellShow);
    return applyArgumentsResult;
  }
  handlePasskeyUpsellShow() {
    if (c8) {
      if (MFAUtils.hasWebAuthn) {
        if (AuthenticationStore.getLoginStatus() === LoginStates.NONE) {
          if (AuthenticationStore.attemptedPasswordLogin()) {
            const tmp2Result = DismissibleContentUnsafeUtils;
            if (
              !tmp2Result.UNSAFE_isDismissibleContentDismissed(
                dismissible_content.DismissibleContent.PASSWORDLESS_UPSELL,
              )
            ) {
              if (!WebAuthnStore.hasFetchedCredentials()) {
                const tmp2Result3 = NavigationRouteUtils;
                if (!tmp2Result3.isModalOpen()) {
                  const currentUser = UserStore.getCurrentUser();
                  const tmp7 = undefined !== currentUser && currentUser.verified;
                  if (tmp7) {
                    if (WebAuthnStore.hasFetchedCredentials()) {
                      const obj6 = PasskeyUpsellActionCreatorsDefault;
                      obj6.openPasskeyUpsell();
                    } else {
                      const tmp8 = c7;
                      if (!tmp8) {
                        c7 = true;
                        const tmp2Result4 = WebAuthnActionCreators;
                        const webAuthnCredentials = tmp2Result4.fetchWebAuthnCredentials();
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  handleLoginSuccess() {
    c8 = true;
  }
  handleLogout() {
    c7 = false;
    c8 = false;
  }
  markDismissed(USER_DISMISS) {
    const obj = DismissibleContentUnsafeUtils;
    const obj2 = { dismissAction: USER_DISMISS, forceTrack: true };
    return obj.UNSAFE_markDismissibleContentAsDismissed(
      dismissible_content.DismissibleContent.PASSWORDLESS_UPSELL,
      obj2,
    );
  }
}
const prototype = PasskeyUpsellManager.prototype;
const passkeyUpsellManager = new PasskeyUpsellManager();
let result = size.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellManager.tsx");

export default passkeyUpsellManager;
