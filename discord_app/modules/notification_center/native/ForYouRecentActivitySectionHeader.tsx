// === Module 16800: ForYouRecentActivitySectionHeader ===

// Module 16800 (ForYouRecentActivitySectionHeader)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 5087 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5091);
let obj2 = { container: { marginTop: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_24 }, textHeader: null };
const obj3 = { marginTop: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_24 };
obj2.textHeader = { marginTop: nativeDefault.space.PX_8 };
let closure_4 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const obj4 = { marginTop: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/notification_center/native/ForYouRecentActivitySectionHeader.tsx");

export const ForYouRecentActivitySectionHeader = ReactCompilerGating.isReactCompilerEnabled() ? (function ForYouRecentActivitySectionHeader() {
  const cResult = c.c(6);
  const tmp4 = closure_4();
  ({ container, textHeader } = tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = util.intl;
    const stringResult = intl.string(util.t.yM9Krm);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.textHeader) {
    const obj2 = { style: textHeader, color: "text-muted", variant: "text-sm/semibold", accessibilityRole: "header", children: first };
    const tmp9 = jsx(Text_Text.Text, { style: textHeader, color: "text-muted", variant: "text-sm/semibold", accessibilityRole: "header", children: first });
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
  const tmp11 = <View style={container}>{tmp7}</View>;
  cResult[3] = tmp4.container;
  cResult[4] = tmp7;
  cResult[5] = tmp11;
  tmp10 = tmp11;
}) : (function ForYouRecentActivitySectionHeader() {
  const tmp = closure_4();
  const obj = { style: tmp.container, children: null };
  const obj2 = { style: tmp.textHeader, color: "text-muted", variant: "text-sm/semibold", accessibilityRole: "header", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.yM9Krm);
  obj.children = jsx(Text_Text.Text, { style: tmp.textHeader, color: "text-muted", variant: "text-sm/semibold", accessibilityRole: "header", children: null });
  return <View style={tmp.container}>{null}</View>;
});