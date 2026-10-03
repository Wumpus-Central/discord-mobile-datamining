// === Module 15730: CollectiblesShopCardsGrid ===

// Module 15730 (CollectiblesShopCardsGrid)
import _modDef12 from "module_12" /* 12 */;
import c from "c" /* 576 */;
import CollectiblesShopCardV2Default from "CollectiblesShopCardV2" /* 8418 */;
import CollectiblesAnalyticsContext from "CollectiblesAnalyticsContext" /* 8421 */;
import noop from "module_19" /* 19 */;
import CollectiblesCategoryStore from "CollectiblesCategoryStore" /* 7053 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj2 = { rowContainer: { flexDirection: "row", gap: fn(8418).COLLECTIBLES_SHOP_CARD_GAP } };
let closure_8 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(12);
  ({ product, index, cardWidth, preferVCPrice, unpublishedAt, disableBundleStaticBackground, muteBundleStaticBackground } = arg0);
  if (cResult[0] !== index) {
    const obj2 = { tilePosition: index };
    cResult[0] = index;
    cResult[1] = obj2;
    let tmp4 = obj2;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === cardWidth) {
    if (cResult[3] === disableBundleStaticBackground) {
      if (cResult[4] === muteBundleStaticBackground) {
        if (cResult[5] === preferVCPrice) {
          if (cResult[6] === product) {
            if (cResult[7] === unpublishedAt) {
              let tmp5 = cResult[8];
            }
            if (cResult[9] === tmp5) {
              if (cResult[10] === tmp4) {
                let tmp7 = cResult[11];
              }
              return tmp7;
            }
            const obj3 = { newValue: tmp4, children: tmp5 };
            const tmp9 = jsx(CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider, { newValue: tmp4, children: tmp5 });
            cResult[9] = tmp5;
            cResult[10] = tmp4;
            cResult[11] = tmp9;
            tmp7 = tmp9;
          }
        }
      }
    }
  }
  const tmp6 = jsx(CollectiblesShopCardV2Default, { unpublishedAt, product, cardWidth, preferVCPrice, disableBundleStaticBackground, muteBundleStaticBackground });
  cResult[2] = cardWidth;
  cResult[3] = disableBundleStaticBackground;
  cResult[4] = muteBundleStaticBackground;
  cResult[5] = preferVCPrice;
  cResult[6] = product;
  cResult[7] = unpublishedAt;
  cResult[8] = tmp6;
  tmp5 = tmp6;
}) : ((index) => {
  index = index.index;
  const items = [index];
  ({ product, cardWidth, preferVCPrice, unpublishedAt, disableBundleStaticBackground, muteBundleStaticBackground } = index);
  const memo = noop.useMemo(() => ({ tilePosition: index }), items);
  return jsx(CollectiblesAnalyticsContext.CollectiblesAnalyticsProvider, { newValue: memo, children: jsx(CollectiblesShopCardV2Default, { unpublishedAt, product, cardWidth, preferVCPrice, disableBundleStaticBackground, muteBundleStaticBackground }) });
});
ReactCompilerGating = fn(558);
let obj3 = { flexDirection: "row", gap: fn(8418).COLLECTIBLES_SHOP_CARD_GAP };
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/CollectiblesShopCardsGrid.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((preferVCPrice) => {
  const cResult = category(disableBundleStaticBackground[7]).c(30);
  ({ products, accessibilityLabel, category } = preferVCPrice);
  preferVCPrice = preferVCPrice.preferVCPrice;
  ({ scrollEnabled, onScroll, paddingTop, paddingBottom, disableBundleStaticBackground } = preferVCPrice);
  const muteBundleStaticBackground = preferVCPrice.muteBundleStaticBackground;
  const tmp5 = closure_8();
  const rowContainer = tmp5;
  let obj = category(disableBundleStaticBackground[7]);
  const cardLayout = category(disableBundleStaticBackground[9]).useCardLayout();
  const columns = cardLayout.columns;
  const cardWidth = cardLayout.cardWidth;
  const rowWidth = cardLayout.rowWidth;
  if (cResult[0] === columns) {
    if (cResult[1] === products) {
      let arr = cResult[2];
    }
    if (cResult[3] === paddingBottom) {
      if (cResult[4] === paddingTop) {
        if (cResult[5] === rowWidth) {
          let tmp8 = cResult[6];
        }
        if (cResult[7] === cardWidth) {
          if (cResult[8] === category) {
            if (cResult[9] === disableBundleStaticBackground) {
              if (cResult[10] === muteBundleStaticBackground) {
                if (cResult[11] === columns) {
                  if (cResult[12] === preferVCPrice) {
                    if (cResult[13] === arr) {
                      if (cResult[14] === tmp5) {
                        if (cResult[24] === accessibilityLabel) {
                          if (cResult[25] === onScroll) {
                            if (cResult[26] === tmp4) {
                              if (cResult[27] === tmp8) {
                                if (cResult[28] === tmp9) {
                                  let tmp13 = cResult[29];
                                }
                                return tmp13;
                              }
                            }
                          }
                        }
                        class O {
                          constructor(arg0, arg1) {
                            closure_0 = arg1;
                            obj = { style: closure_4.rowContainer, children: preferVCPrice.map(() => { ... }) };
                            return closure_1_7(closure_4, obj, arg1);
                          }
                        }
                        const obj2 = { accessibilityLabel, accessibilityRole: "list", scrollEnabled: tmp4, showsVerticalScrollIndicator: false, onScroll, contentContainerStyle: tmp8, children: cResult[15] };
                        const tmp15 = <columns accessibilityLabel={accessibilityLabel} accessibilityRole="list" scrollEnabled={tmp4} showsVerticalScrollIndicator={false} onScroll={onScroll} contentContainerStyle={tmp8}>{cResult[15]}</columns>;
                        cResult[24] = accessibilityLabel;
                        cResult[25] = onScroll;
                        cResult[26] = tmp4;
                        cResult[27] = tmp8;
                        cResult[28] = cResult[15];
                        cResult[29] = tmp15;
                        tmp13 = tmp15;
                      }
                    }
                  }
                }
              }
            }
          }
        }
        if (cResult[16] === cardWidth) {
          if (cResult[17] === category) {
            if (cResult[18] === disableBundleStaticBackground) {
              if (cResult[19] === muteBundleStaticBackground) {
                if (cResult[20] === columns) {
                  if (cResult[21] === preferVCPrice) {
                    if (cResult[22] === tmp5) {
                      let tmp10 = cResult[23];
                    }
                    const mapped = arr.map(tmp10);
                    class O {
                      constructor(arg0, arg1) {
                        closure_0 = arg1;
                        obj = { style: closure_4.rowContainer, children: preferVCPrice.map(() => { ... }) };
                        return closure_1_7(closure_4, obj, arg1);
                      }
                    }
                    cResult[8] = category;
                    cResult[9] = disableBundleStaticBackground;
                    cResult[10] = muteBundleStaticBackground;
                    cResult[11] = columns;
                    cResult[12] = preferVCPrice;
                    cResult[13] = arr;
                    cResult[14] = tmp5;
                    cResult[15] = mapped;
                  }
                }
              }
            }
          }
        }
        class O {
          constructor(arg0, arg1) {
            closure_0 = arg1;
            obj = { style: closure_4.rowContainer, children: preferVCPrice.map(() => { ... }) };
            return closure_1_7(closure_4, obj, arg1);
          }
        }
        cResult[16] = cardWidth;
        cResult[17] = category;
        cResult[18] = disableBundleStaticBackground;
        cResult[19] = muteBundleStaticBackground;
        cResult[20] = columns;
        cResult[21] = preferVCPrice;
        cResult[22] = tmp5;
        cResult[23] = O;
        tmp10 = O;
      }
    }
    const obj4 = { gap: null, paddingTop, paddingBottom, width: rowWidth, alignSelf: "center" };
    cResult[3] = paddingBottom;
    cResult[4] = paddingTop;
    cResult[5] = rowWidth;
    cResult[6] = obj4;
    tmp8 = obj4;
  }
  const tmpResult = category(disableBundleStaticBackground[9]);
  const chunkResult = preferVCPrice(disableBundleStaticBackground[10]).chunk(products, columns);
  cResult[0] = columns;
  cResult[1] = products;
  cResult[2] = chunkResult;
  arr = chunkResult;
  const obj3 = preferVCPrice(disableBundleStaticBackground[10]);
}) : ((accessibilityLabel) => {
  const products = accessibilityLabel.products;
  ({ category: importDefault, preferVCPrice: dependencyMap, scrollEnabled } = accessibilityLabel);
  if (scrollEnabled === undefined) {
    scrollEnabled = false;
  }
  ({ disableBundleStaticBackground: noop, muteBundleStaticBackground: closure_4 } = accessibilityLabel);
  ({ onScroll, paddingTop, paddingBottom } = accessibilityLabel);
  const rowContainer = closure_8();
  const cardLayout = products(15729).useCardLayout();
  const columns = cardLayout.columns;
  const cardWidth = cardLayout.cardWidth;
  const items = [products, columns];
  const memo = noop.useMemo(() => _modDef12.chunk(products, columns), items);
  const obj2 = { accessibilityLabel: accessibilityLabel.accessibilityLabel, accessibilityRole: "list", scrollEnabled, showsVerticalScrollIndicator: false, onScroll, contentContainerStyle: null, children: null };
  let obj = products(15729);
  obj2.contentContainerStyle = { gap: products(8418).COLLECTIBLES_SHOP_CARD_GAP, paddingTop, paddingBottom, width: cardLayout.rowWidth, alignSelf: "center" };
  obj2.children = memo.map((arr, index) => {
    closure_0 = index;
    return cardWidth(muteBundleStaticBackground, {
      style: rowContainer.rowContainer,
      children: arr.map((product, index) => {
        let categoryForProduct = importDefault;
        if (importDefault == null) {
          categoryForProduct = CollectiblesCategoryStore.getCategoryForProduct(product.skuId);
        }
        const obj = { product, index: closure_0 * columns + index, cardWidth, unpublishedAt: null, preferVCPrice: null, disableBundleStaticBackground: null, muteBundleStaticBackground: null };
        let unpublishedAt;
        if (categoryForProduct != null) {
          unpublishedAt = categoryForProduct.unpublishedAt;
        }
        obj.unpublishedAt = unpublishedAt;
        obj.preferVCPrice = preferVCPrice;
        obj.disableBundleStaticBackground = disableBundleStaticBackground;
        obj.muteBundleStaticBackground = muteBundleStaticBackground;
        return <closure_9 key={product.skuId} product={product} index={closure_0 * columns + index} cardWidth={cardWidth} unpublishedAt={null} preferVCPrice={null} disableBundleStaticBackground={null} muteBundleStaticBackground={null} />;
      })
    }, index);
  });
  return cardWidth(rowContainer, obj2);
});