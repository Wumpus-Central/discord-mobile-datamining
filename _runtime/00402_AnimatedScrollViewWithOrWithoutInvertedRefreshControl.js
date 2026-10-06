// === Module 402: AnimatedScrollViewWithOrWithoutInvertedRefreshControl ===

// Module 402 (AnimatedScrollViewWithOrWithoutInvertedRefreshControl)
import Fragment from "Fragment" /* 21 */;
import flattenStyleDefault from "flattenStyle" /* 148 */;
import _modDef349 from "module_349" /* 349 */;
import splitLayoutPropsDefault from "splitLayoutProps" /* 403 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import "react";
import react from "react" /* 19 */;
import createAnimatedComponent from "createAnimatedComponent" /* 387 */;

let c3;
let closure_4;
({ cloneElement: c3, useMemo: closure_4 } = react);
const jsx = Fragment.jsx;
function AnimatedScrollViewWithInvertedRefreshControl(ref) {
  let intermediatePropsForRefreshControl;
  let intermediatePropsForScrollView;
  let tmp10;
  let tmp5;
  let tmp9;
  const f81415 = () => {
    let inner;
    let obj2;
    const tmp = splitLayoutPropsDefault;
    const tmpResult = tmp(flattenStyleDefault(merged.style));
    const obj = { intermediatePropsForRefreshControl: { style: tmpResult.outer }, intermediatePropsForScrollView: obj2 };
    obj2 = { style: inner };
    inner = tmpResult.inner;
    merged = Object.assign(merged);
    return obj;
  };
  let merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const items = [merged];
  ({ intermediatePropsForRefreshControl, intermediatePropsForScrollView } = closure_4(f81415, items));
  closure_4(f81415, items);
  const tmp3 = _slicedToArray(merged(404)(intermediatePropsForRefreshControl), 2);
  const first = tmp3[0];
  let obj = { ref: tmp5 };
  const refreshControl = merged.refreshControl;
  tmp5 = tmp3[1];
  const merged1 = Object.assign(first);
  const tmp7 = closure_3(refreshControl, obj);
  [tmp9, tmp10] = merged(404)(intermediatePropsForScrollView);
  _slicedToArray(merged(404)(intermediatePropsForScrollView), 2);
  const tmp11 = merged(334)(tmp10, ref.ref);
  merged(349);
  const merged2 = Object.assign(tmp9);
  const obj3 = merged(254);
  return <tmp12 ref={tmp11} refreshControl={tmp7} style={obj3.compose(tmp9.style, first.style)} />;
}
createAnimatedComponent(_modDef349);

export default function AnimatedScrollViewWithOrWithoutInvertedRefreshControl(ref) {
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  if (null != merged.refreshControl) {
    let tmp3;
    if (null != merged.style) {
      const merged1 = Object.assign(merged);
      tmp3 = <AnimatedScrollViewWithInvertedRefreshControl scrollEventThrottle={0.0001} ref={ref.ref} refreshControl={merged.refreshControl} />;
    }
    return tmp3;
  }
  const merged2 = Object.assign(merged);
  tmp3 = <Wrapper scrollEventThrottle={0.0001} ref={ref.ref} />;
};