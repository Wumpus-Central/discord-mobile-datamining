// discord_app/modules/parent_tools/native/FamilyCenterActivityPurchaseRow.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { useCollectiblesData } from "../../collectibles/hooks/useCollectiblesData.tsx";
import { getCollectibleTypeName } from "../FamilyCenterActivityPurchaseRowUtils.tsx";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: null, textContainer: null };
createCacheKey = { display: "flex", flexDirection: "row", alignItems: "center", borderBottomColor: require("Themes").colors.BORDER_SUBTLE, borderBottomWidth: 1, paddingVertical: 12 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { display: "flex", flexDirection: "column", flexShrink: 1 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityPurchaseRow.tsx");

export default function FamilyCenterActivityPurchaseRow(arg0) {
  let currency;
  let displayName;
  let isSubscription;
  let skuId;
  let subscriptionPlanId;
  let total;
  let typeName;
  ({ skuId, subscriptionPlanId } = arg0);
  ({ total, currency } = arg0);
  const tmp = createCacheKey();
  let product = useCollectiblesData(skuId).product;
  let obj = getCollectibleTypeName;
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
    const tmp5Result = tmp5(5776);
    if (null != typeName) {
      const _HermesInternal = HermesInternal;
      combined = "" + displayName + " \u2022 " + typeName;
    }
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj = { displayName: null, product: null, isSubscription: null, subscriptionPlanId: null };
    obj[0] = displayName;
    const formatPriceResult = tmp5(5776).formatPrice(total, currency);
    if (product == null) {
      product = null;
    }
    obj[1] = product;
    obj[2] = isSubscription;
    obj[3] = subscriptionPlanId;
    const items = [closure_4(tmp2(14064), obj), ];
    const obj1 = { style: null, children: null };
    obj1[0] = tmp.textContainer;
    const obj2 = { variant: "text-md/semibold", color: "interactive-text-active", ellipsizeMode: "tail", lineClamp: 1, children: null };
    obj2[4] = combined;
    const items1 = [closure_4(tmp5(4281).Text, obj2), ];
    const obj3 = { variant: "text-xs/medium", color: "text-muted", children: null };
    obj3[2] = formatPriceResult;
    items1[1] = closure_4(tmp5(4281).Text, obj3);
    obj1[1] = items1;
    items[1] = closure_5(View, obj1);
    obj[1] = items;
    return closure_5(View, obj);
  }
  tmp2 = importDefault;
};