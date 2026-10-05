// === Module 13937: LiveTag ===

// Module 13937 (LiveTag)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj2 = { tag: { paddingHorizontal: 6, paddingVertical: 2, borderRadius: nativeDefault.radii.round, overflow: "hidden", justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BADGE_NOTIFICATION_BACKGROUND }, tagText: null };
const obj4 = { textAlign: "center", color: nativeDefault.unsafe_rawColors.WHITE, marginTop: null };
const PlatformUtils = fn(1369);
let num = 0;
if (PlatformUtils.isAndroid()) {
  num = -2;
}
obj4.marginTop = num;
obj2.tagText = obj4;
let closure_4 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { paddingHorizontal: 6, paddingVertical: 2, borderRadius: nativeDefault.radii.round, overflow: "hidden", justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BADGE_NOTIFICATION_BACKGROUND };
const size = fn(2);
const result = size.fileFinishedImporting("design/void/LiveTag/native/LiveTag.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(13);
  ({ style, textStyle, allowFontScaling } = arg0);
  const tmp4 = closure_4();
  if (cResult[0] === style) {
    if (cResult[1] === tmp4.tag) {
      let tmp5 = cResult[2];
    }
    if (cResult[3] === tmp4.tagText) {
      if (cResult[4] === textStyle) {
        let tmp6 = cResult[5];
      }
      const _Symbol = Symbol;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const formatted = intl.string(util.t.dI3q4h).toUpperCase();
        cResult[6] = formatted;
        let tmp8 = formatted;
        const str2 = intl.string(util.t.dI3q4h);
      } else {
        tmp8 = cResult[6];
      }
      if (cResult[7] === allowFontScaling) {
        if (cResult[8] === tmp6) {
          let tmp10 = cResult[9];
        }
        if (cResult[10] === tmp5) {
          if (cResult[11] === tmp10) {
            let tmp13 = cResult[12];
          }
          return tmp13;
        }
        const obj2 = { style: tmp5, children: tmp10 };
        const tmp16 = <View style={tmp5}>{tmp10}</View>;
        cResult[10] = tmp5;
        cResult[11] = tmp10;
        cResult[12] = tmp16;
        tmp13 = tmp16;
      }
      const obj3 = { variant: "text-xs/bold", style: tmp6, lineClamp: 1, allowFontScaling, children: tmp8 };
      const tmp12 = jsx(Text_Text.Text, { variant: "text-xs/bold", style: tmp6, lineClamp: 1, allowFontScaling, children: tmp8 });
      cResult[7] = allowFontScaling;
      cResult[8] = tmp6;
      cResult[9] = tmp12;
      tmp10 = tmp12;
    }
    const items = [tmp4.tagText, textStyle];
    cResult[3] = tmp4.tagText;
    cResult[4] = textStyle;
    cResult[5] = items;
    tmp6 = items;
  }
  const items1 = [tmp4.tag, style];
  cResult[0] = style;
  cResult[1] = tmp4.tag;
  cResult[2] = items1;
  tmp5 = items1;
}) : ((arg0) => {
  ({ style, textStyle, allowFontScaling } = arg0);
  const tmp = closure_4();
  const obj = { style: null, children: null };
  const items = [tmp.tag, style];
  obj.style = items;
  const obj2 = { variant: "text-xs/bold", style: null, lineClamp: 1, allowFontScaling, children: null };
  const items1 = [tmp.tagText, textStyle];
  obj2.style = items1;
  const intl = util.intl;
  obj2.children = intl.string(util.t.dI3q4h).toUpperCase();
  obj.children = jsx(Text_Text.Text, { variant: "text-xs/bold", style: null, lineClamp: 1, allowFontScaling, children: null });
  return <View style={null}>{null}</View>;
});