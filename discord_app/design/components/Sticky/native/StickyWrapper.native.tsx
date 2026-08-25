// === Module 10403: StickyWrapper ===

// Module 10403 (StickyWrapper)
import noopAll from "noop" /* 19 */;
import PlatformTypes from "PlatformTypes" /* 501 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;

require = arg1;
noopAll;
({ StyleSheet, View: obj1 } = get_ActivityIndicator);
({ jsx: c3, jsxs: c4 } = jsxProd);
const styles = StyleSheet.create({ wrapper: { height: "100%", width: "100%" }, header: { zIndex: 1 }, androidHeader: { position: "absolute", top: 0, left: 0, right: 0 } });
const result = require("set").fileFinishedImporting("design/components/Sticky/native/StickyWrapper.native.tsx");

export const StickyWrapper = function StickyWrapper(header) {
  header = header.header;
  let obj = { style: items, pointerEvents: header.pointerEvents, children: null };
  items = [header.style, wrapper.wrapper];
  let tmp5Result = null;
  if (null != header) {
    const items1 = [tmp3.header, ];
    let androidHeader;
    if (obj2.isAndroid()) {
      androidHeader = tmp3.androidHeader;
    }
    obj = { style: null, children: null };
    items1[1] = androidHeader;
    obj[0] = items1;
    obj[1] = header;
    tmp5Result = closure_3(tmp2, obj);
    obj2 = PlatformTypes;
    const tmp5 = closure_3;
  }
  const items2 = [tmp5Result, header.children];
  obj[2] = items2;
  return closure_4(closure_2, obj);
};