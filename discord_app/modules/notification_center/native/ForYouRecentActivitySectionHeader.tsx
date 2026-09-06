// === Module 16436: ForYouRecentActivitySectionHeader ===

// Module 16436 (ForYouRecentActivitySectionHeader)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { container: null, textHeader: null };
createStyles = { marginTop: nativeDefault.space.PX_8, marginBottom: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_24 };
createStyles.container = createStyles;
createStyles.textHeader = { marginTop: nativeDefault.space.PX_8 };
let closure_4 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/notification_center/native/ForYouRecentActivitySectionHeader.tsx");

export const ForYouRecentActivitySectionHeader = function ForYouRecentActivitySectionHeader() {
  const tmp = closure_4();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.textHeader, color: "text-muted", variant: "text-sm/semibold", accessibilityRole: "header", children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t.yM9Krm);
  obj.children = jsx(Text_Text.Text, { style: tmp.textHeader, color: "text-muted", variant: "text-sm/semibold", accessibilityRole: "header", children: null });
  return <View style={tmp.textHeader} color="text-muted" variant="text-sm/semibold" accessibilityRole="header">{null}</View>;
};