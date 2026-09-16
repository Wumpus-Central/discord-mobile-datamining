// === Module 12236: ViewAllRow ===

// Module 12236 (ViewAllRow)
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4634 */;
import TableRow from "TableRow" /* 5691 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4638);
let closure_4 = createStyles.createStyles({ expandCTALabelContainer: { alignItems: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/base_components/ViewAllRow.tsx");

export default function ViewAllRow(title) {
  title = title.title;
  let formatToPlainStringResult;
  if (null != title) {
    const intl = util.intl;
    const obj = { title };
    formatToPlainStringResult = intl.formatToPlainString(util.t["bj/2kV"], obj);
  }
  const obj2 = { accessibilityLabel: formatToPlainStringResult, label: null, onPress: null, end: true };
  const obj3 = { style: closure_4().expandCTALabelContainer, children: null };
  const obj4 = { color: "text-brand", variant: "text-md/semibold", children: null };
  const intl2 = util.intl;
  obj4.children = intl2.format(util.t.gVw57p, {});
  obj3.children = jsx(Text_Text.Text, { color: "text-brand", variant: "text-md/semibold", children: null });
  obj2.label = <View style={closure_4().expandCTALabelContainer}>{null}</View>;
  obj2.onPress = title.onPress;
  return jsx(TableRow.TableRow, { accessibilityLabel: formatToPlainStringResult, label: null, onPress: null, end: true });
};