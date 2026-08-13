// _runtime/08041_SliderTrackMark.js
import 08035__ from "metro/08035__.js";
import noop from "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import { styles } from "08039_styles.js";


export const SliderTrackMark = function SliderTrackMark(arg0) {
  let StepMarker;
  let currentValue;
  let index;
  let isTrue;
  let max;
  let min;
  let thumbImage;
  ({ isTrue, thumbImage, StepMarker } = arg0);
  let obj = jsxProd;
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
      const obj1 = { style: null, children: null };
      obj1[0] = tmp2(8039).styles.thumbImageContainer;
      const obj2 = { source: null, style: null };
      obj2[0] = thumbImage;
      obj2[1] = tmp2(8039).styles.thumbImage;
      obj1[1] = <tmp.Image source={null} style={null} />;
      jsxResult1 = <tmp.View style={null}>{null}</tmp.View>;
    }
  }
  items[1] = jsxResult1;
  obj[1] = items;
  return <get ActivityIndicator.View style={styles.styles.trackMarkContainer}>{null}</get ActivityIndicator.View>;
};