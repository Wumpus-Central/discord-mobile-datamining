// === Module 16435: ForYouReadSectionHeader ===

// Module 16435 (ForYouReadSectionHeader)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c2, StyleSheet } = get_ActivityIndicator);
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { container: null, textHeader: null };
createStyles = { borderTopWidth: StyleSheet.hairlineWidth, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, marginVertical: 8, paddingHorizontal: 24 };
createStyles.container = createStyles;
createStyles.textHeader = { color: nativeDefault.colors.TEXT_SUBTLE, marginTop: 20 };
let closure_4 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/notification_center/native/ForYouReadSectionHeader.tsx");

export const ForYouReadSectionHeader = function ForYouReadSectionHeader() {
  const tmp = closure_4();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.textHeader, variant: "text-sm/semibold", children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t.hftC1K);
  obj.children = jsx(Text_Text.Text, { style: tmp.textHeader, variant: "text-sm/semibold", children: null });
  return <React2 style={tmp.textHeader} variant="text-sm/semibold">{null}</React2>;
};