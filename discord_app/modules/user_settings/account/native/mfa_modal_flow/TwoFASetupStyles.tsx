// discord_app/modules/user_settings/account/native/mfa_modal_flow/TwoFASetupStyles.tsx
import obj132 from "../../../../../../_runtime/00002_obj132.js";
import ME from "../../../../../Constants.tsx";
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";
import importDefaultResult from "../../../../rebrand/native/TextStyles.tsx";

const obj = {};
const merged = Object.assign(importDefaultResult(ME.Fonts.DISPLAY_EXTRABOLD, ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
obj[1] = obj;
obj[2] = { color: ThemesDefault.colors.TEXT_SUBTLE, marginTop: 8 };
const styles = createCacheKey.createStyles(obj);
const result = obj132.fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupStyles.tsx");

export const useTwoFASetupStyles = styles;