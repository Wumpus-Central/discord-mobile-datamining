// === Module 8334: SliderTrackMark ===

// Module 8334 (SliderTrackMark)
import noop2 from "noop" /* 19 */;
import styles from "styles" /* 8332 */;
import module_8328 from "module_8328" /* 8328 */;
import closure_2 from "get ActivityIndicator" /* 17 */;
import closure_3 from "jsxProd" /* 21 */;

const noop = module_8328(noop2);

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
      obj1 = { style: null, children: null };
      obj1[0] = tmp2(8332).styles.thumbImageContainer;
      const obj2 = { source: null, style: null };
      obj2[0] = thumbImage;
      obj2[1] = tmp2(8332).styles.thumbImage;
      obj1[1] = <tmp.Image source={null} style={null} />;
      jsxResult1 = <tmp.View style={null}>{null}</tmp.View>;
    }
  }
  items[1] = jsxResult1;
  obj[1] = items;
  return <RN.View style={styles.styles.trackMarkContainer}>{null}</RN.View>;
};