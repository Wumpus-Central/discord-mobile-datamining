// === Module 9578: ProductNameAndDescription ===

// Module 9578 (ProductNameAndDescription)
import obj132 from "obj132" /* 2 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1949 */;
import Text from "Text" /* 4734 */;
import getItemRecordsFromPurchases from "getItemRecordsFromPurchases" /* 5313 */;
import getProductPurchaseState from "getProductPurchaseState" /* 9243 */;
import getBundleDescription from "getBundleDescription" /* 9579 */;
import PriceTagDefault from "PriceTag" /* 9580 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

function ProductNameAndDescription(product) {
  product = product.product;
  const tmp = callback3();
  let obj = { style: tmp.description, children: null };
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
    const intl2 = getSystemLocale.intl;
    obj[2] = intl2.string(getSystemLocale.t["6cfuDj"]);
    let children = callback(Text.Text, obj);
  } else if (tmp5) {
    obj = { variant: "text-md/semibold", color: "interactive-text-active", children: null };
    const intl = getSystemLocale.intl;
    obj[2] = intl.string(getSystemLocale.t.BEjTij);
    children = callback(Text.Text, obj);
  } else {
    children = !result;
    if (!result) {
      obj1 = { product: null, onTrackPress: null };
      obj1[0] = product;
      obj1[1] = product.onTrackPress;
      children = callback(PriceTagDefault, obj1);
    }
  }
  return callback(View, { children });
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
let obj = { marginTop: ThemesDefault.space.PX_24, marginHorizontal: ThemesDefault.space.PX_16, flexDirection: "column", gap: 20 };
obj[1] = obj;
obj[2] = { marginTop: 0 };
obj[3] = { flexDirection: "column", gap: 6 };
let closure_6 = createCacheKey.createStyles(obj);
let result = obj132.fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheetInfo.tsx");

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