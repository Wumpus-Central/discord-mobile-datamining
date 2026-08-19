// === Module 16190: styles ===

// Module 16190 (styles)
import obj132 from "obj132" /* 2 */;
import ThemesDefault from "Themes" /* 712 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const obj = { color: ThemesDefault.colors.BACKGROUND_MOD_STRONG };
obj[0] = obj;
obj[1] = { color: ThemesDefault.colors.BACKGROUND_BRAND };
obj[2] = { color: ThemesDefault.colors.BORDER_SUBTLE };
const styles = createCacheKey.createStyles(obj);
const result = obj132.fileFinishedImporting("modules/launchpad/native/shared/useSimpleGuildDefaultColors.tsx");

export default styles;