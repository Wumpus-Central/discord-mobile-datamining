// === Module 402: AnimatedScrollViewWithInvertedRefreshControl ===

// Module 402 (AnimatedScrollViewWithInvertedRefreshControl)
import flattenStyleDefault from "flattenStyle" /* 148 */;
import _modDef349 from "module_349" /* 349 */;
import splitLayoutPropsDefault from "splitLayoutProps" /* 403 */;
import _slicedToArray from "module_32" /* 32 */;
import "module_19";
import module_387 from "unstable_createAnimatedComponentWithAllowlist" /* 387 */;

const noop = fn(19);
({ cloneElement: c3, useMemo: closure_4 } = noop);
const jsx = fn(21).jsx;
function AnimatedScrollViewWithInvertedRefreshControl(ref) {
  let merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const items = [merged];
  ({ intermediatePropsForRefreshControl, intermediatePropsForScrollView } = closure_4(() => {
    const tmpResult = splitLayoutPropsDefault(flattenStyleDefault(merged.style));
    let obj = { intermediatePropsForRefreshControl: { style: tmpResult.outer }, intermediatePropsForScrollView: null };
    obj = {};
    merged = Object.assign(merged);
    obj.style = tmpResult.inner;
    obj.intermediatePropsForScrollView = obj;
    return obj;
  }, items));
  const tmp3 = _slicedToArray(merged(404)(intermediatePropsForRefreshControl), 2);
  const first = tmp3[0];
  let obj = {};
  const merged1 = Object.assign(first);
  obj.ref = tmp3[1];
  const tmp2 = closure_4(() => {
    const tmpResult = splitLayoutPropsDefault(flattenStyleDefault(merged.style));
    let obj = { intermediatePropsForRefreshControl: { style: tmpResult.outer }, intermediatePropsForScrollView: null };
    obj = {};
    merged = Object.assign(merged);
    obj.style = tmpResult.inner;
    obj.intermediatePropsForScrollView = obj;
    return obj;
  }, items);
  const tmp6 = closure_3(merged.refreshControl, obj);
  [tmp8, tmp9] = _slicedToArray(merged(404)(intermediatePropsForScrollView), 2);
  const tmp7 = _slicedToArray(merged(404)(intermediatePropsForScrollView), 2);
  obj = {};
  const tmp10 = merged(334)(tmp9, ref.ref);
  const merged2 = Object.assign(tmp8);
  obj.ref = tmp10;
  obj.refreshControl = tmp6;
  const tmp11 = merged(349);
  obj.style = merged(254).compose(tmp8.style, first.style);
  return <tmp11 />;
}
const _isNativeReflectConstruct = module_387(_modDef349);

export default function AnimatedScrollViewWithOrWithoutInvertedRefreshControl(ref) {
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
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