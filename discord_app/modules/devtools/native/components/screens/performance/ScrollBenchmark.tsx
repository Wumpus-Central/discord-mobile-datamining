import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("useFrameMonitor").fileFinishedImporting("modules/devtools/native/components/screens/performance/ScrollBenchmark.tsx");

export default function ScrollBenchmark(subLabel) {
  let monitoring;
  let start;
  let str = subLabel.subLabel;
  if (str === undefined) {
    str = "Records frame times while you scroll the content below.";
  }
  const tmp = importDefault(14948)(subLabel.onResult);
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
  obj[2] = str3;
  if (monitoring) {
    start = tmp.stop;
  }
  obj[4] = start;
  return jsx(require(5315) /* TableRowInner */.TableRow, { label: str2, subLabel: str, variant: null, arrow: true, onPress: null });
};