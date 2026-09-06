// discord_app/modules/collectibles/native/ProductDetailsActionSheetPreview.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import CollectiblesItemType from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import BundleProductDetailsActionSheetPreviewDefault from "BundleProductDetailsActionSheetPreview.tsx";
import IndividualProductPreview from "IndividualProductPreview.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";

require = fn;
const noop = fn(19);
({ useCallback: closure_4, useState: hasOwnProperty } = noop);
const View = fn(17).View;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { previewContainer: { flex: 1 }, previewDivider: null };
createStyles = {
  borderBottomColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderBottomWidth: 1,
  paddingBottom: nativeDefault.space.PX_16,
  flex: 1,
};
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
    children: null,
  };
  if (product.type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
    obj = {
      product,
      width: tmp3,
      handlePreviewPress,
      onTrackPress,
      onActiveItemChange: onBundleActiveItemChange.onBundleActiveItemChange,
    };
    let tmp7Result = tmp7(BundleProductDetailsActionSheetPreviewDefault, obj);
  } else {
    obj = { style: tmp.previewDivider, children: null };
    const obj1 = { product, width: tmp3, handlePreviewPress, onTrackPress };
    obj.children = tmp7(IndividualProductPreview.IndividualProductPreview, obj1);
    tmp7Result = tmp7(tmp8, obj);
  }
  obj.children = tmp7Result;
  return (
    <View
      style={tmp.previewContainer}
      onLayout={React4((nativeEvent) => {
        _undefined(nativeEvent.nativeEvent.layout.width);
      }, [])}
    >
      {null}
    </View>
  );
}
