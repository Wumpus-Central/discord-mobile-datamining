// === Module 19003: WaterwheelsDiscoverJoinAttribution ===

// Module 19003 (WaterwheelsDiscoverJoinAttribution)
import size from "module_2" /* 2 */;

let closure_0 = ["CONNECTION_OPEN", "OVERLAY_INITIALIZE", "CONNECTION_CLOSED", "AUTH_SESSION_CHANGE", "LOGIN_SUCCESS", "LOGIN_RESET", "LOGOUT", "REGISTER_SUCCESS", "UPDATE_TOKEN", "CURRENT_USER_UPDATE", "AGE_GATE_LOGOUT_UNDERAGE_NEW_USER", "CLOSE_SUSPENDED_USER"];
const result = size.fileFinishedImporting("modules/waterwheels/discover/WaterwheelsDiscoverJoinAttribution.tsx");

export function captureDiscoverJoinAttribution(AuthenticationStore, trackActionResult, subscribe) {
  function dispose() {
    c5 = false;
    if (c6) {
      c6 = false;
      AuthenticationStore.removeChangeListener(updateAccount);
      for (const item10011 of closure_0) {
        let unsubscribeResult = subscribe.unsubscribe(item10011, updateAccount);
        continue;
      }
    }
  }
  function updateAccount() {
    authSessionIdHash = AuthenticationStore.getAuthSessionIdHash();
    dispose();
  }
  const id = AuthenticationStore.getId();
  let authSessionIdHash = AuthenticationStore.getAuthSessionIdHash();
  const isAuthenticatedResult = AuthenticationStore.isAuthenticated();
  c5 = isAuthenticatedResult;
  c6 = false;
  if (isAuthenticatedResult) {
    AuthenticationStore.addChangeListener(updateAccount);
    for (const item10019 of closure_0) {
      let subscription = arg2.subscribe(item10019, updateAccount);
      continue;
    }
    c6 = true;
  }
  return {
    dispose,
    isValid() {
      authSessionIdHash = AuthenticationStore.getAuthSessionIdHash();
      if (AuthenticationStore.isAuthenticated()) {
        return c5;
      }
      dispose();
    },
    onJoinSettled(arg0) {
      authSessionIdHash = AuthenticationStore.getAuthSessionIdHash();
      if (AuthenticationStore.isAuthenticated()) {
        dispose();
        if (c5) {
          return trackActionResult(arg0);
        }
      }
      dispose();
    }
  };
}