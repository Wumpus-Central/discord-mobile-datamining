// discord_app/modules/guild_tag/native/badges/GuildBadgeSpider.tsx
import "noop";
import jsxProd from "jsxProd";
import { inlineStyles } from "../../../../../_runtime/06571_inlineStyles.js";
import { getTransformedBadgeColors } from "GuildBadgeUtils.tsx";

let c3;
let obj1;
const require = arg1;
({ jsx: obj1, jsxs: c3 } = jsxProd);
let closure_4 = ["#950123", "#DA1846"];
let closure_5 = [0.2, 0.45];
let items = [{ base: 5, tint: 1 }, { base: 3, tint: 1 }];
let closure_7 = ["#1F1F1F"];
let closure_8 = [0.15];
const items1 = [{ base: 5, tint: 1 }];
const result = require("getTransformedBadgeColors").fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeSpider.tsx");

export const GuildBadgeSpider = function GuildBadgeSpider(width) {
  let primaryColorsTransformed;
  let primaryTintColor;
  let secondaryColorsTransformed;
  let secondaryTintColor;
  let num = width.width;
  if (num === undefined) {
    num = 24;
  }
  let num2 = width.height;
  if (num2 === undefined) {
    num2 = 24;
  }
  ({ primaryTintColor, secondaryTintColor } = width);
  const merged = Object.assign(width, Object.create(null));
  let obj = getTransformedBadgeColors;
  obj = { primaryBaseColors: closure_4, primaryTintColor, primaryTintLuminances: closure_5, primaryLuminanceWeights: items, secondaryBaseColors: closure_7, secondaryTintColor, secondaryTintLuminances: closure_8, secondaryLuminanceWeights: items1 };
  const transformedBadgeColors = obj.getTransformedBadgeColors(obj);
  ({ primaryColorsTransformed, secondaryColorsTransformed } = transformedBadgeColors);
  obj = {};
  const merged1 = Object.assign(merged);
  obj.width = num;
  obj.height = num2;
  obj.viewBox = "0 0 16 16";
  obj.fill = "none";
  items = [callback(inlineStyles.Path, { d: "M7 11h-1v-1h1v1ZM10 11h-1v-1h1v1ZM9 10h-2v-1h2v1ZM10 5h-1v1h-2v-1h-1v-2h4v2Z", fill: primaryColorsTransformed[1] }), , , , , ];
  let str;
  if (secondaryColorsTransformed != null) {
    str = secondaryColorsTransformed[0];
  }
  if (str == null) {
    str = "#1F1F1F";
  }
  items[1] = callback(inlineStyles.Path, { d: "M9 12h-2v-2h2v2ZM6 6h1v1h2v-1h1v-1h1v3h-1v1h-1v-1h-2v1h-1v-1h-1V5h1v1Z", fill: str });
  items[2] = callback(inlineStyles.Path, { d: "M9 13v1h-2v-1h2ZM7 12h-1v-1h1v1ZM10 12h-1v-1h1v1ZM9 7h-2v-1h2v1ZM7 6h-1v-1h1v1ZM10 6h-1v-1h1v1ZM6 5h-1v-1h1v1ZM11 5h-1v-1h1v1Z", fill: primaryColorsTransformed[0] });
  items[3] = callback(inlineStyles.Path, { d: "M7 14h-1v-1h1v1ZM10 14h-1v-1h1v1Z", fill: "#35ED7E" });
  items[4] = callback(inlineStyles.Path, { d: "M3 7h1V4h1v4h1v1h1v1h-1v2h4v-2h-1v-1h1v-1h1V4h1v3h1V3h1v1h1v3h-1v1h-1v1h-1v1h-1v1h1v-1h2v-1h2v1h-1v1h-1v1h-2v1h2v1h1v1h1v1h-2v-1h-2v-1h-2v-1H6v1h-2v1H2v1H0v-1h1v-1h1v-1h2v-1H2v-1H1v-1H0v-1h2v1h2v-1h-1v-1H2v-1H1V4h1v-1h1v4Zm1 4h1v-1h-1v1Z", fill: "black", fillRule: "evenodd" });
  items[5] = callback(inlineStyles.Path, { d: "M10 16h-1v-1h-2v1h-1v-2h4v2ZM9 9h-2v-1h2v1ZM6 4h-1v-1h1v1ZM11 4h-1v-1h1v1ZM4 3h-1V2h1v1ZM9 2h1v1H6V2h2V0h1v2ZM13 3h-1V2h1v1Z", fill: "black" });
  obj.children = items;
  return closure_3(inlineStyles.Svg, obj);
};