// === Module 18544: StreamFullAlert ===

// Module 18544 (StreamFullAlert)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 5087 */;
import AVError from "AVError" /* 5288 */;
import common_AlertDefault from "common/Alert" /* 5395 */;
import FastImageDefault from "FastImage" /* 6163 */;
import _modDef18545 from "module_18545" /* 18545 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
let closure_5 = { image: { alignSelf: "center", marginTop: 32 }, body: { marginTop: 16 } };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/calls/stream/StreamFullAlert.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function StreamFullAlert(arg0) {
  const cResult = c.c(7);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const errorInfo = AVError.getErrorInfo(AVError.AVError.STREAM_FULL);
    let errorCode;
    if (errorInfo != null) {
      errorCode = errorInfo.errorCode;
    }
    const intl = util.intl;
    const obj2 = { errorCode };
    const formatToPlainStringResult = intl.formatToPlainString(util.t.ejOT95, obj2);
    cResult[0] = formatToPlainStringResult;
    let first = formatToPlainStringResult;
    const tmpResult = AVError;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const intl2 = util.intl;
    const stringResult = intl2.string(util.t.GzjdO5);
    cResult[1] = stringResult;
    let tmp9 = stringResult;
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { variant: "text-md/normal", style: closure_5.body, children: null };
    const intl3 = util.intl;
    obj3.children = intl3.string(util.t.VVZDBL);
    const tmp16 = React3(Text_Text.Text, obj3);
    const obj4 = { variant: "text-md/normal", selectable: true, color: "text-muted", style: closure_5.body, children: first };
    const tmp17 = React3(Text_Text.Text, obj4);
    const obj5 = { source: _modDef18545, style: closure_5.image };
    const tmp20 = React3(FastImageDefault, obj5);
    cResult[2] = tmp16;
    cResult[3] = tmp17;
    cResult[4] = tmp20;
    let tmp13 = tmp20;
    let tmp12 = tmp17;
    let tmp11 = tmp16;
  } else {
    tmp11 = cResult[2];
    tmp12 = cResult[3];
    tmp13 = cResult[4];
  }
  if (cResult[5] !== arg0) {
    const obj6 = {};
    const merged = Object.assign(arg0);
    obj6.title = tmp9;
    const items = [tmp11, tmp12, tmp13];
    obj6.children = items;
    const tmp28 = React4(common_AlertDefault, obj6);
    cResult[5] = arg0;
    cResult[6] = tmp28;
    let tmp21 = tmp28;
  } else {
    tmp21 = cResult[6];
  }
  return tmp21;
}) : (function StreamFullAlert(arg0) {
  const errorInfo = AVError.getErrorInfo(AVError.AVError.STREAM_FULL);
  let errorCode;
  if (errorInfo != null) {
    errorCode = errorInfo.errorCode;
  }
  const intl = util.intl;
  const obj2 = {};
  const formatToPlainStringResult = intl.formatToPlainString(util.t.ejOT95, { errorCode });
  const merged = Object.assign(arg0);
  const intl2 = util.intl;
  obj2.title = intl2.string(util.t.GzjdO5);
  const obj3 = { variant: "text-md/normal", style: closure_5.body, children: null };
  const intl3 = util.intl;
  obj3.children = intl3.string(util.t.VVZDBL);
  const items = [React3(Text_Text.Text, obj3), React3(Text_Text.Text, { variant: "text-md/normal", selectable: true, color: "text-muted", style: closure_5.body, children: formatToPlainStringResult }), ];
  const obj5 = { source: null, style: null };
  const obj4 = { variant: "text-md/normal", selectable: true, color: "text-muted", style: closure_5.body, children: formatToPlainStringResult };
  const tmp6 = common_AlertDefault;
  obj5.source = _modDef18545;
  obj5.style = closure_5.image;
  items[2] = React3(FastImageDefault, obj5);
  obj2.children = items;
  return React4(tmp6, obj2);
});