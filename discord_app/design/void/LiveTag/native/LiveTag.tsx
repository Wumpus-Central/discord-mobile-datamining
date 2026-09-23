// === Module 14477: LiveTag ===

// Module 14477 (LiveTag)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4823 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4827);
let obj2 = { tag: { paddingHorizontal: 6, paddingVertical: 2, borderRadius: nativeDefault.radii.round, overflow: "hidden", justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BADGE_NOTIFICATION_BACKGROUND }, tagText: null };
const obj4 = { textAlign: "center", color: nativeDefault.unsafe_rawColors.WHITE, marginTop: null };
const PlatformUtils = fn(1364);
let num = 0;
if (PlatformUtils.isAndroid()) {
  num = -2;
}
obj4.marginTop = num;
obj2.tagText = obj4;
let closure_4 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("design/void/LiveTag/native/LiveTag.tsx");

export default function LiveTag(arg0) {
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
};