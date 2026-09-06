// === Module 16971: useSimpleGuildDefaultColors ===

// Module 16971 (useSimpleGuildDefaultColors)
import nativeDefault from "native" /* 576 */;
import createStyles from "createStyles" /* 4560 */;
import size from "module_2" /* 2 */;

let obj = { iconBackground: null, iconBackgroundBrand: null, iconStroke: null };
obj = { color: nativeDefault.colors.BACKGROUND_MOD_STRONG };
obj.iconBackground = obj;
obj.iconBackgroundBrand = { color: nativeDefault.colors.BACKGROUND_BRAND };
const obj1 = { color: nativeDefault.colors.BACKGROUND_BRAND };
obj.iconStroke = { color: nativeDefault.colors.BORDER_SUBTLE };
const styles = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/launchpad/native/shared/useSimpleGuildDefaultColors.tsx");

export default styles;