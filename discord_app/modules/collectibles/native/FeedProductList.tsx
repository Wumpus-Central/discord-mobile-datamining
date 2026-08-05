// discord_app/modules/collectibles/native/FeedProductList.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
function SkeletonGrid(accessibilityLabel) {
  let columns;
  let num;
  const loadingCardsNum = accessibilityLabel.loadingCardsNum;
  num = undefined;
  const tmp = createCacheKey();
  let obj = num(14739);
  const cardLayout = obj.useCardLayout();
  ({ columns, cardWidth: num } = cardLayout);
  const items = [];
  for (let num = 0; num < loadingCardsNum; num = num + columns) {
    let _Array = Array;
    obj = { length: null };
    let _Math = Math;
    obj[0] = Math.min(columns, loadingCardsNum - num);
    let arr = Array.from(obj);
    let tmp4 = jsx;
    let tmp5 = View;
    obj = { style: null, children: null };
    let items1 = [tmp.skeletonRow, ];
    let obj1 = { width: null };
    obj1[0] = tmp3;
    items1[1] = obj1;
    obj[0] = items1;
    obj[1] = arr.map((arg0, arg1) => {
      let obj = { width: num, style: null };
      obj = { marginBottom: null };
      obj[0] = require(9262) /* CollectiblesShopCardInternalV2 */.COLLECTIBLES_SHOP_CARD_GAP;
      obj[1] = obj;
      return jsx(importDefault(14227), { marginBottom: null }, "" + num + "-" + arg1);
    });
    let _HermesInternal = HermesInternal;
    arr = items.push(<View key={"row-" + num} style={null}>{null}</View>);
  }
  return <View style={tmp.skeletonGrid} accessibilityRole="list" accessibilityLabel={arg0.accessibilityLabel} accessibilityState={{ busy: true }} accessible>{items}</View>;
}
createCacheKey = { skeletonGrid: { flex: 1, alignItems: "center" }, skeletonRow: null };
createCacheKey = { flexDirection: "row", gap: require("CollectiblesShopCardInternalV2").COLLECTIBLES_SHOP_CARD_GAP, paddingBottom: require("CollectiblesShopCardInternalV2").COLLECTIBLES_SHOP_CARD_GAP, paddingHorizontal: require("CollectiblesShopCardInternalV2").COLLECTIBLES_SHOP_CARD_GAP };
createCacheKey[1] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/collectibles/native/FeedProductList.tsx");

export default function FeedProductList(arg0) {
  let accessibilityLabel;
  let products;
  ({ products, accessibilityLabel } = arg0);
  if (0 === products.length) {
    let obj = { loadingCardsNum: null, accessibilityLabel: null };
    obj[0] = tmp;
    obj[1] = accessibilityLabel;
    let tmp7 = <SkeletonGrid loadingCardsNum={null} accessibilityLabel={null} />;
  } else {
    obj = { products: null, preferVCPrice: null, accessibilityLabel: null, disableBundleStaticBackground: null };
    obj[0] = products;
    obj[1] = tmp2;
    obj[2] = accessibilityLabel;
    obj[3] = tmp3;
    tmp7 = jsx(importDefault(14740), { products: null, preferVCPrice: null, accessibilityLabel: null, disableBundleStaticBackground: null });
  }
  return tmp7;
};