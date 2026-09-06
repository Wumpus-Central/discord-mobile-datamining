// === Module 11002: SocialLayerStorefrontGiftProductDetails ===

// Module 11002 (SocialLayerStorefrontGiftProductDetails)
import ThemesDefault from "Themes" /* 576 */;
import SlayerStorefrontItemCardDefault from "SlayerStorefrontItemCard" /* 8825 */;
import closure_3 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { PriceSetAssignmentPurchaseTypes as closure_6 } from "ME" /* 1074 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

const require = arg1;
({ Image: c4, View: c5 } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8 } = jsxProd);
createCacheKey = { container: null, text: null, appInfo: null, appIcon: null };
createCacheKey = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_12, paddingHorizontal: ThemesDefault.space.PX_16, paddingVertical: ThemesDefault.space.PX_16, borderWidth: 2, borderColor: ThemesDefault.colors.BACKGROUND_BRAND, borderRadius: ThemesDefault.radii.lg, marginHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, gap: ThemesDefault.space.PX_4 };
let obj1 = { flex: 1, gap: ThemesDefault.space.PX_4 };
createCacheKey[2] = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4 };
let obj2 = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4 };
createCacheKey[3] = { width: 20, height: 20, borderRadius: ThemesDefault.radii.xs };
let closure_9 = createCacheKey.createStyles(createCacheKey);
let obj3 = { width: 20, height: 20, borderRadius: ThemesDefault.radii.xs };
const result = require("set").fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontGiftProductDetails.tsx");

export default function SocialLayerStorefrontGiftProductDetails(sku) {
  sku = sku.sku;
  let getOrFetchApplication;
  const tmp = callback2();
  let obj = getOrFetchApplication(7168);
  getOrFetchApplication = obj.useGetOrFetchApplication(sku.applicationId);
  obj1 = getOrFetchApplication(10802);
  obj = { sku, priceSetAssignmentPurchaseType: constants.GIFT };
  const userPrice = obj1.useFormattedSKUPrice(obj).userPrice;
  const items = [getOrFetchApplication];
  const memo = React.useMemo(() => {
    let applicationIconURL = null;
    if (null != getOrFetchApplication) {
      let obj = closure_1_1(closure_1_2[8]);
      obj = { id: null, icon: null, size: 20 };
      ({ id: obj2[0], icon: obj2[1] } = getOrFetchApplication);
      applicationIconURL = obj.getApplicationIconURL(obj);
    }
    return applicationIconURL;
  }, items);
  obj = { style: tmp.container, children: null };
  const items1 = [callback(SlayerStorefrontItemCardDefault, { sku, size: 55 }), , ];
  obj1 = { style: tmp.text, children: null };
  let tmp6Result = null != getOrFetchApplication;
  if (tmp6Result) {
    const obj2 = { style: null, children: null };
    obj2[0] = tmp.appInfo;
    let tmp8Result = null != memo;
    if (tmp8Result) {
      const obj3 = { source: null, style: null };
      const obj4 = { uri: null };
      obj4[0] = memo;
      obj3[0] = obj4;
      obj3[1] = tmp.appIcon;
      tmp8Result = tmp8(closure_4, obj3);
    }
    const items2 = [tmp8Result, ];
    const obj5 = { variant: "text-sm/medium", color: "text-muted", children: null };
    obj5[2] = getOrFetchApplication.name;
    items2[1] = tmp8(tmp2(4556).Text, obj5);
    obj2[1] = items2;
    tmp6Result = tmp6(tmp7, obj2);
  }
  const items3 = [tmp6Result, callback(getOrFetchApplication(4556).Text, { variant: "text-md/semibold", children: sku.name })];
  obj1[1] = items3;
  items1[1] = closure_8(closure_5, obj1);
  tmp8Result = null != userPrice;
  if (tmp8Result) {
    const obj7 = { variant: "text-md/semibold", children: null };
    obj7[1] = userPrice;
    tmp8Result = tmp8(tmp2(4556).Text, obj7);
  }
  items1[2] = tmp8Result;
  obj[1] = items1;
  return closure_8(closure_5, obj);
};