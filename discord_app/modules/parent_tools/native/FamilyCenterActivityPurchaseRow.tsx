// discord_app/modules/parent_tools/native/FamilyCenterActivityPurchaseRow.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import PriceUtils from "../../../utils/PriceUtils.tsx";
import useCollectiblesDataDefault from "../../collectibles/hooks/useCollectiblesData.tsx";
import FamilyCenterActivityPurchaseRowUtils from "../FamilyCenterActivityPurchaseRowUtils.tsx";
import FamilyCenterActivityItemPreviewDefault from "FamilyCenterActivityItemPreview.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5092);
let obj2 = {
  container: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
    borderBottomWidth: 1,
    paddingVertical: 12,
  },
  textContainer: { display: "flex", flexDirection: "column", flexShrink: 1 },
};
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
  borderBottomWidth: 1,
  paddingVertical: 12,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityPurchaseRow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function FamilyCenterActivityPurchaseRow(arg0) {
      const cResult = c.c(23);
      ({ skuId, subscriptionPlanId, total, currency } = arg0);
      const tmp4 = closure_6();
      let product = useCollectiblesDataDefault(skuId).product;
      let tmp7 = product;
      if (product == null) {
        tmp7 = null;
      }
      if (cResult[0] === subscriptionPlanId) {
        if (cResult[1] === tmp7) {
          let tmp8 = cResult[2];
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
            if (cResult[4] === total) {
              let tmp10 = cResult[5];
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
                  if (cResult[9] === product) {
                    let tmp14 = cResult[10];
                  }
                  if (cResult[11] !== combined) {
                    const obj2 = {
                      variant: "text-md/semibold",
                      color: "interactive-text-active",
                      ellipsizeMode: "tail",
                      lineClamp: 1,
                      children: combined,
                    };
                    const tmp19 = React4(Text_Text.Text, obj2);
                    cResult[11] = combined;
                    cResult[12] = tmp19;
                    let tmp17 = tmp19;
                  } else {
                    tmp17 = cResult[12];
                  }
                  if (cResult[13] !== tmp10) {
                    const obj3 = { variant: "text-xs/medium", color: "text-muted", children: tmp10 };
                    const tmp22 = React4(Text_Text.Text, obj3);
                    cResult[13] = tmp10;
                    cResult[14] = tmp22;
                    let tmp20 = tmp22;
                  } else {
                    tmp20 = cResult[14];
                  }
                  if (cResult[15] === tmp4.textContainer) {
                    if (cResult[16] === tmp17) {
                      if (cResult[17] === tmp20) {
                        let tmp23 = cResult[18];
                      }
                      if (cResult[19] === tmp4.container) {
                        if (cResult[20] === tmp14) {
                          if (cResult[21] === tmp23) {
                            let tmp27 = cResult[22];
                          }
                          return tmp27;
                        }
                      }
                      const obj4 = { style: tmp4.container, children: null };
                      const items = [tmp14, tmp23];
                      obj4.children = items;
                      const tmp30 = hasOwnProperty(View, obj4);
                      cResult[19] = tmp4.container;
                      cResult[20] = tmp14;
                      cResult[21] = tmp23;
                      cResult[22] = tmp30;
                      tmp27 = tmp30;
                    }
                  }
                  const obj5 = { style: tmp4.textContainer, children: null };
                  const items1 = [tmp17, tmp20];
                  obj5.children = items1;
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
            const tmp16 = React4(FamilyCenterActivityItemPreviewDefault, obj6);
            cResult[6] = displayName;
            cResult[7] = isSubscription;
            cResult[8] = subscriptionPlanId;
            cResult[9] = product;
            cResult[10] = tmp16;
            tmp14 = tmp16;
          }
          const formatPriceResult = PriceUtils.formatPrice(total, currency);
          cResult[3] = currency;
          cResult[4] = total;
          cResult[5] = formatPriceResult;
          tmp10 = formatPriceResult;
          const tmpResult = PriceUtils;
        }
      }
      const purchaseDisplayInfo = FamilyCenterActivityPurchaseRowUtils.getPurchaseDisplayInfo(tmp7, subscriptionPlanId);
      cResult[0] = subscriptionPlanId;
      cResult[1] = tmp7;
      cResult[2] = purchaseDisplayInfo;
      tmp8 = purchaseDisplayInfo;
      const tmpResult2 = FamilyCenterActivityPurchaseRowUtils;
    }
  : function FamilyCenterActivityPurchaseRow(arg0) {
      ({ skuId, subscriptionPlanId } = arg0);
      ({ total, currency } = arg0);
      const tmp = closure_6();
      let product = useCollectiblesDataDefault(skuId).product;
      let tmp6 = product;
      if (product == null) {
        tmp6 = null;
      }
      const purchaseDisplayInfo = FamilyCenterActivityPurchaseRowUtils.getPurchaseDisplayInfo(tmp6, subscriptionPlanId);
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
        if (null != typeName) {
          const _HermesInternal = HermesInternal;
          combined = "" + displayName + " \u2022 " + typeName;
        }
        const obj2 = { style: tmp.container, children: null };
        const obj3 = { displayName, product: null, isSubscription: null, subscriptionPlanId: null };
        const formatPriceResult = PriceUtils.formatPrice(total, currency);
        if (product == null) {
          product = null;
        }
        obj3.product = product;
        obj3.isSubscription = isSubscription;
        obj3.subscriptionPlanId = subscriptionPlanId;
        const items = [React4(FamilyCenterActivityItemPreviewDefault, obj3)];
        const obj4 = { style: tmp.textContainer, children: null };
        const obj5 = {
          variant: "text-md/semibold",
          color: "interactive-text-active",
          ellipsizeMode: "tail",
          lineClamp: 1,
          children: combined,
        };
        const items1 = [React4(Text_Text.Text, obj5)];
        const obj6 = { variant: "text-xs/medium", color: "text-muted", children: formatPriceResult };
        items1[1] = React4(Text_Text.Text, obj6);
        obj4.children = items1;
        items[1] = hasOwnProperty(View, obj4);
        obj2.children = items;
        return hasOwnProperty(View, obj2);
      }
    };
