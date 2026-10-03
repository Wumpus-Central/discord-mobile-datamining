// discord_app/modules/devtools/native/components/screens/performance/ScrollBenchmark.tsx
import c from "../../../../../../../_runtime/00576_c.js";
import TableRow from "../../../../../../design/components/TableRow/native/TableRow.native.tsx";
import useFrameMonitorDefault from "useFrameMonitor.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/performance/ScrollBenchmark.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (subLabel) => {
      const cResult = c.c(5);
      subLabel = subLabel.subLabel;
      let str = "Records frame times while you scroll the content below.";
      if (undefined !== subLabel) {
        str = subLabel;
      }
      const tmp4 = useFrameMonitorDefault(subLabel.onResult);
      ({ monitoring, start } = tmp4);
      let str2 = "Start scroll monitor";
      if (monitoring) {
        str2 = "Stop scroll monitor";
      }
      let str3;
      if (monitoring) {
        str3 = "danger";
      }
      if (monitoring) {
        start = tmp4.stop;
      }
      if (cResult[0] === str) {
        if (cResult[1] === str2) {
          if (cResult[2] === str3) {
            if (cResult[3] === start) {
              let tmp5 = cResult[4];
            }
            return tmp5;
          }
        }
      }
      const tmp6 = jsx(TableRow.TableRow, { label: str2, subLabel: str, variant: str3, arrow: true, onPress: start });
      cResult[0] = str;
      cResult[1] = str2;
      cResult[2] = str3;
      cResult[3] = start;
      cResult[4] = tmp6;
      tmp5 = tmp6;
    }
  : (subLabel) => {
      let str = subLabel.subLabel;
      if (str === undefined) {
        str = "Records frame times while you scroll the content below.";
      }
      const tmp = useFrameMonitorDefault(subLabel.onResult);
      ({ monitoring, start } = tmp);
      let str2 = "Start scroll monitor";
      if (monitoring) {
        str2 = "Stop scroll monitor";
      }
      const obj = { label: str2, subLabel: str, variant: null, arrow: true, onPress: null };
      let str3;
      if (monitoring) {
        str3 = "danger";
      }
      obj.variant = str3;
      if (monitoring) {
        start = tmp.stop;
      }
      obj.onPress = start;
      return jsx(TableRow.TableRow, { label: str2, subLabel: str, variant: null, arrow: true, onPress: null });
    };
