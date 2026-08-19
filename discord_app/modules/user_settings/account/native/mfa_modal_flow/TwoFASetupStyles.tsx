// === Module 14143: styles ===

// Module 14143 (styles)
import obj132 from "obj132" /* 2 */;
import ME from "ME" /* 676 */;
import ThemesDefault from "Themes" /* 712 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import importDefaultResult from "createTextStyle" /* 6782 */;

const obj = {};
const merged = Object.assign(importDefaultResult(ME.Fonts.DISPLAY_EXTRABOLD, ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
obj[1] = obj;
obj[2] = { color: ThemesDefault.colors.TEXT_SUBTLE, marginTop: 8 };
const styles = createCacheKey.createStyles(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupStyles.tsx");

export const useTwoFASetupStyles = styles;