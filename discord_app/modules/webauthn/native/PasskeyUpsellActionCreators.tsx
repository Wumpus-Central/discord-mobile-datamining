// === Module 14084: ? ===

// Module 14084
import obj132 from "obj132" /* 2 */;
import DismissibleContent from "DismissibleContent" /* 1377 */;
import addVersionedDismissedContent from "addVersionedDismissedContent" /* 1379 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2007 */;
import UNSAFE_isDismissibleContentDismissed from "UNSAFE_isDismissibleContentDismissed" /* 4196 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;
import _modDef5260 from "module_5260" /* 5260 */;

const PASSKEY_UPSELL_KEY = "PASSKEY_UPSELL_KEY";
let result = obj132.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellActionCreators.tsx");

export default {
  openPasskeyUpsell() {
    if (!obj.UNSAFE_isDismissibleContentDismissed(DismissibleContent.DismissibleContent.PASSWORDLESS_UPSELL)) {
      const self = this;
      const markDismissibleContentAsShown = addVersionedDismissedContent.requestMarkDismissibleContentAsShown(DismissibleContent.DismissibleContent.PASSWORDLESS_UPSELL);
      const result = this.openPasskeyUpsellPromoSheet();
      const tmpResult = addVersionedDismissedContent;
    }
    obj = UNSAFE_isDismissibleContentDismissed;
  },
  openPasskeyUpsellModal() {
    _modDef5260.pushLazy(asyncRequireImpl(14085, dependencyMap.paths), undefined, PASSKEY_UPSELL_KEY);
  },
  closePasskeyUpsellModal() {
    _modDef5260.popWithKey(PASSKEY_UPSELL_KEY);
  },
  openPasskeyUpsellPromoSheet() {
    ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(14086, dependencyMap.paths), PASSKEY_UPSELL_KEY);
  },
  closePasskeyUpsellPromoSheet() {
    ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet(PASSKEY_UPSELL_KEY);
  },
  openPasskeyUpsellPromoModal(closure_0) {
    _modDef5260.pushLazy(asyncRequireImpl(14088, dependencyMap.paths), closure_0, PASSKEY_UPSELL_KEY);
  }
};