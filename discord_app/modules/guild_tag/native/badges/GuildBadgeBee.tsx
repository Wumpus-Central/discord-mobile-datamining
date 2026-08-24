// discord_app/modules/guild_tag/native/badges/GuildBadgeBee.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import inlineStyles from "../../../../../_runtime/06607_inlineStyles.js";
import getTransformedBadgeColors from "GuildBadgeUtils.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
noopAll;
({ jsx: obj1, jsxs: c3 } = jsxProd);
let closure_4 = ["#E79418", "#FAE330"];
let closure_5 = [0.5, 0.75];
let items = [{ base: 5, tint: 1 }, { base: 3, tint: 1 }];
const result = require("set").fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeBee.tsx");

export const GuildBadgeBee = function GuildBadgeBee(primaryTintColor) {
  let num = primaryTintColor.width;
  if (num === undefined) {
    num = 24;
  }
  let num2 = primaryTintColor.height;
  if (num2 === undefined) {
    num2 = 24;
  }
  const merged = Object.assign(primaryTintColor, Object.create(null));
  let obj = getTransformedBadgeColors;
  obj = { primaryBaseColors: closure_4, primaryTintColor: primaryTintColor.primaryTintColor, primaryTintLuminances: closure_5, primaryLuminanceWeights: items };
  const primaryColorsTransformed = obj.getTransformedBadgeColors(obj).primaryColorsTransformed;
  obj = {};
  const merged1 = Object.assign(merged);
  obj.width = num;
  obj.height = num2;
  obj.viewBox = "0 0 16 16";
  obj.fill = "none";
  items = [callback(inlineStyles.Path, { d: "M8 5v1H5v-1h3ZM5 5h-1v-1h1v1ZM11 5h-1v-1h1v1ZM4 4h-1V2h1v2ZM10 4h-1v-1h1v1ZM9 3h-1V2h1v1ZM8 2h-1V1h1v1Z", fill: "#B7DBF6" }), callback(inlineStyles.Path, { d: "M9 6h-1v-1H5v-1h-1V1h2v1h1v1h1v1h1v2ZM13 7h1v1h-1z", fill: "white" }), callback(inlineStyles.Path, { d: "M13 8h1v1h-2v-2h1v1Z", fill: "#B7DBF6" }), callback(inlineStyles.Path, { d: "M4 11h-1v-1h1v1ZM6 11h-1v-1h1v1ZM10 11h-1v-1h-1V7h1v-1h1v5ZM7 10h-1v-1h1v1ZM4 9h-1v-1h1v1ZM7 8h-1v1h-1v-2h2v1ZM4 7h-1v-1h1v1Z", fill: primaryColorsTransformed[1] }), callback(inlineStyles.Path, { d: "M7 13h-2v-2h1v-1h1v3ZM9 11h2v1h-1v1h-2V10h1v1ZM4 12h-1v-1h1v1ZM4 8h-1v1h1v1h-1v1H2V7h2v1ZM6 10h-1v-1h1v1ZM7 9h-1v-1h1v1Z", fill: primaryColorsTransformed[0] }), callback(inlineStyles.Path, { d: "M5 16h-1v-1h1v1ZM8 16h-1v-1h1v1Z", fill: "black" }), callback(inlineStyles.Path, { d: "M12 5h1v-2h1v2h1v1h1v5h-1v1H12v2h-1v-1h-1v1h-1v1h-1v-1h-2v1h-1v-1h-1v-1h-1v-1h1V6h-1v-2h1v1h1v1h4v-2h1v1h1v-1h-1v-1h1V2h1v3ZM5 13h2V7h-2v6Zm4-6h-1v6h2v-1h1v-1h-1V6h-1v1Zm3 2h2v-2h-2v2Z", fill: "black", fillRule: "evenodd" }), callback(inlineStyles.Path, { d: "M11 15h-1v-1h1v1ZM3 12H2v-1h1v1ZM2 11H1v-2H0v-1h1v-1h1v4ZM3 7H2v-1h1v1ZM3 4H2V2h1v2ZM9 4h-1v-1h1v1ZM8 3h-1V2h1v1ZM10 3h-1V2h1v1ZM15 3h-1V2h1v1ZM4 2h-1V1h1v1ZM7 2h-1V1h1v1ZM9 2h-1V1h1v1ZM13 2h-1V1h1v1ZM6 1h-2V0h2v1ZM8 1h-1V0h1v1Z", fill: "black" })];
  obj.children = items;
  return callback2(inlineStyles.Svg, obj);
};