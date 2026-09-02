// === Module 14540: ? ===

// Module 14540
import set from "set" /* 2 */;
import DismissibleContent from "DismissibleContent" /* 1372 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2008 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4445 */;
import _modDef4723 from "module_4723" /* 4723 */;

const PASSKEY_UPSELL_KEY = "PASSKEY_UPSELL_KEY";
let result = set.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellActionCreators.tsx");

export default {
  openPasskeyUpsell() {
    if (!obj.UNSAFE_isDismissibleContentDismissed(DismissibleContent.DismissibleContent.PASSWORDLESS_UPSELL)) {
      const self = this;
      const markDismissibleContentAsShown = tmp(1374).requestMarkDismissibleContentAsShown(tmp(1372).DismissibleContent.PASSWORDLESS_UPSELL);
      const result = this.openPasskeyUpsellPromoSheet();
      const tmpResult = tmp(1374);
    }
  },
  openPasskeyUpsellModal() {
    _modDef4723.pushLazy(asyncRequireImpl(14541, dependencyMap.paths), undefined, PASSKEY_UPSELL_KEY);
  },
  closePasskeyUpsellModal() {
    _modDef4723.popWithKey(PASSKEY_UPSELL_KEY);
  },
  openPasskeyUpsellPromoSheet() {
    ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(14542, dependencyMap.paths), PASSKEY_UPSELL_KEY);
  },
  closePasskeyUpsellPromoSheet() {
    ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet(PASSKEY_UPSELL_KEY);
  },
  openPasskeyUpsellPromoModal(closure_0) {
    _modDef4723.pushLazy(asyncRequireImpl(14544, dependencyMap.paths), closure_0, PASSKEY_UPSELL_KEY);
  }
};