import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { PriceSetAssignmentPurchaseTypes as closure_6 } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
let error;
let metroImportAll;
const require = arg1;
({ Image: c4, View: c5 } = get_ActivityIndicator);
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { container: null, text: null, appInfo: null, appIcon: null };
createCacheKey = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_12, paddingHorizontal: require("Themes").space.PX_16, paddingVertical: require("Themes").space.PX_16, borderWidth: 2, borderColor: require("Themes").colors.BACKGROUND_BRAND, borderRadius: require("Themes").radii.lg, marginHorizontal: require("Themes").space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { flex: 1, gap: require("Themes").space.PX_4 };
let obj1 = { flex: 1, gap: require("Themes").space.PX_4 };
createCacheKey[2] = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_4 };
let obj2 = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_4 };
createCacheKey[3] = { width: 20, height: 20, borderRadius: require("Themes").radii.xs };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj3 = { width: 20, height: 20, borderRadius: require("Themes").radii.xs };
const result = require("ME").fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontGiftProductDetails.tsx");

export default function SocialLayerStorefrontGiftProductDetails(sku) {
  sku = sku.sku;
  let getOrFetchApplication;
  const tmp = createCacheKey();
  let obj = getOrFetchApplication(5525);
  getOrFetchApplication = obj.useGetOrFetchApplication(sku.applicationId);
  let obj1 = getOrFetchApplication(9772);
  obj = { sku, priceSetAssignmentPurchaseType: constants.GIFT };
  const userPrice = obj1.useFormattedSKUPrice(obj).userPrice;
  const items = [getOrFetchApplication];
  const memo = React.useMemo(() => {
    let applicationIconURL = null;
    if (null != getOrFetchApplication) {
      let obj = outer1_1(outer1_2[8]);
      obj = { id: null, icon: null, size: 20 };
      ({ id: obj2[0], icon: obj2[1] } = getOrFetchApplication);
      applicationIconURL = obj.getApplicationIconURL(obj);
    }
    return applicationIconURL;
  }, items);
  obj = { style: tmp.container, children: null };
  const items1 = [callback(importDefault(8056), { sku, size: 55 }), , ];
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
    items2[1] = tmp8(tmp2(4189).Text, obj5);
    obj2[1] = items2;
    tmp6Result = tmp6(tmp7, obj2);
  }
  const items3 = [tmp6Result, callback(getOrFetchApplication(4189).Text, { variant: "text-md/semibold", children: sku.name })];
  obj1[1] = items3;
  items1[1] = closure_8(closure_5, obj1);
  tmp8Result = null != userPrice;
  if (tmp8Result) {
    const obj7 = { variant: "text-md/semibold", children: null };
    obj7[1] = userPrice;
    tmp8Result = tmp8(tmp2(4189).Text, obj7);
  }
  items1[2] = tmp8Result;
  obj[1] = items1;
  return closure_8(closure_5, obj);
};