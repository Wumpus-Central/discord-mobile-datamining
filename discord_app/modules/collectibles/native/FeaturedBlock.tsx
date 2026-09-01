// discord_app/modules/collectibles/native/FeaturedBlock.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import context from "../../app_analytics/useAnalyticsLocations.tsx";
import contextDefault from "../../app_analytics/useAnalyticsLocations.tsx";
import QUICK_SWITCHERDefault from "../../app_analytics/AnalyticsLocation.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { jsx } from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

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
let closure_5 = createCacheKey.createStyles({
  container: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: ThemesDefault.space.PX_12,
    paddingHorizontal: ThemesDefault.space.PX_16,
  },
  featuredSubblock: { flex: 1, flexBasis: 400, maxWidth: "100%" },
});
const result = require("set").fileFinishedImporting("modules/collectibles/native/FeaturedBlock.tsx");

export default function FeaturedBlock(featuredBlock) {
  const tmp = callback();
  let obj = {
    value: contextDefault(QUICK_SWITCHERDefault.COLLECTIBLES_SHOP_FEATURED_BLOCK).analyticsLocations,
    children: null,
  };
  obj = {
    style: tmp.container,
    children: (
      <Subblocks value={contextDefault(QUICK_SWITCHERDefault.COLLECTIBLES_SHOP_FEATURED_BLOCK).analyticsLocations}>
        {null}
      </Subblocks>
    ),
  };
  obj = { featuredBlock: featuredBlock.featuredBlock, style: tmp.featuredSubblock };
  obj[1] = <View featuredBlock={arg0.featuredBlock} style={tmp.featuredSubblock} />;
  return jsx(context.AnalyticsLocationProvider, {
    featuredBlock: featuredBlock.featuredBlock,
    style: tmp.featuredSubblock,
  });
}
