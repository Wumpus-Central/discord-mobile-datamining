// === Module 14905: FamilyCenterActivityGiftRow ===

// Module 14905 (FamilyCenterActivityGiftRow)
import nativeDefault from "native" /* 576 */;
import useCollectiblesDataDefault from "useCollectiblesData" /* 8173 */;
import useSelectedTeenUser from "useSelectedTeenUser" /* 14893 */;
import FamilyCenterActivityPurchaseRowUtils from "FamilyCenterActivityPurchaseRowUtils" /* 14902 */;
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
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityGiftRow.tsx");

export default function FamilyCenterActivityGiftRow(arg0) {
  ({ skuId, subscriptionPlanId } = arg0);
  ({ price, gifterUserId, claimed, offeredAt, claimedAt } = arg0);
  const tmp = closure_6();
  let product = useCollectiblesDataDefault(skuId).product;
  let obj = useSelectedTeenUser;
  const teenUserForId = obj.useTeenUserForId(gifterUserId);
  let obj1 = FamilyCenterActivityPurchaseRowUtils;
  let tmp7 = product;
  if (product == null) {
    tmp7 = null;
  }
  const purchaseDisplayInfo = obj1.getPurchaseDisplayInfo(tmp7, subscriptionPlanId);
  ({ displayName, isSubscription } = purchaseDisplayInfo);
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
    obj = { claimed, price, gifterName: null, offeredAt: null, claimedAt: null };
    let name = null;
    if (null != teenUserForId) {
      let tmp2Result = tmp2(4404);
      name = tmp2Result.getName(teenUserForId);
    }
    obj.gifterName = name;
    obj.offeredAt = offeredAt;
    obj.claimedAt = claimedAt;
    obj = { style: tmp.container, children: null };
    const giftSubtext = tmp5(14904).getGiftSubtext(obj);
    obj1 = { displayName, product: null, isSubscription: null, subscriptionPlanId: null };
    tmp2Result = tmp2(14903);
    if (product == null) {
      product = null;
    }
    obj1.product = product;
    obj1.isSubscription = isSubscription;
    obj1.subscriptionPlanId = subscriptionPlanId;
    const items = [React4(tmp2Result, obj1), ];
    const obj2 = { style: tmp.textContainer, children: null };
    const obj3 = { variant: "text-md/semibold", color: "interactive-text-active", ellipsizeMode: "tail", lineClamp: 1, children: displayName };
    const items1 = [React4(tmp5(4556).Text, obj3), ];
    const obj4 = { variant: "text-xs/medium", color: "text-muted", children: giftSubtext };
    items1[1] = React4(tmp5(4556).Text, obj4);
    obj2.children = items1;
    items[1] = hasOwnProperty(View, obj2);
    obj.children = items;
    return hasOwnProperty(View, obj);
  }
};