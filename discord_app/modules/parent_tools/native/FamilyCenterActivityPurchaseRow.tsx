// discord_app/modules/parent_tools/native/FamilyCenterActivityPurchaseRow.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import useCollectiblesDataDefault from "../../collectibles/hooks/useCollectiblesData.tsx";
import getCollectibleTypeName from "../FamilyCenterActivityPurchaseRowUtils.tsx";
import AvatarDecorationPreviewImageDefault from "FamilyCenterActivityItemPreview.tsx";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
({ jsx: c4, jsxs: c5 } = jsxProd);
createCacheKey = { container: null, textContainer: null };
createCacheKey = { display: "flex", flexDirection: "row", alignItems: "center", borderBottomColor: ThemesDefault.colors.BORDER_SUBTLE, borderBottomWidth: 1, paddingVertical: 12 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { display: "flex", flexDirection: "column", flexShrink: 1 };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/parent_tools/native/FamilyCenterActivityPurchaseRow.tsx");

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
    const tmp5Result = tmp5(6028);
    if (null != typeName) {
      const _HermesInternal = HermesInternal;
      combined = "" + displayName + " \u2022 " + typeName;
    }
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj = { displayName: null, product: null, isSubscription: null, subscriptionPlanId: null };
    obj[0] = displayName;
    const formatPriceResult = tmp5(6028).formatPrice(total, currency);
    if (product == null) {
      product = null;
    }
    obj[1] = product;
    obj[2] = isSubscription;
    obj[3] = subscriptionPlanId;
    const items = [closure_4(AvatarDecorationPreviewImageDefault, obj), ];
    obj1 = { style: null, children: null };
    obj1[0] = tmp.textContainer;
    const obj2 = { variant: "text-md/semibold", color: "interactive-text-active", ellipsizeMode: "tail", lineClamp: 1, children: null };
    obj2[4] = combined;
    const items1 = [closure_4(tmp5(4440).Text, obj2), ];
    const obj3 = { variant: "text-xs/medium", color: "text-muted", children: null };
    obj3[2] = formatPriceResult;
    items1[1] = closure_4(tmp5(4440).Text, obj3);
    obj1[1] = items1;
    items[1] = closure_5(View, obj1);
    obj[1] = items;
    return closure_5(View, obj);
  }
  const tmp2 = importDefault;
};