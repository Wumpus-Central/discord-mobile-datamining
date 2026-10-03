// === Module 12779: MediaModalLoader ===

// Module 12779 (MediaModalLoader)
import nativeDefault from "native" /* 587 */;
import _slicedToArray from "module_32" /* 32 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
let closure_3 = ["Component", "style", "onLoadStart", "onLoad", "onError", "index", "source"];
get_ActivityIndicator = fn(17);
({ View: closure_7, ActivityIndicator: closure_8, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4890);
let obj = { loader: null, loaderIndicator: null, loaderText: null };
let obj3 = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.flex = 1;
obj3.alignItems = "center";
obj3.justifyContent = "center";
obj3.backgroundColor = "rgba(0, 0, 0, 0.7)";
obj.loader = obj3;
obj.loaderIndicator = { marginTop: nativeDefault.space.PX_12 };
obj.loaderText = { textAlign: "center" };
let closure_11 = createStyles.createStyles(obj);
let closure_12 = { None: 0, [0]: "None", Loading: 1, [1]: "Loading", Loaded: 2, [2]: "Loaded", Error: 3, [3]: "Error" };
const ReactCompilerGating = fn(558);
let obj4 = { marginTop: nativeDefault.space.PX_12 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaModalLoader.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((onLoad) => {
  const cResult = require("c").c(29);
  if (cResult[0] !== onLoad) {
    ({ Component, style, onLoadStart } = onLoad);
    dependencyMap = onLoadStart;
    onLoad = onLoad.onLoad;
    closure_1 = onLoad;
    const onError = onLoad.onError;
    _require = onError;
    ({ index, source } = onLoad);
    const tmp12 = _objectWithoutProperties(onLoad, first);
    cResult[0] = onLoad;
    cResult[1] = Component;
    cResult[2] = onError;
    cResult[3] = onLoad;
    cResult[4] = onLoadStart;
    cResult[5] = tmp12;
    cResult[6] = source;
    cResult[7] = style;
    cResult[8] = index;
  } else {
    _require = cResult[2];
    closure_1 = cResult[3];
    dependencyMap = cResult[4];
  }
  closure_11();
  [first, _slicedToArray] = noop.useState(closure_12.None);
  const obj = require("c");
  [r10054, _objectWithoutProperties] = noop.useState(0);
  noop = noop.useRef(null);
  if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
    class I {
      constructor() {
        timerId = setTimeout(() => { ... }, 1000);
        closure_6.current = timerId;
        return timerId;
      }
    }
    cResult[9] = I;
  } else {
    class I {
      constructor() {
        timerId = setTimeout(() => { ... }, 1000);
        closure_6.current = timerId;
        return timerId;
      }
    }
  }
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    class O {
      constructor(arg0) {
        nativeEvent = onLoad.nativeEvent;
        tmp = closure_5(100 * nativeEvent.loaded / nativeEvent.total);
        return;
      }
    }
    cResult[10] = O;
  } else {
    class O {
      constructor(arg0) {
        nativeEvent = onLoad.nativeEvent;
        tmp = closure_5(100 * nativeEvent.loaded / nativeEvent.total);
        return;
      }
    }
  }
  if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
    class Y {
      constructor() {
        return closure_4(closure_12.Loaded);
      }
    }
    cResult[11] = Y;
  } else {
    class Y {
      constructor() {
        return closure_4(closure_12.Loaded);
      }
    }
  }
  if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
    class Y {
      constructor() {
        return closure_4(closure_12.Loaded);
      }
    }
    cResult[12] = tmp22;
  } else {
    class Y {
      constructor() {
        return closure_4(closure_12.Loaded);
      }
    }
  }
  if (cResult[13] === tmp3) {
    class Y {
      constructor() {
        return closure_4(closure_12.Loaded);
      }
    }
  }
  class D {
    constructor() {
      tmp = closure_3;
      tmp2 = closure_12;
      if (closure_12.Loading === closure_3) {
        tmp10 = null;
        if (closure_2 != null) {
          tmp9Result = tmp9();
        }
      } else if (tmp2.Error === tmp) {
        tmp7 = null;
        if (closure_0 != null) {
          tmp6Result = tmp6();
        }
      } else if (tmp2.Loaded === tmp) {
        tmp4 = null;
        if (closure_1 != null) {
          tmp3Result = tmp3();
        }
      }
      return;
    }
  }
  const items = [first, onLoadStart, tmp3, tmp4];
  cResult[13] = tmp3;
  cResult[14] = tmp4;
  cResult[15] = onLoadStart;
  cResult[16] = first;
  cResult[17] = D;
  cResult[18] = items;
  const tmp17 = _slicedToArray(noop.useState(0), 2);
}) : ((onLoad) => {
  ({ style, onLoadStart } = onLoad);
  onLoad = onLoad.onLoad;
  const onError = onLoad.onError;
  let num = onLoad.index;
  if (num === undefined) {
    num = 0;
  }
  const source = onLoad.source;
  const merged = Object.assign(onLoad, Object.assign({ Component: 0, style: 0, onLoadStart: 0, onLoad: 0, onError: 0, index: 0, source: 0 }));
  first = undefined;
  _slicedToArray = undefined;
  c5 = undefined;
  noop = undefined;
  const tmp2 = closure_11();
  [first, _slicedToArray] = noop.useState(closure_12.None);
  [tmp8, c5] = noop.useState(0);
  noop = noop.useRef(null);
  const callback = noop.useCallback(() => {
    const timerId = setTimeout(() => {
      closure_1_4((arg0) => arg0 === None.None ? None.Loading : None.None);
    }, 1000);
    closure_6.current = timerId;
    return timerId;
  }, []);
  const callback1 = noop.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    _undefined(100 * nativeEvent.loaded / nativeEvent.total);
  }, []);
  const callback2 = noop.useCallback(() => closure_4(closure_12.Loaded), []);
  const items = [first, onLoadStart, onError, onLoad];
  const callback3 = noop.useCallback(() => closure_4(closure_12.Error), []);
  const effect = noop.useEffect(() => {
    if (closure_12.Loading === first) {
      if (onLoadStart != null) {
        tmp9();
      }
    } else if (closure_12.Error === first) {
      if (onError != null) {
        tmp6();
      }
    } else if (closure_12.Loaded === first) {
      if (onLoad != null) {
        tmp3();
      }
    }
  }, items);
  const effect1 = noop.useEffect(() => () => clearTimeout(ref.current));
  if (first === closure_12.Error) {
    const obj2 = { style: null, children: null };
    const items1 = [tmp2.loader, style];
    obj2.style = items1;
    const obj3 = { style: tmp2.loaderText, variant: "heading-md/semibold", color: "text-overlay-light", children: null };
    const intl = onLoadStart(onError[10]).intl;
    obj3.children = intl.string(onLoadStart(onError[10]).t["+ITMYX"]);
    obj2.children = closure_9(onLoadStart(onError[9]).Text, obj3);
    let tmp28Result4 = closure_9(closure_7, obj2);
  } else {
    const obj4 = {};
    const merged1 = Object.assign(merged);
    obj4.style = style;
    obj4.source = source;
    obj4.onLoadStart = callback;
    obj4.onProgress = callback1;
    obj4.onLoad = callback2;
    obj4.onError = callback3;
    obj4.accessibilityRole = "image";
    const description = source.description;
    obj4.accessibilityLabel = description;
    obj4.loop = true;
    const items2 = [closure_9(onLoad.Component, obj4), , ];
    let tmp28Result3 = null;
    if (first === closure_12.Loading) {
      const obj5 = { style: null, children: null };
      const items3 = [tmp2.loader, style];
      obj5.style = items3;
      let tmp28Result = null;
      if (null == source.videoURI) {
        const obj = { style: tmp2.loaderText, variant: "heading-md/semibold", color: "text-overlay-light", children: null };
        const _Math = Math;
        const items4 = [Math.round(tmp8), "%"];
        obj.children = items4;
        tmp28Result = closure_10(onLoadStart(onError[9]).Text, obj);
      }
      const items5 = [tmp28Result, ];
      const obj6 = { color: "white", style: tmp2.loaderIndicator, size: "large" };
      items5[1] = closure_9(closure_8, obj6);
      obj5.children = items5;
      tmp28Result3 = closure_10(closure_7, obj5);
    }
    const obj7 = { children: null };
    items2[1] = tmp28Result3;
    const obj8 = { style, index: num, source };
    items2[2] = closure_9(onLoad(onError[11]), obj8);
    obj7.children = items2;
    tmp28Result4 = closure_10(noop.Fragment, obj7);
  }
  return tmp28Result4;
}));