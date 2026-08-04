// _runtime/01560_weakMap.js
import _slicedToArray from "_slicedToArray";
import importAllResult from "noop";
import { jsx } from "jsxProd";

const require = arg1;
let c4 = importAllResult;
const weakMap = new WeakMap();
global.REACT_NAVIGATION_DEVTOOLS = weakMap;

export default importAllResult.forwardRef(function NavigationContainerInner(theme, ref) {
  let initialState;
  let tmp19;
  theme = theme.theme;
  if (theme === undefined) {
    theme = onReady(1561);
  }
  const linking = theme.linking;
  let fallback = theme.fallback;
  if (fallback === undefined) {
    fallback = null;
  }
  onReady = theme.onReady;
  let merged = Object.assign(theme, Object.create(null));
  let dependencyMap;
  ref = undefined;
  let importAllResult;
  let closure_5;
  let tmp5 = linking;
  if (tmp5) {
    tmp5 = false !== linking.enabled;
  }
  dependencyMap = tmp5;
  let config;
  if (linking != null) {
    config = linking.config;
  }
  if (config) {
    let obj = linking(1483);
    obj.validatePathConfig(linking.config);
  }
  let obj1 = importAllResult;
  ref = importAllResult.useRef(null);
  onReady(1562)(ref);
  onReady(1563)(ref, theme.documentTitle);
  obj = { independent: merged.independent, enabled: tmp5, prefixes: [] };
  const merged1 = Object.assign(linking);
  const effect = importAllResult.useEffect(() => {
    if (ref.current) {
      let obj = {};
      Object.defineProperty(obj, "linking", {
        get: () => {
            const obj = {};
            const merged = Object.assign(closure_0);
            obj.enabled = closure_2;
            let prefixes;
            if (closure_0 != null) {
              prefixes = tmp.prefixes;
            }
            if (prefixes == null) {
              prefixes = [];
            }
            obj.prefixes = prefixes;
            let getStateFromPath;
            if (closure_0 != null) {
              getStateFromPath = tmp.getStateFromPath;
            }
            if (getStateFromPath == null) {
              getStateFromPath = outer1_0(outer1_2[4]).getStateFromPath;
            }
            obj.getStateFromPath = getStateFromPath;
            let getPathFromState;
            if (closure_0 != null) {
              getPathFromState = tmp.getPathFromState;
            }
            if (getPathFromState == null) {
              getPathFromState = outer1_0(outer1_2[4]).getPathFromState;
            }
            obj.getPathFromState = getPathFromState;
            let getActionFromState;
            if (closure_0 != null) {
              getActionFromState = tmp.getActionFromState;
            }
            if (getActionFromState == null) {
              getActionFromState = outer1_0(outer1_2[4]).getActionFromState;
            }
            obj.getActionFromState = getActionFromState;
            return obj;
          },
        set: undefined
      });
      const result = globalThis.REACT_NAVIGATION_DEVTOOLS.set(tmp.current, obj);
    }
  });
  const tmp15 = onReady(1564);
  [tmp19, initialState] = ref(onReady(1566)(onReady(1564)(ref, obj).getInitialState), 2);
  const imperativeHandle = importAllResult.useImperativeHandle(ref, () => ref.current);
  const items = [linking];
  let tmp22 = null != merged.initialState;
  const memo = importAllResult.useMemo(() => ({ options: linking }), items);
  if (!tmp22) {
    tmp22 = !tmp5;
  }
  if (!tmp22) {
    tmp22 = tmp19;
  }
  importAllResult = tmp22;
  closure_5 = obj1.useRef(onReady);
  const effect1 = obj1.useEffect(() => {
    closure_5.current = onReady;
  });
  const items1 = [tmp22];
  const effect2 = obj1.useEffect(() => {
    if (c4) {
      const current = ref.current;
      if (current != null) {
        current();
      }
    }
  }, items1);
  if (tmp22) {
    obj = { value: null, children: null };
    obj[0] = memo;
    obj1 = { value: null, children: null };
    obj1[0] = theme;
    const obj2 = {};
    const merged2 = Object.assign(merged);
    if (null != merged.initialState) {
      initialState = merged.initialState;
    }
    obj2.initialState = initialState;
    obj2.ref = ref;
    obj1[1] = closure_5(linking(1483).BaseNavigationContainer, obj2);
    obj[1] = closure_5(tmp11(1567), obj1);
    fallback = tmp25(tmp11(1558).Provider, obj);
    const tmp11Result = tmp11(1567);
  }
  return fallback;
});