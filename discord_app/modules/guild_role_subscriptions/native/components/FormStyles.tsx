// discord_app/modules/guild_role_subscriptions/native/components/FormStyles.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import TextStyles from "../../../rebrand/native/TextStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

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
