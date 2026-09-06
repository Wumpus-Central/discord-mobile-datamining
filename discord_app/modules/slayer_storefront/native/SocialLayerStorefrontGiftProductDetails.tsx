// discord_app/modules/slayer_storefront/native/SocialLayerStorefrontGiftProductDetails.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import AvatarUtilsDefault from "../../../utils/AvatarUtils.tsx";
import SlayerStorefrontItemCardDefault from "SlayerStorefrontItemCard.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
get_ActivityIndicator = fn(17);
({ Image: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const constants = fn(1074).PriceSetAssignmentPurchaseTypes;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
fn(4560);
let createStyles = { container: null, text: null, appInfo: null, appIcon: null };
createStyles = {
  flexDirection: "row",
  alignItems: "center",
  gap: nativeDefault.space.PX_12,
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingVertical: nativeDefault.space.PX_16,
  borderWidth: 2,
  borderColor: nativeDefault.colors.BACKGROUND_BRAND,
  borderRadius: nativeDefault.radii.lg,
  marginHorizontal: nativeDefault.space.PX_16,
};
createStyles.container = createStyles;
createStyles.text = { flex: 1, gap: nativeDefault.space.PX_4 };
let obj1 = { flex: 1, gap: nativeDefault.space.PX_4 };
createStyles.appInfo = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
let size = { width: 20, height: 20, borderRadius: nativeDefault.radii.xs };
createStyles.appIcon = size;
let closure_9 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/slayer_storefront/native/SocialLayerStorefrontGiftProductDetails.tsx",
);

export default function SocialLayerStorefrontGiftProductDetails(sku) {
  sku = sku.sku;
  let getOrFetchApplication;
  const tmp = closure_9();
  let obj = getOrFetchApplication(7168);
  getOrFetchApplication = obj.useGetOrFetchApplication(sku.applicationId);
  let obj1 = getOrFetchApplication(10802);
  obj = { sku, priceSetAssignmentPurchaseType: constants.GIFT };
  const userPrice = obj1.useFormattedSKUPrice(obj).userPrice;
  const items = [getOrFetchApplication];
  const memo = noop.useMemo(() => {
    let applicationIconURL = null;
    if (null != getOrFetchApplication) {
      const obj = { id: null, icon: null, size: 20 };
      ({ id: obj2.id, icon: obj2.icon } = getOrFetchApplication);
      applicationIconURL = obj.getApplicationIconURL(obj);
    }
    return applicationIconURL;
  }, items);
  obj = { style: tmp.container, children: null };
  const items1 = [closure_7(SlayerStorefrontItemCardDefault, { sku, size: 55 }), ,];
  obj1 = { style: tmp.text, children: null };
  let tmp6Result = null != getOrFetchApplication;
  if (tmp6Result) {
    const obj2 = { style: tmp.appInfo, children: null };
    let tmp8Result = null != memo;
    if (tmp8Result) {
      const obj3 = { source: null, style: null };
      const obj4 = { uri: memo };
      obj3.source = obj4;
      obj3.style = tmp.appIcon;
      tmp8Result = tmp8(closure_4, obj3);
    }
    const items2 = [tmp8Result];
    const obj5 = { variant: "text-sm/medium", color: "text-muted", children: getOrFetchApplication.name };
    items2[1] = tmp8(tmp2(4556).Text, obj5);
    obj2.children = items2;
    tmp6Result = tmp6(tmp7, obj2);
  }
  const items3 = [
    tmp6Result,
    closure_7(getOrFetchApplication(4556).Text, { variant: "text-md/semibold", children: sku.name }),
  ];
  obj1.children = items3;
  items1[1] = closure_8(closure_5, obj1);
  tmp8Result = null != userPrice;
  if (tmp8Result) {
    const obj7 = { variant: "text-md/semibold", children: userPrice };
    tmp8Result = tmp8(tmp2(4556).Text, obj7);
  }
  items1[2] = tmp8Result;
  obj.children = items1;
  return closure_8(closure_5, obj);
}
