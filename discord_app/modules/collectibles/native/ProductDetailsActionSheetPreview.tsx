// discord_app/modules/collectibles/native/ProductDetailsActionSheetPreview.tsx
import _mod17 from "../../../../_runtime/metro/00017__.js";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import CollectiblesItemType from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import useMeasuredLayoutDefault from "../../screen/native/useMeasuredLayout.tsx";
import BundleProductDetailsActionSheetPreviewDefault from "BundleProductDetailsActionSheetPreview.tsx";
import IndividualProductPreview from "IndividualProductPreview.tsx";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const View = _mod17.View;
const jsx = jsxProd.jsx;
let obj = {
  previewContainer: { flex: 1 },
  previewDivider: {
    borderBottomColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
    borderBottomWidth: 1,
    paddingBottom: nativeDefault.space.PX_16,
    flex: 1,
  },
};
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
    const obj2 = {
      product,
      width: num,
      handlePreviewPress,
      onTrackPress,
      onActiveItemChange: onBundleActiveItemChange.onBundleActiveItemChange,
    };
    let tmp6Result = jsx(BundleProductDetailsActionSheetPreviewDefault, {
      product,
      width: num,
      handlePreviewPress,
      onTrackPress,
      onActiveItemChange: onBundleActiveItemChange.onBundleActiveItemChange,
    });
  } else {
    const obj3 = { style: tmp.previewDivider, children: null };
    const obj4 = { product, width: num, handlePreviewPress, onTrackPress };
    obj3.children = jsx(IndividualProductPreview.IndividualProductPreview, {
      product,
      width: num,
      handlePreviewPress,
      onTrackPress,
    });
    tmp6Result = <View style={tmp.previewDivider}>{null}</View>;
  }
  obj.children = tmp6Result;
  return (
    <View style={tmp.previewContainer} ref={ref} onLayout={onLayout}>
      {null}
    </View>
  );
}
