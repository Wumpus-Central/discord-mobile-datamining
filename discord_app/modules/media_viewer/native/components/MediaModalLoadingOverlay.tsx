// === Module 12796: MediaModalLoadingOverlay ===

// Module 12796 (MediaModalLoadingOverlay)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 4892 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, ActivityIndicator: closure_4, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4896);
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
const ReactCompilerGating = fn(558);
let obj4 = { marginTop: nativeDefault.space.PX_12 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_viewer/native/components/MediaModalLoadingOverlay.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let stringResult = dependencyMap;
  const cResult = c.c(11);
  ({ style, status, progress } = arg0);
  let loaderText = closure_7();
  if (cResult[0] === style) {
    if (cResult[1] === loaderText.loader) {
      let tmp4 = cResult[2];
    }
    if (cResult[3] === progress) {
      if (cResult[4] === status) {
        if (cResult[5] === loaderText.loaderIndicator) {
          if (cResult[6] === loaderText.loaderText) {
            if (cResult[8] === tmp4) {
              if (cResult[9] === tmp5) {
                let tmp13 = cResult[10];
              }
              return tmp13;
            }
            const obj2 = { style: tmp4, children: cResult[7] };
            const tmp16 = hasOwnProperty(React3, obj2);
            cResult[8] = tmp4;
            cResult[9] = cResult[7];
            cResult[10] = tmp16;
            tmp13 = tmp16;
          }
        }
      }
    }
    if ("error" === status) {
      const obj3 = { style: loaderText.loaderText, variant: "heading-md/semibold", color: "text-overlay-light", children: null };
      const intl = util.intl;
      stringResult = intl.string(util.t["+ITMYX"]);
      obj3.children = stringResult;
      let tmp17Result2 = hasOwnProperty(Text_Text.Text, obj3);
    } else {
      let tmp17Result = null;
      if (null != progress) {
        const obj4 = { style: loaderText.loaderText, variant: "heading-md/semibold", color: "text-overlay-light", children: null };
        const _Math = Math;
        const items = [Math.round(progress), "%"];
        obj4.children = items;
        tmp17Result = timestampProducer(Text_Text.Text, obj4);
      }
      const obj5 = { children: null };
      const items1 = [tmp17Result, ];
      const obj6 = { color: "white", style: loaderText.loaderIndicator, size: "large" };
      items1[1] = hasOwnProperty(React4, obj6);
      obj5.children = items1;
      tmp17Result2 = timestampProducer(noop.Fragment, obj5);
    }
    cResult[3] = progress;
    cResult[4] = status;
    status = loaderText.loaderIndicator;
    cResult[5] = status;
    loaderText = loaderText.loaderText;
    cResult[6] = loaderText;
    cResult[7] = tmp17Result2;
  }
  const items2 = [loaderText.loader, style];
  cResult[0] = style;
  cResult[1] = loaderText.loader;
  cResult[2] = items2;
  tmp4 = items2;
}) : ((progress) => {
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
}));