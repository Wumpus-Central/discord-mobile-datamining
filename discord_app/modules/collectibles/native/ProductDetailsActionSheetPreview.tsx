// === Module 12707: ProductDetailsActionSheetPreview ===

// Module 12707 (ProductDetailsActionSheetPreview)
import nativeDefault from "native" /* 576 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1974 */;
import BundleProductDetailsActionSheetPreviewDefault from "BundleProductDetailsActionSheetPreview" /* 12708 */;
import IndividualProductPreview from "IndividualProductPreview" /* 12710 */;
import _slicedToArray from "module_32" /* 32 */;

require = fn;
const noop = fn(19);
({ useCallback: closure_4, useState: hasOwnProperty } = noop);
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4836);
let obj2 = { previewContainer: { flex: 1 }, previewDivider: { borderBottomColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderBottomWidth: 1, paddingBottom: nativeDefault.space.PX_16, flex: 1 } };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheetPreview.tsx");

export default function ProductDetailsActionSheetPreview(onBundleActiveItemChange) {
  ({ product, handlePreviewPress, onTrackPress } = onBundleActiveItemChange);
  c0 = undefined;
  const tmp = closure_8();
  [tmp3, c0] = hasOwnProperty(0);
  const tmp2 = _slicedToArray(hasOwnProperty(0), 2);
  const obj = {
    style: tmp.previewContainer,
    onLayout: React4((nativeEvent) => {
      _undefined(nativeEvent.nativeEvent.layout.width);
    }, []),
    children: null
  };
  if (product.type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
    const obj2 = { product, width: tmp3, handlePreviewPress, onTrackPress, onActiveItemChange: onBundleActiveItemChange.onBundleActiveItemChange };
    let tmp7Result = jsx(BundleProductDetailsActionSheetPreviewDefault, { product, width: tmp3, handlePreviewPress, onTrackPress, onActiveItemChange: onBundleActiveItemChange.onBundleActiveItemChange });
  } else {
    const obj3 = { style: tmp.previewDivider, children: null };
    const obj4 = { product, width: tmp3, handlePreviewPress, onTrackPress };
    obj3.children = jsx(IndividualProductPreview.IndividualProductPreview, { product, width: tmp3, handlePreviewPress, onTrackPress });
    tmp7Result = <View style={tmp.previewDivider}>{null}</View>;
  }
  obj.children = tmp7Result;
  return <View style={tmp.previewContainer} onLayout={React4((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, [])}>{null}</View>;
};