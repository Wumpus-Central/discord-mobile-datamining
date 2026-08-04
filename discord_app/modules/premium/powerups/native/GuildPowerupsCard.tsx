// discord_app/modules/premium/powerups/native/GuildPowerupsCard.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import importDefaultResult from "n";
import importDefaultResult1 from "n";
import importDefaultResult2 from "n";

const require = arg1;
createCacheKey = { cardActive: null, cardExpiring: null, cardRemoving: null };
createCacheKey = { borderColor: null };
const importDefaultResultResult = require("n")(require("Themes").unsafe_rawColors.GREEN_360);
createCacheKey[0] = require("n")(require("Themes").unsafe_rawColors.GREEN_360).alpha(0.35).hex();
createCacheKey[0] = createCacheKey;
const obj1 = { borderColor: null };
const alphaResult = require("n")(require("Themes").unsafe_rawColors.GREEN_360).alpha(0.35);
const importDefaultResult1Result = require("n")(require("Themes").unsafe_rawColors.YELLOW_300);
obj1[0] = require("n")(require("Themes").unsafe_rawColors.YELLOW_300).alpha(0.35).hex();
createCacheKey[1] = obj1;
const obj2 = { borderColor: null };
const alphaResult1 = require("n")(require("Themes").unsafe_rawColors.YELLOW_300).alpha(0.35);
const importDefaultResult2Result = require("n")(require("Themes").unsafe_rawColors.YELLOW_300);
obj2[0] = require("n")(require("Themes").unsafe_rawColors.YELLOW_300).alpha(0.35).hex();
createCacheKey[2] = obj2;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const alphaResult2 = require("n")(require("Themes").unsafe_rawColors.YELLOW_300).alpha(0.35);
const result = require("jsxProd").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsCard.tsx");

export default function GuildPowerupsCard(status) {
  let children;
  let containerStyle;
  let style;
  status = status.status;
  ({ children, containerStyle, style } = status);
  const merged = Object.assign(status, Object.create(null));
  const tmp2 = createCacheKey();
  let obj = { style: containerStyle, children: null };
  obj = { border: "faint", radius: 16, shadow: "none" };
  const merged1 = Object.assign(merged);
  let type;
  if (status != null) {
    type = status.type;
  }
  const items = ["active" === type && tmp2.cardActive, , , ];
  let type1;
  if (status != null) {
    type1 = status.type;
  }
  items[1] = "expiring" === type1 && tmp2.cardExpiring;
  let type2;
  if (status != null) {
    type2 = status.type;
  }
  items[2] = "removing" === type2 && tmp2.cardRemoving;
  items[3] = style;
  obj.style = items;
  obj.children = children;
  obj[1] = jsx(require(5226) /* PressableCard */.Card, { border: "faint", radius: 16, shadow: "none" });
  return <View border="faint" radius={16} shadow="none" />;
};