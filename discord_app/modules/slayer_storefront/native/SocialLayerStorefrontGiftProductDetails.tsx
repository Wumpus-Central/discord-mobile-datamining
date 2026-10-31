// === Module 14409: SocialLayerStorefrontGiftProductDetails ===

// Module 14409 (SocialLayerStorefrontGiftProductDetails)
import nativeDefault from "native" /* 575 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1409 */;
import FastImageDefault from "FastImage" /* 5717 */;
import SlayerStorefrontItemCardDefault from "SlayerStorefrontItemCard" /* 9521 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const constants = fn(1072).PriceSetAssignmentPurchaseTypes;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5014);
const obj2 = { container: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_16, borderWidth: 2, borderColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: nativeDefault.radii.lg, marginHorizontal: nativeDefault.space.PX_16 }, text: null, appInfo: null, appIcon: null };
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_16, borderWidth: 2, borderColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: nativeDefault.radii.lg, marginHorizontal: nativeDefault.space.PX_16 };
obj2.text = { flex: 1, gap: nativeDefault.space.PX_4 };
let obj4 = { flex: 1, gap: nativeDefault.space.PX_4 };
obj2.appInfo = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let size = { width: 20, height: 20, borderRadius: nativeDefault.radii.xs };
obj2.appIcon = size;
let closure_8 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontGiftProductDetails.tsx");

export default function SocialLayerStorefrontGiftProductDetails(sku) {
  sku = sku.sku;
  let getOrFetchApplication;
  const tmp = closure_8();
  getOrFetchApplication = getOrFetchApplication(7330).useGetOrFetchApplication(sku.applicationId);
  let obj = getOrFetchApplication(7330);
  const userPrice = getOrFetchApplication(10674).useFormattedSKUPrice({ sku, priceSetAssignmentPurchaseType: constants.GIFT }).userPrice;
  const items = [getOrFetchApplication];
  const memo = noop.useMemo(() => {
    let applicationIconSource = null;
    if (null != getOrFetchApplication) {
      ({ id: obj2.id, icon: obj2.icon } = getOrFetchApplication);
      applicationIconSource = AvatarUtilsDefault.getApplicationIconSource({ id: null, icon: null, size: 20 });
      const obj3 = { id: null, icon: null, size: 20 };
    }
    return applicationIconSource;
  }, items);
  const obj4 = { style: tmp.container, children: null };
  const items1 = [closure_6(SlayerStorefrontItemCardDefault, { sku, size: 55 }), , ];
  const obj5 = { style: tmp.text, children: null };
  let tmp6Result = null != getOrFetchApplication;
  if (tmp6Result) {
    const obj6 = { style: tmp.appInfo, children: null };
    let tmp8Result = null != memo;
    if (tmp8Result) {
      const obj7 = { source: memo, style: tmp.appIcon };
      tmp8Result = closure_6(FastImageDefault, obj7);
    }
    const items2 = [tmp8Result, ];
    const obj8 = { variant: "text-sm/medium", color: "text-muted", children: getOrFetchApplication.name };
    items2[1] = closure_6(tmp2(5624).Text, obj8);
    obj6.children = items2;
    tmp6Result = closure_7(View, obj6);
  }
  const items3 = [tmp6Result, closure_6(getOrFetchApplication(5624).Text, { variant: "text-md/semibold", children: sku.name })];
  obj5.children = items3;
  items1[1] = closure_7(View, obj5);
  let tmp8Result2 = null != userPrice;
  if (tmp8Result2) {
    const obj10 = { variant: "text-md/semibold", children: userPrice };
    tmp8Result2 = closure_6(tmp2(5624).Text, obj10);
  }
  items1[2] = tmp8Result2;
  obj4.children = items1;
  return closure_7(View, obj4);
};