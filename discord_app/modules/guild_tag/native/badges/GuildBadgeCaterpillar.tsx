// discord_app/modules/guild_tag/native/badges/GuildBadgeCaterpillar.tsx
import inlineStyles from "../../../../../_runtime/08453_inlineStyles.js";
import GuildBadgeUtils from "GuildBadgeUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: c2, jsxs: c3 } = jsxProd);
const primaryBaseColors = ["#05562C", "#1DAA5A"];
const primaryTintLuminances = [0.25, 0.45];
let items = [
  { base: 5, tint: 1 },
  { base: 3, tint: 1 },
];
const secondaryBaseColors = ["#E6CF1E"];
const secondaryTintLuminances = [0.7];
const items1 = [{ base: 3, tint: 1 }];
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeCaterpillar.tsx");

export const GuildBadgeCaterpillar = function GuildBadgeCaterpillar(width) {
  let num = width.width;
  if (num === undefined) {
    num = 24;
  }
  let num2 = width.height;
  if (num2 === undefined) {
    num2 = 24;
  }
  ({ primaryTintColor, secondaryTintColor } = width);
  const merged = Object.assign(
    width,
    Object.assign({ width: 0, height: 0, primaryTintColor: 0, secondaryTintColor: 0 }),
  );
  let obj = {
    primaryBaseColors,
    primaryTintColor,
    primaryTintLuminances,
    primaryLuminanceWeights: items,
    secondaryBaseColors,
    secondaryTintColor,
    secondaryTintLuminances,
    secondaryLuminanceWeights: items1,
  };
  const transformedBadgeColors = obj.getTransformedBadgeColors(obj);
  ({ primaryColorsTransformed, secondaryColorsTransformed } = transformedBadgeColors);
  obj = {};
  const merged1 = Object.assign(merged);
  obj.width = num;
  obj.height = num2;
  obj.viewBox = "0 0 16 16";
  obj.fill = "none";
  items = [
    React2(inlineStyles.Path, {
      d: "M3 14H2v-1h1v1ZM2 13H1v-1h1v1ZM5 13h-2v-1H2v-1h3v2ZM12 10h2v1h-1v2h-2v-1h-1v-2h1v-1h1v1ZM15 12h-1v-1h1v1ZM7 5h-1v-1h-1v3h2v1h-1v2h-1v-1h-1V3h1V2h1V1h1v4ZM11 5h1v1h-1v1h-1V4h1v1ZM10 4h-1v-1h1v1Z",
      fill: primaryColorsTransformed[1],
    }),
    React2(inlineStyles.Path, {
      d: "M15 11h-1v-1h1v1ZM14 10h-2v-1h2v1ZM12 5h-1v-1h1v1ZM11 4h-1v-1h1v1ZM10 3h-1V2h1v1ZM9 2h-2V1h2v1Z",
      fill: "white",
    }),
    React2(inlineStyles.Path, {
      d: "M4 14h-1v-1h1v1ZM3 13H2v-1h1v1ZM5 10h1v2h-1v-1h-1v-2h1v1ZM12 9h-1v1h-1V7h1v-1h1v3ZM6 5h1v2h-2V4h1v1ZM9 4h-2V2h2v2Z",
      fill: primaryColorsTransformed[0],
    }),
    ,
  ];
  let first;
  if (secondaryColorsTransformed != null) {
    first = secondaryColorsTransformed[0];
  }
  if (first == null) {
    first = secondaryBaseColors[0];
  }
  items[3] = React2(inlineStyles.Path, {
    d: "M10 12h1v1h3v-1h1v2h-1v1H11v-1h-1v-1h-1V5h-1v5h-1v3h-1v1h-1v1H2v-1h2v-1h1v-1h1V8h1V4h3v8ZM2 14H1v-1h1v1Z",
    fill: first,
  });
  items[4] = React2(inlineStyles.Path, {
    d: "M5 16H2v-1h3v1ZM14 15v1H11v-1h3ZM2 15H1v-1h1v1ZM6 15h-1v-1h1v1ZM11 15h-1v-1h1v1ZM15 15h-1v-1h1v1ZM1 14H0v-2h1v2ZM7 14h-1v-1h1v1ZM10 14h-1v-1h1v1ZM16 14h-1V10h1v4ZM9 13h-2V10h1V5h1v8ZM14 13h-1v-2h1v2ZM2 12H1v-1h1v1ZM4 11H2v-1h1V3h1v8ZM15 10h-1v-1h1v1ZM13 8h1v1h-2V4h1v4ZM16 9h-1v-2h1v2ZM15 7h-1v-1h1v1ZM12 4h-1v-1h1v1ZM5 3h-1V2h1v1ZM11 3h-1V2h1v1ZM6 2h-1V1h1v1ZM10 2h-1V1h1v1ZM9 1H6V0h3v1Z",
    fill: "black",
  });
  obj.children = items;
  return React3(inlineStyles.Svg, obj);
};
