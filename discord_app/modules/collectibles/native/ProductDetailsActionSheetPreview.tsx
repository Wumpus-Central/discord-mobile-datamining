// discord_app/modules/collectibles/native/ProductDetailsActionSheetPreview.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import CollectiblesItemType from "../../../../discord_common/js/shared/shared-constants/CollectiblesItemType.tsx";
import BundleProductDetailsActionSheetPreviewDefault from "BundleProductDetailsActionSheetPreview.tsx";
import IndividualProductPreview from "IndividualProductPreview.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";

const require = globalThis.__r;

require = fn;
const noop = fn(19);
({ useCallback: closure_4, useState: hasOwnProperty } = noop);
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let obj2 = {
  previewContainer: { flex: 1 },
  previewDivider: {
    borderBottomColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
    borderBottomWidth: 1,
    paddingBottom: nativeDefault.space.PX_16,
    flex: 1,
  },
};
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = {
  borderBottomColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderBottomWidth: 1,
  paddingBottom: nativeDefault.space.PX_16,
  flex: 1,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/ProductDetailsActionSheetPreview.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ProductDetailsActionSheetPreview(arg0) {
      const cResult = c.c(12);
      ({ product, handlePreviewPress, onTrackPress, onBundleActiveItemChange } = arg0);
      const tmp3 = closure_8();
      let num = 2;
      [tmp5, require] = hasOwnProperty(0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function o(nativeEvent) {
          require(nativeEvent.nativeEvent.layout.width);
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      const tmp7 = product.type === CollectiblesItemType.CollectiblesItemType.BUNDLE;
      if (cResult[1] === handlePreviewPress) {
        if (cResult[2] === tmp7) {
          if (cResult[3] === onBundleActiveItemChange) {
            if (cResult[4] === onTrackPress) {
              if (cResult[5] === product) {
                if (cResult[6] === tmp3.previewDivider) {
                  if (cResult[7] === tmp5) {
                    if (cResult[9] === tmp3.previewContainer) {
                      if (cResult[10] === tmp8) {
                        let tmp14 = cResult[11];
                      }
                      return tmp14;
                    }
                    const obj3 = { style: tmp3.previewContainer, onLayout: first, children: cResult[8] };
                    const tmp17 = (
                      <View style={tmp3.previewContainer} onLayout={first}>
                        {cResult[8]}
                      </View>
                    );
                    cResult[9] = tmp3.previewContainer;
                    cResult[10] = cResult[8];
                    cResult[11] = tmp17;
                    tmp14 = tmp17;
                  }
                }
              }
            }
          }
        }
      }
      if (tmp7) {
        const obj = {
          product,
          width: tmp5,
          handlePreviewPress,
          onTrackPress,
          onActiveItemChange: onBundleActiveItemChange,
        };
        let tmp9Result = jsx(BundleProductDetailsActionSheetPreviewDefault, {
          product,
          width: tmp5,
          handlePreviewPress,
          onTrackPress,
          onActiveItemChange: onBundleActiveItemChange,
        });
      } else {
        const obj4 = { style: tmp3.previewDivider, children: null };
        const obj5 = { product, width: tmp5, handlePreviewPress, onTrackPress };
        obj4.children = jsx(IndividualProductPreview.IndividualProductPreview, {
          product,
          width: tmp5,
          handlePreviewPress,
          onTrackPress,
        });
        tmp9Result = <View style={tmp3.previewDivider}>{null}</View>;
      }
      cResult[1] = handlePreviewPress;
      cResult[num] = tmp7;
      cResult[3] = onBundleActiveItemChange;
      cResult[4] = onTrackPress;
      cResult[5] = product;
      product = tmp3.previewDivider;
      cResult[6] = product;
      cResult[7] = tmp5;
      num = 8;
      cResult[8] = tmp9Result;
      const tmp4 = _slicedToArray(hasOwnProperty(0), 2);
    }
  : function ProductDetailsActionSheetPreview(onBundleActiveItemChange) {
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
        children: null,
      };
      if (product.type === CollectiblesItemType.CollectiblesItemType.BUNDLE) {
        const obj2 = {
          product,
          width: tmp3,
          handlePreviewPress,
          onTrackPress,
          onActiveItemChange: onBundleActiveItemChange.onBundleActiveItemChange,
        };
        let tmp7Result = jsx(BundleProductDetailsActionSheetPreviewDefault, {
          product,
          width: tmp3,
          handlePreviewPress,
          onTrackPress,
          onActiveItemChange: onBundleActiveItemChange.onBundleActiveItemChange,
        });
      } else {
        const obj3 = { style: tmp.previewDivider, children: null };
        const obj4 = { product, width: tmp3, handlePreviewPress, onTrackPress };
        obj3.children = jsx(IndividualProductPreview.IndividualProductPreview, {
          product,
          width: tmp3,
          handlePreviewPress,
          onTrackPress,
        });
        tmp7Result = <View style={tmp.previewDivider}>{null}</View>;
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
    };
