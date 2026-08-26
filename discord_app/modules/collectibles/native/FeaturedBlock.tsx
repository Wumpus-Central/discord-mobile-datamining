// === Module 15142: Subblocks ===

// Module 15142 (Subblocks)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import context from "context" /* 5900 */;
import contextDefault from "context" /* 5900 */;
import QUICK_SWITCHERDefault from "QUICK_SWITCHER" /* 5920 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4444 */;

require = arg1;
function Subblocks(style) {
  style = style.style;
  const subblocks = style.featuredBlock.subblocks;
  return subblocks.map((subblock, tilePosition) => {
    obj = { newValue: obj, children: null };
    obj = { tilePosition };
    obj = { style, children: closure_1_4(closure_1_1(closure_1_2[6]), obj1) };
    obj[1] = closure_1_4(closure_1_3, obj);
    return closure_1_4(style(closure_1_2[5]).CollectiblesAnalyticsProvider, obj, tilePosition);
  });
}
noopAll;
let closure_5 = createCacheKey.createStyles({ container: { display: "flex", width: "100%", flexDirection: "row", flexWrap: "wrap", gap: ThemesDefault.space.PX_12, paddingHorizontal: ThemesDefault.space.PX_16 }, featuredSubblock: { flex: 1, flexBasis: 400, maxWidth: "100%" } });
const result = require("set").fileFinishedImporting("modules/collectibles/native/FeaturedBlock.tsx");

export default function FeaturedBlock(featuredBlock) {
  const tmp = callback();
  let obj = { value: contextDefault(QUICK_SWITCHERDefault.COLLECTIBLES_SHOP_FEATURED_BLOCK).analyticsLocations, children: null };
  obj = { style: tmp.container, children: <Subblocks value={contextDefault(QUICK_SWITCHERDefault.COLLECTIBLES_SHOP_FEATURED_BLOCK).analyticsLocations}>{null}</Subblocks> };
  obj = { featuredBlock: featuredBlock.featuredBlock, style: tmp.featuredSubblock };
  obj[1] = <View featuredBlock={arg0.featuredBlock} style={tmp.featuredSubblock} />;
  return jsx(context.AnalyticsLocationProvider, { featuredBlock: featuredBlock.featuredBlock, style: tmp.featuredSubblock });
};