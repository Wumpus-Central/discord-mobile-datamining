// === Module 8701: SliderTrackMark ===

// Module 8701 (SliderTrackMark)
import _mod19 from "module_19" /* 19 */;
import _mod8699 from "module_8699" /* 8699 */;
import module_8695 from "module_8695" /* 8695 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

const noop = module_8695(_mod19);

export const SliderTrackMark = function SliderTrackMark(arg0) {
  ({ isTrue, thumbImage, StepMarker } = arg0);
  const obj2 = { style: _mod8699.styles.trackMarkContainer, children: null };
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
      const obj3 = { style: _mod8699.styles.thumbImageContainer, testID: "sliderTrackMark-thumbImage", children: null };
      const obj4 = { source: thumbImage, style: _mod8699.styles.thumbImage };
      obj3.children = <get ActivityIndicator.Image source={thumbImage} style={_mod8699.styles.thumbImage} />;
      jsxResult1 = <get ActivityIndicator.View style={_mod8699.styles.thumbImageContainer} testID="sliderTrackMark-thumbImage">{null}</get ActivityIndicator.View>;
    }
  }
  items[1] = jsxResult1;
  obj2.children = items;
  return <get ActivityIndicator.View style={_mod8699.styles.trackMarkContainer}>{null}</get ActivityIndicator.View>;
};