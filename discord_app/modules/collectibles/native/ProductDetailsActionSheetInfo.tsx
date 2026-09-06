// === Module 13145: ProductDetailsActionSheetInfo ===

// Module 13145 (ProductDetailsActionSheetInfo)
import _mod17 from "module_17" /* 17 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1889 */;
import Text_Text from "Text/Text" /* 4556 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7554 */;
import useProductPurchaseState from "useProductPurchaseState" /* 8842 */;
import useProductDescription from "useProductDescription" /* 13146 */;
import InlinePriceTagDefault from "InlinePriceTag" /* 13147 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 4560 */;
import size from "module_2" /* 2 */;

function ProductNameAndDescription(product) {
  product = product.product;
  const tmp = closure_6();
  let obj = { style: tmp.description, children: null };
  const productDescription = obj.useProductDescription(product);
  obj = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.title, accessibilityRole: "header", children: product.name };
  const items = [React4(Text_Text.Text, obj), React4(Text_Text.Text, { variant: "text-md/medium", color: "text-default", children: productDescription })];
  obj.children = items;
  return hasOwnProperty(View, obj);
}
function ProductPurchaseStatus(product) {
  product = product.product;
  let obj = CollectiblesUtils;
  const result = obj.isPremiumCollectiblesProduct(product);
  let obj1 = useProductPurchaseState;
  const productPurchaseState = obj1.useProductPurchaseState(product);
  if (productPurchaseState.isPurchased) {
    obj = { variant: "text-md/semibold", color: "interactive-text-active", children: null };
    const intl2 = util.intl;
    obj.children = intl2.string(util.t["6cfuDj"]);
    let children = React4(Text_Text.Text, obj);
  } else if (tmp5) {
    obj = { variant: "text-md/semibold", color: "interactive-text-active", children: null };
    const intl = util.intl;
    obj.children = intl.string(util.t.BEjTij);
    children = React4(Text_Text.Text, obj);
  } else {
    children = !result;
    if (!result) {
      obj1 = { product, onTrackPress: product.onTrackPress };
      children = React4(InlinePriceTagDefault, obj1);
    }
  }
  return React4(View, { children });
}
function BundleProductDetailsActionSheetInfo(arg0) {
  ({ product, onTrackPress } = arg0);
  const obj = { style: null, children: React4(ProductPurchaseStatus, { product, onTrackPress }) };
  const items = [, ];
  ({ body: arr[0], bundleBody: arr[1] } = closure_6());
  obj.style = items;
  return React4(View, obj);
}
const View = _mod17.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let obj = { title: { marginBottom: 2 }, body: null, bundleBody: null, description: null };
obj = { marginTop: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16, flexDirection: "column", gap: 20 };
obj.body = obj;
obj.bundleBody = { marginTop: 0 };
obj.description = { flexDirection: "column", gap: 6 };
let closure_6 = createStyles.createStyles(obj);
let result = size.fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheetInfo.tsx");

export default function ProductDetailsActionSheetInfo(arg0) {
  ({ product, onTrackPress } = arg0);
  if (product.type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
    let obj = { product, onTrackPress };
    let tmp7 = React4(BundleProductDetailsActionSheetInfo, obj);
  } else {
    obj = { style: tmp.body, children: null };
    obj = { product };
    const items = [React4(ProductNameAndDescription, obj), ];
    const obj1 = { product, onTrackPress };
    items[1] = React4(ProductPurchaseStatus, obj1);
    obj.children = items;
    tmp7 = hasOwnProperty(View, obj);
  }
  return tmp7;
};