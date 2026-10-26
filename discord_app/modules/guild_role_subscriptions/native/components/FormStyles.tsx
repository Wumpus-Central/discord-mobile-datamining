// === Module 15145: FormStyles ===

// Module 15145 (FormStyles)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1087 */;
import createStyles from "createStyles" /* 4971 */;
import TextStyles_mod from "TextStyles" /* 6651 */;
import size from "module_2" /* 2 */;

const Fonts = Constants.Fonts;
const obj = { padding: 16, flexGrow: 0, borderRadius: 8, marginHorizontal: 16 };
const obj2 = { header: { marginTop: 24, paddingStart: 16 }, inputContainer: { marginHorizontal: nativeDefault.space.PX_16 }, textInput: null, disabledTextInput: null, dropdownInput: null };
const obj4 = {};
let TextStyles = TextStyles_mod;
const merged = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, 16));
const merged1 = Object.assign(obj);
obj4.backgroundColor = nativeDefault.colors.BACKGROUND_BASE_LOWEST;
obj2.textInput = obj4;
const obj3 = { marginHorizontal: nativeDefault.space.PX_16 };
obj2.disabledTextInput = { padding: 16, width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
const obj6 = {};
let TextStyles = TextStyles_mod;
const merged2 = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, 16));
const merged3 = Object.assign(obj);
obj6.backgroundColor = nativeDefault.colors.BACKGROUND_SURFACE_HIGH;
obj2.dropdownInput = obj6;
const styles = createStyles.createStyles(obj2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormStyles.tsx");

export default styles;