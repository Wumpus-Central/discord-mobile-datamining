// discord_app/modules/guild_tag/native/badges/GuildBadgeButterfly.tsx
import inlineStyles from "../../../../../_runtime/08453_inlineStyles.js";
import GuildBadgeUtils from "GuildBadgeUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsxProd = fn(21);
({ jsx: c2, jsxs: c3 } = jsxProd);
const primaryBaseColors = ["#0DA9FE", "#9AF2FF"];
const primaryTintLuminances = [0.45, 0.7];
let items = [
  { base: 3, tint: 1 },
  { base: 3, tint: 1 },
];
const secondaryBaseColors = ["#5C0084"];
const secondaryTintLuminances = [0.2];
const items1 = [{ base: 3, tint: 1 }];
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_tag/native/badges/GuildBadgeButterfly.tsx");

export const GuildBadgeButterfly = function GuildBadgeButterfly(width) {
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
    React2(inlineStyles.Path, { d: "M7 5h1v1h-1z", fill: "white" }),
    React2(inlineStyles.Path, {
      d: "M6 10h1v1h-1v1h-1v1H2v-1h1v-1H2v1H1v-2h1v-1h4v1ZM14 10h1v2h-1v-1h-1v1h1v1H11v-1h-1v-1h-1v-1h1v-1h4v1ZM6 8H2V5h1v-1h3v4ZM13 5h1v3H10V4h3v1Z",
      fill: primaryColorsTransformed[0],
    }),
    React2(inlineStyles.Path, {
      d: "M5 14H2v-1h3v1ZM14 13v1H11v-1h3ZM2 13H1v-1h1v1ZM6 13h-1v-1h1v1ZM11 13h-1v-1h1v1ZM15 13h-1v-1h1v1ZM3 12H2v-1h1v1ZM7 12h-1v-1h1v1ZM10 12h-1v-1h1v1ZM14 12h-1v-1h1v1ZM2 6H1v-1h1v1ZM15 6h-1v-1h1v1ZM5 4h-2v1H2v-2h3v1ZM14 5h-1v-1h-2v-1h3v2Z",
      fill: primaryColorsTransformed[1],
    }),
    ,
    ,
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
    d: "M4 15H2v-1h2v1ZM14 14v1h-2v-1h2ZM2 14H1v-1h1v1ZM15 14h-1v-1h1v1ZM7 10h-1v-1h1v1ZM10 10h-1v-1h1v1ZM6 9H3v-1h3v1ZM13 9H10v-1h3v1ZM3 2h1v1H2v2H1V1h2v1ZM15 5h-1v-2h-2V2h1V1h2v4Z",
    fill: first,
  });
  items[4] = React2(inlineStyles.Path, {
    d: "M4 16H2v-1h2v1ZM14 16h-2v-1h2v1ZM2 15H1v-1h1v1ZM5 15h-1v-1h1v1ZM12 15h-1v-1h1v1ZM15 15h-1v-1h1v1ZM1 14H0V10h1v4ZM6 14h-1v-1h1v1Z",
    fill: "black",
  });
  items[5] = React2(inlineStyles.Path, {
    d: "M9 4h1v5h-1v3h1v1h-1v1h-2v-1h-1v-1h1V9h-1V4h1v-1h2v1Zm-2 2h1v-1h-1v1Z",
    fill: "#000",
    fillRule: "evenodd",
  });
  items[6] = React2(inlineStyles.Path, {
    d: "M11 14h-1v-1h1v1ZM16 14h-1V10h1v4ZM2 10H1v-1h1v1ZM15 10h-1v-1h1v1ZM3 9H2v-1h1v1ZM14 9h-1v-1h1v1ZM1 6h1v2H1v-1H0V1h1v5ZM16 7h-1v1h-1v-2h1V1h1v6ZM6 4h-1v-1h1v1ZM11 4h-1v-1h1v1ZM5 3h-1V2h1v1ZM7 3h-1V1h1v2ZM10 3h-1V1h1v2ZM12 3h-1V2h1v1ZM4 2h-1V1h1v1ZM13 2h-1V1h1v1ZM3 1H1V0h2v1ZM6 1h-1V0h1v1ZM11 1h-1V0h1v1ZM15 1h-2V0h2v1Z",
    fill: "black",
  });
  obj.children = items;
  return React3(inlineStyles.Svg, obj);
};
