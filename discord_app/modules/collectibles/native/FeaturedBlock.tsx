// discord_app/modules/collectibles/native/FeaturedBlock.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useAnalyticsLocations from "../../app_analytics/useAnalyticsLocations.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import CollectiblesAnalyticsContext from "../CollectiblesAnalyticsContext.tsx";
import react from "../../../../_runtime/00019_react.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const useAnalyticsLocationsDefault = useAnalyticsLocations;
let featuredBlock;

function Subblocks(style) {
  style = style.style;
  const subblocks = style.featuredBlock.subblocks;
  return subblocks.map((subblock, tilePosition) => {
    const CollectiblesAnalyticsProvider = CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider;
    return (
      <CollectiblesAnalyticsProvider key={tilePosition} newValue={{ tilePosition }}>
        {null}
      </CollectiblesAnalyticsProvider>
    );
  });
}
const View = react_native.View;
const jsx = Fragment.jsx;
const PX_16 = nativeDefault.space.PX_16;
const PX_12 = nativeDefault.space.PX_12;
let obj = {
  container: {
    display: "flex",
    width: "100%",
    flexDirection: "row",
    flexWrap: "wrap",
    gap: PX_12,
    paddingHorizontal: PX_16,
  },
  featuredSubblock: { flex: 1, flexBasis: 400, maxWidth: "100%" },
};
let closure_5 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (featuredBlock) => {
      const obj = react2;
      const cResult = obj.c(9);
      featuredBlock = featuredBlock.featuredBlock;
      const tmp4 = closure_5();
      const tmp5 = useAnalyticsLocationsDefault;
      const analyticsLocations = tmp5(AnalyticsLocationDefault.COLLECTIBLES_SHOP_FEATURED_BLOCK).analyticsLocations;
      if (cResult[0] === featuredBlock) {
        let tmp6;
        if (cResult[1] === tmp4.featuredSubblock) {
          tmp6 = cResult[2];
        }
        if (cResult[3] === tmp4.container) {
          let tmp8;
          if (cResult[4] === tmp6) {
            tmp8 = cResult[5];
          }
          if (cResult[6] === analyticsLocations) {
            let tmp12;
            if (cResult[7] === tmp8) {
              tmp12 = cResult[8];
            }
            return tmp12;
          }
          const tmp14 = jsx(useAnalyticsLocations.AnalyticsLocationProvider, {
            value: analyticsLocations,
            children: tmp8,
          });
          cResult[6] = analyticsLocations;
          cResult[7] = tmp8;
          cResult[8] = tmp14;
          tmp12 = tmp14;
        }
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
    }
  : (featuredBlock) => {
      featuredBlock = featuredBlock.featuredBlock;
      const tmp = closure_5();
      const tmp2 = useAnalyticsLocationsDefault;
      const AnalyticsLocationProvider = useAnalyticsLocations.AnalyticsLocationProvider;
      return (
        <AnalyticsLocationProvider
          value={tmp2(AnalyticsLocationDefault.COLLECTIBLES_SHOP_FEATURED_BLOCK).analyticsLocations}
        >
          {null}
        </AnalyticsLocationProvider>
      );
    };
const result = size.fileFinishedImporting("modules/collectibles/native/FeaturedBlock.tsx");

export default tmp3;
