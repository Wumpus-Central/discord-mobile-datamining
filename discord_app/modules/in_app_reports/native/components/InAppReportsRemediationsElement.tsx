// discord_app/modules/in_app_reports/native/components/InAppReportsRemediationsElement.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(4757);
let obj2 = { container: { paddingHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_32 } };
let closure_4 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/in_app_reports/native/components/InAppReportsRemediationsElement.tsx",
);

export default function RemediationsElement(children) {
  const obj = { style: closure_4().container, children: null };
  const obj2 = { title: null, hasIcons: true, children: null };
  const intl = util.intl;
  obj2.title = intl.string(util.t["k+QA9N"]);
  obj2.children = children.children;
  obj.children = jsx(TableRowGroup.TableRowGroup, { title: null, hasIcons: true, children: null });
  return <View style={closure_4().container}>{null}</View>;
}
