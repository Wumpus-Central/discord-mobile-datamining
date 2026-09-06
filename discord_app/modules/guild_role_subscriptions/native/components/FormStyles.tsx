// === Module 13898: FormStyles ===

// Module 13898 (FormStyles)
import nativeDefault from "native" /* 576 */;
import Constants from "Constants" /* 1074 */;
import createStyles from "createStyles" /* 4560 */;
import TextStyles from "TextStyles" /* 5524 */;
import size from "module_2" /* 2 */;

const Fonts = Constants.Fonts;
let obj = { padding: 16, flexGrow: 0, borderRadius: 8, marginHorizontal: 16 };
obj = { header: { marginTop: 24, paddingStart: 16 }, textInput: null, disabledTextInput: null, dropdownInput: null };
obj = {};
const merged = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, 16));
const merged1 = Object.assign(obj);
obj.backgroundColor = nativeDefault.colors.BACKGROUND_BASE_LOWEST;
obj.textInput = obj;
obj.disabledTextInput = { padding: 16, width: "100%", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
const obj2 = {};
const merged2 = Object.assign(TextStyles(Fonts.PRIMARY_MEDIUM, nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, 16));
const merged3 = Object.assign(obj);
obj2.backgroundColor = nativeDefault.colors.BACKGROUND_SURFACE_HIGH;
obj.dropdownInput = obj2;
const styles = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormStyles.tsx");

export default styles;