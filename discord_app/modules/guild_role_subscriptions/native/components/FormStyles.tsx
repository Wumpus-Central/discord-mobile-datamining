// === Module 13860: styles ===

// Module 13860 (styles)
import set from "set" /* 2 */;
import ME from "ME" /* 673 */;
import ThemesDefault from "Themes" /* 709 */;
import createCacheKey from "createCacheKey" /* 4478 */;
import importDefaultResult from "createTextStyle" /* 5469 */;

const Fonts = ME.Fonts;
let obj = { padding: 16, flexGrow: 0, borderRadius: 8, marginHorizontal: 16 };
obj = { header: { marginTop: 24, paddingStart: 16 }, textInput: null, disabledTextInput: null, dropdownInput: null };
obj = {};
const merged = Object.assign(importDefaultResult(Fonts.PRIMARY_MEDIUM, ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE, 16));
const merged1 = Object.assign(obj);
obj.backgroundColor = ThemesDefault.colors.BACKGROUND_BASE_LOWEST;
obj[1] = obj;
obj[2] = { padding: 16, width: "100%", backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
const obj2 = {};
const obj1 = { padding: 16, width: "100%", backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
const merged2 = Object.assign(importDefaultResult(Fonts.PRIMARY_MEDIUM, ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE, 16));
const merged3 = Object.assign(obj);
obj2.backgroundColor = ThemesDefault.colors.BACKGROUND_SURFACE_HIGH;
obj[3] = obj2;
const styles = createCacheKey.createStyles(obj);
const importDefaultResult1 = importDefaultResult;
const result = set.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormStyles.tsx");

export default styles;