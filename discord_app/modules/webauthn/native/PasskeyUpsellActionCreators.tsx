// === Module 17088: PasskeyUpsellActionCreators ===

// Module 17088 (PasskeyUpsellActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1999 */;
import dismissible_content from "dismissible_content" /* 4808 */;
import DismissibleContentUtils from "DismissibleContentUtils" /* 4809 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5211 */;
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
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17089, dependencyMap.paths), PASSKEY_UPSELL_KEY);
  },
  closePasskeyUpsellPromoSheet() {
    ActionSheetActionCreatorsDefault.hideActionSheet(PASSKEY_UPSELL_KEY);
  }
};