// === Module 12094: ViewAllRow ===

// Module 12094 (ViewAllRow)
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import TableRow from "TableRow" /* 5605 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_4 = createStyles.createStyles({ expandCTALabelContainer: { alignItems: "center" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/base_components/ViewAllRow.tsx");

export default function ViewAllRow(title) {
  title = title.title;
  let formatToPlainStringResult;
  if (null != title) {
    const intl = tmp3(1114).intl;
    let obj = { title };
    formatToPlainStringResult = intl.formatToPlainString(tmp3(1114).t["bj/2kV"], obj);
  }
  obj = { accessibilityLabel: formatToPlainStringResult, label: null, onPress: null, end: true };
  obj = { style: closure_4().expandCTALabelContainer, children: null };
  const obj1 = { color: "text-brand", variant: "text-md/semibold", children: null };
  const intl2 = tmp3(1114).intl;
  obj1.children = intl2.format(util.t.gVw57p, {});
  obj.children = jsx(Text_Text.Text, { color: "text-brand", variant: "text-md/semibold", children: null });
  obj.label = <View style={closure_4().expandCTALabelContainer}>{null}</View>;
  obj.onPress = title.onPress;
  return jsx(TableRow.TableRow, { style: closure_4().expandCTALabelContainer, children: null });
};