// === Module 10937: SliderTrackMark ===

// Module 10937 (SliderTrackMark)
import _mod19 from "module_19" /* 19 */;
import _mod10935 from "module_10935" /* 10935 */;
import module_10931 from "module_10931" /* 10931 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

const noop = module_10931(_mod19);

export function SliderTrackMark(arg0) {
  ({ isTrue, thumbImage, StepMarker } = arg0);
  const obj2 = { style: _mod10935.styles.trackMarkContainer, children: null };
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
      const obj3 = { style: _mod10935.styles.thumbImageContainer, testID: "sliderTrackMark-thumbImage", children: null };
      const obj4 = { source: thumbImage, style: _mod10935.styles.thumbImage };
      obj3.children = <get ActivityIndicator.Image source={thumbImage} style={_mod10935.styles.thumbImage} />;
      jsxResult1 = <get ActivityIndicator.View style={_mod10935.styles.thumbImageContainer} testID="sliderTrackMark-thumbImage">{null}</get ActivityIndicator.View>;
    }
  }
  items[1] = jsxResult1;
  obj2.children = items;
  return <get ActivityIndicator.View style={_mod10935.styles.trackMarkContainer}>{null}</get ActivityIndicator.View>;
}