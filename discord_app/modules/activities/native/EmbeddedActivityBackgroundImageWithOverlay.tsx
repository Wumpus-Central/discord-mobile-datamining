// === Module 9651: EmbeddedActivityBackgroundImageWithOverlay ===

// Module 9651 (EmbeddedActivityBackgroundImageWithOverlay)
import nativeDefault from "native" /* 576 */;
import useEmbeddedActivityBackgroundDefault from "useEmbeddedActivityBackground" /* 9652 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

get_ActivityIndicator = fn(17);
({ ImageBackground: closure_4, View: hasOwnProperty, StyleSheet: metroRequire } = get_ActivityIndicator);
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { overlay: null };
createStyles = { flex: 1, opacity: 0.6, backgroundColor: nativeDefault.colors.BLACK };
createStyles.overlay = createStyles;
let closure_8 = createStyles.createStyles(createStyles);
const names = ["embedded_background"];
const size = fn(2);
const result = size.fileFinishedImporting("modules/activities/native/EmbeddedActivityBackgroundImageWithOverlay.tsx");

export default function EmbeddedActivityBackgroundImageWithOverlay(arg0) {
  ({ application, dimensionsStyle, borderRadius, resizeMode } = arg0);
  if (resizeMode === undefined) {
    resizeMode = "contain";
  }
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  closure_0 = tmp2[1];
  let str;
  const tmp = closure_8();
  if (application != null) {
    str = application.id;
  }
  if (str == null) {
    str = "";
  }
  let obj = { applicationId: str, names, size: 1024 };
  const url = useEmbeddedActivityBackgroundDefault(obj).url;
  let tmp7Result = null;
  if (!tmp2[0]) {
    tmp7Result = null;
    if (null != url) {
      tmp7Result = null;
      if ("" !== url) {
        obj = { resizeMode, source: null, style: null, imageStyle: null, onError: null, children: null };
        obj = { uri: url };
        obj.source = obj;
        if (dimensionsStyle == null) {
          dimensionsStyle = absoluteFillObject.absoluteFillObject;
        }
        obj.style = dimensionsStyle;
        const obj1 = { borderRadius };
        obj.imageStyle = obj1;
        obj.onError = function onError() {
          return closure_0(true);
        };
        const obj2 = { style: null };
        const items = [tmp.overlay, ];
        const obj3 = { borderRadius };
        items[1] = obj3;
        obj2.style = items;
        obj.children = <hasOwnProperty style={null} />;
        tmp7Result = tmp7(React4, obj);
      }
    }
  }
  return tmp7Result;
};