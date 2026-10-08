// === Module 13275: ProductDetailsActionSheetInfo ===

// Module 13275 (ProductDetailsActionSheetInfo)
import _mod17 from "module_17" /* 17 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1992 */;
import Text_Text from "Text/Text" /* 5086 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7264 */;
import useProductPurchaseState from "useProductPurchaseState" /* 9014 */;
import useProductDescription from "useProductDescription" /* 13276 */;
import InlinePriceTagDefault from "InlinePriceTag" /* 13277 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let obj = { title: { marginBottom: 2 }, body: { marginTop: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16, flexDirection: "column", gap: 20 }, bundleBody: { marginTop: 0 }, description: { flexDirection: "column", gap: 6 } };
let closure_6 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? (function ProductNameAndDescription(product) {
  const cResult = c.c(9);
  product = product.product;
  const tmp4 = closure_6();
  const productDescription = useProductDescription.useProductDescription(product);
  if (cResult[0] === product.name) {
    if (cResult[1] === tmp4.title) {
      let tmp6 = cResult[2];
    }
    if (cResult[3] !== productDescription) {
      const obj3 = { variant: "text-md/medium", color: "text-default", children: productDescription };
      const tmp10 = React4(Text_Text.Text, obj3);
      cResult[3] = productDescription;
      cResult[4] = tmp10;
      let tmp8 = tmp10;
    } else {
      tmp8 = cResult[4];
    }
    if (cResult[5] === tmp4.description) {
      if (cResult[6] === tmp6) {
        if (cResult[7] === tmp8) {
          let tmp11 = cResult[8];
        }
        return tmp11;
      }
    }
    const obj4 = { style: tmp4.description, children: null };
    const items = [tmp6, tmp8];
    obj4.children = items;
    const tmp14 = hasOwnProperty(View, obj4);
    cResult[5] = tmp4.description;
    cResult[6] = tmp6;
    cResult[7] = tmp8;
    cResult[8] = tmp14;
    tmp11 = tmp14;
  }
  const tmp7 = React4(Text_Text.Text, { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp4.title, accessibilityRole: "header", children: product.name });
  cResult[0] = product.name;
  cResult[1] = tmp4.title;
  cResult[2] = tmp7;
  tmp6 = tmp7;
  const obj5 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp4.title, accessibilityRole: "header", children: product.name };
}) : (function ProductNameAndDescription(product) {
  product = product.product;
  const tmp = closure_6();
  const obj2 = { style: tmp.description, children: null };
  const productDescription = useProductDescription.useProductDescription(product);
  const items = [React4(Text_Text.Text, { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.title, accessibilityRole: "header", children: product.name }), React4(Text_Text.Text, { variant: "text-md/medium", color: "text-default", children: productDescription })];
  obj2.children = items;
  return hasOwnProperty(View, obj2);
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (function ProductPurchaseStatus(arg0) {
  let stringResult = dependencyMap;
  const cResult = c.c(10);
  ({ product, onTrackPress } = arg0);
  if (cResult[0] !== product) {
    const result = CollectiblesUtils.isPremiumCollectiblesProduct(product);
    cResult[0] = product;
    cResult[1] = result;
    let tmp4 = result;
    const tmpResult = CollectiblesUtils;
  } else {
    tmp4 = cResult[1];
  }
  const productPurchaseState = useProductPurchaseState.useProductPurchaseState(product);
  ({ isPurchased, isPartiallyOwnedBundle } = productPurchaseState);
  if (cResult[2] === isPartiallyOwnedBundle) {
    if (cResult[3] === tmp4) {
      if (cResult[4] === isPurchased) {
        if (cResult[5] === onTrackPress) {
          if (cResult[6] === product) {
            if (cResult[8] !== cResult[7]) {
              const obj2 = { children: tmp7 };
              const tmp16 = React4(View, obj2);
              cResult[8] = tmp7;
              cResult[9] = tmp16;
              let tmp13 = tmp16;
            } else {
              tmp13 = cResult[9];
            }
            return tmp13;
          }
        }
      }
    }
  }
  if (isPurchased) {
    const obj3 = { variant: "text-md/semibold", color: "interactive-text-active", children: null };
    const intl2 = util.intl;
    stringResult = intl2.string(util.t["6cfuDj"]);
    obj3.children = stringResult;
    let tmp8 = React4(Text_Text.Text, obj3);
  } else if (isPartiallyOwnedBundle) {
    const obj4 = { variant: "text-md/semibold", color: "interactive-text-active", children: null };
    const intl = util.intl;
    obj4.children = intl.string(util.t.BEjTij);
    tmp8 = React4(Text_Text.Text, obj4);
  } else {
    tmp8 = !tmp4;
    if (!tmp4) {
      const obj5 = { product, onTrackPress };
      tmp8 = React4(InlinePriceTagDefault, obj5);
    }
  }
  cResult[2] = isPartiallyOwnedBundle;
  cResult[3] = tmp4;
  cResult[4] = isPurchased;
  cResult[5] = onTrackPress;
  cResult[6] = product;
  cResult[7] = tmp8;
  const tmpResult2 = useProductPurchaseState;
}) : (function ProductPurchaseStatus(product) {
  product = product.product;
  const result = CollectiblesUtils.isPremiumCollectiblesProduct(product);
  const productPurchaseState = useProductPurchaseState.useProductPurchaseState(product);
  if (productPurchaseState.isPurchased) {
    const obj3 = { variant: "text-md/semibold", color: "interactive-text-active", children: null };
    const intl2 = util.intl;
    obj3.children = intl2.string(util.t["6cfuDj"]);
    let children = React4(Text_Text.Text, obj3);
  } else if (tmp5) {
    const obj4 = { variant: "text-md/semibold", color: "interactive-text-active", children: null };
    const intl = util.intl;
    obj4.children = intl.string(util.t.BEjTij);
    children = React4(Text_Text.Text, obj4);
  } else {
    children = !result;
    if (!result) {
      const obj5 = { product, onTrackPress: product.onTrackPress };
      children = React4(InlinePriceTagDefault, obj5);
    }
  }
  return React4(View, { children });
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? (function BundleProductDetailsActionSheetInfo(arg0) {
  const cResult = c.c(9);
  ({ product, onTrackPress } = arg0);
  const tmp2 = closure_6();
  if (cResult[0] === tmp2.body) {
    if (cResult[1] === tmp2.bundleBody) {
      let tmp3 = cResult[2];
    }
    if (cResult[3] === onTrackPress) {
      if (cResult[4] === product) {
        let tmp4 = cResult[5];
      }
      if (cResult[6] === tmp3) {
        if (cResult[7] === tmp4) {
          let tmp8 = cResult[8];
        }
        return tmp8;
      }
      const obj2 = { style: tmp3, children: tmp4 };
      const tmp11 = React4(View, obj2);
      cResult[6] = tmp3;
      cResult[7] = tmp4;
      cResult[8] = tmp11;
      tmp8 = tmp11;
    }
    const obj3 = { product, onTrackPress };
    const tmp7 = React4(closure_8, obj3);
    cResult[3] = onTrackPress;
    cResult[4] = product;
    cResult[5] = tmp7;
    tmp4 = tmp7;
  }
  const items = [, ];
  ({ body: arr[0], bundleBody: arr[1] } = tmp2);
  cResult[0] = tmp2.body;
  cResult[1] = tmp2.bundleBody;
  cResult[2] = items;
  tmp3 = items;
}) : (function BundleProductDetailsActionSheetInfo(arg0) {
  ({ product, onTrackPress } = arg0);
  const obj = { style: null, children: React4(closure_8, { product, onTrackPress }) };
  const items = [, ];
  ({ body: arr[0], bundleBody: arr[1] } = closure_6());
  obj.style = items;
  return React4(View, obj);
});
let ReactCompilerGating = ReactCompilerGating_mod;
let obj2 = { marginTop: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16, flexDirection: "column", gap: 20 };
let result = size.fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheetInfo.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ProductDetailsActionSheetInfo(arg0) {
  const cResult = c.c(12);
  ({ product, onTrackPress } = arg0);
  const tmp2 = closure_6();
  if (product.type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
    if (cResult[0] === onTrackPress) {
    }
    const obj2 = { product, onTrackPress };
    const tmp18 = React4(closure_9, obj2);
    cResult[0] = onTrackPress;
    cResult[1] = product;
    cResult[2] = tmp18;
  } else {
    if (cResult[3] !== product) {
      const obj3 = { product };
      const tmp6 = React4(closure_7, obj3);
      cResult[3] = product;
      cResult[4] = tmp6;
      let tmp3 = tmp6;
    } else {
      tmp3 = cResult[4];
    }
    if (cResult[5] === onTrackPress) {
      if (cResult[6] === product) {
        let tmp7 = cResult[7];
      }
      if (cResult[8] === tmp2.body) {
        if (cResult[9] === tmp3) {
          if (cResult[10] === tmp7) {
            let tmp11 = cResult[11];
          }
          return tmp11;
        }
      }
      const obj4 = { style: tmp2.body, children: null };
      const items = [tmp3, tmp7];
      obj4.children = items;
      const tmp14 = hasOwnProperty(View, obj4);
      cResult[8] = tmp2.body;
      cResult[9] = tmp3;
      cResult[10] = tmp7;
      cResult[11] = tmp14;
      tmp11 = tmp14;
    }
    const obj5 = { product, onTrackPress };
    const tmp10 = React4(closure_8, obj5);
    cResult[5] = onTrackPress;
    cResult[6] = product;
    cResult[7] = tmp10;
    tmp7 = tmp10;
  }
}) : (function ProductDetailsActionSheetInfo(arg0) {
  ({ product, onTrackPress } = arg0);
  if (product.type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
    const obj2 = { product, onTrackPress };
    let tmp7 = React4(closure_9, obj2);
  } else {
    const obj = { style: tmp.body, children: null };
    const obj3 = { product };
    const items = [React4(closure_7, obj3), ];
    const obj4 = { product, onTrackPress };
    items[1] = React4(closure_8, obj4);
    obj.children = items;
    tmp7 = hasOwnProperty(View, obj);
  }
  return tmp7;
});