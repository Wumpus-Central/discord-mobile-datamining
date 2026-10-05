// discord_app/modules/user_settings/account/native/mfa_modal_flow/TwoFASetupStyles.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../../Constants.tsx";
import createStyles_mod from "../../../../../design/components/Styles/native/createStyles.tsx";
import TextStyles from "../../../../rebrand/native/TextStyles.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let obj2;
const Fonts = Constants.Fonts;
let createStyles = createStyles_mod;
createStyles = createStyles.createStyles;
const obj = {
  text: { textAlign: "center", marginLeft: 20, marginRight: 20 },
  modalHeader: obj2,
  modalBody: { color: nativeDefault.colors.TEXT_SUBTLE, marginTop: 8 },
};
obj2 = {};
const merged = Object.assign(TextStyles(Fonts.DISPLAY_EXTRABOLD, nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY, 24));
({ color: nativeDefault.colors.TEXT_SUBTLE, marginTop: 8 });
const styles = createStyles(obj);
const result = size.fileFinishedImporting("modules/user_settings/account/native/mfa_modal_flow/TwoFASetupStyles.tsx");

export const useTwoFASetupStyles = styles;
