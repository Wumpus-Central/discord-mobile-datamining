// === Module 12968: ProductDetailsActionSheetPreview ===

// Module 12968 (ProductDetailsActionSheetPreview)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import CollectiblesItemType from "CollectiblesItemType" /* 1980 */;
import BundleProductDetailsActionSheetPreviewDefault from "BundleProductDetailsActionSheetPreview" /* 12969 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let closure_4;
let hasOwnProperty;
let obj2;
({ useCallback: closure_4, useState: hasOwnProperty } = react);
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { previewContainer: { flex: 1 }, previewDivider: obj2 };
obj2 = { borderBottomColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE, borderBottomWidth: 1, paddingBottom: nativeDefault.space.PX_16, flex: 1 };
let closure_8 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_129_0;
  let first;
  let handlePreviewPress;
  let onBundleActiveItemChange;
  let onTrackPress;
  let product;
  let tmp10Result;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(12);
  ({ product, handlePreviewPress, onTrackPress, onBundleActiveItemChange } = arg0);
  const tmp4 = closure_8();
  [tmp6, closure_129_0] = hasOwnProperty(0);
  _slicedToArray(hasOwnProperty(0), 2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function o(nativeEvent) {
      closure_1_0(nativeEvent.nativeEvent.layout.width);
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const tmp8 = product.type === CollectiblesItemType.CollectiblesItemType.BUNDLE;
  if (cResult[1] === handlePreviewPress) {
    if (cResult[2] === tmp8) {
      if (cResult[3] === onBundleActiveItemChange) {
        if (cResult[4] === onTrackPress) {
          if (cResult[5] === product) {
            if (cResult[6] === tmp4.previewDivider) {
              let tmp9;
              if (cResult[7] === tmp6) {
                tmp9 = cResult[8];
              }
              if (cResult[9] === tmp4.previewContainer) {
                let tmp14;
                if (cResult[10] === tmp9) {
                  tmp14 = cResult[11];
                }
                return tmp14;
              }
              const tmp17 = <View style={tmp4.previewContainer} onLayout={first}>{tmp9}</View>;
              cResult[9] = tmp4.previewContainer;
              cResult[10] = tmp9;
              cResult[11] = tmp17;
              tmp14 = tmp17;
            }
          }
        }
      }
    }
  }
  if (tmp8) {
    tmp10Result = jsx(BundleProductDetailsActionSheetPreviewDefault, { product, width: tmp6, handlePreviewPress, onTrackPress, onActiveItemChange: onBundleActiveItemChange });
  } else {
    tmp10Result = <View style={tmp4.previewDivider}>{null}</View>;
  }
  cResult[1] = handlePreviewPress;
  cResult[2] = tmp8;
  cResult[3] = onBundleActiveItemChange;
  cResult[4] = onTrackPress;
  cResult[5] = product;
  cResult[6] = tmp4.previewDivider;
  cResult[7] = tmp6;
  cResult[8] = tmp10Result;
  tmp9 = tmp10Result;
}) : ((onBundleActiveItemChange) => {
  let c0;
  let handlePreviewPress;
  let onTrackPress;
  let product;
  let tmp3;
  let tmp7Result;
  ({ product, handlePreviewPress, onTrackPress } = onBundleActiveItemChange);
  c0 = undefined;
  onBundleActiveItemChange = onBundleActiveItemChange.onBundleActiveItemChange;
  const tmp = closure_8();
  [tmp3, c0] = hasOwnProperty(0);
  _slicedToArray(hasOwnProperty(0), 2);
  if (product.type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
    tmp7Result = jsx(BundleProductDetailsActionSheetPreviewDefault, { product, width: tmp3, handlePreviewPress, onTrackPress, onActiveItemChange: onBundleActiveItemChange });
  } else {
    tmp7Result = <View style={tmp.previewDivider}>{null}</View>;
  }
  return <View style={tmp.previewContainer} onLayout={React3((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, [])}>{tmp7Result}</View>;
});
const result = size.fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheetPreview.tsx");

export default tmp3;