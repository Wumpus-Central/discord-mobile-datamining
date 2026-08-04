const PASSKEY_UPSELL_KEY = "PASSKEY_UPSELL_KEY";
let result = require("addVersionedDismissedContent").fileFinishedImporting("modules/webauthn/native/PasskeyUpsellActionCreators.tsx");

export default {
  openPasskeyUpsell() {
    if (!obj.UNSAFE_isDismissibleContentDismissed(require(1358) /* DismissibleContent */.DismissibleContent.PASSWORDLESS_UPSELL)) {
      const self = this;
      const markDismissibleContentAsShown = tmp(1360).requestMarkDismissibleContentAsShown(tmp(1358).DismissibleContent.PASSWORDLESS_UPSELL);
      const result = this.openPasskeyUpsellPromoSheet();
      const tmpResult = tmp(1360);
    }
  },
  openPasskeyUpsellModal() {
    importDefault(4490).pushLazy(require(1959) /* asyncRequireImpl */(13878, dependencyMap.paths), undefined, PASSKEY_UPSELL_KEY);
  },
  closePasskeyUpsellModal() {
    importDefault(4490).popWithKey(PASSKEY_UPSELL_KEY);
  },
  openPasskeyUpsellPromoSheet() {
    importDefault(4253).openLazy(require(1959) /* asyncRequireImpl */(13879, dependencyMap.paths), PASSKEY_UPSELL_KEY);
  },
  closePasskeyUpsellPromoSheet() {
    importDefault(4253).hideActionSheet(PASSKEY_UPSELL_KEY);
  },
  openPasskeyUpsellPromoModal(closure_0) {
    importDefault(4490).pushLazy(require(1959) /* asyncRequireImpl */(13881, dependencyMap.paths), closure_0, PASSKEY_UPSELL_KEY);
  }
};