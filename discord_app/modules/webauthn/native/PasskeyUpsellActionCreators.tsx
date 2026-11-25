// === Module 17257: PasskeyUpsellActionCreators ===

// Module 17257 (PasskeyUpsellActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 2119 */;
import dismissible_content from "dismissible_content" /* 4845 */;
import DismissibleContentUtils from "DismissibleContentUtils" /* 4846 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 5044 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5226 */;
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
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17258, dependencyMap.paths), PASSKEY_UPSELL_KEY);
  },
  closePasskeyUpsellPromoSheet() {
    ActionSheetActionCreatorsDefault.hideActionSheet(PASSKEY_UPSELL_KEY);
  }
};