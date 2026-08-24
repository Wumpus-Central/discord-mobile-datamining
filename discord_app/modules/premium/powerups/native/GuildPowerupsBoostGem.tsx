// === Module 11690: GuildPowerupsBoostGem ===

// Module 11690 (GuildPowerupsBoostGem)
import set from "set" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import ThemesDefault from "Themes" /* 712 */;
import BoostGemDefault from "BoostGem" /* 11691 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const View = get_ActivityIndicator.View;
const jsx = jsxProd.jsx;
let obj = { boostGemContainer: null };
obj = { width: 100, height: 100, borderRadius: ThemesDefault.radii.round, backgroundColor: ThemesDefault.colors.BACKGROUND_SECONDARY_ALT, alignItems: "center", justifyContent: "center", alignSelf: "center" };
obj[0] = obj;
let closure_4 = createCacheKey.createStyles(obj);
const result = set.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsBoostGem.tsx");

export default function GuildPowerupsBoostGem(arg0) {
  ({ style, gemWidth, gemHeight } = arg0);
  const obj = { style: null, children: null };
  const items = [callback().boostGemContainer, style];
  obj[0] = items;
  obj[1] = jsx(BoostGemDefault, { width: gemWidth, height: gemHeight });
  return <View style={null}>{null}</View>;
};