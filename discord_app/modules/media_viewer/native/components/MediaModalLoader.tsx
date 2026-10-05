// discord_app/modules/media_viewer/native/components/MediaModalLoader.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _slicedToArray_mod from "../../../../../_runtime/metro/00032__slicedToArray.js";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react_mod from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment_mod from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap, nativeEvent, onLoad, tmp, tmp10, tmp3Result, tmp4, tmp6Result, tmp9Result;

let StyleSheet;
let c10;
let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let closure_3 = ["Component", "style", "onLoadStart", "onLoad", "onError", "index", "source"];
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ View: metroImportDefault, ActivityIndicator: metroImportAll, StyleSheet } = react_native);
let Fragment = Fragment_mod;
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { loader: obj2, loaderIndicator: obj3, loaderText: { textAlign: "center" } };
obj2 = { flex: 1, alignItems: "center", justifyContent: "center", backgroundColor: "rgba(0, 0, 0, 0.7)" };
createStyles = createStyles.createStyles;
let merged = Object.assign(StyleSheet.absoluteFillObject);
obj3 = { marginTop: nativeDefault.space.PX_12 };
let closure_11 = createStyles(obj);
let closure_12 = { None: 0, [0]: "None", Loading: 1, [1]: "Loading", Loaded: 2, [2]: "Loaded", Error: 3, [3]: "Error" };
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (onLoad) => {
        let Component;
        let closure_0;
        let closure_2;
        let closure_4;
        let closure_6;
        let first;
        let index;
        let onLoadStart;
        let source;
        let style;
        let tmp3;
        const obj = require("react");
        const cResult = obj.c(29);
        if (cResult[0] !== onLoad) {
          ({ Component, style, onLoadStart } = onLoad);
          dependencyMap = onLoadStart;
          onLoad = onLoad.onLoad;
          let closure_1 = onLoad;
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
          let tmp9 = index;
          let tmp6 = tmp12;
          tmp3 = onError;
        } else {
          _require = cResult[2];
          closure_1 = cResult[3];
          dependencyMap = cResult[4];
          tmp6 = cResult[5];
          tmp9 = cResult[8];
        }
        closure_11();
        [first, _slicedToArray] = react.useState(closure_12.None);
        [r10054, _objectWithoutProperties] = react.useState(0);
        _slicedToArray(react.useState(0), 2);
        react = react.useRef(null);
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          class I {
            constructor() {
              timerId = setTimeout(() => {
                /* body not rendered: F142817 */
              }, 1000);
              closure_6.current = timerId;
              return timerId;
            }
          }
          cResult[9] = I;
        } else {
          class I {
            constructor() {
              timerId = setTimeout(() => {
                /* body not rendered: F142817 */
              }, 1000);
              closure_6.current = timerId;
              return timerId;
            }
          }
        }
        if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
          class O {
            constructor(arg0) {
              nativeEvent = onLoad.nativeEvent;
              tmp = closure_5((100 * nativeEvent.loaded) / nativeEvent.total);
              return;
            }
          }
          cResult[10] = O;
        } else {
          class O {
            constructor(arg0) {
              nativeEvent = onLoad.nativeEvent;
              tmp = closure_5((100 * nativeEvent.loaded) / nativeEvent.total);
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
      }
    : (onLoad) => {
        let Text2;
        let _undefined;
        let c5;
        let closure_4;
        let closure_6;
        let description;
        let first;
        let intl;
        let items1;
        let items3;
        let items4;
        let items5;
        let obj3;
        let onLoadStart;
        let style;
        let tmp28Result4;
        let tmp8;
        ({ style, onLoadStart } = onLoad);
        onLoad = onLoad.onLoad;
        const onError = onLoad.onError;
        let num = onLoad.index;
        const Component = onLoad.Component;
        if (num === undefined) {
          num = 0;
        }
        const source = onLoad.source;
        const merged = Object.assign(
          onLoad,
          Object.assign({ Component: 0, style: 0, onLoadStart: 0, onLoad: 0, onError: 0, index: 0, source: 0 }),
        );
        first = undefined;
        _slicedToArray = undefined;
        c5 = undefined;
        react = undefined;
        const tmp2 = closure_11();
        const tmp3 = react;
        [first, _slicedToArray] = react.useState(closure_12.None);
        [tmp8, c5] = _slicedToArray(react.useState(0), 2);
        const tmp7 = _slicedToArray(react.useState(0), 2);
        react = react.useRef(null);
        const callback = react.useCallback(() => {
          const timerId = setTimeout(() => {
            let None;
            closure_1_4((arg0) => (arg0 === None.None ? None.Loading : None.None));
          }, 1000);
          closure_6.current = timerId;
          return timerId;
        }, []);
        const callback1 = react.useCallback((nativeEvent) => {
          nativeEvent = nativeEvent.nativeEvent;
          _undefined((100 * nativeEvent.loaded) / nativeEvent.total);
        }, []);
        const callback2 = react.useCallback(() => closure_4(closure_12.Loaded), []);
        const items = [first, onLoadStart, onError, onLoad];
        const callback3 = react.useCallback(() => closure_4(closure_12.Error), []);
        const effect = react.useEffect(() => {
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
        const effect1 = react.useEffect(() => {
          let ref;
          return () => clearTimeout(ref.current);
        });
        if (first === closure_12.Error) {
          const obj2 = { style: items1, children: closure_9(Text2, obj3) };
          items1 = [tmp2.loader, style];
          obj3 = {
            style: tmp2.loaderText,
            variant: "heading-md/semibold",
            color: "text-overlay-light",
            children: intl.string(onLoadStart(onError[10]).t["+ITMYX"]),
          };
          Text2 = onLoadStart(onError[9]).Text;
          intl = onLoadStart(onError[10]).intl;
          tmp28Result4 = closure_9(closure_7, obj2);
        } else {
          const Fragment = tmp3.Fragment;
          const obj4 = {
            style,
            source,
            onLoadStart: callback,
            onProgress: callback1,
            onLoad: callback2,
            onError: callback3,
            accessibilityRole: "image",
            accessibilityLabel: description,
            loop: true,
          };
          const merged1 = Object.assign(merged);
          description = source.description;
          const items2 = [closure_9(Component, obj4), ,];
          let tmp28Result3 = null;
          if (first === closure_12.Loading) {
            const obj5 = { style: items3, children: items5 };
            items3 = [tmp2.loader, style];
            let tmp28Result = null;
            if (null == source.videoURI) {
              const _Math = Math;
              const obj = {
                style: tmp2.loaderText,
                variant: "heading-md/semibold",
                color: "text-overlay-light",
                children: items4,
              };
              const Text = onLoadStart(onError[9]).Text;
              items4 = [Math.round(tmp8), "%"];
              tmp28Result = closure_10(Text, obj);
            }
            items5 = [tmp28Result];
            const obj6 = { color: "white", style: tmp2.loaderIndicator, size: "large" };
            items5[1] = closure_9(closure_8, obj6);
            tmp28Result3 = closure_10(closure_7, obj5);
          }
          const obj7 = { children: items2 };
          items2[1] = tmp28Result3;
          const obj8 = { style, index: num, source };
          items2[2] = closure_9(onLoad(onError[11]), obj8);
          tmp28Result4 = closure_10(Fragment, obj7);
        }
        return tmp28Result4;
      },
);
const result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaModalLoader.tsx");

export default memoResult;
