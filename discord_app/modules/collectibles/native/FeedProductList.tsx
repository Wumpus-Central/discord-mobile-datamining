// discord_app/modules/collectibles/native/FeedProductList.tsx
import CollectiblesShopCardsGridDefault from "CollectiblesShopCardsGrid.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
function SkeletonGrid(accessibilityLabel) {
  const loadingCardsNum = accessibilityLabel.loadingCardsNum;
  num = undefined;
  const tmp = closure_5();
  let obj = num(15825);
  const cardLayout = obj.useCardLayout();
  ({ columns, cardWidth: num } = cardLayout);
  const items = [];
  for (let num = 0; num < loadingCardsNum; num = num + columns) {
    let _Array = Array;
    obj = { length: null };
    let _Math = Math;
    obj.length = Math.min(columns, loadingCardsNum - num);
    let arr = Array.from(obj);
    obj = { style: null, children: null };
    let items1 = [tmp.skeletonRow];
    let obj1 = { width: tmp3 };
    items1[1] = obj1;
    obj.style = items1;
    obj.children = arr.map((item, index) => {
      let obj = { width: require, style: null };
      obj = { marginBottom: num(8764).COLLECTIBLES_SHOP_CARD_GAP };
      obj.style = obj;
      return closure_4(closure_1(15085), obj, "" + num + "-" + index);
    });
    let _HermesInternal = HermesInternal;
    arr = items.push(
      <View key={"row-" + num} style={null}>
        {null}
      </View>,
    );
  }
  return (
    <View
      style={tmp.skeletonGrid}
      accessibilityRole="list"
      accessibilityLabel={arg0.accessibilityLabel}
      accessibilityState={{ busy: true }}
      accessible
    >
      {items}
    </View>
  );
}
const View = fn(17).View;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { skeletonGrid: { flex: 1, alignItems: "center" }, skeletonRow: null };
createStyles = {
  flexDirection: "row",
  gap: fn(8764).COLLECTIBLES_SHOP_CARD_GAP,
  paddingBottom: fn(8764).COLLECTIBLES_SHOP_CARD_GAP,
};
createStyles.skeletonRow = createStyles;
let closure_5 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/FeedProductList.tsx");

export default function FeedProductList(arg0) {
  ({ products, accessibilityLabel } = arg0);
  if (0 === products.length) {
    let obj = { loadingCardsNum: tmp, accessibilityLabel };
    let tmp7 = <SkeletonGrid loadingCardsNum={tmp} accessibilityLabel={accessibilityLabel} />;
  } else {
    obj = { products, preferVCPrice: tmp2, accessibilityLabel, disableBundleStaticBackground: tmp3 };
    tmp7 = jsx(CollectiblesShopCardsGridDefault, {
      products,
      preferVCPrice: tmp2,
      accessibilityLabel,
      disableBundleStaticBackground: tmp3,
    });
  }
  return tmp7;
}
