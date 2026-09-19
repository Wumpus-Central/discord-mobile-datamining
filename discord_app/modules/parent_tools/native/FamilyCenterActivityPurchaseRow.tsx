// discord_app/modules/parent_tools/native/FamilyCenterActivityPurchaseRow.tsx
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
const createStyles = fn(4756);
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityPurchaseRow.tsx");

export default function FamilyCenterActivityPurchaseRow(arg0) {
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
}
