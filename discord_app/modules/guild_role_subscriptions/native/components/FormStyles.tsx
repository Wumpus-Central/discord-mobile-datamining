// discord_app/modules/guild_role_subscriptions/native/components/FormStyles.tsx
import obj132 from "../../../../../_runtime/00002_obj132.js";
import ME from "../../../../Constants.tsx";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import importDefaultResult from "../../../rebrand/native/TextStyles.tsx";

const Fonts = ME.Fonts;
const obj = {};
const merged = Object.assign(importDefaultResult(Fonts.PRIMARY_MEDIUM, ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE, 16));
const merged1 = Object.assign(obj);
obj.backgroundColor = ThemesDefault.colors.BACKGROUND_BASE_LOWEST;
obj[1] = obj;
obj[2] = { padding: 16, width: "100%", backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH };
const obj2 = {};
const merged2 = Object.assign(importDefaultResult(Fonts.PRIMARY_MEDIUM, ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE, 16));
const merged3 = Object.assign(obj);
obj2.backgroundColor = ThemesDefault.colors.BACKGROUND_SURFACE_HIGH;
obj[3] = obj2;
const styles = createCacheKey.createStyles(obj);
const importDefaultResult1 = importDefaultResult;
const result = obj132.fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormStyles.tsx");

export default styles;