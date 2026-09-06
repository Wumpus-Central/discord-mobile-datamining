// === Module 14786: TwoFASetupStyles ===

// Module 14786 (TwoFASetupStyles)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import createStyles from "createStyles" /* 4560 */;
import TextStyles from "TextStyles" /* 5524 */;
import size from "module_2" /* 2 */;

let obj = { text: { textAlign: "center", marginLeft: 20, marginRight: 20 }, modalHeader: null, modalBody: null };
obj = {};
const merged = Object.assign(TextStyles(Constants.Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
obj.modalHeader = obj;
obj.modalBody = { color: nativeDefault.colors.TEXT_SUBTLE, marginTop: 8 };
const styles = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupStyles.tsx");

export const useTwoFASetupStyles = styles;