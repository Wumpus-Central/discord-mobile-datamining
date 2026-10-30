// discord_app/modules/main_tabs_v2/native/tabs/you/YouScreenNavIconMeasurer.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import ContextUtilsDefault from "../../../../../utils/ContextUtils.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

const PixelRatio = fn(17).PixelRatio;
const jsx = fn(21).jsx;
const PX_4 = nativeDefault.space.PX_4;
[hasOwnProperty, metroRequire] = ContextUtilsDefault();
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/you/YouScreenNavIconMeasurer.tsx");

export function YouScreenNavIconMeasurer(children) {
  width = undefined;
  closure_2 = undefined;
  _slicedToArray = width.useRef(new Map());
  [width, closure_2] = width.useState();
  const onWidthMeasured = width.useCallback((arg0, arg1) => {
    if (null == arg1) {
      const current2 = ref.current;
      current2.delete(arg0);
      let tmp = ref;
    } else {
      tmp = ref;
      const current = ref.current;
      const result = current.set(arg0, arg1);
    }
    const current3 = tmp.current;
    const items = [0];
    HermesBuiltin.arraySpread(current3.values(), 1);
    closure_2(PixelRatio.roundToNearestPixel(Math.max.apply(items) + PX_4));
  }, []);
  let items = [width, onWidthMeasured];
  const map = new Map();
  return onWidthMeasured(redux.Provider, {
    value: width.useMemo(() => ({ width, onWidthMeasured }), items),
    children: children.children,
  });
}
export function useYouScreenNavIconMeasurement() {
  const tmp = timestampProducer();
  const onWidthMeasured = tmp.onWidthMeasured;
  const id = noop.useId();
  const ref = noop.useRef(null);
  const tmp4 = _slicedToArray(noop.useState(false), 2);
  closure_3 = tmp4[1];
  const items = [id, onWidthMeasured];
  const layoutEffect = noop.useLayoutEffect(() => {
    const current = ref.current;
    if (null != current) {
      current.measureLayout(current, (arg0, arg1, arg2) => {
        onWidthMeasured(id, arg2);
        closure_1_3(true);
      });
      return () => onWidthMeasured(id, null);
    }
  }, items);
  const obj = { containerRef: ref, width: null };
  let width;
  if (tmp4[0]) {
    width = tmp.width;
  }
  obj.width = width;
  return obj;
}
