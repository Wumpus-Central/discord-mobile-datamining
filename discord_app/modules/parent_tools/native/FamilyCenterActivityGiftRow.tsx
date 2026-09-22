// discord_app/modules/parent_tools/native/FamilyCenterActivityGiftRow.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import UserUtilsDefault from "../../../utils/UserUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import useCollectiblesDataDefault from "../../collectibles/hooks/useCollectiblesData.tsx";
import useSelectedTeenUser from "../hooks/useSelectedTeenUser.tsx";
import FamilyCenterActivityPurchaseRowUtils from "../FamilyCenterActivityPurchaseRowUtils.tsx";
import FamilyCenterActivityItemPreviewDefault from "FamilyCenterActivityItemPreview.tsx";
import FamilyCenterActivityGiftRowUtils from "../FamilyCenterActivityGiftRowUtils.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4757);
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
const result = size.fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityGiftRow.tsx");

export default function FamilyCenterActivityGiftRow(arg0) {
  ({ skuId, subscriptionPlanId } = arg0);
  ({ price, gifterUserId, claimed, offeredAt, claimedAt } = arg0);
  const tmp = closure_6();
  let product = useCollectiblesDataDefault(skuId).product;
  const teenUserForId = useSelectedTeenUser.useTeenUserForId(gifterUserId);
  let tmp7 = product;
  if (product == null) {
    tmp7 = null;
  }
  const purchaseDisplayInfo = FamilyCenterActivityPurchaseRowUtils.getPurchaseDisplayInfo(tmp7, subscriptionPlanId);
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
    const obj3 = { claimed, price, gifterName: null, offeredAt: null, claimedAt: null };
    let name = null;
    if (null != teenUserForId) {
      name = UserUtilsDefault.getName(teenUserForId);
      const tmp2Result = UserUtilsDefault;
    }
    obj3.gifterName = name;
    obj3.offeredAt = offeredAt;
    obj3.claimedAt = claimedAt;
    const obj4 = { style: tmp.container, children: null };
    const giftSubtext = FamilyCenterActivityGiftRowUtils.getGiftSubtext(obj3);
    const obj5 = { displayName, product: null, isSubscription: null, subscriptionPlanId: null };
    const tmp5Result = FamilyCenterActivityGiftRowUtils;
    if (product == null) {
      product = null;
    }
    obj5.product = product;
    obj5.isSubscription = isSubscription;
    obj5.subscriptionPlanId = subscriptionPlanId;
    const items = [React4(FamilyCenterActivityItemPreviewDefault, obj5)];
    const obj6 = { style: tmp.textContainer, children: null };
    const obj7 = {
      variant: "text-md/semibold",
      color: "interactive-text-active",
      ellipsizeMode: "tail",
      lineClamp: 1,
      children: displayName,
    };
    const items1 = [React4(Text_Text.Text, obj7)];
    const obj8 = { variant: "text-xs/medium", color: "text-muted", children: giftSubtext };
    items1[1] = React4(Text_Text.Text, obj8);
    obj6.children = items1;
    items[1] = hasOwnProperty(View, obj6);
    obj4.children = items;
    return hasOwnProperty(View, obj4);
  }
}
