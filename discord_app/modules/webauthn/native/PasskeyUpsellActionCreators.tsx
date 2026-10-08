// === Module 15791: PasskeyUpsellActionCreators ===

// Module 15791 (PasskeyUpsellActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1999 */;
import dismissible_content from "dismissible_content" /* 2048 */;
import DismissibleContentUtils from "DismissibleContentUtils" /* 2049 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4898 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import size from "module_2" /* 2 */;

const PASSKEY_UPSELL_KEY = "PASSKEY_UPSELL_KEY";
let result = size.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellActionCreators.tsx");

export default {
  openPasskeyUpsell() {
    if (!obj.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.PASSWORDLESS_UPSELL)) {
      const self = this;
      const markDismissibleContentAsShown = DismissibleContentUtils.requestMarkDismissibleContentAsShown(dismissible_content.DismissibleContent.PASSWORDLESS_UPSELL);
      const result = this.openPasskeyUpsellPromoSheet();
      const tmpResult = DismissibleContentUtils;
    }
    obj = DismissibleContentUnsafeUtils;
  },
  openPasskeyUpsellPromoSheet() {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(15792, dependencyMap.paths), PASSKEY_UPSELL_KEY);
  },
  closePasskeyUpsellPromoSheet() {
    ActionSheetActionCreatorsDefault.hideActionSheet(PASSKEY_UPSELL_KEY);
  }
};