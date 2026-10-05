// discord_app/modules/guild_role_subscriptions/native/components/FormStyles.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import TextStyles_mod from "../../../rebrand/native/TextStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let obj3;
let obj5;
const Fonts = Constants.Fonts;
const obj = { padding: 16, flexGrow: 0, borderRadius: 8, marginHorizontal: 16 };
let createStyles = createStyles_mod;
const obj2 = {
  header: { marginTop: 24, paddingStart: 16 },
  textInput: obj3,
  disabledTextInput: { padding: 16, width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH },
  dropdownInput: obj5,
};
createStyles = createStyles.createStyles;
obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
let TextStyles = TextStyles_mod;
const merged = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, 16));
const merged1 = Object.assign(obj);
obj5 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
({ padding: 16, width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH });
TextStyles = TextStyles_mod;
const merged2 = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, 16));
const merged3 = Object.assign(obj);
const styles = createStyles(obj2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormStyles.tsx");

export default styles;
