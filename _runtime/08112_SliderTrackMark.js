// _runtime/08112_SliderTrackMark.js
import noop2 from "00019_noop.js";
import styles from "08110_styles.js";
import 08106__ from "metro/08106__.js";
import get_ActivityIndicator from "00017_get_ActivityIndicator.js";
import jsxProd from "react/00021_jsxProd.js";

const noop = module_8106(noop2);

export const SliderTrackMark = function SliderTrackMark(arg0) {
  ({ isTrue, thumbImage, StepMarker } = arg0);
  let obj = { style: styles.styles.trackMarkContainer, children: null };
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
      obj1[0] = styles.styles.thumbImageContainer;
      const obj2 = { source: null, style: null };
      obj2[0] = thumbImage;
      obj2[1] = styles.styles.thumbImage;
      obj1[1] = <get ActivityIndicator.Image source={null} style={null} />;
      jsxResult1 = <get ActivityIndicator.View style={null}>{null}</get ActivityIndicator.View>;
    }
  }
  items[1] = jsxResult1;
  obj[1] = items;
  return <get ActivityIndicator.View style={styles.styles.trackMarkContainer}>{null}</get ActivityIndicator.View>;
};