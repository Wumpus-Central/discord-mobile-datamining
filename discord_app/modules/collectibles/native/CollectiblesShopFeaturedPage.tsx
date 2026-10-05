// discord_app/modules/collectibles/native/CollectiblesShopFeaturedPage.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import CollectiblesShopConstants from "../CollectiblesShopConstants.tsx";
import intl2 from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import generated_NoResults from "../../../design/components/Illustration/native/redesign/generated/NoResults.tsx";
import ShopBlockItemDefault from "ShopBlockItem.tsx";
import react from "../../../../_runtime/00019_react.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let shopBlock;

const View = react_native.View;
const constants = CollectiblesShopConstants.CollectiblesMobileShopScreen;
const jsx = Fragment.jsx;
let closure_6 = createStyles.createStyles({ container: { flex: 1, justifyContent: "center", alignItems: "center" } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (shopBlock) => {
      let first;
      let tmp11;
      let tmp14;
      const obj = react2;
      const cResult = obj.c(6);
      shopBlock = shopBlock.shopBlock;
      const fetchShopHomeError = shopBlock.fetchShopHomeError;
      const tmp4 = closure_6();
      if (null === fetchShopHomeError) {
        let tmp5;
        if (undefined !== shopBlock) {
          if (cResult[4] !== shopBlock) {
            const tmp9 = jsx(ShopBlockItemDefault, { block: shopBlock, screen: constants.FEATURED_PAGE });
            cResult[4] = shopBlock;
            cResult[5] = tmp9;
            tmp5 = tmp9;
          } else {
            tmp5 = cResult[5];
          }
        }
        return tmp5;
      }
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { marginTop: 42 };
        cResult[0] = obj3;
        first = obj3;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const EmptyState = native.EmptyState;
        const intl = intl2.intl;
        const tmp13 = (
          <EmptyState style={first} Illustration={generated_NoResults.NoResults} body={intl.string(intl2.t.eAn6z2)} />
        );
        cResult[1] = tmp13;
        tmp11 = tmp13;
      } else {
        tmp11 = cResult[1];
      }
      if (cResult[2] !== tmp4.container) {
        const tmp17 = <View style={tmp4.container}>{tmp11}</View>;
        cResult[2] = tmp4.container;
        cResult[3] = tmp17;
        tmp14 = tmp17;
      } else {
        tmp14 = cResult[3];
      }
      tmp5 = tmp14;
    }
  : (shopBlock) => {
      let intl;
      shopBlock = shopBlock.shopBlock;
      const fetchShopHomeError = shopBlock.fetchShopHomeError;
      const tmp = closure_6();
      if (null === fetchShopHomeError) {
        let tmp6;
        if (undefined !== shopBlock) {
          tmp6 = jsx(ShopBlockItemDefault, { block: shopBlock, screen: constants.FEATURED_PAGE });
        }
        return tmp6;
      }
      ({ style: { marginTop: 42 }, Illustration: generated_NoResults.NoResults, body: intl.string(intl2.t.eAn6z2) });
      const EmptyState = native.EmptyState;
      intl = intl2.intl;
      tmp6 = <View style={tmp.container}>{null}</View>;
    };
const result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopFeaturedPage.tsx");

export default tmp3;
