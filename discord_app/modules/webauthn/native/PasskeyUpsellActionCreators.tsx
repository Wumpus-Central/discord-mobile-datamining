// === Module 14741: PasskeyUpsellActionCreators ===

// Module 14741 (PasskeyUpsellActionCreators)
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import dismissible_content from "dismissible_content" /* 1943 */;
import DismissibleContentUtils from "DismissibleContentUtils" /* 1945 */;
import DismissibleContentUnsafeUtils from "DismissibleContentUnsafeUtils" /* 4425 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4572 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 4808 */;
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
  openPasskeyUpsellModal() {
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(14742, dependencyMap.paths), undefined, PASSKEY_UPSELL_KEY);
  },
  closePasskeyUpsellModal() {
    ModalActionCreatorsDefault.popWithKey(PASSKEY_UPSELL_KEY);
  },
  openPasskeyUpsellPromoSheet() {
    ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(14743, dependencyMap.paths), PASSKEY_UPSELL_KEY);
  },
  closePasskeyUpsellPromoSheet() {
    ActionSheetActionCreatorsDefault.hideActionSheet(PASSKEY_UPSELL_KEY);
  },
  openPasskeyUpsellPromoModal(merged) {
    ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(14745, dependencyMap.paths), merged, PASSKEY_UPSELL_KEY);
  }
};