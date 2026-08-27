// === Module 14281: ? ===

// Module 14281
import set from "set" /* 2 */;
import DismissibleContent from "DismissibleContent" /* 1377 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2009 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4412 */;
import _modDef4676 from "module_4676" /* 4676 */;

const PASSKEY_UPSELL_KEY = "PASSKEY_UPSELL_KEY";
let result = set.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellActionCreators.tsx");

export default {
  openPasskeyUpsell() {
    if (!obj.UNSAFE_isDismissibleContentDismissed(DismissibleContent.DismissibleContent.PASSWORDLESS_UPSELL)) {
      const self = this;
      const markDismissibleContentAsShown = tmp(1379).requestMarkDismissibleContentAsShown(tmp(1377).DismissibleContent.PASSWORDLESS_UPSELL);
      const result = this.openPasskeyUpsellPromoSheet();
      const tmpResult = tmp(1379);
    }
  },
  openPasskeyUpsellModal() {
    _modDef4676.pushLazy(asyncRequireImpl(14282, dependencyMap.paths), undefined, PASSKEY_UPSELL_KEY);
  },
  closePasskeyUpsellModal() {
    _modDef4676.popWithKey(PASSKEY_UPSELL_KEY);
  },
  openPasskeyUpsellPromoSheet() {
    ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(14283, dependencyMap.paths), PASSKEY_UPSELL_KEY);
  },
  closePasskeyUpsellPromoSheet() {
    ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet(PASSKEY_UPSELL_KEY);
  },
  openPasskeyUpsellPromoModal(closure_0) {
    _modDef4676.pushLazy(asyncRequireImpl(14285, dependencyMap.paths), closure_0, PASSKEY_UPSELL_KEY);
  }
};