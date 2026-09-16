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
    const obj = { newValue: { tilePosition }, children: null };
    const obj2 = { style, children: jsx(FeaturedCategorySubblockDefault, { subblock }) };
    obj.children = <View style={style}>{jsx(FeaturedCategorySubblockDefault, { subblock })}</View>;
    return jsx(
      CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider,
      { newValue: { tilePosition }, children: null },
      tilePosition,
    );
  });
}
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4638);
let closure_5 = createStyles.createStyles({
  container: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: nativeDefault.space.PX_12,
    paddingHorizontal: nativeDefault.space.PX_16,
  },
  featuredSubblock: { flex: 1, flexBasis: 400, maxWidth: "100%" },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/FeaturedBlock.tsx");

export default function FeaturedBlock(featuredBlock) {
  const tmp = closure_5();
  const obj = {
    value: useAnalyticsLocationsDefault(AnalyticsLocationDefault.COLLECTIBLES_SHOP_FEATURED_BLOCK).analyticsLocations,
    children: null,
  };
  const obj2 = {
    style: tmp.container,
    children: <Subblocks featuredBlock={featuredBlock.featuredBlock} style={tmp.featuredSubblock} />,
  };
  obj.children = (
    <View style={tmp.container}>
      <Subblocks featuredBlock={featuredBlock.featuredBlock} style={tmp.featuredSubblock} />
    </View>
  );
  return jsx(useAnalyticsLocations.AnalyticsLocationProvider, {
    value: useAnalyticsLocationsDefault(AnalyticsLocationDefault.COLLECTIBLES_SHOP_FEATURED_BLOCK).analyticsLocations,
    children: null,
  });
}
