// discord_app/modules/application_account_linking/native/AccountLinkManagerNative.tsx
import BrowserManager from "../../links/native/BrowserManager.tsx";
import AccountLinkManager2 from "../AccountLinkManager.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const AccountLinkManager = AccountLinkManager2.AccountLinkManager;
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
    obj = closure_0(closure_1[1]);
    this.unsubscribeBrowser = obj.subscribeToIsInAppBrowserOpen((isBrowserOpen, arg1) => {
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
      tmp2 = closure_2;
      evaluatePendingResult = super.evaluatePending();
    }
    return;
  }
}
let closure_2 = AccountLinkManagerNative.prototype;
const accountLinkManagerNative = new AccountLinkManagerNative();
const result = size.fileFinishedImporting("modules/application_account_linking/native/AccountLinkManagerNative.tsx");

export default accountLinkManagerNative;
