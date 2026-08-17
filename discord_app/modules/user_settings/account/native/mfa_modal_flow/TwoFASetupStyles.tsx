// discord_app/modules/user_settings/account/native/mfa_modal_flow/TwoFASetupStyles.tsx
import set from "../../../../../../_runtime/00002_set.js";
import ME from "../../../../../Constants.tsx";
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";
import importDefaultResult from "../../../../rebrand/native/TextStyles.tsx";

let obj = { text: { textAlign: "center", marginLeft: 20, marginRight: 20 }, modalHeader: null, modalBody: null };
obj = {};
const merged = Object.assign(importDefaultResult(ME.Fonts.DISPLAY_EXTRABOLD, ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
obj[1] = obj;
obj[2] = { color: ThemesDefault.colors.TEXT_SUBTLE, marginTop: 8 };
const styles = createCacheKey.createStyles(obj);
const obj1 = { color: ThemesDefault.colors.TEXT_SUBTLE, marginTop: 8 };
const result = set.fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupStyles.tsx");

export const useTwoFASetupStyles = styles;