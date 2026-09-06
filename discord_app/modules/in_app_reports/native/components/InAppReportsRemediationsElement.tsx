// discord_app/modules/in_app_reports/native/components/InAppReportsRemediationsElement.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { container: null };
createStyles = { paddingHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_32 };
createStyles.container = createStyles;
let closure_4 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/in_app_reports/native/components/InAppReportsRemediationsElement.tsx",
);

export default function RemediationsElement(children) {
  let obj = { style: closure_4().container, children: null };
  obj = { title: null, hasIcons: true, children: null };
  const intl = util.intl;
  obj.title = intl.string(util.t["k+QA9N"]);
  obj.children = children.children;
  obj.children = jsx(TableRowGroup.TableRowGroup, { title: null, hasIcons: true, children: null });
  return (
    <View title={null} hasIcons>
      {null}
    </View>
  );
}
