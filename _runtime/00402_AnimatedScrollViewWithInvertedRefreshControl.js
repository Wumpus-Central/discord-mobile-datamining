import _slicedToArray from "_slicedToArray";
import "noop";
import noop from "noop";
import { jsx } from "jsxProd";
import _isNativeReflectConstruct from "_isNativeReflectConstruct";

let c3;
let c4;
({ cloneElement: c3, useMemo: c4 } = noop);
function AnimatedScrollViewWithInvertedRefreshControl(ref) {
  let intermediatePropsForRefreshControl;
  let intermediatePropsForScrollView;
  let tmp8;
  let tmp9;
  let merged = Object.assign(ref, Object.create(null));
  const items = [merged];
  ({ intermediatePropsForRefreshControl, intermediatePropsForScrollView } = callback3(() => {
    const tmpResult = merged(outer1_1[3])(merged(outer1_1[4])(merged.style));
    obj = { intermediatePropsForRefreshControl: obj, intermediatePropsForScrollView: null };
    obj = { style: tmpResult.outer };
    obj = {};
    merged = Object.assign(merged);
    obj.style = tmpResult.inner;
    obj[1] = obj;
    return obj;
  }, items));
  const tmp3 = callback(merged(404)(intermediatePropsForRefreshControl), 2);
  const first = tmp3[0];
  let obj = {};
  const merged1 = Object.assign(first);
  obj.ref = tmp3[1];
  const tmp2 = callback3(() => {
    const tmpResult = merged(outer1_1[3])(merged(outer1_1[4])(merged.style));
    obj = { intermediatePropsForRefreshControl: obj, intermediatePropsForScrollView: null };
    obj = { style: tmpResult.outer };
    obj = {};
    merged = Object.assign(merged);
    obj.style = tmpResult.inner;
    obj[1] = obj;
    return obj;
  }, items);
  const tmp6 = callback2(merged.refreshControl, obj);
  [tmp8, tmp9] = callback(merged(404)(intermediatePropsForScrollView), 2);
  const tmp7 = callback(merged(404)(intermediatePropsForScrollView), 2);
  obj = {};
  const tmp10 = merged(334)(tmp9, ref.ref);
  const merged2 = Object.assign(tmp8);
  obj.ref = tmp10;
  obj.refreshControl = tmp6;
  const tmp11 = merged(349);
  obj.style = merged(254).compose(tmp8.style, first.style);
  return <tmp11 />;
}

export default function AnimatedScrollViewWithOrWithoutInvertedRefreshControl(ref) {
  const merged = Object.assign(ref, Object.create(null));
  if (null != merged.refreshControl) {
    if (null != merged.style) {
      let obj = { scrollEventThrottle: 0.0001 };
      const merged1 = Object.assign(merged);
      obj.ref = ref;
      obj.refreshControl = merged.refreshControl;
      let tmp3 = <AnimatedScrollViewWithInvertedRefreshControl scrollEventThrottle={0.0001} />;
    }
    return tmp3;
  }
  obj = { scrollEventThrottle: 0.0001 };
  const merged2 = Object.assign(merged);
  obj.ref = ref.ref;
  tmp3 = <_isNativeReflectConstruct scrollEventThrottle={0.0001} />;
};