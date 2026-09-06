// discord_app/modules/launchpad/native/shared/useSimpleGuildDefaultColors.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let obj = { iconBackground: null, iconBackgroundBrand: null, iconStroke: null };
obj = { color: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj.iconBackground = obj;
obj.iconBackgroundBrand = { color: nativeDefault.colors.BACKGROUND_BRAND };
const obj1 = { color: nativeDefault.colors.BACKGROUND_BRAND };
obj.iconStroke = { color: nativeDefault.colors.BORDER_SUBTLE };
const styles = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/launchpad/native/shared/useSimpleGuildDefaultColors.tsx");

export default styles;
