// === Module 16163: FeaturedBlock ===

// Module 16163 (FeaturedBlock)
import nativeDefault from "native" /* 576 */;
import useAnalyticsLocations from "useAnalyticsLocations" /* 7409 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 7429 */;
import CollectiblesAnalyticsContext from "CollectiblesAnalyticsContext" /* 9052 */;
import FeaturedCategorySubblockDefault from "FeaturedCategorySubblock" /* 16164 */;
import noop from "module_19" /* 19 */;

const useAnalyticsLocationsDefault = useAnalyticsLocations;

require = fn;
function Subblocks(style) {
  style = style.style;
  const subblocks = style.featuredBlock.subblocks;
  return subblocks.map((subblock, tilePosition) => {
    const obj = { newValue: { tilePosition }, children: null };
    const obj2 = { style, children: jsx(FeaturedCategorySubblockDefault, { subblock }) };
    obj.children = <View style={style}>{jsx(FeaturedCategorySubblockDefault, { subblock })}</View>;
    return jsx(CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider, { newValue: { tilePosition }, children: null }, tilePosition);
  });
}
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4757);
let closure_5 = createStyles.createStyles({ container: { display: "flex", width: "100%", flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 }, featuredSubblock: { flex: 1, flexBasis: 400, maxWidth: "100%" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/FeaturedBlock.tsx");

export default function FeaturedBlock(featuredBlock) {
  const tmp = closure_5();
  const obj = { value: useAnalyticsLocationsDefault(AnalyticsLocationDefault.COLLECTIBLES_SHOP_FEATURED_BLOCK).analyticsLocations, children: null };
  const obj2 = { style: tmp.container, children: <Subblocks featuredBlock={featuredBlock.featuredBlock} style={tmp.featuredSubblock} /> };
  obj.children = <View style={tmp.container}><Subblocks featuredBlock={featuredBlock.featuredBlock} style={tmp.featuredSubblock} /></View>;
  return jsx(useAnalyticsLocations.AnalyticsLocationProvider, { value: useAnalyticsLocationsDefault(AnalyticsLocationDefault.COLLECTIBLES_SHOP_FEATURED_BLOCK).analyticsLocations, children: null });
};