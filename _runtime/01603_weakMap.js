// _runtime/01603_weakMap.js
import closure_2 from "metro/00032__slicedToArray.js";
import importAllResult from "00019_noop.js";
import { I18nManager } from "00017_get_ActivityIndicator.js";
import { jsx } from "react/00021_jsxProd.js";

const require = arg1;
let c3 = importAllResult;
const weakMap = new WeakMap();
globalThis.REACT_NAVIGATION_DEVTOOLS = weakMap;

export const NavigationContainer = importAllResult.forwardRef(function NavigationContainerInner(direction, ref) {
  direction = direction.direction;
  if (direction === undefined) {
    let str = "ltr";
    if (I18nManager.getConstants().isRTL) {
      str = "rtl";
    }
    direction = str;
  }
  let DefaultTheme = direction.theme;
  if (DefaultTheme === undefined) {
    DefaultTheme = linking(1604).DefaultTheme;
  }
  linking = direction.linking;
  let fallback = direction.fallback;
  if (fallback === undefined) {
    fallback = null;
  }
  let merged = Object.assign(direction, Object.create(null));
  dependencyMap = undefined;
  ref = undefined;
  let tmp6 = linking;
  if (tmp6) {
    tmp6 = false !== linking.enabled;
  }
  dependencyMap = tmp6;
  let config;
  if (linking != null) {
    config = linking.config;
  }
  if (config) {
    let obj = linking(1503);
    obj.validatePathConfig(linking.config);
  }
  ref = importAllResult.useRef(null);
  obj1 = linking(1606);
  const backButton = obj1.useBackButton(ref);
  let obj2 = linking(1607);
  const documentTitle = obj2.useDocumentTitle(ref, direction.documentTitle);
  let obj3 = linking(1608);
  obj = { enabled: tmp6, prefixes: [] };
  const merged1 = Object.assign(linking);
  const items = [linking];
  const memo = importAllResult.useMemo(() => ({ options: linking }), items);
  const effect = importAllResult.useEffect(() => {
    if (ref.current) {
      let obj = {};
      Object.defineProperty(obj, "linking", {
        get: () => {
            const obj = {};
            const merged = Object.assign(closure_0);
            obj.enabled = closure_1;
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
              getStateFromPath = closure_1_0(closure_1_1[5]).getStateFromPath;
            }
            obj.getStateFromPath = getStateFromPath;
            let getPathFromState;
            if (closure_0 != null) {
              getPathFromState = tmp.getPathFromState;
            }
            if (getPathFromState == null) {
              getPathFromState = closure_1_0(closure_1_1[5]).getPathFromState;
            }
            obj.getPathFromState = getPathFromState;
            let getActionFromState;
            if (closure_0 != null) {
              getActionFromState = tmp.getActionFromState;
            }
            if (getActionFromState == null) {
              getActionFromState = closure_1_0(closure_1_1[5]).getActionFromState;
            }
            obj.getActionFromState = getActionFromState;
            return obj;
          },
        set: undefined
      });
      const result = globalThis.REACT_NAVIGATION_DEVTOOLS.set(tmp.current, obj);
    }
  });
  const obj6 = linking(1610);
  [tmp20, initialState] = ref(linking(1610).useThenable(obj3.useLinking(ref, obj).getInitialState), 2);
  const imperativeHandle = importAllResult.useImperativeHandle(ref, () => ref.current);
  obj = { value: direction, children: null };
  if (tmp22) {
    obj1 = { value: null, children: null };
    obj1[0] = memo;
    obj2 = {};
    const merged2 = Object.assign(merged);
    obj2.theme = DefaultTheme;
    if (null != merged.initialState) {
      initialState = merged.initialState;
    }
    obj2.initialState = initialState;
    obj2.ref = ref;
    obj1[1] = tmp23(tmp12(1503).BaseNavigationContainer, obj2);
    obj[1] = tmp23(tmp12(1600).LinkingContext.Provider, obj1);
    let tmp24 = obj;
  } else {
    obj3 = { value: null, children: null };
    obj3[0] = DefaultTheme;
    obj3[1] = fallback;
    obj[1] = tmp23(tmp12(1503).ThemeProvider, obj3);
    tmp24 = obj;
  }
  return jsx(linking(1611).LocaleDirContext.Provider, tmp24);
});