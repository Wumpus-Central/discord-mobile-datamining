// discord_app/modules/devtools/native/components/screens/performance/ScrollBenchmark.tsx
import TableRow from "../../../../../../design/components/TableRow/native/TableRow.native.tsx";
import useFrameMonitorDefault from "useFrameMonitor.tsx";
import noop from "../../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/devtools/native/components/screens/performance/ScrollBenchmark.tsx");

export default function ScrollBenchmark(subLabel) {
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
}
