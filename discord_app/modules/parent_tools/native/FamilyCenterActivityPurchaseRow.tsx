// === Module 14258: FamilyCenterActivityPurchaseRow ===

// Module 14258 (FamilyCenterActivityPurchaseRow)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import Text from "Text" /* 4734 */;
import formatSingleCurrencyPrice from "formatSingleCurrencyPrice" /* 5316 */;
import useCollectiblesDataDefault from "useCollectiblesData" /* 8387 */;
import getCollectibleTypeName from "getCollectibleTypeName" /* 14259 */;
import AvatarDecorationPreviewImageDefault from "AvatarDecorationPreviewImage" /* 14260 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
const createCacheKey = { display: "flex", flexDirection: "row", alignItems: "center", borderBottomColor: ThemesDefault.colors.BORDER_SUBTLE, borderBottomWidth: 1, paddingVertical: 12 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { display: "flex", flexDirection: "column", flexShrink: 1 };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityPurchaseRow.tsx");

export default function FamilyCenterActivityPurchaseRow(arg0) {
  ({ skuId, subscriptionPlanId } = arg0);
  ({ total, currency } = arg0);
  const tmp = callback();
  let product = useCollectiblesDataDefault(skuId).product;
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
    const tmp5Result = formatSingleCurrencyPrice;
    if (null != typeName) {
      const _HermesInternal = HermesInternal;
      combined = "" + displayName + " \u2022 " + typeName;
    }
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj = { displayName: null, product: null, isSubscription: null, subscriptionPlanId: null };
    obj[0] = displayName;
    const formatPriceResult = formatSingleCurrencyPrice.formatPrice(total, currency);
    if (product == null) {
      product = null;
    }
    obj[1] = product;
    obj[2] = isSubscription;
    obj[3] = subscriptionPlanId;
    const items = [callback(AvatarDecorationPreviewImageDefault, obj), ];
    obj1 = { style: null, children: null };
    obj1[0] = tmp.textContainer;
    const obj2 = { variant: "text-md/semibold", color: "interactive-text-active", ellipsizeMode: "tail", lineClamp: 1, children: null };
    obj2[4] = combined;
    const items1 = [callback(Text.Text, obj2), ];
    const obj3 = { variant: "text-xs/medium", color: "text-muted", children: null };
    obj3[2] = formatPriceResult;
    items1[1] = callback(Text.Text, obj3);
    obj1[1] = items1;
    items[1] = callback2(View, obj1);
    obj[1] = items;
    return callback2(View, obj);
  }
};