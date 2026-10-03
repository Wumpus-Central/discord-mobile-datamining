// === Module 16371: ForYouReadSectionHeader ===

// Module 16371 (ForYouReadSectionHeader)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c2, StyleSheet } = get_ActivityIndicator);
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj2 = { container: { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, marginVertical: 8, paddingHorizontal: 24 }, textHeader: null };
const obj3 = { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, marginVertical: 8, paddingHorizontal: 24 };
obj2.textHeader = { color: nativeDefault.colors.TEXT_SUBTLE, marginTop: 20 };
let closure_4 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const obj4 = { color: nativeDefault.colors.TEXT_SUBTLE, marginTop: 20 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/notification_center/native/ForYouReadSectionHeader.tsx");

export const ForYouReadSectionHeader = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(6);
  const tmp4 = closure_4();
  ({ container, textHeader } = tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.hftC1K);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.textHeader) {
    const obj2 = { style: textHeader, variant: "text-sm/semibold", children: first };
    const tmp9 = jsx(Text_Text.Text, { style: textHeader, variant: "text-sm/semibold", children: first });
    cResult[1] = tmp4.textHeader;
    cResult[2] = tmp9;
    let tmp7 = tmp9;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === tmp4.container) {
    if (cResult[4] === tmp7) {
      let tmp10 = cResult[5];
    }
    return tmp10;
  }
  const tmp11 = <React2 style={container}>{tmp7}</React2>;
  cResult[3] = tmp4.container;
  cResult[4] = tmp7;
  cResult[5] = tmp11;
  tmp10 = tmp11;
}) : (() => {
  const tmp = closure_4();
  const obj = { style: tmp.container, children: null };
  const obj2 = { style: tmp.textHeader, variant: "text-sm/semibold", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.hftC1K);
  obj.children = jsx(Text_Text.Text, { style: tmp.textHeader, variant: "text-sm/semibold", children: null });
  return <React2 style={tmp.container}>{null}</React2>;
});