// === Module 14004: FormStyles ===

// Module 14004 (FormStyles)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import createStyles from "createStyles" /* 4638 */;
import TextStyles_mod from "TextStyles" /* 5610 */;
import size from "module_2" /* 2 */;

const Fonts = Constants.Fonts;
const obj = { padding: 16, flexGrow: 0, borderRadius: 8, marginHorizontal: 16 };
const obj2 = { header: { marginTop: 24, paddingStart: 16 }, textInput: null, disabledTextInput: null, dropdownInput: null };
const obj3 = {};
let TextStyles = TextStyles_mod;
const merged = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, 16));
const merged1 = Object.assign(obj);
obj3.backgroundColor = nativeDefault.colors.BACKGROUND_BASE_LOWEST;
obj2.textInput = obj3;
obj2.disabledTextInput = { padding: 16, width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
const obj5 = {};
let TextStyles = TextStyles_mod;
const merged2 = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, 16));
const merged3 = Object.assign(obj);
obj5.backgroundColor = nativeDefault.colors.BACKGROUND_SURFACE_HIGH;
obj2.dropdownInput = obj5;
const styles = createStyles.createStyles(obj2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormStyles.tsx");

export default styles;