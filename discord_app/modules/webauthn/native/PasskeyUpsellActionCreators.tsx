// discord_app/modules/webauthn/native/PasskeyUpsellActionCreators.tsx
import obj132 from "../../../../_runtime/00002_obj132.js";
import DismissibleContent from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import addVersionedDismissedContent from "../../dismissible_content/DismissibleContentUtils.tsx";
import asyncRequireImpl from "../../../../_runtime/02007_asyncRequireImpl.js";
import UNSAFE_isDismissibleContentDismissed from "../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import _modDef5260 from "../../../actions/ModalActionCreators.tsx";

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