// discord_app/modules/devtools/native/components/screens/performance/ScrollBenchmark.tsx
import Fragment from "../../../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../../../_runtime/00576_react.js";
import TableRow2 from "../../../../../../design/components/TableRow/native/TableRow.native.tsx";
import useFrameMonitorDefault from "useFrameMonitor.tsx";
import react from "../../../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../../_runtime/metro/00002__.js";

let subLabel;

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (subLabel) => {
      let monitoring;
      let start;
      const obj = react2;
      const cResult = obj.c(5);
      subLabel = subLabel.subLabel;
      let str = "Records frame times while you scroll the content below.";
      const onResult = subLabel.onResult;
      if (undefined !== subLabel) {
        str = subLabel;
      }
      const tmp4 = useFrameMonitorDefault(onResult);
      ({ monitoring, start } = tmp4);
      let str2 = "Start scroll monitor";
      const stop = tmp4.stop;
      if (monitoring) {
        str2 = "Stop scroll monitor";
      }
      let str3;
      if (monitoring) {
        str3 = "danger";
      }
      if (monitoring) {
        start = stop;
      }
      if (cResult[0] === str) {
        if (cResult[1] === str2) {
          if (cResult[2] === str3) {
            let tmp5;
            if (cResult[3] === start) {
              tmp5 = cResult[4];
            }
            return tmp5;
          }
        }
      }
      const tmp6 = jsx(TableRow2.TableRow, { label: str2, subLabel: str, variant: str3, arrow: true, onPress: start });
      cResult[0] = str;
      cResult[1] = str2;
      cResult[2] = str3;
      cResult[3] = start;
      cResult[4] = tmp6;
      tmp5 = tmp6;
    }
  : (subLabel) => {
      let monitoring;
      let start;
      let str = subLabel.subLabel;
      const onResult = subLabel.onResult;
      if (str === undefined) {
        str = "Records frame times while you scroll the content below.";
      }
      const tmp = useFrameMonitorDefault(onResult);
      ({ monitoring, start } = tmp);
      const stop = tmp.stop;
      let str2 = "Start scroll monitor";
      const TableRow = TableRow2.TableRow;
      if (monitoring) {
        str2 = "Stop scroll monitor";
      }
      let str3;
      if (monitoring) {
        str3 = "danger";
      }
      if (monitoring) {
        start = stop;
      }
      return <TableRow label={str2} subLabel={str} variant={str3} arrow onPress={start} />;
    };
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/performance/ScrollBenchmark.tsx");

export default tmp3;
