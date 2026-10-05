// === Module 11718: ViewAllRow ===

// Module 11718 (ViewAllRow)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl3 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import TableRow2 from "TableRow" /* 5993 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({ expandCTALabelContainer: { alignItems: "center" } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let onPress;
  let title;
  let tmp11;
  let tmp5;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(9);
  ({ onPress, title } = arg0);
  const tmp4 = closure_4();
  if (cResult[0] !== title) {
    let formatToPlainStringResult;
    if (null != title) {
      const intl = intl3.intl;
      const obj2 = { title };
      formatToPlainStringResult = intl.formatToPlainString(intl3.t["bj/2kV"], obj2);
    }
    cResult[0] = title;
    cResult[1] = formatToPlainStringResult;
    tmp5 = formatToPlainStringResult;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const Text = Text_Text.Text;
    const intl2 = intl3.intl;
    const tmp10 = <Text color="text-brand" variant="text-md/semibold">{intl2.format(intl3.t.gVw57p, {})}</Text>;
    cResult[2] = tmp10;
    tmp8 = tmp10;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] !== tmp4.expandCTALabelContainer) {
    const tmp14 = <View style={tmp4.expandCTALabelContainer}>{tmp8}</View>;
    cResult[3] = tmp4.expandCTALabelContainer;
    cResult[4] = tmp14;
    tmp11 = tmp14;
  } else {
    tmp11 = cResult[4];
  }
  if (cResult[5] === onPress) {
    if (cResult[6] === tmp5) {
      let tmp15;
      if (cResult[7] === tmp11) {
        tmp15 = cResult[8];
      }
      return tmp15;
    }
  }
  const tmp16 = jsx(TableRow2.TableRow, { accessibilityLabel: tmp5, label: tmp11, onPress, end: true });
  cResult[5] = onPress;
  cResult[6] = tmp5;
  cResult[7] = tmp11;
  cResult[8] = tmp16;
  tmp15 = tmp16;
}) : ((title) => {
  let intl2;
  title = title.title;
  const onPress = title.onPress;
  let formatToPlainStringResult;
  const tmp = closure_4();
  const TableRow = TableRow2.TableRow;
  if (null != title) {
    const intl = intl3.intl;
    const obj = { title };
    formatToPlainStringResult = intl.formatToPlainString(intl3.t["bj/2kV"], obj);
  }
  ({ color: "text-brand", variant: "text-md/semibold", children: intl2.format(intl3.t.gVw57p, {}) });
  const Text = Text_Text.Text;
  intl2 = intl3.intl;
  return <TableRow accessibilityLabel={formatToPlainStringResult} label={null} onPress={onPress} end />;
});
const result = size.fileFinishedImporting("modules/app_launcher/native/base_components/ViewAllRow.tsx");

export default tmp3;