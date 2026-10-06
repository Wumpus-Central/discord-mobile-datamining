// discord_app/modules/webauthn/native/PasskeyUpsellActionCreators.tsx
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import DismissibleContentUtils from "../../dismissible_content/DismissibleContentUtils.tsx";
import DismissibleContentUnsafeUtils from "../../dismissible_content/DismissibleContentUnsafeUtils.tsx";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const PASSKEY_UPSELL_KEY = "PASSKEY_UPSELL_KEY";
let obj = {
  openPasskeyUpsell() {
    const obj = DismissibleContentUnsafeUtils;
    if (!obj.UNSAFE_isDismissibleContentDismissed(dismissible_content.DismissibleContent.PASSWORDLESS_UPSELL)) {
      const self = this;
      const tmpResult = DismissibleContentUtils;
      const markDismissibleContentAsShown = tmpResult.requestMarkDismissibleContentAsShown(
        dismissible_content.DismissibleContent.PASSWORDLESS_UPSELL,
      );
      const result = this.openPasskeyUpsellPromoSheet();
    }
  },
  openPasskeyUpsellPromoSheet() {
    const obj = ActionSheetActionCreatorsDefault;
    obj.openLazy(asyncRequire(15530, dependencyMap.paths), PASSKEY_UPSELL_KEY);
  },
  closePasskeyUpsellPromoSheet() {
    const obj = ActionSheetActionCreatorsDefault;
    obj.hideActionSheet(PASSKEY_UPSELL_KEY);
  },
};
let result = size.fileFinishedImporting("modules/webauthn/native/PasskeyUpsellActionCreators.tsx");

export default obj;
