// === Module 15328: ProductDetailsActionSheetPreview ===

// Module 15328 (ProductDetailsActionSheetPreview)
import _mod17 from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import nativeDefault from "native" /* 575 */;
import CollectiblesItemType from "CollectiblesItemType" /* 2111 */;
import useMeasuredLayoutDefault from "useMeasuredLayout" /* 9075 */;
import BundleProductDetailsActionSheetPreviewDefault from "BundleProductDetailsActionSheetPreview" /* 15329 */;
import IndividualProductPreview from "IndividualProductPreview" /* 15331 */;
import createStyles from "createStyles" /* 5142 */;
import size from "module_2" /* 2 */;

const View = _mod17.View;
const jsx = jsxProd.jsx;
let obj = { previewContainer: { flex: 1 }, previewDivider: { borderBottomColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderBottomWidth: 1, paddingBottom: nativeDefault.space.PX_16, flex: 1 } };
let closure_5 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheetPreview.tsx");

export default function ProductDetailsActionSheetPreview(onBundleActiveItemChange) {
  ({ product, handlePreviewPress, onTrackPress } = onBundleActiveItemChange);
  const tmp = closure_5();
  const tmp4 = useMeasuredLayoutDefault();
  const width = tmp4.width;
  let num = 0;
  ({ ref, onLayout } = tmp4);
  if (undefined !== width) {
    num = width;
  }
  const obj = { style: tmp.previewContainer, ref, onLayout, children: null };
  if (product.type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
    const obj2 = { product, width: num, handlePreviewPress, onTrackPress, onActiveItemChange: onBundleActiveItemChange.onBundleActiveItemChange };
    let tmp6Result = jsx(BundleProductDetailsActionSheetPreviewDefault, { product, width: num, handlePreviewPress, onTrackPress, onActiveItemChange: onBundleActiveItemChange.onBundleActiveItemChange });
  } else {
    const obj3 = { style: tmp.previewDivider, children: null };
    const obj4 = { product, width: num, handlePreviewPress, onTrackPress };
    obj3.children = jsx(IndividualProductPreview.IndividualProductPreview, { product, width: num, handlePreviewPress, onTrackPress });
    tmp6Result = <View style={tmp.previewDivider}>{null}</View>;
  }
  obj.children = tmp6Result;
  return <View style={tmp.previewContainer} ref={ref} onLayout={onLayout}>{null}</View>;
};