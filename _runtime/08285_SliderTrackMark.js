// === Module 8285: SliderTrackMark ===

// Module 8285 (SliderTrackMark)
import _mod19 from "module_19" /* 19 */;
import _mod8283 from "module_8283" /* 8283 */;
import module_8279 from "module_8279" /* 8279 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

const noop = module_8279(_mod19);

export const SliderTrackMark = function SliderTrackMark(arg0) {
  ({ isTrue, thumbImage, StepMarker } = arg0);
  let obj = { style: _mod8283.styles.trackMarkContainer, children: null };
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
      obj = { style: tmp2(8283).styles.thumbImageContainer, testID: "sliderTrackMark-thumbImage", children: null };
      const obj1 = { source: thumbImage, style: tmp2(8283).styles.thumbImage };
      obj.children = <tmp.Image source={thumbImage} style={tmp2(8283).styles.thumbImage} />;
      jsxResult1 = <tmp.View style={tmp2(8283).styles.thumbImageContainer} testID="sliderTrackMark-thumbImage">{null}</tmp.View>;
    }
  }
  items[1] = jsxResult1;
  obj.children = items;
  return <get ActivityIndicator.View style={_mod8283.styles.trackMarkContainer}>{null}</get ActivityIndicator.View>;
};