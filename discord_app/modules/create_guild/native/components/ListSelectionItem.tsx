// discord_app/modules/create_guild/native/components/ListSelectionItem.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import TableRow2 from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
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
    }
  : (arg0) => {
      let Icon;
      let message;
      let onPress;
      ({ Icon, message, onPress } = arg0);
      const TableRow = TableRow2.TableRow;
      return <TableRow onPress={onPress} label={message} icon={null} />;
    };
const result = size.fileFinishedImporting("modules/create_guild/native/components/ListSelectionItem.tsx");

export default tmp3;
