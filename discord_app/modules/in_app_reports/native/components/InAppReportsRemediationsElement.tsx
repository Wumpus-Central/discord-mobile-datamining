// === Module 13289: InAppReportsRemediationsElement ===

// Module 13289 (InAppReportsRemediationsElement)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import TableRowGroup from "TableRowGroup" /* 5990 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4827);
let obj2 = { container: { paddingHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_32 } };
let closure_4 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/in_app_reports/native/components/InAppReportsRemediationsElement.tsx");

export default function RemediationsElement(children) {
  const obj = { style: closure_4().container, children: null };
  const obj2 = { title: null, hasIcons: true, children: null };
  const intl = util.intl;
  obj2.title = intl.string(util.t["k+QA9N"]);
  obj2.children = children.children;
  obj.children = jsx(TableRowGroup.TableRowGroup, { title: null, hasIcons: true, children: null });
  return <View style={closure_4().container}>{null}</View>;
};