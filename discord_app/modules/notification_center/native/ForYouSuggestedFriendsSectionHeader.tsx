// === Module 16438: ForYouSuggestedFriendsSectionHeader ===

// Module 16438 (ForYouSuggestedFriendsSectionHeader)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { container: null, noDivider: null, text: null };
createStyles = { borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, marginTop: 12, marginBottom: 8, paddingHorizontal: 24, flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
createStyles.container = createStyles;
createStyles.noDivider = { borderTopWidth: 0, marginTop: 0 };
createStyles.text = { marginTop: nativeDefault.space.PX_16 };
let closure_4 = createStyles.createStyles(createStyles);
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
  let obj = { style: items, children: null };
  items[1] = noDivider;
  obj = { style: tmp.text, color: "text-muted", variant: "text-sm/semibold", children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t["1uAmCw"]);
  obj.children = jsx(Text_Text.Text, { style: tmp.text, color: "text-muted", variant: "text-sm/semibold", children: null });
  return <View style={tmp.text} color="text-muted" variant="text-sm/semibold">{null}</View>;
};