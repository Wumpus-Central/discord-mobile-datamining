// === Module 12978: ProductDetailsActionSheetInfo ===

// Module 12978 (ProductDetailsActionSheetInfo)
import react_native from "react-native" /* 17 */;
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl3 from "intl" /* 1126 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1980 */;
import Text_Text from "Text/Text" /* 4886 */;
import CollectiblesUtils from "CollectiblesUtils" /* 7065 */;
import useProductPurchaseState from "useProductPurchaseState" /* 8496 */;
import useProductDescription from "useProductDescription" /* 12979 */;
import InlinePriceTagDefault from "InlinePriceTag" /* 12980 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { title: { marginBottom: 2 }, body: obj2, bundleBody: { marginTop: 0 }, description: { flexDirection: "column", gap: 6 } };
obj2 = { marginTop: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16, flexDirection: "column", gap: 20 };
let closure_6 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_7 = ReactCompilerGating.isReactCompilerEnabled() ? ((product) => {
  let items;
  const obj = react;
  const cResult = obj.c(9);
  product = product.product;
  const tmp4 = closure_6();
  const obj2 = useProductDescription;
  const productDescription = obj2.useProductDescription(product);
  if (cResult[0] === product.name) {
    let tmp6;
    let tmp8;
    if (cResult[1] === tmp4.title) {
      tmp6 = cResult[2];
    }
    if (cResult[3] !== productDescription) {
      const obj3 = { variant: "text-md/medium", color: "text-default", children: productDescription };
      const tmp10 = React3(Text_Text.Text, obj3);
      cResult[3] = productDescription;
      cResult[4] = tmp10;
      tmp8 = tmp10;
    } else {
      tmp8 = cResult[4];
    }
    if (cResult[5] === tmp4.description) {
      if (cResult[6] === tmp6) {
        let tmp11;
        if (cResult[7] === tmp8) {
          tmp11 = cResult[8];
        }
        return tmp11;
      }
    }
    const obj4 = { style: tmp4.description, children: items };
    items = [tmp6, tmp8];
    const tmp14 = hasOwnProperty(View, obj4);
    cResult[5] = tmp4.description;
    cResult[6] = tmp6;
    cResult[7] = tmp8;
    cResult[8] = tmp14;
    tmp11 = tmp14;
  }
  const obj5 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp4.title, accessibilityRole: "header", children: product.name };
  const tmp7 = React3(Text_Text.Text, obj5);
  cResult[0] = product.name;
  cResult[1] = tmp4.title;
  cResult[2] = tmp7;
  tmp6 = tmp7;
}) : ((product) => {
  let items;
  product = product.product;
  const tmp = closure_6();
  const obj2 = { style: tmp.description, children: items };
  const obj = useProductDescription;
  const productDescription = obj.useProductDescription(product);
  items = [, ];
  const obj3 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.title, accessibilityRole: "header", children: product.name };
  items[0] = React3(Text_Text.Text, obj3);
  items[1] = React3(Text_Text.Text, { variant: "text-md/medium", color: "text-default", children: productDescription });
  return hasOwnProperty(View, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let intl;
  let intl2;
  let isPartiallyOwnedBundle;
  let isPurchased;
  let onTrackPress;
  let product;
  let tmp4;
  let tmp8;
  const obj = react;
  const cResult = obj.c(10);
  ({ product, onTrackPress } = arg0);
  if (cResult[0] !== product) {
    const tmpResult = CollectiblesUtils;
    const result = tmpResult.isPremiumCollectiblesProduct(product);
    cResult[0] = product;
    cResult[1] = result;
    tmp4 = result;
  } else {
    tmp4 = cResult[1];
  }
  const tmpResult2 = useProductPurchaseState;
  const productPurchaseState = tmpResult2.useProductPurchaseState(product);
  ({ isPurchased, isPartiallyOwnedBundle } = productPurchaseState);
  if (cResult[2] === isPartiallyOwnedBundle) {
    if (cResult[3] === tmp4) {
      if (cResult[4] === isPurchased) {
        if (cResult[5] === onTrackPress) {
          let tmp7;
          let tmp13;
          if (cResult[6] === product) {
            tmp7 = cResult[7];
          }
          if (cResult[8] !== tmp7) {
            const obj2 = { children: tmp7 };
            const tmp16 = React3(View, obj2);
            cResult[8] = tmp7;
            cResult[9] = tmp16;
            tmp13 = tmp16;
          } else {
            tmp13 = cResult[9];
          }
          return tmp13;
        }
      }
    }
  }
  if (isPurchased) {
    const obj3 = { variant: "text-md/semibold", color: "interactive-text-active", children: intl2.string(intl3.t["6cfuDj"]) };
    const Text2 = Text_Text.Text;
    intl2 = intl3.intl;
    tmp8 = React3(Text2, obj3);
  } else if (isPartiallyOwnedBundle) {
    const obj4 = { variant: "text-md/semibold", color: "interactive-text-active", children: intl.string(intl3.t.BEjTij) };
    const Text = Text_Text.Text;
    intl = intl3.intl;
    tmp8 = React3(Text, obj4);
  } else {
    tmp8 = !tmp4;
    if (tmp8) {
      const obj5 = { product, onTrackPress };
      tmp8 = React3(InlinePriceTagDefault, obj5);
    }
  }
  cResult[2] = isPartiallyOwnedBundle;
  cResult[3] = tmp4;
  cResult[4] = isPurchased;
  cResult[5] = onTrackPress;
  cResult[6] = product;
  cResult[7] = tmp8;
  tmp7 = tmp8;
}) : ((product) => {
  let children;
  let intl;
  let intl2;
  product = product.product;
  const onTrackPress = product.onTrackPress;
  const obj = CollectiblesUtils;
  const result = obj.isPremiumCollectiblesProduct(product);
  const obj2 = useProductPurchaseState;
  const productPurchaseState = obj2.useProductPurchaseState(product);
  if (productPurchaseState.isPurchased) {
    const obj3 = { variant: "text-md/semibold", color: "interactive-text-active", children: intl2.string(intl3.t["6cfuDj"]) };
    const Text2 = Text_Text.Text;
    intl2 = intl3.intl;
    children = React3(Text2, obj3);
  } else if (tmp5) {
    const obj4 = { variant: "text-md/semibold", color: "interactive-text-active", children: intl.string(intl3.t.BEjTij) };
    const Text = Text_Text.Text;
    intl = intl3.intl;
    children = React3(Text, obj4);
  } else {
    children = !result;
    if (children) {
      const obj5 = { product, onTrackPress };
      children = React3(InlinePriceTagDefault, obj5);
    }
  }
  return React3(View, { children });
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let onTrackPress;
  let product;
  const obj = react;
  const cResult = obj.c(9);
  ({ product, onTrackPress } = arg0);
  const tmp2 = closure_6();
  if (cResult[0] === tmp2.body) {
    let tmp3;
    if (cResult[1] === tmp2.bundleBody) {
      tmp3 = cResult[2];
    }
    if (cResult[3] === onTrackPress) {
      let tmp4;
      if (cResult[4] === product) {
        tmp4 = cResult[5];
      }
      if (cResult[6] === tmp3) {
        let tmp8;
        if (cResult[7] === tmp4) {
          tmp8 = cResult[8];
        }
        return tmp8;
      }
      const obj2 = { style: tmp3, children: tmp4 };
      const tmp11 = React3(View, obj2);
      cResult[6] = tmp3;
      cResult[7] = tmp4;
      cResult[8] = tmp11;
      tmp8 = tmp11;
    }
    const obj3 = { product, onTrackPress };
    const tmp7 = React3(closure_8, obj3);
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
}) : ((arg0) => {
  let items;
  let onTrackPress;
  let product;
  ({ product, onTrackPress } = arg0);
  const tmp = closure_6();
  const obj = { style: items, children: React3(closure_8, { product, onTrackPress }) };
  items = [, ];
  ({ body: arr[0], bundleBody: arr[1] } = tmp);
  return React3(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let items;
  let onTrackPress;
  let product;
  let tmp11;
  const obj = react;
  const cResult = obj.c(12);
  ({ product, onTrackPress } = arg0);
  const tmp2 = closure_6();
  if (product.type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
    if (cResult[0] === onTrackPress) {
      let tmp15;
      if (cResult[1] === product) {
        tmp15 = cResult[2];
      }
      tmp11 = tmp15;
    }
    const obj2 = { product, onTrackPress };
    const tmp18 = React3(closure_9, obj2);
    cResult[0] = onTrackPress;
    cResult[1] = product;
    cResult[2] = tmp18;
    tmp15 = tmp18;
  } else {
    let tmp3;
    if (cResult[3] !== product) {
      const obj3 = { product };
      const tmp6 = React3(closure_7, obj3);
      cResult[3] = product;
      cResult[4] = tmp6;
      tmp3 = tmp6;
    } else {
      tmp3 = cResult[4];
    }
    if (cResult[5] === onTrackPress) {
      let tmp7;
      if (cResult[6] === product) {
        tmp7 = cResult[7];
      }
      if (cResult[8] === tmp2.body) {
        if (cResult[9] === tmp3) {
          if (cResult[10] === tmp7) {
            tmp11 = cResult[11];
          }
        }
      }
      const obj4 = { style: tmp2.body, children: items };
      items = [tmp3, tmp7];
      const tmp14 = hasOwnProperty(View, obj4);
      cResult[8] = tmp2.body;
      cResult[9] = tmp3;
      cResult[10] = tmp7;
      cResult[11] = tmp14;
      tmp11 = tmp14;
    }
    const obj5 = { product, onTrackPress };
    const tmp10 = React3(closure_8, obj5);
    cResult[5] = onTrackPress;
    cResult[6] = product;
    cResult[7] = tmp10;
    tmp7 = tmp10;
  }
  return tmp11;
}) : ((arg0) => {
  let items;
  let onTrackPress;
  let product;
  let tmp7;
  ({ product, onTrackPress } = arg0);
  const tmp = closure_6();
  if (product.type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
    const obj2 = { product, onTrackPress };
    tmp7 = React3(closure_9, obj2);
  } else {
    const obj = { style: tmp.body, children: items };
    const obj3 = { product };
    items = [React3(closure_7, obj3), ];
    const obj4 = { product, onTrackPress };
    items[1] = React3(closure_8, obj4);
    tmp7 = hasOwnProperty(View, obj);
  }
  return tmp7;
});
let result = size.fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheetInfo.tsx");

export default tmp3;