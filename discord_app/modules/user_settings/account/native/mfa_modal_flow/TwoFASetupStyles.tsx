// === Module 16648: TwoFASetupStyles ===

// Module 16648 (TwoFASetupStyles)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import createStyles from "createStyles" /* 5014 */;
import TextStyles from "TextStyles" /* 6723 */;
import size from "module_2" /* 2 */;

const obj = { text: { textAlign: "center", marginLeft: 20, marginRight: 20 }, modalHeader: null, modalBody: null };
const merged = Object.assign(TextStyles(Constants.Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
obj.modalHeader = {};
obj.modalBody = { color: nativeDefault.colors.TEXT_SUBTLE, marginTop: 8 };
const styles = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupStyles.tsx");

export const useTwoFASetupStyles = styles;