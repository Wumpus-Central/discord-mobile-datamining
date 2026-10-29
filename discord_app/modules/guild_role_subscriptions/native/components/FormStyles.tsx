// discord_app/modules/guild_role_subscriptions/native/components/FormStyles.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import TextStyles from "../../../rebrand/native/TextStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const obj = {
  header: { marginTop: 24, paddingStart: 16 },
  inputContainer: { marginHorizontal: nativeDefault.space.PX_16 },
  dropdownInput: null,
};
const obj3 = {};
const merged = Object.assign(
  TextStyles(Constants.Fonts.PRIMARY_MEDIUM, nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, 16),
);
obj3.padding = 16;
obj3.flexGrow = 0;
obj3.borderRadius = 8;
obj3.marginHorizontal = 16;
obj3.backgroundColor = nativeDefault.colors.BACKGROUND_SURFACE_HIGH;
obj.dropdownInput = obj3;
const styles = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormStyles.tsx");

export default styles;
