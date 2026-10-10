// discord_app/modules/collectibles/native/CollectiblesShopFeaturedPage.tsx
import c from "../../../../_runtime/00576_c.js";
import util from "../../../intl/index.native.tsx";
import native from "../../../design/void/native.tsx";
import generated_NoResults from "../../../design/components/Illustration/native/redesign/generated/NoResults.tsx";
import ShopBlockItemDefault from "ShopBlockItem.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const constants = fn(1087).CollectiblesMobileShopScreen;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let closure_6 = createStyles.createStyles({ container: { flex: 1, justifyContent: "center", alignItems: "center" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopFeaturedPage.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (shopBlock) => {
      const cResult = c.c(6);
      shopBlock = shopBlock.shopBlock;
      let container = closure_6();
      if (null === shopBlock.fetchShopHomeError) {
        if (undefined !== shopBlock) {
          if (cResult[4] !== shopBlock) {
            const obj2 = { block: shopBlock, screen: constants.FEATURED_PAGE };
            const tmp8 = jsx(ShopBlockItemDefault, { block: shopBlock, screen: constants.FEATURED_PAGE });
            cResult[4] = shopBlock;
            cResult[5] = tmp8;
            let tmp4 = tmp8;
          } else {
            tmp4 = cResult[5];
          }
          return tmp4;
        }
      }
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { marginTop: 42 };
        cResult[0] = obj3;
        let first = obj3;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { style: first, Illustration: generated_NoResults.NoResults, body: null };
        const intl = util.intl;
        obj4.body = intl.string(util.t.eAn6z2);
        const tmp12 = jsx(native.EmptyState, { style: first, Illustration: generated_NoResults.NoResults, body: null });
        cResult[1] = tmp12;
        let tmp10 = tmp12;
      } else {
        tmp10 = cResult[1];
      }
      if (cResult[2] !== container.container) {
        const obj5 = { style: container.container, children: tmp10 };
        const tmp16 = <View style={container.container}>{tmp10}</View>;
        container = container.container;
        cResult[2] = container;
        cResult[3] = tmp16;
      }
    }
  : (shopBlock) => {
      shopBlock = shopBlock.shopBlock;
      if (null === shopBlock.fetchShopHomeError) {
        if (undefined !== shopBlock) {
          const obj = { block: shopBlock, screen: constants.FEATURED_PAGE };
          let tmp6 = jsx(ShopBlockItemDefault, { block: shopBlock, screen: constants.FEATURED_PAGE });
        }
        return tmp6;
      }
      const obj2 = { style: closure_6().container, children: null };
      const obj3 = { style: { marginTop: 42 }, Illustration: generated_NoResults.NoResults, body: null };
      const intl = util.intl;
      obj3.body = intl.string(util.t.eAn6z2);
      obj2.children = jsx(native.EmptyState, {
        style: { marginTop: 42 },
        Illustration: generated_NoResults.NoResults,
        body: null,
      });
      tmp6 = <View style={closure_6().container}>{null}</View>;
      const tmp = closure_6();
    };
