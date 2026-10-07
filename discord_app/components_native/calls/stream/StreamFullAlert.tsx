// === Module 18095: StreamFullAlert ===

// Module 18095 (StreamFullAlert)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 4892 */;
import common_AlertDefault from "common/Alert" /* 5790 */;
import AVError from "AVError" /* 9131 */;
import _modDef18096 from "module_18096" /* 18096 */;
import noop from "module_19" /* 19 */;

require = fn;
const Image = fn(17).Image;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let closure_6 = { image: { alignSelf: "center", marginTop: 32 }, body: { marginTop: 16 } };
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("components_native/calls/stream/StreamFullAlert.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
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
    const obj3 = { variant: "text-md/normal", style: closure_6.body, children: null };
    const intl3 = util.intl;
    obj3.children = intl3.string(util.t.VVZDBL);
    const tmp16 = React4(Text_Text.Text, obj3);
    const obj4 = { variant: "text-md/normal", selectable: true, color: "text-muted", style: closure_6.body, children: first };
    const tmp17 = React4(Text_Text.Text, obj4);
    const obj5 = { source: _modDef18096, style: closure_6.image };
    const tmp20 = React4(Image, obj5);
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
    const tmp28 = hasOwnProperty(common_AlertDefault, obj6);
    cResult[5] = arg0;
    cResult[6] = tmp28;
    let tmp21 = tmp28;
  } else {
    tmp21 = cResult[6];
  }
  return tmp21;
}) : ((arg0) => {
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
  const obj3 = { variant: "text-md/normal", style: closure_6.body, children: null };
  const intl3 = util.intl;
  obj3.children = intl3.string(util.t.VVZDBL);
  const items = [React4(Text_Text.Text, obj3), React4(Text_Text.Text, { variant: "text-md/normal", selectable: true, color: "text-muted", style: closure_6.body, children: formatToPlainStringResult }), ];
  const obj4 = { variant: "text-md/normal", selectable: true, color: "text-muted", style: closure_6.body, children: formatToPlainStringResult };
  const tmp6 = common_AlertDefault;
  items[2] = React4(Image, { source: _modDef18096, style: closure_6.image });
  obj2.children = items;
  return hasOwnProperty(tmp6, obj2);
});