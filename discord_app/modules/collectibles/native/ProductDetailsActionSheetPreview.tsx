// === Module 13135: ProductDetailsActionSheetPreview ===

// Module 13135 (ProductDetailsActionSheetPreview)
import nativeDefault from "native" /* 576 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1889 */;
import BundleProductDetailsActionSheetPreviewDefault from "BundleProductDetailsActionSheetPreview" /* 13136 */;
import IndividualProductPreview from "IndividualProductPreview" /* 13138 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const noop = fn(19);
({ useCallback: closure_4, useState: hasOwnProperty } = noop);
const View = fn(17).View;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { previewContainer: { flex: 1 }, previewDivider: null };
createStyles = { borderBottomColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderBottomWidth: 1, paddingBottom: nativeDefault.space.PX_16, flex: 1 };
createStyles.previewDivider = createStyles;
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheetPreview.tsx");

export default function ProductDetailsActionSheetPreview(onBundleActiveItemChange) {
  ({ product, handlePreviewPress, onTrackPress } = onBundleActiveItemChange);
  c0 = undefined;
  const tmp = closure_8();
  [tmp3, c0] = _slicedToArray(hasOwnProperty(0), 2);
  const tmp2 = _slicedToArray(hasOwnProperty(0), 2);
  let obj = {
    style: tmp.previewContainer,
    onLayout: React4((nativeEvent) => {
      _undefined(nativeEvent.nativeEvent.layout.width);
    }, []),
    children: null
  };
  if (product.type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
    obj = { product, width: tmp3, handlePreviewPress, onTrackPress, onActiveItemChange: onBundleActiveItemChange.onBundleActiveItemChange };
    let tmp7Result = jsx(BundleProductDetailsActionSheetPreviewDefault, { product, width: tmp3, handlePreviewPress, onTrackPress, onActiveItemChange: onBundleActiveItemChange.onBundleActiveItemChange });
  } else {
    obj = { style: tmp.previewDivider, children: null };
    const obj1 = { product, width: tmp3, handlePreviewPress, onTrackPress };
    obj.children = jsx(IndividualProductPreview.IndividualProductPreview, { product, width: tmp3, handlePreviewPress, onTrackPress });
    tmp7Result = <View style={tmp.previewDivider}>{null}</View>;
  }
  obj.children = tmp7Result;
  return <View style={tmp.previewContainer} onLayout={React4((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, [])}>{null}</View>;
};