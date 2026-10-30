// === Module 15680: FormStyles ===

// Module 15680 (FormStyles)
import nativeDefault from "native" /* 575 */;
import Constants from "Constants" /* 1072 */;
import createStyles from "createStyles" /* 5009 */;
import TextStyles from "TextStyles" /* 6717 */;
import size from "module_2" /* 2 */;

const obj = { header: { marginTop: 24, paddingStart: 16 }, inputContainer: { marginHorizontal: nativeDefault.space.PX_16 }, dropdownInput: null };
const obj3 = {};
const merged = Object.assign(TextStyles(Constants.Fonts.PRIMARY_MEDIUM, nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, 16));
obj3.padding = 16;
obj3.flexGrow = 0;
obj3.borderRadius = 8;
obj3.marginHorizontal = 16;
obj3.backgroundColor = nativeDefault.colors.BACKGROUND_SURFACE_HIGH;
obj.dropdownInput = obj3;
const styles = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormStyles.tsx");

export default styles;