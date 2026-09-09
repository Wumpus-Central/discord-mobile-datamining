// _runtime/08313_SliderTrackMark.js
import _mod19 from "metro/00019__.js";
import _mod8311 from "metro/08311__.js";
import 08307__ from "metro/08307__.js";
import get_ActivityIndicator from "metro/00017__.js";
import jsxProd from "react/00021_jsxProd.js";

const noop = module_8307(_mod19);

export const SliderTrackMark = function SliderTrackMark(arg0) {
  ({ isTrue, thumbImage, StepMarker } = arg0);
  let obj = { style: _mod8311.styles.trackMarkContainer, children: null };
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
      obj = { style: _mod8311.styles.thumbImageContainer, testID: "sliderTrackMark-thumbImage", children: null };
      const obj1 = { source: thumbImage, style: _mod8311.styles.thumbImage };
      obj.children = <get ActivityIndicator.Image source={thumbImage} style={_mod8311.styles.thumbImage} />;
      jsxResult1 = <get ActivityIndicator.View style={_mod8311.styles.thumbImageContainer} testID="sliderTrackMark-thumbImage">{null}</get ActivityIndicator.View>;
    }
  }
  items[1] = jsxResult1;
  obj.children = items;
  return <get ActivityIndicator.View style={_mod8311.styles.trackMarkContainer}>{null}</get ActivityIndicator.View>;
};