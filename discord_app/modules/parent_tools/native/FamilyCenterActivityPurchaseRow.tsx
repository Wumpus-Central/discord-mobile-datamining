// === Module 14901: FamilyCenterActivityPurchaseRow ===

// Module 14901 (FamilyCenterActivityPurchaseRow)
import nativeDefault from "native" /* 576 */;
import Text_Text from "Text/Text" /* 4556 */;
import PriceUtils from "PriceUtils" /* 7234 */;
import useCollectiblesDataDefault from "useCollectiblesData" /* 8173 */;
import FamilyCenterActivityPurchaseRowUtils from "FamilyCenterActivityPurchaseRowUtils" /* 14902 */;
import FamilyCenterActivityItemPreviewDefault from "FamilyCenterActivityItemPreview" /* 14903 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
fn(4560);
let createStyles = { container: null, textContainer: null };
createStyles = { display: "flex", flexDirection: "row", alignItems: "center", borderBottomColor: nativeDefault.colors.BORDER_SUBTLE, borderBottomWidth: 1, paddingVertical: 12 };
createStyles.container = createStyles;
createStyles.textContainer = { display: "flex", flexDirection: "column", flexShrink: 1 };
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityPurchaseRow.tsx");

export default function FamilyCenterActivityPurchaseRow(arg0) {
  ({ skuId, subscriptionPlanId } = arg0);
  ({ total, currency } = arg0);
  const tmp = closure_6();
  let product = useCollectiblesDataDefault(skuId).product;
  let obj = FamilyCenterActivityPurchaseRowUtils;
  let tmp6 = product;
  if (product == null) {
    tmp6 = null;
  }
  const purchaseDisplayInfo = obj.getPurchaseDisplayInfo(tmp6, subscriptionPlanId);
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
    obj = { style: tmp.container, children: null };
    obj = { displayName, product: null, isSubscription: null, subscriptionPlanId: null };
    const formatPriceResult = PriceUtils.formatPrice(total, currency);
    if (product == null) {
      product = null;
    }
    obj.product = product;
    obj.isSubscription = isSubscription;
    obj.subscriptionPlanId = subscriptionPlanId;
    const items = [React4(FamilyCenterActivityItemPreviewDefault, obj), ];
    const obj1 = { style: tmp.textContainer, children: null };
    const obj2 = { variant: "text-md/semibold", color: "interactive-text-active", ellipsizeMode: "tail", lineClamp: 1, children: combined };
    const items1 = [React4(Text_Text.Text, obj2), ];
    const obj3 = { variant: "text-xs/medium", color: "text-muted", children: formatPriceResult };
    items1[1] = React4(Text_Text.Text, obj3);
    obj1.children = items1;
    items[1] = hasOwnProperty(View, obj1);
    obj.children = items;
    return hasOwnProperty(View, obj);
  }
};