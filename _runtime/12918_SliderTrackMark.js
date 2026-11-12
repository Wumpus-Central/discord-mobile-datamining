// === Module 12918: SliderTrackMark ===

// Module 12918 (SliderTrackMark)
import _mod19 from "module_19" /* 19 */;
import _mod12916 from "module_12916" /* 12916 */;
import module_12912 from "module_12912" /* 12912 */;
import get_ActivityIndicator from "module_17" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

const noop = module_12912(_mod19);

export function SliderTrackMark(arg0) {
  ({ isTrue, thumbImage, StepMarker } = arg0);
  const obj2 = { style: _mod12916.styles.trackMarkContainer, children: null };
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
      const obj3 = { style: _mod12916.styles.thumbImageContainer, testID: "sliderTrackMark-thumbImage", children: null };
      const obj4 = { source: thumbImage, style: _mod12916.styles.thumbImage };
      obj3.children = <get ActivityIndicator.Image source={thumbImage} style={_mod12916.styles.thumbImage} />;
      jsxResult1 = <get ActivityIndicator.View style={_mod12916.styles.thumbImageContainer} testID="sliderTrackMark-thumbImage">{null}</get ActivityIndicator.View>;
    }
  }
  items[1] = jsxResult1;
  obj2.children = items;
  return <get ActivityIndicator.View style={_mod12916.styles.trackMarkContainer}>{null}</get ActivityIndicator.View>;
}