// discord_app/modules/application_account_linking/native/AccountLinkManagerNative.tsx
import { AccountLinkManager } from "_claimIncentivizedAccountLinkingReward";

class AccountLinkManagerNative extends AccountLinkManager {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    applyArgumentsResult.unsubscribeBrowser = null;
    applyArgumentsResult.isBrowserOpen = false;
    return applyArgumentsResult;
  }
  _initialize() {
    self = this;
    _initializeResult = super._initialize();
    obj = require("NativeModules");
    this.unsubscribeBrowser = obj.subscribeToIsInAppBrowserOpen((isBrowserOpen) => {
      self.isBrowserOpen = isBrowserOpen;
      if (arg1) {
        self.evaluatePending();
      }
    });
    return;
  }
  _terminate() {
    self = this;
    _terminateResult = super._terminate();
    unsubscribeBrowser = this.unsubscribeBrowser;
    if (unsubscribeBrowser != null) {
      unsubscribeBrowserResult = unsubscribeBrowser();
    }
    self.unsubscribeBrowser = null;
    return;
  }
  evaluatePending() {
    if (!this.isBrowserOpen) {
      tmp2 = __esModule;
      evaluatePendingResult = super.evaluatePending();
    }
    return;
  }
}
let closure_2 = AccountLinkManagerNative.prototype;
const accountLinkManagerNative = new AccountLinkManagerNative();
const result = require("set").fileFinishedImporting("modules/application_account_linking/native/AccountLinkManagerNative.tsx");

export default accountLinkManagerNative;