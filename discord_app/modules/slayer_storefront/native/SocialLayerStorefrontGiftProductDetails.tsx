// === Module 11141: SocialLayerStorefrontGiftProductDetails ===

// Module 11141 (SocialLayerStorefrontGiftProductDetails)
import nativeDefault from "native" /* 576 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1397 */;
import SlayerStorefrontItemCardDefault from "SlayerStorefrontItemCard" /* 8955 */;
import noop from "module_19" /* 19 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const constants = fn(1074).PriceSetAssignmentPurchaseTypes;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4639);
const obj2 = { container: { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_16, borderWidth: 2, borderColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: nativeDefault.radii.lg, marginHorizontal: nativeDefault.space.PX_16 }, text: null, appInfo: null, appIcon: null };
let obj3 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12, paddingHorizontal: nativeDefault.space.PX_16, paddingVertical: nativeDefault.space.PX_16, borderWidth: 2, borderColor: nativeDefault.colors.BACKGROUND_BRAND, borderRadius: nativeDefault.radii.lg, marginHorizontal: nativeDefault.space.PX_16 };
obj2.text = { flex: 1, gap: nativeDefault.space.PX_4 };
let obj4 = { flex: 1, gap: nativeDefault.space.PX_4 };
obj2.appInfo = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let size = { width: 20, height: 20, borderRadius: nativeDefault.radii.xs };
obj2.appIcon = size;
let closure_9 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontGiftProductDetails.tsx");

export default function SocialLayerStorefrontGiftProductDetails(sku) {
  sku = sku.sku;
  let getOrFetchApplication;
  const tmp = closure_9();
  getOrFetchApplication = getOrFetchApplication(7275).useGetOrFetchApplication(sku.applicationId);
  let obj = getOrFetchApplication(7275);
  const userPrice = getOrFetchApplication(10935).useFormattedSKUPrice({ sku, priceSetAssignmentPurchaseType: constants.GIFT }).userPrice;
  const items = [getOrFetchApplication];
  const memo = noop.useMemo(() => {
    let applicationIconURL = null;
    if (null != getOrFetchApplication) {
      ({ id: obj2.id, icon: obj2.icon } = getOrFetchApplication);
      applicationIconURL = AvatarUtilsDefault.getApplicationIconURL({ id: null, icon: null, size: 20 });
      const obj3 = { id: null, icon: null, size: 20 };
    }
    return applicationIconURL;
  }, items);
  const obj4 = { style: tmp.container, children: null };
  const items1 = [closure_7(SlayerStorefrontItemCardDefault, { sku, size: 55 }), , ];
  const obj5 = { style: tmp.text, children: null };
  let tmp6Result = null != getOrFetchApplication;
  if (tmp6Result) {
    const obj6 = { style: tmp.appInfo, children: null };
    let tmp8Result = null != memo;
    if (tmp8Result) {
      const obj7 = { source: null, style: null };
      const obj8 = { uri: memo };
      obj7.source = obj8;
      obj7.style = tmp.appIcon;
      tmp8Result = closure_7(closure_4, obj7);
    }
    const items2 = [tmp8Result, ];
    const obj9 = { variant: "text-sm/medium", color: "text-muted", children: getOrFetchApplication.name };
    items2[1] = closure_7(tmp2(4635).Text, obj9);
    obj6.children = items2;
    tmp6Result = closure_8(closure_5, obj6);
  }
  const items3 = [tmp6Result, closure_7(getOrFetchApplication(4635).Text, { variant: "text-md/semibold", children: sku.name })];
  obj5.children = items3;
  items1[1] = closure_8(closure_5, obj5);
  let tmp8Result2 = null != userPrice;
  if (tmp8Result2) {
    const obj11 = { variant: "text-md/semibold", children: userPrice };
    tmp8Result2 = closure_7(tmp2(4635).Text, obj11);
  }
  items1[2] = tmp8Result2;
  obj4.children = items1;
  return closure_8(closure_5, obj4);
};