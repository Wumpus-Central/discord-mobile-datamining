// === Module 11960: ListSelectionItem ===

// Module 11960 (ListSelectionItem)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import TableRow2 from "TableRow" /* 5993 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let Icon;
  let message;
  let onPress;
  let tmp4;
  const obj = react2;
  const cResult = obj.c(6);
  ({ Icon, message, onPress } = arg0);
  if (cResult[0] !== Icon) {
    const tmp6 = <Icon size={24} />;
    cResult[0] = Icon;
    cResult[1] = tmp6;
    tmp4 = tmp6;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === message) {
    if (cResult[3] === onPress) {
      let tmp7;
      if (cResult[4] === tmp4) {
        tmp7 = cResult[5];
      }
      return tmp7;
    }
  }
  const tmp8 = jsx(TableRow2.TableRow, { onPress, label: message, icon: tmp4 });
  cResult[2] = message;
  cResult[3] = onPress;
  cResult[4] = tmp4;
  cResult[5] = tmp8;
  tmp7 = tmp8;
}) : ((arg0) => {
  let Icon;
  let message;
  let onPress;
  ({ Icon, message, onPress } = arg0);
  const TableRow = TableRow2.TableRow;
  return <TableRow onPress={onPress} label={message} icon={null} />;
});
const result = size.fileFinishedImporting("modules/create_guild/native/components/ListSelectionItem.tsx");

export default tmp3;