// === Module 14792: MediaModalLoadingOverlay ===

// Module 14792 (MediaModalLoadingOverlay)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import Text_Text from "Text/Text" /* 5624 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, ActivityIndicator: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5014);
let obj = { loader: null, loaderIndicator: null, loaderText: null };
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.flex = 1;
obj3.alignItems = "center";
obj3.justifyContent = "center";
obj3.backgroundColor = "rgba(0, 0, 0, 0.7)";
obj.loader = obj3;
obj.loaderIndicator = { marginTop: nativeDefault.space.PX_12 };
obj.loaderText = { textAlign: "center" };
let closure_7 = createStyles.createStyles(obj);
let obj4 = { marginTop: nativeDefault.space.PX_12 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaModalLoadingOverlay.tsx");

export default noop.memo(function MediaModalLoadingOverlay(progress) {
  progress = progress.progress;
  ({ style, status } = progress);
  const tmp = closure_7();
  const obj = { style: null, children: null };
  const items = [tmp.loader, style];
  obj.style = items;
  if ("error" === status) {
    const obj2 = { style: tmp.loaderText, variant: "heading-md/semibold", color: "text-overlay-light", children: null };
    const intl = util.intl;
    obj2.children = intl.string(util.t["+ITMYX"]);
    let tmp12Result1 = hasOwnProperty(Text_Text.Text, obj2);
  } else {
    let tmp12Result = null;
    if (null != progress) {
      const obj3 = { style: tmp.loaderText, variant: "heading-md/semibold", color: "text-overlay-light", children: null };
      const _Math = Math;
      const items1 = [Math.round(progress), "%"];
      obj3.children = items1;
      tmp12Result = timestampProducer(Text_Text.Text, obj3);
    }
    const obj4 = { children: null };
    const items2 = [tmp12Result, ];
    const obj5 = { color: "white", style: tmp.loaderIndicator, size: "large" };
    items2[1] = hasOwnProperty(React4, obj5);
    obj4.children = items2;
    tmp12Result1 = timestampProducer(noop.Fragment, obj4);
  }
  obj.children = tmp12Result1;
  return hasOwnProperty(React3, obj);
});