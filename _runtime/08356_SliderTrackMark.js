// === Module 8356: SliderTrackMark ===

// Module 8356 (SliderTrackMark)
import noop2 from "noop" /* 19 */;
import styles from "styles" /* 8354 */;
import module_8350 from "module_8350" /* 8350 */;
import closure_2 from "get ActivityIndicator" /* 17 */;
import closure_3 from "jsxProd" /* 21 */;

const noop = module_8350(noop2);

export const SliderTrackMark = function SliderTrackMark(arg0) {
  ({ isTrue, thumbImage, StepMarker } = arg0);
  let obj = React;
  obj = { style: styles.styles.trackMarkContainer, children: null };
  ({ index, currentValue, min, max } = arg0);
  let jsxResult = null;
  if (StepMarker) {
    obj = { stepMarked: null, index: null, currentValue: null, min: null, max: null };
    obj[0] = isTrue;
    obj[1] = index;
    obj[2] = currentValue;
    obj[3] = min;
    obj[4] = max;
    jsxResult = <StepMarker stepMarked={null} index={null} currentValue={null} min={null} max={null} />;
  }
  const items = [jsxResult, ];
  let jsxResult1 = null;
  if (thumbImage) {
    jsxResult1 = null;
    if (isTrue) {
      obj1 = { style: null, testID: "sliderTrackMark-thumbImage", children: null };
      obj1[0] = tmp2(8354).styles.thumbImageContainer;
      const obj2 = { source: null, style: null };
      obj2[0] = thumbImage;
      obj2[1] = tmp2(8354).styles.thumbImage;
      obj1[2] = <tmp.Image source={null} style={null} />;
      jsxResult1 = <tmp.View style={null} testID="sliderTrackMark-thumbImage">{null}</tmp.View>;
    }
  }
  items[1] = jsxResult1;
  obj[1] = items;
  return <RN.View style={styles.styles.trackMarkContainer}>{null}</RN.View>;
};