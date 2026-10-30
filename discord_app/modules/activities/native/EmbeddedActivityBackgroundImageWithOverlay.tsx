// === Module 11802: EmbeddedActivityBackgroundImageWithOverlay ===

// Module 11802 (EmbeddedActivityBackgroundImageWithOverlay)
import nativeDefault from "native" /* 575 */;
import FastImageDefault from "FastImage" /* 5712 */;
import useEmbeddedActivityBackgroundDefault from "useEmbeddedActivityBackground" /* 11803 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet: hasOwnProperty } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5009);
let obj2 = { overlay: { flex: 1, opacity: 0.6, backgroundColor: nativeDefault.colors.BLACK } };
let closure_8 = createStyles.createStyles(obj2);
const names = ["embedded_background"];
let size = fn(2);
const result = size.fileFinishedImporting("modules/activities/native/EmbeddedActivityBackgroundImageWithOverlay.tsx");

export default function EmbeddedActivityBackgroundImageWithOverlay(arg0) {
  ({ application, dimensionsStyle, borderRadius, resizeMode } = arg0);
  if (resizeMode === undefined) {
    resizeMode = "contain";
  }
  c0 = undefined;
  const tmp = closure_8();
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
  let flattenResult = hasOwnProperty.flatten(dimensionsStyle);
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
          absoluteFillObject = hasOwnProperty.absoluteFillObject;
        }
        const obj2 = { style: absoluteFillObject, children: null };
        const obj3 = { resizeMode, source: { uri: url }, style: null, onError: null };
        const items = [hasOwnProperty.absoluteFill, ];
        const size = { width: tmp9, height: tmp10, borderRadius };
        items[1] = size;
        obj3.style = items;
        obj3.onError = function onError() {
          return _undefined(true);
        };
        const items1 = [timestampProducer(FastImageDefault, obj3), ];
        const obj4 = { style: null };
        const items2 = [tmp.overlay, ];
        const obj5 = { borderRadius };
        items2[1] = obj5;
        obj4.style = items2;
        items1[1] = timestampProducer(React4, obj4);
        obj2.children = items1;
        tmp13Result = React5(React4, obj2);
      }
    }
  }
  return tmp13Result;
};