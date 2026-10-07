// === Module 11974: ListSelectionItem ===

// Module 11974 (ListSelectionItem)
import c from "c" /* 576 */;
import TableRow from "TableRow" /* 6000 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/create_guild/native/components/ListSelectionItem.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(6);
  ({ Icon, message, onPress } = arg0);
  if (cResult[0] !== Icon) {
    const tmp6 = <Icon size={24} />;
    cResult[0] = Icon;
    cResult[1] = tmp6;
    let tmp4 = tmp6;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === message) {
    if (cResult[3] === onPress) {
      if (cResult[4] === tmp4) {
        let tmp7 = cResult[5];
      }
      return tmp7;
    }
  }
  const tmp8 = jsx(TableRow.TableRow, { onPress, label: message, icon: tmp4 });
  cResult[2] = message;
  cResult[3] = onPress;
  cResult[4] = tmp4;
  cResult[5] = tmp8;
  tmp7 = tmp8;
}) : ((arg0) => {
  ({ Icon, message, onPress } = arg0);
  return jsx(TableRow.TableRow, { onPress, label: message, icon: <Icon size={24} /> });
});