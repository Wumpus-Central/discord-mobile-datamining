// discord_app/modules/user_settings/account/native/mfa_modal_flow/TwoFASetupStyles.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../../Constants.tsx";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import TextStyles from "../../../../rebrand/native/TextStyles.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let obj = { text: { textAlign: "center", marginLeft: 20, marginRight: 20 }, modalHeader: null, modalBody: null };
obj = {};
const merged = Object.assign(
  TextStyles(Constants.Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24),
);
obj.modalHeader = obj;
obj.modalBody = { color: nativeDefault.colors.TEXT_SUBTLE, marginTop: 8 };
const styles = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupStyles.tsx");

export const useTwoFASetupStyles = styles;
