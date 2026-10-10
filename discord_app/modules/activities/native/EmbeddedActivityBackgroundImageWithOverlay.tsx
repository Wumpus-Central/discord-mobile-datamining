// discord_app/modules/activities/native/EmbeddedActivityBackgroundImageWithOverlay.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import useEmbeddedActivityBackgroundDefault from "../utils/useEmbeddedActivityBackground.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, StyleSheet: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5092);
let obj2 = { overlay: { flex: 1, opacity: 0.6, backgroundColor: nativeDefault.colors.BLACK } };
let closure_9 = createStyles.createStyles(obj2);
const names = ["embedded_background"];
const ReactCompilerGating = fn(558);
let obj3 = { flex: 1, opacity: 0.6, backgroundColor: nativeDefault.colors.BLACK };
let size = fn(2);
const result = size.fileFinishedImporting("modules/activities/native/EmbeddedActivityBackgroundImageWithOverlay.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function EmbeddedActivityBackgroundImageWithOverlay(arg0) {
      const cResult = c.c(16);
      ({ application, dimensionsStyle, borderRadius, resizeMode } = arg0);
      let str = "contain";
      if (undefined !== resizeMode) {
        str = resizeMode;
      }
      const tmp3 = closure_9();
      [tmp5, require] = noop.useState(false);
      let str2;
      if (application != null) {
        str2 = application.id;
      }
      if (str2 == null) {
        str2 = "";
      }
      if (cResult[0] !== str2) {
        const obj2 = { applicationId: str2, names, size: 1024 };
        cResult[0] = str2;
        cResult[1] = obj2;
        let tmp6 = obj2;
      } else {
        tmp6 = cResult[1];
      }
      const url = useEmbeddedActivityBackgroundDefault(tmp6).url;
      if (cResult[2] !== url) {
        const obj3 = { uri: tmp9 };
        cResult[2] = tmp9;
        cResult[3] = obj3;
        let tmp10 = obj3;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] !== dimensionsStyle) {
        let flattenResult = timestampProducer.flatten(dimensionsStyle);
        if (flattenResult == null) {
          flattenResult = {};
        }
        cResult[4] = dimensionsStyle;
        cResult[5] = flattenResult;
        let tmp11 = flattenResult;
      } else {
        tmp11 = cResult[5];
      }
      ({ width, height } = tmp11);
      if (cResult[6] === tmp10) {
        if (cResult[7] === url) {
          if (cResult[8] === borderRadius) {
            if (cResult[9] === dimensionsStyle) {
              if (cResult[10] === height) {
                if (cResult[11] === tmp5) {
                  if (cResult[12] === str) {
                    if (cResult[13] === tmp3) {
                      if (cResult[14] === width) {
                        let tmp13 = cResult[15];
                      }
                      return tmp13;
                    }
                  }
                }
              }
            }
          }
        }
      }
      let tmp18Result = null;
      if (!tmp5) {
        tmp18Result = null;
        if (null != url) {
          tmp18Result = null;
          if ("" !== url) {
            let absoluteFillObject = dimensionsStyle;
            if (dimensionsStyle == null) {
              absoluteFillObject = timestampProducer.absoluteFillObject;
            }
            const obj4 = { style: absoluteFillObject, children: null };
            const obj5 = { resizeMode: str, source: tmp10, style: null, onError: null };
            const items = [timestampProducer.absoluteFill];
            const size = { width, height, borderRadius };
            items[1] = size;
            obj5.style = items;
            obj5.onError = function onError() {
              return require(true);
            };
            const items1 = [React5(FastImageDefault, obj5)];
            const obj6 = { style: null };
            const items2 = [tmp3.overlay];
            const obj7 = { borderRadius };
            items2[1] = obj7;
            obj6.style = items2;
            items1[1] = React5(hasOwnProperty, obj6);
            obj4.children = items1;
            tmp18Result = closure_1_8(hasOwnProperty, obj4);
          }
        }
      }
      cResult[6] = tmp10;
      cResult[7] = url;
      cResult[8] = borderRadius;
      cResult[9] = dimensionsStyle;
      cResult[10] = height;
      cResult[11] = tmp5;
      cResult[12] = str;
      cResult[13] = tmp3;
      cResult[14] = width;
      cResult[15] = tmp18Result;
      tmp13 = tmp18Result;
      const tmp4 = _slicedToArray(noop.useState(false), 2);
    }
  : function EmbeddedActivityBackgroundImageWithOverlay(arg0) {
      ({ application, dimensionsStyle, borderRadius, resizeMode } = arg0);
      if (resizeMode === undefined) {
        resizeMode = "contain";
      }
      c0 = undefined;
      const tmp = closure_9();
      [tmp3, c0] = noop.useState(false);
      let str;
      const tmp2 = _slicedToArray(noop.useState(false), 2);
      if (application != null) {
        str = application.id;
      }
      if (str == null) {
        str = "";
      }
      const url = useEmbeddedActivityBackgroundDefault({ applicationId: str, names, size: 1024 }).url;
      let flattenResult = timestampProducer.flatten(dimensionsStyle);
      if (flattenResult == null) {
        flattenResult = {};
      }
      let tmp13Result = null;
      if (!tmp3) {
        tmp13Result = null;
        if (null != url) {
          tmp13Result = null;
          if ("" !== url) {
            let absoluteFillObject = dimensionsStyle;
            if (dimensionsStyle == null) {
              absoluteFillObject = timestampProducer.absoluteFillObject;
            }
            const obj2 = { style: absoluteFillObject, children: null };
            const obj3 = { resizeMode, source: { uri: url }, style: null, onError: null };
            const items = [timestampProducer.absoluteFill];
            const size = { width: tmp9, height: tmp10, borderRadius };
            items[1] = size;
            obj3.style = items;
            obj3.onError = function onError() {
              return _undefined(true);
            };
            const items1 = [React5(FastImageDefault, obj3)];
            const obj4 = { style: null };
            const items2 = [tmp.overlay];
            const obj5 = { borderRadius };
            items2[1] = obj5;
            obj4.style = items2;
            items1[1] = React5(hasOwnProperty, obj4);
            obj2.children = items1;
            tmp13Result = closure_1_8(hasOwnProperty, obj2);
          }
        }
      }
      return tmp13Result;
    };
