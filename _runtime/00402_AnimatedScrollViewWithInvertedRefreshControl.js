// _runtime/00402_AnimatedScrollViewWithInvertedRefreshControl.js
import flattenStyleDefault from "00148_flattenStyle.js";
import _modDef349 from "metro/00349__.js";
import splitLayoutPropsDefault from "00403_splitLayoutProps.js";
import _slicedToArray from "metro/00032__.js";
import "module_19";
import module_387 from "00387_unstable_createAnimatedComponentWithAllowlist.js";

const noop = fn(19);
({ cloneElement: c3, useMemo: closure_4 } = noop);
const jsx = fn(21).jsx;
function AnimatedScrollViewWithInvertedRefreshControl(ref) {
  let merged = Object.assign(ref, Object.assign({ ref: 0 }));
  const items = [merged];
  ({ intermediatePropsForRefreshControl, intermediatePropsForScrollView } = closure_4(() => {
    const tmpResult = splitLayoutPropsDefault(flattenStyleDefault(merged.style));
    const obj = {
      intermediatePropsForRefreshControl: { style: tmpResult.outer },
      intermediatePropsForScrollView: null,
    };
    const obj2 = {};
    merged = Object.assign(merged);
    obj2.style = tmpResult.inner;
    obj.intermediatePropsForScrollView = obj2;
    return obj;
  }, items));
  [first, obj.ref] = merged(404)(intermediatePropsForRefreshControl);
  let obj = {};
  const merged1 = Object.assign(first);
  const tmp2 = closure_4(() => {
    const tmpResult = splitLayoutPropsDefault(flattenStyleDefault(merged.style));
    const obj = {
      intermediatePropsForRefreshControl: { style: tmpResult.outer },
      intermediatePropsForScrollView: null,
    };
    const obj2 = {};
    merged = Object.assign(merged);
    obj2.style = tmpResult.inner;
    obj.intermediatePropsForScrollView = obj2;
    return obj;
  }, items);
  const tmp6 = closure_3(merged.refreshControl, obj);
  [tmp8, tmp9] = merged(404)(intermediatePropsForScrollView);
  const tmp7 = _slicedToArray(merged(404)(intermediatePropsForScrollView), 2);
  let obj2 = {};
  const tmp10 = merged(334)(tmp9, ref.ref);
  const merged2 = Object.assign(tmp8);
  obj2.ref = tmp10;
  obj2.refreshControl = tmp6;
  const tmp11 = merged(349);
  obj2.style = merged(254).compose(tmp8.style, first.style);
  return <tmp11 />;
}
const _isNativeReflectConstruct = module_387(_modDef349);

export default function AnimatedScrollViewWithOrWithoutInvertedRefreshControl(ref) {
  const merged = Object.assign(ref, Object.assign({ ref: 0 }));
  if (null != merged.refreshControl) {
    if (null != merged.style) {
      const obj2 = { scrollEventThrottle: 0.0001 };
      const merged1 = Object.assign(merged);
      obj2.ref = ref;
      obj2.refreshControl = merged.refreshControl;
      let tmp3 = <AnimatedScrollViewWithInvertedRefreshControl scrollEventThrottle={0.0001} />;
    }
    return tmp3;
  }
  const obj = { scrollEventThrottle: 0.0001 };
  const merged2 = Object.assign(merged);
  obj.ref = ref.ref;
  tmp3 = <_isNativeReflectConstruct scrollEventThrottle={0.0001} />;
}
