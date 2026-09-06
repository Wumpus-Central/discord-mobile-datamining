// _runtime/metro/01586__.js
import _slicedToArray from "00032__.js";
import noop from "00019__.js";

const require = fn;
const I18nManager = fn(17).I18nManager;
const jsx = fn(21).jsx;
const weakMap = new WeakMap();
globalThis.REACT_NAVIGATION_DEVTOOLS = weakMap;

export const NavigationContainer = noop.forwardRef(function NavigationContainerInner(direction, arg1) {
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
    DefaultTheme = linking(1587).DefaultTheme;
  }
  linking = direction.linking;
  let fallback = direction.fallback;
  if (fallback === undefined) {
    fallback = null;
  }
  let merged = Object.assign(
    direction,
    Object.assign({ direction: 0, theme: 0, linking: 0, fallback: 0, documentTitle: 0 }),
  );
  dependencyMap = undefined;
  let ref;
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
    let obj = linking(1486);
    obj.validatePathConfig(linking.config);
  }
  ref = noop.useRef(null);
  let obj1 = linking(1589);
  const backButton = obj1.useBackButton(ref);
  let obj2 = linking(1590);
  const documentTitle = obj2.useDocumentTitle(ref, direction.documentTitle);
  let obj3 = linking(1591);
  obj = { enabled: tmp6, prefixes: [] };
  const merged1 = Object.assign(linking);
  const items = [linking];
  const memo = noop.useMemo(() => ({ options: linking }), items);
  const effect = noop.useEffect(() => {
    if (ref.current) {
      let obj = {};
      Object.defineProperty(obj, "linking", {
        get: () => {
          const obj = {};
          const merged = Object.assign(closure_1_0);
          obj.enabled = enabled;
          let prefixes;
          if (closure_1_0 != null) {
            prefixes = closure_1_0.prefixes;
          }
          if (prefixes == null) {
            prefixes = [];
          }
          obj.prefixes = prefixes;
          let getStateFromPath;
          if (closure_1_0 != null) {
            getStateFromPath = closure_1_0.getStateFromPath;
          }
          if (getStateFromPath == null) {
            getStateFromPath = linking(enabled[5]).getStateFromPath;
          }
          obj.getStateFromPath = getStateFromPath;
          let getPathFromState;
          if (closure_1_0 != null) {
            getPathFromState = closure_1_0.getPathFromState;
          }
          if (getPathFromState == null) {
            getPathFromState = linking(enabled[5]).getPathFromState;
          }
          obj.getPathFromState = getPathFromState;
          let getActionFromState;
          if (closure_1_0 != null) {
            getActionFromState = closure_1_0.getActionFromState;
          }
          if (getActionFromState == null) {
            getActionFromState = linking(enabled[5]).getActionFromState;
          }
          obj.getActionFromState = getActionFromState;
          return obj;
        },
        set: undefined,
      });
      const result = globalThis.REACT_NAVIGATION_DEVTOOLS.set(tmp.current, obj);
    }
  });
  const obj6 = linking(1593);
  [tmp20, initialState] = ref(linking(1593).useThenable(obj3.useLinking(ref, obj).getInitialState), 2);
  const imperativeHandle = noop.useImperativeHandle(arg1, () => ref.current);
  obj = { value: direction, children: null };
  if (tmp22) {
    obj1 = { value: memo, children: null };
    obj2 = {};
    const merged2 = Object.assign(merged);
    obj2.theme = DefaultTheme;
    if (null != merged.initialState) {
      initialState = merged.initialState;
    }
    obj2.initialState = initialState;
    obj2.ref = ref;
    obj1.children = jsx(tmp12(1486).BaseNavigationContainer, {});
    obj.children = jsx(tmp12(1583).LinkingContext.Provider, { value: memo, children: null });
    let tmp24 = obj;
  } else {
    obj3 = { value: DefaultTheme, children: fallback };
    obj.children = jsx(tmp12(1486).ThemeProvider, { value: DefaultTheme, children: fallback });
    tmp24 = obj;
  }
  return jsx(linking(1594).LocaleDirContext.Provider, tmp24);
});
