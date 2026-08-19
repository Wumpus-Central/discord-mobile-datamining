// discord_app/modules/media_viewer/native/components/MediaModalLoader.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
let c4 = importAllResult;
({ View: c5, ActivityIndicator: closure_6, StyleSheet } = get_ActivityIndicator);
({ jsx: error, jsxs: closure_8 } = jsxProd);
let obj = {};
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj.flex = 1;
obj.alignItems = "center";
obj.justifyContent = "center";
obj.backgroundColor = "rgba(0, 0, 0, 0.7)";
obj[0] = obj;
const createCacheKey = { marginTop: ThemesDefault.space.PX_12 };
obj[1] = createCacheKey;
obj[2] = { textAlign: "center" };
let closure_9 = createCacheKey.createStyles(obj);
let closure_10 = { None: 0, [0]: "None", Loading: 1, [1]: "Loading", Loaded: 2, [2]: "Loaded", Error: 3, [3]: "Error" };
const memoResult = importAllResult.memo(function MediaModalLoader(onLoad) {
  ({ style, onLoadStart } = onLoad);
  onLoad = onLoad.onLoad;
  const onError = onLoad.onError;
  let num = onLoad.index;
  if (num === undefined) {
    num = 0;
  }
  const source = onLoad.source;
  const merged = Object.assign(onLoad, Object.create(null));
  let first;
  importAllResult = undefined;
  c5 = undefined;
  const tmp2 = callback2();
  const tmp5 = first(importAllResult.useState(closure_10.None), 2);
  first = tmp5[0];
  importAllResult = tmp5[1];
  [tmp8, c5] = first(importAllResult.useState(0), 2);
  closure_6 = importAllResult.useRef(null);
  const callback = importAllResult.useCallback(() => {
    const timerId = setTimeout(() => {
      callback((arg0) => arg0 === None.None ? None.Loading : None.None);
    }, 1000);
    closure_6.current = timerId;
    return timerId;
  }, []);
  const callback1 = importAllResult.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    _undefined(100 * nativeEvent.loaded / nativeEvent.total);
  }, []);
  callback2 = importAllResult.useCallback(() => callback(closure_1_10.Loaded), []);
  const items = [first, onLoadStart, onError, onLoad];
  const callback3 = importAllResult.useCallback(() => callback(closure_1_10.Error), []);
  const effect = importAllResult.useEffect(() => {
    if (closure_1_10.Loading === first) {
      if (onLoadStart != null) {
        tmp9();
      }
    } else if (closure_1_10.Error === first) {
      if (onError != null) {
        tmp6();
      }
    } else if (closure_1_10.Loaded === first) {
      if (onLoad != null) {
        tmp3();
      }
    }
  }, items);
  const effect1 = importAllResult.useEffect(() => () => clearTimeout(ref.current));
  if (first === closure_10.Error) {
    let obj = { style: null, children: null };
    const items1 = [tmp2.loader, style];
    obj[0] = items1;
    obj = { style: null, variant: "heading-md/semibold", color: "text-overlay-light", children: null };
    obj[0] = tmp2.loaderText;
    const intl = onLoadStart(onError[7]).intl;
    obj[3] = intl.string(onLoadStart(onError[7]).t["+ITMYX"]);
    obj[1] = callback(onLoadStart(onError[6]).Text, obj);
    let tmp28Result1 = callback(c5, obj);
  } else {
    obj1 = {};
    const merged1 = Object.assign(merged);
    obj1.style = style;
    obj1.source = source;
    obj1.onLoadStart = callback;
    obj1.onProgress = callback1;
    obj1.onLoad = callback2;
    obj1.onError = callback3;
    obj1.accessibilityRole = "image";
    const description = source.description;
    obj1.accessibilityLabel = description;
    obj1.loop = true;
    const items2 = [callback(onLoad.Component, obj1), , ];
    let tmp28Result = null;
    if (first === closure_10.Loading) {
      const obj2 = { style: null, children: null };
      const items3 = [tmp2.loader, style];
      obj2[0] = items3;
      tmp28Result = null;
      if (null == source.videoURI) {
        obj = { style: null, variant: "heading-md/semibold", color: "text-overlay-light", children: null };
        obj[0] = tmp2.loaderText;
        const _Math = Math;
        const items4 = [Math.round(tmp8), "%"];
        obj[3] = items4;
        tmp28Result = callback(onLoadStart(onError[6]).Text, obj);
      }
      const items5 = [tmp28Result, ];
      const obj3 = { color: "white", style: null, size: "large" };
      obj3[1] = tmp2.loaderIndicator;
      items5[1] = tmp29(closure_6, obj3);
      obj2[1] = items5;
      tmp28Result = callback(c5, obj2);
    }
    const obj4 = { children: null };
    items2[1] = tmp28Result;
    const obj5 = { style: null, index: null, source: null };
    obj5[0] = style;
    obj5[1] = num;
    obj5[2] = source;
    items2[2] = callback(onLoad(onError[8]), obj5);
    obj4[0] = items2;
    tmp28Result1 = callback(importAllResult.Fragment, obj4);
  }
  return tmp28Result1;
});
const result = require("obj132").fileFinishedImporting("modules/media_viewer/native/components/MediaModalLoader.tsx");

export default memoResult;