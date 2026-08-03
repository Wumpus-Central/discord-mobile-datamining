import "noop";
import jsxProd from "jsxProd";

let c3;
let obj1;
const require = arg1;
({ jsx: obj1, jsxs: c3 } = jsxProd);
let closure_4 = ["#57595f", "#847d8b", "#d1cdd5"];
let closure_5 = [0, 0.12, 0.6];
let items = [{ base: 10, tint: 1 }, { base: 5, tint: 1 }, { base: 2, tint: 1 }];
const result = require("getTransformedBadgeColors").fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeSkull.tsx");

export const GuildBadgeSkull = function GuildBadgeSkull(primaryTintColor) {
  let num = primaryTintColor.width;
  if (num === undefined) {
    num = 24;
  }
  let num2 = primaryTintColor.height;
  if (num2 === undefined) {
    num2 = 24;
  }
  const merged = Object.assign(primaryTintColor, Object.create(null));
  let obj = require(13138) /* getTransformedBadgeColors */;
  obj = { primaryBaseColors: closure_4, primaryTintColor: primaryTintColor.primaryTintColor, primaryTintLuminances: closure_5, primaryLuminanceWeights: items };
  const primaryColorsTransformed = obj.getTransformedBadgeColors(obj).primaryColorsTransformed;
  obj = {};
  const merged1 = Object.assign(merged);
  obj.width = num;
  obj.height = num2;
  obj.viewBox = "0 0 16 16";
  obj.fill = "none";
  items = [callback(require(8196) /* inlineStyles */.Path, { d: "M14 4V3h-1V2h-1V1H4v1H3v1H2v1H1v6h1v1h1v1h1v2h1v1h6v-1h1v-2h1v-1h1v-1h1V4h-1Z", fill: primaryColorsTransformed[2] }), callback(require(8196) /* inlineStyles */.Path, { d: "M4 1H3v1h1V1ZM3 2H2v1h1V2ZM2 3H1v1h1V3ZM4 12H3v2h1v-2ZM3 11H2v1h1v-1ZM5 14H4v1h1v-1ZM2 10H1v1h1v-1Z", fill: "#000" }), callback(require(8196) /* inlineStyles */.Path, { d: "M4 11H3v1h1v-1ZM5 13H4v1h1v-1ZM3 10H2v1h1v-1ZM7 7H4v3h3V7Z", fill: primaryColorsTransformed[1] }), callback(require(8196) /* inlineStyles */.Path, { d: "M7 8H5v2h2V8Z", fill: primaryColorsTransformed[0] }), callback(require(8196) /* inlineStyles */.Path, { d: "M12 7H9v3h3V7Z", fill: primaryColorsTransformed[1] }), callback(require(8196) /* inlineStyles */.Path, { d: "M12 8h-2v2h2V8Z", fill: primaryColorsTransformed[0] }), callback(require(8196) /* inlineStyles */.Path, { d: "M12 12.01h1v-1h-1v1ZM11 14.01h1v-1h-1v1ZM13 11.01h1v-1h-1v1Z", fill: primaryColorsTransformed[1] }), callback(require(8196) /* inlineStyles */.Path, { d: "M1 4H0v6h1V4Z", fill: "#000" }), callback(require(8196) /* inlineStyles */.Path, { d: "M2 4H1v6h1V4Z", fill: "#fff" }), callback(require(8196) /* inlineStyles */.Path, { d: "M12 2.01h1v-1h-1v1ZM13 3.01h1v-1h-1v1ZM14 4.01h1v-1h-1v1ZM12 14.01h1v-2h-1v2ZM13 12.01h1v-1h-1v1ZM11 15.01h1v-1h-1v1ZM14 11.01h1v-1h-1v1ZM15 10.01h1v-6h-1v6Z", fill: "#000" }), callback(require(8196) /* inlineStyles */.Path, { d: "M14 10.01h1v-6h-1v6Z", fill: primaryColorsTransformed[1] }), callback(require(8196) /* inlineStyles */.Path, { d: "M4 0v1h8V0H4Z", fill: "#000" }), callback(require(8196) /* inlineStyles */.Path, { d: "M4 2H3v1h1V2ZM3 3H2v1h1V3ZM4 4H3v1h1V4ZM12 3.01h1v-1h-1v1ZM13 4.01h1v-1h-1v1ZM4 1v1h8V1H4Z", fill: "#fff" }), callback(require(8196) /* inlineStyles */.Path, { d: "M5 15v1h6v-1H5Z", fill: "#000" }), callback(require(8196) /* inlineStyles */.Path, { d: "M5 14v1h6v-1H5Z", fill: primaryColorsTransformed[1] }), callback(require(8196) /* inlineStyles */.Path, { d: "M7 13H6v2h1v-2ZM10 13H9v2h1v-2Z", fill: primaryColorsTransformed[0] })];
  obj.children = items;
  return callback2(require(8196) /* inlineStyles */.Svg, obj);
};