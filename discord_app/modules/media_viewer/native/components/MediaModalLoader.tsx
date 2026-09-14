// discord_app/modules/media_viewer/native/components/MediaModalLoader.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ActivityIndicator: metroRequire, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4636);
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
let closure_9 = createStyles.createStyles(obj);
let closure_10 = { None: 0, [0]: "None", Loading: 1, [1]: "Loading", Loaded: 2, [2]: "Loaded", Error: 3, [3]: "Error" };
let obj4 = { marginTop: nativeDefault.space.PX_12 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaModalLoader.tsx");

export default noop.memo(function MediaModalLoader(onLoad) {
  ({ style, onLoadStart } = onLoad);
  onLoad = onLoad.onLoad;
  const onError = onLoad.onError;
  let num = onLoad.index;
  if (num === undefined) {
    num = 0;
  }
  const source = onLoad.source;
  const merged = Object.assign(
    onLoad,
    Object.assign({ Component: 0, style: 0, onLoadStart: 0, onLoad: 0, onError: 0, index: 0, source: 0 }),
  );
  let first;
  noop = undefined;
  c5 = undefined;
  const tmp2 = closure_9();
  const tmp5 = first(noop.useState(closure_10.None), 2);
  first = tmp5[0];
  noop = tmp5[1];
  [tmp8, c5] = first(noop.useState(0), 2);
  closure_6 = noop.useRef(null);
  const callback = noop.useCallback(() => {
    const timerId = setTimeout(() => {
      closure_1_4((arg0) => (arg0 === None.None ? None.Loading : None.None));
    }, 1000);
    closure_6.current = timerId;
    return timerId;
  }, []);
  const callback1 = noop.useCallback((nativeEvent) => {
    nativeEvent = nativeEvent.nativeEvent;
    _undefined((100 * nativeEvent.loaded) / nativeEvent.total);
  }, []);
  const callback2 = noop.useCallback(() => closure_4(closure_10.Loaded), []);
  const items = [first, onLoadStart, onError, onLoad];
  const callback3 = noop.useCallback(() => closure_4(closure_10.Error), []);
  const effect = noop.useEffect(() => {
    if (closure_10.Loading === first) {
      if (onLoadStart != null) {
        tmp9();
      }
    } else if (closure_10.Error === first) {
      if (onError != null) {
        tmp6();
      }
    } else if (closure_10.Loaded === first) {
      if (onLoad != null) {
        tmp3();
      }
    }
  }, items);
  const effect1 = noop.useEffect(() => () => clearTimeout(ref.current));
  if (first === closure_10.Error) {
    const obj2 = { style: null, children: null };
    const items1 = [tmp2.loader, style];
    obj2.style = items1;
    const obj3 = {
      style: tmp2.loaderText,
      variant: "heading-md/semibold",
      color: "text-overlay-light",
      children: null,
    };
    const intl = onLoadStart(onError[7]).intl;
    obj3.children = intl.string(onLoadStart(onError[7]).t["+ITMYX"]);
    obj2.children = closure_7(onLoadStart(onError[6]).Text, obj3);
    let tmp28Result4 = closure_7(c5, obj2);
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
    const items2 = [closure_7(onLoad.Component, obj4), ,];
    let tmp28Result3 = null;
    if (first === closure_10.Loading) {
      const obj5 = { style: null, children: null };
      const items3 = [tmp2.loader, style];
      obj5.style = items3;
      let tmp28Result = null;
      if (null == source.videoURI) {
        const obj = {
          style: tmp2.loaderText,
          variant: "heading-md/semibold",
          color: "text-overlay-light",
          children: null,
        };
        const _Math = Math;
        const items4 = [Math.round(tmp8), "%"];
        obj.children = items4;
        tmp28Result = closure_8(onLoadStart(onError[6]).Text, obj);
      }
      const items5 = [tmp28Result];
      const obj6 = { color: "white", style: tmp2.loaderIndicator, size: "large" };
      items5[1] = closure_7(closure_6, obj6);
      obj5.children = items5;
      tmp28Result3 = closure_8(c5, obj5);
    }
    const obj7 = { children: null };
    items2[1] = tmp28Result3;
    const obj8 = { style, index: num, source };
    items2[2] = closure_7(onLoad(onError[8]), obj8);
    obj7.children = items2;
    tmp28Result4 = closure_8(noop.Fragment, obj7);
  }
  return tmp28Result4;
});
