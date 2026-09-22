// === Module 16160: FeedProductList ===

// Module 16160 (FeedProductList)
import CollectiblesShopCardsGridDefault from "CollectiblesShopCardsGrid" /* 16162 */;
import noop from "module_19" /* 19 */;

const require = fn;
function SkeletonGrid(accessibilityLabel) {
  const loadingCardsNum = accessibilityLabel.loadingCardsNum;
  num = undefined;
  const tmp = closure_5();
  const cardLayout = num(16161).useCardLayout();
  ({ columns, cardWidth: num } = cardLayout);
  const items = [];
  for (let num = 0; num < loadingCardsNum; num = num + columns) {
    let _Array = Array;
    let obj2 = { length: null };
    let _Math = Math;
    obj2.length = Math.min(columns, loadingCardsNum - num);
    let arr = Array.from(obj2);
    let obj3 = { style: null, children: null };
    let items1 = [tmp.skeletonRow, ];
    let obj4 = { width: tmp3 };
    items1[1] = obj4;
    obj3.style = items1;
    obj3.children = arr.map((item, index) => {
      const obj = { width: require, style: null };
      const obj2 = { marginBottom: num(9049).COLLECTIBLES_SHOP_CARD_GAP };
      obj.style = obj2;
      return closure_4(closure_1(9156), obj, "" + num + "-" + index);
    });
    let _HermesInternal = HermesInternal;
    let arr2 = items.push(<View key={"row-" + num} style={null}>{null}</View>);
  }
  return <View style={tmp.skeletonGrid} accessibilityRole="list" accessibilityLabel={accessibilityLabel.accessibilityLabel} accessibilityState={{ busy: true }} accessible>{items}</View>;
}
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4757);
let obj2 = { skeletonGrid: { flex: 1, alignItems: "center" }, skeletonRow: { flexDirection: "row", gap: fn(9049).COLLECTIBLES_SHOP_CARD_GAP, paddingBottom: fn(9049).COLLECTIBLES_SHOP_CARD_GAP } };
let closure_5 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/FeedProductList.tsx");

export default function FeedProductList(arg0) {
  ({ products, accessibilityLabel } = arg0);
  if (0 === products.length) {
    const obj2 = { loadingCardsNum: tmp, accessibilityLabel };
    let tmp7 = <SkeletonGrid loadingCardsNum={tmp} accessibilityLabel={accessibilityLabel} />;
  } else {
    const obj = { products, preferVCPrice: tmp2, accessibilityLabel, disableBundleStaticBackground: tmp3 };
    tmp7 = jsx(CollectiblesShopCardsGridDefault, { products, preferVCPrice: tmp2, accessibilityLabel, disableBundleStaticBackground: tmp3 });
  }
  return tmp7;
};