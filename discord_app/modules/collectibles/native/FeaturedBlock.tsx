// === Module 15736: FeaturedBlock ===

// Module 15736 (FeaturedBlock)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useAnalyticsLocations from "useAnalyticsLocations" /* 6657 */;
import AnalyticsLocationDefault from "AnalyticsLocation" /* 6681 */;
import CollectiblesAnalyticsContext from "CollectiblesAnalyticsContext" /* 8421 */;
import FeaturedCategorySubblockDefault from "FeaturedCategorySubblock" /* 15737 */;
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
const createStyles = fn(4890);
let closure_5 = createStyles.createStyles({ container: { display: "flex", width: "100%", flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 }, featuredSubblock: { flex: 1, flexBasis: 400, maxWidth: "100%" } });
const ReactCompilerGating = fn(558);
let obj2 = { container: { display: "flex", width: "100%", flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16 }, featuredSubblock: { flex: 1, flexBasis: 400, maxWidth: "100%" } };
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/FeaturedBlock.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((featuredBlock) => {
  const cResult = c.c(9);
  featuredBlock = featuredBlock.featuredBlock;
  const tmp4 = closure_5();
  const analyticsLocations = useAnalyticsLocationsDefault(AnalyticsLocationDefault.COLLECTIBLES_SHOP_FEATURED_BLOCK).analyticsLocations;
  if (cResult[0] === featuredBlock) {
    if (cResult[1] === tmp4.featuredSubblock) {
      let tmp6 = cResult[2];
    }
    if (cResult[3] === tmp4.container) {
      if (cResult[4] === tmp6) {
        let tmp8 = cResult[5];
      }
      if (cResult[6] === analyticsLocations) {
        if (cResult[7] === tmp8) {
          let tmp12 = cResult[8];
        }
        return tmp12;
      }
      const obj2 = { value: analyticsLocations, children: tmp8 };
      const tmp14 = jsx(useAnalyticsLocations.AnalyticsLocationProvider, { value: analyticsLocations, children: tmp8 });
      cResult[6] = analyticsLocations;
      cResult[7] = tmp8;
      cResult[8] = tmp14;
      tmp12 = tmp14;
    }
    const obj3 = { style: tmp4.container, children: tmp6 };
    const tmp11 = <View style={tmp4.container}>{tmp6}</View>;
    cResult[3] = tmp4.container;
    cResult[4] = tmp6;
    cResult[5] = tmp11;
    tmp8 = tmp11;
  }
  const tmp7 = <Subblocks featuredBlock={featuredBlock} style={tmp4.featuredSubblock} />;
  cResult[0] = featuredBlock;
  cResult[1] = tmp4.featuredSubblock;
  cResult[2] = tmp7;
  tmp6 = tmp7;
  const obj4 = { featuredBlock, style: tmp4.featuredSubblock };
}) : ((featuredBlock) => {
  const tmp = closure_5();
  const obj = { value: useAnalyticsLocationsDefault(AnalyticsLocationDefault.COLLECTIBLES_SHOP_FEATURED_BLOCK).analyticsLocations, children: null };
  const obj2 = { style: tmp.container, children: <Subblocks featuredBlock={featuredBlock.featuredBlock} style={tmp.featuredSubblock} /> };
  obj.children = <View style={tmp.container}><Subblocks featuredBlock={featuredBlock.featuredBlock} style={tmp.featuredSubblock} /></View>;
  return jsx(useAnalyticsLocations.AnalyticsLocationProvider, { value: useAnalyticsLocationsDefault(AnalyticsLocationDefault.COLLECTIBLES_SHOP_FEATURED_BLOCK).analyticsLocations, children: null });
});