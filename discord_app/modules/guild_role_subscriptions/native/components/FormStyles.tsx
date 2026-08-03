// === Module 13119: styles ===

// Module 13119 (styles)
import { Fonts } from "ME";
import createCacheKey from "createCacheKey";
import importDefaultResult from "createTextStyle";
import importDefaultResult1 from "createTextStyle";

let obj = { padding: 16, flexGrow: 0, borderRadius: 8, marginHorizontal: 16 };
obj = { header: { marginTop: 24, paddingStart: 16 }, textInput: null, disabledTextInput: null, dropdownInput: null };
obj = {};
const merged = Object.assign(require("createTextStyle")(Fonts.PRIMARY_MEDIUM, require("Themes").colors.INTERACTIVE_TEXT_ACTIVE, 16));
const merged1 = Object.assign(obj);
obj.backgroundColor = require("Themes").colors.BACKGROUND_BASE_LOWEST;
obj[1] = obj;
obj[2] = { padding: 16, width: "100%", backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
const obj2 = {};
const obj1 = { padding: 16, width: "100%", backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH };
const merged2 = Object.assign(require("createTextStyle")(Fonts.PRIMARY_MEDIUM, require("Themes").colors.INTERACTIVE_TEXT_ACTIVE, 16));
const merged3 = Object.assign(obj);
obj2.backgroundColor = require("Themes").colors.BACKGROUND_SURFACE_HIGH;
obj[3] = obj2;
const styles = createCacheKey.createStyles(obj);
const result = require("createTextStyle").fileFinishedImporting("modules/guild_role_subscriptions/native/components/FormStyles.tsx");

export default styles;