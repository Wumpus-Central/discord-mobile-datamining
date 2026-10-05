// === Module 18087: AccountLinkManagerNative ===

// Module 18087 (AccountLinkManagerNative)
import BrowserManager from "BrowserManager" /* 4851 */;
import AccountLinkManager2 from "AccountLinkManager" /* 17122 */;
import size from "module_2" /* 2 */;

const AccountLinkManager = AccountLinkManager2.AccountLinkManager;
class AccountLinkManagerNative extends AccountLinkManager {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    applyArgumentsResult.unsubscribeBrowser = null;
    applyArgumentsResult.isBrowserOpen = false;
    return applyArgumentsResult;
  }
  _initialize() {
    const self = this;
    super._initialize();
    const obj = BrowserManager;
    this.unsubscribeBrowser = obj.subscribeToIsInAppBrowserOpen((isBrowserOpen, arg1) => {
      self.isBrowserOpen = isBrowserOpen;
      const tmp = arg1;
      if (tmp) {
        self.evaluatePending();
      }
    });
  }
  _terminate() {
    const self = this;
    super._terminate();
    const unsubscribeBrowser = this.unsubscribeBrowser;
    if (unsubscribeBrowser != null) {
      unsubscribeBrowser();
    }
    self.unsubscribeBrowser = null;
  }
  evaluatePending() {
    if (!this.isBrowserOpen) {
      super.evaluatePending();
    }
  }
}
let closure_2 = AccountLinkManagerNative.prototype;
const accountLinkManagerNative = new AccountLinkManagerNative();
const result = size.fileFinishedImporting("modules/application_account_linking/native/AccountLinkManagerNative.tsx");

export default accountLinkManagerNative;