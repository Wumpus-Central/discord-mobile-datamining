// === Module 16841: ForYouSuggestedFriendsSectionHeader ===

// Module 16841 (ForYouSuggestedFriendsSectionHeader)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4823 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4827);
let obj2 = { container: { borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, marginTop: 12, marginBottom: 8, paddingHorizontal: 24, flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, noDivider: { borderTopWidth: 0, marginTop: 0 }, text: null };
const obj3 = { borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, marginTop: 12, marginBottom: 8, paddingHorizontal: 24, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
obj2.text = { marginTop: nativeDefault.space.PX_16 };
let closure_4 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/notification_center/native/ForYouSuggestedFriendsSectionHeader.tsx");

export default function ForYouSuggestedFriendsSectionHeader(showDivider) {
  showDivider = showDivider.showDivider;
  const tmp = closure_4();
  const items = [tmp.container, ];
  let noDivider = !showDivider;
  if (!showDivider) {
    noDivider = tmp.noDivider;
  }
  const obj = { style: items, children: null };
  items[1] = noDivider;
  const obj2 = { style: tmp.text, color: "text-muted", variant: "text-sm/semibold", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t["1uAmCw"]);
  obj.children = jsx(Text_Text.Text, { style: tmp.text, color: "text-muted", variant: "text-sm/semibold", children: null });
  return <View style={items}>{null}</View>;
};