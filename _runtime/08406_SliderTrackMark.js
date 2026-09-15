// _runtime/08406_SliderTrackMark.js
import _mod19 from "metro/00019__.js";
import _mod8404 from "metro/08404__.js";
import 08400__ from "metro/08400__.js";
import get_ActivityIndicator from "metro/00017__.js";
import jsxProd from "react/00021_jsxProd.js";

const noop = module_8400(_mod19);

export const SliderTrackMark = function SliderTrackMark(arg0) {
  ({ isTrue, thumbImage, StepMarker } = arg0);
  const obj2 = { style: _mod8404.styles.trackMarkContainer, children: null };
  ({ index, currentValue, min, max } = arg0);
  let jsxResult = null;
  if (StepMarker) {
    const range = { stepMarked: isTrue, index, currentValue, min, max };
    jsxResult = <StepMarker stepMarked={isTrue} index={index} currentValue={currentValue} min={min} max={max} />;
  }
  const items = [jsxResult, ];
  let jsxResult1 = null;
  if (thumbImage) {
    jsxResult1 = null;
    if (isTrue) {
      const obj3 = { style: _mod8404.styles.thumbImageContainer, testID: "sliderTrackMark-thumbImage", children: null };
      const obj4 = { source: thumbImage, style: _mod8404.styles.thumbImage };
      obj3.children = <get ActivityIndicator.Image source={thumbImage} style={_mod8404.styles.thumbImage} />;
      jsxResult1 = <get ActivityIndicator.View style={_mod8404.styles.thumbImageContainer} testID="sliderTrackMark-thumbImage">{null}</get ActivityIndicator.View>;
    }
  }
  items[1] = jsxResult1;
  obj2.children = items;
  return <get ActivityIndicator.View style={_mod8404.styles.trackMarkContainer}>{null}</get ActivityIndicator.View>;
};