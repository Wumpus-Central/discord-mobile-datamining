import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: null, textContainer: null };
createCacheKey = { display: "flex", flexDirection: "row", alignItems: "center", borderBottomColor: require("Themes").colors.BORDER_SUBTLE, borderBottomWidth: 1, paddingVertical: 12 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { display: "flex", flexDirection: "column", flexShrink: 1 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityGiftRow.tsx");

export default function FamilyCenterActivityGiftRow(arg0) {
  let claimed;
  let claimedAt;
  let displayName;
  let gifterUserId;
  let isSubscription;
  let offeredAt;
  let price;
  let skuId;
  let subscriptionPlanId;
  ({ skuId, subscriptionPlanId } = arg0);
  ({ price, gifterUserId, claimed, offeredAt, claimedAt } = arg0);
  const tmp = createCacheKey();
  let product = importDefault(8088)(skuId).product;
  let obj = require(14044) /* useSelectedTeenUser */;
  const teenUserForId = obj.useTeenUserForId(gifterUserId);
  let obj1 = require(14053) /* getCollectibleTypeName */;
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
    obj = { claimed: null, price: null, gifterName: null, offeredAt: null, claimedAt: null };
    obj[0] = claimed;
    obj[1] = price;
    let name = null;
    if (null != teenUserForId) {
      let tmp2Result = tmp2(4124);
      name = tmp2Result.getName(teenUserForId);
    }
    obj[2] = name;
    obj[3] = offeredAt;
    obj[4] = claimedAt;
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    const giftSubtext = tmp5(14055).getGiftSubtext(obj);
    obj1 = { displayName: null, product: null, isSubscription: null, subscriptionPlanId: null };
    obj1[0] = displayName;
    tmp2Result = tmp2(14054);
    if (product == null) {
      product = null;
    }
    obj1[1] = product;
    obj1[2] = isSubscription;
    obj1[3] = subscriptionPlanId;
    const items = [closure_4(tmp2Result, obj1), ];
    const obj2 = { style: null, children: null };
    obj2[0] = tmp.textContainer;
    const obj3 = { variant: "text-md/semibold", color: "interactive-text-active", ellipsizeMode: "tail", lineClamp: 1, children: null };
    obj3[4] = displayName;
    const items1 = [closure_4(tmp5(4281).Text, obj3), ];
    const obj4 = { variant: "text-xs/medium", color: "text-muted", children: null };
    obj4[2] = giftSubtext;
    items1[1] = closure_4(tmp5(4281).Text, obj4);
    obj2[1] = items1;
    items[1] = closure_5(View, obj2);
    obj[1] = items;
    return closure_5(View, obj);
  }
};