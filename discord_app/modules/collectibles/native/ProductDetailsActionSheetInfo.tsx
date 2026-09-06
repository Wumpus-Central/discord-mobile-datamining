// discord_app/modules/collectibles/native/ProductDetailsActionSheetInfo.tsx
import _mod17 from "../../../../_runtime/metro/00017__.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import CollectiblesItemType from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import CollectiblesUtils from "../CollectiblesUtils.tsx";
import useProductPurchaseState from "../hooks/useProductPurchaseState.tsx";
import useProductDescription from "../hooks/useProductDescription.tsx";
import InlinePriceTagDefault from "InlinePriceTag.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../_runtime/metro/00002__.js";

function ProductNameAndDescription(product) {
  product = product.product;
  const tmp = closure_6();
  let obj = { style: tmp.description, children: null };
  const productDescription = obj.useProductDescription(product);
  obj = {
    variant: "heading-xl/bold",
    color: "mobile-text-heading-primary",
    style: tmp.title,
    accessibilityRole: "header",
    children: product.name,
  };
  const items = [
    React4(Text_Text.Text, obj),
    React4(Text_Text.Text, { variant: "text-md/medium", color: "text-default", children: productDescription }),
  ];
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
  const items = [,];
  ({ body: arr[0], bundleBody: arr[1] } = closure_6());
  obj.style = items;
  return React4(View, obj);
}
const View = _mod17.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let obj = { title: { marginBottom: 2 }, body: null, bundleBody: null, description: null };
obj = {
  marginTop: nativeDefault.space.PX_24,
  marginHorizontal: nativeDefault.space.PX_16,
  flexDirection: "column",
  gap: 20,
};
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
    const items = [React4(ProductNameAndDescription, obj)];
    const obj1 = { product, onTrackPress };
    items[1] = React4(ProductPurchaseStatus, obj1);
    obj.children = items;
    tmp7 = hasOwnProperty(View, obj);
  }
  return tmp7;
}
