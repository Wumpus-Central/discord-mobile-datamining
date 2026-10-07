// discord_app/modules/collectibles/native/FeedProductList.tsx
import c from "../../../../_runtime/00576_c.js";
import CollectiblesShopCardsGridDefault from "CollectiblesShopCardsGrid.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4896);
let obj2 = {
  skeletonGrid: { flex: 1, alignItems: "center" },
  skeletonRow: {
    flexDirection: "row",
    gap: fn(8451).COLLECTIBLES_SHOP_CARD_GAP,
    paddingBottom: fn(8451).COLLECTIBLES_SHOP_CARD_GAP,
  },
};
let closure_5 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = num(576).c(11);
      ({ loadingCardsNum, accessibilityLabel } = arg0);
      const tmp2 = closure_5();
      let obj = num(576);
      const cardLayout = num(15769).useCardLayout();
      ({ columns, cardWidth } = cardLayout);
      num = cardWidth;
      const rowWidth = cardLayout.rowWidth;
      if (cResult[0] === cardWidth) {
        if (cResult[1] === columns) {
          if (cResult[2] === loadingCardsNum) {
            if (cResult[3] === rowWidth) {
              if (cResult[4] === tmp2.skeletonRow) {
                let tmp4 = cResult[5];
              }
              const _Symbol = Symbol;
              if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
                const obj3 = { busy: true };
                cResult[6] = obj3;
                let tmp9 = obj3;
              } else {
                tmp9 = cResult[6];
              }
              if (cResult[7] === accessibilityLabel) {
                if (cResult[8] === tmp4) {
                  if (cResult[9] === tmp2.skeletonGrid) {
                    let tmp10 = cResult[10];
                  }
                  return tmp10;
                }
              }
              const obj4 = {
                style: tmp2.skeletonGrid,
                accessibilityRole: "list",
                accessibilityLabel,
                accessibilityState: tmp9,
                accessible: true,
                children: tmp4,
              };
              const tmp13 = (
                <View
                  style={tmp2.skeletonGrid}
                  accessibilityRole="list"
                  accessibilityLabel={accessibilityLabel}
                  accessibilityState={tmp9}
                  accessible
                >
                  {tmp4}
                </View>
              );
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
        let obj5 = { length: null };
        let _Math = Math;
        obj5.length = Math.min(columns, loadingCardsNum - num);
        let arr = Array.from(obj5);
        let obj6 = { style: null, children: null };
        let items1 = [tmp2.skeletonRow];
        let obj7 = { width: rowWidth };
        items1[1] = obj7;
        obj6.style = items1;
        obj6.children = arr.map((item, index) => {
          const obj = { width: require, style: null };
          const obj2 = { marginBottom: num(8451).COLLECTIBLES_SHOP_CARD_GAP };
          obj.style = obj2;
          return closure_4(closure_1(8567), obj, "" + num + "-" + index);
        });
        let _HermesInternal = HermesInternal;
        let arr2 = items.push(
          <View key={"row-" + num} style={null}>
            {null}
          </View>,
        );
      }
      cResult[0] = cardWidth;
      cResult[1] = columns;
      cResult[2] = loadingCardsNum;
      cResult[3] = rowWidth;
      cResult[4] = tmp2.skeletonRow;
      cResult[5] = items;
      tmp4 = items;
      let obj2 = num(15769);
    }
  : function SkeletonGrid(accessibilityLabel) {
      const loadingCardsNum = accessibilityLabel.loadingCardsNum;
      num = undefined;
      const tmp = closure_5();
      const cardLayout = num(15769).useCardLayout();
      ({ columns, cardWidth: num } = cardLayout);
      const items = [];
      for (let num = 0; num < loadingCardsNum; num = num + columns) {
        let _Array = Array;
        let obj2 = { length: null };
        let _Math = Math;
        obj2.length = Math.min(columns, loadingCardsNum - num);
        let arr = Array.from(obj2);
        let obj3 = { style: null, children: null };
        let items1 = [tmp.skeletonRow];
        let obj4 = { width: tmp3 };
        items1[1] = obj4;
        obj3.style = items1;
        obj3.children = arr.map((item, index) => {
          const obj = { width: require, style: null };
          const obj2 = { marginBottom: num(8451).COLLECTIBLES_SHOP_CARD_GAP };
          obj.style = obj2;
          return closure_4(closure_1(8567), obj, "" + num + "-" + index);
        });
        let _HermesInternal = HermesInternal;
        let arr2 = items.push(
          <View key={"row-" + num} style={null}>
            {null}
          </View>,
        );
      }
      return (
        <View
          style={tmp.skeletonGrid}
          accessibilityRole="list"
          accessibilityLabel={accessibilityLabel.accessibilityLabel}
          accessibilityState={{ busy: true }}
          accessible
        >
          {items}
        </View>
      );
    };
ReactCompilerGating = fn(558);
let obj3 = {
  flexDirection: "row",
  gap: fn(8451).COLLECTIBLES_SHOP_CARD_GAP,
  paddingBottom: fn(8451).COLLECTIBLES_SHOP_CARD_GAP,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/FeedProductList.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function FeedProductList(arg0) {
      const cResult = c.c(8);
      ({ products, loadingCardsNum, preferVCPrice, accessibilityLabel, disableBundleStaticBackground } = arg0);
      let num = 0;
      if (0 === products.length) {
        if (cResult[0] === accessibilityLabel) {
        }
        const obj2 = { loadingCardsNum, accessibilityLabel };
        const tmp10 = <closure_6 loadingCardsNum={loadingCardsNum} accessibilityLabel={accessibilityLabel} />;
        cResult[num] = accessibilityLabel;
        cResult[1] = loadingCardsNum;
        num = 2;
        cResult[2] = tmp10;
      } else {
        if (cResult[3] === accessibilityLabel) {
          if (cResult[4] === disableBundleStaticBackground) {
            if (cResult[5] === preferVCPrice) {
              if (cResult[6] === products) {
                let tmp3 = cResult[7];
              }
              return tmp3;
            }
          }
        }
        const obj3 = { products, preferVCPrice, accessibilityLabel, disableBundleStaticBackground };
        const tmp6 = jsx(CollectiblesShopCardsGridDefault, {
          products,
          preferVCPrice,
          accessibilityLabel,
          disableBundleStaticBackground,
        });
        cResult[3] = accessibilityLabel;
        cResult[4] = disableBundleStaticBackground;
        cResult[5] = preferVCPrice;
        cResult[6] = products;
        cResult[7] = tmp6;
        tmp3 = tmp6;
      }
    }
  : function FeedProductList(arg0) {
      ({ products, accessibilityLabel } = arg0);
      if (0 === products.length) {
        const obj2 = { loadingCardsNum: tmp, accessibilityLabel };
        let tmp7 = <closure_6 loadingCardsNum={tmp} accessibilityLabel={accessibilityLabel} />;
      } else {
        const obj = { products, preferVCPrice: tmp2, accessibilityLabel, disableBundleStaticBackground: tmp3 };
        tmp7 = jsx(CollectiblesShopCardsGridDefault, {
          products,
          preferVCPrice: tmp2,
          accessibilityLabel,
          disableBundleStaticBackground: tmp3,
        });
      }
      return tmp7;
    };
