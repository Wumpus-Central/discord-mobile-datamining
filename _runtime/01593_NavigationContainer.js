// === Module 1593: NavigationContainer ===

// Module 1593 (NavigationContainer)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;

let dependencyMap, set;

const I18nManager = react_native.I18nManager;
const jsx = Fragment.jsx;
const weakMap = new WeakMap();
globalThis.REACT_NAVIGATION_DEVTOOLS = weakMap;

export const NavigationContainer = react.forwardRef(function NavigationContainerInner(direction, arg1) {
  let closure_1;
  let initialState;
  let linking;
  let tmp21;
  let tmp25;
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
    DefaultTheme = linking(1594).DefaultTheme;
  }
  linking = direction.linking;
  let fallback = direction.fallback;
  if (fallback === undefined) {
    fallback = null;
  }
  const documentTitle = direction.documentTitle;
  let merged = Object.assign(direction, Object.assign({ direction: 0, theme: 0, linking: 0, fallback: 0, documentTitle: 0 }));
  let ref;
  dependencyMap = tmp6;
  let config;
  if (linking != null) {
    config = linking.config;
  }
  if (config) {
    let obj = linking(1493);
    obj.validatePathConfig(linking.config);
  }
  ref = react.useRef(null);
  const obj2 = linking(1596);
  const backButton = obj2.useBackButton(ref);
  const obj3 = linking(1597);
  const documentTitle1 = obj3.useDocumentTitle(ref, documentTitle);
  const useLinking = linking(1598).useLinking;
  const obj4 = { enabled: linking && false !== linking.enabled, prefixes: [] };
  linking(1598);
  const merged1 = Object.assign(linking);
  const items = [linking];
  const getInitialState = useLinking(ref, obj4).getInitialState;
  const memo = react.useMemo(() => ({ options: linking }), items);
  const effect = react.useEffect(() => {
    let enabled;
    if (ref.current) {
      let obj = {};
      const current = tmp.current;
      set = globalThis.REACT_NAVIGATION_DEVTOOLS.set;
      Object.defineProperty(obj, "linking", {
        get: () => {
            let getActionFromState;
            let getPathFromState;
            let getStateFromPath;
            let prefixes;
            const obj = { enabled, prefixes, getStateFromPath, getPathFromState, getActionFromState };
            const merged = Object.assign(closure_1_0);
            prefixes = undefined;
            if (closure_1_0 != null) {
              prefixes = closure_1_0.prefixes;
            }
            if (prefixes == null) {
              prefixes = [];
            }
            getStateFromPath = undefined;
            if (closure_1_0 != null) {
              getStateFromPath = closure_1_0.getStateFromPath;
            }
            if (getStateFromPath == null) {
              getStateFromPath = linking(enabled[5]).getStateFromPath;
            }
            getPathFromState = undefined;
            if (closure_1_0 != null) {
              getPathFromState = closure_1_0.getPathFromState;
            }
            if (getPathFromState == null) {
              getPathFromState = linking(enabled[5]).getPathFromState;
            }
            getActionFromState = undefined;
            if (closure_1_0 != null) {
              getActionFromState = closure_1_0.getActionFromState;
            }
            if (getActionFromState == null) {
              getActionFromState = linking(enabled[5]).getActionFromState;
            }
            return obj;
          },
        set: undefined
      });
      const result = set(current, obj);
    }
  });
  const obj5 = linking(1600);
  [tmp21, initialState] = ref(obj5.useThenable(getInitialState), 2);
  ref(obj5.useThenable(getInitialState), 2);
  const imperativeHandle = react.useImperativeHandle(arg1, () => ref.current);
  const obj6 = { value: direction, children: null };
  const tmp23 = null != merged.initialState || !(linking && false !== linking.enabled) || tmp21;
  const Provider = tmp12(1601).LocaleDirContext.Provider;
  if (tmp23) {
    const Provider2 = tmp12(1590).LinkingContext.Provider;
    const BaseNavigationContainer = tmp12(1493).BaseNavigationContainer;
    const merged2 = Object.assign(merged);
    if (null != merged.initialState) {
      initialState = merged.initialState;
    }
    obj6.children = <Provider2 value={memo}>{null}</Provider2>;
    tmp25 = obj6;
  } else {
    obj6.children = jsx(linking(1493).ThemeProvider, { value: DefaultTheme, children: fallback });
    tmp25 = obj6;
  }
  return <Provider {...tmp25} />;
});