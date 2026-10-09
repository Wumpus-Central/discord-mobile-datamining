// === Module 12345: NsfwGateChat ===

// Module 12345 (NsfwGateChat)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 5087 */;
import FastImageDefault from "FastImage" /* 6163 */;
import _modDef12346 from "module_12346" /* 12346 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, StyleSheet } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty, Fragment: metroRequire } = jsxProd);
const createStyles = fn(5091);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, alignItems: "center", justifyContent: "center" }, border: null, description: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, alignItems: "center", justifyContent: "center" };
obj2.border = { height: StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
obj2.description = { marginTop: 16, textAlign: "center" };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj4 = { height: StyleSheet.hairlineWidth, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST };
const size = fn(2);
const result = size.fileFinishedImporting("modules/age_gate/native/components/NsfwGateChat.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function NsfwGateChat() {
  const cResult = c.c(12);
  const tmp4 = closure_7();
  if (cResult[0] !== tmp4.border) {
    const obj2 = { style: tmp4.border };
    const tmp8 = React4(React3, obj2);
    cResult[0] = tmp4.border;
    cResult[1] = tmp8;
    let tmp5 = tmp8;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { source: _modDef12346 };
    const tmp13 = React4(FastImageDefault, obj3);
    cResult[2] = tmp13;
    let tmp9 = tmp13;
  } else {
    tmp9 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.W4Qyxr);
    cResult[3] = stringResult;
    let tmp14 = stringResult;
  } else {
    tmp14 = cResult[3];
  }
  if (cResult[4] !== tmp4.description) {
    const obj4 = { style: tmp4.description, variant: "text-md/medium", color: "text-muted", children: tmp14 };
    const tmp18 = React4(Text_Text.Text, obj4);
    cResult[4] = tmp4.description;
    cResult[5] = tmp18;
    let tmp16 = tmp18;
  } else {
    tmp16 = cResult[5];
  }
  if (cResult[6] === tmp4.container) {
    if (cResult[7] === tmp16) {
      let tmp19 = cResult[8];
    }
    if (cResult[9] === tmp5) {
      if (cResult[10] === tmp19) {
        let tmp21 = cResult[11];
      }
      return tmp21;
    }
    const obj5 = { children: null };
    const items = [tmp5, tmp19];
    obj5.children = items;
    const tmp24 = hasOwnProperty(timestampProducer, obj5);
    cResult[9] = tmp5;
    cResult[10] = tmp19;
    cResult[11] = tmp24;
    tmp21 = tmp24;
  }
  const obj6 = { style: tmp4.container, children: null };
  const items1 = [tmp9, tmp16];
  obj6.children = items1;
  const tmp20 = hasOwnProperty(React3, obj6);
  cResult[6] = tmp4.container;
  cResult[7] = tmp16;
  cResult[8] = tmp20;
  tmp19 = tmp20;
}) : (function NsfwGateChat() {
  const tmp = closure_7();
  const obj = { children: null };
  const items = [React4(React3, { style: tmp.border }), ];
  const obj3 = { style: tmp.container, children: null };
  const obj4 = { source: _modDef12346 };
  const items1 = [React4(FastImageDefault, obj4), ];
  const obj5 = { style: tmp.description, variant: "text-md/medium", color: "text-muted", children: null };
  const intl = util.intl;
  obj5.children = intl.string(util.t.W4Qyxr);
  items1[1] = React4(Text_Text.Text, obj5);
  obj3.children = items1;
  items[1] = hasOwnProperty(React3, obj3);
  obj.children = items;
  return hasOwnProperty(timestampProducer, obj);
});