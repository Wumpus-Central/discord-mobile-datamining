// === Module 16464: styles ===

// Module 16464 (styles)
import set from "set" /* 2 */;
import ThemesDefault from "Themes" /* 712 */;
import createCacheKey from "createCacheKey" /* 4445 */;

let obj = { iconBackground: null, iconBackgroundBrand: null, iconStroke: null };
obj = { color: ThemesDefault.colors.BACKGROUND_MOD_STRONG };
obj[0] = obj;
obj[1] = { color: ThemesDefault.colors.BACKGROUND_BRAND };
const obj1 = { color: ThemesDefault.colors.BACKGROUND_BRAND };
obj[2] = { color: ThemesDefault.colors.BORDER_SUBTLE };
const styles = createCacheKey.createStyles(obj);
const obj2 = { color: ThemesDefault.colors.BORDER_SUBTLE };
const result = set.fileFinishedImporting("modules/launchpad/native/shared/useSimpleGuildDefaultColors.tsx");

export default styles;