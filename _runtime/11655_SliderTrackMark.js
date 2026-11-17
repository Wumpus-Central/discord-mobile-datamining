// === Module 11655: SliderTrackMark ===

// Module 11655 (SliderTrackMark)
import _mod19 from "module_19" /* 19 */;
import _mod11653 from "module_11653" /* 11653 */;
import module_11649 from "module_11649" /* 11649 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

const noop = module_11649(_mod19);

export function SliderTrackMark(arg0) {
  ({ isTrue, thumbImage, StepMarker } = arg0);
  const obj2 = { style: _mod11653.styles.trackMarkContainer, children: null };
  ({ index, currentValue, min, max } = arg0);
  let jsxResult = null;
  if (StepMarker) {
    const range = { stepMarked: isTrue, index, currentValue, min, max };
    jsxResult = <StepMarker stepMarked={isTrue} index={index} currentValue={currentValue} min={min} max={max} />;
  }
  items = [jsxResult, ];
  let jsxResult1 = null;
  if (thumbImage) {
    jsxResult1 = null;
    if (isTrue) {
      const obj3 = { style: _mod11653.styles.thumbImageContainer, testID: "sliderTrackMark-thumbImage", children: null };
      const obj4 = { source: thumbImage, style: _mod11653.styles.thumbImage };
      obj3.children = <get ActivityIndicator.Image source={thumbImage} style={_mod11653.styles.thumbImage} />;
      jsxResult1 = <get ActivityIndicator.View style={_mod11653.styles.thumbImageContainer} testID="sliderTrackMark-thumbImage">{null}</get ActivityIndicator.View>;
    }
  }
  items[1] = jsxResult1;
  obj2.children = items;
  return <get ActivityIndicator.View style={_mod11653.styles.trackMarkContainer}>{null}</get ActivityIndicator.View>;
}