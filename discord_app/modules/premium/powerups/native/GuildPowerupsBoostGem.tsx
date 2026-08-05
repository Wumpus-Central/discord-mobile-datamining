import { BoostGem } from "images/BoostGem.tsx";
// discord_app/modules/premium/powerups/native/GuildPowerupsBoostGem.tsx
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

let obj = { boostGemContainer: null };
obj = { width: 100, height: 100, borderRadius: require("Themes").radii.round, backgroundColor: require("Themes").colors.BACKGROUND_SECONDARY_ALT, alignItems: "center", justifyContent: "center", alignSelf: "center" };
obj[0] = obj;
let closure_4 = createCacheKey.createStyles(obj);
const result = require("createCacheKey").fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsBoostGem.tsx");

export default function GuildPowerupsBoostGem(arg0) {
  let gemHeight;
  let gemWidth;
  let style;
  ({ style, gemWidth, gemHeight } = arg0);
  const obj = { style: null, children: null };
  const items = [callback().boostGemContainer, style];
  obj[0] = items;
  obj[1] = jsx(BoostGem, { width: gemWidth, height: gemHeight });
  return <View style={null}>{null}</View>;
};