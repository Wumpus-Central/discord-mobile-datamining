// discord_app/modules/collectibles/native/FeaturedBlock.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useAnalyticsLocations from "../../app_analytics/useAnalyticsLocations.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import CollectiblesAnalyticsContext from "../CollectiblesAnalyticsContext.tsx";
import FeaturedCategorySubblockDefault from "FeaturedCategorySubblock.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const useAnalyticsLocationsDefault = useAnalyticsLocations;

require = fn;
function Subblocks(style) {
  style = style.style;
  const subblocks = style.featuredBlock.subblocks;
  return subblocks.map((subblock, tilePosition) => {
    let obj = { newValue: { tilePosition }, children: null };
    obj = { style, children: <View newValue={{ tilePosition }}>{null}</View> };
    obj = { subblock };
    obj.children = jsx(FeaturedCategorySubblockDefault, { subblock });
    return jsx(CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider, { subblock }, tilePosition);
  });
}
const View = fn(17).View;
const jsx = fn(21).jsx;
fn(4560);
const createStyles = {
  container: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: nativeDefault.space.PX_12,
    paddingHorizontal: nativeDefault.space.PX_16,
  },
  featuredSubblock: { flex: 1, flexBasis: 400, maxWidth: "100%" },
};
let closure_5 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/FeaturedBlock.tsx");

export default function FeaturedBlock(featuredBlock) {
  const tmp = closure_5();
  let obj = {
    value: useAnalyticsLocationsDefault(AnalyticsLocationDefault.COLLECTIBLES_SHOP_FEATURED_BLOCK).analyticsLocations,
    children: null,
  };
  obj = {
    style: tmp.container,
    children: (
      <View
        value={
          useAnalyticsLocationsDefault(AnalyticsLocationDefault.COLLECTIBLES_SHOP_FEATURED_BLOCK).analyticsLocations
        }
      >
        {null}
      </View>
    ),
  };
  obj = { featuredBlock: featuredBlock.featuredBlock, style: tmp.featuredSubblock };
  obj.children = <Subblocks featuredBlock={featuredBlock.featuredBlock} style={tmp.featuredSubblock} />;
  return jsx(useAnalyticsLocations.AnalyticsLocationProvider, {
    featuredBlock: featuredBlock.featuredBlock,
    style: tmp.featuredSubblock,
  });
}
