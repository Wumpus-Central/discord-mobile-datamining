// === Module 14709: FamilyCenterActivityPurchaseRow ===

// Module 14709 (FamilyCenterActivityPurchaseRow)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Text_Text from "Text/Text" /* 4886 */;
import PriceUtils from "PriceUtils" /* 6736 */;
import useCollectiblesDataDefault from "useCollectiblesData" /* 7844 */;
import FamilyCenterActivityPurchaseRowUtils from "FamilyCenterActivityPurchaseRowUtils" /* 14710 */;
import FamilyCenterActivityItemPreviewDefault from "FamilyCenterActivityItemPreview" /* 14711 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { container: obj2, textContainer: { display: "flex", flexDirection: "column", flexShrink: 1 } };
obj2 = { display: "flex", flexDirection: "row", alignItems: "center", borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, borderBottomWidth: 1, paddingVertical: 12 };
let closure_6 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let currency;
  let displayName;
  let isSubscription;
  let items;
  let items1;
  let skuId;
  let subscriptionPlanId;
  let total;
  let typeName;
  const obj = react2;
  const cResult = obj.c(23);
  ({ skuId, subscriptionPlanId, total, currency } = arg0);
  const tmp4 = closure_6();
  let product = useCollectiblesDataDefault(skuId).product;
  let tmp7 = product;
  if (product == null) {
    tmp7 = null;
  }
  if (cResult[0] === subscriptionPlanId) {
    let tmp8;
    if (cResult[1] === tmp7) {
      tmp8 = cResult[2];
    }
    ({ displayName, typeName, isSubscription } = tmp8);
    if (null != skuId) {
      if (!isSubscription) {
        if (null == product) {
          return null;
        }
      }
    }
    if (null == displayName) {
      return null;
    } else {
      if (cResult[3] === currency) {
        let tmp10;
        if (cResult[4] === total) {
          tmp10 = cResult[5];
        }
        let combined = displayName;
        if (null != typeName) {
          const _HermesInternal = HermesInternal;
          combined = "" + displayName + " \u2022 " + typeName;
        }
        if (product == null) {
          product = null;
        }
        if (cResult[6] === displayName) {
          if (cResult[7] === isSubscription) {
            if (cResult[8] === subscriptionPlanId) {
              let tmp14;
              let tmp17;
              let tmp20;
              if (cResult[9] === product) {
                tmp14 = cResult[10];
              }
              if (cResult[11] !== combined) {
                const obj2 = { variant: "text-md/semibold", color: "interactive-text-active", ellipsizeMode: "tail", lineClamp: 1, children: combined };
                const tmp19 = React3(Text_Text.Text, obj2);
                cResult[11] = combined;
                cResult[12] = tmp19;
                tmp17 = tmp19;
              } else {
                tmp17 = cResult[12];
              }
              if (cResult[13] !== tmp10) {
                const obj3 = { variant: "text-xs/medium", color: "text-muted", children: tmp10 };
                const tmp22 = React3(Text_Text.Text, obj3);
                cResult[13] = tmp10;
                cResult[14] = tmp22;
                tmp20 = tmp22;
              } else {
                tmp20 = cResult[14];
              }
              if (cResult[15] === tmp4.textContainer) {
                if (cResult[16] === tmp17) {
                  let tmp23;
                  if (cResult[17] === tmp20) {
                    tmp23 = cResult[18];
                  }
                  if (cResult[19] === tmp4.container) {
                    if (cResult[20] === tmp14) {
                      let tmp27;
                      if (cResult[21] === tmp23) {
                        tmp27 = cResult[22];
                      }
                      return tmp27;
                    }
                  }
                  const obj4 = { style: tmp4.container, children: items };
                  items = [tmp14, tmp23];
                  const tmp30 = hasOwnProperty(View, obj4);
                  cResult[19] = tmp4.container;
                  cResult[20] = tmp14;
                  cResult[21] = tmp23;
                  cResult[22] = tmp30;
                  tmp27 = tmp30;
                }
              }
              const obj5 = { style: tmp4.textContainer, children: items1 };
              items1 = [tmp17, tmp20];
              const tmp26 = hasOwnProperty(View, obj5);
              cResult[15] = tmp4.textContainer;
              cResult[16] = tmp17;
              cResult[17] = tmp20;
              cResult[18] = tmp26;
              tmp23 = tmp26;
            }
          }
        }
        const obj6 = { displayName, product, isSubscription, subscriptionPlanId };
        const tmp16 = React3(FamilyCenterActivityItemPreviewDefault, obj6);
        cResult[6] = displayName;
        cResult[7] = isSubscription;
        cResult[8] = subscriptionPlanId;
        cResult[9] = product;
        cResult[10] = tmp16;
        tmp14 = tmp16;
      }
      const tmpResult = PriceUtils;
      const formatPriceResult = tmpResult.formatPrice(total, currency);
      cResult[3] = currency;
      cResult[4] = total;
      cResult[5] = formatPriceResult;
      tmp10 = formatPriceResult;
    }
  }
  const tmpResult2 = FamilyCenterActivityPurchaseRowUtils;
  const purchaseDisplayInfo = tmpResult2.getPurchaseDisplayInfo(tmp7, subscriptionPlanId);
  cResult[0] = subscriptionPlanId;
  cResult[1] = tmp7;
  cResult[2] = purchaseDisplayInfo;
  tmp8 = purchaseDisplayInfo;
}) : ((arg0) => {
  let currency;
  let displayName;
  let isSubscription;
  let items;
  let items1;
  let skuId;
  let subscriptionPlanId;
  let total;
  let typeName;
  ({ skuId, subscriptionPlanId } = arg0);
  ({ total, currency } = arg0);
  const tmp = closure_6();
  let product = useCollectiblesDataDefault(skuId).product;
  let tmp7 = product;
  const getPurchaseDisplayInfo = FamilyCenterActivityPurchaseRowUtils.getPurchaseDisplayInfo;
  FamilyCenterActivityPurchaseRowUtils;
  if (product == null) {
    tmp7 = null;
  }
  const purchaseDisplayInfo = getPurchaseDisplayInfo(tmp7, subscriptionPlanId);
  ({ displayName, typeName, isSubscription } = purchaseDisplayInfo);
  if (null != skuId) {
    if (!isSubscription) {
      if (null == product) {
        return null;
      }
    }
  }
  if (null == displayName) {
    return null;
  } else {
    let combined = displayName;
    const tmp5Result = PriceUtils;
    const formatPriceResult = tmp5Result.formatPrice(total, currency);
    if (null != typeName) {
      const _HermesInternal = HermesInternal;
      combined = "" + displayName + " \u2022 " + typeName;
    }
    const obj = { style: tmp.container, children: items };
    const obj2 = { displayName, product, isSubscription, subscriptionPlanId };
    const tmp2Result = FamilyCenterActivityItemPreviewDefault;
    if (product == null) {
      product = null;
    }
    items = [React3(tmp2Result, obj2), ];
    const obj3 = { style: tmp.textContainer, children: items1 };
    const obj4 = { variant: "text-md/semibold", color: "interactive-text-active", ellipsizeMode: "tail", lineClamp: 1, children: combined };
    items1 = [React3(Text_Text.Text, obj4), ];
    const obj5 = { variant: "text-xs/medium", color: "text-muted", children: formatPriceResult };
    items1[1] = React3(Text_Text.Text, obj5);
    items[1] = hasOwnProperty(View, obj3);
    return hasOwnProperty(View, obj);
  }
});
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityPurchaseRow.tsx");

export default tmp4;