// === Module 15768: FeedProductList ===

// Module 15768 (FeedProductList)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import CollectiblesShopCardV2 from "CollectiblesShopCardV2" /* 8451 */;
import SkeletonCardDefault from "SkeletonCard" /* 8567 */;
import CollectiblesShopCardsGridDefault from "CollectiblesShopCardsGrid" /* 15770 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { skeletonGrid: { flex: 1, alignItems: "center" }, skeletonRow: obj2 };
obj2 = { flexDirection: "row", gap: CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_GAP, paddingBottom: CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_GAP };
let closure_5 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let accessibilityLabel;
  let cardWidth;
  let columns;
  let loadingCardsNum;
  let num;
  const obj = cardWidth(576);
  const cResult = obj.c(11);
  ({ loadingCardsNum, accessibilityLabel } = arg0);
  const tmp2 = closure_5();
  let obj2 = cardWidth(15769);
  const cardLayout = obj2.useCardLayout();
  ({ columns, cardWidth } = cardLayout);
  const rowWidth = cardLayout.rowWidth;
  if (cResult[0] === cardWidth) {
    if (cResult[1] === columns) {
      if (cResult[2] === loadingCardsNum) {
        if (cResult[3] === rowWidth) {
          let tmp4;
          let tmp9;
          if (cResult[4] === tmp2.skeletonRow) {
            tmp4 = cResult[5];
          }
          const _Symbol = Symbol;
          if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
            const obj3 = { busy: true };
            cResult[6] = obj3;
            tmp9 = obj3;
          } else {
            tmp9 = cResult[6];
          }
          if (cResult[7] === accessibilityLabel) {
            if (cResult[8] === tmp4) {
              let tmp10;
              if (cResult[9] === tmp2.skeletonGrid) {
                tmp10 = cResult[10];
              }
              return tmp10;
            }
          }
          const tmp13 = <View style={tmp2.skeletonGrid} accessibilityRole="list" accessibilityLabel={accessibilityLabel} accessibilityState={tmp9} accessible>{tmp4}</View>;
          cResult[7] = accessibilityLabel;
          cResult[8] = tmp4;
          cResult[9] = tmp2.skeletonGrid;
          cResult[10] = tmp13;
          tmp10 = tmp13;
        }
      }
    }
  }
  const items = [];
  for (let num = 0; num < loadingCardsNum; num = num + columns) {
    let _Array = Array;
    let obj5 = { length: Math.min(columns, loadingCardsNum - num) };
    let _Math = Math;
    let fromResult = from(obj5);
    let items1 = [tmp2.skeletonRow, ];
    let obj7 = { width: rowWidth };
    items1[1] = obj7;
    let _HermesInternal = HermesInternal;
    let arr = items.push(<View key={"row-" + num} style={items1}>{fromResult.map((item, index) => {
      const obj2 = { marginBottom: CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_GAP };
      SkeletonCardDefault;
      return <tmp key={"" + num + "-" + index} width={cardWidth} style={obj2} />;
    })}</View>);
  }
  cResult[0] = cardWidth;
  cResult[1] = columns;
  cResult[2] = loadingCardsNum;
  cResult[3] = rowWidth;
  cResult[4] = tmp2.skeletonRow;
  cResult[5] = items;
  tmp4 = items;
}) : (function SkeletonGrid(loadingCardsNum) {
  let c0;
  let columns;
  let num;
  loadingCardsNum = loadingCardsNum.loadingCardsNum;
  _require = undefined;
  const accessibilityLabel = loadingCardsNum.accessibilityLabel;
  const tmp = closure_5();
  const obj = require("useCardLayout");
  const cardLayout = obj.useCardLayout();
  ({ columns, cardWidth: c0 } = cardLayout);
  const items = [];
  for (let num = 0; num < loadingCardsNum; num = num + columns) {
    let _Array = Array;
    let obj2 = { length: Math.min(columns, loadingCardsNum - num) };
    let _Math = Math;
    let fromResult = from(obj2);
    let items1 = [tmp.skeletonRow, ];
    let obj4 = { width: tmp3 };
    items1[1] = obj4;
    let _HermesInternal = HermesInternal;
    let arr = items.push(<View key={"row-" + num} style={items1}>{fromResult.map((item, index) => {
      const obj2 = { marginBottom: CollectiblesShopCardV2.COLLECTIBLES_SHOP_CARD_GAP };
      SkeletonCardDefault;
      return <tmp key={"" + num + "-" + index} width={width} style={obj2} />;
    })}</View>);
  }
  return <View style={tmp.skeletonGrid} accessibilityRole="list" accessibilityLabel={accessibilityLabel} accessibilityState={{ busy: true }} accessible>{items}</View>;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function FeedProductList(arg0) {
  let accessibilityLabel;
  let disableBundleStaticBackground;
  let loadingCardsNum;
  let preferVCPrice;
  let products;
  let tmp3;
  const obj = react2;
  const cResult = obj.c(8);
  ({ products, loadingCardsNum, preferVCPrice, accessibilityLabel, disableBundleStaticBackground } = arg0);
  if (0 === products.length) {
    if (cResult[0] === accessibilityLabel) {
      let tmp7;
      if (cResult[1] === loadingCardsNum) {
        tmp7 = cResult[2];
      }
      tmp3 = tmp7;
    }
    const tmp10 = <closure_6 loadingCardsNum={loadingCardsNum} accessibilityLabel={accessibilityLabel} />;
    cResult[0] = accessibilityLabel;
    cResult[1] = loadingCardsNum;
    cResult[2] = tmp10;
    tmp7 = tmp10;
  } else {
    if (cResult[3] === accessibilityLabel) {
      if (cResult[4] === disableBundleStaticBackground) {
        if (cResult[5] === preferVCPrice) {
          if (cResult[6] === products) {
            tmp3 = cResult[7];
          }
        }
      }
    }
    const tmp6 = jsx(CollectiblesShopCardsGridDefault, { products, preferVCPrice, accessibilityLabel, disableBundleStaticBackground });
    cResult[3] = accessibilityLabel;
    cResult[4] = disableBundleStaticBackground;
    cResult[5] = preferVCPrice;
    cResult[6] = products;
    cResult[7] = tmp6;
    tmp3 = tmp6;
  }
  return tmp3;
}) : (function FeedProductList(arg0) {
  let accessibilityLabel;
  let products;
  let tmp7;
  ({ products, accessibilityLabel } = arg0);
  if (0 === products.length) {
    tmp7 = <closure_6 loadingCardsNum={tmp} accessibilityLabel={accessibilityLabel} />;
  } else {
    tmp7 = jsx(CollectiblesShopCardsGridDefault, { products, preferVCPrice: tmp2, accessibilityLabel, disableBundleStaticBackground: tmp3 });
  }
  return tmp7;
});
const result = size.fileFinishedImporting("modules/collectibles/native/FeedProductList.tsx");

export default tmp3;