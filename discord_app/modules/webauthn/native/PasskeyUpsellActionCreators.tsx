// discord_app/modules/webauthn/native/PasskeyUpsellActionCreators.tsx
import set from "../../../../_runtime/00002_set.js";
import DismissibleContent from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import asyncRequireImpl from "../../../../_runtime/02010_asyncRequireImpl.js";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import _modDef4689 from "../../../actions/ModalActionCreators.tsx";

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
    _modDef4689.pushLazy(asyncRequireImpl(14251, dependencyMap.paths), undefined, PASSKEY_UPSELL_KEY);
  },
  closePasskeyUpsellModal() {
    _modDef4689.popWithKey(PASSKEY_UPSELL_KEY);
  },
  openPasskeyUpsellPromoSheet() {
    ACTION_SHEET_HEIGHT_HALFDefault.openLazy(asyncRequireImpl(14252, dependencyMap.paths), PASSKEY_UPSELL_KEY);
  },
  closePasskeyUpsellPromoSheet() {
    ACTION_SHEET_HEIGHT_HALFDefault.hideActionSheet(PASSKEY_UPSELL_KEY);
  },
  openPasskeyUpsellPromoModal(closure_0) {
    _modDef4689.pushLazy(asyncRequireImpl(14254, dependencyMap.paths), closure_0, PASSKEY_UPSELL_KEY);
  }
};