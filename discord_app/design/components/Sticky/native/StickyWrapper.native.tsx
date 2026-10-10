// === Module 10378: StickyWrapper ===

// Module 10378 (StickyWrapper)
import c from "c" /* 576 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1383 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet, View: c2 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const styles = StyleSheet.create({ wrapper: { height: "100%", width: "100%" }, header: { zIndex: 1 }, androidHeader: { position: "absolute", top: 0, left: 0, right: 0 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/Sticky/native/StickyWrapper.native.tsx");

export const StickyWrapper = ReactCompilerGating.isReactCompilerEnabled() ? (function StickyWrapper(arg0) {
  const cResult = c.c(9);
  ({ header, children, pointerEvents, style } = arg0);
  if (cResult[0] !== style) {
    const items = [style, closure_5.wrapper];
    cResult[0] = style;
    cResult[1] = items;
    let tmp4 = items;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== header) {
    let tmp8Result = null;
    if (null != header) {
      const items1 = [closure_5.header, ];
      let androidHeader;
      if (tmpResult.isAndroid()) {
        androidHeader = closure_5.androidHeader;
      }
      const obj2 = { style: null, children: null };
      items1[1] = androidHeader;
      obj2.style = items1;
      obj2.children = header;
      tmp8Result = React3(React2, obj2);
      tmpResult = utils_PlatformUtils;
    }
    cResult[2] = header;
    cResult[3] = tmp8Result;
    let tmp6 = tmp8Result;
  } else {
    tmp6 = cResult[3];
  }
  if (cResult[4] === children) {
    if (cResult[5] === pointerEvents) {
      if (cResult[6] === tmp4) {
        if (cResult[7] === tmp6) {
          let tmp12 = cResult[8];
        }
        return tmp12;
      }
    }
  }
  const obj3 = { style: tmp4, pointerEvents, children: null };
  const items2 = [tmp6, children];
  obj3.children = items2;
  const tmp13 = React4(React2, obj3);
  cResult[4] = children;
  cResult[5] = pointerEvents;
  cResult[6] = tmp4;
  cResult[7] = tmp6;
  cResult[8] = tmp13;
  tmp12 = tmp13;
}) : (function StickyWrapper(header) {
  header = header.header;
  const obj = { style: null, pointerEvents: header.pointerEvents, children: null };
  const items = [header.style, closure_5.wrapper];
  obj.style = items;
  let tmp5Result = null;
  if (null != header) {
    const items1 = [closure_5.header, ];
    let androidHeader;
    if (obj2.isAndroid()) {
      androidHeader = closure_5.androidHeader;
    }
    const obj3 = { style: null, children: null };
    items1[1] = androidHeader;
    obj3.style = items1;
    obj3.children = header;
    tmp5Result = React3(React2, obj3);
    obj2 = utils_PlatformUtils;
  }
  const items2 = [tmp5Result, header.children];
  obj.children = items2;
  return React4(React2, obj);
});