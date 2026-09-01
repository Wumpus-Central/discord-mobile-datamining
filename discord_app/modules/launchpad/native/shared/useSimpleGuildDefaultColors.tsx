// discord_app/modules/launchpad/native/shared/useSimpleGuildDefaultColors.tsx
import set from "../../../../../_runtime/00002_set.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

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
