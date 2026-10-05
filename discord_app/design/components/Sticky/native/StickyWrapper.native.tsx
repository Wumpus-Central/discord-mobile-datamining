// === Module 9781: StickyWrapper ===

// Module 9781 (StickyWrapper)
import react2 from "react" /* 576 */;
import utils_PlatformUtils from "utils/PlatformUtils" /* 1370 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let c2;
let c3;
let closure_4;
({ StyleSheet, View: c2 } = react_native);
({ jsx: c3, jsxs: closure_4 } = Fragment);
const styles = StyleSheet.create({ wrapper: { height: "100%", width: "100%" }, header: { zIndex: 1 }, androidHeader: { position: "absolute", top: 0, left: 0, right: 0 } });
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let header;
  let items2;
  let pointerEvents;
  let style;
  let tmp4;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(9);
  ({ header, children, pointerEvents, style } = arg0);
  if (cResult[0] !== style) {
    const items = [style, closure_5.wrapper];
    cResult[0] = style;
    cResult[1] = items;
    tmp4 = items;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] !== header) {
    let tmp8Result = null;
    if (null != header) {
      const items1 = [closure_5.header, ];
      let androidHeader;
      const tmpResult = utils_PlatformUtils;
      if (tmpResult.isAndroid()) {
        androidHeader = closure_5.androidHeader;
      }
      const obj2 = { style: items1, children: header };
      items1[1] = androidHeader;
      tmp8Result = _false(React2, obj2);
    }
    cResult[2] = header;
    cResult[3] = tmp8Result;
    tmp6 = tmp8Result;
  } else {
    tmp6 = cResult[3];
  }
  if (cResult[4] === children) {
    if (cResult[5] === pointerEvents) {
      if (cResult[6] === tmp4) {
        let tmp12;
        if (cResult[7] === tmp6) {
          tmp12 = cResult[8];
        }
        return tmp12;
      }
    }
  }
  const obj3 = { style: tmp4, pointerEvents, children: items2 };
  items2 = [tmp6, children];
  const tmp13 = React3(React2, obj3);
  cResult[4] = children;
  cResult[5] = pointerEvents;
  cResult[6] = tmp4;
  cResult[7] = tmp6;
  cResult[8] = tmp13;
  tmp12 = tmp13;
}) : ((header) => {
  let items;
  let items2;
  header = header.header;
  const obj = { style: items, pointerEvents: header.pointerEvents, children: items2 };
  items = [header.style, closure_5.wrapper];
  let tmp5Result = null;
  const children = header.children;
  if (null != header) {
    const items1 = [closure_5.header, ];
    let androidHeader;
    const obj2 = utils_PlatformUtils;
    if (obj2.isAndroid()) {
      androidHeader = closure_5.androidHeader;
    }
    const obj3 = { style: items1, children: header };
    items1[1] = androidHeader;
    tmp5Result = _false(React2, obj3);
  }
  items2 = [tmp5Result, children];
  return React3(React2, obj);
});
const result = size.fileFinishedImporting("design/components/Sticky/native/StickyWrapper.native.tsx");

export const StickyWrapper = tmp5;