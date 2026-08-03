import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
function ProductNameAndDescription(product) {
  product = product.product;
  const tmp = callback3();
  let obj = require(8944) /* getBundleDescription */;
  obj = { style: tmp.description, children: null };
  const productDescription = obj.useProductDescription(product);
  obj = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.title, accessibilityRole: "header", children: product.name };
  const items = [callback(require(4251) /* Text */.Text, obj), callback(require(4251) /* Text */.Text, { variant: "text-md/medium", color: "text-default", children: productDescription })];
  obj[1] = items;
  return callback2(View, obj);
}
function ProductPurchaseStatus(product) {
  product = product.product;
  let obj = require(6910) /* getItemRecordsFromPurchases */;
  const result = obj.isPremiumCollectiblesProduct(product);
  let obj1 = require(8896) /* getProductPurchaseState */;
  const productPurchaseState = obj1.useProductPurchaseState(product);
  if (productPurchaseState.isPurchased) {
    obj = { variant: "text-md/semibold", color: "interactive-text-active", children: null };
    const intl2 = tmp(1236).intl;
    obj[2] = intl2.string(tmp(1236).t["6cfuDj"]);
    let children = tmp6(tmp(4251).Text, obj);
  } else if (tmp5) {
    obj = { variant: "text-md/semibold", color: "interactive-text-active", children: null };
    const intl = tmp(1236).intl;
    obj[2] = intl.string(tmp(1236).t.BEjTij);
    children = tmp6(tmp(4251).Text, obj);
  } else {
    children = !result;
    if (!result) {
      obj1 = { product: null, onTrackPress: null };
      obj1[0] = product;
      obj1[1] = product.onTrackPress;
      children = tmp6(importDefault(8945), obj1);
    }
  }
  return closure_4(View, { children });
}
function BundleProductDetailsActionSheetInfo(onTrackPress) {
  const product = onTrackPress.product;
  const tmp = callback3();
  let obj = require(8409) /* useCollectiblesMobileFlexibleBundlesExperiment */;
  const enabled = obj.useCollectiblesMobileFlexibleBundlesExperiment("BundleProductDetailsActionSheetInfo").enabled;
  const items = [tmp.body, ];
  let bundleBody = enabled;
  if (enabled) {
    bundleBody = tmp.bundleBody;
  }
  obj = { style: items, children: null };
  items[1] = bundleBody;
  let tmp4 = !enabled;
  if (!enabled) {
    obj = { product: null };
    obj[0] = product;
    tmp4 = callback(ProductNameAndDescription, obj);
  }
  const items1 = [tmp4, callback(ProductPurchaseStatus, { product, onTrackPress: onTrackPress.onTrackPress })];
  obj[1] = items1;
  return closure_5(View, obj);
}
({ jsx: c4, jsxs: c5 } = jsxProd);
let obj = { title: { marginBottom: 2 }, body: null, bundleBody: null, description: null };
obj = { marginTop: require("Themes").space.PX_24, marginHorizontal: require("Themes").space.PX_16, flexDirection: "column", gap: 20 };
obj[1] = obj;
obj[2] = { marginTop: 0 };
obj[3] = { flexDirection: "column", gap: 6 };
let closure_6 = createCacheKey.createStyles(obj);
let result = require("createCacheKey").fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheetInfo.tsx");

export default function ProductDetailsActionSheetInfo(arg0) {
  let onTrackPress;
  let product;
  ({ product, onTrackPress } = arg0);
  if (product.type === require(1901) /* CollectiblesItemType */.CollectiblesItemType.BUNDLE) {
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
    const obj1 = { product: null, onTrackPress: null };
    obj1[0] = product;
    obj1[1] = onTrackPress;
    items[1] = callback(ProductPurchaseStatus, obj1);
    obj[1] = items;
    tmp7 = callback2(View, obj);
  }
  return tmp7;
};