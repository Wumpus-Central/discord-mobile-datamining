// discord_app/modules/webauthn/native/PasskeyUpsellActionCreators.tsx
import { asyncRequireImpl } from "../../../../_runtime/02007_asyncRequireImpl.js";
import { DismissibleContent } from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import { ModalActionCreators } from "../../../actions/ModalActionCreators.tsx";
import { ACTION_SHEET_HEIGHT_HALF } from "../../action_sheet/native/ActionSheetActionCreators.tsx";
const PASSKEY_UPSELL_KEY = "PASSKEY_UPSELL_KEY";
let result = require("addVersionedDismissedContent").fileFinishedImporting("modules/webauthn/native/PasskeyUpsellActionCreators.tsx");

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
    ModalActionCreators.pushLazy(asyncRequireImpl(14040, dependencyMap.paths), undefined, PASSKEY_UPSELL_KEY);
  },
  closePasskeyUpsellModal() {
    ModalActionCreators.popWithKey(PASSKEY_UPSELL_KEY);
  },
  openPasskeyUpsellPromoSheet() {
    ACTION_SHEET_HEIGHT_HALF.openLazy(asyncRequireImpl(14041, dependencyMap.paths), PASSKEY_UPSELL_KEY);
  },
  closePasskeyUpsellPromoSheet() {
    ACTION_SHEET_HEIGHT_HALF.hideActionSheet(PASSKEY_UPSELL_KEY);
  },
  openPasskeyUpsellPromoModal(closure_0) {
    ModalActionCreators.pushLazy(asyncRequireImpl(14043, dependencyMap.paths), closure_0, PASSKEY_UPSELL_KEY);
  }
};