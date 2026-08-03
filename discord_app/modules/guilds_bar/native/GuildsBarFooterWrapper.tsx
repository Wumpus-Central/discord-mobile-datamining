import { GUILD_ITEM_HIT_SLOP } from "GUILD_ITEM_SIZE";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let obj = { footerWrapper: null };
obj = { display: "flex", alignSelf: "stretch", alignItems: "center", gap: require("Themes").modules.mobile.GUILD_BAR_ITEM_PADDING };
obj[0] = obj;
let closure_5 = createCacheKey.createStyles(obj);
const result = require("createCacheKey").fileFinishedImporting("modules/guilds_bar/native/GuildsBarFooterWrapper.tsx");

export default function GuildsBarFooterWrapper(children) {
  let obj = require(3897) /* map */;
  const token = obj.useToken(importDefault(712).modules.mobile.GUILD_BAR_ITEM_SIZE);
  const MobileHomeDrawerExperiment = require(4050) /* MobileHomeDrawerExperiment */.MobileHomeDrawerExperiment;
  const style = [callback().footerWrapper, ];
  let tmp5 = null;
  const tmp2 = callback();
  const tmp3 = jsx;
  if (!MobileHomeDrawerExperiment.useConfig({ location: "guilds_bar" }).enableHome) {
    obj = { width: null };
    obj[0] = token + GUILD_ITEM_HIT_SLOP.left + GUILD_ITEM_HIT_SLOP.right;
    tmp5 = obj;
  }
  style[1] = tmp5;
  return tmp3(importDefault(5572), { style, children: children.children });
};