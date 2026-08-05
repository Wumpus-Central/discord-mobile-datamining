// discord_app/modules/collectibles/native/FeaturedBlock.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
function Subblocks(style) {
  style = style.style;
  const subblocks = style.featuredBlock.subblocks;
  return subblocks.map((subblock, tilePosition) => {
    obj = { newValue: obj, children: null };
    obj = { tilePosition };
    obj = { style, children: null };
    obj[1] = outer1_4(outer1_1(outer1_2[6]), { subblock });
    obj[1] = outer1_4(outer1_3, obj);
    return outer1_4(style(outer1_2[5]).CollectiblesAnalyticsProvider, obj, tilePosition);
  });
}
let closure_5 = createCacheKey.createStyles({ container: { display: "flex", width: "100%", flexDirection: "row", flexWrap: "wrap", gap: require("Themes").space.PX_12, paddingHorizontal: require("Themes").space.PX_16 }, featuredSubblock: { flex: 1, flexBasis: 400, maxWidth: "100%" } });
const result = require("jsxProd").fileFinishedImporting("modules/collectibles/native/FeaturedBlock.tsx");

export default function FeaturedBlock(featuredBlock) {
  const tmp = callback();
  let obj = { value: importDefault(5610)(importDefault(5630).COLLECTIBLES_SHOP_FEATURED_BLOCK).analyticsLocations, children: null };
  obj = { style: tmp.container, children: null };
  obj = { featuredBlock: featuredBlock.featuredBlock, style: tmp.featuredSubblock };
  obj[1] = <Subblocks featuredBlock={arg0.featuredBlock} style={tmp.featuredSubblock} />;
  obj[1] = <View featuredBlock={arg0.featuredBlock} style={tmp.featuredSubblock} />;
  return jsx(require(5610) /* context */.AnalyticsLocationProvider, { featuredBlock: featuredBlock.featuredBlock, style: tmp.featuredSubblock });
};