// discord_app/modules/collectibles/native/ProductDetailsActionSheetInfo.tsx
import set from "../../../../_runtime/00002_set.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import CollectiblesItemType from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import getItemRecordsFromPurchases from "../CollectiblesUtils.tsx";
import getProductPurchaseState from "../hooks/useProductPurchaseState.tsx";
import getBundleDescription from "../hooks/useProductDescription.tsx";
import PriceTagDefault from "InlinePriceTag.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

function ProductNameAndDescription(product) {
  product = product.product;
  const tmp = callback3();
  let obj = getBundleDescription;
  obj = { style: tmp.description, children: null };
  const productDescription = obj.useProductDescription(product);
  obj = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.title, accessibilityRole: "header", children: product.name };
  const items = [callback(Text.Text, obj), callback(Text.Text, { variant: "text-md/medium", color: "text-default", children: productDescription })];
  obj[1] = items;
  return callback2(View, obj);
}
function ProductPurchaseStatus(product) {
  product = product.product;
  let obj = getItemRecordsFromPurchases;
  const result = obj.isPremiumCollectiblesProduct(product);
  obj1 = getProductPurchaseState;
  const productPurchaseState = obj1.useProductPurchaseState(product);
  if (productPurchaseState.isPurchased) {
    obj = { variant: "text-md/semibold", color: "interactive-text-active", children: null };
    const intl2 = tmp(1236).intl;
    obj[2] = intl2.string(tmp(1236).t["6cfuDj"]);
    let children = tmp6(tmp(4474).Text, obj);
  } else if (tmp5) {
    obj = { variant: "text-md/semibold", color: "interactive-text-active", children: null };
    const intl = tmp(1236).intl;
    obj[2] = intl.string(tmp(1236).t.BEjTij);
    children = tmp6(tmp(4474).Text, obj);
  } else {
    children = !result;
    if (!result) {
      obj1 = { product: null, onTrackPress: null };
      obj1[0] = product;
      obj1[1] = product.onTrackPress;
      children = tmp6(PriceTagDefault, obj1);
    }
  }
  return closure_4(View, { children });
}
function BundleProductDetailsActionSheetInfo(arg0) {
  ({ product, onTrackPress } = arg0);
  const tmp = callback3();
  const items = [, ];
  ({ body: arr[0], bundleBody: arr[1] } = tmp);
  return callback(View, { style: items, children: callback(ProductPurchaseStatus, { product, onTrackPress }) });
}
const View = get_ActivityIndicator.View;
({ jsx: c4, jsxs: c5 } = jsxProd);
let obj = { title: { marginBottom: 2 }, body: null, bundleBody: null, description: null };
obj = { marginTop: ThemesDefault.space.PX_24, marginHorizontal: ThemesDefault.space.PX_16, flexDirection: "column", gap: 20 };
obj[1] = obj;
obj[2] = { marginTop: 0 };
obj[3] = { flexDirection: "column", gap: 6 };
let closure_6 = createCacheKey.createStyles(obj);
let result = set.fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheetInfo.tsx");

export default function ProductDetailsActionSheetInfo(arg0) {
  ({ product, onTrackPress } = arg0);
  if (product.type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
    let obj = { product: null, onTrackPress: null };
    obj[0] = product;
    obj[1] = onTrackPress;
    let tmp7 = callback(BundleProductDetailsActionSheetInfo, obj);
  } else {
    obj = { style: null, children: null };
    obj[0] = tmp.body;
    obj = { product: null };
    obj[0] = product;
    const items = [callback(ProductNameAndDescription, obj), ];
    obj1 = { product: null, onTrackPress: null };
    obj1[0] = product;
    obj1[1] = onTrackPress;
    items[1] = callback(ProductPurchaseStatus, obj1);
    obj[1] = items;
    tmp7 = callback2(View, obj);
  }
  return tmp7;
};