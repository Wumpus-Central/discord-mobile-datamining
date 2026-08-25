// === Module 9588: ProductDetailsActionSheetPreview ===

// Module 9588 (ProductDetailsActionSheetPreview)
import ThemesDefault from "Themes" /* 712 */;
import memoDefault from "memo" /* 9589 */;
import closure_3 from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4380 */;

const require = arg1;
({ useCallback: c4, useState: c5 } = noop);
createCacheKey = { previewContainer: { flex: 1 }, previewDivider: null };
createCacheKey = { borderBottomColor: ThemesDefault.colors.BACKGROUND_MOD_SUBTLE, borderBottomWidth: 1, paddingBottom: ThemesDefault.space.PX_16, flex: 1 };
createCacheKey[1] = createCacheKey;
let closure_8 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheetPreview.tsx");

export default function ProductDetailsActionSheetPreview(onBundleActiveItemChange) {
  ({ product, handlePreviewPress, onTrackPress } = onBundleActiveItemChange);
  let _require;
  const tmp = callback4();
  [tmp3, c0] = callback(callback3(0), 2);
  const tmp2 = callback(callback3(0), 2);
  let obj = {
    style: tmp.previewContainer,
    onLayout: callback2((nativeEvent) => {
      _undefined(nativeEvent.nativeEvent.layout.width);
    }, []),
    children: null
  };
  if (product.type === _require(1950).CollectiblesItemType.BUNDLE) {
    obj = { product: null, width: null, handlePreviewPress: null, onTrackPress: null, onActiveItemChange: null };
    obj[0] = product;
    obj[1] = tmp3;
    obj[2] = handlePreviewPress;
    obj[3] = onTrackPress;
    obj[4] = onBundleActiveItemChange.onBundleActiveItemChange;
    let tmp7Result = tmp7(memoDefault, obj);
  } else {
    obj = { style: null, children: null };
    obj[0] = tmp.previewDivider;
    obj1 = { product: null, width: null, handlePreviewPress: null, onTrackPress: null };
    obj1[0] = product;
    obj1[1] = tmp3;
    obj1[2] = handlePreviewPress;
    obj1[3] = onTrackPress;
    obj[1] = tmp7(_require(9591).IndividualProductPreview, obj1);
    tmp7Result = tmp7(tmp8, obj);
  }
  obj[2] = tmp7Result;
  return <View style={tmp.previewContainer} onLayout={callback2((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, [])}>{null}</View>;
};